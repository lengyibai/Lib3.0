import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.9d74fd37.js";
const __pageData = JSON.parse('{"title":"\u8FC1\u79FB\u6539\u53D8","description":"","frontmatter":{},"headers":[],"relativePath":"Components/base/change.md","lastUpdated":1666717310000}');
const _sfc_main = { name: "Components/base/change.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContainerBox = resolveComponent("ContainerBox");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="\u8FC1\u79FB\u6539\u53D8" tabindex="-1">\u8FC1\u79FB\u6539\u53D8 <a class="header-anchor" href="#\u8FC1\u79FB\u6539\u53D8" aria-hidden="true">#</a></h1>`);
  _push(ssrRenderComponent(_component_ContainerBox, { title: "Tip" }, {
    desc: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>\u7531\u4E8E<code${_scopeId}>VitePress</code>\u7684\u7279\u6027\uFF0C\u4E00\u4E9B\u7EC4\u4EF6\u65E0\u6CD5\u5C55\u793A\uFF0C\u5DF2\u4ECE3.0\u7248\u672C\u79FB\u9664</p><table${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u7EC4\u4EF6</th><th${_scopeId}>\u540D</th><th${_scopeId}>\u539F\u56E0</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>Swiper</td><td${_scopeId}>Swiper\u8F6E\u64AD\u56FE</td><td${_scopeId}>\u7B2C\u4E09\u65B9\u5E93\u65E0\u6CD5\u9002\u914D</td></tr><tr${_scopeId}><td${_scopeId}>QrCode</td><td${_scopeId}>\u751F\u6210\u4E8C\u7EF4\u7801</td><td${_scopeId}>\u7B2C\u4E09\u65B9\u7EC4\u4EF6\u65E0\u6CD5\u9002\u914D</td></tr><tr${_scopeId}><td${_scopeId}>Echarts</td><td${_scopeId}>Echarts\u56FE\u8868</td><td${_scopeId}>\u6CA1\u5FC5\u8981\u4FDD\u7559</td></tr><tr${_scopeId}><td${_scopeId}>PdrPulSingle</td><td${_scopeId}>\u4E0A\u62C9\u52A0\u8F7D\u4E0B\u62C9\u5237\u65B0</td><td${_scopeId}>VitePress\u5185\u7684\u7236\u7EC4\u4EF6\u65E0\u6CD5\u5F15\u5165<code${_scopeId}>axios</code>\uFF0C\u5BFC\u81F4\u6570\u636E\u52A0\u8F7D\u5931\u8D25<br${_scopeId}>\u4F46\u5728Vue3\u5185\u5E94\u8BE5\u80FD\u6B63\u5E38\u4F7F\u7528Vue2\u7248\u7684\uFF0C\u4F46\u9700\u8981\u6CE8\u610F\u6B64\u7EC4\u4EF6\u5185\u7684\u56FE\u7247\u5F15\u5165<br${_scopeId}>\u5728<code${_scopeId}>Vite</code>\u5185\uFF0C\u9700\u8981\u66F4\u6539\u5F15\u5165\u56FE\u7247\u7684\u65B9\u5F0F\uFF1A<code${_scopeId}>require</code></td></tr><tr${_scopeId}><td${_scopeId}>SelectAddress</td><td${_scopeId}>\u7701\u5E02\u533A\u9009\u62E9\u5668</td><td${_scopeId}>\u5F15\u7528\u7684\u662F<code${_scopeId}>Element</code>\u7EC4\u4EF6\u5E93\u7684\u7EA7\u8054\u9009\u62E9\u5668\uFF0C\u53EF\u53C2\u8003<code${_scopeId}>Vue2</code>\u7248\u672C\u7684\u7EC4\u4EF6\u8FDB\u884C\u4FEE\u6539</td></tr><tr${_scopeId}><td${_scopeId}>RichText</td><td${_scopeId}>\u5BCC\u6587\u672C\u7F16\u8F91\u5668</td><td${_scopeId}><code${_scopeId}>Vue3</code>\u6709\u66F4\u597D\u7684\u5BCC\u6587\u672C\u7F16\u8F91\u5668\u7EC4\u4EF6\uFF1A<a href="https://www.wangeditor.com" target="_blank" rel="noreferrer"${_scopeId}>wangeditor</a></td></tr></tbody></table>`);
      } else {
        return [
          createVNode("p", null, [
            createTextVNode("\u7531\u4E8E"),
            createVNode("code", null, "VitePress"),
            createTextVNode("\u7684\u7279\u6027\uFF0C\u4E00\u4E9B\u7EC4\u4EF6\u65E0\u6CD5\u5C55\u793A\uFF0C\u5DF2\u4ECE3.0\u7248\u672C\u79FB\u9664")
          ]),
          createVNode("table", null, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u7EC4\u4EF6"),
                createVNode("th", null, "\u540D"),
                createVNode("th", null, "\u539F\u56E0")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "Swiper"),
                createVNode("td", null, "Swiper\u8F6E\u64AD\u56FE"),
                createVNode("td", null, "\u7B2C\u4E09\u65B9\u5E93\u65E0\u6CD5\u9002\u914D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "QrCode"),
                createVNode("td", null, "\u751F\u6210\u4E8C\u7EF4\u7801"),
                createVNode("td", null, "\u7B2C\u4E09\u65B9\u7EC4\u4EF6\u65E0\u6CD5\u9002\u914D")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "Echarts"),
                createVNode("td", null, "Echarts\u56FE\u8868"),
                createVNode("td", null, "\u6CA1\u5FC5\u8981\u4FDD\u7559")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "PdrPulSingle"),
                createVNode("td", null, "\u4E0A\u62C9\u52A0\u8F7D\u4E0B\u62C9\u5237\u65B0"),
                createVNode("td", null, [
                  createTextVNode("VitePress\u5185\u7684\u7236\u7EC4\u4EF6\u65E0\u6CD5\u5F15\u5165"),
                  createVNode("code", null, "axios"),
                  createTextVNode("\uFF0C\u5BFC\u81F4\u6570\u636E\u52A0\u8F7D\u5931\u8D25"),
                  createVNode("br"),
                  createTextVNode("\u4F46\u5728Vue3\u5185\u5E94\u8BE5\u80FD\u6B63\u5E38\u4F7F\u7528Vue2\u7248\u7684\uFF0C\u4F46\u9700\u8981\u6CE8\u610F\u6B64\u7EC4\u4EF6\u5185\u7684\u56FE\u7247\u5F15\u5165"),
                  createVNode("br"),
                  createTextVNode("\u5728"),
                  createVNode("code", null, "Vite"),
                  createTextVNode("\u5185\uFF0C\u9700\u8981\u66F4\u6539\u5F15\u5165\u56FE\u7247\u7684\u65B9\u5F0F\uFF1A"),
                  createVNode("code", null, "require")
                ])
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "SelectAddress"),
                createVNode("td", null, "\u7701\u5E02\u533A\u9009\u62E9\u5668"),
                createVNode("td", null, [
                  createTextVNode("\u5F15\u7528\u7684\u662F"),
                  createVNode("code", null, "Element"),
                  createTextVNode("\u7EC4\u4EF6\u5E93\u7684\u7EA7\u8054\u9009\u62E9\u5668\uFF0C\u53EF\u53C2\u8003"),
                  createVNode("code", null, "Vue2"),
                  createTextVNode("\u7248\u672C\u7684\u7EC4\u4EF6\u8FDB\u884C\u4FEE\u6539")
                ])
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "RichText"),
                createVNode("td", null, "\u5BCC\u6587\u672C\u7F16\u8F91\u5668"),
                createVNode("td", null, [
                  createVNode("code", null, "Vue3"),
                  createTextVNode("\u6709\u66F4\u597D\u7684\u5BCC\u6587\u672C\u7F16\u8F91\u5668\u7EC4\u4EF6\uFF1A"),
                  createVNode("a", {
                    href: "https://www.wangeditor.com",
                    target: "_blank",
                    rel: "noreferrer"
                  }, "wangeditor")
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Components/base/change.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const change = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  change as default
};
