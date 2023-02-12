import{c as a,a as n,F as e,e as r,d as l,o as b}from"./app.aaf87aa5.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const i={},c=r(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[client]
port = 3306
socket = /tmp/mysql.sock

[mysqld]

###############################\u57FA\u7840\u8BBE\u7F6E#####################################
#Mysql\u670D\u52A1\u7684\u552F\u4E00\u7F16\u53F7 \u6BCF\u4E2Amysql\u670D\u52A1Id\u9700\u552F\u4E00
server-id = 1

#\u670D\u52A1\u7AEF\u53E3\u53F7 \u9ED8\u8BA43306
port = 3306

#mysql\u5B89\u88C5\u6839\u76EE\u5F55
basedir = /opt/mysql

#mysql\u6570\u636E\u6587\u4EF6\u6240\u5728\u4F4D\u7F6E
datadir = /opt/mysql/data

#\u4E34\u65F6\u76EE\u5F55 \u6BD4\u5982load data infile\u4F1A\u7528\u5230
tmpdir  = /tmp

#\u8BBE\u7F6Esocke\u6587\u4EF6\u6240\u5728\u76EE\u5F55
socket  = /tmp/mysql.sock

#\u4E3B\u8981\u7528\u4E8EMyISAM\u5B58\u50A8\u5F15\u64CE,\u5982\u679C\u591A\u53F0\u670D\u52A1\u5668\u8FDE\u63A5\u4E00\u4E2A\u6570\u636E\u5E93\u5219\u5EFA\u8BAE\u6CE8\u91CA\u4E0B\u9762\u5185\u5BB9
skip-external-locking

#\u53EA\u80FD\u7528IP\u5730\u5740\u68C0\u67E5\u5BA2\u6237\u7AEF\u7684\u767B\u5F55\uFF0C\u4E0D\u7528\u4E3B\u673A\u540D
skip_name_resolve = 1

#\u4E8B\u52A1\u9694\u79BB\u7EA7\u522B\uFF0C\u9ED8\u8BA4\u4E3A\u53EF\u91CD\u590D\u8BFB\uFF0Cmysql\u9ED8\u8BA4\u53EF\u91CD\u590D\u8BFB\u7EA7\u522B\uFF08\u6B64\u7EA7\u522B\u4E0B\u53EF\u80FD\u53C2\u6570\u5F88\u591A\u95F4\u9699\u9501\uFF0C\u5F71\u54CD\u6027\u80FD\uFF09
transaction_isolation = READ-COMMITTED

#\u6570\u636E\u5E93\u9ED8\u8BA4\u5B57\u7B26\u96C6,\u4E3B\u6D41\u5B57\u7B26\u96C6\u652F\u6301\u4E00\u4E9B\u7279\u6B8A\u8868\u60C5\u7B26\u53F7\uFF08\u7279\u6B8A\u8868\u60C5\u7B26\u5360\u75284\u4E2A\u5B57\u8282\uFF09
character-set-server = utf8mb4

#\u6570\u636E\u5E93\u5B57\u7B26\u96C6\u5BF9\u5E94\u4E00\u4E9B\u6392\u5E8F\u7B49\u89C4\u5219\uFF0C\u6CE8\u610F\u8981\u548Ccharacter-set-server\u5BF9\u5E94
collation-server = utf8mb4_general_ci

#\u8BBE\u7F6Eclient\u8FDE\u63A5mysql\u65F6\u7684\u5B57\u7B26\u96C6,\u9632\u6B62\u4E71\u7801
init_connect=&#39;SET NAMES utf8mb4&#39;

#\u662F\u5426\u5BF9sql\u8BED\u53E5\u5927\u5C0F\u5199\u654F\u611F\uFF0C1\u8868\u793A\u4E0D\u654F\u611F
lower_case_table_names = 1

#\u6700\u5927\u8FDE\u63A5\u6570
max_connections = 400

#\u6700\u5927\u9519\u8BEF\u8FDE\u63A5\u6570
max_connect_errors = 1000

#TIMESTAMP\u5982\u679C\u6CA1\u6709\u663E\u793A\u58F0\u660ENOT NULL\uFF0C\u5141\u8BB8NULL\u503C
explicit_defaults_for_timestamp = true

#SQL\u6570\u636E\u5305\u53D1\u9001\u7684\u5927\u5C0F\uFF0C\u5982\u679C\u6709BLOB\u5BF9\u8C61\u5EFA\u8BAE\u4FEE\u6539\u62101G
max_allowed_packet = 128M

#MySQL\u8FDE\u63A5\u95F2\u7F6E\u8D85\u8FC7\u4E00\u5B9A\u65F6\u95F4\u540E(\u5355\u4F4D\uFF1A\u79D2)\u5C06\u4F1A\u88AB\u5F3A\u884C\u5173\u95ED
#MySQL\u9ED8\u8BA4\u7684wait_timeout  \u503C\u4E3A8\u4E2A\u5C0F\u65F6, interactive_timeout\u53C2\u6570\u9700\u8981\u540C\u65F6\u914D\u7F6E\u624D\u80FD\u751F\u6548
interactive_timeout = 1800
wait_timeout = 1800

#\u5185\u90E8\u5185\u5B58\u4E34\u65F6\u8868\u7684\u6700\u5927\u503C \uFF0C\u8BBE\u7F6E\u6210128M\u3002
#\u6BD4\u5982\u5927\u6570\u636E\u91CF\u7684group by ,order by\u65F6\u53EF\u80FD\u7528\u5230\u4E34\u65F6\u8868\uFF0C
#\u8D85\u8FC7\u4E86\u8FD9\u4E2A\u503C\u5C06\u5199\u5165\u78C1\u76D8\uFF0C\u7CFB\u7EDFIO\u538B\u529B\u589E\u5927
tmp_table_size = 134217728
max_heap_table_size = 134217728

#\u7981\u7528mysql\u7684\u7F13\u5B58\u67E5\u8BE2\u7ED3\u679C\u96C6\u529F\u80FD
#\u540E\u671F\u6839\u636E\u4E1A\u52A1\u60C5\u51B5\u6D4B\u8BD5\u51B3\u5B9A\u662F\u5426\u5F00\u542F
#\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u5173\u95ED\u4E0B\u9762\u4E24\u9879
query_cache_size = 0
query_cache_type = 0


##----------------------------\u7528\u6237\u8FDB\u7A0B\u5206\u914D\u5230\u7684\u5185\u5B58\u8BBE\u7F6EBEGIN-----------------------------##
##\u6BCF\u4E2Asession\u5C06\u4F1A\u5206\u914D\u53C2\u6570\u8BBE\u7F6E\u7684\u5185\u5B58\u5927\u5C0F
#\u7528\u4E8E\u8868\u7684\u987A\u5E8F\u626B\u63CF\uFF0C\u8BFB\u51FA\u7684\u6570\u636E\u6682\u5B58\u4E8Eread_buffer_size\u4E2D\uFF0C\u5F53buff\u6EE1\u65F6\u6216\u8BFB\u5B8C\uFF0C\u5C06\u6570\u636E\u8FD4\u56DE\u4E0A\u5C42\u8C03\u7528\u8005
#\u4E00\u822C\u5728128kb ~ 256kb,\u7528\u4E8EMyISAM
#read_buffer_size = 131072

#\u7528\u4E8E\u8868\u7684\u968F\u673A\u8BFB\u53D6\uFF0C\u5F53\u6309\u7167\u4E00\u4E2A\u975E\u7D22\u5F15\u5B57\u6BB5\u6392\u5E8F\u8BFB\u53D6\u65F6\u4F1A\u7528\u5230\uFF0C
#\u4E00\u822C\u5728128kb ~ 256kb,\u7528\u4E8EMyISAM
#read_rnd_buffer_size = 262144

#order by\u6216group by\u65F6\u7528\u5230
#\u5EFA\u8BAE\u5148\u8C03\u6574\u4E3A2M\uFF0C\u540E\u671F\u89C2\u5BDF\u8C03\u6574
sort_buffer_size = 2097152

#\u4E00\u822C\u6570\u636E\u5E93\u4E2D\u6CA1\u4EC0\u4E48\u5927\u7684\u4E8B\u52A1\uFF0C\u8BBE\u62101~2M\uFF0C\u9ED8\u8BA432kb
binlog_cache_size = 524288


##---------------------------\u7528\u6237\u8FDB\u7A0B\u5206\u914D\u5230\u7684\u5185\u5B58\u8BBE\u7F6EEND-------------------------------##
#\u5728MySQL\u6682\u65F6\u505C\u6B62\u54CD\u5E94\u65B0\u8BF7\u6C42\u4E4B\u524D\u7684\u77ED\u65F6\u95F4\u5185\u591A\u5C11\u4E2A\u8BF7\u6C42\u53EF\u4EE5\u88AB\u5B58\u5728\u5806\u6808\u4E2D
#\u5B98\u65B9\u5EFA\u8BAEback_log = 50 + (max_connections / 5),\u5C01\u9876\u6570\u4E3A900
back_log = 130


############################\u65E5  \u5FD7 \u8BBE\u7F6E##########################################
#\u6570\u636E\u5E93\u9519\u8BEF\u65E5\u5FD7\u6587\u4EF6
log_error = error.log

#\u6162\u67E5\u8BE2sql\u65E5\u5FD7\u8BBE\u7F6E
slow_query_log = 1
slow_query_log_file = slow.log

#\u68C0\u67E5\u672A\u4F7F\u7528\u5230\u7D22\u5F15\u7684sql
log_queries_not_using_indexes = 1

#\u9488\u5BF9log_queries_not_using_indexes\u5F00\u542F\u540E\uFF0C\u8BB0\u5F55\u6162sql\u7684\u9891\u6B21\u3001\u6BCF\u5206\u949F\u8BB0\u5F55\u7684\u6761\u6570
log_throttle_queries_not_using_indexes = 5

#\u4F5C\u4E3A\u4ECE\u5E93\u65F6\u751F\u6548,\u4ECE\u5E93\u590D\u5236\u4E2D\u5982\u4F55\u6709\u6162sql\u4E5F\u5C06\u88AB\u8BB0\u5F55
log_slow_slave_statements = 1

#\u6162\u67E5\u8BE2\u6267\u884C\u7684\u79D2\u6570\uFF0C\u5FC5\u987B\u8FBE\u5230\u6B64\u503C\u53EF\u88AB\u8BB0\u5F55
long_query_time = 8

#\u68C0\u7D22\u7684\u884C\u6570\u5FC5\u987B\u8FBE\u5230\u6B64\u503C\u624D\u53EF\u88AB\u8BB0\u4E3A\u6162\u67E5\u8BE2
min_examined_row_limit = 100

#mysql binlog\u65E5\u5FD7\u6587\u4EF6\u4FDD\u5B58\u7684\u8FC7\u671F\u65F6\u95F4\uFF0C\u8FC7\u671F\u540E\u81EA\u52A8\u5220\u9664
expire_logs_days = 5


############################\u4E3B\u4ECE\u590D\u5236 \u8BBE\u7F6E########################################

#\u5F00\u542Fmysql binlog\u529F\u80FD
log-bin=mysql-bin

#binlog\u8BB0\u5F55\u5185\u5BB9\u7684\u65B9\u5F0F\uFF0C\u8BB0\u5F55\u88AB\u64CD\u4F5C\u7684\u6BCF\u4E00\u884C
binlog_format = ROW

#\u5BF9\u4E8Ebinlog_format = ROW\u6A21\u5F0F\u65F6\uFF0C\u51CF\u5C11\u8BB0\u5F55\u65E5\u5FD7\u7684\u5185\u5BB9\uFF0C\u53EA\u8BB0\u5F55\u53D7\u5F71\u54CD\u7684\u5217
binlog_row_image = minimal

#master status and connection information\u8F93\u51FA\u5230\u8868mysql.slave_master_info\u4E2D
master_info_repository = TABLE

#the slave&#39;s position in the relay logs\u8F93\u51FA\u5230\u8868mysql.slave_relay_log_info\u4E2D
relay_log_info_repository = TABLE

#\u4F5C\u4E3A\u4ECE\u5E93\u65F6\u751F\u6548,\u60F3\u8FDB\u884C\u7EA7\u8054\u590D\u5236\uFF0C\u5219\u9700\u8981\u6B64\u53C2\u6570
log_slave_updates

#\u4F5C\u4E3A\u4ECE\u5E93\u65F6\u751F\u6548,\u4E2D\u7EE7\u65E5\u5FD7relay-log\u53EF\u4EE5\u81EA\u6211\u4FEE\u590D
relay_log_recovery = 1

#\u4F5C\u4E3A\u4ECE\u5E93\u65F6\u751F\u6548,\u4E3B\u4ECE\u590D\u5236\u65F6\u5FFD\u7565\u7684\u9519\u8BEF
slave_skip_errors = ddl_exist_errors


##---redo log\u548Cbinlog\u7684\u5173\u7CFB\u8BBE\u7F6EBEGIN---##

#(\u6B65\u9AA41) prepare dml\u76F8\u5173\u7684SQL\u64CD\u4F5C\uFF0C\u7136\u540E\u5C06redo log buff\u4E2D\u7684\u7F13\u5B58\u6301\u4E45\u5316\u5230\u78C1\u76D8

#(\u6B65\u9AA42)\u5982\u679C\u524D\u9762prepare\u6210\u529F\uFF0C\u90A3\u4E48\u518D\u7EE7\u7EED\u5C06\u4E8B\u52A1\u65E5\u5FD7\u6301\u4E45\u5316\u5230binlog

#(\u6B65\u9AA43)\u5982\u679C\u524D\u9762\u6210\u529F\uFF0C\u90A3\u4E48\u5728redo log\u91CC\u9762\u5199\u4E0A\u4E00\u4E2Acommit\u8BB0\u5F55

#\u5F53innodb_flush_log_at_trx_commit\u548Csync_binlog\u90FD\u4E3A1\u65F6\u662F\u6700\u5B89\u5168\u7684\uFF0C

#\u5728mysqld\u670D\u52A1\u5D29\u6E83\u6216\u8005\u670D\u52A1\u5668\u4E3B\u673Acrash\u7684\u60C5\u51B5\u4E0B\uFF0Cbinary log\u53EA\u6709\u53EF\u80FD\u4E22\u5931\u6700\u591A\u4E00\u4E2A\u8BED\u53E5\u6216\u8005\u4E00\u4E2A\u4E8B\u52A1\u3002

#\u4F46\u662F\u90FD\u8BBE\u7F6E\u4E3A1\u65F6\u4F1A\u5BFC\u81F4\u9891\u7E41\u7684io\u64CD\u4F5C\uFF0C\u56E0\u6B64\u8BE5\u6A21\u5F0F\u4E5F\u662F\u6700\u6162\u7684\u4E00\u79CD\u65B9\u5F0F\u3002

#\u5F53innodb_flush_log_at_trx_commit\u8BBE\u7F6E\u4E3A0\uFF0Cmysqld\u8FDB\u7A0B\u7684\u5D29\u6E83\u4F1A\u5BFC\u81F4\u4E0A\u4E00\u79D2\u949F\u6240\u6709\u4E8B\u52A1\u6570\u636E\u7684\u4E22\u5931\u3002

#\u5F53innodb_flush_log_at_trx_commit\u8BBE\u7F6E\u4E3A2\uFF0C\u53EA\u6709\u5728\u64CD\u4F5C\u7CFB\u7EDF\u5D29\u6E83\u6216\u8005\u7CFB\u7EDF\u6389\u7535\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E0A\u4E00\u79D2\u949F\u6240\u6709\u4E8B\u52A1\u6570\u636E\u624D\u53EF\u80FD\u4E22\u5931\u3002

#commit\u4E8B\u52A1\u65F6,\u63A7\u5236redo log buff\u6301\u4E45\u5316\u78C1\u76D8\u7684\u6A21\u5F0F \u9ED8\u8BA4\u4E3A1

innodb_flush_log_at_trx_commit = 2

#commit\u4E8B\u52A1\u65F6,\u63A7\u5236\u5199\u5165mysql binlog\u65E5\u5FD7\u7684\u6A21\u5F0F \u9ED8\u8BA4\u4E3A 0

#innodb_flush_log_at_trx_commit\u548Csync_binlog\u90FD\u4E3A1\u65F6\uFF0Cmysql\u6700\u4E3A\u5B89\u5168\u4F46\u6027\u80FD\u4E0A\u538B\u529B\u4E5F\u662F\u6700\u5927

sync_binlog = 1

