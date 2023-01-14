<script setup>
  import d1 from "../../demos/gqp_nav/demo1.vue"
  import d2 from "../../demos/gqp_nav/demo2.vue"
</script>

## 基本用法
<div style="filter: blur(0);height:2em">
  <d1/>
</div>
<details>
<summary>查看代码</summary>

<<< ./docs/en/demos/gqp_nav/demo1.vue
</details>

## 进阶用法
<div style="filter: blur(0);height:10em">
  <d2/>
</div>
<details>
<summary>查看代码</summary>

<<< ./docs/en/demos/gqp_nav/demo1.vue
</details>

## 预定义插槽
| 写法    | 意义       |
| ------- | ---------- |
| #left   | 导航栏左边 |
| #center | 导航栏中间 |
| #right  | 导航栏右边 |

## 预定义属性样式关键字
| 属性     | 作用                   |
| -------- | ---------------------- |
| pc       | 桌面端                 |
| pe       | 移动端                 |
| ib       | inline-block           |
| ib_items | 直接子元素inline-block |
| btn      | cursor: pointer        |
