import{r,c as p,a as n,b as e,F as b,e as l,d as s,o as i}from"./app.3140fa71.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const u={},m=l(`<h2 id="git\u7684\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#git\u7684\u5B89\u88C5" aria-hidden="true">#</a> Git\u7684\u5B89\u88C5</h2><ol><li>\u76F4\u63A5\u5B89\u88C5\u5373\u53EF\uFF1B</li><li>\u914D\u7F6E\u5168\u5C40\u53D8\u91CF\uFF1A</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git config --global user.name zeanzai

git config --global user.email &quot;zeanzai.me@gmail.com&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="3"><li>\u751F\u6210sshkey</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ssh-keygen -t ed25519 -C &quot;zeanzai.me@gmail.com&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4"><li>\u6DFB\u52A0\u516C\u94A5\u5230GitHub\u4E0A</li></ol><h2 id="vscode\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#vscode\u7684\u5B89\u88C5\u53CA\u914D\u7F6E" aria-hidden="true">#</a> vscode\u7684\u5B89\u88C5\u53CA\u914D\u7F6E</h2><ol><li>\u76F4\u63A5\u53CC\u51FB\u8FDB\u884C\u5B89\u88C5\u5373\u53EF\uFF1B</li><li>\u7EC8\u7AEF\u6267\u884C\u5668\u4E2D\uFF0C\u6CA1\u6709\u529E\u6CD5\u76F4\u63A5\u6267\u884Csh\u6587\u4EF6\uFF0C\u76F4\u63A5\u4F7F\u7528git-bash here\u5373\u53EF\uFF1B</li><li>\u5B89\u88C5picgo\u63D2\u4EF6\uFF0C\u914D\u7F6E\u963F\u91CC\u4E91\u7684oos\u5BF9\u8C61\u5B58\u50A8\uFF1B</li></ol><h2 id="\u914D\u7F6E\u8FD0\u884C\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u8FD0\u884C\u73AF\u5883" aria-hidden="true">#</a> \u914D\u7F6E\u8FD0\u884C\u73AF\u5883</h2>`,9),o=n("li",null,"\u4F7F\u7528 node.msi \u5B89\u88C5\u5305\u7684\u65B9\u5F0F\u8FDB\u884C\u5B89\u88C5\uFF0C\u5B89\u88C5\u5B8Cnode\u4E4B\u540E\uFF0Cnpm\u4F1A\u81EA\u52A8\u5B89\u88C5\uFF0C\u5E76\u4E14 msi \u7684\u5B89\u88C5\u65B9\u5F0F\u4F1A\u81EA\u52A8\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF\uFF1B",-1),t=s("\u8BBE\u7F6E\u597D node_global \u548C node_cache \u7684\u4F4D\u7F6E\uFF0C\u8FD9\u91CC\u6709\u70B9\u7C7B\u4F3C\u4E8E maven \u7684 repository \u7684\u610F\u601D\uFF0C"),d={href:"https://juejin.cn/post/7034705127868989447",target:"_blank",rel:"noopener noreferrer"},I=s("\u53C2\u8003\u8FD9\u91CC"),h=s('\uFF0C\u7531\u4E8E\u79D1\u5B66\u4E0A\u7F51\u5DF2\u8BBE\u7F6E\uFF0C\u56E0\u6B64\u6CA1\u6709\u5FC5\u8981\u4F7F\u7528\u6DD8\u5B9D\u6E90\uFF1B a. \u5148\u521B\u5EFA node_global \u548C node_cache \u8FD9\u4E24\u4E2A\u6587\u4EF6\u5939\uFF1B b. \u7528\u6237\u53D8\u91CF\u7684 path \u53D8\u91CF\u4E2D\u589E\u52A0 node_global \u7684\u5730\u5740\uFF1B c. \u4FEE\u6539\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF\uFF0C\u79FB\u9664 msi \u6DFB\u52A0\u7684node\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u6DFB\u52A0 NODE_PATH \u53D8\u91CF\uFF0C\u5E76\u628A NODE_PATH \u6DFB\u52A0\u5230 path \u4E2D\uFF1B d. \u7BA1\u7406\u5458\u89D2\u8272\u6253\u5F00 cmd \uFF0C\u6267\u884C npm config set prefix "D:\\work\\node\\node_global" \u548C npm config set cache "D:\\work\\node\\node_cache" \uFF0C \u5E76\u66FF\u6362\u81EA\u5DF1\u7684\u8DEF\u5F84\uFF1B'),D=n("li",null,"\u4F7F\u7528\u7BA1\u7406\u5458\u89D2\u8272\u6253\u5F00 cmd \uFF0C\u5E76\u6267\u884C npm i yarn -g \u5B89\u88C5 yarn \u5305\u7BA1\u7406\u5DE5\u5177\uFF0C\u5B89\u88C5\u5B8C\u6210\u4E4B\u540E\u4F1A\u5728\u4E0A\u4E00\u6B65\u9AA4\u4E2D\u914D\u7F6E\u7684 node_global \u6587\u4EF6\u5939\u4E2D\u627E\u5230 yarn \u6587\u4EF6\uFF1B",-1),g=n("li",null,"\u4F7F\u7528\u7BA1\u7406\u5458\u89D2\u8272\u6253\u5F00 Windows PowerShell \uFF0C \u8F93\u5165\u547D\u4EE4\uFF1A set-ExecutionPolicy RemoteSigned \uFF1B",-1),C=n("li",null,"\u5728\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CFpath\u4E2D\u6DFB\u52A0 yarn \u7684\u8DEF\u5F84\u3010 yarn \u5728\u7B2C\u4E8C\u6B65\u4E2D\u914D\u7F6E\u7684\u8DEF\u5F84\u4E2D\u627E\uFF0CE:\\Node\\node_global\\node_modules\\yarn\\bin \u3011\u4F7F yarn \u5168\u5C40\u53EF\u7528\uFF1B",-1),_=n("li",null,"\u91CD\u542Fvscode\uFF1B",-1),y=n("li",null,"\u6267\u884C yarn install \u5B8C\u6210\u4F9D\u8D56\u7684\u5B89\u88C5\uFF1B",-1),x=n("li",null,"\u6267\u884C yarn docs:dev \u8FDB\u884C\u542F\u52A8\uFF1B",-1),S=n("p",null,"\u6CE8\u610F\uFF1A",-1),B=n("ol",null,[n("li",null,[s("\u5982\u679C\u62A5\u9519\uFF1A "),n("code",null,"yarn : \u65E0\u6CD5\u5C06\u201Cyarn\u201D\u9879\u8BC6\u522B\u4E3A cmdlet\u3001\u51FD\u6570\u3001\u811A\u672C\u6587\u4EF6\u6216\u53EF\u8FD0\u884C\u7A0B\u5E8F\u7684\u540D\u79F0\u3002\u8BF7\u68C0\u67E5\u540D\u79F0\u7684\u62FC\u5199\uFF0C\u5982\u679C\u5305\u62EC\u8DEF\u5F84\uFF0C\u8BF7\u786E\u4FDD\u8DEF\u5F84\u6B63\u786E\uFF0C\u7136\u540E\u518D\u8BD5\u4E00\u6B21\u3002 + yarn install ... "),s("\uFF0C\u5C31\u9700\u8981\u68C0\u67E5\u662F\u5426\u6CA1\u6709\u4F7F\u7528\u7BA1\u7406\u5458\u89D2\u8272\u5B89\u88C5 yarn \uFF0C\u540C\u65F6\u68C0\u67E5\u662F\u5426\u5DF2\u7ECF\u5B8C\u6210yarn\u7684\u7CFB\u7EDF\u53D8\u91CF\u7684\u914D\u7F6E\uFF1B")]),n("li",null,[s("\u5982\u679C\u62A5\u9519\uFF1A "),n("code",null,"yarn : \u65E0\u6CD5\u52A0\u8F7D\u6587\u4EF6 E:\\Node\\node_global\\yarn.ps1\uFF0C\u56E0\u4E3A\u5728\u6B64\u7CFB\u7EDF\u4E0A\u7981\u6B62\u8FD0\u884C\u811A\u672C\u3002\u6709\u5173\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605 https:/go.microsoft.com/fwlink/?LinkID=135170 \u4E2D\u7684 about_Execution_Policies\u3002\u6240\u5728\u4F4D\u7F6E \u884C:1 \u5B57\u7B26: 1 "),s("\uFF0C \u5C31\u9700\u8981\u68C0\u67E5\u662F\u5426\u4F7F\u7528\u7BA1\u7406\u5458\u89D2\u8272\u5728 Windows PowerShell \u4E2D\u6267\u884C\u4E86 "),n("code",null,"set-ExecutionPolicy RemoteSigned"),s(" \uFF1B")])],-1),P=n("p",null,"\u53C2\u8003\uFF1A",-1),H={href:"https://blog.csdn.net/weixin_38883338/article/details/100054550",target:"_blank",rel:"noopener noreferrer"},G=s("PowerShell : \u65E0\u6CD5\u52A0\u8F7D\u6587\u4EF6 C:\\Users\\huyn\\AppData\\Roaming\\npm\\ng.ps1\uFF0C\u56E0\u4E3A\u5728\u6B64\u7CFB\u7EDF\u4E0A\u7981\u6B62\u8FD0\u884C\u811A\u672C"),f={href:"https://juejin.cn/post/7034705127868989447",target:"_blank",rel:"noopener noreferrer"},A=s("\u5B89\u88C5node.js\uFF0Cnpm\uFF0Cyarn\u73AF\u5883"),E={href:"https://www.cnblogs.com/fujijill/p/16080641.html",target:"_blank",rel:"noopener noreferrer"},v=s("\u5B89\u88C5\u5B8C\uFF0C\u8FD0\u884Cyarn\u62A5\u9519:\u65E0\u6CD5\u5C06\u201Cyarn\u201D\u9879\u8BC6\u522B\u4E3A cmdlet\u3001\u51FD\u6570\u3001\u811A\u672C\u6587\u4EF6\u6216\u53EF\u8FD0\u884C\u7A0B\u5E8F\u7684\u540D\u79F0\u3002\u8BF7\u68C0\u67E5\u540D\u79F0\u7684\u62FC\u5199\uFF0C\u5982\u679C\u5305\u62EC\u8DEF\u5F84\uFF0C\u8BF7\u786E\u4FDD\u8DEF\u5F84\u6B63\u786E\uFF0C\u7136\u540E\u518D\u8BD5\u4E00\u6B21\u3002 \u6240\u5728\u4F4D\u7F6E \u884C:1 \u5B57\u7B26: 1"),M=l(`<h2 id="\u914D\u7F6E\u535A\u5BA2\u5E76\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u535A\u5BA2\u5E76\u542F\u52A8" aria-hidden="true">#</a> \u914D\u7F6E\u535A\u5BA2\u5E76\u542F\u52A8</h2><ol><li>\u5148\u514B\u9686\u5230\u672C\u5730\u6587\u4EF6\u5939\uFF1B</li><li>\u4F7F\u7528vscode\u6253\u5F00\uFF1B</li><li>\u5728\u7EC8\u7AEF\u4E2D\u5148\u5B89\u88C5\u4F9D\u8D56\uFF0C yarn install \uFF1B</li><li>\u4E4B\u540E\u4F7F\u7528\u547D\u4EE4\u542F\u52A8\uFF1A yarn docs:dev \uFF1B</li></ol><h2 id="idea\u7684\u6FC0\u6D3B" tabindex="-1"><a class="header-anchor" href="#idea\u7684\u6FC0\u6D3B" aria-hidden="true">#</a> idea\u7684\u6FC0\u6D3B</h2><p>\u7F51\u76D8\u4E2D\u7684 idea-win \u6587\u4EF6\u5939\uFF0C\u6309\u7167\u91CC\u9762\u7684install.log\u6587\u4EF6\u64CD\u4F5C\u3002</p><h2 id="\u53F0\u5F0F\u673A\u786C\u4EF6\u914D\u7F6E\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u53F0\u5F0F\u673A\u786C\u4EF6\u914D\u7F6E\u4FE1\u606F" aria-hidden="true">#</a> \u53F0\u5F0F\u673A\u786C\u4EF6\u914D\u7F6E\u4FE1\u606F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>## cpu\u578B\u53F7
[root@home ~]# cat /proc/cpuinfo | grep &#39;model name&#39; |uniq
model name      : Intel(R) Core(TM) i7-4790 CPU @ 3.60GHz

## cpu\u6838\u6570
[root@home ~]# cat /proc/cpuinfo | grep &quot;cpu cores&quot; | uniq
cpu cores       : 4

## \u5185\u5B58\u5927\u5C0F
[root@home ~]# cat /proc/meminfo | grep MemTotal
MemTotal:       16133652 kB

## cpu\u4E2A\u6570
[root@home ~]# cat /proc/cpuinfo | grep &quot;physical id&quot; | uniq | wc -l
1

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="\u9C81\u5927\u5E08\u8F93\u51FA\u7684\u786C\u4EF6\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u9C81\u5927\u5E08\u8F93\u51FA\u7684\u786C\u4EF6\u4FE1\u606F" aria-hidden="true">#</a> \u9C81\u5927\u5E08\u8F93\u51FA\u7684\u786C\u4EF6\u4FE1\u606F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>--------[ \u9C81\u5927\u5E08 ]--------------------------------------------------------------------------------

  \u8F6F\u4EF6:             \u9C81\u5927\u5E08 5.15.17.1075
  \u65F6\u95F4:             2018-05-21 23:05:31
  \u7F51\u7AD9:             http://www.ludashi.com

--------[ \u6982\u89C8 ]----------------------------------------------------------------------------------

  \u7535\u8111\u578B\u53F7            \u6280\u5609 B85M-D3H \u53F0\u5F0F\u7535\u8111
  \u64CD\u4F5C\u7CFB\u7EDF            Windows 10 \u4E13\u4E1A\u7248 64\u4F4D ( DirectX 12 )

  \u5904\u7406\u5668              \u82F1\u7279\u5C14 \u7B2C\u56DB\u4EE3\u9177\u777F i7-4790 @ 3.60GHz \u56DB\u6838
  \u4E3B\u677F                \u6280\u5609 B85M-D3H ( \u82F1\u7279\u5C14 Haswell - Lynx Point )
  \u663E\u5361                Nvidia GeForce GTX 960 ( 4 GB / \u6280\u5609 )
  \u5185\u5B58                16 GB ( \u91D1\u58EB\u987F DDR3 1600MHz )
  \u4E3B\u786C\u76D8              \u4E1C\u829D Q300. ( 120 GB / \u56FA\u6001\u786C\u76D8 )
  \u663E\u793A\u5668              \u98DE\u5229\u6D66 PHLC0FA PHL 276E6 ( 27.2 \u82F1\u5BF8  )
  \u58F0\u5361                \u82F1\u7279\u5C14 \u82F1\u7279\u5C14 \u663E\u793A\u5668\u97F3\u9891 @ \u82F1\u7279\u5C14 Haswell  \u9AD8\u4FDD\u771F\u97F3\u9891
  \u7F51\u5361                \u745E\u6631 RTL8168/8111/8112 Gigabit Ethernet Controller / \u6280\u5609

--------[ \u4E3B\u677F ]----------------------------------------------------------------------------------

  \u4E3B\u677F\u578B\u53F7            \u6280\u5609 B85M-D3H
  \u82AF\u7247\u7EC4              \u82F1\u7279\u5C14 Haswell - Lynx Point
  \u4E3B\u677F\u7248\u672C            To be filled by O.E.M.
  BIOS                American Megatrends Inc. F15  /  \u5236\u9020\u65E5\u671F: 2015\u5E7408\u670820\u65E5
  BIOS\u7684\u5927\u5C0F          8192 KB
  BIOS\u7684\u5E8F\u5217\u53F7        63-0100-000001-00101111-041312-Chipset

  \u677F\u8F7D\u8BBE\u5907            \u89C6\u9891\u8BBE\u5907 (\u542F\u7528)

--------[ \u5904\u7406\u5668 ]--------------------------------------------------------------------------------

  \u5904\u7406\u5668              \u82F1\u7279\u5C14 \u7B2C\u56DB\u4EE3\u9177\u777F i7-4790 @ 3.60GHz \u56DB\u6838
  \u6B65\u8FDB                C0
  \u901F\u5EA6                3.80 GHz (109 MHz x 35.0)
  \u5904\u7406\u5668\u6570\u91CF          \u6838\u5FC3\u6570: 4 / \u7EBF\u7A0B\u6570: 8
  \u6838\u5FC3\u4EE3\u53F7            Haswell
  \u751F\u4EA7\u5DE5\u827A            22 \u7EB3\u7C73
  \u63D2\u69FD/\u63D2\u5EA7           Socket H3 (LGA 1150)
  \u4E00\u7EA7\u6570\u636E\u7F13\u5B58        4 x 32 KB, 8-Way, 64 byte lines
  \u4E00\u7EA7\u4EE3\u7801\u7F13\u5B58        4 x 32 KB, 8-Way, 64 byte lines
  \u4E8C\u7EA7\u7F13\u5B58            4 x 256 KB, 8-Way, 64 byte lines
  \u4E09\u7EA7\u7F13\u5B58            8 MB, 16-Way, 64 byte lines
  \u7279\u5F81                MMX, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, HTT, EM64T, EIST, Turbo Boost

--------[ \u786C\u76D8 ]----------------------------------------------------------------------------------

  \u4EA7\u54C1                \u4E1C\u829D  Q300. (\u56FA\u6001\u786C\u76D8)
  \u5927\u5C0F                120 GB
  \u786C\u76D8\u5DF2\u4F7F\u7528          \u5171 1095 \u6B21\uFF0C\u7D2F\u8BA1 2486 \u5C0F\u65F6
  \u56FA\u4EF6                SAFM12.3
  \u63A5\u53E3                SATA III
  \u6570\u636E\u4F20\u8F93\u7387          600.00 MB/\u79D2
  \u7279\u5F81                S.M.A.R.T,  APM,  48-bit LBA,  NCQ

  \u4EA7\u54C1                \u5E0C\u6377  BUP
  \u5927\u5C0F                1 TB
  \u56FA\u4EF6                SLIM
  \u7279\u5F81                S.M.A.R.T

--------[ \u5185\u5B58 ]----------------------------------------------------------------------------------

  ChannelA-DIMM0      \u91D1\u58EB\u987F DDR3 1600MHz 8GB
  \u5236\u9020\u65E5\u671F            2016 \u5E74 09\u6708
  \u578B\u53F7                7F98 KHX1600C10D3/8G
  \u5E8F\u5217\u53F7              0C3E9C97
  \u5382\u5546                Kingston
  \u6A21\u5757\u4F4D\u5BBD:           64 Bits
  \u6A21\u5757\u7535\u538B:           SSTL 1.5V

  ChannelB-DIMM0      \u91D1\u58EB\u987F DDR3 1600MHz 8GB
  \u5236\u9020\u65E5\u671F            2015 \u5E74 11\u6708
  \u578B\u53F7                7F98 KHX1600C10D3/8G
  \u5E8F\u5217\u53F7              780E9EB6
  \u5382\u5546                Kingston
  \u6A21\u5757\u4F4D\u5BBD:           64 Bits
  \u6A21\u5757\u7535\u538B:           SSTL 1.5V

