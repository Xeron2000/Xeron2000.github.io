import{_ as a,c as n,o as s,a4 as p}from"./chunks/framework.BZcgSH2F.js";const _=JSON.parse('{"title":"Archlinux使用python虚拟环境","description":"","frontmatter":{"title":"Archlinux使用python虚拟环境","outline":"deep","desc":"env","updateTime":"2024-07-04 16:45:57"},"headers":[],"relativePath":"Notes/2024/env.md","filePath":"Notes/2024/env.md","lastUpdated":1720083147000}'),e={name:"Notes/2024/env.md"},t=p(`<h2 id="archlinux使用python虚拟环境" tabindex="-1">Archlinux使用python虚拟环境 <a class="header-anchor" href="#archlinux使用python虚拟环境" aria-label="Permalink to &quot;Archlinux使用python虚拟环境&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo pacman -S python-virtualenv</span></span>
<span class="line"><span>virtualenv myenv //&#39;myenv&#39;自定义</span></span>
<span class="line"><span>source myenv/bin/activate //激活</span></span>
<span class="line"><span>deactivate //退出</span></span></code></pre></div><p>我的<code>myenv/bin/activate</code>下是这样的结构，所以我需要<code>source myenv/bin/activate.fish</code>激活虚拟环境</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>├── activate</span></span>
<span class="line"><span>├── activate.csh</span></span>
<span class="line"><span>├── activate.fish</span></span>
<span class="line"><span>├── activate.nu</span></span>
<span class="line"><span>├── activate.ps1</span></span>
<span class="line"><span>├── activate_this.py</span></span>
<span class="line"><span>├── pip</span></span>
<span class="line"><span>├── pip3</span></span>
<span class="line"><span>├── pip-3.12</span></span>
<span class="line"><span>├── pip3.12</span></span>
<span class="line"><span>├── python -&gt; /usr/bin/python</span></span>
<span class="line"><span>├── python3 -&gt; python</span></span>
<span class="line"><span>└── python3.12 -&gt; python</span></span></code></pre></div>`,4),i=[t];function c(l,o,h,d,r,v){return s(),n("div",null,i)}const y=a(e,[["render",c]]);export{_ as __pageData,y as default};
