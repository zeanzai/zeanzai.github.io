import{e as n}from"./app.4650a50d.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const a={},s=n(`<h2 id="\u4E1A\u52A1\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E1A\u52A1\u573A\u666F" aria-hidden="true">#</a> \u4E1A\u52A1\u573A\u666F</h2><p>\u5047\u5982\u4E00\u4E2A\u4E1A\u52A1\u6D41\u7A0B\u9700\u8981\u51E0\u4E2A\u901A\u7528\u7684\u6B65\u9AA4\uFF0C\u53EA\u6709\u90E8\u5206\u7EC6\u8282\u4E0D\u4E00\u6837\u5916\uFF0C\u5176\u4ED6\u7684\u90FD\u4E00\u6837\uFF0C\u8FD9\u79CD\u573A\u666F\u90FD\u9002\u5408\u4F7F\u7528\u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F\u3002\u4F8B\u5982\uFF0C\u559D\u7EA2\u8336\uFF0C\u559D\u7EFF\u8336\u3001\u559D\u767D\u8336\u7B49\u559D\u8336\u8FC7\u7A0B\u53EF\u4EE5\u5206\u4E3A\uFF1A \u51C6\u5907\u8336\u676F\u3001\u6311\u9009\u8336\u53F6\u3001\u716E\u8336\u3002</p><h2 id="\u5783\u573E\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5783\u573E\u5B9E\u73B0" aria-hidden="true">#</a> \u5783\u573E\u5B9E\u73B0</h2><p>\u5783\u573E\u7684\u5B9E\u73B0\u5C31\u662F\u76F4\u63A5\u9488\u5BF9\u6BCF\u4E00\u4E2A\u573A\u666F\u90FD\u5B9E\u73B0\u4E00\u5957\u4EE3\u7801\u3002</p><h2 id="\u6A21\u677F\u65B9\u6CD5\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u6A21\u677F\u65B9\u6CD5\u5B9E\u73B0" aria-hidden="true">#</a> \u6A21\u677F\u65B9\u6CD5\u5B9E\u73B0</h2><p>\u5783\u573E\u5B9E\u73B0\u4E2D\u4F1A\u6709\u5F88\u591A\u91CD\u590D\u7684\u4EE3\u7801\uFF0C\u6BD4\u5982\u90FD\u9700\u8981\u51C6\u5907\u8336\u676F\u3001\u90FD\u9700\u8981\u8FDB\u884C\u716E\u8336\u3002</p><ol><li>\u6784\u9020\u4E00\u4E2A\u62BD\u8C61\u7C7B\uFF0C\u62BD\u8C61\u7C7B\u4E2D\u6709\u4E00\u4E2A\u901A\u7528\u7684\u7B97\u6CD5\u9AA8\u67B6\uFF0C\u53CA\u4EE3\u8868\u7B97\u6CD5\u6B65\u9AA4\u7684\u865A\u65B9\u6CD5</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
public abstract class DrinkTea{

    // \u559D\u8336
    public final void drink() {
        prepareCup();
        pickTea();
        cookTea();
    }

    // \u51C6\u5907\u8336\u676F
    public void prepareCup(){
        System.out.println(&quot;\u51C6\u5907\u4E86\u8336\u676F&quot;)
    } 

    // \u6311\u9009\u8336\u53F6 
    public abstract void pickTea();

    // \u716E\u8336
    public void cookTea(){
        System.out.println(&quot;\u716E\u8336&quot;)
    } 
} 


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><ol start="2"><li>\u6839\u636E\u4E1A\u52A1\u9700\u6C42\u7EE7\u627FDrinkTea\u62BD\u8C61\u7C7B\uFF0C\u5E76\u5B9E\u73B0\u62BD\u8C61\u7C7B\u4E2D\u7684\u865A\u65B9\u6CD5</li></ol><p>\u559D\u7EA2\u8336\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class DrinkRedTea extends DrinkTea{
    @Override
    public void pickTea(){
        System.out.println(&quot;\u6311\u9009\u4E86\u7EA2\u8336&quot;)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u559D\u7EFF\u8336\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class DrinkGreenTea extends DrinkTea{
    @Override
    public void pickTea(){
        System.out.println(&quot;\u6311\u9009\u4E86\u7EFF\u8336&quot;)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u559D\u767D\u8336\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class DrinkWhiteTea extends DrinkTea{
    @Override
    public void pickTea(){
        System.out.println(&quot;\u6311\u9009\u4E86\u767D\u8336&quot;)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>main(){

    // \u559D\u7EA2\u8336
    DrinkTea drinkTea = new DrinkRedTea();
    drinkTea.drink();


    // \u559D\u7EFF\u8336
    DrinkTea drinkTea = new DrinkGreenTea();
    drinkTea.drink();
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h2><ol><li>\u5982\u679C\u65B0\u589E\u4E00\u79CD\u8336\u53F6\uFF0C\u90A3\u4E48\u5C31\u53EA\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u7C7B\uFF0C\u7136\u540E\u7EE7\u627FDrinkTea\u7C7B\u5E76\u5B9E\u73B0pickTea()\u865A\u65B9\u6CD5\u5373\u53EF\uFF1B</li><li>\u5982\u679C\u4FEE\u6539\u8336\u53F6\uFF0C\u53EA\u9700\u8981\u4FEE\u6539\u5BF9\u5E94\u7684\u8336\u53F6\u7684\u6311\u9009\u65B9\u6CD5\u5C31\u884C\uFF0C\u5176\u4ED6\u4E0D\u9700\u8981\u4FEE\u6539\u3002</li></ol><p>Spring\u4E2D\u63D0\u4F9B\u4E86\u4E00\u4E9Btemplate\u5DE5\u5177\u7C7B\uFF0C\u5982RestTemplate\u3001RedisTemplate\uFF0C\u6709\u5174\u8DA3\u53EF\u4EE5\u4E86\u89E3\u4E00\u4E0B\u3002</p><img style="border:1px red solid;display:block;margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="\u5FAE\u4FE1\u516C\u4F17\u53F7">`,21);function r(l,i){return s}var c=e(a,[["render",r],["__file","template-method.html.vue"]]);export{c as default};
