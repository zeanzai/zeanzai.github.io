import{c as a,a as n,F as e,e as l,o as r}from"./app.65f1b23a.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const p={},b=l(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u62C9\u53D6\u955C\u50CF
[root@home docker]# docker pull mysql:5.7

5.7: Pulling from library/mysql
72a69066d2fe: Pull complete 
93619dbc5b36: Pull complete 
99da31dd6142: Pull complete 
626033c43d70: Pull complete 
37d5d7efb64e: Pull complete 
ac563158d721: Pull complete 
d2ba16033dad: Pull complete 
0ceb82207cd7: Pull complete 
37f2405cae96: Pull complete 
e2482e017e53: Pull complete 
70deed891d42: Pull complete 
Digest: sha256:f2ad209efe9c67104167fc609cca6973c8422939491c9345270175a300419f94
Status: Downloaded newer image for mysql:5.7
docker.io/library/mysql:5.7

// \u5B89\u88C5 
[root@home docker]# docker run -p 3306:3306 --name mysql \\
&gt; -v /mnt/doc/docker/mysql/log:/var/log/mysql \\
&gt; -v /mnt/doc/docker/mysql/data:/var/lib/mysql \\
&gt; -v /mnt/doc/docker/mysql/conf:/etc/mysql \\
&gt; -e MYSQL_ROOT_PASSWORD=root \\
&gt; -d mysql:5.7
0a4457b1eac5dbfdba0f483db94aeb4fd42652d9f893094cf34daa0f4877116d
[root@home docker]# docker ps -a
CONTAINER ID   IMAGE       COMMAND                   CREATED         STATUS         PORTS                                                  NAMES
0a4457b1eac5   mysql:5.7   &quot;docker-entrypoint.s\u2026&quot;   6 seconds ago   Up 5 seconds   0.0.0.0:3306-&gt;3306/tcp, :::3306-&gt;3306/tcp, 33060/tcp   mysql
[root@home docker]# cd /mnt/doc/docker/
[root@home mysql]# cd conf/
[root@home conf]# ll
\u603B\u7528\u91CF 0

// \u521B\u5EFA\u914D\u7F6E\u6587\u4EF6
[root@home conf]# vi my.cnf

[client]
default-character-set=utf8mb4
[mysql]
default-character-set=utf8mb4
[mysqld]
init_connect=&#39;SET collation_connection = utf8mb4_unicode_ci&#39;
init_connect=&#39;SET NAMES utf8mb4&#39;
character-set-server=utf8mb4
collation-server=utf8mb4_unicode_ci
skip-character-set-client-handshake
skip-name-resolve

// \u91CD\u542Fmysql
[root@home conf]# docker restart mysql
mysql
[root@home conf]# docker ps
CONTAINER ID   IMAGE       COMMAND                   CREATED         STATUS          PORTS                                                  NAMES
0a4457b1eac5   mysql:5.7   &quot;docker-entrypoint.s\u2026&quot;   6 minutes ago   Up 10 seconds   0.0.0.0:3306-&gt;3306/tcp, :::3306-&gt;3306/tcp, 33060/tcp   mysql

// \u8BBE\u7F6E\u5F00\u673A\u81EA\u542F
[root@home conf]# docker update mysql --restart=always
mysql

// \u89E3\u51B3\u65F6\u95F4\u95EE\u9898
[root@home conf]# docker exec -it mysql bash
root@0a4457b1eac5:/# date
Sat Oct  7 12:58:45 UTC 2023
root@0a4457b1eac5:/# ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
root@0a4457b1eac5:/# date
Sat Oct  7 20:58:57 CST 2023
root@0a4457b1eac5:/# exit
exit

// \u6700\u540E\u91CD\u542F
[root@home conf]# docker restart mysql
mysql
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br></div></div><hr>`,2),m=n("br",null,null,-1),o=n("br",null,null,-1),t=n("br",null,null,-1),i=["src"];function u(s,d){return r(),a(e,null,[b,n("p",null,[m,o,t,n("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:s.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,i)])],64)}var h=c(p,[["render",u],["__file","mysql.html.vue"]]);export{h as default};
