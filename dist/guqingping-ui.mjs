import { ref as q, openBlock as f, createElementBlock as u, normalizeClass as h, unref as g, normalizeStyle as x, createElementVNode as l, Fragment as S, renderList as T, renderSlot as _, createTextVNode as C, toDisplayString as N, toRaw as b, pushScopeId as $, popScopeId as w } from "vue";
const y = (i, c) => {
  const s = i.__vccOpts || i;
  for (const [d, e] of c)
    s[d] = e;
  return s;
}, O = (i) => ($("data-v-f0257b20"), i = i(), w(), i), j = { list: "" }, E = ["onClick", "data-index"], V = /* @__PURE__ */ O(() => /* @__PURE__ */ l("div", { cover: "" }, null, -1)), z = { name: "gqp_notification" }, B = /* @__PURE__ */ Object.assign(z, {
  props: {
    //带类型和默认值的写法
    type: {
      type: Number,
      default: 5
    }
  },
  setup(i, { expose: c }) {
    const s = q({
      text: "",
      show: !1,
      init: !0,
      timer: null,
      timers: [],
      lists: [],
      list_model: !1,
      temp_index: 0,
      trans_time: 0.2,
      position: "center",
      default_config: {
        text: "请输入提示文本",
        closeable: !1,
        time: 1.5,
        position: 5,
        list: !1,
        progress: !1
      }
    }), d = [
      "top_left reverse",
      "top_center reverse",
      "top_right reverse",
      "center_left",
      "center",
      "center_right",
      "bottom_left",
      "bottom_center",
      "bottom_right"
    ];
    let e = s.value, a = function() {
      !e.default_config.closeable || e.list_model || (e.timer && clearTimeout(e.timer), e.show = !1);
    }, k = function() {
      e.lists.length > 0 || (e.temp_index = 0, e.show = !1);
    }, I = function() {
      e = [], e.temp_index = 0, e.show = !1;
    }, v = function(t) {
      if (!e.list_model)
        return;
      const n = e.lists.findIndex((r) => r.index === t);
      if (n < 0)
        return;
      const o = e.lists[n];
      o.closeable && !o.closing && (console.log("list_remove", t, e.list_model ? "list" : "single", e.lists), clearTimeout(o.timeoutIndex), o.closing = !0, document.querySelector(`.gqp_notification_box [text][data-index='${t}']`).classList.add("closing"), setTimeout(() => {
        e.lists.splice(e.lists.findIndex((r) => r.index === t), 1), k();
      }, e.trans_time * 1e3));
    };
    return c({ notification: function(t = b(e.default_config)) {
      switch (e.init = !1, t = Object.assign(b(e.default_config), t), e.show = !0, !0) {
        case (t.position >= 1 && t.position <= 9):
          e.position = d[t.position - 1];
          break;
        default:
          console.error("传入非法位置", t.position, " from gqp_notification - notification()");
          break;
      }
      if (e.list_model = t.list) {
        const n = e.temp_index / 1, o = setTimeout(() => {
          v(n);
        }, t.time < 0 ? 1e3 : t.time * 1e3);
        if (e.lists.push({
          index: e.temp_index++,
          timeoutIndex: o,
          ...t
        }), t.time < 0) {
          clearTimeout(o);
          return;
        }
        e.timers.push(o);
      } else {
        if (e.lists = [{
          index: e.temp_index++,
          ...t
        }], e.timer && clearTimeout(e.timer), t.time < 0)
          return;
        e.timer = setTimeout(() => {
          e.temp_index %= 2, e.show = !1;
        }, t.time * 1e3);
      }
    }, close: a, list_remove: v, clear: I }), (t, n) => (f(), u("div", {
      class: h([
        "gqp_notification_box",
        //基础样式
        s.value.position,
        //位置
        s.value.show ? "show" : "hide",
        s.value.init ? "init" : "",
        s.value.list_model ? "list_box" : ""
      ]),
      onClick: n[0] || (n[0] = (...o) => g(a) && g(a)(...o)),
      style: x("--time:" + s.value.trans_time + "s")
    }, [
      l("div", j, [
        (f(!0), u(S, null, T(s.value.lists, (o) => {
          var r;
          return f(), u("div", {
            text: "",
            key: o.index,
            onClick: (U) => g(v)(o.index),
            "data-index": o.index,
            class: h([
              o.closeable ? "clickable" : "",
              o.progress ? "progress" : "",
              (r = t.$slots) != null && r.default ? "disable_default_style" : ""
            ]),
            style: x("--progress_time:" + o.time + "s")
          }, [
            _(t.$slots, "default", {}, () => [
              C(N(o.text), 1)
            ])
          ], 14, E);
        }), 128))
      ]),
      _(t.$slots, "cover", {}, () => [
        V
      ])
    ], 6));
  }
}), m = /* @__PURE__ */ y(B, [["__scopeId", "data-v-f0257b20"]]);
m.install = (i) => i.component(m.name, m);
const L = { name: "gqp_nav" }, D = (i) => ($("data-v-0a84edac"), i = i(), w(), i), F = {
  nav: "",
  class: "gqp_nav"
}, R = {
  center_box: "",
  ib_items: ""
}, A = { left: "" }, G = { center: "" }, H = { right: "" }, J = /* @__PURE__ */ D(() => /* @__PURE__ */ l("div", { shadow: "" }, null, -1));
function K(i, c, s, d, e, a) {
  return f(), u("div", F, [
    l("div", R, [
      l("div", A, [
        _(i.$slots, "left")
      ]),
      l("div", G, [
        _(i.$slots, "center")
      ]),
      l("div", H, [
        _(i.$slots, "right")
      ])
    ]),
    J
  ]);
}
const p = /* @__PURE__ */ y(L, [["render", K], ["__scopeId", "data-v-0a84edac"]]);
p.install = (i) => i.component(p.name, p);
const M = [
  m,
  p
], P = function(i) {
  P.installed || M.forEach((c) => i.use(c));
};
export {
  P as default,
  p as gqp_nav,
  m as gqp_notification
};
