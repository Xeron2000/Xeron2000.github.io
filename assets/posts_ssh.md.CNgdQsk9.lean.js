import{_ as a,c as n,a2 as t,H as e,D as h,o as l}from"./chunks/framework.Bm3gaZVP.js";const u=JSON.parse('{"title":"使用direnv管理本地多个 GitHub 账号 SSH 密钥","description":"使用direnv可以为每个项目自动加载环境变量，从而为每个目录加载单独的环境配置，实现项目目录中的 Git 配置自动切换","frontmatter":{"date":"2024-10-25T00:00:00.000Z","title":"使用direnv管理本地多个 GitHub 账号 SSH 密钥","category":"Arch","tags":["Arch","ssh","Hyprland","github"],"description":"使用direnv可以为每个项目自动加载环境变量，从而为每个目录加载单独的环境配置，实现项目目录中的 Git 配置自动切换"},"headers":[],"relativePath":"posts/ssh.md","filePath":"posts/ssh.md"}'),p={name:"posts/ssh.md"};function k(d,s,r,o,c,g){const i=h("Comment");return l(),n("div",null,[s[0]||(s[0]=t(`<p>使用 <strong>direnv</strong> 可以为每个项目自动加载环境变量，从而为每个目录加载单独的环境配置，实现项目目录中的 Git 配置自动切换。</p><h2 id="安装-direnv" tabindex="-1">安装 direnv <a class="header-anchor" href="#安装-direnv" aria-label="Permalink to &quot;安装 direnv&quot;">​</a></h2><h3 id="在-ubuntu-和-arch-linux-上安装" tabindex="-1">在 Ubuntu 和 Arch Linux 上安装 <a class="header-anchor" href="#在-ubuntu-和-arch-linux-上安装" aria-label="Permalink to &quot;在 Ubuntu 和 Arch Linux 上安装&quot;">​</a></h3><ol><li><p><strong>安装 direnv：</strong></p><p>在 Ubuntu 上运行：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> direnv</span></span></code></pre></div><p>在 Arch Linux 上运行：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> direnv</span></span></code></pre></div></li><li><p><strong>配置 shell 环境：</strong></p><p>在 shell 配置文件中添加以下内容：</p><ul><li><p>对于 <strong>bash</strong>，在 <code>~/.bashrc</code> 中添加：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">eval</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">direnv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hook bash)&quot;</span></span></code></pre></div></li><li><p>对于 <strong>zsh</strong>，在 <code>~/.zshrc</code> 中添加：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">eval</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">direnv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hook zsh)&quot;</span></span></code></pre></div></li><li><p>对于 <strong>Fish</strong>，在 <code>~/.config/fish/config.fish</code> 中添加：</p><div class="language-fish vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">fish</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">direnv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hook fish </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> source</span></span></code></pre></div></li></ul></li><li><p><strong>重新加载 shell 配置：</strong></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.bashrc</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 或者 source ~/.zshrc 或 source ~/.config/fish/config.fish</span></span></code></pre></div></li></ol><h2 id="设置-ssh-配置文件" tabindex="-1">设置 SSH 配置文件 <a class="header-anchor" href="#设置-ssh-配置文件" aria-label="Permalink to &quot;设置 SSH 配置文件&quot;">​</a></h2><p>编辑 <code>~/.ssh/config</code> 文件（如果不存在，则创建该文件），并添加以下内容：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Host</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> github.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    HostName</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> github.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    User</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    IdentityFile</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.ssh/id_rsa</span></span></code></pre></div><p>根据需要更改 <code>IdentityFile</code> 的路径</p><h2 id="设置-envrc" tabindex="-1">设置 <code>.envrc</code> <a class="header-anchor" href="#设置-envrc" aria-label="Permalink to &quot;设置 \`.envrc\`&quot;">​</a></h2><p>在项目目录下创建 <code>.envrc</code> 文件，添加以下配置：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置项目特定的 Git 用户信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user.name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Project Specific Name&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user.email</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;project_specific_email@example.com&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 指定 SSH 密钥路径</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SSH_KEY_PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.ssh/id_rsa_custom&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果 SSH 密钥存在，则添加到 ssh-agent</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$SSH_KEY_PATH</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">then</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ssh-add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$SSH_KEY_PATH</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fi</span></span></code></pre></div><h3 id="允许-envrc-文件" tabindex="-1">允许 <code>.envrc</code> 文件 <a class="header-anchor" href="#允许-envrc-文件" aria-label="Permalink to &quot;允许 \`.envrc\` 文件&quot;">​</a></h3><p>进入项目目录后，运行以下命令以使 <strong>direnv</strong> 允许并加载 <code>.envrc</code> 配置：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">direnv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> allow</span></span></code></pre></div>`,14)),e(i)])}const b=a(p,[["render",k]]);export{u as __pageData,b as default};
