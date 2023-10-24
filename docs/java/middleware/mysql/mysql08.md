---
"title": "分库分表"
category:
  - "MySQL"
tag:
  - "数据库"
---

## 分布式系统的问题 



## 分库分表的做法

在业务急剧膨胀的过程中，关系型数据库很容易成为系统的瓶颈。


垂直拆分

水平拆分



分库分表演进过程

- 优化SQL
- 加缓存
- 多租户
- 多数据源
- 读写分离 
- 分库分表 

分库分表中间件

分库分表后的问题
- 分布式ID问题
- 聚合查询问题
- 事务问题处理
- 数据迁移问题
  - 分为停机迁移、不停机迁移
  - 迁移后需要对迁移后的数据进行校验

## 参考链接

- [实战彻底搞清分库分表（垂直分库，垂直分表，水平分库，水平分表）](https://cloud.tencent.com/developer/article/1819045)

---

<br /><br /><br />

<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />


