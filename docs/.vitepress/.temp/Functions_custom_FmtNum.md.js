import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.9d74fd37.js";
const __pageData = JSON.parse('{"title":"$fmtNum","description":"","frontmatter":{},"headers":[],"relativePath":"Functions/custom/FmtNum.md","lastUpdated":1666717310000}');
const _sfc_main = { name: "Functions/custom/FmtNum.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContainerBox = resolveComponent("ContainerBox");
  const _component_ShowCode = resolveComponent("ShowCode");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="fmtnum" tabindex="-1">$fmtNum <a class="header-anchor" href="#fmtnum" aria-hidden="true">#</a></h1>`);
  _push(ssrRenderComponent(_component_ContainerBox, { title: "\u4ECB\u7ECD" }, {
    desc: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u6155\u540D\u800C\u6765 `);
      } else {
        return [
          createTextVNode(" \u6155\u540D\u800C\u6765 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_ContainerBox, { title: "\u57FA\u7840\u7528\u6CD5" }, {
    desc: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-js"${_scopeId}><button class="copy"${_scopeId}></button><span class="lang"${_scopeId}>js</span><pre${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>$fmtNum</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1000</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>//1,000</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("div", { class: "language-js" }, [
            createVNode("button", { class: "copy" }),
            createVNode("span", { class: "lang" }, "js"),
            createVNode("pre", null, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#82AAFF" } }, "$fmtNum"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1000"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#676E95" } }, "//1,000")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_ShowCode, null, {
          codes: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-js"${_scopeId2}><button class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>js</span><pre${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>export</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>function</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>$fmtNum</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>num</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>str</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>num</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>toString</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>reg</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>str</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>indexOf</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>-</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>1</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>?</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>/(</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>\\d</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>)(?=(</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>\\d</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{3})+</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>\\.</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>)/</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>g</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>/(</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>\\d</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>)(?=(?:</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>\\d</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{3})+</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>$</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>)/</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>g</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>return</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>str</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>replace</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>reg</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>$1,</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
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
                        createVNode("span", { style: { "color": "#82AAFF" } }, "$fmtNum"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "num"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "str"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "num"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "toString"),
                        createVNode("span", { style: { "color": "#F07178" } }, "()"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "reg"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "str"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "indexOf"),
                        createVNode("span", { style: { "color": "#F07178" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "."),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#F07178" } }, ") "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "?"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "/("),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "\\d"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ")(?=("),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "\\d"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{3})+"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "\\."),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ")/"),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "g"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "/("),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "\\d"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ")(?=(?:"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "\\d"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{3})+"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "$"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ")/"),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "g"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";")
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
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "reg"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "$1,"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
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
                      createVNode("span", { style: { "color": "#82AAFF" } }, "$fmtNum"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "num"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "str"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "num"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "toString"),
                      createVNode("span", { style: { "color": "#F07178" } }, "()"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "reg"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "str"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "indexOf"),
                      createVNode("span", { style: { "color": "#F07178" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "."),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#F07178" } }, ") "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "?"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "/("),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "\\d"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ")(?=("),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "\\d"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{3})+"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "\\."),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ")/"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "g"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "/("),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "\\d"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ")(?=(?:"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "\\d"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{3})+"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "$"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ")/"),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "g"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
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
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "reg"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "$1,"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Functions/custom/FmtNum.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FmtNum = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  FmtNum as default
};
