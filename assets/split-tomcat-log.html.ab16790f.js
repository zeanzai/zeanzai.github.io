import{r,c as p,a,b as n,w as c,F as i,d as e,e as s,o as d}from"./app.98de23b3.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";const b={},u=a("h2",{id:"\u524D\u8A00",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u524D\u8A00","aria-hidden":"true"},"#"),e(" \u524D\u8A00")],-1),h=e("\u7B14\u8005\u5728\u8FDB\u884C\u8BD5\u9A8C\u65F6\uFF0C\u6709\u4EE5\u4E0B\u51E0\u4E2A\u64CD\u4F5C\u4E60\u60EF\uFF0C\u5177\u4F53"),m=e("\u53C2\u8003"),A=e("\u3002"),j=s('<p>Centos7\u9ED8\u8BA4\u5F00\u901A\u4E8680\u7AEF\u53E3\u548C22\u7AEF\u53E3\u3002</p><h2 id="\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u5E94\u7528\u573A\u666F</h2><p><code>tomcat7</code> \u5728\u5B9E\u9645\u751F\u4EA7\u73AF\u5883\u4E2D\uFF0C\u7531\u4E8E\u9879\u76EE\u4E0D\u65AD\u90E8\u7F72\uFF0C<code>Catalina.out</code>\u6587\u4EF6\u8FBE\u5230\u4E862G\u7684\u5927\u5C0F\uFF0C\u5E76\u4E14\u6BCF\u6B21\u67E5\u8BE2\u65E5\u5FD7\u7684\u65F6\u5019\u9700\u8981\u67E5\u8BE2\u6574\u4E2A\u6587\u4EF6\uFF0C\u9020\u6210\u67E5\u8BE2\u8D77\u6765\u8FC7\u4E8E\u56F0\u96BE\u3002</p><p>\u5E0C\u671B\uFF1A<code>Catalina.out</code>\u65E5\u5FD7\u6587\u4EF6\u4EE5\u65E5\u671F\u5212\u5206\u3002\u653E\u7F6E\u7684\u4F4D\u7F6E\u4E3A<code>/home/logs/tomcat7</code>\u76EE\u5F55\u4E0B\u9762\u3002\u5982<code>/home/logs/tomcat7/20180807/catalina.out</code>\u3002</p><h2 id="\u5173\u95EDtomcat" tabindex="-1"><a class="header-anchor" href="#\u5173\u95EDtomcat" aria-hidden="true">#</a> \u5173\u95EDtomcat</h2><h2 id="\u4E0B\u8F7D\u76F8\u5173\u7684java" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u76F8\u5173\u7684java" aria-hidden="true">#</a> \u4E0B\u8F7D\u76F8\u5173\u7684java</h2><blockquote><p>Log4j \u4E0D\u652F\u6301\u6309\u65E5\u671F\u751F\u6210\u4E0D\u540C\u7684\u6587\u4EF6\u5939\u3002</p></blockquote>',7),_={href:"http://www.apache.org/dist/tomcat/tomcat-7/v7.0.90/bin/extras/",target:"_blank",rel:"noopener noreferrer"},L=a("code",null,"tomcat-juli.jar",-1),C=e(" \u548C "),O=a("code",null,"tomcat-juli-adapters.jar",-1),N={href:"http://www.apache.org/dist/logging/log4j/1.2.17/",target:"_blank",rel:"noopener noreferrer"},y=e("log4j-1.2.17.jar"),T=s(`<p>(\u5148\u4E0B\u8F7Dzip\uFF0C\u7136\u540E\u89E3\u538B\uFF0C\u627E\u5230jar)</p><h2 id="\u4E0A\u4F20jar" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4F20jar" aria-hidden="true">#</a> \u4E0A\u4F20jar</h2><ol><li><p>\u5C06\u4E0A\u8FF0\u4E09\u4E2Ajar\u653E\u5165<code>$CATALINA_HOME/lib</code>\u4E0B\u9762</p></li><li><p>\u66F4\u6539<code>$CATALINA_HOME/bin</code>\u4E0B\u9762\u7684<code>tomcat-juli.jar</code>\u4E3A<code>tomcat-juli_bak.jar</code></p></li><li><p>\u5C06<code>tomcat-juli.jar</code>\u653E\u5165$CATALINA_HOME/bin\u76EE\u5F55\u4E0B</p></li><li><p>\u5907\u4EFD<code>$CATALINA_HOME/conf/logging.properties</code>\u6587\u4EF6\u4E3A<code>logging_bak.properties</code></p></li></ol><h2 id="\u5236\u4F5C\u8D44\u6E90\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5236\u4F5C\u8D44\u6E90\u6587\u4EF6" aria-hidden="true">#</a> \u5236\u4F5C\u8D44\u6E90\u6587\u4EF6</h2><p>\u6587\u4EF6\u540D\u5B57\u4E3A\uFF1A<code>log4j.properties</code>\uFF0C\u5E76\u5C06\u6539\u6587\u4EF6\u4E0A\u4F20\u81F3\uFF1A<code>$CATALINA_HOME/lib</code>\u76EE\u5F55\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>log4j.rootLogger=INFO, CATALINA

log4j.appender.CATALINA=org.apache.log4j.DailyRollingFileAppender
log4j.appender.CATALINA.File=/home/logs/tomcat7/catalina
log4j.appender.CATALINA.Append=true
log4j.appender.CATALINA.Encoding=UTF-8
log4j.appender.CATALINA.DatePattern=&#39;.&#39;yyyy-MM-dd&#39;.log&#39;
log4j.appender.CATALINA.layout=org.apache.log4j.PatternLayout
log4j.appender.CATALINA.layout.ConversionPattern=%d [%t] %-5p %c- %m%n

log4j.appender.LOCALHOST=org.apache.log4j.DailyRollingFileAppender
log4j.appender.LOCALHOST.File=/home/logs/tomcat7/localhost
log4j.appender.LOCALHOST.Append=true
log4j.appender.LOCALHOST.Encoding=UTF-8
log4j.appender.LOCALHOST.DatePattern=&#39;.&#39;yyyy-MM-dd&#39;.log&#39;
log4j.appender.LOCALHOST.layout=org.apache.log4j.PatternLayout
log4j.appender.LOCALHOST.layout.ConversionPattern=%d [%t] %-5p %c- %m%n

log4j.appender.MANAGER=org.apache.log4j.DailyRollingFileAppender
log4j.appender.MANAGER.File=/home/logs/tomcat7/manager
log4j.appender.MANAGER.Append=true
log4j.appender.MANAGER.Encoding=UTF-8
log4j.appender.MANAGER.DatePattern=&#39;.&#39;yyyy-MM-dd&#39;.log&#39;
log4j.appender.MANAGER.layout=org.apache.log4j.PatternLayout
log4j.appender.MANAGER.layout.ConversionPattern=%d [%t] %-5p %c- %m%n

log4j.appender.HOST-MANAGER=org.apache.log4j.DailyRollingFileAppender
log4j.appender.HOST-MANAGER.File=/home/logs/tomcat7/host-manager
log4j.appender.HOST-MANAGER.Append=true
log4j.appender.HOST-MANAGER.Encoding=UTF-8
log4j.appender.HOST-MANAGER.DatePattern=&#39;.&#39;yyyy-MM-dd&#39;.log&#39;
log4j.appender.HOST-MANAGER.layout=org.apache.log4j.PatternLayout
log4j.appender.HOST-MANAGER.layout.ConversionPattern=%d [%t] %-5p %c- %m%n

log4j.appender.CONSOLE=org.apache.log4j.ConsoleAppender
log4j.appender.CONSOLE.Encoding=UTF-8
log4j.appender.CONSOLE.layout=org.apache.log4j.PatternLayout
log4j.appender.CONSOLE.layout.ConversionPattern=%d [%t] %-5p %c- %m%n

log4j.logger.org.apache.catalina.core.ContainerBase.[Catalina].[localhost]=INFO, LOCALHOST
log4j.logger.org.apache.catalina.core.ContainerBase.[Catalina].[localhost].[/manager]=INFO, MANAGER
log4j.logger.org.apache.catalina.core.ContainerBase.[Catalina].[localhost].[/host-manager]=INFO, HOST-MANAGER
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><h2 id="\u4FEE\u6539\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u914D\u7F6E" aria-hidden="true">#</a> \u4FEE\u6539\u914D\u7F6E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$CATALINA_HOME/conf/context.xml\u6587\u4EF6\u4E2D\u7684&lt;Context&gt;\u6807\u7B7E\u4E3A\uFF1A
\`&lt;Context swallowOutput=&quot;true&quot;&gt;\`
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u91CD\u542F" tabindex="-1"><a class="header-anchor" href="#\u91CD\u542F" aria-hidden="true">#</a> \u91CD\u542F</h2><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><ul><li>https://tomcat.apache.org/tomcat-7.0-doc/logging.html#Using_Log4j</li></ul><hr>`,12),E=["src"];function M(l,x){const t=r("RouterLink"),o=r("ExternalLinkIcon");return d(),p(i,null,[u,a("p",null,[h,n(t,{to:"/post/dev/how-to-devops/"},{default:c(()=>[m]),_:1}),A]),j,a("p",null,[a("a",_,[L,C,O,n(o)])]),a("p",null,[a("a",N,[y,n(o)])]),T,a("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:l.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,E)],64)}var H=g(b,[["render",M],["__file","split-tomcat-log.html.vue"]]);export{H as default};
