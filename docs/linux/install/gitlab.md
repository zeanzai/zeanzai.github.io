---
title: "安装git"
category:
  - "linux"
tag:
  - "install"
---

## 前言

gitlab作为版本控制器被广泛应用，可以看做工作单位自建的GitHub服务器。

## 信息统计

- 下载地址：https://packages.gitlab.com/gitlab/gitlab-ce
- 版本：gitlab-ce-11.5.0-ce.0.el7.x86_64.rpm
- 占用端口：8888
- ng代理端口：8103

## 安装

- 安装依赖

```
$ yum -y install policycoreutils policycoreutils-python openssh-server openssh-clients postfix
```

- 设置postfix开机自启，并启动，postfix支持gitlab发信功能

```
$ systemctl enable postfix && systemctl start postfix
```

- 上传

```
[root@study package]# rpm -ivh gitlab-ce-11.5.0-ce.0.el7.x86_64.rpm
警告：gitlab-ce-11.5.0-ce.0.el7.x86_64.rpm: 头V4 RSA/SHA1 Signature, 密钥 ID f27eab47: NOKEY
准备中...                          ################################# [100%]
正在升级/安装...
   1:gitlab-ce-11.5.0-ce.0.el7        ################################# [100%]
It looks like GitLab has not been configured yet; skipping the upgrade script.

       *.                  *.
      ***                 ***
     *****               *****
    .******             *******
    ********            ********
   ,,,,,,,,,***********,,,,,,,,,
  ,,,,,,,,,,,*********,,,,,,,,,,,
  .,,,,,,,,,,,*******,,,,,,,,,,,,
      ,,,,,,,,,*****,,,,,,,,,.
         ,,,,,,,****,,,,,,
            .,,,***,,,,
                ,*,.



     _______ __  __          __
    / ____(_) /_/ /   ____ _/ /_
   / / __/ / __/ /   / __ `/ __ \
  / /_/ / / /_/ /___/ /_/ / /_/ /
  \____/_/\__/_____/\__,_/_.___/


Thank you for installing GitLab!
GitLab was unable to detect a valid hostname for your instance.
Please configure a URL for your GitLab instance by setting `external_url`
configuration in /etc/gitlab/gitlab.rb file.
Then, you can start your GitLab instance by running the following command:
  sudo gitlab-ctl reconfigure

For a comprehensive list of configuration options please see the Omnibus GitLab readme
https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/README.md

```

- 修改配置文件

```
$ vi /etc/gitlab/gitlab.rb
external_url 'http://192.168.100.200:8888'

// 关闭SMTP，开启postfix
gitlab_rails['smtp_enable'] = false

// 修改额外设置
unicorn['listen'] = '127.0.0.1'
unicorn['port'] = 8001
```

- 开放端口

```
firewall-cmd --zone=public --add-port=8888/tcp --permanent
firewall-cmd --reload
```

- 重置并重启

```
$ gitlab-ctl reconfigure
$ gitlab-ctl restart
```

- 浏览器中输入

```
http://{ip}:8888
```

- 用户管理

直接点击创建用户，创建完用户后，使用终端，对创建的用户进行激活

```
[root@home packages]# gitlab-rails console
--------------------------------------------------------------------------------
 Ruby:         ruby 2.7.2p137 (2020-10-01 revision 5445e04352) [x86_64-linux]
 GitLab:       14.0.0 (f1926d2aa64) FOSS
 GitLab Shell: 13.19.0
 PostgreSQL:   12.6
--------------------------------------------------------------------------------
Loading production environment (Rails 6.1.3.2)
irb(main):001:0> user = User.find_by_username("zeanzai")
=> #<User id:2 @zeanzai>
irb(main):002:0> user.state = "active"
=> "active"
irb(main):003:0> user.save
=> true
irb(main):004:0> exit

```

## 问题解决

- 错误消息： 502错误！

- 原因1：日志文件没有权限

解决步骤：Gitlab文件需要给予读写的权限 `chmod -R 755 /var/log/gitlab`

- 原因2：端口冲突

解决步骤：Gitlab的默认启动端口是80,8080，所以有肯能会与其他的端口产生冲突，所以需要修改文件 `vi /etc/gitlab/gitlab.rb`

```
unicorn['listen'] = '127.0.0.1'
unicorn['port'] = 8001    # 为unicorn worker的工作端口，默认为8080，如果你的8080端口被占用的，这一项需要更改。

$ gitlab-ctl reconfigure
$ gitlab-ctl restart
```

- 原因3：内存不足

解决步骤：安装gitlab的时候，已经说明你的空余内存需要有4G左右的内存，所以在安装gitlab的时候，请给足内存，在安装。

## 参考链接

1. http://www.mamicode.com/info-detail-2317465.html
<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />
