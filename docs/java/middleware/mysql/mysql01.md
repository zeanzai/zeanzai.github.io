---
title: "架构概览"
category:
  - "middleware"
tag:
  - "数据库"
---

## 总述

- 架构图（Server层和存储引擎层）
  - Server层组件及其各自作用、binlog数据组织形式、读写分离实现及其原理
  - 存储引擎层的分类，MyISM与InnoDB的区别（事务支持上、数据组织形式上）
- 特殊SQL的使用
  - join 等
- InnoDB存储引擎
  - 内存部分
    - Buffer Pool （包括 change pool）
    - Log Buffer （undo log 和 redo log）
  - 磁盘部分
    - 行结构，行与行之间的组织形式
    - 页结构，页与页之间的组织形式
    - 表空间 
    - 索引（分类、数据结构、失效原因、最佳实践）
  - 线程模型 
  - 事务及其特性、并发一致性问题、隔离级别及其实现 
    - 封锁协议 
    - MVCC 
- 一条SQL语句的执行过程
- 数据库基准测试、性能监控及调优、SQL调优
- 分库分表
  - 发展历程（SQL调优、加缓存、分库分表）
  - 分库分表 
    - 问题及解决方案（全局唯一id、查询类、数据迁移）


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
|数据组织形式   |  |  |

### Server层（5层及各自作用）

![丐版](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230605084007.png)

- 连接池： 管理线程池和权限控制；频繁创建连接会产生线程上下文切换及线程开关资源消耗，为了避免这两大问题，使用线程池，统一对外提供服务，复用连接，减少线程开关性能损耗及上下文切换的性能损耗；
- 查询缓存： 保存SQL与查询结果集之间的映射关系，使得首次查询后能够快速响应SQL结果；
- 分析器： 词法分析、语法分析
- 优化器： 执行计划生成、选择索引
- 执行器： 调用存储引擎API并接收返回存储引擎响应结果

<br /><br /><br />

<img style="border:1px red solid; display:block; margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="微信公众号" />

