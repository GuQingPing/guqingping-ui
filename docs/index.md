---
layout: home
 
hero:
  name: GuQingPing UI
  text: Vue3.2 响应式 定制化 组件库
  tagline: 让一切简化
  actions:
    - theme: brand
      text: 开始
      link: /guide/quickstart
    - theme: alt
      text: 查看GitHub
      link: https://github.com/vuejs/vitepress
 
features:
  - icon: ⚡️
    title: 快速
    details: 文档示例，开箱即用，简洁语法，无需记忆繁琐配置
  - icon: 🖖
    title: 响应式
    details: 默认适配，内置样式关键词，减少适配工作量
  - icon: 🛠️
    title: 定制化
    details: 插槽，选择器，高度自定义的样式
---
<style lang="scss">
    :root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
}
.contact{
  padding: 10px 64px 64px;
  h1{
    font-size: 40px;
    font-weight: 700;
    line-height: 80px;
  }
  p{
    font-size: 34px;
    line-height: 40px;
  }
}
</style>
<script setup>
  import {onMounted} from 'vue'
  
  onMounted(()=>{
    const getParameters = URL => JSON.parse(`{"${decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"')}"}` )
    const {lang} = getParameters(location.href)
    if(lang=="en") document.querySelector(".VPMenu a[href='/guqingping-ui/en/']").click()
  })
</script>
<!-- <div class="contact">
  <div>
    <h1>联系作者</h1>
    <p>QQ: 2846913281</p>
    <p>Mail: guqingping_program@foxmail.com</p>
    <p>Mail2: guqingping_program@qq.com</p>
    <p>Mail3: 2846913281@qq.com</p>
  </div>
</div> -->

