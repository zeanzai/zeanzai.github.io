import{c as s,a as e,F as a,e as r,o as l}from"./app.98de23b3.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const b={},i=r(`<h2 id="\u4E1A\u52A1\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E1A\u52A1\u573A\u666F" aria-hidden="true">#</a> \u4E1A\u52A1\u573A\u666F</h2><p>\u5B9E\u9645\u4E1A\u52A1\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u5F80\u5F80\u9700\u8981\u5BF9\u8BF7\u6C42\u8FDB\u884C\u5404\u79CD\u6821\u9A8C\uFF0C\u5982\u9ED1\u767D\u540D\u5355\u6821\u9A8C\u3001\u53C2\u6570\u6821\u9A8C\u3001\u529F\u80FD\u6743\u9650\u6821\u9A8C\u3001\u6570\u636E\u6743\u9650\u6821\u9A8C\u7B49\u3002\u5E76\u4E14\u8FD9\u4E9B\u6821\u9A8C\u5F80\u5F80\u662F\u4E00\u4E2A\u94FE\uFF0C\u5982\u5148\u6821\u9A8C\u9ED1\u540D\u5355\uFF0C\u5982\u679C\u901A\u8FC7\u5C31\u6821\u9A8C\u53C2\u6570\uFF0C\u518D\u901A\u8FC7\u5C31\u6821\u9A8C\u529F\u80FD\u6743\u9650......\u4E5F\u5C31\u662F\u6821\u9A8C\u6210\u529F\u4E00\u4E2A\u5C31\u63A5\u7740\u6821\u9A8C\u4E0B\u4E00\u4E2A\uFF0C\u5176\u4E2D\u53EA\u8981\u6709\u4E00\u4E2A\u6CA1\u6709\u901A\u8FC7\uFF0C\u4E0B\u9762\u7684\u4E5F\u5C31\u4E0D\u9700\u8981\u6821\u9A8C\u4E86\u3002</p><p>\u8FD8\u8BB0\u5F97\u4E0A\u5B66\u65F6\uFF0C\u6BCF\u6B21\u53D1\u8BD5\u5377\u7684\u65F6\u5019\uFF0C\u8001\u5E08\u90FD\u4F1A\u628A\u8BD5\u5377\u9012\u7ED9\u7B2C\u4E00\u6392\u7684\u540C\u5B66\uFF0C\u7136\u540E\u7B2C\u4E00\u6392\u540C\u5B66\u62FF\u4E00\u5F20\u540E\u628A\u5269\u4E0B\u7684\u4F20\u9012\u7ED9\u5EA7\u4F4D\u540E\u9762\u7684\u540C\u5B66\uFF0C\u8D23\u4EFB\u94FE\u5C31\u7C7B\u4F3C\u4E8E\u8FD9\u79CD\u573A\u666F\u3002</p><h2 id="\u5783\u573E\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5783\u573E\u5B9E\u73B0" aria-hidden="true">#</a> \u5783\u573E\u5B9E\u73B0</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>if(\u9ED1\u767D\u540D\u5355\u6821\u9A8C) {
    if(\u53C2\u6570\u6821\u9A8C) {
        if(\u529F\u80FD\u6743\u9650\u6821\u9A8C){
            if(\u6570\u636E\u6743\u9650\u6821\u9A8C){
                // \u4E1A\u52A1\u903B\u8F91
            }
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u8D23\u4EFB\u94FE\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8D23\u4EFB\u94FE\u6A21\u5F0F" aria-hidden="true">#</a> \u8D23\u4EFB\u94FE\u6A21\u5F0F</h2><ol><li>\u63D0\u4F9B\u4E00\u4E2A\u62BD\u8C61\u7C7B\uFF0C\u62BD\u8C61\u7C7B\u4E2D\u5B8C\u6210\u5BF9\u8D23\u4EFB\u94FE\u7684\u7EC4\u88C5\uFF0C\u5E76\u63D0\u4F9B\u4E00\u4E2A\u62BD\u8C61\u65B9\u6CD5\u8BA9\u5B50\u7C7B\u81EA\u5DF1\u53BB\u5B9E\u73B0</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public abstract class AbstractHandler {

    //\u8D23\u4EFB\u94FE\u4E2D\u7684\u4E0B\u4E00\u4E2A\u5BF9\u8C61
    private AbstractHandler nextHandler;

    public void setNextHandler(AbstractHandler nextHandler){
        this.nextHandler = nextHandler;
    }

    public AbstractHandler getNextHandler() {
        return nextHandler;
    }

    // \u9700\u8981\u5B50\u7C7B\u5B9E\u73B0\u7684\u865A\u65B9\u6CD5
    abstract void doFilter(Request filterRequest, Response response);

    /**
     * \u5148\u6267\u884C\u81EA\u8EAB\u7684\u4E1A\u52A1\u903B\u8F91\uFF0C\u4E4B\u540E\u6267\u884C\u4E0B\u4E00\u4E2A\u5BF9\u8C61\u7684\u4E1A\u52A1\u903B\u8F91...
     */
    public void filter(Request request, Response response) {
        doFilter(request, response);
        if (getNextHandler() != null) {
            getNextHandler().filter(request, response);
        }
    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><ol start="2"><li>\u8D23\u4EFB\u94FE\u4E2D\u7684\u8282\u70B9\u7EE7\u627F\u4E0A\u4E00\u6B65\u7684\u62BD\u8C61\u7C7B\uFF0C\u5E76\u5B9E\u73B0\u5404\u81EA\u7684\u4E1A\u52A1\u903B\u8F91</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * \u53C2\u6570\u6821\u9A8C\u5BF9\u8C61
 **/
@Component
@Order(1) //\u987A\u5E8F\u6392\u7B2C1\uFF0C\u6700\u5148\u6821\u9A8C
public class CheckParamFilterObject extends AbstractHandler {

    @Override
    public void doFilter(Request request, Response response) {
        System.out.println(&quot;\u975E\u7A7A\u53C2\u6570\u68C0\u67E5&quot;);
    }
}

/**
 *  \u5B89\u5168\u6821\u9A8C\u5BF9\u8C61
 */
@Component
@Order(2) //\u6821\u9A8C\u987A\u5E8F\u6392\u7B2C2
public class CheckSecurityFilterObject extends AbstractHandler {

    @Override
    public void doFilter(Request request, Response response) {
        //invoke Security check
        System.out.println(&quot;\u5B89\u5168\u8C03\u7528\u6821\u9A8C&quot;);
    }
}
/**
 *  \u9ED1\u540D\u5355\u6821\u9A8C\u5BF9\u8C61
 */
@Component
@Order(3) //\u6821\u9A8C\u987A\u5E8F\u6392\u7B2C3
public class CheckBlackFilterObject extends AbstractHandler {

    @Override
    public void doFilter(Request request, Response response) {
        //invoke black list check
        System.out.println(&quot;\u6821\u9A8C\u9ED1\u540D\u5355&quot;);
    }
}

/**
 *  \u89C4\u5219\u62E6\u622A\u5BF9\u8C61
 */
@Component
@Order(4) //\u6821\u9A8C\u987A\u5E8F\u6392\u7B2C4
public class CheckRuleFilterObject extends AbstractHandler {

    @Override
    public void doFilter(Request request, Response response) {
        //check rule
        System.out.println(&quot;check rule&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><ol start="3"><li>\u63D0\u4F9B\u4E00\u4E2A\u5DE5\u5177\u7C7B\uFF0C\u628A\u8D23\u4EFB\u94FE\u8282\u70B9\u5BF9\u8C61\u4E32\u8D77\u6765\uFF0C\u5E76\u63D0\u4F9B\u8C03\u7528\u5165\u53E3</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Component(&quot;ChainPatternDemo&quot;)
public class ChainPatternDemo {

    private AbstractHandler abstractHandler;

    public AbstractHandler getAbstractHandler() {
        return abstractHandler;
    }

    public void setAbstractHandler(AbstractHandler abstractHandler) {
        this.abstractHandler = abstractHandler;
    }

    // \u81EA\u52A8\u6CE8\u5165\u5404\u4E2A\u8D23\u4EFB\u94FE\u7684\u5BF9\u8C61
    @Autowired
    private List&lt;AbstractHandler&gt; abstractHandleList;

    //spring\u6CE8\u5165\u540E\u81EA\u52A8\u6267\u884C\uFF0C\u8D23\u4EFB\u94FE\u7684\u5BF9\u8C61\u8FDE\u63A5\u8D77\u6765
    @PostConstruct
    public void initializeChainFilter(){

        for(int i = 0;i&lt;abstractHandleList.size();i++){
            if(i == 0){
                abstractHandler = abstractHandleList.get(0);
            }else{
                AbstractHandler currentHander = abstractHandleList.get(i - 1);
                AbstractHandler nextHander = abstractHandleList.get(i);
                currentHander.setNextHandler(nextHander);
            }
        }
    }

    // \u76F4\u63A5\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\u4F7F\u7528
    public Response exec(Request request, Response response) {
        abstractHandler.filter(request, response);
        return response;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><ol><li>\u76F4\u63A5\u5728\u4E1A\u52A1\u4EE3\u7801\u4E2D\u8C03\u7528ChainPatternDemo\u4E2D\u7684exec()\u65B9\u6CD5\u3002</li><li>\u5982\u679C\u9700\u8981\u4FEE\u6539\u67D0\u4E2A\u8D23\u4EFB\u8282\u70B9\uFF0C\u53EA\u9700\u8981\u4FEE\u6539\u8FD9\u4E2A\u8D23\u4EFB\u8282\u70B9\u7684doFilter()\u65B9\u6CD5\uFF1B</li><li>\u5982\u679C\u9700\u8981\u65B0\u589E\u4E00\u4E2A\u8D23\u4EFB\u8282\u70B9\uFF0C\u53EA\u9700\u8981\u65B0\u5EFA\u4E00\u4E2A\u7C7B\u7EE7\u627FAbstractHandler\u7C7B\uFF0C\u5E76\u5B9E\u73B0\u865A\u65B9\u6CD5doFilter()\uFF1B</li></ol>`,14),c=["src"];function t(n,u){return l(),s(a,null,[i,e("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:n.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,c)],64)}var o=p(b,[["render",t],["__file","chain-filter.html.vue"]]);export{o as default};
