import { resolveDirective, mergeProps, useSSRContext, resolveComponent, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.9d74fd37.js";
const _imports_0 = "/lib3.0/assets/preview.911522ef.png";
const index_vue_vue_type_style_index_0_scoped_875db90f_lang = "";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _directive_maskGradient = resolveDirective("maskGradient");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "MaskGradient" }, _attrs, ssrGetDirectiveProps(_ctx, _directive_maskGradient, {
    color: "rgba(40, 100, 195, 0.5)",
    num1: "0%",
    num2: "50%"
  })))} data-v-875db90f><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-875db90f></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Directives/Components/MaskGradient/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MaskGradient = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-875db90f"]]);
const __pageData = JSON.parse('{"title":"MaskGradient","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EE3\u7801\u6F14\u793A","slug":"\u4EE3\u7801\u6F14\u793A","link":"#\u4EE3\u7801\u6F14\u793A","children":[]}],"relativePath":"Directives/MaskGradient.md","lastUpdated":1666717310000}');
const __default__ = { name: "Directives/MaskGradient.md" };
const _sfc_main = Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContainerBox = resolveComponent("ContainerBox");
      const _component_ShowCode = resolveComponent("ShowCode");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="maskgradient" tabindex="-1">MaskGradient <a class="header-anchor" href="#maskgradient" aria-hidden="true">#</a></h1>`);
      _push(ssrRenderComponent(_component_ContainerBox, { title: "\u4ECB\u7ECD" }, {
        desc: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u53EF\u4E3A\u4E00\u4E9B\u5F39\u7A97\u7684\u534A\u900F\u660E\u9ED1\u8272\u8499\u7248\u80CC\u666F\u52A0\u4E0A\u6E10\u53D8\uFF0C\u6216\u8005\u4E00\u4E9B\u89C6\u9891\u5C01\u9762\u6587\u5B57 `);
          } else {
            return [
              createTextVNode(" \u53EF\u4E3A\u4E00\u4E9B\u5F39\u7A97\u7684\u534A\u900F\u660E\u9ED1\u8272\u8499\u7248\u80CC\u666F\u52A0\u4E0A\u6E10\u53D8\uFF0C\u6216\u8005\u4E00\u4E9B\u89C6\u9891\u5C01\u9762\u6587\u5B57 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ContainerBox, { title: "\u4F7F\u7528" }, {
        desc: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>\u5F15\u5165\u53C2\u8003 <a href="/lib3.0/Directives/base/start.html#\u51C6\u5907\u5DE5\u4F5C"${_scopeId}>\u51C6\u5907\u5DE5\u4F5C</a></p>`);
          } else {
            return [
              createVNode("p", null, [
                createTextVNode("\u5F15\u5165\u53C2\u8003 "),
                createVNode("a", { href: "/lib3.0/Directives/base/start.html#\u51C6\u5907\u5DE5\u4F5C" }, "\u51C6\u5907\u5DE5\u4F5C")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 id="\u4EE3\u7801\u6F14\u793A" tabindex="-1">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A" aria-hidden="true">#</a></h2>`);
      _push(ssrRenderComponent(_component_ContainerBox, { title: "\u57FA\u7840\u7528\u6CD5" }, {
        desc: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u4F8B\u5982\u738B\u8005\u8363\u8000\u7684\u5F39\u7A97\u80CC\u666F `);
          } else {
            return [
              createTextVNode(" \u4F8B\u5982\u738B\u8005\u8363\u8000\u7684\u5F39\u7A97\u80CC\u666F ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="demoBox"${_scopeId}>`);
            _push2(ssrRenderComponent(MaskGradient, null, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_ShowCode, null, {
              codes: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="language-vue"${_scopeId2}><button class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>MaskGradient</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-maskGradient</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>: </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>rgba(40, 100, 195, 0.5)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>num1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>: </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>0%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>num2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>: </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    }</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>  &gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>img</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>src</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>./preview.png</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>alt</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>style</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>scoped</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>MaskGradient</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>position</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> relative</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>width</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>height</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50vh</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>background-color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>#</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>000</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>display</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> flex</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>justify-content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>align-items</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>#</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>fff</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>font-size</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>2.5vw</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>img</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>width</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>75%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>z-index</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}></span></code></pre></div>`);
                } else {
                  return [
                    createVNode("div", { class: "language-vue" }, [
                      createVNode("button", { class: "copy" }),
                      createVNode("span", { class: "lang" }, "vue"),
                      createVNode("pre", null, [
                        createVNode("code", null, [
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                            createVNode("span", { style: { "color": "#F07178" } }, "template"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                            createVNode("span", { style: { "color": "#F07178" } }, "div")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "class"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "MaskGradient"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "v-maskGradient"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                            createVNode("span", { style: { "color": "#F07178" } }, "color"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ": "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "rgba(40, 100, 195, 0.5)"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                            createVNode("span", { style: { "color": "#F07178" } }, "num1"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ": "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "0%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                            createVNode("span", { style: { "color": "#F07178" } }, "num2"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ": "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "50%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "    }"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "  >")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                            createVNode("span", { style: { "color": "#F07178" } }, "img"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "src"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "./preview.png"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "alt"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '""'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                            createVNode("span", { style: { "color": "#F07178" } }, "div"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                            createVNode("span", { style: { "color": "#F07178" } }, "template"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                            createVNode("span", { style: { "color": "#F07178" } }, "style"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "scoped"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "MaskGradient"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "position"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " relative"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "width"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "height"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50vh"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "background-color"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "000"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "display"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " flex"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "justify-content"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " center"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "align-items"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " center"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "color"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "fff"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "font-size"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "2.5vw"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "img"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "width"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "75%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "z-index"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                            createVNode("span", { style: { "color": "#F07178" } }, "style"),
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
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ShowCode, { iskey: "" }, {
              codes: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="language-js"${_scopeId2}><button class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>js</span><pre${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> maskGradient </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>mounted</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>el</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>HTMLElement</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>binding</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>color</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>rgba(0, 0, 0, 0.75)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>rotate</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>0deg</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>num1</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>0%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>num2</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>binding</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>||</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{};</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>mask</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>document</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>createElement</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>mask</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>cssText</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>\`</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>    position: absolute;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>    inset:0;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>    background-image: linear-gradient(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>\${</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>rotate</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>, </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>\${</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>\${</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>num1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>, transparent </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>\${</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>num2</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>);</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>    pointer-events: none;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>\`</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>el</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>appendChild</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>mask</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>};</span></span>
<span class="line"${_scopeId2}></span></code></pre></div>`);
                } else {
                  return [
                    createVNode("div", { class: "language-js" }, [
                      createVNode("button", { class: "copy" }),
                      createVNode("span", { class: "lang" }, "js"),
                      createVNode("pre", null, [
                        createVNode("code", null, [
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " maskGradient "),
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
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "HTMLElement"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "binding"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "    "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "color"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "rgba(0, 0, 0, 0.75)"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "rotate"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "0deg"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "num1"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "0%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "num2"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "50%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "binding"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{};")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "    "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "mask"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "document"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "createElement"),
                            createVNode("span", { style: { "color": "#F07178" } }, "("),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "div"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                            createVNode("span", { style: { "color": "#F07178" } }, ")"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "    "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "mask"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "style"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "cssText"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "`")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C3E88D" } }, "    position: absolute;")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C3E88D" } }, "    inset:0;")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C3E88D" } }, "    background-image: linear-gradient("),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "${"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "rotate"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                            createVNode("span", { style: { "color": "#C3E88D" } }, ", "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "${"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "color"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                            createVNode("span", { style: { "color": "#C3E88D" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "${"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "num1"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                            createVNode("span", { style: { "color": "#C3E88D" } }, ", transparent "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "${"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "num2"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                            createVNode("span", { style: { "color": "#C3E88D" } }, ");")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C3E88D" } }, "    pointer-events: none;")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C3E88D" } }, "    "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "`"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "    "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "el"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "appendChild"),
                            createVNode("span", { style: { "color": "#F07178" } }, "("),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "mask"),
                            createVNode("span", { style: { "color": "#F07178" } }, ")"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "  "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "};")
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
              createVNode("div", { class: "demoBox" }, [
                createVNode(MaskGradient)
              ]),
              createVNode(_component_ShowCode, null, {
                codes: withCtx(() => [
                  createVNode("div", { class: "language-vue" }, [
                    createVNode("button", { class: "copy" }),
                    createVNode("span", { class: "lang" }, "vue"),
                    createVNode("pre", null, [
                      createVNode("code", null, [
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                          createVNode("span", { style: { "color": "#F07178" } }, "template"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                          createVNode("span", { style: { "color": "#F07178" } }, "div")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "class"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "MaskGradient"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "    "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "v-maskGradient"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                          createVNode("span", { style: { "color": "#F07178" } }, "color"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ": "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "rgba(40, 100, 195, 0.5)"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                          createVNode("span", { style: { "color": "#F07178" } }, "num1"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ": "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "0%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                          createVNode("span", { style: { "color": "#F07178" } }, "num2"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ": "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "50%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "    }"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "  >")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                          createVNode("span", { style: { "color": "#F07178" } }, "img"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "src"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "./preview.png"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "alt"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '""'),
                          createVNode("span", { style: { "color": "#89DDFF" } }, " />")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                          createVNode("span", { style: { "color": "#F07178" } }, "div"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                          createVNode("span", { style: { "color": "#F07178" } }, "template"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                          createVNode("span", { style: { "color": "#F07178" } }, "style"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "scoped"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "MaskGradient"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "position"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " relative"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "width"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "height"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50vh"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "background-color"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "000"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "display"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " flex"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "justify-content"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " center"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "align-items"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " center"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "color"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "fff"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "font-size"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "2.5vw"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "img"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "width"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "75%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "z-index"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                          createVNode("span", { style: { "color": "#F07178" } }, "style"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" })
                      ])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_ShowCode, { iskey: "" }, {
                codes: withCtx(() => [
                  createVNode("div", { class: "language-js" }, [
                    createVNode("button", { class: "copy" }),
                    createVNode("span", { class: "lang" }, "js"),
                    createVNode("pre", null, [
                      createVNode("code", null, [
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " maskGradient "),
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
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "HTMLElement"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "binding"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "    "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "color"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "rgba(0, 0, 0, 0.75)"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "rotate"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "0deg"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "num1"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "0%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "num2"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "50%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "binding"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "||"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{};")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "    "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "mask"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "document"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "createElement"),
                          createVNode("span", { style: { "color": "#F07178" } }, "("),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "div"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                          createVNode("span", { style: { "color": "#F07178" } }, ")"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "    "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "mask"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "style"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "cssText"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "`")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C3E88D" } }, "    position: absolute;")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C3E88D" } }, "    inset:0;")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C3E88D" } }, "    background-image: linear-gradient("),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "${"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "rotate"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                          createVNode("span", { style: { "color": "#C3E88D" } }, ", "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "${"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "color"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                          createVNode("span", { style: { "color": "#C3E88D" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "${"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "num1"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                          createVNode("span", { style: { "color": "#C3E88D" } }, ", transparent "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "${"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "num2"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                          createVNode("span", { style: { "color": "#C3E88D" } }, ");")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C3E88D" } }, "    pointer-events: none;")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C3E88D" } }, "    "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "`"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "    "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "el"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "appendChild"),
                          createVNode("span", { style: { "color": "#F07178" } }, "("),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "mask"),
                          createVNode("span", { style: { "color": "#F07178" } }, ")"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "  "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "};")
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Directives/MaskGradient.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
