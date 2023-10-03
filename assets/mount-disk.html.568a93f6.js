import{r as a,c as s,a as n,b as t,F as r,e as l,d as o,o as d}from"./app.a4992776.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=l(`<h2 id="_1-\u6302\u8F7Dntfs\u786C\u76D8" tabindex="-1"><a class="header-anchor" href="#_1-\u6302\u8F7Dntfs\u786C\u76D8" aria-hidden="true">#</a> 1. \u6302\u8F7DNTFS\u786C\u76D8</h2><p>\u7531\u4E8E\u5BB6\u91CC\u7684\u7535\u8111\u539F\u6765\u88C5\u7684\u662Fwindows \u7CFB\u7EDF\uFF0C\u5E76\u4E14\u6211\u81EA\u5DF1\u6269\u5C55\u4E86\u4E24\u5757\u786C\u76D8\uFF0C\u539F\u6765Windows\u7CFB\u7EDF\u65F6\uFF0C\u4E24\u5757\u786C\u76D8\u53EF\u4EE5\u6B63\u5E38\u8BFB\u5199\uFF0C\u4F46\u662F\u5728\u7269\u7406\u673A\u4E0A\u9762\u5B89\u88C5\u4E0Acentos7.5\u4EE5\u540E\uFF0C\u7531\u4E8E\u53EA\u662F\u683C\u5F0F\u5316c\u76D8\uFF0C\u628Acentos7.5\u7CFB\u7EDF\u5B89\u88C5\u5230\u4E86c\u76D8\uFF0C\u6240\u4EE5\u4E4B\u524D\u81EA\u5DF1\u6269\u5C55\u7684\u4E24\u5757\u786C\u76D8\u5C31\u65E0\u6CD5\u6B63\u5E38\u8BFB\u5199\u4E86\uFF0C\u6B64\u65F6\uFF0C\u9700\u8981\u5728centos\u7CFB\u7EDF\u4E0A\u8BFB\u5199\u4E24\u5757\u786C\u76D8\u5185\u5BB9\uFF0C\u9700\u8981\u600E\u4E48\u5904\u7406\u5462\uFF1F\u4E0B\u9762\u7ED9\u51FA\u89E3\u51B3\u65B9\u6848\u3002</p><h3 id="_1-1-\u5B89\u88C5\u4F9D\u8D56\u5305" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5B89\u88C5\u4F9D\u8D56\u5305" aria-hidden="true">#</a> 1.1. \u5B89\u88C5\u4F9D\u8D56\u5305</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum install -y fuse ntfs-3g
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_1-2-\u6302\u8F7D\u786C\u76D8" tabindex="-1"><a class="header-anchor" href="#_1-2-\u6302\u8F7D\u786C\u76D8" aria-hidden="true">#</a> 1.2. \u6302\u8F7D\u786C\u76D8</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@home data]# mkdir -p /mnt/data/d /mnt/data/e

[root@home data]# lsblk -f
NAME                 FSTYPE      LABEL    UUID                                   MOUNTPOINT
sda
\u251C\u2500sda1               vfat                 B476-53D1                              /boot/efi
\u251C\u2500sda2               xfs                  cd9c42b2-dafc-40dc-a780-28e8b5ed453a   /boot
\u2514\u2500sda3               LVM2_member          pue3cy-Bdmo-txbs-f7vS-3Oef-78zY-ACq296
  \u251C\u2500centos_home-root xfs                  a1c1e8bc-3a27-47b6-a2aa-f329e4b77e86   /
  \u251C\u2500centos_home-swap swap                 4ff247c5-07b8-4143-93bc-1496ac3a7162   [SWAP]
  \u2514\u2500centos_home-home xfs                  2d5c8133-4174-4689-906a-62c316aa6839   /home
sdb
\u2514\u2500sdb1               ntfs        Software 90769AF9769ADEF2
sdc
\u251C\u2500sdc1
\u2514\u2500sdc2               ntfs        Zeanzai  D4947D40947D25E0

