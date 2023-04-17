---
"title": "如何设计一个安全可靠的API接口？"
category:
  - "springcloud-alibaba"
tag:
  - "设计一个安全可靠的api"
---




1. 接口调用方(客户端)向接口提供方(服务器)申请接口调用账号，申请成功后，接口提供方会给接口调用方一个appId和一个key参数。

2. 客户端携带参数appId、timestamp、sign去调用服务器端的API token，其中sign=加密(appId + timestamp + key)

3. 客户端拿着api_token去访问不需要登录就能访问的接口

4. 当访问用户需要登录的接口时，客户端跳转到登录页面，通过用户名和密码调用登录接口，登录接口会返回一个usertoken, 客户端拿着usertoken 去访问需要登录才能访问的接口
但是登录接口也需要apiToken，这是因为要确定客户端是否已经申请了appId和key的参数。


类比如微信公众号，我们在填写好微信公众号的注册信息之后，如果要使用高级特性，那么就需要进行认证，认证之后，微信公众号才会给我们分配一个appid和appkey，然后我们每次调用一些接口时，我们就可以通过这两个参数
获取apitoken。

分为不同的应用场景：

1. 假如客户端需要调用一些不需要登录就可以访问的接口，那么就需要先调用一下获取appToken的接口，然后拿着返回的appToken来调用这些接口即可；
2. 如果客户端想要调用一些需要登录的接口，那么也必须要先调用一下获取appToken的接口，然后拿着用户名和密码来获取accessToken，最后才是拿着accessToken来调用其他接口；
   【登录的接口就属于不需要登录就可以访问的接口】，因此需要先调用一下获取appToken的接口；

## 参考链接

[面试四连问：API 接口如何设计？安全如何保证？防重如何实现？签名如何实现？...](https://blog.csdn.net/zhipengfang/article/details/117455598)








---

<img style="border:1px red solid; display:block; margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="微信公众号" />



