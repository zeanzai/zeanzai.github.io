const e={key:"v-1d650736",path:"/java/core/jvm/02.%E5%86%85%E5%AD%98%E7%BB%93%E6%9E%84.html",title:"02.JVM\u8FD0\u884C\u671F\u5185\u5B58\u7ED3\u6784",lang:"zh-CN",frontmatter:{title:"02.JVM\u8FD0\u884C\u671F\u5185\u5B58\u7ED3\u6784",category:["core"],tag:["jvm"],summary:'" Q\uFF1A \u5185\u5B58\u7ED3\u6784\u5C31\u5185\u5B58\u7ED3\u6784\u5457\uFF0C\u4E3A\u5565\u8FD8\u8981\u52A0\u4E00\u4E2A\u8FD0\u884C\u671F\uFF1F" " " " A\uFF1A \u5F88\u660E\u767D\u54AF\uFF0CJVM\u9664\u4E86\u8FD0\u884C\u671F\u5185\u5B58\u4EE5\u5916\uFF0C\u80AF\u5B9A\u8FD8\u6709\u6240\u8C13\u7684\u975E\u8FD0\u884C\u671F\u7684\u5185\u5B58\u5457\u3002jdk\u7684\u529F\u80FD\u4E4B\u4E00\u5C31\u662F\u628A.java\u6587\u4EF6\u7F16\u8BD1\u6210.class\u6587\u4EF6\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u5C31\u662F\u7F16\u8BD1\u8FC7\u7A0B\uFF0C\u90A3\u7F16\u8BD1\u8FC7\u7A0B\u4E5F\u662F\u9700\u8981\u5185\u5B58\u7A7A\u95F4\u7684\u3002\u6240\u4EE5\uFF0C\u6211\u4EEC\u8FD9\u91CC\u5C31\u52A0\u4E2A\u9650\u5B9A\u8BCD\uFF0C\u8FD0\u884C\u671F\u5185\u5B58\u7ED3\u6784\u3002" \u56FE\u89E3 \u903B\u8F91\u89C6\u56FE\u4E0E\u7269\u7406\u89C6\u56FE\u7684\u7406\u89E3\u53EF\u4EE5\u5BF9\u6BD4\u6570\u636E\u7ED3\u6784\u6982\u5FF5\u4E2D\u7684\u903B',head:[["meta",{property:"og:url",content:"https://zeanzai.me/java/core/jvm/02.%E5%86%85%E5%AD%98%E7%BB%93%E6%9E%84.html"}],["meta",{property:"og:site_name",content:"\u5929\u6674\u5C0F\u732A"}],["meta",{property:"og:title",content:"02.JVM\u8FD0\u884C\u671F\u5185\u5B58\u7ED3\u6784"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2023-04-17T11:01:12.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"jvm"}],["meta",{property:"article:modified_time",content:"2023-04-17T11:01:12.000Z"}]]},excerpt:"",headers:[{level:2,title:"\u56FE\u89E3",slug:"\u56FE\u89E3",children:[{level:3,title:"\u903B\u8F91\u89C6\u56FE",slug:"\u903B\u8F91\u89C6\u56FE",children:[]},{level:3,title:"\u7269\u7406\u89C6\u56FE",slug:"\u7269\u7406\u89C6\u56FE",children:[]},{level:3,title:"\u903B\u8F91\u6A21\u578B\u8865\u5145\u6A21\u578B",slug:"\u903B\u8F91\u6A21\u578B\u8865\u5145\u6A21\u578B",children:[]}]},{level:2,title:"JVM\u8FD0\u884C\u671F\u5185\u5B58\u7ED3\u6784",slug:"jvm\u8FD0\u884C\u671F\u5185\u5B58\u7ED3\u6784",children:[{level:3,title:"\u7A0B\u5E8F\u8BA1\u6570\u5668",slug:"\u7A0B\u5E8F\u8BA1\u6570\u5668",children:[]},{level:3,title:"\u865A\u62DF\u673A\u6808",slug:"\u865A\u62DF\u673A\u6808",children:[]},{level:3,title:"\u672C\u5730\u65B9\u6CD5\u6808",slug:"\u672C\u5730\u65B9\u6CD5\u6808",children:[]},{level:3,title:"\u65B9\u6CD5\u533A",slug:"\u65B9\u6CD5\u533A",children:[]},{level:3,title:"Java\u5806",slug:"java\u5806",children:[]}]},{level:2,title:"\u5BF9\u8C61\u7684\u63A2\u79D8",slug:"\u5BF9\u8C61\u7684\u63A2\u79D8",children:[{level:3,title:"\u5BF9\u8C61\u7684\u521B\u5EFA\u8FC7\u7A0B",slug:"\u5BF9\u8C61\u7684\u521B\u5EFA\u8FC7\u7A0B",children:[]},{level:3,title:"\u5BF9\u8C61\u7684\u5185\u5B58\u5206\u5E03",slug:"\u5BF9\u8C61\u7684\u5185\u5B58\u5206\u5E03",children:[]},{level:3,title:"\u5BF9\u8C61\u7684\u8BBF\u95EE\u5B9A\u4F4D",slug:"\u5BF9\u8C61\u7684\u8BBF\u95EE\u5B9A\u4F4D",children:[]},{level:3,title:"\u5BF9\u8C61\u7684\u5347\u4EE3\u7B56\u7565",slug:"\u5BF9\u8C61\u7684\u5347\u4EE3\u7B56\u7565",children:[]},{level:3,title:"\u518D\u8C08\u5BF9\u8C61\u7684\u5185\u5B58\u5206\u914D\u8FC7\u7A0B",slug:"\u518D\u8C08\u5BF9\u8C61\u7684\u5185\u5B58\u5206\u914D\u8FC7\u7A0B",children:[]},{level:3,title:"\u518D\u8C08\u56DB\u90E8\u5206\u7684\u8054\u7CFB",slug:"\u518D\u8C08\u56DB\u90E8\u5206\u7684\u8054\u7CFB",children:[]},{level:3,title:"JVM\u8FD0\u884C\u65F6\u6570\u636E\u533A",slug:"jvm\u8FD0\u884C\u65F6\u6570\u636E\u533A",children:[]},{level:3,title:"GC\u65F6\u7684\u6570\u636E\u533A",slug:"gc\u65F6\u7684\u6570\u636E\u533A",children:[]}]}],git:{createdTime:1676198013e3,updatedTime:1681729272e3,contributors:[{name:"Shawn Wang",email:"zeanzai.me@gmail.com",commits:2}]},readingTime:{minutes:14.35,words:4306},filePathRelative:"java/core/jvm/02.\u5185\u5B58\u7ED3\u6784.md"};export{e as data};
