---
"title": "模板方法模式"
category:
  - "design-pattern"
tag:
  - "模板方法"
---

## 业务场景 

假如一个业务流程需要几个通用的步骤，只有部分细节不一样外，其他的都一样，这种场景都适合使用模板方法模式。例如，喝红茶，喝绿茶、喝白茶等喝茶过程可以分为： 准备茶杯、挑选茶叶、煮茶。

## 垃圾实现 

垃圾的实现就是直接针对每一个场景都实现一套代码。

## 模板方法实现

垃圾实现中会有很多重复的代码，比如都需要准备茶杯、都需要进行煮茶。

1. 构造一个抽象类，抽象类中有一个通用的算法骨架，及代表算法步骤的虚方法

```

public abstract class DrinkTea{

    // 喝茶
    public final void drink() {
        prepareCup();
        pickTea();
        cookTea();
    }

    // 准备茶杯
    public void prepareCup(){
        System.out.println("准备了茶杯")
    } 

    // 挑选茶叶 
    public abstract void pickTea();

    // 煮茶
    public void cookTea(){
        System.out.println("煮茶")
    } 
} 


```

2. 根据业务需求继承DrinkTea抽象类，并实现抽象类中的虚方法

喝红茶：

```
public class DrinkRedTea extends DrinkTea{
    @Override
    public void pickTea(){
        System.out.println("挑选了红茶")
    }
}
```

喝绿茶：

```
public class DrinkGreenTea extends DrinkTea{
    @Override
    public void pickTea(){
        System.out.println("挑选了绿茶")
    }
}
```

喝白茶：

```
public class DrinkWhiteTea extends DrinkTea{
    @Override
    public void pickTea(){
        System.out.println("挑选了白茶")
    }
}
```

## 使用

```
main(){

    // 喝红茶
    DrinkTea drinkTea = new DrinkRedTea();
    drinkTea.drink();


    // 喝绿茶
    DrinkTea drinkTea = new DrinkGreenTea();
    drinkTea.drink();
}
```

## 其他

1. 如果新增一种茶叶，那么就只需要创建一个类，然后继承DrinkTea类并实现pickTea()虚方法即可；
2. 如果修改茶叶，只需要修改对应的茶叶的挑选方法就行，其他不需要修改。


Spring中提供了一些template工具类，如RestTemplate、RedisTemplate，有兴趣可以了解一下。



<img style="border:1px red solid; display:block; margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="微信公众号" />


