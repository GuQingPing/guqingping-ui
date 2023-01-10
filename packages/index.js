import gqp_notification from "./gqp_notification";
import gqp_nav from "./gqp_nav"

const components = [
  gqp_notification,
  gqp_nav
]
const install = function (app) {
  if (install.installed) return
  components.forEach((x) => app.use(x))
}

export {
  gqp_notification,
  gqp_nav
}

export default install