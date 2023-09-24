import{e as n}from"./app.b80325f2.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const e={},a=n(`<ul><li>\u4F5C\u7528</li><li>\u5F00\u542F\u53CA\u914D\u7F6E\u53C2\u6570</li><li>\u9002\u7528\u573A\u666F <ul><li>\u6545\u969C\u6062\u590D</li><li>\u4E3B\u4ECE\u540C\u6B65</li></ul></li><li>\u6587\u4EF6\u67E5\u770B\u793A\u4F8B</li></ul><h2 id="\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528" aria-hidden="true">#</a> \u4F5C\u7528</h2><p>Server\u5C42\u7684\u64CD\u4F5C\u65E5\u5FD7\u3002\u8BB0\u5F55\u8868\u7ED3\u6784\u53D8\u66F4\u548C\u8868\u6570\u636E\u53D8\u66F4\u7684\u65E5\u5FD7\u3002</p><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><p>\u67E5\u770Bbinlog\u65E5\u5FD7\u662F\u5426\u5F00\u542F\uFF0C\u9ED8\u8BA4\u662F\u4E0D\u5F00\u542F\u7684\uFF0C\u9700\u8981\u624B\u52A8\u5F00\u542F\uFF1A</p><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230605121752.png" alt="20230605121752" loading="lazy"></p><p>\u4E5F\u53EF\u4EE5\u67E5\u770Bmy.cnf\u4E2D\u7684\u914D\u7F6E\uFF0C\u5982\u679C\u6CA1\u6709\u5F00\u542F\uFF0C\u5C31\u9700\u8981\u5148\u5F00\u542F\uFF0C\u5E76\u8BBE\u7F6E\u597DBinlog\u7684\u683C\u5F0F\uFF1A</p><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230605115607.png" alt="20230605115607" loading="lazy"></p><p>\u4E5F\u53EF\u4EE5\u5355\u72EC\u67E5\u770Bbinlog\u7684\u683C\u5F0F\uFF1A</p><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230605125257.png" alt="20230605125257" loading="lazy"></p><p>\u751F\u6210\u7684\u6587\u4EF6\uFF1A</p><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230605120802.png" alt="20230605120802" loading="lazy"></p><p>\u914D\u7F6E\u53C2\u6570\uFF0C my.cnf\u6587\u4EF6\u4E2D\u7684mysqld\u8282\u7684\u914D\u7F6E\uFF1A</p><ul><li><code>log_bin</code> \uFF1A \u8BBE\u7F6E binlog \u6587\u4EF6\u7684\u5B58\u653E\u8DEF\u5F84\u53CAbinlog\u6587\u4EF6\u7684\u540D\u79F0\uFF0C\u5982\u4E0A\u56FE\uFF0C\u53EA\u914D\u7F6E\u4E86binlog\u7684\u6587\u4EF6\u540D\uFF0C\u5219\u9ED8\u8BA4\u8DEF\u5F84\u662F /data \u76EE\u5F55\uFF0C\u4E5F\u53EF\u4EE5\u52A0\u4E0A\u8DEF\u5F84</li><li><code>binlog_format</code> \uFF1A \u8BBE\u7F6Ebinlog\u7684\u4FDD\u5B58\u683C\u5F0F\uFF0C STATEMENT\u3001ROW\u3001MIXED\uFF0C \u4E5F\u53EF\u4EE5\u901A\u8FC7 <code>set global binlog_format=&#39;STATEMENT&#39;;</code> \u8FDB\u884C\u4FEE\u6539\uFF0C\u4F46\u662F\u91CD\u542F\u540E\u4FEE\u6539\u4E22\u5931\uFF1B <ul><li><code>Statement \u683C\u5F0F</code><ul><li>\u4FDD\u5B58\u7684\u5185\u5BB9\uFF1A \u8BB0\u5F55\u64CD\u4F5C\u7684\u6B65\u9AA4\uFF0C\u4E5F\u5C31\u662FSQL\u8BED\u53E5\uFF0C\u6BD4\u5982\u5BF9\u8868\u7ED3\u6784\u4E2D\u7684A\u5217\u8FDB\u884C\u4FEE\u6539\uFF0C\u5BF9id=10\u7684\u90A3\u4E00\u884C\u6570\u636E\u4E2D\u7684B\u5217\u7684\u503C\u4FEE\u6539\u6210xxx\uFF1B</li><li>\u7F3A\u70B9\uFF1A \u4F46\u662FSQL\u4E2D\u7684\u51FD\u6570\u524D\u540E\u4E24\u6B21\u6267\u884C\u7684\u7ED3\u679C\u53EF\u80FD\u4E0D\u4E00\u81F4\uFF0C\u6BD4\u5982\u968F\u673A\u51FD\u6570\uFF1B</li></ul></li><li><code>Row \u683C\u5F0F</code><ul><li>\u4FDD\u5B58\u7684\u5185\u5BB9\uFF1A \u8BB0\u5F55\u64CD\u4F5C\u7684\u7ED3\u679C\uFF0C\u6BD4\u5982\u8868\u7ED3\u6784\u4FEE\u6539\u540E\u7684\u7ED3\u679C\u6216\u6570\u636E\u884C\u7684\u4FEE\u6539\u540E\u7684\u7ED3\u679C</li><li>\u7F3A\u70B9\uFF1A \u4F46\u662F\u6279\u91CF\u63D2\u5165\u7684\u8FC7\u7A0B\u53EF\u80FD\u4F1A\u4EA7\u751F\u5927\u91CF\u7684binlog\u65E5\u5FD7\uFF0C\u4F46\u662F\u5728Statement\u683C\u5F0F\u4E2D\u53EF\u80FD\u5C31\u4E00\u884CSQL\u8BED\u53E5\uFF1B</li></ul></li><li><code>Mixed \u683C\u5F0F</code>\uFF1A \u6DF7\u5408\u683C\u5F0F\uFF0C\u6C72\u53D6\u4E24\u8005\u4F18\u70B9\u3002</li></ul></li><li><code>expire_logs_days</code> \uFF1A\u6E05\u7406\u7B56\u7565\uFF0C\u5B9A\u671F\u6E05\u7406\uFF0C\u5982 expire_logs_days=5 \u8868\u793A5\u5929\u6E05\u7406\u4E00\u6B21\uFF1B\u5982\u679C\u6CA1\u6709\u914D\u7F6E\uFF0C\u5C31\u662F\u4E0D\u6E05\u7406binlog\u6587\u4EF6\uFF1B</li><li><code>max_binlog_size</code> \uFF1A \u6EDA\u52A8binlog\u6587\u4EF6\u7684\u5927\u5C0F\uFF0C\u5982 max_binlog_size=500m \u8868\u793A master-bin.00001 \u8D85\u8FC7 500m \u4E4B\u540E\u5C31\u4F1A\u751F\u6210 master-bin.00002</li><li><code>binlog_cache_size</code> \uFF1A binlog cache \u7684\u5927\u5C0F\uFF0C \u5982 binlog_cache_size=4m \u8868\u793A binlog cache \u7684\u5927\u5C0F\u4E3A 4m \uFF1B</li><li><code>max_binlog_cache_size</code> \uFF1A binlog cache \u6700\u5927\u503C\uFF0C\u5982 max_binlog_cache_size=10m \u8868\u793A binlog cache \u6700\u5927\u4E3A10m\uFF1B</li></ul><h2 id="\u6545\u969C\u6062\u590D" tabindex="-1"><a class="header-anchor" href="#\u6545\u969C\u6062\u590D" aria-hidden="true">#</a> \u6545\u969C\u6062\u590D</h2><ul><li><code>\u5355\u884C\u6062\u590D</code>\uFF1A \u53EA\u6062\u590D\u90E8\u5206\u6570\u636E <ul><li><code>delete</code>\uFF1Arow \u683C\u5F0F\u4E0B\uFF0C\u5F53\u6211\u4EEC\u6267\u2F8F delete \u547D\u4EE4\u65F6\uFF0C\u5982\u679C binlog_row_image \u8BBE\u7F6E\u4E86 &#39;FULL&#39;\uFF0C\u90A3\u4E48 Delete_rows \u2FA5\u2FAF\uFF0C\u5305\u542B\u4E86\u5220\u6389\u7684\u2F8F\u7684\u6240\u6709\u5B57\u6BB5\u7684\u503C\u3002\u5982\u679C\u8BEF\u5220\u4E86\uFF0C\u56E0\u4E3A binlog \u8BB0\u5F55\u4E86\u6240\u6709\u5B57\u6BB5\u7684\u503C\uFF0C\u53CD\u5411\u6267\u2F8F insert \u5C31\u53EF\u4EE5\u4E86\uFF1B\u5F53 binlog_row_image \u8BBE\u7F6E\u4E3A MINIMAL \uFF0C\u53EA\u8BB0\u5F55\u5173\u952E\u4FE1\u606F\uFF0C\u2F50\u5982 id=80\uFF1B</li><li><code>insert</code>\uFF1Arow \u683C\u5F0F\u4E0B\uFF0Cbinlog \u4F1A \u8BB0\u5F55 insert \u7684\u6240\u6709\u5B57\u6BB5\u503C\u3002\u5982\u679C\u8BEF\u64CD\u4F5C\uFF0C\u53EA\u9700\u8981\u6839\u636E\u8FD9\u4E9B\u503C\u627E\u5230\u5BF9\u5E94\u7684\u2F8F\uFF0C\u518D\u6267\u2F8F delete \u64CD\u4F5C\u5373\u53EF\uFF1B</li><li><code>update</code>\uFF1Arow \u683C\u5F0F\u4E0B\uFF0Cbinlog \u4F1A \u8BB0\u5F55 update \u4FEE\u6539\u524D\u3001\u4FEE\u6539\u540E\u7684\u6574\u2F8F\u6570\u636E\u3002\u5982\u679C\u8BEF\u64CD\u4F5C\uFF0C\u53EA\u9700\u8981\u2F64\u4FEE\u6539\u524D\u7684\u6570\u636E\u8986\u76D6\u5373\u53EF\uFF1B</li></ul></li><li><code>\u6574\u5E93\u6062\u590D</code>\uFF1A \u4F7F\u7528binlog\u6587\u4EF6\u6062\u590D\u6570\u636E\uFF1A <code>mysqlbinlog mysql-bin.000001 --start-position=1 --stop-position=3000 | mysql - h192.168.0.1 -P3306 -u$user -p$pwd;</code>\uFF0C \u5C06 mysql-bin.000001 \u2F42\u4EF6\u4F4D\u7F6E\u4ECE 1\u52303000 \u7684 binlog \u5728 192.168.0.1 \u673A\u5668\u7684\u6570\u636E\u5E93\u4E0A\u56DE\u653E\uFF0C\u8FD8\u539F\u3002</li></ul><h2 id="\u4E3B\u4ECE\u540C\u6B65" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u4ECE\u540C\u6B65" aria-hidden="true">#</a> \u4E3B\u4ECE\u540C\u6B65</h2><ul><li>\u4E3B\u4ECE\u540C\u6B65\u914D\u7F6E\u8FC7\u7A0B\uFF08\u4E00\u4E3B\u4E24\u4ECE\uFF09 <ul><li>\u7565</li></ul></li><li>\u539F\u7406 <ul><li>MySQL \u4E3B\u5E93\u5728\u6536\u5230\u5BA2\u6237\u7AEF\u63D0\u4EA4\u4E8B\u52A1\u7684\u8BF7\u6C42\u4E4B\u540E\uFF0C\u4F1A\u5148\u5199\u5165 binlog\uFF0C\u518D\u63D0\u4EA4\u4E8B\u52A1\uFF0C\u66F4\u65B0\u5B58\u50A8\u5F15\u64CE\u4E2D\u7684\u6570\u636E\uFF0C\u4E8B\u52A1\u63D0\u4EA4\u5B8C\u6210\u540E\uFF0C\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u201C\u64CD\u4F5C\u6210\u529F\u201D\u7684\u54CD\u5E94\u3002</li><li>\u4ECE\u5E93\u4F1A\u521B\u5EFA\u4E00\u4E2A\u4E13\u95E8\u7684 I/O \u7EBF\u7A0B\uFF0C\u8FDE\u63A5\u4E3B\u5E93\u7684 log dump \u7EBF\u7A0B\uFF0C\u6765\u63A5\u6536\u4E3B\u5E93\u7684 binlog \u65E5\u5FD7\uFF0C\u518D\u628A binlog \u4FE1\u606F\u5199\u5165 relay log \u7684\u4E2D\u7EE7\u65E5\u5FD7\u91CC\uFF0C\u518D\u8FD4\u56DE\u7ED9\u4E3B\u5E93\u201C\u590D\u5236\u6210\u529F\u201D\u7684\u54CD\u5E94\u3002</li><li>\u4ECE\u5E93\u4F1A\u521B\u5EFA\u4E00\u4E2A\u7528\u4E8E\u56DE\u653E binlog \u7684\u7EBF\u7A0B\uFF0C\u53BB\u8BFB relay log \u4E2D\u7EE7\u65E5\u5FD7\uFF0C\u7136\u540E\u56DE\u653E binlog \u66F4\u65B0\u5B58\u50A8\u5F15\u64CE\u4E2D\u7684\u6570\u636E\uFF0C\u6700\u7EC8\u5B9E\u73B0\u4E3B\u4ECE\u7684\u6570\u636E\u4E00\u81F4\u6027\u3002</li></ul></li><li>\u4E3B\u4ECE\u590D\u5236\u6A21\u5F0F <ul><li><code>\u540C\u6B65\u590D\u5236</code>\uFF1AMySQL \u4E3B\u5E93\u63D0\u4EA4\u4E8B\u52A1\u7684\u7EBF\u7A0B\u8981\u7B49\u5F85\u6240\u6709\u4ECE\u5E93\u7684\u590D\u5236\u6210\u529F\u54CD\u5E94\uFF0C\u624D\u8FD4\u56DE\u5BA2\u6237\u7AEF\u7ED3\u679C\u3002\u8FD9\u79CD\u65B9\u5F0F\u5728\u5B9E\u9645\u9879\u76EE\u4E2D\uFF0C\u57FA\u672C\u4E0A\u6CA1\u6CD5\u7528\uFF0C\u539F\u56E0\u6709\u4E24\u4E2A\uFF1A\u4E00\u662F\u6027\u80FD\u5F88\u5DEE\uFF0C\u56E0\u4E3A\u8981\u590D\u5236\u5230\u6240\u6709\u8282\u70B9\u624D\u8FD4\u56DE\u54CD\u5E94\uFF1B\u4E8C\u662F\u53EF\u7528\u6027\u4E5F\u5F88\u5DEE\uFF0C\u4E3B\u5E93\u548C\u6240\u6709\u4ECE\u5E93\u4EFB\u4F55\u4E00\u4E2A\u6570\u636E\u5E93\u51FA\u95EE\u9898\uFF0C\u90FD\u4F1A\u5F71\u54CD\u4E1A\u52A1\u3002</li><li><code>\u5F02\u6B65\u590D\u5236\uFF08\u9ED8\u8BA4\u6A21\u578B\uFF09</code>\uFF1AMySQL \u4E3B\u5E93\u63D0\u4EA4\u4E8B\u52A1\u7684\u7EBF\u7A0B\u5E76\u4E0D\u4F1A\u7B49\u5F85 binlog \u540C\u6B65\u5230\u5404\u4ECE\u5E93\uFF0C\u5C31\u8FD4\u56DE\u5BA2\u6237\u7AEF\u7ED3\u679C\u3002\u8FD9\u79CD\u6A21\u5F0F\u4E00\u65E6\u4E3B\u5E93\u5B95\u673A\uFF0C\u6570\u636E\u5C31\u4F1A\u53D1\u751F\u4E22\u5931\u3002</li><li><code>\u534A\u540C\u6B65\u590D\u5236</code>\uFF1AMySQL 5.7 \u7248\u672C\u4E4B\u540E\u589E\u52A0\u7684\u4E00\u79CD\u590D\u5236\u65B9\u5F0F\uFF0C\u4ECB\u4E8E\u4E24\u8005\u4E4B\u95F4\uFF0C\u4E8B\u52A1\u7EBF\u7A0B\u4E0D\u7528\u7B49\u5F85\u6240\u6709\u7684\u4ECE\u5E93\u590D\u5236\u6210\u529F\u54CD\u5E94\uFF0C\u53EA\u8981\u4E00\u90E8\u5206\u590D\u5236\u6210\u529F\u54CD\u5E94\u56DE\u6765\u5C31\u884C\uFF0C\u6BD4\u5982\u4E00\u4E3B\u4E8C\u4ECE\u7684\u96C6\u7FA4\uFF0C\u53EA\u8981\u6570\u636E\u6210\u529F\u590D\u5236\u5230\u4EFB\u610F\u4E00\u4E2A\u4ECE\u5E93\u4E0A\uFF0C\u4E3B\u5E93\u7684\u4E8B\u52A1\u7EBF\u7A0B\u5C31\u53EF\u4EE5\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002\u8FD9\u79CD\u534A\u540C\u6B65\u590D\u5236\u7684\u65B9\u5F0F\uFF0C\u517C\u987E\u4E86\u5F02\u6B65\u590D\u5236\u548C\u540C\u6B65\u590D\u5236\u7684\u4F18\u70B9\uFF0C\u5373\u4F7F\u51FA\u73B0\u4E3B\u5E93\u5B95\u673A\uFF0C\u81F3\u5C11\u8FD8\u6709\u4E00\u4E2A\u4ECE\u5E93\u6709\u6700\u65B0\u7684\u6570\u636E\uFF0C\u4E0D\u5B58\u5728\u6570\u636E\u4E22\u5931\u7684\u98CE\u9669\u3002</li></ul></li><li>\u662F\u4E0D\u662F\u4ECE\u8282\u70B9\u8D8A\u591A\u8D8A\u597D\uFF1F <ul><li>\u4E0D\u662F\u7684\u3002\u56E0\u4E3A\u4ECE\u5E93\u6570\u91CF\u589E\u52A0\uFF0C\u4ECE\u5E93\u8FDE\u63A5\u4E0A\u6765\u7684 I/O \u7EBF\u7A0B\u4E5F\u6BD4\u8F83\u591A\uFF0C\u4E3B\u5E93\u4E5F\u8981\u521B\u5EFA\u540C\u6837\u591A\u7684 log dump \u7EBF\u7A0B\u6765\u5904\u7406\u590D\u5236\u7684\u8BF7\u6C42\uFF0C\u5BF9\u4E3B\u5E93\u8D44\u6E90\u6D88\u8017\u6BD4\u8F83\u9AD8\uFF0C\u540C\u65F6\u8FD8\u53D7\u9650\u4E8E\u4E3B\u5E93\u7684\u7F51\u7EDC\u5E26\u5BBD\u3002\u5B9E\u9645\u4E0A\uFF0C\u4E00\u4E3B\u4E24\u4ECE\u5C31\u884C\u3002</li></ul></li><li>relay log <ul><li>\u4E2D\u7EE7\u65E5\u5FD7\uFF0C\u4F1A\u5728Slave\u8282\u70B9\u4E0A\u4EA7\u751F\uFF1B\u662FSlave\u8282\u70B9\u8BFB\u53D6\u5230Master\u8282\u70B9\u7684binlog\u4E4B\u540E\u4EA7\u751F\u7684\u65E5\u5FD7\uFF0C\u7528\u6765\u5728\u672C\u5730\u8FDB\u884C\u91CD\u653E\u6570\u636E\uFF1B</li></ul></li></ul><h2 id="binlog\u5237\u76D8" tabindex="-1"><a class="header-anchor" href="#binlog\u5237\u76D8" aria-hidden="true">#</a> Binlog\u5237\u76D8</h2><p>MySQLServer\u5C42\u6709\u4E00\u5757\u4E13\u95E8\u7684\u533A\u57DF\uFF0C\u7528\u6765\u653E\u7F6E\u7F13\u5B58\u7684\u4FE1\u606F\uFF0C\u8FD9\u90E8\u5206\u88AB\u79F0\u4E3ACache\u3002\u5BF9MySQL\u8FDB\u884C\u64CD\u4F5C\u65F6\uFF0CMySQLServer\u4F1A\u6839\u636E\u4F1A\u8BDD\u521B\u5EFA\u591A\u4E2A\u7EBF\u7A0B\uFF0C\u6BCF\u4E00\u4E2A\u7EBF\u7A0B\u90FD\u6709\u81EA\u5DF1\u7684Binlog-Cache\uFF0CBinlog-Cache\u8FBE\u5230\u8BBE\u7F6E\u7684\u9608\u503C\u540E\uFF0C\u4F1A\u628ABinlog\u2014Cache\u4E2D\u7684\u6570\u636E\u4FDD\u5B58\u5230\u78C1\u76D8\u4E0A\u3002</p><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230605135343.png" alt="20230605135343" loading="lazy"></p><p>\u5176\u4E2D\uFF0Cwrite \u6307\u7684\u662F \u628A Binlog-Cache \u4E2D\u7684\u5185\u5BB9\u5199\u5230\u6587\u4EF6\u7CFB\u7EDF\u4E2D\u7684 page cache \u91CC\uFF0C\u6B64\u65F6\u5E76\u6CA1\u6709\u843D\u5230\u78C1\u76D8\u4E0A\uFF0C\u8FD9\u4E2A\u9636\u6BB5\u4E0D\u6D89\u53CAIO\uFF1B fsync \u624D\u662F\u6301\u4E45\u5316\u5230\u78C1\u76D8\u4E0A\uFF0C\u8FD9\u4E2A\u9636\u6BB5\u624D\u4F1A\u4EA7\u751FIO\u3002</p><p>MySQL\u63D0\u4F9B\u4E86\u4E00\u4E2A sync_binlog \u53C2\u6570\u7528\u6765\u63A7\u5236binlog-cache\u5237\u5230\u78C1\u76D8\u4E0A\u7684\u9891\u7387\uFF1A</p><ul><li><code>sync_binlog = 0</code>\uFF0C \u8868\u793A\u6BCF\u6B21\u63D0\u4EA4\u4E8B\u52A1\u90FD\u53EA write \uFF0C \u4E0D fsync \uFF0C \u5177\u4F53\u4F55\u65F6\u5237\u5230\u78C1\u76D8\u4E0A\uFF0C\u7531\u64CD\u4F5C\u7CFB\u7EDF\u6765\u51B3\u5B9A\uFF1B\u8FD9\u79CD\u65B9\u5F0F\u98CE\u9669\u8F83\u5927\uFF0C\u4E00\u65E6\u4E3B\u673A\u91CD\u542F\uFF0C\u6CA1\u6709\u5237\u5230\u78C1\u76D8\u4E0A\u7684binlog\u5C31\u4F1A\u4E22\u5931\uFF1B</li><li><code>sync_binlog = 1</code> \uFF0C \u8868\u793A\u6BCF\u6B21\u63D0\u4EA4\u4E8B\u52A1\u90FD\u4F1A write\uFF0C\u7136\u540E\u9A6C\u4E0A\u6267\u884C fsync\uFF1B \u8FD9\u79CD\u65B9\u5F0F\u867D\u7136\u6700\u591A\u53EA\u4F1A\u4E22\u5931\u4E00\u4E2A\u4E8B\u52A1\u64CD\u4F5C\uFF0C\u4F46\u662F\u4F1A\u5BFC\u81F4\u5E76\u53D1\u5EA6\u4E0B\u964D\uFF1B</li><li><code>sync_binlog = N (N&gt;1)</code> \uFF0C \u8868\u793A\u6BCF\u6B21\u63D0\u4EA4\u4E8B\u52A1\u90FD write\uFF0C\u4F46\u7D2F\u79EF N \u4E2A\u4E8B\u52A1\u540E\u624D fsync\uFF1B \u8FD9\u79CD\u65B9\u5F0F\u6700\u6070\u5F53\uFF0C\u6700\u591A\u53EA\u4F1A\u4E22\u5931 N \u4E2A\u4E8B\u52A1\u64CD\u4F5C\uFF1B</li></ul><h2 id="\u4E0D\u91CD\u8981-binlog-\u67E5\u770B" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u91CD\u8981-binlog-\u67E5\u770B" aria-hidden="true">#</a> [\u4E0D\u91CD\u8981]BinLog \u67E5\u770B</h2><h3 id="\u65B9\u5F0F\u4E00" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F\u4E00" aria-hidden="true">#</a> \u65B9\u5F0F\u4E00</h3><ul><li>\u67E5\u770B\u7684\u8BED\u6CD5</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql&gt; show binlog events [IN &#39;log_name&#39;] [FROM pos] [LIMIT [offset,] row_count];
 
\u9009\u9879\u89E3\u6790\uFF1A
  IN &#39;log_name&#39; \u6307\u5B9A\u8981\u67E5\u8BE2\u7684binlog\u6587\u4EF6\u540D(\u4E0D\u6307\u5B9A\u5C31\u662F\u7B2C\u4E00\u4E2Abinlog\u6587\u4EF6)
  FROM pos \u6307\u5B9A\u4ECE\u54EA\u4E2Apos\u8D77\u59CB\u70B9\u5F00\u59CB\u67E5\u8D77(\u4E0D\u6307\u5B9A\u5C31\u662F\u4ECE\u6574\u4E2A\u6587\u4EF6\u9996\u4E2Apos\u70B9\u5F00\u59CB\u7B97)
  LIMIT [offset,] \u504F\u79FB\u91CF(\u4E0D\u6307\u5B9A\u5C31\u662F0)
  row_count \u67E5\u8BE2\u603B\u6761\u6570(\u4E0D\u6307\u5B9A\u5C31\u662F\u6240\u6709\u884C)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>\u7ED3\u679C\u5206\u6790\uFF1A \u7ED3\u679C\u662F\u4E00\u5F20\u8868 <ul><li>Log_name\uFF1A binlog \u6587\u4EF6\u540D</li><li>Pos\uFF1A \u8D77\u59CB\u4F4D\u7F6E</li><li>Event_type\uFF1A \u8BB0\u5F55\u7684\u4E8B\u4EF6\u7C7B\u578B</li><li>Server_id\uFF1A \u670D\u52A1\u5668id</li><li>End_log_pos\uFF1A \u7ED3\u675F\u4F4D\u7F6E</li><li>Info\uFF1A \u5177\u4F53\u4FE1\u606F</li></ul></li></ul><h3 id="\u65B9\u5F0F\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F\u4E8C" aria-hidden="true">#</a> \u65B9\u5F0F\u4E8C</h3><p>\u4E5F\u53EF\u4EE5\u4F7F\u7528 MySQL \u63D0\u4F9B\u7684binlog\u67E5\u770B\u5DE5\u5177\u76F4\u63A5\u67E5\u770Bbinlog\u6587\u4EF6\u5185\u5BB9\uFF0C\u5982\uFF1A</p><blockquote><p>mysqlbinlog -vv mysql-bin.000001 --start-position=2986;</p></blockquote><h3 id="\u67E5\u8BE2\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u793A\u4F8B" aria-hidden="true">#</a> \u67E5\u8BE2\u793A\u4F8B</h3><ul><li>binlog\u683C\u5F0F\u4E3Arow\u7684\u67E5\u8BE2\u793A\u4F8B</li></ul><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230605131523.png" alt="20230605131523" loading="lazy"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql&gt; show binlog events in &#39;master-bin.000001&#39; from 1 limit 20\\G
