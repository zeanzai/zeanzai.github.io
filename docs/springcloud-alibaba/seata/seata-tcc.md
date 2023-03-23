---
"title": "Seata分布式事务之TCC模式"
category:
  - "springcloud-alibaba"
tag:
  - "transaction"
---


## 

1. 搭建公共模块，并搭建三个基本服务，完成三个模块的接口测试；
2. 保证三个异常

第一阶段： 搭建基础环境，只提供操作数据库的方法；
第二阶段： 完成order模块调用另外两个模块的rpc调用过程，需要集成nacos、openfeign等工具包；
第三阶段： 集成Seata；

starter模块用来统一管理各种依赖的版本；
common模块继承starter模块，并包含公共模块，但是不传递依赖，如Seata的依赖，如果只在业务包里面使用，那么Seata的依赖就应该放到业务模块里面；

遵循： 1. 用到才添加依赖，不传递；

storage、account、order都继承starter模块，并继承starter模块，依赖于common模块；

1. 需要解决空回滚
2. 悬挂
3. 幂等

// todo 
// 1. 单测已经完成，但是压测没有通过，大批量请求进入时，并不能保证数据的一致性；
// 2. 码猿技术专栏教程中的项目代码，压测时，也不能保证数据的一致性；
// 3. 参考网上一篇文章，完成了异常编码集中化配置的使用方式，但是理想是把配置文件整到配置中心去；




```sql 
CREATE TABLE `storage`  (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `product_id` bigint(11) NULL DEFAULT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `num` bigint(11) NULL DEFAULT NULL COMMENT '数量',
  `create_time` datetime(0) NULL DEFAULT NULL,
  `price` bigint(10) NULL DEFAULT NULL COMMENT '单价，单位分',
  `frozen` bigint(11) NULL DEFAULT NULL COMMENT '冻结的库存',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

CREATE TABLE `account` (
	`id` BIGINT ( 11 ) NOT NULL AUTO_INCREMENT,
	`user_id` VARCHAR ( 32 ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用 户userId',
	`money` BIGINT ( 11 ) NULL DEFAULT NULL COMMENT '余额，单位分',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',

  `frozen` bigint(11) NULL DEFAULT NULL COMMENT '冻结的money',
	PRIMARY KEY ( `id` ) USING BTREE 
) ENGINE = INNODB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

CREATE TABLE `t_order`  (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `order_id` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '订单Id',
  `product_id` bigint(11) NULL DEFAULT NULL COMMENT '商品Id',
  `num` bigint(11) NULL DEFAULT NULL COMMENT '数量',
  `user_id` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户唯一Id',
  `create_time` datetime(0) NULL DEFAULT NULL,
  `status` int(1) NULL DEFAULT NULL COMMENT '订单状态 1 未付款 2 已付款 3 已完成 4 待确认 5 已删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

CREATE TABLE `ordertb` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `order_id` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '订单Id',
  `product_id` bigint(11) DEFAULT NULL COMMENT '商品Id',
  `num` bigint(11) DEFAULT NULL COMMENT '数量',
  `user_id` varchar(32) DEFAULT NULL COMMENT '用户唯一Id',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `status` int(1) DEFAULT NULL COMMENT '订单状态 1 未付款 2 已付款 3 已完成 4 待确认 5 已删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci  ROW_FORMAT=COMPACT;
```



压力测试时用到的一些脚本


-- 初始化
delete from `seata_server`.`branch_table`;
delete from `seata_server`.`global_table`;
delete from `seata_server`.`lock_table`;
delete from `seata_tcc_account`.`account`;
delete from `seata_tcc_account`.`undo_log`;
delete from `seata_tcc_storage`.`storage`;
delete from `seata_tcc_storage`.`undo_log`;
delete from `seata_tcc_order`.`ordertb`;
delete from `seata_tcc_order`.`undo_log`;
delete from `seata_tcc_order`.`transactional_record`;
INSERT INTO `seata_tcc_account`.`account` (`id`, `user_id`, `money`, `create_time`, `frozen`) VALUES (1, '1', 20000, '2023-03-21 16:46:58', 0);
INSERT INTO `seata_tcc_storage`.`storage` (`id`, `product_id`, `name`, `num`, `create_time`, `price`, `frozen`) VALUES (1, 100, '码猿技术专栏', 1000, '2021-10-15 22:32:40', 20, 0);


select * from `seata_tcc_account`.`account`;
select * from `seata_tcc_storage`.`storage`;
select * from `seata_tcc_order`.`ordertb`;
select * from `seata_tcc_order`.`transactional_record`;
select * from `seata_tcc_storage`.`undo_log`;
select * from `seata_tcc_account`.`undo_log`;
select * from `seata_tcc_order`.`undo_log`;


-- 花的钱： 
select (20000-money) as cost from `seata_tcc_account`.`account`;

-- 卖的产品个数： 
select (1000-num) as productNum from `seata_tcc_storage`.`storage`;

-- 订单个数
select count(1) as orderNum, count(1)*2 as productNum, count(1)*40 as moneyCost from `seata_tcc_order`.`ordertb` where `status`=3;


select a.cost=o.moneyCost, s.productNum=o.productNum1
from (select (20000-money) as cost from `seata_tcc_account`.`account`) a, 
(select (1000-num) as productNum from `seata_tcc_storage`.`storage`) s,
(select count(1)*2 as productNum1, count(1)*40 as moneyCost from `seata_tcc_order`.`ordertb` where `status`=3) o 
;

-- 订单上的产品个数： 
select sum(num) from `seata_tcc_order`.`ordertb` where `status`=3;
select count(*) from `seata_tcc_order`.`transactional_record`;

## 实践过程

> 使用jpa作为ORM框架； 框架是一步一步进行迭代的。

1. 搭建项目脚手架

2. 集成Openfeign

3. 集成Seata 

4. 处理三个异常信息

5. 处理幂等性问题
   1. 查看GitHub上的samples，对服务调用也要进行幂等的问题？会不会可以处理压测时出现的问题




