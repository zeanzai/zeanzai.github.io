import{c as s,a as e,F as n,e as l,d as r,o as t}from"./app.8dbb136b.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const i={},c=l(`<h2 id="\u5B89\u88C5\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u6B65\u9AA4" aria-hidden="true">#</a> \u5B89\u88C5\u6B65\u9AA4</h2><ol start="0"><li>\u66F4\u65B0yum\u5305</li></ol><p><code>yum update</code></p><ol><li>\u67E5\u770B\u662F\u5426\u5B89\u88C5\u8FC7\u65E7\u7248\u672C</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>find /etc/systemd -name \u2018docker\u2019 -exec rm -f {} \\;
find /lib/systemd -name \u2018docker\u2019 -exec rm -f {} \\;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5982\u679C\u5B89\u88C5\u8FC7\u65E7\u7248\u672C\uFF0C\u5C31\u8FDB\u884C\u5378\u8F7D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum remove docker docker-common docker-selinux docker-engine -y
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u5B89\u88C5\u4F9D\u8D56\u8F6F\u4EF6\u5305</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum install -y yum-utils device-mapper-persistent-data lvm2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>\u6CE8\u610F\uFF1A yum-util \u63D0\u4F9Byum-config-manager\u529F\u80FD\uFF0C\u53E6\u5916\u4E24\u4E2A\u662Fdevicemapper\u9A71\u52A8\u4F9D\u8D56\u7684\u3002</p></blockquote><ol start="3"><li>\u8BBE\u7F6Eyum\u6E90</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6B64\u64CD\u4F5C\u4F1A\u5728/etc/yum.repos.d/\u76EE\u5F55\u4E0B\u521B\u5EFAdocker-ce.repo\u6587\u4EF6\uFF0C\u91CC\u9762\u5185\u5BB9\u4E3ADocker\u7684\u5B58\u50A8\u4ED3\u5E93\u3002\u611F\u5174\u8DA3\u7684\u540C\u5B66\u53EF\u4EE5\u6253\u5F00\u770B\u4E00\u4E0B\u3002</p><ol start="4"><li>\u8BBE\u7F6Eyum\u955C\u50CF</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sed -i &#39;s+download.docker.com+mirrors.tuna.tsinghua.edu.cn/docker-ce+&#39; /etc/yum.repos.d/docker-ce.repo
yum makecache fast
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>\u4E0A\u8FF0\u64CD\u4F5C\u65F6\u4E3A\u4E86\u5C06\u8F6F\u4EF6\u4ED3\u5E93\u5730\u5740\u66FF\u6362\u4E3A TUNA\uFF0C\u56FD\u5916\u7684\u955C\u50CF\u5B89\u88C5\u901F\u5EA6\u5F88\u6162\uFF0C\u6545\u91C7\u7528\u6E05\u534E\u5927\u5B66 TUNA \u955C\u50CF\u6E90\u3002 \u53C2\u8003\u94FE\u63A5\uFF1A https://mirrors.tuna.tsinghua.edu.cn/help/docker-ce/</p></blockquote><ol start="5"><li>\u67E5\u770B\u6240\u6709\u4ED3\u5E93\u4E2D\u7684docker\u7248\u672C</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum list docker-ce \u2013showduplicates | sort -r
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="6"><li>\u5B89\u88C5docker</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum install docker-ce
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>\u6CE8\u610F\uFF1A repo\u4E2D\u9ED8\u8BA4\u53EA\u5F00\u542Fstable\u4ED3\u5E93\u3002</p></blockquote><ol start="7"><li>\u542F\u52A8\u5E76\u52A0\u5165\u5F00\u673A\u81EA\u542F</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl enable docker
systemctl start docker
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,24),o=r("https://blog.csdn.net/qq_23489303/article/details/80682798 https://blog.csdn.net/aa1215018028/article/details/80623111 "),u=["src"];function m(a,p){return t(),s(n,null,[c,e("p",null,[o,e("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:a.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,u)])],64)}var x=d(i,[["render",m],["__file","docker.html.vue"]]);export{x as default};
