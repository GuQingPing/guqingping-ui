//导出组件
import gqp_notification from "./index.vue"

gqp_notification.install = (app) => app.component(gqp_notification.name, gqp_notification)

export default gqp_notification