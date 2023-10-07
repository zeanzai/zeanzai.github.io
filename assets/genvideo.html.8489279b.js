import{e as n}from"./app.66ae8b80.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h2 id="\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a> \u8BF4\u660E</h2><p>\u60F3\u5199\u4E00\u4E2A\u811A\u672C\u6765\u5B9E\u73B0\u4E00\u79CD\u6548\u679C\uFF1A \u622A\u7684\u56FE\u653E\u5230\u672C\u5730\u78C1\u76D8\u7684\u67D0\u4E2A\u76EE\u5F55\u4E0B\u9762\uFF0C\u7136\u540E\u6839\u636E\u622A\u7684\u56FE\u751F\u6210\u5BF9\u5E94\u7684\u77ED\u89C6\u9891\uFF0C\u6700\u540E\u628A\u56FE\u7247\u8FDB\u884C\u5F52\u6863\u3002</p><h2 id="\u51C6\u5907\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907\u5DE5\u4F5C" aria-hidden="true">#</a> \u51C6\u5907\u5DE5\u4F5C</h2><ul><li>ffmpeg\u8F6F\u4EF6\u5DE5\u5177</li><li>git\u5DE5\u5177</li><li>\u7531\u4E8E\u8981\u751F\u6210\u77ED\u89C6\u9891\uFF0C\u6240\u4EE5\u8FD8\u8981\u51C6\u5907\u4E00\u4E2Abgm\uFF1B</li></ul><h2 id="\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u811A\u672C" aria-hidden="true">#</a> \u811A\u672C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash

#######################################
# \u4ECE\u4E00\u4E2A\u6587\u4EF6\u5939\u4E2D\u8BFB\u53D6 png \u6587\u4EF6\uFF0C\u7136\u540E\u751F\u6210\u4E00\u4E2A 6s \u4E2D\u7684\u6296\u97F3\u89C6\u9891
#######################################

parentFolder=/d/Moonlight/001-culture/
nutStoreFolder=/d/Moonlight/Nutstore/

# \u4EE5\u65E5\u671F\u521B\u5EFA \u89C6\u9891\u8F93\u51FA\u6587\u4EF6\u5939
nowdate=\`date +%Y-%m-%d\`
videosFolder=$nutStoreFolder$nowdate
arcvFolder=$parentFolder$nowdate
mkdir -p $videosFolder $arcvFolder

pngFolder=$parentFolder&quot;pic&quot;
cd $pngFolder

# \u83B7\u53D6 \u80CC\u666F\u97F3\u4E50 \u6587\u4EF6
bgmFolder=$parentFolder&quot;bgm/&quot;
bgmFile=$bgmFolder&quot;bgm.mp3&quot;
echo $bgmFile


for i in *; do

    pngFile=$pngFolder&quot;/&quot;$i
    echo $pngFile

    name=\`echo &quot;$i&quot; | cut -d&#39;.&#39; -f1\`
    videoName=$name&quot;.mp4&quot;
    videoFile=$videosFolder&quot;/&quot;$videoName
    echo $videoFile

    # \u8BFB\u53D6 png \u56FE\u7247\uFF0C\u5E76\u8F93\u51FA\u89C6\u9891
    ffmpeg -threads 2 -loop 0 -y -r 0.7 \\
    -i $pngFile \\
    -i $bgmFile \\
    -t 6 -absf aac_adtstoasc \\
    -vf &quot;scale=&#39;if(gt(a*sar,9/16),576,1024*iw*sar/ih)&#39;:&#39;if(gt(a*sar,9/16),576*ih/iw/sar,1024)&#39;,pad=576:1024:(ow-iw)/2:(oh-ih)/2,setsar=1&quot; \\
    -vcodec libx264 -pix_fmt yuv420p -r 30 $videoFile -hide_banner
    
    sleep 2s

    # \u628A png \u56FE\u7247\u5F52\u6863
    mv $pngFile $arcvFolder&quot;/&quot;
done

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><h2 id="\u5B8C\u5584" tabindex="-1"><a class="header-anchor" href="#\u5B8C\u5584" aria-hidden="true">#</a> \u5B8C\u5584</h2><p>\u7531\u4E8E\u4F1A\u5B9A\u671F\u4FDD\u5B58\u4E00\u4E9B\u56FE\u7247\uFF0C\u5E76\u4E14\u4E5F\u5E0C\u671B\u8FD9\u4E9B\u56FE\u7247\u751F\u6210\u5BF9\u5E94\u7684\u77ED\u89C6\u9891\uFF0C\u56E0\u6B64\u8FD8\u60F3\u8981\u5B8C\u6210\uFF1A\u53EA\u9700\u8981\u624B\u52A8\u5F80\u56FE\u7247\u6587\u4EF6\u5939\u5185\u6DFB\u52A0\u56FE\u7247\uFF0C\u6267\u884C\u811A\u672C\u7684\u8FC7\u7A0B\u81EA\u52A8\u5316\u3002\u56E0\u6B64\uFF0C\u9700\u8981\u64CD\u4F5C\u7CFB\u7EDF\u81EA\u52A8\u6267\u884C\u4E0A\u9762\u5199\u7684\u811A\u672C\u3002</p><p>\u6240\u4EE5\uFF0C\u76F4\u63A5\u5728windows\u5E73\u53F0\u4E0A\u4F7F\u7528\u201C\u4EFB\u52A1\u8BA1\u5212...\u201D\u8FDB\u884C\u64CD\u4F5C\u5373\u53EF\u3002</p><hr><br><br><br><img style="border:1px red solid;display:block;margin:0 auto;" src="https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg" alt="\u5FAE\u4FE1\u516C\u4F17\u53F7">`,14);function r(l,i){return e}var o=s(a,[["render",r],["__file","genvideo.html.vue"]]);export{o as default};
