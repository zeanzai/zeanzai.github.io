---
home: true
icon: home
title: 关于我
# heroImage: /logo.svg
# heroText: 项目名称
# tagline: 你可以在这里放置或是整个项目的描述。
# actions:
#   - text: 使用指南 💡
#     link: /zh/guide/

#   - text: 博客主页 🏠
#     link: /zh/
#     type: secondary

# features:
#   - title: Markdown 增强
#     icon: markdown
#     details: 新增文字对齐、上下角标、脚注、标记、任务列表、数学公式、流程图、图表与幻灯片支持
#     link: https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/
# copyright: false
# footer: Copyright © 2018-present zeanzai
---

# 1. 关于我

你好，陌生人。

天晴小猪是我的笔名，zeanzai 是我的ID。这两个名字来源于矢玉四郎原作儿童文学作品改编的动画片。

*小学三年级学生则安，无意中发现自己的日记被偷看了，他就开始写明天日记，因为明天还没来，不知道会发生什么事情，所以被偷看也没关系。之后明天日记实现了，实现则安写的“晴天下猪”，最后则安把日记擦掉，世界才恢复原来的样子，可是还有一只小猪没回去，则安将它养在家里，给他取了个名字叫：“晴天小猪”。它是从外星王国来到地球的小猪，不但机灵可爱，而且拥有一种特异功能，将则安各种各样的想法变成现实。它拥有神奇超能的力量，帮则安、家人和朋友解决了许多问题，并带来了好多有趣的事情，带给他们无尽的欢乐，以及胆量、勇气和知识的增长……*

我把这部动画片中的晴天小猪改动了一下，变成了现在的[天晴小猪](https://zeanzai.me)。

**<h6>我希望自己能够像则安一样不断的梦想，又希望自己像晴天小猪一样把则安的梦想变成现实。</h6>**


## 1.1. 出没地

我是一个一点都不安分的90后，也常常想：生活应该怎么过？人生应该朝哪个方向前进？


# 2. 程序员如何打造自己的个人IP？


本篇文章，主要介绍个人网站的搭建、文章的书写和发布、文章的引流等相关内容。即搭建一个个人网站，定期把自己写的文章发布到个人网站上，然后并把文章同步发表到各个引流渠道上，然后把流量都导流到微信公众号上。但是本文并不会涉及到具体的操作，只是把主要的操作过程做下记录。

## 2.1. 准备工作

- 申请域名： 申请域名有很多个平台，我们选择一个域名主要考虑的影响因素应该就只有`域名是否好记`、 `是否已经被使用`和`域名的价格`。常用的国内域名提供上有阿里云、腾讯云、华为云，国际知名的有godaddy。我这里使用的是godaddy。自己先想象一个域名，然后去到这个网站上查看是否已经被申请。
<div style="border:1px solid black">![查看是否已经被申请](/img/dev/personalip/001.png)</div>
直到找到一个自己喜欢的域名，然后像购买商品一样点击“购买”即可。
- GitHub账号： 略。
- 挑选静态网站生成工具：我们选择的静态网站生成工具为hugo；为了更方便的使用hugo命令，我们可以把hugo命令放到环境变量中。
- 写作台： vscode + markdown add index插件

## 2.2. 个人网站

- 生成静态网站，并上传到GitHub上，对比网上很多开源的静态资源生成工具，最后选择 hugo ，原因有很多，社区活跃度高、版本更新快、主题丰富、指导文档多；
- 设置GitHub Page服务，本地生成好个人网站后，把整个目录上传到GitHub上。这里有多种方式，一种是把文章内容和生成的静态网站分别放到不同的仓库中；一种是直接一股脑儿把所有的文件放到同一个仓库内，但是需要把public目录单独放到一个分支上；当然，如果不想把文章也开源出去，也可以只把public目录上传到GitHub上；放到GitHub上之后，需要对仓库做一些设置，具体操作可以自行百度查阅；
- 域名解析。大概思路是，首先需要知道github的官网地址，然后去godaddy上面，在域名解析服务中完成设置，还需要在public中放一个cname文件；
- 发布文章。完成以上步骤之后，就可以在本地写一篇文章，整个流程跑一遍；
- 定时任务。提交上传等操作都是重复性的工作，重复性的工作，我们就需要机器来完成，这里我们是使用mac的定时器任务。具体方式如下。


## 2.3. 微信公众号

- 注册微信公众号
  - 添加自定义菜单： 包括历史文章、与我联系（商务合作、进群交流、申请转载）、面试资料（面经、简历模板、）
  - 添加自动回复： 当用户回复什么关键字时，然后发送对应的回复语给用户。
  - 添加关注语回复：当用户点击关注时，自动回复一条信息。

这里推荐程序员使用的微信公众号排版工具：

http://md.aclickall.com/

https://mdnice.com/

## 2.4. 引流

- 引流
  - 知乎
  - CSDN
  - 简书



## 2.5. 后续写文章的步骤

- 后期写文章的步骤
  - 使用vscode写markdown文章，由定时任务直接发布到github上，并完成部署；
  - 可以直接把个人网站的展示内容粘贴到微信公众号，这样可以解决图片的问题；
  - 知乎、CSDN和简书各自发布一遍



## 2.6. 附录

- 配置hugo的环境变量

```
$ vi ~/.zprofile
export MAVEN_HOME=/Users/shawnwang/Develop/apache-maven-3.6.3
export HUGO_HOME=/Users/shawnwang/Develop/hugo_0.48_macOS-64bit
export FFMPEG_HOME=/Users/shawnwang/Develop/ffmpeg4.4.1

export PATH=$PATH:$MAVEN_HOME/bin:$HUGO_HOME:$FFMPEG_HOME/bin
```

---

- 设置定时任务

这里着重介绍一下，mac下的定时任务的使用。

```
~/Library/LaunchAgents ：由用户自己定义的任务项
/Library/LaunchAgents ：由管理员为用户定义的任务项
/Library/LaunchDaemons ：由管理员定义的守护进程任务项
/System/Library/LaunchAgents ：由Mac OS X为用户定义的任务项
/System/Library/LaunchDaemons ：由Mac OS X定义的守护进程任务项
```

这里我们把定时任务的脚本文件放到 /Library/LaunchDaemons 目录下面。

```
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

```
$ launchctl load com.zeanzai.github.committer.plist
$ launchctl start com.zeanzai.github.committer.plist
```

如果需要修改这个文件，那需要先执行 unload 命令，然后在执行修改。

---


```
<span id="busuanzi_container_site_pv" style='display:none'>
    👀 本站总访问量：<span id="busuanzi_value_site_pv"></span> 次
</span>
<span id="busuanzi_container_site_uv" style='display:none'>
    | 🚴‍♂️ 本站总访客数：<span id="busuanzi_value_site_uv"></span> 人
</span>
```










---

<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />

