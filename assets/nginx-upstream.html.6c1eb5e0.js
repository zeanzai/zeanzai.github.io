import{c as s,a,F as p,e,o as t}from"./app.74b63de1.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const c={},r=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">############################################################################</span>
    <span class="token comment"># 1. \u5185\u5BB9\u7BA1\u7406\u7CFB\u7EDF start</span>
    upstream manager.taotao.com <span class="token punctuation">{</span>
	server <span class="token number">192.168</span>.100.202:8081<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>
        server_name  manager.taotao.com<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>
            proxy_pass   http://manager.taotao.com<span class="token punctuation">;</span>
            index  index.html index.htm<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment"># \u5185\u5BB9\u7BA1\u7406\u7CFB\u7EDF end</span>
    <span class="token comment">############################################################################</span>

    <span class="token comment">############################################################################</span>
    <span class="token comment"># 2. \u95E8\u6237\u670D\u52A1\u5668 start</span>
    upstream www.taotao.com <span class="token punctuation">{</span>
	server <span class="token number">192.168</span>.100.202:8081<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>
        server_name  www.taotao.com<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>
            proxy_pass   http://www.taotao.com<span class="token punctuation">;</span>
            index  index.html index.htm<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment"># \u95E8\u6237\u670D\u52A1\u5668 end</span>
    <span class="token comment">############################################################################</span>

    <span class="token comment">############################################################################</span>
    <span class="token comment"># 3. rest\u670D\u52A1 start</span>
    upstream rest.taotao.com <span class="token punctuation">{</span>
	server <span class="token number">192.168</span>.100.202:8081<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>
        server_name  rest.taotao.com<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>
            proxy_pass   http://rest.taotao.com<span class="token punctuation">;</span>
            index  index.html index.htm<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment"># rest\u670D\u52A1 end</span>
    <span class="token comment">############################################################################</span>

    <span class="token comment">############################################################################</span>
    <span class="token comment"># 4. sso\u5355\u70B9\u767B\u5F55 start</span>
    upstream sso.taotao.com <span class="token punctuation">{</span>
	server <span class="token number">192.168</span>.100.202:8081<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>
        server_name  sso.taotao.com<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>
            proxy_pass   http://sso.taotao.com<span class="token punctuation">;</span>
            index  index.html index.htm<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment"># sso\u5355\u70B9\u767B\u5F55 end</span>
    <span class="token comment">############################################################################</span>

    <span class="token comment">############################################################################</span>
    <span class="token comment"># 5. search\u670D\u52A1 start</span>
    upstream search.taotao.com <span class="token punctuation">{</span>
	server <span class="token number">192.168</span>.100.202:8081<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>
        server_name  search.taotao.com<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>
            proxy_pass   http://search.taotao.com<span class="token punctuation">;</span>
            index  index.html index.htm<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment"># search\u670D\u52A1 end</span>
    <span class="token comment">############################################################################</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br></div></div>`,1),o=["src"];function u(n,b){return t(),s(p,null,[r,a("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:n.$withBase("/qrcode.jpg"),alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"},null,8,o)],64)}var k=l(c,[["render",u],["__file","nginx-upstream.html.vue"]]);export{k as default};
