---
"title": "基于Centos7安装Docker"
category:
  - "docker"
tag:
  - "install"
---


## 运行环境说明

我们使用一个台式机作为我们的服务器，并且开发环境的一些组件是部署在docker上的。

## Centos使用

### CentOS常用命令

```
// 复制文件夹到服务器上
scp -r local_folder remote_username@remote_ip:remote_folder

// 启动server

// 开放端口
firewall-cmd --zone=public --add-port=8848/tcp --permanent
firewall-cmd --reload

// 删除当前目录及子文件夹下面所有的target文件夹
find ./ -name -type d "target" -exec rm -rf '{}' +

// 删除当前目录及子文件夹内所有的以.iml结尾的文件
find ./ -name '*.iml' -exec rm -rf '{}' +

// 开启自启动服务
systemctl enable nacos.service

// 重新加载自启动服务
systemctl daemon-reload

// 查看是否假如自启动服务
systemctl is-enabled nacos.service

// 查看系统磁盘空间 
df -h

// 查看某一个文件夹下面所有文件的大小
du --max-depth=1 -h /mydata/nexus/data/log/


```

### centos安装Docker

```
[root@home ~]# uname -a
Linux home.centos 3.10.0-1160.76.1.el7.x86_64 #1 SMP Wed Aug 10 16:21:17 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux
```

Docker的安装过程：

```shell
// 安装yum源的工具包
yum install -y yum-utils

// 配置docker的安装源
yum-config-manager \
--add-repo \
https://download.docker.com/linux/centos/docker-ce.repo

// 安装docker
yum install docker-ce docker-ce-cli containerd.io docker-compose-plugin

// 设置开机自启
systemctl enable docker


mkdir -p /etc/docker
tee /etc/docker/daemon.json <<-'EOF'
{
"registry-mirrors": ["https://hpifphoh.mirror.aliyuncs.com"]
}
EOF
systemctl daemon-reload
systemctl restart docker
```

### 安装Nacos

```
// 下载


// 解压到安装目录
tar zxvf nacos-server-1.2.1.tar.gz -C /usr/setup/
// 启动
./startup.sh -m standalone

// 开放端口
firewall-cmd --zone=public --add-port=8848/tcp --permanent
firewall-cmd --reload


// 开机自启动
// 在 /usr/lib/systemd/system 目录下创建 nacos.service ，并添加以下内容

[Unit]
Description=nacos
After=network.target

[Service]
Type=forking
ExecStart=/usr/setup/nacos/bin/startup.sh -m standalone
ExecReload=/usr/setup/nacos/bin/shutdown.sh
ExecStop=/usr/setup/nacos/bin/shutdown.sh
PrivateTmp=true

[Install]
WantedBy=multi-user.target

// 开启自启动服务
systemctl enable nacos.service

// 重新加载自启动服务
systemctl daemon-reload

// 查看是否假如自启动服务
systemctl is-enabled nacos.service
```

## 基于Docker安装开发环境

### Docker常用命令

```
docker pull

docker images
docker ps -a
docker stop redis 
docker rm 88f # 删除容器
docker rmi 991 # 删除镜像
docker update mysql --restart=always # 自动重启

docker run -p 3306:3306 --name mysql \
-v /mydata/mysql/log:/var/log/mysql \
-v /mydata/mysql/data:/var/lib/mysql \
-v /mydata/mysql/conf:/etc/mysql \
-e MYSQL_ROOT_PASSWORD=root \
-d mysql:5.7



docker logs d2d


# 重新安装nginx，先删除容器，再重新执行

docker exec -it 4992272fdf45 /bin/bash  # 进入容器内部


docker cp host_path containerID:container_path # 从主机复制到容器

```

### 安装MySQL

```
docker run -p 3306:3306 --name mysql \
-v /mydata/mysql/log:/var/log/mysql \
-v /mydata/mysql/data:/var/lib/mysql \
-v /mydata/mysql/conf:/etc/mysql \
-e MYSQL_ROOT_PASSWORD=root \
-d mysql:5.7


[client]
default-character-set=utf8
[mysql]
default-character-set=utf8
[mysqld]
init_connect='SET collation_connection = utf8_unicode_ci'
init_connect='SET NAMES utf8'
character-set-server=utf8
collation-server=utf8_unicode_ci
skip-character-set-client-handshake
skip-name-resolve

docker update mysql --restart=always


```

#### 解决时间差8小时的问题

1. 在客户端输入 select now(); 发现查了8小时
2. 进入 mysql 服务端： docker exec -it mysql bash
3. 查看mysql服务端当前时间： date ，发现差了8小时
4. 直接修改时区为上海： ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime ，再次输入 date，发现时间已经正常
5. 重启mysql服务端

### 安装Redis

```
docker run -p 6379:6379 --name redis \
-v /mydata/redis/data:/data \
-v /mydata/redis/conf/redis.conf:/etc/redis/redis.conf \
-d redis redis-server /etc/redis/redis.conf
```

### 安装Nexus

```
docker pull sonatype/nexus3

mkdir -p /mydata/nexus/data

docker run -d --name nexus -p 8081:8081 \
--restart always \
-v /mydata/nexus/data:/nexus-data sonatype/nexus3

admin密码
cat /mydata/nexus/data/admin.password 之后修改密码
```

### 安装RabbitMQ

```

docker search rabbitmq

docker pull rabbitmq

mkdir -p /mydata/rabbimq/

docker run -p 5672:5672 -p 15672:15672 --name rabbitmq \
-v /mydata/rabbitmq:/var/lib/rabbitmq \
-v /mydata/rabbitmq/logs:/var/log/rabbitmq \
-e RABBITMQ_DEFAULT_USER=admin \
-e RABBITMQ_DEFAULT_PASS=admin \
-e RABBITMQ_LOG_BASE=/var/log/rabbitmq \
-d rabbitmq

docker exec -it rabbitmq /bin/bash

rabbitmq-plugins enable rabbitmq_management

## 开机自启动
docker update rabbitmq --restart=always

```
