---
title: "设计模式"
category:
  - "cscore"
tag:
  - "设计模式"
---

## 1. 研究方式

1. 提出目标： 为了使软件具有更高的可维护性、可读性、可重用性，实现高内聚、低耦合的目标

2. 评判标准： 设计模式的七大原则

3. 解决方案： 在实践过程中，不断总结和完善，之后形成固定的模式，并推广使用之

## 2. 学习方法

根据现实生活中的开发样例所具备的问题，进行改造，改造之后进行总结。

需要了解相关的Java使用方式。最主要是：`上转型与下转型`。

## 3. 设计模式的原则

- 单一职责原则
  - 定义： 在类级别上，一个类应该只负责一项职责，即对类要进行拆分

- 接口隔离原则
  - 定义： 客户端不应该依赖它不需要的接口，即一个类对另一个类的依赖应该建立在最小的接口上。

- 依赖倒转
  - 定义： 抽象不应该依赖于细节，细节应该依赖于抽象。
  - 依赖传递的三种方法：
    - 接口传递
    - 构造方法传递
    - setter方法传递

- 里氏替换原则
  - 定义： 所有能使用父类型对象的地方，必须能透明的使用其子类型对象。即子类型不能重写父类型的方法，可以使用组合、聚合或使用更抽象的基类。

- 开闭原则
  - 定义： 对扩展开放，对修改关闭。用抽象构建框架，用实现扩展细节。当一个软件发生变化时，尽量针对原有功能进行扩展，而不是对原有功能进行修改。对提供方开放扩展，对使用方关闭修改。

- 迪米特原则
  - 定义： 一个类对其依赖的类的实现细节应该知道的越少越好。实际操作： 多使用成员变量、方法参数、方法返回值的方式，少使用局部变量的方式。

- 合成复用原则
  - 定义： 软件过程时尽量使用合成/聚合的方式，而不是使用继承。依赖、组合、聚合的相关实现方式。
  - 现有一A类，B类对A类进行操作：
    - 依赖： B类中有一方法，A是此方法的参数；
    - 聚合： A是B的成员变量，并且B中有A的setter方法；
    - 组合： A是B的成员变量，并且A是直接new出来的；

- 七大原则的核心思想
  - 尽可能找出软件中可能产生变化的部分，并把他们独立出来；
  - 针对接口编程而不是针对实现编程；
  - 为了交互对象的松耦合的设计而努力；


## 4. 类与类之间的关系

- 依赖关系： 一个类中用到了另外一个类，如果另一个类不存在，编译都无法通过；
- 关联关系： 属于依赖关系的特例，具有导向性和多重性，能指明类与类之间的对应关系的数量；
- 泛化关系： 继承关系，子类继承父类；
- 实现关系： 类实现接口；
- 组合关系： 整体与部分的关系，部分可以脱离整体存在；
- 聚合关系： 整体与部分的关系，部分不能脱离整体存在；


## 5. 单例模式

针对要求软件系统中只保留某一个类的一个实例的业务场景。我们常写的普通的软件类，在高并发场景下，会创建多个实例，容易产生线程同步问题。因此需要采用特殊的设计模式完成类的设计。

如Hibernate中的sessionfactory就要求整个应用中只存在一个实例。此外还有一些应用场景，如日志、线程池、数据源、硬件设备驱动等。

### 5.1. 饿汉式-静态常量方式

```
public class Singleton{

  // 1. 构造器私有化，防止外部new
  private Singleton(){}

  // 2. 本类内部创建实例对象
  private final static Singleton instance = new Singleton();

  // 3. 对外暴露使用方法
  public static Singleton getInstance(){
    return instance;
  }
}

// 使用
Singleton oneSingleton = Singleton.getInstance();
```

- 分析
  - 在类加载时完成实例化，避免了线程同步的问题；
  - 由于类加载机制中类的加载有很多中方式，因此不能确定是否有其他方式导致类加载；
  - 如果软件过程中没有用到，可能会造成内存浪费；
  - 可在生产环境下使用；

- 使用场景
  - java.lang.Runtime 使用的就是这种单例模式的实现方式；

### 5.2. 饿汉式-静态代码块方式

```
public class Singleton{

  // 1. 构造器私有化，防止外部new
  private Singleton(){}

  // 2. 声明
  private static Singleton instance;

  // 3. 静态代码块中进行实例化
  static {
    instance = new Singleton();
  }

  // 4. 对外暴露使用方法
  public static Singleton getInstance(){
    return instance;
  }
}

// 使用
Singleton oneSingleton = Singleton.getInstance();
```

- 分析
  - 与上面方式类似，只不过是把类实例化过程放到了静态代码块中；
  - 也可以在生产环境下使用，并且优缺点与上面方式一样；

### 5.3. 懒汉式（线程不安全）-无同步措施方式

```
public class Singleton{
  // 1. 构造器私有化，防止外部new
  private Singleton(){}

  // 2. 声明
  private static Singleton instance;

  // 3. 对外暴露使用方法，如果对象不存在就生成一个进行返回
  public static Singleton getInstance(){
    if (instance == null) {
      instance = new Singleton();
    }
    return instance;
  }
}

// 使用
Singleton oneSingleton = Singleton.getInstance();
```

- 分析
  - 使用了懒加载的方式，但是只能在单线程模式下使用；
  - 如果一个线程执行到了判断语句，而另一个线程也执行到了判断语句，这时就会产生两个实例；
  - 不建议在生产环境下使用；

### 5.4. 懒汉式（线程安全）-同步方法

```
public class Singleton{
  // 1. 构造器私有化，防止外部new
  private Singleton(){}

  // 2. 声明
  private static Singleton instance;

  // 3. 对外暴露使用方法，如果对象不存在就生成一个进行返回，并且生成方法属于同步方法，避免线程同步问题；
  public static synchronized Singleton getInstance(){
    if (instance == null) {
      instance = new Singleton();
    }
    return instance;
  }
}

// 使用
Singleton oneSingleton = Singleton.getInstance();
```

- 分析
  - 在上一种模式的基础上，对使用方法进行优化，添加了 synchronized 关键字；
  - `虽然这种方式是线程安全的，但这种方式的效率太低了`，每一个想要获取实例的方法都需要进行同步进行等待，并且get方法实际上只需要执行一次即可，后面的使用可以直接返回即可。
  - 生产环境下不推荐使用这种方式；

### 5.5. 懒汉式（线程不安全）-同步代码块

```
public class Singleton{
  // 1. 构造器私有化，防止外部new
  private Singleton(){}

  // 2. 声明
  private static Singleton instance;

  // 3. 对外暴露使用方法，如果对象不存在就生成一个进行返回，并且生成方法属于同步方法，避免线程同步问题；
  public static Singleton getInstance(){
    if (instance == null) {
      synchronized (Singleton.class){
        instance = new Singleton();
      }
    }
    return instance;
  }
}

// 使用
Singleton oneSingleton = Singleton.getInstance();
```

- 分析
  - 虽然使用了同步代码块的方式，但是如果多线程执行 判断条件 时，可能会同步创建出多个实例
  - 生产环境下依然不建议使用；


### 5.6. 双重锁校验（DCL）

```
public class Singleton{
  // 1. 构造器私有化，防止外部new
  private Singleton(){}

  // 2. 使用 volatile 关键字来声明
  private static volatile Singleton instance;

  // 3. 对外暴露使用方法，如果对象不存在就生成一个进行返回，并且生成方法属于同步方法，避免线程同步问题；
  public static Singleton getInstance(){
    if (instance == null) {
      synchronized (Singleton.class){
        if (instance == null) {
          instance = new Singleton();
        }
      }
    }
    return instance;
  }
}

// 使用
Singleton oneSingleton = Singleton.getInstance();
```

- 分析
  - 第一次校验时，如果之前已经完成实例化，就直接返回，不用再次生成，提高效率；
  - 如果没有第二次校验，在并发情况下，线程a和线程b同时进入同步代码块，假设线程a先执行同步代码块进行，完成实例化，之后线程b获取执行权限后会再次生成一个实例；加上第二次校验后，线程b获取执行权限后判断已经完成实例化，就会直接跳出判断返回实例化对象；
  - 高并发场景下，线程a和线程b同时执行到 synchronized 处获取的 instance 实例为 null，但是线程a完成实例化后，等待执行权限的线程b能够通过 volatile 关键字立刻获取到 instance 变量的通知，随后 instance 变成非空；
  - 延迟加载，效率较高，建议在生产环境下使用；

### 5.7. 静态内部类

```
public class Singleton{
  private Singleton(){}

  private static class SingletonHolder{
    private final static Singleton INSTANCE = new Singleton();
  }

  public static getInstance(){
    return SingletonHolder.INSTANCE;
  }
}

// 使用
Singleton oneSingleton = Singleton.getInstance();
```

- 分析
  - 静态内部类 SingletonHolder 在类初始化时，并不会立即加载内部类，内部类不会加载，就不会生成 INSTANCE 实例，就不会占用内存空间；只有当getInstance()方法第一次被调用时，才会加载内部类，完成初始化；
  - jvm保证同一个加载器类型下，一个类型只会初始化一次；
  - 由于是静态内部类方式完成的实例化，因此没有办法完成参数的传递；
  - 这种方法不仅能够保证线程安全、也保证了单例的唯一性，同时还延迟了单例的实例化；
  - 推荐使用


### 5.8. 枚举类

略。

- 分析
  - 能避免多线程同步问题，还能避免反序列化时生成多个实例的问题；
  - 推荐使用

### 5.9. 单例模式在jdk中的使用

java.lang.Runtime 就是经典的饿汉式单例模式；

### 5.10. 单例模式在Spring中的使用





- [终于有人把 java代理 讲清楚了，万字详解！](https://mp.weixin.qq.com/s?__biz=MzIyMjQwMTgyNA==&mid=2247483912&idx=1&sn=94e3c520c96a20346974ea498bc5b03a&chksm=e82f4647df58cf517fecbe048108c47cbdfde6c1688e2c4435ae532cc28d1ea5ba7e74d873ba&cur_album_id=1344000958027710464&scene=189#wechat_redirect)
- [设计模式目录](http://www.cyc2018.xyz/%E5%85%B6%E5%AE%83/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%20-%20%E7%9B%AE%E5%BD%95.html#%E4%B8%80%E3%80%81%E5%89%8D%E8%A8%80)
- [2W 字详解设计模式](https://mp.weixin.qq.com/s/Ji_mP7pO17ps5Mtku6Bq1Q)
- [Java Design Patterns](https://java-design-patterns.com/)

<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />




[短信防刷浅谈对设计模式的应用](https://blog.csdn.net/t_chao/article/details/120194731)
[手机验证短信设计与代码实现](https://blog.csdn.net/a19860903/article/details/49093401)