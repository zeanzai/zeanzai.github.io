---
title: "葛一鸣-深入理解JVM-学习笔记"
category:
  - "core"
tag:
  - "jvm"
---


## 自己总结的JVM提纲

- 编译期分类（前端、后端、解释器、语法糖）
- 类的加载器
  - 加载过程
  - 加载器分类
  - 类的生命周期
  - 双亲委派
- 类的运行
  - 运行期内存结构、每一部分的存放内容、配置参数、出现的异常信息及解决办法
  - 对象的创建过程、对象的使用、对象的内存分配
  - GC分类（FullGC的触发条件）
- 类的回收
  - 定位垃圾
  - GCRoot对象的分类
  - 四种引用类型
  - 回收算法
  - 回收器分类
    - 各自的原理
    - 配置的参数
    - 优缺点
  - 安全点及全局停顿
- JVM中的并发
  - JMM模型及其特性、主存与工作内存之间的操作
  - 线程状态及转化条件
  - 线程安全（定义、实现方式）
  - 锁优化方式及原理
  - 性能优化思路


## 思考题

> 哔站上：炼数成金 深入理解JVM 葛一鸣 
>




day01
在未来Java应该增加和支持那些功能呢？


day03

1. jre的运行时主要jar文件rt.jar都很大，这导致了用java做的桌面客户端程序很难发布绑定jre发布。这在很大程度上限制了java桌面软件的分发。可是，jre并不是在所有的用户计算机上都有安装，即使安装了，也未必我们期望的版本。因此，对jre做精简，减少体积是有必要的。请你给出一个方案，来说说如何给jre减肥，以方便我们的桌面程序绑定jre发布。并给出一个基本的实现。对这个实现的要求是：对于任意给定java程序A，应用你的方案和实现，可以从一个完整的jre中，抽取这个程序A的必要部分，从而实现最小体积的发布。在本题中，要求你详述你的方案，并提交你实现的代码。

2.这里给出一个gc输出，要求给出一个你认为最可能的启动JVM参数，并说明为什么？
Heap
 def new generation   total 6464K, used 115K [0x34e80000, 0x35580000, 0x35580000)
  eden space 5760K,   2% used [0x34e80000, 0x34e9cd38, 0x35420000)
  from space 704K,   0% used [0x354d0000, 0x354d0000, 0x35580000)
  to   space 704K,   0% used [0x35420000, 0x35420000, 0x354d0000)
 tenured generation   total 18124K, used 8277K [0x35580000, 0x36733000, 0x37680000)
   the space 18124K,  45% used [0x35580000, 0x35d95758, 0x35d95800, 0x36733000)
 compacting perm gen  total 16384K, used 16383K [0x37680000, 0x38680000, 0x38680000)
   the space 16384K,  99% used [0x37680000, 0x3867ffc0, 0x38680000, 0x38680000)
    ro space 10240K,  44% used [0x38680000, 0x38af73f0, 0x38af7400, 0x39080000)
    rw space 12288K,  52% used [0x39080000, 0x396cdd28, 0x396cde00, 0x39c80000)



day04
1. 标记压缩对标记清除有什么优势？



day05
1. 为了解决GC压力，我们需要注意些什么？
软件系统如何设计架构、代码如何编写、堆空间如何分配等


day06
1. java.lang.NoSuchFieldError错误可能在什么阶段抛出？
2. 能否只使用反射，将类注入启动ClassLoader中呢？
3. java框架rt.jar是如何加载应用的类？
rt.jar中的启动加载器是无法加载应用程序的类的，这就是
Thread.setContextClassLoader()
  - 上下文加载器
  - 是一个角色，并不指定某一个具体的启动器类
  - 用以解决顶层ClassLoader无法访问底层ClassLoader的类的问题
  - 基本思想是，在顶层的ClassLoader中，注入底层的ClassLoader的实例
4. 如何实现热替换？

day07
1. 找到系统中最消耗cpu资源的进程。


## day01-初识JVM


### jvm的概念
	Java虚拟机
	虚拟机：通过软件模拟的具有完整硬件系统的功能的、运行在一个完全隔离环境中的完整计算机系统

	vmware和visual box都是使用软件模拟物理cpu的指令
	jvm主要是通过软件模拟Java字节码的指令集

