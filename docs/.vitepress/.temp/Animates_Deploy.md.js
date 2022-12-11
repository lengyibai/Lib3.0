import { defineComponent, ref, onMounted, mergeProps, useSSRContext, resolveComponent, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.9d74fd37.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const show = ref(false);
    const box_show = ref(false);
    onMounted(() => {
      show.value = true;
      setTimeout(() => {
        box_show.value = true;
      }, 1500);
      setInterval(() => {
        show.value = !show.value;
        setTimeout(() => {
          box_show.value = !box_show.value;
        }, 1500);
      }, 3e3);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "demo" }, _attrs))} data-v-8df88bda><div class="Deploy" style="${ssrRenderStyle(show.value ? null : { display: "none" })}" data-v-8df88bda><div class="box" style="${ssrRenderStyle(box_show.value ? null : { display: "none" })}" data-v-8df88bda><h1 data-v-8df88bda>Hello World!</h1></div></div></div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_8df88bda_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Animates/Components/Deploy/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Deploy = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8df88bda"]]);
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Animates/Deploy.md","lastUpdated":1666717310000}');
const __default__ = { name: "Animates/Deploy.md" };
const _sfc_main = Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContainerBox = resolveComponent("ContainerBox");
      const _component_ShowCode = resolveComponent("ShowCode");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_ContainerBox, { title: "\u57FA\u7840\u7528\u6CD5" }, {
        desc: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u6298\u53E0\u3001\u5C55\u5F00\u7EB8\u5F20 `);
          } else {
            return [
              createTextVNode(" \u6298\u53E0\u3001\u5C55\u5F00\u7EB8\u5F20 ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="demoBox"${_scopeId}>`);
            _push2(ssrRenderComponent(Deploy, null, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_ShowCode, null, {
              codes: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="language-vue"${_scopeId2}><button class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>demo</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>transition</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>deploy</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>Deploy</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-show</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>show</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>transition</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>name</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>fade</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>box</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>v-show</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>box_show</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>            </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>Hello World!</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>          </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>transition</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>transition</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>setup</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>lang</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>ts</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>onMounted</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>vue</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> show </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#FF9CAC" })}"${_scopeId2}>false</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> box_show </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>ref</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#FF9CAC" })}"${_scopeId2}>false</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>onMounted</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>show</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#FF9CAC" })}"${_scopeId2}>true</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>setTimeout</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>box_show</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#FF9CAC" })}"${_scopeId2}>true</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>1500</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>setInterval</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>show</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>!</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>show</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>setTimeout</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>=&gt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>box_show</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>!</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>box_show</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>value</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>1500</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>},</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>3000</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>script</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>style</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>scoped</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>lang</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>less</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>flex</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>display</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> flex</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>justify-content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>align-items</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> center</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>demo</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>position</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> relative</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>width</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>height</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50vh</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>Deploy</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>.flex</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>width</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>height</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>background-color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>var</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>--contrast1-color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>);</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>box</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>.flex</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>h1</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>font-size</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>5vw</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>        </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>var</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>--contrast2-color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>);</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>fade-enter-from</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>fade-leave-active</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>opacity</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>fade-leave-active</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>fade-enter-active</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>transition</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> all </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0.5s</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
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
                            createVNode("span", { style: { "color": "#F07178" } }, "transition"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "name"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "deploy"),
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
                            createVNode("span", { style: { "color": "#C3E88D" } }, "Deploy"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "v-show"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "show"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                            createVNode("span", { style: { "color": "#F07178" } }, "transition"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "name"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "fade"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                            createVNode("span", { style: { "color": "#F07178" } }, "div"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "class"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "box"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "v-show"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "box_show"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "            "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                            createVNode("span", { style: { "color": "#F07178" } }, "h1"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "Hello World!"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                            createVNode("span", { style: { "color": "#F07178" } }, "h1"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                            createVNode("span", { style: { "color": "#F07178" } }, "div"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                            createVNode("span", { style: { "color": "#F07178" } }, "transition"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                            createVNode("span", { style: { "color": "#F07178" } }, "div"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                            createVNode("span", { style: { "color": "#F07178" } }, "transition"),
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
                          createVNode("span", { class: "line" }),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " show "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                            createVNode("span", { style: { "color": "#FF9CAC" } }, "false"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, ")"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " box_show "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                            createVNode("span", { style: { "color": "#FF9CAC" } }, "false"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, ")"),
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
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "show"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#FF9CAC" } }, "true"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "  "),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "setTimeout"),
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
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "box_show"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#FF9CAC" } }, "true"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "  "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "},"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "1500"),
                            createVNode("span", { style: { "color": "#F07178" } }, ")"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "  "),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "setInterval"),
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
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "show"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "!"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "show"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "    "),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "setTimeout"),
                            createVNode("span", { style: { "color": "#F07178" } }, "("),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "()"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "      "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "box_show"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "!"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "box_show"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "    "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "},"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "1500"),
                            createVNode("span", { style: { "color": "#F07178" } }, ")"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#F07178" } }, "  "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "},"),
                            createVNode("span", { style: { "color": "#F07178" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "3000"),
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
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "flex"),
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
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}")
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
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50vh"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "Deploy"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, ".flex"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "()"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
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
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "background-color"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "var"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "--contrast1-color"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "box"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, ".flex"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "()"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "h1"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "font-size"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "5vw"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "color"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "var"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "--contrast2-color"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}")
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
                          createVNode("span", { class: "line" }),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "fade-enter-from"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "fade-leave-active"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "opacity"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "fade-leave-active"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "fade-enter-active"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "transition"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " all "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0.5s"),
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
                  _push3(`<div class="language-css"${_scopeId2}><button class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>css</span><pre${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>deploy-enter-active</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>animation</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> deploy-in </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>1.5s</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>deploy-leave-active</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>animation</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> deploy-out </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>1.5s</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>@keyframes</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>deploy-in</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>0%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>clip-path</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>polygon</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>);</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>33%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>clip-path</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>polygon</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>);</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>66%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>clip-path</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>polygon</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>);</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>clip-path</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>polygon</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>);</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>@keyframes</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>deploy-out</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>0%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>clip-path</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>polygon</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>);</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>33%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>clip-path</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>polygon</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>);</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>66%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>clip-path</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>polygon</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>);</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}"${_scopeId2}>clip-path</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>polygon</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>50%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>);</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}></span></code></pre></div>`);
                } else {
                  return [
                    createVNode("div", { class: "language-css" }, [
                      createVNode("button", { class: "copy" }),
                      createVNode("span", { class: "lang" }, "css"),
                      createVNode("pre", null, [
                        createVNode("code", null, [
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "deploy-enter-active"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "animation"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " deploy-in "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "1.5s"),
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
                            createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "deploy-leave-active"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "animation"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " deploy-out "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "1.5s"),
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
                            createVNode("span", { style: { "color": "#89DDFF" } }, "@keyframes"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "deploy-in"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "0%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "clip-path"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "polygon"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "33%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "clip-path"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "polygon"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "66%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "clip-path"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "polygon"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "100%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "clip-path"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "polygon"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ");")
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
                          createVNode("span", { class: "line" }),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#89DDFF" } }, "@keyframes"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "deploy-out"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "0%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "clip-path"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "polygon"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "33%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "clip-path"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "polygon"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "66%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "clip-path"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "polygon"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "100%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                          ]),
                          createTextVNode("\n"),
                          createVNode("span", { class: "line" }, [
                            createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                            createVNode("span", { style: { "color": "#B2CCD6" } }, "clip-path"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#82AAFF" } }, "polygon"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                            createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                            createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, ");")
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
                createVNode(Deploy)
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
                          createVNode("span", { style: { "color": "#F07178" } }, "transition"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "name"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "deploy"),
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
                          createVNode("span", { style: { "color": "#C3E88D" } }, "Deploy"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "v-show"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "show"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                          createVNode("span", { style: { "color": "#F07178" } }, "transition"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "name"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "fade"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                          createVNode("span", { style: { "color": "#F07178" } }, "div"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "class"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "box"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "v-show"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "box_show"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "            "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "<"),
                          createVNode("span", { style: { "color": "#F07178" } }, "h1"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ">"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "Hello World!"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                          createVNode("span", { style: { "color": "#F07178" } }, "h1"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "          "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                          createVNode("span", { style: { "color": "#F07178" } }, "div"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                          createVNode("span", { style: { "color": "#F07178" } }, "transition"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                          createVNode("span", { style: { "color": "#F07178" } }, "div"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ">")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "</"),
                          createVNode("span", { style: { "color": "#F07178" } }, "transition"),
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
                        createVNode("span", { class: "line" }),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " show "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                          createVNode("span", { style: { "color": "#FF9CAC" } }, "false"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, ")"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " box_show "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "ref"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                          createVNode("span", { style: { "color": "#FF9CAC" } }, "false"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, ")"),
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
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "show"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#FF9CAC" } }, "true"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "  "),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "setTimeout"),
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
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "box_show"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#FF9CAC" } }, "true"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "  "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "},"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "1500"),
                          createVNode("span", { style: { "color": "#F07178" } }, ")"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "  "),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "setInterval"),
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
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "show"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "!"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "show"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "    "),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "setTimeout"),
                          createVNode("span", { style: { "color": "#F07178" } }, "("),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "()"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "=>"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "      "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "box_show"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "!"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "box_show"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "value"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "    "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "},"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "1500"),
                          createVNode("span", { style: { "color": "#F07178" } }, ")"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#F07178" } }, "  "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "},"),
                          createVNode("span", { style: { "color": "#F07178" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "3000"),
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
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "flex"),
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
                          createVNode("span", { style: { "color": "#89DDFF" } }, "}")
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
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50vh"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "Deploy"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, ".flex"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "()"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
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
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "background-color"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "var"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "--contrast1-color"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "box"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, ".flex"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "()"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "h1"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "font-size"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "5vw"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "        "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "color"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "var"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "--contrast2-color"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "      "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "}")
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
                        createVNode("span", { class: "line" }),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "fade-enter-from"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "fade-leave-active"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "opacity"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "fade-leave-active"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "fade-enter-active"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "transition"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " all "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0.5s"),
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
                  createVNode("div", { class: "language-css" }, [
                    createVNode("button", { class: "copy" }),
                    createVNode("span", { class: "lang" }, "css"),
                    createVNode("pre", null, [
                      createVNode("code", null, [
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "deploy-enter-active"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "animation"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " deploy-in "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "1.5s"),
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
                          createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "deploy-leave-active"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "animation"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " deploy-out "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "1.5s"),
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
                          createVNode("span", { style: { "color": "#89DDFF" } }, "@keyframes"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "deploy-in"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "0%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "clip-path"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "polygon"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "33%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "clip-path"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "polygon"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "66%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "clip-path"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "polygon"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "100%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "clip-path"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "polygon"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ");")
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
                        createVNode("span", { class: "line" }),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#89DDFF" } }, "@keyframes"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "deploy-out"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "0%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "clip-path"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "polygon"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "33%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "clip-path"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "polygon"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "66%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "clip-path"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "polygon"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ");")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "  "),
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "100%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                        ]),
                        createTextVNode("\n"),
                        createVNode("span", { class: "line" }, [
                          createVNode("span", { style: { "color": "#A6ACCD" } }, "    "),
                          createVNode("span", { style: { "color": "#B2CCD6" } }, "clip-path"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#82AAFF" } }, "polygon"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "50%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "0"),
                          createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                          createVNode("span", { style: { "color": "#F78C6C" } }, "100%"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, ");")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Animates/Deploy.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
