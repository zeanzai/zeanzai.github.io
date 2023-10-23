import{e as n}from"./app.4650a50d.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//---------- \u670D\u52A1\u7BA1\u7406
// \u670D\u52A1\u72B6\u6001|\u5173\u95ED\u670D\u52A1\uFF5C\u542F\u52A8\u670D\u52A1\uFF5C\u91CD\u542F\u670D\u52A1
systemctl status|stop|start|restart xxx 
// \u91CD\u65B0\u52A0\u8F7D\u670D\u52A1
systemctl daemon-reload 
// \u662F\u5426\u5DF2\u7ECF\u52A0\u5165\u81EA\u542F\u52A8
systemctl is-enabled xxx

//---------- \u9632\u706B\u5899\u7BA1\u7406
// \u9632\u706B\u5899
firewall-cmd -h
firewall-cmd --zone=public --list-ports

// --------- \u7AEF\u53E3\u76D1\u542C\u72B6\u51B5
netstat -tunlp

// --------- \u78C1\u76D8\u7BA1\u7406
fdisk -l
lsblk 

// --------- \u590D\u5236\u5230\u8FDC\u7A0B\u670D\u52A1\u5668
scp -r jdk-8u144-linux-x64.tar.gz root@192.168.1.150:/mnt/doc/package 

// --------- docker
docker logs -f -t --tail 100   529a4d9afd8e

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><hr><p><br><br><br><img style="border:1px red solid;display:block;margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="\u5FAE\u4FE1\u516C\u4F17\u53F7"></p>`,3);function r(l,p){return e}var i=s(a,[["render",r],["__file","command.html.vue"]]);export{i as default};
