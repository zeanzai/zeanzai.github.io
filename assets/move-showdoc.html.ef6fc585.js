import{c as a,a as n,F as e,e as p,d as l,o as c}from"./app.aaf87aa5.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const t={},i=p(`<h2 id="_1-\u65E7\u673A\u8FC1\u79FB\u65B0\u673A" tabindex="-1"><a class="header-anchor" href="#_1-\u65E7\u673A\u8FC1\u79FB\u65B0\u673A" aria-hidden="true">#</a> 1. \u65E7\u673A\u8FC1\u79FB\u65B0\u673A</h2><ul><li>\u65B0\u673A\u4E0A\u5B89\u88C5php</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> -y php php-gd php-fpm php-mcrypt php-mbstring php-mysql php-pdo
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u51FA\u73B0\u7F3A\u5C11libmysqlclient.so\u7684\u95EE\u9898\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> -ivh Percona-XtraDB-Cluster-shared-55-5.5.37-25.10.756.el6.x86_64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u65E7\u673A\u5907\u4EFD</li></ul><p>\u5C06showdoc\u62F7\u8D1D</p><ul><li>\u914D\u7F6ENginx</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> showdoc

<span class="token function">vi</span> nginx.conf

server <span class="token punctuation">{</span>
    listen       <span class="token number">8100</span><span class="token punctuation">;</span>
    server_name  <span class="token number">127.0</span>.0.1<span class="token punctuation">;</span>
    root         html/showdoc<span class="token punctuation">;</span>
    index index.php index.html
    error_page  <span class="token number">404</span>              /404.html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> /40x.html <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
    location ~ <span class="token punctuation">\\</span>.php$ <span class="token punctuation">{</span>
        root           html/showdoc<span class="token punctuation">;</span>
        fastcgi_pass   <span class="token number">127.0</span>.0.1:9000<span class="token punctuation">;</span>
        fastcgi_index  index.php<span class="token punctuation">;</span>
        fastcgi_param  SCRIPT_FILENAME  <span class="token variable">$document_root</span><span class="token variable">$fastcgi_script_name</span><span class="token punctuation">;</span>
        include        fastcgi_params<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    location ~ /<span class="token punctuation">\\</span>.ht <span class="token punctuation">{</span>
        deny  all<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><ul><li><p>\u5C06\u5907\u4EFD\u6587\u4EF6\u4E0A\u4F20\u5230showdoc\u4E0A\u9762</p></li><li><p>\u5F00\u653E\u7AEF\u53E3</p></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-cmd --zone<span class="token operator">=</span>public --permanent --add-port<span class="token operator">=</span><span class="token number">8100</span>/tcp
firewall-cmd --reload
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u91CD\u542FNginx\u548Cphp-fpm</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl reload nginx
systemctl <span class="token builtin class-name">enable</span> php-fpm
systemctl restart php-fpm
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u6D4F\u89C8\u5668\u8F93\u5165</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>http://10.168.1.200:8100/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u62A5 ./Application/Runtime/Cache/Home/2a94b8bda04ff446dcedd42276fc99ee.php \u9519\u8BEF</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rm</span> -rf /usr/setup/nginx-1.14.1/html/showdoc/Application/Runtime
<span class="token function">chmod</span> <span class="token number">777</span> -R showdoc
setenforce <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_2-\u5B89\u88C5\u65B0\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5\u65B0\u7248\u672C" aria-hidden="true">#</a> 2. \u5B89\u88C5\u65B0\u7248\u672C</h2><ul><li>\u4FEE\u6539Nginx\u914D\u7F6E\u6587\u4EF6</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">8103</span><span class="token punctuation">;</span>
    server_name  <span class="token number">127.0</span>.0.1<span class="token punctuation">;</span>
    root         html/newshowdoc<span class="token punctuation">;</span>
    index index.php index.html
    error_page  <span class="token number">404</span>              /404.html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> /40x.html <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
    location ~ <span class="token punctuation">\\</span>.php$ <span class="token punctuation">{</span>
        root           html/newshowdoc<span class="token punctuation">;</span>
        fastcgi_pass   <span class="token number">127.0</span>.0.1:9000<span class="token punctuation">;</span>
        fastcgi_index  index.php<span class="token punctuation">;</span>
        fastcgi_param  SCRIPT_FILENAME  <span class="token variable">$document_root</span><span class="token variable">$fastcgi_script_name</span><span class="token punctuation">;</span>
        include        fastcgi_params<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    location ~ /<span class="token punctuation">\\</span>.ht <span class="token punctuation">{</span>
        deny  all<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><ul><li>\u5F00\u653E\u7AEF\u53E3</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-cmd --zone<span class="token operator">=</span>public --permanent --add-port<span class="token operator">=</span><span class="token number">8103</span>/tcp
firewall-cmd --zone<span class="token operator">=</span>public --permanent --remove-port<span class="token operator">=</span><span class="token number">8103</span>/tcp
firewall-cmd --reload
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,22),o=l("\u4E0A\u4F20\u6587\u4EF6 "),u=["src"];function b(s,m){return c(),a(e,null,[i,n("ul",null,[n("li",null,[o,n("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:s.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,u)])])],64)}var k=r(t,[["render",b],["__file","move-showdoc.html.vue"]]);export{k as default};
