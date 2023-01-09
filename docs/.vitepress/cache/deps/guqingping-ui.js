import {
  init_vue_runtime_esm_bundler,
  vue_runtime_esm_bundler_exports
} from "./chunk-FFOKMZK7.js";
import {
  __commonJS,
  __toCommonJS
} from "./chunk-OL3AADLO.js";

// node_modules/guqingping-ui/dist/guqingping-ui.umd.js
var require_guqingping_ui_umd = __commonJS({
  "node_modules/guqingping-ui/dist/guqingping-ui.umd.js"(exports, module) {
    (function(i, e) {
      typeof exports == "object" && typeof module < "u" ? e(exports, (init_vue_runtime_esm_bundler(), __toCommonJS(vue_runtime_esm_bundler_exports))) : typeof define == "function" && define.amd ? define(["exports", "vue"], e) : (i = typeof globalThis < "u" ? globalThis : i || self, e(i["guqingping-ui"] = {}, i.Vue));
    })(exports, function(i, e) {
      "use strict";
      const p = "", l = (o, s) => {
        const t = o.__vccOpts || o;
        for (const [a, n] of s)
          t[a] = n;
        return t;
      }, _ = (o) => (e.pushScopeId("data-v-7cf8a364"), o = o(), e.popScopeId(), o), u = { text: "" }, f = _(() => e.createElementVNode("div", { cover: "" }, null, -1)), c = l(Object.assign({ name: "gqp_notification" }, { setup(o, { expose: s }) {
        const t = e.ref({ text: "", show: false, init: true, timer: null, default_config: { text: "请输入提示文本", type: "normal", time: 1.5 } });
        return s({ notification: function(n = t.value.default_config) {
          t.value.init = false, n = Object.assign(t.value.default_config, n), t.value.text = n.text, t.value.show = true, t.value.timer && clearTimeout(t.value.timer), t.value.timer = setTimeout(() => {
            t.value.show = false;
          }, n.time * 1e3);
        } }), (n, h) => (e.openBlock(), e.createBlock(e.Teleport, { to: "body" }, [e.createElementVNode("div", { box: "", class: e.normalizeClass([t.value.show ? "show" : "hide", t.value.init ? "init" : ""]) }, [e.createElementVNode("div", u, e.toDisplayString(t.value.text), 1), f], 2)]));
      } }), [["__scopeId", "data-v-7cf8a364"]]);
      c.install = (o) => o.component(c.name, c);
      const d = [c], r = { install: (o) => d.forEach((s) => o.use(s)) };
      i.default = r, i.gqp_notification = c, Object.defineProperties(i, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
    });
  }
});
export default require_guqingping_ui_umd();
//# sourceMappingURL=guqingping-ui.js.map
