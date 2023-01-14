<script setup>
  import d1 from "../../demos/gqp_nav/demo1.vue"
  import d2 from "../../demos/gqp_nav/demo2.vue"
</script>

## Basic Usage
<div style="filter: blur(0);height:2em">
  <d1/>
</div>
<details>
<summary>View Code</summary>

<<< ./docs/en/demos/gqp_nav/demo1.vue
</details>


## Advanced usage
<div style="filter: blur(0);height:10em">
  <d2/>
</div>
<details>
<summary>View Code</summary>

<<< ./docs/en/demos/gqp_nav/demo2.vue
</details>

## predefine slot
| slot    | function   |
| ------- | ---------- |
| #left   | nav-left   |
| #center | nav-center |
| #right  | nav-right  |

## predefine style identifier
| attr     | function               |
| -------- | ---------------------- |
| pc       | desktop                |
| pe       | moible                 |
| ib       | inline-block           |
| ib_items | sub-items inline-block |
| btn      | cursor: pointer        |
