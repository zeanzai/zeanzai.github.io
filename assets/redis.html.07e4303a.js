import{c as n,a as e,F as a,e as l,d as r,o as i}from"./app.bfe2d958.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";const u={},d=l(`<h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><p>redis\uFF0C\u6211\u4EEC\u5E38\u7528\u6765\u505A\u7F13\u5B58\uFF0C\u4E5F\u662F\u8457\u540D\u7684nosql\u5B58\u50A8\u4E2D\u95F4\u4EF6\u3002</p><h2 id="\u4FE1\u606F\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u4FE1\u606F\u7EDF\u8BA1" aria-hidden="true">#</a> \u4FE1\u606F\u7EDF\u8BA1</h2><ul><li>\u4E0B\u8F7D\u5730\u5740\uFF1A\u6682\u65E0\u3002</li><li>\u8F6F\u4EF6\u7248\u672C\uFF1A redis5.0.3</li><li>\u5B89\u88C5\u5730\u5740\uFF1A /usr/setup/redis5.0.3</li><li>\u914D\u7F6E\u6587\u6863\u5730\u5740\uFF1A /usr/setup/redis5.0.3/6379.conf</li><li>\u5360\u7528\u7AEF\u53E3\uFF1A6379</li><li>\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF1A\u65E0</li></ul><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><ul><li>\u5B89\u88C5gcc\u7F16\u8BD1\u5DE5\u5177\u5305</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ yum update -y
$ yum install -y gcc
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u89E3\u538B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ tar zxf /opt/package/redis5.0.3.tar.gz -C /opt/unziped/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u521B\u5EFA\u6587\u4EF6\u5939</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ mkdir /usr/setup/redis5.0.3
$ mkdir /usr/setup/redis5.0.3/log
$ mkdir /usr/setup/redis5.0.3/data
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u8FDB\u5165\u89E3\u538B\u540E\u7684redis\u76EE\u5F55\u5E76\u6267\u884Cmake\u547D\u4EE4</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ make
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u6267\u884C\u5B89\u88C5\u547D\u4EE4</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ make install PREFIX=/usr/setup/redis5.0.3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u62F7\u8D1D\u914D\u7F6E\u6587\u4EF6</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ cp /opt/unziped/redis5.0.3/6379.conf /usr/setup/redis5.0.3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u6253\u5F00\u5B88\u62A4\u8FDB\u7A0B\u8FD0\u884C\u6A21\u5F0F</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\uFF0C\u5C06daemonize\u7684\u503C\u6539\u4E3Ayes
$ vi /usr/setup/redis5.0.3/6379.conf
port 6379
bind 191.168.1.150
daemonize yes
requirepass 123456
appendonly yes
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>\u52A0\u5165\u5F00\u673A\u81EA\u542F</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ ./opt/unziped/redis5.0.3/utils/install_server.sh
Welcome to the redis service installer
This script will help you easily set up a running redis server
Please select the redis port for this instance: [6379]
Selecting default: 6379
Please select the redis config file name [/etc/redis/6379.conf] /usr/setup/redis5.0.3/6379.conf
Please select the redis log file name [/var/log/redis_6379.log] /usr/setup/redis5.0.3/log/redis.log
Please select the data directory for this instance [/var/lib/redis/6379] /usr/setup/redis5.0.3/data/6379
Please select the redis executable path [] /usr/setup/redis5.0.3/bin/redis-server
Selected config:
Port           : 6379
Config file    : /usr/setup/redis5.0.3/6379.conf
Log file       : /usr/setup/redis5.0.3/log/6379.log
Data dir       : /usr/setup/redis5.0.3/data
Executable     : /usr/setup/redis5.0.3/bin/redis-server
Cli Executable : /usr/setup/redis5.0.3/bin/redis-cli
Is this ok? Then press ENTER to go on or Ctrl-C to abort.
Copied /tmp/6379.conf =&gt; /etc/init.d/redis_6379
Installing service...
Successfully added to chkconfig!
Successfully added to runlevels 345!
Starting Redis server...
Installation successful!
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><ul><li>\u5F00\u542F\u7AEF\u53E3\uFF0C\u5E76\u91CD\u542F\u9632\u706B\u5899</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ firewall-cmd --zone=public --permanent --add-port=6379/tcp
$ firewall-cmd --reload
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u91CD\u542F\u540E\u6D4B\u8BD5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. \u672C\u673A\u8FDE\u63A5\u6D4B\u8BD5
$ cd /usr/setup/redis5.0.3/bin/
$ ./redis-cli -h 192.168.1.150 -p 6379
127.0.0.1:6379&gt; info

2. \u5F00\u53D1\u673A\u8FDE\u63A5\u6D4B\u8BD5
cmd: redis-cli.exe -h 10.168.0.120 -p 6379
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u7B80\u5355\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a> \u7B80\u5355\u4F7F\u7528</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>./redis-cli
127.0.0.1:6379&gt; ping
PONG
127.0.0.1:6379&gt; set a 10
OK
127.0.0.1:6379&gt; get a
&quot;10&quot;
127.0.0.1:6379&gt; incr a
(integer) 11
127.0.0.1:6379&gt; get a
&quot;11&quot;
127.0.0.1:6379&gt; decr a
(integer) 10
127.0.0.1:6379&gt; keys *
1) &quot;a&quot;
127.0.0.1:6379&gt; del a
(integer) 1
127.0.0.1:6379&gt; keys *
(empty list or set)
127.0.0.1:6379&gt; exit // \u5173\u95ED\u5BA2\u6237\u7AEF
127.0.0.1:6379&gt; shutdown // \u5173\u95ED\u670D\u52A1\u7AEF
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> \u53C2\u8003\u94FE\u63A5</h2>`,28),p=e("li",null,"https://www.cnblogs.com/zhang-ke/p/5981108.html",-1),c=e("li",null,"https://blog.csdn.net/sjhuangx/article/details/79633112",-1),b=e("li",null,"https://redis.io/",-1),o=e("li",null,"http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html",-1),m=r("https://blog.csdn.net/amandalm/article/details/79516745 "),g=["src"];function h(s,x){return i(),n(a,null,[d,e("ol",null,[p,c,b,o,e("li",null,[m,e("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:s.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,g)])])],64)}var _=t(u,[["render",h],["__file","redis.html.vue"]]);export{_ as default};