*************************** 1. row ***************************
   Log_name: master-bin.000001
        Pos: 4
 Event_type: Format_desc
  Server_id: 100
End_log_pos: 123
       Info: Server ver: 5.7.36-log, Binlog ver: 4
*************************** 2. row ***************************
   Log_name: master-bin.000001
        Pos: 123
 Event_type: Previous_gtids
  Server_id: 100
End_log_pos: 154
       Info: 
*************************** 3. row ***************************
   Log_name: master-bin.000001
        Pos: 154
 Event_type: Anonymous_Gtid
  Server_id: 100
End_log_pos: 219
       Info: SET @@SESSION.GTID_NEXT= &#39;ANONYMOUS&#39;
*************************** 4. row ***************************
   Log_name: master-bin.000001
        Pos: 219
 Event_type: Query
  Server_id: 100
End_log_pos: 400
       Info: CREATE USER &#39;slave&#39;@&#39;%&#39; IDENTIFIED WITH &#39;mysql_native_password&#39; AS &#39;*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9&#39;
*************************** 5. row ***************************
   Log_name: master-bin.000001
        Pos: 400
 Event_type: Anonymous_Gtid
  Server_id: 100
End_log_pos: 465
       Info: SET @@SESSION.GTID_NEXT= &#39;ANONYMOUS&#39;
