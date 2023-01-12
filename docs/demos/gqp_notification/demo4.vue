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
  <gqp_notification ref="gqp_notification_ref"><template #cover>&nbsp;</template></gqp_notification>
  <div @click="notification({ text: `列表式通知`, time: 2, closeable: true, list: true, position: positionIndex })">
    Click to show notification [{{ positionIndex }}]
    <span v-for="x in (1, 9)" @click="positionIndex = x" style="background:#ccc;padding:.2em .6em;margin-right: .1em;">
      {{ x }}
    </span>
  </div>
  <div>

  </div>
</template>