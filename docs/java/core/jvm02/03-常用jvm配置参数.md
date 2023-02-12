---
title: "03-常用jvm配置参数"
category:
  - "core"
tag:
  - "jvm"
---


https://www.cnblogs.com/qlqwjy/p/8037797.html
https://www.cnblogs.com/cat520/p/9958475.html
https://blog.csdn.net/yang_net/article/details/5830820
-XX:+`<option>` 启用option，例如：-XX:+PrintGCDetails启动打印GC信息的选项，其中+号表示true，开启的意思
-XX:-`<option>` 不启用option，例如：-XX:-PrintGCDetails关闭启动打印GC信息的选项，其中-号表示false，关闭的意思
-XX:`<option>`=`<number>` 设定option的值为数字类型，可跟单位，例如 32k, 1024m, 2g。例如：-XX:MaxPermSize=64m
-XX:`<option>`=`<string>` 设定option的值为字符串，例如： -XX:HeapDumpPath="C:\Users\Daxin\Desktop\jvmgcin"

但是有的参数不需要使用-XX，例如：-Xms， -Xmx ，-Xmn ，-Xss



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
<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />
