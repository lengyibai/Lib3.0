import { defineComponent, ref, computed, mergeProps, unref, useSSRContext, watch, onMounted, resolveComponent, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.9d74fd37.js";
const iconSvg = "/lib3.0/assets/icon.483b3032.svg";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    min: { default: 0 },
    max: { default: 1 },
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "LibRange" }, _attrs))} data-v-a3abd14d>`);
      if (__props.showNum) {
        _push(`<div class="sliderValue" data-v-a3abd14d><span class="${ssrRenderClass({ showNum: show_num.value })}" style="${ssrRenderStyle({ left: unref(barWidth) })}" data-v-a3abd14d>${ssrInterpolate(__props.text || __props.modelValue)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="field" data-v-a3abd14d><div class="bar" style="${ssrRenderStyle({ width: unref(barWidth), backgroundColor: __props.color })}" data-v-a3abd14d><img${ssrRenderAttr("src", __props.icon)} style="${ssrRenderStyle([
        __props.showIcon && __props.showDot ? null : { display: "none" },
        { width: __props.size + "px", height: __props.size + "px" }
      ])}" data-v-a3abd14d><span style="${ssrRenderStyle([
        __props.showDot && !__props.showIcon ? null : { display: "none" },
        {
          width: __props.size + "px",
          height: __props.size + "px",
          backgroundColor: __props.color
        }
      ])}" data-v-a3abd14d></span></div><input${ssrRenderAttr("value", __props.modelValue)} type="range"${ssrRenderAttr("min", __props.min)}${ssrRenderAttr("max", __props.max)}${ssrRenderAttr("step", __props.step)} data-v-a3abd14d></div></div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_a3abd14d_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Components/statics/Components/Video/childComp/LibRange/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const LibRange = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-a3abd14d"]]);
const playSvg = "/lib3.0/assets/play.ca41ffe0.svg";
const pauseSvg = "/lib3.0/assets/pause.30ff1ff8.svg";
const volume_disableSvg = "/lib3.0/assets/volume_disable.c27594a7.svg";
const volumeSvg = "/lib3.0/assets/volume.60de8b2e.svg";
const full_screen_exitSvg = "/lib3.0/assets/full_screen_exit.b28efc8b.svg";
const full_sreenSvg = "/lib3.0/assets/full_sreen.400a72e3.svg";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    url: { default: "" }
  },
  setup(__props) {
    const video = ref();
    const timer = ref(null);
    const allow_drag = ref(false);
    const is_fill = ref(false);
    const is_mute = ref(true);
    const is_play = ref(false);
    const is_ready = ref(false);
    const progress_play = ref(0);
    const progress_volume = ref(1);
    ref(false);
    const show_toolbar = ref(false);
    const show_volume = ref(false);
    watch(progress_play, (v) => {
      if (!allow_drag)
        return;
      video.value.currentTime = v * video.value.duration;
    });
    watch(progress_volume, (v) => {
      video.value.volume = v;
    });
    onMounted(() => {
      let timer2 = null;
      timer2 = setInterval(() => {
        var _a;
        if ((_a = video.value) == null ? void 0 : _a.readyState) {
          is_ready.value = true;
          clearInterval(timer2);
        }
      }, 1e3);
    });
    const $fmtSec = (seconds) => {
      let hour = Math.floor(seconds / 3600) >= 10 ? Math.floor(seconds / 3600) : `0${Math.floor(seconds / 3600)}`;
      seconds -= 3600 * hour;
      let min = Math.floor(seconds / 60) >= 10 ? Math.floor(seconds / 60) : `0${Math.floor(seconds / 60)}`;
      seconds -= 60 * min;
      seconds = Math.ceil(seconds);
      let sec = seconds >= 10 ? seconds : `0${seconds}`;
      return [hour, min, sec, `${hour}:${min}:${sec}`];
    };
    const play = () => {
      video.value.play();
      timer.value = setInterval(() => {
        if (video.value.ended) {
          is_play.value = false;
          clearInterval(timer.value);
        }
        progress_play.value = parseFloat((video.value.currentTime / video.value.duration).toFixed(4));
      }, 1e3);
    };
    const pause = () => {
      clearInterval(timer.value);
      video.value.pause();
    };
    const handleLibRange = (flag) => {
      if (flag === "down") {
        pause();
        allow_drag.value = true;
      } else if (flag === "up") {
        allow_drag.value = false;
        if (!is_play.value)
          return;
        play();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["LibVideo", { fullScreen: is_fill.value }],
        ref: "LibVideo"
      }, _attrs))} data-v-aa25cc24><video${ssrRenderAttr("src", __props.url)}${ssrIncludeBooleanAttr(is_mute.value) ? " muted" : ""} data-v-aa25cc24></video><div class="${ssrRenderClass([{ hidden: !show_toolbar.value }, "toolbar"])}" data-v-aa25cc24><div class="bar" data-v-aa25cc24>`);
      if (video.value) {
        _push(ssrRenderComponent(LibRange, {
          modelValue: progress_play.value,
          "onUpdate:modelValue": ($event) => progress_play.value = $event,
          text: $fmtSec(video.value.currentTime)[3],
          showDot: show_toolbar.value,
          step: 1e-3,
          onMousedown: ($event) => handleLibRange("down"),
          onMouseup: ($event) => handleLibRange("up")
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="options" data-v-aa25cc24><div class="left" data-v-aa25cc24>`);
      if (is_ready.value) {
        _push(`<span class="time" data-v-aa25cc24>${ssrInterpolate($fmtSec(video.value.currentTime)[3])} / ${ssrInterpolate($fmtSec(video.value.duration)[3])}</span>`);
      } else {
        _push(`<span class="time" data-v-aa25cc24>00:00:00 / 00:00:00</span>`);
      }
      _push(`</div><div class="center" data-v-aa25cc24><img class="play-pause"${ssrRenderAttr("src", is_play.value ? unref(playSvg) : unref(pauseSvg))} data-v-aa25cc24></div><div class="right" data-v-aa25cc24><div class="volume" data-v-aa25cc24><img${ssrRenderAttr("src", is_mute.value ? unref(volume_disableSvg) : unref(volumeSvg))} alt="" data-v-aa25cc24><div class="volume-box" style="${ssrRenderStyle(show_volume.value && !is_mute.value ? null : { display: "none" })}" data-v-aa25cc24><div class="box" data-v-aa25cc24><span data-v-aa25cc24>${ssrInterpolate((progress_volume.value * 100).toFixed(0))}</span>`);
      _push(ssrRenderComponent(LibRange, {
        modelValue: progress_volume.value,
        "onUpdate:modelValue": ($event) => progress_volume.value = $event,
        class: "LibRange-volume",
        size: 15,
        showNum: false,
        step: 0.01
      }, null, _parent));
      _push(`</div></div></div><img class="full-screen"${ssrRenderAttr("src", is_fill.value ? unref(full_screen_exitSvg) : unref(full_sreenSvg))} data-v-aa25cc24></div></div></div></div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_aa25cc24_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Components/statics/Components/Video/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const LibVideo = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-aa25cc24"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(LibVideo, mergeProps({ url: "https://www.runoob.com/try/demo_source/movie.mp4" }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Components/statics/Components/Video/demo/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __pageData = JSON.parse('{"title":"Video","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EE3\u7801\u6F14\u793A","slug":"\u4EE3\u7801\u6F14\u793A","link":"#\u4EE3\u7801\u6F14\u793A","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[]}],"relativePath":"Components/statics/Video.md","lastUpdated":1666717310000}');
const __default__ = { name: "Components/statics/Video.md" };
const _sfc_main = Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContainerBox = resolveComponent("ContainerBox");
      const _component_ShowCode = resolveComponent("ShowCode");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="video" tabindex="-1">Video <a class="header-anchor" href="#video" aria-hidden="true">#</a></h1>`);
      _push(ssrRenderComponent(_component_ContainerBox, { title: "\u4ECB\u7ECD" }, {
        desc: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u4E00\u4E2A\u8F7B\u5DE7\u7684\u89C6\u9891\u64AD\u653E\u5668 `);
          } else {
            return [
              createTextVNode(" \u4E00\u4E2A\u8F7B\u5DE7\u7684\u89C6\u9891\u64AD\u653E\u5668 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ContainerBox, { title: "\u4E0B\u8F7D\u5E76\u5F15\u5165" }, {
        desc: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}><a href="https://gitee.com/lengyibai/lib3-component-packages/raw/master/Lib/static/LibVideo.zip" target="_blank" rel="noreferrer"${_scopeId}>\u4E0B\u8F7D\u7EC4\u4EF6\u5305\u53CA\u5F53\u524D\u7EC4\u4EF6\u7684\u6240\u6709\u6848\u4F8B</a></p><p${_scopeId}>\u5F15\u5165\u53C2\u8003 <a href="/lib3.0/Components/base/start.html"${_scopeId}>\u5F15\u5165\u7EC4\u4EF6</a></p>`);
          } else {
            return [
              createVNode("p", null, [
                createVNode("a", {
                  href: "https://gitee.com/lengyibai/lib3-component-packages/raw/master/Lib/static/LibVideo.zip",
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
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_ShowCode, null, {
              codes: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="language-vue"${_scopeId2}><button class="copy"${_scopeId2}></button><span class="lang"${_scopeId2}>vue</span><pre${_scopeId2}><code${_scopeId2}><span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"${_scopeId2}>  </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}"${_scopeId2}>LibVideo</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}"${_scopeId2}>url</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}"${_scopeId2}>https://www.runoob.com/try/demo_source/movie.mp4</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}> /&gt;</span></span>
<span class="line"${_scopeId2}><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}"${_scopeId2}>template</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"${_scopeId2}>&gt;</span></span>
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
                            createVNode("span", { style: { "color": "#FFCB6B" } }, "LibVideo"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                            createVNode("span", { style: { "color": "#C792EA" } }, "url"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                            createVNode("span", { style: { "color": "#C3E88D" } }, "https://www.runoob.com/try/demo_source/movie.mp4"),
                            createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "demoBox" }, [
                createVNode(_sfc_main$1)
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
                          createVNode("span", { style: { "color": "#FFCB6B" } }, "LibVideo"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, " "),
                          createVNode("span", { style: { "color": "#C792EA" } }, "url"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, "="),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
                          createVNode("span", { style: { "color": "#C3E88D" } }, "https://www.runoob.com/try/demo_source/movie.mp4"),
                          createVNode("span", { style: { "color": "#89DDFF" } }, '"'),
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
            _push2(`<table${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>\u53C2\u6570</th><th${_scopeId}>\u8BF4\u660E</th><th${_scopeId}>\u7C7B\u578B</th><th${_scopeId}>\u9ED8\u8BA4\u503C</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>url</td><td${_scopeId}>\u89C6\u9891\u5730\u5740\uFF0C\u5F15\u5165\u672C\u5730\u89C6\u9891\u8BF7\u4F7F\u7528<code${_scopeId}>require(&#39;\u8DEF\u5F84&#39;)</code></td><td${_scopeId}>\u672A\u77E5</td><td${_scopeId}>-</td></tr></tbody></table>`);
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
                    createVNode("td", null, "url"),
                    createVNode("td", null, [
                      createTextVNode("\u89C6\u9891\u5730\u5740\uFF0C\u5F15\u5165\u672C\u5730\u89C6\u9891\u8BF7\u4F7F\u7528"),
                      createVNode("code", null, "require('\u8DEF\u5F84')")
                    ]),
                    createVNode("td", null, "\u672A\u77E5"),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Components/statics/Video.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
