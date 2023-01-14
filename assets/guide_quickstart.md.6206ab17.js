import{_ as s,o as a,f as n,h as l}from"./app.66d0a96a.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"ES Modules","slug":"es-modules","link":"#es-modules","children":[{"level":3,"title":"全部导入","slug":"全部导入","link":"#全部导入","children":[]},{"level":3,"title":"解构导入","slug":"解构导入","link":"#解构导入","children":[]}]},{"level":2,"title":"未测试script导入","slug":"未测试script导入","link":"#未测试script导入","children":[]}],"relativePath":"guide/quickstart.md"}'),p={name:"guide/quickstart.md"},o=l(`<h2 id="es-modules" tabindex="-1">ES Modules <a class="header-anchor" href="#es-modules" aria-hidden="true">#</a></h2><h3 id="全部导入" tabindex="-1">全部导入 <a class="header-anchor" href="#全部导入" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//main.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> App </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./App.vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(App)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> guqingping_ui </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">guqingping-ui</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">//导入组件库</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">guqingping-ui/css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">                    </span><span style="color:#676E95;font-style:italic;">//导入(全部)样式</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(guqingping_ui)                        </span><span style="color:#676E95;font-style:italic;">//注册组件库</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="解构导入" tabindex="-1">解构导入 <a class="header-anchor" href="#解构导入" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//main.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">guqingping-ui/css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">                    </span><span style="color:#676E95;font-style:italic;">//导入(全部)样式</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//component.vue</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">gqp_notification</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">guqingping-ui</span><span style="color:#89DDFF;">&quot;</span><span style="color:#676E95;font-style:italic;">//导入组件库但只暴露一部分</span></span>
<span class="line"></span></code></pre></div><h2 id="未测试script导入" tabindex="-1">未测试script导入 <a class="header-anchor" href="#未测试script导入" aria-hidden="true">#</a></h2>`,7),t=[o];function e(c,i,r,y,D,d){return a(),n("div",null,t)}const A=s(p,[["render",e]]);export{C as __pageData,A as default};