### jvm发展历史
	1996年 jdk1.0 classic vm 纯解释运行，使用外挂进行jit
	97年 jdk1.1 awt 内部类、jdbc、rmi、反射
	98年 jdk1.2 solaris exact vm
	2000年 jdk1.3 hotspot 作为默认虚拟机
	02年，jdk1.4 classic vm 退出历史舞台
	04年 jdk1.5 泛型、注解、装箱拆箱、枚举、可变长的参数、foreach
	jdk1.6 脚本语言支持、jdbc4.0、Java编译器api
	11年 jdk7 发布
	14年 jdk8 发布 lambda表达式，语法增强、Java类型注解
	16年jdk9 模块化

	大事记：
		hotspot最火
		06年开源并建立openjdk
		08年oracle收购bea得到jrockitvm
		10年oracle收购sun得到hotspot
		oracle宣布在jdk8时整合jrockit和hotspot，优势互补（在hotspot基础上移植jrockit优秀特性）


### jvm种类
略。

### java语言规范
	定义了语法、变量、类型、文法
	语法定义、词法结构、类型和变量、Java内存模型、类加载链接的国恒、关键字的定义、异常、数组的使用……

### jvm规范
	class文件类型、运行时数据、帧栈、虚拟机的启动、虚拟机的指令集、堆、PC、方法区……
	什么是java虚拟机

	整数的表达：
		原码：第一位为符号为（0正1负）
		反码：符号位不动，原码取反
		负数补码：符号位不动，反码+1
		正数补码：和原码相同

	为什么要使用补码？
		计算机中0有两种方式，正0和负0，使用补码的时候，就只有一种表示方法了。

	float的表示和定义IEEE 754 标准
		符号位+指数位+尾数位

	vm指令集
		类型转换、出栈入栈操作、原酸、流程控制、函数控制

	jvm需要堆java library提供以下支持：
		反射、classloader、初始化class和interface、安全相关、多线程、弱引用

	jvm的编译
		源码到jvm指令的对应格式
		javap
		jvm反汇编的格式


## day02-JVM运行机制

### jvm的启动流程
```
装载配置-根据配置找jvm.dll文件-初始化jvm获取到JNIEnv接口-找到main方法，并运行
```

### jvm的基本结构
	主要关注的时内存空间的分配和回收
	PC寄存器
		- 一个线程独占一个pc寄存器
		- 线程创建时创建
		- 存放的是下一条要执行的指令的地址
		- 执行本地方法时，PC寄存器存放的内容为undefined
	方法区
		- 保存类的元信息（常量池、字段、方法信息、方法字节码等）
		- 通常和永久区（perm）关联在一起
		- 跟jdk的版本有关
	Java堆
		- 和程序开发最密切相关的区域
		- 应用系统对象基本上都是保存在java堆上面
		- 所有线程共享Java堆
		- 对分代GC来说，堆也是分代的
		- 不同的GC算法，对应的也是不同的堆
	Java栈
		- 线程私有
		- 栈由一系列帧组成的
		- 帧保存一个方法的局部变量、操作数栈、常量池指针
		- 每一个方法调用都会创建一个帧，并压栈（栈：先进后出）
		- 局部变量表（包括参数和局部变量）
		- 函数调用组成栈帧
		- 操作数栈：java中没有寄存器的概念，所有的参数传递都使用操作数栈
		- 栈上分配：
			一般是小对象（几十个bytes），大对象或逃逸对象是没有办法在栈上分配的，在没有逃逸的情况下是可以直接分配到栈上的，这样做的好处是可以自动回收，减轻gc压力；
		- 逃逸分析：
			逃逸分析的基本行为就是分析对象动态作用域，当一个对象在方法中被定义后，可能会被外部方法所引用，比如方法调用，也有可能被其他线程访问，比如类变量，这两种情况分别叫做对象的方法逃逸和线程逃逸
	本地方法栈

	栈、堆、方法区交互
		可以根据具体的程序来分析，主要描述程序代码的存储位置以及运行流程


### jvm的内存模型
	- 每一个线程都有一个工作内存和主内存
	- 工作内存存放主存中变量的值的拷贝

	- 可见性
		一个线程修改了变量，其他线程可以立即知道

		产生变量不可见的原因：
			每一个线程都有自己的主存区域和线程工作内存区域，线程在使用变量时，会先把存放到主存中的变量load到线程工作内存区域，这就导致了一个线程修改变量时，另外一个线程没办法同时共享该变量，导致了变量的暂时不可见性。

		保持变量可见性的方法：
			- volatile 关键字
			- synchronized （unlock之前，写变量值到主存中）
			- final（一旦初始化之后，其他线程就可见）

	- 有序性
		操作指令的顺序在本线程内时有序的，但是在本线程外是无序的（因为发生了指令重排或主内存与工作内存同步延时）。

		指令重排-容易破坏线程间的指令有序性
		保证线程之间的指令有序性的方法：使用synchronized关键字，使线程互斥运行，人为保证指令的有序性。

		指令重排的原则：
			- 线程内保证语义的串行性
			- volatile规则： volatile变量的写，先发生于读
			- 锁规则：解锁必然要发生在另外线程的加锁前
			- 传递性： a先于b，b先于c，那a必然先于c
			- 线程的start方法先于其他所有的动作
			- 线程所有的操作先于线程的终结
			- 线程的中断先于中断后要执行的代码
			- 构造方法先于finalize（）方法


### 编译运行和解释运行的区别
	- 这是字节码运行的两种方式：
	- 解释运行
		- 读一句执行一句
	- 编译运行
		- 先将字节码编译成机器码，运行时直接执行机器码，只在运行时进行编译
		编译后的性能比解释运行的性能有数量级的提升


## day03-常用JVM配置参数


https://www.cnblogs.com/qlqwjy/p/8037797.html
https://www.cnblogs.com/cat520/p/9958475.html
https://blog.csdn.net/yang_net/article/details/5830820
-XX:+`<option>` 启用option，例如：-XX:+PrintGCDetails启动打印GC信息的选项，其中+号表示true，开启的意思
-XX:-`<option>` 不启用option，例如：-XX:-PrintGCDetails关闭启动打印GC信息的选项，其中-号表示false，关闭的意思
-XX:`<option>`=`<number>` 设定option的值为数字类型，可跟单位，例如 32k, 1024m, 2g。例如：-XX:MaxPermSize=64m
-XX:`<option>`=`<string>` 设定option的值为字符串，例如： -XX:HeapDumpPath="C:\Users\Daxin\Desktop\jvmgcin"

但是有的参数不需要使用-XX，例如：-Xms， -Xmx ，-Xmn ，-Xss

```

常用配置参数
- trace跟踪参数
	# -vervose:gc
	# -XX:+printGC
	# -XX:+PrintGCDetails
		会打印gc详细信息
		GC后打印
	# -XX:+PrintGCTimeStamps
		会打印GC发生的时间戳
	# -Xloggc:log/gc.log
		指定GClog的位置，以文件输出
	# -XX:+PrintHeapAtGC
		每一次GC后，都打印堆信息
	# -XX:+TraceClassLoading
		监控类的加载
	# -XX:+PrintClassHistogram
		按下Ctrl+Break后，打印类的信息
		分别显示：序号、实例数量、总大小、类型

- 堆的分配参数
	# -Xmx
		最大堆		
	# -Xms
		最小堆
	Runtime.getRuntime().maxMemory()/1024/1024 兆
	Runtime.getRuntime().freeMemory()/1024/1024 兆
	Runtime.getRuntime().totalMemory()/1024/1024 兆

	jvm会将堆的大小尽量维持在最小堆的范围内，如果在经过了gc之后，最小堆还不能满足需求，就会进行扩容。

	思考问题：
		1. 最大堆和最小堆应该保持一个什么关系，才能让系统的性能尽可能的好呢？

		2. 如果要做一个Java桌面产品，需要绑定jre，但是jre又很大，如何做jre的瘦身呢？


	# -Xmn
		设置新生代大小
	# -XX:NewRatio
		新生代（eden+2*s，eden区加上两个幸存区）和老年代（不包括永久区）的比值
		4 表示 新生代：老年代=1：4，即年轻代占堆的1/5
	# -XX:SurvivorRatio
		设置两个Survivor区的eden的比
		8表示两个survivor：eden=2：8，即一个survivor占年轻代的1/10
	# -XX:+HeapDumpOnOutOfMemoryError
		oom时导出堆到文件
	# -XX:+HeapDumpPath
		导出oom的路径
	# -XX:OnOutOfMemoryError
		在oom时，执行一个脚本，一般常用来oom时，发送邮件甚至重启程序等。
	需要实际调整新生代和幸存代的大小，官方推荐新生代占堆的3/8，幸存代占新生代的1/10，在oom时，要dump出堆，确保可以排查现场问题。

永久区分配参数
	# -XX:PermSize -XX:MaxPermSize
		设置永久区的初始空间和最大空间，一个系统可以容纳多少个类型

- 栈的分配参数
	# -Xss
		通常只有几百k
		决定了函数调用的深度（递归调用时的深度）
		每一个线程都有独立的栈空间，因此要想使系统能够尽可能多的使用线程，就只能减少栈的大小
		局部变量、参数都分配到栈上

		java.lang.StackOverflowError错误一般时因为方法调用出了问题

```

