import{e as n}from"./app.77a131fa.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const a={},s=n(`<h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><p>tomcat\u4F5C\u4E3Ajavaweb\u5E94\u7528\u670D\u52A1\u5668\uFF0C\u5E94\u7528\u5E7F\u6CDB\uFF0C\u5728\u6B64\u4E0D\u518D\u4ECB\u7ECD\u3002</p><h2 id="\u4FE1\u606F\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u4FE1\u606F\u7EDF\u8BA1" aria-hidden="true">#</a> \u4FE1\u606F\u7EDF\u8BA1</h2><ul><li>\u4E0B\u8F7D\u5730\u5740\uFF1Ahttps://mirrors.tuna.tsinghua.edu.cn/apache/tomcat/tomcat-8/</li><li>\u7248\u672C\uFF1ATomcat8.5.32</li><li>\u4F9D\u8D56\uFF1Ajdk</li></ul><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><ul><li>\u89E3\u538B\u6587\u4EF6</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ tar zxf apache-tomcat-8.5.32.tar.gz -C /usr/setup/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u521B\u5EFA\u7528\u6237\uFF0C\u5E76\u5C06home\u76EE\u5F55\u653E\u7F6E\u5230\u5B89\u88C5\u76EE\u5F55\u4E0B\u9762</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ useradd -m -U -d /usr/setup/apache-tomcat-8.5.32 -s /bin/false tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>\u9644\uFF1A <br> $ useradd --help <br> -b, --base-dir BASE_DIR \u65B0\u8D26\u6237\u7684\u4E3B\u76EE\u5F55\u7684\u57FA\u76EE\u5F55 <br> -c, --comment COMMENT \u65B0\u8D26\u6237\u7684 GECOS \u5B57\u6BB5 <br> -d, --home-dir HOME_DIR \u65B0\u8D26\u6237\u7684\u4E3B\u76EE\u5F55 <br> -D, --defaults \u663E\u793A\u6216\u66F4\u6539\u9ED8\u8BA4\u7684 useradd \u914D\u7F6E <br> -e, --expiredate EXPIRE_DATE \u65B0\u8D26\u6237\u7684\u8FC7\u671F\u65E5\u671F <br> -f, --inactive INACTIVE \u65B0\u8D26\u6237\u7684\u5BC6\u7801\u4E0D\u6D3B\u52A8\u671F <br> -g, --gid GROUP \u65B0\u8D26\u6237\u4E3B\u7EC4\u7684\u540D\u79F0\u6216 ID <br> -G, --groups GROUPS \u65B0\u8D26\u6237\u7684\u9644\u52A0\u7EC4\u5217\u8868 <br> -h, --help \u663E\u793A\u6B64\u5E2E\u52A9\u4FE1\u606F\u5E76\u63A8\u51FA <br> -k, --skel SKEL_DIR \u4F7F\u7528\u6B64\u76EE\u5F55\u4F5C\u4E3A\u9AA8\u67B6\u76EE\u5F55 <br> -K, --key KEY=VALUE \u4E0D\u4F7F\u7528 /etc/login.defs \u4E2D\u7684\u9ED8\u8BA4\u503C <br> -l, --no-log-init \u4E0D\u8981\u5C06\u6B64\u7528\u6237\u6DFB\u52A0\u5230\u6700\u8FD1\u767B\u5F55\u548C\u767B\u5F55\u5931\u8D25\u6570\u636E\u5E93 <br> -m, --create-home \u521B\u5EFA\u7528\u6237\u7684\u4E3B\u76EE\u5F55 <br> -M, --no-create-home \u4E0D\u521B\u5EFA\u7528\u6237\u7684\u4E3B\u76EE\u5F55 <br> -N, --no-user-group \u4E0D\u521B\u5EFA\u540C\u540D\u7684\u7EC4 <br> -o, --non-unique \u5141\u8BB8\u4F7F\u7528\u91CD\u590D\u7684 UID \u521B\u5EFA\u7528\u6237 <br> -p, --password PASSWORD \u52A0\u5BC6\u540E\u7684\u65B0\u8D26\u6237\u5BC6\u7801 <br> -r, --system \u521B\u5EFA\u4E00\u4E2A\u7CFB\u7EDF\u8D26\u6237 <br> -R, --root CHROOT_DIR chroot \u5230\u7684\u76EE\u5F55 <br> -s, --shell SHELL \u65B0\u8D26\u6237\u7684\u767B\u5F55 shell <br> -u, --uid UID \u65B0\u8D26\u6237\u7684\u7528\u6237 ID <br> -U, --user-group \u521B\u5EFA\u4E0E\u7528\u6237\u540C\u540D\u7684\u7EC4 <br> -Z, --selinux-user SEUSER \u4E3A SELinux \u7528\u6237\u6620\u5C04\u4F7F\u7528\u6307\u5B9A SEUSER <br></p></blockquote><ul><li>\u521B\u5EFA\u5FEB\u6377\u65B9\u5F0F</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ ln -s /usr/setup/apache-tomcat-* /usr/setup/latestTomcat
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u6539\u53D8\u6587\u4EF6\u6240\u5C5E\u7EC4\u548C\u7528\u6237\u4E3ATomcat</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ chown -R tomcat: /usr/setup/apache-tomcat-*
$ chown -R tomcat: /usr/setup/latestTomcat
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u53EF\u6267\u884C\u72B6\u6001</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ chmod +x /usr/setup/latestTomcat/bin/*.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u521B\u5EFA/etc/systemd/system/tomcat.service\u6587\u4EF6</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ vi /etc/systemd/system/tomcat.service
// \u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9
[Unit]
Description=Tomcat 8.5.32 servlet container
After=network.target
[Service]
Type=forking
User=tomcat
Group=tomcat
Environment=&quot;JAVA_HOME=/usr/setup/jdk1.8.0_144&quot;
Environment=&quot;CATALINA_BASE=/usr/setup/latestTomcat&quot;
Environment=&quot;CATALINA_HOME=/usr/setup/latestTomcat&quot;
Environment=&quot;CATALINA_PID=/usr/setup/latestTomcat/temp/tomcat.pid&quot;
ExecStart=/usr/setup/latestTomcat/bin/startup.sh
ExecStop=/usr/setup/latestTomcat/bin/shutdown.sh
[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ul><li>\u8BA9\u521B\u5EFA\u7684\u670D\u52A1\u751F\u6548\uFF0C\u7136\u540E\u542F\u52A8Tomcat</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl daemon-reload
systemctl start tomcat
systemctl status tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u52A0\u5165 automatically started at boot time</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl enable tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u5F00\u653E\u7AEF\u53E3</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>firewall-cmd --zone=public --permanent --add-port=8080/tcp
firewall-cmd --zone=public --permanent --add-port=8005/tcp\uFF08\u672A\u6267\u884C\uFF09
firewall-cmd --zone=public --permanent --add-port=8009/tcp\uFF08\u672A\u6267\u884C\uFF09
firewall-cmd --reload
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><h3 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h3><h4 id="\u914D\u7F6Emanager\u7684\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Emanager\u7684\u7528\u6237" aria-hidden="true">#</a> \u914D\u7F6Emanager\u7684\u7528\u6237</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ vi /usr/setup/latestTomcat/conf/tomcat-users.xml
  // \u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9
  &lt;role rolename=&quot;admin-gui&quot;/&gt;
  &lt;role rolename=&quot;manager-gui&quot;/&gt;
  &lt;user username=&quot;tomcat&quot; password=&quot;tomcat&quot; roles=&quot;admin-gui, manager-gui&quot;/&gt;
  &lt;!-- &lt;role rolename=&quot;manager-script&quot;/&gt;
  &lt;user username=&quot;tomcat&quot; password=&quot;tomcat&quot; roles=&quot;admin-gui, manager-gui, manager-script&quot;/&gt; --&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#\u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55" aria-hidden="true">#</a> \u5141\u8BB8\u8FDC\u7A0B\u767B\u5F55</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ vi /usr/setup/latestTomcat/webapps/manager/META-INF/context.xml
	&lt;Context antiResourceLocking=&quot;false&quot; privileged=&quot;true&quot; &gt;
	    &lt;!-- \u628A\u4E0B\u9762\u4E00\u884C\u6CE8\u91CA\u6389 --&gt;
		&lt;!--  &lt;Valve className=&quot;org.apache.catalina.valves.RemoteAddrValve&quot; allow=&quot;127\\.\\d+\\.\\d+\\.\\d+|::1|0:0:0:0:0:0:0:1&quot; /&gt; --&gt;
		&lt;Manager sessionAttributeValueClassNameFilter=&quot;java\\.lang\\.(?:Boolean|Integer|Long|Number|String)|org\\.apache\\.catalina\\.filters\\.CsrfPreventionFilter\\$LruCache(?:\\$1)?|java\\.util\\.(?:Linked)?HashMap&quot;/&gt;
	&lt;/Context&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="tomcat\u542F\u52A8\u6162" tabindex="-1"><a class="header-anchor" href="#tomcat\u542F\u52A8\u6162" aria-hidden="true">#</a> tomcat\u542F\u52A8\u6162</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Tomcat\u542F\u52A8\u6162\u7684\u89E3\u51B3\u529E\u6CD5
\u7B2C\u4E00\u79CD :
\u901A\u8FC7\u4FEE\u6539Tomcat\u542F\u52A8\u6587\u4EF6 -Djava.security.egd=file:/dev/urandom \u901A\u8FC7\u4FEE\u6539JRE\u4E2D\u7684java.security\u6587\u4EF6 securerandom.source=file:/dev/urandom

\u7B2C\u4E8C\u79CD(\u63A8\u8350):
yum -y install rng-tools
##\u542F\u52A8\u71B5\u670D\u52A1
systemctl start rngd
systemctl restart rngd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u8C03\u4F18" tabindex="-1"><a class="header-anchor" href="#\u8C03\u4F18" aria-hidden="true">#</a> \u8C03\u4F18</h3><h4 id="\u8C03\u4F18\u524D" tabindex="-1"><a class="header-anchor" href="#\u8C03\u4F18\u524D" aria-hidden="true">#</a> \u8C03\u4F18\u524D</h4><p>\u8C03\u4F18\u4E4B\u524D\u53EF\u4EE5\u901A\u8FC7tomcat\u81EA\u5E26\u7684\u7BA1\u7406\u754C\u9762\u67E5\u770B\u670D\u52A1\u5668\u3001jvm\u7B49\u4FE1\u606F\u3002 <img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/install-tomcat/01.png" alt="\u8C03\u4F18\u524D" loading="lazy"></p><h4 id="\u8C03\u4F18-1" tabindex="-1"><a class="header-anchor" href="#\u8C03\u4F18-1" aria-hidden="true">#</a> \u8C03\u4F18</h4><h5 id="\u4FEE\u6539tomcat\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539tomcat\u914D\u7F6E" aria-hidden="true">#</a> \u4FEE\u6539tomcat\u914D\u7F6E</h5><h6 id="\u6253\u5F00\u9ED8\u8BA4\u88AB\u6CE8\u91CA\u7684\u8FDE\u63A5\u6C60\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6253\u5F00\u9ED8\u8BA4\u88AB\u6CE8\u91CA\u7684\u8FDE\u63A5\u6C60\u914D\u7F6E" aria-hidden="true">#</a> \u6253\u5F00\u9ED8\u8BA4\u88AB\u6CE8\u91CA\u7684\u8FDE\u63A5\u6C60\u914D\u7F6E</h6><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ vi /usr/setup/latestTomcat/conf/server.xml
\u9ED8\u8BA4\uFF1A\u3010\u9ED8\u8BA4\u662F\u6CE8\u91CA\u7684\u3011
&lt;!--
    &lt;Executor name=&quot;tomcatThreadPool&quot; namePrefix=&quot;catalina-exec-&quot;
        maxThreads=&quot;150&quot; minSpareThreads=&quot;4&quot;/&gt;
    --&gt;

\u4FEE\u6539\u540E\uFF1A
&lt;Executor
        name=&quot;tomcatThreadPool&quot;
        namePrefix=&quot;catalina-exec-&quot;
        maxThreads=&quot;1000&quot;
        minSpareThreads=&quot;30&quot;
        maxIdleTime=&quot;60000&quot;
        prestartminSpareThreads = &quot;true&quot;
        maxQueueSize = &quot;100&quot;
/&gt;

\u53C2\u6570\u89E3\u91CA\uFF1A
maxThreads\uFF0C\u6700\u5927\u5E76\u53D1\u6570\uFF0C\u9ED8\u8BA4\u8BBE\u7F6E 200\uFF0C\u4E00\u822C\u5EFA\u8BAE\u5728 500 ~ 800\uFF0C\u6839\u636E\u786C\u4EF6\u8BBE\u65BD\u548C\u4E1A\u52A1\u6765\u5224\u65AD
minSpareThreads\uFF0CTomcat \u521D\u59CB\u5316\u65F6\u521B\u5EFA\u7684\u7EBF\u7A0B\u6570\uFF0C\u9ED8\u8BA4\u8BBE\u7F6E 25
prestartminSpareThreads\uFF0C\u5728 Tomcat \u521D\u59CB\u5316\u7684\u65F6\u5019\u5C31\u521D\u59CB\u5316 minSpareThreads \u7684\u53C2\u6570\u503C\uFF0C\u5982\u679C\u4E0D\u7B49\u4E8E true\uFF0CminSpareThreads \u7684\u503C\u5C31\u6CA1\u5565\u6548\u679C\u4E86
maxQueueSize\uFF0C\u6700\u5927\u7684\u7B49\u5F85\u961F\u5217\u6570\uFF0C\u8D85\u8FC7\u5219\u62D2\u7EDD\u8BF7\u6C42
maxIdleTime\uFF0C\u5982\u679C\u5F53\u524D\u7EBF\u7A0B\u5927\u4E8E\u521D\u59CB\u5316\u7EBF\u7A0B\uFF0C\u90A3\u7A7A\u95F2\u7EBF\u7A0B\u5B58\u6D3B\u7684\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2\uFF0C\u9ED8\u8BA460000=60\u79D2=1\u5206\u949F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h6 id="\u4FEE\u6539\u9ED8\u8BA4\u7684\u8FDE\u63A5\u5668\u53C2\u6570\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u9ED8\u8BA4\u7684\u8FDE\u63A5\u5668\u53C2\u6570\u914D\u7F6E" aria-hidden="true">#</a> \u4FEE\u6539\u9ED8\u8BA4\u7684\u8FDE\u63A5\u5668\u53C2\u6570\u914D\u7F6E</h6><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ vi /usr/setup/latestTomcat/conf/server.xml
\u9ED8\u8BA4\u503C\uFF1A
&lt;Connector port=&quot;8080&quot; protocol=&quot;HTTP/1.1&quot;
               connectionTimeout=&quot;20000&quot;
               redirectPort=&quot;8443&quot; /&gt;

\u4FEE\u6539\u540E\uFF1A
&lt;Connector
   executor=&quot;tomcatThreadPool&quot;
   port=&quot;8080&quot;
   protocol=&quot;org.apache.coyote.http11.Http11Nio2Protocol&quot;
   connectionTimeout=&quot;20000&quot;
   maxConnections=&quot;10000&quot;
   redirectPort=&quot;8443&quot;
   enableLookups=&quot;false&quot;
   acceptCount=&quot;100&quot;
   maxPostSize=&quot;10485760&quot;
   maxHttpHeaderSize=&quot;8192&quot;
   disableUploadTimeout=&quot;true&quot;
   URIEncoding=&quot;utf-8&quot;
/&gt;

\u53C2\u6570\u89E3\u91CA\uFF1A
protocol\uFF0CTomcat 8 \u8BBE\u7F6E nio2 \u66F4\u597D\uFF1Aorg.apache.coyote.http11.Http11Nio2Protocol\uFF08\u5982\u679C\u8FD9\u4E2A\u7528\u4E0D\u4E86\uFF0C\u5C31\u7528\u4E0B\u9762\u90A3\u4E2A\uFF09
protocol\uFF0CTomcat 6\u30017 \u8BBE\u7F6E nio \u66F4\u597D\uFF1Aorg.apache.coyote.http11.Http11NioProtocol
enableLookups\uFF0C\u7981\u7528DNS\u67E5\u8BE2\uFF0Ctomcat 8 \u9ED8\u8BA4\u5DF2\u7ECF\u662F\u7981\u7528\u4E86\u3002
maxConnections\uFF0C\u6700\u5927\u8FDE\u63A5\u6570\uFF0Ctomcat 8 \u9ED8\u8BA4\u8BBE\u7F6E 10000
acceptCount\uFF0C\u6307\u5B9A\u5F53\u6240\u6709\u53EF\u4EE5\u4F7F\u7528\u7684\u5904\u7406\u8BF7\u6C42\u7684\u7EBF\u7A0B\u6570\u90FD\u88AB\u4F7F\u7528\u65F6\uFF0C\u53EF\u4EE5\u653E\u5230\u5904\u7406\u961F\u5217\u4E2D\u7684\u8BF7\u6C42\u6570\uFF0C\u8D85\u8FC7\u8FD9\u4E2A\u6570\u7684\u8BF7\u6C42\u5C06\u4E0D\u4E88\u5904\u7406\uFF0C\u9ED8\u8BA4\u8BBE\u7F6E 100
maxPostSize\uFF0C\u4EE5 FORM URL \u53C2\u6570\u65B9\u5F0F\u7684 POST \u63D0\u4EA4\u65B9\u5F0F\uFF0C\u9650\u5236\u63D0\u4EA4\u6700\u5927\u7684\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u662F 2097152(2\u5146)\uFF0C\u5B83\u4F7F\u7528\u7684\u5355\u4F4D\u662F\u5B57\u8282\u300210485760 \u4E3A 10M\u3002\u5982\u679C\u8981\u7981\u7528\u9650\u5236\uFF0C\u5219\u53EF\u4EE5\u8BBE\u7F6E\u4E3A -1\u3002
maxHttpHeaderSize\uFF0Chttp\u8BF7\u6C42\u5934\u4FE1\u606F\u7684\u6700\u5927\u7A0B\u5EA6\uFF0C\u8D85\u8FC7\u6B64\u957F\u5EA6\u7684\u90E8\u5206\u4E0D\u4E88\u5904\u7406\u3002\u4E00\u822C8K\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h6 id="\u7981\u7528-ajp-\u5982\u679C\u4F60\u670D\u52A1\u5668\u6CA1\u6709\u4F7F\u7528-apache" tabindex="-1"><a class="header-anchor" href="#\u7981\u7528-ajp-\u5982\u679C\u4F60\u670D\u52A1\u5668\u6CA1\u6709\u4F7F\u7528-apache" aria-hidden="true">#</a> \u7981\u7528 AJP\uFF08\u5982\u679C\u4F60\u670D\u52A1\u5668\u6CA1\u6709\u4F7F\u7528 Apache\uFF09</h6><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ vi /usr/setup/latestTomcat/conf/server.xml
\u9ED8\u8BA4\uFF1A
&lt;Connector port=&quot;8009&quot; protocol=&quot;AJP/1.3&quot; redirectPort=&quot;8443&quot; /&gt;

\u4FEE\u6539\u540E\uFF1A\u3010\u6CE8\u91CA\u6389\u3011
&lt;!-- &lt;Connector port=&quot;8009&quot; protocol=&quot;AJP/1.3&quot; redirectPort=&quot;8443&quot; /&gt; --&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h6 id="\u5173\u95ED\u81EA\u52A8\u90E8\u7F72\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u5173\u95ED\u81EA\u52A8\u90E8\u7F72\u529F\u80FD" aria-hidden="true">#</a> \u5173\u95ED\u81EA\u52A8\u90E8\u7F72\u529F\u80FD</h6><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ vi /usr/setup/latestTomcat/conf/server.xml
\u9ED8\u8BA4\u503C\uFF1A
&lt;Host name=&quot;localhost&quot;  appBase=&quot;webapps&quot; unpackWARs=&quot;true&quot; autoDeploy=&quot;true&quot;&gt;

\u4FEE\u6539\u540E\uFF1A
&lt;Host name=&quot;localhost&quot;  appBase=&quot;webapps&quot; unpackWARs=&quot;true&quot; autoDeploy=&quot;false&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h6 id="\u542F\u52A8\u6162\u7684\u89E3\u51B3\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u6162\u7684\u89E3\u51B3\u95EE\u9898" aria-hidden="true">#</a> \u542F\u52A8\u6162\u7684\u89E3\u51B3\u95EE\u9898</h6><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7B2C\u4E00\u79CD :
1. \u4FEE\u6539Tomcat\u542F\u52A8\u6587\u4EF6 -Djava.security.egd=file:/dev/urandom
2. \u4FEE\u6539JRE\u4E2D\u7684java.security\u6587\u4EF6 securerandom.source=file:/dev/urandom

\u7B2C\u4E8C\u79CD(\u63A8\u8350):
1. \u5B89\u88C5rng\u5DE5\u5177\u5305\uFF0C\u6267\u884C\u201Cyum -y install rng-tools\u201D
2. \u542F\u52A8\u71B5\u670D\u52A1\uFF0C\u6267\u884C\uFF1A\u201Csystemctl start rngd\u201D\u548C\u201Csystemctl restart rngd\u201D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h6 id="\u65E5\u5FD7\u5206\u5272" tabindex="-1"><a class="header-anchor" href="#\u65E5\u5FD7\u5206\u5272" aria-hidden="true">#</a> \u65E5\u5FD7\u5206\u5272</h6><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>out\u65E5\u5FD7\u8FC7\u5927
https://github.com/judasn/Linux-Tutorial/blob/master/markdown-file/Tomcat-Install-And-Settings.md

\u65E5\u5FD7\u4F4D\u7F6E\u4FEE\u6539
https://blog.csdn.net/lyf844692713/article/details/81510816

\u65E5\u5FD7\u538B\u7F29
https://my.oschina.net/u/3715199/blog/1574974  \u7B2C\u4E8C\u79CD\u65B9\u6CD5
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h5 id="\u4FEE\u6539jvm\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539jvm\u914D\u7F6E" aria-hidden="true">#</a> \u4FEE\u6539jvm\u914D\u7F6E</h5><ul><li>\u914D\u7F6E\u5185\u5B58</li></ul><p>\u4FEE\u6539$CATALINA_HOME/bin/catalina.sh</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>CATALINA_OPTS=&quot;-Dfile.encoding=UTF-8 -server -Xms32g -Xmx32g&quot;

-Dfile.encoding=UTF-8 -server -Xms2048m -Xmx2048m -Xmn1024m -XX:PermSize=2g -XX:MaxPermSize=4g -XX:SurvivorRatio=10 -XX:MaxTenuringThreshold=15 -XX:NewRatio=2 -XX:+DisableExplicitGC


\u53C2\u6570\u8BE6\u89E3\uFF1A
-server  \u542F\u7528jdk \u7684 server \u7248\uFF1B
-Xms    java\u865A\u62DF\u673A\u521D\u59CB\u5316\u65F6\u7684\u6700\u5C0F\u5185\u5B58\uFF1B
-Xmx    java\u865A\u62DF\u673A\u53EF\u4F7F\u7528\u7684\u6700\u5927\u5185\u5B58\uFF1B
-Xmn    jvm\u6700\u5C0F\u5185\u5B58
-XX:PermSize    \u5185\u5B58\u6C38\u4E45\u4FDD\u7559\u533A\u57DF
-XX:MaxPermSize   \u5185\u5B58\u6700\u5927\u6C38\u4E45\u4FDD\u7559\u533A\u57DF
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h4 id="\u8C03\u4F18\u540E" tabindex="-1"><a class="header-anchor" href="#\u8C03\u4F18\u540E" aria-hidden="true">#</a> \u8C03\u4F18\u540E</h4><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/install-tomcat/02.png" alt="\u8C03\u4F18\u540E" loading="lazy"></p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><ol><li>https://github.com/judasn/Linux-Tutorial/blob/master/markdown-file/Tomcat-Install-And-Settings.md</li></ol><hr><img style="border:1px red solid;display:block;margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="\u5FAE\u4FE1\u516C\u4F17\u53F7">`,59);function r(t,l){return s}var c=e(a,[["render",r],["__file","tomcat.html.vue"]]);export{c as default};
