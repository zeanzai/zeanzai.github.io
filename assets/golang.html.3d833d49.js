import{e}from"./app.42286db3.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const n={},a=e(`<h2 id="\u5B89\u88C5\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u8FC7\u7A0B" aria-hidden="true">#</a> \u5B89\u88C5\u8FC7\u7A0B</h2><ul><li><p>\u4E0A\u4F20\u81F3/opt/packages</p></li><li><p>\u52A0\u538B</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tar zxf go*
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u79FB\u52A8\u89E3\u538B\u540E\u7684\u6587\u4EF6\u5230/usr/setup/</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mv -f go* /usr/setup
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u521B\u5EFA\u7F16\u8BD1\u76EE\u5F55</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir /usr/setup/go/gopath
mkdir /usr/setup/go/gopath/bin
mkdir /usr/setup/go/gopath/src
mkdir /usr/setup/go/gopath/pkg
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>\u4FEE\u6539\u73AF\u5883\u53D8\u91CF</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vi /etc/profile

export GOROOT=/usr/setup/go
export GOPATH=/usr/setup/go/gopath
export PATH=$PATH:$JAVA_HOME/bin:$GIT_HOME/bin:$GOROOT/bin:$GOPATH/bin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>\u4F7F\u914D\u7F6E\u751F\u6548</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>source /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u6D4B\u8BD5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go version
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><hr><img style="border:1px red solid;display:block;margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="\u5FAE\u4FE1\u516C\u4F17\u53F7">`,15);function l(r,i){return a}var d=s(n,[["render",l],["__file","golang.html.vue"]]);export{d as default};
