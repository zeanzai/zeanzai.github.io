---
"title": "mysql"
category:
  - "docker"
tag:
  - "centos"
---

```
// 拉取镜像
[root@home docker]# docker pull mysql:5.7

5.7: Pulling from library/mysql
72a69066d2fe: Pull complete 
93619dbc5b36: Pull complete 
99da31dd6142: Pull complete 
626033c43d70: Pull complete 
37d5d7efb64e: Pull complete 
ac563158d721: Pull complete 
d2ba16033dad: Pull complete 
0ceb82207cd7: Pull complete 
37f2405cae96: Pull complete 
e2482e017e53: Pull complete 
70deed891d42: Pull complete 
Digest: sha256:f2ad209efe9c67104167fc609cca6973c8422939491c9345270175a300419f94
Status: Downloaded newer image for mysql:5.7
docker.io/library/mysql:5.7

// 安装 
[root@home docker]# docker run -p 3306:3306 --name mysql \
> -v /mnt/doc/docker/mysql/log:/var/log/mysql \
> -v /mnt/doc/docker/mysql/data:/var/lib/mysql \
> -v /mnt/doc/docker/mysql/conf:/etc/mysql \
> -e MYSQL_ROOT_PASSWORD=root \
> -d mysql:5.7
0a4457b1eac5dbfdba0f483db94aeb4fd42652d9f893094cf34daa0f4877116d
[root@home docker]# docker ps -a
CONTAINER ID   IMAGE       COMMAND                   CREATED         STATUS         PORTS                                                  NAMES
0a4457b1eac5   mysql:5.7   "docker-entrypoint.s…"   6 seconds ago   Up 5 seconds   0.0.0.0:3306->3306/tcp, :::3306->3306/tcp, 33060/tcp   mysql
[root@home docker]# cd /mnt/doc/docker/
[root@home mysql]# cd conf/
[root@home conf]# ll
总用量 0

// 创建配置文件
[root@home conf]# vi my.cnf

[client]
default-character-set=utf8mb4
[mysql]
default-character-set=utf8mb4
[mysqld]
init_connect='SET collation_connection = utf8mb4_unicode_ci'
init_connect='SET NAMES utf8mb4'
character-set-server=utf8mb4
collation-server=utf8mb4_unicode_ci
skip-character-set-client-handshake
skip-name-resolve

// 重启mysql
[root@home conf]# docker restart mysql
mysql
[root@home conf]# docker ps
CONTAINER ID   IMAGE       COMMAND                   CREATED         STATUS          PORTS                                                  NAMES
0a4457b1eac5   mysql:5.7   "docker-entrypoint.s…"   6 minutes ago   Up 10 seconds   0.0.0.0:3306->3306/tcp, :::3306->3306/tcp, 33060/tcp   mysql

// 设置开机自启
[root@home conf]# docker update mysql --restart=always
mysql

// 解决时间问题
[root@home conf]# docker exec -it mysql bash
root@0a4457b1eac5:/# date
Sat Oct  7 12:58:45 UTC 2023
root@0a4457b1eac5:/# ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
root@0a4457b1eac5:/# date
Sat Oct  7 20:58:57 CST 2023
root@0a4457b1eac5:/# exit
exit

// 最后重启
[root@home conf]# docker restart mysql
mysql
```

---

<br /><br /><br />
<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />


