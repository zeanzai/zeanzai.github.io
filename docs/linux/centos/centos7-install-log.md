---
"title": "CentOS7安装及配置"
category:
  - "docker"
tag:
  - "docker"
---

## 安装

- 在window平台上制作linux启动盘；
- 插入启动盘，开机后f12进入BIOS，然后找到启动盘进入安装页面
  - 「由于在windows上使用UltralIOS工具刻录启动盘，因此盘符名称并没有显示完全，所以在启动时会出现问题。」
  - 所以，在进入安装页面后需要迅速按下键盘TAB键，将最下面的vmlinuz initrd=initrd.img inst.stage2=hd:LABEL=CentOS\x207\x20x86_64 rd.live.check quiet 改为 vmlinuz initrd=initrd.img linux dd quiet，然后键入回车查看设备名
  - 之后找到启动盘盘符，再 ctrl+alt+delete 重启，重新进入启动页面，选择 install 选项后按下TAB键，然后把vmlinuz initrd=initrd.img inst.stage2=hd:LABEL=CentOS\x207\x20x86_64 rd.live.check quiet 改为 vmlinuz initrd=initrd.img inst.stage2=hd:/dev/sda4 quiet ps：sda4就是你看到的启动盘名称 
  - 参考[这里](https://www.cnblogs.com/wutao666/p/10700158.html)
- 安装时
  - a. 设置主机名： home.centos 
  - b. root root1003
  - c. 设置网络： 
    - ⅰ. ip: 192.168.1.150
    - ⅱ. 掩码： 24
    - ⅲ. 网关： 192.168.1.1
  - d. 未设置时区
- 拔掉u盘，重新启动电脑
- 输入用户名密码后，ping baidu.com

## mac上免密登陆

- 在mac上先移除.ssh/known_hosts，或改文件名，之后执行： 

```
➜  ~ cd .ssh 
➜  .ssh ll
total 40
-rw-r--r--  1 shawnwang  staff   196B  5 19 18:31 config
-rw-------  1 shawnwang  staff   411B  2 12  2023 id_ed25519
-rw-r--r--  1 shawnwang  staff   102B  2 12  2023 id_ed25519.pub
-rw-------  1 shawnwang  staff   270B  7 27 22:35 known_hosts
-rw-r--r--  1 shawnwang  staff    95B  7 27 22:35 known_hosts.old
  
➜  .ssh ssh-copy-id -i ./id_ed25519.pub root@192.168.1.150
/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "./id_ed25519.pub"
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
root@192.168.1.150's password: 

Number of key(s) added:        1

Now try logging into the machine, with:   "ssh 'root@192.168.1.150'"
and check to make sure that only the key(s) you wanted were added.

```

- 再然后在mac上使用免密登陆

![20231007190541](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20231007190541.png)

## 系统信息

```
[root@home ~]# hostname
home.centos
[root@home ~]# cat /proc/version
Linux version 3.10.0-1160.71.1.el7.x86_64 (mockbuild@kbuilder.bsys.centos.org) (gcc version 4.8.5 20150623 (Red Hat 4.8.5-44) (GCC) ) #1 SMP Tue Jun 28 15:37:28 UTC 2022
[root@home ~]# uname -a
Linux home.centos 3.10.0-1160.71.1.el7.x86_64 #1 SMP Tue Jun 28 15:37:28 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux
[root@home ~]# lsb_release -a
-bash: lsb_release: 未找到命令
[root@home ~]# cat /etc/redhat-release
CentOS Linux release 7.9.2009 (Core)

```

## 修改yum源

```
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo_bak
curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
yum clean all  && yum makecache
```

## 挂载另外一块SSD硬盘

另外一块ssd是sandisk品牌的，安装这个服务器之前的操作系统是windows10，所以这块硬盘的文件系统格式是ntfs，然后把这块硬盘直接取下来，然后放到mac上，执行格式化。

之后按照下面的指引进行挂载：

```
zeanzai.github.io git:(master) ✗ ssh root@192.168.1.150 
Last login: Sat Oct  7 19:14:44 2023 from 192.168.1.102
[root@home ~]# lsblk
NAME            MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sda               8:0    0 111.8G  0 disk 
├─sda1            8:1    0     1G  0 part /boot
└─sda2            8:2    0 110.8G  0 part 
  ├─centos-root 253:0    0    50G  0 lvm  /
  ├─centos-swap 253:1    0  11.2G  0 lvm  [SWAP]
  └─centos-home 253:2    0  49.6G  0 lvm  /home
sdb               8:16   0 119.2G  0 disk 
└─sdb1            8:17   0 119.2G  0 part 
[root@home ~]# sudo mkfs.ext4 /dev/sd
sda   sda1  sda2  sdb   sdb1  
[root@home ~]# sudo mkfs.ext4 /dev/sdb1
mke2fs 1.42.9 (28-Dec-2013)
Discarding device blocks: 完成                            
文件系统标签=
OS type: Linux
块大小=4096 (log=2)
分块大小=4096 (log=2)
Stride=0 blocks, Stripe width=0 blocks
7815168 inodes, 31258368 blocks
1562918 blocks (5.00%) reserved for the super user
第一个数据块=0
Maximum filesystem blocks=2178940928
954 block groups
32768 blocks per group, 32768 fragments per group
8192 inodes per group
Superblock backups stored on blocks: 
        32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208, 
        4096000, 7962624, 11239424, 20480000, 23887872

Allocating group tables: 完成                            
正在写入inode表: 完成                            
Creating journal (32768 blocks): 完成
Writing superblocks and filesystem accounting information: 完成   

// 挂载
[root@home ~]# mount /dev/sdb1 /mnt/doc/
[root@home ~]# cd /mnt/doc/
[root@home doc]# ll
总用量 16
drwx------. 2 root root 16384 10月  7 19:40 lost+found

// 设置重启后自动挂载
[root@home doc]# vi /etc/fstab 
// 在最下面添加
 /dev/sdb1 /mnt/doc ext4 defaults 0 0
```

参考[这里](https://blog.csdn.net/clever_wr/article/details/102712478)

## Tab命令提示不区分大小写

```
[root@home doc]# vi /etc/inputrc 

// 最下面添加： 
set completion-ignore-case on
```

## 创建docker的磁盘空间

由于在docker上部署一些软件时，需要使用磁盘空间，因此我们把docker的磁盘空间放到非系统盘，即我们在安装服务器时额外安装的另外一块ssd硬盘。

因此，我们需要先创建一些目录。

```
mkdir /mnt/doc/docker
```

以后安装的所有的容器的文件，均放到 /mnt/doc/docker 下面。

## 创建安装包存放文件夹及安装路径

```
mkdir /mnt/doc/package
mkdir /usr/setup
```

## 安装网络工具

```
[root@home ~]# yum -y install net-tools
```



---
<br /><br /><br />
<img style="border:1px red solid; display:block; margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="微信公众号" />


