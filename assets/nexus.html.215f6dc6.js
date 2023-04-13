import{c as e,a as n,F as a,e as l,d as r,o as t}from"./app.704b5e6d.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const p={},u=l(`<h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><p>\uFF08\u4E3B\u8981\u4ECB\u7ECD\uFF1A\u5E94\u7528\u573A\u666F\uFF0C\u5927\u6982\u53D1\u5C55\u5386\u53F2\u7B49\u3002\uFF09</p><p>\uFF08\u8BFB\u8005\u5728\u5199\u81EA\u5DF1\u7684\u5B89\u88C5\u6587\u6863\u65F6\uFF0C\u6B64\u90E8\u5206\u53EF\u4EE5\u4E0D\u7528\u8BB0\u5F55\u3002\uFF09</p><h2 id="\u4FE1\u606F\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u4FE1\u606F\u7EDF\u8BA1" aria-hidden="true">#</a> \u4FE1\u606F\u7EDF\u8BA1</h2><p>\uFF08\u4E3B\u8981\u4ECB\u7ECD\uFF1A\u4E0B\u8F7D\u5730\u5740\u3001\u8F6F\u4EF6\u7248\u672C\u3001\u5B89\u88C5\u5730\u5740\u3001\u914D\u7F6E\u6587\u6863\u5730\u5740\u3001\u65E5\u5FD7\u6587\u6863\u5730\u5740\u3001\u5360\u7528\u7AEF\u53E3\u3001\u4F7F\u7528\u5730\u5740\u3001\u7528\u6237\u4FE1\u606F\u3001\u6D4B\u8BD5\u5B89\u88C5\u7ED3\u679C\u3001\u5176\u4ED6\u6709\u7528\u4FE1\u606F\u7B49\uFF09</p><h2 id="\u5B89\u88C5\u5E76\u4F7F\u7528nexus2-x" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u5E76\u4F7F\u7528nexus2-x" aria-hidden="true">#</a> \u5B89\u88C5\u5E76\u4F7F\u7528nexus2.x</h2><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><ul><li>\u5B89\u88C5\u4F9D\u8D56</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ java -version
java version &quot;1.8.0_144&quot;
Java(TM) SE Runtime Environment (build 1.8.0_144-b01)
Java HotSpot(TM) 64-Bit Server VM (build 25.144-b01, mixed mode)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li><p>\u4E0A\u4F20\u5230<code>/opt/package</code>\u76EE\u5F55</p></li><li><p>\u89E3\u538B\u5230\u89E3\u538B\u76EE\u5F55</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ tar zxf /opt/package/nexus-2.14.5-02-bundle.tar.gz -C /usr/setup/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u79FB\u52A8</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ mv -f /usr/setup/sonatype-work/ /opt/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u914D\u7F6Enexus</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ vi /usr/setup/nexus-2.14.5-02/conf/nexus.properties
// \u4FEE\u6539\u540E\uFF1A
application-host=10.168.0.120
nexus-work=/opt/sonatype-work/nexus

$ vi /usr/setup/nexus-2.14.5-02/bin/nexus
// \u4FEE\u6539\u540E\uFF1A
NEXUS_HOME=&quot;/usr/setup/nexus-2.14.5-02&quot;
RUN_AS_USER=root

$ vi /usr/setup/nexus-2.14.5-02/bin/jsw/conf/wrapper.conf
// \u4FEE\u6539\u540E\uFF1A
wrapper.java.command=/usr/setup/jdk1.8.0_144/bin/java
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ul><li>\u5F00\u653E\u7AEF\u53E3</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ firewall-cmd --zone=public --permanent --add-port=8081/tcp
$ firewall-cmd --reload
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u8BBE\u7F6E\u670D\u52A1</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ vi /etc/systemd/system/nexus.service
[Unit]
Description=nexus
After=network.target
[Service]
Type=forking
ExecStart=/usr/setup/nexus-2.14.5-02/bin/nexus start
ExecReload=/usr/setup/nexus-2.14.5-02/bin/nexus restart
ExecStop=/usr/setup/nexus-2.14.5-02/bin/nexus stop
PrivateTmp=true
[Install]
WantedBy=multi-user.target

$ systemctl enable nexus
$ systemctl start nexus
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul><li>\u6D4B\u8BD5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6D4F\u89C8\u5668\u8F93\u5165\uFF1Ahttp://10.168.0.120:8081/nexus
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u4F7F\u7528nexus2-x" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528nexus2-x" aria-hidden="true">#</a> \u4F7F\u7528nexus2.x</h3><h4 id="\u6743\u9650\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u6743\u9650\u7BA1\u7406" aria-hidden="true">#</a> \u6743\u9650\u7BA1\u7406</h4><ol><li>\u7528\u6237</li><li>\u89D2\u8272</li></ol><h4 id="\u4ED3\u5E93\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4ED3\u5E93\u7C7B\u578B" aria-hidden="true">#</a> \u4ED3\u5E93\u7C7B\u578B</h4><p>\u51E0\u79CD\u4ED3\u5E93\u7C7B\u578B\u7684\u7B80\u5355\u4ECB\u7ECD</p><h4 id="\u67E5\u770B\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u65E5\u5FD7" aria-hidden="true">#</a> \u67E5\u770B\u65E5\u5FD7</h4><p>\u5982\u4F55\u67E5\u770Bnexus\u7684\u6267\u884C\u65E5\u5FD7</p><h4 id="\u4E0B\u8F7D\u4E2D\u592E\u4ED3\u5E93\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u4E2D\u592E\u4ED3\u5E93\u7D22\u5F15" aria-hidden="true">#</a> \u4E0B\u8F7D\u4E2D\u592E\u4ED3\u5E93\u7D22\u5F15</h4><ol><li>\u8BBE\u7F6E\u4ED3\u5E93\u5F00\u5173</li><li>\u521B\u5EFA\u4EFB\u52A1</li></ol><h4 id="\u8BBE\u7F6E\u9879\u76EE\u8FDE\u63A5\u79C1\u670D" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u9879\u76EE\u8FDE\u63A5\u79C1\u670D" aria-hidden="true">#</a> \u8BBE\u7F6E\u9879\u76EE\u8FDE\u63A5\u79C1\u670D</h4><ul><li>\u5355\u4E2A\u9879\u76EE\u8FDE\u63A5\u79C1\u670D</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u53EA\u9700\u8981\u5728\u9879\u76EE\u7684pom\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4E0B\u9762\u5185\u5BB9\u5373\u53EF

&lt;repositories&gt;
    &lt;repository&gt;
        &lt;id&gt;Nexus&lt;/id&gt;
        &lt;name&gt;10.168.0.120-Nexus&lt;/name&gt;
        &lt;url&gt;http://10.168.0.120:8081/nexus/content/groups/public/&lt;/url&gt;
    &lt;/repository&gt;
&lt;/repositories&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li>\u5168\u5C40\u8FDE\u63A5\u79C1\u670D</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5728maven\u7684setting.xml\u6587\u4EF6\u4E2D\u914D\u7F6E\u4E0B\u9762\u5185\u5BB9\u5373\u53EF

&lt;mirrors&gt;
    &lt;mirror&gt;
        &lt;id&gt;devnexus&lt;/id&gt;
        &lt;name&gt;devnexus&lt;/name&gt;
        &lt;mirrorOf&gt;*&lt;/mirrorOf&gt;
        &lt;url&gt;http://10.168.0.120:8081/nexus/content/groups/public/&lt;/url&gt;
    &lt;/mirror&gt;
&lt;/mirrors&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="\u672C\u5730\u5F00\u53D1\u7684jar\u53D1\u5E03\u5230nexus\u4E0A\u9762" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u5F00\u53D1\u7684jar\u53D1\u5E03\u5230nexus\u4E0A\u9762" aria-hidden="true">#</a> \u672C\u5730\u5F00\u53D1\u7684jar\u53D1\u5E03\u5230nexus\u4E0A\u9762</h4><ul><li>\u7B2C\u4E00\u6B65\uFF1A\u914D\u7F6Esetting.xml\u6587\u4EF6</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;settings xmlns=&quot;http://maven.apache.org/SETTINGS/1.0.0&quot;
          xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
          xsi:schemaLocation=&quot;http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd&quot;&gt;


    &lt;localRepository&gt;D:\\maven\\my_local_repository&lt;/localRepository&gt;

    &lt;pluginGroups&gt;
    &lt;/pluginGroups&gt;

    &lt;proxies&gt;
    &lt;/proxies&gt;


    &lt;!--\u8BBE\u7F6E Nexus \u8BA4\u8BC1\u4FE1\u606F--&gt;
    &lt;servers&gt;
        &lt;server&gt;
            &lt;id&gt;nexus-releases&lt;/id&gt;
            &lt;username&gt;admin&lt;/username&gt;
            &lt;password&gt;admin123&lt;/password&gt;
        &lt;/server&gt;
        &lt;server&gt;
            &lt;id&gt;nexus-snapshots&lt;/id&gt;
            &lt;username&gt;admin&lt;/username&gt;
            &lt;password&gt;admin123&lt;/password&gt;
        &lt;/server&gt;
    &lt;/servers&gt;


    &lt;!--\u8BBE\u7F6E Nexus \u955C\u50CF\uFF0C\u540E\u9762\u53EA\u8981\u672C\u5730\u6CA1\u5BF9\u5E94\u7684\u4EE5\u6765\uFF0C\u5219\u5230 Nexus \u53BB\u627E--&gt;
    &lt;mirrors&gt;
        &lt;mirror&gt;
            &lt;id&gt;nexus-releases&lt;/id&gt;
            &lt;mirrorOf&gt;*&lt;/mirrorOf&gt;
            &lt;url&gt;http://10.168.0.120:8081/repository/maven-releases/&lt;/url&gt;
        &lt;/mirror&gt;
        &lt;mirror&gt;
            &lt;id&gt;nexus-snapshots&lt;/id&gt;
            &lt;mirrorOf&gt;*&lt;/mirrorOf&gt;
            &lt;url&gt;http://10.168.0.120:8081/repository/maven-snapshots/&lt;/url&gt;
        &lt;/mirror&gt;
        &lt;mirror&gt;
            &lt;id&gt;maven-aliyun&lt;/id&gt;
            &lt;name&gt;aliyun maven&lt;/name&gt;
            &lt;url&gt;http://maven.aliyun.com/nexus/content/groups/public/&lt;/url&gt;
            &lt;mirrorOf&gt;central&lt;/mirrorOf&gt;
        &lt;/mirror&gt;
    &lt;/mirrors&gt;

    &lt;profiles&gt;
        &lt;profile&gt;
            &lt;id&gt;nexus&lt;/id&gt;
            &lt;repositories&gt;
                &lt;repository&gt;
                    &lt;id&gt;nexus-releases&lt;/id&gt;
                    &lt;url&gt;http://nexus-releases&lt;/url&gt;
                    &lt;releases&gt;
                        &lt;enabled&gt;true&lt;/enabled&gt;
                    &lt;/releases&gt;
                    &lt;snapshots&gt;
                        &lt;enabled&gt;true&lt;/enabled&gt;
                    &lt;/snapshots&gt;
                &lt;/repository&gt;
                &lt;repository&gt;
                    &lt;id&gt;nexus-snapshots&lt;/id&gt;
                    &lt;url&gt;http://nexus-snapshots&lt;/url&gt;
                    &lt;releases&gt;
                        &lt;enabled&gt;true&lt;/enabled&gt;
                    &lt;/releases&gt;
                    &lt;snapshots&gt;
                        &lt;enabled&gt;true&lt;/enabled&gt;
                    &lt;/snapshots&gt;
                &lt;/repository&gt;
            &lt;/repositories&gt;
            &lt;pluginRepositories&gt;
                &lt;pluginRepository&gt;
                    &lt;id&gt;nexus-releases&lt;/id&gt;
                    &lt;url&gt;http://nexus-releases&lt;/url&gt;
                    &lt;releases&gt;
                        &lt;enabled&gt;true&lt;/enabled&gt;
                    &lt;/releases&gt;
                    &lt;snapshots&gt;
                        &lt;enabled&gt;true&lt;/enabled&gt;
                    &lt;/snapshots&gt;
                &lt;/pluginRepository&gt;
                &lt;pluginRepository&gt;
                    &lt;id&gt;nexus-snapshots&lt;/id&gt;
                    &lt;url&gt;http://nexus-snapshots&lt;/url&gt;
                    &lt;releases&gt;
                        &lt;enabled&gt;true&lt;/enabled&gt;
                    &lt;/releases&gt;
                    &lt;snapshots&gt;
                        &lt;enabled&gt;true&lt;/enabled&gt;
                    &lt;/snapshots&gt;
                &lt;/pluginRepository&gt;
            &lt;/pluginRepositories&gt;
        &lt;/profile&gt;
    &lt;/profiles&gt;

    &lt;activeProfiles&gt;
        &lt;activeProfile&gt;nexus&lt;/activeProfile&gt;
    &lt;/activeProfiles&gt;

&lt;/settings&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br></div></div><ul><li>\u7B2C\u4E8C\u6B65\uFF1A\u5728pom\u6587\u4EF6\u4E2D\u6DFB\u52A0\uFF1A</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;distributionManagement&gt;
    &lt;repository&gt;
        &lt;id&gt;nexus-releases&lt;/id&gt;
        &lt;url&gt;http://10.168.0.120:8081/repository/maven-releases/&lt;/url&gt;
    &lt;/repository&gt;
    &lt;snapshotRepository&gt;
        &lt;id&gt;nexus-snapshots&lt;/id&gt;
        &lt;url&gt;http://10.168.0.120:8081/repository/maven-snapshots/&lt;/url&gt;
    &lt;/snapshotRepository&gt;
&lt;/distributionManagement&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="\u9644-java\u9879\u76EE\u4E0D\u540C\u6A21\u5757\u7684\u5212\u5206" tabindex="-1"><a class="header-anchor" href="#\u9644-java\u9879\u76EE\u4E0D\u540C\u6A21\u5757\u7684\u5212\u5206" aria-hidden="true">#</a> \u9644\uFF1Ajava\u9879\u76EE\u4E0D\u540C\u6A21\u5757\u7684\u5212\u5206</h4><p>\u5212\u5206\u7684\u80CC\u666F \u5212\u5206\u65B9\u6CD5 \u53C2\u8003\u5730\u5740</p><h2 id="\u5B89\u88C5\u5E76\u4F7F\u7528nexus3-x" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u5E76\u4F7F\u7528nexus3-x" aria-hidden="true">#</a> \u5B89\u88C5\u5E76\u4F7F\u7528nexus3.x</h2><h3 id="\u5B89\u88C5-1" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-1" aria-hidden="true">#</a> \u5B89\u88C5</h3><h3 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h3><h1 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> \u53C2\u8003\u94FE\u63A5</h1>`,46),b=n("li",null,"https://my.oschina.net/u/3268478/blog/1802385",-1),c=n("li",null,"https://blog.csdn.net/plei_yue/article/details/78616267",-1),m=n("li",null,"https://blog.csdn.net/zwjzqqb/article/details/81299341",-1),d=n("li",null,"https://blog.csdn.net/sunggff/article/details/79354359",-1),o=n("li",null,"https://blog.csdn.net/u013030276/article/details/79640115",-1),g=n("li",null,"http://agiledon.github.io/blog/2013/11/10/create-two-jars-from-one-project-using-maven/",-1),h=r("http://ju.outofmemory.cn/entry/69763 "),x=["src"];function v(s,f){return t(),e(a,null,[u,n("ol",null,[b,c,m,d,o,g,n("li",null,[h,n("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:s.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,x)])])],64)}var w=i(p,[["render",v],["__file","nexus.html.vue"]]);export{w as default};
