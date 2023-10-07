---
"title": "mac上配置GitHub和Gitee同时访问"
category:
  - "devenv"
tag:
  - "mac"
---

## 想要的效果

想要的效果是，使用同一个ssh-key，来完成github的配置和gitee的配置内容，这里需要把Gitee的用户名和邮箱设置成与GitHub一样，只有这样使用同一套sshkey才没有问题，并且全局配置对两个网站才能够都生效。

## 环境配置

```
➜  zeanzai.github.io git:(master) ✗ git --version
git version 2.30.1 (Apple Git-130)
➜  zeanzai.github.io git:(master) ✗ sw_vers
ProductName:            macOS
ProductVersion:         14.0
BuildVersion:           23A344
```

## 修改全局配置

```
➜  git config --global user.name "zeanzai"
➜  git config --global user.email "zeanzai.me@gmail.com"
```

## 生成sshkey

```
➜  ssh-keygen -t ed25519 -C "zeanzai.me@gmail.com"
```

## 将 SSH 密钥添加到 ssh-agent

```
➜  .ssh touch ~/.ssh/config
➜  .ssh vi config 

Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519
```

## 磁盘实例化 ssh

```
➜  .ssh ssh-add -K ~/.ssh/id_ed25519
WARNING: The -K and -A flags are deprecated and have been replaced
         by the --apple-use-keychain and --apple-load-keychain
         flags, respectively.  To suppress this warning, set the
         environment variable APPLE_SSH_ADD_BEHAVIOR as described in
         the ssh-add(1) manual page.
Identity added: /Users/shawnwang/.ssh/id_ed25519 (zeanzai.me@gmail.com)
➜  .ssh git config --global credential.helper store
```

## 配置公钥信息

把公钥文件中的内容添加到GitHub的ssh列表中，Gitee的ssh列表中。

## 验证github

```
➜  .ssh ssh -T git@github.com
Hi zeanzai! You've successfully authenticated, but GitHub does not provide shell access.


// 克隆一个仓库
// 修改其中一个文件夹
// 添加到暂存区
// 提交
// 推送到远程
```

> 注意这里必须使用 git 用户

## 验证gitee

```
➜  .ssh ssh -T git@gitee.com
The authenticity of host 'gitee.com (212.64.63.190)' can't be established.
ED25519 key fingerprint is SHA256:+ULzij2u99B9eWYFTw1Q4ErYG/aepHLbu96PAUCoV88.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added 'gitee.com' (ED25519) to the list of known hosts.
Hi zeanzai! You've successfully authenticated, but GITEE.COM does not provide shell access.


// 克隆一个仓库
// 修改其中一个文件夹
// 添加到暂存区
// 提交
// 推送到远程
```

## 参考

1. [MACOS 安装配置 GIT](https://blog.csdn.net/HelloYoungr/article/details/118093921)
2. [Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/cn/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

---

<br /><br /><br />
<img style="border:1px red solid; display:block; margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="微信公众号" />


