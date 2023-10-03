---
title: "Spring基本原理"
category:
  - "arch"
tag:
  - "spring"
---

## Spring 知识点提纲

- Spring产生的背景及其特点
- 组件及其各自作用
- 容器高级视图
- IOC容器的实现（BeanFactory）及其子类
- ApplicationFactory及其子类
- WebApplicationContext功能
- 注解及其作用
- 标准事件分类（5种）
- Bean 
  - 属性
  - 5种作用域
  - 在Spring应用上下文中的生命周期
  - 装配方式（手工装配、自动装配）
  - Bean后置处理器作用及用法
- AOP定义及相关术语、实现方式、基本原理、相关设计模式
- 事务管理、隔离级别、传播机制


> 软件研发过程： 背景描述，需求设计，概要设计，详细设计……因此在学习Spring时，可以把Spring看作是一个业务需求，只不过这个业务需求是要完成对我们写的各种各样的Java类的管理。




## 学习笔记

> http://www.itsoku.com/

## Spring为什么如此重要？

我们先来看一下，在Spring还没有出现之前，整个软件过程中所存在的“危机”。

### 危机一

例如，使用早期的Java技术来实现Web应用时，我们会这样实现：

1. 使用idea创建一个web项目
2. 创建servlet，servlet中写业务代码，组装需要数据，将数据以json格式输出
3. 在web.xml中配置servlet信息
4. 将项目部署到tomcat中

分析一下上面这种开发方式：
* 与业务相关的只有第2步中的“业务代码”部分，其余步骤均为非业务相关的技术步骤——非业务相关的技术步骤过于复杂；
* 当有很多个web模块时，每个模块都要重复1/3/4步骤——非业务相关的技术步骤过于重复；

因此，我们会发现，在Spring还没有出现之前的第一个软件危机，即： **软件过程中，非业务相关的技术步骤过于复杂与重复。**

### 危机二

再比如，我们想要使用上面的技术来完成某个业务功能时，可能会有这样的情况：

```
public class A{
    public void m1(){}
}
```

假如，我们想要在B中调用A中的m1()方法，那么我们可以这样做：
```
public class B{
    private A a; // @1
    public B(){
        this.a = new A(); //@2 此时，A的构造过程是由B控制的
    }
    public void m1(){
        this.a.m1(); //@3
    }
}

// 使用的过程是这样的：
test(){
    B b = new B();
    b.m1();
}
```

但是随着业务的发展，我们会发现上面这种方式不利于扩展，于是我们把原来在A的构造过程交出去，让使用B的使用者随意的组织A的构造过程，于是我们这样实现：
```
public class B{
    private A a;
    public B(A a){
        this.a = a;
    }
    public void m1(){
        this.a.m1(); 
    }
}

test(){
    A a = new A();  // 把A的构造过程交给了使用者test()
    B b = new B(a);
    b.m1();
}
```

但是随着业务的发展，我们又发现，上面这种方式也不利于扩展，例如如果B中依赖很多的类似于A的对象，比如需要依赖于C、D、E、F或者更多对象，那么我们首先要调整B的构造方法，其次还要调整test()的使用过程，于是代码又变成这样：
```
public class B{
    private A a;
    private C c;
    
    private D d;
    private E e;
    public B(A a, C c, D d, E e){
        this.a = a;
        this.c = c;
        this.d = d;
        this.e = e;
    }
    public void m1(){
        this.a.m1(); 
    }
}

test(){
    // A/C/D/E 的构造过程仍然在使用者test()手里
    A a = new A(); 
    C c = new C();
    D d = new D();
    E e = new E();
    B b = new B(a, c, d, e);
    b.m1();
}
```

因此，我们会发现，在Spring还没有出现之前的第二个软件危机，即： **编程语言特性决定的bean的构造过程的灵活特性，同时也导致bean的管理与维护不够标准和规范。**

### 总结

传统的软件工程中存在“危机”：
- **软件过程中，非业务相关的技术步骤过于复杂与重复。**
- **编程语言特性决定的bean的构造过程的灵活特性，同时也导致bean的管理与维护不够标准和规范。**

而Spring的出现，彻底解决了上面的这些问题。

## Spring的核心原理

核心原理分成几个步骤：