--------[ \u663E\u5361 ]----------------------------------------------------------------------------------

  \u663E\u5361                \u82F1\u7279\u5C14 HD Graphics 4600
  \u663E\u5B58                112 MB
  \u5236\u9020\u5546              \u6280\u5609
  \u5236\u9020\u5546              Intel
  BIOS\u65E5\u671F            2015\u5E7407\u670802\u65E5
  \u9A71\u52A8\u7248\u672C            20.19.15.4835
  \u9A71\u52A8\u65E5\u671F            2017\u5E7401\u670801\u65E5

  \u4E3B\u663E\u5361              Nvidia GeForce GTX 960
  \u663E\u5B58                4 GB
  \u5236\u9020\u5546              \u6280\u5609
  \u5236\u9020\u5546              Nvidia
  BIOS\u65E5\u671F            2015\u5E7407\u670802\u65E5
  \u9A71\u52A8\u7248\u672C            23.21.13.8813
  \u9A71\u52A8\u65E5\u671F            2017\u5E7402\u670801\u65E5

--------[ \u663E\u793A\u5668 ]--------------------------------------------------------------------------------

  \u4EA7\u54C1                \u98DE\u5229\u6D66 PHLC0FA PHL 276E6
  \u5382\u5546                \u98DE\u5229\u6D66
  \u56FA\u4EF6\u65E5\u671F            2016 \u5E74 05\u6708
  \u5C4F\u5E55\u5C3A\u5BF8            27.2 \u82F1\u5BF8 (60 \u5398\u7C73 x 34 \u5398\u7C73)
  \u663E\u793A\u6BD4\u4F8B            \u5BBD\u5C4F 16 : 9
  \u5206\u8FA8\u7387              1920 x 1080 32 \u4F4D\u771F\u5F69\u8272
  Gamma               2.20
  \u7535\u6E90\u7BA1\u7406            Active-Off

--------[ \u5176\u4ED6\u8BBE\u5907 ]------------------------------------------------------------------------------


  \u7F51\u5361                \u745E\u6631 RTL8168/8111/8112 Gigabit Ethernet Controller
  \u5236\u9020\u5546              \u6280\u5609

  \u58F0\u5361                \u82F1\u7279\u5C14 \u82F1\u7279\u5C14 \u663E\u793A\u5668\u97F3\u9891 @ \u82F1\u7279\u5C14 Haswell HD Audio Controller

  \u58F0\u5361                \u82F1\u7279\u5C14 Lynx Point HD Audio Controller

  \u58F0\u5361                Nvidia High Definition Audio Controller

  \u952E\u76D8                HID \u6807\u51C6\u952E\u76D8
  \u9F20\u6807                HID-compliant \u9F20\u6807


--------[ PCI\u8BBE\u5907 ]-------------------------------------------------------------------------------

  \u8BBE\u5907                Haswell DRAM Controller
  \u8BBE\u5907ID              0C00
  \u5236\u9020\u5546              Intel
  \u5236\u9020\u5546ID            8086
  \u7C7B\u522B                Bridge / PCI to HOST
  \u5B50\u7CFB\u7EDF\u5236\u9020\u5546        Gigabyte
  \u5B50\u7CFB\u7EDFID            50001458

  \u8BBE\u5907                Haswell PCI Express x16 Controller
  \u8BBE\u5907ID              0C01
  \u5236\u9020\u5546              Intel
  \u5236\u9020\u5546ID            8086
  \u7C7B\u522B                Bridge / PCI to PCI
  \u5B50\u7CFB\u7EDFID            00000000

  \u8BBE\u5907                HD Graphics 4600
  \u8BBE\u5907ID              0412
  \u5236\u9020\u5546              Intel
  \u5236\u9020\u5546ID            8086
  \u7C7B\u522B                Display / VGA
  \u5B50\u7CFB\u7EDF\u5236\u9020\u5546        Gigabyte
  \u5B50\u7CFB\u7EDFID            D0001458

  \u8BBE\u5907                Haswell HD Audio Controller
  \u8BBE\u5907ID              0C0C
  \u5236\u9020\u5546              Intel
  \u5236\u9020\u5546ID            8086
  \u7C7B\u522B                Multimedia / Hi-definition Audio
  \u5B50\u7CFB\u7EDF\u5236\u9020\u5546        Intel
  \u5B50\u7CFB\u7EDFID            20108086

  \u8BBE\u5907                Lynx Point USB xHCI Host Controller
  \u8BBE\u5907ID              8C31
  \u5236\u9020\u5546              Intel
  \u5236\u9020\u5546ID            8086
  \u7C7B\u522B                Serial / USB (UHCI)
  \u5B50\u7CFB\u7EDF\u5236\u9020\u5546        Gigabyte
  \u5B50\u7CFB\u7EDFID            50071458

  \u8BBE\u5907                Lynx Point MEI Controller #1
  \u8BBE\u5907ID              8C3A
  \u5236\u9020\u5546              Intel
  \u5236\u9020\u5546ID            8086
  \u7C7B\u522B                Simple Communication / Other
  \u5B50\u7CFB\u7EDF\u5236\u9020\u5546        Gigabyte
  \u5B50\u7CFB\u7EDFID            1C3A1458

  \u8BBE\u5907                Lynx Point KT Controller
  \u8BBE\u5907ID              8C3D
  \u5236\u9020\u5546              Intel
  \u5236\u9020\u5546ID            8086
  \u7C7B\u522B                Simple Communication / Serial - 16550
  \u5B50\u7CFB\u7EDF\u5236\u9020\u5546        Gigabyte
  \u5B50\u7CFB\u7EDFID            1C3A1458

  \u8BBE\u5907                Lynx Point USB Enhanced Host Controller #2
  \u8BBE\u5907ID              8C2D
  \u5236\u9020\u5546              Intel
  \u5236\u9020\u5546ID            8086
  \u7C7B\u522B                Serial / USB 2.0 (EHCI)
  \u5B50\u7CFB\u7EDF\u5236\u9020\u5546        Gigabyte
  \u5B50\u7CFB\u7EDFID            50061458

  \u8BBE\u5907                Lynx Point HD Audio Controller
  \u8BBE\u5907ID              8C20
  \u5236\u9020\u5546              Intel
  \u5236\u9020\u5546ID            8086
  \u7C7B\u522B                Multimedia / Hi-definition Audio
  \u5B50\u7CFB\u7EDF\u5236\u9020\u5546        Gigabyte
  \u5B50\u7CFB\u7EDFID            A0021458

  \u8BBE\u5907                Lynx Point PCI Express Root Port 1
  \u8BBE\u5907ID              8C10
  \u5236\u9020\u5546              Intel
  \u5236\u9020\u5546ID            8086
  \u7C7B\u522B                Bridge / PCI to PCI
  \u5B50\u7CFB\u7EDFID            00000000

  \u8BBE\u5907                Lynx Point PCI Express Root Port 3
  \u8BBE\u5907ID              8C14
  \u5236\u9020\u5546              Intel
  \u5236\u9020\u5546ID            8086
  \u7C7B\u522B                Bridge / PCI to PCI
  \u5B50\u7CFB\u7EDFID            00000000

  \u8BBE\u5907                Lynx Point PCI Express Root Port 4
  \u8BBE\u5907ID              8C16
  \u5236\u9020\u5546              Intel
  \u5236\u9020\u5546ID            8086
  \u7C7B\u522B                Bridge / PCI to PCI
  \u5B50\u7CFB\u7EDFID            00000000

  \u8BBE\u5907                Lynx Point USB Enhanced Host Controller #1
  \u8BBE\u5907ID              8C26
  \u5236\u9020\u5546              Intel
  \u5236\u9020\u5546ID            8086
  \u7C7B\u522B                Serial / USB 2.0 (EHCI)
  \u5B50\u7CFB\u7EDF\u5236\u9020\u5546        Gigabyte
  \u5B50\u7CFB\u7EDFID            50061458

  \u8BBE\u5907                Lynx Point LPC Controller
  \u8BBE\u5907ID              8C50
  \u5236\u9020\u5546              Intel
  \u5236\u9020\u5546ID            8086
  \u7C7B\u522B                Bridge / PCI to ISA
  \u5B50\u7CFB\u7EDF\u5236\u9020\u5546        Gigabyte
  \u5B50\u7CFB\u7EDFID            50011458

  \u8BBE\u5907                Lynx Point 6-Port SATA AHCI Controller
  \u8BBE\u5907ID              8C02
  \u5236\u9020\u5546              Intel
  \u5236\u9020\u5546ID            8086
  \u7C7B\u522B                Storage / Serial ATA (AHCI 1.0)
  \u5B50\u7CFB\u7EDF\u5236\u9020\u5546        Gigabyte
  \u5B50\u7CFB\u7EDFID            B0051458

  \u8BBE\u5907                Lynx Point SMBus Controller
  \u8BBE\u5907ID              8C22
  \u5236\u9020\u5546              Intel
  \u5236\u9020\u5546ID            8086
  \u7C7B\u522B                Serial / SMBus Controller
  \u5B50\u7CFB\u7EDF\u5236\u9020\u5546        Gigabyte
  \u5B50\u7CFB\u7EDFID            50011458

  \u8BBE\u5907                Lynx Point Thermal Management Controller
  \u8BBE\u5907ID              8C24
  \u5236\u9020\u5546              Intel
  \u5236\u9020\u5546ID            8086
  \u7C7B\u522B                Data Aquisition &amp; Signal Processing / Other
  \u5B50\u7CFB\u7EDF\u5236\u9020\u5546        Gigabyte
  \u5B50\u7CFB\u7EDFID            50001458

  \u8BBE\u5907                GeForce GTX 960
  \u8BBE\u5907ID              1401
  \u5236\u9020\u5546              Nvidia
  \u5236\u9020\u5546ID            10DE
  \u7C7B\u522B                Display / VGA
  \u5B50\u7CFB\u7EDF\u5236\u9020\u5546        Gigabyte
  \u5B50\u7CFB\u7EDFID            36C11458

  \u8BBE\u5907                High Definition Audio Controller
  \u8BBE\u5907ID              0FBA
  \u5236\u9020\u5546              Nvidia
  \u5236\u9020\u5546ID            10DE
  \u7C7B\u522B                Multimedia / Hi-definition Audio
  \u5B50\u7CFB\u7EDF\u5236\u9020\u5546        Gigabyte
  \u5B50\u7CFB\u7EDFID            36C11458

  \u8BBE\u5907                RTL8168/8111/8112 Gigabit Ethernet Controller
  \u8BBE\u5907ID              8168
  \u5236\u9020\u5546              Realtek
  \u5236\u9020\u5546ID            10EC
  \u7C7B\u522B                Network / Ethernet
  \u5B50\u7CFB\u7EDF\u5236\u9020\u5546        Gigabyte
  \u5B50\u7CFB\u7EDFID            E0001458

