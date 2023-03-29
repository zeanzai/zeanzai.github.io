import{c as a,a as n,F as s,e as l,d as i,o as r}from"./app.2deb0963.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";const b={},p=l(`<h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><p>gitlab\u4F5C\u4E3A\u7248\u672C\u63A7\u5236\u5668\u88AB\u5E7F\u6CDB\u5E94\u7528\uFF0C\u53EF\u4EE5\u770B\u505A\u5DE5\u4F5C\u5355\u4F4D\u81EA\u5EFA\u7684GitHub\u670D\u52A1\u5668\u3002</p><h2 id="\u4FE1\u606F\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u4FE1\u606F\u7EDF\u8BA1" aria-hidden="true">#</a> \u4FE1\u606F\u7EDF\u8BA1</h2><ul><li>\u4E0B\u8F7D\u5730\u5740\uFF1Ahttps://packages.gitlab.com/gitlab/gitlab-ce</li><li>\u7248\u672C\uFF1Agitlab-ce-11.5.0-ce.0.el7.x86_64.rpm</li><li>\u5360\u7528\u7AEF\u53E3\uFF1A8888</li><li>ng\u4EE3\u7406\u7AEF\u53E3\uFF1A8103</li></ul><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><ul><li>\u5B89\u88C5\u4F9D\u8D56</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ yum -y install policycoreutils policycoreutils-python openssh-server openssh-clients postfix
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u8BBE\u7F6Epostfix\u5F00\u673A\u81EA\u542F\uFF0C\u5E76\u542F\u52A8\uFF0Cpostfix\u652F\u6301gitlab\u53D1\u4FE1\u529F\u80FD</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ systemctl enable postfix &amp;&amp; systemctl start postfix
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u4E0A\u4F20</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@study package]# rpm -ivh gitlab-ce-11.5.0-ce.0.el7.x86_64.rpm
\u8B66\u544A\uFF1Agitlab-ce-11.5.0-ce.0.el7.x86_64.rpm: \u5934V4 RSA/SHA1 Signature, \u5BC6\u94A5 ID f27eab47: NOKEY
\u51C6\u5907\u4E2D...                          ################################# [100%]
\u6B63\u5728\u5347\u7EA7/\u5B89\u88C5...
   1:gitlab-ce-11.5.0-ce.0.el7        ################################# [100%]
It looks like GitLab has not been configured yet; skipping the upgrade script.

       *.                  *.
      ***                 ***
     *****               *****
    .******             *******
    ********            ********
   ,,,,,,,,,***********,,,,,,,,,
  ,,,,,,,,,,,*********,,,,,,,,,,,
  .,,,,,,,,,,,*******,,,,,,,,,,,,
      ,,,,,,,,,*****,,,,,,,,,.
         ,,,,,,,****,,,,,,
            .,,,***,,,,
                ,*,.



     _______ __  __          __
    / ____(_) /_/ /   ____ _/ /_
   / / __/ / __/ /   / __ \`/ __ \\
  / /_/ / / /_/ /___/ /_/ / /_/ /
  \\____/_/\\__/_____/\\__,_/_.___/


Thank you for installing GitLab!
GitLab was unable to detect a valid hostname for your instance.
Please configure a URL for your GitLab instance by setting \`external_url\`
configuration in /etc/gitlab/gitlab.rb file.
Then, you can start your GitLab instance by running the following command:
  sudo gitlab-ctl reconfigure

For a comprehensive list of configuration options please see the Omnibus GitLab readme
https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/README.md

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><ul><li>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ vi /etc/gitlab/gitlab.rb
external_url &#39;http://192.168.100.200:8888&#39;

// \u5173\u95EDSMTP\uFF0C\u5F00\u542Fpostfix
gitlab_rails[&#39;smtp_enable&#39;] = false

// \u4FEE\u6539\u989D\u5916\u8BBE\u7F6E
unicorn[&#39;listen&#39;] = &#39;127.0.0.1&#39;
unicorn[&#39;port&#39;] = 8001
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>\u5F00\u653E\u7AEF\u53E3</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>firewall-cmd --zone=public --add-port=8888/tcp --permanent
firewall-cmd --reload
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u91CD\u7F6E\u5E76\u91CD\u542F</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ gitlab-ctl reconfigure
$ gitlab-ctl restart
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u6D4F\u89C8\u5668\u4E2D\u8F93\u5165</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>http://{ip}:8888
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u7528\u6237\u7BA1\u7406</li></ul><p>\u76F4\u63A5\u70B9\u51FB\u521B\u5EFA\u7528\u6237\uFF0C\u521B\u5EFA\u5B8C\u7528\u6237\u540E\uFF0C\u4F7F\u7528\u7EC8\u7AEF\uFF0C\u5BF9\u521B\u5EFA\u7684\u7528\u6237\u8FDB\u884C\u6FC0\u6D3B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@home packages]# gitlab-rails console
--------------------------------------------------------------------------------
 Ruby:         ruby 2.7.2p137 (2020-10-01 revision 5445e04352) [x86_64-linux]
 GitLab:       14.0.0 (f1926d2aa64) FOSS
 GitLab Shell: 13.19.0
 PostgreSQL:   12.6
--------------------------------------------------------------------------------
Loading production environment (Rails 6.1.3.2)
irb(main):001:0&gt; user = User.find_by_username(&quot;zeanzai&quot;)
=&gt; #&lt;User id:2 @zeanzai&gt;
irb(main):002:0&gt; user.state = &quot;active&quot;
=&gt; &quot;active&quot;
irb(main):003:0&gt; user.save
=&gt; true
irb(main):004:0&gt; exit

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="\u95EE\u9898\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u89E3\u51B3" aria-hidden="true">#</a> \u95EE\u9898\u89E3\u51B3</h2><ul><li><p>\u9519\u8BEF\u6D88\u606F\uFF1A 502\u9519\u8BEF\uFF01</p></li><li><p>\u539F\u56E01\uFF1A\u65E5\u5FD7\u6587\u4EF6\u6CA1\u6709\u6743\u9650</p></li></ul><p>\u89E3\u51B3\u6B65\u9AA4\uFF1AGitlab\u6587\u4EF6\u9700\u8981\u7ED9\u4E88\u8BFB\u5199\u7684\u6743\u9650 <code>chmod -R 755 /var/log/gitlab</code></p><ul><li>\u539F\u56E02\uFF1A\u7AEF\u53E3\u51B2\u7A81</li></ul><p>\u89E3\u51B3\u6B65\u9AA4\uFF1AGitlab\u7684\u9ED8\u8BA4\u542F\u52A8\u7AEF\u53E3\u662F80,8080\uFF0C\u6240\u4EE5\u6709\u80AF\u80FD\u4F1A\u4E0E\u5176\u4ED6\u7684\u7AEF\u53E3\u4EA7\u751F\u51B2\u7A81\uFF0C\u6240\u4EE5\u9700\u8981\u4FEE\u6539\u6587\u4EF6 <code>vi /etc/gitlab/gitlab.rb</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>unicorn[&#39;listen&#39;] = &#39;127.0.0.1&#39;
unicorn[&#39;port&#39;] = 8001    # \u4E3Aunicorn worker\u7684\u5DE5\u4F5C\u7AEF\u53E3\uFF0C\u9ED8\u8BA4\u4E3A8080\uFF0C\u5982\u679C\u4F60\u76848080\u7AEF\u53E3\u88AB\u5360\u7528\u7684\uFF0C\u8FD9\u4E00\u9879\u9700\u8981\u66F4\u6539\u3002

$ gitlab-ctl reconfigure
$ gitlab-ctl restart
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>\u539F\u56E03\uFF1A\u5185\u5B58\u4E0D\u8DB3</li></ul><p>\u89E3\u51B3\u6B65\u9AA4\uFF1A\u5B89\u88C5gitlab\u7684\u65F6\u5019\uFF0C\u5DF2\u7ECF\u8BF4\u660E\u4F60\u7684\u7A7A\u4F59\u5185\u5B58\u9700\u8981\u67094G\u5DE6\u53F3\u7684\u5185\u5B58\uFF0C\u6240\u4EE5\u5728\u5B89\u88C5gitlab\u7684\u65F6\u5019\uFF0C\u8BF7\u7ED9\u8DB3\u5185\u5B58\uFF0C\u5728\u5B89\u88C5\u3002</p><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> \u53C2\u8003\u94FE\u63A5</h2>`,31),c=i("http://www.mamicode.com/info-detail-2317465.html "),u=["src"];function m(e,d){return r(),a(s,null,[p,n("ol",null,[n("li",null,[c,n("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:e.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,u)])])],64)}var _=t(b,[["render",m],["__file","gitlab.html.vue"]]);export{_ as default};
