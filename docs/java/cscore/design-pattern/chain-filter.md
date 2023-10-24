---
"title": "责任链模式"
category:
  - "design-pattern"
tag:
  - "责任链"
---

## 业务场景

实际业务开发过程中，我们往往需要对请求进行各种校验，如黑白名单校验、参数校验、功能权限校验、数据权限校验等。并且这些校验往往是一个链，如先校验黑名单，如果通过就校验参数，再通过就校验功能权限......也就是校验成功一个就接着校验下一个，其中只要有一个没有通过，下面的也就不需要校验了。

还记得上学时，每次发试卷的时候，老师都会把试卷递给第一排的同学，然后第一排同学拿一张后把剩下的传递给座位后面的同学，责任链就类似于这种场景。

## 垃圾实现

```
if(黑白名单校验) {
    if(参数校验) {
        if(功能权限校验){
            if(数据权限校验){
                // 业务逻辑
            }
        }
    }
}

```

## 责任链模式

1. 提供一个抽象类，抽象类中完成对责任链的组装，并提供一个抽象方法让子类自己去实现

```
public abstract class AbstractHandler {

    //责任链中的下一个对象
    private AbstractHandler nextHandler;

    public void setNextHandler(AbstractHandler nextHandler){
        this.nextHandler = nextHandler;
    }

    public AbstractHandler getNextHandler() {
        return nextHandler;
    }

    // 需要子类实现的虚方法
    abstract void doFilter(Request filterRequest, Response response);

    /**
     * 先执行自身的业务逻辑，之后执行下一个对象的业务逻辑...
     */
    public void filter(Request request, Response response) {
        doFilter(request, response);
        if (getNextHandler() != null) {
            getNextHandler().filter(request, response);
        }
    }

}

```

2. 责任链中的节点继承上一步的抽象类，并实现各自的业务逻辑

```
/**
 * 参数校验对象
 **/
@Component
@Order(1) //顺序排第1，最先校验
public class CheckParamFilterObject extends AbstractHandler {

    @Override
    public void doFilter(Request request, Response response) {
        System.out.println("非空参数检查");
    }
}

/**
 *  安全校验对象
 */
@Component
@Order(2) //校验顺序排第2
public class CheckSecurityFilterObject extends AbstractHandler {

    @Override
    public void doFilter(Request request, Response response) {
        //invoke Security check
        System.out.println("安全调用校验");
    }
}
/**
 *  黑名单校验对象
 */
@Component
@Order(3) //校验顺序排第3
public class CheckBlackFilterObject extends AbstractHandler {

    @Override
    public void doFilter(Request request, Response response) {
        //invoke black list check
        System.out.println("校验黑名单");
    }
}

/**
 *  规则拦截对象
 */
@Component
@Order(4) //校验顺序排第4
public class CheckRuleFilterObject extends AbstractHandler {

    @Override
    public void doFilter(Request request, Response response) {
        //check rule
        System.out.println("check rule");
    }
}
```

3. 提供一个工具类，把责任链节点对象串起来，并提供调用入口

```
@Component("ChainPatternDemo")
public class ChainPatternDemo {

    private AbstractHandler abstractHandler;

    public AbstractHandler getAbstractHandler() {
        return abstractHandler;
    }

    public void setAbstractHandler(AbstractHandler abstractHandler) {
        this.abstractHandler = abstractHandler;
    }

    // 自动注入各个责任链的对象
    @Autowired
    private List<AbstractHandler> abstractHandleList;

    //spring注入后自动执行，责任链的对象连接起来
    @PostConstruct
    public void initializeChainFilter(){

        for(int i = 0;i<abstractHandleList.size();i++){
            if(i == 0){
                abstractHandler = abstractHandleList.get(0);
            }else{
                AbstractHandler currentHander = abstractHandleList.get(i - 1);
                AbstractHandler nextHander = abstractHandleList.get(i);
                currentHander.setNextHandler(nextHander);
            }
        }
    }

    // 直接调用这个方法使用
    public Response exec(Request request, Response response) {
        abstractHandler.filter(request, response);
        return response;
    }

}
```

## 使用

1. 直接在业务代码中调用ChainPatternDemo中的exec()方法。
2. 如果需要修改某个责任节点，只需要修改这个责任节点的doFilter()方法；
3. 如果需要新增一个责任节点，只需要新建一个类继承AbstractHandler类，并实现虚方法doFilter()；


<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />


