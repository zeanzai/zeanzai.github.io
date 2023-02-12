---
title: "文章编辑规范"
category:
  - "slashteen"
tag:
  - "server"
---

我有两台电脑，一个台式机，一个笔记本，平时上班的时候拿着笔记本去公司，很少拿回家。写文章呢，有时候会在家里面写，有时候会在公司写，因此需要协同工作。所以给文章制定一些编辑规范，有利于文章的整理。

此外，也便于读者阅读，有一种美观的感觉。

## 1. 文章路径

- 文章目录是规划好的
  - 能控制文章所在位置，后期不会乱
  - 把相同的文章放到同一个文件夹内，有助于文章的分类
- 文章目录都需要 icon 
- 每一目录下面都有一个readme文件，这个文件中可以放对此文件目录的一些说明内容


## 2. 文章内容

- 文章的formatterfont样例
  ```
  ---
  title: "${文章标题}"
  category:
    - "${所在的根目录的名称}"
  tag:
    - "${所在文件夹的名称}"
  ---
  ```
- formatterfont
  - 顶行写，就是三个横线要从第一行开始，否则编译报错
  - category 为所在的根目录的名称
  - tag 为所在文件夹的名称
  - 所有的文章统一不放 icon 
  - readme统一不放 tag
- 加密文件
  - 具体配置放到 config 中去配置
- 文章的内容中的标题要从二级标题开始
- 文章的标题统一使用数字进行标注

## 3. 图片

- 放到每一个文件所在的根目录下面的同名子文件夹内
  - 比如文章路径是/linux/install/install-mysql.md，则该文章中用到的图片的路径就是/linux/img/install-mysql。

## 4. 前导词

```
> 本文首发于微信公众号：天晴小猪（WeChatID： zeanzai-me），获取更多内容可以扫描文章底部的二维码进行关注。
```

## 5. 文末二维码

```
<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />
```

## 5. 引入

```
::: tip
关于 `xxxx` 请参考笔者的另外一篇文章： [xxx](../xxx.md)。获取更多内容可以关注笔者微信公众号：天晴小猪（WeChatID： `zeanzai-me`），也可以扫描文章底部的二维码进行关注。
:::
```


<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />
