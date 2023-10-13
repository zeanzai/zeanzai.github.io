import{r as i,c as r,a as e,b as s,F as t,e as l,d as a,o as c}from"./app.3140fa71.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const o={},h=l(`<h2 id="\u60F3\u8981\u7684\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u60F3\u8981\u7684\u6548\u679C" aria-hidden="true">#</a> \u60F3\u8981\u7684\u6548\u679C</h2><p>\u60F3\u8981\u7684\u6548\u679C\u662F\uFF0C\u4F7F\u7528\u540C\u4E00\u4E2Assh-key\uFF0C\u6765\u5B8C\u6210github\u7684\u914D\u7F6E\u548Cgitee\u7684\u914D\u7F6E\u5185\u5BB9\uFF0C\u8FD9\u91CC\u9700\u8981\u628AGitee\u7684\u7528\u6237\u540D\u548C\u90AE\u7BB1\u8BBE\u7F6E\u6210\u4E0EGitHub\u4E00\u6837\uFF0C\u53EA\u6709\u8FD9\u6837\u4F7F\u7528\u540C\u4E00\u5957sshkey\u624D\u6CA1\u6709\u95EE\u9898\uFF0C\u5E76\u4E14\u5168\u5C40\u914D\u7F6E\u5BF9\u4E24\u4E2A\u7F51\u7AD9\u624D\u80FD\u591F\u90FD\u751F\u6548\u3002</p><h2 id="\u73AF\u5883\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u914D\u7F6E" aria-hidden="true">#</a> \u73AF\u5883\u914D\u7F6E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u279C  zeanzai.github.io git:(master) \u2717 git --version
git version 2.30.1 (Apple Git-130)
\u279C  zeanzai.github.io git:(master) \u2717 sw_vers
ProductName:            macOS
ProductVersion:         14.0
BuildVersion:           23A344
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u4FEE\u6539\u5168\u5C40\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u5168\u5C40\u914D\u7F6E" aria-hidden="true">#</a> \u4FEE\u6539\u5168\u5C40\u914D\u7F6E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u279C  git config --global user.name &quot;zeanzai&quot;
\u279C  git config --global user.email &quot;zeanzai.me@gmail.com&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u751F\u6210sshkey" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210sshkey" aria-hidden="true">#</a> \u751F\u6210sshkey</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u279C  ssh-keygen -t ed25519 -C &quot;zeanzai.me@gmail.com&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u5C06-ssh-\u5BC6\u94A5\u6DFB\u52A0\u5230-ssh-agent" tabindex="-1"><a class="header-anchor" href="#\u5C06-ssh-\u5BC6\u94A5\u6DFB\u52A0\u5230-ssh-agent" aria-hidden="true">#</a> \u5C06 SSH \u5BC6\u94A5\u6DFB\u52A0\u5230 ssh-agent</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u279C  .ssh touch ~/.ssh/config
\u279C  .ssh vi config 

Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u78C1\u76D8\u5B9E\u4F8B\u5316-ssh" tabindex="-1"><a class="header-anchor" href="#\u78C1\u76D8\u5B9E\u4F8B\u5316-ssh" aria-hidden="true">#</a> \u78C1\u76D8\u5B9E\u4F8B\u5316 ssh</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u279C  .ssh ssh-add -K ~/.ssh/id_ed25519
WARNING: The -K and -A flags are deprecated and have been replaced
         by the --apple-use-keychain and --apple-load-keychain
         flags, respectively.  To suppress this warning, set the
         environment variable APPLE_SSH_ADD_BEHAVIOR as described in
         the ssh-add(1) manual page.
Identity added: /Users/shawnwang/.ssh/id_ed25519 (zeanzai.me@gmail.com)
\u279C  .ssh git config --global credential.helper store
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u914D\u7F6E\u516C\u94A5\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u516C\u94A5\u4FE1\u606F" aria-hidden="true">#</a> \u914D\u7F6E\u516C\u94A5\u4FE1\u606F</h2><p>\u628A\u516C\u94A5\u6587\u4EF6\u4E2D\u7684\u5185\u5BB9\u6DFB\u52A0\u5230GitHub\u7684ssh\u5217\u8868\u4E2D\uFF0CGitee\u7684ssh\u5217\u8868\u4E2D\u3002</p><h2 id="\u9A8C\u8BC1github" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1github" aria-hidden="true">#</a> \u9A8C\u8BC1github</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u279C  .ssh ssh -T git@github.com
Hi zeanzai! You&#39;ve successfully authenticated, but GitHub does not provide shell access.


// \u514B\u9686\u4E00\u4E2A\u4ED3\u5E93
// \u4FEE\u6539\u5176\u4E2D\u4E00\u4E2A\u6587\u4EF6\u5939
// \u6DFB\u52A0\u5230\u6682\u5B58\u533A
// \u63D0\u4EA4
// \u63A8\u9001\u5230\u8FDC\u7A0B
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote><p>\u6CE8\u610F\u8FD9\u91CC\u5FC5\u987B\u4F7F\u7528 git \u7528\u6237</p></blockquote><h2 id="\u9A8C\u8BC1gitee" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1gitee" aria-hidden="true">#</a> \u9A8C\u8BC1gitee</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u279C  .ssh ssh -T git@gitee.com
The authenticity of host &#39;gitee.com (212.64.63.190)&#39; can&#39;t be established.
ED25519 key fingerprint is SHA256:+ULzij2u99B9eWYFTw1Q4ErYG/aepHLbu96PAUCoV88.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added &#39;gitee.com&#39; (ED25519) to the list of known hosts.
Hi zeanzai! You&#39;ve successfully authenticated, but GITEE.COM does not provide shell access.


// \u514B\u9686\u4E00\u4E2A\u4ED3\u5E93
// \u4FEE\u6539\u5176\u4E2D\u4E00\u4E2A\u6587\u4EF6\u5939
// \u6DFB\u52A0\u5230\u6682\u5B58\u533A
// \u63D0\u4EA4
// \u63A8\u9001\u5230\u8FDC\u7A0B
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,20),u={href:"https://blog.csdn.net/HelloYoungr/article/details/118093921",target:"_blank",rel:"noopener noreferrer"},b=a("MACOS \u5B89\u88C5\u914D\u7F6E GIT"),p={href:"https://docs.github.com/cn/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent",target:"_blank",rel:"noopener noreferrer"},m=a("Generating a new SSH key and adding it to the ssh-agent"),g=e("hr",null,null,-1),x=e("p",null,[e("br"),e("br"),e("br"),e("img",{style:{border:"1px red solid",display:"block",margin:"0 auto"},src:"https://tianqingxiaozhu.oss-cn-shenzhen.aliyuncs.com/img/qrcode.jpg",alt:"\u5FAE\u4FE1\u516C\u4F17\u53F7"})],-1);function v(_,f){const n=i("ExternalLinkIcon");return c(),r(t,null,[h,e("ol",null,[e("li",null,[e("a",u,[b,s(n)])]),e("li",null,[e("a",p,[m,s(n)])])]),g,x],64)}var z=d(o,[["render",v],["__file","mac-use-git.html.vue"]]);export{z as default};
