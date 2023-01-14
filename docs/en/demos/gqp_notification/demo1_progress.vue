<script setup>
import { ref, onMounted, getCurrentInstance } from "vue"
const notification = ref(function () { console.log("Function replace failed") })
onMounted(() => {
  let { $refs } = (getCurrentInstance()).proxy;
  notification.value = $refs["gqp_notification_ref"].notification
})
</script>
<template>
  <gqp_notification ref="gqp_notification_ref"></gqp_notification>
  <div @click="notification({ text: 'Now it has a progress bar', progress: true })">
    Click to show notification</div>
</template>