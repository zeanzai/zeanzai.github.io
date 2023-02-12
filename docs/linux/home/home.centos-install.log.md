---
title: "服务器安装软件日志"
category:
  - "linux"
tag:
  - "home"
---


## 1. 服务器基本信息

- ~~网络环境~~
  - ~~家中客厅中已经有路由器，但是又不想扯网线到主机上，此时有两种方式，一种是在房间里面添加一个路由器，然后用路由器b桥接客厅里面的路由器a，然后直接使用短的网线连接路由器b的lan口即可完成通信；另外一种方式是，给主机添加一个无线网卡；~~
  - ~~这里只考虑第一种方式，因此在进行装机时要先完成网络环境的配置；~~
  - ~~https://service.tp-link.com.cn/detail_article_3631.html~~
- 网络环境
  - 

- 刻录启动盘
  - https://blog.csdn.net/jeikerxiao/article/details/71747375

- 基本信息
  - 使用最小化安装方式
  - 192.168.124.150
  - root / root1003
  - zeanzai / zeanzai.me1003

- 初始化操作
  - 重装系统但是沿用之前的ip，因此登录时报错，使用 ssh-keygen -R {ip} 命令删除该ip的指纹，然后再次登录即可
  - 报： warning: setlocale: LC_CTYPE: cannot change locale (UTF-8): http://www.bubuko.com/infodetail-2953954.html
  - 发现 ping 不同百度网站：使用第一种方式： https://www.cnblogs.com/alusss/p/12631133.html
  - `[optional]` 使用阿里的yum源： https://blog.csdn.net/KingveyLee/article/details/114984534
  - 安装第三方高质量软件库 epel ：
    - 执行 `yum install epel-release` ，并执行 yum clean all 和 yum makecache 和 yum update 命令；
  - 挂载ntfs格式的系统盘：
    - 安装 yum install ntfs-3g
    - 列出所有的磁盘： lsblk -f
    - 执行挂载命令： mount /dev/sdb1 /mnt/data/d ，如果遇到 【mount: 未知的文件系统类型“ntfs”】 这种错误，应该是没有执行安装 ntfs-3g 的命令，或者是 ntfs 依赖的软件没有安装好，因此建议使用yum方式安装 ntfs 格式硬盘的依赖软件；
    - 永久挂载：
      - 创建挂载地址
      - 修改配置文件： /etc/fstab ， 再最后添加两行：
              /dev/sdb1 /mnt/data/d           ntfs defaults 0 0
              /dev/sdc2 /mnt/data/e           ntfs defaults 0 0



- 特别注意
  - 最小化安装的centos系统中并不能支持 ntfs 格式的文件，因此在进行挂载 ntfs 格式的磁盘时，要先安装支持软件 ntfs-3g ，并强烈建议使用yum的方式进行安装【通过源代码的方式进行安装会缺少依赖导致mount不成功】；但是 ntfs-3g 并不属于官方维护的依赖库，因此在安装之前又需要安装高质量的第三方软件库epel。
  - 如果完成永久挂载动作后，开机启动页面出现了【welcome to emergency mode!（紧急模式）】这种提示语，极有可能是 没有安装 ntfs 依赖。



- 参考
  - https://www.cnblogs.com/jiashenren/p/4176941.html
  - https://support.huaweicloud.com/trouble-ecs/ecs_trouble_0310.html

## 2. 软件安装

- ~~gitlab-ce-14.0.0-ce.0.el7.x86_64.rpm(已卸载)~~
  - 8888
  - zeanzai
  - zeanzai.me1003
  - zeanzai.me@gmail.com

- mysql-5.7.34（自启动）
  - 端口： 3306
  - 用户名及密码： admin/admin@2019!@#
  - 启动与关闭：
    - 启动： 已经实现了自启动方式
    - 关闭： systemctl stop mysqld
  - 安装过程就是md文件中的，只配置了admin的远程登录权限和test的部分权限

<!-- - apollo-1.8.0（未自启动）
  - portal的端口： 8070
  - config依赖的eureka端口： 8080
  - 用户名和密码： apollo / admin
  - 启动与关闭：
    - 启动： 进入安装目录后，执行 startall.sh 脚本
    - 关闭： 进入安装目录后，执行 shutdownall.sh 脚本
  - 安装过程：
    - https://blog.csdn.net/SIMBA1949/article/details/107561778
  - 问题解决：
    - 遇到添加项目之后报“请联系管理员”的信息，可以查看start.sh配置文件中的日志所在位置，然后启动时检查日志文件报错问题。发现是端口占用问题，就使用端口占用检查命令：netstat -nultp 检查端口是否占用。发现是8080端口占用，原因是gitlab里面占用了8080。使用 gitlab-cli stop 关闭gitlab。 -->

- nacos-2.0.3（未自启动）
  - 端口： 8848/nacos
  - 安装过程：
    https://www.cnblogs.com/leslen/p/15128180.html
  - 默认的用户名和密码： nacos/nacos
  - 启动：进入 bin 目录后，使用 ./start.sh -m standalone 方式进行启动即可。
  - 登陆地址： http://{ip}:{port}/nacos
  - 注意：
    - 访问时，不但需要端口，还需要加服务名

- redis-5.0.8（自启动）
  - 安装过程
    install-redis.md
  - 端口： 6379
  - 密码： 123456
  - 启动与关闭：
    - 启动： 自启动， 如果需要手动启动，可以使用： ./redis-server ../redis.conf
    - 关闭： ./redis-cli -h 192.168.1.150 -p 6379 shutdown
    - 验证密码： ./redis-cli 登陆只有，可以使用 auth + 密码的方式进行登陆。


## 3. 其他

```
// 上传和下载，可以使用 filezilla 客户端

上传
scp -r local_folder username@ip:remote_folder
//或者
scp -r local_folder remote_ip:remote_folder


下载
scp -r username@ip:remote_folder local_folder    //-r表示递归
//示例
scp -r root@ip:/apps/local/nginx-1.8.0.tar.gz /Users/gary/Documents/


开放端口
firewall-cmd --zone=public --add-port=3306/tcp --permanent
firewall-cmd --reload

查看端口占用
netstat -nultp |grep 8080
```


- apollo:
  - https://www.jianshu.com/p/e5cc29be74d4

## 4. 记录

```
DEV(Development environment)
FAT(Feature Acceptance Test environment)
UAT(User Acceptance Test environment)
PRO(Production environment)
```


<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />
