---
"title": "SCG性能调优"
category:
  - "springcloud-alibaba"
tag:
  - "网关性能调优"
---

## SCG 性能优化


1. [SpringCloud 网关组件 Gateway 原理深度解析](https://zhuanlan.zhihu.com/p/614977890)
2. [spring-cloud gateway 网关调优](https://cloud.tencent.com/developer/article/1926643)
3. [SpringCloud Gateway 路由转发性能优化](https://blog.csdn.net/dongjia9/article/details/129624365)
   1. 通过文章中的源码链接，找到其他文章，确认性能测试工具为 JMH 。猜测 测试结果章节中的图应该是在Excel中生成的；
   2. 可以下载文章中的这两个仓库进行研究；主要是性能优化及动态路由；
   3. [几种性能测试工具的总结](https://insights.thoughtworks.cn/performance-testing-tools/)
   4. [SpringCloud Gateway 路由数量对性能的影响研究](https://xie.infoq.cn/article/d39fde1ce527ec2c3c6750c4c)
   5. [SpringCloud Gateway 路由转发性能优化](https://xie.infoq.cn/article/bebacc42bad0712638ba3231e)
   6. [SpringCloud Gateway 动态路由](https://xie.infoq.cn/article/0ae4f61ce6c67a651d94678a8)
4. [CPU性能优化干货总结](https://heapdump.cn/article/4436607)
5. [大厂里一直讲的p99,p95到底是什么？](https://juejin.cn/post/7057415444109459487)
   1. 可以研究一下美团的cat监控平台
6. [Spring Cloud Gateway之踩坑日记](https://blog.csdn.net/manzhizhen/article/details/115386684)
7. [Spring Cloud Gateway压测(wrk、k8s、nginx）](https://blog.csdn.net/lizz861109/article/details/103972775)




- scg 原理 
- 编写简单使用样例，之后进行压测
- 进行优化，之后再次进行压测
- scg路由规则动态可配置化



<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />


