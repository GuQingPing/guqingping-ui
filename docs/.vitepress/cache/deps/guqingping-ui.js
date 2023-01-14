import {
  __commonJS,
  __toCommonJS,
  init_vue_runtime_esm_bundler,
  vue_runtime_esm_bundler_exports
} from "./chunk-DQ3MAMZ7.js";

// node_modules/guqingping-ui/dist/guqingping-ui.umd.js
var require_guqingping_ui_umd = __commonJS({
  "node_modules/guqingping-ui/dist/guqingping-ui.umd.js"(exports, module) {
    (function(l, e) {
      typeof exports == "object" && typeof module < "u" ? e(exports, (init_vue_runtime_esm_bundler(), __toCommonJS(vue_runtime_esm_bundler_exports))) : typeof define == "function" && define.amd ? define(["exports", "vue"], e) : (l = typeof globalThis < "u" ? globalThis : l || self, e(l["guqingping-ui"] = {}, l.Vue));
    })(exports, function(l, e) {
      "use strict";
      const v = "", u = (i, r) => {
        const s = i.__vccOpts || i;
        for (const [a, t] of r)
          s[a] = t;
        return s;
      }, x = (i) => (e.pushScopeId("data-v-7eedd885"), i = i(), e.popScopeId(), i), b = { list: "" }, y = ["onClick", "data-index"], $ = x(() => e.createElementVNode("div", { cover: "" }, null, -1)), d = u(Object.assign({ name: "gqp_notification" }, { props: { type: { type: Number, default: 5 } }, setup(i, { expose: r }) {
        const s = e.ref({ text: "", show: false, init: true, timer: null, timers: [], lists: [], list_model: false, temp_index: 0, trans_time: 0.2, position: "center", default_config: { text: "请输入提示文本", closeable: false, time: 1.5, position: 5, list: false, progress: false } }), a = ["top_left reverse", "top_center reverse", "top_right reverse", "center_left", "center", "center_right", "bottom_left", "bottom_center", "bottom_right"];
        let t = s.value, h = function(o = e.toRaw(t.default_config)) {
          switch (t.init = false, o = Object.assign(e.toRaw(t.default_config), o), t.show = true, true) {
            case (o.position >= 1 && o.position <= 9):
              t.position = a[o.position - 1];
              break;
            default:
              console.error("传入非法位置", o.position, " from gqp_notification - notification()");
              break;
          }
          if (t.list_model = o.list) {
            const c = t.temp_index / 1, n = setTimeout(() => {
              m(c);
            }, o.time < 0 ? 1e3 : o.time * 1e3);
            if (t.lists.push({ index: t.temp_index++, timeoutIndex: n, ...o }), o.time < 0) {
              clearTimeout(n);
              return;
            }
            t.timers.push(n);
          } else {
            if (t.lists = [{ index: t.temp_index++, ...o }], t.timer && clearTimeout(t.timer), o.time < 0)
              return;
            t.timer = setTimeout(() => {
              t.temp_index %= 2, t.show = false;
            }, o.time * 1e3);
          }
        }, p = function() {
          !t.default_config.closeable || t.list_model || (t.timer && clearTimeout(t.timer), t.show = false);
        }, m = function(o) {
          if (!t.list_model)
            return;
          const c = t.lists.findIndex((f) => f.index === o);
          if (c < 0)
            return;
          const n = t.lists[c];
          n.closeable && !n.closing && (console.log("list_remove", o, t.list_model ? "list" : "single", t.lists), clearTimeout(n.timeoutIndex), n.closing = true, document.querySelector(`.gqp_notification_box [text][data-index='${o}']`).classList.add("closing"), setTimeout(() => {
            t.lists.splice(t.lists.findIndex((f) => f.index === o), 1), j();
          }, t.trans_time * 1e3));
        }, j = function() {
          t.lists.length > 0 || (t.temp_index = 0, t.show = false);
        };
        return r({ notification: h, close: p, list_remove: m, clear: function() {
          t = [], t.temp_index = 0, t.show = false;
        } }), (o, c) => (e.openBlock(), e.createBlock(e.Teleport, { to: "body" }, [e.createElementVNode("div", { class: e.normalizeClass(["gqp_notification_box", s.value.position, s.value.show ? "show" : "hide", s.value.init ? "init" : "", s.value.list_model ? "list_box" : ""]), onClick: c[0] || (c[0] = (...n) => e.unref(p) && e.unref(p)(...n)), style: e.normalizeStyle("--time:" + s.value.trans_time + "s") }, [e.createElementVNode("div", b, [(e.openBlock(true), e.createElementBlock(e.Fragment, null, e.renderList(s.value.lists, (n) => (e.openBlock(), e.createElementBlock("div", { text: "", key: n.index, onClick: (f) => e.unref(m)(n.index), "data-index": n.index, class: e.normalizeClass([n.closeable ? "clickable" : "", n.progress ? "progress" : "", o.$slots.default ? "disable_default_style" : ""]), style: e.normalizeStyle("--progress_time:" + n.time + "s") }, [e.renderSlot(o.$slots, "default", {}, () => [e.createTextVNode(e.toDisplayString(n.text), 1)])], 14, y))), 128))]), e.renderSlot(o.$slots, "cover", {}, () => [$])], 6)]));
      } }), [["__scopeId", "data-v-7eedd885"]]);
      d.install = (i) => i.component(d.name, d);
      const z = "", k = { name: "gqp_nav" }, S = (i) => (e.pushScopeId("data-v-0a84edac"), i = i(), e.popScopeId(), i), w = { nav: "", class: "gqp_nav" }, q = { center_box: "", ib_items: "" }, I = { left: "" }, E = { center: "" }, T = { right: "" }, N = S(() => e.createElementVNode("div", { shadow: "" }, null, -1));
      function V(i, r, s, a, t, h) {
        return e.openBlock(), e.createElementBlock("div", w, [e.createElementVNode("div", q, [e.createElementVNode("div", I, [e.renderSlot(i.$slots, "left")]), e.createElementVNode("div", E, [e.renderSlot(i.$slots, "center")]), e.createElementVNode("div", T, [e.renderSlot(i.$slots, "right")])]), N]);
      }
      const _ = u(k, [["render", V], ["__scopeId", "data-v-0a84edac"]]);
      _.install = (i) => i.component(_.name, _);
      const B = [d, _], g = function(i) {
        g.installed || B.forEach((r) => i.use(r));
      };
      l.default = g, l.gqp_nav = _, l.gqp_notification = d, Object.defineProperties(l, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
    });
  }
});
export default require_guqingping_ui_umd();
//# sourceMappingURL=guqingping-ui.js.map