## day04-GC算法和种类

### GC的概念

	垃圾回收，主要用来解决由程序引起的内存泄露等问题，GC的对象是堆空间和永久区

### GC的算法

	- 引用计数法
		老牌垃圾回收算法，通过引用计算来回收垃圾，使用者：COM、ActionScript3、Python
		问题：引用和去引用都伴随着加法和减法，影响性能；很难处理循环引用的垃圾对象

		【在Java中并没有使用这种算法】

	- 标记清除【老年代回收算法】
		分为标记阶段和清除阶段。从根节点开始，标记所有可达的对象，未被标记的对象就是未被引用的垃圾对象，然后是清除阶段，清除所有未被标记的对象。

	- 标记压缩【老年代回收算法】
		适合存活对象比较多的场合，如老年代。也是从根节点开始，对所有可达对象做一次标记，然后将标记对象压缩到内存的一端，之后，清理边界外的所有空间


	- 复制算法【新生代回收算法】
		比较高效的回收方法，不适合存活对象较多的场合，如老年代。将内存区域分为两块，每次只使用其中的一块，在垃圾回收时，将正在使用的内存中的存活对象复制到未使用的内存中，之后，清除正在使用的内存块中的所有对象，交换两个内存的角色，完成回收。
		最大的问题就是空间浪费、整合标记清除的思想
		三个存储空间和一个担保空间【复制算法+标记清理的算法】

		-XX:+PrintGCDetails的输出中的eden和from、to等就是标记复制算法的三块区域

		分代思想：
		短命对象为新生代，长命对象为老年代

		少量对象存活，使用复制算法；
		大量对象存活，使用标记清理或标记压缩算法等；

	【总结】
	所有的算法，都需要识别一个对象是否为垃圾对象，因此需要给出什么是垃圾对象的定义。即什么是可触及性？

### 可触及性
	- 可触及的
		从根节点可以触及到这个对象
	- 可复活的
		暂时没有被触及，但是后期又被触及的对象
		可能会在finalize()中可能复活对象
	- 不可触及的
		在finalize()后，可能进入不可触及状态，可以回收
		finalize()只能被执行一次，避免使用该方法，优先级太低，不确定何时被调用，可以使用try catch finally等来代替

	- 根
		栈中引用的对象，即线程栈中引用的对象
		方法区中静态成员或常量引用的对象（即全局对象）
		jni方法栈中引用的对象

### stop-the-world
	java中一种全局暂停的现象，所有java代码停止，native代码可以执行，但是不能和jvm交互。可以理解为整个jvm处于挂起状态。
	多半是由于GC引起
		dump线程时
		死锁检查
		堆dump时

	为什么gc会产生全局停顿？
		类比于聚会时打扫房间，聚会时会很乱，又会有新的垃圾产生，房间永远打扫不干净，只有让大家停止活动了，才能将房间打扫干净。
		GC线程启动时，所有的应用线程都会停止。
	会有什么危害？
		长时间服务停止，没有响应。
		遇到ha系统，可能会引起主备切换，严重危害生产系统


## day05-GC参数

### 堆的回顾
	新生代（eden+s0(或者from区)+s1（或者to区））+老年代（tenured）

### 串行收集器
	最古老的、也是最稳定的的收集器、效率高，可能会产生很长的停顿，历经考验

	可以使用-XX:+UseSerialGC参数开启，
	开启之后，新生代和老年代都使用串行回收、新生代使用的是复制算法、老年代使用的是标记-压缩算法

	在回收时，应用程序线程会暂停，垃圾回收器线程会启动，只是用一个线程回收，回收完毕之后，应用程序线程再次启动

### 并行收集器
	parnew收集器
		使用 -XX:+UseParNewGC 参数开启，
		新生代并行回收、老年代串行回收
		复制算法
		多线程回收，需要多核支持
		使用 -XX:ParallelGCThreads限制线程数量
		serial收集器新生代的并行版本

		在回收时，应用程序县城依然会暂停，只不过此时垃圾回收器线程是多个，回收完毕之后，应用程序线程再次启动。

	Parallel收集器
		类似于parnew收集器
		可以看作是串行收集器在新生代和老年代的并行化
		新生代复制算法
		老年代标记-压缩算法
		更加关注吞吐量的一类算法
		使用-XX:+UseParallelGC（使用parallel收集器+老年代串行）
		使用-XX:+UseParallelOldGC（使用parallel收集器+并行老年代）

	参数：
		-XX:MaxGCPauseMills（最大停顿时间、毫秒，GC尽力保证回收的时间不超过这个设定值）
		-XX:GCTimeRatio（垃圾收集时间占总时间的比值，默认99，即最大允许1%的时间做GC）

		两个参数可以看作是一个用来调GC的频率，一个用来调每次GC的时间，当然这种看法是不够准确的。在系统中，在相同环境下，如果要保证每次垃圾回收系统停顿的时间很短，那必然就需要经常进行GC，换句话也就是要加大GC的次数；相反，如果要使的GC占用时间比值加大，就会使频率降低，二者属于相互矛盾的。

### CMS收集器
	Concurrent Mark Sweep 并发标记清除
	标记清除算法
	不是标记压缩算法
	并发阶段会降低吞吐量（并发阶段，垃圾回收器可能会造成资源浪费，也就造成吞吐量的减少）
	老年代收集器（新生代使用ParNew）
	使用-XX:+UseConcMarkSweepGC

	并发是指：与应用程序线程一并执行的。

	CMS运行过程是复杂的，着重实现了标记的过程，可分为：
		- 初始标记
			标记线程是独占的，这个阶段只有标记线程在运行
			根可以直接关联到的对象
			速度快
		- 并发标记（和应用程序线程一起）
			主要标记过程，标记全部对象		
		- 重新标记
			由于并发标记时，用户线程依然在运行，因此在进行清理时，再次修正
		- 并发清理
			基于标记结果，进行清理对象

		- 并发重置

	特点
		尽可能减低停顿
		会影响系统整体吞吐量和性能
			应用程序线程再运行过程中，分一半的CPU资源去做GC，系统性能在GC阶段，反应速度就会下降一半。
		清理不彻底
		因为和应用程序线程一起运行，不能再空间快满时再清理
			使用-XX:CMSInitiatingOccupancyFraction设置触发GC的阈值
			如果预留空间不够，可能会引起concurrent mode failure错误（原因是：在进行垃圾回收时，应用程序线程依然申请内存资源，就可能导致申请不到资源，出现错误。解决方案：使用串行垃圾回收）

		-XX:+UseCMSCompactAtFullCollection 在full gc后，进行一次整理，在整理过程时线程独占的，会引起停顿时间变长

		-XX:+CMSFullGCsBeforeCompaction 在进行多次full gc后，进行一次碎片整理

		-XX:ParallelCMSThreads 设置CMS的线程数量

	标记清除和标记压缩算法
		标记清除算法会产生碎片，碎片会影响后续的内存分配

	分析：cms收集器主要是为了解决停顿时间很长的问题而产生的，但是它实际上并没有很好的解决停顿时间，它只是换了一种方式来实现标记而已，也就是说它的目标转移到标记上了。


### GC参数整理
	-XX:+UseSerialGC：在新生代和老年代使用串行收集器
	-XX:SurvivorRatio：设置eden区大小和survivior区大小的比例
	-XX:NewRatio:新生代和老年代的比
	-XX:+UseParNewGC：在新生代使用并行收集器
	-XX:+UseParallelGC ：新生代使用并行回收收集器
	-XX:+UseParallelOldGC：老年代使用并行回收收集器
	-XX:ParallelGCThreads：设置用于垃圾回收的线程数
	-XX:+UseConcMarkSweepGC：新生代使用并行收集器，老年代使用CMS+串行收集器
	-XX:ParallelCMSThreads：设定CMS的线程数量
	-XX:CMSInitiatingOccupancyFraction：设置CMS收集器在老年代空间被使用多少后触发
	-XX:+UseCMSCompactAtFullCollection：设置CMS收集器在完成垃圾收集后是否要进行一次内存碎片的整理
	-XX:CMSFullGCsBeforeCompaction：设定进行多少次CMS垃圾回收后，进行一次内存压缩
	-XX:+CMSClassUnloadingEnabled：允许对类元数据进行回收
	-XX:CMSInitiatingPermOccupancyFraction：当永久区占用率达到这一百分比时，启动CMS回收
	-XX:UseCMSInitiatingOccupancyOnly：表示只在到达阀值的时候，才进行CMS回收




### Tomcat实例演示


### full GC 和 minor GC的区别    



## day06-类加载器

### class装载验证流程
#### 流程

- 加载

		装载类的第一个阶段
		取得类的二进制流
		转为方法区的数据结构
		在Java堆中生成对应的java.lang.Class对象

- 链接
		验证
			- 目的：验证class流的格式是否是正确的
				- 文件格式的验证
				- 元数据的验证
				- 字节码验证（很复杂）
				- 符号引用验证
		准备
			- 分配内存，并为类设置初始值（方法区中）

		解析
			- 符号引用替换为直接引用

- 初始化
		- 执行类构造器（clinit）
			- static变量 赋值语句
			- static{}语句
		- 子类的（clinit）调用之前先调用父类的（clinit）
		- clinit是线程安全的

### 什么是类装载器ClassLoader

	是一个抽象类
	它的实例将Java字节码装载到jvm中
	可以定制，满足不同的字节码流获取方式
	负责装载过程的加载过程

### jdk中ClassLoader默认设计模式
	classLoader的重要方法
	不同的ClassLoader
		- 启动ClassLoader （Bootstrap ClassLoader） rt.jar /-Xbootclasspath
		- 扩展ClassLoader（Extension ClassLoader） %JAVA_HOME%/lib/ext/*.jar
		- 应用ClassLoader（App ClassLoader） claspath下
		- 自定义ClassLoader（Custom ClassLoader）

		- 每一个ClassLoader都有一个Parent作为父类

		在查找一个类是否加载时，应用程序会依次调用AppClassLoader、ExtensionClassLoader、BootstrapClassLoader去查找类是否加载的。但是在加载过程则是依次使用BootstrapClassLoader、ExtensionClassLoader、AppClassLoader来依次加载应用程序所需要的类。

- 双亲模式的破坏
	- 双亲模式是默认的模式，但是不是必须这么做
	- Tomcat的webAPPClassLoad而就会先加载自己的class，找不到再委托parent
	- OSGI的classLoader形成网状结构，根据需要自由的加载Class


### 打破常规模式

### 热替换

https://blog.csdn.net/weixin_38055381/article/details/81382115
https://www.cnblogs.com/xxbcoder/p/5112632.html

## day07-性能监控工具



### 性能监控工具

- 系统性能监控
  - 确定系统运行的整体状态，基本定位问题所在
  - Linux平台下
    - uptime：用于查看系统时间、运行时间、连接数、（1，5,15分钟内的系统平均负载，即运行队列中的平均进程数）
    - top：可以知道哪一个程序占用cpu最多
    - vmstat：可以统计系统的CPU、内存、swap、io等情况
    - pidstat
      - 需要安装 sudo apt-get install sysstat
      - 可以细致观察进程
      - 监控cpu、io、内存
      - 使用方法
  - windows平台下
    - 任务管理器
    - 性能监控器
    - Process Explorer
    - pslist
      - 命令行工具
      - 自动化数据收集
      - 显示java程序的运行情况

- java自带的工具
  - 查看java程序运行细节，进一步定位问题
  - jps
    - 列出java进程，类似于ps命令
    - 参数-q可以指定jps只输出进程ID ，不输出类的短名称
    - 参数-m可以用于输出传递给Java进程（主函数）的参数
    - 参数-l可以用于输出主函数的完整路径
    - 参数-v可以显示传递给JVM的参数
  - jinfo
    - 可以用来查看正在运行的Java应用程序的扩展参数，甚至支持在运行时，修改部分参数
    - -flag `<name>`：打印指定JVM的参数值
    - -flag [+|-]`<name>`：设置指定JVM参数的布尔值
    - -flag `<name>`=`<value>`：设置指定JVM参数的值
  - jmap
    - 生成Java应用程序的堆快照和对象的统计信息
  - jstack
    - 打印线程dump
  - JConsole
    - 图形化监控工具
    - 可以查看Java应用程序的运行概况，监控堆信息、永久区使用情况、类加载情况等
  - Visual VM
    - 一个功能强大的多合一故障诊断和性能监控的可视化工具




- 实战分析
  - 案例分析

## day08-java堆分析


### java堆分析
- 内存溢出（OOM）的原因


- MAT使用基础

- 使用VisualVM分析堆

- tomcatOOM分析案例


---

<img style="border:1px red solid; display:block; margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="微信公众号" />

