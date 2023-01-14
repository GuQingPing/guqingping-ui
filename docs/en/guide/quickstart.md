## ES Modules
### Import All
```js
//main.js
import App from './App.vue'
const app = createApp(App)

import guqingping_ui from 'guqingping-ui'
import "guqingping-ui/css"
app.use(guqingping_ui)

app.mount('#app')
```

### Deconstruction import
```js
//main.js
import "guqingping-ui/css"
```
```js
//component.vue
import { gqp_notification } from "guqingping-ui"
```