--------[ USB\u8BBE\u5907 ]-------------------------------------------------------------------------------

  \u5236\u9020\u5546ID            046D
  \u4EA7\u54C1ID              C534
  \u7C7B\u522B                0 / 0 / 0
  \u8BBE\u5907                Logitech USB Receiver
  Serial              ?
  \u7248\u672C                USB 2.0

  \u5236\u9020\u5546ID            0BC2
  \u4EA7\u54C1ID              AB24
  \u7C7B\u522B                0 / 0 / 0
  \u8BBE\u5907                Seagate BUP Slim RD
  Serial              NA7LP571
  \u7248\u672C                USB 3.0

--------[ \u4F20\u611F\u5668 ]--------------------------------------------------------------------------------

  \u540D\u79F0                ITE IT8728
  CPU\u6E29\u5EA6             31\u2103
  CPU\u6838\u5FC3             36\u2103
  CPU\u5C01\u88C5             40\u2103
  \u4E3B\u677F                34\u2103
  \u663E\u5361                47\u2103
  \u786C\u76D8\u6E29\u5EA6            31\u2103
  \u98CE\u6247                841\u8F6C
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br></div></div><p><br><br><br><img style="border:1px red solid;display:block;margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="\u5FAE\u4FE1\u516C\u4F17\u53F7"></p>`,9);function L(w,T){const a=r("ExternalLinkIcon");return i(),p(b,null,[m,n("ol",null,[o,n("li",null,[t,n("a",d,[I,e(a)]),h]),D,g,C,_,y,x]),S,B,P,n("ol",null,[n("li",null,[n("a",H,[G,e(a)])]),n("li",null,[n("a",f,[A,e(a)])]),n("li",null,[n("a",E,[v,e(a)])])]),M],64)}var U=c(u,[["render",L],["__file","window10.html.vue"]]);export{U as default};
