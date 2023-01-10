<script setup>

</script>
<script>
export default { name: "gqp_nav" }
</script>

<template>
  <div nav class="gqp_nav">
    <div center_box ib_items>
      <div left>
        <slot name="left" />
      </div>
      <div center>
        <slot name="center" />
      </div>
      <div right>
        <slot name="right" />
      </div>
    </div>
    <div shadow></div>
  </div>
</template>

<style lang="scss" scoped>
[nav] {
  /* 导航栏总容器 */
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 20;
  background: var(--bg);
  --bg: rgba(4, 0, 211, 0.1);
  --time: 1;

  [ib],
  [ib_items]>*,
  :slotted([ib]),
  :slotted([ib_items]>*) {
    display: inline-block;
  }

  :slotted([side]>*) {
    background: inherit;
    background: var(--bg);
    cursor: pointer;
  }

  [center_box] {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
  }

  [shadow] {
    /* 单边阴影 */
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    height: 1rem;
    overflow: hidden;
    z-index: 7;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      box-shadow: 0 -.5rem 1rem .1rem;
    }
  }

  :slotted([btn]) {
    cursor: pointer;
  }

  [pc],
  :slotted([pc]) {
    display: inline-block;
  }

  [pe],
  :slotted([pe]) {
    display: none;
  }

  .show,
  :slotted(.show) {
    animation: show calc(var(--time) * 1s) both;
  }

  .show,
  :slotted(.hide) {
    animation: hide calc(var(--time) * 1s) both;
  }

  :slotted([side].hide) {
    animation: none;
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

  @media only screen and (max-width:1023px) {

    [pc],
    :slotted([pc]) {
      display: none;
    }

    [pe],
    :slotted([pe]) {
      display: inline-block;
    }

    :slotted([side]) {
      position: absolute;
      right: 0;
      top: 100%;
      z-index: 8;
    }

    :slotted([side]>*),
    :slotted([side]>*),
    :slotted([side]>*) {
      display: block;
    }

    :slotted([side].hide) {
      animation: hide calc(var(--time) * 1s) both;
    }

    [left],
    [center],
    [right] {
      flex-grow: 1;
    }

    [left] {
      text-align: left;
    }

    [center] {
      text-align: center;
    }

    [right] {
      text-align: right;
    }
  }
}
</style>