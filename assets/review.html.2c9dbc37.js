import{e as n}from"./app.65f1b23a.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h2 id="problem-description" tabindex="-1"><a class="header-anchor" href="#problem-description" aria-hidden="true">#</a> Problem Description</h2><p>Write a function to crush candy in a one dimensional board.</p><p>In candy crushing games, groups of like items are removed from the board. In this problem, any sequence of 3 or more like items should be removed and any items adjacent to that sequence should now be considered adjacent to each other. This process should be repeated as many times as possible.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
<span class="token number">1</span> ABBBBBCC  <span class="token operator">-&gt;</span> ACC
<span class="token number">2</span> ABCCCBB <span class="token operator">-&gt;</span> <span class="token class-name">A</span>
<span class="token number">3</span> ABCCCBBAAC <span class="token operator">-&gt;</span> <span class="token class-name">C</span>



ABBBBBCC

<span class="token comment">// </span>
arr<span class="token punctuation">[</span><span class="token punctuation">]</span>
stack1<span class="token punctuation">,</span> stack2

<span class="token comment">// arr -&gt; stack1 : ABCCCBB  </span>
<span class="token comment">// stack1:pop -&gt; stack2 </span>
<span class="token comment">//  \u5224\u65AD func(stack2)</span>

<span class="token comment">// stack2 \u6700\u4E0A\u4E09\u4E2A\u5143\u7D20\u5224\u65AD\uFF0C\u5982\u679C\u76F8\u7B49\uFF0C\u5C31\u5220\u9664 func(stack2)</span>
<span class="token keyword">public</span> <span class="token class-name">Stack</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Char</span><span class="token punctuation">&gt;</span></span> stackO<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">char</span> one<span class="token punctuation">,</span> two<span class="token punctuation">,</span> three<span class="token punctuation">;</span> <span class="token comment">// \u6700\u4E0A\u9762\u4E09\u4E2A</span>
    one <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    two <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    three <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>one <span class="token operator">==</span> two <span class="token operator">&amp;&amp;</span> two <span class="token operator">==</span> three<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> stackO<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    stackO<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>three<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>two<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>one<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> stackO<span class="token punctuation">;</span>

<span class="token punctuation">}</span>



<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div>`,4);function e(t,c){return p}var r=s(a,[["render",e],["__file","review.html.vue"]]);export{r as default};
