# guqingping-ui
It's a temp for learn how to build a ui library, Do not install it Thanks<br>
[Document](https://guqingping.github.io/guqingping-ui/?lang=en)

## Install
```sh
npm i guqingping-ui
```

## Import
### Import All Use All
```js
//main.js
import App from './App.vue'
const app = createApp(App)

import guqingping_ui from 'guqingping-ui'
import "guqingping-ui/css"
app.use(guqingping_ui)

app.mount('#app')
```

### Import All Use Part
```js
//main.js
import "guqingping-ui/css"

//component.vue
import { gqp_notification } from "guqingping-ui"
```

## Usage
```js
import { gqp_notification } from "guqingping-ui"
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

