---
title: "分布式服务治理之Nacos"
category:
  - "springcloud-alibaba"
tag:
  - "分布式"
  - "服务治理"
---

服务治理包括主要包括`服务的注册与发现`、`服务监控`、`服务管控`等功能，是目前微服务架构中必不可少的基础组件。其中服务注册与发现是服务治理组件的功能特性，而服务的监控、服务的管控等则是服务治理组件的较为高阶的功能特性。本文中，笔者主要介绍服务的`注册与发现功能`。

## 为什么需要服务治理

> 一种技术不会平白无故的产生，它的产生一定是为了解决某个问题。而要想了解具体是解决了什么问题，就必须要从技术迭代的过程中去发现。

微服务架构中，由于有众多的微服务模块，而服务模块与服务模块中大多有相互调用的关系。传统的SOA或ESB类型的项目中的模块之间的调用关系是通过以下两种方式进行调用：

1. `项目中硬编码`。比如a模块需要调用b模块，那就在a模块中的配置文件中添加一个配置项，配置上b模块的服务地址。这种方式有一个问题，那就是当一个b模块的地址发生改变时，就需要改变a模块中的配置项，还需要重新部署a模块。这种方式违背了“开闭原则”，并且如果不同团队分别负责a、b模块，修改b模块，要引起a模块的修改，也会导致不同团队的相互“扯皮”。
2. `使用nginx代理`。b模块的服务地址由nginx进行代理，对外暴露的是一个域名地址。但这种方案势必要求每次b模块修改地址，运维人员就要修改nginx的配置，也同样会违背广义上的“开闭原则”，也同样会导致开发团队与运维团队的相互“扯皮”。

从上面的两中传统调用方式来看，所谓的服务注册与发现功能，就是`服务提供者通过某种机制把自身信息提供出去，再使用某种机制提供给服务消费者`——这就是服务注册与发现的核心概念。


## 前置知识

要想了解服务治理的相关内容，还需要了解到分布式系统的相关概念，如 `CAP原理` 、 `Paxos算法` 、 `Raft算法` 等，可以参考《`从PAXOS到ZOOKEEPER 分布式一致性原理与实践》`一书。此处不再赘述。

## 注册中心选型

关于如何做技术选型，参见《[你真的会做技术选型吗？](https://mp.weixin.qq.com/s/AUHY3nKZqDbAhkfebOPWCg)》。

在Java领域中大概有这么几种服务治理中心：Zookeeper 、 Eureka 、 Consul 、 Nacos 。下面简单介绍一下这几种服务治理的相关组件。

### Zookeeper

 Zookeeper（以下简称： ZK）是分布式应用中一个非常重要的组件，主要是实现了 Paxos 算法，也是因为它实现了分布式系统中这一重要的算法，所以它的应用很广，不但可以利用它作为服务的注册中心，也可以用它作为服务的配置中心。此外，它是一个独立的第三方组件，可以像mysql一样安装在服务器上，然后业务程序通过不同实现的客户端组件来操作ZK的API，这也使得它能够应用于多种编程语言。

 ZK中的节点的角色：
 
 - `Leader` ：启动时集群环境中会选择某一个节点作为Leader节点，并由这个Leader节点负责发起投票和决议，还负责维护其余各节点的心跳信息。此外，客户端的写操作信息也由Leader节点通过广播的形式向其他节点进行传播
 - `Follower` ：集群启动时，Leader选定之后，剩余的节点为Follower节点，这些节点可以响应Leader节点的心跳，还可以响应客户端的读请求，同时要把客户端的写请求转发给Leader。此外，当Leader节点发生异常不能对外提供服务时，Follower节点会参与投票选举，从而产生新的Leader节点 
 - `Observer` ： 不参与投票过程，可以响应读请求，但写请求依然会转发给Leader；

ZK中的节点类型：

- `持久节点`：一旦创建之后就一直存在，直到被删除；
- `临时节点`：只能作为叶子节点，生命周期与客户端会话进行绑定，会话结束后消失；
- `持久顺序节点`：除了具有持久节点的特性外，还具有顺序性，如： /node1/app000001 、 /node1/app000002 ；
- `临时顺序节点`：除了具有临时节点的特性外，还具备顺序性；

ZK中的Watch机制：

- 这种机制有点类似于轻量级的发布订阅机制，之所以说是轻量级的，是因为ZK一旦感知到存储的数据发生改变，ZK服务端便会发送包括事件类型和节点信息的给到相关的客户端，当客户端接收到后，主动请求ZK来读取变更的数据。

ZK作为注册中心：

![ZK架构](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221108002247.png)

举个例子，假如a服务调用b服务，b服务在启动时就会通过客户端软件，把自身信息写到ZK中去（如上图中8080端口的节点数据），当a服务执行调用过程时，就会通过客户端软件，读取到ZK中的b服务的相关节点信息，然后完成调用过程。

需要注意的是：

1. a、b服务在调用过程中，都是通过客户端软件与ZK进行通信的；服务注册时，服务提供者把自身信息写到ZK中；服务发现时，服务消费者从ZK中读取信息；
2. ZK中读取数据的流程就是树形节点的遍历过程，因此服务消费者读取到的服务提供者的数据大概是这样的：`/myOrgGroup/product/providers/192.1681.1.100:8080`， `/myOrgGroup/product/providers/192.1681.1.101:8080`，...
3. 叶子节点作为服务具体信息的存储节点，也是临时节点，由于是临时节点，因此当服务提供者因会话超时或发生异常无法响应时，这个临时节点就会被ZK剔除，剔除后ZK又通过Watch机制通知到相关的服务消费者，这样就做到了服务消费者信息的及时更新；
4. ZK并不保证可用性，因为在设计之初，就遵循CP原则，也就是任意时刻访问ZK，响应结果都是一致的。但当ZK集群中Leader发生异常无法对外提供服务，或者，整个ZK集群中超过半数以上的服务节点不可用，那么整个集群就无法对外提供服务了。

### Eureka

在SpringCloud的Netflix的早期版本中，Eureka主要承担服务注册与发现的功能。目前好像在憋什么大招，更新频率较低。

Eureka的业务架构中把Eureka的客户端和服务端分成三种角色信息，主要包括 Server 、 Provider 、 Consumer 三个角色。

1. Server ： 主要提供服务的注册与发现功能，也就是 Eureka 的服务端；
2. Provider ： Eureka 的客户端，主要负责服务的注册功能，把自身的服务信息注册到Eureka的服务端；
3. Consumer ： Eureka 的客户端，从Eureka的服务端获取服务提供者的服务信息；

![Eureka架构](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221108104615.png)

Server服务端通过设计多个实例彼此相互注册，形成一个去中心的架构，由于注册方式是通过p2p的通信协议进行的，因此节点与节点之间的身份相同，没有主从之分；节点与节点之间通过心跳契约的方式检查集群节点的健康状况，默认情况下，集群在一定时间内没有收到某一个节点的心跳信息，就会自动注销该节点；当新的节点启动时，会先从集群中获取所有的其他节点信息，然后再把应用服务节点的注册信息同步过来，之后对外提供服务；在应用服务进行注册时， Provider 应用和 Consumer 应用会把注册信息写入Eureka集群中某一节点，之后Eureka会把信息同步复制到其他所有节点，达到所有节点中数据的同步一致；应用服务进行消费时， Consumer 应用会从集群中任一节点中读取到 Consumer 应用的注册信息，然后进行远程调用。

由于在Eureka设计之初，就遵循AP原则，也就是保证高可用。这样设计的结果就是Eureka集群中，只要有一个节点存活，就可以对外提供服务。这种方式得益于Eureka的自我保护机制。如果15分钟内，85%的集群节点都没有正常的心跳，此时可以认为客户端与Eureka出现了网络故障，Eureka集群就会进入自我保护机制；之后Eureka不再剔除因为长时间没有收到心跳的服务，但是仍然可以接受新服务的注册与发现，但是不会再同步给其他Eureka节点，当网络稳定后，在把应用服务的注册信息同步复制给其他节点。

### Consul

Consul是一种基于服务网格的分布式服务治理方案，提供服务注册与发现、分布式配置、健康检查和负载均衡的功能。此外，它还支持多个数据中心的高可用方案。

Consul的所有节点都称为Agent节点，这些节点根据功能分为Client和Server两类。其中Server节点负责保存数据和响应Client的请求，分为Leader节点和Follower节点，当Consul集群启动时，所有节点启动成功后，会通过Gossip协议进行通信，同时也会选举产生一个Leader节点；当有应用服务注册到集群时，当Leader节点收到注册信息之后会把数据同步给其他Follower节点，当Follower节点收到注册信息时，会通过RPC转发给集群中Leader节点，再有Leader节同步给其他Follower节点；当Leader节点发生异常无法对外提供服务时，Follower节点会重新选举产生一个Leader节点。


### Nacos

Nacos是阿里巴巴开源的一个分布式组件，也是本篇文章的主要内容。它具有很多的优良特性：

- 服务注册与发现与服务的健康检测： 支持基于DNS和基于RPC的服务发现，同时能够对服务提供实时的健康监测，阻止向不健康的服务实例发送请求；
- 动态配置管理： 能够以中心化、外部化和动态化的方式管理所有环境的应用配置和服务配置；
- 动态DNS服务： 支持权重路由，更便捷的实现中间层的负载均衡、更灵活的路由配置策略、流量控制以及数据中心内网的简单DNS解析；
- 服务的元数据管理： 支持管理所有服务及其元数据，包括服务描述、生命周期、静态依赖分析、健康监测、流量控制、路由策略、metrics统计数据等；

此外，Nacos还配备有易用的控制台页面、权限控制系统及AP/CP的切换。Nacos还具有良好的生态系统：

![nacos生态](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221108121154.png)

## 实战演练

> 微信扫码关注“天晴小猪”（ID： it-come-true），回复“springcloud”，获取本章节实战源码。

创建两个服务，一个是服务提供者（provider），一个是服务消费者（consumer），让两个服务都注册到nacos服务器上，然后让服务消费者调用服务提供者的接口。

第一步，我们要先搭建nacos的服务；第二步，我们创建两个服务，并配置好注册的nacso的服务地址；第三步，在服务提供者服务中提供一个接口供服务消费者进行调用，之后再在服务消费者服务中提供一个接口来调用服务提供者提供的接口。下面我们开始进行实战。

### 安装nacos服务

> nacos服务依赖jdk开发环境，请先行安装jdk的环境。

CentOS7.9安装过程如下： 

```shell
// 下载
# wget https://github.com/alibaba/nacos/releases/download/1.2.1/nacos-server-1.2.1.tar.gz

// 解压到安装目录
# tar zxvf nacos-server-1.2.1.tar.gz -C /usr/setup/
// 进入bin目录，启动
# ./startup.sh -m standalone

// 开放端口
# firewall-cmd --zone=public --add-port=8848/tcp --permanent
# firewall-cmd --reload


// <---- start 配置开机自启动
// 在 /usr/lib/systemd/system 目录下创建 nacos.service ，并添加以下内容

[Unit]
Description=nacos
After=network.target

[Service]
Type=forking
ExecStart=/usr/setup/nacos/bin/startup.sh -m standalone
ExecReload=/usr/setup/nacos/bin/shutdown.sh
ExecStop=/usr/setup/nacos/bin/shutdown.sh
PrivateTmp=true

[Install]
WantedBy=multi-user.target

// 开启自启动服务
# systemctl enable nacos.service

// 重新加载自启动服务
# systemctl daemon-reload
// 配置开机自启动 end ---->
```

浏览器打开： http://192.168.1.150:8848/nacos 出现管理台页面，输入用户名密码： nacos/nacos ，登录成功。

### 创建provider模块

使用springinital工具进行创建项目模块。

1. 修改pom

```xml
<!-- 修改SpringBoot的版本 -->
<parent>
   <groupId>org.springframework.boot</groupId>
   <artifactId>spring-boot-starter-parent</artifactId>
   <version>2.2.5.RELEASE</version>
   <relativePath/> <!-- lookup parent from repository -->
</parent>

<!-- 添加dependencyManagement版本管理 -->
<dependencyManagement>
   <dependencies>
      <!--springcloud-->
      <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-dependencies</artifactId>
            <version>${spring-cloud.version}</version>
            <type>pom</type>
            <scope>import</scope>
      </dependency>

      <!--springcloud alibaba-->
      <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-alibaba-dependencies</artifactId>
            <version>${spring-cloud-alibaba-version}</version>
            <type>pom</type>
            <scope>import</scope>
      </dependency>
   </dependencies>
</dependencyManagement>

<!-- 添加web依赖 -->
<dependency>
   <groupId>org.springframework.boot</groupId>
   <artifactId>spring-boot-starter-web</artifactId>
</dependency>

<!-- 添加nacos依赖 -->
<dependency>
   <groupId>com.alibaba.cloud</groupId>
   <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
</dependency>
```

2. 创建配置文件application.yml

```yml
# 端口号
server:
  port: 10000

spring:
  application:
    # 注册到nacos上的服务名称，也是服务发现的名称，必写
    name: nacos-provider
  cloud:
    nacos:
      discovery:
        # nacos的注册地址
        server-addr: 192.168.1.150:8848

management:
  endpoints:
    web:
      exposure:
        # yml文件中存在特殊字符，必须用单引号包含，否则启动报错
        include: '*'
```

3. 开启服务注册与发现

![开启服务注册与发现](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221108134043.png)

4. 编写测试类

![编写测试类](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221108134114.png)

浏览器中输入： `http://localhost:10000/provider/hello` ，访问成功。


### 创建consumer模块

1. 修改pom

```xml
<!-- 修改SpringBoot的版本 -->
<parent>
   <groupId>org.springframework.boot</groupId>
   <artifactId>spring-boot-starter-parent</artifactId>
   <version>2.2.5.RELEASE</version>
   <relativePath/> <!-- lookup parent from repository -->
</parent>

<!-- 添加dependencyManagement版本管理 -->
<dependencyManagement>
   <dependencies>
      <!--springcloud-->
      <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-dependencies</artifactId>
            <version>${spring-cloud.version}</version>
            <type>pom</type>
            <scope>import</scope>
      </dependency>

      <!--springcloud alibaba-->
      <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-alibaba-dependencies</artifactId>
            <version>${spring-cloud-alibaba-version}</version>
            <type>pom</type>
            <scope>import</scope>
      </dependency>
   </dependencies>
</dependencyManagement>

<!-- 添加web依赖 -->
<dependency>
   <groupId>org.springframework.boot</groupId>
   <artifactId>spring-boot-starter-web</artifactId>
</dependency>

<!-- 添加nacos依赖 -->
<dependency>
   <groupId>com.alibaba.cloud</groupId>
   <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
</dependency>
```

2. 创建配置文件

```yml
# 端口号
server:
  port: 10000

spring:
  application:
    # 注册到nacos上的服务名称，也是服务发现的名称，必写
    name: nacos-provider
  cloud:
    nacos:
      discovery:
        # nacos的注册地址
        server-addr: 192.168.1.150:8848

management:
  endpoints:
    web:
      exposure:
        # yml文件中存在特殊字符，必须用单引号包含，否则启动报错
        include: '*'

```

3. 开启服务注册与发现

![开启服务注册与发现](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221108140126.png)

4. 编写测试类

![编写测试类](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221108135553.png)

浏览器中输入： `http://localhost:11000/consumer/hello` ，访问成功。

### 实现远程调用

我们这里采用两种不同的客户端来完成远程调用。

1. 使用RestTemplate访问provider接口

- 添加配置项

![添加配置项](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221108135749.png)

- 添加配置文件

![添加配置文件](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221108135821.png)

- 添加调用过程

![添加调用过程](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221108135902.png)

浏览器中输入： `http://localhost:11000/consumer/hello1` ，访问成功。

2. 使用OpenFeign访问provider接口

- 修改pom

```xml
<!-- pom中添加openfeign依赖 -->
<dependency>
   <groupId>org.springframework.cloud</groupId>
   <artifactId>spring-cloud-starter-openfeign</artifactId>
</dependency>
```

- 开启openfeign客户端

![开启openfeign客户端](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221108140147.png)

- 编写service

![编写service](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221108140041.png)

- 执行调用过程

![执行调用过程](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221108140024.png)

浏览器中输入： `http://localhost:11000/consumer/hello2` ，访问成功。

## Nacos开发实践

当项目在实际开发过程中会有很多的环境，如dev、sit、uat、prd等环境。在不同的环境中，可以通过配置多套nacos服务，并在不同的配置文件中配置上相应的nacos服务地址，实现环境隔离。

但是在同一套环境下进行代码联调时，就会出现问题。比如在开发过程中，A和C两位开发需要联调，A成员启动了provider项目并注册到dev环境的nacos中，B成员也启动了provider项目并注册到dev环境的nacos中，那么如果C成员启动了consumer项目注册到dev环境的nacos中调用provider时，就会出现C成员的请求，可能会转发到B成员的provider项目中。

可以使用nacos中的命名空间和命名分组的方式进行界定。

1. 在nacos中创建dev的命名空间

![配置命名空间](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221108142819.png)

2. 在A代码中添加命名空间和命名分组的配置

![配置命名空间和命名分组](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221108142907.png)

3. 在B代码中也添加命名空间和命名分组的配置

![配置命名空间和命名分组](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221108142948.png)

4. 验证

浏览器中分别输入： `http://localhost:11000/consumer/hello1` 、 `http://localhost:11000/consumer/hello2` ，均访问成功。



## 特别说明

读者在实践过程中要特别组件之间版本的选择，最好跟笔者的版本保持一致，不然会出现意想不到的问题，读者可以像笔者一样自定义一个starter统一管理组件的版本。

## 总结

1. 介绍了分布式服务治理技术的产生背景及相关内容；
2. 介绍了分布式服务治理的相关技术选型；
3. Nacos的服务注册与发现的两种RPC调用过程及开发过程中的最佳实践；


<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />



