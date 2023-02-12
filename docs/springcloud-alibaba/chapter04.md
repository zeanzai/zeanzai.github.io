---
title: "分布式服务网关之Gateway"
category:
  - "springcloud-alibaba"
tag:
  - "分布式系统"
  - "网关"
---

## 背景知识

我们知道，假如一个组织内，有3个微服务，并且微服务与微服务之间可以相互调用，那么调用关系就有8种，此时我们需要在每一个微服务中配置好另外其他所有的微服务的信息，假设其中某一个服务的信息需要修改呢？再假设每一个服务都需要对其他服务调用接口时进行身份认证和权限校验呢？事实上，人们正是因为在实际的开发过程中遇到了上述的那些问题，所以才开发出了网关组件。

## 网关的必要性

![部署视图](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221122120811.png)

上面是一个互联网应用典型的部署视图，从上面我们可以看到，一般情况下，我们会把应用部署划分成几个网络区域：

- `互联网`： 所有用户和应用都可以访问的网络区域
- `外联网关`： 是同属于一个企业内所有组织的所有应用的出口。
- `内联网关`： 是同属于一个组织内的所有应用对外的出口。
- `HOST ZONE`： 应用服务区域，也就是我们常说的后端服务所部署的区域。在组织架构中，它属于单个组织架构，在应用中，它属于同一个应用。

需要注意的是，外联网关、內联网关和HOST ZONE区域，是层层嵌套的，内联网关包含HOST ZONE，外联网关又包含内联网关。例如，在一个企业内有成百上千的微服务应用，每个业务团队负责不同的微服务应用，那么内联网关的作用就是用来隔`离每个业务团队的不同微服务之间的网络通信`；而外联网关的作用就是把`企业内的所有业务团队所负责的微服务`与`企业外部的用户或者业务相关的其他企业的应用`进行隔离.

微服务架构中，网关服务是独立存在的，它也称为逻辑网关，与SLB/Nginx/OpenResty的物理网关在部署形式上是不同的，网关服务的存在形式是一个独立的微服务，一般是需要进行代码的定制化开发的，而SLB/Nginx/OpenResty的物理网关的存在形式可能是n台独立的服务器（一般情况下是具有高性能的网络通信能力的服务器），也有可能是具有高性能网关硬件的虚拟服务器。

内联网关除了具备最基本的网络隔离功能外，一般还具备：

1. 身份认证、鉴权：为下游服务发送来的请求提供身份认证及相关鉴权功能。
2. 限流、熔断、降级、流量监控：保护上游提供响应的服务及监控上游各个微服务的健康状况。
3. 协议转换：由于上游各个微服务所使用的通信协议有可能不同，因此网关还承担着协议转换的功能。
4. ......


## 技术选型

物理网关我们暂且不表，后端服务中常见的可以作为网关服务的组件，主要根据所使用的编程语言不同进行区分。常见的有Go的etcd，Java中的Zuul、Gateway等。这里我们不再详细描述技术选型，有兴趣的可以查阅《[你真的会做技术选型吗？](https://mp.weixin.qq.com/s/AUHY3nKZqDbAhkfebOPWCg)》。

## SpringCloud-Gateway实战

### 版本关系

由于我们已经规定了SpringCloud及SpringCloud-Alibaba的版本，因此我们直接在pom文件中引入Gateway的坐标，不需要带版本号，SpringCloud及SpringCloud-Alibaba会自动帮我们选择版本号。

```
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-gateway</artifactId>
</dependency>
```


### 相关概念

- 路由： 是由ID、目标URI、断言集合和过滤器集合构成，表示如果实际请求的路由满足断言集合的条件，就执行过滤器集合规定的相关动作；
- 断言： 就是对应的路由判断条件；
- 过滤器： 满足断言后执行的动作；

需要注意的是：断言和过滤器都是一个集合，由二者组成的路由也是一个集合。

## 框架搭建

> 微信扫码关注“天晴小猪”（ID： it-come-true），回复“springcloud”，获取本章节实战源码。

搭建网关工程很简单，使用spring initial 工具生成工程代码后，引入gateway依赖，再添加配置文件和启动类即可，引入的依赖如下：

```
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-gateway</artifactId>
</dependency>
```

## 实践过程

下面根据不同的使用场景来分别进行实践操作。

### 请求转发

假如有一个业务场景，要求所有带了 "green" 参数的路由都转发到百度网站。实践过程如下：

- 配置文件中添加路由

```yml
spring:
  cloud:
    gateway:
      routes:
        - id: query_router # 路由规则的名称，可以自定义
          predicates: # 断言
            - Query=green # 参数
          uri: https://baidu.com # 执行跳转的URI
```

- 测试 

浏览器中输入： http://localhost:15000?green ，点击回车后，浏览器会跳转到百度网站，

![路由转发](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221119172133.png)

### 重写路由

假设有一个业务场景，要求所有 `/test` 下的请求，都转发到provider服务的对应请求，如网关的 `/test/hello `就需要转发到`provider`服务的 `/providerbygateway/hello`。由于需要转发给对应的provider微服务，因此还需要把网关服务注册到注册中心，同样的provider服务也需要注册到注册中心，实践过程如下：

- 网关服务添加nacos注册中心的依赖

```xml
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
</dependency>
```


- 配置文件中配置nacos注册中心的地址

```yml
spring:
  application:
    name: gateway-demo
  cloud:
    nacos:
      discovery:
        server-addr: 192.168.1.150:8848
        namespace: deeaeca6-bed9-4fb1-b5b7-9c79278561ca
```

- 启动类上添加注册发现的开关注解

```java
@EnableDiscoveryClient  // 添加服务注册与发现的注解
@SpringBootApplication
public class GatewayDemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(GatewayDemoApplication.class, args);
    }

}
```

- 在网关的配置文件添加路由规则

```yml
spring:
  cloud:
    gateway:
      routes:
        # provider
        - id: provider_router
          predicates:
            - Path=/test/**
          filters:
            - RewritePath=/test/(?<segment>.*),/providerbygateway/$\{segment} 
          uri: lb://nacos-provider
```

根据官方文档， filters 的配置项中重写路径 RewritePath 的的值有两部分，第一部分 /test/ 后面的 `(?<segment>.*)`  表示任意一段请求路径，第二部分后面的 `$\{segment}` 表示与第一部分一样的一段请求路径。 uri 配置项中的 lb 表示转发到的服务使用负载均衡。

- 在nacos-provider中添加转发的目的接口

```java
@RestController
@RequestMapping("providerbygateway")
public class GatewayController {

    @GetMapping("/hello")
    public String hello(){
        return "hello, provider!!!";
    }
}
```

- 启动两个服务，进行测试

![请求转发成功](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221119172210.png)

### 其他基础功能

由上面两个实战示例可以看出，网关的开发很简单，只需要在配置文件中配置上路由、断言和过滤器即可，几乎不需要有其他额外的代码。

网关根据断言的不同以及过滤器的不同，通过组合使用来适用不同的应用场景。有兴趣的读者可以阅读[官方文档](https://docs.spring.io/spring-cloud-gateway/docs/2.2.x/reference/html/#gateway-request-predicates-factories)动手实践一下。



### 路由规则可配置化

上述的两种方式都是把路由写到application.yml中，即然我们已经学习过nacos作为配置中心，何不利用起来呢？我们的目标是：让路由规则可配置化，下面我们进行实践操作。

- 在gateway-demo模块的pom文件中添加nacos的配置依赖

```xml
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
</dependency>
```

- 把application.yml文件修改成bootstrap.yml，并配置config项

我们使用nacos的共享配置文件的方式进行配置。

```yml
spring:
  application:
    name: gateway-demo
  cloud:
    nacos:
      config:
        server-addr: 192.168.1.150:8848
        namespace: deeaeca6-bed9-4fb1-b5b7-9c79278561ca
        file-extension: yaml
        shared-configs:

          # 日志
          - dataId: log.yml
            refresh: true
            group: COMMON

          # 路由规则
          - dataId: routerule.yml
            refresh: true
            group: GATEWAY
```

- 在nacos的控制台配置上路由规则

![配置路由规则](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221122100229.png)

- 重新启动，测试运行结果

成功，无异常。

### 集成swagger

在微服务框架中，由于会有很多个微服务，每一个微服务都有自己的一组API，虽然Spring团队为我们提供了每一个微服务自己的API展示组件——swagger，我们在使用时，只需要找到不同服务的ip和端口即可，但是在实际的开发场景中，我们希望网关上游的所有微服务的API能够聚合到一起。这样我们就需要记住网关的服务地址即可。

要想把单个微服务的API文档聚合到一起，最主要的任务是要解决不同微服务的路由地址的转发不一致问题。我们这里使用[Knife4j](https://doc.xiaominfo.com/docs/action/springcloud-gateway)。

> 微信扫码关注“天晴小猪”（ID： it-come-true），回复“springcloud”，获取本章节实战源码。

- 创建gateway-swagger模块

pom.xml引入gateway、alibaba-nacos-discovery、knife4j-spring-boot-starter三个依赖：

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-gateway</artifactId>
</dependency>

<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
</dependency>

<dependency>
    <groupId>com.github.xiaoymin</groupId>
    <artifactId>knife4j-spring-boot-starter</artifactId>
    <version>2.0.4</version>
</dependency>
```

application.yml中主要配置nacos的服务发现地址及网关的路由规则：

```yml
server:
  port: 10800
spring:
  application:
    name: gateway-swagger
  cloud:
    nacos:
      discovery:
        server-addr: 192.168.1.150:8848
    gateway:
      routes: #配置路由路径
        - id: user-service
          uri: lb://swagger-user
          predicates:
            - Path=/swagger-user/**
          filters:
            - StripPrefix=1
        - id: order-service
          uri: lb://swagger-order
          predicates:
            - Path=/swagger-order/**
          filters:
            - StripPrefix=1
      discovery:
        locator:
          enabled: true #开启从注册中心动态创建路由的功能
          lower-case-service-id: true #使用小写服务名，默认是大写
```

启动类上添加服务注册与发现的注解 `@EnableDiscoveryClient` 。

添加swagger信息的资源配置：

```java
@Slf4j
@Component
@Primary
@AllArgsConstructor
public class SwaggerResourceConfig implements SwaggerResourcesProvider {

    private final RouteLocator routeLocator;
    private final GatewayProperties gatewayProperties;

    @Override
    public List<SwaggerResource> get() {
        List<SwaggerResource> resources = new ArrayList<>();
        List<String> routes = new ArrayList<>();
        //获取所有路由的ID
        routeLocator.getRoutes().subscribe(route -> routes.add(route.getId()));
        //过滤出配置文件中定义的路由->过滤出Path Route Predicate->根据路径拼接成api-docs路径->生成SwaggerResource
        gatewayProperties.getRoutes().stream().filter(routeDefinition -> routes.contains(routeDefinition.getId())).forEach(route -> {
            route.getPredicates().stream()
                    .filter(predicateDefinition -> ("Path").equalsIgnoreCase(predicateDefinition.getName()))
                    .forEach(predicateDefinition -> resources.add(swaggerResource(route.getId(),
                            predicateDefinition.getArgs().get(NameUtils.GENERATED_NAME_PREFIX + "0")
                                    .replace("**", "v2/api-docs"))));
        });

        return resources;
    }

    private SwaggerResource swaggerResource(String name, String location) {
        log.info("name:{},location:{}", name, location);
        SwaggerResource swaggerResource = new SwaggerResource();
        swaggerResource.setName(name);
        swaggerResource.setLocation(location);
        swaggerResource.setSwaggerVersion("2.0");
        return swaggerResource;
    }
}
```

最后一步配置服务资源的转发配置：

```java
/**
 * 服务转发的请求处理
 */
@RestController
public class SwaggerHandler {

    @Autowired(required = false)
    private SecurityConfiguration securityConfiguration;

    @Autowired(required = false)
    private UiConfiguration uiConfiguration;

    private final SwaggerResourcesProvider swaggerResources;

    @Autowired
    public SwaggerHandler(SwaggerResourcesProvider swaggerResources) {
        this.swaggerResources = swaggerResources;
    }
    
    /**
     * Swagger资源配置，微服务中这各个服务的api-docs信息
     */
    @GetMapping("/swagger-resources")
    public Mono<ResponseEntity> swaggerResources() {
        return Mono.just((new ResponseEntity<>(swaggerResources.get(), HttpStatus.OK)));
    }
    
    /**
     * Swagger安全配置，支持oauth和apiKey设置
     */
    @GetMapping("/swagger-resources/configuration/security")
    public Mono<ResponseEntity<SecurityConfiguration>> securityConfiguration() {
        return Mono.just(new ResponseEntity<>(
                Optional.ofNullable(securityConfiguration).orElse(SecurityConfigurationBuilder.builder().build()), HttpStatus.OK));
    }

    /**
     * Swagger UI配置
     */
    @GetMapping("/swagger-resources/configuration/ui")
    public Mono<ResponseEntity<UiConfiguration>> uiConfiguration() {
        return Mono.just(new ResponseEntity<>(
                Optional.ofNullable(uiConfiguration).orElse(UiConfigurationBuilder.builder().build()), HttpStatus.OK));
    }
}
```

- 创建swagger-user模块

pom文件中引入knife4j的依赖：

```yml
<dependency>
    <groupId>com.github.xiaoymin</groupId>
    <artifactId>knife4j-micro-spring-boot-starter</artifactId>
    <version>2.0.4</version>
</dependency>
```

配置文件中把服务注册到nacos上：

```yml
server:
  port: 10600

spring:
  application:
    name: swagger-user
  cloud:
    nacos:
      discovery:
        server-addr: 192.168.1.150:8848

management:
  endpoints:
    web:
      exposure:
        include: "*"
```

添加swagger的配置：

```java
@Configuration
@EnableSwagger2
@EnableKnife4j
public class Swagger2Config {
    @Bean
    public Docket createRestApi(){
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.tianqingxiaozhu.swaggeruser.controller"))
                .paths(PathSelectors.any())
                .build();
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("swagger-user")
                .description("用户服务API文档")
                .contact("tianqingxiaozhu")
                .version("1.0")
                .build();
    }
}
```

最后编写几个测试类即可。

- 创建swagger-order模块

swagger-order模块的搭建步骤与swagger-user模块的搭建步骤一致。不再赘述。


- 测试

分别启动swagger-user、swagger-order和gateway-swagger模块，浏览器中输入： http://localhost:10800/doc.html ，然后在服务选择框中选择想要展示的服务接口即可。

![集成swagger成功](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221122130047.png)

### 其他

由于篇幅原因，网关还有很多在实际生产环境下的应用场景没有实践，这里我们先罗列一下，后续有时间再进行分享。

1. https的使用： 一般情况下服务都是放到内网里面的，相互之间的调用使用http即可完成，但是有些api接口需要暴露到外网，而暴露给外网，https更为安全，此时又想所有的服务通过网关进行暴露，此时就涉及到https到http的转化。
2. 在实际生产环境下，实际的实践过程是通过把路由规则配置到配置中心来完成每一步骤的调用的。在springcloud-alibaba的框架中，我们可以把路由规则配置到nacos中，使用样例如上文所示。
3. 网关需要扛住几乎所有应该到达后端微服务的流量，那么如何保证网关上游的微服务的安全呢？此时我们就需要Sentinel的帮助了。
4. 灰度发布有很多种实践方案，其中有一种是基于网关的实现方案。
5. 网关+Oauth2.0进行权限认证
6. 网关的CROS方案。

后续有时间会统一进行分享。

## 总结

1. 微服务的发展过程中势必会遇到很多问题，某种意义上讲，网关的出现最早是为了解决不同组织内巨量微服务相互隔离的问题，但在后续的发展过程中，网关又逐渐有了一些新的特性。
2. 实践了网关的基本功能——服务转发、重写路由、路由规则可配置化，以及网关的一些生产实践——集成swagger的使用等。
3. 列举了一些生产的应用场景，后续有时间再进行分享。


<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />

