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
      <div pe @click="nav = !nav" btn>menu</div>
      <div ib_items>
        <div side ib_items :class="nav ? 'show' : 'hide'">
          <div>home</div>
          <div>about</div>
          <div>projects</div>
          <div>contact</div>
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