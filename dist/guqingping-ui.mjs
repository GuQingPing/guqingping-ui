import { ref as q, openBlock as f, createBlock as T, Teleport as S, createElementVNode as l, normalizeClass as x, unref as n, normalizeStyle as b, createElementBlock as h, Fragment as C, renderList as N, renderSlot as _, createTextVNode as O, toDisplayString as j, toRaw as $, pushScopeId as y, popScopeId as w } from "vue";
const k = (i, r) => {
  const s = i.__vccOpts || i;
  for (const [d, e] of r)
    s[d] = e;
  return s;
}, B = (i) => (y("data-v-471c1ba8"), i = i(), w(), i), E = { list: "" }, V = ["onClick", "data-index"], z = /* @__PURE__ */ B(() => /* @__PURE__ */ l("div", { cover: "" }, null, -1)), L = { name: "gqp_notification" }, D = /* @__PURE__ */ Object.assign(L, {
  props: {
    //带类型和默认值的写法
    type: {
      type: Number,
      default: 5
    }
  },
  setup(i, { expose: r }) {
    let s = q({
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
    ], e = s.value, v = function(t = $(e.default_config)) {
      switch (e.init = !1, t = Object.assign($(e.default_config), t), e.show = !0, !0) {
        case (t.position >= 1 && t.position <= 9):
          e.position = d[t.position - 1];
          break;
        default:
          console.error("传入非法位置", t.position, " from gqp_notification - notification()");
          break;
      }
      if (e.list_model = t.list) {
        let c = e.temp_index / 1, o = setTimeout(() => {
          g(c);
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
    }, m = function() {
      !e.default_config.closeable || e.list_model || (e.timer && clearTimeout(e.timer), e.show = !1);
    }, g = function(t) {
      if (!e.list_model)
        return;
      let c = e.lists.findIndex((a) => a.index === t);
      if (c < 0)
        return;
      let o = e.lists[c];
      o.closeable && !o.closing && (console.log("list_remove", t, e.list_model ? "list" : "single", e.lists), clearTimeout(o.timeoutIndex), o.closing = !0, document.querySelector(`.gqp_notification_box [text][data-index='${t}']`).classList.add("closing"), setTimeout(() => {
        e.lists.splice(e.lists.findIndex((a) => a.index === t), 1), I();
      }, e.trans_time * 1e3));
    }, I = function() {
      e.lists.length > 0 || (e.temp_index = 0, e.show = !1);
    };
    return r({ notification: v, close: m, list_remove: g, clear: function() {
      e = [], e.temp_index = 0, e.show = !1;
    } }), (t, c) => (f(), T(S, { to: "body" }, [
      l("div", {
        class: x([
          "gqp_notification_box",
          //基础样式
          n(s).position,
          //位置
          n(s).show ? "show" : "hide",
          n(s).init ? "init" : "",
          n(s).list_model ? "list_box" : ""
        ]),
        onClick: c[0] || (c[0] = (...o) => n(m) && n(m)(...o)),
        style: b("--time:" + n(s).trans_time + "s")
      }, [
        l("div", E, [
          (f(!0), h(C, null, N(n(s).lists, (o) => (f(), h("div", {
            text: "",
            key: o.index,
            onClick: (a) => n(g)(o.index),
            "data-index": o.index,
            class: x([
              o.closeable ? "clickable" : "",
              o.progress ? "progress" : "",
              t.$slots.default ? "disable_default_style" : ""
            ]),
            style: b("--progress_time:" + o.time + "s")
          }, [
            _(t.$slots, "default", {}, () => [
              O(j(o.text), 1)
            ])
          ], 14, V))), 128))
        ]),
        _(t.$slots, "cover", {}, () => [
          z
        ])
      ], 6)
    ]));
  }
}), u = /* @__PURE__ */ k(D, [["__scopeId", "data-v-471c1ba8"]]);
u.install = (i) => i.component(u.name, u);
const F = { name: "gqp_nav" }, R = (i) => (y("data-v-0a84edac"), i = i(), w(), i), A = {
  nav: "",
  class: "gqp_nav"
}, G = {
  center_box: "",
  ib_items: ""
}, H = { left: "" }, J = { center: "" }, K = { right: "" }, M = /* @__PURE__ */ R(() => /* @__PURE__ */ l("div", { shadow: "" }, null, -1));
function P(i, r, s, d, e, v) {
  return f(), h("div", A, [
    l("div", G, [
      l("div", H, [
        _(i.$slots, "left")
      ]),
      l("div", J, [
        _(i.$slots, "center")
      ]),
      l("div", K, [
        _(i.$slots, "right")
      ])
    ]),
    M
  ]);
}
const p = /* @__PURE__ */ k(F, [["render", P], ["__scopeId", "data-v-0a84edac"]]);
p.install = (i) => i.component(p.name, p);
const Q = [
  u,
  p
], U = function(i) {
  U.installed || Q.forEach((r) => i.use(r));
};
export {
  U as default,
  p as gqp_nav,
  u as gqp_notification
};
