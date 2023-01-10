<script setup>
import { ref } from 'vue'
const notification_obj = ref({
  text: "",
  show: false,
  init: true,
  timer: null,
  default_config: {
    text: "请输入提示文本",
    type: "normal",
    time: 1.5,
  }
})
let notification = function (params = notification_obj.value.default_config) {
  notification_obj.value.init = false
  params = Object.assign(notification_obj.value.default_config, params)//合并参数,传入默认值
  notification_obj.value.text = params.text
  notification_obj.value.show = true
  if (notification_obj.value.timer) clearTimeout(notification_obj.value.timer)
  notification_obj.value.timer = setTimeout(() => {
    notification_obj.value.show = false
  }, params.time * 1000)
}
defineExpose({ notification })
</script>
<script>
export default { name: "gqp_notification" }
</script>
<template>
  <!-- <Teleport to="body"> -->
  <div :class="[true ? 'gqp_notification_box' : '', notification_obj.show ? 'show' : 'hide', notification_obj.init ? 'init' : ''
  ]">
    <div text>
      {{ notification_obj.text }}
    </div>
    <div cover></div>
  </div>
  <!-- </Teleport> -->
</template>


<style lang="scss" scoped>
.gqp_notification_box {
  --time: 0.3;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 1000;

  [text] {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    // background: #fff;
    background: #131722;
    color: #fff;
    font-size: 1.6rem;
    padding: 2rem 2rem;
    z-index: 1002;
    border-radius: .2rem;
  }

  @media only screen and (max-width:1023px) {
    [text] {
      min-width: 50%;
    }
  }

  @media only screen and (max-width:769px) {
    [text] {
      min-width: 70%;
    }
  }

  @media only screen and (max-width:461px) {
    [text] {
      min-width: 90%;
    }
  }

  [cover] {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .3);
    z-index: 1001;
  }

  &.show {
    animation: show calc(var(--time) * 1s) both;
  }

  &.hide {
    animation: hide calc(var(--time) * 1s) both;

    &.init {
      animation: hide 0s both;
    }
  }

  @keyframes show {
    0% {
      opacity: 0;
      visibility: visible;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes hide {
    0% {
      visibility: visible;
      opacity: 1;
    }

    99.999% {
      opacity: 0;
    }

    100% {
      visibility: hidden;
    }
  }
}
</style>