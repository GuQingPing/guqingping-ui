<script setup>
import { ref } from 'vue'
//状态对象
const notification_obj = ref({
  text: "",
  show: false,
  init: true,
  timer: null,
  lists: [],
  list_model: false,
  position: "center",
  default_config: {
    text: "请输入提示文本",
    closeable: false,
    time: 1.5,
    position: 5,
    list: false
  },
})
//位置九宫格
const position_arr = [
  "top_left",
  "top_center",
  "top_right",
  "center_left",
  "center",
  "center_right",
  "bottom_left",
  "bottom_center",
  "bottom_right",
]
//通知方法
let notification = function (params = notification_obj.value.default_config) {
  notification_obj.value.init = false
  params = Object.assign(notification_obj.value.default_config, params)//合并参数,传入默认值
  notification_obj.value.show = true
  switch (true) {//解析位置
    case params.position >= 1 && params.position <= 9:
      notification_obj.value.position = position_arr[params.position - 1]
      break
    default:
      console.error("传入非法位置", params.position, " from gqp_notification - notification()")
      break
  }

  if (params.list) {//列表
    notification_obj.value.list_model = true
    notification_obj.value.lists.push(params.text)
    if (params.time < 0) return // -1 不关闭
    setTimeout(() => {
      notification_obj.value.lists.shift()
      if (notification_obj.value.lists.length === 0) notification_obj.value.show = false
    }, params.time * 1000)
  } else {//单条
    notification_obj.value.list_model = false
    notification_obj.value.lists = [params.text]
    if (notification_obj.value.timer) clearTimeout(notification_obj.value.timer)
    if (params.time < 0) return // -1 不关闭
    notification_obj.value.timer = setTimeout(() => {
      notification_obj.value.show = false
    }, params.time * 1000)
  }
}
//关闭通知方法
let close = function () {
  if (!notification_obj.value.default_config.closeable || notification_obj.list_model) return
  if (notification_obj.value.timer) clearTimeout(notification_obj.value.timer)
  notification_obj.value.show = false
}
//暴露方法
defineExpose({ notification, close })
//传参
const props = defineProps({//带类型和默认值的写法
  type: {
    type: Number,
    default: 5
  }
})
</script>
<script>
export default { name: "gqp_notification" }
</script>
<template>
  <!-- <Teleport to="body"> -->
  <div :class="[
    true ? 'gqp_notification_box' : '',//基础样式
    true ? notification_obj.position : '',//位置
    notification_obj.show ? 'show' : 'hide',
    notification_obj.init ? 'init' : '',
    notification_obj.list_model ? 'list_box' : '',
  ]" @click="close">

    <div list>
      <slot>
        <div text v-for="x in notification_obj.lists">{{ x }}</div>
      </slot>
    </div>
    <slot name="cover">
      <div cover></div>
    </slot>
  </div>
  <!-- </Teleport> -->
</template>


<style lang="scss" scoped>
.gqp_notification_box {
  --time: 0.2;
  position: fixed;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 1000;

  [list] {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    // background: #fff;
    z-index: 1002;
    border-radius: .2rem;
    max-height: 90%;
    overflow-y: auto;

    [text] {
      padding: 2rem 2rem;
      background: #131722;
      color: #fff;
      margin-bottom: .3rem;
      font-size: 1.6rem;
      line-height: 1.4;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  @media only screen and (max-width:1023px) {
    [list] {
      min-width: 50%;
    }
  }

  @media only screen and (max-width:769px) {
    [list] {
      min-width: 70%;
    }
  }

  @media only screen and (max-width:461px) {
    [list] {
      min-width: 90%;
    }
  }

  :slotted([text]) {
    padding: 2rem 2rem;
    margin-bottom: .3rem;
    font-size: 1.6rem;
    line-height: 1.4;
    background: #131722;
    color: #fff;
    margin-bottom: .3rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  [cover],
  :slotted([cover]) {
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

  &.list_box {
    position: fixed;
    display: flex;
    width: auto;
    height: auto;
    overflow: hidden;
    display: flex;

    &>[list] {
      position: relative;
      left: 0;
      top: 0;
      transform: none;
      display: inline-block;
      z-index: 1002;
      border-radius: 0.2rem;
      max-height: 90%;
      overflow-y: auto;
    }
  }

  &.top_left {
    left: 1%;
    top: 1%;
  }

  &.top_center {
    left: 50%;
    top: 1%;
    transform: translate(-50%, 0);
  }

  &.top_right {
    right: 1%;
    top: 1%;
  }

  &.center_left {
    bottom: 50%;
    left: 1%;
  }

  &.center {
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 0%);

    &:not(.list_box) {
      bottom: 0;
    }
  }

  &.center_right {
    bottom: 50%;
    right: 1%;
  }

  &.bottom_left {
    bottom: 1%;
    left: 1%;
  }

  &.bottom_center {
    bottom: 1%;
    left: 50%;
    transform: translate(-50%, 0%);
  }

  &.bottom_right {
    bottom: 1%;
    right: 1%;
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