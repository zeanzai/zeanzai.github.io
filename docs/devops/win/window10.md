---
"title": "window10开发环境搭建"
category:
  - "window10"
tag:
  - "win10"
---

## Git的安装

1. 直接安装即可；
2. 配置全局变量： 
```
git config --global user.name zeanzai

git config --global user.email "zeanzai.me@gmail.com"
```
3. 生成sshkey
```
ssh-keygen -t ed25519 -C "zeanzai.me@gmail.com"
```
4. 添加公钥到GitHub上

## vscode的安装及配置

1. 直接双击进行安装即可；
2. 终端执行器中，没有办法直接执行sh文件，直接使用git-bash here即可；
3. 安装picgo插件，配置阿里云的oos对象存储；

## 配置运行环境

1. 使用 node.msi 安装包的方式进行安装，安装完node之后，npm会自动安装，并且 msi 的安装方式会自动添加环境变量；
2. 设置好 node_global 和 node_cache 的位置，这里有点类似于 maven 的 repository 的意思，[参考这里](https://juejin.cn/post/7034705127868989447)，由于科学上网已设置，因此没有必要使用淘宝源；
a. 先创建 node_global 和 node_cache 这两个文件夹；
b. 用户变量的 path 变量中增加 node_global 的地址；
c. 修改系统环境变量，移除 msi 添加的node的环境变量，添加 NODE_PATH 变量，并把 NODE_PATH 添加到 path 中；
d. 管理员角色打开 cmd ，执行 npm config set prefix "D:\work\node\node_global" 和 npm config set cache "D:\work\node\node_cache" ， 并替换自己的路径；
3. 使用管理员角色打开 cmd ，并执行 npm i yarn -g 安装 yarn 包管理工具，安装完成之后会在上一步骤中配置的 node_global 文件夹中找到 yarn 文件；
4. 使用管理员角色打开 Windows PowerShell ， 输入命令： set-ExecutionPolicy RemoteSigned ；
5. 在系统环境变量path中添加 yarn 的路径【 yarn 在第二步中配置的路径中找，E:\Node\node_global\node_modules\yarn\bin 】使 yarn 全局可用；
6. 重启vscode；
7. 执行 yarn install 完成依赖的安装；
8. 执行 yarn docs:dev 进行启动；


注意：
1. 如果报错： `yarn : 无法将“yarn”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。请检查名称的拼写，如果包括路径，请确保路径正确，然后再试一次。 + yarn install ... `，就需要检查是否没有使用管理员角色安装 yarn ，同时检查是否已经完成yarn的系统变量的配置；
2. 如果报错： `yarn : 无法加载文件 E:\Node\node_global\yarn.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。所在位置 行:1 字符: 1 `， 就需要检查是否使用管理员角色在 Windows PowerShell 中执行了 `set-ExecutionPolicy RemoteSigned` ；

参考：
1. [PowerShell : 无法加载文件 C:\Users\huyn\AppData\Roaming\npm\ng.ps1，因为在此系统上禁止运行脚本](https://blog.csdn.net/weixin_38883338/article/details/100054550)
2. [安装node.js，npm，yarn环境](https://juejin.cn/post/7034705127868989447)
3. [安装完，运行yarn报错:无法将“yarn”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。请检查名称的拼写，如果包括路径，请确保路径正确，然后再试一次。 所在位置 行:1 字符: 1](https://www.cnblogs.com/fujijill/p/16080641.html)


## 配置博客并启动

1. 先克隆到本地文件夹；
2. 使用vscode打开；
3. 在终端中先安装依赖， yarn install ；
4. 之后使用命令启动： yarn docs:dev ；

## idea的激活

网盘中的 idea-win 文件夹，按照里面的install.log文件操作。


## 台式机硬件配置信息

```
## cpu型号
[root@home ~]# cat /proc/cpuinfo | grep 'model name' |uniq
model name      : Intel(R) Core(TM) i7-4790 CPU @ 3.60GHz

## cpu核数
[root@home ~]# cat /proc/cpuinfo | grep "cpu cores" | uniq
cpu cores       : 4

## 内存大小
[root@home ~]# cat /proc/meminfo | grep MemTotal
MemTotal:       16133652 kB

## cpu个数
[root@home ~]# cat /proc/cpuinfo | grep "physical id" | uniq | wc -l
1

```

## 鲁大师输出的硬件信息

```
--------[ 鲁大师 ]--------------------------------------------------------------------------------

  软件:             鲁大师 5.15.17.1075
  时间:             2018-05-21 23:05:31
  网站:             http://www.ludashi.com

--------[ 概览 ]----------------------------------------------------------------------------------

  电脑型号            技嘉 B85M-D3H 台式电脑
  操作系统            Windows 10 专业版 64位 ( DirectX 12 )

  处理器              英特尔 第四代酷睿 i7-4790 @ 3.60GHz 四核
  主板                技嘉 B85M-D3H ( 英特尔 Haswell - Lynx Point )
  显卡                Nvidia GeForce GTX 960 ( 4 GB / 技嘉 )
  内存                16 GB ( 金士顿 DDR3 1600MHz )
  主硬盘              东芝 Q300. ( 120 GB / 固态硬盘 )
  显示器              飞利浦 PHLC0FA PHL 276E6 ( 27.2 英寸  )
  声卡                英特尔 英特尔 显示器音频 @ 英特尔 Haswell  高保真音频
  网卡                瑞昱 RTL8168/8111/8112 Gigabit Ethernet Controller / 技嘉

--------[ 主板 ]----------------------------------------------------------------------------------

  主板型号            技嘉 B85M-D3H
  芯片组              英特尔 Haswell - Lynx Point
  主板版本            To be filled by O.E.M.
  BIOS                American Megatrends Inc. F15  /  制造日期: 2015年08月20日
  BIOS的大小          8192 KB
  BIOS的序列号        63-0100-000001-00101111-041312-Chipset

  板载设备            视频设备 (启用)

--------[ 处理器 ]--------------------------------------------------------------------------------

  处理器              英特尔 第四代酷睿 i7-4790 @ 3.60GHz 四核
  步进                C0
  速度                3.80 GHz (109 MHz x 35.0)
  处理器数量          核心数: 4 / 线程数: 8
  核心代号            Haswell
  生产工艺            22 纳米
  插槽/插座           Socket H3 (LGA 1150)
  一级数据缓存        4 x 32 KB, 8-Way, 64 byte lines
  一级代码缓存        4 x 32 KB, 8-Way, 64 byte lines
  二级缓存            4 x 256 KB, 8-Way, 64 byte lines
  三级缓存            8 MB, 16-Way, 64 byte lines
  特征                MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, HTT, EM64T, EIST, Turbo Boost

--------[ 硬盘 ]----------------------------------------------------------------------------------

  产品                东芝  Q300. (固态硬盘)
  大小                120 GB
  硬盘已使用          共 1095 次，累计 2486 小时
  固件                SAFM12.3
  接口                SATA III
  数据传输率          600.00 MB/秒
  特征                S.M.A.R.T,  APM,  48-bit LBA,  NCQ

  产品                希捷  BUP
  大小                1 TB
  固件                SLIM
  特征                S.M.A.R.T

--------[ 内存 ]----------------------------------------------------------------------------------

  ChannelA-DIMM0      金士顿 DDR3 1600MHz 8GB
  制造日期            2016 年 09月
  型号                7F98 KHX1600C10D3/8G
  序列号              0C3E9C97
  厂商                Kingston
  模块位宽:           64 Bits
  模块电压:           SSTL 1.5V

  ChannelB-DIMM0      金士顿 DDR3 1600MHz 8GB
  制造日期            2015 年 11月
  型号                7F98 KHX1600C10D3/8G
  序列号              780E9EB6
  厂商                Kingston
  模块位宽:           64 Bits
  模块电压:           SSTL 1.5V

--------[ 显卡 ]----------------------------------------------------------------------------------

  显卡                英特尔 HD Graphics 4600
  显存                112 MB
  制造商              技嘉
  制造商              Intel
  BIOS日期            2015年07月02日
  驱动版本            20.19.15.4835
  驱动日期            2017年01月01日

  主显卡              Nvidia GeForce GTX 960
  显存                4 GB
  制造商              技嘉
  制造商              Nvidia
  BIOS日期            2015年07月02日
  驱动版本            23.21.13.8813
  驱动日期            2017年02月01日

--------[ 显示器 ]--------------------------------------------------------------------------------

  产品                飞利浦 PHLC0FA PHL 276E6
  厂商                飞利浦
  固件日期            2016 年 05月
  屏幕尺寸            27.2 英寸 (60 厘米 x 34 厘米)
  显示比例            宽屏 16 : 9
  分辨率              1920 x 1080 32 位真彩色
  Gamma               2.20
  电源管理            Active-Off

--------[ 其他设备 ]------------------------------------------------------------------------------


  网卡                瑞昱 RTL8168/8111/8112 Gigabit Ethernet Controller
  制造商              技嘉

  声卡                英特尔 英特尔 显示器音频 @ 英特尔 Haswell HD Audio Controller

  声卡                英特尔 Lynx Point HD Audio Controller

  声卡                Nvidia High Definition Audio Controller

  键盘                HID 标准键盘
  鼠标                HID-compliant 鼠标


--------[ PCI设备 ]-------------------------------------------------------------------------------

  设备                Haswell DRAM Controller
  设备ID              0C00
  制造商              Intel
  制造商ID            8086
  类别                Bridge / PCI to HOST
  子系统制造商        Gigabyte
  子系统ID            50001458

  设备                Haswell PCI Express x16 Controller
  设备ID              0C01
  制造商              Intel
  制造商ID            8086
  类别                Bridge / PCI to PCI
  子系统ID            00000000

  设备                HD Graphics 4600
  设备ID              0412
  制造商              Intel
  制造商ID            8086
  类别                Display / VGA
  子系统制造商        Gigabyte
  子系统ID            D0001458

  设备                Haswell HD Audio Controller
  设备ID              0C0C
  制造商              Intel
  制造商ID            8086
  类别                Multimedia / Hi-definition Audio
  子系统制造商        Intel
  子系统ID            20108086

  设备                Lynx Point USB xHCI Host Controller
  设备ID              8C31
  制造商              Intel
  制造商ID            8086
  类别                Serial / USB (UHCI)
  子系统制造商        Gigabyte
  子系统ID            50071458

  设备                Lynx Point MEI Controller #1
  设备ID              8C3A
  制造商              Intel
  制造商ID            8086
  类别                Simple Communication / Other
  子系统制造商        Gigabyte
  子系统ID            1C3A1458

  设备                Lynx Point KT Controller
  设备ID              8C3D
  制造商              Intel
  制造商ID            8086
  类别                Simple Communication / Serial - 16550
  子系统制造商        Gigabyte
  子系统ID            1C3A1458

  设备                Lynx Point USB Enhanced Host Controller #2
  设备ID              8C2D
  制造商              Intel
  制造商ID            8086
  类别                Serial / USB 2.0 (EHCI)
  子系统制造商        Gigabyte
  子系统ID            50061458

  设备                Lynx Point HD Audio Controller
  设备ID              8C20
  制造商              Intel
  制造商ID            8086
  类别                Multimedia / Hi-definition Audio
  子系统制造商        Gigabyte
  子系统ID            A0021458

  设备                Lynx Point PCI Express Root Port 1
  设备ID              8C10
  制造商              Intel
  制造商ID            8086
  类别                Bridge / PCI to PCI
  子系统ID            00000000

  设备                Lynx Point PCI Express Root Port 3
  设备ID              8C14
  制造商              Intel
  制造商ID            8086
  类别                Bridge / PCI to PCI
  子系统ID            00000000

  设备                Lynx Point PCI Express Root Port 4
  设备ID              8C16
  制造商              Intel
  制造商ID            8086
  类别                Bridge / PCI to PCI
  子系统ID            00000000

  设备                Lynx Point USB Enhanced Host Controller #1
  设备ID              8C26
  制造商              Intel
  制造商ID            8086
  类别                Serial / USB 2.0 (EHCI)
  子系统制造商        Gigabyte
  子系统ID            50061458

  设备                Lynx Point LPC Controller
  设备ID              8C50
  制造商              Intel
  制造商ID            8086
  类别                Bridge / PCI to ISA
  子系统制造商        Gigabyte
  子系统ID            50011458

  设备                Lynx Point 6-Port SATA AHCI Controller
  设备ID              8C02
  制造商              Intel
  制造商ID            8086
  类别                Storage / Serial ATA (AHCI 1.0)
  子系统制造商        Gigabyte
  子系统ID            B0051458

  设备                Lynx Point SMBus Controller
  设备ID              8C22
  制造商              Intel
  制造商ID            8086
  类别                Serial / SMBus Controller
  子系统制造商        Gigabyte
  子系统ID            50011458

  设备                Lynx Point Thermal Management Controller
  设备ID              8C24
  制造商              Intel
  制造商ID            8086
  类别                Data Aquisition & Signal Processing / Other
  子系统制造商        Gigabyte
  子系统ID            50001458

  设备                GeForce GTX 960
  设备ID              1401
  制造商              Nvidia
  制造商ID            10DE
  类别                Display / VGA
  子系统制造商        Gigabyte
  子系统ID            36C11458

  设备                High Definition Audio Controller
  设备ID              0FBA
  制造商              Nvidia
  制造商ID            10DE
  类别                Multimedia / Hi-definition Audio
  子系统制造商        Gigabyte
  子系统ID            36C11458

  设备                RTL8168/8111/8112 Gigabit Ethernet Controller
  设备ID              8168
  制造商              Realtek
  制造商ID            10EC
  类别                Network / Ethernet
  子系统制造商        Gigabyte
  子系统ID            E0001458

--------[ USB设备 ]-------------------------------------------------------------------------------

  制造商ID            046D
  产品ID              C534
  类别                0 / 0 / 0
  设备                Logitech USB Receiver
  Serial              ?
  版本                USB 2.0

  制造商ID            0BC2
  产品ID              AB24
  类别                0 / 0 / 0
  设备                Seagate BUP Slim RD
  Serial              NA7LP571
  版本                USB 3.0

--------[ 传感器 ]--------------------------------------------------------------------------------

  名称                ITE IT8728
  CPU温度             31℃
  CPU核心             36℃
  CPU封装             40℃
  主板                34℃
  显卡                47℃
  硬盘温度            31℃
  风扇                841转
```


<br /><br /><br />
<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />


