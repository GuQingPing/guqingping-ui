import{_ as i,o as p,c as D,w as a,r as F,a as e,b as r,d as s,n as h,p as C,e as g,f as A,g as d,h as y}from"./app.2f728fbe.js";const m={};function u(t,l){const o=F("gqp_nav");return p(),D(o,null,{left:a(()=>[e("左边")]),center:a(()=>[e("中间")]),right:a(()=>[e("右边")]),_:1})}const v=i(m,[["render",u]]);const n=t=>(C("data-v-7f29f8b5"),t=t(),g(),t),b=n(()=>s("div",{ib_items:"",btn:""},[s("div",null,"logo")],-1)),f=n(()=>s("div",null,"中间",-1)),x={ib_items:""},T=n(()=>s("div",null,"首页",-1)),k=n(()=>s("div",null,"关于",-1)),S=n(()=>s("div",null,"项目",-1)),q=n(()=>s("div",null,"联系",-1)),E=[T,k,S,q],I={__name:"demo2",setup(t){const l=r(!1);return r("body"),(o,c)=>{const _=F("gqp_nav");return p(),D(_,null,{left:a(()=>[b]),center:a(()=>[f]),right:a(()=>[s("div",{pe:"",onClick:c[0]||(c[0]=R=>l.value=!l.value),btn:""},"菜单"),s("div",x,[s("div",{side:"",ib_items:"",class:h(l.value?"show":"hide")},E,2)])]),_:1})}}},V=i(I,[["__scopeId","data-v-7f29f8b5"]]),$=s("h2",{id:"基本用法",tabindex:"-1"},[e("基本用法 "),s("a",{class:"header-anchor",href:"#基本用法","aria-hidden":"true"},"#")],-1),N={style:{filter:"blur(0)",height:"2em"}},P=y(`<details><summary>查看代码</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">gqp_nav</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#C792EA;">left</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#C792EA;">center</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">center</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#C792EA;">right</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">gqp_nav</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></details><h2 id="进阶用法" tabindex="-1">进阶用法 <a class="header-anchor" href="#进阶用法" aria-hidden="true">#</a></h2>`,2),w={style:{filter:"blur(0)",height:"10em"}},B=y(`<details><summary>查看代码</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">gqp_nav</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#C792EA;">left</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#C792EA;">center</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">center</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#C792EA;">right</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">gqp_nav</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></details><h2 id="预定义插槽" tabindex="-1">预定义插槽 <a class="header-anchor" href="#预定义插槽" aria-hidden="true">#</a></h2><table><thead><tr><th>写法</th><th>意义</th></tr></thead><tbody><tr><td>#left</td><td>导航栏左边</td></tr><tr><td>#center</td><td>导航栏中间</td></tr><tr><td>#right</td><td>导航栏右边</td></tr></tbody></table><h2 id="预定义属性样式关键字" tabindex="-1">预定义属性样式关键字 <a class="header-anchor" href="#预定义属性样式关键字" aria-hidden="true">#</a></h2><table><thead><tr><th>属性</th><th>作用</th></tr></thead><tbody><tr><td>pc</td><td>桌面端</td></tr><tr><td>pe</td><td>移动端</td></tr><tr><td>ib</td><td>inline-block</td></tr><tr><td>ib_items</td><td>直接子元素inline-block</td></tr><tr><td>btn</td><td>cursor: pointer</td></tr></tbody></table>`,5),z=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":2,"title":"进阶用法","slug":"进阶用法","link":"#进阶用法","children":[]},{"level":2,"title":"预定义插槽","slug":"预定义插槽","link":"#预定义插槽","children":[]},{"level":2,"title":"预定义属性样式关键字","slug":"预定义属性样式关键字","link":"#预定义属性样式关键字","children":[]}],"relativePath":"components/gqp_nav/index.md"}'),O={name:"components/gqp_nav/index.md"},J=Object.assign(O,{setup(t){return(l,o)=>(p(),A("div",null,[$,s("div",N,[d(v)]),P,s("div",w,[d(V)]),B]))}});export{z as __pageData,J as default};
