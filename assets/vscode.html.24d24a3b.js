import{e as n}from"./app.77a131fa.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const t={},a=n(`<h2 id="\u914D\u7F6E\u4EE3\u7801\u7247\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u4EE3\u7801\u7247\u6BB5" aria-hidden="true">#</a> \u914D\u7F6E\u4EE3\u7801\u7247\u6BB5</h2><p>\u6709\u65F6\u5019\u60F3\u8981\u5728vscode\u4E2D\u5B8C\u6210\u7C7B\u4F3C\u4E8Eidea\u4E2D\u7684\u4EE3\u7801\u7684\u5FEB\u901F\u751F\u6210\uFF0C\u6BD4\u5982\uFF0C\u5728idea\u4E2D\u8F93\u5165main\u4F1A\u81EA\u52A8\u5B8C\u6210main\u65B9\u6CD5\u7684\u521B\u5EFA\u3002\u5176\u5B9E\uFF0C\u5728vscode\u4E2D\u4E5F\u53EF\u4EE5\u5B8C\u6210\u7C7B\u4F3C\u7684\u529F\u80FD\u3002</p><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20231007173745.png" alt="20231007173745" loading="lazy"></p><p>\u5728\u5F39\u51FA\u7684\u4EE3\u7801\u7247\u6BB5\u914D\u7F6E\u7A97\u53E3\u4E2D\uFF0C\u76F4\u63A5\u627E\u5230 markdown.json \u6587\u4EF6\uFF1A</p><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20231007173759.png" alt="20231007173759" loading="lazy"></p><p>\u5728\u6253\u5F00\u7684\u7F16\u8F91\u7A97\u53E3\u4E2D\u6DFB\u52A0\u4E0B\u9762\u5185\u5BB9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
	// Place your snippets for markdown here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and \${1:label}, \${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	// &quot;Print to console&quot;: {
	// 	&quot;prefix&quot;: &quot;log&quot;,
	// 	&quot;body&quot;: [
	// 		&quot;console.log(&#39;$1&#39;);&quot;,
	// 		&quot;$2&quot;
	// 	],
	// 	&quot;description&quot;: &quot;Log output to console&quot;
	// }
	&quot;Print to console&quot;: {
		&quot;prefix&quot;: &quot;md&quot;,
		&quot;body&quot;: [
			&quot;---&quot;,
			&quot;\\&quot;title\\&quot;: \\&quot;$1\\&quot;&quot;,
			&quot;category:&quot;,
			&quot;  - \\&quot;$2\\&quot;&quot;,
			&quot;tag:&quot;,
			&quot;  - \\&quot;$3\\&quot;&quot;,
			&quot;---&quot;,
			&quot;&quot;,
			&quot;$4&quot;,
			&quot;&quot;,
			&quot;&quot;,
			&quot;&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;&quot;,
			&quot;&lt;img style=\\&quot;border:1px red solid; display:block; margin:0 auto;\\&quot; src=\\&quot;https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg\\&quot; alt=\\&quot;\u5FAE\u4FE1\u516C\u4F17\u53F7\\&quot; /&gt;&quot;,
			&quot;&quot;,
			&quot;&quot;,
			&quot;&quot;
		],
		&quot;description&quot;: &quot;markdown \u6587\u4EF6\u6A21\u677F&quot;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>\u5982\u679C\u51FA\u73B0\u6CA1\u6709\u751F\u6548\u7684\u95EE\u9898\uFF0C\u53EF\u4EE5\u6253\u5F00 setting.json \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u7136\u540E\u5728\u6B64\u6587\u4EF6\u4E2D\u6DFB\u52A0\u4E0B\u9762\u5185\u5BB9\uFF1A</p><p><img src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/blog20231007173833.png" alt="20231007173833" loading="lazy"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
&quot;[markdown]&quot;: {
    &quot;editor.quickSuggestions&quot;: {
        &quot;other&quot;: true,
        &quot;comments&quot;: true,
        &quot;strings&quot;: true
    },
    &quot;editor.acceptSuggestionOnEnter&quot;: &quot;on&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><br><br><br><img style="border:1px red solid;display:block;margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="\u5FAE\u4FE1\u516C\u4F17\u53F7"></p>`,11);function e(o,r){return a}var p=s(t,[["render",e],["__file","vscode.html.vue"]]);export{p as default};
