import{e as n}from"./app.3140fa71.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const s={},a=n(`<h2 id="\u4E1A\u52A1\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4E1A\u52A1\u573A\u666F" aria-hidden="true">#</a> \u4E1A\u52A1\u573A\u666F</h2><p>\u5047\u8BBE\u6709\u4E00\u4E2A\u4E1A\u52A1\u573A\u666F\u662F\uFF0C\u6839\u636E\u4E0D\u540C\u7684\u6587\u4EF6\u7C7B\u578B\u8FDB\u884C\u4E0D\u540C\u7684\u89E3\u6790\uFF0C\u5219\u4F2A\u4EE3\u7801\u5C31\u4F1A\u50CF\u8FD9\u6837\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>if(type==&quot;A&quot;){
	//\u6309\u7167A\u683C\u5F0F\u89E3\u6790
}else if(type==&quot;B&quot;){
	//\u6309B\u683C\u5F0F\u89E3\u6790
}else{
	//\u6309\u7167\u9ED8\u8BA4\u683C\u5F0F\u89E3\u6790
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8FD9\u6837\u5B9E\u73B0\u7684\u7F3A\u70B9\uFF1A</p><ol><li>\u4E0D\u7B26\u5408\u5F00\u95ED\u539F\u5219\uFF08\u591A\u6269\u5C55\u5F00\u653E\uFF0C\u5BF9\u4FEE\u6539\u5173\u95ED\uFF09\u3002\u56E0\u4E3A\u4FEE\u6539\u6216\u589E\u52A0\u4E00\u4E2A\u6587\u4EF6\u7C7B\u578B\u7684\u89E3\u6790\uFF0C\u90FD\u9700\u8981\u4FEE\u6539\u539F\u6765\u7684\u4EE3\u7801\uFF1B</li><li>\u4E0D\u7B26\u5408\u5355\u4E00\u804C\u8D23\u539F\u5219\u3002</li></ol><p>\u7406\u60F3\u7684\u6548\u679C\u662F\u300E\u7ED9\u7A0B\u5E8F\u4F20\u5165\u7B56\u7565\u7684\u540D\u79F0\u4EE5\u53CA\u6240\u9700\u8981\u7684\u53C2\u6570\uFF0C\u8BA9\u7A0B\u5E8F\u81EA\u52A8\u627E\u5230\u5BF9\u5E94\u7684\u7B56\u7565\u7C7B\uFF0C\u5E76\u81EA\u52A8\u6267\u884C\u5177\u4F53\u7B56\u7565\u300F\u3002</p><h2 id="\u7B56\u7565\u6A21\u5F0F\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u7B56\u7565\u6A21\u5F0F\u7684\u5B9E\u73B0" aria-hidden="true">#</a> \u7B56\u7565\u6A21\u5F0F\u7684\u5B9E\u73B0</h2><ol><li>\u5B9A\u4E49\u7B56\u7565\u63A5\u53E3\uFF0C\u63A5\u53E3\u4E2D\u53EA\u5B9A\u4E49\u4E24\u4E2A\u65B9\u6CD5\uFF0C\u4E00\u4E2A\u662F\u83B7\u5F97\u5177\u4F53\u7684\u7B56\u7565\u5B9E\u73B0\u7C7B\uFF0C\u4E00\u4E2A\u662F\u516C\u5171\u7684\u4E1A\u52A1\u903B\u8F91\u65B9\u6CD5</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public interface IFileStrategy {
    
    //\u5C5E\u4E8E\u54EA\u79CD\u6587\u4EF6\u89E3\u6790\u7C7B\u578B
    FileTypeResolveEnum gainFileType();
    
    //\u5C01\u88C5\u7684\u516C\u7528\u7B97\u6CD5\uFF08\u5177\u4F53\u7684\u89E3\u6790\u65B9\u6CD5\uFF09
    void resolve(Object objectparam);
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="2"><li>\u5177\u4F53\u7B56\u7565\u5B9E\u73B0\u7B56\u7565\u63A5\u53E3\uFF0C\u5E76\u5206\u522B\u5B9E\u73B0\u63A5\u53E3\u4E2D\u7684\u4E24\u4E2A\u65B9\u6CD5</li></ol><p>\u9488\u5BF9A\u7C7B\u578B\u6587\u4EF6\u7684\u5904\u7406\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Component
public class AFileResolve implements IFileStrategy {
    
    @Override
    public FileTypeResolveEnum gainFileType() {
        return FileTypeResolveEnum.File_A_RESOLVE;
    }

    @Override
    public void resolve(Object objectparam) {
      logger.info(&quot;A \u7C7B\u578B\u89E3\u6790\u6587\u4EF6\uFF0C\u53C2\u6570\uFF1A{}&quot;,objectparam);
      //A\u7C7B\u578B\u89E3\u6790\u5177\u4F53\u903B\u8F91
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u9488\u5BF9B\u7C7B\u578B\u6587\u4EF6\u7684\u5904\u7406\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Component
public class BFileResolve implements IFileStrategy {
   
    @Override
    public FileTypeResolveEnum gainFileType() {
        return FileTypeResolveEnum.File_B_RESOLVE;
    }


    @Override
    public void resolve(Object objectparam) {
      logger.info(&quot;B \u7C7B\u578B\u89E3\u6790\u6587\u4EF6\uFF0C\u53C2\u6570\uFF1A{}&quot;,objectparam);
      //B\u7C7B\u578B\u89E3\u6790\u5177\u4F53\u903B\u8F91
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u9ED8\u8BA4\u6587\u4EF6\u7C7B\u578B\u7684\u5904\u7406\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Component
public class DefaultFileResolve implements IFileStrategy {

    @Override
    public FileTypeResolveEnum gainFileType() {
        return FileTypeResolveEnum.File_DEFAULT_RESOLVE;
    }

    @Override
    public void resolve(Object objectparam) {
      logger.info(&quot;\u9ED8\u8BA4\u7C7B\u578B\u89E3\u6790\u6587\u4EF6\uFF0C\u53C2\u6570\uFF1A{}&quot;,objectparam);
      //\u9ED8\u8BA4\u7C7B\u578B\u89E3\u6790\u5177\u4F53\u903B\u8F91
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ol start="3"><li>\u501F\u52A9Spring\u5BB9\u5668\uFF0C\u628A\u5177\u4F53\u7684\u7B56\u7565\u5B9E\u73B0\u7C7B\u548C\u7B56\u7565\u540D\u79F0\u653E\u5230Map\u4E2D\uFF0C\u5E76\u5BF9\u5916\u63D0\u4F9B\u4E00\u4E2A\u65B9\u6CD5\uFF1A\u6839\u636E\u4F20\u5165\u7684\u7B56\u7565\u540D\u79F0\u81EA\u52A8\u6267\u884C\u5177\u4F53\u7B56\u7565</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Component
public class StrategyUseService implements ApplicationContextAware{

  
    private Map&lt;FileTypeResolveEnum, IFileStrategy&gt; iFileStrategyMap = new ConcurrentHashMap&lt;&gt;();

    //\u628A\u4E0D\u540C\u7B56\u7565\u653E\u5230map
    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        Map&lt;String, IFileStrategy&gt; tmepMap = applicationContext.getBeansOfType(IFileStrategy.class);
        tmepMap.values().forEach(strategyService -&gt; iFileStrategyMap.put(strategyService.gainFileType(), strategyService));
    }

    // \u5BF9\u5916\u63D0\u4F9B\u65B9\u6CD5
    public void resolveFile(FileTypeResolveEnum fileTypeResolveEnum, Object objectParam) {
        IFileStrategy iFileStrategy = iFileStrategyMap.get(fileTypeResolveEnum);
        if (iFileStrategy != null) {
            iFileStrategy.resolve(objectParam);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@RestController
public class TestController{

    @Autowired
    private StrategyUseService strategyUseService;

    @GetMapping(&quot;/resolveFile&quot;)
    public void resolveFile(FileTypeResolveEnum fileTypeResolveEnum, Object objectParam){
        strategyUseService.resolveFile(fileTypeResolveEnum, objectParam);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h2><ol><li>\u5982\u679C\u9700\u8981\u4FEE\u6539\u7C7B\u578B\u4E3AA\u7684\u89E3\u6790\u903B\u8F91\uFF0C\u53EA\u9700\u8981\u4FEE\u6539 AFileResolve \uFF0C\u5E76\u4E0D\u9700\u8981\u4FEE\u6539\u8C03\u7528\u8FC7\u7A0B\uFF1B</li><li>\u5982\u679C\u8981\u589E\u52A0\u4E00\u4E2A\u7C7B\u578B\u4E3AC\u7684\u89E3\u6790\u903B\u8F91\uFF0C\u53EA\u9700\u8981\u6DFB\u52A0\u4E00\u4E2A\u7C7B\u6765\u5B9E\u73B0 IFileStrategy \uFF0C\u4E5F\u4E0D\u9700\u8981\u4FEE\u6539\u8C03\u7528\u8FC7\u7A0B\uFF1B</li></ol><img style="border:1px red solid;display:block;margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="\u5FAE\u4FE1\u516C\u4F17\u53F7">`,23);function l(r,i){return a}var t=e(s,[["render",l],["__file","strategy.html.vue"]]);export{t as default};
