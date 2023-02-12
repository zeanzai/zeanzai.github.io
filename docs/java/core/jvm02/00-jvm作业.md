---
title: "00-jvm作业"
category:
  - "core"
tag:
  - "jvm"
---

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
<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />
