---
"title": "信息"
category:
  - "mac"
tag:
  - "mac"
---

## .bashrc .zshrc .profile .bash_profile 的区别


### 结论

实践经验： 环境变量统一配置在 .bash_profile 文件中，但是为了让 zsh 也能使用到，因此在 .zshrc 中加了下面两行。

```
source /etc/profile 
source ~/.bash_profile
```

### 知识

一、bashrc和profile的差异

1. bashrc是在系统启动后就会自动运行。进行设置后，可运终端命令用source bashrc命令更新bashrc
2. profile是在用户登录后才会运行。进行设置后，可运终端命令用source profile命令更新profile
PS：通常我们修改bashrc,有些linux的发行版本不一定有profile这个文件
1. /etc/profile中设定的变量(全局)的可以作用于任何用户，而~/.bashrc等中设定的变量(局部)只能继承/etc/profile中的变量，他们是"父子"关系。

二、.bash_profile

- ~/.bash_profile: 每个用户都可使用该文件输入专用于自己使用的shell信息，当用户登录时，该文件仅仅执行一次!默认情况下,他设置一些环境变量,执行用户的.bashrc文件。
- ~/.bash_logout: 当每次退出系统(退出bash shell)时，执行该文件。
- ~/.bash_profile: 是交互式、login方式进入bash运行的。
- ~/.bashrc:是交互式non-login方式进入bash运行的，通常二者设置大致相同，所以通常前者会调用后者。

三、.zshrc

zsh终端命令工具的全局变量设置，和bashrc区别是 默认很多linux系统是base，就配置在bashrc里
如里是使用zsh 就配置在 zshrc里



## jdk位置

```
/usr/libexec/java_home -V

/Library/Java/JavaVirtualMachines/zulu-8.jdk/Contents/Home
```

## 刷新dns缓存

```
sudo dscacheutil -flushcache;
sudo killall -HUP mDNSResponder

```

## 切换node版本

```
// 安装
$ sudo npm install -g n

// 版本切换
输入n，就会出现安装的node版本列表，列表项前面有个o的，说明就是你当前在使用的node版本，移动上下方向键来选择要使用的版本，最后按回车生效。
$ n
        5.10.1 
o      6.2.2 
        7.0.0

// 切换或安装某个版本
$ sudo n x.x.x

// 安装最新版本
$ n latest

// 安装稳定版本
$ n stable

// 删除某个版本
$ n rm x.x.x

// 指定某个版本来执行文件
n user x.x.x some.js
```

## homebrew的使用

https://sspai.com/post/56009

---
<br /><br /><br />
<img style="border:1px red solid; display:block; margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="微信公众号" />


