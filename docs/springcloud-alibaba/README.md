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


## 组件 

- Nacos ： 注册中心、配置中心
- SpringCloud-Gateway ： 微服务网关
- OpenFeign ： 远程过程调用
- Sentinel ： 限流
- Seata ： 分布式事务
- RocketMQ ： 分布式消息
- Skywalking ： 分布式链路追踪
- ELK ： 日志记录系统
- ... 


## 任务列表

这一部分虽然只是笔者在实际实践过程中的一个任务列表，但是也可以做为系列文章的目录大纲。

- [x] 架构师都是如何做技术选型的？
- [x] nacos
  - [x] 注册中心
    - [x] 传统调用方式
    - [x] 使用openfeign方式进行调用
    - [x] openfeign的进阶使用
      - [x] 多参数
      - [x] URL中携带参数
      - [x] 传递对象
      - [x] 文件上传
      - [x] 文件下载
      - [x] 开启GZIP压缩
      - [x] 开启日志
      - [x] 超时控制
      - [x] 替换客户端
    - [x] 注册到不同的命名空间以进行服务隔离
  - [x] 配置中心
    - [x] 传统读取配置文件方式
    - [x] 从配置中心中读取配置项
    - [x] 从共享配置文件中读取配置项
    - [x] 把共享配置文件中的配置项映射成JavaBean
    - [x] 以服务名作为命名空间进行配置隔离
    - [x] 以环境名作为命名空间进行配置隔离
    - [ ] 灰度发布
    - [ ] 自定义全局异常[TODO： 文章未完成] 
- [ ] gateway
  - [x] 结合配置中心进行请求转发
  - [x] 重写路由
  - [x] 路由规则可配置化
  - [ ] https的使用[xxx] 现在微服务的部署架构大多情况下是SLB+Nginx类型的部署模型，而微服务大多都是在内网环境中，因此网关也很少使用https；
  - [x] 集成swagger [TODO： 文章未完成]
  - [ ] CROS方案
  - [ ] 灰度发布 ： 
    - [ ] https://blog.csdn.net/kingwinstar/article/details/105752725
    - [ ] https://github.com/lyb-geek/gateway
- [ ] Seata
  - [x]  AT 模式[TODO： 文章未完成] 
  - [x]  TCC 模式[TODO： 文章未完成] 
  - [ ]  XA 模式
  - [ ]  Saga 模式 
  - [ ] 两阶段提交事务
- [ ] Sentinel ： https://mp.weixin.qq.com/s/Q7Xv8cypQFrrOQhbd9BOXw
  - [ ] 持久化配置
  - [x] 基于网关的限流及自定义限流异常
- [ ] 基于RabbitMQ使用消息中间件[TODO： 文章未完成] 
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
  - [ ] 如何设计一个安全可靠的API接口[TODO： 文章未完成] 
  - [ ] 多租户SaaS实战


## 获取代码

> 微信扫码关注“天晴小猪”（ID： it-come-true），回复“springcloud”，获取本系列教程的实战源码。

## 模块说明

实战演练功能及代码模块与端口对应关系如下：

- nacos-as-register
  - nacos-provider: 10000
  - nacos-consumer: 10100
- nacos-as-configer: 10200
- nacos-global-exception: 10300
- gateway-demo: 10400
- swagger
  - gateway-swagger: 10500
  - swagger-user: 10600
  - swagger-order: 10700
- seata-tcc
  - seata-tcc-account: 10801
  - seata-tcc-storage: 10802
  - seata-tcc-order: 10803
- seata-at
  - seata-at-account: 10901
  - seata-at-storage: 10902
  - seata-at-order: 10903


## SpringCloud的版本

分为很多个组件，每一个组件都有自己的版本坐标，这个也很好理解，SpringCloud是一个大型的工程，在这个工程里面有很多组件，每一个组件都是由一个小团队负责交付，由于负责不同的组件的团队不同，所以组件的交付时间节点肯定不一样，所以SpringCloud有一个自己的版本，这个版本中每一个组件的版本是不同的。

### SpringCloud-Alibaba的版本

SpringCloud-Alibaba是基于SpringBoot开发的，也是有不同的组件组成的。

因此二者有一个对应关系。

### 对应关系

![Spring版本关系](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221108131544.png)

![组件之间的版本关系](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221108131636.png)

我们选取的版本如下：

- JDK1.8
- CentOS7.9
- SpringBoot-2.2.5.RELEASE
- SpringCloud-Hoxton.SR3
- SpringCloudAlibaba-2.2.1.RELEASE
- Nacos1.2.1
- Seata1.3.0
- Sentinel1.7.1
- ...


### 创建服务模块的方法

项目使用idea中的 Spring Initializer 进行生成。这样做的好处是`当团队规模较大，并且每一个团队都负责一个模块时，可以让不同的团队只需要下载自己负责的模块代码即可，便于代码权限的管理`。


## 运行环境说明

我们使用一个台式机作为我们的服务器，并且开发环境的一些组件是部署在docker上的。

```
[root@home ~]# uname -a
Linux home.centos 3.10.0-1160.76.1.el7.x86_64 #1 SMP Wed Aug 10 16:21:17 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux
```

Docker的安装过程：

```shell
// 安装yum源的工具包
yum install -y yum-utils

// 配置docker的安装源
yum-config-manager \
--add-repo \
https://download.docker.com/linux/centos/docker-ce.repo

// 安装docker
yum install docker-ce docker-ce-cli containerd.io docker-compose-plugin

// 设置开机自启
systemctl enable docker


mkdir -p /etc/docker
tee /etc/docker/daemon.json <<-'EOF'
{
"registry-mirrors": ["https://hpifphoh.mirror.aliyuncs.com"]
}
EOF
systemctl daemon-reload
systemctl restart docker
```


---

## 微信文章列表

- [你真的会做技术选型吗？](https://mp.weixin.qq.com/s/AUHY3nKZqDbAhkfebOPWCg)
- [如何在SpringCloud项目中统一管理依赖的版本？](https://mp.weixin.qq.com/s/uckNTewC0xms1VeXRkQ43g)
- [分布式服务配置之nacos](https://mp.weixin.qq.com/s/4Sh9lYxw-OFGXhJyP7PCgA)


<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />




