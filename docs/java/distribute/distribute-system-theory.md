---
title: "分布式系统概论"
category:
  - "distribute"
tag:
  - "readme"
---

## 提纲


总的思路： 类比计算机操作系统和组成原理去分析分布式系统。说白了分布式系统就是一个大型的计算机操作系统。

什么是分布式系统

分布式系统具有什么特点

包括哪些内容

基本原理
    - CAP
    - BASE
    - 出现的问题
    - 
    - 算法


```
Martin 表示，一个分布式系统，更像一个复杂的「野兽」，存在着你想不到的各种异常情况。

这些异常场景主要包括三大块，这也是分布式系统会遇到的三座大山：NPC。

N：Network Delay，网络延迟
P：Process Pause，进程暂停（GC）
C：Clock Drift，时钟漂移
```

## 参考

- [Redis分布式锁到底安全吗？](https://mp.weixin.qq.com/s/RnSokJxYxYDeenOP_JE3fQ)

<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />
