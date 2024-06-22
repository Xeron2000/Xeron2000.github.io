import{_ as e,D as t,c as n,I as i,a4 as a,o as l}from"./chunks/framework.C9TPVZd_.js";const y=JSON.parse('{"title":"🚀 快速上手","description":"","frontmatter":{"title":"🚀 快速上手","outline":"deep","desc":"十分钟快速搭建漂亮的个人博客！","tags":"Tutorial","updateTime":"2023-10-25 20:48"},"headers":[],"relativePath":"Notes/0tutorial/quickstart.md","filePath":"Notes/0tutorial/quickstart.md","lastUpdated":1719025399000}'),p={name:"Notes/0tutorial/quickstart.md"},h=a('<h1 id="🚀-快速上手" tabindex="-1">🚀 快速上手 <a class="header-anchor" href="#🚀-快速上手" aria-label="Permalink to &quot;🚀 快速上手&quot;">​</a></h1><h2 id="前置条件" tabindex="-1">前置条件 <a class="header-anchor" href="#前置条件" aria-label="Permalink to &quot;前置条件&quot;">​</a></h2><p>确保您满足以下条件：</p><ul><li>Node.js 版本不低于 18</li><li>使用支持 Markdown 语法的文本编辑器，例如 Visual Studio Code</li><li>熟悉 Git 基本操作，并有 Github 使用经验</li></ul><h2 id="安装与运行" tabindex="-1">安装与运行 <a class="header-anchor" href="#安装与运行" aria-label="Permalink to &quot;安装与运行&quot;">​</a></h2><h3 id="创建并拉取仓库" tabindex="-1">创建并拉取仓库 <a class="header-anchor" href="#创建并拉取仓库" aria-label="Permalink to &quot;创建并拉取仓库&quot;">​</a></h3><ol><li>打开该项目的 Github 仓库链接。</li><li>点击右上角的 <code>Use this template</code> 按钮，然后选择 <code>Create a new repository</code>。</li></ol><p>此时，你会被重定向到创建新仓库的页面，在此页面你可以<strong>自定义</strong>你的仓库名称，描述以及可见性。</p>',8),o=a('<ol start="3"><li>创建完成后，你会被重定向到你刚刚创建的仓库页面。点击右上角的 <code>Code</code> 按钮，复制 HTTPS 链接。</li><li>在您的本地命令行界面中，使用以下命令拉取仓库：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">你复制的HTTPS链</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">接</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h3 id="安装依赖-初次运行" tabindex="-1">安装依赖 &amp; 初次运行 <a class="header-anchor" href="#安装依赖-初次运行" aria-label="Permalink to &quot;安装依赖 &amp; 初次运行&quot;">​</a></h3><p>在 VSCode(或其他编辑器) 中打开你刚刚拉取的仓库，然后运行以下命令以安装项目所需的依赖：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><p>安装依赖完成后，运行以下命令启动项目：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:dev</span></span></code></pre></div><p>这个命令将启动一个本地开发服务器，并且会进行热更新。如果一切顺利，你将在本地看到和本网站一模一样的界面。</p><div class="tip custom-block"><p class="custom-block-title">🎉 现在，你可以开始编写你的博客了！</p><p>【强烈建议】：请在 <code>/docs/src/Notes</code> 目录下编写你的 markdown 文件或是创建子目录。</p></div><h2 id="下一步" tabindex="-1">下一步 <a class="header-anchor" href="#下一步" aria-label="Permalink to &quot;下一步&quot;">​</a></h2><p><strong>如果你从未使用过 VitePress</strong>：建议阅读官方文档了解基本路由知识</p>',11),d=a(`<p>随后：</p><ul><li>如果你想自定义网站的外观，请查看 <a href="./reference.html">个性化配置</a>。</li><li>如果你已经完成了博客站点的构建，可以阅读 <a href="./deployment.html">部署指南</a> 了解如何部署你的站点。</li></ul><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><p>以下是该项目的目录结构简要介绍，省略了部分不必要的信息</p><p>（如果你是一名前端开发人员，你可能已经知道它们的含义）：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─ docs</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  ├─ .vitepress</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  ├─ components</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  ├─ userConfig </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 用户数据：友链...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  │  └─ config.mjs </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// vitepress 配置入口</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│  └─ src           </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 存放所有的笔记文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│     ├─ public     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 存放一些静态资源，它们在构建后将保留原始名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│     ├─ Notes      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// markdown 笔记文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│     ├─ index.md       </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 主页</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│     ├─ AboutMe.md     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// “关于”页</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│     ├─ Friends.md     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 友链页</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│     └─ Projects.md    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// “项目”页</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─ tsconfig.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─ tailwind.config.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">└─ package.json</span></span></code></pre></div>`,6);function k(r,c,g,E,u,_){const s=t("LinkCard");return l(),n("div",null,[h,i(s,{desc:"easy-vitepress-blog | 十分钟快速搭建个人博客",link:"https://github.com/ZbWeR/easy-vitepress-blog"}),o,i(s,{link:"https://skewb.gitee.io/vitepress/guide/routing.html",desc:"【VitePress 民间翻译】 路由"}),i(s,{link:"https://vitepress.dev/guide/routing",desc:"【VitePress 官方文档】 Routing"}),d])}const m=e(p,[["render",k]]);export{y as __pageData,m as default};
