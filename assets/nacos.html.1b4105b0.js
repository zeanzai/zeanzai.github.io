import{e as n}from"./app.3140fa71.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<p>nacos\u8FD0\u884C\u73AF\u5883\u4F9D\u8D56\u4E8Ejdk\u73AF\u5883\uFF0C\u56E0\u6B64\u9700\u8981\u5148\u5B89\u88C5jdk\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5728mac\u4E0A\u628A\u4ECEGitHub\u4E0A\u4E0B\u8F7D\u4E0B\u6765\u7684\u5B89\u88C5\u5305\u4E0A\u4F20\u81F3centos
\u279C  Downloads scp -r nacos-server-2.2.3.tar.gz root@192.168.1.150:/mnt/doc/package 
nacos-server-2.2.3.tar.gz          

// \u89E3\u538B\u5230\u5B89\u88C5\u76EE\u5F55\u4E0B
[root@home package]# tar zxvf nacos-server-2.2.3.tar.gz -C /usr/setup/

// \u4FEE\u6539start.sh\u542F\u52A8\u811A\u672C\uFF0C\u6DFB\u52A0jdk\u7684\u73AF\u5883\u53D8\u91CF
[root@home bin]# vi /usr/setup/nacos/bin/startup.sh 
...
# limitations under the License.

cygwin=false
darwin=false
os400=false
case &quot;\`uname\`&quot; in
CYGWIN*) cygwin=true;;
Darwin*) darwin=true;;
OS400*) os400=true;;
esac
error_exit ()
{
    echo &quot;ERROR: $1 !!&quot;
    exit 1
}

[ ! -e &quot;$JAVA_HOME/bin/java&quot; ] &amp;&amp; JAVA_HOME=/usr/setup/jdk1.8.0_144 ## \u6DFB\u52A0\u8FD9\u4E00\u884C
[ ! -e &quot;$JAVA_HOME/bin/java&quot; ] &amp;&amp; JAVA_HOME=$HOME/jdk/java
[ ! -e &quot;$JAVA_HOME/bin/java&quot; ] &amp;&amp; JAVA_HOME=/usr/java
[ ! -e &quot;$JAVA_HOME/bin/java&quot; ] &amp;&amp; JAVA_HOME=/opt/taobao/java
[ ! -e &quot;$JAVA_HOME/bin/java&quot; ] &amp;&amp; unset JAVA_HOME
...

// \u5F00\u673A\u81EA\u542F\u52A8
// \u5728 /usr/lib/systemd/system \u76EE\u5F55\u4E0B\u521B\u5EFA nacos.service \uFF0C\u5E76\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9
[root@home bin]# vi /usr/lib/systemd/system/nacos.service

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

// \u5F00\u653E\u7AEF\u53E3
firewall-cmd --zone=public --add-port=8848/tcp --permanent
firewall-cmd --reload

// \u8BBF\u95EE\u5730\u5740\uFF1A ip:8848/nacos

// \u7528\u6237\u540D\u5BC6\u7801\uFF1A nacos / nacos
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div><hr><p><br><br><br><img style="border:1px red solid;display:block;margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="\u5FAE\u4FE1\u516C\u4F17\u53F7"></p>`,4);function r(p,l){return e}var i=s(a,[["render",r],["__file","nacos.html.vue"]]);export{i as default};
