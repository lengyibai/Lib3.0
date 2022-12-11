import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.9d74fd37.js";
const __pageData = JSON.parse('{"title":"$getFileName","description":"","frontmatter":{},"headers":[],"relativePath":"Functions/custom/GetFileName.md","lastUpdated":1666717310000}');
const _sfc_main = { name: "Functions/custom/GetFileName.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContainerBox = resolveComponent("ContainerBox");
  const _component_ShowCode = resolveComponent("ShowCode");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="getfilename" tabindex="-1">$getFileName <a class="header-anchor" href="#getfilename" aria-hidden="true">#</a></h1>`);
  _push(ssrRenderComponent(_component_ContainerBox, { title: "\u4ECB\u7ECD" }, {
    desc: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u6709\u4E9B\u65F6\u5019\u6211\u4EEC\u4E0D\u60F3\u8981\u540E\u7F00\u540D `);
      } else {
        return [
          createTextVNode(" \u6709\u4E9B\u65F6\u5019\u6211\u4EEC\u4E0D\u60F3\u8981\u540E\u7F00\u540D ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_ContainerBox, { title: "\u57FA\u7840\u7528\u6CD5" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-js"${_scopeId}><button class="copy"${_scopeId}></button><span class="lang"${_scopeId}>js</span><pre${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>$getFileName</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u51B7\u5F0B\u767D.lyb.png</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>//\u51B7\u5F0B\u767D.lyb</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
        _push2(ssrRenderComponent(_component_ShowCode, null, {
          codes: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-js"${_scopeId2}><button class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>js</span><pre${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>export</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>function</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>$getFileName</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>str</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>return</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>str</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>replace</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>/</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>\\.</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>\\w</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>+</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>$</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>/</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}></span></code></pre></div>`);
            } else {
              return [
                createVNode("div", { class: "language-js" }, [
                  createVNode("button", { class: "copy" }),
                  createVNode("span", { class: "lang" }, "js"),
                  createVNode("pre", null, [
                    createVNode("code", null, [
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "export"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "function"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "$getFileName"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "str"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "return"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "str"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "replace"),
                        createVNode("span", { style: { "color": "#F07178" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "/"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "\\."),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "\\w"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "$"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "/"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                        createVNode("span", { style: { "color": "#F07178" } }, ")"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
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
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode("div", { class: "language-js" }, [
            createVNode("button", { class: "copy" }),
            createVNode("span", { class: "lang" }, "js"),
            createVNode("pre", null, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#82AAFF" } }, "$getFileName"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u51B7\u5F0B\u767D.lyb.png"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#676E95" } }, "//\u51B7\u5F0B\u767D.lyb")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode(_component_ShowCode, null, {
            codes: withCtx(() => [
              createVNode("div", { class: "language-js" }, [
                createVNode("button", { class: "copy" }),
                createVNode("span", { class: "lang" }, "js"),
                createVNode("pre", null, [
                  createVNode("code", null, [
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "export"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "function"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "$getFileName"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "str"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "return"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "str"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "replace"),
                      createVNode("span", { style: { "color": "#F07178" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "/"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "\\."),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "\\w"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "$"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "/"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                      createVNode("span", { style: { "color": "#F07178" } }, ")"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" })
                  ])
                ])
              ])
            ]),
            _: 1
          })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Functions/custom/GetFileName.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const GetFileName = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  GetFileName as default
};
