<script setup>
  import d1 from "../../demos/gqp_notification/demo1.vue"
  import d2 from "../../demos/gqp_notification/demo2.vue"
</script>
<style lang="scss">
  .btn{
    background: rgba(0,0,0,.05);
    display:inline-block;
    padding:.2rem 1rem;
    border-radius:.2rem;
    cursor:pointer;
  }
</style>

## 基本用法
<div class="btn">
  <d1/>
</div>

```vue
<script setup>
import { gqp_notification } from "guqingping-ui"
import "guqingping-ui/css"//you can import style in main.js
import { ref, onMounted, getCurrentInstance } from "vue"
const notification = ref(function () { console.log("Function replace failed") })
onMounted(() => {
  let { $refs } = (getCurrentInstance()).proxy;
  notification.value = $refs["gqp_notification_ref"].notification
})
</script>
<template>
  <gqp_notification gqp_custom_mark ref="gqp_notification_ref"></gqp_notification>
  <div @click="notification({ text: 'a full screen notification' })">Click to show notification</div>
</template>
 ```

## 修改单个组件样式
```vue
<script setup>
//开发中...
</script>
```

## 全局修改组件样式
```vue
<style lang="scss" scoped>
:global(.gqp_notification_box [text][text]) {
  //修改文本样式
  background: #131722;
}

:global(.gqp_notification_box [cover][cover]) {
  //修改遮罩样式
  background: rgba(0, 0, 0, .3);
}
</style>
```

## 配置项
> [!属性]未实现

| 属性  | 作用       | 类型                     |
| ----- | ---------- | ------------------------ |
| text  | 显示的文本 | string                   |
| !type | 类型       | enum("normal","warning") |
| !time | 显示时间   | number                   |
