---
"title": "常用命令"
category:
  - "Centos"
tag:
  - "centos"
---

```
//---------- 服务管理
// 服务状态|关闭服务｜启动服务｜重启服务
systemctl status|stop|start|restart xxx 
// 重新加载服务
systemctl daemon-reload 
// 是否已经加入自启动
systemctl is-enabled xxx

//---------- 防火墙管理
// 防火墙
firewall-cmd -h
firewall-cmd --zone=public --list-ports

// --------- 端口监听状况
netstat -tunlp

// --------- 磁盘管理
fdisk -l
lsblk 

// --------- 复制到远程服务器
scp -r jdk-8u144-linux-x64.tar.gz root@192.168.1.150:/mnt/doc/package 

// --------- docker
docker logs -f -t --tail 100   529a4d9afd8e

```



---
<br /><br /><br />
<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />


