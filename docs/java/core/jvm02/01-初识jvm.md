---
title: "01-初识jvm"
category:
  - "core"
tag:
  - "jvm"
---

# jvm的概念
	Java虚拟机
	虚拟机：通过软件模拟的具有完整硬件系统的功能的、运行在一个完全隔离环境中的完整计算机系统

	vmware和visual box都是使用软件模拟物理cpu的指令
	jvm主要是通过软件模拟Java字节码的指令集

# jvm发展历史
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


# jvm种类
略。

# java语言规范
	定义了语法、变量、类型、文法
	语法定义、词法结构、类型和变量、Java内存模型、类加载链接的国恒、关键字的定义、异常、数组的使用……

# jvm规范
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
<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />
