---
"title": "搭建Seata服务器端"
category:
  - "seata"
tag:
  - "seata"
---

## 前置知识

在了解Seata之前，请先熟悉一下分布式事务的相关知识——[分布式事务概述](./distribute-transaction.md)。简单熟悉一下XA模式、两阶段提交、三阶段提交、TCC、Seaga等概念及原理。

关于Seata的相关知识，可以先去官网了解一下。简单介绍一下，seata支持多种分布式事务，如AT模式、TCC模式、Sega模式等。[官网在这](https://seata.io)

Seata的用法其实很简单，我们类比于在SpringBoot项目中使用Mysql的方式——先部署一个Mysql服务器实例，然后SpringBoot项目中引入依赖，之后在配置文件中配置好Mysql的相关连接信息，之后启动即可使用，在SpringBoot项目中使用Seata的方式也很简单：

1. 搭建一个Seata的服务器实例，这个服务器实例承担的角色是TC的角色，即事务管理器的角色；
2. 在SpringBoot项目中引入依赖；
3. 在配置文件中配置好Seata的相关信息；

我们结合XA理论可知，Seata服务器端实例承载着事务管理器的角色，它承担着统一管理各个『参与者』提交事务、回滚事务的职责；而参与分布式事务的各个『参与者』就是AP的角色，它们则是具体的业务实现，底层连接着数据库，而数据库就是资源管理器（CRM）的角色。

因此，要基于Seata完成分布式事务的实现，就必须先要搭建一个Seata服务端实例。

由于Seata也是JAVA项目，并且支持多种配置方式和持久化方式，这里我们选择基于Nacos和Mysql的方式。其他方式可以自行查看官网。

因此有一个前置条件，要先把Mysql和Nacos启动起来。此外，我们还需要用到源码文件夹下面的一些脚本。因此我们还需要下载相对应版本的源代码。

服务端版本及下载地址： [1.3.0](https://github.com/seata/seata/releases/download/v1.3.0/seata-server-1.3.0.tar.gz) 。

源代码版本及下载地址： [1.3.0](https://github.com/seata/seata/tree/master/script)

总结一下：

1. 启动Mysql
2. 启动Nacos
3. 下载服务器端压缩包
4. 下载源代码中的脚本

## 搭建

### 1. 解压
安装包下载完成之后，上传到服务器上，并完成解压。解压后的文件目录如下：

![20230320000231](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230320000231.png)

### 2. 执行脚本

### 3. 导入配置

### 4. 启动




<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />


