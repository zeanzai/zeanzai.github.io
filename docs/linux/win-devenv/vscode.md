---
"title": "VSCODE"
category:
  - "VSCODE"
tag:
  - "vscode"
---


## 配置代码片段

有时候想要在vscode中完成类似于idea中的代码的快速生成，比如，在idea中输入main会自动完成main方法的创建。其实，在vscode中也可以完成类似的功能。

![20231007173745](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20231007173745.png)

在弹出的代码片段配置窗口中，直接找到 markdown.json 文件： 

![20231007173759](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20231007173759.png)

在打开的编辑窗口中添加下面内容：

```
{
	// Place your snippets for markdown here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	// "Print to console": {
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
	// }
	"Print to console": {
		"prefix": "md",
		"body": [
			"---",
			"\"title\": \"$1\"",
			"category:",
			"  - \"$2\"",
			"tag:",
			"  - \"$3\"",
			"---",
			"",
			"$4",
			"",
			"",
			"<br /><br /><br />",
			"<img style="border:1px red solid; display:block; margin:0 auto;" :src="$withBase('/qrcode.jpg')" alt="微信公众号" />",
			"",
			"",
			""
		],
		"description": "markdown 文件模板"
	}
}
```

如果出现没有生效的问题，可以打开 setting.json 的配置文件，然后在此文件中添加下面内容：

![20231007173833](https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20231007173833.png)

```

"[markdown]": {
    "editor.quickSuggestions": {
        "other": true,
        "comments": true,
        "strings": true
    },
    "editor.acceptSuggestionOnEnter": "on"
}
```



<br /><br /><br />
<img style="border:1px red solid; display:block; margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="微信公众号" />


