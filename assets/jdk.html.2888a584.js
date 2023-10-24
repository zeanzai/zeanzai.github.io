import{c as e,a as n,F as a,e as r,o as l}from"./app.65f1b23a.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";const c={},o=r(`<h2 id="\u5B89\u88C5jdk" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5jdk" aria-hidden="true">#</a> \u5B89\u88C5jdk</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u628A\u4E0B\u8F7D\u597D\u7684jdk\u5B89\u88C5\u5305\u4E0A\u4F20\u81F3 centos 
\u279C  Downloads scp -r jdk-8u144-linux-x64.tar.gz root@192.168.1.150:/mnt/doc/package 

// \u89E3\u538B\u5230\u5B89\u88C5\u8DEF\u5F84\u4E0B
[root@home jdk1.8.0_144]# tar zxvf /mnt/doc/package/jdk-8u144-linux-x64.tar.gz -C /usr/setup/

// \u4FEE\u6539\u73AF\u5883\u53D8\u91CF
[root@home jdk1.8.0_144]# vi /etc/profile

// \u6700\u540E\u4E00\u884C\u6DFB\u52A0
export JAVA_HOME=/usr/setup/jdk1.8.0_144
export JRE_HOME=$JAVA_HOME/jre
export CLASSPATH=./:$JAVA_HOME/lib:$JAVA_HOME/jre/lib
export PATH=$PATH:$JAVA_HOME/bin

// \u4F7F\u73AF\u5883\u53D8\u91CF\u751F\u6548
[root@home jdk1.8.0_144]# source /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,2),p=n("br",null,null,-1),i=n("br",null,null,-1),u=n("br",null,null,-1),b=["src"];function d(s,m){return l(),e(a,null,[o,n("p",null,[p,i,u,n("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:s.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,b)])],64)}var k=t(c,[["render",d],["__file","jdk.html.vue"]]);export{k as default};
