---
"title": "Seata分布式事务之AT模式"
category:
  - "springcloud-alibaba"
tag:
  - "transaction"
---


## Seata的AT、TCC、SAGA和XA事务模式

TCC模式又分为三种：
1. 通用型TCC模式。这种方式是不借助其他外部组件，自己实现TCC的三个阶段，try、confirm、cancel三个阶段都需要自己在业务段代码中自己实现，换句话，也就是需要自己实现分别实现三个接口，再统一把这三个接口递交给对应的分布式事务组件。
2. 

这种方式主要适用于对应的执行时间确定并且执行时间较短的业务场景，并且这种方式实现起来较为复杂



## 分布式事务的原理

seata分为服务端和客户端，使用方法和mysql的使用方式类似，都是使用maven依赖，导入客户端，之后配置连接信息后，进行使用。

## 业务说明

`流量充值业务`，我们系统中有这么几个模块：转账模块、流量管理模块、积分模块，主要的业务场景是：转账成功后，需要修改用户的流量，并修改用户的积分。


- 流量管理模块： seata-at-traffic ， 对外提供一个接口，用户增加用户的手机流量信息，手机流量信息表： seata_at_traffic.mobile_traffic 。
- 积分管理模块： seata-at-reservepoint ， 对外提供一个接口，用户增加用户的积分信息，所操作的积分信息表： seata_at_reservepoint.mobile_point 。
- 转账模块： seata-at-trans ， 用户发起转账请求，先扣除用户账户表中金额信息，然后调用流量控制模块接口，增加用户手机流量信息，之后调用用户积分管理模块接口，增加用户的积分信息。用户金额表： seata_at_trans.user_account 。

- 订单管理模块：
- 库存管理模块：
- 账户管理模块：


![使用initializr工具创建订单管理模块](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221211110949.png)

![使用initializr工具创建库存管理模块](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221211111301.png)

![使用initializr工具创建账户管理模块](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221211111706.png)





## 使用场景

举一个简单的应用场景：进销存系统中，一个用户发起购买商品的动作，后端业务逻辑是

- 扣减库存
- 扣减个人账户上的余额
- 创建一个订单

只要上面有一个步骤没有执行成功，就回滚已经执行成功的其他步骤。

## 搭建seata-at-storage服务模块

### 创建项目

### 使用idea插件生成代码并验证

## 搭建seata-at-account服务模块

## 搭建seata-at-order服务模块


```sql 

CREATE TABLE `storage` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `num` bigint(11) DEFAULT NULL COMMENT '数量',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `price` bigint(10) DEFAULT NULL COMMENT '单价，单位分',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;


CREATE TABLE `account` (
	`id` BIGINT ( 11 ) NOT NULL AUTO_INCREMENT,
	`user_id` VARCHAR ( 32 ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用 户userId',
	`money` BIGINT ( 11 ) NULL DEFAULT NULL COMMENT '余额，单位分',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
	PRIMARY KEY ( `id` ) USING BTREE 
) ENGINE = INNODB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;


CREATE TABLE `ordertb` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `product_id` bigint(11) DEFAULT NULL COMMENT '商品Id',
  `num` bigint(11) DEFAULT NULL COMMENT '数量',
  `user_id` varchar(32) DEFAULT NULL COMMENT '用户唯一Id',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `status` int(1) DEFAULT NULL COMMENT '订单状态 1 未付款 2 已付款 3 已完成',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci  ROW_FORMAT=COMPACT;
```




```
# -h 主机，你可以使用localhost，-p 端口号 你可以使用8848，-t 命名空间ID，-u 用户名，-p 密码
$ sh nacos-config.sh -h 192.168.1.150 -p 8848 -g SEATA_GROUP -t bb4ba084-9183-4406-bdf4-9254d372849e -u nacos -w nacos

```

----------


## 业务说明

// todo 简单说一下具体的业务场景以及实现思路

## 实践过程

> 使用 MybatisPlus 作为ORM框架。

### 1. 搭建项目框架



// todo 数据库的创建过程，storage模块的搭建过程：相关依赖的坐标及版本、添加配置、自动生成代码，完成保存接口的验证
// todo 重复上述步骤依次创建account模块和order模块

### 2. 集成Openfeign

// todo 三个模块注册到Nacos上，order项目中添加OpenFeign依赖，根据业务规则分别调用storage和account接口完成业务代码，并验证会出现问题；

### 3. 集成Seata

// todo 依次添加坐标、配置项，并在nacos中配置好事务管理器所要用到的一些配置项，之后改造资源协调器（order业务接口）然后依次启动，并验证不会出现问题；
// todo 查看一下日志，提一下xid的策略


## AT模式 

// todo 简单讲解一下




---

<img style="border:1px red solid; display:block; margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="微信公众号" />



