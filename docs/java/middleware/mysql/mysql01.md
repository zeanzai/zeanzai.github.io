---
title: "架构概览"
category:
  - "middleware"
tag:
  - "数据库"
---

## 总述

见首页。

## 架构大图 

![可插拔式MySQL逻辑架构图](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230605084426.png)

### 存储引擎层

MySQL 是支持可插拔式（类比排插和插头、U盘和主机）的存储引擎的。MySQL支持的存储引擎有很多，最常用的是 MyISM 和 InnoDB 。 MyISM 和 InnoDB 的区别如下： 

|   |  MyISM | InnoDB |
|---|---|---|
|事务支持和外键支持   | 不支持  | 支持 |
|锁机制   | 支持表锁，锁定整表  | 支持行锁，基于索引加锁实现行级锁 |
|索引类型   |  使用非聚集索引 |  使用聚集索引，即索引和数据记录一起存储|
|并发支持   |  使用表锁，任何写操作都会锁住整张表，写写并发和读写并发都是串行，可并发读，锁的粒度为表 | 使用行锁、并使用MVCC优化读写并发，读读、读写可并发，写写串行，锁的粒度为行|
|存储文件类型   | .frm表结构、.MYD数据文件、.MYI索引文件  | .frm表结构、.ibd数据文件 |
|适用场景   | 适合不需要事务支持或一致性要求不高，并发度低，读多写少的场景  | 与 MyISM 相反 |
|数据组织形式   | B+ 树索引的叶子节点保存数据的物理地址； | B+ 树索引的叶子节点保存数据本身； |

### Server层（5层及各自作用）

![丐版](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230605084007.png)

- 连接池： 管理线程池和权限控制；频繁创建连接会产生线程上下文切换及线程开关资源消耗，为了避免这两大问题，使用线程池，统一对外提供服务，复用连接，减少线程开关性能损耗及上下文切换的性能损耗；
- 查询缓存： 保存SQL与查询结果集之间的映射关系，使得首次查询后能够快速响应SQL结果；
- 分析器： 词法分析、语法分析
- 优化器： 执行计划生成、选择索引
- 执行器： 调用存储引擎API并接收返回存储引擎响应结果


## 一些名词

|| DDL | DML  |  DCL  |  TCL
|---|---|---|---|---|
|含义| 数据定义语言（Data Definition Language，DDL）|数据操纵语言（Data Manipulation Language, DML）|数据控制语言 (Data Control Language, DCL) |事务控制语言 (Transaction Control Language, TCL) |
|功能|定义数据库对象|访问数据|控制用户的访问权限|管理数据库中的事务|
|核心指令|CREATE、ALTER、DROP| INSERT、UPDATE、DELETE、SELECT|GRANT、REVOKE|COMMIT、ROLLBACK|


## 重要但不常用SQL

::: tip 
常用SQL，如CRUD，这里就不再赘述。只写一些重要但是不常用的一些SQL。
:::

- DISTINCT 用于返回唯一不同的值。它作用于所有列，也就是说所有列的值都相同才算相同。
- LIMIT 限制返回的行数。可以有两个参数，第一个参数为起始行，从 0 开始；第二个参数为返回的总行数。
  - ASC ：升序（默认）
  - DESC ：降序
- LIKE
  - %
  - _
- JOIN
- UNION
- ORDER BY
- GROUP BY
- 索引操作
- 事务操作
- 权限控制

> https://juejin.cn/post/6844903790571700231

> Transact-SQL编程规范： https://bbs.csdn.net/topics/320152900




<br /><br /><br />

<img style="border:1px red solid; display:block; margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="微信公众号" />

