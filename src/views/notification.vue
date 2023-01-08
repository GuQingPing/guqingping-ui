<script setup>
import { ref, onMounted, getCurrentInstance } from "vue"
const notification = ref(function () { console.log("Function replace failed") })
onMounted(() => {
  let { $refs } = (getCurrentInstance()).proxy;
  notification.value = $refs["notification_ref"].notification
})
</script>

<template>
  <gqp_notification ref="notification_ref"></gqp_notification>
  <div @click="notification({ text: 'a full screen notification' })">Click to show notification</div>
</template>

<style lang="scss">

</style>
