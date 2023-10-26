---
"title": "常用命令"
category:
  - "Centos"
tag:
  - "centos"
---

```
# bash 中的快捷键
ctrl+a   #快速移动光标到行首  
ctrl+e   #快速移动光标到行尾
option+ ←（左箭头）/右箭头  #将光标按照单词进行移动 

ctrl+k   #将光标之后的内容进行全部删除（剪切）
ctrl+u   #将光标之前的内容进行全部删除（剪切）
ctrl+y   #将剪切或复制的内容进行粘贴
ctrl+w   #将光标之前的字符串进行删除（剪切）


ctrl+c   #将终止程序运行过程
ctrl+z   #可以暂停程序运行过程

tab     #可以对操作命令或者处理对象进行补全操作
ctrl+l  #清屏操作

ctrl+s  #进入远程连接锁屏状态
ctrl+q  #解除连接的锁屏状态

esc+.   #快速调取上一个命令的最后的参数或对象信息
```



```
//---------- 服务管理
// 服务状态|关闭服务｜启动服务｜重启服务
systemctl status|stop|start|restart xxx 
// 重新加载服务
systemctl daemon-reload 
// 是否已经加入自启动
systemctl is-enabled xxx


// ---------- 文件查找
find ./ -name -type d "target" -exec rm -rf '{}' + # 删除当前目录及子文件夹下面所有的target文件夹
find ./ -name '*.iml' -exec rm -rf '{}' + # 删除当前目录及子文件夹内所有的以.iml结尾的文件


// ---------- 防火墙管理
// 防火墙
firewall-cmd -h
firewall-cmd --zone=public --list-ports
firewall-cmd --reload

// --------- 端口监听状况
netstat -tunlp | grep 8080
ifconfig # 所有网络接口属性
ethtool 网卡名 # 带宽
route -n # 路由表
netstat -antp # 所有已经建立的连接

// --------- 磁盘管理
fdisk -l
lsblk 
df -h # 查看系统磁盘空间 
du --max-depth=1 -h /mydata/nexus/data/log/ # 查看某一个文件夹下面所有文件的大小

// --------- 复制到远程服务器
scp -r jdk-8u144-linux-x64.tar.gz root@192.168.1.150:/mnt/doc/package 

// --------- docker
docker logs -f -t --tail 100   529a4d9afd8e

// --------- 查看历史命令
# 定期清理日志： 1. 把命令日志备份到文件； 2. 清除history
history > /mnt/d/centos/centos.log
history -c


// --------- 实现ssh免密登陆
ssh-copy-id -i ~/.ssh/id_rsa.pub root@192.168.1.150
ssh root@192.168.1.150

// --------- 查看日志
cat log.log | grep "xxxxx" | awk -F "#" '{print $1}'	


// --------- 下载
curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
wget 


// --------- 进程管理
ps -ef 
ps -aux 
top



// --------- 服务器基本信息
uname -a
hostname


总核数 = 物理CPU个数 X 每颗物理CPU的核数
总逻辑CPU数 = 物理CPU个数 X 每颗物理CPU的核数 X 超线程数

# 全部信息
cat /proc/cpuinfo

# 物理CPU个数
cat /proc/cpuinfo| grep "physical id"| sort| uniq| wc -l

# 每个物理CPU中core的个数(即核数)
cat /proc/cpuinfo| grep "cpu cores"| uniq

# 逻辑CPU的个数
cat /proc/cpuinfo| grep "processor"| wc -l

getconf LONG_BIT # 计算机位数
env # 环境变量

cat /proc/meminfo # 内存
free -m # 空闲内存
1. 查看总内存情况使用命令`cat /proc/meminfo`即可。
2. 查看内存占用状态使用`free -m`(-m，单位是m，如果是-g，单位是g）。

```



---
<br /><br /><br />
<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />


