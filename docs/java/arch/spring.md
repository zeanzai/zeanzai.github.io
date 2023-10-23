---
title: "Spring基本原理"
category:
  - "arch"
tag:
  - "spring"
---

## EJB的困境

::: tip 前置知识
POJO（Plain Old Java Object, 简单又老的 Java 对象）：不继承任何类、也不实现任何接口、更不遵循任何约定、也不被任何框架侵入的Java对象，理想情况下，POJO是一个只遵循Java语言规范的Java对象；

所谓组件就是一个由可以自行进行内部管理的一个或几个类所组成、外界不了解其内部信息和运行方式的群体。使用它的对象只能通过接口来操作。

Bean的含义是可重复使用的Java组件，并具有以下特点

- 提供默认的构造方法；
- 所有属性的访问范围为private；
- 提供针对属性的get、set方法；
- 实现序列化接口；

简而言之，当一个POJO可序列化，有一个无参的构造函数，使用getter和setter方法来访问属性时，他就是一个JavaBean。（没毛病！）
:::

在没有出现Spring之前，EJB是Java领域大型企业级应用的主要技术选型。但EJB有着很大的问题：

1. 整个软件过程中，非业务相关的技术步骤过于复杂与重复。比如每开发一个模块就都需要创建servlet、web.xml等，还需要重量级容器作为支撑等；
2. EJB并没有对Bean的管理和维护设置统一标准，这使得Bean的管理和维护极其混乱；
3. EJB的交叉业务实现过程复杂。比如安全控制、日志记录、事务控制等交叉业务，需要在每个需求中都要进行实现；
4. 由于框架的复杂性，导致很多业务模块的开发过程并不能很好的遵守设计模式中的 OCP 原则和 DIP 原则，这导致项目模块耦合性较强，耦合性越强，可扩展性就越差；
5. ......

EJB的技术，重点在于想方设法实现一个又一个的可复用的JavaBean组件。但是这个过程中需要程序员自行实现，而由于`程序员技术素养的差别`以及`Java语言的灵活性特点`，这又导致Bean的实现过程千差万别，最终导致软件系统难以维护。

::: tip 设计模式的原则

:::

## 控制反转 

![20231019175530](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20231019175530.png)

::: tip DIP、IoC、DI、Spring之间的关系

DIP是设计模式中的一种设计原则，不过它属于GoF；
IoC可以看作一种全新的设计模式，但是理论和时间成熟相对较晚，并没有包含在GoF中；
DI是实现了IoC的一种常见的技术实现方式，另一种方式是依赖查找；
而Spring框架就是一个实现了IoC思想的框架；接口注入会使类之间形成一定的依赖关系，产生侵入性，所以Spring不支持接口注入，这不是Spring的缺点，而应该是优点。
:::


## 防止DI的滥用

> 扩展阅读： 

### 原则一

建模时辨别清楚`对象生命周期`就不难选择采用DI还是创建对象： 

- 依赖关系不需要DI也不需要创建对象；
- 关联关系和聚合关系需要采用DI方式；
- 组合关系需要创建对象方式；

### 原则二

在决定采用DI设计后，马上要考虑的是注入方式问题。DI中注入方式主要有构造函数注入和Setter注入（还有接口注入较少使用，本文不讨论）。“人与身份证的依赖关系”适合采用Setter注入，因为人不是一出生就有身份证，而是到了法定年龄才有，用构造函数注入表达的语义与此相违背。相反“人与父母的依赖关系”则适合采用构造函数注入，因为亲子关系是从人一出生就建立的，用Setter注入必然使得对象创建后有一段时间处于非法状态，按契约式设计的术语即破坏了对象的不变量(invariant)。

## Spring概览

Spring6和Spring5。

### Spring版本命名规范

### Spring特点 

- 轻量级
- 实现了控制反转和容器
- 支持面向切面编程
- 支持事物管理
- 模块化
- ......

### Spring核心组件

![20231019182425](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20231019182425.png)

- Spring Core模块： 这是Spring框架最基础的部分，它提供了依赖注入（DependencyInjection）特征来实现容器对Bean的管理。核心容器的主要组件是 BeanFactory，BeanFactory是工厂模式的一个实现，是任何Spring应用的核心。它使用IoC将应用配置和依赖从实际的应用代码中分离出来。
- Spring Context模块： 如果说核心模块中的BeanFactory使Spring成为容器的话，那么上下文模块就是Spring成为框架的原因。
这个模块扩展了BeanFactory，增加了对国际化（I18N）消息、事件传播、验证的支持。另外提供了许多企业服务，例如电子邮件、JNDI访问、EJB集成、远程以及时序调度（scheduling）服务。也包括了对模版框架例如Velocity和FreeMarker集成的支持
- Spring AOP模块： Spring在它的AOP模块中提供了对面向切面编程的丰富支持，Spring AOP 模块为基于 Spring 的应用程序中的对象提供了事务管理服务。通过使用 Spring AOP，不用依赖组件，就可以将声明性事务管理集成到应用程序中，可以自定义拦截器、切点、日志等操作。
- Spring DAO模块： 提供了一个JDBC的抽象层和异常层次结构，消除了烦琐的JDBC编码和数据库厂商特有的错误代码解析，用于简化JDBC。
- Spring ORM模块： Spring提供了ORM模块。Spring并不试图实现它自己的ORM解决方案，而是为几种流行的ORM框架提供了集成方案，包括Hibernate、JDO和iBATIS SQL映射，这些都遵从 Spring 的通用事务和 DAO 异常层次结构。
- Spring Web MVC模块： Spring为构建Web应用提供了一个功能全面的MVC框架。虽然Spring可以很容易地与其它MVC框架集成，例如Struts，但Spring的MVC框架使用IoC对控制逻辑和业务对象提供了完全的分离。
- Spring WebFlux模块： Spring Framework 中包含的原始 Web 框架 Spring Web MVC 是专门为 Servlet API 和 Servlet 容器构建的。反应式堆栈 Web 框架 Spring WebFlux 是在 5.0 版的后期添加的。它是完全非阻塞的，支持反应式流(Reactive Stream)背压，并在Netty，Undertow和Servlet 3.1+容器等服务器上运行。
- Spring Web模块： Web 上下文模块建立在应用程序上下文模块之上，为基于 Web 的应用程序提供了上下文，提供了Spring和其它Web框架的集成，比如Struts、WebWork。还提供了一些面向服务支持，例如：实现文件上传的multipart请求。

![20231019182808](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20231019182808.png)

### Spring容器高层视图

![20231019182950](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20231019182950.png)


## Bean

### Bean的元信息

![20231019183530](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20231019183530.png)

### Bean的作用域 

> 单例模式的线程同步问题
>

### Bean的自动装配方式


autowire 与 resource 的区别；

### Bean的生命周期

### Spring中如何描述Bean

就是说如何把我们创建好的一个个Bean给到Spring容器，这里包括Bean的基本信息以及Bean与Bean之间关系的描述信息等。

- 直接编码方式：我们一般接触不到直接编码的方式，但其实其它的方式最终都要通过直接编码来实现。
- 配置文件方式：通过xml、propreties类型的配置文件，配置相应的依赖关系，Spring读取配置文件，完成依赖关系的注入。
- 注解方式：注解方式应该是我们用的最多的一种方式了，在相应的地方使用注解修饰，Spring会扫描注解，完成依赖关系的注入。


- 配置文件方式 

```
// 在bean.xml中进行描述
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans-4.3.xsd">
    <import resource="其他配置文件的位置" />
    <bean id="bean名称" class="bean完整类名"/>
</beans>

// 使用
@Test
public void test1() {
    //1. bean配置文件位置
    String beanXml = "classpath:beans.xml";
    //2. 创建ClassPathXmlApplicationContext容器，给容器指定需要加载的bean配置文件
    ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext(beanXml);
    //3. getBeanDefinitionNames用于获取容器中所有bean的名称
    for (String beanName : context.getBeanDefinitionNames()) {
        //获取bean的别名
        String[] aliases = context.getAliases(beanName);
        System.out.println(String.format("beanName:%s,别名:[%s]", beanName, String.join(",", aliases)));
    }
}
```

```
// 配置文件beans.properties中进行配置
car.(class)=com.javacode2018.lesson002.demo1.Car
car.name=奥迪

car1.(class)=com.javacode2018.lesson002.demo1.Car
car1.name=保时捷

car2.(parent)=car1

user.(class)=com.javacode2018.lesson002.demo1.User
user.name=路人甲Java
user.car(ref)=car

// 使用
@Test
public void test2() {
    //定义一个spring容器，这个容器默认实现了BeanDefinitionRegistry，所以本身就是一个bean注册器
    DefaultListableBeanFactory factory = new DefaultListableBeanFactory();

    //定义一个properties的BeanDefinition读取器，需要传递一个BeanDefinitionRegistry（bean注册器）对象
    PropertiesBeanDefinitionReader propertiesBeanDefinitionReader = new PropertiesBeanDefinitionReader(factory);

    //指定bean xml配置文件的位置
    String location = "classpath:/com/javacode2018/lesson002/demo2/beans.properties";
    //通过PropertiesBeanDefinitionReader加载bean properties文件，然后将解析产生的BeanDefinition注册到容器容器中
    int countBean = propertiesBeanDefinitionReader.loadBeanDefinitions(location);
    System.out.println(String.format("共注册了 %s 个bean", countBean));

    //打印出注册的bean的配置信息
    for (String beanName : factory.getBeanDefinitionNames()) {
        //通过名称从容器中获取对应的BeanDefinition信息
        BeanDefinition beanDefinition = factory.getBeanDefinition(beanName);
        //获取BeanDefinition具体使用的是哪个类
        String beanDefinitionClassName = beanDefinition.getClass().getName();
        //通过名称获取bean对象
        Object bean = factory.getBean(beanName);
        //打印输出
        System.out.println(beanName + ":");
        System.out.println("    beanDefinitionClassName：" + beanDefinitionClassName);
        System.out.println("    beanDefinition：" + beanDefinition);
        System.out.println("    bean：" + bean);
    }
}
```

- Java直接编码方式之一： 基于注解（JSR+Spring注解）

```
<context:component-scan base-package="com.atguigu.spring6">
</context:component-scan>

或 

@Configuration
//@ComponentScan({"com.atguigu.spring6.controller", "com.atguigu.spring6.service","com.atguigu.spring6.dao"})
@ComponentScan("com.atguigu.spring6")
public class Spring6Config {
}

// 之后使用

```

- Java直接编码方式之二： 基于SpringAPI方式



- GroovyDSL方式


- 【待定】使用 Spring 官方提供的注解
  - 有哪些注解，这些注解的功能是什么


### 依赖注入的实现方式 

基于Spring的依赖注入的实现方式，意思就是说，现在有一个类A，需要使用别的功能模块中已经开发完成的类B，如何把类B注入到类A中，让类A进行使用。等同于： Bean的实例化 。

- 构造方法

```
public CatDaoImpl(String message){
  this. message = message;
}

<bean id="CatDaoImpl" class="com.CatDaoImpl"> 
  <constructor-arg value=" message "></constructor-arg>
</bean>
```

- setter

```
public class Id {
  private int id;

  public int getId() { return id; }

  public void setId(int id) { this.id = id; }
}

<bean id="id" class="com.id "> 
  <property name="id" value="123"></property> 
</bean>
```

- 实例工厂方式

```
//非静态工厂 
public class DaoFactory { 
   public FactoryDao getFactoryDaoImpl(){
     return new FactoryDaoImpl();
   }
 }
 
public class SpringAction {
  //注入对象
  private FactoryDao factoryDao; 
  
  public void setFactoryDao(FactoryDao factoryDao) {
    this.factoryDao = factoryDao;
  }
}

<bean name="springAction" class="SpringAction">
   <!--使用非静态工厂的方法注入对象,对应下面的配置文件-->
   <property name="factoryDao" ref="factoryDao"></property>
 </bean>
 
 <!--此处获取对象的方式是从工厂类中获取实例方法-->
 <bean name="daoFactory" class="com.DaoFactory"></bean>
 
<bean name="factoryDao" factory-bean="daoFactory" factory-method="getFactoryDaoImpl"></bean>

```

- 静态工厂方式

```
public class DaoFactory { //静态工厂
 
   public static final FactoryDao getStaticFactoryDaoImpl(){
      return new StaticFacotryDaoImpl();
   }
}
 
public class SpringAction {
 
 //注入对象
 private FactoryDao staticFactoryDao; 
 
 //注入对象的 set 方法
 public void setStaticFactoryDao(FactoryDao staticFactoryDao) {
     this.staticFactoryDao = staticFactoryDao;
 }
 
}

//factory-method="getStaticFactoryDaoImpl"指定调用哪个工厂方法
 <bean name="springAction" class=" SpringAction" >
   <!--使用静态工厂的方法注入对象,对应下面的配置文件-->
   <property name="staticFactoryDao" ref="staticFactoryDao"></property>
 </bean>
 
 <!--此处获取对象的方式是从工厂类中获取静态方法-->
<bean name="staticFactoryDao" class="DaoFactory"
  factory-method="getStaticFactoryDaoImpl"></bean>
```

- FactoryBean创建bean对象

```
public class UserFactoryBean implements FactoryBean<UserModel> {
    int count = 1;
    @Nullable
    @Override
    public UserModel getObject() throws Exception { //@1
        UserModel userModel = new UserModel();
        userModel.setName("我是通过FactoryBean创建的第"+count+++ "对象");//@4
        return userModel;
    }
    @Nullable
    @Override
    public Class<?> getObjectType() {
        return UserModel.class; //@2
    }
    @Override
    public boolean isSingleton() { 
        return true; //@3
    }
}

<!-- 通过FactoryBean 创建UserModel对象 -->
<bean id="createByFactoryBean" class="com.javacode2018.lesson001.demo3.UserFactoryBean"/>

//1.bean配置文件位置
String beanXml = "classpath:/com/javacode2018/lesson001/demo3/beans.xml";
//2.创建ClassPathXmlApplicationContext容器，给容器指定需要加载的bean配置文件
ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext(beanXml);
System.out.println("spring容器中所有bean如下：");
//getBeanDefinitionNames用于获取容器中所有bean的名称
for (String beanName : context.getBeanDefinitionNames()) {
    System.out.println(beanName + ":" + context.getBean(beanName));
}
```

意思就是从Spring容器中获取一个Bean，然后再进行使用。

> 同名Bean的处理办法
> Bean循环依赖的解决方案
> 还有哪些注解可以表示Bean
> Bean的状态


## 配置 

配置元信息
Spring的配置方式有哪些



## 容器 

容器启动过程
父子容器


![20231019222915](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20231019222915.png)

org.springframework.beans.factory.BeanFactory

org.springframework.context.ApplicationContext

org.springframework.context.support.ClassPathXmlApplicationContext

org.springframework.context.annotation.AnnotationConfigApplicationContext


> BeanFactory VS Application VS FactoryBean


## 注解详解

● @Autowired注解可以出现在：属性上、构造方法上、构造方法的参数上、setter方法上。
● 当带参数的构造方法只有一个，@Autowired注解可以省略。（）
● @Autowired注解默认根据类型注入。如果要根据名称注入的话，需要配合@Qualifier注解一起使用。

