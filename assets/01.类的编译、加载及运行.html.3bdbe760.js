import{c as a,a as l,F as e,e as s,o}from"./app.98de23b3.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";var r="/assets/2023-10-24-18-16-52.a3b244f7.png",c="/assets/2023-10-24-18-16-53.087b8f9b.jpg",d="/assets/2023-10-24-18-16-55.759c8343.png",u="/assets/2023-10-24-18-16-56.bf27f705.png";const n={},p=s('<h2 id="java\u4E2D\u8FD0\u884C\u4EE3\u7801\u7684\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#java\u4E2D\u8FD0\u884C\u4EE3\u7801\u7684\u65B9\u5F0F" aria-hidden="true">#</a> Java\u4E2D\u8FD0\u884C\u4EE3\u7801\u7684\u65B9\u5F0F</h2><p><img src="'+r+'" alt="" loading="lazy"></p><p>Java\u4E2D\u8FD0\u884C\u4EE3\u7801\u7684\u65B9\u5F0F\u5206\u4E3A\u4E24\u79CD\uFF0C<code>\u89E3\u91CA\u8FD0\u884C</code> \u548C <code>\u7F16\u8BD1\u8FD0\u884C</code>\u3002</p><p><code>\u89E3\u91CA\u8FD0\u884C</code>\u662F\u5BF9\u5B57\u8282\u7801\u6587\u4EF6\u9010\u884C\u89E3\u91CA\u6267\u884C\uFF0C\u6362\u8A00\u4E4B\uFF0C\u5C31\u662F\u4F9D\u6B21\u8BFB\u53D6.class\u6587\u4EF6\u7684\u6BCF\u4E00\u884C\uFF0C\u7136\u540E\u628A\u8BFB\u53D6\u5230\u7684\u5B57\u8282\u7801\u201C\u7FFB\u8BD1\u201D\u6210\u673A\u5668\u8BED\u8A00\u8FDB\u884C\u6267\u884C\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u200B\u6548\u7387\u4F4E\u4E0B\u3002JS\u3001JSP\u3001ASP\u7B49\u8BED\u8A00\u90FD\u662F\u89E3\u91CA\u578B\u7F16\u7A0B\u8BED\u8A00\u3002</p><p><code>\u7F16\u8BD1\u8FD0\u884C</code>\u5219\u662F\u5C06\u4E00\u79CD\u8BED\u8A00\u89C4\u8303\u8F6C\u5316\u6210\u53E6\u5916\u4E00\u79CD\u8BED\u8A00\u89C4\u8303\uFF0C\u5373\u5C06<code>\u4FBF\u4E8E\u4EBA\u7406\u89E3\u7684\u8BED\u8A00\u89C4\u8303</code>\u8F6C\u5316\u6210<code>\u673A\u5668\u5BB9\u6613\u7406\u89E3\u7684\u8BED\u8A00\u89C4\u8303</code>\u7684\u8FC7\u7A0B\u5C31\u662F\u7F16\u8BD1\u3002</p><h3 id="\u7F16\u8BD1\u5668" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u5668" aria-hidden="true">#</a> \u7F16\u8BD1\u5668</h3><p>\u7F16\u8BD1\u8FD0\u884C\u4E00\u822C\u60C5\u51B5\u4E0B\u4F1A\u6709\u4E13\u95E8\u7684\u7F16\u8BD1\u5668\u6765\u5B8C\u6210\u7F16\u8BD1\u5DE5\u4F5C\uFF0CJava\u4E2D\u6839\u636E\u7F16\u8BD1\u5668\u7684\u4F5C\u7528\u628A\u7F16\u8BD1\u5668\u5206\u4E3A\u4E09\u7C7B\uFF1A</p><ul><li>\u524D\u7AEF\u7F16\u8BD1\u5668\uFF0C\u4E3B\u8981\u4F5C\u7528\u662F\u628A.java\u6587\u4EF6\u7F16\u8BD1\u6210.class\u6587\u4EF6\uFF0C\u5982javac\u3001ECJ\u7B49\uFF1B</li><li>\u540E\u7AEF\u7F16\u8BD1\u5668\uFF08JIT\u5373\u65F6\u7F16\u8BD1\u5668\uFF09\uFF0C\u4E3B\u8981\u4F5C\u7528\u662F\u628A\u5B57\u8282\u7801\u6587\u4EF6\u8F6C\u53D8\u6210\u53EF\u6267\u884C\u7684\u673A\u5668\u7801\uFF0C\u4E3B\u8981\u6709\u4E24\u79CDC1\u548CC2\u7F16\u8BD1\u5668\uFF0CC1\u7684\u542F\u52A8\u65F6\u95F4\u6BD4C2\u542F\u52A8\u65F6\u95F4\u77ED\uFF0C\u7CFB\u7EDF\u7A33\u5B9A\u540E\uFF0CC2\u6267\u884C\u6548\u7387\u6BD4C1\u9AD8\uFF1B</li><li>\u9759\u6001\u63D0\u524D\u7F16\u8BD1\u5668\uFF08AOT\u7F16\u8BD1\u5668\uFF09\uFF0C\u200B\u76F4\u63A5\u628A.java\u6587\u4EF6\u8F6C\u53D8\u6210\u53EF\u6267\u884C\u7684\u673A\u5668\u7801\uFF0C\u200B\u5305\u62ECGCJ\u7B49\uFF0C\u8FD8\u5904\u4E8E\u5B9E\u9A8C\u9636\u6BB5\uFF1B</li></ul><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>HotSpotJVM\u662F\u4E24\u79CD\u65B9\u5F0F\u5E76\u5B58\u7684\u3002\u8FD0\u884C\u8FC7\u7A0B\u200B\u539F\u7406\u5927\u6982\u662F\u8FD9\u6837\u7684\uFF1A\u7B49\u5F85\u6240\u6709\u7684\u4EE3\u7801\u7F16\u8BD1\u5B8C\u6210\u518D\u8FDB\u884C\u8FD0\u884C\u662F\u4E0D\u503C\u5F97\u7684\uFF0C\u9879\u76EE\u542F\u52A8\u524D\u671F\u5C31\u8981\u4F7F\u7528\u89E3\u91CA\u5668\u89E3\u91CA\u6267\u884C\u4E00\u4E9B\u4EE3\u7801\uFF0C\u540C\u65F6\u4E5F\u4F1A\u9488\u5BF9\u6267\u884C\u5230\u7684\u70ED\u70B9\u4EE3\u7801\u8FDB\u884C\u63A2\u6D4B\uFF0C\u5BF9\u70ED\u70B9\u4EE3\u7801\u518D\u8FDB\u884C\u7F16\u8BD1\u6267\u884C\uFF0C\u76F8\u5F53\u4E8E\u5BF9\u4E8C\u8005\u8FDB\u884C\u53D6\u957F\u8865\u77ED\u3002</p><p>\u4F7F\u7528\u4EC0\u4E48\u6280\u672F\u63A2\u6D4B\u70ED\u70B9\u4EE3\u7801\uFF1F</p><ul><li>\u200B\u4F7F\u7528<code>\u65B9\u6CD5\u8C03\u7528\u8BA1\u6570\u5668</code>\u200B\u7EDF\u8BA1\u65B9\u6CD5\u7684\u8C03\u7528\u6B21\u6570\uFF0C\u914D\u7F6E\u53C2\u6570\uFF1A \u200B-XX:CompileThreshold</li><li>\u4F7F\u7528<code>\u200B\u56DE\u8FB9\u8BA1\u6570\u5668</code>\u200B\u7EDF\u8BA1\u5FAA\u73AF\u4F53\u7684\u6267\u884C\u6B21\u6570</li></ul><p>\u5BF9\u70ED\u70B9\u4EE3\u7801\u7684\u4F18\u5316\u624B\u6BB5\uFF1F</p><ul><li>\u200B\u6808\u4E0A\u5206\u914D</li><li>\u540C\u6B65\u6D88\u9664</li><li>\u200B\u6807\u91CF\u66FF\u6362</li></ul></div><hr><h2 id="\u7C7B\u7684\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7684\u52A0\u8F7D" aria-hidden="true">#</a> \u7C7B\u7684\u52A0\u8F7D</h2><p><img src="'+c+'" alt="" loading="lazy"></p><ul><li>\u52A0\u8F7D\u8FC7\u7A0B <ul><li>\u901A\u8FC7\u5168\u9650\u5B9A\u547D\u540D\u83B7\u53D6\u5B57\u8282\u7801\u6587\u4EF6</li><li>\u5C06\u5B57\u8282\u7801\u6587\u4EF6\u4E2D\u7684\u7C7B\u5143\u6570\u636E\u4FE1\u606F\u52A0\u8F7D\u5230\u8FD0\u884C\u65F6\u6570\u636E\u533A\u7684\u65B9\u6CD5\u533A</li><li>\u5728\u8FD0\u884C\u65F6\u6570\u636E\u533A\u7684\u5806\u4E2D\u521B\u5EFA\u4E00\u4E2Ajava.lang.Class\u7C7B\u7684\u5BF9\u8C61</li></ul></li><li>\u8FD0\u884C\u65F6\u6570\u636E\u533A\u7684\u5206\u914D <ul><li>\u65B9\u6CD5\u533A\u4E0A\u5C01\u88C5\u7C7B\u7684\u5143\u6570\u636E\u4FE1\u606F</li><li>\u5806\u533A\u4E0A\u5206\u914Dclass\u5BF9\u8C61</li></ul></li><li>\u52A0\u8F7D\u65F6\u673A\uFF1A\u4EC0\u4E48\u65F6\u5019\u5F00\u59CB\u52A0\u8F7D\uFF1F <ul><li>\u9884\u52A0\u8F7D\uFF1A\u5E76\u4E0D\u4E00\u5B9A\u9996\u6B21\u4F7F\u7528\u624D\u8FDB\u884C\u52A0\u8F7D\uFF0Cjvm\u4F1A\u5728\u9884\u5224\u5C31\u8FDB\u884C\u52A0\u8F7D</li><li>\u65F6\u673A\uFF1A <ul><li><code>\u4F7F\u7528new\u5173\u952E\u5B57\u5B9E\u4F8B\u5316\u5BF9\u8C61</code>\u3001<code>\u8BFB\u53D6\u6216\u8BBE\u7F6E\u4E00\u4E2A\u7C7B\u7684\u9759\u6001\u5B57\u6BB5\uFF08\u88ABfinal\u4FEE\u9970\u3001\u5DF2\u5728\u7F16\u8BD1\u671F\u628A\u7ED3\u679C\u653E\u5165\u5E38\u91CF\u6C60\u7684\u9759\u6001\u5B57\u6BB5\u9664\u5916\uFF09</code>\u4EE5\u53CA<code>\u8C03\u7528\u4E00\u4E2A\u7C7B\u7684\u9759\u6001\u65B9\u6CD5</code>\u65F6</li><li>\u4F7F\u7528java.lang.reflect\u5305\u7684\u65B9\u6CD5\u5BF9\u7C7B\u8FDB\u884C\u53CD\u5C04\u8C03\u7528\u65F6</li><li>\u521D\u59CB\u5316\u4E00\u4E2A\u7C7B\u4F46\u53D1\u73B0\u5176\u7236\u7C7B\u8FD8\u6CA1\u6709\u8FDB\u884C\u521D\u59CB\u5316\u65F6</li><li>\u542F\u52A8jvm\u65F6\u5148\u52A0\u8F7D\u5305\u542Bmain()\u65B9\u6CD5\u7684\u542F\u52A8\u7C7B</li><li>\u5F53\u4F7F\u7528JDK1.7\u7684\u52A8\u6001\u8BED\u8A00\u652F\u6301\u65F6\uFF0C\u5982\u679C\u4E00\u4E2Ajava.lang.invoke.MethodHandle\u5B9E\u4F8B\u6700\u540E\u7684\u89E3\u6790\u7ED3\u679CREF_getStatic\u3001REF_putStatic\u3001REF_invokeStatic\u7684\u65B9\u6CD5\u53E5\u67C4\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u65B9\u6CD5\u53E5\u67C4\u6240\u5BF9\u5E94\u7684\u7C7B\u6CA1\u6709\u8FDB\u884C\u8FC7\u521D\u59CB\u5316\uFF0C\u5219\u9700\u8981\u5148\u89E6\u53D1\u5176\u521D\u59CB\u5316</li></ul></li><li>\u62A5\u9519\uFF1A\u5982\u679C\u672A\u52A0\u8F7D\uFF0C\u5219\u5728\u4F7F\u7528\u65F6\u4F1A\u62A5\u9519\uFF08LinkageError\u9519\u8BEF\uFF09\uFF1B\u5982\u679C\u4E00\u76F4\u6CA1\u6709\u88AB\u4F7F\u7528\uFF0C\u5373\u4FBF\u672A\u52A0\u8F7D\u4E5F\u4E0D\u4F1A\u62A5\u9519</li></ul></li><li>\u52A0\u8F7D\u9014\u5F84\uFF1A\u53EF\u4EE5\u4ECE\u54EA\u4E9B\u5730\u65B9\u52A0\u8F7D\u7C7B\u5230jvm\u4E2D\uFF1F <ul><li>\u672C\u5730</li><li>\u7F51\u7EDC</li><li>\u6570\u636E\u5E93</li><li>jar\u3001zip\u3001war...</li><li>\u52A8\u6001\u7F16\u8BD1</li></ul></li><li>\u52A0\u8F7D\u65B9\u5F0F\uFF1A\u53EF\u4EE5\u901A\u8FC7\u54EA\u4E9B\u65B9\u5F0F\u628A\u7C7B\u52A0\u8F7D\u5230jvm\u4E2D\uFF1F <ul><li>\u547D\u4EE4\u884C\u542F\u52A8\u5E94\u7528\u65F6\u5019\u7531JVM\u521D\u59CB\u5316\u52A0\u8F7D</li><li>\u901A\u8FC7Class.forName()\u65B9\u6CD5\u52A8\u6001\u52A0\u8F7D</li><li>\u901A\u8FC7ClassLoader.loadClass()\u65B9\u6CD5\u52A8\u6001\u52A0\u8F7D</li></ul></li><li>\u7C7B\u52A0\u8F7D\u5668 <ul><li>\u542F\u52A8\u7C7B\u52A0\u8F7D\u5668\uFF1ABootstrap ClassLoader <ul><li>\u4F7F\u7528C++\u5B9E\u73B0\uFF08\u4EC5\u9650\u4E8EHotspot\uFF09</li><li>\u662Fjvm\u7684\u4E00\u90E8\u5206</li><li>\u65E0\u6CD5\u88ABjava\u7A0B\u5E8F\u76F4\u63A5\u4F7F\u7528</li><li>\u8D1F\u8D23\u52A0\u8F7D\u7684\u5185\u5BB9 <ul><li>jre/lib \u4E0B\u7684\u7C7B\u5E93</li><li>\u88AB-Xbootclasspath\u53C2\u6570\u6307\u5B9A\u7684\u8DEF\u5F84\u4E2D\u7684\u4E14\u80FD\u88AB\u865A\u62DF\u673A\u8BC6\u522B\u7684\u7C7B\u5E93</li></ul></li><li>\u8D1F\u8D23\u52A0\u8F7D jre/lib \u88AB-Xbootclasspath\u53C2\u6570\u6307\u5B9A\u7684\u8DEF\u5F84\u4E2D\u7684</li></ul></li><li>\u6269\u5C55\u7C7B\u52A0\u8F7D\u5668\uFF1AExtension ClassLoader <ul><li>\u7531sun.misc.Launcher$ExtClassLoader\u5B9E\u73B0</li><li>\u5F00\u53D1\u8005\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528</li><li>\u8D1F\u8D23\u52A0\u8F7D\u7684\u5185\u5BB9 <ul><li>jre/lib/ext\u76EE\u5F55\u4E0B\u7684\u7C7B\u5E93</li><li>\u7531java.ext.dirs\u7CFB\u7EDF\u53D8\u91CF\u6307\u5B9A\u7684\u8DEF\u5F84\u4E2D\u7684\u6240\u6709\u7C7B\u5E93\uFF08\u5982javax.\u5F00\u5934\u7684\u7C7B\uFF09</li></ul></li></ul></li><li>\u5E94\u7528\u7A0B\u5E8F\u7C7B\u52A0\u8F7D\u5668\uFF1AApplication ClassLoader <ul><li>\u7531sun.misc.Launcher$AppClassLoader\u6765\u5B9E\u73B0</li><li>\u5F00\u53D1\u8005\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528</li><li>\u8D1F\u8D23\u52A0\u8F7D\u7528\u6237\u7C7B\u8DEF\u5F84\uFF08ClassPath\uFF09\u6240\u6307\u5B9A\u7684\u7C7B</li><li>\u5982\u679C\u672A\u81EA\u5B9A\u4E49\u52A0\u8F7D\u5668\uFF0C\u90A3\u5B83\u5C31\u662F\u9ED8\u8BA4\u52A0\u8F7D\u5668</li></ul></li><li>\u81EA\u5B9A\u4E49\u7C7B\u52A0\u8F7D\u5668\uFF1A <ul><li>\u5B9A\u5236\u5316</li></ul></li></ul></li><li>\u52A0\u8F7D\u539F\u5219\uFF1A\u52A0\u8F7D\u65F6\u6709\u54EA\u4E9B\u539F\u5219\uFF1F <ul><li>\u5168\u76D8\u8D1F\u8D23\uFF1A\u52A0\u8F7D\u5668\u5728\u52A0\u8F7D\u7C7B\u65F6\uFF0C\u8FDE\u540C\u7C7B\u7684\u4F9D\u8D56\u548C\u5F15\u7528\u4E5F\u4E00\u5E76\u52A0\u8F7D</li><li>\u53CC\u4EB2\u59D4\u6D3E\uFF1A\u4F7F\u7528\u67D0\u4E00\u4E2A\u52A0\u8F7D\u5668\u52A0\u8F7D\u65F6\uFF0C\u4F1A\u59D4\u6258\u7236\u7C7B\u52A0\u8F7D\u5668\u5148\u8FDB\u884C\u52A0\u8F7D <ul><li>\u4F18\u70B9\uFF1A\u9632\u6B62\u5185\u5B58\u4E2D\u51FA\u73B0\u591A\u4EFD\u540C\u6837\u7684\u5B57\u8282\u7801; \u63D0\u9AD8\u5B89\u5168\u6027</li><li>\u6709\u54EA\u4E9B\u7834\u574F\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u7684\u6848\u4F8B\uFF1F</li></ul></li><li>\u7F13\u5B58\u673A\u5236\uFF1A\u52A0\u8F7D\u8FC7\u7684Class\u90FD\u4F1A\u88AB\u7F13\u5B58</li></ul></li></ul><h2 id="\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C" aria-hidden="true">#</a> \u6267\u884C</h2><p>JVM\u662F\u57FA\u4E8E\u6808\u7684\u4F53\u7CFB\u7ED3\u6784\u6765\u6267\u884Cclass\u5B57\u8282\u7801\u7684\u3002\u7EBF\u7A0B\u521B\u5EFA\u540E\uFF0C\u90FD\u4F1A\u4EA7\u751F\u7A0B\u5E8F\u8BA1\u6570\u5668\uFF08PC\uFF09\u548C\u6808\uFF08Stack\uFF09\uFF0C\u7A0B\u5E8F\u8BA1\u6570\u5668\u5B58\u653E\u4E0B\u4E00\u6761\u8981\u6267\u884C\u7684\u6307\u4EE4\u5728\u65B9\u6CD5\u5185\u7684\u504F\u79FB\u91CF\uFF0C\u6808\u4E2D\u5B58\u653E\u4E00\u4E2A\u4E2A\u6808\u5E27\uFF0C\u6BCF\u4E2A\u6808\u5E27\u5BF9\u5E94\u7740\u6BCF\u4E2A\u65B9\u6CD5\u7684\u6BCF\u6B21\u8C03\u7528\uFF0C\u800C\u6808\u5E27\u53C8\u662F\u6709\u5C40\u90E8\u53D8\u91CF\u533A\u548C\u64CD\u4F5C\u6570\u6808\u4E24\u90E8\u5206\u7EC4\u6210\uFF0C\u5C40\u90E8\u53D8\u91CF\u533A\u7528\u4E8E\u5B58\u653E\u65B9\u6CD5\u4E2D\u7684\u5C40\u90E8\u53D8\u91CF\u548C\u53C2\u6570\uFF0C\u64CD\u4F5C\u6570\u6808\u4E2D\u7528\u4E8E\u5B58\u653E\u65B9\u6CD5\u6267\u884C\u8FC7\u7A0B\u4E2D\u4EA7\u751F\u7684\u4E2D\u95F4\u7ED3\u679C</p><p><img src="'+d+'" alt="" loading="lazy"></p><ul><li>\u6808\u5E27\u7ED3\u6784 <img src="'+u+'" alt="" loading="lazy"></li></ul><h2 id="\u5BF9\u8C61\u7684\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u7684\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> \u5BF9\u8C61\u7684\u751F\u547D\u5468\u671F</h2><ul><li>\u52A0\u8F7D\uFF1A\u7B2C\u4E00\u9636\u6BB5</li><li>\u94FE\u63A5\uFF1A\u7B2C\u4E8C\u9636\u6BB5\uFF0C\u5206\u4E3A\u4E09\u4E2A\u6B65\u9AA4 <ul><li>\u9A8C\u8BC1\uFF1A\u6587\u4EF6\u683C\u5F0F\u3001\u5143\u6570\u636E\u3001\u5B57\u8282\u7801\u3001\u7B26\u53F7\u5F15\u7528\u9A8C\u8BC1</li><li>\u51C6\u5907\uFF1A\u4E3A\u7C7B\u7684\u9759\u6001\u53D8\u91CF\uFF08\u4E5F\u79F0\u4E3A\u7C7B\u53D8\u91CF\uFF09\u5206\u914D\u5185\u5B58\uFF0C\u5E76\u5C06\u5176\u521D\u59CB\u5316\u4E3A\u9ED8\u8BA4\u503C</li><li>\u89E3\u6790\uFF1A\u628A\u7C7B\u4E2D\u7684\u7B26\u53F7\u5F15\u7528\u8F6C\u6362\u4E3A\u76F4\u63A5\u5F15\u7528</li></ul></li><li>\u521D\u59CB\u5316\uFF1A\u7B2C\u4E09\u9636\u6BB5\uFF0C\u4E3A\u7C7B\u7684\u9759\u6001\u53D8\u91CF\u8D4B\u4E88\u6B63\u786E\u7684\u521D\u59CB\u503C <ul><li>\u7C7B\u521D\u59CB\u5316\u7684\u65F6\u673A\uFF1A\u53EA\u6709\u5F53\u5BF9\u7C7B\u7684\u4E3B\u52A8\u4F7F\u7528\u7684\u65F6\u5019\u624D\u4F1A\u5BFC\u81F4\u7C7B\u7684\u521D\u59CB\u5316 <ul><li>\u521B\u5EFA\u7C7B\u7684\u5B9E\u4F8B\uFF0C\u4E5F\u5C31\u662Fnew\u7684\u65B9\u5F0F</li><li>\u8BBF\u95EE\u67D0\u4E2A\u7C7B\u6216\u63A5\u53E3\u7684\u9759\u6001\u53D8\u91CF\uFF0C\u6216\u8005\u5BF9\u8BE5\u9759\u6001\u53D8\u91CF\u8D4B\u503C</li><li>\u8C03\u7528\u7C7B\u7684\u9759\u6001\u65B9\u6CD5</li><li>\u53CD\u5C04\uFF08\u5982Class.forName(\u201Ccom.shengsiyuan.Test\u201D)\uFF09</li><li>\u521D\u59CB\u5316\u67D0\u4E2A\u7C7B\u7684\u5B50\u7C7B\uFF0C\u5219\u5176\u7236\u7C7B\u4E5F\u4F1A\u88AB\u521D\u59CB\u5316</li><li>Java\u865A\u62DF\u673A\u542F\u52A8\u65F6\u88AB\u6807\u660E\u4E3A\u542F\u52A8\u7C7B\u7684\u7C7B\uFF08Java Test\uFF09\uFF0C\u76F4\u63A5\u4F7F\u7528java.exe\u547D\u4EE4\u6765\u8FD0\u884C\u67D0\u4E2A\u4E3B\u7C7B</li></ul></li></ul></li><li>\u4F7F\u7528\uFF1Anew\u51FA\u5BF9\u8C61\u7A0B\u5E8F\u4E2D\u4F7F\u7528</li><li>\u5378\u8F7D\uFF1A\u6267\u884C\u5783\u573E\u56DE\u6536 <ul><li>\u65F6\u673A\uFF1A\u4EC0\u4E48\u65F6\u5019\u5378\u8F7Djava\u7C7B\uFF1F <ul><li>\u6267\u884C\u4E86System.exit()\u65B9\u6CD5</li><li>\u7A0B\u5E8F\u6B63\u5E38\u6267\u884C\u7ED3\u675F</li><li>\u7A0B\u5E8F\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\u9047\u5230\u4E86\u5F02\u5E38\u6216\u9519\u8BEF\u800C\u5F02\u5E38\u7EC8\u6B62</li><li>\u7531\u4E8E\u64CD\u4F5C\u7CFB\u7EDF\u51FA\u73B0\u9519\u8BEF\u800C\u5BFC\u81F4Java\u865A\u62DF\u673A\u8FDB\u7A0B\u7EC8\u6B62</li></ul></li></ul></li></ul><hr>',20),h=l("br",null,null,-1),_=l("br",null,null,-1),m=l("br",null,null,-1),v=["src"];function j(i,C){return o(),a(e,null,[p,l("p",null,[h,_,m,l("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:i.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,v)])],64)}var b=t(n,[["render",j],["__file","01.\u7C7B\u7684\u7F16\u8BD1\u3001\u52A0\u8F7D\u53CA\u8FD0\u884C.html.vue"]]);export{b as default};
