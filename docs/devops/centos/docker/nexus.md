---
"title": "nexus"
category:
  - "docker"
tag:
  - "centos"
---

```
// 拉取 nexus3 镜像
docker pull sonatype/nexus3

// 启动
docker run -d --name nexus -p 8081:8081 \
--restart always \
-v /mnt/doc/docker/nexus/data:/nexus-data sonatype/nexus3

// 获取 admin 密码
cat /mnt/doc/docker/nexus/data/admin.password 

// 之后在客户端修改密码
admin / admin 
```

---

<br /><br /><br />
<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />


