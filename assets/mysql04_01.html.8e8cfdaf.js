import{c as n,a as s,F as a,e as r,o as l}from"./app.98de23b3.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const p={},b=r(`<h2 id="\u67E5\u770Binnodb\u4E2D\u7684\u5DE5\u4F5C\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770Binnodb\u4E2D\u7684\u5DE5\u4F5C\u7EBF\u7A0B" aria-hidden="true">#</a> \u67E5\u770BInnoDB\u4E2D\u7684\u5DE5\u4F5C\u7EBF\u7A0B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql&gt; show engine innodb status;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u628A\u8F93\u51FA\u7ED3\u679C\u4E2D\u65E0\u7528\u7684\u4FE1\u606F\u5254\u9664\u540E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>=====================================
2023-06-06 03:42:16 0x7fc3dc11d700 INNODB MONITOR OUTPUT
=====================================
Per second averages calculated from the last 21 seconds
-----------------
BACKGROUND THREAD
-----------------
srv_master_thread loops: 1 srv_active, 0 srv_shutdown, 79992 srv_idle
srv_master_thread log flush and writes: 79993
----------
SEMAPHORES
----------
OS WAIT ARRAY INFO: reservation count 2
OS WAIT ARRAY INFO: signal count 2
RW-shared spins 0, rounds 4, OS waits 2
RW-excl spins 0, rounds 0, OS waits 0
RW-sx spins 0, rounds 0, OS waits 0
Spin rounds per wait: 4.00 RW-shared, 0.00 RW-excl, 0.00 RW-sx
------------
TRANSACTIONS
------------
Trx id counter 45571
Purge done for trx&#39;s n:o &lt; 0 undo n:o &lt; 0 state: running but idle
History list length 0
LIST OF TRANSACTIONS FOR EACH SESSION:
---TRANSACTION 421954169522016, not started
0 lock struct(s), heap size 1136, 0 row lock(s)
--------
FILE I/O
--------
I/O thread 0 state: waiting for completed aio requests (insert buffer thread)
I/O thread 1 state: waiting for completed aio requests (log thread)
I/O thread 2 state: waiting for completed aio requests (read thread)
I/O thread 3 state: waiting for completed aio requests (read thread)
I/O thread 4 state: waiting for completed aio requests (read thread)
I/O thread 5 state: waiting for completed aio requests (read thread)
I/O thread 6 state: waiting for completed aio requests (write thread)
I/O thread 7 state: waiting for completed aio requests (write thread)
I/O thread 8 state: waiting for completed aio requests (write thread)
I/O thread 9 state: waiting for completed aio requests (write thread)
Pending normal aio reads: [0, 0, 0, 0] , aio writes: [0, 0, 0, 0] ,
 ibuf aio reads:, log i/o&#39;s:, sync i/o&#39;s:
Pending flushes (fsync) log: 0; buffer pool: 0
467 OS file reads, 53 OS file writes, 7 OS fsyncs
0.00 reads/s, 0 avg bytes/read, 0.00 writes/s, 0.00 fsyncs/s
-------------------------------------
INSERT BUFFER AND ADAPTIVE HASH INDEX
-------------------------------------
Ibuf: size 1, free list len 3092, seg size 3094, 0 merges
merged operations:
 insert 0, delete mark 0, delete 0
discarded operations:
 insert 0, delete mark 0, delete 0
Hash table size 34679, node heap has 0 buffer(s)
Hash table size 34679, node heap has 0 buffer(s)
Hash table size 34679, node heap has 0 buffer(s)
Hash table size 34679, node heap has 0 buffer(s)
Hash table size 34679, node heap has 0 buffer(s)
Hash table size 34679, node heap has 0 buffer(s)
Hash table size 34679, node heap has 0 buffer(s)
Hash table size 34679, node heap has 0 buffer(s)
0.00 hash searches/s, 0.00 non-hash searches/s
---
LOG
---
Log sequence number 23040733278
Log flushed up to   23040733278
Pages flushed up to 23040733278
Last checkpoint at  23040733269
0 pending log flushes, 0 pending chkp writes
10 log i/o&#39;s done, 0.00 log i/o&#39;s/second
----------------------
BUFFER POOL AND MEMORY
----------------------
Total large memory allocated 137428992
Dictionary memory allocated 117329
Buffer pool size   8192
Free buffers       7719
Database pages     473
Old database pages 0
Modified db pages  0
Pending reads      0
Pending writes: LRU 0, flush list 0, single page 0
Pages made young 0, not young 0
0.00 youngs/s, 0.00 non-youngs/s
Pages read 439, created 34, written 36
0.00 reads/s, 0.00 creates/s, 0.00 writes/s
No buffer pool page gets since the last printout
Pages read ahead 0.00/s, evicted without access 0.00/s, Random read ahead 0.00/s
LRU len: 473, unzip_LRU len: 0
I/O sum[0]:cur[0], unzip sum[0]:cur[0]
--------------
ROW OPERATIONS
--------------
0 queries inside InnoDB, 0 queries in queue
0 read views open inside InnoDB
Process ID=1, Main thread ID=140478756386560, state: sleeping
Number of rows inserted 0, updated 0, deleted 0, read 8
0.00 inserts/s, 0.00 updates/s, 0.00 deletes/s, 0.00 reads/s
----------------------------
END OF INNODB MONITOR OUTPUT
============================
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br></div></div><p>\u4ECE\u4E0A\u9762\u8F93\u51FA\u7ED3\u679C\u7684<code>FILE I/O</code>\u90E8\u5206\u53EF\u77E5\uFF0C\u603B\u5171\u6709\u56DB\u7C7BIO\u5DE5\u4F5C\u7EBF\u7A0B\uFF0C\u5982\u4E0B\uFF1A</p><ul><li>read thread\uFF1A\u5C06\u6570\u636E\u4ECE\u78C1\u76D8\u52A0\u8F7D\u5230\u7F13\u5B58page\u9875\uFF1B</li><li>write thread\uFF1A\u5C06\u7F13\u5B58\u810F\u9875\u5237\u65B0\u5230\u78C1\u76D8\uFF1B</li><li>log thread\uFF1A\u5C06\u65E5\u5FD7\u7F13\u51B2\u533A\u5237\u76D8\u5230log\u6587\u4EF6\uFF1B</li><li>insert buffer thread\uFF1A\u5C06\u5199\u7F13\u51B2change buffer\u7684\u66F4\u6539\u5185\u5BB9\u5237\u65B0\u5230\u78C1\u76D8\uFF1B</li></ul><h3 id="master-thread-\u4E3B\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#master-thread-\u4E3B\u7EBF\u7A0B" aria-hidden="true">#</a> Master Thread \u4E3B\u7EBF\u7A0B</h3><p>\u8D1F\u8D23\u8C03\u5EA6\u5176\u4ED6\u7EBF\u7A0B\uFF0C\u4F18\u5148\u7EA7\u6700\u9AD8\u3002\u4E3B\u8981\u804C\u80FD\uFF1A\u810F\u9875\u5237\u76D8\uFF08\u8C03\u7528page cleaner thread\uFF09\u3001undo\u9875\u56DE\u6536\uFF08purge thread\uFF09\u3001redo\u65E5\u5FD7\u5237\u65B0\uFF08log thread\uFF09\u3001\u5408\u5E76\u5199\u7F13\u51B2\uFF08insert buffer thread\uFF09\u3002\u5982\u679C\u8FD9\u4E9B\u5B50\u7EBF\u7A0B\u901A\u8FC7\u914D\u7F6E\u5173\u95ED\u4E86\uFF0C\u90A3\u4E48\u5173\u95ED\u7684\u5B50\u7EBF\u7A0B\u7684\u4EFB\u52A1\u5C31\u4F1A\u7531master thread\u6765\u505A\u3002</p><p>\u4E3B\u7EBF\u7A0B\u662F\u7531\u591A\u4E2A\u65E0\u9650\u5FAA\u73AF\u6784\u6210\u7684\uFF0C\u4E3B\u8981\u67092\u4E2A\u4E3B\u5904\u7406\uFF0C\u5206\u522B\u662F\u6BCF\u96941\u79D2\u548C10\u79D2\u7684\u5904\u7406\uFF1A</p><ul><li>\u6BCF1\u79D2\u7684\u64CD\u4F5C\uFF08\u6709\u6761\u4EF6\u7684\u505A\uFF09\uFF1A <ul><li>\u5237\u76D8\u65E5\u5FD7\u7F13\u51B2\u533A</li><li>\u5408\u5E76change buffer\u6570\u636E\u5230\u78C1\u76D8\u7684B+\u6811\u4E2D\uFF0C\u6839\u636EIO\u8BFB\u5199\u538B\u529B\u51B3\u5B9A\u662F\u5426\u64CD\u4F5C</li><li>\u5237\u76D8\u810F\u9875\u5230\u78C1\u76D8\uFF08\u6761\u4EF6\u662F\u810F\u9875\u6BD4\u4F8B\u8FBE\u523075%\u624D\u64CD\u4F5C\uFF08innodb_max_dirty_pages_pct\uFF09\uFF0C\u800C\u4E14\u4E0D\u662F\u4E00\u6B21\u6027\u5237\u76D8\u6240\u6709\u810F\u9875\uFF0C\u800C\u662F\u9ED8\u8BA4\u6BCF\u6B21\u5237\u76D8200\u9875\uFF08innodb_io_capacity\uFF09\uFF09\u3002</li></ul></li><li>\u6BCF10\u79D2\u64CD\u4F5C\uFF08\u65E0\u6761\u4EF6\u7684\u505A\uFF09\uFF1A <ul><li>\u5237\u76D8\u810F\u9875\u5230\u78C1\u76D8</li><li>\u5408\u5E76change buffer\u6570\u636E</li><li>\u5237\u76D8\u65E5\u5FD7\u7F13\u51B2\u533A</li><li>\u5220\u9664\u65E0\u7528\u7684undo\u9875</li></ul></li></ul><h3 id="purge-thread-\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#purge-thread-\u7EBF\u7A0B" aria-hidden="true">#</a> Purge Thread \u7EBF\u7A0B</h3><p>\u4E8B\u52A1\u63D0\u4EA4\u4E4B\u540E\uFF0C\u8BE5\u4E8B\u52A1\u76F8\u5173\u7684undo\u65E5\u5FD7\u4E0D\u518D\u9700\u8981\uFF0CPurge Thread\u8D1F\u8D23\u56DE\u6536\u5DF2\u5206\u914D\u7684undo\u9875\u3002\u9ED8\u8BA4\u67094\u4E2Apurge thread\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql&gt; show variables like &#39;%innodb_purge_threads%&#39;;
+----------------------+-------+
| Variable_name        | Value |
+----------------------+-------+
| innodb_purge_threads | 4     |
+----------------------+-------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="page-cleaner-thread-\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#page-cleaner-thread-\u7EBF\u7A0B" aria-hidden="true">#</a> Page Cleaner thread \u7EBF\u7A0B</h3><p>\u5C06\u810F\u6570\u636E\u5237\u65B0\u5230\u78C1\u76D8\uFF08\u4F1A\u8C03\u7528 write thread \u7EBF\u7A0B\uFF09\uFF0C\u810F\u6570\u636E\u5237\u76D8\u540E\u5BF9\u5E94\u7684redo log\u4E5F\u5C31\u6CA1\u7528\u4E86\uFF0C\u53EF\u4EE5\u91CA\u653E\u6389\u8FD9\u90E8\u5206 redo log\uFF0C\u8FBE\u5230redo log \u5FAA\u73AF\u4F7F\u7528\u7684\u76EE\u7684\u3002\u9ED8\u8BA4\u67091\u4E2APage Cleaner thread\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql&gt; show variables like &#39;%innodb_page_cleaners%&#39;;
+----------------------+-------+
| Variable_name        | Value |
+----------------------+-------+
| innodb_page_cleaners | 1     |
+----------------------+-------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>InnoDB\u4E2D\u7684\u7EBF\u7A0B\u5305\u62EC\u4E24\u5927\u7C7B\uFF1A</p><ul><li>\u8BFB\u5199\u5DE5\u4F5C\u7EBF\u7A0B <ul><li><code>read thread</code>\uFF1A\u5C06\u6570\u636E\u4ECE\u78C1\u76D8\u52A0\u8F7D\u5230\u7F13\u5B58page\u9875\uFF1B</li><li><code>write thread</code>\uFF1A\u5C06\u7F13\u5B58\u810F\u9875\u5237\u65B0\u5230\u78C1\u76D8\uFF1B</li><li><code>log thread</code>\uFF1A\u5C06\u65E5\u5FD7\u7F13\u51B2\u533A\u5237\u76D8\u5230log\u6587\u4EF6\uFF1B</li><li><code>insert buffer thread</code>\uFF1A\u5C06\u5199\u7F13\u51B2change buffer\u7684\u66F4\u6539\u5185\u5BB9\u5237\u65B0\u5230\u78C1\u76D8\uFF1B</li></ul></li><li>\u540E\u53F0\u8F85\u52A9\u7EBF\u7A0B <ul><li><code>Master Thread \u4E3B\u7EBF\u7A0B</code>\uFF1A \u8D1F\u8D23\u8C03\u5EA6\u5176\u4ED6\u7EBF\u7A0B\uFF0C\u4F18\u5148\u7EA7\u6700\u9AD8\u3002\u4E3B\u8981\u804C\u80FD\uFF1A\u810F\u9875\u5237\u76D8\uFF08\u8C03\u7528page cleaner thread\uFF09\u3001undo\u9875\u56DE\u6536\uFF08purge thread\uFF09\u3001redo\u65E5\u5FD7\u5237\u65B0\uFF08log thread\uFF09\u3001\u5408\u5E76\u5199\u7F13\u51B2\uFF08insert buffer thread\uFF09\u3002\u5982\u679C\u8FD9\u4E9B\u5B50\u7EBF\u7A0B\u901A\u8FC7\u914D\u7F6E\u5173\u95ED\u4E86\uFF0C\u90A3\u4E48\u5173\u95ED\u7684\u5B50\u7EBF\u7A0B\u7684\u4EFB\u52A1\u5C31\u4F1A\u7531master thread\u6765\u505A\u3002</li><li><code>Purge Thread \u7EBF\u7A0B</code>\uFF1A\u4E8B\u52A1\u63D0\u4EA4\u4E4B\u540E\uFF0C\u8BE5\u4E8B\u52A1\u76F8\u5173\u7684undo\u65E5\u5FD7\u4E0D\u518D\u9700\u8981\uFF0CPurge Thread\u8D1F\u8D23\u56DE\u6536\u5DF2\u5206\u914D\u7684undo\u9875\u3002\u9ED8\u8BA4\u67094\u4E2Apurge thread\u3002</li><li><code>Page Cleaner thread \u7EBF\u7A0B</code>\uFF1A\u5C06\u810F\u6570\u636E\u5237\u65B0\u5230\u78C1\u76D8\uFF08\u4F1A\u8C03\u7528 write thread \u7EBF\u7A0B\uFF09\uFF0C\u810F\u6570\u636E\u5237\u76D8\u540E\u5BF9\u5E94\u7684redo log\u4E5F\u5C31\u6CA1\u7528\u4E86\uFF0C\u53EF\u4EE5\u91CA\u653E\u6389\u8FD9\u90E8\u5206 redo log\uFF0C\u8FBE\u5230redo log \u5FAA\u73AF\u4F7F\u7528\u7684\u76EE\u7684\u3002\u9ED8\u8BA4\u67091\u4E2APage Cleaner thread\u3002</li></ul></li></ul><p><br><br><br></p>`,20),t=["src"];function d(e,u){return l(),n(a,null,[b,s("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:e.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,t)],64)}var m=i(p,[["render",d],["__file","mysql04_01.html.vue"]]);export{m as default};
