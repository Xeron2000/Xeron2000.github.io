import{_ as a,E as s,c as p,I as e,a4 as t,o as i}from"./chunks/framework.Boyeo5Xd.js";const m=JSON.parse('{"title":"Archlinux使用python虚拟环境","description":"在 Arch Linux 系统上如何创建和管理 Python 虚拟环境。包括安装 `python-virtualenv` 包、创建虚拟环境、激活和退出虚拟环境的步骤，以及如何根据不同的 shell（如 Fish）选择合适的激活脚本。","frontmatter":{"date":"2024-07-04T00:00:00.000Z","title":"Archlinux使用python虚拟环境","category":"Arch","tags":["Arch","python","env"],"description":"在 Arch Linux 系统上如何创建和管理 Python 虚拟环境。包括安装 `python-virtualenv` 包、创建虚拟环境、激活和退出虚拟环境的步骤，以及如何根据不同的 shell（如 Fish）选择合适的激活脚本。"},"headers":[],"relativePath":"posts/env.md","filePath":"posts/env.md"}'),c={name:"posts/env.md"},l=t(`<h2 id="archlinux使用python虚拟环境" tabindex="-1">Archlinux使用python虚拟环境 <a class="header-anchor" href="#archlinux使用python虚拟环境" aria-label="Permalink to &quot;Archlinux使用python虚拟环境&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo pacman -S python-virtualenv</span></span>
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
<span class="line"><span>└── python3.12 -&gt; python</span></span></code></pre></div>`,4);function o(h,r,d,v,u,y){const n=s("Comment");return i(),p("div",null,[l,e(n)])}const g=a(c,[["render",o]]);export{m as __pageData,g as default};
