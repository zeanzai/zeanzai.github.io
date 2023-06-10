---
title: "基于SpringCloud-Alibaba的微服务实战演练"
category:
  - "springcloud-alibaba"
tag:
  - "分布式系统"
  - "实战"
---

## 说明

本系列教程，主要是基于SpringCloud-Alibaba相关组件的实战演练，属于HelloWord性质的工程内容。同时，在讲解各个组件的过程中会穿插一些分布式的基本原理，但是不会展开。如果读者有兴趣，可以自行查阅本网站的其他文章。


## 文章列表

- 『[你真的了解技术选型吗？](./before/chapterA.md)』
- 『[如何在SpringCloud项目中统一管理依赖的版本？](./before/chapterB.md)』 
- 『[使用idea插件生成代码](./before/easycode.md) 』
- 『[开发环境搭建手册](./before/env.md)』
- 『[服务治理之Nacos](chapter01.md) 』
  - [x] 传统调用方式
  - [x] 使用openfeign方式进行调用
  - [x] 注册到不同的命名空间以进行服务隔离
- 『[服务配置之Nacos](chapter02.md)』
  - [x] 传统读取配置文件方式
  - [x] 从配置中心中读取配置项
  - [x] 从共享配置文件中读取配置项
  - [x] 把共享配置文件中的配置项映射成JavaBean
  - [x] 以服务名作为命名空间进行配置隔离
  - [x] 以环境名作为命名空间进行配置隔离
- 『[服务调用之OpenFeign](chapter03.md)』
  - [x] 多参数
  - [x] URL中携带参数
  - [x] 传递对象
  - [x] 文件上传
  - [x] 文件下载
  - [x] 开启GZIP压缩
  - [x] 开启日志
  - [x] 超时控制
  - [x] 替换客户端
- 『[服务网关之Gateway](chapter04.md)』
  - [x] 结合配置中心进行请求转发
  - [x] 重写路由
  - [x] 路由规则可配置化
  - [ ] https的使用[xxx] 现在微服务的部署架构大多情况下是SLB+Nginx类型的部署模型，而微服务大多都是在内网环境中，因此网关也很少使用https；
  - [x] 集成swagger
  - [ ] CROS方案
  - [ ] 灰度发布 ： 
    - [ ] https://blog.csdn.net/kingwinstar/article/details/105752725
    - [ ] https://github.com/lyb-geek/gateway
- 分布式事务管理之Seata
  - 『[分布式事务概论](./seata/distribute-transaction.md)』
  - 『[Seata服务端环境搭建](./seata/install-seata.md)』
  - 『[AT模式](./seata/seata-at.md)』
  - 『[TCC模式](./seata/seata-tcc.md)』
  - [ ]  Saga 模式 
  - [ ] 两阶段提交事务
- [ ] Sentinel ： https://mp.weixin.qq.com/s/Q7Xv8cypQFrrOQhbd9BOXw
  - [ ] 持久化配置
  - [x] 基于网关的限流及自定义限流异常
- 『[分布式服务消息处理](chapter06.md)』
- 『[分布式服务流量控制](chapter07.md)』
- 『[分布式服务缓存](chapter08.md)』
- 『[分布式服务链路追踪](chapter09.md)』
- 『[分库分表](chapter10.md)』
- 『[分布式服务Job](chapter11.md)』
- [ ] 基于RabbitMQ使用消息中间件
  - [ ] 创建交换机、binding 、 queue 
  - [ ] 发送消息
  - [ ] 发送消息并确认
  - [ ] 接受消息
  - [ ] 接受消息并确认
- [ ] Cache
- [ ] 其他
  - [ ] 分布式锁
  - [ ] 分布式事务原理
  - [ ] 分布式ID
  - [ ] 分布式相关算法
  - [如何设计一个安全可靠的API接口](./other/create-a-niubi-api.md) 
  - [多租户SaaS实战](./other/una-saas-toturial.md)
  - [统一响应体+Nacos可配置全局异常](./other/global-exception.md)


## 获取代码

> 微信扫码关注“天晴小猪”（ID： it-come-true），回复“springcloud”，获取本系列教程的实战源码。


<img style="border:1px red solid; display:block; margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="微信公众号" />






