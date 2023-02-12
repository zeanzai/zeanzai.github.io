---
title: "Java相关技术"
category:
  - "java"
tag:
  - "arch"
---

## Java相关技术

此项目中`包括但不限于`以下内容：

### 硬实力篇

- `计算机基础相关内容`，网络、设计模式、操作系统、DSA
- `Java相关内容`，源码层面（集合、JUC）
- `框架相关`
  - `Spring`（IOC原理、ID原理、Bean生命周期、组件架构图、MVC原理、隔离级别）；
  - `SpringCloud`（组件及其各自作用和原理、某些组件的源码）
  - `Mybatis`（使用方式、基本原理、缓存）
- `JVM相关`，运行期内存结构、对象是否应该回收判断标准、垃圾回收算法、垃圾回收器、配置参数、分析工具、双亲委派模型、class文件
- `MySQL相关`，索引、事务及其特性、并发一致性问题、隔离级别、锁、MVCC、各种日志、SQL优化、Explain执行计划、分库分表
- `Redis相关`，数据结构（种类、内部实现原理、应用场景、操作）、持久化机制、事务、集群、哨兵模式、cluster模式、七大经典问题（缓存击穿、缓存穿透、缓存雪崩、数据不一致、并发竞争、热点key、BigKey问题）、分布式锁、分布式限流、唯一ID、Redis调优（使用方式优化、内存优化）
- `MQ相关`，基本原理、应用场景、问题解决（消息重复、消息积压、消息丢失、顺序消费）、高可用
- `ZK相关内容`，数据存储、应用场景、与kafka的关系、相关面试题
- `分布式`
  - 分布式系统的问题
  - 基本理论（CAP、Base）
  - 一致性C，XA方案、Paxos算法、ZAB算法、Raft算法
  - 可用性A，评判标准、心跳检测、异地多活和同城双活、gossip、隔离、限流、负载均衡
  - 容错性P，日志复制、主备、互备、集群
  - CP与AP权衡问题，WARO 机制、Quorum 机制
  - 分布式缓存
  - 分布式事务（背景、实现方式、优缺点分析、具体实现【seata原理】）
  - 分布式锁（产生背景、实现方式、优缺点分析）
  - 分布式ID
  - 分布式消息
  - 分布式调度
  - 分布式服务
  - 分布式搜索
  - 分布式会话： 发展历程、各自过程中遇到的问题及解决方案、分布式会话实现方案
  - 高可用的理解
  - 高并发的理解
- `源码解读`
  - Java集合源码分析
  - Feign源码剖析
  - Redission源码剖析
- `项目实战`
  - 多级缓存
  - jvm调优
  - SQL优化
  - 秒杀
  - gate与oauth2.0
  - DDD项目架构
  - SpringCloud-Alibaba框架学习


### 软实力篇

- 代码评审规范
- 功能设计文档（需求反讲）
- 移交过程规范（开发分支合并到release分支）
- SQM扫描
- GIT提交过程规范
- 防重放处理机制
- SDLC安全设计评审
- DDD领域模型设计（展示层、应用层、领域层、基础设施层）



## 索引

## 推荐读物


### 优秀文章

主要记录平时自己看到的优秀的文章。

#### 网站

- [开发者头条](https://toutiao.io/posts/hot/90)
- [7、何时进行服务熔断、服务降级、服务限流?](https://blog.csdn.net/llianlianpay/article/details/79768890?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.no_search_link&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.no_search_link)
- [谈谈我对服务熔断、服务降级的理解](https://blog.csdn.net/guwei9111986/article/details/51649240/)
- [白话讲解领域驱动设计domain driven design (DDD)](https://www.bilibili.com/video/BV11u411176h?from=search&seid=2345559385647535770&spm_id_from=333.337.0.0)
- [DDD-经典四层架构应用](https://blog.csdn.net/whos2016/article/details/103927879?spm=1001.2101.3001.6650.7&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-7.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-7.pc_relevant_default&utm_relevant_index=10)
- [DDD架构设计微入门(将springmvc三层改造为ddd四层架构)](https://blog.csdn.net/qq_41833455/article/details/121693864)
- [从零开始学Docker（超详细讲解+案例分析）](https://blog.csdn.net/qq_45173404/article/details/114266009)
- [虾皮二面：什么是零拷贝?如何实现零拷贝？](https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247520212&idx=1&sn=2d7a19f884fb59e3e961c640c73b8364&chksm=cea1c01ff9d649097dccaef7ba99956250f3bb9998949009b93de0043c023b05259824b9c944&scene=132#wechat_redirect)
- [实例详解ZooKeeper ZAB协议、分布式锁与领导选举](https://dbaplus.cn/news-141-1875-1.html)
- [常见分布式全局唯一ID生成策略及算法的对比](https://gavinlee1.github.io/2017/06/28/%E5%B8%B8%E8%A7%81%E5%88%86%E5%B8%83%E5%BC%8F%E5%85%A8%E5%B1%80%E5%94%AF%E4%B8%80ID%E7%94%9F%E6%88%90%E7%AD%96%E7%95%A5%E5%8F%8A%E7%AE%97%E6%B3%95%E7%9A%84%E5%AF%B9%E6%AF%94/)

---

#### 基本功

> 包括但不限于：数据结构与算法、计算机组成、网络、操作系统、设计模式。

- [25 张图，一万字，拆解 Linux 网络包发送过程](https://mp.weixin.qq.com/s/TpLuyYoLp3x5ODCTI7HQ4w)
- [95% 的算法都是基于这 6 种算法思想](https://mp.weixin.qq.com/s/gC-w-4_FfGxtfQ79mtpbFg)： 介绍了常见6种算法思想的主要原理。
- [2W 字详解设计模式](https://mp.weixin.qq.com/s/Ji_mP7pO17ps5Mtku6Bq1Q)

---

#### 编码

- [面试官：如何提高程序的性能？](https://mp.weixin.qq.com/s/7DTdXghf5Iq9mhYcfbc9Eg) ： 这篇文章，我们循序渐进，从内存、磁盘I/O、网络I/O、CPU、缓存、架构、算法等多层次递进，串联起高性能开发十大必须掌握的核心技术。
- [Java并发编程：volatile关键字解析](https://www.cnblogs.com/dolphin0520/p/3920373.html)
- [Java 线程池原理及最佳实践（1.5W字，面试必问）](https://mp.weixin.qq.com/s/skBA9RwVBLnw8BYZhcUSrA)： 主要介绍了Java中线程池的工厂创建方式、简单创建方式、线程池的参数、线程池的运行原理、线程池结合SpringBoot项目进行使用。
- [如何设计一个牛逼的API接口](https://mp.weixin.qq.com/s?__biz=MzU5NjA3MjQ5MA==&mid=2247485324&idx=1&sn=b8329a86e1ac4abb540af191b471d613&chksm=fe6906c9c91e8fdf04fa83a0d2c1f9cc7aee054bc1fe061e254da238b3bd7dd2ae2b544efe63&token=1337536302&lang=zh_CN&scene=21#wechat_redirect) : 可以作为一个团队进行前后端分离时所采用的接口规范。
- [微服务权限终极解决方案，Spring Cloud Gateway + Oauth2 实现统一认证和鉴权！](https://mp.weixin.qq.com/s/npyZsa4p30PLULxjskxKSA) ： SpringCloud Gateway的实践方案。
- [腾讯面试：一条SQL语句执行得很慢的原因有哪些？---不看后悔系列](https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247485185&idx=1&sn=66ef08b4ab6af5757792223a83fc0d45&chksm=cea248caf9d5c1dc72ec8a281ec16aa3ec3e8066dbb252e27362438a26c33fbe842b0e0adf47&token=79317275&lang=zh_CN%23rd) : 提供了一种新奇的解答慢sql类型的面试题的思路。
- [后端程序员必备：书写高质量SQL的30条建议](https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247486461&idx=1&sn=60a22279196d084cc398936fe3b37772&chksm=cea24436f9d5cd20a4fa0e907590f3e700d7378b3f608d7b33bb52cfb96f503b7ccb65a1deed&token=1987003517&lang=zh_CN%23rd) : 总结了平时所常用到的sql优化的经验。
- [万恶的NPE差点让我半个月工资没了](https://mp.weixin.qq.com/s?__biz=MzIyMjQwMTgyNA==&mid=2247483953&idx=1&sn=eaeca46be508e58612cffebb3faf31e3&chksm=e82f467edf58cf68163a4462a388d252a12f235821ba64aad927bec9829c9f77f9d42c01735c&scene=21#wechat_redirect)
- [java采坑之路](https://mp.weixin.qq.com/s?__biz=MzIyMjQwMTgyNA==&mid=2247483822&idx=1&sn=b0ea9d81174051cf085b08826390a67c&chksm=e82f45e1df58ccf72a3b96039ce5fad12e795c327ebb050c3a707d9ff2e8f3c8ea4c2f482297&scene=21#wechat_redirect)

---

#### 分布式相关

> 包括但不限于： 分布式缓存、消息中间件、网关、配置中心、监控，分布式基础设施相关等。

- [慢谈 Redis 实现分布式锁 以及 Redisson 源码解析](http://crazyfzw.github.io/2019/08/24/distributed-locks-with-redis/)
- [Redis最佳实践：7个维度+43条使用规范，带你彻底玩转Redis | 附实践清单](https://mp.weixin.qq.com/s/ASwJ-woQQYArU-1jFv6L8A)
- [亿级系统的Redis缓存如何设计？？？](https://mp.weixin.qq.com/s/mc1zzjy5fEbXCxwhJoWA2Q)： 介绍了分布式缓存中的七大经典问题及其解决方案。
- [Redis只能做缓存？太out了！](https://mp.weixin.qq.com/s/tRBRuocOaJZh9Drk3WoipQ)： 介绍了redis的多种应用场景。
- [微服务下数据一致性的几种是实现方式](https://cloud.tencent.com/developer/article/1700245)
- [常见分布式全局唯一ID生成策略及算法的对比](https://gavinlee1.github.io/2017/06/28/%E5%B8%B8%E8%A7%81%E5%88%86%E5%B8%83%E5%BC%8F%E5%85%A8%E5%B1%80%E5%94%AF%E4%B8%80ID%E7%94%9F%E6%88%90%E7%AD%96%E7%95%A5%E5%8F%8A%E7%AE%97%E6%B3%95%E7%9A%84%E5%AF%B9%E6%AF%94/)
- [这可能是全网Spring Cloud Gateway限流最完整的方案了！](https://mp.weixin.qq.com/s/j6-nWMxg9qimDUE9D8yk-A)：
- [万字长文说透分布式锁](https://mp.weixin.qq.com/s/35aCS_5GqLyzZS3VobL6fg)： 介绍了分布式锁的三大属性及两大分类，并介绍了五六种企业级应用的实现方案。
- [消息幂等（去重）通用解决方案！](https://mp.weixin.qq.com/s?__biz=MzIyMjQwMTgyNA==&mid=2247485609&idx=1&sn=01507422f6d56271076104d765f9c769&chksm=e82f4ce6df58c5f0339b5b7277a3ee6f95e4de5f257f759f313f1ccfe1eb33d4e5f6dcf460f3&scene=132#wechat_redirect)

---

#### 架构方面

> 包括但不限于： 架构相关。

- [架构师图谱·上篇](https://blog.xstudio.mobi/a/230.html)
- [后端架构师技术图谱](https://github.com/xingshaocheng/architect-awesome)
- [To Be Top Javaer - Java工程师成神之路](https://github.com/hollischuang/toBeTopJavaer)


---

#### 面试相关

> 主要是一些面试相关内容。


- [P7面试题](https://github.com/idaSmilence/javaDesign)





<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />
