---
"title": "nacos"
category:
  - "centos"
tag:
  - "centos"
---

nacos运行环境依赖于jdk环境，因此需要先安装jdk。

```
// 在mac上把从GitHub上下载下来的安装包上传至centos
➜  Downloads scp -r nacos-server-2.2.3.tar.gz root@192.168.1.150:/mnt/doc/package 
nacos-server-2.2.3.tar.gz          

// 解压到安装目录下
[root@home package]# tar zxvf nacos-server-2.2.3.tar.gz -C /usr/setup/

// 修改start.sh启动脚本，添加jdk的环境变量
[root@home bin]# vi /usr/setup/nacos/bin/startup.sh 
...
# limitations under the License.

cygwin=false
darwin=false
os400=false
case "`uname`" in
CYGWIN*) cygwin=true;;
Darwin*) darwin=true;;
OS400*) os400=true;;
esac
error_exit ()
{
    echo "ERROR: $1 !!"
    exit 1
}

[ ! -e "$JAVA_HOME/bin/java" ] && JAVA_HOME=/usr/setup/jdk1.8.0_144 ## 添加这一行
[ ! -e "$JAVA_HOME/bin/java" ] && JAVA_HOME=$HOME/jdk/java
[ ! -e "$JAVA_HOME/bin/java" ] && JAVA_HOME=/usr/java
[ ! -e "$JAVA_HOME/bin/java" ] && JAVA_HOME=/opt/taobao/java
[ ! -e "$JAVA_HOME/bin/java" ] && unset JAVA_HOME
...

// 开机自启动
// 在 /usr/lib/systemd/system 目录下创建 nacos.service ，并添加以下内容
[root@home bin]# vi /usr/lib/systemd/system/nacos.service

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

// 开放端口
firewall-cmd --zone=public --add-port=8848/tcp --permanent
firewall-cmd --reload

// 访问地址： ip:8848/nacos

// 用户名密码： nacos / nacos
```

---

<br /><br /><br />
<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />


