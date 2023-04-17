---
"title": "统一消息体并国际化+可配置全局异常"
category:
  - "springcloud-alibaba"
tag:
  - "实战"
---



## 实战

参考 [Nacos实现SpringBoot国际化的增强](https://blog.csdn.net/qq_15898739/article/details/104680114) 和 [Java统一异常处理(配置文件集中化定义)](https://mp.weixin.qq.com/s/XE4R2wOj08qNivo8Ms5ZRQ)。





// TODO: 
## Nacos国际化全局异常


工业化软件过程中，在统一异常处理时，我们想要的效果是：

1. 异常信息应该是国际化的。也就是提示语会根据用户所在位置的语言环境自动显示提示信息或异常信息。
2. 异常信息应该是可配置化的。
3. 异常信息应该支持占位符。




![20230407205325](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230407205325.png)

![20230407205350](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230407205350.png)

![20230407205417](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230407205417.png)



参考 [Nacos实现SpringBoot国际化的增强](https://blog.csdn.net/qq_15898739/article/details/104680114) 和 [Java统一异常处理(配置文件集中化定义)](https://mp.weixin.qq.com/s/XE4R2wOj08qNivo8Ms5ZRQ)。 额外阅读这里[三种手段：通过Apollo和nacos的能力进行国际化动态配置实现热更新](https://developer.aliyun.com/article/1180037?accounttraceid=2c2ceb1b01c74df4a8cdb8cfce05150eheyi#slide-4)



---

<img style="border:1px red solid; display:block; margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="微信公众号" />



