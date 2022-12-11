import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.9d74fd37.js";
const __pageData = JSON.parse('{"title":"$pinyin","description":"","frontmatter":{},"headers":[],"relativePath":"Functions/custom/Pinyin.md","lastUpdated":1666717310000}');
const _sfc_main = { name: "Functions/custom/Pinyin.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContainerBox = resolveComponent("ContainerBox");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pinyin" tabindex="-1">$pinyin <a class="header-anchor" href="#pinyin" aria-hidden="true">#</a></h1>`);
  _push(ssrRenderComponent(_component_ContainerBox, { title: "\u4ECB\u7ECD" }, {
    desc: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u53EF\u7528\u4E8E\u641C\u7D22\uFF0C\u5982\u8F6C\u6210\u62FC\u97F3\u8FDB\u884C\u6A21\u7CCA\u641C\u7D22 <p${_scopeId}>\u7531\u4E8E\u6587\u4EF6\u4EE3\u7801\u91CF\u8FC7\u5927\uFF0C\u5BFC\u81F4\u9875\u9762\u65E0\u6CD5\u663E\u793A\u4EE3\u7801\uFF0C\u8BF7\u76F4\u63A5\u4E0B\u8F7D\u6587\u4EF6<a href="https://gitee.com/lengyibai/lib3-component-packages/raw/master/utils/Pinyin.zip" target="_blank" rel="noreferrer"${_scopeId}>pinyin.js</a></p>`);
      } else {
        return [
          createTextVNode(" \u53EF\u7528\u4E8E\u641C\u7D22\uFF0C\u5982\u8F6C\u6210\u62FC\u97F3\u8FDB\u884C\u6A21\u7CCA\u641C\u7D22 "),
          createVNode("p", null, [
            createTextVNode("\u7531\u4E8E\u6587\u4EF6\u4EE3\u7801\u91CF\u8FC7\u5927\uFF0C\u5BFC\u81F4\u9875\u9762\u65E0\u6CD5\u663E\u793A\u4EE3\u7801\uFF0C\u8BF7\u76F4\u63A5\u4E0B\u8F7D\u6587\u4EF6"),
            createVNode("a", {
              href: "https://gitee.com/lengyibai/lib3-component-packages/raw/master/utils/Pinyin.zip",
              target: "_blank",
              rel: "noreferrer"
            }, "pinyin.js")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_ContainerBox, { title: "\u57FA\u7840\u7528\u6CD5" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-js"${_scopeId}><button class="copy"${_scopeId}></button><span class="lang"${_scopeId}>js</span><pre${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>$pinyin</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u51B7\u5F0B\u767D</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>//[ &#39;lengyibai&#39;, &#39;lyb&#39; ]</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("div", { class: "language-js" }, [
            createVNode("button", { class: "copy" }),
            createVNode("span", { class: "lang" }, "js"),
            createVNode("pre", null, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#82AAFF" } }, "$pinyin"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u51B7\u5F0B\u767D"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#676E95" } }, "//[ 'lengyibai', 'lyb' ]")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Functions/custom/Pinyin.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Pinyin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Pinyin as default
};
