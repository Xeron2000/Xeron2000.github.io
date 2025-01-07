import{_ as t,c as a,a2 as s,o as i}from"./chunks/framework.Bm3gaZVP.js";const v=JSON.parse('{"title":"Neovim批量替换文本","description":"在 Neovim 中批量替换文本，包括使用内置命令处理多个文件，以及使用 `nvim-spectre` 插件进行更强大的搜索和替换功能。","frontmatter":{"date":"2024-06-22T00:00:00.000Z","title":"Neovim批量替换文本","category":"Code","tags":["Arch","nvim","code"],"description":"在 Neovim 中批量替换文本，包括使用内置命令处理多个文件，以及使用 `nvim-spectre` 插件进行更强大的搜索和替换功能。"},"headers":[],"relativePath":"posts/nvim.md","filePath":"posts/nvim.md"}'),n={name:"posts/nvim.md"};function o(r,e,p,c,m,l){return i(),a("div",null,e[0]||(e[0]=[s(`<h2 id="neovim批量替换文本" tabindex="-1">Neovim批量替换文本 <a class="header-anchor" href="#neovim批量替换文本" aria-label="Permalink to &quot;Neovim批量替换文本&quot;">​</a></h2><p>在nvim中输入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>:args file1.txt file2.txt file3.txt #加载文件</span></span>
<span class="line"><span>:argdo %s/pattern/replacement/g</span></span></code></pre></div><p>或是使用<a href="https://github.com/nvim-pack/nvim-spectre" target="_blank" rel="noreferrer">nvim-spectre</a>插件</p>`,4)]))}const h=t(n,[["render",o]]);export{v as __pageData,h as default};