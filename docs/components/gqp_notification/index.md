<script setup>
  import d1 from "../../demos/gqp_notification/demo1.vue"
  import d1_2 from "../../demos/gqp_notification/demo1_progress.vue"
  import d2 from "../../demos/gqp_notification/demo2.vue"
  import d3 from "../../demos/gqp_notification/demo3.vue"
  import d4 from "../../demos/gqp_notification/demo4.vue"
  import d5 from "../../demos/gqp_notification/demo5.vue"
</script>

## 基本用法
<div class="btn">
  <d1/>
</div>

<details>
<summary>查看代码</summary>

<<< ./docs/demos/gqp_notification/demo1.vue
</details>

## 带上进度条
<div class="btn">
  <d1_2/>
</div>

<details>
<summary>查看代码</summary>

<<< ./docs/demos/gqp_notification/demo1_progress.vue
</details>

## 自定义全屏通知
<div class="btn">
  <d2/>
</div>

<details>
<summary>查看代码</summary>

<<< ./docs/demos/gqp_notification/demo2.vue
</details>

## 列表通知
<div class="btn">
  <d3/>
</div>
<details>
<summary>查看代码</summary>

<<< ./docs/demos/gqp_notification/demo3.vue
</details>

## 自定义列表通知

<div class="btn">
  <d4/>
</div>
<details>
<summary>查看代码</summary>

<<< ./docs/demos/gqp_notification/demo4.vue
</details>

## 带进度条的自定义列表通知
<div class="btn">
  <d5/>
</div>
<details>
<summary>查看代码</summary>

<<< ./docs/demos/gqp_notification/demo5.vue
</details>

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

## notification()配置项

| 属性      | 作用                                          | 类型    | 默认值           | 特殊值 |
| --------- | --------------------------------------------- | ------- | ---------------- | ------ |
| text      | 显示的文本                                    | string  | "请输入提示文本" |        |
| closeable | 用户点击关闭                                  | boolean | false            |        |
| time      | 显示时间/S                                    | number  | 1.5              | -1无限 |
| position  | 显示位置<br>九宫格<br>1 2 3<br>4 5 6<br>7 8 9 | number  | 5                |        |
| list      | 列表式通知                                    | boolean | false            |        |
| progress  | 显示进度条                                    | boolean | false            |        |

## 预定义的插槽
| 写法     | 作用           |
| -------- | -------------- |
| 默认插槽 | 自定义显示内容 |
| #cover   | 自定义遮罩     |

## 预定义的样式关键词
| 建议插槽 | 属性关键词 | 作用               |
| -------- | ---------- | ------------------ |
| 默认     | [text]     | 应用默认样式       |
| #cover   | [cover]    | 应用默认的遮罩样式 |
