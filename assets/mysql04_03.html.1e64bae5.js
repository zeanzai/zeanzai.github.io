const e={key:"v-4df87e7e",path:"/java/middleware/mysql/mysql04/mysql04_03.html",title:"InnoDB\u4E2D\u7684\u78C1\u76D8\u7ED3\u6784",lang:"zh-CN",frontmatter:{title:"InnoDB\u4E2D\u7684\u78C1\u76D8\u7ED3\u6784",category:["MySQL"],tag:["\u6570\u636E\u5E93"],summary:'\u78C1\u76D8\u4E0A\u7684\u6587\u4EF6 \u4E00\u4E2A\u8868\u7A7A\u95F4\u5177\u6709\u4E00\u4E2A\u552F\u4E00\u7684\u8868\u7A7A\u95F4ID\uFF0C\u8868\u7A7A\u95F4\u6839\u636E\u6570\u636E\u5B58\u653E\u7684\u7C7B\u578B\u4E0D\u4E00\u6837\uFF0C\u5212\u5206\u4E3A\uFF1A \u7CFB\u7EDF\u8868\u7A7A\u95F4; \u72EC\u7ACB\u8868\u7A7A\u95F4; undo\u8868\u7A7A\u95F4; \u901A\u7528\u8868\u7A7A\u95F4; \u4E34\u65F6\u8868\u7A7A\u95F4; " schema\uFF1A schema\u5728\u6570\u636E\u5E93\u4E2D\u8868\u793A\u7684\u662F\u6570\u636E\u5E93\u5BF9\u8C61\u96C6\u5408\uFF0C\u5B83\u5305\u542B\u4E86\u5404\u79CD\u5BF9\u50CF\uFF0C\u6BD4\u5982\uFF1A\u8868\uFF0C\u89C6\u56FE\uFF0C\u5B58\u50A8\u8FC7\u7A0B\uFF0C\u7D22\u5F15\u7B49\u7B49\u3002" \u8868\u7A7A\u95F4\u3001\u6BB5\u3001\u533A\u3001\u9875\u3001\u884C \u4ECE\u4E0A\u56FE\u53EF\u77E5\uFF1A; \u6BCF\u4E2A\u72EC\u7ACB\u8868\u7A7A\u95F4\u90FD\u5BF9\u5E94\u78C1\u76D8\u4E0A\u7684\u4E00',head:[["meta",{property:"og:url",content:"https://zeanzai.me/java/middleware/mysql/mysql04/mysql04_03.html"}],["meta",{property:"og:site_name",content:"\u5929\u6674\u5C0F\u732A"}],["meta",{property:"og:title",content:"InnoDB\u4E2D\u7684\u78C1\u76D8\u7ED3\u6784"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2023-08-17T04:43:51.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"\u6570\u636E\u5E93"}],["meta",{property:"article:modified_time",content:"2023-08-17T04:43:51.000Z"}]]},excerpt:"",headers:[{level:2,title:"\u78C1\u76D8\u4E0A\u7684\u6587\u4EF6",slug:"\u78C1\u76D8\u4E0A\u7684\u6587\u4EF6",children:[]},{level:2,title:"\u8868\u7A7A\u95F4\u3001\u6BB5\u3001\u533A\u3001\u9875\u3001\u884C",slug:"\u8868\u7A7A\u95F4\u3001\u6BB5\u3001\u533A\u3001\u9875\u3001\u884C",children:[]},{level:2,title:"Row\u7684\u7EC4\u7EC7\u5F62\u5F0F",slug:"row\u7684\u7EC4\u7EC7\u5F62\u5F0F",children:[]},{level:2,title:"Page\u7684\u7EC4\u7EC7\u5F62\u5F0F",slug:"page\u7684\u7EC4\u7EC7\u5F62\u5F0F",children:[{level:3,title:"File Header",slug:"file-header",children:[]},{level:3,title:"Page Header",slug:"page-header",children:[]},{level:3,title:"File Trailer",slug:"file-trailer",children:[]},{level:3,title:"\u6570\u636E\u5806\u533A",slug:"\u6570\u636E\u5806\u533A",children:[]}]},{level:2,title:"\u5176\u4ED6",slug:"\u5176\u4ED6",children:[{level:3,title:"\u591A\u884C\u6570\u636E\u7684\u7EC4\u7EC7\u5F62\u5F0F",slug:"\u591A\u884C\u6570\u636E\u7684\u7EC4\u7EC7\u5F62\u5F0F",children:[]},{level:3,title:"\u591A\u884C\u6570\u636E\u5728\u5355\u9875\u4E0A\u7684\u7EC4\u7EC7\u5F62\u5F0F",slug:"\u591A\u884C\u6570\u636E\u5728\u5355\u9875\u4E0A\u7684\u7EC4\u7EC7\u5F62\u5F0F",children:[]},{level:3,title:"\u591A\u4E2A\u9875\u4E4B\u95F4\u7684\u7EC4\u7EC7\u5F62\u5F0F",slug:"\u591A\u4E2A\u9875\u4E4B\u95F4\u7684\u7EC4\u7EC7\u5F62\u5F0F",children:[]},{level:3,title:"\u9875\u5185\u6570\u636E\u8BB0\u5F55\u7684\u67E5\u8BE2",slug:"\u9875\u5185\u6570\u636E\u8BB0\u5F55\u7684\u67E5\u8BE2",children:[]}]},{level:2,title:"\u67E5\u627E\u4E00\u6761\u6570\u636E\u7684\u8FC7\u7A0B",slug:"\u67E5\u627E\u4E00\u6761\u6570\u636E\u7684\u8FC7\u7A0B",children:[]},{level:2,title:"\u603B\u7ED3",slug:"\u603B\u7ED3",children:[]},{level:2,title:"\u53C2\u8003",slug:"\u53C2\u8003",children:[]}],git:{createdTime:1686377605e3,updatedTime:1692247431e3,contributors:[{name:"zeanzai",email:"zeanzai.me@gmail.com",commits:3}]},readingTime:{minutes:12.9,words:3871},filePathRelative:"java/middleware/mysql/mysql04/mysql04_03.md"};export{e as data};
