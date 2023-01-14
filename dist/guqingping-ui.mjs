import { ref as q, openBlock as a, createBlock as T, Teleport as S, createElementVNode as n, normalizeClass as x, unref as v, normalizeStyle as b, createElementBlock as g, Fragment as C, renderList as N, renderSlot as r, createTextVNode as O, toDisplayString as j, toRaw as $, pushScopeId as y, popScopeId as w } from "vue";
const k = (i, c) => {
  const s = i.__vccOpts || i;
  for (const [d, e] of c)
    s[d] = e;
  return s;
}, B = (i) => (y("data-v-517dd2ae"), i = i(), w(), i), E = { list: "" }, V = ["onClick", "data-index"], z = /* @__PURE__ */ B(() => /* @__PURE__ */ n("div", { cover: "" }, null, -1)), L = { name: "gqp_notification" }, D = /* @__PURE__ */ Object.assign(L, {
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
    ], e = s.value;
    let h = function(t = $(e.default_config)) {
      switch (e.init = !1, t = Object.assign($(e.default_config), t), e.show = !0, !0) {
        case (t.position >= 1 && t.position <= 9):
          e.position = d[t.position - 1];
          break;
        default:
          console.error("传入非法位置", t.position, " from gqp_notification - notification()");
          break;
      }
      if (e.list_model = t.list) {
        const l = e.temp_index / 1, o = setTimeout(() => {
          m(l);
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
    }, p = function() {
      !e.default_config.closeable || e.list_model || (e.timer && clearTimeout(e.timer), e.show = !1);
    }, m = function(t) {
      if (!e.list_model)
        return;
      const l = e.lists.findIndex((_) => _.index === t);
      if (l < 0)
        return;
      const o = e.lists[l];
      o.closeable && !o.closing && (console.log("list_remove", t, e.list_model ? "list" : "single", e.lists), clearTimeout(o.timeoutIndex), o.closing = !0, document.querySelector(`.gqp_notification_box [text][data-index='${t}']`).classList.add("closing"), setTimeout(() => {
        e.lists.splice(e.lists.findIndex((_) => _.index === t), 1), I();
      }, e.trans_time * 1e3));
    }, I = function() {
      e.lists.length > 0 || (e.temp_index = 0, e.show = !1);
    };
    return c({ notification: h, close: p, list_remove: m, clear: function() {
      e = [], e.temp_index = 0, e.show = !1;
    } }), (t, l) => (a(), T(S, { to: "body" }, [
      n("div", {
        class: x([
          "gqp_notification_box",
          //基础样式
          s.value.position,
          //位置
          s.value.show ? "show" : "hide",
          s.value.init ? "init" : "",
          s.value.list_model ? "list_box" : ""
        ]),
        onClick: l[0] || (l[0] = (...o) => v(p) && v(p)(...o)),
        style: b("--time:" + s.value.trans_time + "s")
      }, [
        n("div", E, [
          (a(!0), g(C, null, N(s.value.lists, (o) => (a(), g("div", {
            text: "",
            key: o.index,
            onClick: (_) => v(m)(o.index),
            "data-index": o.index,
            class: x([
              o.closeable ? "clickable" : "",
              o.progress ? "progress" : "",
              t.$slots.default ? "disable_default_style" : ""
            ]),
            style: b("--progress_time:" + o.time + "s")
          }, [
            r(t.$slots, "default", {}, () => [
              O(j(o.text), 1)
            ])
          ], 14, V))), 128))
        ]),
        r(t.$slots, "cover", {}, () => [
          z
        ])
      ], 6)
    ]));
  }
}), u = /* @__PURE__ */ k(D, [["__scopeId", "data-v-517dd2ae"]]);
u.install = (i) => i.component(u.name, u);
const F = { name: "gqp_nav" }, R = (i) => (y("data-v-0a84edac"), i = i(), w(), i), A = {
  nav: "",
  class: "gqp_nav"
}, G = {
  center_box: "",
  ib_items: ""
}, H = { left: "" }, J = { center: "" }, K = { right: "" }, M = /* @__PURE__ */ R(() => /* @__PURE__ */ n("div", { shadow: "" }, null, -1));
function P(i, c, s, d, e, h) {
  return a(), g("div", A, [
    n("div", G, [
      n("div", H, [
        r(i.$slots, "left")
      ]),
      n("div", J, [
        r(i.$slots, "center")
      ]),
      n("div", K, [
        r(i.$slots, "right")
      ])
    ]),
    M
  ]);
}
const f = /* @__PURE__ */ k(F, [["render", P], ["__scopeId", "data-v-0a84edac"]]);
f.install = (i) => i.component(f.name, f);
const Q = [
  u,
  f
], U = function(i) {
  U.installed || Q.forEach((c) => i.use(c));
};
export {
  U as default,
  f as gqp_nav,
  u as gqp_notification
};
