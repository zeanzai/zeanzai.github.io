---
"title": "Java的一些基础信息"
category:
  - "java-core"
tag:
  - "java-core"
---

## 一些专有名词


DEV(Development environment)
FAT(Feature Acceptance Test environment)
UAT(User Acceptance Test environment)
PRO(Production environment)


OLTP和OLAP区别

- [OLTP与OLAP的区别精简总结](https://cloud.tencent.com/developer/article/1496132)



### 多态 

### 继承 VS 实现

### 实例对象 VS 类对象 

### static

- 用法上，static是Java的保留关键字，主要是用来限定被修饰对象的使用范围的；
- 可以被用来修饰变量和方法，被修饰的变量成为类变量或静态变量，被修饰的方法被称为类方法或静态方法；区别于成员变量和成员方法；
- 被static修饰的变量和方法可以被类直接使用，而成员变量和成员方法只能被类生成的对象来调用；
- 成员变量和成员方法不能使用由static修饰的变量和方法，即成员变量和成员方法不能调用类变量和类方法；
- 从JVM角度讲，static修饰的代码编译后就确定下来了，而成员变量和成员方法是在运行期动态确定的，所以




## 注解

> 参考： [https://juejin.cn/post/6844903636733001741](https://juejin.cn/post/6844903636733001741)

### 背景

JDK 提供了一套完整的代码运行的规范和实现【比如，jvm 中方法区中完成字节码的准备工作，之后在堆中完成引用的链接等，最后在栈上进行运行】，但是有些复杂的业务场景下需要自行控制代码的运行，比如想要完成子类对父类方法的重写，那么就需要在子类的重写方法上做标记，标记“这是对父类方法的重写”，不是别的什么方法，只有这样 jvm 才知道“哦，这是子类的实际应该运行的方法，而不是调用父类的方法”。

针对这种场景，最开始的解决方案是 XML 方式，即在项目中引入 xml 配置文件，在配置文件中做一下标识，然后就可以达到上面说的这种效果。

但随着项目越来越庞大，xml 配置文件变得越来越复杂，维护成本也越来越高，于是，人们又提出注解的配置方式。

### 注解 vs XML

- XML 会随着项目的膨胀，导致维护成本越来越高，效率较低；但这种方式耦合度较低；
- 注解方式耦合度较高，但是效率很高；

### 注解的基本原理

> 补充： .java 元代码文件需要通过编译之后生成 .class 字节码文件，之后 .class 字节码通过加载过程申请运行时的内存空间。
> .java 元代码文件 编译 成 .class 字节码文件的过程，称为编译期；
> .class 字节码加载到内存空间的过程，称为加载期；
> 最终内存上的运行过程，称为运行期（runtime）；


- 我们可以把注解理解为： 注解只是一种标识代码实际意义的特殊代码，它强依赖于解析它的代码，如果没有解析它的代码，它可能连自然语言的注释还不如，因此理解注解关键点在于注解的解析代码。
- 解析注解的代码的实现方式有两种，一种是编译期直接扫描，另一种是运行期反射。
   - 二者的不同在于解析逻辑作用的时机不同。
   - 编译期直接扫描可以理解为，解析代码作用在编译期，即 jdk 会根据注解的实际内容生成实际可运行的 .class 字节码文件；
   - 运行期反射可以理解为，解析代码作用在运行期，利用的是 Java 的反射机制，在运行期调用实际的代码逻辑时，通过生成一个目标注解的代理类，来执行注解代码的解析逻辑；

### Java 中的元注解

> 元注解： 描述注解的注解。

#### 元注解有哪些？

- **@Target**：注解的作用目标，方法上/类上/变量上
   - 使用：@Target(value = {ElementType.FIELD})
   - ElementType 是一个枚举值：
      - ElementType.TYPE：允许被修饰的注解作用在类、接口和枚举上
      - ElementType.FIELD：允许作用在属性字段上
      - ElementType.METHOD：允许作用在方法上
      - ElementType.PARAMETER：允许作用在方法参数上
      - ElementType.CONSTRUCTOR：允许作用在构造器上
      - ElementType.LOCAL_VARIABLE：允许作用在本地局部变量上
      - ElementType.ANNOTATION_TYPE：允许作用在注解上
      - ElementType.PACKAGE：允许作用在包上
- **@Retention**：注解的生命周期，决定使用那种解析方式
   - 使用： @Retention(value = RetentionPolicy.RUNTIME)
   - RetentionPolicy 是一个枚举值：
      - RetentionPolicy.SOURCE：当前注解编译期可见，解析逻辑不会写入 class 文件
      - RetentionPolicy.CLASS：类加载阶段丢弃，解析逻辑会写入 class 文件
      - RetentionPolicy.RUNTIME：永久保存，解析逻辑可以反射获取
- @Documented：注解是否应当被包含在 JavaDoc 文档中
- @Inherited：是否允许子类继承该注解

#### jdk 内置的注解

- @Override
- @Deprecated
- @SuppressWarnings


### 一个例子

> 「java.lang.annotation.Annotation」接口中有这么一句话，用来描述『注解』。
> The common interface extended by all annotation types
> 所有的注解类型都继承自这个普通的接口（Annotation）。

所以注解的本质就是一个继承了 Annotation 接口的接口。

![](./images/2023-10-26-11-27-54.png)

![](./images/2023-10-26-11-28-02.png)


设置一个虚拟机启动参数，用于捕获 JDK 动态代理类。

> -Dsun.misc.ProxyGenerator.saveGeneratedFiles=true





最后我们再总结一下整个反射注解的工作原理：
首先，我们通过键值对的形式可以为注解属性赋值，像这样：@Hello（value = "hello"）。
接着，你用注解修饰某个元素，编译器将在编译期扫描每个类或者方法上的注解，会做一个基本的检查，你的这个注解是否允许作用在当前位置，最后会将注解信息写入元素的属性表。
然后，当你进行反射的时候，虚拟机将所有生命周期在 RUNTIME 的注解取出来放到一个 map 中，并创建一个 AnnotationInvocationHandler 实例，把这个 map 传递给它。
最后，虚拟机将采用 JDK 动态代理机制生成一个目标注解的代理类，并初始化好处理器。
那么这样，一个注解的实例就创建出来了，它本质上就是一个代理类，你应当去理解好 AnnotationInvocationHandler 中 invoke 方法的实现逻辑，这是核心。一句话概括就是，**通过方法名返回注解属性值**。




## 类 、 实例（instance） 、 对象（object） 、实例化

面向对象的程序设计中，
- 用类创建对象的过程称为`实例化`；
- 类实例化后的一个`对象`叫做`类`的一个`实例`；
- `对象` = `实例`

如 Date today=new Date()， today变量是由Date类new出来的，这个new的过程称为：类的实例化过程， today变量成为Date类的一个实例。

## 变量

### 类变量

- 也叫静态变量，是一种比较特殊的实例变量，用static关键字修饰；
- 一个类的静态变量，所有由这类生成的对象都共用这个类变量，类装载时就分配存储空间；
- 一个对象修改了变量，则所有对象中这个变量的值都会发生改变；

### 实例变量

- 也叫对象变量、类成员变量；
- 从属于类，由类生成对象时，才分配存储空间，各对象间的实例变量互不干扰，能通过对象的引用来访问实例变量；
- 但在Java多线程中，实例变量是多个线程共享资源，要注意同步访问时可能出现的问题；

### 局部变量 

- 方法中或者某局部块中声明定义的变量或方法的参数被称为局部变量，
- 他们只存在于创建他们的block里（{}之间）无法在block外进行任何操作，如读取、赋值；
- 在Java多线程中，每个线程都复制一份局部变量，可防止某些同步问题发生；

![](./images/2023-10-24-18-17-04.png)

### 全局变量

包括类变量和成员变量。

### 静态变量

用static关键字修饰的变量。

## 对象的状态

线程安全问题都是由全局变量及静态变量引起的。

对象的状态： 有状态 VS 无状态
 
有状态：有状态就是有数据存储功能。有状态对象(Stateful Bean)，就是有实例变量的对象，可以保存数据，是非线程安全的。在不同方法调用间不保留任何状态。
 
无状态：无状态就是一次操作，不能保存数据。无状态对象(Stateless Bean)，就是没有实例变量的对象 .不能保存数据，是不变类，是线程安全的。

## EJB

### 互联网产品的服务模式的发展与迭代

- singleton应用模式： 把完成企业各项任务的互联网产品进行封装，然后把封装后的这个互联网产品放到客户端运行，这样的互联网产品的构建模式就是狭义上的“单体应用”。【现在广义上的“单体应用”是指，各个功能模块没有拆分，还是聚合在一起的应用】
- CS模式： 后来人们发现上面的单体应用模式会产生一些问题，比如上面的这种产品多是一锤子买卖，不会有后续更新的可能性。于是人们就想，把一些核心功能放到某一台主机上，让这台主机来完成核心功能，其余非核心功能就放到客户端。这样就产生了cs模式的应用。
- BS模式： 后来人们又发现cs模式也不太行，因为互联网产品更新迭代过程太快了，可能连客户端也需要经常来更新和维护了。于是人们就又基于网络开发出BS模式的互联网产品。就是把原来直接安装到客户端主机上的客户端软件，直接简化，简化成只有一个域名的互联网入口，所有的企业级服务都通过网络来提供。



CS模式的实现技术： RPC VS RMI

- RPC（Remote Procedure Call）： 说白了，就是本地计算机调用远程计算机上的一个函数。在 Java 之前的大多数编程语言，如，Fortran、C、COBOL 等等，都是过程性的语言，而不是面向对象的。所以，这些编程语言非常自然地用过程表示工作。也就是 RPC 并不是Java的专有名词。但是这种开发模式，需要程序员关注网络部分，也就是说除了要编写远程计算机上的任务函数外，在本地计算机上调用远程计算机上的任务函数时，还要关注如何使用网络问题（如网络传输的协议、数据传输的格式、网络的异常处理等）。
- RMI（Remote Method Invocation）： 由于 RPC 过程需要额外处理网络的问题，在发展过程中人们发现网络问题是通用的，人们可以把网络问题的处理过程抽象出来，让程序员只关注实际的业务处理部分。于是，这种实现方式就变成了本地主机直接调用远程主机的方法。于是 RMI 出现。


EJB（Enterprise Java Bean）： EJB 的官方解释是“**商务软件的核心部分是它的业务逻辑。业务逻辑抽象了整个商务过程的流程，并使用计算机语言将他们实现。**”变成大白话就是，“**把你编写的软件中那些须要执行制定的任务的类，不放到client软件上了，而是给他打成包放到一个server上了**”。通过RMI 技术，J2EE 将EJB 组件创建为远程对象，EJB 尽管用了RMI 技术，可是却仅仅需要定义远程接口而无需生成他们的实现类，这样就将RMI 技术中的一些细节问题屏蔽了。但无论怎么说，EJB 的基础仍然是RMI，所以，假设你想了解EJB 的原理，仅仅要把RMI的原理搞清楚即可了。

- 【[EJB究竟是什么，真的那么神奇吗？？](https://cloud.tencent.com/developer/article/2048526)】
- 【[EJB到底是什么，真的那么神秘吗？](https://blog.51cto.com/u_3664660/3214556)】



## Java中的Bean、POJO、DTO、VO、DO、DAO

### Java语言的设计缺陷

> Java语言欠缺属性、事件、多重继承功能。所以，如果要在Java程序中实现一些面向对象编程的常见需求，只能手写大量胶水代码。Java Bean正是编写这套胶水代码的惯用模式或约定。这些约定包括getXxx、setXxx、isXxx、addXxxListener、XxxEvent等。遵守上述约定的类可以用于若干工具或库。 ——来源：[杨博](https://www.zhihu.com/question/19773379/answer/31625054)

### POJO vs JavaBean 

POJO（Plain Old Java Object, 简单又老的 Java 对象）：不继承任何类、也不实现任何接口、更不遵循任何约定、也不被任何框架侵入的Java对象，理想情况下，POJO是一个只遵循Java语言规范的Java对象；

所谓组件就是一个由可以自行进行内部管理的一个或几个类所组成、外界不了解其内部信息和运行方式的群体。使用它的对象只能通过接口来操作。

Bean的含义是可重复使用的Java组件

POJO 的全称是 Plain Old Java Object, 简单又老的 Java 对象。那些没有继承任何类、也没有实现任何接口，更没有被其它框架侵入的java对象。2005年11月时，“POJO”主要用来指代那些没用遵从特定的Java对象模型，约定或框架（如EJB）的Java对象。

1. 比如有这样一个场景：我们要设计一个List类并且需要保存这个List的大小。那么，我们的实现方式可能是这样的：我们直接把size直接设置成pulic的形式，然后通过“对象.size”的方式进行访问，并通过“对象.size”的方式进行设值。 

但是这种方式会有两个问题：
    - 那就是每一个new出来的对象都有一个size变量，如果很多list对象，那就需要有很多的内存空间来保存这个size变量；
    - 随着业务的发展，list可能需要增加多个属性，比如name等，也就是说每一个list对象所占用的内存空间可能就不固定，会根据属性的增多而变大；
  
于是人们就使用另外一种方式来实现上面的这个场景：把属性设置成private的形式，然后通过添加对属性的get、set方法，实现对这个属性的控制。这种设计方式就解决了上面可能会遇到的两个问题。

于是人们就从这件事情上得到一个结论： Java语言的设计是有缺陷的。并由此，人们又得出一个结论： 人们在使用Java时需要有一些规范或规约。于是，JavaBean登场。

人们把满足下面特征的Java对象统称为JavaBean：

- 提供默认的构造方法；
- 所有属性的访问范围为private；
- 提供针对属性的get、set方法；
- 实现序列化接口；

简而言之，当一个POJO可序列化，有一个无参的构造函数，使用getter和setter方法来访问属性时，他就是一个JavaBean。（没毛病！）

EJB 2.x 的 Entity Beans 比较重量，需要实现 javax.ejb 的一些接口。而 POJO 就比较轻量，就是一个 Java 对象，不需要实现任何的接口。

有了这个概念（惯例），Spring, Hibernate 这些框架交流、实现起来，都大量使用 Bean 这个概念。比如“注入一个 Bean“，“声明一个 Bean”，你就知道这里的这个 Bean 必须要有无参数的构造函数，必须要有 setter/getter 等等。这些框架在使用的时候，会采用初始化出来 Bean 然后 setXX() 这种方式，构造出来最终的 Bean.



## TODO

总结一下：
1. jdk只完成了基于Java语言实现简单的功能，如科学计算等；
2. 商业软件中需要很多的特性，于是Java语言开发出适合企业使用的功能，实现这些功能的Java语言称为J2EE；
3. 基于J2EE实现企业级功能的实现方式有一种事实上的规范，这种规范就是EJB，它最大的特点就是把核心的商业功能拆分成server端和非核心的商业功能拆分成client端，然后client端和server端通过RMI方式连接，并为了实现算力最大化，在server端实现了服务集群的过程。即EJB最大特点是：`cs模式+RMI+服务集群`。所以EJB逐渐成为J2EE的一部分。
4. 在EJB中，把具有某种可重复使用功能的Java组件叫做Bean。Java Bean是基于Java的组件模型，由属性、方法和事件3部分组成。在该模型中，JavaBean可以被修改或与其他组件结合以生成新组件或完整的程序。它是一种Java类，通过封装成为具有某种功能或者处理某个业务的对象。
5. 除了这种bean以外，还有一种Java类，这种类不继承任何类、也不实现任何接口、更不会使用任何框架，这种类就称为POJO。
6. 后来EJB中的Bean发展成为一个软件开发标准，人们又总结发展出另外一个概念： JavaBean，即`凡是具有默认构造函数、属性私有化、提供针对属性的get和set方法并实现序列化接口的POJO统称为JavaBean`。
7. PO、VO、DTO、DO、BO等是后续发展过程中不断添加的一些概念。


RPC vs RMI 

- RPC（Remote Procedure Call）： 说白了，就是本地计算机调用远程计算机上的一个过程。在 Java 之前的大多数编程语言，如，Fortran、C、COBOL 等等，都是过程性的语言，而不是面向对象的。所以，这些编程语言非常自然地用过程表示工作。也就是 RPC 并不是Java的专有名词。但是这种开发模式，需要程序员关注网络部分，也就是说除了要编写远程计算机上的任务函数外，在本地计算机上调用远程计算机上的任务函数时，还要关注如何使用网络问题（如网络传输的协议、数据传输的格式、网络的异常处理等）。
- RMI（Remote Method Invocation）： 由于 RPC 过程需要额外处理网络的问题，在发展过程中人们发现网络问题是通用的，人们可以把网络问题的处理过程抽象出来，让程序员只关注实际的业务处理部分。于是，这种实现方式就变成了本地主机直接调用远程主机的方法。于是 RMI 出现。

可以理解为： RMI + 网络处理 = RPC。


## UML


## 导言

在Spring未出现之前，基于EJB的软件过程中，程序员的职责在于：如何构造出可复用、可扩展的JavaBean。而人们在实践过程中发现，

1. EJB框架本身很“重”并且较为复杂，难以维护；
2. 基于EJB实现软件功能时，程序员只能凭借自身专业素养，通过使用不同的编程模型  及Java语言具有很强的灵活性等特点导致软件功能的实现方式千差万别；

人们发现，EJB这种传统开发模式最大的弊端在于： 程序员可以自主控制对象的构造权以及对象与对象之间的关系的管理权。

于是Spring应运而生。Spring最大特点在于提供了一个容器，这个容器可以用来控制对象构造时机，以及管理对象与对象之间的关系。

虽然Spring提供了一个容器，用来管理 Bean的构造权及Bean之间的依赖关系，但是程序员依然可以自行决定 Bean的构造时机及Bean的依赖关系。这就引出另外一个问题：

何时使用依赖注入及何时自行构建Bean为最优选择？即： 依赖注入与对象创建应该如何选择，各自的适用场景又是怎样的？这就需要了解一下UML中的类图了。

## UML中类的关系

关系由强到弱可以划分为： 泛化 = 实现 > 组合 > 聚合 > 关联 > 依赖 。这几种关系大概可以分为： 横向关系和纵向关系。也可以划分为实体之间的关系和类之间的关系。纵向关系包括泛化和实现，这两种关系就也称为类之间的关系，这里我们不做讨论。我们只讨论实体之间的关系，或者说我们只讨论横向关系。


依赖（Dependency）：语义“a uses b”，a依赖于b，但不持有b的引用。
关联（Association）：语义“a has b”，a拥有b的引用，但a和b无从属关系，二者是一种松散的关联关系，可以随时解除或建立。
聚合（Aggregation）：语义“a owns b”，a拥有b的引用，且有从属关系，二者的耦合比关联更强，但a并不负责b的生命周期。
组合（Composition）：语义“b is a part of a”，a不仅拥有b的引用，还应该全权负责b的整个生命周期，在程序中b通常是a的内部实现细节，不暴露给外部。

我们注意这四种关系中有一个关键的概念“对象生命周期”，在建模时辨别清楚对象生命周期就不难选择采用DI还是创建对象。DI意味着使用者不负责依赖对象的生命周期，创建对象则相反。对应到上面的4种横向关系，我们一般可以这样处理：第1种依赖关系不需要DI也不需要创建对象；第2，3种关联和聚合关系适合采用DI方式，最后一种组合关系适合采用创建对象方式。








## 参考

1. [Programming.log - a place to keep my thoughts on programming](https://www.cnblogs.com/weidagang2046/archive/2009/12/10/1620587.html)




类与类之间由强到弱关系是: 泛化 = 实现 > 组合 > 聚合 > 关联 > 依赖，其中关联，聚合，组合，这三种都是关联关系，并且代码表现都是整体的某个部分，即成员变量。他们只是有强弱关系区分。

### 依赖(Dependency)

![](./images/2023-10-24-18-17-06.png)

- 类A用到了类B，但是关系属于偶然建立的（used-a）关系，不是长期的关系，而是短期的、偶然建立的、临时的关系；
- 例如，我用锤子修桌子，我和锤子之间就是一种临时建立起来的关系，除去修桌子场景（表现在代码中就是“修桌子”方法中用到了“锤子”）外，我和锤子之间没有任何关系；
- UML中使用“单向带箭头虚线”，且依赖方指向被依赖方；
- 代码层面的表现形式为：
  - 局部变量，即类A在某个method方法中使用到了类B

### 关联关系

关联关系分为三种，都属于拥有的关系，只不过是拥有者与被拥有者关系强弱的区别。三种关联关系在代码表现形式上区别不大。

### 关联(Association)

![](./images/2023-10-24-18-17-07.png)

- 这种关系属于拥有的（has-a）关系，是长期存在的关系；这种关系可以是单向的，也可以是双向的；
- 例如，教师教授知识，教师和学生就是一种长期存在的关系，要想完成教授知识的业务，教师就必须拥有学生，教师教授知识离开学生后就没有办法完成；
- UML中使用“带箭头的实线”表示单项拥有关系，箭头指向被拥有者；使用“不带箭头的实线”或“带双向箭头的实线”表示双向拥有关系；
- 代码层面的表现形式为：
  - 成员变量
  - 对全局变量的引用

### 聚合（Aggregation）

- 这种关系也属于拥有的关系，也是长期存在的关系；这种关系表达的重点在于，是为了某种场景才把两个不相关的对象放到一起，而离开了这种场景，二者并不相关；
- 例如，拖拉机和车斗，为了实现“拖拉机拉货物”的场景，拖拉机就必须拥有车斗，离开了“拖拉机拉货物”这种业务场景后，车斗可以独立于拖拉机存在；
- UML中使用“带普通`空心`菱形的实线”表示聚合关系，菱形指向拥有者；
- 代码层面的表现形式为：
  - 成员变量


### 组合(Composition)

- 这种关系比聚合关系更强，属于各个部分组合成一个整体的业务场景，并且构成的整体可以控制各个部分的生命周期；
- 例如，汽车和发动机引擎，要想把汽车构造出来，就必须存在发动机引擎，而当汽车消亡时，发动机引擎也随着消亡；
- UML中使用“带实心菱形的实线”表示组合关系，菱形指向整体；
- 代码层面的表现形式为：
  - 成员变量



### 实现（Realization)

### 泛化(Generalization)





<br /><br /><br />
<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />

