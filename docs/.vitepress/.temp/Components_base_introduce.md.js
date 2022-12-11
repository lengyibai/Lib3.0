import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.9d74fd37.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Components/base/introduce.md","lastUpdated":1666717310000}');
const _sfc_main = { name: "Components/base/introduce.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Logo = resolveComponent("Logo");
  const _component_ContainerBox = resolveComponent("ContainerBox");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Logo, null, null, _parent));
  _push(ssrRenderComponent(_component_ContainerBox, { title: "\u4ECB\u7ECD" }, {
    desc: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}><code${_scopeId}>Lib</code> \u662F\u4E00\u4E2A\u81EA\u7528\u7EC4\u4EF6\u5E93\uFF0C\u6536\u96C6\u4F5C\u8005\u5728\u9879\u76EE\u4E2D\u9047\u5230\u7684\u4E00\u4E9B\u6BD4\u8F83\u5B9E\u7528\u7684\u7EC4\u4EF6\uFF0C\u62BD\u79BB\u51FA\u6765\uFF0C\u65B9\u4FBF\u672A\u6765\u9879\u76EE\u6216\u4E2A\u4EBA\u9879\u76EE\u4F7F\u7528\uFF0C\u5E76\u5199\u4E0B\u6587\u6863\uFF0C\u65B9\u4FBF\u67E5\u8BE2\u4F7F\u7528\u65B9\u6CD5\uFF0C\u6BCF\u4E2A\u7EC4\u4EF6\u5B8C\u5168\u89E3\u8026</p>`);
      } else {
        return [
          createVNode("p", null, [
            createVNode("code", null, "Lib"),
            createTextVNode(" \u662F\u4E00\u4E2A\u81EA\u7528\u7EC4\u4EF6\u5E93\uFF0C\u6536\u96C6\u4F5C\u8005\u5728\u9879\u76EE\u4E2D\u9047\u5230\u7684\u4E00\u4E9B\u6BD4\u8F83\u5B9E\u7528\u7684\u7EC4\u4EF6\uFF0C\u62BD\u79BB\u51FA\u6765\uFF0C\u65B9\u4FBF\u672A\u6765\u9879\u76EE\u6216\u4E2A\u4EBA\u9879\u76EE\u4F7F\u7528\uFF0C\u5E76\u5199\u4E0B\u6587\u6863\uFF0C\u65B9\u4FBF\u67E5\u8BE2\u4F7F\u7528\u65B9\u6CD5\uFF0C\u6BCF\u4E2A\u7EC4\u4EF6\u5B8C\u5168\u89E3\u8026")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_ContainerBox, { title: "\u5BF9\u6BD4\u4E3B\u6D41\u7EC4\u4EF6\u5E93" }, {
    desc: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u4E3B\u6D41\u7EC4\u4EF6\u5E93\uFF1A\u5B89\u88C5\u7EC4\u4EF6\u5E93-\u5B89\u88C5\u6309\u9700\u5F15\u5165\u4F9D\u8D56-\u914D\u7F6E\u6309\u9700\u5F15\u5165-\u6BCF\u6B21\u4F7F\u7528\u7EC4\u4EF6\u9700\u8981\u624B\u52A8\u6309\u9700\u5F15\u5165-\u5F00\u59CB\u4F7F\u7528 <p${_scopeId}><code${_scopeId}>Lib</code>\u7EC4\u4EF6\u5E93\uFF1A\u914D\u7F6E\u81EA\u52A8\u6CE8\u518C\u7EC4\u4EF6-\u4E0B\u8F7D\u9700\u8981\u7684\u7EC4\u4EF6-\u89E3\u538B\u81F3\u7EC4\u4EF6\u6587\u4EF6\u5939-\u5F00\u59CB\u4F7F\u7528</p>`);
      } else {
        return [
          createTextVNode(" \u4E3B\u6D41\u7EC4\u4EF6\u5E93\uFF1A\u5B89\u88C5\u7EC4\u4EF6\u5E93-\u5B89\u88C5\u6309\u9700\u5F15\u5165\u4F9D\u8D56-\u914D\u7F6E\u6309\u9700\u5F15\u5165-\u6BCF\u6B21\u4F7F\u7528\u7EC4\u4EF6\u9700\u8981\u624B\u52A8\u6309\u9700\u5F15\u5165-\u5F00\u59CB\u4F7F\u7528 "),
          createVNode("p", null, [
            createVNode("code", null, "Lib"),
            createTextVNode("\u7EC4\u4EF6\u5E93\uFF1A\u914D\u7F6E\u81EA\u52A8\u6CE8\u518C\u7EC4\u4EF6-\u4E0B\u8F7D\u9700\u8981\u7684\u7EC4\u4EF6-\u89E3\u538B\u81F3\u7EC4\u4EF6\u6587\u4EF6\u5939-\u5F00\u59CB\u4F7F\u7528")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_ContainerBox, { title: "\u7248\u672C\u63D0\u793A" }, {
    desc: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>\u4F60\u5F53\u524D\u6D4F\u89C8\u7684\u662F<code${_scopeId}>Lib 3.x \u7248\u672C</code>\u7684\u6587\u6863\uFF0C\u9002\u7528\u4E8E<code${_scopeId}>Vue 3</code>\u5F00\u53D1\u3002\u5982\u679C\u4F60\u5728\u4F7F\u7528<code${_scopeId}>Vue 2</code>\uFF0C\u8BF7\u524D\u5F80<a href="http://lengyibai.gitee.io/lib-components/Components/base/introduce.html" target="_blank" rel="noreferrer"${_scopeId}>Lib1.0</a></p>`);
      } else {
        return [
          createVNode("p", null, [
            createTextVNode("\u4F60\u5F53\u524D\u6D4F\u89C8\u7684\u662F"),
            createVNode("code", null, "Lib 3.x \u7248\u672C"),
            createTextVNode("\u7684\u6587\u6863\uFF0C\u9002\u7528\u4E8E"),
            createVNode("code", null, "Vue 3"),
            createTextVNode("\u5F00\u53D1\u3002\u5982\u679C\u4F60\u5728\u4F7F\u7528"),
            createVNode("code", null, "Vue 2"),
            createTextVNode("\uFF0C\u8BF7\u524D\u5F80"),
            createVNode("a", {
              href: "http://lengyibai.gitee.io/lib-components/Components/base/introduce.html",
              target: "_blank",
              rel: "noreferrer"
            }, "Lib1.0")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_ContainerBox, { title: "\u8D21\u732E\u4EE3\u7801" }, {
    desc: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u53D1\u73B0\u4EFB\u4F55\u95EE\u9898\u90FD\u53EF\u4EE5\u63D0<code${_scopeId}>issue</code>\u7ED9\u6211\uFF0C\u5F53\u7136\uFF0C\u4E5F\u975E\u5E38\u6B22\u8FCE\u4F60\u7ED9\u6211\u53D1<code${_scopeId}>PR</code></p><p${_scopeId}>\u9047\u5230\u95EE\u9898\u65F6\uFF0C\u8BF7\u5148\u786E\u8BA4\u8FD9\u4E2A\u95EE\u9898\u662F\u5426\u5DF2\u7ECF\u5728<code${_scopeId}>issue</code>\u4E2D\u6709\u8BB0\u5F55\u6216\u8005\u5DF2\u88AB\u4FEE\u590D</p>`);
      } else {
        return [
          createVNode("p", null, [
            createTextVNode("\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u53D1\u73B0\u4EFB\u4F55\u95EE\u9898\u90FD\u53EF\u4EE5\u63D0"),
            createVNode("code", null, "issue"),
            createTextVNode("\u7ED9\u6211\uFF0C\u5F53\u7136\uFF0C\u4E5F\u975E\u5E38\u6B22\u8FCE\u4F60\u7ED9\u6211\u53D1"),
            createVNode("code", null, "PR")
          ]),
          createVNode("p", null, [
            createTextVNode("\u9047\u5230\u95EE\u9898\u65F6\uFF0C\u8BF7\u5148\u786E\u8BA4\u8FD9\u4E2A\u95EE\u9898\u662F\u5426\u5DF2\u7ECF\u5728"),
            createVNode("code", null, "issue"),
            createTextVNode("\u4E2D\u6709\u8BB0\u5F55\u6216\u8005\u5DF2\u88AB\u4FEE\u590D")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Components/base/introduce.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const introduce = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  introduce as default
};
