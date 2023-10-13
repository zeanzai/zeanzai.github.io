---
"title": "redis"
category:
  - "docker"
tag:
  - "centos"
---

```

[root@home blobs]# docker pull redis

[root@home blobs]# docker run -p 6379:6379 --name redis \
> -v /mnt/doc/docker/redis/data:/data \
> -v /mnt/doc/docker/redis/conf/redis.conf:/etc/redis/redis.conf \
> -d redis redis-server /etc/redis/redis.conf
9de5bf8fe6ddc8b4cb8df61684ddd1613ff3944e5664d1cdb87c9192465eb42e

```

<br /><br /><br />
<img style="border:1px red solid; display:block; margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="微信公众号" />


