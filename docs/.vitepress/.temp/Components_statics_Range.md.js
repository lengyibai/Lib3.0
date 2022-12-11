import { defineComponent, ref, computed, mergeProps, unref, useSSRContext, resolveComponent, withCtx, createVNode, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.9d74fd37.js";
const iconSvg = "/lib3.0/assets/icon.7e7e41eb.svg";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    min: { default: 0 },
    max: { default: 100 },
    modelValue: { default: 0 },
    text: { default: "" },
    color: { default: "#3498db" },
    size: { default: 20 },
    showDot: { type: Boolean, default: true },
    showIcon: { type: Boolean, default: false },
    icon: { default: iconSvg },
    showNum: { type: Boolean, default: true },
    step: { default: 1 }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const show_num = ref(false);
    ref(0);
    const barWidth = computed(() => {
      let value = props.modelValue - props.min;
      let max = props.max - props.min;
      return `calc(${value / (max / 100)}% + ${(props.size - (props.showDot ? 0 : 25)) * (max / 2 - value) / max}px)`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "LibRange" }, _attrs))} data-v-64cfa988>`);
      if (__props.showNum) {
        _push(`<div class="sliderValue" data-v-64cfa988><span class="${ssrRenderClass({ showNum: show_num.value })}" style="${ssrRenderStyle({ left: unref(barWidth) })}" data-v-64cfa988>${ssrInterpolate(__props.text || __props.modelValue)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="field" data-v-64cfa988><div class="bar" style="${ssrRenderStyle({ width: unref(barWidth), backgroundColor: __props.color })}" data-v-64cfa988><img${ssrRenderAttr("src", __props.icon)} style="${ssrRenderStyle([
        __props.showIcon && __props.showDot ? null : { display: "none" },
        { width: __props.size + "px", height: __props.size + "px" }
      ])}" data-v-64cfa988><span style="${ssrRenderStyle([
        __props.showDot && !__props.showIcon ? null : { display: "none" },
        {
          width: __props.size + "px",
          height: __props.size + "px",
          backgroundColor: __props.color
        }
      ])}" data-v-64cfa988></span></div><input${ssrRenderAttr("value", __props.modelValue)} type="range"${ssrRenderAttr("min", __props.min)}${ssrRenderAttr("max", __props.max)}${ssrRenderAttr("step", __props.step)} data-v-64cfa988></div></div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_64cfa988_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Components/statics/Components/Range/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const LibRange = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-64cfa988"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "index-a",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo" }, _attrs))} data-v-b35147e1>`);
      _push(ssrRenderComponent(LibRange, {
        modelValue: value.value,
        "onUpdate:modelValue": ($event) => value.value = $event
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const indexA_vue_vue_type_style_index_0_scoped_b35147e1_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Components/statics/Components/Range/demo/index-a.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const RangeA = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b35147e1"]]);
const icon = "/lib3.0/assets/icon.7e7e41eb.svg";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index-b",
  __ssrInlineRender: true,
  setup(__props) {
    const value = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo" }, _attrs))} data-v-e3d411ff>`);
      _push(ssrRenderComponent(LibRange, {
        icon: unref(icon),
        max: 1e3,
        showIcon: true,
        size: 50,
        step: 10,
        text: "\u8FDB\u5EA6\uFF1A" + value.value,
        color: "#c0392b",
        ply: "10px",
        modelValue: value.value,
        "onUpdate:modelValue": ($event) => value.value = $event
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const indexB_vue_vue_type_style_index_0_scoped_e3d411ff_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Components/statics/Components/Range/demo/index-b.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const RangeB = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e3d411ff"]]);
const __pageData = JSON.parse('{"title":"Range","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EE3\u7801\u6F14\u793A","slug":"\u4EE3\u7801\u6F14\u793A","link":"#\u4EE3\u7801\u6F14\u793A","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[]}],"relativePath":"Components/statics/Range.md","lastUpdated":1666717310000}');
const __default__ = { name: "Components/statics/Range.md" };
const _sfc_main = Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContainerBox = resolveComponent("ContainerBox");
      const _component_ShowCode = resolveComponent("ShowCode");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="range" tabindex="-1">Range <a class="header-anchor" href="#range" aria-hidden="true">#</a></h1>`);
      _push(ssrRenderComponent(_component_ContainerBox, { title: "\u4ECB\u7ECD" }, {
        desc: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>\u57FA\u4E8E\u539F\u751F<code${_scopeId}>input:type=range</code>\u8FDB\u884C\u5C01\u88C5</p>`);
          } else {
            return [
              createVNode("p", null, [
                createTextVNode("\u57FA\u4E8E\u539F\u751F"),
                createVNode("code", null, "input:type=range"),
                createTextVNode("\u8FDB\u884C\u5C01\u88C5")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ContainerBox, { title: "\u4E0B\u8F7D\u5E76\u5F15\u5165" }, {
        desc: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}><a href="https://gitee.com/lengyibai/lib3-component-packages/raw/master/Lib/static/LibRange.zip" target="_blank" rel="noreferrer"${_scopeId}>\u4E0B\u8F7D\u7EC4\u4EF6\u5305\u53CA\u5F53\u524D\u7EC4\u4EF6\u7684\u6240\u6709\u6848\u4F8B</a></p><p${_scopeId}>\u5F15\u5165\u53C2\u8003 <a href="/lib3.0/Components/base/start.html"${_scopeId}>\u5F15\u5165\u7EC4\u4EF6</a></p>`);
          } else {
            return [
              createVNode("p", null, [
                createVNode("a", {
                  href: "https://gitee.com/lengyibai/lib3-component-packages/raw/master/Lib/static/LibRange.zip",
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
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="demoBox"${_scopeId}>`);
            _push2(ssrRenderComponent(RangeA, null, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_ShowCode, null, {
              codes: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="language-vue"${_scopeId2}><button class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>demo</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>LibRange</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>lang</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>ts</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> value </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>style</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>scoped</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>demo</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>width</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
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
                            createVNode("span", { style: { "color": "#C3E88D" } }, "demo"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "LibRange"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
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
                            createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " value "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
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
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "demo"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
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
                createVNode(RangeA)
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
                          createVNode("span", { style: { "color": "#C3E88D" } }, "demo"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "LibRange"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
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
                          createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " value "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
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
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "demo"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
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
      _push(ssrRenderComponent(_component_ContainerBox, { title: "\u81EA\u5B9A\u4E49\u6837\u5F0F" }, {
        desc: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u81EA\u5B9A\u4E49\u5706\u70B9\u5927\u5C0F\u3001\u5706\u70B9\u6837\u5F0F\u3001\u8FDB\u5EA6\u6761\u989C\u8272\u3001\u6B65\u957F\u3001\u6700\u5927\u503C\u3001\u6309\u4E0B\u60AC\u6D6E\u6587\u672C\u7B49 `);
          } else {
            return [
              createTextVNode(" \u81EA\u5B9A\u4E49\u5706\u70B9\u5927\u5C0F\u3001\u5706\u70B9\u6837\u5F0F\u3001\u8FDB\u5EA6\u6761\u989C\u8272\u3001\u6B65\u957F\u3001\u6700\u5927\u503C\u3001\u6309\u4E0B\u60AC\u6D6E\u6587\u672C\u7B49 ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="demoBox"${_scopeId}>`);
            _push2(ssrRenderComponent(RangeB, null, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_ShowCode, null, {
              codes: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="language-vue"${_scopeId2}><button class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>demo</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>LibRange</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>icon</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>icon</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>max</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>1000</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>showIcon</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#FF9CAC" })}"${_scopeId2}>true</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>size</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>step</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>10</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      :</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>text</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>\u8FDB\u5EA6\uFF1A</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> + </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>#c0392b</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>ply</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>10px</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-model</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>    /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>lang</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>ts</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> icon </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>./img/icon.svg</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> value </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>style</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>scoped</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>demo</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>width</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
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
                            createVNode("span", { style: { "color": "#C3E88D" } }, "demo"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "LibRange")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "      :"),
                            createVNode("span", { style: { "color": "#C792EA" } }, "icon"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "icon"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "      :"),
                            createVNode("span", { style: { "color": "#C792EA" } }, "max"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "1000"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "      :"),
                            createVNode("span", { style: { "color": "#C792EA" } }, "showIcon"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#FF9CAC" } }, "true"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "      :"),
                            createVNode("span", { style: { "color": "#C792EA" } }, "size"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "      :"),
                            createVNode("span", { style: { "color": "#C792EA" } }, "step"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "10"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "      :"),
                            createVNode("span", { style: { "color": "#C792EA" } }, "text"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, `"'`),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "\u8FDB\u5EA6\uFF1A"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, " + "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "color"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "#c0392b"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "ply"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "10px"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "    />")
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
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "import"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " icon "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "from"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "./img/icon.svg"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " value "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
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
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "demo"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
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
                createVNode(RangeB)
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
                          createVNode("span", { style: { "color": "#C3E88D" } }, "demo"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "LibRange")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "      :"),
                          createVNode("span", { style: { "color": "#C792EA" } }, "icon"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "icon"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "      :"),
                          createVNode("span", { style: { "color": "#C792EA" } }, "max"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "1000"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "      :"),
                          createVNode("span", { style: { "color": "#C792EA" } }, "showIcon"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#FF9CAC" } }, "true"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "      :"),
                          createVNode("span", { style: { "color": "#C792EA" } }, "size"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "      :"),
                          createVNode("span", { style: { "color": "#C792EA" } }, "step"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "10"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "      :"),
                          createVNode("span", { style: { "color": "#C792EA" } }, "text"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, `"'`),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "\u8FDB\u5EA6\uFF1A"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, " + "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "color"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "#c0392b"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "ply"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "10px"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "      "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "v-model"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"')
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "    />")
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
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "import"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " icon "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "from"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "./img/icon.svg"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " value "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
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
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "demo"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
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
      _push(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2>`);
      _push(ssrRenderComponent(_component_ContainerBox, { title: "Props" }, {
        desc: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<table${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u53C2\u6570</th><th${_scopeId}>\u8BF4\u660E</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u9ED8\u8BA4\u503C</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>min</td><td${_scopeId}>\u6700\u5C0F\u503C</td><td${_scopeId}>Number</td><td${_scopeId}>0</td></tr><tr${_scopeId}><td${_scopeId}>max</td><td${_scopeId}>\u6700\u5927\u503C</td><td${_scopeId}>Number</td><td${_scopeId}>100</td></tr><tr${_scopeId}><td${_scopeId}>v-model</td><td${_scopeId}>\u7ED1\u5B9A\u503C</td><td${_scopeId}>Number</td><td${_scopeId}>0</td></tr><tr${_scopeId}><td${_scopeId}>text</td><td${_scopeId}>\u6309\u4E0B\u60AC\u6D6E\u6587\u672C</td><td${_scopeId}>String</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>color</td><td${_scopeId}>\u8FDB\u5EA6\u6761\u989C\u8272</td><td${_scopeId}>String</td><td${_scopeId}>#3498db</td></tr><tr${_scopeId}><td${_scopeId}>size</td><td${_scopeId}>\u5706\u70B9\u548C\u56FE\u6807\u5927\u5C0F\uFF0C\u5355\u4F4D<code${_scopeId}>px</code></td><td${_scopeId}>Number</td><td${_scopeId}>20</td></tr><tr${_scopeId}><td${_scopeId}>ply</td><td${_scopeId}>\u8FDB\u5EA6\u6761\u539A\u5EA6</td><td${_scopeId}>String</td><td${_scopeId}>3px</td></tr><tr${_scopeId}><td${_scopeId}>showDot</td><td${_scopeId}>\u662F\u5426\u663E\u793A\u5706\u70B9\uFF0C\u4E5F\u51B3\u5B9A\u662F\u5426\u663E\u793A\u56FE\u6807</td><td${_scopeId}>Boolean</td><td${_scopeId}>true</td></tr><tr${_scopeId}><td${_scopeId}>showIcon</td><td${_scopeId}>\u662F\u5426\u663E\u793A\u56FE\u6807</td><td${_scopeId}>Boolean</td><td${_scopeId}>false</td></tr><tr${_scopeId}><td${_scopeId}>icon</td><td${_scopeId}>\u56FE\u6807\u8DEF\u5F84\uFF0C\u5F15\u5165\u672C\u5730\u56FE\u7247\u8BF7\u4F7F\u7528<code${_scopeId}>require(&#39;\u8DEF\u5F84&#39;)</code></td><td${_scopeId}>\u672A\u77E5</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>showNum</td><td${_scopeId}>\u662F\u5426\u5728\u6ED1\u52A8\u7684\u65F6\u5019\u663E\u793A\u6570\u5B57</td><td${_scopeId}>Boolean</td><td${_scopeId}>true</td></tr><tr${_scopeId}><td${_scopeId}>step</td><td${_scopeId}>\u6B65\u957F\uFF0C\u6ED1\u52A8\u4E00\u683C\u7684\u6570\u503C<br${_scopeId}>\u4F8B\u5B50\uFF1A<code${_scopeId}>max</code>\u4E3A<code${_scopeId}>200</code>,\u6B65\u957F\u4E3A<code${_scopeId}>10</code>\uFF0C\u5219\u4E00\u5171\u6709<code${_scopeId}>20</code>\u683C\uFF0C\u6ED1\u52A8\u4E00\u683C\u7684\u6570\u503C\u4E3A<code${_scopeId}>10</code></td><td${_scopeId}>Number</td><td${_scopeId}>1</td></tr></tbody></table>`);
          } else {
            return [
              createVNode("table", null, [
                createVNode("thead", null, [
                  createVNode("tr", null, [
                    createVNode("th", null, "\u53C2\u6570"),
                    createVNode("th", null, "\u8BF4\u660E"),
                    createVNode("th", null, "\u7C7B\u578B"),
                    createVNode("th", null, "\u9ED8\u8BA4\u503C")
                  ])
                ]),
                createVNode("tbody", null, [
                  createVNode("tr", null, [
                    createVNode("td", null, "min"),
                    createVNode("td", null, "\u6700\u5C0F\u503C"),
                    createVNode("td", null, "Number"),
                    createVNode("td", null, "0")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "max"),
                    createVNode("td", null, "\u6700\u5927\u503C"),
                    createVNode("td", null, "Number"),
                    createVNode("td", null, "100")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "v-model"),
                    createVNode("td", null, "\u7ED1\u5B9A\u503C"),
                    createVNode("td", null, "Number"),
                    createVNode("td", null, "0")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "text"),
                    createVNode("td", null, "\u6309\u4E0B\u60AC\u6D6E\u6587\u672C"),
                    createVNode("td", null, "String"),
                    createVNode("td", null, "-")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "color"),
                    createVNode("td", null, "\u8FDB\u5EA6\u6761\u989C\u8272"),
                    createVNode("td", null, "String"),
                    createVNode("td", null, "#3498db")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "size"),
                    createVNode("td", null, [
                      createTextVNode("\u5706\u70B9\u548C\u56FE\u6807\u5927\u5C0F\uFF0C\u5355\u4F4D"),
                      createVNode("code", null, "px")
                    ]),
                    createVNode("td", null, "Number"),
                    createVNode("td", null, "20")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "ply"),
                    createVNode("td", null, "\u8FDB\u5EA6\u6761\u539A\u5EA6"),
                    createVNode("td", null, "String"),
                    createVNode("td", null, "3px")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "showDot"),
                    createVNode("td", null, "\u662F\u5426\u663E\u793A\u5706\u70B9\uFF0C\u4E5F\u51B3\u5B9A\u662F\u5426\u663E\u793A\u56FE\u6807"),
                    createVNode("td", null, "Boolean"),
                    createVNode("td", null, "true")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "showIcon"),
                    createVNode("td", null, "\u662F\u5426\u663E\u793A\u56FE\u6807"),
                    createVNode("td", null, "Boolean"),
                    createVNode("td", null, "false")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "icon"),
                    createVNode("td", null, [
                      createTextVNode("\u56FE\u6807\u8DEF\u5F84\uFF0C\u5F15\u5165\u672C\u5730\u56FE\u7247\u8BF7\u4F7F\u7528"),
                      createVNode("code", null, "require('\u8DEF\u5F84')")
                    ]),
                    createVNode("td", null, "\u672A\u77E5"),
                    createVNode("td", null, "-")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "showNum"),
                    createVNode("td", null, "\u662F\u5426\u5728\u6ED1\u52A8\u7684\u65F6\u5019\u663E\u793A\u6570\u5B57"),
                    createVNode("td", null, "Boolean"),
                    createVNode("td", null, "true")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "step"),
                    createVNode("td", null, [
                      createTextVNode("\u6B65\u957F\uFF0C\u6ED1\u52A8\u4E00\u683C\u7684\u6570\u503C"),
                      createVNode("br"),
                      createTextVNode("\u4F8B\u5B50\uFF1A"),
                      createVNode("code", null, "max"),
                      createTextVNode("\u4E3A"),
                      createVNode("code", null, "200"),
                      createTextVNode(",\u6B65\u957F\u4E3A"),
                      createVNode("code", null, "10"),
                      createTextVNode("\uFF0C\u5219\u4E00\u5171\u6709"),
                      createVNode("code", null, "20"),
                      createTextVNode("\u683C\uFF0C\u6ED1\u52A8\u4E00\u683C\u7684\u6570\u503C\u4E3A"),
                      createVNode("code", null, "10")
                    ]),
                    createVNode("td", null, "Number"),
                    createVNode("td", null, "1")
                  ])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Components/statics/Range.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
