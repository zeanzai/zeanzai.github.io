import{r as l,c as i,a as n,b as s,F as r,e as t,d as a,o as c}from"./app.ea0bfdcf.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const b={},u=t(`<h2 id="\u5355\u4F8B\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5355\u4F8B\u6A21\u5F0F" aria-hidden="true">#</a> \u5355\u4F8B\u6A21\u5F0F</h2><p>\u9488\u5BF9\u8981\u6C42\u8F6F\u4EF6\u7CFB\u7EDF\u4E2D\u53EA\u4FDD\u7559\u67D0\u4E00\u4E2A\u7C7B\u7684\u4E00\u4E2A\u5B9E\u4F8B\u7684\u4E1A\u52A1\u573A\u666F\u3002\u6211\u4EEC\u5E38\u5199\u7684\u666E\u901A\u7684\u8F6F\u4EF6\u7C7B\uFF0C\u5728\u9AD8\u5E76\u53D1\u573A\u666F\u4E0B\uFF0C\u4F1A\u521B\u5EFA\u591A\u4E2A\u5B9E\u4F8B\uFF0C\u5BB9\u6613\u4EA7\u751F\u7EBF\u7A0B\u540C\u6B65\u95EE\u9898\u3002\u56E0\u6B64\u9700\u8981\u91C7\u7528\u7279\u6B8A\u7684\u8BBE\u8BA1\u6A21\u5F0F\u5B8C\u6210\u7C7B\u7684\u8BBE\u8BA1\u3002</p><p>\u5982Hibernate\u4E2D\u7684sessionfactory\u5C31\u8981\u6C42\u6574\u4E2A\u5E94\u7528\u4E2D\u53EA\u5B58\u5728\u4E00\u4E2A\u5B9E\u4F8B\u3002\u6B64\u5916\u8FD8\u6709\u4E00\u4E9B\u5E94\u7528\u573A\u666F\uFF0C\u5982\u65E5\u5FD7\u3001\u7EBF\u7A0B\u6C60\u3001\u6570\u636E\u6E90\u3001\u786C\u4EF6\u8BBE\u5907\u9A71\u52A8\u7B49\u3002</p><h3 id="\u997F\u6C49\u5F0F-\u9759\u6001\u5E38\u91CF\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u997F\u6C49\u5F0F-\u9759\u6001\u5E38\u91CF\u65B9\u5F0F" aria-hidden="true">#</a> \u997F\u6C49\u5F0F-\u9759\u6001\u5E38\u91CF\u65B9\u5F0F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Singleton{

  // 1. \u6784\u9020\u5668\u79C1\u6709\u5316\uFF0C\u9632\u6B62\u5916\u90E8new
  private Singleton(){}

  // 2. \u672C\u7C7B\u5185\u90E8\u521B\u5EFA\u5B9E\u4F8B\u5BF9\u8C61
  private final static Singleton instance = new Singleton();

  // 3. \u5BF9\u5916\u66B4\u9732\u4F7F\u7528\u65B9\u6CD5
  public static Singleton getInstance(){
    return instance;
  }
}

// \u4F7F\u7528
Singleton oneSingleton = Singleton.getInstance();
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul><li><p>\u5206\u6790</p><ul><li>\u5728\u7C7B\u52A0\u8F7D\u65F6\u5B8C\u6210\u5B9E\u4F8B\u5316\uFF0C\u907F\u514D\u4E86\u7EBF\u7A0B\u540C\u6B65\u7684\u95EE\u9898\uFF1B</li><li>\u7531\u4E8E\u7C7B\u52A0\u8F7D\u673A\u5236\u4E2D\u7C7B\u7684\u52A0\u8F7D\u6709\u5F88\u591A\u4E2D\u65B9\u5F0F\uFF0C\u56E0\u6B64\u4E0D\u80FD\u786E\u5B9A\u662F\u5426\u6709\u5176\u4ED6\u65B9\u5F0F\u5BFC\u81F4\u7C7B\u52A0\u8F7D\uFF1B</li><li>\u5982\u679C\u8F6F\u4EF6\u8FC7\u7A0B\u4E2D\u6CA1\u6709\u7528\u5230\uFF0C\u53EF\u80FD\u4F1A\u9020\u6210\u5185\u5B58\u6D6A\u8D39\uFF1B</li><li>\u53EF\u5728\u751F\u4EA7\u73AF\u5883\u4E0B\u4F7F\u7528\uFF1B</li></ul></li><li><p>\u4F7F\u7528\u573A\u666F</p><ul><li>java.lang.Runtime \u4F7F\u7528\u7684\u5C31\u662F\u8FD9\u79CD\u5355\u4F8B\u6A21\u5F0F\u7684\u5B9E\u73B0\u65B9\u5F0F\uFF1B</li></ul></li></ul><h3 id="\u997F\u6C49\u5F0F-\u9759\u6001\u4EE3\u7801\u5757\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u997F\u6C49\u5F0F-\u9759\u6001\u4EE3\u7801\u5757\u65B9\u5F0F" aria-hidden="true">#</a> \u997F\u6C49\u5F0F-\u9759\u6001\u4EE3\u7801\u5757\u65B9\u5F0F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Singleton{

  // 1. \u6784\u9020\u5668\u79C1\u6709\u5316\uFF0C\u9632\u6B62\u5916\u90E8new
  private Singleton(){}

  // 2. \u58F0\u660E
  private static Singleton instance;

  // 3. \u9759\u6001\u4EE3\u7801\u5757\u4E2D\u8FDB\u884C\u5B9E\u4F8B\u5316
  static {
    instance = new Singleton();
  }

  // 4. \u5BF9\u5916\u66B4\u9732\u4F7F\u7528\u65B9\u6CD5
  public static Singleton getInstance(){
    return instance;
  }
}

// \u4F7F\u7528
Singleton oneSingleton = Singleton.getInstance();
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ul><li>\u5206\u6790 <ul><li>\u4E0E\u4E0A\u9762\u65B9\u5F0F\u7C7B\u4F3C\uFF0C\u53EA\u4E0D\u8FC7\u662F\u628A\u7C7B\u5B9E\u4F8B\u5316\u8FC7\u7A0B\u653E\u5230\u4E86\u9759\u6001\u4EE3\u7801\u5757\u4E2D\uFF1B</li><li>\u4E5F\u53EF\u4EE5\u5728\u751F\u4EA7\u73AF\u5883\u4E0B\u4F7F\u7528\uFF0C\u5E76\u4E14\u4F18\u7F3A\u70B9\u4E0E\u4E0A\u9762\u65B9\u5F0F\u4E00\u6837\uFF1B</li></ul></li></ul><h3 id="\u61D2\u6C49\u5F0F-\u7EBF\u7A0B\u4E0D\u5B89\u5168-\u65E0\u540C\u6B65\u63AA\u65BD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u61D2\u6C49\u5F0F-\u7EBF\u7A0B\u4E0D\u5B89\u5168-\u65E0\u540C\u6B65\u63AA\u65BD\u65B9\u5F0F" aria-hidden="true">#</a> \u61D2\u6C49\u5F0F\uFF08\u7EBF\u7A0B\u4E0D\u5B89\u5168\uFF09-\u65E0\u540C\u6B65\u63AA\u65BD\u65B9\u5F0F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Singleton{
  // 1. \u6784\u9020\u5668\u79C1\u6709\u5316\uFF0C\u9632\u6B62\u5916\u90E8new
  private Singleton(){}

  // 2. \u58F0\u660E
  private static Singleton instance;

  // 3. \u5BF9\u5916\u66B4\u9732\u4F7F\u7528\u65B9\u6CD5\uFF0C\u5982\u679C\u5BF9\u8C61\u4E0D\u5B58\u5728\u5C31\u751F\u6210\u4E00\u4E2A\u8FDB\u884C\u8FD4\u56DE
  public static Singleton getInstance(){
    if (instance == null) {
      instance = new Singleton();
    }
    return instance;
  }
}

// \u4F7F\u7528
Singleton oneSingleton = Singleton.getInstance();
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ul><li>\u5206\u6790 <ul><li>\u4F7F\u7528\u4E86\u61D2\u52A0\u8F7D\u7684\u65B9\u5F0F\uFF0C\u4F46\u662F\u53EA\u80FD\u5728\u5355\u7EBF\u7A0B\u6A21\u5F0F\u4E0B\u4F7F\u7528\uFF1B</li><li>\u5982\u679C\u4E00\u4E2A\u7EBF\u7A0B\u6267\u884C\u5230\u4E86\u5224\u65AD\u8BED\u53E5\uFF0C\u800C\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u4E5F\u6267\u884C\u5230\u4E86\u5224\u65AD\u8BED\u53E5\uFF0C\u8FD9\u65F6\u5C31\u4F1A\u4EA7\u751F\u4E24\u4E2A\u5B9E\u4F8B\uFF1B</li><li>\u4E0D\u5EFA\u8BAE\u5728\u751F\u4EA7\u73AF\u5883\u4E0B\u4F7F\u7528\uFF1B</li></ul></li></ul><h3 id="\u61D2\u6C49\u5F0F-\u7EBF\u7A0B\u5B89\u5168-\u540C\u6B65\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u61D2\u6C49\u5F0F-\u7EBF\u7A0B\u5B89\u5168-\u540C\u6B65\u65B9\u6CD5" aria-hidden="true">#</a> \u61D2\u6C49\u5F0F\uFF08\u7EBF\u7A0B\u5B89\u5168\uFF09-\u540C\u6B65\u65B9\u6CD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Singleton{
  // 1. \u6784\u9020\u5668\u79C1\u6709\u5316\uFF0C\u9632\u6B62\u5916\u90E8new
  private Singleton(){}

  // 2. \u58F0\u660E
  private static Singleton instance;

  // 3. \u5BF9\u5916\u66B4\u9732\u4F7F\u7528\u65B9\u6CD5\uFF0C\u5982\u679C\u5BF9\u8C61\u4E0D\u5B58\u5728\u5C31\u751F\u6210\u4E00\u4E2A\u8FDB\u884C\u8FD4\u56DE\uFF0C\u5E76\u4E14\u751F\u6210\u65B9\u6CD5\u5C5E\u4E8E\u540C\u6B65\u65B9\u6CD5\uFF0C\u907F\u514D\u7EBF\u7A0B\u540C\u6B65\u95EE\u9898\uFF1B
  public static synchronized Singleton getInstance(){
    if (instance == null) {
      instance = new Singleton();
    }
    return instance;
  }
}

// \u4F7F\u7528
Singleton oneSingleton = Singleton.getInstance();
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><ul><li>\u5206\u6790 <ul><li>\u5728\u4E0A\u4E00\u79CD\u6A21\u5F0F\u7684\u57FA\u7840\u4E0A\uFF0C\u5BF9\u4F7F\u7528\u65B9\u6CD5\u8FDB\u884C\u4F18\u5316\uFF0C\u6DFB\u52A0\u4E86 synchronized \u5173\u952E\u5B57\uFF1B</li><li><code>\u867D\u7136\u8FD9\u79CD\u65B9\u5F0F\u662F\u7EBF\u7A0B\u5B89\u5168\u7684\uFF0C\u4F46\u8FD9\u79CD\u65B9\u5F0F\u7684\u6548\u7387\u592A\u4F4E\u4E86</code>\uFF0C\u6BCF\u4E00\u4E2A\u60F3\u8981\u83B7\u53D6\u5B9E\u4F8B\u7684\u65B9\u6CD5\u90FD\u9700\u8981\u8FDB\u884C\u540C\u6B65\u8FDB\u884C\u7B49\u5F85\uFF0C\u5E76\u4E14get\u65B9\u6CD5\u5B9E\u9645\u4E0A\u53EA\u9700\u8981\u6267\u884C\u4E00\u6B21\u5373\u53EF\uFF0C\u540E\u9762\u7684\u4F7F\u7528\u53EF\u4EE5\u76F4\u63A5\u8FD4\u56DE\u5373\u53EF\u3002</li><li>\u751F\u4EA7\u73AF\u5883\u4E0B\u4E0D\u63A8\u8350\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\uFF1B</li></ul></li></ul><h3 id="\u61D2\u6C49\u5F0F-\u7EBF\u7A0B\u4E0D\u5B89\u5168-\u540C\u6B65\u4EE3\u7801\u5757" tabindex="-1"><a class="header-anchor" href="#\u61D2\u6C49\u5F0F-\u7EBF\u7A0B\u4E0D\u5B89\u5168-\u540C\u6B65\u4EE3\u7801\u5757" aria-hidden="true">#</a> \u61D2\u6C49\u5F0F\uFF08\u7EBF\u7A0B\u4E0D\u5B89\u5168\uFF09-\u540C\u6B65\u4EE3\u7801\u5757</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Singleton{
  // 1. \u6784\u9020\u5668\u79C1\u6709\u5316\uFF0C\u9632\u6B62\u5916\u90E8new
  private Singleton(){}

  // 2. \u58F0\u660E
  private static Singleton instance;

  // 3. \u5BF9\u5916\u66B4\u9732\u4F7F\u7528\u65B9\u6CD5\uFF0C\u5982\u679C\u5BF9\u8C61\u4E0D\u5B58\u5728\u5C31\u751F\u6210\u4E00\u4E2A\u8FDB\u884C\u8FD4\u56DE\uFF0C\u5E76\u4E14\u751F\u6210\u65B9\u6CD5\u5C5E\u4E8E\u540C\u6B65\u65B9\u6CD5\uFF0C\u907F\u514D\u7EBF\u7A0B\u540C\u6B65\u95EE\u9898\uFF1B
  public static Singleton getInstance(){
    if (instance == null) {
      synchronized (Singleton.class){
        instance = new Singleton();
      }
    }
    return instance;
  }
}

