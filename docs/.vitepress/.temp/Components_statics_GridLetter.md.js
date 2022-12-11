import { mergeProps, useSSRContext, defineComponent, ref, onMounted, nextTick, onBeforeMount, withCtx, createTextVNode, toDisplayString, resolveComponent, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.9d74fd37.js";
const index_vue_vue_type_style_index_0_scoped_1e9c7460_lang = "";
const _sfc_main$2 = {
  name: "LibGridLetter",
  props: {
    area: {
      type: String,
      default: ""
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "LibGridLetter",
    style: { gridArea: $props.area }
  }, _attrs))} data-v-1e9c7460>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Components/statics/Components/GridLetter/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const LibGridLetter = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1e9c7460"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const box = ref("abcdefg");
    const layout = ref("");
    const layouts = {
      0: `
    'a a a a'
    'b b c c'
    'd d e e'
    'f f f f'
    'g g g g'
  `,
      500: `
    'a d d'
    'a g f'
    'b b e'
    'c c c'
  `,
      800: `
    'a b f f'
    'a b f f'
    'c b g e'
    'd d d e'
  `,
      1200: `
    'a a b c'
    'd e b g'
    'd f f f'
  `
    };
    const fn = () => {
      Object.keys(layouts).forEach((item) => {
        if (document.documentElement.clientWidth > Number(item)) {
          layout.value = layouts[item];
        }
      });
    };
    onMounted(() => {
      nextTick(() => {
        fn();
      });
      window.addEventListener("resize", fn);
    });
    onBeforeMount(() => {
      window.removeEventListener("resize", fn);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "grid",
        style: { gridTemplateAreas: layout.value }
      }, _attrs))} data-v-c232fc00><!--[-->`);
      ssrRenderList(box.value, (item, index) => {
        _push(ssrRenderComponent(LibGridLetter, {
          class: "LibGridLetter",
          area: item,
          key: index
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_c232fc00_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Components/statics/Components/GridLetter/demo/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const GridLetter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c232fc00"]]);
const __pageData = JSON.parse('{"title":"GridLetter","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EE3\u7801\u6F14\u793A","slug":"\u4EE3\u7801\u6F14\u793A","link":"#\u4EE3\u7801\u6F14\u793A","children":[]}],"relativePath":"Components/statics/GridLetter.md","lastUpdated":1666717310000}');
const __default__ = { name: "Components/statics/GridLetter.md" };
const _sfc_main = Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContainerBox = resolveComponent("ContainerBox");
      const _component_ShowCode = resolveComponent("ShowCode");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="gridletter" tabindex="-1">GridLetter <a class="header-anchor" href="#gridletter" aria-hidden="true">#</a></h1>`);
      _push(ssrRenderComponent(_component_ContainerBox, { title: "\u4ECB\u7ECD" }, {
        desc: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>\u5229\u7528\u4E86<code${_scopeId}>grid</code>\u5E03\u5C40\u7684<code${_scopeId}>gridTemplateAreas</code>\u7236\u5C5E\u6027\uFF0C\u5B9E\u73B0\u5B57\u6BCD\u6A21\u677F\u5E03\u5C40</p><p${_scopeId}>\u63A8\u8350\u4F7F\u7528 <a href="https://cssgrid-generator.netlify.app" target="_blank" rel="noreferrer"${_scopeId}>Grid \u5E03\u5C40\u751F\u6210\u5668</a> \u8F85\u52A9\u5E03\u5C40\uFF0C\u786E\u5B9A\u6BCF\u4E2A\u76D2\u5B50\u7684\u5360\u7528\u683C\u6570</p>`);
          } else {
            return [
              createVNode("p", null, [
                createTextVNode("\u5229\u7528\u4E86"),
                createVNode("code", null, "grid"),
                createTextVNode("\u5E03\u5C40\u7684"),
                createVNode("code", null, "gridTemplateAreas"),
                createTextVNode("\u7236\u5C5E\u6027\uFF0C\u5B9E\u73B0\u5B57\u6BCD\u6A21\u677F\u5E03\u5C40")
              ]),
              createVNode("p", null, [
                createTextVNode("\u63A8\u8350\u4F7F\u7528 "),
                createVNode("a", {
                  href: "https://cssgrid-generator.netlify.app",
                  target: "_blank",
                  rel: "noreferrer"
                }, "Grid \u5E03\u5C40\u751F\u6210\u5668"),
                createTextVNode(" \u8F85\u52A9\u5E03\u5C40\uFF0C\u786E\u5B9A\u6BCF\u4E2A\u76D2\u5B50\u7684\u5360\u7528\u683C\u6570")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ContainerBox, { title: "\u4E0B\u8F7D\u5E76\u5F15\u5165" }, {
        desc: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}><a href="https://gitee.com/lengyibai/lib3-component-packages/raw/master/Lib/static/LibGridLetter.zip" target="_blank" rel="noreferrer"${_scopeId}>\u4E0B\u8F7D\u7EC4\u4EF6\u5305\u53CA\u5F53\u524D\u7EC4\u4EF6\u7684\u6240\u6709\u6848\u4F8B</a></p><p${_scopeId}>\u5F15\u5165\u53C2\u8003 <a href="/lib3.0/Components/base/start.html"${_scopeId}>\u5F15\u5165\u7EC4\u4EF6</a></p>`);
          } else {
            return [
              createVNode("p", null, [
                createVNode("a", {
                  href: "https://gitee.com/lengyibai/lib3-component-packages/raw/master/Lib/static/LibGridLetter.zip",
                  target: "_blank",
                  rel: "noreferrer"
                }, "\u4E0B\u8F7D\u7EC4\u4EF6\u5305\u53CA\u5F53\u524D\u7EC4\u4EF6\u7684\u6240\u6709\u6848\u4F8B")
              ]),
              createVNode("p", null, [
                createTextVNode("\u5F15\u5165\u53C2\u8003 "),
                createVNode("a", { href: "/lib3.0/Components/base/start.html" }, "\u5F15\u5165\u7EC4\u4EF6")
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
            _push2(` \u6570\u5B57\u6A21\u677F\uFF1A\u867D\u7136\u53EF\u8BFB\u6027\u4E0D\u5F3A\uFF0C\u4F46\u5B83\u76F4\u63A5\u4FEE\u6539\u7684\u5B50\u5143\u7D20\u5C5E\u6027\uFF0C\u80FD\u89E6\u53D1\u5B50\u5143\u7D20\u52A8\u753B <p${_scopeId}>\u5B57\u6BCD\u6A21\u677F\uFF1A\u867D\u7136\u770B\u7740\u66F4\u76F4\u89C2\u3001\u53EF\u8BFB\u6027\u5F3A\uFF0C\u4F46\u5B57\u6BCD\u6A21\u677F\u5C5E\u4E8E\u7236\u5143\u7D20\u5C5E\u6027\uFF0C\u4FEE\u6539\u5E03\u5C40\u5E76\u4E0D\u4F1A\u89E6\u53D1\u5B50\u5143\u7D20\u7684\u54CD\u5E94\u5F0F\u52A8\u753B</p><p${_scopeId}>\u63A8\u8350\uFF1A\u5F53\u5E03\u5C40\u5B9A\u6B7B\u4E0D\u4F1A\u6539\u53D8\u6216\u4E0D\u9700\u8981\u52A8\u753B\u65F6\uFF0C\u53EF\u4EE5\u8003\u8651\u4F7F\u7528\u5B57\u6BCD\u6A21\u677F</p><p${_scopeId}>\u8BD5\u7740\u7F29\u5C0F\u6D4F\u89C8\u5668\u5BBD\u5EA6\u67E5\u770B\u6548\u679C</p>`);
          } else {
            return [
              createTextVNode(" \u6570\u5B57\u6A21\u677F\uFF1A\u867D\u7136\u53EF\u8BFB\u6027\u4E0D\u5F3A\uFF0C\u4F46\u5B83\u76F4\u63A5\u4FEE\u6539\u7684\u5B50\u5143\u7D20\u5C5E\u6027\uFF0C\u80FD\u89E6\u53D1\u5B50\u5143\u7D20\u52A8\u753B "),
              createVNode("p", null, "\u5B57\u6BCD\u6A21\u677F\uFF1A\u867D\u7136\u770B\u7740\u66F4\u76F4\u89C2\u3001\u53EF\u8BFB\u6027\u5F3A\uFF0C\u4F46\u5B57\u6BCD\u6A21\u677F\u5C5E\u4E8E\u7236\u5143\u7D20\u5C5E\u6027\uFF0C\u4FEE\u6539\u5E03\u5C40\u5E76\u4E0D\u4F1A\u89E6\u53D1\u5B50\u5143\u7D20\u7684\u54CD\u5E94\u5F0F\u52A8\u753B"),
              createVNode("p", null, "\u63A8\u8350\uFF1A\u5F53\u5E03\u5C40\u5B9A\u6B7B\u4E0D\u4F1A\u6539\u53D8\u6216\u4E0D\u9700\u8981\u52A8\u753B\u65F6\uFF0C\u53EF\u4EE5\u8003\u8651\u4F7F\u7528\u5B57\u6BCD\u6A21\u677F"),
              createVNode("p", null, "\u8BD5\u7740\u7F29\u5C0F\u6D4F\u89C8\u5668\u5BBD\u5EA6\u67E5\u770B\u6548\u679C")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="demoBox"${_scopeId}>`);
            _push2(ssrRenderComponent(GridLetter, null, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_ShowCode, null, {
              codes: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="language-vue"${_scopeId2}><button class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>grid</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>style</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{ </span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>gridTemplateAreas</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>: </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>layout</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> }</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>LibGridLetter</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>LibGridLetter</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-for</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>, </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>index</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>) in </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>box</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>area</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>key</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>index</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{{</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> item </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>LibGridLetter</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>lang</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>ts</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>nextTick</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>onBeforeMount</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>onMounted</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>interface</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>Layout</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  [</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>propsName</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>string</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>string</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> box </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>abcdefg</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId2}>//\u4EE3\u88687\u4E2A\u76D2\u5B50\uFF0C\u5B57\u6BCD\u4EE3\u8868\u76D2\u5B50\u7684id</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> layout </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId2}>//\u7528\u4E8E\u5B58\u50A8\u5F53\u524D\u7684\u5E03\u5C40</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> layouts</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>Layout</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>\`</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>    &#39;a a a a&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>    &#39;b b c c&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>    &#39;d d e e&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>    &#39;f f f f&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>    &#39;g g g g&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>\`</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>500</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>\`</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>    &#39;a d d&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>    &#39;a g f&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>    &#39;b b e&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>    &#39;c c c&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>\`</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>800</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>\`</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>    &#39;a b f f&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>    &#39;a b f f&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>    &#39;c b g e&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>    &#39;d d d e&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>\`</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>1200</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>\`</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>    &#39;a a b c&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>    &#39;d e b g&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>    &#39;d f f f&#39;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>\`</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>};</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> fn </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId2}>/* \u5FAA\u73AF\u5E03\u5C40\u6570\u7EC4\u7684 key\uFF0C\u5F53\u5927\u4E8E key \u5219\u4F7F\u7528\u8BE5 key \u5E03\u5C40 */</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>Object</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>keys</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>layouts</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>forEach</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>item</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>if</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> (</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>document</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>documentElement</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>clientWidth</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>Number</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>item</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>layout</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>layouts</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>[</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>item</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>};</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>onMounted</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>nextTick</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>fn</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>window</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>addEventListener</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>resize</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>fn</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>onBeforeMount</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>window</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>removeEventListener</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>resize</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>fn</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>style</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>scoped</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>grid</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>display</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> grid</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>width</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>height</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50vh</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>grid-gap</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>5px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>LibGridLetter</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>display</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> flex</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>justify-content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>align-items</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>border</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>1px</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> solid </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>#</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>000</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>font-size</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>6vw</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
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
                            createVNode("span", { style: { "color": "#F07178" } }, "div"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "class"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "grid"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, " :"),
                            createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{ "),
                            createVNode("span", { style: { "color": "#F07178" } }, "gridTemplateAreas"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ": "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "layout"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, " }"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "LibGridLetter"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "class"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "LibGridLetter"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "v-for"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "item"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ", "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "index"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ") in "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "box"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, " :"),
                            createVNode("span", { style: { "color": "#C792EA" } }, "area"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "item"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, " :"),
                            createVNode("span", { style: { "color": "#C792EA" } }, "key"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "index"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{{"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " item "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}}")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "LibGridLetter"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">")
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
                            createVNode("span", { style: { "color": "#F07178" } }, "script"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "lang"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "ts"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "import"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "nextTick"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "onBeforeMount"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "onMounted"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
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
                            createVNode("span", { style: { "color": "#C792EA" } }, "interface"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "Layout"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  ["),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "propsName"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "string"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "]"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "string"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " box "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "abcdefg"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, ")"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#676E95" } }, "//\u4EE3\u88687\u4E2A\u76D2\u5B50\uFF0C\u5B57\u6BCD\u4EE3\u8868\u76D2\u5B50\u7684id")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " layout "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, ")"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#676E95" } }, "//\u7528\u4E8E\u5B58\u50A8\u5F53\u524D\u7684\u5E03\u5C40")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " layouts"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "Layout"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "`")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C3E88D" } }, "    'a a a a'")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C3E88D" } }, "    'b b c c'")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C3E88D" } }, "    'd d e e'")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C3E88D" } }, "    'f f f f'")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C3E88D" } }, "    'g g g g'")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C3E88D" } }, "  "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "`"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "500"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "`")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C3E88D" } }, "    'a d d'")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C3E88D" } }, "    'a g f'")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C3E88D" } }, "    'b b e'")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C3E88D" } }, "    'c c c'")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C3E88D" } }, "  "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "`"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "800"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "`")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C3E88D" } }, "    'a b f f'")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C3E88D" } }, "    'a b f f'")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C3E88D" } }, "    'c b g e'")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C3E88D" } }, "    'd d d e'")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C3E88D" } }, "  "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "`"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "1200"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "`")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C3E88D" } }, "    'a a b c'")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C3E88D" } }, "    'd e b g'")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C3E88D" } }, "    'd f f f'")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C3E88D" } }, "  "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "`"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "};")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " fn "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "()"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "  "),
                            createVNode("span", { style: { "color": "#676E95" } }, "/* \u5FAA\u73AF\u5E03\u5C40\u6570\u7EC4\u7684 key\uFF0C\u5F53\u5927\u4E8E key \u5219\u4F7F\u7528\u8BE5 key \u5E03\u5C40 */")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "  "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "Object"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "keys"),
                            createVNode("span", { style: { "color": "#F07178" } }, "("),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "layouts"),
                            createVNode("span", { style: { "color": "#F07178" } }, ")"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "forEach"),
                            createVNode("span", { style: { "color": "#F07178" } }, "("),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "item"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "    "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "if"),
                            createVNode("span", { style: { "color": "#F07178" } }, " ("),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "document"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "documentElement"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "clientWidth"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "Number"),
                            createVNode("span", { style: { "color": "#F07178" } }, "("),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "item"),
                            createVNode("span", { style: { "color": "#F07178" } }, ")) "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "      "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "layout"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "layouts"),
                            createVNode("span", { style: { "color": "#F07178" } }, "["),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "item"),
                            createVNode("span", { style: { "color": "#F07178" } }, "]"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "    "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}")
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
                            createVNode("span", { style: { "color": "#89DDFF" } }, "};")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#82AAFF" } }, "onMounted"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "()"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "  "),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "nextTick"),
                            createVNode("span", { style: { "color": "#F07178" } }, "("),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "()"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "    "),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "fn"),
                            createVNode("span", { style: { "color": "#F07178" } }, "()"),
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
                            createVNode("span", { style: { "color": "#F07178" } }, "  "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "window"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "addEventListener"),
                            createVNode("span", { style: { "color": "#F07178" } }, "("),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "resize"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "fn"),
                            createVNode("span", { style: { "color": "#F07178" } }, ")"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, ")"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#82AAFF" } }, "onBeforeMount"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "()"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "  "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "window"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "removeEventListener"),
                            createVNode("span", { style: { "color": "#F07178" } }, "("),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "resize"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "fn"),
                            createVNode("span", { style: { "color": "#F07178" } }, ")"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, ")"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                            createVNode("span", { style: { "color": "#F07178" } }, "script"),
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
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "grid"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "display"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " grid"),
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
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "grid-gap"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "5px"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "LibGridLetter"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
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
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "border"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "1px"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " solid "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "000"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "font-size"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "6vw"),
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
          } else {
            return [
              createVNode("div", { class: "demoBox" }, [
                createVNode(GridLetter)
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
                          createVNode("span", { style: { "color": "#F07178" } }, "div"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "class"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "grid"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#89DDFF" } }, " :"),
                          createVNode("span", { style: { "color": "#C792EA" } }, "style"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{ "),
                          createVNode("span", { style: { "color": "#F07178" } }, "gridTemplateAreas"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ": "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "layout"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, " }"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "LibGridLetter"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "class"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "LibGridLetter"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "v-for"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "item"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ", "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "index"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ") in "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "box"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#89DDFF" } }, " :"),
                          createVNode("span", { style: { "color": "#C792EA" } }, "area"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "item"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#89DDFF" } }, " :"),
                          createVNode("span", { style: { "color": "#C792EA" } }, "key"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "index"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{{"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " item "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "}}")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "LibGridLetter"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ">")
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
                          createVNode("span", { style: { "color": "#F07178" } }, "script"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "setup"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "lang"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "ts"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "import"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "nextTick"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "onBeforeMount"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "onMounted"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "ref"),
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
                          createVNode("span", { style: { "color": "#C792EA" } }, "interface"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "Layout"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  ["),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "propsName"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "string"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "]"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "string"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " box "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "abcdefg"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, ")"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#676E95" } }, "//\u4EE3\u88687\u4E2A\u76D2\u5B50\uFF0C\u5B57\u6BCD\u4EE3\u8868\u76D2\u5B50\u7684id")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " layout "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "''"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, ")"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#676E95" } }, "//\u7528\u4E8E\u5B58\u50A8\u5F53\u524D\u7684\u5E03\u5C40")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " layouts"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "Layout"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "`")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C3E88D" } }, "    'a a a a'")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C3E88D" } }, "    'b b c c'")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C3E88D" } }, "    'd d e e'")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C3E88D" } }, "    'f f f f'")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C3E88D" } }, "    'g g g g'")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C3E88D" } }, "  "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "`"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "500"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "`")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C3E88D" } }, "    'a d d'")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C3E88D" } }, "    'a g f'")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C3E88D" } }, "    'b b e'")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C3E88D" } }, "    'c c c'")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C3E88D" } }, "  "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "`"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "800"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "`")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C3E88D" } }, "    'a b f f'")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C3E88D" } }, "    'a b f f'")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C3E88D" } }, "    'c b g e'")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C3E88D" } }, "    'd d d e'")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C3E88D" } }, "  "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "`"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "1200"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "`")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C3E88D" } }, "    'a a b c'")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C3E88D" } }, "    'd e b g'")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C3E88D" } }, "    'd f f f'")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C3E88D" } }, "  "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "`"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "};")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " fn "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "()"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "  "),
                          createVNode("span", { style: { "color": "#676E95" } }, "/* \u5FAA\u73AF\u5E03\u5C40\u6570\u7EC4\u7684 key\uFF0C\u5F53\u5927\u4E8E key \u5219\u4F7F\u7528\u8BE5 key \u5E03\u5C40 */")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "  "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "Object"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "keys"),
                          createVNode("span", { style: { "color": "#F07178" } }, "("),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "layouts"),
                          createVNode("span", { style: { "color": "#F07178" } }, ")"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "forEach"),
                          createVNode("span", { style: { "color": "#F07178" } }, "("),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "item"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "    "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "if"),
                          createVNode("span", { style: { "color": "#F07178" } }, " ("),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "document"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "documentElement"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "clientWidth"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "Number"),
                          createVNode("span", { style: { "color": "#F07178" } }, "("),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "item"),
                          createVNode("span", { style: { "color": "#F07178" } }, ")) "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "      "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "layout"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "layouts"),
                          createVNode("span", { style: { "color": "#F07178" } }, "["),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "item"),
                          createVNode("span", { style: { "color": "#F07178" } }, "]"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "    "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "}")
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
                          createVNode("span", { style: { "color": "#89DDFF" } }, "};")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#82AAFF" } }, "onMounted"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "()"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "  "),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "nextTick"),
                          createVNode("span", { style: { "color": "#F07178" } }, "("),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "()"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "    "),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "fn"),
                          createVNode("span", { style: { "color": "#F07178" } }, "()"),
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
                          createVNode("span", { style: { "color": "#F07178" } }, "  "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "window"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "addEventListener"),
                          createVNode("span", { style: { "color": "#F07178" } }, "("),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "resize"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "fn"),
                          createVNode("span", { style: { "color": "#F07178" } }, ")"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, ")"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#82AAFF" } }, "onBeforeMount"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "()"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "  "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "window"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "removeEventListener"),
                          createVNode("span", { style: { "color": "#F07178" } }, "("),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "resize"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "fn"),
                          createVNode("span", { style: { "color": "#F07178" } }, ")"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, ")"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                          createVNode("span", { style: { "color": "#F07178" } }, "script"),
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
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "grid"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "display"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " grid"),
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
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "grid-gap"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "5px"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "LibGridLetter"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
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
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "border"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "1px"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " solid "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "#"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "000"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "font-size"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "6vw"),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Components/statics/GridLetter.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