*************************** 6. row ***************************
   Log_name: master-bin.000001
        Pos: 465
 Event_type: Query
  Server_id: 100
End_log_pos: 617
       Info: GRANT REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO &#39;slave&#39;@&#39;%&#39;
*************************** 7. row ***************************
   Log_name: master-bin.000001
        Pos: 617
 Event_type: Anonymous_Gtid
  Server_id: 100
End_log_pos: 682
       Info: SET @@SESSION.GTID_NEXT= &#39;ANONYMOUS&#39;
*************************** 8. row ***************************
   Log_name: master-bin.000001
        Pos: 682
 Event_type: Query
  Server_id: 100
End_log_pos: 769
       Info: flush privileges
*************************** 9. row ***************************
   Log_name: master-bin.000001
        Pos: 769
 Event_type: Anonymous_Gtid
  Server_id: 100
End_log_pos: 834
       Info: SET @@SESSION.GTID_NEXT= &#39;ANONYMOUS&#39;
*************************** 10. row ***************************
   Log_name: master-bin.000001
        Pos: 834
 Event_type: Query
  Server_id: 100
End_log_pos: 1024
       Info: CREATE DATABASE /*!32312 IF NOT EXISTS*/ \`monomer_order\` /*!40100 DEFAULT CHARACTER SET utf8mb4 */
*************************** 11. row ***************************
   Log_name: master-bin.000001
        Pos: 1024
 Event_type: Anonymous_Gtid
  Server_id: 100
End_log_pos: 1089
       Info: SET @@SESSION.GTID_NEXT= &#39;ANONYMOUS&#39;
*************************** 12. row ***************************
   Log_name: master-bin.000001
        Pos: 1089
 Event_type: Query
  Server_id: 100
End_log_pos: 1240
       Info: use \`monomer_order\`; DROP TABLE IF EXISTS \`order_info\` /* generated by server */
*************************** 13. row ***************************
   Log_name: master-bin.000001
        Pos: 1240
 Event_type: Anonymous_Gtid
  Server_id: 100
End_log_pos: 1305
       Info: SET @@SESSION.GTID_NEXT= &#39;ANONYMOUS&#39;
*************************** 14. row ***************************
   Log_name: master-bin.000001
        Pos: 1305
 Event_type: Query
  Server_id: 100
End_log_pos: 3967
       Info: use \`monomer_order\`; CREATE TABLE \`order_info\` (
  \`id\` bigint(32) NOT NULL AUTO_INCREMENT,
  \`order_no\` varchar(32) NOT NULL COMMENT &#39;\u8BA2\u5355\u53F7&#39;,
  \`order_amount\` decimal(8,2) NOT NULL COMMENT &#39;\u8BA2\u5355\u91D1\u989D&#39;,
  \`merchant_id\` bigint(32) NOT NULL COMMENT &#39;\u5546\u6237ID&#39;,
  \`user_id\` bigint(32) NOT NULL COMMENT &#39;\u7528\u6237ID&#39;,
  \`order_freight\` decimal(8,2) NOT NULL DEFAULT &#39;0.00&#39; COMMENT &#39;\u8FD0\u8D39&#39;,
  \`order_status\` tinyint(3) NOT NULL DEFAULT &#39;0&#39; COMMENT &#39;\u8BA2\u5355\u72B6\u6001,10\u5F85\u4ED8\u6B3E\uFF0C20\u5F85\u63A5\u5355\uFF0C30\u5DF2\u63A5\u5355\uFF0C40\u914D\u9001\u4E2D\uFF0C50\u5DF2\u5B8C\u6210\uFF0C55\u90E8\u5206\u9000\u6B3E\uFF0C60\u5168\u90E8\u9000\u6B3E\uFF0C70\u53D6\u6D88\u8BA2\u5355&#39;,
  \`trans_time\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT &#39;\u4EA4\u6613\u65F6\u95F4&#39;,
  \`pay_status\` tinyint(3) NOT NULL DEFAULT &#39;2&#39; COMMENT &#39;\u652F\u4ED8\u72B6\u6001,1\u5F85\u652F\u4ED8,2\u652F\u4ED8\u6210\u529F,3\u652F\u4ED8\u5931\u8D25&#39;,
  \`recharge_time\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT &#39;\u652F\u4ED8\u5B8C\u6210\u65F6\u95F4&#39;,
  \`pay_amount\` decimal(8,2) NOT NULL DEFAULT &#39;0.00&#39; COMMENT &#39;\u5B9E\u9645\u652F\u4ED8\u91D1\u989D&#39;,
  \`pay_discount_amount\` decimal(8,2) NOT NULL DEFAULT &#39;0.00&#39; COMMENT &#39;\u652F\u4ED8\u4F18\u60E0\u91D1\u989D&#39;,
  \`address_id\` bigint(32) NOT NULL COMMENT &#39;\u6536\u8D27\u5730\u5740ID&#39;,
  \`delivery_type\` tinyint(3) NOT NULL DEFAULT &#39;2&#39; COMMENT &#39;\u914D\u9001\u65B9\u5F0F\uFF0C1\u81EA\u63D0\u30022\u914D\u9001&#39;,
  \`delivery_status\` tinyint(3) DEFAULT &#39;0&#39; COMMENT &#39;\u914D\u9001\u72B6\u6001\uFF0C0 \u914D\u9001\u4E2D\uFF0C2\u5DF2\u9001\u8FBE\uFF0C3\u5F85\u6536\u8D27\uFF0C4\u5DF2\u9001\u8FBE&#39;,
  \`delivery_expect_time\` timestamp NULL DEFAULT NULL COMMENT &#39;\u914D\u9001\u9884\u8BA1\u9001\u8FBE\u65F6\u95F4&#39;,
  \`delivery_complete_time\` timestamp NULL DEFAULT NULL COMMENT &#39;\u914D\u9001\u9001\u8FBE\u65F6\u95F4&#39;,
  \`delivery_amount\` decimal(8,2) NOT NULL DEFAULT &#39;0.00&#39; COMMENT &#39;\u914D\u9001\u8FD0\u8D39&#39;,
  \`coupon_id\` bigint(32) DEFAULT NULL COMMENT &#39;\u4F18\u60E0\u5238id&#39;,
  \`cancel_time\` timestamp NULL DEFAULT NULL COMMENT &#39;\u8BA2\u5355\u53D6\u6D88\u65F6\u95F4&#39;,
  \`confirm_time\` timestamp NULL DEFAULT NULL COMMENT &#39;\u8BA2\u5355\u786E\u8BA4\u65F6\u95F4&#39;,
  \`remark\` varchar(512) DEFAULT NULL COMMENT &#39;\u8BA2\u5355\u5907\u6CE8\u7559\u8A00&#39;,
  \`create_user\` bigint(32) DEFAULT NULL COMMENT &#39;\u521B\u5EFA\u7528\u6237&#39;,
  \`update_user\` bigint(32) DEFAULT NULL COMMENT &#39;\u66F4\u65B0\u7528\u6237&#39;,
  \`create_time\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT &#39;\u521B\u5EFA\u65F6\u95F4&#39;,
  \`update_time\` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT &#39;\u66F4\u65B0\u65F6\u95F4&#39;,
  \`delete_flag\` tinyint(4) NOT NULL DEFAULT &#39;0&#39; COMMENT &#39;\u903B\u8F91\u5220\u9664\u6807\u8BB0&#39;,
  PRIMARY KEY (\`id\`,\`order_no\`),
  KEY \`inx_merchant_id_update_time\` (\`merchant_id\`,\`update_time\`),
  KEY \`inx_create_time\` (\`create_time\`,\`order_no\`),
  KEY \`inx_trans_time\` (\`trans_time\`),
  KEY \`inx_order_no\` (\`order_no\`)
) ENGINE=InnoDB AUTO_INCREMENT=96311264 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT=&#39;\u8BA2\u5355\u8868&#39;
*************************** 15. row ***************************
   Log_name: master-bin.000001
        Pos: 3967
 Event_type: Anonymous_Gtid
  Server_id: 100
End_log_pos: 4032
       Info: SET @@SESSION.GTID_NEXT= &#39;ANONYMOUS&#39;
*************************** 16. row ***************************
   Log_name: master-bin.000001
        Pos: 4032
 Event_type: Query
  Server_id: 100
End_log_pos: 4173
       Info: use \`monomer_order\`; /*!40000 ALTER TABLE \`order_info\` DISABLE KEYS */
*************************** 17. row ***************************
   Log_name: master-bin.000001
        Pos: 4173
 Event_type: Anonymous_Gtid
  Server_id: 100
End_log_pos: 4238
       Info: SET @@SESSION.GTID_NEXT= &#39;ANONYMOUS&#39;
*************************** 18. row ***************************
   Log_name: master-bin.000001
        Pos: 4238
 Event_type: Query
  Server_id: 100
End_log_pos: 4327
       Info: BEGIN
*************************** 19. row ***************************
   Log_name: master-bin.000001
        Pos: 4327
 Event_type: Table_map
  Server_id: 100
End_log_pos: 4440
       Info: table_id: 108 (monomer_order.order_info)
*************************** 20. row ***************************
   Log_name: master-bin.000001
        Pos: 4440
 Event_type: Write_rows
  Server_id: 100
End_log_pos: 12626
       Info: table_id: 108
20 rows in set (0.00 sec)

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br></div></div><blockquote><p>mysqlbinlog -vv mysql-bin.000001 --start-position=2986;</p></blockquote><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230605133528.png" alt="20230605133528" loading="lazy"></p><ul><li>binlog\u683C\u5F0F\u4E3AStatement\u7684\u67E5\u8BE2\u793A\u4F8B</li></ul><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230605132506.png" alt="20230605132506" loading="lazy"></p><p><br><br><br><img style="border:1px red solid;display:block;margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="\u5FAE\u4FE1\u516C\u4F17\u53F7"></p>`,41);function l(r,i){return a}var o=s(e,[["render",l],["__file","mysql03.html.vue"]]);export{o as default};
