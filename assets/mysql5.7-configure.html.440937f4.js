import{e}from"./app.42286db3.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const n={},a=e(`<h2 id="_1-\u573A\u666F\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#_1-\u573A\u666F\u5206\u6790" aria-hidden="true">#</a> 1. \u573A\u666F\u5206\u6790</h2><p>\u5728\u4F7F\u7528Navicat\u5DE5\u5177\u8F6F\u4EF6\u521B\u5EFA\u6570\u636E\u5E93\u8868\u65F6\uFF0C\u4F1A\u628A\u521B\u5EFA\u7684\u6570\u636E\u5E93\u8868\u7684\u5B57\u7B26\u96C6\u9ED8\u8BA4\u4E3A\u62C9\u4E01\u6587\u3002\u4F7F\u7528\u547D\u4EE4\u67E5\u8BE2\uFF1A <code>show variables like &#39;character_set%&#39;;</code> \u53D1\u73B0\u6709\u4E00\u9879\u662F\u62C9\u4E01\u6587\u3002</p><h2 id="_2-\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_2-\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> 2. \u89E3\u51B3\u65B9\u6848</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u8BBE\u7F6E\u9ED8\u8BA4\u5B57\u7B26\u96C6
$ vi /etc/my.cnf

// \u5728[mysqld]\u4E0B\u6DFB\u52A0\u4E0B\u9762\u4E09\u884C
default-storage-engine=INNODB
character-set-server=utf8
collation-server=utf8_general_ci

// \u91CD\u542F
$ systemctl restart mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8FD9\u6837\u521B\u5EFA\u6570\u636E\u5E93\u65F6\uFF0C\u5C31\u4F1A\u4F7F\u7528\u9ED8\u8BA4\u7684\u5B57\u7B26\u96C6\u4E86\u3002</p><hr><hr><h2 id="_3-\u573A\u666F\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#_3-\u573A\u666F\u5206\u6790" aria-hidden="true">#</a> 3. \u573A\u666F\u5206\u6790</h2><p>\u6570\u636E\u5E93\u52A8\u4E0D\u52A8\u5C31\u663E\u793A\u8FDE\u63A5\u6570\u91CF\u592A\u591A\u7684\u95EE\u9898\u3002 \u6267\u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>show variables like &#39;%max_connections%&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u53D1\u73B0\u8FDE\u63A5\u6570\u4E3A\uFF1A151</p><h2 id="_4-\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_4-\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> 4. \u89E3\u51B3\u65B9\u6848</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u8BBE\u7F6E\u9ED8\u8BA4\u5B57\u7B26\u96C6
$ vi /etc/my.cnf

// \u5728[mysqld]\u4E0B\u6DFB\u52A0\u4E0B\u9762\u4E00\u884C
max_connections=1000

// \u91CD\u542F
$ systemctl restart mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u6267\u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>show variables like &#39;%max_connections%&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u53D1\u73B0\u8FDE\u63A5\u6570\u4E3A\uFF1A1000</p><hr><hr><h2 id="_5-\u573A\u666F\u590D\u73B0" tabindex="-1"><a class="header-anchor" href="#_5-\u573A\u666F\u590D\u73B0" aria-hidden="true">#</a> 5. \u573A\u666F\u590D\u73B0</h2><p>\u201C\u5C0F\u738B\uFF0C\u6570\u636E\u5B57\u5178\u6211\u5DF2\u7ECF\u66F4\u65B0\u5230svn\u4E86\uFF0C\u4F60\u62BD\u7A7A\u628A\u6570\u636E\u5E93\u8868\u7ED9\u521B\u5EFA\u4E00\u4E0B\u54C8\u3002\u201D\u201C\u597D\u52D2\uFF0C\u6211\u5FD9\u5B8C\u624B\u5934\u4E0A\u7684\u4E8B\u513F\u7ACB\u9A6C\u521B\u5EFA\u2026\u2026\u201D \u9886\u5BFC\u6482\u4E0B\u4E00\u53E5\u8BDD\uFF0C\u6211\u594B\u6597\u4E00\u4E0A\u5348\u3002 \u6253\u5F00\u6570\u636E\u5B57\u5178\uFF0C\u7F8E\u6ECB\u6ECB\u7684\u5F00\u59CB\u521B\u5EFA\u6570\u636E\u5E93\u8868\u3002\u53EF\u662F\u6253\u5F00Navicat\u521B\u5EFA\u7684\u65F6\u5019\uFF0C**\u53D1\u73B0\u6DFB\u52A0\u5217\u65F6\u6BCF\u4E00\u5217\u7684\u7F16\u7801\u90FD\u662F\u62C9\u4E01\u7F16\u7801\u3002**\u6211\u83CA\u82B1\u4E00\u7D27\uFF0C\u77E5\u9053\u8FD9\u662F\u4E2A\u5927\u95EE\u9898\uFF0C\u5982\u679C\u4E0D\u5904\u7406\uFF0C\u54EA\u4E2A\u5C0F\u5F1F\u624B\u4E00\u6296\uFF0C\u53C8\u8981\u5FD9\u5F88\u4E45\u6392\u67E5\u95EE\u9898\u4E86\uFF0C\u6211\u53EF\u4E0D\u5141\u8BB8\u8FD9\u6837\u7684\u4E8B\u60C5\u51FA\u73B0\u3002\u8BF4\u5E72\u5C31\u5E72\uFF0C\u6211\u6253\u5F00\u767E\u5EA6\uFF0C\u4E00\u987F\u64CD\u4F5C\u2026\u2026\u5C34\u5C2C\uFF0C\u8FD8\u662F\u8C37\u6B4C\u5427\u3002\u51E0\u5206\u949F\u540E\uFF0C\u627E\u5230\u89E3\u51B3\u65B9\u6848\u3002</p><h2 id="_6-\u89E3\u51B3\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#_6-\u89E3\u51B3\u8FC7\u7A0B" aria-hidden="true">#</a> 6. \u89E3\u51B3\u8FC7\u7A0B</h2><h3 id="_6-1-\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_6-1-\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 6.1. \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@dev ~]# vi /etc/my.cnf

[client]
default-character-set=utf8

[mysqld]
default-storage-engine=INNODB
character-set-server=utf8
collation-server=utf8_general_ci

[mysql]
no-auto-rehash
default-character-set=utf8
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_6-2-\u91CD\u542Fmysqld" tabindex="-1"><a class="header-anchor" href="#_6-2-\u91CD\u542Fmysqld" aria-hidden="true">#</a> 6.2. \u91CD\u542Fmysqld</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@dev ~]# systemctl restart mysqld
[root@dev ~]# systemctl status mysqld
\u25CF mysqld.service - MySQL Server
   Loaded: loaded (/usr/lib/systemd/system/mysqld.service; enabled; vendor preset: disabled)
   Active: active (running) since \u4E94 2019-01-25 16:19:07 CST; 4s ago
     Docs: man:mysqld(8)
           http://dev.mysql.com/doc/refman/en/using-systemd.html
  Process: 41124 ExecStart=/usr/sbin/mysqld --daemonize --pid-file=/var/run/mysqld/mysqld.pid $MYSQLD_OPTS (code=exited, status=0/SUCCESS)
  Process: 41106 ExecStartPre=/usr/bin/mysqld_pre_systemd (code=exited, status=0/SUCCESS)
 Main PID: 41127 (mysqld)
   CGroup: /system.slice/mysqld.service
           \u2514\u250041127 /usr/sbin/mysqld --daemonize --pid-file=/var/run/mysqld/mysqld.pid

1\u6708 25 16:19:06 dev.northmeter systemd[1]: Starting MySQL Server...
1\u6708 25 16:19:07 dev.northmeter systemd[1]: Started MySQL Server.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_6-3-\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_6-3-\u6D4B\u8BD5" aria-hidden="true">#</a> 6.3. \u6D4B\u8BD5</h3><p>\u4F7F\u7528Navicat\u5728\u521B\u5EFA\u7684\u8868\u683C\u4E2D\u6DFB\u52A0\u4E00\u5217\u3002\u5B8C\u7F8E\uFF01</p><h3 id="_6-4-\u5907\u6CE8" tabindex="-1"><a class="header-anchor" href="#_6-4-\u5907\u6CE8" aria-hidden="true">#</a> 6.4. \u5907\u6CE8</h3><p>\u5982\u679C\u5728\u6DFB\u52A0\u4E00\u5217\u65F6\uFF0C\u53D1\u73B0\u8FD8\u662F\u4E0D\u884C\uFF0C\u53EF\u4EE5\u5148\u8FDB\u884C\u521B\u5EFA\u8868\u7684\u64CD\u4F5C\uFF0C\u7136\u540E\u518D\u5728\u521B\u5EFA\u7684\u8868\u683C\u4E0A\u9762\u6DFB\u52A0\u5217\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>CREATE DATABASE \${tablename} DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_7-\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#_7-\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> 7. \u53C2\u8003\u94FE\u63A5</h2><h2 id="https-www-jianshu-com-p-90f751ea37d1" tabindex="-1"><a class="header-anchor" href="#https-www-jianshu-com-p-90f751ea37d1" aria-hidden="true">#</a> https://www.jianshu.com/p/90f751ea37d1</h2><img style="border:1px red solid;display:block;margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="\u5FAE\u4FE1\u516C\u4F17\u53F7">`,33);function r(l,i){return a}var c=s(n,[["render",r],["__file","mysql5.7-configure.html.vue"]]);export{c as default};
