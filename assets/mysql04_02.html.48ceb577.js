import{e as l}from"./app.ea0bfdcf.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const o={},i=l(`<p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230606112227.png" alt="\u5185\u5B58\u7ED3\u6784" loading="lazy"></p><ul><li>Buffer Pool <ul><li>change pool \u4EE5\u5916\u7684\u533A\u57DF <ul><li>\u521B\u5EFA\u3001\u5212\u5206\u533A\u57DF\u3001\u5BF9\u6570\u636E\u7684\u7BA1\u7406\u3001\u6269\u5BB9\u3001\u5E76\u53D1\u3001\u53C2\u6570\u914D\u7F6E \u3010<code>\u53EF\u4EE5\u7C7B\u6BD4Java\u4E2D\u5BF9HashMap\u7684\u7406\u89E3</code>\u3011</li></ul></li><li>change pool \u533A\u57DF <ul><li>\u5B58\u653E\u5185\u5BB9\u3001\u4F7F\u7528\u8FC7\u7A0B\u3001\u914D\u7F6E\u53C2\u6570</li></ul></li></ul></li><li>Log Buffer <ul><li>\u5B58\u653E\u5185\u5BB9\u3001\u914D\u7F6E\u53C2\u6570</li><li>RedoLog <ul><li>\u5B58\u653E\u5185\u5BB9\u3001\u4E00\u6761\u66F4\u65B0\u8BED\u53E5\u7684\u64CD\u4F5C\u8FC7\u7A0B\u3001\u4E0Ebinlog\u5B9E\u73B0\u4E24\u9636\u6BB5\u63D0\u4EA4</li></ul></li><li>UndoLog <ul><li>\u5B58\u653E\u5185\u5BB9\u3001MVCC\u591A\u7248\u672C\u5E76\u53D1\u63A7\u5236\u5B9E\u73B0\u539F\u7406\u3001\u4E8B\u52A1\u539F\u5B50\u6027\u5B9E\u73B0\u539F\u7406\u3001\u4E8B\u52A1\u6301\u4E45\u6027\u5B9E\u73B0\u539F\u7406</li></ul></li></ul></li></ul><h2 id="buffer-pool" tabindex="-1"><a class="header-anchor" href="#buffer-pool" aria-hidden="true">#</a> Buffer Pool</h2><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230605195942.png" alt="Buffer Pool\u903B\u8F91\u7ED3\u6784" loading="lazy"></p><p><code>\u6574\u4E2Amysql\u4F7F\u7528\u7684\u5185\u5B58\u533A\u53EF\u4EE5\u5212\u5206\u4E3A\u591A\u4E2ABuffer Pool \uFF0C\u4E00\u4E2ABuffer Pool \u53EF\u4EE5\u5206\u4E3A\u591A\u4E2A\u5757\uFF08chunk\uFF09\uFF0C\u6BCF\u4E2Achunk\u5305\u542B\u6709\u591A\u4E2Apage\u3002</code></p><h3 id="\u7F13\u51B2\u6C60\u7684\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u7F13\u51B2\u6C60\u7684\u521B\u5EFA" aria-hidden="true">#</a> \u7F13\u51B2\u6C60\u7684\u521B\u5EFA</h3><p>MySQL\u542F\u52A8\u65F6\uFF0C\u5C31\u4F1A\u6839\u636E\u914D\u7F6E\u53C2\u6570\uFF0C\u64CD\u4F5C\u7CFB\u7EDF\u7533\u8BF7\u7684\u4E00\u5757\u8FDE\u7EED\u7684\u5185\u5B58\u7A7A\u95F4\uFF0C\u4F5C\u4E3A Buffer Pool \u7F13\u51B2\u6C60\u3002\u5B58\u5728\u7684\u76EE\u7684\u662F\u4E3A\u4E86\u63D0\u9AD8\u6570\u636E\u8BBF\u95EE\u901F\u7387\uFF0C\u5229\u7528\u4E86\u9AD8\u901F\u7F13\u5B58\u4E0E\u78C1\u76D8\u7684\u8BBF\u95EE\u901F\u5EA6\u5DEE\u5F02\u7279\u6027\u3002</p><h3 id="\u7F13\u51B2\u6C60\u52A8\u6001\u6269\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u7F13\u51B2\u6C60\u52A8\u6001\u6269\u5BB9" aria-hidden="true">#</a> \u7F13\u51B2\u6C60\u52A8\u6001\u6269\u5BB9</h3><p>5.7.5\u4E4B\u524D\u5C31\u53EA\u662F\u8FDE\u7EED\u7684\u5185\u5B58\u7A7A\u95F4\uFF0C\u8981\u60F3\u589E\u52A0 Buffer Pool \u7684\u5927\u5C0F\uFF0C\u5C31\u9700\u8981\u91CD\u65B0\u7533\u8BF7\u4E00\u4E2A\u6BD4\u539F\u6765 Buffer Pool \u8FD8\u8981\u5927\u7684\u8FDE\u7EED\u7A7A\u95F4\uFF0C\u7136\u540E\u628A\u6570\u636E\u62F7\u8D1D\u8FC7\u53BB\uFF0C\u8FD9\u6837\u7CFB\u7EDF\u5F00\u9500\u8FC7\u5927\uFF1B5.7.5\u4E4B\u540E\u65B0\u52A0\u4E86 Buffer Pool \u5206\u5757\u7684 chunk \u7279\u6027\uFF0C\u8BA9\u8FD0\u884C\u671F\u95F4\u52A8\u6001\u8C03\u6574 Buffer Pool \u7684\u5927\u5C0F\u6210\u4E3A\u53EF\u80FD\uFF0C\u52A8\u6001\u8C03\u6574 Buffer Pool \u65F6\uFF0C\u53EA\u9700\u8981\u989D\u5916\u589E\u52A0\u51E0\u4E2Achunk\uFF0C\u7136\u540E\u94FE\u5165\u539F\u6709 Buffer Pool \u5F62\u6210\u65B0\u7684 Buffer Pool \u5373\u53EF\u3002</p><h3 id="\u7F13\u51B2\u6C60\u7684\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u7F13\u51B2\u6C60\u7684\u7BA1\u7406" aria-hidden="true">#</a> \u7F13\u51B2\u6C60\u7684\u7BA1\u7406</h3><p>\u7F13\u51B2\u6C60\u7BA1\u7406\u7684\u57FA\u672C\u5355\u4F4D\u662F<code>\u7F13\u5B58\u9875</code>\uFF0C\u7F13\u5B58\u9875\u5728\u903B\u8F91\u4E0A\u4E0E\u7269\u7406\u78C1\u76D8\u4E0A\u7684\u6570\u636E\u6587\u4EF6\u4E2D\u7684\u6570\u636E\u9875\u5BF9\u5E94\uFF0C\u9ED8\u8BA4\u5927\u5C0F\u662F16K\u3002\u4E00\u4E2A chunk \u5757\u4E2D\u5305\u542B\u591A\u4E2A<code>\u7F13\u5B58\u9875</code>\u4EE5\u53CA\u63A7\u5236\u7F13\u5B58\u9875\u7684<code>\u63CF\u8FF0\u4FE1\u606F</code>\uFF08\u5982\u9875\u6240\u5C5E\u7684\u8868\u7A7A\u95F4\u53F7\u3001\u9875\u53F7\u3001\u9875\u5728\u7F13\u5B58\u4E2D\u7684\u5730\u5740\u3001\u4E0B\u4E00\u9875\u7684\u6307\u9488\u7B49\uFF09\u3002</p><p>\u7531\u4E8E<code>\u63CF\u8FF0\u4FE1\u606F</code>\u7684\u5B58\u5728\uFF0C\u4E00\u4E2A\u8BBE\u7F6E\u6210128M\u7684 chunk \uFF0C\u6700\u540E\u53EF\u80FD\u53D8\u6210130M\uFF0C\u591A\u51FA\u6765\u7684\u5C31\u662F<code>\u63CF\u8FF0\u4FE1\u606F</code>\u7684\u5927\u5C0F\u3002</p><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230605210136.png" alt="20230605210136" loading="lazy"></p><p>\u6B64\u5916\uFF0CMySQL\u8FD8\u628A\u7F13\u5B58\u9875\u8FDB\u884C\u5206\u7C7B\uFF1A</p><ul><li><code>free page</code> \uFF1A \u8FD8\u6CA1\u6709\u4F7F\u7528\u5230\u7684\u7F13\u5B58\u9875\uFF1B</li><li><code>clean page</code> \uFF1A \u5DF2\u7ECF\u5B58\u5165\u6570\u636E\u4F46\u662F\u8FD8\u6CA1\u6709\u4FEE\u6539\u8FC7\u7684\u7F13\u5B58\u9875\uFF1B</li><li><code>dirty page</code> \uFF1A \u5DF2\u7ECF\u5B58\u5165\u6570\u636E\u5E76\u4E14\u6570\u636E\u4E5F\u5DF2\u7ECF\u88AB\u4FEE\u6539\u8FC7\u7684\u7F13\u5B58\u9875 \uFF1B</li></ul><p>\u5E76\u4E14MySQL\u8FD8\u628A\u8FD9\u4E9B\u7F13\u5B58\u9875\u7684<code>\u63CF\u8FF0\u4FE1\u606F</code>\u94FE\u8D77\u6765\u5F62\u6210\u4E09\u4E2A\u94FE\u8868\uFF1A</p><ul><li><code>free list</code> - \u7BA1\u7406 free page \uFF1B</li><li><code>flush list</code> - \u7BA1\u7406 dirty page \u5E76\u5728\u67D0\u4E2A\u65F6\u523B\u5BF9\u8BE5\u94FE\u8868\u7684\u810F\u9875\u8FDB\u884C\u5237\u76D8\uFF0C\u6309\u810F\u9875\u7684\u4FEE\u6539\u65F6\u95F4\u6392\u5E8F\uFF0C\u66F4\u65B0\u64CD\u4F5C\u65E9\u7684\u810F\u9875\u5148\u88AB\u5237\u76D8\uFF1B</li><li><code>lru list</code> - \u6B63\u5728\u4F7F\u7528\u7684\u5185\u5B58\u9875\u94FE\u8868\uFF0C\u91CC\u9762\u5305\u542B clean page \u548C dirty page\uFF0C\u4E5F\u5C31\u662F\u8BF4 lru list \u4E2D\u7684\u9875\u5305\u542B flush list \u4E2D\u7684\u6240\u6709\u810F\u9875\uFF0C\u4F7F\u7528\u6700\u8FD1\u6700\u5C11\u4F7F\u7528\u7B97\u6CD5\uFF1B\u52A0\u8F7D\u65B0\u7F13\u5B58\u9875\u548C\u4FEE\u6539\u4E00\u4E2A\u7F13\u5B58\u9875\uFF0C\u90FD\u628A\u5B83\u7684\u63CF\u8FF0\u4FE1\u606F\u8C03\u5230LRU\u94FE\u8868\u7684\u5934\u90E8\uFF0C\u8BA9\u4E0D\u7ECF\u5E38\u4FEE\u6539\u7684\u5F80\u540E\u6392\uFF1B</li></ul><p>\u7F13\u51B2\u6C60\u6839\u636E\u529F\u80FD\u5212\u5206\uFF0C\u8FD8\u5305\u62EC\uFF1A \u591A\u4E2A\u6570\u636E\u9875\uFF08data Page\uFF09\u3001\u591A\u4E2A\u7D22\u5F15\u9875\uFF08index Page\uFF09\u3001\u591A\u4E2Aundo\u9875\u3001\u591A\u4E2A\u5199\u7F13\u51B2\u533A\uFF08change page\uFF0C\u7B80\u79F0 CB\uFF09\u3001\u591A\u4E2A\u81EA\u9002\u5E94\u54C8\u5E0C\u7D22\u5F15\u548C\u5176\u4ED6\u4FE1\u606F\uFF08\u5982\u9501\u4FE1\u606F\u3001\u5B57\u5178\u4FE1\u606F\uFF09\u7B49\u3002</p><p>\u666E\u901A\u7684 lru \u7B97\u6CD5\u9075\u5FAA\u65B0\u6570\u636E\u4ECE\u94FE\u5934\u52A0\u5165\uFF0C\u94FE\u8868\u6EE1\u4E86\u9700\u8981\u91CA\u653E\u65F6\uFF0C\u5C31\u4ECE\u94FE\u5C3E\u5F39\u51FA\u3002\u8FD9\u91CC\u91C7\u7528\u7684 LRU \u7B97\u6CD5\u662F\u4F18\u5316\u540E\u7684\u7B97\u6CD5\u3002\u4E3B\u8981\u6709\u4EE5\u4E0B\u4F18\u5316\u70B9\uFF1A</p><ul><li><code>\u6DFB\u52A0\u4E86\u4E00\u4E2Ainnodb_old_blocks_pct\u53C2\u6570\uFF0C\u628Alru\u94FE\u5206\u4E3A\u4E24\u6BB5\u3002\u94FE\u5934\u5230midpoint\u7684\u4F4D\u7F6E\u5B58\u653E\u70ED\u6570\u636E\uFF0C\u79F0\u4E3A\u70ED\u7AEF\uFF1Bmidpoint\u5230\u94FE\u5C3E\u7684\u4F4D\u7F6E\u5B58\u653E\u51B7\u6570\u636E\uFF0C\u79F0\u4E3A\u51B7\u7AEF\uFF1B\u6DD8\u6C70\u6570\u636E\u65F6\u53EA\u6DD8\u6C70\u51B7\u7AEF\u6570\u636E\u3002 </code>\u9ED8\u8BA4\u503C\u4E3A\uFF1A37 \uFF0C\u8868\u793A\u51B7\u6570\u636E\u536037%\uFF1B\u9884\u8BFB\u8FDB\u7F13\u51B2\u6C60\u7684\u6570\u636E\u7EDF\u4E00\u90FD\u5148\u653E\u5230\u51B7\u7AEF\uFF1B\u8FD9\u6837\u53EF\u4EE5\u6709\u6548\u89E3\u51B3\u7F13\u51B2\u6C60\u9884\u8BFB\u4E86\u4E0D\u5E38\u7528\u7684\u9875\u6216\u626B\u63CF\uFF08\u5168\u8868\u626B\u63CF\u3001\u7D22\u5F15\u626B\u63CF\u3001\u5927\u8303\u56F4\u67E5\u8BE2\uFF09\u64CD\u4F5C\u67E5\u5230\u5927\u91CF\u6570\u636E\uFF0C\u5BFC\u81F4\u70ED\u6570\u636E\u88AB\uFF08\u5168\u90E8\u6216\u90E8\u5206\uFF09\u5237\u8D70\u7684\u95EE\u9898\uFF1B</li><li><code>\u5BF9\u51B7\u7AEF\u6570\u636E\u8FDB\u5165\u70ED\u7AEF\u6DFB\u52A0\u4E86\u4E00\u4E2Ainnodb_old_blocks_timee\u53C2\u6570\u8BBE\u7F6E\uFF0C\u8BA9\u51B7\u7AEF\u6570\u636E\u7ECF\u8FC7innodb_old_blocks_time\u65F6\u95F4\uFF08\u8FD9\u6BB5\u65F6\u95F4\u5185\u518D\u6B21\u88AB\u8BBF\u95EE\u4E0D\u4F1A\u8FDB\u5165\u70ED\u7AEF\uFF09\u4E4B\u540E\u624D\u80FD\u8FDB\u5165\u70ED\u7AEF\u6570\u636E\u3002</code>\u8FD9\u6837\u53EF\u4EE5\u6709\u6548\u89E3\u51B3\u4E00\u4E9B\u4E0D\u5E38\u7528\u7684\u9875\u6570\u636E\u5728\u77ED\u65F6\u95F4\u5185\u88AB\u591A\u6B21\u8BBF\u95EE\uFF0C\u8BA9\u7CFB\u7EDF\u8BEF\u8BA4\u4E3A\u5B83\u662F\u70ED\u6570\u636E\u4ECE\u800C\u5C06\u5176\u653E\u5165\u70ED\u70B9\u6570\u636E\u7684\u95EE\u9898\uFF1B</li><li><code>\u51CF\u5C11\u70ED\u9875\u5728\u94FE\u8868\u4E0A\u7684\u79FB\u52A8</code>\u3002\u70ED\u7AEF\u6570\u636E\u5E76\u4E0D\u662F\u8BBF\u95EE\u4E00\u6B21\u5C31\u79FB\u52A8\u5230\u94FE\u5934\uFF0C\u800C\u662F\u70ED\u7AEF\u6570\u636E\u540E3/4\u7684\u9875\u88AB\u8BBF\u95EE\u65F6\uFF0C\u624D\u79FB\u52A8\u5230\u94FE\u5934\uFF1B\u8FD9\u6837\u6709\u6548\u89E3\u51B3\u4E86\u70ED\u9875\u7684\u9891\u7E41\u79FB\u52A8\u95EE\u9898\uFF1B</li><li>\u8FD8\u6709\u4E00\u4E9B\u5176\u4ED6\u4F18\u5316\u3002</li></ul><h3 id="\u6570\u636E\u9875\u7684\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u9875\u7684\u8BBF\u95EE" aria-hidden="true">#</a> \u6570\u636E\u9875\u7684\u8BBF\u95EE</h3><p>InnoDb\u8BBF\u95EE\u67D0\u9875\u65F6\uFF0C\u4E0D\u662F\u76F4\u63A5\u4ECE\u78C1\u76D8\u8BFB\u53D6\uFF0C\u800C\u662F\u5148\u4ECE\u7F13\u51B2\u6C60\uFF08\u7684lru\u94FE\u8868\uFF09\u8BFB\u53D6\u9875\uFF1B\u5982\u679C\u6CA1\u547D\u4E2D\u7F13\u5B58\uFF0C\u5C31\u4ECE\u78C1\u76D8\u8BFB\u53D6\u9875\u5230\u7F13\u51B2\u6C60\u7F13\u5B58\uFF0C\u4E0B\u6B21\u8BFB\u5230\u76F8\u540C\u7684\u9875\u5219\u76F4\u63A5\u4ECE\u7F13\u51B2\u6C60\u8BFB\u53D6\uFF0C\u4ECE\u800C\u51CF\u5C11\u78C1\u76D8IO\u3002</p><p>\u95EE\u9898\u662F\u600E\u4E48\u77E5\u9053\u6211\u8981\u67E5\u8BE2\u7684\u9875\u662F\u5426\u5728buffer pool\u5462\uFF0C\u96BE\u9053\u8981\u5BF9lru\u94FE\u8868\u4E00\u4E2A\u4E2A\u9875\u904D\u5386\uFF1F\u904D\u5386\u662F\u4E0D\u53EF\u80FD\u904D\u5386\u7684\uFF0C\u8FD9\u8F88\u5B50\u90FD\u4E0D\u53EF\u80FD\u904D\u5386\u7684\u3002</p><p>\u5176\u5B9E\u5B66\u8FC7lru\u7B97\u6CD5\u7684\u5C0F\u4F19\u4F34\u4EEC\u90FD\u77E5\u9053\uFF0Clru\u7B97\u6CD5\u7684\u5B9E\u73B0\u9700\u8981 \u94FE\u8868 \u548C \u54C8\u5E0C\u8868\u4E24\u4E2A\u7ED3\u6784\u3002</p><p>innodb\u662F\u901A\u8FC7 <code>\u9875\u6240\u5728\u8868\u7A7A\u95F4\u53F7 + \u9875\u53F7</code> \u6765\u5B9A\u4F4D\u4E00\u4E2A\u9875\u7684\uFF0C\u6240\u4EE5\u7F13\u5B58\u4E00\u4E2A\u9875\u65F6\uFF0C\u7CFB\u7EDF\u9664\u4E86\u5C06\u8BE5\u9875\u7684\u63A7\u5236\u5757\u94FE\u5165lru\u94FE\u8868\u4E4B\u5916\uFF0C\u8FD8\u4F1A\u5C06 <code>\u8BE5\u9875\u7684\u8868\u7A7A\u95F4\u53F7 + \u9875\u53F7</code> \u4F5C\u4E3A<code>key</code>\uFF0C<code>\u9875\u7684\u63A7\u5236\u5757\u5730\u5740</code>\u4F5C\u4E3A<code>value</code>\u5199\u5165\u5230\u54C8\u5E0C\u8868\u4E2D\u3002</p><p>\u6240\u4EE5\u5F53\u8981\u8BBF\u95EE\u67D0\u4E2A\u9875\u65F6\uFF0C\u6839\u636E\u8BE5 <code>\u8868\u7A7A\u95F4\u53F7+\u9875\u53F7</code> \u5373\u53EF\u5F97\u77E5\u9875\u5728\u4E0D\u5728buffer pool\uFF0C\u5728buffer pool\u7684\u54EA\u4E2A\u5730\u65B9\u3002</p><h3 id="\u7F13\u51B2\u533A\u7684\u9884\u70ED" tabindex="-1"><a class="header-anchor" href="#\u7F13\u51B2\u533A\u7684\u9884\u70ED" aria-hidden="true">#</a> \u7F13\u51B2\u533A\u7684\u9884\u70ED</h3><p>Mysql\u91CD\u542F\u65F6\uFF0CBP\u4E2D\u7684\u70ED\u6570\u636E\u4F1A\u6E05\u7A7A\uFF0C\u4E3A\u6B64mysql\u63D0\u4F9B\u4E86\u7F13\u51B2\u6C60\u9884\u70ED\u529F\u80FD\uFF0C\u5F53\u5173\u673A\u65F6\u4F1A\u628A\u5185\u5B58\u4E2D\u7684\u70ED\u6570\u636E\u5199\u5165\u5230 ib_buffer_pool \u6587\u4EF6\u4E2D\uFF0C\u4FDD\u5B58\u7684\u6570\u636E\u5360 lru \u7684\u6BD4\u4F8B\u53EF\u7531\u53C2\u6570\u63A7\u5236\uFF0Cmysql\u542F\u52A8\u65F6\u4F1A\u81EA\u52A8\u52A0\u8F7D\u70ED\u6570\u636E\u5230\u7F13\u51B2\u6C60\u3002\u9884\u70ED\u529F\u80FD\u9ED8\u8BA4\u5F00\u542F\u3002</p><h3 id="\u7F13\u51B2\u533A\u7684\u9884\u8BFB" tabindex="-1"><a class="header-anchor" href="#\u7F13\u51B2\u533A\u7684\u9884\u8BFB" aria-hidden="true">#</a> \u7F13\u51B2\u533A\u7684\u9884\u8BFB</h3><p>\u78C1\u76D8IO\u6309\u9875\u8BFB\u53D6\uFF0C\u67E5\u8BE2\u67D0\u6761\u8BB0\u5F55\u4E0D\u662F\u53EA\u8BFB\u53D6\u8FD9\u6761\u8BB0\u5F55\uFF0C\u800C\u662F\u8BFB\u53D6\u8FD9\u6761\u8BB0\u5F55\u6240\u5728\u7684\u6574\u4E2A\u9875\u5E76\u7F13\u5B58\u3002</p><h3 id="\u7F13\u51B2\u533A\u7684\u5E76\u53D1" tabindex="-1"><a class="header-anchor" href="#\u7F13\u51B2\u533A\u7684\u5E76\u53D1" aria-hidden="true">#</a> \u7F13\u51B2\u533A\u7684\u5E76\u53D1</h3><ul><li>Q1\uFF1A buffer pool\u5E76\u53D1\u8BBF\u95EE\u7684\u65F6\u5019\u9700\u8981\u52A0\u9501\u5417 \uFF1F <ul><li>\u591A\u7EBF\u7A0B\u8BBF\u95EE\u4E00\u4E2ABufferPool\uFF0C\u5FC5\u7136\u662F\u8981\u52A0\u9501\u7684\u3002\u6BD4\u5982\uFF0C\u5148\u52A0\u9501\uFF0C\u7136\u540E\u52A0\u8F7D\u6570\u636E\u9875\u5230\u7F13\u5B58\u9875\uFF0C\u66F4\u65B0free\u94FE\u8868\uFF0C\u66F4\u65B0lru\u94FE\u8868\uFF0C\u518D\u91CA\u653E\u9501\uFF0C\u63A5\u7740\u4E0B\u4E00\u4E2A\u7EBF\u7A0B\u518D\u6267\u884C\u4E00\u7CFB\u5217\u7684\u64CD\u4F5C\u3002</li></ul></li><li>Q2\uFF1A buffer pool\u5E76\u53D1\u8BBF\u95EE\u52A0\u9501\u5F71\u54CD\u6027\u80FD\u5417\uFF1F <ul><li>\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\uFF0C\u7EBF\u7A0B\u90FD\u662F\u67E5\u8BE2\u6216\u8005\u66F4\u65B0\u7F13\u5B58\u91CC\u7684\u6570\u636E\uFF0C\u64CD\u4F5C\u90FD\u662F\u53D1\u751F\u5728\u5185\u5B58\u7684\uFF0C\u5FAE\u79D2\u7EA7\uFF0C\u5305\u62EC\u66F4\u65B0free\u3001flush\u3001lru\u94FE\u8868\u90FD\u662F\u5185\u5B58\u64CD\u4F5C\uFF0C\u901F\u5EA6\u6781\u5FEB\u3002\u4F46\u662F\u6709\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u9700\u8981\u8BFB\u53D6\u4ECE\u78C1\u76D8\u8BFB\u53D6\u6570\u636E\u5230\u7F13\u5B58\u9875\uFF0C\u53D1\u751F\u4E86\u4E00\u6B21\u78C1\u76D8IO\uFF0C\u8017\u65F6\u5C31\u957F\u4E00\u4E9B\uFF0C\u540E\u9762\u6392\u961F\u7684\u7EBF\u7A0B\u81EA\u7136\u5C31\u591A\u7B49\u4E00\u4F1A\u3002</li></ul></li><li>Q3\uFF1A \u591A\u4E2Abuffer pool\u4F18\u5316\u5E76\u53D1\u80FD\u529B <ul><li>\u591A\u4E2Abuffer pool\u7C7B\u4F3C\u4E8E\u5206\u6BB5\u52A0\u9501\uFF0C\u964D\u4F4E\u4E86\u9501\u7684\u51B2\u7A81\uFF0C\u591A\u6838\u591A\u7EBF\u7A0B\u8BBF\u95EE\u5C31\u6210\u500D\u7684\u63D0\u9AD8\u4E86\u6027\u80FD\u3002\u6BCF\u4E00\u4E2A\u7F13\u5B58\u9875\uFF0C\u53EA\u4F1A\u653E\u5728\u5176\u4E2D\u4E00\u4E2Abuffer pool\u91CC\u9762\u3002</li></ul></li></ul><h3 id="\u4E09\u4E2A\u94FE\u8868\u52A8\u6001\u7684\u8FD0\u884C\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u4E09\u4E2A\u94FE\u8868\u52A8\u6001\u7684\u8FD0\u884C\u8FC7\u7A0B" aria-hidden="true">#</a> \u4E09\u4E2A\u94FE\u8868\u52A8\u6001\u7684\u8FD0\u884C\u8FC7\u7A0B</h3><p>Buffer Pool\u5728\u8FD0\u884C\u4E2D\u88AB\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u5B9E\u9645\u4E0A\u4F1A\u9891\u7E41\u7684\u4ECE\u78C1\u76D8\u4E0A\u52A0\u8F7D\u6570\u636E\u9875\u5230\u4ED6\u7684\u7F13\u5B58\u9875\u91CC\u53BB\uFF0C\u7136\u540Efree\u94FE\u8868\u3001flush\u94FE\u8868\u3001lru\u94FE\u8868\u90FD\u4F1A\u5728\u4F7F\u7528\u7684\u65F6\u5019\u540C\u65F6\u88AB\u4F7F\u7528\u3002</p><p>\u6BD4\u5982\u6570\u636E\u52A0\u8F7D\u5230\u4E00\u4E2A\u7F13\u5B58\u9875\uFF0Cfree\u94FE\u8868\u91CC\u4F1A\u79FB\u9664\u8FD9\u4E2A\u7F13\u5B58\u9875\uFF0C\u7136\u540Elru\u94FE\u8868\u7684\u51B7\u6570\u636E\u533A\u57DF\u7684\u5934\u90E8\u4F1A\u653E\u5165\u8FD9\u4E2A\u7F13\u5B58\u9875\u3002</p><p>\u7136\u540E\u5982\u679C\u4F60\u8981\u662F\u4FEE\u6539\u4E86\u4E00\u4E2A\u7F13\u5B58\u9875\uFF0C\u90A3\u4E48flush\u94FE\u8868\u4E2D\u4F1A\u8BB0\u5F55\u8FD9\u4E2A\u810F\u9875\uFF0Clru\u94FE\u8868\u4E2D\u8FD8\u53EF\u80FD\u4F1A\u628A\u4F60\u4ECE\u51B7\u6570\u636E\u533A\u57DF\u79FB\u52A8\u5230\u70ED\u6570\u636E\u533A\u57DF\u7684\u5934\u90E8\u53BB\u3002</p><p>\u5982\u679C\u4F60\u662F\u67E5\u8BE2\u4E86\u4E00\u4E2A\u7F13\u5B58\u9875\uFF0C\u90A3\u4E48\u6B64\u65F6\u5C31\u4F1A\u628A\u8FD9\u4E2A\u7F13\u5B58\u9875\u5728lru\u94FE\u8868\u4E2D\u79FB\u52A8\u5230\u70ED\u6570\u636E\u533A\u57DF\u53BB\uFF0C\u6216\u8005\u5728\u70ED\u6570\u636E\u533A\u57DF\u4E2D\u4E5F\u6709\u53EF\u80FD\u4F1A\u79FB\u52A8\u5230\u5934\u90E8\u53BB\u3002</p><p>\u4F60\u4E00\u8FB9\u4E0D\u505C\u7684\u52A0\u8F7D\u6570\u636E\u5230\u7F13\u5B58\u9875\u91CC\u53BB\uFF0C\u4E0D\u505C\u7684\u67E5\u8BE2\u548C\u4FEE\u6539\u7F13\u5B58\u6570\u636E\uFF0C\u7136\u540Efree\u94FE\u8868\u4E2D\u7684\u7F13\u5B58\u9875\u4E0D\u505C\u7684\u5728\u51CF\u5C11\uFF0Cflush\u94FE\u8868\u4E2D\u7684\u7F13\u5B58\u9875\u4E0D\u505C\u7684\u5728\u589E\u52A0\uFF0Clru\u94FE\u8868\u4E2D\u7684\u7F13\u5B58\u9875\u4E0D\u505C\u7684\u5728\u589E\u52A0\u548C\u79FB\u52A8\u3002</p><p>\u53E6\u5916\u4E00\u8FB9\uFF0C\u4F60\u7684\u540E\u53F0\u7EBF\u7A0B\u4E0D\u505C\u7684\u5728\u628Alru\u94FE\u8868\u7684\u51B7\u6570\u636E\u533A\u57DF\u7684\u7F13\u5B58\u9875\u4EE5\u53CAflush\u94FE\u8868\u7684\u7F13\u5B58\u9875\uFF0C\u5237\u5165\u78C1\u76D8\u4E2D\u6765\u6E05\u7A7A\u7F13\u5B58\u9875\uFF0C\u7136\u540Eflush\u94FE\u8868\u548Clru\u94FE\u8868\u4E2D\u7684\u7F13\u5B58\u9875\u5728\u51CF\u5C11\uFF0Cfree\u94FE\u8868\u4E2D\u7684\u7F13\u5B58\u9875\u5728\u589E\u52A0\u3002</p><h3 id="\u5199\u7F13\u51B2-change-buffer" tabindex="-1"><a class="header-anchor" href="#\u5199\u7F13\u51B2-change-buffer" aria-hidden="true">#</a> \u5199\u7F13\u51B2 Change Buffer</h3><p>Change Buffer \u662F\u7F13\u51B2\u6C60 Buffer Pool \u7684\u4E00\u90E8\u5206\uFF0C\u5B83\u9ED8\u8BA4\u5360\u6574\u4E2A\u7F13\u51B2\u6C60\u768425%\uFF0C\u6700\u5927\u5141\u8BB8\u5360\u752850%\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>innodb_change_buffer_max_size</code>\u53C2\u6570\u8FDB\u884C\u8BBE\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u6839\u636E\u5199\u64CD\u4F5C\u7684\u91CF\u7EA7\u6765\u8C03\u6574\uFF0C<code>\u7406\u8BBA\u4E0A\u5199\u64CD\u4F5C\u8D8A\u9891\u7E41\uFF0CChange Buffer\u5E26\u6765\u7684\u6027\u80FD\u63D0\u5347\u8D8A\u660E\u663E</code>\u3002</p><p><code>\u5176\u5B58\u5728\u76EE\u7684\u662F\u4E3A\u4E86\u63D0\u9AD8\u4FEE\u6539\u6570\u636E\u7684\u6027\u80FD</code>\u3002\u6211\u4EEC\u5728\u4FEE\u6539\u6570\u636E\u65F6\uFF0C\u5982\u679C\u7F13\u51B2\u533A\u4E0D\u5B58\u5728\u8FD9\u6761\u6570\u636E\uFF0C\u5C31\u9700\u8981\u628A\u8FD9\u6761\u6570\u636E\u6240\u5728\u7684\u9875\u8BFB\u5230\u7F13\u51B2\u533A\uFF0C\u4E4B\u540E\u518D\u5BF9\u7F13\u51B2\u6C60\u4E2D\u7684\u6570\u636E\u8FDB\u884C\u4FEE\u6539\u3002\u8FD9\u6837\u65E0\u5F62\u4E2D\u5C31\u589E\u52A0\u4E86\u78C1\u76D8IO\uFF0CInnoDB \u4E3A\u4E86\u63D0\u5347\u6027\u80FD\uFF0C\u8BBE\u8BA1\u51FA\u4E86 change buffer \uFF0C\u5927\u6982\u539F\u7406\u5C31\u662F\uFF1A \u6BCF\u6B21\u4FEE\u6539\u6570\u636E\u65F6\uFF0C\u5148\u628A\u4FEE\u6539\u540E\u7684\u7ED3\u679C\u653E\u5230 change buffer \u4E2D\uFF0C\u540E\u7EED\u518D\u8FDB\u884C\u5237\u76D8\u3002</p><p>\u4FEE\u6539\u6570\u636E\u65F6\u5206\u4E3A\u4E24\u79CD\u60C5\u51B5\uFF1A</p><ul><li><code>\u4FEE\u6539\u7684\u6570\u636E\u6240\u5728\u7684\u9875\u5728lru\u94FE\u4E0A</code>\uFF0CInnoDB \u5C31\u4F1A\u76F4\u63A5\u5728\u7F13\u51B2\u6C60\u4E2D\u4FEE\u6539\u8FD9\u4E2A\u9875\uFF0C\u5E76\u628A\u8FD9\u4E2A\u9875\u53D8\u6210\u810F\u9875\u94FE\u5165flush list\u4E2D\uFF0C\u4F46\u662F\u4E0D\u4F1A\u9A6C\u4E0A\u5237\u76D8\uFF0C\u8FD9\u91CC\u4E0D\u4F1A\u7528\u5230change buffer\uFF1B</li><li><code>\u4FEE\u6539\u7684\u6570\u636E\u6240\u5728\u7684\u9875\u4E0D\u5728lru\u94FE\u4E0A</code>\uFF0C\u6B64\u65F6\u6309\u7406\u8BF4\u5E94\u8BE5\u5148\u4ECE\u78C1\u76D8\u8BFB\u53D6\u8981\u4FEE\u6539\u7684\u9875\uFF0C\u7136\u540E\u653E\u5230\u7F13\u51B2\u6C60\u4E2D\uFF0C\u7136\u540E\u518D\u4FEE\u6539\uFF0C\u4E4B\u540E\u518D\u5237\u76D8\u7684\uFF0C\u4F46\u662FInnoDB\u6CA1\u6709\u8FD9\u6837\u505A\uFF0C\u800C\u662F\u5148\u628A\u4FEE\u6539\u64CD\u4F5C\u8BB0\u5F55\u5230change buffer\u4E2D\uFF0C\u5F53\u4E0B\u6B21\u67E5\u8BE2\u65F6\uFF0CInnoDB\u53D1\u73B0lru\u94FE\u4E0A\u6CA1\u6709\u8FD9\u6761\u6570\u636E\uFF0CInnoDB\u5C31\u4F1A\u4ECE\u78C1\u76D8\u8BFB\u53D6\u6539\u6570\u636E\u9875\uFF0C\u4E4B\u540E\u518D\u4E0Echange buffer\u4E2D\u7684\u66F4\u6539\u8FDB\u884C\u5408\u5E76\u540E\u624D\u94FE\u5165lru\u3002\u5982\u679C\u4E00\u6BB5\u65F6\u95F4\u540E\uFF0C\u90FD\u6CA1\u6709\u67E5\u8BE2\u8FD9\u4E2A\u4FEE\u6539\u7684\u9875\uFF0CInnoDB\u7684\u540E\u53F0\u7EBF\u7A0B\u5C31\u4F1A\u5B9A\u65F6\u628Achange Buffer\u7684\u66F4\u6539\u5408\u5E76\u5230\u78C1\u76D8\u9875\u4E2D\u3002</li><li>\u6709\u4E2A\u4F8B\u5916\uFF0C\u5728\u4FEE\u6539\u552F\u4E00\u6027\u7EA6\u675F\u5B57\u6BB5\u65F6\uFF0C\u7531\u4E8EInnoDB\u8981\u505A\u552F\u4E00\u6027\u6821\u9A8C\uFF0C\u56E0\u6B64\u5FC5\u987B\u8981\u8BFB\u53D6\u78C1\u76D8\uFF0C\u628A\u6570\u636E\u8BFB\u5230\u7F13\u51B2\u6C60\u4E4B\u540E\uFF0C\u518D\u5728lru\u94FE\u4E0A\u7684\u9875\u5185\u4FEE\u6539\u6570\u636E\uFF0C\u4E0D\u4F1A\u5728change buffer\u4E2D\u64CD\u4F5C\u3002</li></ul><h3 id="\u53C2\u6570\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u914D\u7F6E" aria-hidden="true">#</a> \u53C2\u6570\u914D\u7F6E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[server] 
innodb_buffer_pool_instances = 8 # \u4EE3\u8868\u4E86\u6709\u51E0\u4E2Abuffer pool
innodb_buffer_pool_size = 8589934592 # \u4EE3\u8868\u4E86buffer pool\u603B\u5171\u5360\u7528\u591A\u5C11\u5B57\u8282\uFF0C\u9ED8\u8BA4\u662F\u4E00\u4E2A chunk \u7684\u5927\u5C0F\uFF0C\u5373 134217728 b = 131072 kb = 128 m ;
innodb_buffer_pool_chunk_size = 8589934592 # \u8C03\u6574 chunk \u7684\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u4E00\u4E2A chunk \u4E3A128M
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>innodb_page_size\uFF1A BP\u7F13\u51B2\u533A\u5927\u5C0F\uFF08\u5355\u4F4D\u662F\u9875\uFF09\uFF0C\u5EFA\u8BAE\u5C06\u5176\u8BBE\u4E3A\u603B\u5185\u5B58\u7684 60% ~ 80% innodb_old_blocks_pct\uFF1A midpoint\u79BB\u94FE\u5C3E\u7684\u767E\u5206\u6BD4\uFF0C\u9ED8\u8BA437.5% innodb_old_blocks_time \uFF1A \u65B0\u9875\u9700\u8981\u9694\u591A\u957F\u65F6\u95F4\u624D\u80FD\u8FDB\u5165lru\u94FE\u8868\u7684\u70ED\u7AEF innodb_buffer_pool_instances \uFF1A Buffer Pool\u7684\u4E2A\u6570\uFF0C\u5EFA\u8BAE\u8BBE\u4E3A\u591A\u4E2A innodb_buffer_pool_dump_at_shutdown \uFF1A \u5173\u95ED\u670D\u52A1\u65F6\u4FDD\u5B58\u70ED\u6570\u636E innodb_buffer_pool_dump_pct\uFF1A \u4FDD\u5B58\u70ED\u6570\u636E\u7684\u6BD4\u4F8B\u3002 innodb_buffer_pool_load_at_startup\uFF1A \u5F00\u673A\u65F6\u8F7D\u5165\u70ED\u6570\u636E</p><h2 id="log-buffer" tabindex="-1"><a class="header-anchor" href="#log-buffer" aria-hidden="true">#</a> Log Buffer</h2><p>Log Buffer\u4E2D\u4E3B\u8981\u662F RedoLog \u548C UndoLog \u7684\u6570\u636E\u9875\u3002\u672C\u8D28\u4E0A\u8FD8\u662F\u5C5E\u4E8EInnoDB\u7684\u4E00\u79CD\u7F13\u5B58\uFF0C\u4E3A\u4E86\u63D0\u9AD8\u6027\u80FD\u3002<code>\u5176\u4E2D RedoLog \u65E5\u5FD7\u88AB\u79F0\u4E3A\u91CD\u505A\u65E5\u5FD7\uFF0C\u4E5F\u88AB\u79F0\u4E3A\u4E8B\u52A1\u65E5\u5FD7</code>\u3002</p><h3 id="io\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#io\u6A21\u578B" aria-hidden="true">#</a> IO\u6A21\u578B</h3><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230620074639.png" alt="20230620074639" loading="lazy"></p><p>\u7531\u4E0A\u9762IO\u6A21\u578B\u53EF\u77E5\uFF1A</p><ul><li>LogBuffer\u5C5E\u4E8E\u7528\u6237\u6001\u5185\u5B58\u533A\u57DF\u3002\u5728\u5185\u5B58\u4E2D\u5212\u5206\u4E00\u90E8\u5206\u533A\u57DF\u7ED9\u7528\u6237\u4F7F\u7528\uFF0C\u90A3\u8FD9\u90E8\u5206\u5C31\u88AB\u79F0\u4E3A\u7528\u6237\u6001\uFF08\u6216\u7528\u6237\u7A7A\u95F4\uFF09\u5185\u5B58\uFF0CLogBuffer \u548C BufferPool \u90FD\u5C5E\u4E8E\u7528\u6237\u6001\u5185\u5B58\uFF1B\u5185\u6838\u6001\uFF08\u6216\u5185\u6838\u7A7A\u95F4\uFF09\u662F\u6307\u7ED9\u64CD\u4F5C\u7CFB\u7EDF\u4F7F\u7528\u7684\u8FD9\u90E8\u5206\u5185\u5B58\u533A\u57DF\uFF1B</li><li>\u5185\u5B58\u533A\u57DF\u6613\u5931\u6027\u51B3\u5B9A\u7740\u7528\u6237\u6001\u5185\u5B58\u7684\u6613\u5931\u6027\u3002\u5185\u5B58\u4E2D\u4FDD\u5B58\u7684\u6570\u636E\u9700\u8981\u7ECF\u7531\u64CD\u4F5C\u7CFB\u7EDFIO\u8C03\u7528\uFF0C\u5199\u5165\u5230\u78C1\u76D8\u624D\u80FD\u5B8C\u6210\u6301\u4E45\u5316\uFF0C\u6240\u4EE5\u7528\u6237\u6001\u5185\u5B58\u4E5F\u9700\u8981\u5199\u5165\u5230\u78C1\u76D8\u6587\u4EF6\u4EE5\u5B8C\u6210\u6301\u4E45\u5316\uFF1B</li><li>\u7528\u6237\u6001\u5185\u5B58\u6570\u636E\u6301\u4E45\u5316\u5230\u78C1\u76D8\u6587\u4EF6\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A <ul><li>\u8BF4\u660E\uFF1A \u4E0A\u56FE\u4E2D\u7684 fsync() \u5C31\u662F\u64CD\u4F5C\u7CFB\u7EDF\u5C42\u9762\u7684IO\u64CD\u4F5C\uFF0C\u4F5C\u7528\u662F\u628AOS Buffer\u4E2D\u6570\u636E\u5199\u5165\u78C1\u76D8\u6587\u4EF6\uFF1B</li><li>\u4E00\u79CD\u65B9\u5F0F\u662F\u76F4\u63A5\u4F7F\u7528\u7528\u6237\u7EBF\u7A0B\uFF0C\u7565\u8FC7\u64CD\u4F5C\u7CFB\u7EDF\u8BFB\u5199\u6587\u4EF6\u7684IO\u7EBF\u7A0B\uFF0C\u76F4\u63A5\u8BFB\u5199\u78C1\u76D8\u6587\u4EF6\uFF0C\u5982\u67B6\u6784\u5927\u56FE\u4E2D\u7684O_Direct\uFF1B</li><li>\u53E6\u4E00\u79CD\u65B9\u5F0F\u5C31\u662F\u7528\u6237\u7EBF\u7A0B\u8C03\u7528\u64CD\u4F5C\u7CFB\u7EDF\u7684IO\u7EBF\u7A0B\u9700\u8981\u8C03\u7528\u64CD\u4F5C\u7CFB\u7EDF\u7684IO\u64CD\u4F5C\uFF0C\u5982LogBuffer\u7684\u6301\u4E45\u5316\u65B9\u5F0F\uFF1B</li></ul></li></ul><h3 id="logbuffer\u5237\u76D8\u53C2\u6570\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#logbuffer\u5237\u76D8\u53C2\u6570\u914D\u7F6E" aria-hidden="true">#</a> LogBuffer\u5237\u76D8\u53C2\u6570\u914D\u7F6E</h3><p>log buffer \u7528\u6765\u7F13\u5B58\u8981\u5199\u5165log\u6587\u4EF6\u7684\u6570\u636E\uFF08redo\u548Cundo\uFF09\u3002 <code>innodb_flush_log_at_trx_commit</code> \u53C2\u6570\u63A7\u5236\u65E5\u5FD7\u5237\u65B0\u7684\u884C\u4E3A\u548C\u5468\u671F\uFF0C\u9ED8\u8BA4\u4E3A1\u3002log\u65E5\u5FD7\u5237\u76D8\u67093\u79CD\u7B56\u7565\uFF1A</p><ul><li>innodb_flush_log_at_trx_commit=0 \uFF1A \u63D0\u4EA4\u4E8B\u52A1\u65F6\uFF0C\u4E8B\u52A1\u65E5\u5FD7\u4ECE log buffer \u5199\u5165 OS cache \uFF0C\u4E4B\u540E\u7531\u4E3B\u7EBF\u7A0B\u4EE51s/\u6B21\u7684\u9891\u7387\u6267\u884C\u5237\u76D8\uFF08\u5373\u6BCF\u96941s\u8C03\u7528\u4E00\u6B21 fsync \uFF09\uFF0C\u6570\u636E\u5E93\u6545\u969C\u6216\u4E3B\u673A\u5B95\u673A\u5219\u4E22\u59311\u79D2\u6570\u636E\u3002</li><li>innodb_flush_log_at_trx_commit=1 \uFF1A \u4E8B\u52A1\u63D0\u4EA4\u65F6\uFF0C\u4E8B\u52A1\u65E5\u5FD7\u4ECE log buffer \u5199\u5165 os cache\uFF0C \u5E76\u7ACB\u523B\u5237\u76D8\uFF08\u5373\u7ACB\u523B\u8C03\u7528 fsync \uFF09\uFF0Cmysql\u670D\u52A1\u6545\u969C\u6216\u8005\u4E3B\u673A\u5B95\u673A\u4E0D\u4F1A\u4E22\u5931\u6570\u636E\uFF0C\u4F46\u5982\u679C\u4E8B\u52A1\u9891\u7E41\uFF0C\u5219\u4F1A\u9891\u7E41\u53D1\u751F\u78C1\u76D8IO\u3002</li><li>innodb_flush_log_at_trx_commit=2 \uFF1A \u4E8B\u52A1\u63D0\u4EA4\u65F6\uFF0C\u4E8B\u52A1\u65E5\u5FD7\u76F4\u63A5\u5199\u5165 os cache\uFF0C\u6BCF\u96941\u79D2\u5237\u76D8\uFF08\u5237\u76D8\u65F6\u673A\u7531\u64CD\u4F5C\u7CFB\u7EDF\u914D\u7F6E\uFF09\uFF0C\u5237\u76D8\u52A8\u4F5C\u4EA4\u7531\u64CD\u4F5C\u7CFB\u7EDF\u5B8C\u6210\uFF0Cmysql\u670D\u52A1\u6545\u969C\u4E0D\u4F1A\u4E22\u5931\u6570\u636E\uFF0C\u56E0\u4E3A\u6570\u636E\u5DF2\u7ECF\u8FDB\u5165\u64CD\u4F5C\u7CFB\u7EDF\u7F13\u5B58\uFF0C\u4E0Emysql\u8FDB\u7A0B\u65E0\u5173\u4E86\uFF0C\u4E3B\u673A\u5B95\u673A\u5219\u4E22\u59311\u79D2\u6570\u636E\u3002</li></ul><h3 id="redolog" tabindex="-1"><a class="header-anchor" href="#redolog" aria-hidden="true">#</a> Redolog</h3><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u6709\u4E86Buffer Pool\u4E4B\u540E\uFF0C\u4E3A\u4EC0\u4E48\u8FD8\u8981\u6709Log Buffer\u4E2D\u7684Redo Log\u5462\uFF1F Buffer Pool\u91CC\u9762\u4FDD\u5B58\u7684\u662F\u4ECE\u78C1\u76D8\u5237\u8FDB\u7F13\u5B58\u7684\u6570\u636E\u9875\u4EE5\u53CA\u5BA2\u6237\u7AEF\u5BF9\u6570\u636E\u64CD\u4F5C\u540E\u7684\u5199\u7F13\u5B58\u9875\uFF0C\u800CRedoLog\u4E2D\u8BB0\u5F55\u4E86\u5173\u4E8E\u4E8B\u52A1\u7684\u76F8\u5173\u5185\u5BB9\uFF1B</p><p>\u65E2\u7136binlog\u4E2D\u8BB0\u5F55\u4E86\u5BF9\u6570\u636E\u7684\u4FEE\u6539\uFF0C\u90A3\u662F\u4E0D\u662F\u5C31\u53EF\u4EE5\u4F7F\u7528binlog\u8FDB\u884C\u6570\u636E\u6062\u590D\uFF0C\u4E3A\u4EC0\u4E48\u8FD8\u8981\u6709UndoLog\u5462\uFF1F</p></div><ul><li>\u4F5C\u7528\uFF1A <ul><li>\u91CD\u505A\u65E5\u5FD7\uFF0C\u4E5F\u5C31\u4E8B\u52A1\u65E5\u5FD7\uFF0C\u8BB0\u5F55\u6570\u636E\u5E93\u4E2D\u7684\u4E8B\u52A1\uFF0C\u5BF9\u6570\u636E\u9875\u7684\u7269\u7406\u64CD\u4F5C\uFF0C\u5982\u504F\u79FB\u91CF\u662F\u591A\u5C11\u3001\u505A\u4E86\u4EC0\u4E48\u64CD\u4F5C\u7B49\uFF1B</li></ul></li><li>\u7279\u70B9\uFF1A <ul><li>\u6EE1\u8DB3\u5E42\u7B49\u6027\uFF1A \u591A\u6B21\u64CD\u4F5C\u5F97\u5230\u540C\u4E00\u7ED3\u679C\u7684\u884C\u4E3A\u53EA\u8BB0\u5F55\u4E00\u6B21\uFF1B</li><li>\u6EE1\u8DB3\u4E8B\u52A1\u6301\u4E45\u6027\uFF1A \u628A\u5BA2\u6237\u7AEF\u5BF9\u6570\u636E\u5E93\u7684\u64CD\u4F5C\u5199\u5165Log Buffer\u4E2D\u7684RedoLog\u4E2D\uFF0C\u5E76\u6301\u4E45\u5316\u5230\u78C1\u76D8\u6587\u4EF6\u4E2D\uFF0C\u5B8C\u6210\u5BF9\u4E8B\u52A1\u7684\u6301\u4E45\u5316\uFF1B</li><li>\u4E0D\u662F\u4E8B\u52A1\u7ED3\u675F\u65F6\u5199\u5165\u7684\uFF0C\u800C\u662F\u5728\u4E8B\u52A1\u8FDB\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u4E0D\u65AD\u88AB\u5199\u5165\u91CD\u505A\u65E5\u5FD7\u6587\u4EF6\u4E2D\uFF1B</li><li>\u843D\u76D8\u65F6\u673A\u4E0E\u4E8B\u52A1\u5B8C\u6210\u7684\u72B6\u6001\u662F\u65E0\u5173\u7684\uFF0C\u53EA\u4E0E\u914D\u7F6E\u7684LogBuffer\u5237\u76D8\u9891\u7387\u53C2\u6570\u548C\u5237\u76D8\u89E6\u53D1\u6761\u4EF6\u6709\u5173\uFF1B</li><li>RedoLog\u78C1\u76D8\u6587\u4EF6\u5927\u5C0F\u662F\u56FA\u5B9A\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u662F\u914D\u7F6E\u4E00\u4E2A\u5206\u7EC4\u4E24\u4E2A\u6587\u4EF6\uFF08 ib_logfile0 \u548C ib_logfile1 \uFF09\uFF0C\u5148\u5199 ib_logfile0\uFF0C\u5199\u6EE1\u540E\uFF0C\u63A5\u7740\u5199 ib_logfile1 \uFF0C\u518D\u5199\u6EE1\u540E\uFF0C\u5C31\u8986\u76D6 ib_logfile0 \u6700\u65E9\u7684\u65E5\u5FD7\uFF0C\u4E5F\u5C31\u662F\u6EDA\u52A8\u8BB0\u5F55\u7684\uFF0C\u6709\u4E00\u4E2A\u7C7B\u4F3C\u4E8Ehash\u73AF\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u8BB0\u5F55\u7740\u5199\u7684\u4F4D\u7F6E\uFF08write-pos\uFF09\u548C\u64E6\u9664\u4F4D\u7F6E\uFF08 checkpoint \uFF09\uFF1B write-pos \u5148\u4E8E checkpoint \uFF0C\u4E8C\u8005\u4E4B\u95F4\u5C31\u662F\u4E8B\u52A1\u65E5\u5FD7\uFF0C\u5F00\u59CB\u4F4D\u7F6E\u5230checkpoint\u4E4B\u95F4\u662F\u5DF2\u7ECF\u64E6\u9664\u7684\u7A7A\u95F2\u7A7A\u95F4\uFF1B</li><li>\u53EA\u8981\u4E8B\u52A1\u5199\u5165\u78C1\u76D8\u7A7A\u95F4\uFF0C\u5C31\u53EF\u4EE5\u88AB\u64E6\u9664\u4E86\uFF1B</li><li>\u53EF\u4EE5\u7528\u6765\u8FDB\u884C\u6545\u969C\u6062\u590D\uFF1B</li></ul></li><li>\u4E3A\u4EC0\u4E48\u4E0D\u76F4\u63A5\u5199\u78C1\u76D8\uFF1F <ul><li>\u6D6A\u8D39\uFF1A\u5982\u679C\u53EA\u4FEE\u6539\u4E86\u4E00\u5C0F\u90E8\u5206\u6570\u636E\uFF0C\u5C31\u76F4\u63A5\u4FEE\u6539\u78C1\u76D8\uFF0C\u4F1A\u9020\u6210\u4E0D\u5FC5\u8981\u7684IO\u5F00\u9500\uFF0C\u9020\u6210\u6D6A\u8D39\uFF1B <ul><li>redo\u65E5\u5FD7\u8BB0\u5F55\u7684\u53D8\u66F4\u5185\u5BB9\u5C11\uFF0C\u53EA\u8BB0\u5F55\u4E8B\u52A1\u6D89\u53CA\u5230\u7684\u6570\u636E\u884C\uFF08\u5177\u4F53\u662F\u6570\u636E\u884C\u6240\u5728\u7684\u8868\u7A7A\u95F4ID\u3001\u9875\u53F7\u3001\u9875\u5185\u504F\u79FB\u548C\u66F4\u65B0\u540E\u7684\u503C\uFF09\uFF0C\u800C\u4E0D\u662F\u8BB0\u5F55\u884C\u6240\u5728\u7684\u6574\u4E2A\u9875\u3002</li></ul></li><li>\u968F\u673AIO\uFF1A \u4E00\u4E2A\u4E8B\u52A1\u53EF\u80FD\u4F1A\u4FEE\u6539\u591A\u4E2A\u6570\u636E\u9875\uFF0C\u90A3\u4E48\u76F4\u63A5\u843D\u76D8\uFF0C\u5C31\u4F1A\u9020\u6210\u591A\u6B21\u968F\u673AIO\uFF1B <ul><li>redo\u884C\u8BB0\u5F55\u662F\u987A\u5E8F\u5199\u5165\u78C1\u76D8\u7684\uFF08\u987A\u5E8FIO\uFF09\uFF0C\u76F4\u63A5\u6309\u7167\u65E5\u5FD7\u4EA7\u751F\u65F6\u7684\u987A\u5E8F\u8FFD\u52A0\u5230redo\u65E5\u5FD7\u6587\u4EF6\u7684\u672B\u5C3E\u5373\u53EF\uFF0C\u987A\u5E8FIO\u6BD4\u968F\u673AIO\u5FEB\u5F88\u591A\u3002</li></ul></li></ul></li><li>\u914D\u7F6E\u53C2\u6570\uFF1A <ul><li>innodb_log_group_home_dir \uFF1A \u914D\u7F6E \u65E5\u5FD7\u7EC4 \u6240\u5728\u7684\u6587\u4EF6\u76EE\u5F55</li><li>innodb_log_files_in_group \uFF1A \u914D\u7F6E \u6BCF\u4E2A\u65E5\u5FD7\u7EC4 \u4E2D\u7684\u6587\u4EF6\u6570\u91CF\uFF0C\u9ED8\u8BA4\u662F2\uFF0Cib_logfile0 \u548C ib_logfile1\u4E3A\u9ED8\u8BA4\u7684\u4E00\u4E2A\u7EC4</li><li>innodb_log_file_size \uFF1A \u6307\u5B9A\u91CD\u505A\u65E5\u5FD7\u6587\u4EF6\u7684\u5927\u5C0F</li></ul></li><li>\u5237\u76D8 <ul><li>\u5C31\u662F\u628ALogBuffer\u4E2D\u7684RedoLog\u5199\u5165\u5230\u78C1\u76D8\u6587\u4EF6\u4E2D\uFF1B</li><li>\u5237\u76D8\u65F6\u673A\uFF1A \u4E0D\u662F\u5728\u4E8B\u52A1\u63D0\u4EA4\u65F6\u5199\u5165\uFF0C\u800C\u662F\u5728\u4E8B\u52A1\u6267\u884C\u8FC7\u7A0B\u4E2D\u4E0D\u65AD\u5199\u5165\u7684\uFF1B</li><li>\u5237\u76D8\u6761\u4EF6\uFF1A <ul><li>a. log buffer\u7A7A\u95F4\u4E0D\u8DB3\u65F6\uFF08log buffer\u7684\u7A7A\u95F4\u5269\u4F59\u7EA650%\u5DE6\u53F3\u5C31\u4F1A\u5237\u76D8\uFF09\uFF1B</li><li>b. \u4E8B\u52A1\u63D0\u4EA4\u540E\u7684\u67D0\u4E2A\u65F6\u523B\u5237\u76D8\uFF0C\u5177\u4F53\u770B\u5237\u76D8\u7B56\u7565\uFF0C\u53EF\u80FD\u4F1A\u5728\u4E8B\u52A1\u63D0\u4EA4\u65F6\u9A6C\u4E0A\u5237\u76D8\u3001\u4E5F\u53EF\u80FD\u662F\u6BCF\u79D2\u4E00\u6B21\u7684\u9891\u7387\u5237\u76D8\uFF1B</li><li>c. \u5173\u95ED\u670D\u52A1\u5668\u65F6\uFF1B</li><li>d. \u505Acheckpoint\u65F6\u4F1A\u628A redo\u6587\u4EF6\u4ECE checkpoint lsn\u5F00\u59CB\u7684\u4E00\u90E8\u5206undo\u65E5\u5FD7\u5237\u76D8\uFF08\u4ECEflush\u94FE\u8868\u5237\u76D8\u810F\u9875\u5230\u6570\u636E\u9875\uFF0C\u7136\u540E\u4FEE\u6539 checkpoint lsn\uFF09\uFF1B</li></ul></li></ul></li><li>\u6545\u969C\u6062\u590D <ul><li>\u7B80\u5355\u6765\u8BF4\uFF0C\u5C31\u662F\u628A\u65E5\u5FD7\u6587\u4EF6\u4E2D\u7684\u4E8B\u52A1\u72B6\u6001\u4E3A\u6D3B\u8DC3\u72B6\u6001\u7684\u65E5\u5FD7\uFF0C\u6062\u590D\u5230MySQL\u4E2D\uFF1B</li></ul></li></ul><div class="custom-container tip"><p class="custom-container-title">\u8865\u5145\u8BF4\u660E</p><p>WAL\uFF1A Write-Ahead Logging\uFF0C\u5B83\u7684\u5173\u952E\u70B9\u5C31\u662F\u5148\u5199\u65E5\u5FD7\uFF0C\u518D\u5199\u78C1\u76D8\u3002 crash-safe\uFF1A \u6545\u969C\u6062\u590D\uFF0C\u5373\u53EF\u4EE5\u4FDD\u8BC1\u5373\u4F7F\u6570\u636E\u5E93\u53D1\u751F\u5F02\u5E38\u91CD\u542F\uFF0C\u4E4B\u524D\u63D0\u4EA4\u7684\u8BB0\u5F55\u90FD\u4E0D\u4F1A\u4E22\u5931\u3002</p></div><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20230620190751.png" alt="Binlog\u4E0ERedoLog" loading="lazy"></p><h3 id="undolog" tabindex="-1"><a class="header-anchor" href="#undolog" aria-hidden="true">#</a> Undolog</h3><p>\u7565\u3002</p><p><br><br><br></p><img style="border:1px red solid;display:block;margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="\u5FAE\u4FE1\u516C\u4F17\u53F7">`,65);function n(a,r){return i}var c=e(o,[["render",n],["__file","mysql04_02.html.vue"]]);export{c as default};
