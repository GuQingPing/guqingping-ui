# guqingping-ui
It's a temp for learn how to build a ui library, Do not install it Thanks<br>
[Document](guqingping.github.io/guqingping-ui/)

## Install
```sh
npm i guqingping-ui
```

## Import
```sh
import { gqp_notification } from "guqingping-ui"
```
## Components List
- gpq_notification

## Usage
```js
import { gqp_notification } from "guqingping-ui"
import "guqingping-ui/css"//you can import style in main.js
import { ref, onMounted, getCurrentInstance } from "vue"
const notification = ref(function () { console.log("Function replace failed") })
onMounted(() => {
  let { $refs } = (getCurrentInstance()).proxy;
  notification.value = $refs["gqp_notification_ref"].notification
})
```
```vue
<template>
  <gqp_notification ref="gqp_notification_ref"></gqp_notification>
  <div @click="notification({ text: 'a full screen notification' })">Click to show notification</div>
</template>
```

