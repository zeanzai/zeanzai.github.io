---
"title": "jdk"
category:
  - "centos"
tag:
  - "centos"
---

## 安装jdk

```
// 把下载好的jdk安装包上传至 centos 
➜  Downloads scp -r jdk-8u144-linux-x64.tar.gz root@192.168.1.150:/mnt/doc/package 

// 解压到安装路径下
[root@home jdk1.8.0_144]# tar zxvf /mnt/doc/package/jdk-8u144-linux-x64.tar.gz -C /usr/setup/

// 修改环境变量
[root@home jdk1.8.0_144]# vi /etc/profile

// 最后一行添加
export JAVA_HOME=/usr/setup/jdk1.8.0_144
export JRE_HOME=$JAVA_HOME/jre
export CLASSPATH=./:$JAVA_HOME/lib:$JAVA_HOME/jre/lib
export PATH=$PATH:$JAVA_HOME/bin

// 使环境变量生效
[root@home jdk1.8.0_144]# source /etc/profile
```



<br /><br /><br />
<img style="border:1px red solid; display:block; margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="微信公众号" />


