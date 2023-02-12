---
title: "jenkins使用问题"
category:
  - "linux"
tag:
  - "software"
---

## 1. 问题复现

添加私服后，自动化部署不成功，找到构建日志后，发现有一些依赖包无法下载，提示没有权限等问题。

## 2. 解决方案

1. 修改了服务器上面的maven的setting.xml文件；
2. 将仓库的权限修改为777（`chmod 777 -R /opt/repository`）

---

## 3. 问题复现

完成上面的操作之后还是出现很多问题。

## 4. 解决方案

如果上述问题还是没有解决好，可以先在jenkins中执行`clean compile`命令，执行成功之后，再把原来的配置还原就可以解决。
<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />
