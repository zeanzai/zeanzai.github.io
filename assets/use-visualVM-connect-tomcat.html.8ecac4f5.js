import{e}from"./app.3140fa71.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},n=e(`<ol><li>\u4E0B\u8F7D\u4F9D\u8D56\u5305\uFF0C\u5E76\u5C06\u4F9D\u8D56\u5305\u653E\u7F6E\u5230Tomcat\u7684lib\u5E93\u5185</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /usr/setup/latestTomcat/lib
wget https://archive.apache.org/dist/tomcat/tomcat-8/v8.5.32/bin/extras/catalina-jmx-remote.jar
chown tomcat: catalina-jmx-remote.jar
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2"><li>\u521B\u5EFA\u7528\u6237\u548C\u5BC6\u7801\u6587\u4EF6</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vi /usr/setup/latestTomcat/conf/jmxremote.access
\u6DFB\u52A0\uFF1A admin readwrite

vi /usr/setup/latestTomcat/conf/jmxremote.password
\u6DFB\u52A0:admin admin

chown tomcat: jmxremote.*
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="3"><li>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vi /usr/setup/latestTomcat/conf/server.xml

&lt;Server port=&quot;8005&quot; shutdown=&quot;SHUTDOWN&quot;&gt;
	&lt;!-- \u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9 --&gt;
	&lt;Listener className=&quot;org.apache.catalina.mbeans.JmxRemoteLifecycleListener&quot; rmiRegistryPortPlatform=&quot;10001&quot; rmiServerPortPlatform=&quot;10002&quot; /&gt;
&lt;/Server&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="4"><li>\u4FEE\u6539\u73AF\u5883\u53D8\u91CF</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vi /usr/setup/latestTomcat/bin/setenv.sh
\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A
JAVA_OPTS=&quot;-Dcom.sun.management.jmxremote.ssl=false
  -Dcom.sun.management.jmxremote.password.file=/usr/setup/latestTomcat/conf/jmxremote.password
  -Dcom.sun.management.jmxremote.access.file=/usr/setup/latestTomcat/conf/jmxremote.access
  -Djava.rmi.server.hostname=10.168.1.200&quot;

chown tomcat: /usr/setup/latestTomcat/bin/setenv.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="5"><li>\u5F00\u653E\u7AEF\u53E3</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>firewall-cmd --add-port=10001/tcp --permanent
firewall-cmd --add-port=10002/tcp --permanent
firewall-cmd --reload
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="6"><li>\u91CD\u542FTomcat</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl restart tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="7"><li>\u6253\u5F00visualvm</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>%JAVA_HOME%\\bin\\jvisualvm.exe
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="8"><li>\u53F3\u952ERemote</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165ip
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="9"><li>\u53F3\u952Ejmx</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\u7AEF\u53E3\u3001\u7528\u6237\u540D\u3001\u5BC6\u7801\u3001\u52FE\u9009\u4FDD\u5B58\u8BC1\u4E66\u548C\u4E0D\u4F7F\u7528ssl
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="10"><li>\u53C2\u8003</li></ol><p>https://my.oschina.net/weidedong/blog/787203</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>jstatd -J-Djava.rmi.server.hostname=10.168.1.200 -J-Djava.security.policy=/usr/setup/jdk1.8.0_144/bin/tools.policy -J-Dcom.sun.management.jmxremote.port=10003 -J-Dcom.sun.management.jmxremote.ssl=false -J-Dcom.sun.management.jmxremote.password.file=/usr/setup/latestTomcat/conf/jmxremote.password -J-Dcom.sun.management.jmxremote.access.file=/usr/setup/latestTomcat/conf/jmxremote.access
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><hr><img style="border:1px red solid;display:block;margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="\u5FAE\u4FE1\u516C\u4F17\u53F7">`,23);function t(l,r){return n}var c=s(a,[["render",t],["__file","use-visualVM-connect-tomcat.html.vue"]]);export{c as default};
