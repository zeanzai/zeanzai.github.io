import{c as n,a,F as s,e as r,o as i}from"./app.98de23b3.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const t={},c=r(`<h2 id="\u7EBF\u7A0B\u6C60\u914D\u7F6E\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u7A0B\u6C60\u914D\u7F6E\u7C7B" aria-hidden="true">#</a> \u7EBF\u7A0B\u6C60\u914D\u7F6E\u7C7B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class ThreadPoolUtil {
    private static int corePoolSize = 5;
    private static int maxPollSize = 5;
    private static long keepAliveTime = 10;
    private stativ TimeUnit unit = TimeUnit.MINUTES;

    private static class Pool{
        private static ThreadPoolExecutor executor = new ThreadPoolExecutor(
            corePoolSize,
            maxPollSize,
            keepAliveTime,
            unit,
            new LinkedBlockingQueue&lt;&gt;(),
            r -&gt; new Thread(r, &quot;async-thread&quot;),
            new ThreadPoolExecutor.CallerRunsPolicy()
        );
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u6CD5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ThreadPoolUtil.submitTask(
    ()-&gt;{
        // \u4F60\u7684\u4EFB\u52A1\u65B9\u6CD5\uFF1B
    }
);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u5176\u4ED6\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u65B9\u6CD5" aria-hidden="true">#</a> \u5176\u4ED6\u65B9\u6CD5</h2><h2 id="https-mp-weixin-qq-com-s-skba9rwvblnw8byzhcusra" tabindex="-1"><a class="header-anchor" href="#https-mp-weixin-qq-com-s-skba9rwvblnw8byzhcusra" aria-hidden="true">#</a> https://mp.weixin.qq.com/s/skBA9RwVBLnw8BYZhcUSrA</h2>`,6),p=["src"];function o(e,b){return i(),n(s,null,[c,a("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:e.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,p)],64)}var m=l(t,[["render",o],["__file","excutors.html.vue"]]);export{m as default};