##---redo log \u548C binlog\u7684\u5173\u7CFB\u8BBE\u7F6EEND---##



############################Innodb\u8BBE\u7F6E##########################################

#\u6570\u636E\u5757\u7684\u5355\u4F4D8k\uFF0C\u9ED8\u8BA4\u662F16k\uFF0C16kCPU\u538B\u529B\u7A0D\u5C0F\uFF0C8k\u5BF9select\u7684\u541E\u5410\u91CF\u5927

#innodb_page_size\u7684\u53C2\u6570\u503C\u4E5F\u5F71\u54CD\u6700\u5927\u7D22\u5F15\u957F\u5EA6\uFF0C8k\u6BD416k\u7684\u6700\u5927\u7D22\u5F15\u957F\u5EA6\u5C0F

#innodb_page_size = 8192

#\u4E00\u822C\u8BBE\u7F6E\u7269\u7406\u5B58\u50A8\u768460% ~ 70%

innodb_buffer_pool_size = 1G



#5.7.6\u4E4B\u540E\u9ED8\u8BA416M

#innodb_log_buffer_size = 16777216

#\u8BE5\u53C2\u6570\u9488\u5BF9unix\u3001linux\uFF0Cwindow\u4E0A\u76F4\u63A5\u6CE8\u91CA\u8BE5\u53C2\u6570.\u9ED8\u8BA4\u503C\u4E3ANULL

#O_DIRECT\u51CF\u5C11\u64CD\u4F5C\u7CFB\u7EDF\u7EA7\u522BVFS\u7684\u7F13\u5B58\u548CInnodb\u672C\u8EAB\u7684buffer\u7F13\u5B58\u4E4B\u95F4\u7684\u51B2\u7A81

innodb_flush_method = O_DIRECT



#\u6B64\u683C\u5F0F\u652F\u6301\u538B\u7F29, 5.7.7\u4E4B\u540E\u4E3A\u9ED8\u8BA4\u503C

innodb_file_format = Barracuda



#CPU\u591A\u6838\u5904\u7406\u80FD\u529B\u8BBE\u7F6E\uFF0C\u5047\u8BBECPU\u662F2\u98974\u6838\u7684\uFF0C\u8BBE\u7F6E\u5982\u4E0B

#\u8BFB\u591A\uFF0C\u5199\u5C11\u53EF\u4EE5\u8BBE\u62102:6\u7684\u6BD4\u4F8B

innodb_write_io_threads = 4

innodb_read_io_threads = 4



#\u63D0\u9AD8\u5237\u65B0\u810F\u9875\u6570\u91CF\u548C\u5408\u5E76\u63D2\u5165\u6570\u91CF\uFF0C\u6539\u5584\u78C1\u76D8I/O\u5904\u7406\u80FD\u529B

#\u9ED8\u8BA4\u503C200\uFF08\u5355\u4F4D\uFF1A\u9875\uFF09

#\u53EF\u6839\u636E\u78C1\u76D8\u8FD1\u671F\u7684IOPS\u786E\u5B9A\u8BE5\u503C

innodb_io_capacity = 500



#\u4E3A\u4E86\u83B7\u53D6\u88AB\u9501\u5B9A\u7684\u8D44\u6E90\u6700\u5927\u7B49\u5F85\u65F6\u95F4\uFF0C\u9ED8\u8BA450\u79D2\uFF0C\u8D85\u8FC7\u8BE5\u65F6\u95F4\u4F1A\u62A5\u5982\u4E0B\u9519\u8BEF:

# ERROR 1205 (HY000): Lock wait timeout exceeded; try restarting transaction

innodb_lock_wait_timeout = 30



#\u8C03\u6574buffer pool\u4E2D\u6700\u8FD1\u4F7F\u7528\u7684\u9875\u8BFB\u53D6\u5E76dump\u7684\u767E\u5206\u6BD4,\u901A\u8FC7\u8BBE\u7F6E\u8BE5\u53C2\u6570\u53EF\u4EE5\u51CF\u5C11\u8F6C\u50A8\u7684page\u6570

innodb_buffer_pool_dump_pct = 40



#\u8BBE\u7F6EredoLog\u6587\u4EF6\u6240\u5728\u76EE\u5F55, redoLog\u8BB0\u5F55\u4E8B\u52A1\u5177\u4F53\u64CD\u4F5C\u5185\u5BB9

innodb_log_group_home_dir = /opt/mysql/redolog/



#\u8BBE\u7F6EundoLog\u6587\u4EF6\u6240\u5728\u76EE\u5F55, undoLog\u7528\u4E8E\u4E8B\u52A1\u56DE\u6EDA\u64CD\u4F5C

innodb_undo_directory = /opt/mysql/undolog/



#\u5728innodb_log_group_home_dir\u4E2D\u7684redoLog\u6587\u4EF6\u6570, redoLog\u6587\u4EF6\u5185\u5BB9\u662F\u5FAA\u73AF\u8986\u76D6\u5199\u5165\u3002

innodb_log_files_in_group = 3



#MySql5.7\u5B98\u65B9\u5EFA\u8BAE\u5C3D\u91CF\u8BBE\u7F6E\u7684\u5927\u4E9B\uFF0C\u53EF\u4EE5\u63A5\u8FD1innodb_buffer_pool_size\u7684\u5927\u5C0F

#\u4E4B\u524D\u8BBE\u7F6E\u8BE5\u503C\u8F83\u5927\u65F6\u53EF\u80FD\u5BFC\u81F4mysql\u5B95\u673A\u6062\u590D\u65F6\u95F4\u8FC7\u957F\uFF0C\u73B0\u5728\u6062\u590D\u5DF2\u7ECF\u52A0\u5FEB\u5F88\u591A\u4E86

#\u8BE5\u503C\u51CF\u5C11\u810F\u6570\u636E\u5237\u65B0\u5230\u78C1\u76D8\u7684\u9891\u6B21

#\u6700\u5927\u503Cinnodb_log_file_size * innodb_log_files_in_group &lt;= 512GB,\u5355\u6587\u4EF6&lt;=256GB

innodb_log_file_size = 1024M



#\u8BBE\u7F6EundoLog\u6587\u4EF6\u6240\u5360\u7A7A\u95F4\u53EF\u4EE5\u56DE\u6536

#5.7\u4E4B\u524D\u7684MySql\u7684undoLog\u6587\u4EF6\u4E00\u76F4\u589E\u5927\u65E0\u6CD5\u56DE\u6536

innodb_undo_log_truncate = 1

innodb_undo_tablespaces = 3

innodb_undo_logs = 128



#5.7.7\u9ED8\u8BA4\u5F00\u542F\u8BE5\u53C2\u6570 \u63A7\u5236\u5355\u5217\u7D22\u5F15\u957F\u5EA6\u6700\u5927\u8FBE\u52303072

#innodb_large_prefix = 1



#5.7.8\u9ED8\u8BA4\u4E3A4\u4E2A, Inodb\u540E\u53F0\u6E05\u7406\u5DE5\u4F5C\u7684\u7EBF\u7A0B\u6570

#innodb_purge_threads = 4



#\u901A\u8FC7\u8BBE\u7F6E\u914D\u7F6E\u53C2\u6570innodb_thread_concurrency\u6765\u9650\u5236\u5E76\u53D1\u7EBF\u7A0B\u7684\u6570\u91CF\uFF0C

#\u4E00\u65E6\u6267\u884C\u7EBF\u7A0B\u7684\u6570\u91CF\u8FBE\u5230\u8FD9\u4E2A\u9650\u5236\uFF0C\u989D\u5916\u7684\u7EBF\u7A0B\u5728\u88AB\u653E\u7F6E\u5230\u5BF9\u961F\u5217\u4E2D\u4E4B\u524D\uFF0C\u4F1A\u7761\u7720\u6570\u5FAE\u79D2\uFF0C

#\u53EF\u4EE5\u901A\u8FC7\u8BBE\u5B9A\u53C2\u6570innodb_thread_sleep_delay\u6765\u914D\u7F6E\u7761\u7720\u65F6\u95F4

#\u8BE5\u503C\u9ED8\u8BA4\u4E3A0,\u5728\u5B98\u65B9doc\u4E0A\uFF0C\u5BF9\u4E8Einnodb_thread_concurrency\u7684\u4F7F\u7528\uFF0C\u4E5F\u7ED9\u51FA\u4E86\u4E00\u4E9B\u5EFA\u8BAE:

