---
"title": "策略模式"
category:
  - "design-pattern"
tag:
  - "strategy"
---

## 业务场景

假设有一个业务场景是，根据不同的文件类型进行不同的解析，则伪代码就会像这样：

```
if(type=="A"){
	//按照A格式解析
}else if(type=="B"){
	//按B格式解析
}else{
	//按照默认格式解析
}
```

这样实现的缺点：

1. 不符合开闭原则（多扩展开放，对修改关闭）。因为修改或增加一个文件类型的解析，都需要修改原来的代码；
2. 不符合单一职责原则。

理想的效果是『给程序传入策略的名称以及所需要的参数，让程序自动找到对应的策略类，并自动执行具体策略』。

## 策略模式的实现


1. 定义策略接口，接口中只定义两个方法，一个是获得具体的策略实现类，一个是公共的业务逻辑方法

```
public interface IFileStrategy {
    
    //属于哪种文件解析类型
    FileTypeResolveEnum gainFileType();
    
    //封装的公用算法（具体的解析方法）
    void resolve(Object objectparam);
}

```

2. 具体策略实现策略接口，并分别实现接口中的两个方法

针对A类型文件的处理：

```
@Component
public class AFileResolve implements IFileStrategy {
    
    @Override
    public FileTypeResolveEnum gainFileType() {
        return FileTypeResolveEnum.File_A_RESOLVE;
    }

    @Override
    public void resolve(Object objectparam) {
      logger.info("A 类型解析文件，参数：{}",objectparam);
      //A类型解析具体逻辑
    }
}

```

针对B类型文件的处理：

```
@Component
public class BFileResolve implements IFileStrategy {
   
    @Override
    public FileTypeResolveEnum gainFileType() {
        return FileTypeResolveEnum.File_B_RESOLVE;
    }


    @Override
    public void resolve(Object objectparam) {
      logger.info("B 类型解析文件，参数：{}",objectparam);
      //B类型解析具体逻辑
    }
}

```

默认文件类型的处理：

```
@Component
public class DefaultFileResolve implements IFileStrategy {

    @Override
    public FileTypeResolveEnum gainFileType() {
        return FileTypeResolveEnum.File_DEFAULT_RESOLVE;
    }

    @Override
    public void resolve(Object objectparam) {
      logger.info("默认类型解析文件，参数：{}",objectparam);
      //默认类型解析具体逻辑
    }
}
```

3. 借助Spring容器，把具体的策略实现类和策略名称放到Map中，并对外提供一个方法：根据传入的策略名称自动执行具体策略

```
@Component
public class StrategyUseService implements ApplicationContextAware{

  
    private Map<FileTypeResolveEnum, IFileStrategy> iFileStrategyMap = new ConcurrentHashMap<>();

    //把不同策略放到map
    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        Map<String, IFileStrategy> tmepMap = applicationContext.getBeansOfType(IFileStrategy.class);
        tmepMap.values().forEach(strategyService -> iFileStrategyMap.put(strategyService.gainFileType(), strategyService));
    }

    // 对外提供方法
    public void resolveFile(FileTypeResolveEnum fileTypeResolveEnum, Object objectParam) {
        IFileStrategy iFileStrategy = iFileStrategyMap.get(fileTypeResolveEnum);
        if (iFileStrategy != null) {
            iFileStrategy.resolve(objectParam);
        }
    }
}
```

## 使用

```
@RestController
public class TestController{

    @Autowired
    private StrategyUseService strategyUseService;

    @GetMapping("/resolveFile")
    public void resolveFile(FileTypeResolveEnum fileTypeResolveEnum, Object objectParam){
        strategyUseService.resolveFile(fileTypeResolveEnum, objectParam);
    }

}
```

## 其他 

1. 如果需要修改类型为A的解析逻辑，只需要修改 AFileResolve ，并不需要修改调用过程；
2. 如果要增加一个类型为C的解析逻辑，只需要添加一个类来实现 IFileStrategy ，也不需要修改调用过程；


<img style="border:1px red solid; display:block; margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="微信公众号" />


