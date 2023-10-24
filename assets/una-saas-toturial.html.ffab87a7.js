import{r as t,c as l,a as n,b as p,F as r,d as s,e as c,o}from"./app.98de23b3.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";var u="/assets/2023-10-24-18-12-52.cfc9b9da.png",d="/assets/2023-10-24-18-12-53.26e6a2cd.png";const m={},b=n("h2",{id:"\u4F7F\u7528\u8BF4\u660E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4F7F\u7528\u8BF4\u660E","aria-hidden":"true"},"#"),s(" \u4F7F\u7528\u8BF4\u660E")],-1),k=s("\u8BF4\u660E\u6587\u6863\u53EF\u4EE5\u53C2\u8003\u300A"),g={href:"https://mp.weixin.qq.com/s/6Gihii6HtBsgcbiQ-2XvUg",target:"_blank",rel:"noopener noreferrer"},_=s("Spring Boot \u6784\u5EFA\u591A\u79DF\u6237 SaaS \u5E73\u53F0\u6838\u5FC3\u6280\u672F\u6307\u5357"),h=s("\u300B\u3002"),L=n("li",null,"\u4FEE\u6539 application.yml \u6570\u636E\u5E93URL\u3001\u8D26\u6237\u3001\u5BC6\u7801",-1),v=c('<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>\n<span class="token key atrule">url</span><span class="token punctuation">:</span>  jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//192.168.100.100<span class="token punctuation">:</span>3306/test_una_saas<span class="token punctuation">?</span>useSSL=false\n<span class="token key atrule">username</span><span class="token punctuation">:</span> admin\n<span class="token key atrule">password</span><span class="token punctuation">:</span> admin@2020<span class="token tag">!@</span><span class="token comment">#</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="3"><li>\u521B\u5EFAapplication.yml\u6570\u636E\u5E93URL\u5BF9\u5E94\u7684schema\uFF0C\u5E76\u5728\u6539\u6570\u636E\u5E93\u4E2D\u521B\u5EFA<code>master_tenant</code>\u8868\u3002</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>schema\uFF1A test_una_saas\ntable\uFF1A master_tenant\nSQL\uFF1A \n    CREATE TABLE `master_tenant` (\n      `ID` varchar(255) NOT NULL,\n      `TENANT` varchar(30) NOT NULL,\n      `URL` varchar(255) NOT NULL,\n      `USERNAME` varchar(30) NOT NULL,\n      `PASSWORD` varchar(30) NOT NULL,\n      `version` int(11) NOT NULL,\n      PRIMARY KEY (`ID`)\n    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n    \n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ol start="4"><li>\u5728<code>master_tenant</code>\u8868\u4E2D\u63D2\u5165\u4E00\u6761\u6570\u636E</li></ol><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>master_tenant<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;tenant_1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;firstTenant&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;jdbc:mysql://192.168.100.100:3306/db2020?useSSL=false&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;admin@2020!@#&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="5"><li>\u521B\u5EFAschema\uFF0C\u5E76\u521B\u5EFAuser\u8868</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>schema\uFF1A db2020\ntable\uFF1A user\nSQL\uFF1A \n    CREATE TABLE `user` (\n      `ID` varchar(50) NOT NULL,\n      `USERNAME` varchar(255) DEFAULT NULL,\n      `PASSWORD` varchar(22) DEFAULT NULL,\n      `TENANT` varchar(255) DEFAULT NULL,\n      PRIMARY KEY (`ID`)\n    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="6"><li>\u5728db2020.user\u8868\u4E2D\u63D2\u5165\u4E00\u6761\u6570\u636E</li></ol><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>user<span class="token punctuation">`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;abc123456&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;firstTenant&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="7"><li>\u4F7F\u7528<code>firstTenant</code>\u4F5C\u4E3A\u79DF\u6237id\uFF0C\u4F7F\u7528<code>test</code>\u4F5C\u4E3A\u7528\u6237\u540D\uFF0C\u4F7F\u7528<code>abc123456</code>\u4F5C\u4E3A\u767B\u9646\u5BC6\u7801\u3002</li></ol><p><img src="'+u+'" alt="" loading="lazy"></p><p><img src="'+d+'" alt="" loading="lazy"></p><ol start="8"><li>\u4F7F\u7528\u53E6\u5916\u4E00\u4E2A\u94FE\u63A5\u548C\u53E6\u5916\u4E00\u4E2A\u79DF\u6237\u7684\u7528\u6237\u518D\u6B21\u767B\u5F55\uFF0C\u540C\u6837\u6210\u529F\u3002</li></ol><hr>',14),N=["src"];function E(a,T){const e=t("ExternalLinkIcon");return o(),l(r,null,[b,n("ol",null,[n("li",null,[k,n("a",g,[_,p(e)]),h]),L]),v,n("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:a.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,N)],64)}var f=i(m,[["render",E],["__file","una-saas-toturial.html.vue"]]);export{f as default};
