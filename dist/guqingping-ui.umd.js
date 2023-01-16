(function(l,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(l=typeof globalThis<"u"?globalThis:l||self,e(l["guqingping-ui"]={},l.Vue))})(this,function(l,e){"use strict";const j="",u=(i,r)=>{const s=i.__vccOpts||i;for(const[f,t]of r)s[f]=t;return s},h=i=>(e.pushScopeId("data-v-cd79f67f"),i=i(),e.popScopeId(),i),x={list:""},b=["onClick","data-index"],y=h(()=>e.createElementVNode("div",{cover:""},null,-1)),_=u(Object.assign({name:"gqp_notification"},{props:{type:{type:Number,default:5}},setup(i,{expose:r}){const s=e.ref({text:"",show:!1,init:!0,timer:null,timers:[],lists:[],list_model:!1,temp_index:0,trans_time:.2,position:"center",default_config:{text:"请输入提示文本",closeable:!1,time:1.5,position:5,list:!1,progress:!1}}),f=["top_left reverse","top_center reverse","top_right reverse","center_left","center","center_right","bottom_left","bottom_center","bottom_right"];let t=s.value,p=function(){!t.default_config.closeable||t.list_model||(t.timer&&clearTimeout(t.timer),t.show=!1)},B=function(){t.lists.length>0||(t.temp_index=0,t.show=!1)},v=function(){t=[],t.temp_index=0,t.show=!1},m=function(o){if(!t.list_model)return;const c=t.lists.findIndex(d=>d.index===o);if(c<0)return;const n=t.lists[c];n.closeable&&!n.closing&&(console.log("list_remove",o,t.list_model?"list":"single",t.lists),clearTimeout(n.timeoutIndex),n.closing=!0,document.querySelector(`.gqp_notification_box [text][data-index='${o}']`).classList.add("closing"),setTimeout(()=>{t.lists.splice(t.lists.findIndex(d=>d.index===o),1),B()},t.trans_time*1e3))};return r({notification:function(o=e.toRaw(t.default_config)){switch(t.init=!1,o=Object.assign(e.toRaw(t.default_config),o),t.show=!0,!0){case(o.position>=1&&o.position<=9):t.position=f[o.position-1];break;default:console.error("传入非法位置",o.position," from gqp_notification - notification()");break}if(t.list_model=o.list){const c=t.temp_index/1,n=setTimeout(()=>{m(c)},o.time<0?1e3:o.time*1e3);if(t.lists.push({index:t.temp_index++,timeoutIndex:n,...o}),o.time<0){clearTimeout(n);return}t.timers.push(n)}else{if(t.lists=[{index:t.temp_index++,...o}],t.timer&&clearTimeout(t.timer),o.time<0)return;t.timer=setTimeout(()=>{t.temp_index%=2,t.show=!1},o.time*1e3)}},close:p,list_remove:m,clear:v}),(o,c)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["gqp_notification_box",s.value.position,s.value.show?"show":"hide",s.value.init?"init":"",s.value.list_model?"list_box":""]),onClick:c[0]||(c[0]=(...n)=>e.unref(p)&&e.unref(p)(...n)),style:e.normalizeStyle("--time:"+s.value.trans_time+"s")},[e.createElementVNode("div",x,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(s.value.lists,n=>{var d;return e.openBlock(),e.createElementBlock("div",{text:"",key:n.index,onClick:M=>e.unref(m)(n.index),"data-index":n.index,class:e.normalizeClass([n.closeable?"clickable":"",n.progress?"progress":"",(d=o.$slots)!=null&&d.default?"disable_default_style":""]),style:e.normalizeStyle("--progress_time:"+n.time+"s")},[e.renderSlot(o.$slots,"default",{},()=>[e.createTextVNode(e.toDisplayString(n.text),1)])],14,b)}),128))]),e.renderSlot(o.$slots,"cover",{},()=>[y])],6))}}),[["__scopeId","data-v-cd79f67f"]]);_.install=i=>i.component(_.name,_);const z="",$={name:"gqp_nav"},k=i=>(e.pushScopeId("data-v-0a84edac"),i=i(),e.popScopeId(),i),S={nav:"",class:"gqp_nav"},w={center_box:"",ib_items:""},q={left:""},I={center:""},E={right:""},T=k(()=>e.createElementVNode("div",{shadow:""},null,-1));function N(i,r,s,f,t,p){return e.openBlock(),e.createElementBlock("div",S,[e.createElementVNode("div",w,[e.createElementVNode("div",q,[e.renderSlot(i.$slots,"left")]),e.createElementVNode("div",I,[e.renderSlot(i.$slots,"center")]),e.createElementVNode("div",E,[e.renderSlot(i.$slots,"right")])]),T])}const a=u($,[["render",N],["__scopeId","data-v-0a84edac"]]);a.install=i=>i.component(a.name,a);const V=[_,a],g=function(i){g.installed||V.forEach(r=>i.use(r))};l.default=g,l.gqp_nav=a,l.gqp_notification=_,Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
