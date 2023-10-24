import{c as n,a as s,F as e,e as r,o as l}from"./app.65f1b23a.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";var t="/assets/2023-10-24-18-17-29.53e8bd9b.png",p="/assets/2023-10-24-18-17-30.a416f37d.png",c="/assets/2023-10-24-18-17-32.bc4abe6a.png",o="/assets/2023-10-24-18-17-33.27e9bc0f.png",d="/assets/2023-10-24-18-17-34.277786bb.png",b="/assets/2023-10-24-18-17-35.14ce1bed.png",m="/assets/2023-10-24-18-17-37.83a2f1c9.png",u="/assets/2023-10-24-18-17-38.9f015a6f.png",g="/assets/2023-10-24-18-17-39.3772129c.png",h="/assets/2023-10-24-18-17-40.975aa66b.png",v="/assets/2023-10-24-18-17-41.2c55c97e.png",f="/assets/2023-10-24-18-17-43.c0b9301a.png",y="/assets/2023-10-24-18-17-44.d4387972.png",x="/assets/2023-10-24-18-17-45.e4e69b3a.png",_="/assets/2023-10-24-18-17-46.4260f70f.png",k="/assets/2023-10-24-18-17-48.c74277e7.png",z="/assets/2023-10-24-18-17-49.0002b7d8.png",q="/assets/2023-10-24-18-17-50.259ea871.png",w="/assets/2023-10-24-18-17-52.8524e61a.png",S="/assets/2023-10-24-18-17-53.4fffafbb.png",E="/assets/2023-10-24-18-17-55.735f4c14.png";const V={},j=r('<h2 id="\u865A\u62DF\u673A\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u865A\u62DF\u673A\u5B89\u88C5" aria-hidden="true">#</a> \u865A\u62DF\u673A\u5B89\u88C5</h2><p><img src="'+t+'" alt="" loading="lazy"></p><p><img src="'+p+'" alt="" loading="lazy"></p><p><img src="'+c+'" alt="" loading="lazy"></p><p><img src="'+o+'" alt="" loading="lazy"></p><p><img src="'+d+'" alt="" loading="lazy"></p><p><img src="'+b+'" alt="" loading="lazy"></p><p><img src="'+m+'" alt="" loading="lazy"></p><p><img src="'+u+'" alt="" loading="lazy"></p><h2 id="vagrant-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#vagrant-\u5B89\u88C5" aria-hidden="true">#</a> vagrant \u5B89\u88C5</h2><p><img src="'+g+'" alt="" loading="lazy"></p><p><img src="'+h+'" alt="" loading="lazy"></p><p><img src="'+v+'" alt="" loading="lazy"></p><p><img src="'+f+'" alt="" loading="lazy"></p><p><img src="'+y+'" alt="" loading="lazy"></p><p><img src="'+x+'" alt="" loading="lazy"></p><p><img src="'+_+`" alt="" loading="lazy"></p><p>https://app.vagrantup.com/boxes/search</p><h2 id="\u5B89\u88C5linux\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5linux\u670D\u52A1\u5668" aria-hidden="true">#</a> \u5B89\u88C5Linux\u670D\u52A1\u5668</h2><h3 id="\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316" aria-hidden="true">#</a> \u521D\u59CB\u5316</h3><p>vagrant init centos/7</p><h3 id="\u4FEE\u6539-vgfile" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539-vgfile" aria-hidden="true">#</a> \u4FEE\u6539 vgfile</h3><p>config.vm.network &quot;private_network&quot;, ip: &quot;192.168.56.10&quot;</p><h3 id="\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8" aria-hidden="true">#</a> \u542F\u52A8</h3><p>vagrant up</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PS D:\\VM\\vgfiles&gt; vagrant up
No usable default provider could be found for your system.

Vagrant relies on interactions with 3rd party systems, known as
&quot;providers&quot;, to provide Vagrant with resources to run development
environments. Examples are VirtualBox, VMware, Hyper-V.

The easiest solution to this message is to install VirtualBox, which
is available for free on all major platforms.

If you believe you already have a provider available, make sure it
is properly installed and configured. You can see more details about
why a particular provider isn&#39;t working by forcing usage with
\`vagrant up --provider=PROVIDER\`, which should give you a more specific
error message for that particular provider.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u51FA\u73B0\u4E0A\u8FF0\u95EE\u9898\u9700\u8981\u6392\u67E5\uFF1A</p><ol><li>virtualBox\u7684\u7248\u672C\u95EE\u9898\uFF0C\u5C3D\u91CF\u4E0E\u89C6\u9891\u4E2D\u7684\u7248\u672C\u4FE1\u606F\u4E00\u81F4\uFF1B</li><li>\u6392\u67E5window\u7684\u865A\u62DF\u5316\u8BBE\u7F6E\u662F\u5426\u5F00\u542F\uFF0CBIOS\u4E2D\u7684\u865A\u62DF\u5316\u9700\u8981\u5F00\u542F\uFF0Chyper-v\u529F\u80FD\u4E5F\u5F00\u542F\uFF1B</li></ol><p><img src="`+k+`" alt="" loading="lazy"></p><h3 id="\u767B\u5F55\u865A\u62DF\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u767B\u5F55\u865A\u62DF\u670D\u52A1\u5668" aria-hidden="true">#</a> \u767B\u5F55\u865A\u62DF\u670D\u52A1\u5668</h3><p>vagrant ssh</p><h3 id="linux\u5B89\u88C5docker" tabindex="-1"><a class="header-anchor" href="#linux\u5B89\u88C5docker" aria-hidden="true">#</a> Linux\u5B89\u88C5docker</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5B89\u88C5yum\u6E90\u7684\u5DE5\u5177\u5305
yum install -y yum-utils

// \u914D\u7F6Edocker\u7684\u5B89\u88C5\u6E90
yum-config-manager \\
--add-repo \\
https://download.docker.com/linux/centos/docker-ce.repo

// \u5B89\u88C5docker
yum install docker-ce docker-ce-cli containerd.io docker-compose-plugin

// \u8BBE\u7F6E\u5F00\u673A\u81EA\u542F
systemctl enable docker


sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39;
{
&quot;registry-mirrors&quot;: [&quot;https://hpifphoh.mirror.aliyuncs.com&quot;]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="\u5B89\u88C5mysql" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5mysql" aria-hidden="true">#</a> \u5B89\u88C5MySQL</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo docker pull mysql:5.7

docker run -p 3306:3306 --name mysql \\
-v /mydata/mysql/log:/var/log/mysql \\
-v /mydata/mysql/data:/var/lib/mysql \\
-v /mydata/mysql/conf:/etc/mysql \\
-e MYSQL_ROOT_PASSWORD=root \\
-d mysql:5.7

[root@localhost vagrant]# cd /mydata/mysql/conf/
[root@localhost conf]# ls
[root@localhost conf]# vi my.cnf


[client]
default-character-set=utf8
[mysql]
default-character-set=utf8
[mysqld]
init_connect=&#39;SET collation_connection = utf8_unicode_ci&#39;
init_connect=&#39;SET NAMES utf8&#39;
character-set-server=utf8
collation-server=utf8_unicode_ci
skip-character-set-client-handshake
skip-name-resolve


docker update mysql --restart=always

docker restart mysql
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h3 id="\u5B89\u88C5redis" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5redis" aria-hidden="true">#</a> \u5B89\u88C5redis</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir -p /mydata/redis/conf
touch /mydata/redis/conf/redis.conf
appendonly yes

docker run -p 6379:6379 --name redis \\
-v /mydata/redis/data:/data \\
-v /mydata/redis/conf/redis.conf:/etc/redis/redis.conf \\
-d redis redis-server /etc/redis/redis.conf

docker update redis --restart=always
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u8BBE\u7F6E\u5F00\u53D1\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u5F00\u53D1\u73AF\u5883" aria-hidden="true">#</a> \u8BBE\u7F6E\u5F00\u53D1\u73AF\u5883</h2><h3 id="maven" tabindex="-1"><a class="header-anchor" href="#maven" aria-hidden="true">#</a> maven</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;mirror&gt;
  &lt;id&gt;nexus-aliyun&lt;/id&gt;
  &lt;mirrorOf&gt;central&lt;/mirrorOf&gt;
  &lt;name&gt;Nexus Aliyun&lt;/name&gt;
  &lt;url&gt;http://maven.aliyun.com/nexus/content/groups/public&lt;/url&gt;
&lt;/mirror&gt;


&lt;profile&gt;
  &lt;id&gt;jdk-1.8&lt;/id&gt;
  &lt;activation&gt;
      &lt;activeByDefault&gt;true&lt;/activeByDefault&gt;
      &lt;jdk&gt;1.8&lt;/jdk&gt;
  &lt;/activation&gt;
  &lt;properties&gt;
      &lt;maven.compiler.source&gt;1.8&lt;/maven.compiler.source&gt;
      &lt;maven.compiler.target&gt;1.8&lt;/maven.compiler.target&gt;
      &lt;maven.compiler.compilerVersion&gt;1.8&lt;/maven.compiler.compilerVersion&gt;
  &lt;/properties&gt;
&lt;/profile&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="idea" tabindex="-1"><a class="header-anchor" href="#idea" aria-hidden="true">#</a> idea</h3><ol><li>\u4FEE\u6539maven\u7684\u5B89\u88C5\u8DEF\u5F84\u53CAconfig\u6587\u4EF6\u6240\u5728\u4F4D\u7F6E\uFF1B</li><li>\u5B89\u88C5lombok\u63D2\u4EF6\u548Cmybatisx\u63D2\u4EF6\uFF1B</li></ol><h3 id="\u914D\u7F6Egit" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Egit" aria-hidden="true">#</a> \u914D\u7F6Egit</h3><p>\u627E\u5230ssh\u516C\u94A5\uFF0C\u7136\u540E\u628A\u516C\u94A5\u91CC\u9762\u7684\u5185\u5BB9\u914D\u7F6E\u5230gitee\u4E0A\u9762\u53BB\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PS C:\\Users\\zeanzai\\.ssh&gt; cat .\\id_ed25519.pub

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6D4B\u8BD5\u8FDE\u901A\u6027\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
C:\\Users\\zeanzai\\.ssh&gt; ssh -T git@gitee.com
The authenticity of host &#39;gitee.com (180.76.198.77)&#39; can&#39;t be established.
ECDSA key fingerprint is SHA256:FQGC9Kn/eye1W8icdBgrQp+KkGYoFgbVr17bmjey0Wc.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added &#39;gitee.com,180.76.198.77&#39; (ECDSA) to the list of known hosts.
Hi zeanzai(@zeanzai)! You&#39;ve successfully authenticated, but GITEE.COM does not provide shell access.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>gitee\u4E0A\u521B\u5EFA\u4ED3\u5E93\uFF1A</p><p><img src="`+z+`" alt="" loading="lazy"></p><p>\u514B\u9686\u5230\u672C\u5730</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PS D:\\Source\\Gitee&gt; git clone https://gitee.com/zeanzai/gulimall.git
Cloning into &#39;gulimall&#39;...
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Receiving objects: 100% (3/3), done.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4F7F\u7528idea\u6253\u5F00</p><p>\u521B\u5EFA\u9879\u76EE\uFF1B</p><p><img src="`+q+'" alt="" loading="lazy"></p><p><img src="'+w+'" alt="" loading="lazy"></p><p><img src="'+S+'" alt="" loading="lazy"><img src="'+E+'" alt="" loading="lazy"></p><p>\u5BFC\u5165MySQL\u6570\u636E\u6587\u4EF6\uFF1B</p><h3 id="vscode" tabindex="-1"><a class="header-anchor" href="#vscode" aria-hidden="true">#</a> vscode</h3><ol><li>\u5B89\u88C5\u63D2\u4EF6</li></ol><h2 id="\u9006\u5411\u5DE5\u7A0B\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u9006\u5411\u5DE5\u7A0B\u542F\u52A8" aria-hidden="true">#</a> \u9006\u5411\u5DE5\u7A0B\u542F\u52A8</h2><ol><li>\u542F\u52A8</li><li>\u751F\u6210\u4EE3\u7801</li></ol><h2 id="\u542F\u52A8renren-fast\u4F5C\u4E3A\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8renren-fast\u4F5C\u4E3A\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF" aria-hidden="true">#</a> \u542F\u52A8renren-fast\u4F5C\u4E3A\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF</h2><h2 id="\u6DFB\u52A0nacos\u4F5C\u4E3A\u6CE8\u518C\u4E2D\u5FC3" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0nacos\u4F5C\u4E3A\u6CE8\u518C\u4E2D\u5FC3" aria-hidden="true">#</a> \u6DFB\u52A0nacos\u4F5C\u4E3A\u6CE8\u518C\u4E2D\u5FC3</h2><h2 id="\u4F7F\u7528openfeign" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528openfeign" aria-hidden="true">#</a> \u4F7F\u7528openfeign</h2><h2 id="\u4F7F\u7528nacos\u4F5C\u4E3A\u914D\u7F6E\u4E2D\u5FC3" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528nacos\u4F5C\u4E3A\u914D\u7F6E\u4E2D\u5FC3" aria-hidden="true">#</a> \u4F7F\u7528nacos\u4F5C\u4E3A\u914D\u7F6E\u4E2D\u5FC3</h2><ol><li>\u4F20\u7EDF\u65B9\u5F0F\u4F7F\u7528\u914D\u7F6E\u9879\uFF1B</li><li>\u4F7F\u7528nacos\u4F5C\u4E3A\u914D\u7F6E\u4E2D\u5FC3\uFF1B</li><li>\u4F7F\u7528\u539F\u5219\uFF1A \u670D\u52A1\u540D\u4F5C\u4E3A\u547D\u540D\u7A7A\u95F4\uFF0C\u6587\u4EF6\u540D\u4F5C\u4E3Adataid\uFF0C\u73AF\u5883\u540D\u4F5C\u4E3Agroupid\uFF1B</li></ol><h2 id="\u95EE\u9898\u96C6\u9526" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u96C6\u9526" aria-hidden="true">#</a> \u95EE\u9898\u96C6\u9526</h2><ol><li>test\u65E0\u8FD0\u884C\u6309\u94AE\u3002\u5728\u4F7F\u7528idea2022\u7248\u672C\u521B\u5EFAmodule\u65F6\uFF0C\u7531\u4E8E\u7248\u672C\u8F83\u65B0\uFF0C\u540E\u9762\u91C7\u7528\u7684\u662F\u5148\u9009\u62E9\u4E00\u4E2A\u9AD8\u7248\u672C\u7684\uFF0C\u4E4B\u540E\u901A\u8FC7\u4FEE\u6539pom\u6587\u4EF6\u7684\u65B9\u5F0F\u6765\u4FEE\u6539springboot\u7684\u7248\u672C\uFF0C\u8FD9\u5C31\u5BFC\u81F4idea\u7ED9\u6211\u4EEC\u751F\u6210\u7684test\u4E0D\u53EF\u7528\uFF0C\u8FD9\u662F\u56E0\u4E3Aidea\u7ED9\u6211\u4EEC\u751F\u6210\u7684test\u4E0D\u5B8C\u6574\uFF0C\u9700\u8981\u6DFB\u52A0public\u7B49\u5173\u952E\u5B57\u3002</li></ol><hr><p><br><br><br></p>',70),B=["src"];function O(a,C){return l(),n(e,null,[j,s("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:a.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,B)],64)}var A=i(V,[["render",O],["__file","guli.html.vue"]]);export{A as default};
