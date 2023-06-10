import{e as s}from"./app.469bc209.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const e={},a=s(`<h2 id="_1-\u96C6\u7FA4\u7684\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-\u96C6\u7FA4\u7684\u5B89\u88C5" aria-hidden="true">#</a> 1. \u96C6\u7FA4\u7684\u5B89\u88C5</h2><ul><li>\u521B\u5EFA\u6587\u4EF6\u5939</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir /opt/package
mkdir -p /usr/setup/redis-cluster/confs /usr/setup/redis-cluster/logs /usr/setup/redis-cluster/pids
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u5B89\u88C5gcc</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum install -y gcc
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u89E3\u538B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tar zxf /opt/package/redis-5.0.3.tar.gz -C /opt/package/unziped
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>make</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>make
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>make install</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>make install PREFIX=/usr/setup/redis-cluster
make install PREFIX=/usr/setup/redis5.0.3
\u5728/usr/setup/redis-cluster\u76EE\u5F55\u4E0B\u751F\u6210bin\u6587\u4EF6\u5939
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u62F7\u8D1D\u914D\u7F6E\u6587\u4EF6</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cp /opt/package/unziped/redis-5.0.3/redis.conf /usr/setup/redis-cluster/confs/6379.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vi /usr/setup/redis-cluster/confs/6379.conf

bind 192.168.100.201
protected-mode no ##\u975E\u4FDD\u62A4\u6A21\u5F0F
port 6379
daemonize yes
pidfile /usr/setup/redis-cluster/pids/6379.pid
logfile &quot;/usr/setup/redis-cluster/logs/6379.log&quot;
appendonly yes
cluster-enabled yes ##\u542F\u7528\u96C6\u7FA4\u6A21\u5F0F
cluster-config-file /usr/setup/redis-cluster/confs/nodes-6379.conf
cluster-node-timeout 5000 ##\u8D85\u65F6\u65F6\u95F4
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li>\u590D\u5236\u96C6\u7FA4</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cp -r /usr/setup/redis-cluster/confs/6379.conf /usr/setup/redis-cluster/confs/6380.conf
cp -r /usr/setup/redis-cluster/confs/6379.conf /usr/setup/redis-cluster/confs/6381.conf
cp -r /usr/setup/redis-cluster/confs/6379.conf /usr/setup/redis-cluster/confs/6382.conf
cp -r /usr/setup/redis-cluster/confs/6379.conf /usr/setup/redis-cluster/confs/6383.conf
cp -r /usr/setup/redis-cluster/confs/6379.conf /usr/setup/redis-cluster/confs/6384.conf
cp -r /usr/setup/redis-cluster/confs/6379.conf /usr/setup/redis-cluster/confs/6385.conf
cp -r /usr/setup/redis-cluster/confs/6379.conf /usr/setup/redis-cluster/confs/6386.conf
cp -r /usr/setup/redis-cluster/confs/6379.conf /usr/setup/redis-cluster/confs/6387.conf
cp -r /usr/setup/redis-cluster/confs/6379.conf /usr/setup/redis-cluster/confs/6388.conf
cp -r /usr/setup/redis-cluster/confs/6379.conf /usr/setup/redis-cluster/confs/6389.conf
cp -r /usr/setup/redis-cluster/confs/6379.conf /usr/setup/redis-cluster/confs/6390.conf
cp -r /usr/setup/redis-cluster/confs/6379.conf /usr/setup/redis-cluster/confs/6391.conf
cp -r /usr/setup/redis-cluster/confs/6379.conf /usr/setup/redis-cluster/confs/6392.conf
cp -r /usr/setup/redis-cluster/confs/6379.conf /usr/setup/redis-cluster/confs/6393.conf
cp -r /usr/setup/redis-cluster/confs/6379.conf /usr/setup/redis-cluster/confs/6394.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul><li>\u4FEE\u6539\u5404\u8282\u70B9\u914D\u7F6E\u6587\u4EF6</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
port 6380
pidfile /usr/setup/redis-cluster/pids/6380.pid
logfile &quot;/usr/setup/redis-cluster/logs/6380.log&quot;
cluster-config-file /usr/setup/redis-cluster/confs/nodes-6380.conf

find . -name &#39;63*&#39; | cat 63* | grep -a0b0 &#39;port 63*&#39;
find . -name &#39;63*&#39; | cat 63* | grep -a0b0 &#39;pidfile*&#39;
find . -name &#39;63*&#39; | cat 63* | grep -a0b0 &#39;logfile*&#39;
find . -name &#39;63*&#39; | cat 63* | grep -a0b0 &#39;cluster-config-file*&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li>\u521B\u5EFA\u96C6\u7FA4\u542F\u52A8\u811A\u672C</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vi /usr/setup/redis-cluster/startall.sh

cd /usr/setup/redis-cluster/bin
./redis-server /usr/setup/redis-cluster/confs/6379.conf
./redis-server /usr/setup/redis-cluster/confs/6380.conf
./redis-server /usr/setup/redis-cluster/confs/6381.conf
./redis-server /usr/setup/redis-cluster/confs/6382.conf
./redis-server /usr/setup/redis-cluster/confs/6383.conf
./redis-server /usr/setup/redis-cluster/confs/6384.conf
./redis-server /usr/setup/redis-cluster/confs/6385.conf
./redis-server /usr/setup/redis-cluster/confs/6386.conf
./redis-server /usr/setup/redis-cluster/confs/6387.conf
./redis-server /usr/setup/redis-cluster/confs/6388.conf
./redis-server /usr/setup/redis-cluster/confs/6389.conf
./redis-server /usr/setup/redis-cluster/confs/6390.conf
./redis-server /usr/setup/redis-cluster/confs/6391.conf
./redis-server /usr/setup/redis-cluster/confs/6392.conf
./redis-server /usr/setup/redis-cluster/confs/6393.conf
./redis-server /usr/setup/redis-cluster/confs/6394.conf

chmod +x /usr/setup/redis-cluster/startall.sh

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><ul><li>\u542F\u52A8\u6240\u6709\u8282\u70B9</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sh /usr/setup/redis-cluster/startall.sh
ps aux | grep redis
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u521B\u5EFA\u96C6\u7FA4</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd /usr/setup/redis-cluster/bin/
./redis-cli --cluster create --cluster-replicas 3 \\
192.168.100.201:6379 \\
192.168.100.201:6380 \\
192.168.100.201:6381 \\
192.168.100.201:6382 \\
192.168.100.201:6383 \\
192.168.100.201:6384 \\
192.168.100.201:6385 \\
192.168.100.201:6386 \\
192.168.100.201:6387 \\
192.168.100.201:6388 \\
192.168.100.201:6389 \\
192.168.100.201:6390 \\
192.168.100.201:6391 \\
192.168.100.201:6392 \\
192.168.100.201:6393 \\
192.168.100.201:6394

&gt;&gt;&gt; Performing hash slots allocation on 16 nodes...
Master[0] -&gt; Slots 0 - 4095
Master[1] -&gt; Slots 4096 - 8191
Master[2] -&gt; Slots 8192 - 12287
Master[3] -&gt; Slots 12288 - 16383
Adding replica 192.168.100.201:6383 to 192.168.100.201:6379
Adding replica 192.168.100.201:6384 to 192.168.100.201:6379
Adding replica 192.168.100.201:6385 to 192.168.100.201:6379
Adding replica 192.168.100.201:6386 to 192.168.100.201:6380
Adding replica 192.168.100.201:6387 to 192.168.100.201:6380
Adding replica 192.168.100.201:6388 to 192.168.100.201:6380
Adding replica 192.168.100.201:6389 to 192.168.100.201:6381
Adding replica 192.168.100.201:6390 to 192.168.100.201:6381
Adding replica 192.168.100.201:6391 to 192.168.100.201:6381
Adding replica 192.168.100.201:6392 to 192.168.100.201:6382
Adding replica 192.168.100.201:6393 to 192.168.100.201:6382
Adding replica 192.168.100.201:6394 to 192.168.100.201:6382
&gt;&gt;&gt; Trying to optimize slaves allocation for anti-affinity
[WARNING] Some slaves are in the same host as their master
M: c7e78c93dedb1284003a0709c87a8ba4d9b6679b 192.168.100.201:6379
   slots:[0-4095] (4096 slots) master
M: 17633c5abd228d07bf9a606d2a5c9add63a2af95 192.168.100.201:6380
   slots:[4096-8191] (4096 slots) master
M: 7dbfd5fd5fa26e32701aa4b1ef69f405cc20b5f1 192.168.100.201:6381
   slots:[8192-12287] (4096 slots) master
M: cbbdbc7515f91fe9cf937f3564ed2df71d87c960 192.168.100.201:6382
   slots:[12288-16383] (4096 slots) master
S: 8cffa3aad27a22f188f6806e869b282861c83bbe 192.168.100.201:6383
   replicates 17633c5abd228d07bf9a606d2a5c9add63a2af95
S: 8c7e2c830962f6137e55640769d9c8b2d81c37db 192.168.100.201:6384
   replicates 17633c5abd228d07bf9a606d2a5c9add63a2af95
S: fb62ed7f6b9b1f9146b3ddaaf4d576142b92bfbe 192.168.100.201:6385
   replicates 7dbfd5fd5fa26e32701aa4b1ef69f405cc20b5f1
S: 225fe75247ca4e8a24c7ca4eeaa06dad24a96ab3 192.168.100.201:6386
   replicates c7e78c93dedb1284003a0709c87a8ba4d9b6679b
S: ec1fce90e082d070d9ecb99ca5ea7ce2cef64320 192.168.100.201:6387
   replicates 7dbfd5fd5fa26e32701aa4b1ef69f405cc20b5f1
S: 403f0341c92dfd033281ad413592e9b714eb0991 192.168.100.201:6388
   replicates cbbdbc7515f91fe9cf937f3564ed2df71d87c960
S: 5943d2b52106cf5ad9b219d485abfc429c2d8221 192.168.100.201:6389
   replicates c7e78c93dedb1284003a0709c87a8ba4d9b6679b
S: 64bb41b59180150abfff06db4d02fd7eeb13d87e 192.168.100.201:6390
   replicates 7dbfd5fd5fa26e32701aa4b1ef69f405cc20b5f1
S: cf7bad137d214bc0258f0766af28f4b75ad11387 192.168.100.201:6391
   replicates cbbdbc7515f91fe9cf937f3564ed2df71d87c960
S: 4c230dc3566baf84939a907e9c245a1346340194 192.168.100.201:6392
   replicates c7e78c93dedb1284003a0709c87a8ba4d9b6679b
S: 6bb555c3282fed3688164c9f4ed576c285e1349b 192.168.100.201:6393
   replicates 17633c5abd228d07bf9a606d2a5c9add63a2af95
S: a859cdbebe053ce34856971cb80952e9714d4f46 192.168.100.201:6394
   replicates cbbdbc7515f91fe9cf937f3564ed2df71d87c960
Can I set the above configuration? (type &#39;yes&#39; to accept): yes
&gt;&gt;&gt; Nodes configuration updated
&gt;&gt;&gt; Assign a different config epoch to each node
&gt;&gt;&gt; Sending CLUSTER MEET messages to join the cluster
Waiting for the cluster to join
.....
&gt;&gt;&gt; Performing Cluster Check (using node 192.168.100.201:6379)
M: c7e78c93dedb1284003a0709c87a8ba4d9b6679b 192.168.100.201:6379
   slots:[0-4095] (4096 slots) master
   3 additional replica(s)
S: 403f0341c92dfd033281ad413592e9b714eb0991 192.168.100.201:6388
   slots: (0 slots) slave
   replicates cbbdbc7515f91fe9cf937f3564ed2df71d87c960
S: 5943d2b52106cf5ad9b219d485abfc429c2d8221 192.168.100.201:6389
   slots: (0 slots) slave
   replicates c7e78c93dedb1284003a0709c87a8ba4d9b6679b
M: 7dbfd5fd5fa26e32701aa4b1ef69f405cc20b5f1 192.168.100.201:6381
   slots:[8192-12287] (4096 slots) master
   3 additional replica(s)
S: cf7bad137d214bc0258f0766af28f4b75ad11387 192.168.100.201:6391
   slots: (0 slots) slave
   replicates cbbdbc7515f91fe9cf937f3564ed2df71d87c960
S: 6bb555c3282fed3688164c9f4ed576c285e1349b 192.168.100.201:6393
   slots: (0 slots) slave
   replicates 17633c5abd228d07bf9a606d2a5c9add63a2af95
S: ec1fce90e082d070d9ecb99ca5ea7ce2cef64320 192.168.100.201:6387
   slots: (0 slots) slave
   replicates 7dbfd5fd5fa26e32701aa4b1ef69f405cc20b5f1
S: 8c7e2c830962f6137e55640769d9c8b2d81c37db 192.168.100.201:6384
   slots: (0 slots) slave
   replicates 17633c5abd228d07bf9a606d2a5c9add63a2af95
S: 8cffa3aad27a22f188f6806e869b282861c83bbe 192.168.100.201:6383
   slots: (0 slots) slave
   replicates 17633c5abd228d07bf9a606d2a5c9add63a2af95
M: cbbdbc7515f91fe9cf937f3564ed2df71d87c960 192.168.100.201:6382
   slots:[12288-16383] (4096 slots) master
   3 additional replica(s)
M: 17633c5abd228d07bf9a606d2a5c9add63a2af95 192.168.100.201:6380
   slots:[4096-8191] (4096 slots) master
   3 additional replica(s)
S: fb62ed7f6b9b1f9146b3ddaaf4d576142b92bfbe 192.168.100.201:6385
   slots: (0 slots) slave
   replicates 7dbfd5fd5fa26e32701aa4b1ef69f405cc20b5f1
S: 4c230dc3566baf84939a907e9c245a1346340194 192.168.100.201:6392
   slots: (0 slots) slave
   replicates c7e78c93dedb1284003a0709c87a8ba4d9b6679b
S: 64bb41b59180150abfff06db4d02fd7eeb13d87e 192.168.100.201:6390
   slots: (0 slots) slave
   replicates 7dbfd5fd5fa26e32701aa4b1ef69f405cc20b5f1
S: a859cdbebe053ce34856971cb80952e9714d4f46 192.168.100.201:6394
   slots: (0 slots) slave
   replicates cbbdbc7515f91fe9cf937f3564ed2df71d87c960
S: 225fe75247ca4e8a24c7ca4eeaa06dad24a96ab3 192.168.100.201:6386
   slots: (0 slots) slave
   replicates c7e78c93dedb1284003a0709c87a8ba4d9b6679b
[OK] All nodes agree about slots configuration.
&gt;&gt;&gt; Check for open slots...
&gt;&gt;&gt; Check slots coverage...
[OK] All 16384 slots covered.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br></div></div><ul><li>\u521B\u5EFA\u96C6\u7FA4\u5173\u95ED\u811A\u672C</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vi /usr/setup/redis-cluster/shutdownall.sh

cd /usr/setup/redis-cluster/bin
./redis-cli -c -h 192.168.100.201 -p 6379 shutdown
./redis-cli -c -h 192.168.100.201 -p 6380 shutdown
./redis-cli -c -h 192.168.100.201 -p 6381 shutdown
./redis-cli -c -h 192.168.100.201 -p 6382 shutdown
./redis-cli -c -h 192.168.100.201 -p 6383 shutdown
./redis-cli -c -h 192.168.100.201 -p 6384 shutdown
./redis-cli -c -h 192.168.100.201 -p 6385 shutdown
./redis-cli -c -h 192.168.100.201 -p 6386 shutdown
./redis-cli -c -h 192.168.100.201 -p 6387 shutdown
./redis-cli -c -h 192.168.100.201 -p 6388 shutdown
./redis-cli -c -h 192.168.100.201 -p 6389 shutdown
./redis-cli -c -h 192.168.100.201 -p 6390 shutdown
./redis-cli -c -h 192.168.100.201 -p 6391 shutdown
./redis-cli -c -h 192.168.100.201 -p 6392 shutdown
./redis-cli -c -h 192.168.100.201 -p 6393 shutdown
./redis-cli -c -h 192.168.100.201 -p 6394 shutdown

chmod +x shutdownall.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ul><li>\u6D4B\u8BD5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> cd /usr/setup/redis-cluster/bin &amp;&amp; ./redis-cli -c -h 192.168.100.201
 192.168.100.201:6379&gt; set a 123
-&gt; Redirected to slot [15495] located at 192.168.100.201:6382
OK
192.168.100.201:6382&gt; set b 456
-&gt; Redirected to slot [3300] located at 192.168.100.201:6379
OK
192.168.100.201:6379&gt; set c 789
-&gt; Redirected to slot [7365] located at 192.168.100.201:6380
OK
192.168.100.201:6380&gt; set d 987
-&gt; Redirected to slot [11298] located at 192.168.100.201:6381
OK
192.168.100.201:6381&gt; keys *
1) &quot;d&quot;
192.168.100.201:6381&gt; get a
-&gt; Redirected to slot [15495] located at 192.168.100.201:6382
&quot;123&quot;
192.168.100.201:6382&gt; get b
-&gt; Redirected to slot [3300] located at 192.168.100.201:6379
&quot;456&quot;
192.168.100.201:6379&gt; get c
-&gt; Redirected to slot [7365] located at 192.168.100.201:6380
&quot;789&quot;
192.168.100.201:6380&gt; get d
-&gt; Redirected to slot [11298] located at 192.168.100.201:6381
&quot;987&quot;
192.168.100.201:6381&gt;

cd /usr/setup/redis-cluster/bin &amp;&amp; ./redis-cli -c -h 192.168.100.201 cluster nodes
403f0341c92dfd033281ad413592e9b714eb0991 192.168.100.201:6388@16388 slave cbbdbc7515f91fe9cf937f3564ed2df71d87c960 0 1569499890635 10 connected
225fe75247ca4e8a24c7ca4eeaa06dad24a96ab3 192.168.100.201:6386@16386 slave c7e78c93dedb1284003a0709c87a8ba4d9b6679b 0 1569499891039 8 connected
cbbdbc7515f91fe9cf937f3564ed2df71d87c960 192.168.100.201:6382@16382 master - 0 1569499891543 4 connected 12288-16383
fb62ed7f6b9b1f9146b3ddaaf4d576142b92bfbe 192.168.100.201:6385@16385 slave 7dbfd5fd5fa26e32701aa4b1ef69f405cc20b5f1 0 1569499890000 7 connected
c7e78c93dedb1284003a0709c87a8ba4d9b6679b 192.168.100.201:6379@16379 myself,master - 0 1569499891000 1 connected 0-4095
6bb555c3282fed3688164c9f4ed576c285e1349b 192.168.100.201:6393@16393 slave 17633c5abd228d07bf9a606d2a5c9add63a2af95 0 1569499890331 15 connected
64bb41b59180150abfff06db4d02fd7eeb13d87e 192.168.100.201:6390@16390 slave 7dbfd5fd5fa26e32701aa4b1ef69f405cc20b5f1 0 1569499891543 12 connected
7dbfd5fd5fa26e32701aa4b1ef69f405cc20b5f1 192.168.100.201:6381@16381 master - 0 1569499891000 3 connected 8192-12287
a859cdbebe053ce34856971cb80952e9714d4f46 192.168.100.201:6394@16394 slave cbbdbc7515f91fe9cf937f3564ed2df71d87c960 0 1569499890635 16 connected
cf7bad137d214bc0258f0766af28f4b75ad11387 192.168.100.201:6391@16391 slave cbbdbc7515f91fe9cf937f3564ed2df71d87c960 0 1569499890535 13 connected
5943d2b52106cf5ad9b219d485abfc429c2d8221 192.168.100.201:6389@16389 slave c7e78c93dedb1284003a0709c87a8ba4d9b6679b 0 1569499890000 11 connected
ec1fce90e082d070d9ecb99ca5ea7ce2cef64320 192.168.100.201:6387@16387 slave 7dbfd5fd5fa26e32701aa4b1ef69f405cc20b5f1 0 1569499890000 9 connected
4c230dc3566baf84939a907e9c245a1346340194 192.168.100.201:6392@16392 slave c7e78c93dedb1284003a0709c87a8ba4d9b6679b 0 1569499890129 14 connected
8cffa3aad27a22f188f6806e869b282861c83bbe 192.168.100.201:6383@16383 slave 17633c5abd228d07bf9a606d2a5c9add63a2af95 0 1569499891340 5 connected
8c7e2c830962f6137e55640769d9c8b2d81c37db 192.168.100.201:6384@16384 slave 17633c5abd228d07bf9a606d2a5c9add63a2af95 0 1569499891000 6 connected
17633c5abd228d07bf9a606d2a5c9add63a2af95 192.168.100.201:6380@16380 master - 0 1569499890000 2 connected 4096-8191
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><hr><img style="border:1px red solid;display:block;margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="\u5FAE\u4FE1\u516C\u4F17\u53F7">`,31);function r(l,c){return a}var i=n(e,[["render",r],["__file","redis5.0-cluster.html.vue"]]);export{i as default};
