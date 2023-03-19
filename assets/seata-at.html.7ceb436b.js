import{c as s,a,F as p,e,o as t}from"./app.85c29f24.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const c={},l=e('<h2 id="seata\u7684at\u3001tcc\u3001saga\u548Cxa\u4E8B\u52A1\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#seata\u7684at\u3001tcc\u3001saga\u548Cxa\u4E8B\u52A1\u6A21\u5F0F" aria-hidden="true">#</a> Seata\u7684AT\u3001TCC\u3001SAGA\u548CXA\u4E8B\u52A1\u6A21\u5F0F</h2><p>TCC\u6A21\u5F0F\u53C8\u5206\u4E3A\u4E09\u79CD\uFF1A</p><ol><li>\u901A\u7528\u578BTCC\u6A21\u5F0F\u3002\u8FD9\u79CD\u65B9\u5F0F\u662F\u4E0D\u501F\u52A9\u5176\u4ED6\u5916\u90E8\u7EC4\u4EF6\uFF0C\u81EA\u5DF1\u5B9E\u73B0TCC\u7684\u4E09\u4E2A\u9636\u6BB5\uFF0Ctry\u3001confirm\u3001cancel\u4E09\u4E2A\u9636\u6BB5\u90FD\u9700\u8981\u81EA\u5DF1\u5728\u4E1A\u52A1\u6BB5\u4EE3\u7801\u4E2D\u81EA\u5DF1\u5B9E\u73B0\uFF0C\u6362\u53E5\u8BDD\uFF0C\u4E5F\u5C31\u662F\u9700\u8981\u81EA\u5DF1\u5B9E\u73B0\u5206\u522B\u5B9E\u73B0\u4E09\u4E2A\u63A5\u53E3\uFF0C\u518D\u7EDF\u4E00\u628A\u8FD9\u4E09\u4E2A\u63A5\u53E3\u9012\u4EA4\u7ED9\u5BF9\u5E94\u7684\u5206\u5E03\u5F0F\u4E8B\u52A1\u7EC4\u4EF6\u3002</li><li></li></ol><p>\u8FD9\u79CD\u65B9\u5F0F\u4E3B\u8981\u9002\u7528\u4E8E\u5BF9\u5E94\u7684\u6267\u884C\u65F6\u95F4\u786E\u5B9A\u5E76\u4E14\u6267\u884C\u65F6\u95F4\u8F83\u77ED\u7684\u4E1A\u52A1\u573A\u666F\uFF0C\u5E76\u4E14\u8FD9\u79CD\u65B9\u5F0F\u5B9E\u73B0\u8D77\u6765\u8F83\u4E3A\u590D\u6742</p><h2 id="\u5206\u5E03\u5F0F\u4E8B\u52A1\u7684\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u5206\u5E03\u5F0F\u4E8B\u52A1\u7684\u539F\u7406" aria-hidden="true">#</a> \u5206\u5E03\u5F0F\u4E8B\u52A1\u7684\u539F\u7406</h2><p>seata\u5206\u4E3A\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\uFF0C\u4F7F\u7528\u65B9\u6CD5\u548Cmysql\u7684\u4F7F\u7528\u65B9\u5F0F\u7C7B\u4F3C\uFF0C\u90FD\u662F\u4F7F\u7528maven\u4F9D\u8D56\uFF0C\u5BFC\u5165\u5BA2\u6237\u7AEF\uFF0C\u4E4B\u540E\u914D\u7F6E\u8FDE\u63A5\u4FE1\u606F\u540E\uFF0C\u8FDB\u884C\u4F7F\u7528\u3002</p><h2 id="\u4E1A\u52A1\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u4E1A\u52A1\u8BF4\u660E" aria-hidden="true">#</a> \u4E1A\u52A1\u8BF4\u660E</h2><p><code>\u6D41\u91CF\u5145\u503C\u4E1A\u52A1</code>\uFF0C\u6211\u4EEC\u7CFB\u7EDF\u4E2D\u6709\u8FD9\u4E48\u51E0\u4E2A\u6A21\u5757\uFF1A\u8F6C\u8D26\u6A21\u5757\u3001\u6D41\u91CF\u7BA1\u7406\u6A21\u5757\u3001\u79EF\u5206\u6A21\u5757\uFF0C\u4E3B\u8981\u7684\u4E1A\u52A1\u573A\u666F\u662F\uFF1A\u8F6C\u8D26\u6210\u529F\u540E\uFF0C\u9700\u8981\u4FEE\u6539\u7528\u6237\u7684\u6D41\u91CF\uFF0C\u5E76\u4FEE\u6539\u7528\u6237\u7684\u79EF\u5206\u3002</p><ul><li><p>\u6D41\u91CF\u7BA1\u7406\u6A21\u5757\uFF1A seata-at-traffic \uFF0C \u5BF9\u5916\u63D0\u4F9B\u4E00\u4E2A\u63A5\u53E3\uFF0C\u7528\u6237\u589E\u52A0\u7528\u6237\u7684\u624B\u673A\u6D41\u91CF\u4FE1\u606F\uFF0C\u624B\u673A\u6D41\u91CF\u4FE1\u606F\u8868\uFF1A seata_at_traffic.mobile_traffic \u3002</p></li><li><p>\u79EF\u5206\u7BA1\u7406\u6A21\u5757\uFF1A seata-at-reservepoint \uFF0C \u5BF9\u5916\u63D0\u4F9B\u4E00\u4E2A\u63A5\u53E3\uFF0C\u7528\u6237\u589E\u52A0\u7528\u6237\u7684\u79EF\u5206\u4FE1\u606F\uFF0C\u6240\u64CD\u4F5C\u7684\u79EF\u5206\u4FE1\u606F\u8868\uFF1A seata_at_reservepoint.mobile_point \u3002</p></li><li><p>\u8F6C\u8D26\u6A21\u5757\uFF1A seata-at-trans \uFF0C \u7528\u6237\u53D1\u8D77\u8F6C\u8D26\u8BF7\u6C42\uFF0C\u5148\u6263\u9664\u7528\u6237\u8D26\u6237\u8868\u4E2D\u91D1\u989D\u4FE1\u606F\uFF0C\u7136\u540E\u8C03\u7528\u6D41\u91CF\u63A7\u5236\u6A21\u5757\u63A5\u53E3\uFF0C\u589E\u52A0\u7528\u6237\u624B\u673A\u6D41\u91CF\u4FE1\u606F\uFF0C\u4E4B\u540E\u8C03\u7528\u7528\u6237\u79EF\u5206\u7BA1\u7406\u6A21\u5757\u63A5\u53E3\uFF0C\u589E\u52A0\u7528\u6237\u7684\u79EF\u5206\u4FE1\u606F\u3002\u7528\u6237\u91D1\u989D\u8868\uFF1A seata_at_trans.user_account \u3002</p></li><li><p>\u8BA2\u5355\u7BA1\u7406\u6A21\u5757\uFF1A</p></li><li><p>\u5E93\u5B58\u7BA1\u7406\u6A21\u5757\uFF1A</p></li><li><p>\u8D26\u6237\u7BA1\u7406\u6A21\u5757\uFF1A</p></li></ul><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221211110949.png" alt="\u4F7F\u7528initializr\u5DE5\u5177\u521B\u5EFA\u8BA2\u5355\u7BA1\u7406\u6A21\u5757" loading="lazy"></p><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221211111301.png" alt="\u4F7F\u7528initializr\u5DE5\u5177\u521B\u5EFA\u5E93\u5B58\u7BA1\u7406\u6A21\u5757" loading="lazy"></p><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20221211111706.png" alt="\u4F7F\u7528initializr\u5DE5\u5177\u521B\u5EFA\u8D26\u6237\u7BA1\u7406\u6A21\u5757" loading="lazy"></p><h2 id="\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u4F7F\u7528\u573A\u666F</h2><p>\u4E3E\u4E00\u4E2A\u7B80\u5355\u7684\u5E94\u7528\u573A\u666F\uFF1A\u8FDB\u9500\u5B58\u7CFB\u7EDF\u4E2D\uFF0C\u4E00\u4E2A\u7528\u6237\u53D1\u8D77\u8D2D\u4E70\u5546\u54C1\u7684\u52A8\u4F5C\uFF0C\u540E\u7AEF\u4E1A\u52A1\u903B\u8F91\u662F</p><ul><li>\u6263\u51CF\u5E93\u5B58</li><li>\u6263\u51CF\u4E2A\u4EBA\u8D26\u6237\u4E0A\u7684\u4F59\u989D</li><li>\u521B\u5EFA\u4E00\u4E2A\u8BA2\u5355</li></ul><p>\u53EA\u8981\u4E0A\u9762\u6709\u4E00\u4E2A\u6B65\u9AA4\u6CA1\u6709\u6267\u884C\u6210\u529F\uFF0C\u5C31\u56DE\u6EDA\u5DF2\u7ECF\u6267\u884C\u6210\u529F\u7684\u5176\u4ED6\u6B65\u9AA4\u3002</p><h2 id="\u642D\u5EFAseata-at-storage\u670D\u52A1\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u642D\u5EFAseata-at-storage\u670D\u52A1\u6A21\u5757" aria-hidden="true">#</a> \u642D\u5EFAseata-at-storage\u670D\u52A1\u6A21\u5757</h2><h3 id="\u521B\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a> \u521B\u5EFA\u9879\u76EE</h3><h3 id="\u4F7F\u7528idea\u63D2\u4EF6\u751F\u6210\u4EE3\u7801\u5E76\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528idea\u63D2\u4EF6\u751F\u6210\u4EE3\u7801\u5E76\u9A8C\u8BC1" aria-hidden="true">#</a> \u4F7F\u7528idea\u63D2\u4EF6\u751F\u6210\u4EE3\u7801\u5E76\u9A8C\u8BC1</h3><h2 id="\u642D\u5EFAseata-at-account\u670D\u52A1\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u642D\u5EFAseata-at-account\u670D\u52A1\u6A21\u5757" aria-hidden="true">#</a> \u642D\u5EFAseata-at-account\u670D\u52A1\u6A21\u5757</h2><h2 id="\u642D\u5EFAseata-at-order\u670D\u52A1\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u642D\u5EFAseata-at-order\u670D\u52A1\u6A21\u5757" aria-hidden="true">#</a> \u642D\u5EFAseata-at-order\u670D\u52A1\u6A21\u5757</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>\n<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>storage<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>\n  <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>name<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>num<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u6570\u91CF&#39;</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>create_time<span class="token punctuation">`</span></span> <span class="token keyword">timestamp</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CURRENT_TIMESTAMP</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u521B\u5EFA\u65F6\u95F4&#39;</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>price<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u5355\u4EF7\uFF0C\u5355\u4F4D\u5206&#39;</span><span class="token punctuation">,</span>\n  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span>\n<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8mb4 ROW_FORMAT<span class="token operator">=</span>COMPACT<span class="token punctuation">;</span>\n\n\n<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>account<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>\n	<span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">BIGINT</span> <span class="token punctuation">(</span> <span class="token number">11</span> <span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>\n	<span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span> <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span> <span class="token number">32</span> <span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4 <span class="token keyword">COLLATE</span> utf8mb4_general_ci <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u7528 \u6237userId&#39;</span><span class="token punctuation">,</span>\n	<span class="token identifier"><span class="token punctuation">`</span>money<span class="token punctuation">`</span></span> <span class="token keyword">BIGINT</span> <span class="token punctuation">(</span> <span class="token number">11</span> <span class="token punctuation">)</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u4F59\u989D\uFF0C\u5355\u4F4D\u5206&#39;</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>create_time<span class="token punctuation">`</span></span> <span class="token keyword">timestamp</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CURRENT_TIMESTAMP</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u521B\u5EFA\u65F6\u95F4&#39;</span><span class="token punctuation">,</span>\n	<span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span> <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span> \n<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> <span class="token keyword">INNODB</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> <span class="token operator">=</span> utf8mb4 <span class="token keyword">COLLATE</span> <span class="token operator">=</span> utf8mb4_general_ci ROW_FORMAT <span class="token operator">=</span> Compact<span class="token punctuation">;</span>\n\n\n<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>ordertb<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>\n  <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>product_id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u5546\u54C1Id&#39;</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>num<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u6570\u91CF&#39;</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>user_id<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u7528\u6237\u552F\u4E00Id&#39;</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>create_time<span class="token punctuation">`</span></span> <span class="token keyword">timestamp</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CURRENT_TIMESTAMP</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u521B\u5EFA\u65F6\u95F4&#39;</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>status<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u8BA2\u5355\u72B6\u6001 1 \u672A\u4ED8\u6B3E 2 \u5DF2\u4ED8\u6B3E 3 \u5DF2\u5B8C\u6210&#39;</span><span class="token punctuation">,</span>\n  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span>\n<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> <span class="token operator">=</span> utf8mb4 <span class="token keyword">COLLATE</span> <span class="token operator">=</span> utf8mb4_general_ci  ROW_FORMAT<span class="token operator">=</span>COMPACT<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># -h \u4E3B\u673A\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528localhost\uFF0C-p \u7AEF\u53E3\u53F7 \u4F60\u53EF\u4EE5\u4F7F\u75288848\uFF0C-t \u547D\u540D\u7A7A\u95F4ID\uFF0C-u \u7528\u6237\u540D\uFF0C-p \u5BC6\u7801\n$ sh nacos-config.sh -h 192.168.1.150 -p 8848 -g SEATA_GROUP -t bb4ba084-9183-4406-bdf4-9254d372849e -u nacos -w nacos\n\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u4E1A\u52A1\u8BF4\u660E-1" tabindex="-1"><a class="header-anchor" href="#\u4E1A\u52A1\u8BF4\u660E-1" aria-hidden="true">#</a> \u4E1A\u52A1\u8BF4\u660E</h2><p>// todo \u7B80\u5355\u8BF4\u4E00\u4E0B\u5177\u4F53\u7684\u4E1A\u52A1\u573A\u666F\u4EE5\u53CA\u5B9E\u73B0\u601D\u8DEF</p><h2 id="\u5B9E\u8DF5\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u8DF5\u8FC7\u7A0B" aria-hidden="true">#</a> \u5B9E\u8DF5\u8FC7\u7A0B</h2><h3 id="_1-\u642D\u5EFA\u9879\u76EE\u6846\u67B6" tabindex="-1"><a class="header-anchor" href="#_1-\u642D\u5EFA\u9879\u76EE\u6846\u67B6" aria-hidden="true">#</a> 1. \u642D\u5EFA\u9879\u76EE\u6846\u67B6</h3><p>// todo \u6570\u636E\u5E93\u7684\u521B\u5EFA\u8FC7\u7A0B\uFF0Cstorage\u6A21\u5757\u7684\u642D\u5EFA\u8FC7\u7A0B\uFF1A\u76F8\u5173\u4F9D\u8D56\u7684\u5750\u6807\u53CA\u7248\u672C\u3001\u6DFB\u52A0\u914D\u7F6E\u3001\u81EA\u52A8\u751F\u6210\u4EE3\u7801\uFF0C\u5B8C\u6210\u4FDD\u5B58\u63A5\u53E3\u7684\u9A8C\u8BC1 // todo \u91CD\u590D\u4E0A\u8FF0\u6B65\u9AA4\u4F9D\u6B21\u521B\u5EFAaccount\u6A21\u5757\u548Corder\u6A21\u5757</p><h3 id="_2-\u96C6\u6210openfeign" tabindex="-1"><a class="header-anchor" href="#_2-\u96C6\u6210openfeign" aria-hidden="true">#</a> 2. \u96C6\u6210Openfeign</h3><p>// todo \u4E09\u4E2A\u6A21\u5757\u6CE8\u518C\u5230Nacos\u4E0A\uFF0Corder\u9879\u76EE\u4E2D\u6DFB\u52A0OpenFeign\u4F9D\u8D56\uFF0C\u6839\u636E\u4E1A\u52A1\u89C4\u5219\u5206\u522B\u8C03\u7528storage\u548Caccount\u63A5\u53E3\u5B8C\u6210\u4E1A\u52A1\u4EE3\u7801\uFF0C\u5E76\u9A8C\u8BC1\u4F1A\u51FA\u73B0\u95EE\u9898\uFF1B</p><h3 id="_3-\u96C6\u6210seata" tabindex="-1"><a class="header-anchor" href="#_3-\u96C6\u6210seata" aria-hidden="true">#</a> 3. \u96C6\u6210Seata</h3><p>// todo \u4F9D\u6B21\u6DFB\u52A0\u5750\u6807\u3001\u914D\u7F6E\u9879\uFF0C\u5E76\u5728nacos\u4E2D\u914D\u7F6E\u597D\u4E8B\u52A1\u7BA1\u7406\u5668\u6240\u8981\u7528\u5230\u7684\u4E00\u4E9B\u914D\u7F6E\u9879\uFF0C\u4E4B\u540E\u6539\u9020\u8D44\u6E90\u534F\u8C03\u5668\uFF08order\u4E1A\u52A1\u63A5\u53E3\uFF09\u7136\u540E\u4F9D\u6B21\u542F\u52A8\uFF0C\u5E76\u9A8C\u8BC1\u4E0D\u4F1A\u51FA\u73B0\u95EE\u9898\uFF1B // todo \u67E5\u770B\u4E00\u4E0B\u65E5\u5FD7\uFF0C\u63D0\u4E00\u4E0Bxid\u7684\u7B56\u7565</p><h2 id="at\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#at\u6A21\u5F0F" aria-hidden="true">#</a> AT\u6A21\u5F0F</h2><p>// todo \u7B80\u5355\u8BB2\u89E3\u4E00\u4E0B</p>',34),i=["src"];function r(n,k){return t(),s(p,null,[l,a("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:n.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,i)],64)}var b=o(c,[["render",r],["__file","seata-at.html.vue"]]);export{b as default};
