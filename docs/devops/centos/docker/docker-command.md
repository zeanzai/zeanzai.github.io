---
"title": "docker常用命令"
category:
  - "docker"
tag:
  - "docker"
---


```

# ---------- 镜像管理
docker pull
docker images
docker rmi 991 # 删除镜像


# ---------- 容器管理
docker ps -a
docker stop redis 
docker rm 88f # 删除容器
docker update mysql --restart=always # 自动重启

# ---------- 安装示例
docker run -p 3306:3306 --name mysql \
-v /mydata/mysql/log:/var/log/mysql \
-v /mydata/mysql/data:/var/lib/mysql \
-v /mydata/mysql/conf:/etc/mysql \
-e MYSQL_ROOT_PASSWORD=root \
-d mysql:5.7


# ---------- 日志
docker logs d2d


# 重新安装nginx，先删除容器，再重新执行
docker exec -it 4992272fdf45 /bin/bash  # 进入容器内部
docker cp host_path containerID:container_path # 从主机复制到容器

```

---
<br /><br /><br />
<img style="border:1px red solid; display:block; margin:0 auto;" :src="withBase('/qrcode.jpg')" alt="微信公众号" />
