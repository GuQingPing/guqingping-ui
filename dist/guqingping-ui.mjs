import { ref as s, openBlock as l, createBlock as _, Teleport as u, createElementVNode as c, normalizeClass as r, toDisplayString as f, pushScopeId as d, popScopeId as v } from "vue";
const p = (e, i) => {
  const t = e.__vccOpts || e;
  for (const [a, o] of i)
    t[a] = o;
  return t;
}, m = (e) => (d("data-v-cb511ac3"), e = e(), v(), e), h = { text: "" }, x = /* @__PURE__ */ m(() => /* @__PURE__ */ c("div", { cover: "" }, null, -1)), g = { name: "gqp_notification" }, b = /* @__PURE__ */ Object.assign(g, {
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
        class: r([t.value.show ? "show" : "hide", t.value.init ? "init" : ""])
      }, [
        c("div", h, f(t.value.text), 1),
        x
      ], 2)
    ]));
  }
}), n = /* @__PURE__ */ p(b, [["__scopeId", "data-v-cb511ac3"]]);
n.install = (e) => e.component(n.name, n);
const w = [
  n
], y = (e) => w.forEach((i) => e.use(i)), j = { install: y };
export {
  j as default,
  n as gqp_notification
};