1. 把Bean简单化，简单到只完成具体的业务功能，简单的实现思路就是把通用功能和具体的业务功能进行剥离，然后形成一个个独立的Bean。结果就涉及到另外一个问题： 如何管理这些单个独立的Bean，答案是： 构造一个管理所有Bean的组件并实现控制反转（IoC），即实现一个组件，让这个组件具有管理所有Bean的功能，并且这个组件能够控制Bean的生命周期（即Bean的构造和销毁，以及中间的使用过程）。
2. 完成上面的步骤后，还涉及到另外两个问题：
   1. 如何把剥离出来的通用功能（如日志管理功能、安全控制功能）重新组织回Bean；
   2. 如何组织和管理不同Bean复用；
  解决上面两个问题的思路是： 依赖注入（DI），即把这些通用的功能使用某种技术注入到Bean中，具体的实现技术是： 动态代理，思路是在运行期动态生成新的Java代码，让Java代码重新具有完成所有的功能。

> 动态代理 vs 静态代理： 



## Spring的组件 

Core
AOP
Transaction




## 容器

利用控制反转（IoC）的设计思想，剥夺程序员对Bean的部分控制权，并把这些被剥夺的控制权给到Spring。于是，Spring就要提供管理这些控制权的解决方案，这个解决方案就是容器。

所谓容器，就是说Spring提供了一个类似于数据库的功能，只不过这个功能保存的是JavaBean。

![20230920110214](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/20230920110214.png)

如上图，步骤解析如下：

1. 读取各种各样的配置文件，从中获取各种各样的pojo；
2. Spring容器就从这些配置文件中，获得pojo的文件所在位置，并生成一个 Bean 的注册表；
3. Spring容器会根据 Bean的注册表 实例化Bean，并把实例化后的bean放入 Bean 缓存池里面，以便后续的使用；

> IoC容器的启动源码解析过程：


## Bean 相关

单个Bean的构造权，通过元信息提供给Spring容器，并由Spring容器进行构造。即Spring容器剥夺了Bean的构造权。

多个Bean之间组合使用，由此产生的依赖关系的装配权，可以由Spring来管理，也可以由开发人员来管理；

### Bean的生命周期 

// TODO 


### Bean的元信息

![20230926185926](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/20230926185926.png)



属性 | 描述
---|---
class | 这个属性是强制性的，并且指定用来创建 bean 的 bean 类。
name | 这个属性指定唯一的 bean 标识符。在基于 XML 的配置元数据中，你可以使用 ID 和/或 name 属性来指定 bean 标识符。
scope | 这个属性指定由特定的 bean 定义创建的对象的作用域，它将会在 bean 作用域的章节中进行讨论。
constructor-arg | 它是用来注入依赖关系的，并会在接下来的章节中进行讨论。
properties | 它是用来注入依赖关系的，并会在接下来的章节中进行讨论。
autowiring mode | 它是用来注入依赖关系的，并会在接下来的章节中进行讨论。
lazy-initialization mode | 延迟初始化的 bean 告诉 IoC 容器在它第一次被请求时，而不是在启动时去创建一个 bean 实例。
initialization 方法 | 在 bean 的所有必需的属性被容器设置之后，调用回调方法。它将会在 bean 的生命周期章节中进行讨论。
destruction 方法 | 当包含该 bean 的容器被销毁时，使用回调方法。它将会在 bean 的生命周期章节中进行讨论。

#### scope

- singleton
  - 描述：该作用域下的 Bean 在 IoC 容器中只存在一个实例：获取 Bean（即通过 applicationContext.getBean等方法获取）及装配 Bean（即通过 @Autowired 注入）都是同一个对象；
  - 场景：通常无状态的 Bean 使用该作用域，无状态表示 Bean 对象的属性状态不需要更新；
  - 备注：Spring 默认选择该作用域，线程不安全，Spring使用ThreadLocal解决线程安全问题；
- prototype
  - 描述：每次对该作用域下的 Bean 的请求都会创建新的实例：获取 Bean（即通过 applicationContext.getBean 等方法获取）及装配 Bean（即通过 @Autowired 注入）都是新的对象实例。
  - 场景：通常有状态的 Bean 使用该作用域。
- request
  - 描述：每次 Http 请求会创建新的 Bean 实例，且创建的Bean实例只对当前 Http 请求有效，Http 请求结束，改Bean实例也被销毁；类似于 prototype。
  - 场景：一次 Http 的请求和响应的共享 Bean。
  - 备注：限定 Spring MVC 框架中使用。
