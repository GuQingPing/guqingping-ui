import{b as r,i as C,j as A,o as t,f as e,g as c,d as s,F,r as d,_ as v,w as i,p as q,e as E,t as _,k as m,a as g,h as u}from"./app.0e4b89ff.js";const b={__name:"demo1",setup(o){const n=r(function(){console.log("Function replace failed")});return C(()=>{let{$refs:l}=A().proxy;n.value=l.gqp_notification_ref.notification}),(l,a)=>{const p=d("gqp_notification");return t(),e(F,null,[c(p,{ref:"gqp_notification_ref"},null,512),s("div",{onClick:a[0]||(a[0]=D=>n.value({text:"a full screen notificationa"}))}," Click to show notification")],64)}}};const f=o=>(q("data-v-9711a8d2"),o=o(),E(),o),x=f(()=>s("div",{text:"",custom_1:""},[s("svg",{t:"1673427792638",class:"icon",viewBox:"0 0 1104 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2707",width:"200",height:"200"},[s("path",{d:"M961.369 1020.986H141.063c-55.01 0-99.202-21.701-121.272-59.552-22.076-37.85-19.39-87.293 7.396-135.606l413.89-746.48c26.941-48.666 67.004-76.561 109.866-76.561 42.867 0 82.89 27.86 109.907 76.483l414.323 746.635c26.78 48.314 29.55 97.72 7.433 135.565-22.035 37.85-66.263 59.516-121.237 59.516zM550.984 81.148c-13.628 0-29.239 13.595-41.894 36.362L95.202 864.067c-12.968 23.43-16.004 44.475-8.258 57.752 7.753 13.244 27.488 20.85 54.119 20.85h820.306c26.673 0 46.372-7.565 54.119-20.85 7.704-13.242 4.71-34.28-8.293-57.71l-414.318-746.6c-12.618-22.766-28.306-36.361-41.893-36.361z m0.233 586.348c-21.488 0-38.93-17.516-38.93-39.182v-352.63c0-21.63 17.442-39.183 38.93-39.183 21.492 0 38.934 17.554 38.934 39.183v352.63c0 21.666-17.442 39.182-38.934 39.182z m-0.279 191.523c33.503 0 60.663-27.382 60.663-61.16 0-33.777-27.16-61.159-60.663-61.159s-60.663 27.382-60.663 61.16c0 33.777 27.16 61.16 60.663 61.16z","p-id":"2708",fill:"currentColor"})]),s("span",null,"你可以用插槽来显示自定义的内容")],-1)),k=f(()=>s("div",{cover:"",custom_1:""},"你甚至可以自定义遮罩",-1)),B={__name:"demo2",setup(o){const n=r(function(){console.log("Function replace failed")});return C(()=>{let{$refs:l}=A().proxy;n.value=l.gqp_notification_ref.notification}),(l,a)=>{const p=d("gqp_notification");return t(),e(F,null,[c(p,{ref:"gqp_notification_ref"},{cover:i(()=>[k]),default:i(()=>[x]),_:1},512),s("div",{onClick:a[0]||(a[0]=D=>n.value({text:"插槽文本优先级更高",time:-1,closeable:!0}))}," Click to show notification")],64)}}},w=v(B,[["__scopeId","data-v-9711a8d2"]]),I=["onClick"],$={__name:"demo3",setup(o){const n=r(function(){console.log("Function replace failed")});C(()=>{let{$refs:p}=A().proxy;n.value=p.gqp_notification_ref.notification});const l=r(1),a=r(1);return(p,D)=>{const h=d("gqp_notification");return t(),e(F,null,[c(h,{ref:"gqp_notification_ref"},{cover:i(()=>[g(" ")]),_:1},512),s("div",{onClick:D[0]||(D[0]=y=>n.value({text:`列表式通知${l.value++}`,time:1,closeable:!0,list:!0,position:a.value}))}," Click to show notification "),s("div",null,"position "+_(a.value),1),s("div",null,[(t(!0),e(F,null,m(9,y=>(t(),e("div",{onClick:L=>a.value=y,style:{display:"inline-block",background:"#ccc",padding:".2em 1em","margin-right":".1em"}},_(y),9,I))),256))])],64)}}};const T=s("h2",{id:"基本用法",tabindex:"-1"},[g("基本用法 "),s("a",{class:"header-anchor",href:"#基本用法","aria-hidden":"true"},"#")],-1),S={class:"btn"},M=u("",2),V={class:"btn"},z=u("",2),N={class:"btn"},P=u("",11),H=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":2,"title":"自定义全屏通知","slug":"自定义全屏通知","link":"#自定义全屏通知","children":[]},{"level":2,"title":"列表通知","slug":"列表通知","link":"#列表通知","children":[]},{"level":2,"title":"全局修改组件样式","slug":"全局修改组件样式","link":"#全局修改组件样式","children":[]},{"level":2,"title":"notification()配置项","slug":"notification-配置项","link":"#notification-配置项","children":[]},{"level":2,"title":"预定义的插槽","slug":"预定义的插槽","link":"#预定义的插槽","children":[]},{"level":2,"title":"预定义的样式关键词","slug":"预定义的样式关键词","link":"#预定义的样式关键词","children":[]},{"level":2,"title":"组件更新","slug":"组件更新","link":"#组件更新","children":[]}],"relativePath":"components/gqp_notification/index.md"}'),j={name:"components/gqp_notification/index.md"},O=Object.assign(j,{setup(o){return(n,l)=>(t(),e("div",null,[T,s("div",S,[c(b)]),M,s("div",V,[c(w)]),z,s("div",N,[c($)]),P]))}});export{H as __pageData,O as default};