import{e as n}from"./app.b1502212.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h2 id="_1-\u5728nginx\u4E0A\u9762\u914D\u7F6Ehttps" tabindex="-1"><a class="header-anchor" href="#_1-\u5728nginx\u4E0A\u9762\u914D\u7F6Ehttps" aria-hidden="true">#</a> 1. \u5728Nginx\u4E0A\u9762\u914D\u7F6EHttps</h2><h3 id="_1-1-\u5B89\u88C5nginx" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5B89\u88C5nginx" aria-hidden="true">#</a> 1.1. \u5B89\u88C5Nginx</h3><p>\u5B89\u88C5Nginx\uFF0C\u53EF\u4EE5<a href="/post/dev/install/install-nginx" target="_blank">\u53C2\u8003</a>\u3002\u7279\u522B\u6CE8\u610F\u5B89\u88C5\u7684\u65F6\u5019\u8981\u628Ahttps\u7684\u652F\u6301\u6A21\u5757\u5B89\u88C5\u4E0A\u53BB\u3002 \u4E5F\u5C31\u662F\u4E0B\u9762\u7684\u5185\u5BB9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; --with-http_stub_status_module \\
&gt; --with-http_gzip_static_module \\
&gt; --with-http_ssl_module
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_1-2-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-2-\u914D\u7F6E" aria-hidden="true">#</a> 1.2. \u914D\u7F6E</h3><ol><li>\u5728\u76F8\u5173\u7F51\u7EDC\u670D\u52A1\u5546\u5E73\u53F0\u4E0A\u9762\u7533\u8BF7ssl\u8BC1\u4E66\uFF0C\u5E76\u6309\u7167\u8981\u6C42\u64CD\u4F5C\u6587\u4EF6</li><li>\u5C06ssl\u8BC1\u4E66\u4E0A\u4F20\u5230Nginx\u7684\u76F8\u5173\u4F4D\u7F6E</li><li>\u5728Nginx\u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4E0B\u9762\u5185\u5BB9</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  abc.google.com<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        rewrite ^<span class="token punctuation">(</span>.*<span class="token punctuation">)</span> https://abc.google.com/<span class="token variable">$1</span> permanent<span class="token punctuation">;</span>  <span class="token comment"># \u8868\u793A\u628A\u6307\u5411http\u7684\u8BF7\u6C42\u8F6C\u53D1\u5230https\u4E0A</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
server <span class="token punctuation">{</span>
    listen       <span class="token number">443</span> ssl<span class="token punctuation">;</span>
    server_name  abc.google.com<span class="token punctuation">;</span>

    ssl_certificate      /xxx/xxx/nginx/conf/cert/abc/abc.google.com_ca.crt<span class="token punctuation">;</span>  <span class="token comment"># \u7B2C\u4E8C\u6B65ssl\u8BC1\u4E66\u4E0A\u4F20\u7684\u4F4D\u7F6E</span>
    ssl_certificate_key  /xxx/xxx/nginx/conf/cert/abc/abc.google.com.key<span class="token punctuation">;</span>     <span class="token comment"># \u7B2C\u4E8C\u6B65ssl\u8BC1\u4E66\u4E0A\u4F20\u7684\u4F4D\u7F6E</span>

    ssl_session_cache    shared:SSL:1m<span class="token punctuation">;</span>
    ssl_session_timeout  5m<span class="token punctuation">;</span>

    ssl_ciphers ALL:<span class="token operator">!</span>DH:<span class="token operator">!</span>EXPORT:<span class="token operator">!</span>RC4:+HIGH:+MEDIUM:<span class="token operator">!</span>LOW:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>eNULL<span class="token punctuation">;</span>
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2<span class="token punctuation">;</span>
    ssl_prefer_server_ciphers  on<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        root   html/abc<span class="token punctuation">;</span>  <span class="token comment"># \u7F51\u7AD9\u5B58\u653E\u4F4D\u7F6E</span>
        index  index.html index.htm<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="_1-3-\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_1-3-\u95EE\u9898" aria-hidden="true">#</a> 1.3. \u95EE\u9898</h3><ol><li>\u9700\u8981\u5F00\u653E443\u300180\u7AEF\u53E3</li><li>ssl\u8BC1\u4E66\u9700\u8981\u6309\u7F51\u7EDC\u670D\u52A1\u5546\u8981\u6C42\u4FEE\u6539</li></ol><hr><img style="border:1px red solid;display:block;margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="\u5FAE\u4FE1\u516C\u4F17\u53F7">`,11);function p(t,l){return e}var i=s(a,[["render",p],["__file","nginx-config-https.html.vue"]]);export{i as default};
