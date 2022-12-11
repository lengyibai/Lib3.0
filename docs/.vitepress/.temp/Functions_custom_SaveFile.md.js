import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.9d74fd37.js";
const __pageData = JSON.parse('{"title":"$savefile","description":"","frontmatter":{},"headers":[],"relativePath":"Functions/custom/SaveFile.md","lastUpdated":1670731020000}');
const _sfc_main = { name: "Functions/custom/SaveFile.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContainerBox = resolveComponent("ContainerBox");
  const _component_ShowCode = resolveComponent("ShowCode");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="savefile" tabindex="-1">$savefile <a class="header-anchor" href="#savefile" aria-hidden="true">#</a></h1>`);
  _push(ssrRenderComponent(_component_ContainerBox, { title: "\u4ECB\u7ECD" }, {
    desc: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u5C06\u6570\u636E\u4FDD\u5B58\u4E3A\u6587\u4EF6 `);
      } else {
        return [
          createTextVNode(" \u5C06\u6570\u636E\u4FDD\u5B58\u4E3A\u6587\u4EF6 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_ContainerBox, { title: "\u57FA\u7840\u7528\u6CD5" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-js"${_scopeId}><button class="copy"${_scopeId}></button><span class="lang"${_scopeId}>js</span><pre${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>$savefile</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(JSON</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>stringify</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>\u51B7\u5F0B\u767D</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>lyb.json</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
        _push2(ssrRenderComponent(_component_ShowCode, null, {
          codes: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-js"${_scopeId2}><button class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>js</span><pre${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>export</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>function</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>$savefile</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>data</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>var</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>urlObject</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>window</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>URL</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>||</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>window</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>webkitURL</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>||</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>window</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>var</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>export_blob</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>new</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>Blob</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>([</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>data</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>])</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>var</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>save_link</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>document</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>createElementNS</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>http://www.w3.org/1999/xhtml</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>a</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>save_link</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>href</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>urlObject</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>createObjectURL</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>export_blob</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>save_link</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>download</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>save_link</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>click</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
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
                        createVNode("span", { style: { "color": "#82AAFF" } }, "$savefile"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "data"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "name"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "var"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "urlObject"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "window"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "URL"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "window"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "webkitURL"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "window"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "var"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "export_blob"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "new"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "Blob"),
                        createVNode("span", { style: { "color": "#F07178" } }, "(["),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "data"),
                        createVNode("span", { style: { "color": "#F07178" } }, "])"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "var"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "save_link"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "document"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "createElementNS"),
                        createVNode("span", { style: { "color": "#F07178" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "http://www.w3.org/1999/xhtml"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "a"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                        createVNode("span", { style: { "color": "#F07178" } }, ")"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "  "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "save_link"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "href"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "urlObject"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "createObjectURL"),
                        createVNode("span", { style: { "color": "#F07178" } }, "("),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "export_blob"),
                        createVNode("span", { style: { "color": "#F07178" } }, ")"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "  "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "save_link"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "download"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "name"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "  "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "save_link"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "click"),
                        createVNode("span", { style: { "color": "#F07178" } }, "()"),
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
                  createVNode("span", { style: { "color": "#82AAFF" } }, "$savefile"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(JSON"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "stringify"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#F07178" } }, "name"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "\u51B7\u5F0B\u767D"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "lyb.json"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ";")
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
                      createVNode("span", { style: { "color": "#82AAFF" } }, "$savefile"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "data"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "name"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "var"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "urlObject"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "window"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "URL"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "window"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "webkitURL"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "window"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "var"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "export_blob"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "new"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "Blob"),
                      createVNode("span", { style: { "color": "#F07178" } }, "(["),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "data"),
                      createVNode("span", { style: { "color": "#F07178" } }, "])"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "var"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "save_link"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "document"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "createElementNS"),
                      createVNode("span", { style: { "color": "#F07178" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "http://www.w3.org/1999/xhtml"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "a"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                      createVNode("span", { style: { "color": "#F07178" } }, ")"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "  "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "save_link"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "href"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "urlObject"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "createObjectURL"),
                      createVNode("span", { style: { "color": "#F07178" } }, "("),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "export_blob"),
                      createVNode("span", { style: { "color": "#F07178" } }, ")"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "  "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "save_link"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "download"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "name"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "  "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "save_link"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "click"),
                      createVNode("span", { style: { "color": "#F07178" } }, "()"),
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
  _push(ssrRenderComponent(_component_ContainerBox, { title: "Params" }, {
    desc: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<table${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u5BF9\u8C61\u5C5E\u6027</th><th${_scopeId}>\u8BF4\u660E</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u662F\u5426\u5FC5\u586B</th><th${_scopeId}>\u9ED8\u8BA4\u503C</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>data</td><td${_scopeId}>\u65E0</td><td${_scopeId}>Any</td><td${_scopeId}>\u662F</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>name</td><td${_scopeId}>\u5E26\u6587\u4EF6\u540E\u7F00\u7684\u6587\u4EF6\u540D</td><td${_scopeId}>String</td><td${_scopeId}>\u662F</td><td${_scopeId}>-</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("table", null, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u5BF9\u8C61\u5C5E\u6027"),
                createVNode("th", null, "\u8BF4\u660E"),
                createVNode("th", null, "\u7C7B\u578B"),
                createVNode("th", null, "\u662F\u5426\u5FC5\u586B"),
                createVNode("th", null, "\u9ED8\u8BA4\u503C")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "data"),
                createVNode("td", null, "\u65E0"),
                createVNode("td", null, "Any"),
                createVNode("td", null, "\u662F"),
                createVNode("td", null, "-")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "name"),
                createVNode("td", null, "\u5E26\u6587\u4EF6\u540E\u7F00\u7684\u6587\u4EF6\u540D"),
                createVNode("td", null, "String"),
                createVNode("td", null, "\u662F"),
                createVNode("td", null, "-")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Functions/custom/SaveFile.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SaveFile = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  SaveFile as default
};
