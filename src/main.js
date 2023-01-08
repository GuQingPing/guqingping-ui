import { createApp } from 'vue'
import App from './App.vue'

import router from './router'       //路由
import i18n from './locals'         //国际化
import UI from "../packages/index"  //组件库

const app = createApp(App)

const uses = [
  i18n,
  router,
  UI
]

for (let x of uses) app.use(x)

app.mount('#app')