@Resource注解也可以完成属性注入。那它和@Autowired注解有什么区别？
● @Resource注解是JDK扩展包中的，也就是说属于JDK的一部分。所以该注解是标准注解，更加具有通用性。(JSR-250标准中制定的注解类型。JSR是Java规范提案。)
● @Autowired注解是Spring框架自己的。
● @Resource注解默认根据名称装配byName，未指定name时，使用属性名作为name。通过name找不到的话会自动启动通过类型byType装配。
● @Autowired注解默认根据类型装配byType，如果想根据名称装配，需要配合@Qualifier注解一起用。
● @Resource注解用在属性上、setter方法上。
● @Autowired注解用在属性上、setter方法上、构造方法上、构造方法参数上。
@Resource注解属于JDK扩展包，所以不在JDK当中，需要额外引入以下依赖：【如果是JDK8的话不需要额外引入依赖。高于JDK11或低于JDK8需要引入以下依赖。】

```
<dependency>
    <groupId>jakarta.annotation</groupId>
    <artifactId>jakarta.annotation-api</artifactId>
    <version>2.1.1</version>
</dependency>
```

### @ComponentScan、@ComponentScans详解

### @Configuration注解

### 

Web:

@Controller：组合注解（组合了@Component注解），应用在MVC层（控制层）。
@RestController：该注解为一个组合注解，相当于@Controller和@ResponseBody的组合，注解在类上，意味着，该Controller的所有方法都默认加上了@ResponseBody。
@RequestMapping：用于映射Web请求，包括访问路径和参数。如果是Restful风格接口，还可以根据请求类型使用不同的注解：
@GetMapping
@PostMapping
@PutMapping
@DeleteMapping
@ResponseBody：支持将返回值放在response内，而不是一个页面，通常用户返回json数据。
@RequestBody：允许request的参数在request体中，而不是在直接连接在地址后面。
@PathVariable：用于接收路径参数，比如@RequestMapping(“/hello/{name}”)申明的路径，将注解放在参数中前，即可获取该值，通常作为Restful的接口实现方法。
@RestController：该注解为一个组合注解，相当于@Controller和@ResponseBody的组合，注解在类上，意味着，该Controller的所有方法都默认加上了@ResponseBody。
容器:

@Component：表示一个带注释的类是一个“组件”，成为Spring管理的Bean。当使用基于注解的配置和类路径扫描时，这些类被视为自动检测的候选对象。同时@Component还是一个元注解。
@Service：组合注解（组合了@Component注解），应用在service层（业务逻辑层）。
@Repository：组合注解（组合了@Component注解），应用在dao层（数据访问层）。
@Autowired：Spring提供的工具（由Spring的依赖注入工具（BeanPostProcessor、BeanFactoryPostProcessor）自动注入）。
@Qualifier：该注解通常跟 @Autowired 一起使用，当想对注入的过程做更多的控制，@Qualifier 可帮助配置，比如两个以上相同类型的 Bean 时 Spring 无法抉择，用到此注解
@Configuration：声明当前类是一个配置类（相当于一个Spring配置的xml文件）
@Value：可用在字段，构造器参数跟方法参数，指定一个默认值，支持 #{} 跟 ${} 两个方式。一般将 SpringbBoot 中的 application.properties 配置的属性值赋值给变量。
@Bean：注解在方法上，声明当前方法的返回值为一个Bean。返回的Bean对应的类中可以定义init()方法和destroy()方法，然后在@Bean(initMethod=”init”,destroyMethod=”destroy”)定义，在构造之后执行init，在销毁之前执行destroy。
@Scope:定义我们采用什么模式去创建Bean（方法上，得有@Bean） 其设置类型包括：Singleton 、Prototype、Request 、 Session、GlobalSession。
AOP:

