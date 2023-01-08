import { computed as r, openBlock as _, createElementBlock as d, normalizeClass as p, unref as f, createElementVNode as c, renderSlot as m, ref as g, createBlock as y, Teleport as h, toDisplayString as x, pushScopeId as b, popScopeId as $ } from "vue";
const v = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [a, o] of n)
    e[a] = o;
  return e;
}, w = { name: "g_button" }, I = /* @__PURE__ */ Object.assign(w, {
  props: {
    type: {
      type: "String",
      default: "default"
    }
  },
  setup(t) {
    const n = t;
    console.log("props", n.type);
    const e = r(() => ["g-button", `g-button-${n.type}`]);
    return (a, o) => (_(), d("div", {
      class: p(f(e))
    }, [
      c("button", null, [
        m(a.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), i = /* @__PURE__ */ v(I, [["__scopeId", "data-v-111ca2b7"]]);
i.install = (t) => {
  t.component(i.name, i);
};
const S = ["type", "value"], O = { name: "g_input" }, s = /* @__PURE__ */ Object.assign(O, {
  props: {
    type: "text",
    modelValue: ""
  },
  emits: ["update:modelValue"],
  setup(t, { emit: n }) {
    const e = t, a = r(() => e.type), o = (u) => n("update:modelValue", u.target.value);
    return (u, q) => (_(), d("div", null, [
      c("input", {
        type: f(a),
        value: t.modelValue,
        onInput: o
      }, null, 40, S)
    ]));
  }
});
s.install = (t) => {
  t.component(s.name, s);
};
const V = (t) => (b("data-v-d2da78ea"), t = t(), $(), t), j = { notification: "" }, k = /* @__PURE__ */ V(() => /* @__PURE__ */ c("div", { cover: "" }, null, -1)), T = { name: "center_notification" }, B = /* @__PURE__ */ Object.assign(T, {
  setup(t, { expose: n }) {
    const e = g({
      text: "",
      show: !1,
      timer: null,
      init: !0,
      default_config: {
        text: "请输入提示文本",
        type: "normal",
        time: 1.5
      }
    });
    return n({ notification: function(o = e.value.default_config) {
      e.value.init = !1, o = Object.assign(e.value.default_config, o), e.value.text = o.text, e.value.show = !0, e.value.timer && clearTimeout(e.value.timer), e.value.timer = setTimeout(() => {
        e.value.show = !1;
      }, o.time * 1e3);
    } }), (o, u) => (_(), y(h, { to: "body" }, [
      c("div", {
        center_notification_cotainer: "",
        class: p((e.value.init ? "init " : " ") + (e.value.show ? "show" : "hide"))
      }, [
        c("div", j, x(e.value.text), 1),
        k
      ], 2)
    ]));
  }
}), l = /* @__PURE__ */ v(B, [["__scopeId", "data-v-d2da78ea"]]);
l.install = (t) => {
  t.component(l.name, l);
};
const E = [i, s, l], C = (t) => E.forEach((n) => t.use(n)), D = { install: C };
export {
  i as button,
  l as center_notification,
  D as default,
  s as input
};
