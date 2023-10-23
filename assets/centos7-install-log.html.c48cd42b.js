import{r as l,c as i,a as n,b as r,F as t,d as s,e,o}from"./app.4650a50d.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const p={},d=n("h2",{id:"\u5B89\u88C5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5B89\u88C5","aria-hidden":"true"},"#"),s(" \u5B89\u88C5")],-1),b=n("li",null,"\u5728window\u5E73\u53F0\u4E0A\u5236\u4F5Clinux\u542F\u52A8\u76D8\uFF1B",-1),u=s("\u63D2\u5165\u542F\u52A8\u76D8\uFF0C\u5F00\u673A\u540Ef12\u8FDB\u5165BIOS\uFF0C\u7136\u540E\u627E\u5230\u542F\u52A8\u76D8\u8FDB\u5165\u5B89\u88C5\u9875\u9762 "),m=n("li",null,"\u300C\u7531\u4E8E\u5728windows\u4E0A\u4F7F\u7528UltralIOS\u5DE5\u5177\u523B\u5F55\u542F\u52A8\u76D8\uFF0C\u56E0\u6B64\u76D8\u7B26\u540D\u79F0\u5E76\u6CA1\u6709\u663E\u793A\u5B8C\u5168\uFF0C\u6240\u4EE5\u5728\u542F\u52A8\u65F6\u4F1A\u51FA\u73B0\u95EE\u9898\u3002\u300D",-1),h=n("li",null,"\u6240\u4EE5\uFF0C\u5728\u8FDB\u5165\u5B89\u88C5\u9875\u9762\u540E\u9700\u8981\u8FC5\u901F\u6309\u4E0B\u952E\u76D8TAB\u952E\uFF0C\u5C06\u6700\u4E0B\u9762\u7684vmlinuz initrd=initrd.img inst.stage2=hd:LABEL=CentOS\\x207\\x20x86_64 rd.live.check quiet \u6539\u4E3A vmlinuz initrd=initrd.img linux dd quiet\uFF0C\u7136\u540E\u952E\u5165\u56DE\u8F66\u67E5\u770B\u8BBE\u5907\u540D",-1),g=n("li",null,"\u4E4B\u540E\u627E\u5230\u542F\u52A8\u76D8\u76D8\u7B26\uFF0C\u518D ctrl+alt+delete \u91CD\u542F\uFF0C\u91CD\u65B0\u8FDB\u5165\u542F\u52A8\u9875\u9762\uFF0C\u9009\u62E9 install \u9009\u9879\u540E\u6309\u4E0BTAB\u952E\uFF0C\u7136\u540E\u628Avmlinuz initrd=initrd.img inst.stage2=hd:LABEL=CentOS\\x207\\x20x86_64 rd.live.check quiet \u6539\u4E3A vmlinuz initrd=initrd.img inst.stage2=hd:/dev/sda4 quiet ps\uFF1Asda4\u5C31\u662F\u4F60\u770B\u5230\u7684\u542F\u52A8\u76D8\u540D\u79F0",-1),x=s("\u53C2\u8003"),_={href:"https://www.cnblogs.com/wutao666/p/10700158.html",target:"_blank",rel:"noopener noreferrer"},v=s("\u8FD9\u91CC"),k=e("<li>\u5B89\u88C5\u65F6 <ul><li>a. \u8BBE\u7F6E\u4E3B\u673A\u540D\uFF1A home.centos</li><li>b. root root1003</li><li>c. \u8BBE\u7F6E\u7F51\u7EDC\uFF1A <ul><li>\u2170. ip: 192.168.1.150</li><li>\u2171. \u63A9\u7801\uFF1A 24</li><li>\u2172. \u7F51\u5173\uFF1A 192.168.1.1</li></ul></li><li>d. \u672A\u8BBE\u7F6E\u65F6\u533A</li></ul></li><li>\u62D4\u6389u\u76D8\uFF0C\u91CD\u65B0\u542F\u52A8\u7535\u8111</li><li>\u8F93\u5165\u7528\u6237\u540D\u5BC6\u7801\u540E\uFF0Cping baidu.com</li>",3),f=e(`<h2 id="mac\u4E0A\u514D\u5BC6\u767B\u9646" tabindex="-1"><a class="header-anchor" href="#mac\u4E0A\u514D\u5BC6\u767B\u9646" aria-hidden="true">#</a> mac\u4E0A\u514D\u5BC6\u767B\u9646</h2><ul><li>\u5728mac\u4E0A\u5148\u79FB\u9664.ssh/known_hosts\uFF0C\u6216\u6539\u6587\u4EF6\u540D\uFF0C\u4E4B\u540E\u6267\u884C\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u279C  ~ cd .ssh 
\u279C  .ssh ll
total 40
-rw-r--r--  1 shawnwang  staff   196B  5 19 18:31 config
-rw-------  1 shawnwang  staff   411B  2 12  2023 id_ed25519
-rw-r--r--  1 shawnwang  staff   102B  2 12  2023 id_ed25519.pub
-rw-------  1 shawnwang  staff   270B  7 27 22:35 known_hosts
-rw-r--r--  1 shawnwang  staff    95B  7 27 22:35 known_hosts.old
  