@Aspect:声明一个切面（类上） 使用@After、@Before、@Around定义建言（advice），可直接将拦截规则（切点）作为参数。
@After ：在方法执行之后执行（方法上）。
@Before： 在方法执行之前执行（方法上）。
@Around： 在方法执行之前与之后执行（方法上）。
@PointCut： 声明切点 在java配置类中使用@EnableAspectJAutoProxy注解开启Spring对AspectJ代理的支持（类上）。
事务：

@Transactional：在要开启事务的方法上使用@Transactional注解，即可声明式开启事务。

## 面向切面编程

AOP的术语、切点表达式
GoF之代理模式、静态代理和动态代理（JDK动态代理、CGLib动态代理）、Spring AOP 和 AspectJ AOP 区别
主要应用场景 



- AOP定义及相关术语
● 连接点 Joinpoint
  ○ 在程序的整个执行流程中，可以织入切面的位置。方法的执行前后，异常抛出之后等位置。
● 切点 Pointcut
  ○ 在程序执行流程中，真正织入切面的方法。（一个切点对应多个连接点）
● 通知 Advice
  ○ 通知又叫增强，就是具体你要织入的代码。
  ○ 通知包括：
    ■ 前置通知
    ■ 后置通知
    ■ 环绕通知
    ■ 异常通知
    ■ 最终通知
● 切面 Aspect
  ○ 切点 + 通知就是切面。
● 织入 Weaving
  ○ 把通知应用到目标对象上的过程。
● 代理对象 Proxy
  ○ 一个目标对象被织入通知后产生的新对象。
● 目标对象 Target
  ○ 被织入通知的对象。

- 切点表达式 

● 连接点 Joinpoint
  ○ 在程序的整个执行流程中，可以织入切面的位置。方法的执行前后，异常抛出之后等位置。
● 切点 Pointcut
  ○ 在程序执行流程中，真正织入切面的方法。（一个切点对应多个连接点）
● 通知 Advice
  ○ 通知又叫增强，就是具体你要织入的代码。
  ○ 通知包括：
    ■ 前置通知
    ■ 后置通知
    ■ 环绕通知
    ■ 异常通知
    ■ 最终通知
● 切面 Aspect
  ○ 切点 + 通知就是切面。
● 织入 Weaving
  ○ 把通知应用到目标对象上的过程。
● 代理对象 Proxy
  ○ 一个目标对象被织入通知后产生的新对象。
● 目标对象 Target
  ○ 被织入通知的对象。





## WEB 

MVC原理

常用注解

升级



## Spring中的事务原理

- Spring中如何进行事务管理、Spring中事务框架有什么好处？
- 事务及其特性
- 事务属性 

![20231019200209](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20231019200209.png)

- 声明式事务实现原理了解吗？
- 事务失效原因及其解决方案




## SpringBoot 

SpringBoot优点

SpringBoot启动原理



## SpringCloud


## 参考资料

- 《字节大佬总结的面试题库》
- 《Java小抄》
- [面渣逆袭：Spring三十五问，四万字+五十图详解](https://www.cnblogs.com/three-fighter/p/16166891.html)
- [Java-充电社-Spring教程](http://www.itsoku.com/course/5)
- [Spring](https://docs.spring.io/spring-framework/reference/core/beans/definition.html)
- [Spring6(尚硅谷2023)](https://www.yuque.com/yguangbxiu/note/cfw98m0tg3k6a38d#QCP35)
- [动力节点2022-Spring6](https://www.yuque.com/dujubin/ltckqu/kipzgd)
- [控制反转](https://zh.wikipedia.org/zh-hans/%E6%8E%A7%E5%88%B6%E5%8F%8D%E8%BD%AC)
- [依赖注入中的`依赖`与UML中`依赖关系`在语义上的区别](https://www.cnblogs.com/weidagang2046/archive/2009/12/10/1620587.html)

---


<br /><br /><br />
<img style="border:1px red solid; display:block; margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="微信公众号" />

