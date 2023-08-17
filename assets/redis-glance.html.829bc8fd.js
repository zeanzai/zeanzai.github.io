import{e as t}from"./app.ea0bfdcf.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const e={},r=t('<ul><li>\u5355\u673A\u7248\u90E8\u7F72\u53CA\u53EF\u89C6\u5316\u64CD\u4F5C\u53F0</li><li>\u5E95\u5C42\u6570\u636E\u7ED3\u6784\u4E0E\u76F8\u5173\u7B97\u6CD5\u5206\u6790</li><li>redis\u5BF9\u8C61\u7684\u5E95\u5C42\u5E95\u5C42\u6570\u636E\u7ED3\u6784\uFF08\u8F6C\u6362\u6570\u636E\u7ED3\u6784\u7684\u6761\u4EF6\u53CA\u914D\u7F6E\u53C2\u6570\uFF09\u3001\u64CD\u4F5C\u547D\u4EE4\u53CA\u5176\u65F6\u95F4\u590D\u6742\u5EA6\u3001\u5BF9\u8C61\u7684\u4F7F\u7528\u3001\u5E94\u7528\u573A\u666F\u53CA\u76F8\u5173\u7279\u6B8A\u5E94\u7528\u573A\u666F</li><li>\u7279\u6B8A\u7279\u6027\uFF1A\u4E8B\u52A1\u3001\u7BA1\u9053\u6280\u672F\u3001\u8FED\u4EE3\u5668</li><li>\u5185\u5B58\u6DD8\u6C70\u673A\u5236\u4E0E\u6301\u4E45\u5316\u673A\u5236\uFF08AOP\u3001RDB\u3001\u6DF7\u5408\u6301\u4E45\u5316\u673A\u5236\u3001\u91CD\u5199\uFF09</li><li>\u751F\u4EA7\u73AF\u5883\u8FD0\u7EF4\uFF08\u4E09\u79CD\u90E8\u7F72\u65B9\u5F0F\uFF1A\u4E3B\u4ECE\u6A21\u5F0F\u3001\u96C6\u7FA4\u6A21\u5F0F\u3001\u54E8\u5175\u6A21\u5F0F\uFF1B\u6162\u67E5\u8BE2\u65E5\u5FD7\u5206\u6790\u3001\u6027\u80FD\u6D4B\u8BD5\u3001\u6027\u80FD\u4F18\u5316\uFF09</li><li>redis\u751F\u4EA7\u95EE\u9898\u53CA\u89E3\u51B3\u65B9\u6848</li></ul><h2 id="\u672C\u5730\u7F13\u5B58vs\u5206\u5E03\u5F0F\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u7F13\u5B58vs\u5206\u5E03\u5F0F\u7F13\u5B58" aria-hidden="true">#</a> \u672C\u5730\u7F13\u5B58VS\u5206\u5E03\u5F0F\u7F13\u5B58</h2><table><thead><tr><th></th><th>\u672C\u5730\u7F13\u5B58</th><th>\u5206\u5E03\u5F0F\u7F13\u5B58</th></tr></thead><tbody><tr><td>\u542B\u4E49</td><td>\u4E0E\u5E94\u7528\u7A0B\u5E8F\u5728\u540C\u4E00\u53F0\u4E3B\u673A\u8282\u70B9\u4E0A\uFF0C\u591A\u662F\u8FDB\u7A0B\u95F4\u8BBF\u95EE\uFF0C\u4E0EJVM\u751F\u547D\u5468\u671F\u4E00\u81F4\uFF0C\u5927\u591A\u4E0D\u4F1A\u4EA7\u751F\u7F51\u7EDCIO\uFF0C\u56E0\u6B64\u8BBF\u95EE\u901F\u5EA6\u66F4\u5FEB</td><td>\u5927\u591A\u5177\u5907\u72EC\u7ACB\u90E8\u7F72\u7684\u4E3B\u673A\u8282\u70B9\uFF0C\u8DE8\u8FDB\u7A0B\u8BBF\u95EE\uFF0C\u4F1A\u4EA7\u751F\u7F51\u7EDCIO\uFF0C\u8BBF\u95EE\u901F\u5EA6\u8F83\u672C\u5730\u7F13\u5B58\u66F4\u6162\uFF0C\u652F\u6301\u7684\u6570\u636E\u7ED3\u6784\u66F4\u591A</td></tr><tr><td>\u6301\u4E45\u6027</td><td>\u5927\u591A\u4E0D\u5177\u5907\u6301\u4E45\u6027\uFF0C\u5B58\u5728\u7684\u751F\u547D\u5468\u671F\u4E0EJVM\u7684\u751F\u547D\u5468\u671F\u4E00\u81F4</td><td>\u6839\u636E\u5206\u5E03\u5F0F\u7F13\u5B58\u7684\u6280\u672F\u9009\u578B\u800C\u5B9A\uFF0C\u5982redis\u5177\u6709\u5B8C\u5584\u7684\u6301\u4E45\u5316\u673A\u5236</td></tr><tr><td>\u5B58\u50A8\u7A7A\u95F4</td><td>\u53D7JVM\u5806\u7A7A\u95F4\u5927\u5C0F\u9650\u5236</td><td>\u53D7\u90E8\u7F72\u8282\u70B9\u7684\u7269\u7406\u4E3B\u673A\u7684\u5185\u5B58\u5927\u5C0F\u9650\u5236</td></tr><tr><td>\u6280\u672F\u9009\u578B</td><td>\u5B9E\u73B0\u7B80\u5355\uFF0C\u5728\u9879\u76EE\u4E2D\u96C6\u6210\u76F8\u5173\u7684\u7EC4\u4EF6\u5373\u53EF\uFF0C\u5982ehcache\u3001guava\u7B49</td><td>\u5B9E\u73B0\u4E5F\u8F83\u4E3A\u7B80\u5355\uFF0C\u5982Redis\u3001Memercached\u7B49</td></tr><tr><td>\u9002\u7528\u573A\u666F</td><td>\u9002\u7528\u4E8E\u8BFB\u591A\u5199\u5C11\u7684\uFF0C\u53D8\u66F4\u8F83\u5C11\u7684\u4E1A\u52A1\u573A\u666F\uFF0C\u6BD4\u5982\u6570\u636E\u5B57\u5178\u7B49</td><td>\u652F\u6301\u66F4\u591A\u7684\u4E1A\u52A1\u573A\u666F</td></tr></tbody></table><ul><li>\u5171\u540C\u70B9\uFF1A\u90FD\u4F1A\u4EA7\u751F\u6570\u636E\u4E00\u81F4\u6027\u95EE\u9898</li></ul><h2 id="\u672C\u5730\u7F13\u5B58-ehcache\u7684\u5B9E\u8DF5" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u7F13\u5B58-ehcache\u7684\u5B9E\u8DF5" aria-hidden="true">#</a> \u672C\u5730\u7F13\u5B58-Ehcache\u7684\u5B9E\u8DF5</h2><hr><p><br><br><br><img style="border:1px red solid;display:block;margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="\u5FAE\u4FE1\u516C\u4F17\u53F7"></p>',7);function i(a,h){return r}var s=d(e,[["render",i],["__file","redis-glance.html.vue"]]);export{s as default};
