import{v as m,r as v,o as h,g as q,a as u,c as d,b as f,u as b,d as i,F as x,e as E,f as w}from"./app.47810790.js";var T=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function O(a){if(a.__esModule)return a;var l=a.default;if(typeof l=="function"){var o=function s(){if(this instanceof s){var e=[null];e.push.apply(e,arguments);var D=Function.bind.apply(l,e);return new D}return l.apply(this,arguments)};o.prototype=l.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(a).forEach(function(s){var e=Object.getOwnPropertyDescriptor(a,s);Object.defineProperty(o,s,e.get?e:{enumerable:!0,get:function(){return a[s]}})}),o}var y={},j={get exports(){return y},set exports(a){y=a}};const k=O(m);(function(a,l){(function(o,s){s(l,k)})(T,function(o,s){const e=(t,r)=>{const n=t.__vccOpts||t;for(const[p,F]of r)n[p]=F;return n},D=t=>(s.pushScopeId("data-v-cb511ac3"),t=t(),s.popScopeId(),t),C={text:""},A=D(()=>s.createElementVNode("div",{cover:""},null,-1)),c=e(Object.assign({name:"gqp_notification"},{setup(t,{expose:r}){const n=s.ref({text:"",show:!1,init:!0,timer:null,default_config:{text:"请输入提示文本",type:"normal",time:1.5}});return r({notification:function(p=n.value.default_config){n.value.init=!1,p=Object.assign(n.value.default_config,p),n.value.text=p.text,n.value.show=!0,n.value.timer&&clearTimeout(n.value.timer),n.value.timer=setTimeout(()=>{n.value.show=!1},p.time*1e3)}}),(p,F)=>(s.openBlock(),s.createBlock(s.Teleport,{to:"body"},[s.createElementVNode("div",{box:"",class:s.normalizeClass([n.value.show?"show":"hide",n.value.init?"init":""])},[s.createElementVNode("div",C,s.toDisplayString(n.value.text),1),A],2)]))}}),[["__scopeId","data-v-cb511ac3"]]);c.install=t=>t.component(c.name,c);const _=[c],g={install:t=>_.forEach(r=>t.use(r))};o.default=g,o.gqp_notification=c,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})})(j,y);const N={__name:"demo1",setup(a){const l=v(function(){console.log("Function replace failed")});return h(()=>{let{$refs:o}=q().proxy;l.value=o.gqp_notification_ref.notification}),(o,s)=>(u(),d(x,null,[f(b(y.gqp_notification),{ref:"gqp_notification_ref"},null,512),i("div",{onClick:s[0]||(s[0]=e=>l.value({text:"a full screen notification"}))},"Click to show notification")],64))}};const S=i("h2",{id:"基本用法",tabindex:"-1"},[E("基本用法 "),i("a",{class:"header-anchor",href:"#基本用法","aria-hidden":"true"},"#")],-1),V={class:"btn"},I=w("",3),$=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":2,"title":"配置项","slug":"配置项","link":"#配置项","children":[]}],"relativePath":"components/notification/index.md"}'),M={name:"components/notification/index.md"},B=Object.assign(M,{setup(a){return(l,o)=>(u(),d("div",null,[S,i("div",V,[f(N)]),I]))}});export{$ as __pageData,B as default};
