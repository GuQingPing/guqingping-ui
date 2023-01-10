<script setup>
  import d1 from "../../demos/gqp_nav/demo1.vue"
  import d2 from "../../demos/gqp_nav/demo2.vue"
</script>

## 基本用法
<div style="filter: blur(0);height:2em">
  <d1/>
</div>

```vue
<template>
  <gqp_nav>
    <template #left>左边</template>
    <template #center>中间</template>
    <template #right>右边</template>
  </gqp_nav>
</template>
```

## 进阶用法
<div style="filter: blur(0);height:10em">
  <d2/>
</div>

```vue
<script setup>
import { ref } from "vue"
const nav = ref(false)
const a = ref("body")
</script>
<template>
  <gqp_nav>
    <template #left>
      <div ib_items btn>
        <div>logo</div>
      </div>
    </template>
    <template #center>
      <div>中间</div>
    </template>
    <template #right>
      <div pe @click="nav = !nav" btn>菜单</div>
      <div ib_items>
        <div side ib_items :class="nav ? 'show' : 'hide'">
          <div>首页</div>
          <div>关于</div>
          <div>项目</div>
          <div>联系</div>
        </div>
      </div>
    </template>
  </gqp_nav>
</template>
<style lang="scss" scoped>
// 自定义样式
:deep([side]) {
  //选择器写法1
  box-shadow: 0 0 0 .1rem #000;
}

[side] {
  //选择器写法2
  background: rgba(0, 0, 0, .1);
  color: #fff;
}

[side]>* {
  padding: .2em 1em;
}
</style>
```
## 插槽
| 写法    | 意义       |
| ------- | ---------- |
| #left   | 导航栏左边 |
| #center | 导航栏中间 |
| #right  | 导航栏右边 |

## 预设属性样式关键字
| 属性     | 作用                   |
| -------- | ---------------------- |
| pc       | 桌面端                 |
| pe       | 移动端                 |
| ib       | inline-block           |
| ib_items | 直接子元素inline-block |
| btn      | cursor: pointer        |

## 媒体查询
@media only screen and (max-width:1023px)