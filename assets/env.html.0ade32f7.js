import{e as n}from"./app.b80325f2.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h2 id="\u8FD0\u884C\u73AF\u5883\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u73AF\u5883\u8BF4\u660E" aria-hidden="true">#</a> \u8FD0\u884C\u73AF\u5883\u8BF4\u660E</h2><p>\u6211\u4EEC\u4F7F\u7528\u4E00\u4E2A\u53F0\u5F0F\u673A\u4F5C\u4E3A\u6211\u4EEC\u7684\u670D\u52A1\u5668\uFF0C\u5E76\u4E14\u5F00\u53D1\u73AF\u5883\u7684\u4E00\u4E9B\u7EC4\u4EF6\u662F\u90E8\u7F72\u5728docker\u4E0A\u7684\u3002</p><h2 id="centos\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#centos\u4F7F\u7528" aria-hidden="true">#</a> Centos\u4F7F\u7528</h2><h3 id="centos\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#centos\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> CentOS\u5E38\u7528\u547D\u4EE4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u590D\u5236\u6587\u4EF6\u5939\u5230\u670D\u52A1\u5668\u4E0A
scp -r local_folder remote_username@remote_ip:remote_folder

// \u542F\u52A8server

// \u5F00\u653E\u7AEF\u53E3
firewall-cmd --zone=public --add-port=8848/tcp --permanent
firewall-cmd --reload

// \u5220\u9664\u5F53\u524D\u76EE\u5F55\u53CA\u5B50\u6587\u4EF6\u5939\u4E0B\u9762\u6240\u6709\u7684target\u6587\u4EF6\u5939
find ./ -name -type d &quot;target&quot; -exec rm -rf &#39;{}&#39; +

// \u5220\u9664\u5F53\u524D\u76EE\u5F55\u53CA\u5B50\u6587\u4EF6\u5939\u5185\u6240\u6709\u7684\u4EE5.iml\u7ED3\u5C3E\u7684\u6587\u4EF6
find ./ -name &#39;*.iml&#39; -exec rm -rf &#39;{}&#39; +

// \u5F00\u542F\u81EA\u542F\u52A8\u670D\u52A1
systemctl enable nacos.service

// \u91CD\u65B0\u52A0\u8F7D\u81EA\u542F\u52A8\u670D\u52A1
systemctl daemon-reload

// \u67E5\u770B\u662F\u5426\u5047\u5982\u81EA\u542F\u52A8\u670D\u52A1
systemctl is-enabled nacos.service

// \u67E5\u770B\u7CFB\u7EDF\u78C1\u76D8\u7A7A\u95F4 
df -h

// \u67E5\u770B\u67D0\u4E00\u4E2A\u6587\u4EF6\u5939\u4E0B\u9762\u6240\u6709\u6587\u4EF6\u7684\u5927\u5C0F
du --max-depth=1 -h /mydata/nexus/data/log/


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h3 id="centos\u5B89\u88C5docker" tabindex="-1"><a class="header-anchor" href="#centos\u5B89\u88C5docker" aria-hidden="true">#</a> centos\u5B89\u88C5Docker</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@home ~]# uname -a
Linux home.centos 3.10.0-1160.76.1.el7.x86_64 #1 SMP Wed Aug 10 16:21:17 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Docker\u7684\u5B89\u88C5\u8FC7\u7A0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// \u5B89\u88C5yum\u6E90\u7684\u5DE5\u5177\u5305
yum <span class="token function">install</span> -y yum-utils

// \u914D\u7F6Edocker\u7684\u5B89\u88C5\u6E90
yum-config-manager <span class="token punctuation">\\</span>
--add-repo <span class="token punctuation">\\</span>
https://download.docker.com/linux/centos/docker-ce.repo

// \u5B89\u88C5docker
yum <span class="token function">install</span> docker-ce docker-ce-cli containerd.io docker-compose-plugin

// \u8BBE\u7F6E\u5F00\u673A\u81EA\u542F
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>


<span class="token function">mkdir</span> -p /etc/docker
<span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
&quot;registry-mirrors&quot;: [&quot;https://hpifphoh.mirror.aliyuncs.com&quot;]
}
EOF</span>
systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="\u5B89\u88C5nacos" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5nacos" aria-hidden="true">#</a> \u5B89\u88C5Nacos</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4E0B\u8F7D


// \u89E3\u538B\u5230\u5B89\u88C5\u76EE\u5F55
tar zxvf nacos-server-1.2.1.tar.gz -C /usr/setup/
// \u542F\u52A8
./startup.sh -m standalone

// \u5F00\u653E\u7AEF\u53E3
firewall-cmd --zone=public --add-port=8848/tcp --permanent
firewall-cmd --reload


// \u5F00\u673A\u81EA\u542F\u52A8
// \u5728 /usr/lib/systemd/system \u76EE\u5F55\u4E0B\u521B\u5EFA nacos.service \uFF0C\u5E76\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9

[Unit]
Description=nacos
After=network.target

[Service]
Type=forking
ExecStart=/usr/setup/nacos/bin/startup.sh -m standalone
ExecReload=/usr/setup/nacos/bin/shutdown.sh
ExecStop=/usr/setup/nacos/bin/shutdown.sh
PrivateTmp=true

[Install]
WantedBy=multi-user.target

// \u5F00\u542F\u81EA\u542F\u52A8\u670D\u52A1
systemctl enable nacos.service

// \u91CD\u65B0\u52A0\u8F7D\u81EA\u542F\u52A8\u670D\u52A1
systemctl daemon-reload

// \u67E5\u770B\u662F\u5426\u5047\u5982\u81EA\u542F\u52A8\u670D\u52A1
systemctl is-enabled nacos.service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h2 id="\u57FA\u4E8Edocker\u5B89\u88C5\u5F00\u53D1\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8Edocker\u5B89\u88C5\u5F00\u53D1\u73AF\u5883" aria-hidden="true">#</a> \u57FA\u4E8EDocker\u5B89\u88C5\u5F00\u53D1\u73AF\u5883</h2><h3 id="docker\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#docker\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> Docker\u5E38\u7528\u547D\u4EE4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker pull

docker images
docker ps -a
docker stop redis 
docker rm 88f # \u5220\u9664\u5BB9\u5668
docker rmi 991 # \u5220\u9664\u955C\u50CF
docker update mysql --restart=always # \u81EA\u52A8\u91CD\u542F

docker run -p 3306:3306 --name mysql \\
-v /mydata/mysql/log:/var/log/mysql \\
-v /mydata/mysql/data:/var/lib/mysql \\
-v /mydata/mysql/conf:/etc/mysql \\
-e MYSQL_ROOT_PASSWORD=root \\
-d mysql:5.7



docker logs d2d


# \u91CD\u65B0\u5B89\u88C5nginx\uFF0C\u5148\u5220\u9664\u5BB9\u5668\uFF0C\u518D\u91CD\u65B0\u6267\u884C

docker exec -it 4992272fdf45 /bin/bash  # \u8FDB\u5165\u5BB9\u5668\u5185\u90E8


docker cp host_path containerID:container_path # \u4ECE\u4E3B\u673A\u590D\u5236\u5230\u5BB9\u5668

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="\u5B89\u88C5mysql" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5mysql" aria-hidden="true">#</a> \u5B89\u88C5MySQL</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker run -p 3306:3306 --name mysql \\
-v /mydata/mysql/log:/var/log/mysql \\
-v /mydata/mysql/data:/var/lib/mysql \\
-v /mydata/mysql/conf:/etc/mysql \\
-e MYSQL_ROOT_PASSWORD=root \\
-d mysql:5.7


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


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h4 id="\u89E3\u51B3\u65F6\u95F4\u5DEE8\u5C0F\u65F6\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65F6\u95F4\u5DEE8\u5C0F\u65F6\u7684\u95EE\u9898" aria-hidden="true">#</a> \u89E3\u51B3\u65F6\u95F4\u5DEE8\u5C0F\u65F6\u7684\u95EE\u9898</h4><ol><li>\u5728\u5BA2\u6237\u7AEF\u8F93\u5165 select now(); \u53D1\u73B0\u67E5\u4E868\u5C0F\u65F6</li><li>\u8FDB\u5165 mysql \u670D\u52A1\u7AEF\uFF1A docker exec -it mysql bash</li><li>\u67E5\u770Bmysql\u670D\u52A1\u7AEF\u5F53\u524D\u65F6\u95F4\uFF1A date \uFF0C\u53D1\u73B0\u5DEE\u4E868\u5C0F\u65F6</li><li>\u76F4\u63A5\u4FEE\u6539\u65F6\u533A\u4E3A\u4E0A\u6D77\uFF1A ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \uFF0C\u518D\u6B21\u8F93\u5165 date\uFF0C\u53D1\u73B0\u65F6\u95F4\u5DF2\u7ECF\u6B63\u5E38</li><li>\u91CD\u542Fmysql\u670D\u52A1\u7AEF</li></ol><h3 id="\u5B89\u88C5redis" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5redis" aria-hidden="true">#</a> \u5B89\u88C5Redis</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker run -p 6379:6379 --name redis \\
-v /mydata/redis/data:/data \\
-v /mydata/redis/conf/redis.conf:/etc/redis/redis.conf \\
-d redis redis-server /etc/redis/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u5B89\u88C5nexus" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5nexus" aria-hidden="true">#</a> \u5B89\u88C5Nexus</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker pull sonatype/nexus3

mkdir -p /mydata/nexus/data

docker run -d --name nexus -p 8081:8081 \\
--restart always \\
-v /mydata/nexus/data:/nexus-data sonatype/nexus3

admin\u5BC6\u7801
cat /mydata/nexus/data/admin.password \u4E4B\u540E\u4FEE\u6539\u5BC6\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="\u5B89\u88C5rabbitmq" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5rabbitmq" aria-hidden="true">#</a> \u5B89\u88C5RabbitMQ</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
docker search rabbitmq

docker pull rabbitmq

mkdir -p /mydata/rabbimq/

docker run -p 5672:5672 -p 15672:15672 --name rabbitmq \\
-v /mydata/rabbitmq:/var/lib/rabbitmq \\
-v /mydata/rabbitmq/logs:/var/log/rabbitmq \\
-e RABBITMQ_DEFAULT_USER=admin \\
-e RABBITMQ_DEFAULT_PASS=admin \\
-e RABBITMQ_LOG_BASE=/var/log/rabbitmq \\
-d rabbitmq

docker exec -it rabbitmq /bin/bash

rabbitmq-plugins enable rabbitmq_management

## \u5F00\u673A\u81EA\u542F\u52A8
docker update rabbitmq --restart=always

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,24);function r(l,p){return e}var c=s(a,[["render",r],["__file","env.html.vue"]]);export{c as default};
