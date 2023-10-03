import{e as n}from"./app.a4992776.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h2 id="_1-\u4E3B\u4ECE\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-\u4E3B\u4ECE\u914D\u7F6E" aria-hidden="true">#</a> 1. \u4E3B\u4ECE\u914D\u7F6E</h2><h3 id="_1-1-\u89C4\u5212" tabindex="-1"><a class="header-anchor" href="#_1-1-\u89C4\u5212" aria-hidden="true">#</a> 1.1. \u89C4\u5212</h3><ul><li>MySQL\u7248\u672C\uFF1A5.7.24</li><li>master\u4E3B\u673AIP\uFF1A192.168.100.220</li><li>slave01\u4E3B\u673AIP\uFF1A192.168.100.221</li></ul><h3 id="_1-2-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-2-\u5B89\u88C5" aria-hidden="true">#</a> 1.2. \u5B89\u88C5</h3><h4 id="_1-2-1-\u5B89\u88C5\u865A\u62DF\u673A" tabindex="-1"><a class="header-anchor" href="#_1-2-1-\u5B89\u88C5\u865A\u62DF\u673A" aria-hidden="true">#</a> 1.2.1. \u5B89\u88C5\u865A\u62DF\u673A</h4><p>\u5206\u522B\u5728\u4E0D\u540C\u7684\u865A\u62DF\u673A\u4E0A\u5B89\u88C5centos7.5\u3002\u5B89\u88C5\u4E4B\u540E\u7684\u4FE1\u606F\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql.master\uFF1A
  \u7F51\u7EDC\u4FE1\u606F\uFF1A192.168.100.220
  \u7528\u6237\u540D/\u5BC6\u7801\uFF1Aroot root1003

mysql.slave01:
  \u7F51\u7EDC\u4FE1\u606F\uFF1A192.168.100.221
  \u7528\u6237\u540D/\u5BC6\u7801\uFF1Aroot root1003
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="_1-2-2-\u5B89\u88C5mysql" tabindex="-1"><a class="header-anchor" href="#_1-2-2-\u5B89\u88C5mysql" aria-hidden="true">#</a> 1.2.2. \u5B89\u88C5mysql</h4><p>\u5728\u4E09\u53F0\u865A\u62DF\u673A\u4E0A\u9762\u5404\u81EA\u5B89\u88C5\u597Dmysql\uFF0C\u5E76\u5B8C\u6210\u521D\u59CB\u5316\u3002</p><ul><li>\u4E3Aroot\u7528\u6237\u8BBE\u7F6E\u65B0\u5BC6\u7801\uFF1A<code>root@2019&amp;*(</code></li><li>\u521B\u5EFA\u53EA\u5177\u6709\u589E\u5220\u6539\u67E5\u7684\u8FDC\u7A0B\u767B\u5F55\u7528\u6237test\uFF1A<code>test!@#</code></li><li>\u521B\u5EFA\u5177\u6709\u5168\u90E8\u6743\u9650\u7684admin\u7528\u6237\uFF1A<code>admin@2019!@#</code></li><li>\u3010optional\u3011\u4E3Aroot\u7528\u6237\u8BBE\u7F6E\u8FDC\u7A0B\u767B\u5F55\u6743\u9650</li></ul><blockquote><p>\u53C2\u8003\u6587\u6863\uFF1A https://zeanzai.me/Java-Linux/#/markdown/install-mysql</p></blockquote><h3 id="_1-3-\u6D4B\u8BD5\u8FDE\u901A\u6027" tabindex="-1"><a class="header-anchor" href="#_1-3-\u6D4B\u8BD5\u8FDE\u901A\u6027" aria-hidden="true">#</a> 1.3. \u6D4B\u8BD5\u8FDE\u901A\u6027</h3><p>\u5728master\u4E0A\u9762ping\u4E24\u53F0slave01\u7684ip\uFF0C\u4FDD\u8BC1\u80FD\u591Fping\u901A\uFF1B\u5206\u522B\u5728slave\u4E0Aping master\u7684ip\uFF0C\u4FDD\u8BC1\u4E5F\u80FDping\u901A\u3002</p><h2 id="_2-\u4E3B\u4ECE\u590D\u5236\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-\u4E3B\u4ECE\u590D\u5236\u914D\u7F6E" aria-hidden="true">#</a> 2. \u4E3B\u4ECE\u590D\u5236\u914D\u7F6E</h2><h3 id="_2-1-\u4E3B\u673A\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-1-\u4E3B\u673A\u914D\u7F6E" aria-hidden="true">#</a> 2.1. \u4E3B\u673A\u914D\u7F6E</h3><ol><li>\u67E5\u770B\u662F\u5426\u5F00\u542Fbin\u65E5\u5FD7</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@mysql ~]# ll /var/lib/mysql

// \u672A\u53D1\u73B0bin\u6587\u4EF6\uFF0C\u8868\u660E\u672A\u5F00\u542F
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2"><li>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vi /etc/my.cnf

#######################\u4E3B\u4ECE\u590D\u5236####################
server-id=1
log_bin=/var/lib/mysql/mysql-bin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="3"><li>\u521B\u5EFA\u7528\u6237\u5E76\u6388\u6743</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>create user &#39;repl&#39; identified by &#39;repl&#39;;
grant replication slave on *.* to &#39;repl&#39;@&#39;192.168.100.%&#39; identified by &#39;repl&#39;;
flush privileges;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="4"><li>\u91CD\u542F\u670D\u52A1</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl restart mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="5"><li>\u67E5\u770Bbin\u65E5\u5FD7\u6587\u4EF6</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@mysql ~]# ll /var/lib/mysql

// \u53D1\u73B0\u5B58\u5728bin\u6587\u4EF6\uFF0C\u8BF4\u660E\u5F00\u542F\u6210\u529F
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_2-2-\u4ECE\u673A\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-2-\u4ECE\u673A\u914D\u7F6E" aria-hidden="true">#</a> 2.2. \u4ECE\u673A\u914D\u7F6E</h3><ol><li>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vi /etc/my.cnf

#######################\u4E3B\u4ECE\u590D\u5236####################
server-id=2
relay-log-index=slave-relay-bin.index
relay-log=slave-relay-bin

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="2"><li>\u91CD\u542F\u670D\u52A1</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl restart mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_2-3-\u5EFA\u7ACB\u4E3B\u4ECE\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_2-3-\u5EFA\u7ACB\u4E3B\u4ECE\u5173\u7CFB" aria-hidden="true">#</a> 2.3. \u5EFA\u7ACB\u4E3B\u4ECE\u5173\u7CFB</h3><ol><li>\u4E3B\u5E93\u767B\u5F55mysql\u67E5\u770B\u72B6\u6001</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql&gt; show master status;
+------------------+----------+--------------+------------------+-------------------+
| File             | Position | Binlog_Do_DB | Binlog_Ignore_DB | Executed_Gtid_Set |
+------------------+----------+--------------+------------------+-------------------+
| mysql-bin.000001 |      154 |              |                  |                   |
+------------------+----------+--------------+------------------+-------------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="2"><li>\u6253\u5F00\u4ECE\u5E93\u767B\u5F55mysql\uFF0C\u67E5\u770B\u72B6\u6001\uFF0C\u8FDB\u884C\u5982\u4E0B\u914D\u7F6E</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql&gt; show slave status\\G
Empty set (0.00 sec)

mysql&gt; change master to master_host=&#39;192.168.100.220&#39;;
Query OK, 0 rows affected (0.01 sec)


mysql&gt; change master to master_port=3306;
Query OK, 0 rows affected (0.01 sec)

mysql&gt; change master to master_user=&#39;repl&#39;;
Query OK, 0 rows affected, 2 warnings (0.01 sec)

mysql&gt; change master to master_password=&#39;repl&#39;;
Query OK, 0 rows affected, 2 warnings (0.01 sec)

mysql&gt; change master to master_log_file=&#39;mysql-bin.000001&#39;;
Query OK, 0 rows affected, 1 warning (0.00 sec)

mysql&gt; change master to master_log_pos=154;
Query OK, 0 rows affected (0.01 sec)

mysql&gt; show slave status\\G
*************************** 1. row ***************************
               Slave_IO_State:
                  Master_Host: 192.168.100.220
                  Master_User: repl
                  Master_Port: 3306
                Connect_Retry: 60
              Master_Log_File: mysql-bin.000001
          Read_Master_Log_Pos: 154
               Relay_Log_File: slave-relay-bin.000001
                Relay_Log_Pos: 4
        Relay_Master_Log_File: mysql-bin.000001
             Slave_IO_Running: No
            Slave_SQL_Running: No
              Replicate_Do_DB:
          Replicate_Ignore_DB:
           Replicate_Do_Table:
       Replicate_Ignore_Table:
      Replicate_Wild_Do_Table:
  Replicate_Wild_Ignore_Table:
                   Last_Errno: 0
                   Last_Error:
                 Skip_Counter: 0
          Exec_Master_Log_Pos: 154
              Relay_Log_Space: 154
              Until_Condition: None
               Until_Log_File:
                Until_Log_Pos: 0
           Master_SSL_Allowed: No
           Master_SSL_CA_File:
           Master_SSL_CA_Path:
              Master_SSL_Cert:
            Master_SSL_Cipher:
               Master_SSL_Key:
        Seconds_Behind_Master: NULL
Master_SSL_Verify_Server_Cert: No
                Last_IO_Errno: 0
                Last_IO_Error:
               Last_SQL_Errno: 0
               Last_SQL_Error:
  Replicate_Ignore_Server_Ids:
             Master_Server_Id: 0
                  Master_UUID:
             Master_Info_File: /var/lib/mysql/master.info
                    SQL_Delay: 0
          SQL_Remaining_Delay: NULL
      Slave_SQL_Running_State:
           Master_Retry_Count: 86400
                  Master_Bind:
      Last_IO_Error_Timestamp:
     Last_SQL_Error_Timestamp:
               Master_SSL_Crl:
           Master_SSL_Crlpath:
           Retrieved_Gtid_Set:
            Executed_Gtid_Set:
                Auto_Position: 0
         Replicate_Rewrite_DB:
                 Channel_Name:
           Master_TLS_Version:
1 row in set (0.00 sec)

mysql&gt; start slave;
Query OK, 0 rows affected (0.01 sec)

mysql&gt; show slave status\\G
*************************** 1. row ***************************
               Slave_IO_State: Waiting for master to send event
                  Master_Host: 192.168.100.220
                  Master_User: repl
                  Master_Port: 3306
                Connect_Retry: 60
              Master_Log_File: mysql-bin.000001
          Read_Master_Log_Pos: 154
               Relay_Log_File: slave-relay-bin.000002
                Relay_Log_Pos: 320
        Relay_Master_Log_File: mysql-bin.000001
             Slave_IO_Running: Yes
            Slave_SQL_Running: Yes
              Replicate_Do_DB:
          Replicate_Ignore_DB:
           Replicate_Do_Table:
       Replicate_Ignore_Table:
      Replicate_Wild_Do_Table:
  Replicate_Wild_Ignore_Table:
                   Last_Errno: 0
                   Last_Error:
                 Skip_Counter: 0
          Exec_Master_Log_Pos: 154
              Relay_Log_Space: 527
              Until_Condition: None
               Until_Log_File:
                Until_Log_Pos: 0
           Master_SSL_Allowed: No
           Master_SSL_CA_File:
           Master_SSL_CA_Path:
              Master_SSL_Cert:
            Master_SSL_Cipher:
               Master_SSL_Key:
        Seconds_Behind_Master: 0
Master_SSL_Verify_Server_Cert: No
                Last_IO_Errno: 0
                Last_IO_Error:
               Last_SQL_Errno: 0
               Last_SQL_Error:
  Replicate_Ignore_Server_Ids:
             Master_Server_Id: 1
                  Master_UUID: d0a811e6-e804-11e9-99fe-000c29e1ed82
             Master_Info_File: /var/lib/mysql/master.info
                    SQL_Delay: 0
          SQL_Remaining_Delay: NULL
      Slave_SQL_Running_State: Slave has read all relay log; waiting for more updates
           Master_Retry_Count: 86400
                  Master_Bind:
      Last_IO_Error_Timestamp:
     Last_SQL_Error_Timestamp:
               Master_SSL_Crl:
           Master_SSL_Crlpath:
           Retrieved_Gtid_Set:
            Executed_Gtid_Set:
                Auto_Position: 0
         Replicate_Rewrite_DB:
                 Channel_Name:
           Master_TLS_Version:
1 row in set (0.00 sec)

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br></div></div><blockquote><p>\u6CE8\u610F\uFF1A Slave_IO_Running: Yes Slave_SQL_Running: Yes \u8FD9\u4E24\u4E2A\u53C2\u6570\u8981\u540C\u65F6\u5904\u4E8Eyes\u72B6\u6001\u624D\u884C\u3002</p></blockquote><h2 id="_3-\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_3-\u6D4B\u8BD5" aria-hidden="true">#</a> 3. \u6D4B\u8BD5</h2><ol><li>\u5728\u4E3B\u5E93\u4E0A\u521B\u5EFA\u6D4B\u8BD5\u6570\u636E\u5E93\uFF0C\u521B\u5EFA\u4E00\u5F20\u8868\uFF0C\u5E76\u63D2\u5165\u4E00\u6761\u6D4B\u8BD5\u6570\u636E</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>create database testrepl;

use testrepl;

create table staffs (
  id int primary key auto_increment,
  name varchar(24) not null default &#39;&#39; comment &#39;\u59D3\u540D&#39;,
  age int not null default 0 comment &#39;\u5E74\u9F84&#39;,
  pos varchar(20) not null default &#39;&#39; comment &#39;\u804C\u4F4D&#39;
);

insert into staffs(name, age, pos) values(&#39;z3&#39;, 22, &#39;manager&#39;);

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ol start="2"><li>\u5728\u4ECE\u5E93\u4E0A\u67E5\u770B\u662F\u5426\u6709\u8BE5\u6570\u636E\u5E93</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql&gt; show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
| testrepl           |
+--------------------+
5 rows in set (0.00 sec)

mysql&gt; use testrepl
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql&gt; show tables;
+--------------------+
| Tables_in_testrepl |
+--------------------+
| staffs             |
+--------------------+
1 row in set (0.00 sec)

mysql&gt; select * from staffs;
+----+------+-----+---------+
| id | name | age | pos     |
+----+------+-----+---------+
|  1 | z3   |  22 | manager |
+----+------+-----+---------+
1 row in set (0.00 sec)

mysql&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="_4-\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#_4-\u53C2\u8003" aria-hidden="true">#</a> 4. \u53C2\u8003</h2><ol><li>https://blog.csdn.net/qq_16676539/article/details/81906959</li><li>https://blog.csdn.net/alen_liu_sz/article/details/79226191</li><li>https://blog.csdn.net/alen_liu_sz/article/details/79451581</li></ol><hr><img style="border:1px red solid;display:block;margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="\u5FAE\u4FE1\u516C\u4F17\u53F7">`,45);function r(l,i){return e}var t=s(a,[["render",r],["__file","mysql5.7-master-and-slave.html.vue"]]);export{t as default};
