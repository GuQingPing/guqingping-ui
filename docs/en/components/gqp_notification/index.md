<script setup>
  import d1 from "../../demos/gqp_notification/demo1.vue"
  import d1_2 from "../../demos/gqp_notification/demo1_progress.vue"
  import d2 from "../../demos/gqp_notification/demo2.vue"
  import d3 from "../../demos/gqp_notification/demo3.vue"
  import d4 from "../../demos/gqp_notification/demo4.vue"
  import d5 from "../../demos/gqp_notification/demo5.vue"
</script>

## Basic Usage
<div class="btn">
  <d1/>
</div>

<details>
<summary>View Code</summary>

<<< ./docs/en/demos/gqp_notification/demo1.vue
</details>

## Bring progress bar
<div class="btn">
  <d1_2/>
</div>

<details>
<summary>View Code</summary>

<<< ./docs/en/demos/gqp_notification/demo1_progress.vue
</details>

## Customize full-screen notifications
<div class="btn">
  <d2/>
</div>

<details>
<summary>View Code</summary>

<<< ./docs/en/demos/gqp_notification/demo2.vue
</details>

## List notification
<div class="btn">
  <d3/>
</div>
<details>
<summary>View Code</summary>

<<< ./docs/en/demos/gqp_notification/demo3.vue
</details>

## Custom list notification

<div class="btn">
  <d4/>
</div>
<details>
<summary>View Code</summary>

<<< ./docs/en/demos/gqp_notification/demo4.vue
</details>

## Custom list notification with progress bar
<div class="btn">
  <d5/>
</div>
<details>
<summary>View Code</summary>

<<< ./docs/en/demos/gqp_notification/demo5.vue
</details>

## Modify component styles globally
```vue
<style lang="scss" scoped>
:global(.gqp_notification_box [text][text]) {
  //Modify text style
  background: #131722;
}

:global(.gqp_notification_box [cover][cover]) {
  //Modify the mask style
  background: rgba(0, 0, 0, .3);
}
</style>
```

## notification() config params

| attr      | function                                                     | type    | default value    | special value |
| --------- | ------------------------------------------------------------ | ------- | ---------------- | ------------- |
| text      | the text to show                                             | string  | "请输入提示文本" |               |
| closeable | allow user click to close                                    | boolean | false            |               |
| time      | show time/S                                                  | number  | 1.5              | -1 infinite   |
| position  | show position<br>&nbsp;👇like this<br>1 2 3<br>4 5 6<br>7 8 9 | number  | 5                |               |
| list      | list model                                                   | boolean | false            |               |
| progress  | show progress-bar                                            | boolean | false            |               |

## predefine slot
| slot         | function            |
| ------------ | ------------------- |
| default-slot | custom show content |
| #cover       | custom cover        |

## predefine style identifier
| recommended slot | attr identifier | function                       |
| ---------------- | --------------- | ------------------------------ |
| default-slot     | [text]          | apply default style with text  |
| #cover           | [cover]         | apply default style with cover |
