import{e as n}from"./app.3140fa71.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u62C9\u53D6 nexus3 \u955C\u50CF
docker pull sonatype/nexus3

// \u542F\u52A8
docker run -d --name nexus -p 8081:8081 \\
--restart always \\
-v /mnt/doc/docker/nexus/data:/nexus-data sonatype/nexus3

// \u83B7\u53D6 admin \u5BC6\u7801
cat /mnt/doc/docker/nexus/data/admin.password 

// \u4E4B\u540E\u5728\u5BA2\u6237\u7AEF\u4FEE\u6539\u5BC6\u7801
admin / admin 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><hr><p><br><br><br><img style="border:1px red solid;display:block;margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="\u5FAE\u4FE1\u516C\u4F17\u53F7"></p>`,3);function r(l,p){return e}var t=s(a,[["render",r],["__file","nexus.html.vue"]]);export{t as default};
