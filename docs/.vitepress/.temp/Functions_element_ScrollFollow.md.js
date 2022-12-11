var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { defineComponent, ref, onMounted, mergeProps, useSSRContext, resolveComponent, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.9d74fd37.js";
class ScrollFollow$1 {
  constructor(el, { fade = true, unit = "px", smooth = true } = {}) {
    __publicField(this, "parent");
    __publicField(this, "childs", []);
    __publicField(this, "Y", 0);
    __publicField(this, "fade");
    __publicField(this, "unit");
    __publicField(this, "smooth");
    this.parent = el;
    this.fade = fade;
    this.unit = unit;
    this.smooth = smooth;
    this.registerEvent();
  }
  registerEvent() {
    this.parent.addEventListener("scroll", (e) => {
      window.requestAnimationFrame(() => {
        this.Y = e.target.scrollTop;
        this.setStyle();
      });
    });
  }
  setOptions(option) {
    this.childs.push(option);
  }
  setStyle() {
    var _a, _b;
    for (const { el, intoY, endY, intoStyle, endStyle } of this.childs) {
      let y = el.getBoundingClientRect().top - document.documentElement.clientHeight + document.documentElement.clientHeight - this.parent.getBoundingClientRect().bottom;
      if (y > 0) {
        return;
      }
      y = Math.abs(y);
      let p = 0;
      p = 1 - (y - intoY) / (endY - intoY);
      if (p > 1)
        p = 1;
      if (p < 0)
        p = 0;
      let offsetX = 0;
      let intoX = (_a = intoStyle.left) != null ? _a : intoStyle.right;
      let endX = (_b = endStyle.left) != null ? _b : endStyle.right;
      if (intoStyle.left !== void 0) {
        offsetX = endX - (endX - intoX) * p;
      } else if (intoStyle.right !== void 0) {
        offsetX = -(endX - (endX - intoX) * p);
      } else {
        offsetX = 0;
      }
      let scale = 1;
      if (intoStyle.scale !== void 0) {
        scale = endStyle.scale - (endStyle.scale - intoStyle.scale) * p;
      }
      el.style.transform = `translate(${offsetX}${this.unit}) scale(${scale})`;
      if (this.fade) {
        el.style.opacity = 1 - p;
      }
      let time = this.smooth ? 0.1 : 0;
      el.style.transition = `all ${time}s ease-out`;
    }
  }
  initStyle() {
    for (const { el, intoY, endY, intoStyle, endStyle } of this.childs) {
      const { left, scale, right } = intoStyle;
      el.style.transform = `translate(${left || -right || 0}${this.unit}) scale(${scale || 1})`;
    }
  }
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const a = ref();
    const b = ref();
    const c = ref();
    const demo = ref();
    onMounted(() => {
      const scrollFollow = new ScrollFollow$1(demo.value, { unit: "%" });
      scrollFollow.setOptions({
        el: a.value,
        intoY: 0,
        endY: 500,
        intoStyle: {
          right: -100
        },
        endStyle: {
          right: 50
        }
      });
      scrollFollow.setOptions({
        el: b.value,
        intoY: 0,
        endY: 500,
        intoStyle: {
          left: -100
        },
        endStyle: {
          left: 50
        }
      });
      scrollFollow.setOptions({
        el: c.value,
        intoY: 0,
        endY: 500,
        intoStyle: {
          scale: 0
        },
        endStyle: {
          scale: 1
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "demo",
        ref_key: "demo",
        ref: demo
      }, _attrs))} data-v-1fd27799><div class="container" data-v-1fd27799><div class="a" data-v-1fd27799>HTML+CSS</div><div class="b" data-v-1fd27799>JavaScript</div><div class="c" data-v-1fd27799>Vue</div></div></div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_1fd27799_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Functions/element/Components/ScrollFollow/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ScrollFollow = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1fd27799"]]);
const __pageData = JSON.parse('{"title":"ScrollFollow","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EE3\u7801\u6F14\u793A","slug":"\u4EE3\u7801\u6F14\u793A","link":"#\u4EE3\u7801\u6F14\u793A","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[]}],"relativePath":"Functions/element/ScrollFollow.md","lastUpdated":1666717310000}');
const __default__ = { name: "Functions/element/ScrollFollow.md" };
const _sfc_main = Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContainerBox = resolveComponent("ContainerBox");
      const _component_ShowCode = resolveComponent("ShowCode");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="scrollfollow" tabindex="-1">ScrollFollow <a class="header-anchor" href="#scrollfollow" aria-hidden="true">#</a></h1>`);
      _push(ssrRenderComponent(_component_ContainerBox, { title: "\u4ECB\u7ECD" }, {
        desc: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u4F7F\u5143\u7D20\u8FDB\u5165\u53EF\u89C6\u533A\u6216\u8FDB\u5165\u53EF\u89C6\u533A\u4E00\u5B9A\u8303\u56F4\uFF0C\u64AD\u653E\u5165\u573A\u52A8\u753B\uFF0C\u9002\u5408\u5217\u8868\u6216\u4E00\u4E9B\u5B98\u7F51 `);
          } else {
            return [
              createTextVNode(" \u4F7F\u5143\u7D20\u8FDB\u5165\u53EF\u89C6\u533A\u6216\u8FDB\u5165\u53EF\u89C6\u533A\u4E00\u5B9A\u8303\u56F4\uFF0C\u64AD\u653E\u5165\u573A\u52A8\u753B\uFF0C\u9002\u5408\u5217\u8868\u6216\u4E00\u4E9B\u5B98\u7F51 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ContainerBox, { title: "\u4E0B\u8F7D\u6240\u9700\u6587\u4EF6" }, {
        desc: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}><a href="https://gitee.com/lengyibai/lib3-component-packages/raw/master/utils/ScrollFollow.zip" target="_blank" rel="noreferrer"${_scopeId}>ScrollFollow.js</a></p>`);
          } else {
            return [
              createVNode("p", null, [
                createVNode("a", {
                  href: "https://gitee.com/lengyibai/lib3-component-packages/raw/master/utils/ScrollFollow.zip",
                  target: "_blank",
                  rel: "noreferrer"
                }, "ScrollFollow.js")
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
            _push2(` \u5728\u4E0B\u9762\u7F13\u6162\u6EDA\u52A8 <p${_scopeId}>\u6CE8\uFF1A\u5207\u52FF\u7ED9\u9700\u8981\u6EDA\u52A8\u8DDF\u968F\u5143\u7D20\u8BBE\u7F6E<code${_scopeId}>transform</code>\u5C5E\u6027\uFF0C\u5143\u7D20\u4F9D\u8D56\u4E8E\u6B64\u5C5E\u6027</p>`);
          } else {
            return [
              createTextVNode(" \u5728\u4E0B\u9762\u7F13\u6162\u6EDA\u52A8 "),
              createVNode("p", null, [
                createTextVNode("\u6CE8\uFF1A\u5207\u52FF\u7ED9\u9700\u8981\u6EDA\u52A8\u8DDF\u968F\u5143\u7D20\u8BBE\u7F6E"),
                createVNode("code", null, "transform"),
                createTextVNode("\u5C5E\u6027\uFF0C\u5143\u7D20\u4F9D\u8D56\u4E8E\u6B64\u5C5E\u6027")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="demoBox"${_scopeId}>`);
            _push2(ssrRenderComponent(ScrollFollow, null, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_ShowCode, null, {
              codes: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="language-vue"${_scopeId2}><button class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>demo</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>demo</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>container</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>a</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>a</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>HTML+CSS</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>b</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>b</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>JavaScript</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>c</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>c</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>Vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>lang</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>ts</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>onMounted</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> ScrollFollow </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>./ScrollFollow.js</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> a </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> b </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> c </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> demo </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>onMounted</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>scrollFollow</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>new</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ScrollFollow</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>demo</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> unit</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>scrollFollow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>setOptions</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    el</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>a</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    intoY</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    endY</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>500</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    intoStyle</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      right</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>-</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    endStyle</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      right</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>scrollFollow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>setOptions</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    el</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>b</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    intoY</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    endY</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>500</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    intoStyle</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      left</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>-</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    endStyle</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      left</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>scrollFollow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>setOptions</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    el</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>c</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    intoY</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    endY</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>500</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    intoStyle</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      scale</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    endStyle</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      scale</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>style</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>scoped</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>lang</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>less</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>demo</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>position</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> relative</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>width</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>height</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>75vh</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>overflow</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> auto</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>overscroll-behavior</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> contain</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> #fff</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>overflow-x</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> hidden</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>container</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>width</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>height</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>250vh</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>background-color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> #1a1a1a</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>display</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> flex</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>justify-content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>align-items</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>h1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>position</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> absolute</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>top</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>32.5vh</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>a</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>b</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>c</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>position</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> absolute</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>font-size</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>5vw</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>a</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>right</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>top</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100vh</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>b</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>left</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>top</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>150vh</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>c</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>top</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>205vh</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
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
                            createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "ref"),
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
                            createVNode("span", { style: { "color": "#F07178" } }, "div"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "class"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "container"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                            createVNode("span", { style: { "color": "#F07178" } }, "div"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "class"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "a"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "ref"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "a"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "HTML+CSS"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                            createVNode("span", { style: { "color": "#F07178" } }, "div"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                            createVNode("span", { style: { "color": "#F07178" } }, "div"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "class"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "b"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "ref"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "b"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "JavaScript"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                            createVNode("span", { style: { "color": "#F07178" } }, "div"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                            createVNode("span", { style: { "color": "#F07178" } }, "div"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "class"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "c"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "ref"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "c"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "Vue"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                            createVNode("span", { style: { "color": "#F07178" } }, "div"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                            createVNode("span", { style: { "color": "#F07178" } }, "div"),
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
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "import"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " ScrollFollow "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "from"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "./ScrollFollow.js"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " a "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "()"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " b "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "()"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " c "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "()"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " demo "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "()"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
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
                            createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "scrollFollow"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "new"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "ScrollFollow"),
                            createVNode("span", { style: { "color": "#F07178" } }, "("),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "demo"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                            createVNode("span", { style: { "color": "#F07178" } }, " unit"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                            createVNode("span", { style: { "color": "#F07178" } }, ")"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "  "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "scrollFollow"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "setOptions"),
                            createVNode("span", { style: { "color": "#F07178" } }, "("),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "    el"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "a"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "    intoY"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "    endY"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "500"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "    intoStyle"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "      right"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "    "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "    endStyle"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "      right"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "    "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "},")
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
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "scrollFollow"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "setOptions"),
                            createVNode("span", { style: { "color": "#F07178" } }, "("),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "    el"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "b"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "    intoY"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "    endY"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "500"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "    intoStyle"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "      left"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "    "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "    endStyle"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "      left"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "    "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "},")
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
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "scrollFollow"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "setOptions"),
                            createVNode("span", { style: { "color": "#F07178" } }, "("),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "    el"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "c"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "    intoY"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "    endY"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "500"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "    intoStyle"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "      scale"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "    "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "    endStyle"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "      scale"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "    "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "},")
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
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "lang"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "less"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
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
                            createVNode("span", { style: { "color": "#F78C6C" } }, "75vh"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "overflow"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " auto"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "overscroll-behavior"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " contain"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "color"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " #fff"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "overflow-x"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " hidden"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "container"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "width"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "height"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "250vh"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "background-color"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " #1a1a1a"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "display"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " flex"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "justify-content"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " center"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "align-items"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " center"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "h1"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "position"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " absolute"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "top"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "32.5vh"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "a"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "b"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "c"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "position"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " absolute"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "font-size"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "5vw"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "a"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "right"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "top"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100vh"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "b"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "left"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "top"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "150vh"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "c"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "top"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "205vh"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}")
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
                createVNode(ScrollFollow)
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
                          createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "ref"),
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
                          createVNode("span", { style: { "color": "#F07178" } }, "div"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "class"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "container"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                          createVNode("span", { style: { "color": "#F07178" } }, "div"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "class"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "a"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "ref"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "a"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "HTML+CSS"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                          createVNode("span", { style: { "color": "#F07178" } }, "div"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                          createVNode("span", { style: { "color": "#F07178" } }, "div"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "class"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "b"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "ref"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "b"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "JavaScript"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                          createVNode("span", { style: { "color": "#F07178" } }, "div"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                          createVNode("span", { style: { "color": "#F07178" } }, "div"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "class"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "c"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "ref"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "c"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "Vue"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                          createVNode("span", { style: { "color": "#F07178" } }, "div"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                          createVNode("span", { style: { "color": "#F07178" } }, "div"),
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
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "import"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " ScrollFollow "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "from"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "./ScrollFollow.js"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " a "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "()"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " b "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "()"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " c "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "()"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " demo "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "()"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
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
                          createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "scrollFollow"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "new"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "ScrollFollow"),
                          createVNode("span", { style: { "color": "#F07178" } }, "("),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "demo"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{"),
                          createVNode("span", { style: { "color": "#F07178" } }, " unit"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                          createVNode("span", { style: { "color": "#F07178" } }, ")"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "  "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "scrollFollow"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "setOptions"),
                          createVNode("span", { style: { "color": "#F07178" } }, "("),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "    el"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "a"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "    intoY"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "    endY"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "500"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "    intoStyle"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "      right"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "    "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "    endStyle"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "      right"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "    "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "},")
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
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "scrollFollow"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "setOptions"),
                          createVNode("span", { style: { "color": "#F07178" } }, "("),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "    el"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "b"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "    intoY"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "    endY"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "500"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "    intoStyle"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "      left"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "-"),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "    "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "    endStyle"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "      left"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "    "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "},")
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
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "scrollFollow"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "setOptions"),
                          createVNode("span", { style: { "color": "#F07178" } }, "("),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "    el"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "c"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "    intoY"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "    endY"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "500"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "    intoStyle"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "      scale"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "    "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "},")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "    endStyle"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "      scale"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "    "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "},")
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
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "lang"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "less"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
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
                          createVNode("span", { style: { "color": "#F78C6C" } }, "75vh"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "overflow"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " auto"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "overscroll-behavior"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " contain"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "color"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " #fff"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "overflow-x"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " hidden"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "container"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "width"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "height"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "250vh"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "background-color"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " #1a1a1a"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "display"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " flex"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "justify-content"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " center"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "align-items"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " center"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "h1"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "position"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " absolute"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "top"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "32.5vh"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "a"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "b"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "c"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "position"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " absolute"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "font-size"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "5vw"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "a"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "right"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "top"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100vh"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "b"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "left"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "top"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "150vh"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "c"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "top"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "205vh"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "}")
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
      _push(ssrRenderComponent(_component_ContainerBox, { title: "new ScrollFollow(dom, obj)" }, {
        desc: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<table${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u53C2\u6570</th><th${_scopeId}>\u8BF4\u660E</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u9ED8\u8BA4\u503C</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>dom</td><td${_scopeId}>\u4F20\u9012\u5E26\u6EDA\u52A8\u4E8B\u4EF6\u7684\u7236\u5143\u7D20</td><td${_scopeId}>Element</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>obj</td><td${_scopeId}>unit\uFF1A\u5355\u4F4D\uFF0C\u9ED8\u8BA4<code${_scopeId}>px</code>\uFF0C\u6B64\u5355\u4F4D\u4F5C\u7528\u4E8E<code${_scopeId}>transform: translate()</code><br${_scopeId}>fade\uFF1A\u662F\u5426\u5F00\u542F\u6DE1\u5165\u6DE1\u51FA<br${_scopeId}>smooth\uFF1A\u662F\u5426\u5F00\u542F\u5E73\u6ED1\u52A8\u753B</td><td${_scopeId}>String<br${_scopeId}>Boolean<br${_scopeId}>Boolean</td><td${_scopeId}>px<br${_scopeId}>true<br${_scopeId}>true</td></tr></tbody></table>`);
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
                    createVNode("td", null, "dom"),
                    createVNode("td", null, "\u4F20\u9012\u5E26\u6EDA\u52A8\u4E8B\u4EF6\u7684\u7236\u5143\u7D20"),
                    createVNode("td", null, "Element"),
                    createVNode("td", null, "-")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "obj"),
                    createVNode("td", null, [
                      createTextVNode("unit\uFF1A\u5355\u4F4D\uFF0C\u9ED8\u8BA4"),
                      createVNode("code", null, "px"),
                      createTextVNode("\uFF0C\u6B64\u5355\u4F4D\u4F5C\u7528\u4E8E"),
                      createVNode("code", null, "transform: translate()"),
                      createVNode("br"),
                      createTextVNode("fade\uFF1A\u662F\u5426\u5F00\u542F\u6DE1\u5165\u6DE1\u51FA"),
                      createVNode("br"),
                      createTextVNode("smooth\uFF1A\u662F\u5426\u5F00\u542F\u5E73\u6ED1\u52A8\u753B")
                    ]),
                    createVNode("td", null, [
                      createTextVNode("String"),
                      createVNode("br"),
                      createTextVNode("Boolean"),
                      createVNode("br"),
                      createTextVNode("Boolean")
                    ]),
                    createVNode("td", null, [
                      createTextVNode("px"),
                      createVNode("br"),
                      createTextVNode("true"),
                      createVNode("br"),
                      createTextVNode("true")
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ContainerBox, { title: "setOptions(obj)" }, {
        desc: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<table${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u53C2\u6570</th><th${_scopeId}>\u8BF4\u660E</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u9ED8\u8BA4\u503C</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>el</td><td${_scopeId}>\u8D4B\u4E88\u52A8\u753B\u7684\u5143\u7D20</td><td${_scopeId}>Element</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>intoY</td><td${_scopeId}>\u8FDB\u5165\u53EF\u89C6\u533A\u540E\u7684\u51E0<code${_scopeId}>px</code>\u5904\u5F00\u59CB\u8DDF\u968F\u6EDA\u52A8\u5165\u573A</td><td${_scopeId}>Number</td><td${_scopeId}>0\uFF08\u8FDB\u5165\u53EF\u89C6\u533A\u540E\u7ACB\u5373\u5F00\u59CB\uFF09</td></tr><tr${_scopeId}><td${_scopeId}>endY</td><td${_scopeId}>\u8FDB\u5165\u53EF\u89C6\u533A\u540E\u7684\u51E0<code${_scopeId}>px</code>\u5904\u8D70\u5B8C\u6574\u4E2A\u52A8\u753B\u8DDF\u968F\u6EDA\u52A8\u5165\u573A</td><td${_scopeId}>Number</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>intoStyle</td><td${_scopeId}>\u6EDA\u52A8\u524D\u7684\u6837\u5F0F\uFF1A<br${_scopeId}>left | right\uFF1A\u76F8\u5BF9\u4F4D\u7F6E\uFF0C\u4E0E<code${_scopeId}>CSS</code>\u5B9A\u4F4D\u7528\u6CD5\u4E00\u6837<br${_scopeId}>scale\uFF1A\u5143\u7D20\u7F29\u653E\u500D\u6570\uFF0C<code${_scopeId}>0</code>\u4F1A\u6D88\u5931</td><td${_scopeId}>Number<br${_scopeId}>Number</td><td${_scopeId}>-</td></tr><tr${_scopeId}><td${_scopeId}>endStyle</td><td${_scopeId}>\u6EDA\u52A8\u5B8C\u6210\u540E\u7684\u6837\u5F0F\uFF0C\u5BF9\u5E94<code${_scopeId}>intoStyle</code></td><td${_scopeId}>\u540C\u4E0A</td><td${_scopeId}>-</td></tr></tbody></table>`);
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
                    createVNode("td", null, "el"),
                    createVNode("td", null, "\u8D4B\u4E88\u52A8\u753B\u7684\u5143\u7D20"),
                    createVNode("td", null, "Element"),
                    createVNode("td", null, "-")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "intoY"),
                    createVNode("td", null, [
                      createTextVNode("\u8FDB\u5165\u53EF\u89C6\u533A\u540E\u7684\u51E0"),
                      createVNode("code", null, "px"),
                      createTextVNode("\u5904\u5F00\u59CB\u8DDF\u968F\u6EDA\u52A8\u5165\u573A")
                    ]),
                    createVNode("td", null, "Number"),
                    createVNode("td", null, "0\uFF08\u8FDB\u5165\u53EF\u89C6\u533A\u540E\u7ACB\u5373\u5F00\u59CB\uFF09")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "endY"),
                    createVNode("td", null, [
                      createTextVNode("\u8FDB\u5165\u53EF\u89C6\u533A\u540E\u7684\u51E0"),
                      createVNode("code", null, "px"),
                      createTextVNode("\u5904\u8D70\u5B8C\u6574\u4E2A\u52A8\u753B\u8DDF\u968F\u6EDA\u52A8\u5165\u573A")
                    ]),
                    createVNode("td", null, "Number"),
                    createVNode("td", null, "-")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "intoStyle"),
                    createVNode("td", null, [
                      createTextVNode("\u6EDA\u52A8\u524D\u7684\u6837\u5F0F\uFF1A"),
                      createVNode("br"),
                      createTextVNode("left | right\uFF1A\u76F8\u5BF9\u4F4D\u7F6E\uFF0C\u4E0E"),
                      createVNode("code", null, "CSS"),
                      createTextVNode("\u5B9A\u4F4D\u7528\u6CD5\u4E00\u6837"),
                      createVNode("br"),
                      createTextVNode("scale\uFF1A\u5143\u7D20\u7F29\u653E\u500D\u6570\uFF0C"),
                      createVNode("code", null, "0"),
                      createTextVNode("\u4F1A\u6D88\u5931")
                    ]),
                    createVNode("td", null, [
                      createTextVNode("Number"),
                      createVNode("br"),
                      createTextVNode("Number")
                    ]),
                    createVNode("td", null, "-")
                  ]),
                  createVNode("tr", null, [
                    createVNode("td", null, "endStyle"),
                    createVNode("td", null, [
                      createTextVNode("\u6EDA\u52A8\u5B8C\u6210\u540E\u7684\u6837\u5F0F\uFF0C\u5BF9\u5E94"),
                      createVNode("code", null, "intoStyle")
                    ]),
                    createVNode("td", null, "\u540C\u4E0A"),
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Functions/element/ScrollFollow.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
