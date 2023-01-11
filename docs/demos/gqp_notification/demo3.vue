<script setup>
import { ref, onMounted, getCurrentInstance } from "vue"
const notification = ref(function () { console.log("Function replace failed") })
onMounted(() => {
  let { $refs } = (getCurrentInstance()).proxy;
  notification.value = $refs["gqp_notification_ref"].notification
})
const index = ref(1)
const positionIndex = ref(1)

</script>
<template>
  <gqp_notification ref="gqp_notification_ref"><template #cover>&nbsp;</template></gqp_notification>
  <div
    @click="notification({ text: `列表式通知${index++}`, time: 1, closeable: true, list: true, position: positionIndex })">
    Click to show notification
  </div>
  <div>position {{ positionIndex }}</div>
  <div>
    <div v-for="x in (1, 9)" @click="positionIndex = x"
      style="display:inline-block;background:#ccc;padding:.2em 1em;margin-right: .1em;">
      {{ x }}
    </div>
  </div>
</template>