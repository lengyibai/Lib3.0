import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.9d74fd37.js";
const __pageData = JSON.parse('{"title":"\u5FEB\u901F\u4E0A\u624B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u83B7\u53D6\u81EA\u5B9A\u4E49\u6307\u4EE4","slug":"\u83B7\u53D6\u81EA\u5B9A\u4E49\u6307\u4EE4","link":"#\u83B7\u53D6\u81EA\u5B9A\u4E49\u6307\u4EE4","children":[]},{"level":2,"title":"\u51C6\u5907\u5DE5\u4F5C","slug":"\u51C6\u5907\u5DE5\u4F5C","link":"#\u51C6\u5907\u5DE5\u4F5C","children":[]}],"relativePath":"Directives/base/start.md","lastUpdated":1666717310000}');
const _sfc_main = { name: "Directives/base/start.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContainerBox = resolveComponent("ContainerBox");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1">\u5FEB\u901F\u4E0A\u624B <a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a></h1>`);
  _push(ssrRenderComponent(_component_ContainerBox, { title: "\u4ECB\u7ECD" }, {
    desc: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>\u901A\u8FC7\u672C\u7AE0\u8282\u4F60\u53EF\u4EE5\u4E86\u89E3\u5230<code${_scopeId}>\u81EA\u5B9A\u4E49\u6307\u4EE4</code>\u7684\u57FA\u672C\u4F7F\u7528\u59FF\u52BF</p>`);
      } else {
        return [
          createVNode("p", null, [
            createTextVNode("\u901A\u8FC7\u672C\u7AE0\u8282\u4F60\u53EF\u4EE5\u4E86\u89E3\u5230"),
            createVNode("code", null, "\u81EA\u5B9A\u4E49\u6307\u4EE4"),
            createTextVNode("\u7684\u57FA\u672C\u4F7F\u7528\u59FF\u52BF")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="\u83B7\u53D6\u81EA\u5B9A\u4E49\u6307\u4EE4" tabindex="-1">\u83B7\u53D6\u81EA\u5B9A\u4E49\u6307\u4EE4 <a class="header-anchor" href="#\u83B7\u53D6\u81EA\u5B9A\u4E49\u6307\u4EE4" aria-hidden="true">#</a></h2>`);
  _push(ssrRenderComponent(_component_ContainerBox, { title: "\u590D\u5236\u4EE3\u7801" }, {
    desc: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u76F4\u63A5\u590D\u5236\u4EE3\u7801\u5373\u53EF\u4F7F\u7528 `);
      } else {
        return [
          createTextVNode(" \u76F4\u63A5\u590D\u5236\u4EE3\u7801\u5373\u53EF\u4F7F\u7528 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="\u51C6\u5907\u5DE5\u4F5C" tabindex="-1">\u51C6\u5907\u5DE5\u4F5C <a class="header-anchor" href="#\u51C6\u5907\u5DE5\u4F5C" aria-hidden="true">#</a></h2>`);
  _push(ssrRenderComponent(_component_ContainerBox, { title: "\u5168\u5C40\u6CE8\u518C" }, {
    desc: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ol${_scopeId}><li${_scopeId}><p${_scopeId}>\u5728\u9879\u76EE\u5185\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939\u53CA\u6587\u4EF6<code${_scopeId}>src/utils/directives.js</code></p></li><li${_scopeId}><p${_scopeId}>\u5C06\u590D\u5236\u7684\u81EA\u5B9A\u4E49\u6307\u4EE4\u7C98\u8D34\u8FDB<code${_scopeId}>directives.js</code>\u6587\u4EF6</p></li></ol><div class="language-js"${_scopeId}><button class="copy"${_scopeId}></button><span class="lang"${_scopeId}>js</span><pre${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>//directives.js</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> aaa </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>mounted</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>el</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>binding</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{},</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>};</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> bbb </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>mounted</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>el</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>binding</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{},</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>};</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> ccc </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>mounted</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>el</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>binding</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{},</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>};</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>export</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>default</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  aaa</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  bbb</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  ccc</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>};</span></span>
<span class="line"${_scopeId}></span></code></pre></div><ol start="3"${_scopeId}><li${_scopeId}>\u5728<code${_scopeId}>main.js</code>\u6587\u4EF6\u5185\u5F15\u5165<code${_scopeId}>directives.js</code></li></ol><div class="language-js"${_scopeId}><button class="copy"${_scopeId}></button><span class="lang"${_scopeId}>js</span><pre${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>//main.js</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>createApp</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> App </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>./App.vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> app </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>createApp</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(App)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> directives </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>@/utils/directives.js</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>Object</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>keys</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(directives)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>forEach</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>key</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>app</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>directive</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>key</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>directives</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>key</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>])</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("ol", null, [
            createVNode("li", null, [
              createVNode("p", null, [
                createTextVNode("\u5728\u9879\u76EE\u5185\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939\u53CA\u6587\u4EF6"),
                createVNode("code", null, "src/utils/directives.js")
              ])
            ]),
            createVNode("li", null, [
              createVNode("p", null, [
                createTextVNode("\u5C06\u590D\u5236\u7684\u81EA\u5B9A\u4E49\u6307\u4EE4\u7C98\u8D34\u8FDB"),
                createVNode("code", null, "directives.js"),
                createTextVNode("\u6587\u4EF6")
              ])
            ])
          ]),
          createVNode("div", { class: "language-js" }, [
            createVNode("button", { class: "copy" }),
            createVNode("span", { class: "lang" }, "js"),
            createVNode("pre", null, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#676E95" } }, "//directives.js")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " aaa "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F07178" } }, "mounted"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "el"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "binding"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "{},")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " bbb "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F07178" } }, "mounted"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "el"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "binding"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "{},")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " ccc "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#F07178" } }, "mounted"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "el"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "binding"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "{},")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "export"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "default"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  aaa"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  bbb"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  ccc"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" })
              ])
            ])
          ]),
          createVNode("ol", { start: "3" }, [
            createVNode("li", null, [
              createTextVNode("\u5728"),
              createVNode("code", null, "main.js"),
              createTextVNode("\u6587\u4EF6\u5185\u5F15\u5165"),
              createVNode("code", null, "directives.js")
            ])
          ]),
          createVNode("div", { class: "language-js" }, [
            createVNode("button", { class: "copy" }),
            createVNode("span", { class: "lang" }, "js"),
            createVNode("pre", null, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#676E95" } }, "//main.js")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "import"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                  createVNode("span", { style: { "color": "#F07178" } }, " "),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "createApp"),
                  createVNode("span", { style: { "color": "#F07178" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "from"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "import"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " App "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "from"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "./App.vue"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " app "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "createApp"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(App)"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "import"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " directives "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "from"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "@/utils/directives.js"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "Object"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "keys"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(directives)"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "forEach"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "key"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F07178" } }, "  "),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "app"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "directive"),
                  createVNode("span", { style: { "color": "#F07178" } }, "("),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "key"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                  createVNode("span", { style: { "color": "#F07178" } }, " "),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "directives"),
                  createVNode("span", { style: { "color": "#F07178" } }, "["),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "key"),
                  createVNode("span", { style: { "color": "#F07178" } }, "])"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ";")
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
  _push(ssrRenderComponent(_component_ContainerBox, { title: "\u5C40\u90E8\u6CE8\u518C" }, {
    desc: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5728\u7EC4\u4EF6\u5185\u6CE8\u518C\u81EA\u5B9A\u4E49\u6307\u4EE4 `);
      } else {
        return [
          createTextVNode(" \u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5728\u7EC4\u4EF6\u5185\u6CE8\u518C\u81EA\u5B9A\u4E49\u6307\u4EE4 ")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-vue"${_scopeId}><button class="copy"${_scopeId}></button><span class="lang"${_scopeId}>vue</span><pre${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>setup</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>// \u5728\u6A21\u677F\u4E2D\u542F\u7528 v-focus</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> vFocus </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>mounted</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>el</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> el</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>focus</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>()</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>};</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>input</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>v-focus</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}> /&gt;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("div", { class: "language-vue" }, [
            createVNode("button", { class: "copy" }),
            createVNode("span", { class: "lang" }, "vue"),
            createVNode("pre", null, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                  createVNode("span", { style: { "color": "#F07178" } }, "script"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#676E95" } }, "// \u5728\u6A21\u677F\u4E2D\u542F\u7528 v-focus")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " vFocus "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "mounted"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "el"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " el"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "focus"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "()"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "};")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                  createVNode("span", { style: { "color": "#F07178" } }, "script"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                  createVNode("span", { style: { "color": "#F07178" } }, "template"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                  createVNode("span", { style: { "color": "#F07178" } }, "input"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "v-focus"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                  createVNode("span", { style: { "color": "#F07178" } }, "template"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ">")
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
  _push(ssrRenderComponent(_component_ContainerBox, { title: "\u5168\u90E8\u5F15\u5165" }, {
    desc: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4E0B\u8F7D\u6240\u6709\u6307\u4EE4\uFF1A <p${_scopeId}><a href="https://gitee.com/lengyibai/lib3-component-packages/raw/master/utils/directives.zip" target="_blank" rel="noreferrer"${_scopeId}>directives.zip</a></p>`);
      } else {
        return [
          createTextVNode(" \u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4E0B\u8F7D\u6240\u6709\u6307\u4EE4\uFF1A "),
          createVNode("p", null, [
            createVNode("a", {
              href: "https://gitee.com/lengyibai/lib3-component-packages/raw/master/utils/directives.zip",
              target: "_blank",
              rel: "noreferrer"
            }, "directives.zip")
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>\u5728<code${_scopeId}>main.js</code>\u6587\u4EF6\u5185\u5F15\u5165<code${_scopeId}>directives.js</code></p><div class="language-js"${_scopeId}><button class="copy"${_scopeId}></button><span class="lang"${_scopeId}>js</span><pre${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>//main.js</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>createApp</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> App </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>./App.vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> app </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>createApp</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(App)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> directives </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>@/utils/directives.js</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>Object</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>keys</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(directives)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>forEach</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>key</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>app</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>directive</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>key</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>directives</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>[</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>key</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>])</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("p", null, [
            createTextVNode("\u5728"),
            createVNode("code", null, "main.js"),
            createTextVNode("\u6587\u4EF6\u5185\u5F15\u5165"),
            createVNode("code", null, "directives.js")
          ]),
          createVNode("div", { class: "language-js" }, [
            createVNode("button", { class: "copy" }),
            createVNode("span", { class: "lang" }, "js"),
            createVNode("pre", null, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#676E95" } }, "//main.js")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "import"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                  createVNode("span", { style: { "color": "#F07178" } }, " "),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "createApp"),
                  createVNode("span", { style: { "color": "#F07178" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "from"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "vue"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "import"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " App "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "from"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "./App.vue"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " app "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "createApp"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(App)"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "import"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " directives "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "from"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "@/utils/directives.js"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "Object"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "keys"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(directives)"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "forEach"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "key"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F07178" } }, "  "),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "app"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "directive"),
                  createVNode("span", { style: { "color": "#F07178" } }, "("),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "key"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                  createVNode("span", { style: { "color": "#F07178" } }, " "),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "directives"),
                  createVNode("span", { style: { "color": "#F07178" } }, "["),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "key"),
                  createVNode("span", { style: { "color": "#F07178" } }, "])"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ";")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Directives/base/start.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const start = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  start as default
};
