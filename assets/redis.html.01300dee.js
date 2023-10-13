import{e}from"./app.3140fa71.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const n={},r=e(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
[root@home blobs]# docker pull redis

[root@home blobs]# docker run -p 6379:6379 --name redis \\
&gt; -v /mnt/doc/docker/redis/data:/data \\
&gt; -v /mnt/doc/docker/redis/conf/redis.conf:/etc/redis/redis.conf \\
&gt; -d redis redis-server /etc/redis/redis.conf
9de5bf8fe6ddc8b4cb8df61684ddd1613ff3944e5664d1cdb87c9192465eb42e

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><br><br><br><img style="border:1px red solid;display:block;margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="\u5FAE\u4FE1\u516C\u4F17\u53F7"></p>`,2);function a(d,c){return r}var o=s(n,[["render",a],["__file","redis.html.vue"]]);export{o as default};
