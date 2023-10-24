import{c as e,a as n,F as a,e as r,o as l}from"./app.65f1b23a.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";const c={},u=r(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u62C9\u53D6 nexus3 \u955C\u50CF
docker pull sonatype/nexus3

// \u542F\u52A8
docker run -d --name nexus -p 8081:8081 \\
--restart always \\
-v /mnt/doc/docker/nexus/data:/nexus-data sonatype/nexus3

// \u83B7\u53D6 admin \u5BC6\u7801
cat /mnt/doc/docker/nexus/data/admin.password 

// \u4E4B\u540E\u5728\u5BA2\u6237\u7AEF\u4FEE\u6539\u5BC6\u7801
admin / admin 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><hr>`,2),p=n("br",null,null,-1),i=n("br",null,null,-1),o=n("br",null,null,-1),d=["src"];function m(s,b){return l(),e(a,null,[u,n("p",null,[p,i,o,n("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:s.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,d)])],64)}var h=t(c,[["render",m],["__file","nexus.html.vue"]]);export{h as default};