import{c as n,a as s,F as a,e as l,o as r}from"./app.2deb0963.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const c={},p=l(`<h2 id="_1-selinux" tabindex="-1"><a class="header-anchor" href="#_1-selinux" aria-hidden="true">#</a> 1. selinux</h2><ul><li>\u67E5\u770B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>getenforce \u6216 /usr/sbin/sestatus -v
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u4E34\u65F6\u5173\u95ED</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>setenforce 0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u6C38\u4E45\u5173\u95ED</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vi /etc/selinux/config
SELINUX=disabled
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u67E5\u770BLinux\u72B6\u6001</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sestatus
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>selinux\u7684\u77E5\u8BC6\u70B9</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://blog.csdn.net/yanjun821126/article/details/80828908
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_2-yum\u5B89\u88C5\u8F6F\u4EF6\u65F6\u62A5\u9519libmysqlclient-so-18-64bit" tabindex="-1"><a class="header-anchor" href="#_2-yum\u5B89\u88C5\u8F6F\u4EF6\u65F6\u62A5\u9519libmysqlclient-so-18-64bit" aria-hidden="true">#</a> 2. yum\u5B89\u88C5\u8F6F\u4EF6\u65F6\u62A5\u9519libmysqlclient.so.18()(64bit)</h2><ul><li>\u95EE\u9898\u63CF\u8FF0</li></ul><p>\u4F7F\u7528yum\u5B89\u88C5\u8F6F\u4EF6\u65F6\u62A5\u9519\uFF1A</p><p>2:postfix-2.10.1-6.el7.x86_64 has missing requires of libmysqlclient.so.18()(64bit)</p><p>2:postfix-2.10.1-6.el7.x86_64 has missing requires of libmysqlclient.so.18(libmysqlclient_18)(64bit)</p><ul><li>\u89E3\u51B3\u529E\u6CD5\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wget http://www.percona.com/redir/downloads/Percona-XtraDB-Cluster/5.5.37-25.10/RPM/rhel6/x86_64/Percona-XtraDB-Cluster-shared-55-5.5.37-25.10.756.el6.x86_64.rpm

rpm -ivh Percona-XtraDB-Cluster-shared-55-5.5.37-25.10.756.el6.x86_64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_3-centos7-5\u7684\u9632\u706B\u5899" tabindex="-1"><a class="header-anchor" href="#_3-centos7-5\u7684\u9632\u706B\u5899" aria-hidden="true">#</a> 3. centos7.5\u7684\u9632\u706B\u5899</h2><ul><li>\u6837\u4F8B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6DFB\u52A0
firewall-cmd --zone=public --add-port=80/tcp --permanent    \uFF08--permanent\u6C38\u4E45\u751F\u6548\uFF0C\u6CA1\u6709\u6B64\u53C2\u6570\u91CD\u542F\u540E\u5931\u6548\uFF09

\u91CD\u65B0\u8F7D\u5165
firewall-cmd --reload

\u67E5\u770B
firewall-cmd --zone=public --list-ports

\u5220\u9664
firewall-cmd --zone= public --remove-port=80/tcp --permanent
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li>firewalld\u7684\u57FA\u672C\u4F7F\u7528</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u542F\u52A8\uFF1A  systemctl start firewalld
\u67E5\u72B6\u6001\uFF1Asystemctl status firewalld
\u505C\u6B62\uFF1A  systemctl disable firewalld
\u7981\u7528\uFF1A  systemctl stop firewalld
\u5728\u5F00\u673A\u65F6\u542F\u7528\u4E00\u4E2A\u670D\u52A1\uFF1Asystemctl enable firewalld.service
\u5728\u5F00\u673A\u65F6\u7981\u7528\u4E00\u4E2A\u670D\u52A1\uFF1Asystemctl disable firewalld.service
\u67E5\u770B\u670D\u52A1\u662F\u5426\u5F00\u673A\u542F\u52A8\uFF1Asystemctl is-enabled firewalld.service
\u67E5\u770B\u5DF2\u542F\u52A8\u7684\u670D\u52A1\u5217\u8868\uFF1Asystemctl list-unit-files|grep enabled
\u67E5\u770B\u542F\u52A8\u5931\u8D25\u7684\u670D\u52A1\u5217\u8868\uFF1Asystemctl --failed
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>\u914D\u7F6Efirewalld-cmd</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u67E5\u770B\u7248\u672C\uFF1A firewall-cmd --version
\u67E5\u770B\u5E2E\u52A9\uFF1A firewall-cmd --help
\u663E\u793A\u72B6\u6001\uFF1A firewall-cmd --state
\u67E5\u770B\u6240\u6709\u6253\u5F00\u7684\u7AEF\u53E3\uFF1A firewall-cmd --zone=public --list-ports
\u66F4\u65B0\u9632\u706B\u5899\u89C4\u5219\uFF1A firewall-cmd --reload
\u67E5\u770B\u533A\u57DF\u4FE1\u606F:  firewall-cmd --get-active-zones
\u67E5\u770B\u6307\u5B9A\u63A5\u53E3\u6240\u5C5E\u533A\u57DF\uFF1A firewall-cmd --get-zone-of-interface=eth0
\u62D2\u7EDD\u6240\u6709\u5305\uFF1Afirewall-cmd --panic-on
\u53D6\u6D88\u62D2\u7EDD\u72B6\u6001\uFF1A firewall-cmd --panic-off
\u67E5\u770B\u662F\u5426\u62D2\u7EDD\uFF1A firewall-cmd --query-panic
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li>\u90A3\u600E\u4E48\u5F00\u542F\u4E00\u4E2A\u7AEF\u53E3\u5462</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6DFB\u52A0
firewall-cmd --zone=public(\u4F5C\u7528\u57DF) --add-port=80/tcp(\u7AEF\u53E3\u548C\u8BBF\u95EE\u7C7B\u578B) --permanent(\u6C38\u4E45\u751F\u6548)
firewall-cmd --zone=public --add-service=http --permanent
firewall-cmd --reload    ## \u91CD\u65B0\u8F7D\u5165\uFF0C\u66F4\u65B0\u9632\u706B\u5899\u89C4\u5219
firewall-cmd --zone= public --query-port=80/tcp  ##\u67E5\u770B
firewall-cmd --zone= public --remove-port=80/tcp --permanent  ## \u5220\u9664

firewall-cmd --list-services
firewall-cmd --get-services
firewall-cmd --add-service=&lt;service&gt;
firewall-cmd --delete-service=&lt;service&gt;
\u5728\u6BCF\u6B21\u4FEE\u6539\u7AEF\u53E3\u548C\u670D\u52A1\u540E/etc/firewalld/zones/public.xml\u6587\u4EF6\u5C31\u4F1A\u88AB\u4FEE\u6539,\u6240\u4EE5\u4E5F\u53EF\u4EE5\u5728\u6587\u4EF6\u4E2D\u4E4B\u95F4\u4FEE\u6539,\u7136\u540E\u91CD\u65B0\u52A0\u8F7D
\u4F7F\u7528\u547D\u4EE4\u5B9E\u9645\u4E5F\u662F\u5728\u4FEE\u6539\u6587\u4EF6\uFF0C\u9700\u8981\u91CD\u65B0\u52A0\u8F7D\u624D\u80FD\u751F\u6548\u3002

firewall-cmd --zone=public --query-port=80/tcp
firewall-cmd --zone=public --query-port=8080/tcp
firewall-cmd --zone=public --query-port=3306/tcp
firewall-cmd --zone=public --add-port=8080/tcp --permanent
firewall-cmd --zone=public --add-port=3306/tcp --permanent
firewall-cmd --zone=public --query-port=3306/tcp
firewall-cmd --zone=public --query-port=8080/tcp
firewall-cmd --reload  ## \u91CD\u65B0\u52A0\u8F7D\u540E\u624D\u80FD\u751F\u6548
firewall-cmd --zone=public --query-port=3306/tcp
firewall-cmd --zone=public --query-port=8080/tcp
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><ul><li>\u53C2\u6570\u89E3\u91CA</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u2013add-service ##\u6DFB\u52A0\u7684\u670D\u52A1
\u2013zone ##\u4F5C\u7528\u57DF
\u2013add-port=80/tcp ##\u6DFB\u52A0\u7AEF\u53E3\uFF0C\u683C\u5F0F\u4E3A\uFF1A\u7AEF\u53E3/\u901A\u8BAF\u534F\u8BAE
\u2013permanent ##\u6C38\u4E45\u751F\u6548\uFF0C\u6CA1\u6709\u6B64\u53C2\u6570\u91CD\u542F\u540E\u5931\u6548
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>\u8BE6\u7EC6\u4F7F\u7528</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>firewall-cmd --permanent --zone=public --add-rich-rule=&#39;rule family=&quot;ipv4&quot; source address=&quot;192.168.0.4/24&quot; service name=&quot;http&quot; accept&#39;    //\u8BBE\u7F6E\u67D0\u4E2Aip\u8BBF\u95EE\u67D0\u4E2A\u670D\u52A1
firewall-cmd --permanent --zone=public --remove-rich-rule=&#39;rule family=&quot;ipv4&quot; source address=&quot;192.168.0.4/24&quot; service name=&quot;http&quot; accept&#39; //\u5220\u9664\u914D\u7F6E
firewall-cmd --permanent --add-rich-rule &#39;rule family=ipv4 source address=192.168.0.1/2 port port=80 protocol=tcp accept&#39;     //\u8BBE\u7F6E\u67D0\u4E2Aip\u8BBF\u95EE\u67D0\u4E2A\u7AEF\u53E3
firewall-cmd --permanent --remove-rich-rule &#39;rule family=ipv4 source address=192.168.0.1/2 port port=80 protocol=tcp accept&#39;     //\u5220\u9664\u914D\u7F6E

firewall-cmd --query-masquerade  ## \u68C0\u67E5\u662F\u5426\u5141\u8BB8\u4F2A\u88C5IP
firewall-cmd --add-masquerade    ## \u5141\u8BB8\u9632\u706B\u5899\u4F2A\u88C5IP
firewall-cmd --remove-masquerade ## \u7981\u6B62\u9632\u706B\u5899\u4F2A\u88C5IP

firewall-cmd --add-forward-port=port=80:proto=tcp:toport=8080   ## \u5C0680\u7AEF\u53E3\u7684\u6D41\u91CF\u8F6C\u53D1\u81F38080
firewall-cmd --add-forward-port=proto=80:proto=tcp:toaddr=192.168.1.0.1 ## \u5C0680\u7AEF\u53E3\u7684\u6D41\u91CF\u8F6C\u53D1\u81F3192.168.0.1
firewall-cmd --add-forward-port=proto=80:proto=tcp:toaddr=192.168.0.1:toport=8080 ## \u5C0680\u7AEF\u53E3\u7684\u6D41\u91CF\u8F6C\u53D1\u81F3192.168.0.1\u76848080\u7AEF\u53E3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,31),t=["src"];function d(e,u){return r(),n(a,null,[p,s("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:e.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,t)],64)}var o=i(c,[["render",d],["__file","problems.html.vue"]]);export{o as default};
