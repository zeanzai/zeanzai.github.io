import{c as n,a as s,F as l,e as a,o as r}from"./app.aaf87aa5.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const t={},u=a(`<h2 id="\u5B89\u88C5\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u8FC7\u7A0B" aria-hidden="true">#</a> \u5B89\u88C5\u8FC7\u7A0B</h2><ul><li>\u68C0\u67E5ruby\u662F\u5426\u5B89\u88C5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ruby -v
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u66F4\u65B0\u5B89\u88C5\u6E90</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum -y update
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u5B89\u88C5RVM</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
curl -sSL https://get.rvm.io | bash -s stable // \u6B64\u6B65\u9AA4\u65F6\u95F4\u6709\u70B9\u957F
source /etc/profile.d/rvm.sh
rvm -v
	\u8F93\u51FA\uFF1Arvm 1.29.4 (latest) by Michal Papis, Piotr Kuczynski, Wayne E. Seguin [https://rvm.io]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>\u5B89\u88C5\u6700\u65B0\u7684\u7A33\u5B9A\u7248\u672C</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rvm install ruby // \u6B64\u6B65\u9AA4\u65F6\u95F4\u6709\u70B9\u957F
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u6D4B\u8BD5\u662F\u5426\u5B89\u88C5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ruby -v
	\u8F93\u51FA\uFF1Aruby 2.5.1p57 (2018-03-29 revision 63029) [x86_64-linux]
gem -v
	\u8F93\u51FA\uFF1A2.7.7
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>\u5B89\u88C5jekyll\u548Cbundle</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gem install jekyll bundle jekyll-paginate

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u6D4B\u8BD5jekyll\u662F\u5426\u5B89\u88C5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bundle -v
	\u8F93\u51FA\uFF1A Bundler version 1.16.2
jekyll -v
	\u8F93\u51FA\uFF1A jekyll 3.8.3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,15),d=["src"];function c(e,p){return r(),n(l,null,[u,s("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:e.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,d)],64)}var o=i(t,[["render",c],["__file","jekyll.html.vue"]]);export{o as default};