// \u4F7F\u7528
Singleton oneSingleton = Singleton.getInstance();
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><ul><li>\u5206\u6790 <ul><li>\u867D\u7136\u4F7F\u7528\u4E86\u540C\u6B65\u4EE3\u7801\u5757\u7684\u65B9\u5F0F\uFF0C\u4F46\u662F\u5982\u679C\u591A\u7EBF\u7A0B\u6267\u884C \u5224\u65AD\u6761\u4EF6 \u65F6\uFF0C\u53EF\u80FD\u4F1A\u540C\u6B65\u521B\u5EFA\u51FA\u591A\u4E2A\u5B9E\u4F8B</li><li>\u751F\u4EA7\u73AF\u5883\u4E0B\u4F9D\u7136\u4E0D\u5EFA\u8BAE\u4F7F\u7528\uFF1B</li></ul></li></ul><h3 id="\u53CC\u91CD\u9501\u6821\u9A8C-dcl" tabindex="-1"><a class="header-anchor" href="#\u53CC\u91CD\u9501\u6821\u9A8C-dcl" aria-hidden="true">#</a> \u53CC\u91CD\u9501\u6821\u9A8C\uFF08DCL\uFF09</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Singleton{
  // 1. \u6784\u9020\u5668\u79C1\u6709\u5316\uFF0C\u9632\u6B62\u5916\u90E8new
  private Singleton(){}

  // 2. \u4F7F\u7528 volatile \u5173\u952E\u5B57\u6765\u58F0\u660E
  private static volatile Singleton instance;

  // 3. \u5BF9\u5916\u66B4\u9732\u4F7F\u7528\u65B9\u6CD5\uFF0C\u5982\u679C\u5BF9\u8C61\u4E0D\u5B58\u5728\u5C31\u751F\u6210\u4E00\u4E2A\u8FDB\u884C\u8FD4\u56DE\uFF0C\u5E76\u4E14\u751F\u6210\u65B9\u6CD5\u5C5E\u4E8E\u540C\u6B65\u65B9\u6CD5\uFF0C\u907F\u514D\u7EBF\u7A0B\u540C\u6B65\u95EE\u9898\uFF1B
  public static Singleton getInstance(){
    if (instance == null) {
      synchronized (Singleton.class){
        if (instance == null) {
          instance = new Singleton();
        }
      }
    }
    return instance;
  }
}

// \u4F7F\u7528
Singleton oneSingleton = Singleton.getInstance();
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><ul><li>\u5206\u6790 <ul><li>\u7B2C\u4E00\u6B21\u6821\u9A8C\u65F6\uFF0C\u5982\u679C\u4E4B\u524D\u5DF2\u7ECF\u5B8C\u6210\u5B9E\u4F8B\u5316\uFF0C\u5C31\u76F4\u63A5\u8FD4\u56DE\uFF0C\u4E0D\u7528\u518D\u6B21\u751F\u6210\uFF0C\u63D0\u9AD8\u6548\u7387\uFF1B</li><li>\u5982\u679C\u6CA1\u6709\u7B2C\u4E8C\u6B21\u6821\u9A8C\uFF0C\u5728\u5E76\u53D1\u60C5\u51B5\u4E0B\uFF0C\u7EBF\u7A0Ba\u548C\u7EBF\u7A0Bb\u540C\u65F6\u8FDB\u5165\u540C\u6B65\u4EE3\u7801\u5757\uFF0C\u5047\u8BBE\u7EBF\u7A0Ba\u5148\u6267\u884C\u540C\u6B65\u4EE3\u7801\u5757\u8FDB\u884C\uFF0C\u5B8C\u6210\u5B9E\u4F8B\u5316\uFF0C\u4E4B\u540E\u7EBF\u7A0Bb\u83B7\u53D6\u6267\u884C\u6743\u9650\u540E\u4F1A\u518D\u6B21\u751F\u6210\u4E00\u4E2A\u5B9E\u4F8B\uFF1B\u52A0\u4E0A\u7B2C\u4E8C\u6B21\u6821\u9A8C\u540E\uFF0C\u7EBF\u7A0Bb\u83B7\u53D6\u6267\u884C\u6743\u9650\u540E\u5224\u65AD\u5DF2\u7ECF\u5B8C\u6210\u5B9E\u4F8B\u5316\uFF0C\u5C31\u4F1A\u76F4\u63A5\u8DF3\u51FA\u5224\u65AD\u8FD4\u56DE\u5B9E\u4F8B\u5316\u5BF9\u8C61\uFF1B</li><li>\u9AD8\u5E76\u53D1\u573A\u666F\u4E0B\uFF0C\u7EBF\u7A0Ba\u548C\u7EBF\u7A0Bb\u540C\u65F6\u6267\u884C\u5230 synchronized \u5904\u83B7\u53D6\u7684 instance \u5B9E\u4F8B\u4E3A null\uFF0C\u4F46\u662F\u7EBF\u7A0Ba\u5B8C\u6210\u5B9E\u4F8B\u5316\u540E\uFF0C\u7B49\u5F85\u6267\u884C\u6743\u9650\u7684\u7EBF\u7A0Bb\u80FD\u591F\u901A\u8FC7 volatile \u5173\u952E\u5B57\u7ACB\u523B\u83B7\u53D6\u5230 instance \u53D8\u91CF\u7684\u901A\u77E5\uFF0C\u968F\u540E instance \u53D8\u6210\u975E\u7A7A\uFF1B</li><li>\u5EF6\u8FDF\u52A0\u8F7D\uFF0C\u6548\u7387\u8F83\u9AD8\uFF0C\u5EFA\u8BAE\u5728\u751F\u4EA7\u73AF\u5883\u4E0B\u4F7F\u7528\uFF1B</li></ul></li></ul><h3 id="\u9759\u6001\u5185\u90E8\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u5185\u90E8\u7C7B" aria-hidden="true">#</a> \u9759\u6001\u5185\u90E8\u7C7B</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Singleton{
  private Singleton(){}

  private static class SingletonHolder{
    private final static Singleton INSTANCE = new Singleton();
  }

  public static getInstance(){
    return SingletonHolder.INSTANCE;
  }
}

// \u4F7F\u7528
Singleton oneSingleton = Singleton.getInstance();
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul><li>\u5206\u6790 <ul><li>\u9759\u6001\u5185\u90E8\u7C7B SingletonHolder \u5728\u7C7B\u521D\u59CB\u5316\u65F6\uFF0C\u5E76\u4E0D\u4F1A\u7ACB\u5373\u52A0\u8F7D\u5185\u90E8\u7C7B\uFF0C\u5185\u90E8\u7C7B\u4E0D\u4F1A\u52A0\u8F7D\uFF0C\u5C31\u4E0D\u4F1A\u751F\u6210 INSTANCE \u5B9E\u4F8B\uFF0C\u5C31\u4E0D\u4F1A\u5360\u7528\u5185\u5B58\u7A7A\u95F4\uFF1B\u53EA\u6709\u5F53getInstance()\u65B9\u6CD5\u7B2C\u4E00\u6B21\u88AB\u8C03\u7528\u65F6\uFF0C\u624D\u4F1A\u52A0\u8F7D\u5185\u90E8\u7C7B\uFF0C\u5B8C\u6210\u521D\u59CB\u5316\uFF1B</li><li>jvm\u4FDD\u8BC1\u540C\u4E00\u4E2A\u52A0\u8F7D\u5668\u7C7B\u578B\u4E0B\uFF0C\u4E00\u4E2A\u7C7B\u578B\u53EA\u4F1A\u521D\u59CB\u5316\u4E00\u6B21\uFF1B</li><li>\u7531\u4E8E\u662F\u9759\u6001\u5185\u90E8\u7C7B\u65B9\u5F0F\u5B8C\u6210\u7684\u5B9E\u4F8B\u5316\uFF0C\u56E0\u6B64\u6CA1\u6709\u529E\u6CD5\u5B8C\u6210\u53C2\u6570\u7684\u4F20\u9012\uFF1B</li><li>\u8FD9\u79CD\u65B9\u6CD5\u4E0D\u4EC5\u80FD\u591F\u4FDD\u8BC1\u7EBF\u7A0B\u5B89\u5168\u3001\u4E5F\u4FDD\u8BC1\u4E86\u5355\u4F8B\u7684\u552F\u4E00\u6027\uFF0C\u540C\u65F6\u8FD8\u5EF6\u8FDF\u4E86\u5355\u4F8B\u7684\u5B9E\u4F8B\u5316\uFF1B</li><li>\u63A8\u8350\u4F7F\u7528</li></ul></li></ul><h3 id="\u679A\u4E3E\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u679A\u4E3E\u7C7B" aria-hidden="true">#</a> \u679A\u4E3E\u7C7B</h3><p>\u7565\u3002</p><ul><li>\u5206\u6790 <ul><li>\u80FD\u907F\u514D\u591A\u7EBF\u7A0B\u540C\u6B65\u95EE\u9898\uFF0C\u8FD8\u80FD\u907F\u514D\u53CD\u5E8F\u5217\u5316\u65F6\u751F\u6210\u591A\u4E2A\u5B9E\u4F8B\u7684\u95EE\u9898\uFF1B</li><li>\u63A8\u8350\u4F7F\u7528</li></ul></li></ul><h3 id="\u5355\u4F8B\u6A21\u5F0F\u5728jdk\u4E2D\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5355\u4F8B\u6A21\u5F0F\u5728jdk\u4E2D\u7684\u4F7F\u7528" aria-hidden="true">#</a> \u5355\u4F8B\u6A21\u5F0F\u5728jdk\u4E2D\u7684\u4F7F\u7528</h3><p>java.lang.Runtime \u5C31\u662F\u7ECF\u5178\u7684\u997F\u6C49\u5F0F\u5355\u4F8B\u6A21\u5F0F\uFF1B</p><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> \u53C2\u8003\u94FE\u63A5</h2>`,30),o={href:"https://mp.weixin.qq.com/s?__biz=MzIyMjQwMTgyNA==&mid=2247483912&idx=1&sn=94e3c520c96a20346974ea498bc5b03a&chksm=e82f4647df58cf517fecbe048108c47cbdfde6c1688e2c4435ae532cc28d1ea5ba7e74d873ba&cur_album_id=1344000958027710464&scene=189#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},m=a("\u7EC8\u4E8E\u6709\u4EBA\u628A java\u4EE3\u7406 \u8BB2\u6E05\u695A\u4E86\uFF0C\u4E07\u5B57\u8BE6\u89E3\uFF01"),d={href:"http://www.cyc2018.xyz/%E5%85%B6%E5%AE%83/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%20-%20%E7%9B%AE%E5%BD%95.html#%E4%B8%80%E3%80%81%E5%89%8D%E8%A8%80",target:"_blank",rel:"noopener noreferrer"},g=a("\u8BBE\u8BA1\u6A21\u5F0F\u76EE\u5F55"),h={href:"https://mp.weixin.qq.com/s/Ji_mP7pO17ps5Mtku6Bq1Q",target:"_blank",rel:"noopener noreferrer"},S=a("2W \u5B57\u8BE6\u89E3\u8BBE\u8BA1\u6A21\u5F0F"),_={href:"https://java-design-patterns.com/",target:"_blank",rel:"noopener noreferrer"},v=a("Java Design Patterns"),x={href:"https://blog.csdn.net/t_chao/article/details/120194731",target:"_blank",rel:"noopener noreferrer"},f=a("\u77ED\u4FE1\u9632\u5237\u6D45\u8C08\u5BF9\u8BBE\u8BA1\u6A21\u5F0F\u7684\u5E94\u7528"),E={href:"https://blog.csdn.net/a19860903/article/details/49093401",target:"_blank",rel:"noopener noreferrer"},I=a("\u624B\u673A\u9A8C\u8BC1\u77ED\u4FE1\u8BBE\u8BA1\u4E0E\u4EE3\u7801\u5B9E\u73B0"),w=n("hr",null,null,-1),A=n("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:"https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg",alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,-1);function k(y,B){const e=l("ExternalLinkIcon");return c(),i(r,null,[u,n("ul",null,[n("li",null,[n("a",o,[m,s(e)])]),n("li",null,[n("a",d,[g,s(e)])]),n("li",null,[n("a",h,[S,s(e)])]),n("li",null,[n("a",_,[v,s(e)])]),n("li",null,[n("a",x,[f,s(e)])]),n("li",null,[n("a",E,[I,s(e)])])]),w,A],64)}var z=p(b,[["render",k],["__file","singleton.html.vue"]]);export{z as default};
