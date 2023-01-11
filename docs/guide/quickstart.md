## ES Modules
### 全部导入
```js
//main.js
import App from './App.vue'
const app = createApp(App)

import guqingping_ui from 'guqingping-ui'     //导入组件库
import "guqingping-ui/css"                    //导入(全部)样式
app.use(guqingping_ui)                        //注册组件库

app.mount('#app')
```

### 解构导入
```js
//main.js
import "guqingping-ui/css"                    //导入(全部)样式
```
```js
//component.vue
import { gqp_notification } from "guqingping-ui"//导入组件库但只暴露一部分
```

## 未测试script导入