\u279C  .ssh ssh-copy-id -i ./id_ed25519.pub root@192.168.1.150
/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: &quot;./id_ed25519.pub&quot;
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
root@192.168.1.150&#39;s password: 

Number of key(s) added:        1

Now try logging into the machine, with:   &quot;ssh &#39;root@192.168.1.150&#39;&quot;
and check to make sure that only the key(s) you wanted were added.

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><ul><li>\u518D\u7136\u540E\u5728mac\u4E0A\u4F7F\u7528\u514D\u5BC6\u767B\u9646</li></ul><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20231007190541.png" alt="20231007190541" loading="lazy"></p><h2 id="\u7CFB\u7EDF\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u7CFB\u7EDF\u4FE1\u606F" aria-hidden="true">#</a> \u7CFB\u7EDF\u4FE1\u606F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@home ~]# hostname
home.centos
[root@home ~]# cat /proc/version
Linux version 3.10.0-1160.71.1.el7.x86_64 (mockbuild@kbuilder.bsys.centos.org) (gcc version 4.8.5 20150623 (Red Hat 4.8.5-44) (GCC) ) #1 SMP Tue Jun 28 15:37:28 UTC 2022
[root@home ~]# uname -a
Linux home.centos 3.10.0-1160.71.1.el7.x86_64 #1 SMP Tue Jun 28 15:37:28 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux
[root@home ~]# lsb_release -a
-bash: lsb_release: \u672A\u627E\u5230\u547D\u4EE4
[root@home ~]# cat /etc/redhat-release
CentOS Linux release 7.9.2009 (Core)

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u4FEE\u6539yum\u6E90" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539yum\u6E90" aria-hidden="true">#</a> \u4FEE\u6539yum\u6E90</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo_bak
curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
yum clean all  &amp;&amp; yum makecache
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u6302\u8F7D\u53E6\u5916\u4E00\u5757ssd\u786C\u76D8" tabindex="-1"><a class="header-anchor" href="#\u6302\u8F7D\u53E6\u5916\u4E00\u5757ssd\u786C\u76D8" aria-hidden="true">#</a> \u6302\u8F7D\u53E6\u5916\u4E00\u5757SSD\u786C\u76D8</h2><p>\u53E6\u5916\u4E00\u5757ssd\u662Fsandisk\u54C1\u724C\u7684\uFF0C\u5B89\u88C5\u8FD9\u4E2A\u670D\u52A1\u5668\u4E4B\u524D\u7684\u64CD\u4F5C\u7CFB\u7EDF\u662Fwindows10\uFF0C\u6240\u4EE5\u8FD9\u5757\u786C\u76D8\u7684\u6587\u4EF6\u7CFB\u7EDF\u683C\u5F0F\u662Fntfs\uFF0C\u7136\u540E\u628A\u8FD9\u5757\u786C\u76D8\u76F4\u63A5\u53D6\u4E0B\u6765\uFF0C\u7136\u540E\u653E\u5230mac\u4E0A\uFF0C\u6267\u884C\u683C\u5F0F\u5316\u3002</p><p>\u4E4B\u540E\u6309\u7167\u4E0B\u9762\u7684\u6307\u5F15\u8FDB\u884C\u6302\u8F7D\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>zeanzai.github.io git:(master) \u2717 ssh root@192.168.1.150 
Last login: Sat Oct  7 19:14:44 2023 from 192.168.1.102
[root@home ~]# lsblk
NAME            MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sda               8:0    0 111.8G  0 disk 
\u251C\u2500sda1            8:1    0     1G  0 part /boot
\u2514\u2500sda2            8:2    0 110.8G  0 part 
  \u251C\u2500centos-root 253:0    0    50G  0 lvm  /
  \u251C\u2500centos-swap 253:1    0  11.2G  0 lvm  [SWAP]
  \u2514\u2500centos-home 253:2    0  49.6G  0 lvm  /home
sdb               8:16   0 119.2G  0 disk 
\u2514\u2500sdb1            8:17   0 119.2G  0 part 
[root@home ~]# sudo mkfs.ext4 /dev/sd
sda   sda1  sda2  sdb   sdb1  
[root@home ~]# sudo mkfs.ext4 /dev/sdb1
mke2fs 1.42.9 (28-Dec-2013)
Discarding device blocks: \u5B8C\u6210                            
\u6587\u4EF6\u7CFB\u7EDF\u6807\u7B7E=
OS type: Linux
\u5757\u5927\u5C0F=4096 (log=2)
\u5206\u5757\u5927\u5C0F=4096 (log=2)
Stride=0 blocks, Stripe width=0 blocks
7815168 inodes, 31258368 blocks
1562918 blocks (5.00%) reserved for the super user
\u7B2C\u4E00\u4E2A\u6570\u636E\u5757=0
Maximum filesystem blocks=2178940928
954 block groups
32768 blocks per group, 32768 fragments per group
8192 inodes per group
Superblock backups stored on blocks: 
        32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208, 
        4096000, 7962624, 11239424, 20480000, 23887872