#(1)\u5982\u679C\u4E00\u4E2A\u5DE5\u4F5C\u8D1F\u8F7D\u4E2D\uFF0C\u5E76\u53D1\u7528\u6237\u7EBF\u7A0B\u7684\u6570\u91CF\u5C0F\u4E8E64\uFF0C\u5EFA\u8BAE\u8BBE\u7F6Einnodb_thread_concurrency=0\uFF1B

#(2)\u5982\u679C\u5DE5\u4F5C\u8D1F\u8F7D\u4E00\u76F4\u8F83\u4E3A\u4E25\u91CD\u751A\u81F3\u5076\u5C14\u8FBE\u5230\u9876\u5CF0\uFF0C\u5EFA\u8BAE\u5148\u8BBE\u7F6Einnodb_thread_concurrency=128,

###\u5E76\u901A\u8FC7\u4E0D\u65AD\u7684\u964D\u4F4E\u8FD9\u4E2A\u53C2\u6570\uFF0C96, 80, 64\u7B49\u7B49\uFF0C\u76F4\u5230\u53D1\u73B0\u80FD\u591F\u63D0\u4F9B\u6700\u4F73\u6027\u80FD\u7684\u7EBF\u7A0B\u6570

#innodb_thread_concurrency = 0



#\u5F3A\u6240\u6709\u53D1\u751F\u7684\u6B7B\u9501\u9519\u8BEF\u4FE1\u606F\u8BB0\u5F55\u5230error.log\u4E2D\uFF0C\u4E4B\u524D\u901A\u8FC7\u547D\u4EE4\u884C\u53EA\u80FD\u67E5\u770B\u6700\u8FD1\u4E00\u6B21\u6B7B\u9501\u4FE1\u606F

innodb_print_all_deadlocks = 1



############################\u5176\u4ED6\u5185\u5BB9 \u8BBE\u7F6E##########################################

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

#\u589E\u52A0\u6BCF\u4E2A\u8FDB\u7A0B\u7684\u53EF\u6253\u5F00\u6587\u4EF6\u6570\u91CF.

open-files-limit = 28192

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br><span class="line-number">310</span><br><span class="line-number">311</span><br><span class="line-number">312</span><br><span class="line-number">313</span><br><span class="line-number">314</span><br><span class="line-number">315</span><br><span class="line-number">316</span><br><span class="line-number">317</span><br><span class="line-number">318</span><br><span class="line-number">319</span><br><span class="line-number">320</span><br><span class="line-number">321</span><br><span class="line-number">322</span><br><span class="line-number">323</span><br><span class="line-number">324</span><br><span class="line-number">325</span><br><span class="line-number">326</span><br><span class="line-number">327</span><br><span class="line-number">328</span><br><span class="line-number">329</span><br><span class="line-number">330</span><br><span class="line-number">331</span><br><span class="line-number">332</span><br><span class="line-number">333</span><br><span class="line-number">334</span><br><span class="line-number">335</span><br><span class="line-number">336</span><br><span class="line-number">337</span><br><span class="line-number">338</span><br><span class="line-number">339</span><br><span class="line-number">340</span><br><span class="line-number">341</span><br><span class="line-number">342</span><br><span class="line-number">343</span><br><span class="line-number">344</span><br><span class="line-number">345</span><br><span class="line-number">346</span><br><span class="line-number">347</span><br><span class="line-number">348</span><br><span class="line-number">349</span><br><span class="line-number">350</span><br><span class="line-number">351</span><br><span class="line-number">352</span><br><span class="line-number">353</span><br><span class="line-number">354</span><br><span class="line-number">355</span><br><span class="line-number">356</span><br><span class="line-number">357</span><br><span class="line-number">358</span><br><span class="line-number">359</span><br><span class="line-number">360</span><br><span class="line-number">361</span><br><span class="line-number">362</span><br></div></div>`,1),m=l("\u539F\u6587\u94FE\u63A5\uFF1Ahttps://blog.csdn.net/gzt19881123/article/details/52594783 "),u=["src"];function o(s,_){return b(),a(e,null,[c,n("p",null,[m,n("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:s.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,u)])],64)}var g=p(i,[["render",o],["__file","mysql5.7-config-file.html.vue"]]);export{g as default};
