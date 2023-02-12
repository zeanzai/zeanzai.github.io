---
title: "挂载NTFS硬盘"
category:
  - "linux"
tag:
  - "home"
---

## 1. 挂载NTFS硬盘

由于家里的电脑原来装的是windows 系统，并且我自己扩展了两块硬盘，原来Windows系统时，两块硬盘可以正常读写，但是在物理机上面安装上centos7.5以后，由于只是格式化c盘，把centos7.5系统安装到了c盘，所以之前自己扩展的两块硬盘就无法正常读写了，此时，需要在centos系统上读写两块硬盘内容，需要怎么处理呢？下面给出解决方案。

### 1.1. 安装依赖包

```
yum install -y fuse ntfs-3g
```

### 1.2. 挂载硬盘

```
[root@home data]# mkdir -p /mnt/data/d /mnt/data/e

[root@home data]# lsblk -f
NAME                 FSTYPE      LABEL    UUID                                   MOUNTPOINT
sda
├─sda1               vfat                 B476-53D1                              /boot/efi
├─sda2               xfs                  cd9c42b2-dafc-40dc-a780-28e8b5ed453a   /boot
└─sda3               LVM2_member          pue3cy-Bdmo-txbs-f7vS-3Oef-78zY-ACq296
  ├─centos_home-root xfs                  a1c1e8bc-3a27-47b6-a2aa-f329e4b77e86   /
  ├─centos_home-swap swap                 4ff247c5-07b8-4143-93bc-1496ac3a7162   [SWAP]
  └─centos_home-home xfs                  2d5c8133-4174-4689-906a-62c316aa6839   /home
sdb
└─sdb1               ntfs        Software 90769AF9769ADEF2
sdc
├─sdc1
└─sdc2               ntfs        Zeanzai  D4947D40947D25E0

[root@home data]# mount /dev/sdb1 /mnt/data/d
[root@home data]# mount /dev/sdc2 /mnt/data/e

```



### 1.3. 自动挂载

如果需要永久挂载，先查到该盘的type值：

```

[root@home ~]# blkid
/dev/mapper/centos_home-root: UUID="a1c1e8bc-3a27-47b6-a2aa-f329e4b77e86" TYPE="xfs"
/dev/sda3: UUID="pue3cy-Bdmo-txbs-f7vS-3Oef-78zY-ACq296" TYPE="LVM2_member" PARTUUID="3f965157-bb9c-49b5-9aeb-20726f024e6f"
/dev/sdb1: LABEL="Software" UUID="90769AF9769ADEF2" TYPE="ntfs" PARTLABEL="Basic data partition" PARTUUID="8ba8c6a7-4a88-47d2-b94e-97d2d97a144e"
/dev/sdc1: PARTLABEL="Microsoft reserved partition" PARTUUID="6207f65b-8b11-46bd-bd4a-d14f2d5a0c6e"
/dev/sdc2: LABEL="Zeanzai" UUID="D4947D40947D25E0" TYPE="ntfs" PARTLABEL="Basic data partition" PARTUUID="3220d24a-a508-4dfb-af5e-ae2a749c9d9f"
/dev/sda1: SEC_TYPE="msdos" UUID="B476-53D1" TYPE="vfat" PARTLABEL="EFI System Partition" PARTUUID="82eac0f4-625e-4b70-80c7-221bee59c290"
/dev/sda2: UUID="cd9c42b2-dafc-40dc-a780-28e8b5ed453a" TYPE="xfs" PARTUUID="1075528c-e57e-4734-a6c9-74a798184fcb"
/dev/mapper/centos_home-swap: UUID="4ff247c5-07b8-4143-93bc-1496ac3a7162" TYPE="swap"
/dev/mapper/centos_home-home: UUID="2d5c8133-4174-4689-906a-62c316aa6839" TYPE="xfs"
```

在最下面添加两行

```

#
# /etc/fstab
# Created by anaconda on Sun Jun 27 13:23:19 2021
#
# Accessible filesystems, by reference, are maintained under '/dev/disk'
# See man pages fstab(5), findfs(8), mount(8) and/or blkid(8) for more info
#
/dev/mapper/centos_home-root /                       xfs     defaults        0 0
UUID=cd9c42b2-dafc-40dc-a780-28e8b5ed453a /boot                   xfs     defaults        0 0
UUID=B476-53D1          /boot/efi               vfat    umask=0077,shortname=winnt 0 0
/dev/mapper/centos_home-home /home                   xfs     defaults        0 0
/dev/mapper/centos_home-swap swap                    swap    defaults        0 0

/dev/sdb1 /mnt/data/d           ntfs defaults 0 0
/dev/sdc2 /mnt/data/e           ntfs defaults 0 0
```

注意是ntfs，不是其他。

如果遇到无法正常启动时，可以参考 https://blog.csdn.net/weixin_34401479/article/details/94316392

### 1.4. 其它命令

```
# 查看所有磁盘的分区情况
fdisk -l

# 卸载
umount /dev/sdd1

# 查看已挂载磁盘使用情况
df -h
```


### 1.5. 挂载 exFat 磁盘驱动器


```
yum install epel-release
rpm -v --import http://li.nux.ro/download/nux/RPM-GPG-KEY-nux.ro
rpm -Uvh http://li.nux.ro/download/nux/dextop/el7/x86_64/nux-dextop-release-0-5.el7.nux.noarch.rpm
yum install exfat-utils fuse-exfat


[root@home data]# mount -t exfat /dev/sdd1 /mnt/data/f
```

### 1.6. 参考文章列表：

1. https://cloud.tencent.com/developer/article/1566968
2. https://www.cnblogs.com/jhxxb/p/11157315.html


3. [如何在 CentOS 7 上挂载一个 exFAT 磁盘驱动器](https://cloud.tencent.com/developer/article/1626805)
<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />
