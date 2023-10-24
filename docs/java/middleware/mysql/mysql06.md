---
"title": "MySQL中的索引"
category:
  - "MySQL"
tag:
  - "数据库"
---

> 下面所说的索引，都是在InnoDB存储引擎下来说的。

## 索引分类

- 聚簇索引（聚集索引、一级索引、主键索引）
  - InnoDB会自动为每一个表都创建一个聚簇索引，B+树的叶子结点为数据信息；
- 非聚簇索引（二级索引、辅助索引、单列索引、组合索引）
- 覆盖索引，不需要回表
- 索引下推
- 数据查找过程是页间的二分查找和数据行之间的二分查找；
- 保存数据时都会出现页分裂的现象；
- 二级索引除了覆盖索引外，都涉及到回表操作；

### 按磁盘存储分类

- 聚簇索引，也称主键索引，B+树上叶子节点保存的是完整的用户记录
- 二级索引，也称辅助索引，B+树上叶子节点保存的是主键值，查询时一般都需要回表，如果查询的数据就在二级索引里面，就不需要回表，这个过程叫做覆盖索引；


### 按照字段特性进行分类

- 主键索引： 建立在主键字段上的索引，通常在创建表的时候一起创建，一张表最多只有一个主键索引，主键索引不能有空值；
- 唯一索引： 建立在unique约束的字段上的索引，索引的列值必须唯一，允许有空值，一张表中可以有多个唯一索引；
- 普通索引： 建立在普通字段上的索引，既不要求字段为索引，也不要求字段为unique字段；
- 前缀索引： 对字符类型的字段的前几个字符建立的索引；
  - CREATE TABLE table_name( column_list, INDEX(column_name(length)) ); 
  - CREATE INDEX index_name ON table_name(column_name(length)); 

### 按照索引字段个数分类

- 单列索引
- 联合索引
  - 根据联合索引的B+树上数据查询的过程可知，遵循最左匹配原则，联合索引的最左匹配原则，在遇到范围查询（如 >、<）的时候，就会停止匹配，也就是范围查询的字段可以用到联合索引，但是在范围查询字段的后面的字段无法用到联合索引。注意，对于 >=、<=、BETWEEN、like 前缀匹配的范围查询，并不会停止匹配；
  - 可以在联合索引遍历过程中，对联合索引中包含的字段先做判断，直接过滤掉不满足条件的记录，减少回表次数。
  - 建立联合索引时，要把区分度大的字段排在前面，这样区分度大的字段越有可能被更多的 SQL 使用到。
  - 要利用索引的有序性，在 status 和 create_time 列建立联合索引，这样根据 status 筛选后的数据就是按照 create_time 排好序的，避免在文件排序，提高了查询效率


### 什么时候适用索引？

- 字段有唯一性限制的，比如商品编码；
- 经常用于 WHERE 查询条件的字段，这样能够提高整个表的查询速度，如果查询条件不是一个字段，可以建立联合索引。
- 经常用于 GROUP BY 和 ORDER BY 的字段，这样在查询的时候就不需要再去做一次排序了，因为我们都已经知道了建立索引之后在 B+Tree 中的记录都是排序好的。

### 什么时候不需要创建索引？

- WHERE 条件，GROUP BY，ORDER BY 里用不到的字段，索引的价值是快速定位，如果起不到定位的字段通常是不需要创建索引的，因为索引是会占用物理空间的。
- 字段中存在大量重复数据，不需要创建索引，比如性别字段，只有男女，如果数据库表中，男女的记录分布均匀，那么无论搜索哪个值都可能得到一半的数据。在这些情况下，还不如不要索引，因为 MySQL 还有一个查询优化器，查询优化器发现某个值出现在表的数据行中的百分比很高的时候，它一般会忽略索引，进行全表扫描。
- 表数据太少的时候，不需要创建索引；
- 经常更新的字段不用创建索引，比如不要对电商项目的用户余额建立索引，因为索引字段频繁修改，由于要维护 B+Tree的有序性，那么就需要频繁的重建索引，这个过程是会影响数据库性能的。

### B+树的数据结构 

- 属于矮胖型的数据结构，层高不高，但是每一层保存的数据量却很大，通常4层的B+树，能保持上千万数据；
- 每一个节点，都是一个数据页，数据页里面的行数据是通过页内的页目录串起来的，整体看上去页内是一个单向链表；
- 数据页与数据页之间是双向链表；

### 维护索引的SQL

> alter tableName 
> create index on table 

### 索引失效场景

- 不遵循最左匹配
  - 联合索引中，筛选条件不遵循联合索引中字段的顺序；
  - 使用like时，使用了左模糊；
- 对索引字段使用了额外的操作
  - 对索引字段使用函数；
  - 对索引字段进行了表达式计算；
  - 对索引字段进行了隐式转换；【因为隐式转换实际上是cast函数】
- or中的判断条件中有不是索引的列；


### 索引最佳实践




<br /><br /><br />


<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />

