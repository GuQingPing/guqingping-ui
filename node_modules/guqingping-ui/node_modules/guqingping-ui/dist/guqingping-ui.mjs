import { ref as s, openBlock as l, createBlock as _, Teleport as u, createElementVNode as c, normalizeClass as f, toDisplayString as r, pushScopeId as d, popScopeId as v } from "vue";
const p = (e, i) => {
  const t = e.__vccOpts || e;
  for (const [a, o] of i)
    t[a] = o;
  return t;
}, m = (e) => (d("data-v-7cf8a364"), e = e(), v(), e), h = { text: "" }, x = /* @__PURE__ */ m(() => /* @__PURE__ */ c("div", { cover: "" }, null, -1)), g = { name: "gqp_notification" }, w = /* @__PURE__ */ Object.assign(g, {
  setup(e, { expose: i }) {
    const t = s({
      text: "",
      show: !1,
      init: !0,
      timer: null,
      default_config: {
        text: "请输入提示文本",
        type: "normal",
        time: 1.5
      }
    });
    return i({ notification: function(o = t.value.default_config) {
      t.value.init = !1, o = Object.assign(t.value.default_config, o), t.value.text = o.text, t.value.show = !0, t.value.timer && clearTimeout(t.value.timer), t.value.timer = setTimeout(() => {
        t.value.show = !1;
      }, o.time * 1e3);
    } }), (o, I) => (l(), _(u, { to: "body" }, [
      c("div", {
        box: "",
        class: f([t.value.show ? "show" : "hide", t.value.init ? "init" : ""])
      }, [
        c("div", h, r(t.value.text), 1),
        x
      ], 2)
    ]));
  }
}), n = /* @__PURE__ */ p(w, [["__scopeId", "data-v-7cf8a364"]]);
n.install = (e) => e.component(n.name, n);
const y = [
  n
], b = (e) => y.forEach((i) => e.use(i)), j = { install: b };
export {
  j as default,
  n as gqp_notification
};
