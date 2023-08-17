
## SQL查询语句的执行过程

// todo 

包括 BinLog 、 RedoLog 、 UndoLog



---


## RedoLog

- 保存的内容 
- 如何开启及配置参数讲解
- 文件及文件内容 

### 保存内容 

### 开启与配置参数

### 文件及文件内容

### 作用

- 默认只有两个，一个记录


![20230605120141](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230605120141.png)

![20230605120058](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230605120058.png)

[What is the different between ib_logfile0 and ib_logfile1?](https://forums.mysql.com/read.php?22,632751,635384)

---


## Redolog 和 Binlog 完成两阶段提交

通过 update 语句分析 Redolog 和 Binlog 的使用过程



---

## UndoLog

- 存储内容
- 作用
  - 数据恢复
  - MVCC实现 
  - 


---

## 几种日志文件的总结


|   |  BinLog |  RedoLog |  UndoLog | 
|---|---|---|---|
| 适用对象  |   |   |   |  
| 文件格式  |   |   |   |  
| 写入方式 |   |   |   |  
| 用途  |   |   |   |  


## InnoDB中的数据存储

表空间，用于存储存储一个或多个ibd数据文件（记录和索引），一个ibd文件包含多个段（segment）。

每个表空间都具有一个唯一的表空间id。

Mysql 5.6版本默认所有InnoDB的所有表数据会放在一个系统表空间 ibdata1。

5.7版本之后，每个表的数据默认单独放到一个独立表空间内。但每张表的独立表空间只存放数据页、索引页和写缓冲BitMap页，其他信息如回滚页、插入缓冲索引页、二次写缓冲仍放在系统表空间。所以即使每个表的数据单独放到自己的独立表空间，系统表空间也会不断增大。


![20230605143030](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230605143030.png)

![20230605143127](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230605143127.png)





## 2. SQL


::: tip 命令行(CLI)语法格式中常用符号的含义
尖括号< >：必选参数，实际使用时应将其替换为所需要的参数

大括号{ }：必选参数，内部使用，包含此处允许使用的参数

方括号[ ]：可选参数，在命令中根据需要加以取舍

小括号( )：指明参数的默认值，只用于{ }中

竖线|：用于分隔多个互斥参数，含义为“或”，使用时只能选择一个

省略号…：任意多个参数

:::

::: warning
CLI语法格式适用于大多数命令行场景，如Linux命令行、Redis命令行等。

:::

### 4.2. MVCC原理

事实上数据库中每一个表中都除了我们能看到的字段外，还有另外的几个隐藏字段，这些字段主要用于版本的记录，包括了：

- db_trx_id： （6字节）事务id，记录了最后一次修改这条数据的事务的id；
- db_roll_pointer： （7字节）回滚指针，指向了这条数据的上一个版本；
- db_roll_id：（6字节）隐藏的自增id，如果当前表没有主键，数据库引擎就自动为db_row_id产生一个聚簇索引；
- delet_flag： 删除标记，标记这条数据是否已经被删除；

每一个修改或新增操作都会往undo日志里面记录一条数据，可以把数据表中的数据内容加上三个隐藏字段所组成的记录看作是undo日志。undo日志由隐藏字段中的回滚指针串起来，这就形成了版本链。

例如，往person表中添加一条数据，则隐藏的三个字段我们分别标记为下图所示。

![](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/middleware/mysql/mvcc01.png)

此时我们再对这条数据进行修改，把名称修改为Tom，那么原来的记录就进入undo日志中，并且新的记录产生，隐藏的三个字段也会对应变化

![](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/middleware/mysql/mvcc02.png)

我们又对数据进行修改，把age修改为30，则第二次修改的记录进入undo日志，并生成新的记录，且隐藏的三个字段的值如下图所示。

![](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/middleware/mysql/mvcc03.png)


如上面三个图所示，每次事务提交完成后，都会在undo日志中添加一条记录数据，这些记录数据通过回滚指针链接起来，就形成了整个记录的版本链。

实际上，版本链和undo日志是数据库系统针对回滚操作所采用的一种机制。后来在研究如何解决读写并发一致性问题时，我们又发现版本链和undo日志也可以用到读写并发一致性问题的解决上。

### 4.3. Read view

我们知道，数据库系统会对数据的生命周期有一个记录，这个记录就是undo日志。里面记录了每一次对数据的增加、修改和删除。换句话来说，数据库中的一条数据实际上是有很多条的，那我们挑选哪一条作为我们读操作的响应数据呢？此时，我们想到，对要开始读操作的数据库取几个关键指标，然后根据这几个指标来判断我们取的这条数据能不能作为读操作的响应就可以了呗。换句话来说，我们获取要进行读操作的那个时刻的系统的状态来依次判断我们从undo日志中取得数据是否已经过时。那读操作发生的那个时刻的系统的状态我们就成为读视图。这也是为什么要有读视图的原因。

所谓的读视图，就是在事务进行读操作时，产生的数据库系统的快照，这个快照就相当于读时刻的一个现场。由于数据库系统一直在发生变化，因此我们选择某一个时刻数据库系统的状态作为我们读操作的一个判断。就是拿当前数据记录中的三个隐藏字段与快照中的字段做对比，来判断当前记录是否可以可以被读到。

假设数据库中有好几个事务正在进行操作，那么在某一时刻，我想要读取一条数据，我并不知道数据库中的这条数据到底是不是最新的，那我怎么办？我就需要划定这一时刻，怎么标注这一时刻呢？就需要找一下这个时刻的几个特征，来进行标注。也就是说满足这几个特征的这个时刻，就是我要开始读操作的时刻。那这里就有两个问题：第一是用哪些特征来标注这一时刻？第二是怎么判断这一时刻的数据是否是满足不同隔离模式的条件的？

我们就想，如果我们拿系统某一时刻的特征，与我们要进行读的数据做一下对比，那我们是不是就可以判断我们要读的这个数据是不是满足我们的条件了？

读视图具有三个属性内容：

- creator_trx_id： 记录了创建当前快照的事务的id；
- low_limit_id： 记录了当前数据库系统中最大的事务id+1；
- up_limit_id： 记录了当前数据库系统中正在活跃的事务的最小id；
- trx_ids： 记录了当前数据库系统中所有活跃（未提交）的事务的版本号的集合；

读视图就是用来做判断的条件的，对比的对象就是用来返回给读操作的那一行数据。因此判断条件也是由用来返回给读操作的那一行数据的三个隐藏列与读视图的几个属性进行对比。

判断过程：

```
If(db_trx_id == creator_trx_id){
  // 此时这条记录可以使用
  // 如果要用来读的那条数据的db_trx_id等于创建当前快照的事务的id，说明这条数据是由进行读操作的事务产生的，当然就可以使用了；
} else if(db_trx_id > up_limit_id) {
  // 此时这条记录是可以使用的
  // 因为要用来读的那条数据的db_trx_id大于当前数据库系统中正在活跃的事务的最小id，说明这个快照是在所有活跃事务开始之前创建的，当然可以进行读操作了；
  // 此时是可重复读级别
}
If(db_trx_id >= low_limit_id ){
  // 此时数据不可使用
  // 说明 db_trx_id 的记录是产生当前快照的那一时刻的所有事务提交之后产生的记录，当然就不可用
} 
if(trx_ids.contains(db_trx_id)){
  // 说明 db_trx_id 的记录是活跃事务创建的记录，所以不可使用

} else {
  // 说明 db_trx_id 的记录是活跃事务已经提交的记录，可以使用
  // 此时是已提交读级别
}
```


当前读满足未提交读的隔离级别，这种读方式不能解决脏读的问题；快照读满足根据创建快照的不同时机来分别满足已提交读和可重复读的隔离级别，这种读方式分别能解决脏读数据但是不能解决不可重复读问题和既能解决脏读数据问题又能解决不可重复读问题；把事务串行化，就可以解决所有问题。

此时有了上面的这个过程之后，我们的关注点就转向快照创建的时机，如果快照创建在要进行读操作的事务之前，那么此时系统就满足可重复读的隔离模式；如果快照创建在要进行读操作的事务之后，并且读操作的事务id大于等于当前系统中最大事务id，那么此时的数据是不可用的，要判断当前创建快照的事务与进行读操作的事务的id

- 当前读的操作
  - select lock in share mode (共享锁)
  - select for update (排他锁)
  - update (排他锁)
  - insert (排他锁)
  - delete (排他锁)
  - 串行化事务隔离级别中的读操作



### 4.4. 间隙锁

- 引言
  - 为解决MVCC不能解决幻影读的问题，又引入了间隙锁的概念


## 5. 数据库对不同读写问题的解决

> mysql在早期版本中是使用myism存储引擎的，这种存储引擎是不支持事务的；而mysql的后来版本中加入了innodb的存储引擎，这种存储引擎中加入了MVCC机制，使得mysql开始支持事务的不同隔离级别的；

 
下面，我们将讲述数据库解决这些读写并发一致性问题时的具体实现。

针对丢失更新的问题，我们引入加锁的方式进行解决，即通过引入排它锁和乐观锁的方式进行控制（排它锁就是通过锁定某条数据，在当前事务未提交之前，其他事务无法获取当前事务的修改权；乐观锁认为不一定会产生丢失更新的问题，让系统自行并发运行，如果出现异常，就把异常抛给使用者，让使用者自行处理）。

解决完丢失更新的问题后，我们就会发现剩下的都是读写操作中遇到的问题了。针对读写操作过程中引发的并发一致性问题，我们就采用不同的读写问题提出不同的解决方案的方式来解决。

针对脏读数据问题，就是因为数据库系统没有做事务的控制机制，因此就导致了脏读问题；而要想解决脏读数据问题和不可重复读问题，我们引入MVCC机制，实现在不加锁的情况下实现并发读写的效果，而MVCC机制中又引入了快照读的概念；最后要想解决幻影读的问题，我们由引入串行化事务的机制，使每个事务都串行化执行，最终解决幻影读的问题。

根据MVCC实现原理，我们引入MVCC中的三个重要内容：版本链、undo日志和读视图，通过判断要读取的数据的事务id与当前快照的四个属性之间的关系得到当前数据是否可用，并由此倒推得到快照的产生时机的不同，所解决的读写并发一致性问题也不同，再倒推得到事务级别的控制方式——控制快照产生的时机。



---

## 6. SQL优化

### 6.1. SQL分析工具

慢sql查询日志

explain分析工具

- id
- table
- select_type
- type 
- possible_key
- key 
- key_len
- ref
- rows
- extra
  - using filesort
  - using temporary
  - using index
  - using where
  - using join buffer


- [后端程序员必备：书写高质量SQL的30条建议](https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247486461&idx=1&sn=60a22279196d084cc398936fe3b37772&chksm=cea24436f9d5cd20a4fa0e907590f3e700d7378b3f608d7b33bb52cfb96f503b7ccb65a1deed&token=1987003517&lang=zh_CN%23rd)
- [一条SQL语句执行得很慢的原因有哪些？](https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247485185&idx=1&sn=66ef08b4ab6af5757792223a83fc0d45&chksm=cea248caf9d5c1dc72ec8a281ec16aa3ec3e8066dbb252e27362438a26c33fbe842b0e0adf47&token=79317275&lang=zh_CN%23rd)
- [一条SQL语句在MySQL中如何执行的](https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&mid=2247485097&idx=1&sn=84c89da477b1338bdf3e9fcd65514ac1&chksm=cea24962f9d5c074d8d3ff1ab04ee8f0d6486e3d015cfd783503685986485c11738ccb542ba7&token=79317275&lang=zh_CN%23rd)


### 6.2. SQL优化经验总结

```
select---
避免使用select *，不返回用不到的任何字段

from---
最好是小表驱动大表
避免使用子查询（嵌套查询），多使用join


where---
避免使用组合索引中的某一列，应按照索引列创建的顺序使用，建议使用覆盖索引
避免使用or、isnull、isnotnull等语句
避免字符串不用单引号
避免在索引上使用函数
避免like不正确使用，应like "*%"
避免in和not in，应多使用exists和not exists
避免使用不等于，多用范围查询

```


## 7. 优化经验总结



## 8. 面试题

- [2022年MySQL最新面试题 - 前言](https://manbucoding.com/travel-coding/mysql/%E5%89%8D%E8%A8%80.html)



## 9. 参考

- [数据库系统原理](http://www.cyc2018.xyz/%E6%95%B0%E6%8D%AE%E5%BA%93/%E6%95%B0%E6%8D%AE%E5%BA%93%E7%B3%BB%E7%BB%9F%E5%8E%9F%E7%90%86.html)
- [MVCC多版本并发控制](https://www.jianshu.com/p/8845ddca3b23)
- [三级封锁协议](https://www.jianshu.com/p/0b4cc2802f6b)
- [mysql中的锁](https://www.cnblogs.com/axing-articles/p/11415058.html)
- [MVCC--多版本并发控制机制](https://www.cnblogs.com/axing-articles/p/11415763.html)
- [Standard 命令行格式规范](https://knowte.velne.win/posts/standard/code/cli/)
- [命令行语法字符](https://ftpdocs.broadcom.com/cadocs/0/CA%20ARCserve%20%20Backup%20r16-CHS/Bookshelf_Files/HTML/cmndline/cl_cmd_line_syntax_char.htm)
- [命令行语法格式中常用符号的含义](https://www.cnblogs.com/uakora/p/11809501.html)
- [括号中的可选、必选表示](https://blog.csdn.net/raoqin/article/details/8875089)











---