import{_ as i,c as a,o as n,a2 as l}from"./chunks/framework.B9nwU1SX.js";const g=JSON.parse('{"title":"Claude Code&Codex 资源推荐","description":"分享我从 roo code 转向 claude code 的原因，以及我整理的一些实用的 claude code 资源和 MCP 配置，帮助新手快速上手","frontmatter":{"date":"2025-09-06T00:00:00.000Z","title":"Claude Code&Codex 资源推荐","category":"Development","tags":["claude-code","mcp","ai-agent"],"description":"分享我从 roo code 转向 claude code 的原因，以及我整理的一些实用的 claude code 资源和 MCP 配置，帮助新手快速上手","ai_edited":true,"ai_analyzed_at":"2025-09-06T15:27:35.752Z"},"headers":[],"relativePath":"posts/cc_use.md","filePath":"posts/cc_use.md"}'),h={name:"posts/cc_use.md"};function t(p,s,k,e,E,d){return n(),a("div",null,s[0]||(s[0]=[l(`<h2 id="为什么选择-claude-code" tabindex="-1">为什么选择 Claude Code？ <a class="header-anchor" href="#为什么选择-claude-code" aria-label="Permalink to &quot;为什么选择 Claude Code？&quot;">​</a></h2><p><code>claude code</code> 出了好久了，刚开始我虽然喜欢使用终端，但是对 <code>claude code</code> 无感（主要是因为贵），一直使用 <code>roo code</code> <code>cline</code> 这种 vscode 扩展。后来 <code>cc</code>（代指 <code>claude code</code> 下文皆是）被逆向，可以自定义模型之后我才开始尝试，发现 <code>cc</code> 居然很好用</p><p>最吸引我的还是指令系统，作为一个命令行重度用户，没有什么比不用鼠标到处点击更爽了。其次是 <code>cc</code> 只需要一个终端就能跑，比 <code>cursor</code> <code>cline</code> 这种自由度高。<code>cc</code> 的提示词调教比较好，使用相同的模型，<code>cc</code> 相比较其他编程 agent 来说效果更好。这几点也让我彻底转向 <code>cc</code></p><h2 id="资源分享" tabindex="-1">资源分享 <a class="header-anchor" href="#资源分享" aria-label="Permalink to &quot;资源分享&quot;">​</a></h2><p>我整理了一下我使用 <code>cc</code> 的一些实用资源：</p><ul><li><p><strong><a href="https://linux.do/t/topic/931722" target="_blank" rel="noreferrer">CLAUDE.md</a></strong>：这个帖子是佬友整理的 <code>CLAUDE.md</code> ，效果很好，结合很多编程实用的 mcp 和 子代理 agent ，规范 <code>cc</code> 的输出</p></li><li><p><strong><a href="https://github.com/musistudio/claude-code-router.git" target="_blank" rel="noreferrer">claude-code-router</a></strong>：自定义 <code>cc</code> 模型，无需多言因为这个才用 <code>cc</code></p></li><li><p><strong><a href="https://github.com/wshobson/agents.git" target="_blank" rel="noreferrer">agents</a></strong>：<code>cc</code> 子代理，配合佬友的 <code>CLAUDE.md</code></p></li><li><p><strong><a href="https://github.com/bmad-code-org/BMAD-METHOD.git" target="_blank" rel="noreferrer">BMAD-METHOD</a></strong>：bmad-methon 是敏捷人工智能开发规范。我最常用的是里面一个 <code>analyst</code> 的 agent，我喜欢用它做头脑风暴。其他的 agent 我不是很常用，它的 <code>sm -&gt; dev -&gt; qa</code> 迭代我倒是挺喜欢，但是 agent 太多，上手有点难度</p></li><li><p><strong><a href="https://github.com/Pimzino/spec-workflow-mcp.git" target="_blank" rel="noreferrer">spec-workflow-mcp</a></strong>：规范开发的 mcp，fork 的 <code>kiro</code> 的特色功能。先创建 <code>requirements</code> 需求文档，然后创建 <code>design</code> 设计文档，最后遵循这两个文档创建 <code>tasks</code>，把复杂的任务拆分成小步骤实现</p></li><li><p><strong><a href="https://github.com/oraios/serena.git" target="_blank" rel="noreferrer">serena</a></strong>：<code>serena</code> 可以语义检索，精准编辑代码，还可以减少 token 用量，效率更高。这个 mcp 一定要用，接入 <code>cc</code> 直接</p></li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">claude</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mcp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> serena</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uvx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git+https://github.com/oraios/serena</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> serena</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start-mcp-server</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --context</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ide-assistant</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --project</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">pwd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><ul><li><strong><a href="https://github.com/UfoMiao/zcf.git" target="_blank" rel="noreferrer">zcf</a></strong>：<code>zcf</code> 也是 linuxdo 里的佬友开发的，旨在为 <code>cc</code> 新手提供开箱即用的体验，推荐入门使用，现在也支持 <code>codex</code></li></ul><h2 id="mcp-配置参考" tabindex="-1">MCP 配置参考 <a class="header-anchor" href="#mcp-配置参考" aria-label="Permalink to &quot;MCP 配置参考&quot;">​</a></h2><p>下面我贴一下我常用的 mcp 可以参考, 有的需要具体目录配置我就不贴出来了</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// .mcp.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;mcpServers&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;context7&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stdio&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;npx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;args&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;-y&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;@upstash/context7-mcp@latest&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;env&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;open-websearch&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stdio&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;npx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;args&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;-y&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;open-websearch@latest&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;env&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;MODE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stdio&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;DEFAULT_SEARCH_ENGINE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;duckduckgo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;ALLOWED_SEARCH_ENGINES&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;duckduckgo,bing,brave&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;mcp-deepwiki&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stdio&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;npx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;args&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;-y&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;mcp-deepwiki@latest&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;env&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;Playwright&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stdio&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;npx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;args&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;-y&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;@playwright/mcp@latest&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;env&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;serena&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stdio&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;uvx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;args&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;--from&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;git+https://github.com/oraios/serena&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;serena&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;start-mcp-server&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;--context&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;ide-assistant&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;false&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;env&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;sequential-thinking&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;npx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;args&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;-y&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;@modelcontextprotocol/server-sequential-thinking&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;env&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;fetch&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;args&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;mcp-server-fetch&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;uvx&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ~/.codex/config.toml</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[mcp_servers.sequential-thinking]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;npx&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-y&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@modelcontextprotocol/server-sequential-thinking&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = {}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">startup_timeout_ms</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 60000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[mcp_servers.context7]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;npx&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-y&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@upstash/context7-mcp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = {}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">startup_timeout_ms</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 60000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[mcp_servers.memory]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;npx&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-y&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@modelcontextprotocol/server-memory&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = {}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">startup_timeout_ms</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 60000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[mcp_servers.duckduckgo-search]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stdio&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;uvx&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;duckduckgo-mcp-server&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = {}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">startup_timeout_ms</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 60000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[mcp_servers.fetch]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;uvx&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mcp-server-fetch&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">startup_timeout_ms</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 60000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[mcp_servers.serena]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;uvx&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;--from&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;git+https://github.com/oraios/serena&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;serena&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;start-mcp-server&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;--context&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;codex&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">startup_timeout_ms</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 60000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[mcp_servers.chrome-devtools]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;npx&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-y&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;chrome-devtools-mcp@latest&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">startup_timeout_ms</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 60000</span></span></code></pre></div><h2 id="自用的-claude-md" tabindex="-1">自用的 <code>CLAUDE.md</code> <a class="header-anchor" href="#自用的-claude-md" aria-label="Permalink to &quot;自用的 \`CLAUDE.md\`&quot;">​</a></h2><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 你是一个专业 AI 编程助手</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**description:**</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`专业AI编程助手，提供结构化六阶段开发工作流（研究→构思→计划→执行→优化→评审），集成MCP服务与质量把关体系，面向专业开发者\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 特别约束</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">&gt; 本文档及所有交互中，除非用户明确授权，否则 </span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**禁止输出任何 emoji 或表情符号**</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">&gt; 所有输出必须保持专业、简洁、纯文本风格。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 上下文</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 当前任务：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`$ARGUMENTS\`</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 使用结构化六阶段开发工作流（研究→构思→计划→执行→优化→评审）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 内置质量把关与 MCP 工具集成</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 面向专业开发者，交互简洁、专业</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **前端项目统一使用 </span><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">\`pnpm\`</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> 作为包管理器**</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **Python 项目统一使用 </span><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">\`uv\`</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> 作为包管理器**</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **简单、低风险、可直接执行的任务（如代码片段修复、小函数实现、轻量查询等）可直接运行，无需进入完整工作流或征询用户确认**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 你的角色</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">你是 IDE 的 AI 编程助手。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">职责：以中文执行结构化开发工作流，并在每阶段主动请求用户确认。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">语气：专业、简洁、无冗余解释。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">沟通规则</span><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 回复以 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`[模式：X]\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 开头，初始为 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`[模式：研究]\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 核心阶段按以下顺序严格流转（除非用户指令跳转）：</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   \`研究 → 构思 → 计划 → 执行 → 优化 → 评审\`</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **若判断任务属于“简单任务”（满足以下条件），则可直接执行，无需启动完整工作流：**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 不涉及文件系统、项目结构或持久变更；</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 不需要跨多阶段推理；</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 无安全或质量风险；</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 输出明确且自解释（如单函数、配置调整、命令行示例等）。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 执行前后仍应保持输出专业与安全。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 核心工作流详解</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 阶段   | 模式标签      | 主要任务                                   |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| ---- | --------- | -------------------------------------- |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 1 研究 | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`[模式：研究]\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | 评估需求完整性（0–10分），缺信息则提出补充问题              |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 2 构思 | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`[模式：构思]\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | 生成至少两种可行方案并评估优劣                        |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 3 计划 | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`[模式：计划]\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | 制定详细步骤清单（文件、逻辑、预期结果），用户批准后执行           |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 4 执行 | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`[模式：执行]\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | 严格按计划实现代码，关键步骤写入 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`.claude/plan/任务名.md\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 5 优化 | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`[模式：优化]\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | 自动审查执行结果，提出改进建议，经确认后优化                 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 6 评审 | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`[模式：评审]\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | 对照计划评估质量，输出总结并请求最终确认                   |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 主动反馈规则</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 每阶段结束都必须请求用户确认。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 若用户反馈非空，需调整方案并再次确认。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 仅当用户明确结束时方可终止流程。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">4.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 任务完成前必须征求最终确认。</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">5.</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **对于简单任务，若满足“直接执行条件”，可跳过确认步骤并立即返回结果。**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 自动上下文收集</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">无需询问的自动信息：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 技术栈与框架版本（从配置文件提取）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 项目结构与代码规范</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 构建与测试命令（从 CLAUDE.md 获取）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 质量标准与执行约束</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 回复必须使用中文</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 禁止生成恶意或无授权代码</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 编码前必须完成上下文理解与分析</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 执行前强制 sequential-thinking 分析（简单任务除外）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 每次执行结果均需 quality review</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 工程原则</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **设计：**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 遵循 SOLID、DRY、关注点分离</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **代码：**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 清晰命名、合理抽象、必要注释</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **性能：**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 优化复杂度与内存使用</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **测试：**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 设计可测试代码，验证边界与错误</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## SUBAGENT SELECTION</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">════════════════════</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">必须主动调用合适子代理，以确保在不同技术领域中高质量执行任务。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">当检测到任务涉及以下领域时，必须自动调用对应子代理：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Python 项目 → </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`python-pro\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">（使用 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`uv\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 作为包管理器）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> C# / .NET 项目 → </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`csharp-pro\`</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> JavaScript / TypeScript 项目 → </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`javascript-pro\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> / </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`typescript-pro\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">（使用 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`pnpm\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 作为包管理器）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Unity 开发 → </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`unity-developer\`</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 前端开发 → </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`frontend-developer\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">（使用 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`pnpm\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 后端架构 → </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`backend-architect\`</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 云架构 → </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`cloud-architect\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> / </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`hybrid-cloud-architect\`</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 数据库优化 → </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`database-optimizer\`</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 安全审计 → </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`security-auditor\`</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 代码审查 → </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`code-reviewer\`</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 测试自动化 → </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`test-automator\`</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 性能优化 → </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`performance-engineer\`</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DevOps 部署 → </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`deployment-engineer\`</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 文档编写 → </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`docs-architect\`</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 错误调试 → </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`debugger\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> / </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`error-detective\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 包管理规范</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">为保持开发一致性与依赖稳定性，必须遵循以下包管理策略：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **前端与 Node.js 项目**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 使用 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`pnpm\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 作为统一包管理器</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 禁止使用 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`npm\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 或 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`yarn\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 安装依赖</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 默认执行命令示例：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     \`\`\`bash</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     pnpm install</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     pnpm run dev</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     pnpm run build</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     \`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **Python 项目**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 使用 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`uv\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 作为包与环境管理工具</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 禁止使用 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`pip\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 或 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`poetry\`</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">   *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 默认执行命令示例：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     \`\`\`bash</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     uv sync</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     uv run main.py</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     uv add requests</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     \`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 最终执行结构</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">project/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── .claude/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   └── plan/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│       └── 任务名.md</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── src/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── components/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── services/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── utils/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   └── types/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── tests/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── unit/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── integration/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   └── e2e/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">└── README.md</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span></code></pre></div><h2 id="相关链接" tabindex="-1">相关链接 <a class="header-anchor" href="#相关链接" aria-label="Permalink to &quot;相关链接&quot;">​</a></h2><ul><li><a href="https://linux.do/t/topic/931722" target="_blank" rel="noreferrer">https://linux.do/t/topic/931722</a></li><li><a href="https://github.com/musistudio/claude-code-router.git" target="_blank" rel="noreferrer">https://github.com/musistudio/claude-code-router.git</a></li><li><a href="https://github.com/wshobson/agents.git" target="_blank" rel="noreferrer">https://github.com/wshobson/agents.git</a></li><li><a href="https://github.com/bmad-code-org/BMAD-METHOD.git" target="_blank" rel="noreferrer">https://github.com/bmad-code-org/BMAD-METHOD.git</a></li><li><a href="https://github.com/Pimzino/spec-workflow-mcp.git" target="_blank" rel="noreferrer">https://github.com/Pimzino/spec-workflow-mcp.git</a></li><li><a href="https://github.com/oraios/serena.git" target="_blank" rel="noreferrer">https://github.com/oraios/serena.git</a></li><li><a href="https://github.com/UfoMiao/zcf.git" target="_blank" rel="noreferrer">https://github.com/UfoMiao/zcf.git</a></li></ul>`,16)]))}const o=i(h,[["render",t]]);export{g as __pageData,o as default};
