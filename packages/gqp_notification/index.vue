<script setup>
import { ref, toRaw } from 'vue'
//状态对象
const notification_obj = ref({
  text: "",
  show: false,
  init: true,
  timer: null,
  timers: [],
  lists: [],
  list_model: false,
  temp_index: 0,
  trans_time: 0.2,
  position: "center",
  default_config: {
    text: "请输入提示文本",
    closeable: false,
    time: 1.5,
    position: 5,
    list: false,
    progress: false
  },
})
//位置九宫格
const position_arr = [
  "top_left reverse",
  "top_center reverse",
  "top_right reverse",
  "center_left",
  "center",
  "center_right",
  "bottom_left",
  "bottom_center",
  "bottom_right",
]
let NOV = notification_obj.value
//关闭通知方法
let close = function () {
  if (!NOV.default_config.closeable || NOV.list_model) return
  if (NOV.timer) clearTimeout(NOV.timer)
  NOV.show = false
}
//检查数组状态
let check_arr = function () {
  if (NOV.lists.length > 0) return
  NOV.temp_index = 0
  NOV.show = false
}
let clear = function () {
  NOV = []
  NOV.temp_index = 0
  NOV.show = false
}
//删除列表通知方法
let list_remove = function (i) {
  if (!NOV.list_model) return
  const targetIndex = NOV.lists.findIndex(x => x.index === i)
  if (targetIndex < 0) return
  const target = NOV.lists[targetIndex]
  if (target.closeable && !target.closing) {
    console.log("list_remove", i, NOV.list_model ? "list" : "single", NOV.lists)
    clearTimeout(target.timeoutIndex)
    target.closing = true
    document.querySelector(`.gqp_notification_box [text][data-index='${i}']`).classList.add("closing")
    setTimeout(() => {
      NOV.lists.splice(NOV.lists.findIndex(x => x.index === i), 1)
      check_arr()
    }, NOV.trans_time * 1000)
  }
}
//通知方法
let notification = function (params = toRaw(NOV.default_config)) {
  NOV.init = false
  params = Object.assign(toRaw(NOV.default_config), params)//合并参数,传入默认值
  NOV.show = true
  switch (true) {//解析位置
    case params.position >= 1 && params.position <= 9:
      NOV.position = position_arr[params.position - 1]
      break
    default:
      console.error("传入非法位置", params.position, " from gqp_notification - notification()")
      break
  }

  if (NOV.list_model = params.list) {//列表 添加
    const now_index = NOV.temp_index / 1
    const timeoutIndex = setTimeout(() => {
      list_remove(now_index)
    }, params.time < 0 ? 1000 : params.time * 1000)
    NOV.lists.push({
      index: NOV.temp_index++,
      timeoutIndex,
      ...params,
    })
    if (params.time < 0) {
      clearTimeout(timeoutIndex)
      return
    }
    NOV.timers.push(timeoutIndex)
  } else {//单条 覆盖
    NOV.lists = [{
      index: NOV.temp_index++,
      ...params
    }]
    if (NOV.timer) clearTimeout(NOV.timer)
    if (params.time < 0) return
    NOV.timer = setTimeout(() => {
      NOV.temp_index %= 2
      NOV.show = false
    }, params.time * 1000)
  }
}
//暴露方法
defineExpose({ notification, close, list_remove, clear })
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
  ]" @click="close" :style="'--time:' + notification_obj.trans_time + 's'">

    <div list>
      <div text v-for="x in notification_obj.lists" :key="x.index" @click="list_remove(x.index)" :data-index="x.index"
        :class="[
          x.closeable ? 'clickable' : '',
          x.progress ? 'progress' : '',
          $slots?.default ? 'disable_default_style' : '',
        ]" :style="'--progress_time:' + x.time + 's'">
        <slot>
          {{ x.text }}
        </slot>
      </div>
    </div>
    <slot name="cover">
      <div cover></div>
    </slot>
  </div>
  <!-- </Teleport> -->
</template>


<style lang="scss" scoped>
.gqp_notification_box {
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

    [text] {
      position: relative;
      padding: 2rem 2rem;
      background: #131722;
      color: #fff;
      margin-bottom: .3rem;
      font-size: 1.6rem;
      line-height: 1.4;

      &:last-child {
        margin-bottom: 0;
      }

      &.disable_default_style.disable_default_style {
        padding: 0;
        background: unset;
      }

      &.clickable {
        cursor: pointer;

        &:hover {
          backdrop-filter: brightness(.9)
        }
      }
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
    animation: show var(--time) both;
  }

  &.hide {
    animation: hide var(--time) both;

    &.init {
      animation: hide 0s both;
    }
  }

  :not(.disable_default_style).progress::after {
    content: '';
    position: absolute;
    bottom: 1px;
    left: 0;
    width: 100%;
    height: .1em;
    border-radius: inherit;
    background: currentColor;
    animation: countdown var(--progress_time) linear forwards;


  }

  .progress>:slotted([text])::after {
    content: '';
    position: absolute;
    bottom: 1px;
    left: 0;
    width: 100%;
    height: .1em;
    border-radius: inherit;
    background: currentColor;
    animation: countdown var(--progress_time) linear forwards;

  }

  @keyframes countdown {
    to {
      width: 0
    }
  }

  &.list_box {
    position: fixed;
    display: inline-flex;
    width: auto;
    height: auto;

    &>[list] {
      position: relative;
      left: 0;
      top: 0;
      transform: none;
      display: inline-flex;
      flex-direction: column;
      z-index: 1002;
      border-radius: 0.2rem;
      max-height: 90%;

      &>[text] {
        padding: .5rem 1rem;
        font-size: 1rem;
        transform-origin: bottom;
        border-radius: .3rem;
        animation: grow calc(var(--time) * 1.5);

        &.closing {
          animation: hide var(--time) both;
        }

      }
    }
  }

  &.reverse>[list] {
    flex-direction: column-reverse;

    [text] {
      transform-origin: top;
    }

    [text]:first-child {
      margin-bottom: 0;
    }

    [text]:last-child {
      margin-bottom: .3rem;
    }
  }

  &.top_center,
  &.center,
  &.bottom_center {
    justify-content: center;
  }

  &.top_right,
  &.center_right,
  &.bottom_right {
    justify-content: flex-end;
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

  @keyframes grow {
    0% {
      height: 0;
      padding: 0;
      transform: scale(1, 0);
    }

    100% {
      transform: scale(1, 1);
    }
  }

  @media only screen and (max-width:1023px) {
    &:not(.list_box) [list] {
      width: 50%;
    }

    &.list_box {
      max-width: 40%;
    }
  }

  @media only screen and (max-width:769px) {
    &:not(.list_box) [list] {
      width: 70%;
    }

    &.list_box {
      max-width: 50%;
    }
  }

  @media only screen and (max-width:461px) {
    &:not(.list_box) [list] {
      width: 90%;
    }

    &.list_box {
      max-width: 60%;
    }
  }
}
</style>