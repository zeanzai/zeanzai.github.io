---
"title": "InnoDB中的磁盘结构"
category:
  - "MySQL"
tag:
  - "数据库"
---

![磁盘结构](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230606112259.png)


![表空间结构分解](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/yuque_diagram00.jpg)

## 表空间与段

一个表空间具有一个唯一的表空间ID，表空间根据数据存放的类型不一样，划分为： 
- 系统表空间
- 独立表空间
- undo表空间
- 通用表空间
- 临时表空间


![20230610155911](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230610155911.png)

特点： 
- 5.6默认所有的表数据都存放到一个表空间中，磁盘文件为： ibdata1；5.7之后，默认每个表数据单独存放到一个表空间，文件夹对应于 schema ，文件对应于.ibd文件，可通过`innodb_file_per_table`参数配置；
- 一个表空间在磁盘上的表现是一个或多个ibd数据文件；
- 一个表空间是以多个段进行分组的，一个表空间上可以划分为三种不同的段： 叶子节点段、非叶子节点段、回滚段三部分；
- 一个表空间至少有一个数据段、一个索引段，数据段包含B+树的叶子节点段，索引段包含B+树的非叶子节点段；
- 每创建一个索引，就多出两个段（一个数据段、一个索引段）；
- 表初始化时的大小为96k，并不是一个区的大小1M，是为了节省空间，如果直接以区申请的话，就是2M，因为至少有一个数据段和一个索引段，而有些表中的数据并一定能达不到1M的数据，为了避免浪费，先初始化为96k，使用完之后再以1个区64个连续页的规则来申请；
- 段只是表空间的逻辑概念，它是有表空间上若干零三页和一系列完整的区组成的；

> schema： schema在数据库中表示的是数据库对象集合，它包含了各种对像，比如：表，视图，存储过程，索引等等。


## 区

- 一个段有多个区，是表初始化之后再分配空间时申请的最小空间单位，一个区的大小为1M，包含着64个连续的页；
- 区根据内部的页是否被使用分为四种类型：
  - 这个区内所有的页都没有被使用的称为 Free 
  - 有空闲页的碎片区被称为 Free Frag
  - 没有空闲页的碎片区被称为 Full Frag
  - 只存储某个段的区被称为 Fseg 
- 一个区可以在这四种状态间进行流转

段与区的关系：

![20230610163541](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230610163541.png)

## 页

- 页是InnoDB组织数据的基本单位，即InnoDB从磁盘读取和写入都是以页为单位进行的；
- 一页大小为16k，可以存储多个数据行；
- 页类型字段决定了这个页所存储的数据类型，分为数据页、索引页、undo页、系统页、事务数据页、大的blog对象页；
- 我们最常提起的数据页就是B+树上的叶子节点页，索引页就是B+树上的非叶子节点页；



```
[root@home ~]# cd /mydata/mysql-master/data/
[root@home data]# ll
总用量 4527448
-rw-r-----. 1 polkitd input          2 6月   5 13:28 55319826442f.pid
-rw-r-----. 1 polkitd input         56 3月  14 18:17 auto.cnf
-rw-------. 1 polkitd input       1676 3月  14 18:17 ca-key.pem
-rw-r--r--. 1 polkitd input       1112 3月  14 18:17 ca.pem
-rw-r--r--. 1 polkitd input       1112 3月  14 18:17 client-cert.pem
-rw-------. 1 polkitd input       1680 3月  14 18:17 client-key.pem
-rw-r-----. 1 polkitd input        714 6月   5 13:28 ib_buffer_pool
-rw-r-----. 1 polkitd input   79691776 6月   5 13:28 ibdata1
-rw-r-----. 1 polkitd input   50331648 6月   5 13:28 ib_logfile0
-rw-r-----. 1 polkitd input   50331648 6月   5 13:28 ib_logfile1
-rw-r-----. 1 polkitd input   12582912 6月   5 13:28 ibtmp1
-rw-r-----. 1 polkitd input 1074053712 3月  14 19:21 master-bin.000001
-rw-r-----. 1 polkitd input 1074251271 3月  14 20:09 master-bin.000002
-rw-r-----. 1 polkitd input 1074163713 3月  14 20:52 master-bin.000003
-rw-r-----. 1 polkitd input 1074164210 3月  14 21:40 master-bin.000004
-rw-r-----. 1 polkitd input  145292204 3月  14 22:16 master-bin.000005
-rw-r-----. 1 polkitd input        703 3月  14 22:18 master-bin.000006
-rw-r-----. 1 polkitd input        383 3月  15 23:19 master-bin.000007
-rw-r-----. 1 polkitd input        177 3月  17 22:23 master-bin.000008
-rw-r-----. 1 polkitd input        177 3月  20 00:24 master-bin.000009
-rw-r-----. 1 polkitd input        177 3月  20 18:08 master-bin.000010
-rw-r-----. 1 polkitd input        177 3月  21 22:02 master-bin.000011
-rw-r-----. 1 polkitd input     882494 3月  22 20:17 master-bin.000012
-rw-r-----. 1 polkitd input        177 3月  22 21:40 master-bin.000013
-rw-r-----. 1 polkitd input        177 3月  23 19:44 master-bin.000014
-rw-r-----. 1 polkitd input        177 3月  30 01:09 master-bin.000015
-rw-r-----. 1 polkitd input        703 3月  30 09:29 master-bin.000016
-rw-r-----. 1 polkitd input        177 3月  31 22:34 master-bin.000017
-rw-r-----. 1 polkitd input        177 4月   2 23:41 master-bin.000018
-rw-r-----. 1 polkitd input        177 4月   3 23:28 master-bin.000019
-rw-r-----. 1 polkitd input        177 4月   4 22:18 master-bin.000020
-rw-r-----. 1 polkitd input        177 4月   5 23:32 master-bin.000021
-rw-r-----. 1 polkitd input        177 4月   8 02:24 master-bin.000022
-rw-r-----. 1 polkitd input        177 4月   9 01:29 master-bin.000023
-rw-r-----. 1 polkitd input        177 4月  11 22:07 master-bin.000024
-rw-r-----. 1 polkitd input        177 4月  11 22:11 master-bin.000025
-rw-r-----. 1 polkitd input        177 4月  12 22:28 master-bin.000026
-rw-r-----. 1 polkitd input        177 4月  15 00:10 master-bin.000027
-rw-r-----. 1 polkitd input        177 4月  17 17:26 master-bin.000028
-rw-r-----. 1 polkitd input        177 4月  18 00:18 master-bin.000029
-rw-r-----. 1 polkitd input        177 4月  19 22:27 master-bin.000030
-rw-r-----. 1 polkitd input       6915 4月  20 00:14 master-bin.000031
-rw-r-----. 1 polkitd input        177 4月  20 09:46 master-bin.000032
-rw-r-----. 1 polkitd input        177 4月  20 18:44 master-bin.000033
-rw-r-----. 1 polkitd input        177 4月  22 00:08 master-bin.000034
-rw-r-----. 1 polkitd input        177 4月  22 12:11 master-bin.000035
-rw-r-----. 1 polkitd input        177 4月  22 13:16 master-bin.000036
-rw-r-----. 1 polkitd input        177 4月  22 23:13 master-bin.000037
-rw-r-----. 1 polkitd input        177 4月  23 23:22 master-bin.000038
-rw-r-----. 1 polkitd input        177 4月  26 22:58 master-bin.000039
-rw-r-----. 1 polkitd input        177 4月  28 12:37 master-bin.000040
-rw-r-----. 1 polkitd input        177 4月  28 21:59 master-bin.000041
-rw-r-----. 1 polkitd input        177 4月  28 23:57 master-bin.000042
-rw-r-----. 1 polkitd input        177 4月  30 21:05 master-bin.000043
-rw-r-----. 1 polkitd input        177 4月  30 21:11 master-bin.000044
-rw-r-----. 1 polkitd input        177 5月   3 21:45 master-bin.000045
-rw-r-----. 1 polkitd input        177 5月  13 14:18 master-bin.000046
-rw-r-----. 1 polkitd input        177 5月  13 15:16 master-bin.000047
-rw-r-----. 1 polkitd input        154 5月  13 15:42 master-bin.000048
-rw-r-----. 1 polkitd input        177 5月  13 15:43 master-bin.000049
-rw-r-----. 1 polkitd input        177 5月  16 00:46 master-bin.000050
-rw-r-----. 1 polkitd input        177 5月  19 12:42 master-bin.000051
-rw-r-----. 1 polkitd input        177 5月  19 12:44 master-bin.000052
-rw-r-----. 1 polkitd input        177 5月  19 17:47 master-bin.000053
-rw-r-----. 1 polkitd input        177 5月  19 20:13 master-bin.000054
-rw-r-----. 1 polkitd input        177 5月  19 22:08 master-bin.000055
-rw-r-----. 1 polkitd input        177 5月  19 22:21 master-bin.000056
-rw-r-----. 1 polkitd input        154 5月  20 12:04 master-bin.000057
-rw-r-----. 1 polkitd input        154 5月  20 23:30 master-bin.000058
-rw-r-----. 1 polkitd input        154 5月  21 16:32 master-bin.000059
-rw-r-----. 1 polkitd input        177 5月  21 23:47 master-bin.000060
-rw-r-----. 1 polkitd input        177 5月  24 22:55 master-bin.000061
-rw-r-----. 1 polkitd input        177 5月  26 00:39 master-bin.000062
-rw-r-----. 1 polkitd input        177 5月  27 21:04 master-bin.000063
-rw-r-----. 1 polkitd input        177 5月  31 00:58 master-bin.000064
-rw-r-----. 1 polkitd input        177 6月   3 01:11 master-bin.000065
-rw-r-----. 1 polkitd input        154 6月   5 10:46 master-bin.000066
-rw-r-----. 1 polkitd input        177 6月   5 13:28 master-bin.000067
-rw-r-----. 1 polkitd input        177 6月   5 13:28 master-bin.000068
-rw-r-----. 1 polkitd input        154 6月   5 13:28 master-bin.000069
-rw-r-----. 1 polkitd input       1380 6月   5 13:28 master-bin.index
drwxr-x---. 2 polkitd input       4096 4月  19 23:01 monomer_order
drwxr-x---. 2 polkitd input       4096 3月  14 18:17 mysql
drwxr-x---. 2 polkitd input       8192 3月  14 18:17 performance_schema
-rw-------. 1 polkitd input       1676 3月  14 18:17 private_key.pem
-rw-r--r--. 1 polkitd input        452 3月  14 18:17 public_key.pem
drwxr-x---. 2 polkitd input         98 3月  22 16:36 seata_order
drwxr-x---. 2 polkitd input         98 3月  22 16:38 seata_storage
drwxr-x---. 2 polkitd input         84 3月  22 16:37 seata_tcc_record
-rw-r--r--. 1 polkitd input       1112 3月  14 18:17 server-cert.pem
-rw-------. 1 polkitd input       1676 3月  14 18:17 server-key.pem
drwxr-x---. 2 polkitd input       8192 3月  14 18:17 sys
[root@home data]# ll monomer_order/
总用量 13669012
-rw-r-----. 1 polkitd input         67 3月  14 18:19 db.opt
-rw-r-----. 1 polkitd input       9075 4月  19 23:01 etl_binlog_consume_record.frm
-rw-r-----. 1 polkitd input     114688 4月  19 23:01 etl_binlog_consume_record.ibd
-rw-r-----. 1 polkitd input      13441 4月  19 23:01 etl_dirty_record.frm
-rw-r-----. 1 polkitd input      98304 4月  19 23:01 etl_dirty_record.ibd
-rw-r-----. 1 polkitd input       9002 4月  19 23:01 etl_progress_config.frm
-rw-r-----. 1 polkitd input      98304 4月  19 23:01 etl_progress_config.ibd
-rw-r-----. 1 polkitd input       9467 4月  19 23:01 etl_progress.frm
-rw-r-----. 1 polkitd input      98304 4月  19 23:01 etl_progress.ibd
-rw-r-----. 1 polkitd input       8981 4月  19 23:01 etl_statistical.frm
-rw-r-----. 1 polkitd input     131072 4月  19 23:01 etl_statistical.ibd
-rw-r-----. 1 polkitd input      10389 3月  15 10:24 order_info.frm
-rw-r-----. 1 polkitd input 5473566720 3月  30 08:48 order_info.ibd
-rw-r-----. 1 polkitd input       9424 3月  14 19:27 order_item_detail.frm
-rw-r-----. 1 polkitd input 8522825728 3月  14 21:57 order_item_detail.ibd
```

- ibdata1
- ib_logfile0 和 ib_logfile1
- ibtmp1
- monomer_order/order_item_detail.ibd 




![页结构分解](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/yuque_diagram01.jpg)



---


<img style="border:1px red solid; display:block; margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="微信公众号" />