- session
  - 描述：在一个 Http Session 中，定义一个 Bean 实例，不同的 Session 中不共享Bean实例；
  - 场景：用户会话的共享 Bean, 比如：记录一个用户的登陆信息。
  - 备注：限定 Spring MVC 框架中使用。
- application
  - 描述：在一个 Http Servlet Context 中，定义一个 Bean 实例。
  - 场景：Web 应用的上下文信息，比如：记录一个应用的共享信息。
  - 备注：限定 Spring MVC 框架中使用。

设置Bean的Scope属性的方法：

```
<bean id="book02" class="com.spring.beans.Book" scope="singleton"></bean>
<bean id="book02" class="com.spring.beans.Book" scope="prototype"></bean>
<bean id="book02" class="com.spring.beans.Book" scope="request"></bean>
<bean id="book02" class="com.spring.beans.Book" scope="session"></bean>
<bean id="book02" class="com.spring.beans.Book" scope="application"></bean>
```

![20230926195526](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/20230926195526.png)

bean的状态： 

无状态bean和有状态bean

有状态就是有数据存储功能。有状态对象(Stateful Bean)，就是有实例变量的对象，可以保存数据，是非线程安全的。在不同方法调用间不保留任何状态。
无状态就是一次操作，不能保存数据。无状态对象(Stateless Bean)，就是没有实例变量的对象 .不能保存数据，是不变类，是线程安全的。

参考[链接](https://www.cnblogs.com/vipstone/p/16641846.html)


Spring中出现同名bean怎么办？

#### autowiring

no - 这是默认设置，表示没有自动装配。应使用显式 bean 引用进行装配。
byName - 它根据 bean 的名称注入对象依赖项。它匹配并装配其属性与 XML 文件中由相同名称定义的 bean。
byType - 它根据类型注入对象依赖项。如果属性的类型与 XML 文件中的一个 bean 名称匹配，则匹配并装配属性。
构造函数 - 它通过调用类的构造函数来注入依赖项。它有大量的参数。
autodetect - 首先容器尝试通过构造函数使用 autowire 装配，如果不能，则尝试通过 byType 自动装配。


#### lazy-initialization

在bean定义的时候通过lazy-init属性来配置bean是否是延迟加载，true：延迟初始化，false：实时初始化

```
<bean lazy-init="是否是延迟初始化" />

@Lazy 注解
```

### 把元数据提供给 Spring 容器

有三种方式：
- 基于 XML 的配置文件
- 基于注解的配置
- 基于 Java 的配置

![20230926190636](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/20230926190636.png)

```
<bean id="book02" class="com.spring.beans.Book" scope="singleton"></bean>
```



### Bean的依赖注入的方式

- 构造方法
- set方式
- 静态工厂方法
- 实例工厂方法




---
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





## Bean 的注册 

盛放Bean的容器已经创建好了，下一个步骤就是把Bean放到容器中，把Bean放到容器中的过程就是Bean的注册。




### Bean的分类

实现容器的各种Java代码本身也是Bean，因此Spring需要管理这些Bean。此外，还有针对具体业务编写的Java代码，这些也是JavaBean，因此Spring也需要管理这些Bean。

管理Spring框架中自身的Bean的过程是随着Spring的启动的完成而完成的，这个过程，我们在Spring容器的启动过程中来讲解。

针对具体业务代码编写的JavaBean，我们就需要了解Spring的Bean的装配方式。即Spring是如何把Bean注入到容器中，并完成组织和管理Bean的功能的。

如果往底层看其原理，就应该是如何构造一个管理和组织Bean的容器，以及如何构建管理和组织Bean的规则，以及如何扩展管理和组织的规则。

有了Bean工厂以后，我们就可以自由自在的使用各种JavaBean了。我们在Spring项目中使用Bean的方式大概有两种，一种是直接使用Bean，另外一种是把Bean A注入到另外一个Bean B里面，然后使用Bean B。也就是直接使用和间接使用。

使用间接方式注册到Bean工厂的过程称为装配。（有点像装配车间的概念，把多个模块封装然后分配到各个位置形成统一的整体，然后使用这个整体）。

### 容器的实现原理

### 管理和组织Bean的规则


### Springboot 的自动装配

什么是装配？

Spring Boot中的自动装配技术底层主要用到了下面这些技术:

Spring 模式注解装配

Spring @Enable 模块装配

Spring 条件装配装（深入学习Spring组件注册中有介绍）

Spring 工厂加载机制

## Bean的作用域

### 什么是Bean的作用域


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

