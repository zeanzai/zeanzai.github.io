---
title: "Java相关技术"
category:
  - "java"
tag:
  - "arch"
---

## 冯唐谈《麦肯锡如何培养行业专家》


::: tip  《麦肯锡如何培养行业专家》
第一步，就是找出一百个你要学习这个专业或者行业的100个关键词，然后把这100个关键词搞清楚，并且最好能够搞清楚这些关键词之间的逻辑关系，一般来说，一个行业或者专业100个关键词足可以全覆盖了，如果你对这个行业特别陌生的话，而不能找出关键词的话，你可以找熟悉那个行业的专业人员帮忙，这个环节很重要，开始也许单看一个词可能不够清楚，没关系，那个关键词就是一个线头，你顺藤摸瓜就可以了；

第二步，找三位这个行业很厉害的专家或者专业人士进行聊天，每个人聊一天，这个时候要准备好尽可能多的问题，多问这些专家问题，并且做好记录，然后进行分析，三个专家说的重复的知识内容就是这个行业比较重要的内容；

第三步，让行业的专家给你推荐五本这个行业的书籍，并进行深入学习。
:::

> 迅速认知行业的三步法：从基本定义入手快速奠基->和业内人士沟通洞察实战要义->研读理论著作形成体系性认知


## 学习方法

针对JVM的学习和MySQL的学习，两门课程中，就会发现有以下几个共同点：
1. 每一个软件都会有一个框架图，这个框架图中标识着这个软件系统中所使用到的各个组件；
2. 会有相对应的线程；


因此我们的学习方法就可以变成：

1. 应该明确好应用软件的框架图，如果没有架构图，可以在网上了解一下这个软件系统是如何设计的，最终目的是最好能明白这个软件系统大概是怎么设计实现的。
2. 有哪些工作线程，这些工作线程都有什么作用？
3. 在这个框架图中，会分成多少个组件，每个组件各自有何功能；


## 主要的面试资料

1. 面试小抄1.0和2.0
2. JavaDesign
3. 字节大佬总结的面试资料
4. JavaGuide
5. 中华13的进阶笔记
6. 小林Coding


## 大纲


### 计算机网络

- 七层协议及每层的作用、五层协议、TCP/IP协议，它们之间的迭代过程
- TCP/IP协议
  - 应用层
    - URI VS URL
    - HTTP（超文本传输协议）
      - HTTP报文格式、
      - 请求方法及其作用
      - 响应码
      - HTTP迭代过程（1.0-〉1.1->2.0->HTTPS）
      - HTTPS过程
      - 长链接与短链接
      - 跨域及其解决方案
      - 如何理解HTTP有状态和无状态？
      - 既然已经有了HTTP，为什么还会有RPC？
      - 既然有了HTTP，为什么还会有WebSocket？
    - DNS（地址解析协议）过程
    - Cookie 与 Session ，分布式会话
  - 传输层
    - TCP报文格式
    - 可靠性保证手段
    - 粘包问题及解决方案、拆包问题及解决方案
    - TCP洪泛滥问题及解决方案
    - 三次握手
      - 过程
      - 为什么不能是两次或四次？
      - 洪泛滥问题及其解决方案
    - 四次挥手
      - 过程 
      - 为什么需要四次？
        - 单向通道问题
        - 服务端可能还有部分数据未接收完毕
    - TCP 和 UDP区别
  - 网络层
    - IP报文格式
    - 网络号、主机号、IP地址、子网掩码、网关
    - 超网划分
    - 多网卡选择过程
    - IP协议转发流程（MAC-端口映射表、路由表）
    - IPv4 VS IPv6
  - 网络接口层
    - 集线器
      - 作用：
    - 交换机
      - 作用：
    - 路由器
      - 作用： 
    - 为什么有IP了还需要MAC？
- 一次网络请求的过程
  - TCP/IP四层协议上的一次网络请求过程
  - Linux一次请求的过程
- CDN原理
- 安全
  - 安全问题类型解决方案
    - HTTPS过程
    - TCP洪泛滥攻击
    - DDos攻击、跨域请求攻击、XSS攻击、SQL注入攻击


### JVM 

> 1. 可以通过分析了解一个java文件，在JVM中的整个运行过程，来记忆各种理论知识点。
> 2. 预估一个JavaWeb项目所使用的内存分配。

- [ ] 概览及总述： 
  - [ ] 类加载子系统，JVM是如何把Java语言加载到JVM中的？
  - [ ] 运行期内存结构，加载到JVM中的源代码是如何使用内存的？
  - [ ] 执行引擎，
  - [ ] 本地方法接口及本地方法库
- [ ] 理论层次
  - [ ] JVM中的后台进程
  - [ ] 字节码文件
  - [x] 类加载子系统
    - [ ] 【where】类来源途径（本地文件、网络、压缩包、数据库、动态编译生成等）
    - [ ] 【who】类加载器（分类、作用、加载内容）
    - [ ] 【how】双亲委派（原理、好处）、破坏双亲委派模型的样例
  - [x] 运行期内存结构
    - [ ] 线程私有区域
      - [ ] 程序计数器 （存放内容、异常信息、存在的原因）
      - [ ] 虚拟机栈（存放内容（局部变量表、操作数栈、动态链接、方法出口及一些附加信息）、异常信息、配置参数）
      - [ ] 本地方法栈  （存放内容、异常信息）
    - [ ] 线程共享区域
      - [ ] Java堆（存放内容（Java对象及数组）、配置参数、异常类型及解决方案）
      - [ ] 方法区（存放内容（Java对象及数组）、配置参数、异常类型及解决方案）
  - [ ] 执行引擎
    - [ ] Java中的运行方式（解释运行、编译运行），HotSpot的运行方式
    - [ ] 解释运行与编译运行的区别
    - [ ] 编译器分类（前端编译器、后端编译器、静态提前编译器，各自区别）
  - [ ] 本地方法接口与本地库
  - [x] 对象探秘 
    - [ ] 对象实例化方式
    - [ ] 对象内存结构
    - [ ] JVM为对象分配内存的过程【即在分代回收模型中的内存分配过程】
    - [ ] 对象的创建过程（空间分配担保+对象年龄晋升确定所在区域、逃逸分析确定代码优化结果）
    - [ ] 对象的访问定位；
    - [ ] 内存结构、内存分配过程、访问定位、升代策略
  - [ ] 垃圾回收理论
  - [ ] 虚拟机中的高效并发
- [ ] 具体实现层面
  - [ ] 不同回收方式具有不同的运行期内存结构
  - [ ] 经典垃圾回收器（各自垃圾回收过程、所采用的算法、适用场景、配置参数）
  - [ ] 组合使用
- [ ] JVM调优 
  - [ ] 方法论
  - [ ] 调优和异常

### MySQL  

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


## Redis

- 单机版部署及可视化操作台
- 底层数据结构与相关算法分析
- redis对象的底层底层数据结构（转换数据结构的条件及配置参数）、操作命令及其时间复杂度、对象的使用、应用场景及相关特殊应用场景
- 特殊特性：事务、管道技术、迭代器
- 内存淘汰机制与持久化机制（AOP、RDB、混合持久化机制、重写）
- 生产环境运维（三种部署方式：主从模式、集群模式、哨兵模式；慢查询日志分析、性能测试、性能优化）
- redis生产问题及解决方案


## 分布式相关

1. 分布式事务
2. 分布式锁
3. 分布式ID 
4. 分布式一致性原理


// TODO: 整理已经总结过的内容。全部搞到这个里面来。
// TODO： 《只记相关知识点，不做总结，可以汇总成提纲》，
  1. 1号完成Mysql、JVM、Redis、Network的相关汇总；
  2. 2号完成Java相关（OOP、关键字、集合、异常、反射、注解、序列化、JUC）
  3. 3号完成框架相关（Spring、SpringBoot、SpringCloud和Mybatis、MQ等）
  4. 4号完成分布式相关（分布式原理、分布式事务、分布式ID、分布式锁）
  5. 5号完成相关的项目实战相关的内容（JVM调优、SQL调优、多线程使用）

----

> 下面的内容废弃

## Java相关技术

此项目中`包括但不限于`以下内容：

### 硬实力篇

- `计算机基础 `
  - `计算机基础相关内容`，网络、设计模式、操作系统、DSA
- `Java基础`
  - `Java相关内容`，OOP、关键字、集合、异常、反射、注解、序列化、JUC
- `Java高级`
  - 源码层面（集合、JUC、代理、jdk中的设计模式）
  - `JVM相关`，运行期内存结构、对象是否应该回收判断标准、垃圾回收算法、垃圾回收器、配置参数、分析工具、双亲委派模型、class文件
- `数据操作`
  - `Spring`（IOC原理、ID原理、Bean生命周期、组件架构图、MVC原理、隔离级别）；
  - `SpringCloud`（组件及其各自作用和原理、某些组件的源码）
  - `Mybatis`（使用方式、基本原理、缓存）
- `数据存储 `
  - `MySQL相关`，索引、事务及其特性、并发一致性问题、隔离级别、锁、MVCC、各种日志、SQL优化、Explain执行计划、分库分表
  - `Redis相关`，数据结构（种类、内部实现原理、应用场景、操作）、持久化机制、事务、集群、哨兵模式、cluster模式、七大经典问题（缓存击穿、缓存穿透、缓存雪崩、数据不一致、并发竞争、热点key、BigKey问题）、分布式锁、分布式限流、唯一ID、Redis调优（使用方式优化、内存优化）
  - `MQ相关`，基本原理、应用场景、问题解决（消息重复、消息积压、消息丢失、顺序消费）、高可用
- `分布式`
  - `ZK相关内容`，数据存储、应用场景、与kafka的关系、相关面试题
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
  - 集群：
    - 负载均衡
    - 一致性Hash等
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
  - 分布式事务
  - 分布式锁
  - 分布式ID 
  - 分库分表


### 软实力篇

- 代码评审规范
- 功能设计文档（需求反讲）
- 移交过程规范（开发分支合并到release分支）
- SQM扫描
- GIT提交过程规范
- 防重放处理机制
- SDLC安全设计评审
- DDD领域模型设计（展示层、应用层、领域层、基础设施层）


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




---
<br /><br /><br />

<img style="border:1px red solid; display:block; margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="微信公众号" />

