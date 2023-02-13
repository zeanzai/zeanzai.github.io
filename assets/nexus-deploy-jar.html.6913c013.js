import{c as a,a as n,F as e,e as l,o as t}from"./app.fa9f1a92.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";var p="/assets/01.092b4c46.png",i="/assets/02.7d366051.png",b="/assets/03.9d145217.png",u="/assets/04.7f11dee8.png",c="/assets/05.ad81ec0f.png";const o={},m=l('<h2 id="_1-\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u573A\u666F" aria-hidden="true">#</a> 1. \u573A\u666F</h2><p>\u9879\u76EEa\u548C\u9879\u76EEb\u90FD\u662Fmaven\u5DE5\u7A0B\u3002\u9879\u76EEa\u9700\u8981\u4F7F\u7528\u5230\u9879\u76EEb\u7684\u4EE3\u7801\uFF0C\u9879\u76EEb\u4E2D\u53C8\u6709\u5F88\u591A\u5B50\u6A21\u5757\uFF0C\u800C\u9879\u76EEa\u4E2D\u53C8\u4E0D\u60F3\u4E00\u4E2A\u4E00\u4E2A\u7684\u5F15\u5165\u9879\u76EEb\u4E2D\u7684jar\u5305\uFF0C\u53EA\u60F3\u5728\u9879\u76EE\u4E2D\u5F15\u5165\u4E00\u4E2A\u4F9D\u8D56\uFF0C\u5C31\u80FD\u4F7F\u7528\u5230\u9879\u76EEb\u4E2D\u7684\u6BCF\u4E00\u4E2Ajar\u3002\u90A3\u5982\u4F55\u5B9E\u73B0\u5462\uFF1F</p><h2 id="_2-\u5B9E\u73B0\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_2-\u5B9E\u73B0\u6B65\u9AA4" aria-hidden="true">#</a> 2. \u5B9E\u73B0\u6B65\u9AA4</h2><ul><li><p>\u642D\u5EFAnexus\u79C1\u670D</p></li><li><p>\u521B\u5EFA\u9879\u76EEb</p></li></ul><p><img src="'+p+'" alt="\u521B\u5EFA\u9879\u76EE" loading="lazy"><img src="'+i+'" alt="\u8BBE\u7F6E\u5750\u6807" loading="lazy"><img src="'+b+'" alt="\u8BBE\u7F6E\u9879\u76EE\u540D" loading="lazy"><img src="'+u+'" alt="\u521B\u5EFA\u6A21\u5757" loading="lazy"></p><ul><li>\u6548\u679C\u56FE</li></ul><p>\u521B\u5EFA\u540E\u628A\u591A\u4F59\u7684\u6587\u4EF6\u5939\u5220\u9664\u540E\u7684\u6548\u679C\u56FE\uFF1A</p><p><img src="'+c+`" alt="\u6548\u679C\u56FE" loading="lazy"></p><ul><li>project-b</li></ul><p>project-b\u662F\u4E00\u4E2A\u805A\u5408\u5DE5\u7A0B\uFF0C\u6240\u4EE5\u5B83\u6CA1\u6709\u6E90\u4EE3\u7801\uFF0C\u53EA\u6709\u4E00\u4E2Apom\u6587\u4EF6\u3002\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot;
         xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

    &lt;groupId&gt;com.wxy&lt;/groupId&gt;
    &lt;artifactId&gt;project-b&lt;/artifactId&gt;
    &lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;
    &lt;packaging&gt;pom&lt;/packaging&gt; &lt;!--pom\u9879\u76EE\uFF0C\u56E0\u4E3A\u805A\u5408\u4E86module-a\u548Cmodule-b--&gt;

    &lt;dependencies&gt;
        &lt;!--a\u6A21\u5757\u7684\u4F9D\u8D56--&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;com.wxy&lt;/groupId&gt;
            &lt;artifactId&gt;module-a&lt;/artifactId&gt;
            &lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;
        &lt;/dependency&gt;

        &lt;!--b\u6A21\u5757\u7684\u4F9D\u8D56--&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;com.wxy&lt;/groupId&gt;
            &lt;artifactId&gt;module-b&lt;/artifactId&gt;
            &lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;


    &lt;!--\u6DFB\u52A0\u53D1\u5E03\u63D2\u4EF6\u7684\u4F9D\u8D56--&gt;
    &lt;distributionManagement&gt;
        &lt;repository&gt;
            &lt;id&gt;nexus-releases&lt;/id&gt;
            &lt;url&gt;http://10.168.0.120:8081/nexus/content/repositories/releases/&lt;/url&gt;
        &lt;/repository&gt;
        &lt;snapshotRepository&gt;
            &lt;id&gt;nexus-releases&lt;/id&gt;
            &lt;url&gt;http://10.168.0.120:8081/nexus/content/repositories/snapshots/&lt;/url&gt;
        &lt;/snapshotRepository&gt;
    &lt;/distributionManagement&gt;

&lt;/project&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><ul><li>module-a</li></ul><p>module-a\u5B9E\u73B0\u4E24\u4E2A\u6574\u6570\u7684\u76F8\u52A0\u3002\u91CC\u9762\u5305\u62EC\u4E86\u4E24\u4E2A\u91CD\u8981\u7684\u6587\u4EF6\uFF1A\u4E00\u4E2A\u662Fpom.xml\u6587\u4EF6\uFF0C\u4E00\u4E2A\u662FATest.java\u6587\u4EF6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// pom.xml\u6587\u4EF6\u5185\u5BB9

&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot;
         xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

    &lt;groupId&gt;com.wxy&lt;/groupId&gt;
    &lt;artifactId&gt;module-a&lt;/artifactId&gt;
    &lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;
    &lt;packaging&gt;jar&lt;/packaging&gt; &lt;!--jar\u9879\u76EE--&gt;

    &lt;!--\u6DFB\u52A0\u53D1\u5E03\u63D2\u4EF6\u7684\u4F9D\u8D56--&gt;
    &lt;distributionManagement&gt;
        &lt;repository&gt;
            &lt;id&gt;nexus-releases&lt;/id&gt;
            &lt;url&gt;http://10.168.0.120:8081/nexus/content/repositories/releases/&lt;/url&gt;
        &lt;/repository&gt;
        &lt;snapshotRepository&gt;
            &lt;id&gt;nexus-releases&lt;/id&gt;
            &lt;url&gt;http://10.168.0.120:8081/nexus/content/repositories/snapshots/&lt;/url&gt;
        &lt;/snapshotRepository&gt;
    &lt;/distributionManagement&gt;

&lt;/project&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// ATest.java\u5185\u5BB9
public class ATest {

    public int add(int a, int b) {
        return a + b;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>module-b</li></ul><p>module-b\u5B9E\u73B0\u4E24\u4E2A\u6574\u6570\u7684\u76F8\u52A0\u3002\u91CC\u9762\u5305\u62EC\u4E86\u4E24\u4E2A\u91CD\u8981\u7684\u6587\u4EF6\uFF1A\u4E00\u4E2A\u662Fpom.xml\u6587\u4EF6\uFF0C\u4E00\u4E2A\u662FBTest.java\u6587\u4EF6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// pom.xml\u6587\u4EF6\u5185\u5BB9

&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot;
         xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

    &lt;groupId&gt;com.wxy&lt;/groupId&gt;
    &lt;artifactId&gt;module-b&lt;/artifactId&gt;
    &lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;
    &lt;packaging&gt;jar&lt;/packaging&gt; &lt;!--jar\u9879\u76EE--&gt;

    &lt;!--\u6DFB\u52A0\u53D1\u5E03\u63D2\u4EF6\u7684\u4F9D\u8D56--&gt;
    &lt;distributionManagement&gt;
        &lt;repository&gt;
            &lt;id&gt;nexus-releases&lt;/id&gt;
            &lt;url&gt;http://10.168.0.120:8081/nexus/content/repositories/releases/&lt;/url&gt;
        &lt;/repository&gt;
        &lt;snapshotRepository&gt;
            &lt;id&gt;nexus-releases&lt;/id&gt;
            &lt;url&gt;http://10.168.0.120:8081/nexus/content/repositories/snapshots/&lt;/url&gt;
        &lt;/snapshotRepository&gt;
    &lt;/distributionManagement&gt;

&lt;/project&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// ATest.java\u5185\u5BB9
public class BTest {

    public int sub(int a, int b) {
        return a - b;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>\u6253\u5305\u53D1\u5E03\u5B50\u6A21\u5757</li></ul><p>\u9700\u8981\u5BF9\u6BCF\u4E00\u4E2A\u5B50\u6A21\u5757\u8FDB\u884C\u6253\u5305\u53D1\u5E03\u3002\u5177\u4F53\u8FC7\u7A0B\u662F\uFF1A\u70B9\u51FBmaven project\u7A97\u53E3\uFF0C\u627E\u5230\u6BCF\u4E00\u4E2A\u5B50\u6A21\u5757\u7684LifeCycle\u4E2D\u7684deploy\uFF0C\u53F3\u952E create... \uFF0C\u5728\u5F39\u51FA\u7684\u7A97\u53E3\u7684 Command line \u5904\u586B\u5199 <code>clean deploy -DskipTests</code>\uFF0C\u7136\u540Eok\u3002\u4F1A\u5728\u8BE5\u5B50\u6A21\u5757\u7684plugins\u4E0B\u9762\u751F\u6210\u4E00\u4E2A Run Configurations\uFF0C\u5C55\u5F00\u53CC\u51FB\u5373\u53EF\u53D1\u5E03\u5230\u79C1\u670D\u3002</p><p>\u5BF9\u6BCF\u4E00\u4E2A\u6A21\u5757\u90FD\u6267\u884C\u540C\u6837\u7684\u6B65\u9AA4\uFF0C\u5373\u53EF\u5C06\u6240\u6709\u5B50\u6A21\u5757\u90FD\u53D1\u5E03\u5230\u79C1\u670D\u4E0A\u9762\u3002</p><ul><li>\u6253\u5305\u53D1\u5E03\u805A\u5408\u5DE5\u7A0B</li></ul><p>\u7B49\u6240\u6709\u7684\u5B50\u6A21\u5757\u90FD\u53D1\u5E03\u6210\u529F\u540E\uFF0C\u5BF9\u805A\u5408\u5DE5\u7A0B\u6267\u884C\u6253\u5305\u53D1\u5E03\u8FC7\u7A0B\uFF0C\u53D1\u5E03\u8FC7\u7A0B\u548C\u4E0A\u9762\u53D1\u5E03\u5B50\u6A21\u5757\u7684\u6B65\u9AA4\u4E00\u81F4\u3002</p><h2 id="_3-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_3-\u4F7F\u7528" aria-hidden="true">#</a> 3. \u4F7F\u7528</h2><ul><li>\u6DFB\u52A0\u4F9D\u8D56</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;com.wxy&lt;/groupId&gt;
    &lt;artifactId&gt;project-b&lt;/artifactId&gt;
    &lt;version&gt;2.2-RELEASE&lt;/version&gt;
    &lt;type&gt;pom&lt;/type&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>\u4F7F\u7528</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class ProjectATest {

    public static void main(String[] args) {
        ATest aTest = new ATest();
        System.out.println(aTest.add(1, 2));

        BTest bTest = new BTest();
        System.out.println(bTest.sub(10, 9));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_4-\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#_4-\u6CE8\u610F" aria-hidden="true">#</a> 4. \u6CE8\u610F</h2><p>\u6BCF\u6B21\u66F4\u65B0project-b\u7684\u65F6\u5019\uFF0C\u90FD\u9700\u8981\u66F4\u65B0\u6BCF\u4E00\u4E2A\u6A21\u5757\u7684\u7248\u672C\uFF0C\u540C\u6837\uFF0Cproject-b\u7684\u7248\u672C\u4E5F\u9700\u8981\u66F4\u65B0\uFF0C\u4E0D\u7136\uFF0C\u4F1A\u51FA\u73B0\u53D1\u5E03\u7684\u9519\u8BEF\u3002</p><h2 id="_5-\u9879\u76EE\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#_5-\u9879\u76EE\u6E90\u7801" aria-hidden="true">#</a> 5. \u9879\u76EE\u6E90\u7801</h2>`,32),g=n("a",{href:"../source/test-nexus.rar"},"test-nexus.rar",-1),d=["src"];function h(s,x){return t(),a(e,null,[m,n("p",null,[g,n("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:s.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,d)])],64)}var _=r(o,[["render",h],["__file","nexus-deploy-jar.html.vue"]]);export{_ as default};
