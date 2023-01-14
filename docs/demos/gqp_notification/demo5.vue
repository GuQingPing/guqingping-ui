<script setup>
import { ref, onMounted, getCurrentInstance } from "vue"
const notification = ref(function () { console.log("Function replace failed") })
onMounted(() => {
  let { $refs } = (getCurrentInstance()).proxy;
  notification.value = $refs["gqp_notification_ref"].notification
})
const positionIndex = ref(1)

</script>
<template>
  <gqp_notification ref="gqp_notification_ref">
    <div text custom_1>
      <span>进度条会随文本色变色</span>
    </div>
    <template #cover>&nbsp;</template>
  </gqp_notification>
  <div @click="notification({ time: 5, closeable: true, list: true, position: positionIndex, progress: true })">
    点击这里显示通知 显示位置->[{{ positionIndex }}]
    <span v-for="x in (1, 9)" @click="positionIndex = x" style="background:#ccc;padding:.2em .6em;margin-right: .1em;">
      {{ x }}
    </span>
  </div>
  <div>

  </div>
</template>
<style lang="scss" scoped>
[text][custom_1] {
  display: flex;
  align-items: center;
  color: #2ed573;
  background: #000;
  font-size: 1rem;
  padding: .3em 1em;
}

:deep([text][text][text]) {
  --progress_bg: #2ed573;
}
</style>