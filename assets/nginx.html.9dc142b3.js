import{c as s,a,F as e,e as p,o as l}from"./app.fa9f1a92.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";const i={},r=p(`<h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><p>nginx\u4E3B\u8981\u7528\u4E8Eweb\u670D\u52A1\u5BB9\u5668\u3001\u8D1F\u8F7D\u5747\u8861\u5668\u3001\u53CD\u5411\u4EE3\u7406\u5668\u3002</p><h2 id="\u4FE1\u606F\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u4FE1\u606F\u7EDF\u8BA1" aria-hidden="true">#</a> \u4FE1\u606F\u7EDF\u8BA1</h2><ul><li>\u4E0B\u8F7D\u5730\u5740\uFF1Ahttp://nginx.org/en/download.html</li><li>\u8F6F\u4EF6\u7248\u672C\uFF1Anginx-1.14.1</li><li>\u5B89\u88C5\u5730\u5740\uFF1A/usr/setup/nginx-1.14.1</li><li>\u914D\u7F6E\u6587\u4EF6\u5730\u5740\uFF1A/usr/setup/nginx-1.14.1/conf/nginx.conf</li><li>\u5360\u7528\u7AEF\u53E3\uFF1A\u8BE6\u89C1\u914D\u7F6E\u6587\u4EF6</li></ul><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><ul><li>\u5B89\u88C5\u4F9D\u8D56\u53CA\u5DE5\u5177</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> -y gcc-c++ pcre pcre-devel zlib zlib-devel openssl openssl-devel
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u521B\u5EFA\u5B89\u88C5\u76EE\u5F55</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> /usr/setup/nginx-1.14.1
<span class="token function">mkdir</span> /usr/setup/nginx-1.14.1/temp
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u89E3\u538B</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">tar</span> zxf nginx-1.14.1.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u914D\u7F6E</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> nginx-1.14.1
./configure --prefix<span class="token operator">=</span>/usr/setup/nginx-1.14.1 <span class="token punctuation">\\</span>
--with-http_stub_status_module <span class="token punctuation">\\</span>
--with-http_gzip_static_module <span class="token punctuation">\\</span>
--with-http_ssl_module <span class="token punctuation">\\</span>
--pid-path<span class="token operator">=</span>/usr/setup/nginx-1.14.1/nginx.pid <span class="token punctuation">\\</span>
--lock-path<span class="token operator">=</span>/usr/setup/nginx-1.14.1/lock/nginx.lock <span class="token punctuation">\\</span>
--error-log-path<span class="token operator">=</span>/usr/setup/nginx-1.14.1/log/error.log <span class="token punctuation">\\</span>
--http-log-path<span class="token operator">=</span>/usr/setup/nginx-1.14.1/log/access.log <span class="token punctuation">\\</span>
--http-client-body-temp-path<span class="token operator">=</span>/usr/setup/nginx-1.14.1/temp/client <span class="token punctuation">\\</span>
--http-proxy-temp-path<span class="token operator">=</span>/usr/setup/nginx-1.14.1/temp/proxy <span class="token punctuation">\\</span>
--http-fastcgi-temp-path<span class="token operator">=</span>/usr/setup/nginx-1.14.1/temp/fastcgi <span class="token punctuation">\\</span>
--http-uwsgi-temp-path<span class="token operator">=</span>/usr/setup/nginx-1.14.1/temp/uwsgi <span class="token punctuation">\\</span>
--http-scgi-temp-path<span class="token operator">=</span>/usr/setup/nginx-1.14.1/temp/scgi

// \u8F93\u51FA
Configuration summary
+ using system PCRE library
+ using system OpenSSL library
+ using system zlib library

nginx path prefix: <span class="token string">&quot;/usr/setup/nginx-1.14.1&quot;</span>
nginx binary file: <span class="token string">&quot;/usr/setup/nginx-1.14.1/sbin/nginx&quot;</span>
nginx modules path: <span class="token string">&quot;/usr/setup/nginx-1.14.1/modules&quot;</span>
nginx configuration prefix: <span class="token string">&quot;/usr/setup/nginx-1.14.1/conf&quot;</span>
nginx configuration file: <span class="token string">&quot;/usr/setup/nginx-1.14.1/conf/nginx.conf&quot;</span>
nginx pid file: <span class="token string">&quot;/usr/setup/nginx-1.14.1/nginx.pid&quot;</span>
nginx error log file: <span class="token string">&quot;/usr/setup/nginx-1.14.1/log/error.log&quot;</span>
nginx http access log file: <span class="token string">&quot;/usr/setup/nginx-1.14.1/log/access.log&quot;</span>
nginx http client request body temporary files: <span class="token string">&quot;/usr/setup/nginx-1.14.1/temp/client&quot;</span>
nginx http proxy temporary files: <span class="token string">&quot;/usr/setup/nginx-1.14.1/temp/proxy&quot;</span>
nginx http fastcgi temporary files: <span class="token string">&quot;/usr/setup/nginx-1.14.1/temp/fastcgi&quot;</span>
nginx http uwsgi temporary files: <span class="token string">&quot;/usr/setup/nginx-1.14.1/temp/uwsgi&quot;</span>
nginx http scgi temporary files: <span class="token string">&quot;/usr/setup/nginx-1.14.1/temp/scgi&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><ul><li>\u5B89\u88C5</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u542F\u52A8\u5E76\u6D4B\u8BD5</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/setup/nginx-1.14.1/sbin
./nginx
<span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> nginx
firewall-cmd --zone<span class="token operator">=</span>public --permanent --add-port<span class="token operator">=</span><span class="token number">80</span>/tcp
firewall-cmd --reload
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>\u914D\u7F6E\u81EA\u542F\u52A8</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> /etc/systemd/system/nginx.service

<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>nginx
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/setup/nginx-1.14.1/sbin/nginx
<span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/usr/setup/nginx-1.14.1/sbin/nginx -s reload
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/usr/setup/nginx-1.14.1/sbin/nginx -s quit
<span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target

systemctl <span class="token builtin class-name">enable</span> nginx.service
systemctl daemon-reload
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,19),u=["src"];function c(n,o){return l(),s(e,null,[r,a("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:n.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,u)],64)}var m=t(i,[["render",c],["__file","nginx.html.vue"]]);export{m as default};
