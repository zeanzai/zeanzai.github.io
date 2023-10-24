import{c as a,a as n,F as s,e as r,o as i}from"./app.98de23b3.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const d={},c=r(`<h2 id="\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u7248\u672C" aria-hidden="true">#</a> \u7248\u672C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ uname -a
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="cpu\u4E2A\u6570\u53CA\u6838\u6570" tabindex="-1"><a class="header-anchor" href="#cpu\u4E2A\u6570\u53CA\u6838\u6570" aria-hidden="true">#</a> cpu\u4E2A\u6570\u53CA\u6838\u6570</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u603B\u6838\u6570 = \u7269\u7406CPU\u4E2A\u6570 X \u6BCF\u9897\u7269\u7406CPU\u7684\u6838\u6570
\u603B\u903B\u8F91CPU\u6570 = \u7269\u7406CPU\u4E2A\u6570 X \u6BCF\u9897\u7269\u7406CPU\u7684\u6838\u6570 X \u8D85\u7EBF\u7A0B\u6570

# \u5168\u90E8\u4FE1\u606F
$ cat /proc/cpuinfo

# \u7269\u7406CPU\u4E2A\u6570
$ cat /proc/cpuinfo| grep &quot;physical id&quot;| sort| uniq| wc -l

# \u6BCF\u4E2A\u7269\u7406CPU\u4E2Dcore\u7684\u4E2A\u6570(\u5373\u6838\u6570)
$ cat /proc/cpuinfo| grep &quot;cpu cores&quot;| uniq

# \u903B\u8F91CPU\u7684\u4E2A\u6570
$ cat /proc/cpuinfo| grep &quot;processor&quot;| wc -l
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="\u8BA1\u7B97\u673A\u4F4D\u6570" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u7B97\u673A\u4F4D\u6570" aria-hidden="true">#</a> \u8BA1\u7B97\u673A\u4F4D\u6570</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ getconf LONG_BIT
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u8BA1\u7B97\u673A\u540D" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u7B97\u673A\u540D" aria-hidden="true">#</a> \u8BA1\u7B97\u673A\u540D</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ hostname
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u73AF\u5883\u53D8\u91CF</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ env
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u7CFB\u7EDF\u8FD0\u884C\u4E86\u591A\u957F\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#\u7CFB\u7EDF\u8FD0\u884C\u4E86\u591A\u957F\u65F6\u95F4" aria-hidden="true">#</a> \u7CFB\u7EDF\u8FD0\u884C\u4E86\u591A\u957F\u65F6\u95F4</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ uptime
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol><li>\u5F53\u524D\u65F6\u95F4<code>10:55:01</code></li><li>\u7CFB\u7EDF\u8FD0\u884C\u4E86\u591A\u5C11\u65F6\u95F4,1:28\uFF081\u5C0F\u65F628\u5206)</li><li>\u591A\u5C11\u4E2A\u7528\u6237,2 users</li><li>\u5E73\u5747\u8D1F\u8F7D\uFF1A0.00, 0.01, 0.05\uFF0C\u6700\u8FD11\u5206\u949F\u30015\u5206\u949F\u300115\u5206\u949F\u7CFB\u7EDF\u7684\u8D1F\u8F7D</li></ol><h2 id="\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u8D44\u6E90" aria-hidden="true">#</a> \u8D44\u6E90</h2><h3 id="\u5185\u5B58" tabindex="-1"><a class="header-anchor" href="#\u5185\u5B58" aria-hidden="true">#</a> \u5185\u5B58</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ cat /proc/meminfo
$ free -m
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol><li>\u67E5\u770B\u603B\u5185\u5B58\u60C5\u51B5\u4F7F\u7528\u547D\u4EE4<code>cat /proc/meminfo</code>\u5373\u53EF\u3002</li><li>\u67E5\u770B\u5185\u5B58\u5360\u7528\u72B6\u6001\u4F7F\u7528<code>free -m</code>(-m\uFF0C\u5355\u4F4D\u662Fm\uFF0C\u5982\u679C\u662F-g\uFF0C\u5355\u4F4D\u662Fg\uFF09\u3002</li></ol><p>\u6211\u4EEC\u901A\u8FC7free\u547D\u4EE4\u67E5\u770B\u673A\u5668\u7A7A\u95F2\u5185\u5B58\u65F6\uFF0C\u4F1A\u53D1\u73B0free\u7684\u503C\u5F88\u5C0F\u3002\u8FD9\u4E3B\u8981\u662F\u56E0\u4E3A\uFF0C\u5728linux\u4E2D\u6709\u8FD9\u4E48\u4E00\u79CD\u601D\u60F3\uFF0C\u5185\u5B58\u4E0D\u7528\u767D\u4E0D\u7528\uFF0C\u56E0\u6B64\u5B83\u5C3D\u53EF\u80FD\u7684cache\u548Cbuffer\u4E00\u4E9B\u6570\u636E\uFF0C\u4EE5\u65B9\u4FBF\u4E0B\u6B21\u4F7F\u7528\u3002\u4F46\u5B9E\u9645\u4E0A\u8FD9\u4E9B\u5185\u5B58\u4E5F\u662F\u53EF\u4EE5\u7ACB\u523B\u62FF\u6765\u4F7F\u7528\u7684\u3002</p><h3 id="\u786C\u76D8" tabindex="-1"><a class="header-anchor" href="#\u786C\u76D8" aria-hidden="true">#</a> \u786C\u76D8</h3><h4 id="\u5206\u533A\u4F7F\u7528\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#\u5206\u533A\u4F7F\u7528\u60C5\u51B5" aria-hidden="true">#</a> \u5206\u533A\u4F7F\u7528\u60C5\u51B5</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ df -h
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u6307\u5B9A\u76EE\u5F55\u5927\u5C0F" tabindex="-1"><a class="header-anchor" href="#\u6307\u5B9A\u76EE\u5F55\u5927\u5C0F" aria-hidden="true">#</a> \u6307\u5B9A\u76EE\u5F55\u5927\u5C0F</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ du -sh &lt;\u76EE\u5F55\u540D&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u6240\u6709\u5206\u533A" tabindex="-1"><a class="header-anchor" href="#\u6240\u6709\u5206\u533A" aria-hidden="true">#</a> \u6240\u6709\u5206\u533A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ fdisk -l
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u6240\u6709\u4EA4\u6362\u5206\u533A" tabindex="-1"><a class="header-anchor" href="#\u6240\u6709\u4EA4\u6362\u5206\u533A" aria-hidden="true">#</a> \u6240\u6709\u4EA4\u6362\u5206\u533A</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ swapon -s
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u7F51\u7EDC" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC" aria-hidden="true">#</a> \u7F51\u7EDC</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6240\u6709\u7F51\u7EDC\u63A5\u53E3\u5C5E\u6027
$ ifconfig

// \u5E26\u5BBD
$ ethtool \u7F51\u5361\u540D

// \u8DEF\u7531\u8868
$ route -n

// \u6240\u6709\u76D1\u542C\u7AEF\u53E3
$ netstat -lntp

// \u6240\u6709\u5DF2\u7ECF\u5EFA\u7ACB\u7684\u8FDE\u63A5
$ netstat -antp
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u7A0B" aria-hidden="true">#</a> \u8FDB\u7A0B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6240\u6709\u8FDB\u7A0B
$ ps -ef

// \u67E5\u770B\u8FDB\u7A0B\u5360\u7528cpu\u8D44\u6E90\u5927\u5C0F
$ ps -aux

// \u5B9E\u65F6\u663E\u793A\u8FDB\u7A0B\u72B6\u6001
$ top
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237" aria-hidden="true">#</a> \u7528\u6237</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u67E5\u770B\u7CFB\u7EDF\u6240\u6709\u7528\u6237
$ cut -d: -f1 /etc/passwd

// \u67E5\u770B\u6D3B\u52A8\u7528\u6237
$ w

// \u67E5\u770B\u7528\u6237\u767B\u5F55\u65E5\u5FD7
$ last
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><hr>`,34),t=["src"];function p(e,u){return i(),a(s,null,[c,n("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:e.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,t)],64)}var h=l(d,[["render",p],["__file","basic-information.html.vue"]]);export{h as default};
