import{_ as t,E as e,c as a,I as o,a4 as i,o as n}from"./chunks/framework.Boyeo5Xd.js";const b=JSON.parse('{"title":"ssh连接GitHub","description":"","frontmatter":{"date":"2024-07-04T00:00:00.000Z","title":"ssh连接GitHub","category":"Code","tags":["ssh","github"]},"headers":[],"relativePath":"posts/sshgit.md","filePath":"posts/sshgit.md"}'),p={name:"posts/sshgit.md"},c=i(`<h2 id="ssh连接github" tabindex="-1">ssh连接GitHub <a class="header-anchor" href="#ssh连接github" aria-label="Permalink to &quot;ssh连接GitHub&quot;">​</a></h2><p>生成SSH密钥对</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ssh-keygen -t rsa -b 4096 -C &quot;your_email@example.com&quot;</span></span>
<span class="line"><span>cat ~/.ssh/id_rsa.pub</span></span></code></pre></div><p>添加至<code>https://github.com/settings/keys</code> 最后，运行以下命令来测试连接：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ssh -T git@github.com</span></span></code></pre></div>`,5);function h(d,l,r,u,_,g){const s=e("Comment");return n(),a("div",null,[c,o(s)])}const v=t(p,[["render",h]]);export{b as __pageData,v as default};
