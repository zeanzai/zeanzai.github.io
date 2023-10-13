---
"title": "mac m1芯片 破解 idea 2023.2.2"
category:
  - "devenv"
tag:
  - "mac"
---

1. [参考这里](https://www.quanxiaoha.com/idea-pojie/idea-pojie-20232.html)
2. 在执行破解脚本的过程中可能会遇到

![20231004010950](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20231004010950.png)

解决思路是：

关闭mac，并等到所有的指示灯都已关闭，然后按住电源键10s以上，之后在菜单选项中选择终端，输入命令：
```
csrutil status 
csrutil disable
```
之后重启电脑。

之后执行破解脚本，执行时，需要先执行： 

```
export LC_COLLATE='C'
export LC_CTYPE='C'
```

然后再按照教程里面的执行对应的脚本即可。

3. 最后需要开启 系统完整性保护 模式。
```
csrutil enable 
```

4. 再次重启，使用`csrutil status `查看是否已经开启。


---

<br /><br /><br />
<img style="border:1px red solid; display:block; margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="微信公众号" />


