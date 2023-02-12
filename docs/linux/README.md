---
# 这是侧边栏索引
index: 1
# 这是页面的图标
# icon: page
# 这是文章的标题
title: 开发环境手册
# 设置作者
author: zeanzai
# 设置写作时间
# date: 2022-04-26
# 一个页面可以有多个分类
category:
  - linux
# 一个页面可以有多个标签
tag:
  - linux
# 此页面会在文章列表置顶
# sticky: true
# # 此页面会出现在首页的文章板块中
# star: true
# 你可以自定义页脚
# footer: 页脚
---

## 1.1. 前言

良好的运维习惯有很多优点：

- 利于自己维护，利于后继者维护
- 对计算机服务器进行最小化改动
- 便于实现对服务器更好的管理

**此外，如果你按照本教程来安装和配置，那么此仓库可以作为你的日志系统，这样也易于将来出现问题的排错。**

## 1.2. 良好的习惯

笔者工作使用的电脑是window平台，所以使用Windows平台下的软件工具连接到远程服务器上进行相对应的操作。笔者的工作用的操作系统是Windows系统，下面是笔者的一些工作习惯：

- 使用filezilla工具进行上传
- 使用SecureCRT工具进行连接
- 使用editplus编辑较为复杂的文本文件
- 在`/opt/package/`目录下面上传安装包，安装完成之后会删除安装包
- 在`/opt/unziped/`目录下面解压安装包，安装完成后，会删除
- 在`/opt/repository/`目录设置maven仓库地址，如果没有安装Maven，则不需要此文件夹
- 在`/opt/resource/`目录下面放项目源码
- 在`/opt/script/`目录下面放置脚本
- 在`/usr/setup/`目录下面安装软件，以软件名+版本号命名，如：nginx-1.14.1
- 在`/home/logs/`目录下面放置维护日志文件，以日期（yyyyMMdd）+操作名称（eg: install-nginx.md）命名。此外，此目录也作为java后端日志的主目录
- 在`/home/history/`目录下面备份history命令，以日期（yyyyMMdd）命名
- 安装依赖时，会优先使用yum install方式进行安装，在yum库中没有的相关依赖时才会使用源码形式或软件包的方式安装
- 开启、关闭、重启某服务就不做日志记录
- 操作配置文件，会写相关记录日志

此外，笔者在记录安装或配置过程时会使用一些名词指代一些操作，在此做一下约定：

- **本仓库中的操作都是在centos7.5的服务器上完成的，读者阅读时要特别注意centos6与centos7的操作还是有很多不一样的地方**
- 统一使用“上传”，指代：使用filezilla工具软件上传到`/opt/package`目录
- 统一使用“解压”，指代：解压到`/opt/unziped`目录

## 1.3. 维护日志

维护日志，是对工具软件整个使用过程中的所产生的操作记录，这有利于对工具软件的日常维护、调优、问题修复与追踪等。

### 1.3.1. 安装类型的维护日志

安装类型的维护日志，是指对一个工具软件的安装、卸载等操作时的记录日志。安装类型的维护日志需要包括以下内容：

- 日志文件名称（file），如：安装Nginx、配置HTTPS、安装jdk、修改Tomcat端口
- 维护时间（datetime），格式为： yyyyMMdd hh:mm
- 维护人姓名（operator），但笔者一般使用汉语拼音简称
- 维护内容（operation），包括：操作命令记录过程

下面是一个例子【例子是基于Hugo作为静态网页生成技术文档结构】，可供读者参考，但并没有严格意义上要求非要这样做：

```
---
file:		install-nginx.md
datetime:	20180621 16:43
operator:	zeanzai
operation:	install nginx
---
# install nginx

## make it ready
balabala

## install dependencies
balabala

## install Nginx
### download and upload
balabala
### release resource
balabala
### config and install
balabala
### start
balabala

## test
balabala

## remark
balabala
```

本仓库的安装类型的文档基本结构如下【即每一篇安装日志文档的文章结构】：

```
# 前言
（主要介绍：应用场景，大概发展历史等。）
（读者在写自己的安装文档时，此部分可以不用记录。）

# 信息统计
（主要介绍：下载地址、软件版本、安装地址、配置文档地址、日志文档地址、占用端口、使用地址、用户信息、测试安装结果、其他有用信息等）

# 安装
（主要介绍：安装依赖、安装步骤、使用命令等）

# 使用
## 配置
（主要介绍：配置文档地址、配置参数含义、配置参数值的含义、修改过程等）

## 调优
（主要介绍：调优过程）

# 问题解决
（主要介绍：安装、配置、调优、使用过程中遇到的一些问题以及问题的解决方案等）

# 参考链接
（主要介绍：参考的一些链接）

```


### 1.3.2. 配置类型的维护日志

配置文件类型的维护日志，是指对工具软件的日常维护过程的记录日志。应该包括以下内容：

- 修改的 起始位置 ，以 `<-- start`为标志
- 修改的 结束位置 ，以`end -->`为标志
- 修改的时间、姓名、标题，放到一行

> 注意：<br/>
> 1. 使用`<-- start` 和 `end -->`包裹起来的文本块为本次修改的内容
> 2. 对所修改的文本块进行注释时，需采用行注释
> 3. 不允许使用中文<br/>

下面是一个例子：

```shell
# <-- start
# www.baidu.com zeanzai 2018-06-22-08:58
server {
    listen       80;
    server_name  www.baidu.com; # domain name

    location / {
        root   html; # document root
        index  index.html index.htm;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}
# end -->
```

## 1.4. 欢迎

欢迎吐槽，也欢迎各种形式的PR和Issue。

## 1.5. 启发

- [Java 程序员眼中的 Linux](https://github.com/judasn/Linux-Tutorial)
- [java-bible](https://github.com/biezhi/java-bible)
- [ops_doc](https://github.com/liquanzhou/ops_doc)

<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />
