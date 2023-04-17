---
"title": "程序员如何打造自己的个人IP？"
category:
  - "slashteen"
tag:
  - "web"
---


## 影响力

最近对一句话特别有感触，`努力只是决定了一个人的下限，影响力才决定一个人的上限`。由于最近这几年疫情的原因，新媒体行业可谓是如火如荼。我就在想程序员在这个环境下应该如何“顺势而为”？

22年，我有了一段非常长的自由时间，我想应该解决一下上面这个问题了，于是我开始了自己的摸索。

## 开干

本篇文章主要记录一下笔者个人的实践摸索过程。

### 搭建个人网站


由于我是后端开发，工作中很少接触前端的知识，所以最好有一个自动生成工具，帮我生成网站的框架，我只需要写对应的文章就行。于是我开始网上搜索之路，我查找了很多资料，最后定下来的有两个：Hugo和Vuepress，当然也有其他的，比如GitHub Pages官方支持的Jelly、Hexo等。在众多工具选型中，我敲定Hugo和Vuepress，主要是因为最近这几年云原生的Go语言比较火，并且现在大多数Web端网站用的多是前后端分离的技术框架，而大多数前端都是Vue的框架。

敲定这两个工具（暂且称为工具吧）后，我本着程序员的“严谨”作风，认真地开始了真正的技术选型之路。主要衡量的标准是这两个工具支持的主题、开发的模式、可自定义的配置信息。





生成静态网站，并上传到GitHub上，对比网上很多开源的静态资源生成工具，最后选择 hugo ，原因有很多，社区活跃度高、版本更新快、主题丰富、指导文档多；
设置GitHub Page服务，本地生成好个人网站后，把整个目录上传到GitHub上。这里有多种方式，一种是把文章内容和生成的静态网站分别放到不同的仓库中；一种是直接一股脑儿把所有的文件放到同一个仓库内，但是需要把public目录单独放到一个分支上；当然，如果不想把文章也开源出去，也可以只把public目录上传到GitHub上；放到GitHub上之后，需要对仓库做一些设置，具体操作可以自行百度查阅；


### 微信公众号

最主要是编辑工具。

### 其他平台



## 写作平台的搭建

vscode+picgo+阿里云的OSS+GitHub+MDnice+canva

## 写作的流程

## 总结

1. 

​
本篇文章，主要介绍个人网站的搭建、文章的书写和发布、文章的引流等相关内容。即搭建一个个人网站，定期把自己写的文章发布到个人网站上，然后并把文章同步发表到各个引流渠道上，然后把流量都导流到微信公众号上。但是本文并不会涉及到具体的操作，只是把主要的操作过程做下记录。

## 准备工作

申请域名： 申请域名有很多个平台，我们选择一个域名主要考虑的影响因素应该就只有域名是否好记、 是否已经被使用和域名的价格。常用的国内域名提供上有阿里云、腾讯云、华为云，国际知名的有godaddy。我这里使用的是godaddy。自己先想象一个域名，然后去到这个网站上查看是否已经被申请。直到找到一个自己喜欢的域名，然后像购买商品一样点击“购买”即可。

GitHub账号： 略。

挑选静态网站生成工具：我们选择的静态网站生成工具为hugo；为了更方便的使用hugo命令，我们可以把hugo命令放到环境变量中。

写作台： vscode + markdown add index插件

## 个人网站

网站搭建


域名解析。大概思路是，首先需要知道github的官网地址，然后去godaddy上面，在域名解析服务中完成设置，还需要在public中放一个cname文件；

发布文章。完成以上步骤之后，就可以在本地写一篇文章，整个流程跑一遍；

定时任务。提交上传等操作都是重复性的工作，重复性的工作，我们就需要机器来完成，这里我们是使用mac的定时器任务。具体方式如下。

SEO优化。

## 微信公众号

注册微信公众号
添加自定义菜单： 包括历史文章、与我联系（商务合作、进群交流、申请转载）、面试资料（面经、简历模板、）
添加自动回复： 当用户回复什么关键字时，然后发送对应的回复语给用户。
添加关注语回复：当用户点击关注时，自动回复一条信息。
这里推荐程序员使用的微信公众号排版工具：


墨滴 | 看颜值的文章社区

## 引流

引流
知乎
CSDN
简书

## 后续写文章的步骤

后期写文章的步骤
使用vscode写markdown文章，由定时任务直接发布到github上，并完成部署；
可以直接把个人网站的展示内容粘贴到微信公众号，这样可以解决图片的问题；
知乎、CSDN和简书各自发布一遍

## 附录

配置hugo的环境变量

```shell
$ vi ~/.zprofile
export MAVEN_HOME=/Users/shawnwang/Develop/apache-maven-3.6.3
export HUGO_HOME=/Users/shawnwang/Develop/hugo_0.48_macOS-64bit
export FFMPEG_HOME=/Users/shawnwang/Develop/ffmpeg4.4.1

export PATH=$PATH:$MAVEN_HOME/bin:$HUGO_HOME:$FFMPEG_HOME/bin
```

设置定时任务
这里着重介绍一下，mac下的定时任务的使用。

~/Library/LaunchAgents ：由用户自己定义的任务项
/Library/LaunchAgents ：由管理员为用户定义的任务项
/Library/LaunchDaemons ：由管理员定义的守护进程任务项
/System/Library/LaunchAgents ：由Mac OS X为用户定义的任务项
/System/Library/LaunchDaemons ：由Mac OS X定义的守护进程任务项
这里我们把定时任务的脚本文件放到 /Library/LaunchDaemons 目录下面。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <!-- Label唯一的标识 -->
  <key>Label</key>

  <!-- 与文件名保持一致 -->
  <string>com.zeanzai.github.committer.plist</string>

  <!-- 指定要运行的脚本 -->
  <key>ProgramArguments</key>
  <array>
    <string>/Users/shawnwang/Documents/Source/github/zeanzai.me/deploy.sh</string>
    <string>timer-commit</string>
  </array>
  
  <!-- 指定要运行的时间 -->
  <key>StartCalendarInterval</key>
  <dict>
        <key>Minute</key>
        <integer>10</integer>
        <key>Hour</key>
        <integer>10</integer>
  </dict>

<!-- 标准输出文件 -->
<key>StandardOutPath</key>
<string>/Users/shawnwang/Documents/Source/github/logs/timer-commit.log</string>

<!-- 标准错误输出文件，错误日志 -->
<key>StandardErrorPath</key>
<string>/Users/shawnwang/Documents/Source/github/logs/timer-commit.err</string>
</dict>
</plist>
```

脚本编写完成之后，需要立即执行一下查看脚本是否运行正常。


$ launchctl load com.zeanzai.github.committer.plist
$ launchctl start com.zeanzai.github.committer.plist

如果需要修改这个文件，那需要先执行 unload 命令，然后在执行修改。

​



---

<img style="border:1px red solid; display:block; margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="微信公众号" />



