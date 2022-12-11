import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.9d74fd37.js";
const __pageData = JSON.parse('{"title":"$fmtTime","description":"","frontmatter":{},"headers":[],"relativePath":"Functions/custom/FmtTime.md","lastUpdated":1666717310000}');
const _sfc_main = { name: "Functions/custom/FmtTime.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContainerBox = resolveComponent("ContainerBox");
  const _component_ShowCode = resolveComponent("ShowCode");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="fmttime" tabindex="-1">$fmtTime <a class="header-anchor" href="#fmttime" aria-hidden="true">#</a></h1>`);
  _push(ssrRenderComponent(_component_ContainerBox, { title: "\u4ECB\u7ECD" }, {
    desc: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u4E00\u822C\u7528\u4E8E\u5411\u540E\u7AEF\u4F20\u9012\u6307\u5B9A\u7684\u65F6\u95F4\u683C\u5F0F `);
      } else {
        return [
          createTextVNode(" \u4E00\u822C\u7528\u4E8E\u5411\u540E\u7AEF\u4F20\u9012\u6307\u5B9A\u7684\u65F6\u95F4\u683C\u5F0F ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_ContainerBox, { title: "\u57FA\u7840\u7528\u6CD5" }, {
    desc: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}><code${_scopeId}>MM</code>\u3001<code${_scopeId}>dd</code>\u3001<code${_scopeId}>hh</code>\u3001<code${_scopeId}>mm</code>\u3001<code${_scopeId}>ss</code>\u53EF\u7701\u7565\u4E3A\u4E00\u4E2A\u5B57\u6BCD\uFF0C\u7701\u7565\u540E\u4F4E\u4E8E<code${_scopeId}>10</code>\u4E0D\u4F1A\u81EA\u52A8\u52A0\u524D\u7F00<code${_scopeId}>0</code></p><p${_scopeId}>\u53E6\u5916\u53EF\u4EE5\u901A\u8FC7<code${_scopeId}>w</code>\u548C<code${_scopeId}>n</code>\u83B7\u53D6\u661F\u671F\u548C\u65F6\u95F4\u6233</p>`);
      } else {
        return [
          createVNode("p", null, [
            createVNode("code", null, "MM"),
            createTextVNode("\u3001"),
            createVNode("code", null, "dd"),
            createTextVNode("\u3001"),
            createVNode("code", null, "hh"),
            createTextVNode("\u3001"),
            createVNode("code", null, "mm"),
            createTextVNode("\u3001"),
            createVNode("code", null, "ss"),
            createTextVNode("\u53EF\u7701\u7565\u4E3A\u4E00\u4E2A\u5B57\u6BCD\uFF0C\u7701\u7565\u540E\u4F4E\u4E8E"),
            createVNode("code", null, "10"),
            createTextVNode("\u4E0D\u4F1A\u81EA\u52A8\u52A0\u524D\u7F00"),
            createVNode("code", null, "0")
          ]),
          createVNode("p", null, [
            createTextVNode("\u53E6\u5916\u53EF\u4EE5\u901A\u8FC7"),
            createVNode("code", null, "w"),
            createTextVNode("\u548C"),
            createVNode("code", null, "n"),
            createTextVNode("\u83B7\u53D6\u661F\u671F\u548C\u65F6\u95F4\u6233")
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-js"${_scopeId}><button class="copy"${_scopeId}></button><span class="lang"${_scopeId}>js</span><pre${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId}>const</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> date </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>new</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>Date</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>2000-05-09 09:30:05</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>getTime</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>()</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>console</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>log</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId}>$fmtTime</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>(date</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId}>YYYY-MM-DD hh:mm:ss w n</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>&#39;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}>))</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId}>;</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId}> </span><span style="${ssrRenderStyle({ "color": "#676E95" })}"${_scopeId}>//2000-5-09 09:30:05 \u5468\u51E0 \u65F6\u95F4\u6233</span></span>
<span class="line"${_scopeId}></span></code></pre></div>`);
        _push2(ssrRenderComponent(_component_ShowCode, null, {
          codes: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="language-js"${_scopeId2}><button class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>js</span><pre${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>export</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>function</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>$fmtTime</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>date</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>fmt</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>YYYY-MM-DD hh:mm:ss</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>date</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>new</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>Date</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>date</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>let</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ret</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>week</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> [</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>\u65E5</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>\u4E00</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>\u4E8C</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>\u4E09</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>\u56DB</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>\u4E94</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>\u516D</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>const</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>opt</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>Y+</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>date</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>getFullYear</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>toString</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>M+</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> (</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>date</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>getMonth</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>() </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>+</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>1</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>toString</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>D+</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>date</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>getDate</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>toString</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>h+</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>date</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>getHours</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>toString</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>m+</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>date</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>getMinutes</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>toString</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>s+</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>date</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>getSeconds</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>toString</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>w</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>week</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>[</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>date</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>getDay</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>()]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>n</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>new</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>Date</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>date</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>valueOf</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>()</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>};</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>for</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> (</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>let</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>k</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>in</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>opt</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ret</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>new</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>RegExp</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>\`</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>\${</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>k</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>\`</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>exec</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>fmt</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>)</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>if</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> (</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ret</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>) </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>{</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>      </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>fmt</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>fmt</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>replace</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ret</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>[</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>1</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ret</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>[</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>1</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>length</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>==</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>1</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>?</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>opt</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>[</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>k</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>] </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>:</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>opt</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>[</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>k</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}"${_scopeId2}>padStart</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>ret</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>[</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}"${_scopeId2}>1</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>]</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>.</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>length</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>,</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&#39;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>))</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>}</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>return</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>fmt</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>;</span></span>
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
                        createVNode("span", { style: { "color": "#82AAFF" } }, "$fmtTime"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "date"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "fmt"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD hh:mm:ss"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "  "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "date"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "new"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "Date"),
                        createVNode("span", { style: { "color": "#F07178" } }, "("),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "date"),
                        createVNode("span", { style: { "color": "#F07178" } }, ")"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "let"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "ret"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "week"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " ["),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "\u65E5"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "\u4E00"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "\u4E8C"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "\u4E09"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "\u56DB"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "\u4E94"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "\u516D"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#F07178" } }, "]"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "  "),
                        createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "opt"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#F07178" } }, "Y+"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "date"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "getFullYear"),
                        createVNode("span", { style: { "color": "#F07178" } }, "()"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "toString"),
                        createVNode("span", { style: { "color": "#F07178" } }, "()"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#F07178" } }, "M+"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " ("),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "date"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "getMonth"),
                        createVNode("span", { style: { "color": "#F07178" } }, "() "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                        createVNode("span", { style: { "color": "#F07178" } }, ")"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "toString"),
                        createVNode("span", { style: { "color": "#F07178" } }, "()"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#F07178" } }, "D+"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "date"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "getDate"),
                        createVNode("span", { style: { "color": "#F07178" } }, "()"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "toString"),
                        createVNode("span", { style: { "color": "#F07178" } }, "()"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#F07178" } }, "h+"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "date"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "getHours"),
                        createVNode("span", { style: { "color": "#F07178" } }, "()"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "toString"),
                        createVNode("span", { style: { "color": "#F07178" } }, "()"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#F07178" } }, "m+"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "date"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "getMinutes"),
                        createVNode("span", { style: { "color": "#F07178" } }, "()"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "toString"),
                        createVNode("span", { style: { "color": "#F07178" } }, "()"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#F07178" } }, "s+"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "date"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "getSeconds"),
                        createVNode("span", { style: { "color": "#F07178" } }, "()"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "toString"),
                        createVNode("span", { style: { "color": "#F07178" } }, "()"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#F07178" } }, "w"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "week"),
                        createVNode("span", { style: { "color": "#F07178" } }, "["),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "date"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "getDay"),
                        createVNode("span", { style: { "color": "#F07178" } }, "()]"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#F07178" } }, "n"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "new"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "Date"),
                        createVNode("span", { style: { "color": "#F07178" } }, "("),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "date"),
                        createVNode("span", { style: { "color": "#F07178" } }, ")"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "valueOf"),
                        createVNode("span", { style: { "color": "#F07178" } }, "()"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "};")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "for"),
                        createVNode("span", { style: { "color": "#F07178" } }, " ("),
                        createVNode("span", { style: { "color": "#C792EA" } }, "let"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "k"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "in"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "opt"),
                        createVNode("span", { style: { "color": "#F07178" } }, ") "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "ret"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "new"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "RegExp"),
                        createVNode("span", { style: { "color": "#F07178" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "`"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "("),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "${"),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "k"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, ")"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "`"),
                        createVNode("span", { style: { "color": "#F07178" } }, ")"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "exec"),
                        createVNode("span", { style: { "color": "#F07178" } }, "("),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "fmt"),
                        createVNode("span", { style: { "color": "#F07178" } }, ")"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "    "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "if"),
                        createVNode("span", { style: { "color": "#F07178" } }, " ("),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "ret"),
                        createVNode("span", { style: { "color": "#F07178" } }, ") "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "      "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "fmt"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "fmt"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "replace"),
                        createVNode("span", { style: { "color": "#F07178" } }, "("),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "ret"),
                        createVNode("span", { style: { "color": "#F07178" } }, "["),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                        createVNode("span", { style: { "color": "#F07178" } }, "]"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "ret"),
                        createVNode("span", { style: { "color": "#F07178" } }, "["),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                        createVNode("span", { style: { "color": "#F07178" } }, "]"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "length"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "=="),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "?"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "opt"),
                        createVNode("span", { style: { "color": "#F07178" } }, "["),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "k"),
                        createVNode("span", { style: { "color": "#F07178" } }, "] "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "opt"),
                        createVNode("span", { style: { "color": "#F07178" } }, "["),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "k"),
                        createVNode("span", { style: { "color": "#F07178" } }, "]"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#82AAFF" } }, "padStart"),
                        createVNode("span", { style: { "color": "#F07178" } }, "("),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "ret"),
                        createVNode("span", { style: { "color": "#F07178" } }, "["),
                        createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                        createVNode("span", { style: { "color": "#F07178" } }, "]"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "length"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#C3E88D" } }, "0"),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                        createVNode("span", { style: { "color": "#F07178" } }, "))"),
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
                        createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                      ]),
                      createTextVNode("\n"),
                      createVNode("span", { class: "line" }, [
                        createVNode("span", { style: { "color": "#F07178" } }, "  "),
                        createVNode("span", { style: { "color": "#89DDFF" } }, "return"),
                        createVNode("span", { style: { "color": "#F07178" } }, " "),
                        createVNode("span", { style: { "color": "#A6ACCD" } }, "fmt"),
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
                  createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " date "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "new"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "Date"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "2000-05-09 09:30:05"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, ")"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "getTime"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "()"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                ]),
                createTextVNode("\n"),
                createVNode("span", { class: "line" }, [
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "console"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "log"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "("),
                  createVNode("span", { style: { "color": "#82AAFF" } }, "$fmtTime"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "(date"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD hh:mm:ss w n"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, "))"),
                  createVNode("span", { style: { "color": "#89DDFF" } }, ";"),
                  createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                  createVNode("span", { style: { "color": "#676E95" } }, "//2000-5-09 09:30:05 \u5468\u51E0 \u65F6\u95F4\u6233")
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
                      createVNode("span", { style: { "color": "#82AAFF" } }, "$fmtTime"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "("),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "date"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "fmt"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "YYYY-MM-DD hh:mm:ss"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ")"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "  "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "date"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "new"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "Date"),
                      createVNode("span", { style: { "color": "#F07178" } }, "("),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "date"),
                      createVNode("span", { style: { "color": "#F07178" } }, ")"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "let"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "ret"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "week"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " ["),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "\u65E5"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "\u4E00"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "\u4E8C"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "\u4E09"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "\u56DB"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "\u4E94"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "\u516D"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#F07178" } }, "]"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "  "),
                      createVNode("span", { style: { "color": "#C792EA" } }, "const"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "opt"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#F07178" } }, "Y+"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "date"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "getFullYear"),
                      createVNode("span", { style: { "color": "#F07178" } }, "()"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "toString"),
                      createVNode("span", { style: { "color": "#F07178" } }, "()"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#F07178" } }, "M+"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " ("),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "date"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "getMonth"),
                      createVNode("span", { style: { "color": "#F07178" } }, "() "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "+"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                      createVNode("span", { style: { "color": "#F07178" } }, ")"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "toString"),
                      createVNode("span", { style: { "color": "#F07178" } }, "()"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#F07178" } }, "D+"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "date"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "getDate"),
                      createVNode("span", { style: { "color": "#F07178" } }, "()"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "toString"),
                      createVNode("span", { style: { "color": "#F07178" } }, "()"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#F07178" } }, "h+"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "date"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "getHours"),
                      createVNode("span", { style: { "color": "#F07178" } }, "()"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "toString"),
                      createVNode("span", { style: { "color": "#F07178" } }, "()"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#F07178" } }, "m+"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "date"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "getMinutes"),
                      createVNode("span", { style: { "color": "#F07178" } }, "()"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "toString"),
                      createVNode("span", { style: { "color": "#F07178" } }, "()"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#F07178" } }, "s+"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "date"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "getSeconds"),
                      createVNode("span", { style: { "color": "#F07178" } }, "()"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "toString"),
                      createVNode("span", { style: { "color": "#F07178" } }, "()"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#F07178" } }, "w"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "week"),
                      createVNode("span", { style: { "color": "#F07178" } }, "["),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "date"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "getDay"),
                      createVNode("span", { style: { "color": "#F07178" } }, "()]"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#F07178" } }, "n"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "new"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "Date"),
                      createVNode("span", { style: { "color": "#F07178" } }, "("),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "date"),
                      createVNode("span", { style: { "color": "#F07178" } }, ")"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "valueOf"),
                      createVNode("span", { style: { "color": "#F07178" } }, "()"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ",")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "};")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "for"),
                      createVNode("span", { style: { "color": "#F07178" } }, " ("),
                      createVNode("span", { style: { "color": "#C792EA" } }, "let"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "k"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "in"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "opt"),
                      createVNode("span", { style: { "color": "#F07178" } }, ") "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "ret"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "new"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "RegExp"),
                      createVNode("span", { style: { "color": "#F07178" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "`"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "("),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "${"),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "k"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, ")"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "`"),
                      createVNode("span", { style: { "color": "#F07178" } }, ")"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "exec"),
                      createVNode("span", { style: { "color": "#F07178" } }, "("),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "fmt"),
                      createVNode("span", { style: { "color": "#F07178" } }, ")"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ";")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "    "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "if"),
                      createVNode("span", { style: { "color": "#F07178" } }, " ("),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "ret"),
                      createVNode("span", { style: { "color": "#F07178" } }, ") "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "{")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "      "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "fmt"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "fmt"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "replace"),
                      createVNode("span", { style: { "color": "#F07178" } }, "("),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "ret"),
                      createVNode("span", { style: { "color": "#F07178" } }, "["),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                      createVNode("span", { style: { "color": "#F07178" } }, "]"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "ret"),
                      createVNode("span", { style: { "color": "#F07178" } }, "["),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                      createVNode("span", { style: { "color": "#F07178" } }, "]"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "length"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "=="),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "?"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "opt"),
                      createVNode("span", { style: { "color": "#F07178" } }, "["),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "k"),
                      createVNode("span", { style: { "color": "#F07178" } }, "] "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ":"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "opt"),
                      createVNode("span", { style: { "color": "#F07178" } }, "["),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "k"),
                      createVNode("span", { style: { "color": "#F07178" } }, "]"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#82AAFF" } }, "padStart"),
                      createVNode("span", { style: { "color": "#F07178" } }, "("),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "ret"),
                      createVNode("span", { style: { "color": "#F07178" } }, "["),
                      createVNode("span", { style: { "color": "#F78C6C" } }, "1"),
                      createVNode("span", { style: { "color": "#F07178" } }, "]"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "."),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "length"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, ","),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#C3E88D" } }, "0"),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "'"),
                      createVNode("span", { style: { "color": "#F07178" } }, "))"),
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
                      createVNode("span", { style: { "color": "#89DDFF" } }, "}")
                    ]),
                    createTextVNode("\n"),
                    createVNode("span", { class: "line" }, [
                      createVNode("span", { style: { "color": "#F07178" } }, "  "),
                      createVNode("span", { style: { "color": "#89DDFF" } }, "return"),
                      createVNode("span", { style: { "color": "#F07178" } }, " "),
                      createVNode("span", { style: { "color": "#A6ACCD" } }, "fmt"),
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
        _push2(`<table${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u53C2\u6570</th><th${_scopeId}>\u8BF4\u660E</th><th${_scopeId}>\u7C7B\u578B</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>date</td><td${_scopeId}>\u65F6\u95F4\u7C7B\u578B\u7684\u6570\u636E</td><td${_scopeId}>String | Number</td></tr><tr${_scopeId}><td${_scopeId}>fmt</td><td${_scopeId}>\u65F6\u95F4\u683C\u5F0F\uFF0C\u5982\uFF1A<code${_scopeId}>YYYY-MM-DD hh:mm:ss w n</code></td><td${_scopeId}>String</td></tr></tbody></table>`);
      } else {
        return [
          createVNode("table", null, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "\u53C2\u6570"),
                createVNode("th", null, "\u8BF4\u660E"),
                createVNode("th", null, "\u7C7B\u578B")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, "date"),
                createVNode("td", null, "\u65F6\u95F4\u7C7B\u578B\u7684\u6570\u636E"),
                createVNode("td", null, "String | Number")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "fmt"),
                createVNode("td", null, [
                  createTextVNode("\u65F6\u95F4\u683C\u5F0F\uFF0C\u5982\uFF1A"),
                  createVNode("code", null, "YYYY-MM-DD hh:mm:ss w n")
                ]),
                createVNode("td", null, "String")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Functions/custom/FmtTime.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FmtTime = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  FmtTime as default
};
