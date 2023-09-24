---
title: "Spring基本原理"
category:
  - "arch"
tag:
  - "spring"
---

## Spring 知识点提纲



- 特点
- 组件及其各自作用
- 注解及其作用
- 容器高级视图
- IOC容器的实现（BeanFactory）及其子类
- ApplicationFactory及其子类
- WebApplicationContext功能
- 标准事件分类（5种）
- Bean 
  - 5种作用域
  - 在Spring应用上下文中的生命周期
  - 装配方式（手工装配、自动装配）
  - Bean后置处理器作用及用法
- AOP定义及相关术语、实现方式、基本原理、相关设计模式
- 事务管理、隔离级别、传播机制


> 软件研发过程： 背景描述，需求设计，概要设计，详细设计……因此在学习Spring时，可以把Spring看作是一个业务需求，只不过这个业务需求是要完成对我们写的各种各样的Java类的管理。




## 产生的背景

早期的软件设计中，Java类的管理很混乱，比如说，我们创建了一个Student类，类里面包括了一些属性和一些简单方法，于是我们在使用的过程中，就是简单的去new一个对象出来。

但是随着软件的发展，我们对Student类的要求越来越多，比如：

1. 在类生成的时候记录一下所有属性的值；
2. 在类销毁的时候给Teacher类发送一个通知；
3. 在创建这个类的实例对象时，还要提前创建一个Clazz类，表示这个学生所属的班级信息；
4. ……

我们就会发现，这个Student类会越来越复杂。这就使得我们对Java类的管理失去了控制。于是人们就想有没有一种方法来解决上面的这些问题。于是Spring就产生了。

## Spring产生的背景

早期的面向对象的软件过程中，类的管理完全是需要程序员自定义去实现的，随着系统的迭代，类就会膨胀，也会变得越来越复杂，最终导致软件系统失去控制。

计算机大神们研发了一款软件，可以管理程序员自定义的各种类，这款软件产品就是Spring。

这款软件产品完成了本来需要程序员完成的功能，例如：

1. 单个Bean的生命周期管理；
2. 多个Bean的组织和装配，说白了就是能够处理多个Bean之间的相互依赖关系，何时构造、何时组织和装配；

> 组织和装配： 比如 Student 类中有一个 Class 类，表明学生所属的班级信息，我们自定义实现时，会new一个class对象，然后把这个class对象传给student作为student的构造参数。有了Spring之后就只需要写Student类和Class类，这二者之间的组织过程和装配过程就交给Spring来处理了。


## Spring的组件 

Core
AOP
Transaction






## Spring的核心原理

核心原理分成几个步骤：

1. 把Bean简单化，简单到只完成具体的业务功能，简单的实现思路就是把通用功能和具体的业务功能进行剥离。这就需要把通用功能进行剥离，涉及到另外一个问题： 如何管理单个Bean，答案是： 构造一个管理所有Bean的组件并实现控制反转（IoC），即实现一个组件，让这个组件具有管理所有Bean的功能，并且这个组件能够控制Bean的生命周期（即Bean的构造和销毁）。
2. 完成上面的步骤后，还涉及到另外两个问题：
   1. 如何把剥离出来的通用功能（如日志管理功能）重新组织回Bean；
   2. 如何组织和管理不同Bean复用；
  解决上面两个问题的思路是： 依赖注入（DI），具体的实现技术是： 动态代理，思路是在运行期动态生成新的Java代码，让Java代码重新具有完成所有的功能。

> 动态代理 vs 静态代理： 

## 容器

利用控制反转（IoC）的设计思想，剥夺程序员对Bean的部分控制权，并把这些被剥夺的控制权给到Spring。于是，Spring就要提供管理这些控制权的解决方案，这个解决方案就是容器。

所谓容器，就是说Spring提供了一个类似于数据库的功能，只不过这个功能保存的是JavaBean。

![20230920110214](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/20230920110214.png)

如上图，步骤解析如下：

1. 读取各种各样的配置文件，从中获取各种各样的pojo；
2. Spring容器就从这些配置文件中，获得pojo的文件所在位置，并生成一个 Bean 的注册表；
3. Spring容器会根据 Bean的注册表 实例化Bean，并把实例化后的bean放入 Bean 缓存池里面，以便后续的使用；

> IoC容器的实现原理：

## Bean 的注册 

### Bean的分类

实现容器的各种Java代码本身也是Bean，因此Spring需要管理这些Bean。此外，还有针对具体业务编写的Java代码，这些也是JavaBean，因此Spring也需要管理这些Bean。

管理Spring框架中自身的Bean的过程是随着Spring的启动的完成而完成的，这个过程，我们在Spring容器的启动过程中来讲解。

针对具体业务代码编写的JavaBean，我们就需要了解Spring的Bean的装配方式。即Spring是如何把Bean注入到容器中，并完成组织和管理Bean的功能的。

如果往底层看其原理，就应该是如何构造一个管理和组织Bean的容器，以及如何构建管理和组织Bean的规则，以及如何扩展管理和组织的规则。

有了Bean工厂以后，我们就可以自由自在的使用各种JavaBean了。我们在Spring项目中使用Bean的方式大概有两种，一种是直接使用Bean，另外一种是把Bean A注入到另外一个Bean B里面，然后使用Bean B。也就是直接使用和间接使用。

使用间接方式注册到Bean工厂的过程称为装配。（有点像装配车间的概念，把多个模块封装然后分配到各个位置形成统一的整体，然后使用这个整体）。

### 容器的实现原理

### 管理和组织Bean的规则



什么是装配？

Spring Boot中的自动装配技术底层主要用到了下面这些技术:

Spring 模式注解装配

Spring @Enable 模块装配

Spring 条件装配装（深入学习Spring组件注册中有介绍）

Spring 工厂加载机制

##

## 学习资料

1. Spring实战（第5版）【文字版】 (克雷格·沃斯) (z-lib.org).pdf
2. Spring高手系列.pdf https://gitee.com/javacode2018/spring-series
3. Spring 5核心原理与30个类手写实战@www.cmsblogs.cn.pdf

- [此文](https://github.com/wuyouzhuguli/SpringAll) 中关于Spring原理部分
- [此文](https://doocs.github.io/source-code-hunter/#/) 中关于Spring原理部分
- [Spring三十五问，四万字+五十图详解！建议收藏！](https://mp.weixin.qq.com/s/Y17S85ntHm_MLTZMJdtjQQ)
  
---

<br />
<br />
<br />

<img style="border:1px red solid; display:block; margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="微信公众号" />

