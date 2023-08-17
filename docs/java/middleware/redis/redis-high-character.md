---
"title": "高级特性"
category:
  - "Redis"
tag:
  - "Redis"
---



特殊特性：事务、管道技术、迭代器

## 管道技术-Pipeline

所谓管道技术，就是把之前的一次一个命令的执行方式，变成一次执行多个命令的方式。它本质上是客户端提供的特性，目的是提高客户端的利用效率。

但在使用时需要注意的是：
1. 发送的命令数量不会被限制，但是输入缓存区也就是命令的最大存储体积为1GB，当发送的命令超过此限制时，命令不会被执行，并且会被 Redis 服务器端断开此链接；
2. 如果管道的数据过多可能会导致客户端的等待时间过长，导致网络阻塞；
3. 部分客户端自己本身也有缓存区大小的设置，如果管道命令没有没执行或者是执行不完整，可以排查此情况或较少管道内的命令重新尝试执行。

## 事务 

## 迭代器



---
<br /><br /><br />
<img style="border:1px red solid; display:block; margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="微信公众号" />


