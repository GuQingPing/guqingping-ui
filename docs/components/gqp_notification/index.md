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

## 自定义通知
<div class="btn">
  <d2/>
</div>

```vue
<script setup>
import { ref, onMounted, getCurrentInstance } from "vue"
const notification = ref(function () { console.log("Function replace failed") })
onMounted(() => {
  let { $refs } = (getCurrentInstance()).proxy;
  notification.value = $refs["gqp_notification_ref"].notification
})
</script>
<template>
  <gqp_notification ref="gqp_notification_ref">
    <div box>
      <svg t="1673427792638" class="icon" viewBox="0 0 1104 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="2707" width="200" height="200">
        <path
          d="M961.369 1020.986H141.063c-55.01 0-99.202-21.701-121.272-59.552-22.076-37.85-19.39-87.293 7.396-135.606l413.89-746.48c26.941-48.666 67.004-76.561 109.866-76.561 42.867 0 82.89 27.86 109.907 76.483l414.323 746.635c26.78 48.314 29.55 97.72 7.433 135.565-22.035 37.85-66.263 59.516-121.237 59.516zM550.984 81.148c-13.628 0-29.239 13.595-41.894 36.362L95.202 864.067c-12.968 23.43-16.004 44.475-8.258 57.752 7.753 13.244 27.488 20.85 54.119 20.85h820.306c26.673 0 46.372-7.565 54.119-20.85 7.704-13.242 4.71-34.28-8.293-57.71l-414.318-746.6c-12.618-22.766-28.306-36.361-41.893-36.361z m0.233 586.348c-21.488 0-38.93-17.516-38.93-39.182v-352.63c0-21.63 17.442-39.183 38.93-39.183 21.492 0 38.934 17.554 38.934 39.183v352.63c0 21.666-17.442 39.182-38.934 39.182z m-0.279 191.523c33.503 0 60.663-27.382 60.663-61.16 0-33.777-27.16-61.159-60.663-61.159s-60.663 27.382-60.663 61.16c0 33.777 27.16 61.16 60.663 61.16z"
          p-id="2708" fill="currentColor"></path>
      </svg>
      <span>你可以用插槽来显示自定义的内容</span>
    </div>
    <template #cover>
      <div cover custom_1>你甚至可以自定义遮罩</div>
    </template>
  </gqp_notification>
  <div @click="notification({ text: '插槽文本优先级更高', time: -1, closeable: true })">
    Click to show notification</div>
</template>
<style>
[box] {
  margin: -2rem -2rem;
  padding: 2rem 2rem;
  display: flex;
  align-items: center;
  color: rgb(0, 0, 0);
  background: orange;
}

svg {
  width: 2rem;
  height: 2rem;
  display: inline-block;
  margin: 0 .3em;
}

[cover][custom_1] {
  background: rgba(255, 165, 0, .3) !important;
  color: #fff;
  font-size: 2rem;
  line-height: 18;
  text-shadow: 0 0 calc(.2em + 0px) black;
}
</style>
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

| 属性      | 作用         | 类型    | 默认值           | 特殊值 |
| --------- | ------------ | ------- | ---------------- | ------ |
| text      | 显示的文本   | string  | "请输入提示文本" |        |
| closeable | 用户点击关闭 | boolean | false            |        |
| time      | 显示时间/S   | number  | 1.5              | -1无限 |

## 预定义的插槽
| 写法     | 作用           |
| -------- | -------------- |
| 默认插槽 | 自定义显示内容 |
| #cover   | 自定义遮罩     |

## 预定义的属性关键词
| 建议插槽 | 关键字    | 作用               |
| -------- | --------- | ------------------ |
| 默认     | [padding] | 消除默认样式边距   |
| #cover   | [cover]   | 应用默认的遮罩样式 |

