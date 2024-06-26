---
title: "mysql配置文件"
category:
  - "linux"
tag:
  - "software"
---

```
[client]
port = 3306
socket = /tmp/mysql.sock

[mysqld]

###############################基础设置#####################################
#Mysql服务的唯一编号 每个mysql服务Id需唯一
server-id = 1

#服务端口号 默认3306
port = 3306

#mysql安装根目录
basedir = /opt/mysql

#mysql数据文件所在位置
datadir = /opt/mysql/data

#临时目录 比如load data infile会用到
tmpdir  = /tmp

#设置socke文件所在目录
socket  = /tmp/mysql.sock

#主要用于MyISAM存储引擎,如果多台服务器连接一个数据库则建议注释下面内容
skip-external-locking

#只能用IP地址检查客户端的登录，不用主机名
skip_name_resolve = 1

#事务隔离级别，默认为可重复读，mysql默认可重复读级别（此级别下可能参数很多间隙锁，影响性能）
transaction_isolation = READ-COMMITTED

#数据库默认字符集,主流字符集支持一些特殊表情符号（特殊表情符占用4个字节）
character-set-server = utf8mb4

#数据库字符集对应一些排序等规则，注意要和character-set-server对应
collation-server = utf8mb4_general_ci

#设置client连接mysql时的字符集,防止乱码
init_connect='SET NAMES utf8mb4'

#是否对sql语句大小写敏感，1表示不敏感
lower_case_table_names = 1

#最大连接数
max_connections = 400

#最大错误连接数
max_connect_errors = 1000

#TIMESTAMP如果没有显示声明NOT NULL，允许NULL值
explicit_defaults_for_timestamp = true

#SQL数据包发送的大小，如果有BLOB对象建议修改成1G
max_allowed_packet = 128M

#MySQL连接闲置超过一定时间后(单位：秒)将会被强行关闭
#MySQL默认的wait_timeout  值为8个小时, interactive_timeout参数需要同时配置才能生效
interactive_timeout = 1800
wait_timeout = 1800

#内部内存临时表的最大值 ，设置成128M。
#比如大数据量的group by ,order by时可能用到临时表，
#超过了这个值将写入磁盘，系统IO压力增大
tmp_table_size = 134217728
max_heap_table_size = 134217728

#禁用mysql的缓存查询结果集功能
#后期根据业务情况测试决定是否开启
#大部分情况下关闭下面两项
query_cache_size = 0
query_cache_type = 0


##----------------------------用户进程分配到的内存设置BEGIN-----------------------------##
##每个session将会分配参数设置的内存大小
#用于表的顺序扫描，读出的数据暂存于read_buffer_size中，当buff满时或读完，将数据返回上层调用者
#一般在128kb ~ 256kb,用于MyISAM
#read_buffer_size = 131072

#用于表的随机读取，当按照一个非索引字段排序读取时会用到，
#一般在128kb ~ 256kb,用于MyISAM
#read_rnd_buffer_size = 262144

#order by或group by时用到
#建议先调整为2M，后期观察调整
sort_buffer_size = 2097152

#一般数据库中没什么大的事务，设成1~2M，默认32kb
binlog_cache_size = 524288


##---------------------------用户进程分配到的内存设置END-------------------------------##
#在MySQL暂时停止响应新请求之前的短时间内多少个请求可以被存在堆栈中
#官方建议back_log = 50 + (max_connections / 5),封顶数为900
back_log = 130


############################日  志 设置##########################################
#数据库错误日志文件
log_error = error.log

#慢查询sql日志设置
slow_query_log = 1
slow_query_log_file = slow.log

#检查未使用到索引的sql
log_queries_not_using_indexes = 1

#针对log_queries_not_using_indexes开启后，记录慢sql的频次、每分钟记录的条数
log_throttle_queries_not_using_indexes = 5

#作为从库时生效,从库复制中如何有慢sql也将被记录
log_slow_slave_statements = 1

#慢查询执行的秒数，必须达到此值可被记录
long_query_time = 8

#检索的行数必须达到此值才可被记为慢查询
min_examined_row_limit = 100

#mysql binlog日志文件保存的过期时间，过期后自动删除
expire_logs_days = 5


############################主从复制 设置########################################

#开启mysql binlog功能
log-bin=mysql-bin

#binlog记录内容的方式，记录被操作的每一行
binlog_format = ROW

#对于binlog_format = ROW模式时，减少记录日志的内容，只记录受影响的列
binlog_row_image = minimal

#master status and connection information输出到表mysql.slave_master_info中
master_info_repository = TABLE

#the slave's position in the relay logs输出到表mysql.slave_relay_log_info中
relay_log_info_repository = TABLE

#作为从库时生效,想进行级联复制，则需要此参数
log_slave_updates

#作为从库时生效,中继日志relay-log可以自我修复
relay_log_recovery = 1

#作为从库时生效,主从复制时忽略的错误
slave_skip_errors = ddl_exist_errors


##---redo log和binlog的关系设置BEGIN---##

#(步骤1) prepare dml相关的SQL操作，然后将redo log buff中的缓存持久化到磁盘

#(步骤2)如果前面prepare成功，那么再继续将事务日志持久化到binlog

#(步骤3)如果前面成功，那么在redo log里面写上一个commit记录

#当innodb_flush_log_at_trx_commit和sync_binlog都为1时是最安全的，

#在mysqld服务崩溃或者服务器主机crash的情况下，binary log只有可能丢失最多一个语句或者一个事务。

#但是都设置为1时会导致频繁的io操作，因此该模式也是最慢的一种方式。

#当innodb_flush_log_at_trx_commit设置为0，mysqld进程的崩溃会导致上一秒钟所有事务数据的丢失。

#当innodb_flush_log_at_trx_commit设置为2，只有在操作系统崩溃或者系统掉电的情况下，上一秒钟所有事务数据才可能丢失。

#commit事务时,控制redo log buff持久化磁盘的模式 默认为1

innodb_flush_log_at_trx_commit = 2

#commit事务时,控制写入mysql binlog日志的模式 默认为 0

#innodb_flush_log_at_trx_commit和sync_binlog都为1时，mysql最为安全但性能上压力也是最大

sync_binlog = 1

##---redo log 和 binlog的关系设置END---##



############################Innodb设置##########################################

#数据块的单位8k，默认是16k，16kCPU压力稍小，8k对select的吞吐量大

#innodb_page_size的参数值也影响最大索引长度，8k比16k的最大索引长度小

#innodb_page_size = 8192

#一般设置物理存储的60% ~ 70%

innodb_buffer_pool_size = 1G



#5.7.6之后默认16M

#innodb_log_buffer_size = 16777216

#该参数针对unix、linux，window上直接注释该参数.默认值为NULL

#O_DIRECT减少操作系统级别VFS的缓存和Innodb本身的buffer缓存之间的冲突

innodb_flush_method = O_DIRECT



#此格式支持压缩, 5.7.7之后为默认值

innodb_file_format = Barracuda



#CPU多核处理能力设置，假设CPU是2颗4核的，设置如下

#读多，写少可以设成2:6的比例

innodb_write_io_threads = 4

innodb_read_io_threads = 4



#提高刷新脏页数量和合并插入数量，改善磁盘I/O处理能力

#默认值200（单位：页）

#可根据磁盘近期的IOPS确定该值

innodb_io_capacity = 500



#为了获取被锁定的资源最大等待时间，默认50秒，超过该时间会报如下错误:

# ERROR 1205 (HY000): Lock wait timeout exceeded; try restarting transaction

innodb_lock_wait_timeout = 30



#调整buffer pool中最近使用的页读取并dump的百分比,通过设置该参数可以减少转储的page数

innodb_buffer_pool_dump_pct = 40



#设置redoLog文件所在目录, redoLog记录事务具体操作内容

innodb_log_group_home_dir = /opt/mysql/redolog/



#设置undoLog文件所在目录, undoLog用于事务回滚操作

innodb_undo_directory = /opt/mysql/undolog/



#在innodb_log_group_home_dir中的redoLog文件数, redoLog文件内容是循环覆盖写入。

innodb_log_files_in_group = 3



#MySql5.7官方建议尽量设置的大些，可以接近innodb_buffer_pool_size的大小

#之前设置该值较大时可能导致mysql宕机恢复时间过长，现在恢复已经加快很多了

#该值减少脏数据刷新到磁盘的频次

#最大值innodb_log_file_size * innodb_log_files_in_group <= 512GB,单文件<=256GB

innodb_log_file_size = 1024M



#设置undoLog文件所占空间可以回收

#5.7之前的MySql的undoLog文件一直增大无法回收

innodb_undo_log_truncate = 1

innodb_undo_tablespaces = 3

innodb_undo_logs = 128



#5.7.7默认开启该参数 控制单列索引长度最大达到3072

#innodb_large_prefix = 1



#5.7.8默认为4个, Inodb后台清理工作的线程数

#innodb_purge_threads = 4



#通过设置配置参数innodb_thread_concurrency来限制并发线程的数量，

#一旦执行线程的数量达到这个限制，额外的线程在被放置到对队列中之前，会睡眠数微秒，

#可以通过设定参数innodb_thread_sleep_delay来配置睡眠时间

#该值默认为0,在官方doc上，对于innodb_thread_concurrency的使用，也给出了一些建议:

#(1)如果一个工作负载中，并发用户线程的数量小于64，建议设置innodb_thread_concurrency=0；

#(2)如果工作负载一直较为严重甚至偶尔达到顶峰，建议先设置innodb_thread_concurrency=128,

###并通过不断的降低这个参数，96, 80, 64等等，直到发现能够提供最佳性能的线程数

#innodb_thread_concurrency = 0



#强所有发生的死锁错误信息记录到error.log中，之前通过命令行只能查看最近一次死锁信息

innodb_print_all_deadlocks = 1



############################其他内容 设置##########################################

[mysqldump]

quick

max_allowed_packet = 128M

[mysql]

no-auto-rehash

[myisamchk]

key_buffer_size = 20M

sort_buffer_size = 256k

read_buffer = 2M

write_buffer = 2M

[mysqlhotcopy]

interactive-timeout

[mysqld_safe]

#增加每个进程的可打开文件数量.

open-files-limit = 28192

```

原文链接：https://blog.csdn.net/gzt19881123/article/details/52594783
---

<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />

