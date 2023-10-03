import{e as n}from"./app.a4992776.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const s={},a=n(`<blockquote><p>https://www.cnblogs.com/dadadechengzi/p/6670530.html</p></blockquote><p>\u5728CentOS 7\u4E0B\uFF0C\u624B\u5DE5\u8BBE\u7F6E /etc/resolv.conf \u91CC\u7684DNS\uFF0C\u8FC7\u4E86\u4E00\u4F1A\uFF0C\u53D1\u73B0\u88AB\u7CFB\u7EDF\u91CD\u65B0\u8986\u76D6\u6216\u8005\u6E05\u9664\u4E86\u3002\u548CCentOS 6\u4E0B\u7684\u8BBE\u7F6EDNS\u65B9\u6CD5\u4E0D\u540C\uFF0C\u6709\u51E0\u79CD\u65B9\u5F0F\uFF1A</p><p>1\u3001\u4F7F\u7528\u5168\u65B0\u7684\u547D\u4EE4\u884C\u5DE5\u5177 nmcli \u6765\u8BBE\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u663E\u793A\u5F53\u524D\u7F51\u7EDC\u8FDE\u63A5
$ nmcli connection show
NAME UUID                                 TYPE           DEVICE
eno1 5fb06bd0-0bb0-7ffb-45f1-d6edd65f3e03 802-3-ethernet eno1

// \u4FEE\u6539\u5F53\u524D\u7F51\u7EDC\u8FDE\u63A5\u5BF9\u5E94\u7684DNS\u670D\u52A1\u5668\uFF0C\u8FD9\u91CC\u7684\u7F51\u7EDC\u8FDE\u63A5\u53EF\u4EE5\u7528\u540D\u79F0\u6216\u8005UUID\u6765\u6807\u8BC6
$ nmcli con mod eno1 ipv4.dns &quot;114.114.114.114 8.8.8.8&quot;

// \u5C06dns\u914D\u7F6E\u751F\u6548
$ nmcli con up eno1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>2\u3001\u4F7F\u7528\u4F20\u7EDF\u65B9\u6CD5\uFF0C\u624B\u5DE5\u4FEE\u6539 /etc/resolv.conf</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4FEE\u6539 /etc/NetworkManager/NetworkManager.conf \u6587\u4EF6\uFF0C\u5728main\u90E8\u5206\u6DFB\u52A0 \u201Cdns=none\u201D \u9009\u9879\uFF1A

[main]
plugins=ifcfg-rh
dns=none

// NetworkManager\u91CD\u65B0\u88C5\u8F7D\u4E0A\u9762\u4FEE\u6539\u7684\u914D\u7F6E
$ systemctl restart NetworkManager.service

// \u624B\u5DE5\u4FEE\u6539 /etc/resolv.conf
nameserver 114.114.114.114
nameserver 8.8.8.8
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><hr><img style="border:1px red solid;display:block;margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="\u5FAE\u4FE1\u516C\u4F17\u53F7">`,8);function r(l,c){return a}var t=e(s,[["render",r],["__file","dns.html.vue"]]);export{t as default};