Allocating group tables: \u5B8C\u6210                            
\u6B63\u5728\u5199\u5165inode\u8868: \u5B8C\u6210                            
Creating journal (32768 blocks): \u5B8C\u6210
Writing superblocks and filesystem accounting information: \u5B8C\u6210   

// \u6302\u8F7D
[root@home ~]# mount /dev/sdb1 /mnt/doc/
[root@home ~]# cd /mnt/doc/
[root@home doc]# ll
\u603B\u7528\u91CF 16
drwx------. 2 root root 16384 10\u6708  7 19:40 lost+found

// \u8BBE\u7F6E\u91CD\u542F\u540E\u81EA\u52A8\u6302\u8F7D
[root@home doc]# vi /etc/fstab 
// \u5728\u6700\u4E0B\u9762\u6DFB\u52A0
 /dev/sdb1 /mnt/doc ext4 defaults 0 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div>`,13),w=s("\u53C2\u8003"),y={href:"https://blog.csdn.net/clever_wr/article/details/102712478",target:"_blank",rel:"noopener noreferrer"},S=s("\u8FD9\u91CC"),B=e(`<h2 id="tab\u547D\u4EE4\u63D0\u793A\u4E0D\u533A\u5206\u5927\u5C0F\u5199" tabindex="-1"><a class="header-anchor" href="#tab\u547D\u4EE4\u63D0\u793A\u4E0D\u533A\u5206\u5927\u5C0F\u5199" aria-hidden="true">#</a> Tab\u547D\u4EE4\u63D0\u793A\u4E0D\u533A\u5206\u5927\u5C0F\u5199</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@home doc]# vi /etc/inputrc 

// \u6700\u4E0B\u9762\u6DFB\u52A0\uFF1A 
set completion-ignore-case on
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u521B\u5EFAdocker\u7684\u78C1\u76D8\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFAdocker\u7684\u78C1\u76D8\u7A7A\u95F4" aria-hidden="true">#</a> \u521B\u5EFAdocker\u7684\u78C1\u76D8\u7A7A\u95F4</h2><p>\u7531\u4E8E\u5728docker\u4E0A\u90E8\u7F72\u4E00\u4E9B\u8F6F\u4EF6\u65F6\uFF0C\u9700\u8981\u4F7F\u7528\u78C1\u76D8\u7A7A\u95F4\uFF0C\u56E0\u6B64\u6211\u4EEC\u628Adocker\u7684\u78C1\u76D8\u7A7A\u95F4\u653E\u5230\u975E\u7CFB\u7EDF\u76D8\uFF0C\u5373\u6211\u4EEC\u5728\u5B89\u88C5\u670D\u52A1\u5668\u65F6\u989D\u5916\u5B89\u88C5\u7684\u53E6\u5916\u4E00\u5757ssd\u786C\u76D8\u3002</p><p>\u56E0\u6B64\uFF0C\u6211\u4EEC\u9700\u8981\u5148\u521B\u5EFA\u4E00\u4E9B\u76EE\u5F55\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir /mnt/doc/docker
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4EE5\u540E\u5B89\u88C5\u7684\u6240\u6709\u7684\u5BB9\u5668\u7684\u6587\u4EF6\uFF0C\u5747\u653E\u5230 /mnt/doc/docker \u4E0B\u9762\u3002</p><h2 id="\u521B\u5EFA\u5B89\u88C5\u5305\u5B58\u653E\u6587\u4EF6\u5939\u53CA\u5B89\u88C5\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5B89\u88C5\u5305\u5B58\u653E\u6587\u4EF6\u5939\u53CA\u5B89\u88C5\u8DEF\u5F84" aria-hidden="true">#</a> \u521B\u5EFA\u5B89\u88C5\u5305\u5B58\u653E\u6587\u4EF6\u5939\u53CA\u5B89\u88C5\u8DEF\u5F84</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir /mnt/doc/package
mkdir /usr/setup
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u5B89\u88C5\u7F51\u7EDC\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u7F51\u7EDC\u5DE5\u5177" aria-hidden="true">#</a> \u5B89\u88C5\u7F51\u7EDC\u5DE5\u5177</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@home ~]# yum -y install net-tools
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><hr><p><br><br><br><img style="border:1px red solid;display:block;margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="\u5FAE\u4FE1\u516C\u4F17\u53F7"></p>`,13);function O(C,N){const a=l("ExternalLinkIcon");return o(),i(t,null,[d,n("ul",null,[b,n("li",null,[u,n("ul",null,[m,h,g,n("li",null,[x,n("a",_,[v,r(a)])])])]),k]),f,n("p",null,[w,n("a",y,[S,r(a)])]),B],64)}var z=c(p,[["render",O],["__file","centos7-install-log.html.vue"]]);export{z as default};
