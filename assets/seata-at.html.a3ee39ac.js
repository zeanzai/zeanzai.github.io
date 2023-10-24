import{e as n}from"./app.42286db3.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h2 id="\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u4F7F\u7528\u573A\u666F</h2><p>\u4E3E\u4E00\u4E2A\u7B80\u5355\u7684\u5E94\u7528\u573A\u666F\uFF1A\u7535\u5546\u7CFB\u7EDF\u4E2D\uFF0C\u4E00\u4E2A\u7528\u6237\u53D1\u8D77\u8D2D\u4E70\u5546\u54C1\u7684\u52A8\u4F5C\uFF0C\u540E\u7AEF\u4E1A\u52A1\u903B\u8F91\u662F</p><ul><li>\u6263\u51CF\u5E93\u5B58</li><li>\u6263\u51CF\u4E2A\u4EBA\u8D26\u6237\u4E0A\u7684\u4F59\u989D</li><li>\u521B\u5EFA\u4E00\u4E2A\u8BA2\u5355</li></ul><p>\u53EA\u8981\u4E0A\u9762\u6709\u4E00\u4E2A\u6B65\u9AA4\u6CA1\u6709\u6267\u884C\u6210\u529F\uFF0C\u5C31\u56DE\u6EDA\u5DF2\u7ECF\u6267\u884C\u6210\u529F\u7684\u5176\u4ED6\u6B65\u9AA4\u3002\u4E3A\u4E86\u6A21\u62DF\u5206\u5E03\u5F0F\u4E8B\u52A1\u7684\u6548\u679C\uFF0C\u6211\u4EEC\u91C7\u7528\u521B\u5EFA\u4E09\u4E2A\u5FAE\u670D\u52A1\u7684\u65B9\u5F0F\u5B9E\u73B0\u3002</p><ol><li>seata-at-storage \u5E93\u5B58\u670D\u52A1</li><li>seata-at-account \u8D26\u6237\u670D\u52A1</li><li>seata-at-order \u8BA2\u5355\u670D\u52A1</li></ol><p>\u6240\u4EE5\u4E0A\u9762\u7684\u4E1A\u52A1\u903B\u8F91\u5C31\u53D8\u6210\u4E86\uFF0C\u7528\u6237\u53D1\u8D77\u4E00\u4E2A\u8D2D\u4E70\u5546\u54C1\u7684\u670D\u52A1\uFF0C\u76F4\u63A5\u8C03\u7528\u540E\u7AEF \u8BA2\u5355\u670D\u52A1 \uFF0C\u7531\u8BA2\u5355\u670D\u52A1\u5206\u522B\u8C03\u7528 \u5E93\u5B58\u670D\u52A1 \u5B8C\u6210\u6263\u51CF\u5E93\u5B58\u529F\u80FD\uFF0C\u7136\u540E\u518D\u8C03\u7528 \u8D26\u6237\u670D\u52A1 \u5B8C\u6210\u6263\u51CF\u8D26\u6237\u91D1\u989D\u529F\u80FD\uFF0C\u6700\u540E\u672C\u5730\u751F\u6210\u4E00\u4E2A\u8BA2\u5355\u3002</p><p>\u8FD9\u91CC\u6211\u4EEC\u9700\u8981\u4E00\u4E2A\u6CE8\u518C\u4E2D\u5FC3\uFF0C\u628A\u4E09\u4E2A\u670D\u52A1\u6CE8\u518C\u5230\u4E0A\u9762\uFF0C\u8FD9\u6837\u914D\u5408OpenFeign\u5B8C\u6210\u76F8\u4E92\u8C03\u7528\uFF0C\u6B64\u5916\u6211\u4EEC\u8FD8\u9700\u8981MySQL\u4F5C\u4E3A\u6570\u636E\u5B58\u50A8\uFF0C\u6700\u540E\u6211\u4EEC\u9700\u8981Seata\u4F5C\u4E3A\u6211\u4EEC\u7684\u4E8B\u52A1\u7BA1\u7406\u5668\u3002</p><h2 id="\u642D\u5EFAseata-at-storage\u670D\u52A1\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u642D\u5EFAseata-at-storage\u670D\u52A1\u6A21\u5757" aria-hidden="true">#</a> \u642D\u5EFAseata-at-storage\u670D\u52A1\u6A21\u5757</h2><ol><li>\u5148\u521B\u5EFA\u6570\u636E\u5E93</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-- \u4ED3\u50A8
CREATE TABLE \`storage\` (
  \`id\` bigint(11) NOT NULL AUTO_INCREMENT,
  \`name\` varchar(100) DEFAULT NULL,
  \`num\` bigint(11) DEFAULT NULL COMMENT &#39;\u6570\u91CF&#39;,
  \`create_time\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT &#39;\u521B\u5EFA\u65F6\u95F4&#39;,
  \`price\` bigint(10) DEFAULT NULL COMMENT &#39;\u5355\u4EF7\uFF0C\u5355\u4F4D\u5206&#39;,
  PRIMARY KEY (\`id\`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT;

CREATE TABLE \`undo_log\` (
  \`branch_id\` bigint(20) NOT NULL COMMENT &#39;branch transaction id&#39;,
  \`xid\` varchar(100) NOT NULL COMMENT &#39;global transaction id&#39;,
  \`context\` varchar(128) NOT NULL COMMENT &#39;undo_log context,such as serialization&#39;,
  \`rollback_info\` longblob NOT NULL COMMENT &#39;rollback info&#39;,
  \`log_status\` int(11) NOT NULL COMMENT &#39;0:normal status,1:defense status&#39;,
  \`log_created\` datetime(6) NOT NULL COMMENT &#39;create datetime&#39;,
  \`log_modified\` datetime(6) NOT NULL COMMENT &#39;modify datetime&#39;,
  UNIQUE KEY \`ux_undo_log\` (\`xid\`,\`branch_id\`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT=&#39;AT transaction mode undo table&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><ol start="2"><li><p>\u4F7F\u7528idea\u5DE5\u5177\u4E2D\u7684initializer\u5DE5\u5177\uFF0C\u751F\u6210\u6A21\u5757\u7684\u9AA8\u67B6\uFF0C\u8FD9\u91CC\u4E0D\u518D\u8D58\u8FF0\u3002</p></li><li><p>\u4FEE\u6539pom\u6587\u4EF6\uFF0C\u6DFB\u52A0\u4E0A nacos\u6CE8\u518C\u4E2D\u5FC3\u3001Mybatis\u3001MySQL\u3001Seata\u7684\u76F8\u5173\u4F9D\u8D56\u3002</p></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;com.alibaba.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-alibaba-nacos-discovery&lt;/artifactId&gt;
  &lt;/dependency&gt;

  &lt;dependency&gt;
    &lt;groupId&gt;com.baomidou&lt;/groupId&gt;
    &lt;artifactId&gt;mybatis-plus-boot-starter&lt;/artifactId&gt;
  &lt;/dependency&gt;

  &lt;!-- mysql --&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;mysql&lt;/groupId&gt;
    &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;
  &lt;/dependency&gt;

  &lt;!--seata--&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;com.alibaba.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-alibaba-seata&lt;/artifactId&gt;
    &lt;exclusions&gt;
      &lt;!-- \u6392\u9664\u4F9D\u8D56 \u6307\u5B9A\u7248\u672C\u548C\u670D\u52A1\u5668\u7AEF\u4E00\u81F4 --&gt;
      &lt;exclusion&gt;
        &lt;groupId&gt;io.seata&lt;/groupId&gt;
        &lt;artifactId&gt;seata-all&lt;/artifactId&gt;
      &lt;/exclusion&gt;
      &lt;exclusion&gt;
        &lt;groupId&gt;io.seata&lt;/groupId&gt;
        &lt;artifactId&gt;seata-spring-boot-starter&lt;/artifactId&gt;
      &lt;/exclusion&gt;
    &lt;/exclusions&gt;
  &lt;/dependency&gt;

  &lt;dependency&gt;
    &lt;groupId&gt;io.seata&lt;/groupId&gt;
    &lt;artifactId&gt;seata-all&lt;/artifactId&gt;
  &lt;/dependency&gt;

  &lt;dependency&gt;
    &lt;groupId&gt;io.seata&lt;/groupId&gt;
    &lt;artifactId&gt;seata-spring-boot-starter&lt;/artifactId&gt;
  &lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><ol start="4"><li>\u4FEE\u6539\u9879\u76EE\u7684\u914D\u7F6E\uFF1A application.yml</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server:
  port: 10902

spring:
  application:
    name: seata-at-storage
  datasource:
    url: jdbc:mysql://192.168.1.150:3306/seata_storage?useUnicode=true&amp;characterEncoding=UTF-8&amp;serverTimezone=Asia/Shanghai
    username: root
    password: root
    driver-class-name: com.mysql.cj.jdbc.Driver
    hikari:
      auto-commit: true
      connection-test-query: SELECT 1
      connection-timeout: 30000
      idle-timeout: 180000
      max-lifetime: 0
      maximum-pool-size: 30
      minimum-idle: 10
      pool-name: hikari-pool
  cloud:
    nacos:
      discovery:
        server-addr: 192.168.1.150:8848
        namespace: 2cbceeeb-22f5-40d6-b65c-47f673e79f29


mybatis:
  mapper-locations: classpath:/mapper/*.xml

# \u914D\u7F6E\u65E5\u5FD7\u7EA7\u522B
logging:
  level:
    root: debug

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><ol start="5"><li>\u4E4B\u540E\u518D\u4F7F\u7528idea\u4E2D\u7684easycode\u63D2\u4EF6\u751F\u6210\u4E1A\u52A1\u4EE3\u7801\uFF0C\u5173\u952E\u65B9\u6CD5\u662F\uFF1A <code>me.zeanzai.seataatstorage.service.impl.StorageServiceImpl#deduct</code></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Transactional
@Override
public boolean deduct(Long id, Long num) {
    //todo \u6A21\u62DF\u6263\u51CF\u5E93\u5B58\uFF0C\u5177\u4F53\u4E1A\u52A1\u903B\u8F91\u81EA\u5DF1\u5B8C\u5584
    Storage storage = this.storageDao.queryById(id);
    if (Objects.isNull(storage))
        throw new RuntimeException();

    storage.setNum(storage.getNum()-num);

    return this.storageDao.update(storage) &gt; 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u642D\u5EFAseata-at-account\u548Cseata-at-order\u670D\u52A1\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u642D\u5EFAseata-at-account\u548Cseata-at-order\u670D\u52A1\u6A21\u5757" aria-hidden="true">#</a> \u642D\u5EFAseata-at-account\u548Cseata-at-order\u670D\u52A1\u6A21\u5757</h2><p>\u642D\u5EFA\u8FC7\u7A0B\u4E0E\u4E0A\u9762\u7684seata-at-storage\u670D\u52A1\u6A21\u5757\u7684\u8FC7\u7A0B\u57FA\u672C\u7C7B\u4F3C\u3002</p><p>seata-at-account\u7684\u8868\u7ED3\u6784\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code>
<span class="token comment">-- \u8D26\u6237\u4F59\u989D</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>account<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>
	<span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span> <span class="token keyword">BIGINT</span> <span class="token punctuation">(</span> <span class="token number">11</span> <span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
	<span class="token identifier"><span class="token punctuation">\`</span>user_id<span class="token punctuation">\`</span></span> <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span> <span class="token number">32</span> <span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4 <span class="token keyword">COLLATE</span> utf8mb4_general_ci <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u7528 \u6237userId&#39;</span><span class="token punctuation">,</span>
	<span class="token identifier"><span class="token punctuation">\`</span>money<span class="token punctuation">\`</span></span> <span class="token keyword">BIGINT</span> <span class="token punctuation">(</span> <span class="token number">11</span> <span class="token punctuation">)</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u4F59\u989D\uFF0C\u5355\u4F4D\u5206&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>create_time<span class="token punctuation">\`</span></span> <span class="token keyword">timestamp</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CURRENT_TIMESTAMP</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u521B\u5EFA\u65F6\u95F4&#39;</span><span class="token punctuation">,</span>
	<span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span> <span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span> <span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span> 
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> <span class="token keyword">INNODB</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> <span class="token operator">=</span> utf8mb4 <span class="token keyword">COLLATE</span> <span class="token operator">=</span> utf8mb4_general_ci ROW_FORMAT <span class="token operator">=</span> Compact<span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>undo_log<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">\`</span>branch_id<span class="token punctuation">\`</span></span> <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;branch transaction id&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>xid<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;global transaction id&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>context<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;undo_log context,such as serialization&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>rollback_info<span class="token punctuation">\`</span></span> <span class="token keyword">longblob</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;rollback info&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>log_status<span class="token punctuation">\`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;0:normal status,1:defense status&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>log_created<span class="token punctuation">\`</span></span> <span class="token keyword">datetime</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;create datetime&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>log_modified<span class="token punctuation">\`</span></span> <span class="token keyword">datetime</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;modify datetime&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">UNIQUE</span> <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">\`</span>ux_undo_log<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>xid<span class="token punctuation">\`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">\`</span>branch_id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8 ROW_FORMAT<span class="token operator">=</span>COMPACT <span class="token keyword">COMMENT</span><span class="token operator">=</span><span class="token string">&#39;AT transaction mode undo table&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>seata-at-order\u670D\u52A1\u6A21\u5757\u7684\u8868\u7ED3\u6784\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>

-- \u8BA2\u5355
CREATE TABLE \`ordertb\` (
  \`id\` bigint(11) NOT NULL AUTO_INCREMENT,
  \`product_id\` bigint(11) DEFAULT NULL COMMENT &#39;\u5546\u54C1Id&#39;,
  \`num\` bigint(11) DEFAULT NULL COMMENT &#39;\u6570\u91CF&#39;,
  \`user_id\` varchar(32) DEFAULT NULL COMMENT &#39;\u7528\u6237\u552F\u4E00Id&#39;,
  \`create_time\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT &#39;\u521B\u5EFA\u65F6\u95F4&#39;,
  \`status\` int(1) DEFAULT NULL COMMENT &#39;\u8BA2\u5355\u72B6\u6001 1 \u672A\u4ED8\u6B3E 2 \u5DF2\u4ED8\u6B3E 3 \u5DF2\u5B8C\u6210&#39;,
  PRIMARY KEY (\`id\`) USING BTREE
) ENGINE=InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci  ROW_FORMAT=COMPACT;

CREATE TABLE \`undo_log\` (
  \`branch_id\` bigint(20) NOT NULL COMMENT &#39;branch transaction id&#39;,
  \`xid\` varchar(100) NOT NULL COMMENT &#39;global transaction id&#39;,
  \`context\` varchar(128) NOT NULL COMMENT &#39;undo_log context,such as serialization&#39;,
  \`rollback_info\` longblob NOT NULL COMMENT &#39;rollback info&#39;,
  \`log_status\` int(11) NOT NULL COMMENT &#39;0:normal status,1:defense status&#39;,
  \`log_created\` datetime(6) NOT NULL COMMENT &#39;create datetime&#39;,
  \`log_modified\` datetime(6) NOT NULL COMMENT &#39;modify datetime&#39;,
  UNIQUE KEY \`ux_undo_log\` (\`xid\`,\`branch_id\`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT=&#39;AT transaction mode undo table&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u6263\u51CF\u91D1\u989D\u7684\u5173\u952E\u4EE3\u7801\uFF0C <code>me.zeanzai.seataataccount.service.impl.AccountServiceImpl#deduct</code> \uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Transactional
@Override
public boolean deduct(String userId, Long money) {
    Account account = this.accountDao.queryByUserId(userId);
    if (Objects.isNull(account)) {
        return false;

    }
    account.setMoney(account.getMoney()-money);
    return this.accountDao.update(account)&gt;0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u7531\u4E8E seata-at-order \u670D\u52A1\u6A21\u5757\u4E2D\u9700\u8981\u4F7F\u7528OpenFeign\u6765\u8C03\u7528\u4ED3\u50A8\u548C\u8D26\u6237\u670D\u52A1\uFF0C\u56E0\u6B64\u8FD8\u9700\u8981\u521B\u5EFA\u4E24\u4E2A\u63A5\u53E3\uFF1A</p><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230426175644.png" alt="20230426175644" loading="lazy"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@FeignClient(value = &quot;seata-at-account&quot;)
public interface AccountFeignClient {

    @PostMapping(&quot;/account/deduct&quot;)
    boolean deduct(@RequestParam(&quot;userId&quot;) String userId,
                   @RequestParam(&quot;money&quot;) Long money);

}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@FeignClient(value = &quot;seata-at-storage&quot;)
public interface StorageFeignClient {

    @GetMapping(&quot;/storage/{id}&quot;)
    ResponseEntity&lt;Storage&gt; queryById(@PathVariable(&quot;id&quot;) Long id);

    @PostMapping(&quot;/storage/deduct&quot;)
    boolean deduct(@RequestParam(&quot;id&quot;) Long id,
                   @RequestParam(&quot;num&quot;) Long num);
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4E4B\u540E\u5C31\u662F\u751F\u6210\u8BA2\u5355\u7684\u5173\u952E\u4EE3\u7801\uFF0C <code>me.zeanzai.seataatorder.service.impl.OrdertbServiceImpl#createOrder</code> \uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Transactional
@Override
public boolean createOrder(String userId, Long productId, Long num) {
    // 1. \u6263\u51CF\u5E93\u5B58
    storageFeignClient.deduct(productId, num);

    // 2. \u6263\u51CF\u4F59\u989D
    ResponseEntity&lt;Storage&gt; storageResponseEntity = storageFeignClient.queryById(productId);
    Storage body = storageResponseEntity.getBody();
    accountFeignClient.deduct(userId, body.getPrice() * num);
    // 3. \u521B\u5EFA\u8BA2\u5355
    Ordertb ordertb = new Ordertb();
    ordertb.setNum(num);
    ordertb.setUserId(userId);
    ordertb.setProductId(productId);
    ordertb.setStatus(2);
    return this.ordertbDao.insert(ordertb)&gt;0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="\u542F\u52A8\u5E76\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u5E76\u6D4B\u8BD5" aria-hidden="true">#</a> \u542F\u52A8\u5E76\u6D4B\u8BD5</h2><p>\u5206\u522B\u542F\u52A8 seata-at-storage \u3001 seata-at-account \u3001seata-at-order \u6A21\u5757\uFF0C\u6211\u4EEC\u4F1A\u53D1\u73B0\u5DF2\u7ECF\u6CE8\u518C\u5230nacos\u4E0A\u4E86\u3002</p><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230426175924.png" alt="20230426175924" loading="lazy"></p><p>\u4E4B\u540E\u6211\u4EEC\u53EA\u9700\u8981\u8C03\u7528\u8BA2\u5355\u6A21\u5757\u4E2D\u7684createOrder\u63A5\u53E3\u5C31\u884C\u4E86\u3002</p><p>\u7279\u522B\u6CE8\u610F\u7684\u70B9\uFF1A\u4E09\u4E2A\u670D\u52A1\u6A21\u5757\u4E2D\u90FD\u53EA\u662F\u4F7F\u7528<code>@Transactional</code>\u6807\u6CE8\u4E86\u672C\u5730\u4E8B\u52A1\uFF0C\u5E76\u6CA1\u6709\u5F00\u59CB\u5206\u5E03\u5F0F\u4E8B\u52A1\u3002</p><h2 id="\u6574\u5408seata" tabindex="-1"><a class="header-anchor" href="#\u6574\u5408seata" aria-hidden="true">#</a> \u6574\u5408Seata</h2><p>\u76F4\u5230\u8FD9\u4E00\u6B65\uFF0C\u6211\u4EEC\u8DDFSeata\u6CA1\u6709\u4EFB\u4F55\u5173\u7CFB\uFF0C\u56E0\u4E3A\u6211\u4EEC\u751F\u6210\u8BA2\u5355\u7684\u65B9\u6CD5\u4E2D\u5E76\u6CA1\u6709\u5B9A\u4E49\u4E8B\u52A1\uFF0C\u53EA\u662F\u7B80\u5355\u7684\u672C\u5730\u4E8B\u52A1\uFF0C\u5728\u751F\u6210\u8BA2\u5355\u7684\u63A5\u53E3\u4E2D\uFF0C\u5982\u679C\u6263\u51CF\u5E93\u5B58\u7684\u63A5\u53E3\u51FA\u73B0\u8D85\u65F6\u7B49\u5F02\u5E38\u9519\u8BEF\u4FE1\u606F\uFF0C\u6263\u51CF\u91D1\u989D\u548C\u751F\u6210\u8BA2\u5355\u7684\u903B\u8F91\u5E76\u4E0D\u4F1A\u56DE\u6EDA\u3002\u4E0B\u9762\u6211\u4EEC\u6765\u8BF4\u6574\u5408Seata\u7684\u8FC7\u7A0B\u3002\u5B89\u88C5\u548C\u914D\u7F6ESeata\u8FD9\u91CC\u5C31\u4E0D\u518D\u8D58\u8FF0\u3002</p><ol><li>\u9996\u5148\u8981\u5148\u542F\u52A8Seata</li></ol><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230426180919.png" alt="20230426180919" loading="lazy"></p><ol start="2"><li>\u5728\u4E09\u4E2A\u6A21\u5757\u4E2D\u5206\u522B\u6DFB\u52A0Seata\u7684\u914D\u7F6E</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>seata:
  enabled: true
  application-id: \${spring.application.name}
  tx-service-group: \${spring.application.name}-tx-group
  config:
    type: nacos
    nacos:
      namespace: bb4ba084-9183-4406-bdf4-9254d372849e
      server-addr: 192.168.1.150:8848
      group: SEATA_GROUP
      username: nacos
      password: nacos
  registry:
    type: nacos
    nacos:
      application: seata-server
      namespace: bb4ba084-9183-4406-bdf4-9254d372849e
      server-addr: 192.168.1.150:8848
      group: SEATA_GROUP
      username: nacos
      password: nacos
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ol start="3"><li>\u521B\u5EFASeata\u670D\u52A1\u7AEF\u914D\u7F6E\uFF0C\u8FD9\u91CC\u8981\u7279\u522B\u6CE8\u610F\uFF1A\u503C\u5747\u4E3Adefault\u3002</li></ol><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230426181125.png" alt="20230426181125" loading="lazy"></p><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230426181144.png" alt="20230426181144" loading="lazy"></p><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230426181207.png" alt="20230426181207" loading="lazy"></p><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230426181227.png" alt="20230426181227" loading="lazy"></p><ol start="4"><li>\u4FEE\u6539\u4E1A\u52A1\u4EE3\u7801\uFF0C\u5728\u8BA2\u5355\u6A21\u5757\u4E2D\u8BBE\u7F6E\u751F\u6210\u8BA2\u5355\u7684\u65B9\u6CD5\u4E3A\u5168\u5C40\u4E8B\u52A1</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Override
@GlobalTransactional
public boolean createOrder(String userId, Long productId, Long num) {
    // 1. \u6263\u51CF\u5E93\u5B58
    storageFeignClient.deduct(productId, num);

    // 2. \u6263\u51CF\u4F59\u989D
    ResponseEntity&lt;Storage&gt; storageResponseEntity = storageFeignClient.queryById(productId);
    Storage body = storageResponseEntity.getBody();
    accountFeignClient.deduct(userId, body.getPrice() * num);
    // 3. \u521B\u5EFA\u8BA2\u5355
    Ordertb ordertb = new Ordertb();
    ordertb.setNum(num);
    ordertb.setUserId(userId);
    ordertb.setProductId(productId);
    ordertb.setStatus(2);
    return this.ordertbDao.insert(ordertb)&gt;0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ol start="5"><li>\u542F\u52A8\u6D4B\u8BD5</li></ol><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230426181927.png" alt="20230426181927" loading="lazy"></p><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230426182255.png" alt="20230426182255" loading="lazy"></p><hr><img style="border:1px red solid;display:block;margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="\u5FAE\u4FE1\u516C\u4F17\u53F7">`,53);function t(p,l){return e}var i=s(a,[["render",t],["__file","seata-at.html.vue"]]);export{i as default};