[root@home data]# mount /dev/sdb1 /mnt/data/d
[root@home data]# mount /dev/sdc2 /mnt/data/e

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="_1-3-\u81EA\u52A8\u6302\u8F7D" tabindex="-1"><a class="header-anchor" href="#_1-3-\u81EA\u52A8\u6302\u8F7D" aria-hidden="true">#</a> 1.3. \u81EA\u52A8\u6302\u8F7D</h3><p>\u5982\u679C\u9700\u8981\u6C38\u4E45\u6302\u8F7D\uFF0C\u5148\u67E5\u5230\u8BE5\u76D8\u7684type\u503C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
[root@home ~]# blkid
/dev/mapper/centos_home-root: UUID=&quot;a1c1e8bc-3a27-47b6-a2aa-f329e4b77e86&quot; TYPE=&quot;xfs&quot;
/dev/sda3: UUID=&quot;pue3cy-Bdmo-txbs-f7vS-3Oef-78zY-ACq296&quot; TYPE=&quot;LVM2_member&quot; PARTUUID=&quot;3f965157-bb9c-49b5-9aeb-20726f024e6f&quot;
/dev/sdb1: LABEL=&quot;Software&quot; UUID=&quot;90769AF9769ADEF2&quot; TYPE=&quot;ntfs&quot; PARTLABEL=&quot;Basic data partition&quot; PARTUUID=&quot;8ba8c6a7-4a88-47d2-b94e-97d2d97a144e&quot;
/dev/sdc1: PARTLABEL=&quot;Microsoft reserved partition&quot; PARTUUID=&quot;6207f65b-8b11-46bd-bd4a-d14f2d5a0c6e&quot;
/dev/sdc2: LABEL=&quot;Zeanzai&quot; UUID=&quot;D4947D40947D25E0&quot; TYPE=&quot;ntfs&quot; PARTLABEL=&quot;Basic data partition&quot; PARTUUID=&quot;3220d24a-a508-4dfb-af5e-ae2a749c9d9f&quot;
/dev/sda1: SEC_TYPE=&quot;msdos&quot; UUID=&quot;B476-53D1&quot; TYPE=&quot;vfat&quot; PARTLABEL=&quot;EFI System Partition&quot; PARTUUID=&quot;82eac0f4-625e-4b70-80c7-221bee59c290&quot;
/dev/sda2: UUID=&quot;cd9c42b2-dafc-40dc-a780-28e8b5ed453a&quot; TYPE=&quot;xfs&quot; PARTUUID=&quot;1075528c-e57e-4734-a6c9-74a798184fcb&quot;
/dev/mapper/centos_home-swap: UUID=&quot;4ff247c5-07b8-4143-93bc-1496ac3a7162&quot; TYPE=&quot;swap&quot;
/dev/mapper/centos_home-home: UUID=&quot;2d5c8133-4174-4689-906a-62c316aa6839&quot; TYPE=&quot;xfs&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5728\u6700\u4E0B\u9762\u6DFB\u52A0\u4E24\u884C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
#
# /etc/fstab
# Created by anaconda on Sun Jun 27 13:23:19 2021
#
# Accessible filesystems, by reference, are maintained under &#39;/dev/disk&#39;
# See man pages fstab(5), findfs(8), mount(8) and/or blkid(8) for more info
#
/dev/mapper/centos_home-root /                       xfs     defaults        0 0
UUID=cd9c42b2-dafc-40dc-a780-28e8b5ed453a /boot                   xfs     defaults        0 0
UUID=B476-53D1          /boot/efi               vfat    umask=0077,shortname=winnt 0 0
/dev/mapper/centos_home-home /home                   xfs     defaults        0 0
/dev/mapper/centos_home-swap swap                    swap    defaults        0 0

/dev/sdb1 /mnt/data/d           ntfs defaults 0 0
/dev/sdc2 /mnt/data/e           ntfs defaults 0 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u6CE8\u610F\u662Fntfs\uFF0C\u4E0D\u662F\u5176\u4ED6\u3002</p><p>\u5982\u679C\u9047\u5230\u65E0\u6CD5\u6B63\u5E38\u542F\u52A8\u65F6\uFF0C\u53EF\u4EE5\u53C2\u8003 https://blog.csdn.net/weixin_34401479/article/details/94316392</p><h3 id="_1-4-\u5176\u5B83\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_1-4-\u5176\u5B83\u547D\u4EE4" aria-hidden="true">#</a> 1.4. \u5176\u5B83\u547D\u4EE4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u67E5\u770B\u6240\u6709\u78C1\u76D8\u7684\u5206\u533A\u60C5\u51B5
fdisk -l

# \u5378\u8F7D
umount /dev/sdd1

# \u67E5\u770B\u5DF2\u6302\u8F7D\u78C1\u76D8\u4F7F\u7528\u60C5\u51B5
df -h
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_1-5-\u6302\u8F7D-exfat-\u78C1\u76D8\u9A71\u52A8\u5668" tabindex="-1"><a class="header-anchor" href="#_1-5-\u6302\u8F7D-exfat-\u78C1\u76D8\u9A71\u52A8\u5668" aria-hidden="true">#</a> 1.5. \u6302\u8F7D exFat \u78C1\u76D8\u9A71\u52A8\u5668</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum install epel-release
rpm -v --import http://li.nux.ro/download/nux/RPM-GPG-KEY-nux.ro
rpm -Uvh http://li.nux.ro/download/nux/dextop/el7/x86_64/nux-dextop-release-0-5.el7.nux.noarch.rpm
yum install exfat-utils fuse-exfat


[root@home data]# mount -t exfat /dev/sdd1 /mnt/data/f
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_1-6-\u53C2\u8003\u6587\u7AE0\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#_1-6-\u53C2\u8003\u6587\u7AE0\u5217\u8868" aria-hidden="true">#</a> 1.6. \u53C2\u8003\u6587\u7AE0\u5217\u8868\uFF1A</h3>`,18),p=n("li",null,[n("p",null,"https://cloud.tencent.com/developer/article/1566968")],-1),b=n("li",null,[n("p",null,"https://www.cnblogs.com/jhxxb/p/11157315.html")],-1),m={href:"https://cloud.tencent.com/developer/article/1626805",target:"_blank",rel:"noopener noreferrer"},h=o("\u5982\u4F55\u5728 CentOS 7 \u4E0A\u6302\u8F7D\u4E00\u4E2A exFAT \u78C1\u76D8\u9A71\u52A8\u5668"),f=n("hr",null,null,-1),x=n("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:"https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg",alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,-1);function q(_,v){const e=a("ExternalLinkIcon");return d(),s(r,null,[i,n("ol",null,[p,b,n("li",null,[n("p",null,[n("a",m,[h,t(e)])])])]),f,x],64)}var D=c(u,[["render",q],["__file","mount-disk.html.vue"]]);export{D as default};
