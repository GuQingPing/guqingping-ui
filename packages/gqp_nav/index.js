//导出组件
import gqp_nav from "./index.vue"

gqp_nav.install = (app) => app.component(gqp_nav.name, gqp_nav)

export default gqp_nav