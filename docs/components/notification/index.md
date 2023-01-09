<script setup>
  import d1 from "../../demos/notification/demo1.vue"
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
  <gqp_notification ref="gqp_notification_ref"></gqp_notification>
  <div @click="notification({ text: 'a full screen notification' })">Click to show notification</div>
</template>
 ```

## 配置项
| 属性 | 作用       | 类型                     |
| ---- | ---------- | ------------------------ |
| text | 显示的文本 | string                   |
| type | 类型       | enum("normal","warning") |
| time | 显示时间   | number                   |
