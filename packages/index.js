import gqp_notification from "./gqp_notification/index.js";

const uses = [
  gqp_notification,
]

const install = (app) => uses.forEach(x => app.use(x))
const UI = { install }

export {
  gqp_notification
}
export default UI;