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
      <span>The progress bar will change color with the text</span>
    </div>
    <template #cover>&nbsp;</template>
  </gqp_notification>
  <div @click="notification({ time: -1, closeable: true, list: true, position: positionIndex, progress: true })">
    Click to show notification Position->[{{ positionIndex }}]
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