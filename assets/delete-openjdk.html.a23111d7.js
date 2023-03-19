import{c as a,a as s,F as e,e as p,o}from"./app.85c29f24.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const t={},r=p(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// \u67E5\u770BJava
<span class="token punctuation">[</span>root@localhost local<span class="token punctuation">]</span><span class="token comment"># java -version</span>
openjdk version <span class="token string">&quot;1.8.0_101&quot;</span>
OpenJDK Runtime Environment <span class="token punctuation">(</span>build <span class="token number">1.8</span>.0_101-b13<span class="token punctuation">)</span>
OpenJDK <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span>build <span class="token number">25.101</span>-b13, mixed mode<span class="token punctuation">)</span>

// \u67E5\u770B\u6709\u54EA\u4E9B\u5B89\u88C5\u5305
<span class="token punctuation">[</span>root@localhost northmeter<span class="token punctuation">]</span><span class="token comment">#  rpm -qa | grep java</span>
javapackages-tools-3.4.1-11.el7.noarch
java-1.8.0-openjdk-1.8.0.101-3.b13.el7_2.x86_64
python-javapackages-3.4.1-11.el7.noarch
tzdata-java-2016f-1.el7.noarch
java-1.7.0-openjdk-headless-1.7.0.111-2.6.7.2.el7_2.x86_64
java-1.8.0-openjdk-headless-1.8.0.101-3.b13.el7_2.x86_64
java-1.7.0-openjdk-1.7.0.111-2.6.7.2.el7_2.x86_64

// \u5378\u8F7D
<span class="token punctuation">[</span>root@localhost northmeter<span class="token punctuation">]</span><span class="token comment"># rpm -e --nodeps java-1.8.0-openjdk-1.8.0.101-3.b13.el7_2.x86_64</span>
<span class="token punctuation">[</span>root@localhost northmeter<span class="token punctuation">]</span><span class="token comment"># rpm -e --nodeps java-1.7.0-openjdk-headless-1.7.0.111-2.6.7.2.el7_2.x86_64</span>
\u8B66\u544A\uFF1A/usr/lib/jvm/java-1.7.0-openjdk-1.7.0.111-2.6.7.2.el7_2.x86_64/jre/lib/security/local_policy.jar \u5DF2\u53E6\u5B58\u4E3A /usr/lib/jvm/java-1.7.0-openjdk-1.7.0.111-2.6.7.2.el7_2.x86_64/jre/lib/security/local_policy.jar.rpmsave
\u8B66\u544A\uFF1A/usr/lib/jvm/java-1.7.0-openjdk-1.7.0.111-2.6.7.2.el7_2.x86_64/jre/lib/security/US_export_policy.jar \u5DF2\u53E6\u5B58\u4E3A /usr/lib/jvm/java-1.7.0-openjdk-1.7.0.111-2.6.7.2.el7_2.x86_64/jre/lib/security/US_export_policy.jar.rpmsave
<span class="token punctuation">[</span>root@localhost northmeter<span class="token punctuation">]</span><span class="token comment"># rpm -e --nodeps java-1.8.0-openjdk-headless-1.8.0.101-3.b13.el7_2.x86_64</span>
<span class="token punctuation">[</span>root@localhost northmeter<span class="token punctuation">]</span><span class="token comment"># rpm -e --nodeps java-1.7.0-openjdk-1.7.0.111-2.6.7.2.el7_2.x86_64</span>

// \u5220\u9664\u5B8C\u6BD5\uFF0C\u6D4B\u8BD5
<span class="token punctuation">[</span>root@localhost northmeter<span class="token punctuation">]</span><span class="token comment">#  rpm -qa | grep java</span>
javapackages-tools-3.4.1-11.el7.noarch
python-javapackages-3.4.1-11.el7.noarch
tzdata-java-2016f-1.el7.noarch
<span class="token punctuation">[</span>root@localhost northmeter<span class="token punctuation">]</span><span class="token comment"># java -version</span>
-bash: /usr/bin/java: \u6CA1\u6709\u90A3\u4E2A\u6587\u4EF6\u6216\u76EE\u5F55
<span class="token punctuation">[</span>root@localhost northmeter<span class="token punctuation">]</span><span class="token comment"># java</span>
-bash: /usr/bin/java: \u6CA1\u6709\u90A3\u4E2A\u6587\u4EF6\u6216\u76EE\u5F55
<span class="token punctuation">[</span>root@localhost northmeter<span class="token punctuation">]</span><span class="token comment"># javac</span>
bash: javac: \u672A\u627E\u5230\u547D\u4EE4<span class="token punctuation">..</span>.
<span class="token punctuation">[</span>root@localhost northmeter<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div>`,1),c=["src"];function u(n,i){return o(),a(e,null,[r,s("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:n.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,c)],64)}var k=l(t,[["render",u],["__file","delete-openjdk.html.vue"]]);export{k as default};
