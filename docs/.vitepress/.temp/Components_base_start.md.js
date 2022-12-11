import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.9d74fd37.js";
const __pageData = JSON.parse('{"title":"\u5FEB\u901F\u4E0A\u624B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B8C\u6574\u5F15\u5165","slug":"\u5B8C\u6574\u5F15\u5165","link":"#\u5B8C\u6574\u5F15\u5165","children":[]},{"level":2,"title":"\u6309\u9700\u5F15\u5165","slug":"\u6309\u9700\u5F15\u5165","link":"#\u6309\u9700\u5F15\u5165","children":[]},{"level":2,"title":"\u4F7F\u7528\u7EC4\u4EF6","slug":"\u4F7F\u7528\u7EC4\u4EF6","link":"#\u4F7F\u7528\u7EC4\u4EF6","children":[]}],"relativePath":"Components/base/start.md","lastUpdated":1666717310000}');
const _sfc_main = { name: "Components/base/start.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContainerBox = resolveComponent("ContainerBox");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1">\u5FEB\u901F\u4E0A\u624B <a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a></h1>`);
  _push(ssrRenderComponent(_component_ContainerBox, { title: "\u4ECB\u7ECD" }, {
    desc: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>\u901A\u8FC7\u672C\u7AE0\u8282\u4F60\u53EF\u4EE5\u4E86\u89E3\u5230<code${_scopeId}>Lib</code>\u7684\u5B89\u88C5\u65B9\u6CD5\u548C\u57FA\u672C\u4F7F\u7528\u59FF\u52BF</p>`);
      } else {
        return [
          createVNode("p", null, [
            createTextVNode("\u901A\u8FC7\u672C\u7AE0\u8282\u4F60\u53EF\u4EE5\u4E86\u89E3\u5230"),
            createVNode("code", null, "Lib"),
            createTextVNode("\u7684\u5B89\u88C5\u65B9\u6CD5\u548C\u57FA\u672C\u4F7F\u7528\u59FF\u52BF")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h2 id="\u5B8C\u6574\u5F15\u5165" tabindex="-1">\u5B8C\u6574\u5F15\u5165 <a class="header-anchor" href="#\u5B8C\u6574\u5F15\u5165" aria-hidden="true">#</a></h2>`);
  _push(ssrRenderComponent(_component_ContainerBox, { title: "\u901A\u8FC7\u4E0B\u8F7D\u7EC4\u4EF6\u5E93" }, {
    desc: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}><a href="https://gitee.com/lengyibai/lib3-component-packages/raw/master/lib-components.zip" target="_blank" rel="noreferrer"${_scopeId}>\u4E0B\u8F7D\u7EC4\u4EF6\u5E93</a> \u5C06\u4E0B\u8F7D\u7684\u6587\u4EF6\u89E3\u538B\u5230\u9879\u76EE\u5185</p><p${_scopeId}>\u5728<code${_scopeId}>main.js</code>\u5F15\u5165\u5E76\u4F7F\u7528<code${_scopeId}>compontents/common/lib-components/index</code>\u6587\u4EF6</p><div class="language-js"${_scopeId}><button class="copy"${_scopeId}></button><span class="lang"${_scopeId}>js</span><pre${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>// main.js</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>createApp</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> App </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>./App.vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> app </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>createApp</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(App)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LibComponents </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>@/components/LibComponents/index.js</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>app</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>use</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(LibComponents)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>mount</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>#app</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("p", null, [
            createVNode("a", {
              href: "https://gitee.com/lengyibai/lib3-component-packages/raw/master/lib-components.zip",
              target: "_blank",
              rel: "noreferrer"
            }, "\u4E0B\u8F7D\u7EC4\u4EF6\u5E93"),
            createTextVNode(" \u5C06\u4E0B\u8F7D\u7684\u6587\u4EF6\u89E3\u538B\u5230\u9879\u76EE\u5185")
          ]),
          createVNode("p", null, [
            createTextVNode("\u5728"),
            createVNode("code", null, "main.js"),
            createTextVNode("\u5F15\u5165\u5E76\u4F7F\u7528"),
            createVNode("code", null, "compontents/common/lib-components/index"),
            createTextVNode("\u6587\u4EF6")
          ]),
          createVNode("div", { class: "language-js" }, [
            createVNode("button", { class: "copy" }),
            createVNode("span", { class: "lang" }, "js"),
            createVNode("pre", null, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#676E95" } }, "// main.js")
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
                createVNode("span", { class: "line" }),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LibComponents "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "from"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "@/components/LibComponents/index.js"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "app"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "use"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(LibComponents)"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "mount"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "#app"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
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
  _push(`<h2 id="\u6309\u9700\u5F15\u5165" tabindex="-1">\u6309\u9700\u5F15\u5165 <a class="header-anchor" href="#\u6309\u9700\u5F15\u5165" aria-hidden="true">#</a></h2>`);
  _push(ssrRenderComponent(_component_ContainerBox, { title: "\u901A\u8FC7\u4E0B\u8F7D\u7EC4\u4EF6\u5305\u53CA\u5F53\u524D\u7EC4\u4EF6\u7684\u6240\u6709\u6848\u4F8B" }, {
    desc: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>\u6BCF\u4E2A\u7EC4\u4EF6\u6587\u6863\u4E0B\u90FD\u4F1A\u63D0\u4F9B\u8BE5\u7EC4\u4EF6\u7684\u7EC4\u4EF6\u5305\uFF0C\u4E0B\u8F7D\u540E\u6309\u7167\u4E0B\u9762\u64CD\u4F5C\u4F7F\u7528\u5373\u53EF</p><ol${_scopeId}><li${_scopeId}><p${_scopeId}>\u5728\u9879\u76EE\u5185\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939<code${_scopeId}>src/components/common/lib-components</code></p></li><li${_scopeId}><p${_scopeId}>\u5C06\u4E0B\u8F7D\u7684<code${_scopeId}>\u7EC4\u4EF6\u5305</code>\u89E3\u538B\u5230<code${_scopeId}>lib-components</code>\u6587\u4EF6\u5939\uFF0C\u5982\u89E3\u538B<code${_scopeId}>LibRange</code>\u7EC4\u4EF6\uFF0C\u76EE\u5F55\u7ED3\u6784\u662F\u8FD9\u6837\u7684\uFF1A<code${_scopeId}>lib-components/LibRange/index.vue</code></p></li><li${_scopeId}><p${_scopeId}>\u5728<code${_scopeId}>lib-components</code>\u4E0B\u521B\u5EFA<code${_scopeId}>index.js</code>\u6587\u4EF6\uFF0C\u7528\u4E8E\u904D\u5386\u7EC4\u4EF6\u6587\u4EF6\u5939\u81EA\u52A8\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6</p></li></ol><div class="language-js"${_scopeId}><button class="copy"${_scopeId}></button><span class="lang"${_scopeId}>js</span><pre${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>//index.js</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>defineAsyncComponent</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> components </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>meta</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>glob</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>./**/*.vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>export</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>default</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>function</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>install</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>app</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>Object</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>entries</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>components</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>forEach</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>([</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>key</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>])</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>name</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>key</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>replace</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>/</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>\\/</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>index.vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>/</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>g</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>if</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>includes</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>childComp</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>)) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>return</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>_name</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>slice</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>lastIndexOf</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>/</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>+</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId}>1</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>if</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> (</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>_name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>includes</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>demo</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>||</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>_name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>includes</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>.vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>)) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>return</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>    </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>app</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>component</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>_name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>defineAsyncComponent</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>value</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>))</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span></span>
<span class="line"${_scopeId}></span></code></pre></div><ol start="4"${_scopeId}><li${_scopeId}>\u5728<code${_scopeId}>main.js</code>\u5F15\u5165\u5E76\u4F7F\u7528<code${_scopeId}>compontents/common/lib-components/index</code>\u6587\u4EF6</li></ol><div class="language-js"${_scopeId}><button class="copy"${_scopeId}></button><span class="lang"${_scopeId}>js</span><pre${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>//main.js</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>createApp</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> App </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>./App.vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> app </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>createApp</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(App)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> LibComponents </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>@/components/LibComponents/index.js</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>app</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>use</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(LibComponents)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>mount</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>#app</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("p", null, "\u6BCF\u4E2A\u7EC4\u4EF6\u6587\u6863\u4E0B\u90FD\u4F1A\u63D0\u4F9B\u8BE5\u7EC4\u4EF6\u7684\u7EC4\u4EF6\u5305\uFF0C\u4E0B\u8F7D\u540E\u6309\u7167\u4E0B\u9762\u64CD\u4F5C\u4F7F\u7528\u5373\u53EF"),
          createVNode("ol", null, [
            createVNode("li", null, [
              createVNode("p", null, [
                createTextVNode("\u5728\u9879\u76EE\u5185\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939"),
                createVNode("code", null, "src/components/common/lib-components")
              ])
            ]),
            createVNode("li", null, [
              createVNode("p", null, [
                createTextVNode("\u5C06\u4E0B\u8F7D\u7684"),
                createVNode("code", null, "\u7EC4\u4EF6\u5305"),
                createTextVNode("\u89E3\u538B\u5230"),
                createVNode("code", null, "lib-components"),
                createTextVNode("\u6587\u4EF6\u5939\uFF0C\u5982\u89E3\u538B"),
                createVNode("code", null, "LibRange"),
                createTextVNode("\u7EC4\u4EF6\uFF0C\u76EE\u5F55\u7ED3\u6784\u662F\u8FD9\u6837\u7684\uFF1A"),
                createVNode("code", null, "lib-components/LibRange/index.vue")
              ])
            ]),
            createVNode("li", null, [
              createVNode("p", null, [
                createTextVNode("\u5728"),
                createVNode("code", null, "lib-components"),
                createTextVNode("\u4E0B\u521B\u5EFA"),
                createVNode("code", null, "index.js"),
                createTextVNode("\u6587\u4EF6\uFF0C\u7528\u4E8E\u904D\u5386\u7EC4\u4EF6\u6587\u4EF6\u5939\u81EA\u52A8\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6")
              ])
            ])
          ]),
          createVNode("div", { class: "language-js" }, [
            createVNode("button", { class: "copy" }),
            createVNode("span", { class: "lang" }, "js"),
            createVNode("pre", null, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#676E95" } }, "//index.js")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "import"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                  createVNode("span", { style: { "color": "#F07178" } }, " "),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "defineAsyncComponent"),
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
                  createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " components "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "import"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "meta"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "glob"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "./**/*.vue"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#89DDFF" } }, "export"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "default"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "function"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "install"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "app"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F07178" } }, "  "),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "Object"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "entries"),
                  createVNode("span", { style: { "color": "#F07178" } }, "("),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "components"),
                  createVNode("span", { style: { "color": "#F07178" } }, ")"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "forEach"),
                  createVNode("span", { style: { "color": "#F07178" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "(["),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "key"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                  createVNode("span", { style: { "color": "#F07178" } }, " "),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "])"),
                  createVNode("span", { style: { "color": "#F07178" } }, " "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                  createVNode("span", { style: { "color": "#F07178" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F07178" } }, "    "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                  createVNode("span", { style: { "color": "#F07178" } }, " "),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "name"),
                  createVNode("span", { style: { "color": "#F07178" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#F07178" } }, " "),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "key"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "replace"),
                  createVNode("span", { style: { "color": "#F07178" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "/"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "\\/"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "index.vue"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "/"),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "g"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                  createVNode("span", { style: { "color": "#F07178" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                  createVNode("span", { style: { "color": "#F07178" } }, ")"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F07178" } }, "    "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "if"),
                  createVNode("span", { style: { "color": "#F07178" } }, " ("),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "name"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "includes"),
                  createVNode("span", { style: { "color": "#F07178" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "childComp"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#F07178" } }, ")) "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "return"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F07178" } }, "    "),
                  createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                  createVNode("span", { style: { "color": "#F07178" } }, " "),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "_name"),
                  createVNode("span", { style: { "color": "#F07178" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#F07178" } }, " "),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "name"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "slice"),
                  createVNode("span", { style: { "color": "#F07178" } }, "("),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "name"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "lastIndexOf"),
                  createVNode("span", { style: { "color": "#F07178" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "/"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#F07178" } }, ") "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                  createVNode("span", { style: { "color": "#F07178" } }, " "),
                  createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                  createVNode("span", { style: { "color": "#F07178" } }, ")"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F07178" } }, "    "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "if"),
                  createVNode("span", { style: { "color": "#F07178" } }, " ("),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "_name"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "includes"),
                  createVNode("span", { style: { "color": "#F07178" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "demo"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#F07178" } }, ") "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                  createVNode("span", { style: { "color": "#F07178" } }, " "),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "_name"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "includes"),
                  createVNode("span", { style: { "color": "#F07178" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, ".vue"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#F07178" } }, ")) "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "return"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F07178" } }, "    "),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "app"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "component"),
                  createVNode("span", { style: { "color": "#F07178" } }, "("),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "_name"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                  createVNode("span", { style: { "color": "#F07178" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "defineAsyncComponent"),
                  createVNode("span", { style: { "color": "#F07178" } }, "("),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                  createVNode("span", { style: { "color": "#F07178" } }, "))"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#F07178" } }, "  "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
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
          ]),
          createVNode("ol", { start: "4" }, [
            createVNode("li", null, [
              createTextVNode("\u5728"),
              createVNode("code", null, "main.js"),
              createTextVNode("\u5F15\u5165\u5E76\u4F7F\u7528"),
              createVNode("code", null, "compontents/common/lib-components/index"),
              createTextVNode("\u6587\u4EF6")
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
                createVNode("span", { class: "line" }),
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
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " LibComponents "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "from"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "@/components/LibComponents/index.js"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "app"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "use"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(LibComponents)"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "mount"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "#app"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
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
  _push(`<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5F53\u505A\u5B8C\u4E0A\u9762\u7684\u64CD\u4F5C\uFF0C\u4EE5\u540E\u76F4\u63A5\u5C06\u7EC4\u4EF6\u89E3\u538B\u81F3<code>src/components/common/lib-components</code>\u5373\u53EF,</p><p>\u76F4\u63A5<a href="/lib3.0/Components/base/start.html#\u4F7F\u7528\u7EC4\u4EF6">\u4F7F\u7528\u7EC4\u4EF6</a>\uFF0C\u65E0\u9700\u518D\u505A\u5176\u4ED6\u7684\u5F15\u5165\u64CD\u4F5C\uFF0C\u5DF2\u7ECF\u4E3A\u4F60\u81EA\u52A8\u6CE8\u518C\u4E86\u7EC4\u4EF6</p></div><h2 id="\u4F7F\u7528\u7EC4\u4EF6" tabindex="-1">\u4F7F\u7528\u7EC4\u4EF6 <a class="header-anchor" href="#\u4F7F\u7528\u7EC4\u4EF6" aria-hidden="true">#</a></h2>`);
  _push(ssrRenderComponent(_component_ContainerBox, { title: "\u91C7\u7528\u5927\u9A7C\u5CF0\u547D\u540D\u7EC4\u4EF6" }, {
    desc: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>\u6240\u6709\u7EC4\u4EF6\u90FD\u9700\u8981\u52A0\u4E0A\u524D\u7F00<code${_scopeId}>Lib</code></p><div class="language-vue"${_scopeId}><button class="copy"${_scopeId}></button><span class="lang"${_scopeId}>vue</span><pre${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>&lt;LibMaskClose /&gt;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>&lt;!-- or --&gt;</span></span>
<span class="line"${_scopeId}></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>&lt;LibMaskClose&gt;&lt;/LibMaskClose&gt;</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
      } else {
        return [
          createVNode("p", null, [
            createTextVNode("\u6240\u6709\u7EC4\u4EF6\u90FD\u9700\u8981\u52A0\u4E0A\u524D\u7F00"),
            createVNode("code", null, "Lib")
          ]),
          createVNode("div", { class: "language-vue" }, [
            createVNode("button", { class: "copy" }),
            createVNode("span", { class: "lang" }, "vue"),
            createVNode("pre", null, [
              createVNode("code", null, [
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "<LibMaskClose />")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#676E95" } }, "<!-- or -->")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "<LibMaskClose></LibMaskClose>")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Components/base/start.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const start = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  start as default
};
