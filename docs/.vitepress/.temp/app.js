var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { shallowRef, inject, computed, reactive, markRaw, readonly, nextTick, defineComponent, h, ref, watchEffect, onMounted, onUnmounted, watch, useSSRContext, mergeProps, resolveComponent, unref, createVNode, resolveDynamicComponent, withCtx, renderSlot, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, Fragment, renderList, provide, watchPostEffect, onUpdated, resolveDirective, createSSRApp } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot, ssrInterpolate, ssrRenderVNode, ssrRenderList, ssrRenderClass, ssrGetDirectiveProps, renderToString } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.9d74fd37.js";
import "body-scroll-lock";
import { useMediaQuery } from "@vueuse/core";
const fonts = "";
const vars = "";
const base = "";
const utils = "";
const customBlock = "";
const vpCode = "";
const vpDoc = "";
const vpSponsor = "";
const siteData = JSON.parse('{"lang":"en-US","title":"Lib","description":"A VitePress site","base":"/lib3.0/","head":[],"appearance":true,"themeConfig":{"siteTitle":"Lib","logo":"https://lengyibai.gitee.io/img-bed/img/lib.png","lastUpdatedText":"\u6700\u540E\u66F4\u65B0\u65F6\u95F4","socialLinks":[{"icon":"github","link":"https://github.com/lengyibai/Lib-components"}],"nav":[{"text":"\u7EC4\u4EF6\u5E93","link":"/Components/base/introduce","activeMatch":"/Components/"},{"text":"\u81EA\u5B9A\u4E49\u6307\u4EE4\u5E93","link":"/Directives/base/start","activeMatch":"/Directives/"},{"text":"\u51FD\u6570\u5E93","link":"/Functions/ordinary/Type","activeMatch":"/Functions/"},{"text":"\u6837\u5F0F\u5E93","link":"/Styles/Gradient","activeMatch":"/Styles/"},{"text":"\u52A8\u753B\u5E93","link":"/Animates/TV","activeMatch":"/Animates/"}],"sidebar":{"/Components/":[{"text":"\u5F00\u53D1\u6307\u5357","collapsible":true,"items":[{"text":"\u4ECB\u7ECD","link":"/Components/base/introduce"},{"text":"\u8FC1\u79FB\u6539\u53D8","link":"/Components/base/change"},{"text":"\u5FEB\u901F\u5F00\u59CB","link":"/Components/base/start"}]},{"text":"\u9759\u6001\u7EC4\u4EF6","collapsible":true,"link":"/Components/statics/Ico","items":[{"text":"\u56FE\u6807","link":"/Components/statics/Icon"},{"text":"SVG\u53D8\u8272\u56FE\u6807","link":"/Components/statics/Svg"},{"text":"\u63D0\u4EA4\u6309\u94AE","link":"/Components/statics/CommitBtn"},{"text":"\u66F4\u65B0\u6309\u94AE","link":"/Components/statics/UpdateBtn"},{"text":"\u5220\u9664\u6309\u94AE","link":"/Components/statics/DeleteBtn"},{"text":"\u6761\u7EB9\u52A0\u8F7D\u6309\u94AE","link":"/Components/statics/StripeBtn"},{"text":"\u653E\u5C04\u70B9\u51FB\u6548\u679C","link":"/Components/statics/TriggerRay"},{"text":"Grid\u7279\u8272\u5E03\u5C40","link":"/Components/statics/GridLayout"},{"text":"Grid\u6570\u5B57\u6A21\u677F\u5E03\u5C40","link":"/Components/statics/GridNumber"},{"text":"Grid\u5B57\u6BCD\u6A21\u677F\u5E03\u5C40","link":"/Components/statics/GridLetter"},{"text":"\u89C6\u9891\u64AD\u653E\u5668","link":"/Components/statics/Video"},{"text":"\u9876\u90E8\u5173\u95ED\u8499\u7248","link":"/Components/statics/MaskClose"},{"text":"\u5361\u7247\u7FFB\u8F6C","link":"/Components/statics/FlipBox"},{"text":"\u8499\u7248","link":"/Components/statics/Mask"},{"text":"loading","link":"/Components/statics/Loading"},{"text":"iframe","link":"/Components/statics/Iframe"},{"text":"\u79FB\u52A8\u7AEF\u63D0\u793A\u6A2A\u5C4F\u6D4F\u89C8","link":"/Components/statics/PhoneTip"},{"text":"\u5168\u5C4F\u6EDA\u52A8","link":"/Components/statics/FullScroll"},{"text":"\u6ED1\u52A8\u9009\u62E9\u5668","link":"/Components/statics/Range"},{"text":"\u73AF\u5F62\u8FDB\u5EA6\u6761","link":"/Components/statics/CircularProgress"},{"text":"\u79FB\u52A8\u7AEF\u6EDA\u52A8\u63D2\u4EF6","link":"/Components/statics/Scroll"}]},{"text":"\u52A8\u6001\u7EC4\u4EF6","collapsible":true,"items":[{"text":"\u89C6\u5DEE\u52A8\u753B","link":"/Components/dynamics/Parallax"},{"text":"\u7011\u5E03\u6D41\u5E03\u5C40","link":"/Components/dynamics/Waterfall"},{"text":"\u62D6\u62FD\u6392\u5E8F","link":"/Components/dynamics/DragSort"},{"text":"\u6587\u4EF6\u4E0A\u4F20","link":"/Components/dynamics/UploadFile"},{"text":"\u56FE\u7247\u4E0A\u4F20","link":"/Components/dynamics/UploadImg"},{"text":"\u8868\u683C","link":"/Components/dynamics/Table"},{"text":"\u83B7\u53D6\u9A8C\u8BC1\u7801\u6309\u94AE","link":"/Components/dynamics/ValidationCountdown"}]}],"/Styles/":[{"text":"\u57FA\u7840","collapsible":true,"link":"/Styles/Gradient","items":[{"text":"\u6E10\u53D8\u5408\u96C6","link":"/Styles/Gradient"},{"text":"\u9F20\u6807\u6837\u5F0F","link":"/Styles/Cursor"},{"text":"\u6587\u5B57\u6EA2\u51FA\u7701\u7565\u53F7","link":"/Styles/Ellipsis"},{"text":"\u906E\u7F69\u5C42\u5408\u96C6","link":"/Styles/MaskCollection"}]}],"/Directives/":[{"text":"\u5F00\u53D1\u6307\u5357","collapsible":true,"items":[{"text":"\u5FEB\u901F\u5F00\u59CB","link":"/Directives/base/start"}]},{"text":"\u81EA\u5B9A\u4E49\u6307\u4EE4","collapsible":true,"items":[{"text":"\u6C34\u6CE2\u6269\u6563","link":"/Directives/WaveDiffuse"},{"text":"\u6587\u5B57\u60AC\u6D6E\u53D8\u8272","link":"/Directives/TextHoverColor"},{"text":"\u6253\u5B57\u673A(\u5355\u884C)","link":"/Directives/TypewriterSingle"},{"text":"\u6253\u5B57\u673A(\u591A\u884C)","link":"/Directives/TypewriterMultiple"},{"text":"\u7C92\u5B50\u6548\u679C","link":"/Directives/Particle"},{"text":"\u96EA\u82B1\u98D8\u843D","link":"/Directives/SnowFalling"},{"text":"\u89C6\u9891\u89C6\u5DEE\u80CC\u666F","link":"/Directives/ParallaxVideo"},{"text":"\u56FE\u7247\u89C6\u5DEE\u80CC\u666F","link":"/Directives/ParallaxImg"},{"text":"\u5361\u7247\u626B\u5149","link":"/Directives/SweepLight"},{"text":"\u6309\u4E0B\u62D6\u52A8","link":"/Directives/DownDrag"},{"text":"\u6E10\u53D8\u8499\u7248","link":"/Directives/MaskGradient"},{"text":"\u8868\u683C\u7ECF\u5178\u5E03\u5C40","link":"/Directives/TableLayout"},{"text":"\u6587\u4EF6\u62D6\u62FD\u89E3\u6790","link":"/Directives/DragFile"},{"text":"\u67E5\u770B\u56FE\u7247","link":"/Directives/ViewImg"}]}],"/Functions/":[{"text":"\u57FA\u7840","collapsable":false,"items":[{"text":"\u8FD4\u56DE\u6570\u636E\u7C7B\u578B","link":"/Functions/ordinary/Type"},{"text":"\u5224\u65AD\u6570\u636E\u7C7B\u578B","link":"/Functions/ordinary/IsType"},{"text":"\u63A7\u5236\u5168\u5C4F\u663E\u793A","link":"/Functions/ordinary/Full"},{"text":"\u968F\u673A\u6570","link":"/Functions/ordinary/Random"},{"text":"\u5B57\u7B26\u4E32\u53BB\u91CD","link":"/Functions/ordinary/StrDelRep"},{"text":"\u6570\u7EC4\u6DF1\u5EA6\u53BB\u91CD","link":"/Functions/ordinary/ArrDelRep"},{"text":"\u5BF9\u8C61\u6DF1\u5EA6\u53BB\u91CD","link":"/Functions/ordinary/ObjDelRep"},{"text":"\u83B7\u53D6\u6D4F\u89C8\u5668\u8C37\u6B4C\u5185\u6838\u7248\u672C","link":"/Functions/ordinary/ChromeV"},{"text":"\u5224\u65AD\u662F\u5426\u4E3A\u79FB\u52A8\u7AEF","link":"/Functions/ordinary/IsPhone"}]},{"text":"\u4E30\u5BCC","collapsable":false,"items":[{"text":"\u9632\u6296","link":"/Functions/custom/Debounce"},{"text":"\u8282\u6D41","link":"/Functions/custom/Throttle"},{"text":"\u6570\u5B57\u6BCF\u4E09\u4F4D\u52A0\u9017\u53F7","link":"/Functions/custom/FmtNum"},{"text":"\u624B\u673A\u53F7\u8131\u654F\u5904\u7406","link":"/Functions/custom/HideMobile"},{"text":"\u590D\u5236\u5230\u526A\u5207\u677F","link":"/Functions/custom/Copy"},{"text":"\u65E5\u671F\u683C\u5F0F\u5316","link":"/Functions/custom/FmtTime"},{"text":"\u6839\u636E\u65F6\u95F4\u6BB5\u95EE\u5019","link":"/Functions/custom/TimeGreet"},{"text":"\u8BB0\u5F55\u5DF2\u8FC7\u53BB\u5927\u6982\u65F6\u95F4","link":"/Functions/custom/TimePass"},{"text":"\u8BB0\u5F55\u5DF2\u8FC7\u53BB\u7CBE\u786E\u65F6\u95F4\u6216\u5012\u8BA1\u65F6","link":"/Functions/custom/TimeCount"},{"text":"\u4E2D\u6587\u8F6C\u62FC\u97F3","link":"/Functions/custom/Pinyin"},{"text":"\u6B63\u5219\u641C\u7D22","link":"/Functions/custom/Search"},{"text":"\u5224\u65AD\u662F\u5426\u4E3A\u6307\u5B9A\u7C7B\u578B\u7684\u6587\u4EF6\u94FE\u63A5","link":"/Functions/custom/UrlFileType"},{"text":"\u5168\u5C40\u66FF\u6362\u6307\u5B9A\u5B57\u7B26\u4E32","link":"/Functions/custom/RepStr"},{"text":"\u83B7\u53D6\u6587\u4EF6\u540D","link":"/Functions/custom/GetFileName"},{"text":"\u83B7\u53D6\u6587\u4EF6\u540E\u7F00\u540D","link":"/Functions/custom/GetFileSuf"},{"text":"\u6392\u5E8F","link":"/Functions/custom/TypeSort"},{"text":"\u5B57\u8282\u683C\u5F0F\u5316","link":"/Functions/custom/FmtByte"},{"text":"\u79D2\u6570\u683C\u5F0F\u5316","link":"/Functions/custom/FmtSec"},{"text":"\u5C0F\u6570\u3001\u767E\u5206\u6BD4\u4E92\u8F6C","link":"/Functions/custom/PotEoPct"},{"text":"\u56FE\u7247\u538B\u7F29","link":"/Functions/custom/ImageOptimizer"},{"text":"raf\u8BA1\u65F6\u5668","link":"/Functions/custom/FrameInterval"},{"text":"\u5BF9\u8C61\u8F6CExcel","link":"/Functions/custom/ObjToExc"},{"text":"Excel\u8F6C\u5BF9\u8C61","link":"/Functions/custom/ExcToObj"},{"text":"\u83B7\u53D6\u5730\u5740\u680F\u53C2\u6570","link":"/Functions/custom/GetPathParams"},{"text":"\u5BF9\u8C61\u6DF1\u5EA6\u5408\u5E76","link":"/Functions/custom/DeepMearge"},{"text":"\u5BF9\u8C61\u8FC7\u6EE4","link":"/Functions/custom/RemoveEmptyField"},{"text":"\u6DF1\u62F7\u8D1D","link":"/Functions/custom/DeepCopy"},{"text":"\u4FDD\u5B58\u4E3A\u6587\u4EF6","link":"/Functions/custom/SaveFile"}]},{"text":"\u5143\u7D20","collapsable":false,"items":[{"text":"\u629B\u7269\u7EBF\u5143\u7D20","link":"/Functions/element/Parabolic"},{"text":"\u6EDA\u52A8\u89C6\u5DEE\u52A8\u753B","link":"/Functions/element/ScrollParallax"},{"text":"\u6EDA\u52A8\u8DDF\u968F\u52A8\u753B","link":"/Functions/element/ScrollFollow"},{"text":"\u6EDA\u52A8\u5165\u573A\u52A8\u753B","link":"/Functions/element/ScrollInto"}]}],"/Animates/":[{"text":"\u57FA\u7840","collapsable":false,"items":[{"text":"\u7535\u89C6","link":"/Animates/TV"},{"text":"\u5706","link":"/Animates/Round"},{"text":"\u65CB","link":"/Animates/Spin"},{"text":"\u6380","link":"/Animates/Burqas"},{"text":"\u6298","link":"/Animates/Fold"},{"text":"\u5C55","link":"/Animates/Deploy"}]}]},"editLink":{"pattern":"https://github.com/lengyibai/Lib3.0/edit/master/docs/:path","text":"\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875\u9762"}},"locales":{},"langs":{},"scrollOffset":90,"cleanUrls":"disabled"}');
const EXTERNAL_URL_RE = /^[a-z]+:/i;
const APPEARANCE_KEY = "vitepress-theme-appearance";
const inBrowser$1 = typeof window !== "undefined";
const notFoundPageData = {
  relativePath: "",
  title: "404",
  description: "Not Found",
  headers: [],
  frontmatter: { sidebar: false, layout: "page" },
  lastUpdated: 0
};
function findMatchRoot(route, roots) {
  roots.sort((a, b) => {
    const levelDelta = b.split("/").length - a.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    } else {
      return b.length - a.length;
    }
  });
  for (const r of roots) {
    if (route.startsWith(r))
      return r;
  }
}
function resolveLocales(locales, route) {
  const localeRoot = findMatchRoot(route, Object.keys(locales));
  return localeRoot ? locales[localeRoot] : void 0;
}
function createLangDictionary(siteData2) {
  const { locales } = siteData2.themeConfig || {};
  const siteLocales = siteData2.locales;
  return locales && siteLocales ? Object.keys(locales).reduce((langs, path) => {
    langs[path] = {
      label: locales[path].label,
      lang: siteLocales[path].lang
    };
    return langs;
  }, {}) : {};
}
function resolveSiteDataByRoute(siteData2, route) {
  route = cleanRoute(siteData2, route);
  const localeData = resolveLocales(siteData2.locales || {}, route);
  const localeThemeConfig = resolveLocales(siteData2.themeConfig.locales || {}, route);
  return Object.assign({}, siteData2, localeData, {
    themeConfig: Object.assign({}, siteData2.themeConfig, localeThemeConfig, {
      locales: {}
    }),
    lang: (localeData || siteData2).lang,
    locales: {},
    langs: createLangDictionary(siteData2)
  });
}
function createTitle(siteData2, pageData) {
  var _a;
  const title = pageData.title || siteData2.title;
  const template = (_a = pageData.titleTemplate) != null ? _a : siteData2.titleTemplate;
  if (typeof template === "string" && template.includes(":title")) {
    return template.replace(/:title/g, title);
  }
  const templateString = createTitleTemplate(siteData2.title, template);
  return `${title}${templateString}`;
}
function createTitleTemplate(siteTitle, template) {
  if (template === false) {
    return "";
  }
  if (template === true || template === void 0) {
    return ` | ${siteTitle}`;
  }
  if (siteTitle === template) {
    return "";
  }
  return ` | ${template}`;
}
function cleanRoute(siteData2, route) {
  if (!inBrowser$1) {
    return route;
  }
  const base2 = siteData2.base;
  const baseWithoutSuffix = base2.endsWith("/") ? base2.slice(0, -1) : base2;
  return route.slice(baseWithoutSuffix.length);
}
function hasTag(head, tag) {
  const [tagType, tagAttrs] = tag;
  if (tagType !== "meta")
    return false;
  const keyAttr = Object.entries(tagAttrs)[0];
  if (keyAttr == null)
    return false;
  return head.some(([type, attrs]) => type === tagType && attrs[keyAttr[0]] === keyAttr[1]);
}
function mergeHead(prev, curr) {
  return [...prev.filter((tagAttrs) => !hasTag(curr, tagAttrs)), ...curr];
}
function joinPath(base2, path) {
  return `${base2}${path}`.replace(/\/+/g, "/");
}
function withBase(path) {
  return EXTERNAL_URL_RE.test(path) ? path : joinPath(siteDataRef.value.base, path);
}
function pathToFile(path) {
  let pagePath = path.replace(/\.html$/, "");
  pagePath = decodeURIComponent(pagePath);
  if (pagePath.endsWith("/")) {
    pagePath += "index";
  }
  {
    if (inBrowser$1) {
      const base2 = "/lib3.0/";
      pagePath = (pagePath.slice(base2.length).replace(/\//g, "_") || "index") + ".md";
      const pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      pagePath = `${base2}assets/${pagePath}.${pageHash}.js`;
    } else {
      pagePath = `./${pagePath.slice(1).replace(/\//g, "_")}.md.js`;
    }
  }
  return pagePath;
}
const dataSymbol = Symbol();
const siteDataRef = shallowRef(siteData);
function initData(route) {
  const site = computed(() => resolveSiteDataByRoute(siteDataRef.value, route.path));
  return {
    site,
    theme: computed(() => site.value.themeConfig),
    page: computed(() => route.data),
    frontmatter: computed(() => route.data.frontmatter),
    lang: computed(() => site.value.lang),
    localePath: computed(() => {
      const { langs, lang } = site.value;
      const path = Object.keys(langs).find((langPath) => langs[langPath].lang === lang);
      return withBase(path || "/");
    }),
    title: computed(() => {
      return createTitle(site.value, route.data);
    }),
    description: computed(() => {
      return route.data.description || site.value.description;
    })
  };
}
function useData() {
  const data = inject(dataSymbol);
  if (!data) {
    throw new Error("vitepress data not properly injected in app");
  }
  return data;
}
const RouterSymbol = Symbol();
const fakeHost = `http://a.com`;
const getDefaultRoute = () => ({
  path: "/",
  component: null,
  data: notFoundPageData
});
function createRouter(loadPageModule, fallbackComponent) {
  const route = reactive(getDefaultRoute());
  function go(href = inBrowser$1 ? location.href : "/") {
    const url = new URL(href, fakeHost);
    if (siteDataRef.value.cleanUrls === "disabled") {
      if (!url.pathname.endsWith("/") && !url.pathname.endsWith(".html")) {
        url.pathname += ".html";
        href = url.pathname + url.search + url.hash;
      }
    }
    if (inBrowser$1) {
      history.replaceState({ scrollPosition: window.scrollY }, document.title);
      history.pushState(null, "", href);
    }
    return loadPage(href);
  }
  let latestPendingPath = null;
  async function loadPage(href, scrollPosition = 0, isRetry = false) {
    const targetLoc = new URL(href, fakeHost);
    const pendingPath = latestPendingPath = targetLoc.pathname;
    try {
      let page = await loadPageModule(pendingPath);
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        const { default: comp, __pageData } = page;
        if (!comp) {
          throw new Error(`Invalid route component: ${comp}`);
        }
        route.path = inBrowser$1 ? pendingPath : withBase(pendingPath);
        route.component = markRaw(comp);
        route.data = true ? markRaw(__pageData) : readonly(__pageData);
        if (inBrowser$1) {
          nextTick(() => {
            if (targetLoc.hash && !scrollPosition) {
              let target = null;
              try {
                target = document.querySelector(decodeURIComponent(targetLoc.hash));
              } catch (e) {
                console.warn(e);
              }
              if (target) {
                scrollTo(target, targetLoc.hash);
                return;
              }
            }
            window.scrollTo(0, scrollPosition);
          });
        }
      }
    } catch (err) {
      if (!/fetch/.test(err.message) && !/^\/404(\.html|\/)?$/.test(href)) {
        console.error(err);
      }
      if (!isRetry) {
        try {
          const res = await fetch(siteDataRef.value.base + "hashmap.json");
          window.__VP_HASH_MAP__ = await res.json();
          await loadPage(href, scrollPosition, true);
          return;
        } catch (e) {
        }
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        route.path = inBrowser$1 ? pendingPath : withBase(pendingPath);
        route.component = fallbackComponent ? markRaw(fallbackComponent) : null;
        route.data = notFoundPageData;
      }
    }
  }
  if (inBrowser$1) {
    window.addEventListener("click", (e) => {
      const link2 = e.target.closest("a");
      if (link2) {
        const { href, origin, pathname, hash, search, target } = link2;
        const currentUrl = window.location;
        const extMatch = pathname.match(/\.\w+$/);
        if (!e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && target !== `_blank` && origin === currentUrl.origin && !(extMatch && extMatch[0] !== ".html")) {
          e.preventDefault();
          if (pathname === currentUrl.pathname && search === currentUrl.search) {
            if (hash && hash !== currentUrl.hash) {
              history.pushState(null, "", hash);
              window.dispatchEvent(new Event("hashchange"));
              scrollTo(link2, hash, link2.classList.contains("header-anchor"));
            }
          } else {
            go(href);
          }
        }
      }
    }, { capture: true });
    window.addEventListener("popstate", (e) => {
      loadPage(location.href, e.state && e.state.scrollPosition || 0);
    });
    window.addEventListener("hashchange", (e) => {
      e.preventDefault();
    });
  }
  return {
    route,
    go
  };
}
function useRouter() {
  const router = inject(RouterSymbol);
  if (!router) {
    throw new Error("useRouter() is called without provider.");
  }
  return router;
}
function useRoute() {
  return useRouter().route;
}
function scrollTo(el, hash, smooth = false) {
  let target = null;
  try {
    target = el.classList.contains("header-anchor") ? el : document.querySelector(decodeURIComponent(hash));
  } catch (e) {
    console.warn(e);
  }
  if (target) {
    let offset = siteDataRef.value.scrollOffset;
    if (typeof offset === "string") {
      offset = document.querySelector(offset).getBoundingClientRect().bottom + 24;
    }
    const targetPadding = parseInt(window.getComputedStyle(target).paddingTop, 10);
    const targetTop = window.scrollY + target.getBoundingClientRect().top - offset + targetPadding;
    if (!smooth || Math.abs(targetTop - window.scrollY) > window.innerHeight) {
      window.scrollTo(0, targetTop);
    } else {
      window.scrollTo({
        left: 0,
        top: targetTop,
        behavior: "smooth"
      });
    }
  }
}
const Content = defineComponent({
  name: "VitePressContent",
  setup() {
    const route = useRoute();
    return () => h("div", { style: { position: "relative" } }, [
      route.component ? h(route.component) : null
    ]);
  }
});
const HASH_RE = /#.*$/;
const EXT_RE = /(index)?\.(md|html)$/;
const inBrowser = typeof window !== "undefined";
const hashRef = ref(inBrowser ? location.hash : "");
function isExternal(path) {
  return EXTERNAL_URL_RE.test(path);
}
function throttleAndDebounce(fn, delay) {
  let timeout;
  let called = false;
  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    if (!called) {
      fn();
      called = true;
      setTimeout(() => {
        called = false;
      }, delay);
    } else {
      timeout = setTimeout(fn, delay);
    }
  };
}
function isActive(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0) {
    return false;
  }
  currentPath = normalize(`/${currentPath}`);
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath);
  }
  if (normalize(matchPath) !== currentPath) {
    return false;
  }
  const hashMatch = matchPath.match(HASH_RE);
  if (hashMatch) {
    return hashRef.value === hashMatch[0];
  }
  return true;
}
function ensureStartingSlash(path) {
  return /^\//.test(path) ? path : `/${path}`;
}
function normalize(path) {
  return decodeURI(path).replace(HASH_RE, "").replace(EXT_RE, "");
}
function normalizeLink(url) {
  if (isExternal(url)) {
    return url;
  }
  const { site } = useData();
  const { pathname, search, hash } = new URL(url, "http://example.com");
  const normalizedPath = pathname.endsWith("/") || pathname.endsWith(".html") ? url : `${pathname.replace(/(\.md)?$/, site.value.cleanUrls === "disabled" ? ".html" : "")}${search}${hash}`;
  return withBase(normalizedPath);
}
function getSidebar(sidebar, path) {
  if (Array.isArray(sidebar)) {
    return sidebar;
  }
  path = ensureStartingSlash(path);
  for (const dir in sidebar) {
    if (path.startsWith(ensureStartingSlash(dir))) {
      return sidebar[dir];
    }
  }
  return [];
}
function getFlatSideBarLinks(sidebar) {
  const links = [];
  function recursivelyExtractLinks(items) {
    for (const item of items) {
      if (item.link) {
        links.push({ ...item, link: item.link });
      }
      if ("items" in item) {
        recursivelyExtractLinks(item.items);
      }
    }
  }
  for (const group of sidebar) {
    recursivelyExtractLinks(group.items);
  }
  return links;
}
function useSidebar() {
  const route = useRoute();
  const { theme: theme2, frontmatter } = useData();
  const isOpen = ref(false);
  const sidebar = computed(() => {
    const sidebarConfig = theme2.value.sidebar;
    const relativePath = route.data.relativePath;
    return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : [];
  });
  const hasSidebar = computed(() => {
    return frontmatter.value.sidebar !== false && sidebar.value.length > 0 && frontmatter.value.layout !== "home";
  });
  const hasAside = computed(() => {
    return frontmatter.value.layout !== "home" && frontmatter.value.aside !== false;
  });
  function open() {
    isOpen.value = true;
  }
  function close() {
    isOpen.value = false;
  }
  function toggle() {
    isOpen.value ? close() : open();
  }
  return {
    isOpen,
    sidebar,
    hasSidebar,
    hasAside,
    open,
    close,
    toggle
  };
}
function useCloseSidebarOnEscape(isOpen, close) {
  let triggerElement;
  watchEffect(() => {
    triggerElement = isOpen.value ? document.activeElement : void 0;
  });
  onMounted(() => {
    window.addEventListener("keyup", onEscape);
  });
  onUnmounted(() => {
    window.removeEventListener("keyup", onEscape);
  });
  function onEscape(e) {
    if (e.key === "Escape" && isOpen.value) {
      close();
      triggerElement == null ? void 0 : triggerElement.focus();
    }
  }
}
const _sfc_main$1g = /* @__PURE__ */ defineComponent({
  __name: "VPSkipLink",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const backToTop = ref();
    watch(() => route.path, () => backToTop.value.focus());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><span tabindex="-1" data-v-151f2593></span><a href="#VPContent" class="VPSkipLink visually-hidden" data-v-151f2593> Skip to content </a><!--]-->`);
    };
  }
});
const VPSkipLink_vue_vue_type_style_index_0_scoped_151f2593_lang = "";
const _sfc_setup$1g = _sfc_main$1g.setup;
_sfc_main$1g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSkipLink.vue");
  return _sfc_setup$1g ? _sfc_setup$1g(props, ctx) : void 0;
};
const VPSkipLink = /* @__PURE__ */ _export_sfc(_sfc_main$1g, [["__scopeId", "data-v-151f2593"]]);
const _sfc_main$1f = /* @__PURE__ */ defineComponent({
  __name: "VPBackdrop",
  __ssrInlineRender: true,
  props: {
    show: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPBackdrop" }, _attrs))} data-v-0164f098></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPBackdrop_vue_vue_type_style_index_0_scoped_0164f098_lang = "";
const _sfc_setup$1f = _sfc_main$1f.setup;
_sfc_main$1f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPBackdrop.vue");
  return _sfc_setup$1f ? _sfc_setup$1f(props, ctx) : void 0;
};
const VPBackdrop = /* @__PURE__ */ _export_sfc(_sfc_main$1f, [["__scopeId", "data-v-0164f098"]]);
function useNav() {
  const isScreenOpen = ref(false);
  function openScreen() {
    isScreenOpen.value = true;
    window.addEventListener("resize", closeScreenOnTabletWindow);
  }
  function closeScreen() {
    isScreenOpen.value = false;
    window.removeEventListener("resize", closeScreenOnTabletWindow);
  }
  function toggleScreen() {
    isScreenOpen.value ? closeScreen() : openScreen();
  }
  function closeScreenOnTabletWindow() {
    window.outerWidth >= 768 && closeScreen();
  }
  const route = useRoute();
  watch(() => route.path, closeScreen);
  return {
    isScreenOpen,
    openScreen,
    closeScreen,
    toggleScreen
  };
}
const __default__ = {
  inheritAttrs: false
};
const _sfc_main$1e = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "VPImage",
  __ssrInlineRender: true,
  props: {
    image: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPImage = resolveComponent("VPImage", true);
      if (__props.image) {
        _push(`<!--[-->`);
        if (typeof __props.image === "string" || "src" in __props.image) {
          _push(`<img${ssrRenderAttrs(mergeProps({ class: "VPImage" }, typeof __props.image === "string" ? _ctx.$attrs : { ...__props.image, ..._ctx.$attrs }, {
            src: unref(withBase)(typeof __props.image === "string" ? __props.image : __props.image.src)
          }))} data-v-e13a1912>`);
        } else {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_component_VPImage, mergeProps({
            class: "dark",
            image: __props.image.dark
          }, _ctx.$attrs), null, _parent));
          _push(ssrRenderComponent(_component_VPImage, mergeProps({
            class: "light",
            image: __props.image.light
          }, _ctx.$attrs), null, _parent));
          _push(`<!--]-->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPImage_vue_vue_type_style_index_0_scoped_e13a1912_lang = "";
const _sfc_setup$1e = _sfc_main$1e.setup;
_sfc_main$1e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPImage.vue");
  return _sfc_setup$1e ? _sfc_setup$1e(props, ctx) : void 0;
};
const VPImage = /* @__PURE__ */ _export_sfc(_sfc_main$1e, [["__scopeId", "data-v-e13a1912"]]);
const _sfc_main$1d = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTitle",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavBarTitle", { "has-sidebar": unref(hasSidebar) }]
      }, _attrs))} data-v-d5925166><a class="title"${ssrRenderAttr("href", unref(site).base)} data-v-d5925166>`);
      ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPImage, {
        class: "logo",
        image: unref(theme2).logo
      }, null, _parent));
      if (unref(theme2).siteTitle) {
        _push(`<!--[-->${ssrInterpolate(unref(theme2).siteTitle)}<!--]-->`);
      } else if (unref(theme2).siteTitle === void 0) {
        _push(`<!--[-->${ssrInterpolate(unref(site).title)}<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push, _parent);
      _push(`</a></div>`);
    };
  }
});
const VPNavBarTitle_vue_vue_type_style_index_0_scoped_d5925166_lang = "";
const _sfc_setup$1d = _sfc_main$1d.setup;
_sfc_main$1d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarTitle.vue");
  return _sfc_setup$1d ? _sfc_setup$1d(props, ctx) : void 0;
};
const VPNavBarTitle = /* @__PURE__ */ _export_sfc(_sfc_main$1d, [["__scopeId", "data-v-d5925166"]]);
const style = "";
const _sfc_main$1c = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearch",
  __ssrInlineRender: true,
  setup(__props) {
    const VPAlgoliaSearchBox = () => null;
    const { theme: theme2 } = useData();
    const loaded = ref(false);
    const metaKey = ref(`'Meta'`);
    onMounted(() => {
      if (!theme2.value.algolia) {
        return;
      }
      metaKey.value = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? `'\u2318'` : `'Ctrl'`;
      const handleSearchHotKey = (e) => {
        if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
          e.preventDefault();
          load();
          remove();
        }
      };
      const remove = () => {
        window.removeEventListener("keydown", handleSearchHotKey);
      };
      window.addEventListener("keydown", handleSearchHotKey);
      onUnmounted(remove);
    });
    function load() {
      if (!loaded.value) {
        loaded.value = true;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _cssVars = { style: {
        "--38a1667b": metaKey.value
      } };
      if (unref(theme2).algolia) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavBarSearch" }, _attrs, _cssVars))}>`);
        if (loaded.value) {
          _push(ssrRenderComponent(unref(VPAlgoliaSearchBox), null, null, _parent));
        } else {
          _push(`<div id="docsearch"><button type="button" class="DocSearch DocSearch-Button" aria-label="Search"><span class="DocSearch-Button-Container"><svg class="DocSearch-Search-Icon" width="20" height="20" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="DocSearch-Button-Placeholder">${ssrInterpolate(((_a = unref(theme2).algolia) == null ? void 0 : _a.buttonText) || "Search")}</span></span><span class="DocSearch-Button-Keys"><kbd class="DocSearch-Button-Key"></kbd><kbd class="DocSearch-Button-Key">K</kbd></span></button></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarSearch_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$1c = _sfc_main$1c.setup;
_sfc_main$1c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarSearch.vue");
  return _sfc_setup$1c ? _sfc_setup$1c(props, ctx) : void 0;
};
const _sfc_main$1b = {};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    height: "24px",
    viewBox: "0 0 24 24",
    width: "24px"
  }, _attrs))}><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path></svg>`);
}
const _sfc_setup$1b = _sfc_main$1b.setup;
_sfc_main$1b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconExternalLink.vue");
  return _sfc_setup$1b ? _sfc_setup$1b(props, ctx) : void 0;
};
const VPIconExternalLink = /* @__PURE__ */ _export_sfc(_sfc_main$1b, [["ssrRender", _sfc_ssrRender$h]]);
const _sfc_main$1a = /* @__PURE__ */ defineComponent({
  __name: "VPLink",
  __ssrInlineRender: true,
  props: {
    href: null,
    noIcon: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const isExternal2 = computed(() => props.href && EXTERNAL_URL_RE.test(props.href));
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.href ? "a" : "span"), mergeProps({
        class: ["VPLink", { link: __props.href }],
        href: __props.href ? unref(normalizeLink)(__props.href) : void 0,
        target: unref(isExternal2) ? "_self" : void 0,
        rel: unref(isExternal2) ? "noreferrer" : void 0
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            if (unref(isExternal2) && !__props.noIcon) {
              _push2(ssrRenderComponent(VPIconExternalLink, { class: "icon" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true),
              unref(isExternal2) && !__props.noIcon ? (openBlock(), createBlock(VPIconExternalLink, {
                key: 0,
                class: "icon"
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const VPLink_vue_vue_type_style_index_0_scoped_09843590_lang = "";
const _sfc_setup$1a = _sfc_main$1a.setup;
_sfc_main$1a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPLink.vue");
  return _sfc_setup$1a ? _sfc_setup$1a(props, ctx) : void 0;
};
const VPLink = /* @__PURE__ */ _export_sfc(_sfc_main$1a, [["__scopeId", "data-v-09843590"]]);
const _sfc_main$19 = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuLink",
  __ssrInlineRender: true,
  props: {
    item: null
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPLink, mergeProps({
        class: {
          VPNavBarMenuLink: true,
          active: unref(isActive)(
            unref(page).relativePath,
            __props.item.activeMatch || __props.item.link,
            !!__props.item.activeMatch
          )
        },
        href: __props.item.link,
        noIcon: true
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.item.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPNavBarMenuLink_vue_vue_type_style_index_0_scoped_47a2263e_lang = "";
const _sfc_setup$19 = _sfc_main$19.setup;
_sfc_main$19.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenuLink.vue");
  return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
const VPNavBarMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$19, [["__scopeId", "data-v-47a2263e"]]);
const focusedElement = ref();
let active = false;
let listeners = 0;
function useFlyout(options) {
  const focus = ref(false);
  if (typeof window !== "undefined") {
    !active && activateFocusTracking();
    listeners++;
    const unwatch = watch(focusedElement, (el) => {
      var _a, _b, _c;
      if (el === options.el.value || ((_a = options.el.value) == null ? void 0 : _a.contains(el))) {
        focus.value = true;
        (_b = options.onFocus) == null ? void 0 : _b.call(options);
      } else {
        focus.value = false;
        (_c = options.onBlur) == null ? void 0 : _c.call(options);
      }
    });
    onUnmounted(() => {
      unwatch();
      listeners--;
      if (!listeners) {
        deactivateFocusTracking();
      }
    });
  }
  return readonly(focus);
}
function activateFocusTracking() {
  document.addEventListener("focusin", handleFocusIn);
  active = true;
  focusedElement.value = document.activeElement;
}
function deactivateFocusTracking() {
  document.removeEventListener("focusin", handleFocusIn);
}
function handleFocusIn() {
  focusedElement.value = document.activeElement;
}
const _sfc_main$18 = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"></path></svg>`);
}
const _sfc_setup$18 = _sfc_main$18.setup;
_sfc_main$18.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconChevronDown.vue");
  return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
const VPIconChevronDown = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["ssrRender", _sfc_ssrRender$g]]);
const _sfc_main$17 = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle><circle cx="5" cy="12" r="2"></circle></svg>`);
}
const _sfc_setup$17 = _sfc_main$17.setup;
_sfc_main$17.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconMoreHorizontal.vue");
  return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
const VPIconMoreHorizontal = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["ssrRender", _sfc_ssrRender$f]]);
const _sfc_main$16 = /* @__PURE__ */ defineComponent({
  __name: "VPMenuLink",
  __ssrInlineRender: true,
  props: {
    item: null
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenuLink" }, _attrs))} data-v-e8e0fb1d>`);
      _push(ssrRenderComponent(VPLink, {
        class: { active: unref(isActive)(unref(page).relativePath, __props.item.activeMatch || __props.item.link) },
        href: __props.item.link
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.item.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.item.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const VPMenuLink_vue_vue_type_style_index_0_scoped_e8e0fb1d_lang = "";
const _sfc_setup$16 = _sfc_main$16.setup;
_sfc_main$16.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPMenuLink.vue");
  return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
const VPMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$16, [["__scopeId", "data-v-e8e0fb1d"]]);
const _sfc_main$15 = /* @__PURE__ */ defineComponent({
  __name: "VPMenuGroup",
  __ssrInlineRender: true,
  props: {
    text: null,
    items: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenuGroup" }, _attrs))} data-v-9ca52130>`);
      if (__props.text) {
        _push(`<p class="title" data-v-9ca52130>${ssrInterpolate(__props.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(__props.items, (item) => {
        _push(`<!--[-->`);
        if ("link" in item) {
          _push(ssrRenderComponent(VPMenuLink, { item }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const VPMenuGroup_vue_vue_type_style_index_0_scoped_9ca52130_lang = "";
const _sfc_setup$15 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPMenuGroup.vue");
  return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
const VPMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["__scopeId", "data-v-9ca52130"]]);
const _sfc_main$14 = /* @__PURE__ */ defineComponent({
  __name: "VPMenu",
  __ssrInlineRender: true,
  props: {
    items: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenu" }, _attrs))} data-v-1c5d0cfc>`);
      if (__props.items) {
        _push(`<div class="items" data-v-1c5d0cfc><!--[-->`);
        ssrRenderList(__props.items, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPMenuLink, { item }, null, _parent));
          } else {
            _push(ssrRenderComponent(VPMenuGroup, {
              text: item.text,
              items: item.items
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const VPMenu_vue_vue_type_style_index_0_scoped_1c5d0cfc_lang = "";
const _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPMenu.vue");
  return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
const VPMenu = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["__scopeId", "data-v-1c5d0cfc"]]);
const _sfc_main$13 = /* @__PURE__ */ defineComponent({
  __name: "VPFlyout",
  __ssrInlineRender: true,
  props: {
    icon: null,
    button: null,
    label: null,
    items: null
  },
  setup(__props) {
    const open = ref(false);
    const el = ref();
    useFlyout({ el, onBlur });
    function onBlur() {
      open.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPFlyout",
        ref_key: "el",
        ref: el
      }, _attrs))} data-v-6ffb57d3><button type="button" class="button" aria-haspopup="true"${ssrRenderAttr("aria-expanded", open.value)}${ssrRenderAttr("aria-label", __props.label)} data-v-6ffb57d3>`);
      if (__props.button || __props.icon) {
        _push(`<span class="text" data-v-6ffb57d3>`);
        if (__props.icon) {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.icon), { class: "option-icon" }, null), _parent);
        } else {
          _push(`<!---->`);
        }
        _push(` ${ssrInterpolate(__props.button)} `);
        _push(ssrRenderComponent(VPIconChevronDown, { class: "text-icon" }, null, _parent));
        _push(`</span>`);
      } else {
        _push(ssrRenderComponent(VPIconMoreHorizontal, { class: "icon" }, null, _parent));
      }
      _push(`</button><div class="menu" data-v-6ffb57d3>`);
      _push(ssrRenderComponent(VPMenu, { items: __props.items }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const VPFlyout_vue_vue_type_style_index_0_scoped_6ffb57d3_lang = "";
const _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPFlyout.vue");
  return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
const VPFlyout = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["__scopeId", "data-v-6ffb57d3"]]);
const _sfc_main$12 = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuGroup",
  __ssrInlineRender: true,
  props: {
    item: null
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPFlyout, mergeProps({
        class: {
          VPNavBarMenuGroup: true,
          active: unref(isActive)(
            unref(page).relativePath,
            __props.item.activeMatch,
            !!__props.item.activeMatch
          )
        },
        button: __props.item.text,
        items: __props.item.items
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenuGroup.vue");
  return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
const _sfc_main$11 = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).nav) {
        _push(`<nav${ssrRenderAttrs(mergeProps({
          "aria-labelledby": "main-nav-aria-label",
          class: "VPNavBarMenu"
        }, _attrs))} data-v-f83db6ba><span id="main-nav-aria-label" class="visually-hidden" data-v-f83db6ba>Main Navigation</span><!--[-->`);
        ssrRenderList(unref(theme2).nav, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPNavBarMenuLink, { item }, null, _parent));
          } else {
            _push(ssrRenderComponent(_sfc_main$12, { item }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarMenu_vue_vue_type_style_index_0_scoped_f83db6ba_lang = "";
const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenu.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
const VPNavBarMenu = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["__scopeId", "data-v-f83db6ba"]]);
const _sfc_main$10 = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M0 0h24v24H0z" fill="none"></path><path d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z " class="css-c4d79v"></path></svg>`);
}
const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconLanguages.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
const VPIconLanguages = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["ssrRender", _sfc_ssrRender$e]]);
const _sfc_main$$ = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTranslations",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).localeLinks) {
        _push(ssrRenderComponent(VPFlyout, mergeProps({
          class: "VPNavBarTranslations",
          icon: VPIconLanguages
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="items" data-v-db824e91${_scopeId}><p class="title" data-v-db824e91${_scopeId}>${ssrInterpolate(unref(theme2).localeLinks.text)}</p><!--[-->`);
              ssrRenderList(unref(theme2).localeLinks.items, (locale) => {
                _push2(ssrRenderComponent(VPMenuLink, { item: locale }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "items" }, [
                  createVNode("p", { class: "title" }, toDisplayString(unref(theme2).localeLinks.text), 1),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(theme2).localeLinks.items, (locale) => {
                    return openBlock(), createBlock(VPMenuLink, {
                      key: locale.link,
                      item: locale
                    }, null, 8, ["item"]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarTranslations_vue_vue_type_style_index_0_scoped_db824e91_lang = "";
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarTranslations.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
const VPNavBarTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["__scopeId", "data-v-db824e91"]]);
const VPSwitch_vue_vue_type_style_index_0_scoped_086e8519_lang = "";
const _sfc_main$_ = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: "VPSwitch",
    type: "button",
    role: "switch"
  }, _attrs))} data-v-086e8519><span class="check" data-v-086e8519>`);
  if (_ctx.$slots.default) {
    _push(`<span class="icon" data-v-086e8519>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span></button>`);
}
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSwitch.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
const VPSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["ssrRender", _sfc_ssrRender$d], ["__scopeId", "data-v-086e8519"]]);
const _sfc_main$Z = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path></svg>`);
}
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconSun.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const VPIconSun = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$Y = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"></path></svg>`);
}
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconMoon.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const VPIconMoon = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$X = /* @__PURE__ */ defineComponent({
  __name: "VPSwitchAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const toggle = typeof localStorage !== "undefined" ? useAppearance() : () => {
    };
    function useAppearance() {
      const query = window.matchMedia("(prefers-color-scheme: dark)");
      const classList = document.documentElement.classList;
      let userPreference = localStorage.getItem(APPEARANCE_KEY) || "auto";
      let isDark = userPreference === "auto" ? query.matches : userPreference === "dark";
      query.onchange = (e) => {
        if (userPreference === "auto") {
          setClass(isDark = e.matches);
        }
      };
      function toggle2() {
        setClass(isDark = !isDark);
        userPreference = isDark ? query.matches ? "auto" : "dark" : query.matches ? "light" : "auto";
        localStorage.setItem(APPEARANCE_KEY, userPreference);
      }
      function setClass(dark) {
        classList[dark ? "add" : "remove"]("dark");
      }
      return toggle2;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPSwitch, mergeProps({
        class: "VPSwitchAppearance",
        "aria-label": "toggle dark mode",
        onClick: unref(toggle)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VPIconSun, { class: "sun" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VPIconMoon, { class: "moon" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VPIconSun, { class: "sun" }),
              createVNode(VPIconMoon, { class: "moon" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPSwitchAppearance_vue_vue_type_style_index_0_scoped_968780f1_lang = "";
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSwitchAppearance.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const VPSwitchAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["__scopeId", "data-v-968780f1"]]);
const _sfc_main$W = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { site } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(site).appearance) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavBarAppearance" }, _attrs))} data-v-a3e7452b>`);
        _push(ssrRenderComponent(VPSwitchAppearance, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarAppearance_vue_vue_type_style_index_0_scoped_a3e7452b_lang = "";
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarAppearance.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const VPNavBarAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["__scopeId", "data-v-a3e7452b"]]);
const icons = {
  discord: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
  facebook: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
  github: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
  instagram: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
  linkedin: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  slack: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Slack</title><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>',
  twitter: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>',
  youtube: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'
};
const _sfc_main$V = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLink",
  __ssrInlineRender: true,
  props: {
    icon: null,
    link: null
  },
  setup(__props) {
    const props = __props;
    const svg = computed(() => {
      if (typeof props.icon === "object")
        return props.icon.svg;
      return icons[props.icon];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: "VPSocialLink",
        href: __props.link,
        target: "_blank",
        rel: "noopener"
      }, _attrs))} data-v-e57698f6>${unref(svg)}</a>`);
    };
  }
});
const VPSocialLink_vue_vue_type_style_index_0_scoped_e57698f6_lang = "";
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSocialLink.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const VPSocialLink = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["__scopeId", "data-v-e57698f6"]]);
const _sfc_main$U = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLinks",
  __ssrInlineRender: true,
  props: {
    links: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPSocialLinks" }, _attrs))} data-v-f6988cfb><!--[-->`);
      ssrRenderList(__props.links, ({ link: link2, icon: icon2 }) => {
        _push(ssrRenderComponent(VPSocialLink, {
          key: link2,
          icon: icon2,
          link: link2
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const VPSocialLinks_vue_vue_type_style_index_0_scoped_f6988cfb_lang = "";
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSocialLinks.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const VPSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["__scopeId", "data-v-f6988cfb"]]);
const _sfc_main$T = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).socialLinks) {
        _push(ssrRenderComponent(VPSocialLinks, mergeProps({
          class: "VPNavBarSocialLinks",
          links: unref(theme2).socialLinks
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavBarSocialLinks_vue_vue_type_style_index_0_scoped_738bef5a_lang = "";
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarSocialLinks.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const VPNavBarSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["__scopeId", "data-v-738bef5a"]]);
const _sfc_main$S = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarExtra",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPFlyout, mergeProps({
        class: "VPNavBarExtra",
        label: "extra navigation"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(theme2).localeLinks) {
              _push2(`<div class="group" data-v-e89b88d7${_scopeId}><p class="trans-title" data-v-e89b88d7${_scopeId}>${ssrInterpolate(unref(theme2).localeLinks.text)}</p><!--[-->`);
              ssrRenderList(unref(theme2).localeLinks.items, (locale) => {
                _push2(ssrRenderComponent(VPMenuLink, { item: locale }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(site).appearance) {
              _push2(`<div class="group" data-v-e89b88d7${_scopeId}><div class="item appearance" data-v-e89b88d7${_scopeId}><p class="label" data-v-e89b88d7${_scopeId}>Appearance</p><div class="appearance-action" data-v-e89b88d7${_scopeId}>`);
              _push2(ssrRenderComponent(VPSwitchAppearance, null, null, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(theme2).socialLinks) {
              _push2(`<div class="group" data-v-e89b88d7${_scopeId}><div class="item social-links" data-v-e89b88d7${_scopeId}>`);
              _push2(ssrRenderComponent(VPSocialLinks, {
                class: "social-links-list",
                links: unref(theme2).socialLinks
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(theme2).localeLinks ? (openBlock(), createBlock("div", {
                key: 0,
                class: "group"
              }, [
                createVNode("p", { class: "trans-title" }, toDisplayString(unref(theme2).localeLinks.text), 1),
                (openBlock(true), createBlock(Fragment, null, renderList(unref(theme2).localeLinks.items, (locale) => {
                  return openBlock(), createBlock(VPMenuLink, {
                    key: locale.link,
                    item: locale
                  }, null, 8, ["item"]);
                }), 128))
              ])) : createCommentVNode("", true),
              unref(site).appearance ? (openBlock(), createBlock("div", {
                key: 1,
                class: "group"
              }, [
                createVNode("div", { class: "item appearance" }, [
                  createVNode("p", { class: "label" }, "Appearance"),
                  createVNode("div", { class: "appearance-action" }, [
                    createVNode(VPSwitchAppearance)
                  ])
                ])
              ])) : createCommentVNode("", true),
              unref(theme2).socialLinks ? (openBlock(), createBlock("div", {
                key: 2,
                class: "group"
              }, [
                createVNode("div", { class: "item social-links" }, [
                  createVNode(VPSocialLinks, {
                    class: "social-links-list",
                    links: unref(theme2).socialLinks
                  }, null, 8, ["links"])
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPNavBarExtra_vue_vue_type_style_index_0_scoped_e89b88d7_lang = "";
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarExtra.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const VPNavBarExtra = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["__scopeId", "data-v-e89b88d7"]]);
const _sfc_main$R = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarHamburger",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: ["VPNavBarHamburger", { active: __props.active }],
        "aria-label": "mobile navigation",
        "aria-expanded": __props.active,
        "aria-controls": "VPNavScreen"
      }, _attrs))} data-v-e5dd9c1c><span class="container" data-v-e5dd9c1c><span class="top" data-v-e5dd9c1c></span><span class="middle" data-v-e5dd9c1c></span><span class="bottom" data-v-e5dd9c1c></span></span></button>`);
    };
  }
});
const VPNavBarHamburger_vue_vue_type_style_index_0_scoped_e5dd9c1c_lang = "";
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBarHamburger.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const VPNavBarHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["__scopeId", "data-v-e5dd9c1c"]]);
const _sfc_main$Q = /* @__PURE__ */ defineComponent({
  __name: "VPNavBar",
  __ssrInlineRender: true,
  props: {
    isScreenOpen: { type: Boolean }
  },
  emits: ["toggle-screen"],
  setup(__props) {
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavBar", { "has-sidebar": unref(hasSidebar) }]
      }, _attrs))} data-v-a35e6f52><div class="container" data-v-a35e6f52>`);
      _push(ssrRenderComponent(VPNavBarTitle, null, {
        "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<div class="content" data-v-a35e6f52>`);
      ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$1c, { class: "search" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarMenu, { class: "menu" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarTranslations, { class: "translations" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarAppearance, { class: "appearance" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarSocialLinks, { class: "social-links" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarExtra, { class: "extra" }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPNavBarHamburger, {
        class: "hamburger",
        active: __props.isScreenOpen,
        onClick: ($event) => _ctx.$emit("toggle-screen")
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const VPNavBar_vue_vue_type_style_index_0_scoped_a35e6f52_lang = "";
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavBar.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const VPNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-a35e6f52"]]);
const _sfc_main$P = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuLink",
  __ssrInlineRender: true,
  props: {
    text: null,
    link: null
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPLink, mergeProps({
        class: "VPNavScreenMenuLink",
        href: __props.link,
        onClick: unref(closeScreen)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPNavScreenMenuLink_vue_vue_type_style_index_0_scoped_b7098508_lang = "";
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuLink.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const VPNavScreenMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["__scopeId", "data-v-b7098508"]]);
const _sfc_main$O = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z"></path></svg>`);
}
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconPlus.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const VPIconPlus = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$N = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupLink",
  __ssrInlineRender: true,
  props: {
    text: null,
    link: null
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPLink, mergeProps({
        class: "VPNavScreenMenuGroupLink",
        href: __props.link,
        onClick: unref(closeScreen)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.text), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPNavScreenMenuGroupLink_vue_vue_type_style_index_0_scoped_7f173864_lang = "";
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroupLink.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const VPNavScreenMenuGroupLink = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["__scopeId", "data-v-7f173864"]]);
const _sfc_main$M = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupSection",
  __ssrInlineRender: true,
  props: {
    text: null,
    items: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavScreenMenuGroupSection" }, _attrs))} data-v-7478538b>`);
      if (__props.text) {
        _push(`<p class="title" data-v-7478538b>${ssrInterpolate(__props.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(__props.items, (item) => {
        _push(ssrRenderComponent(VPNavScreenMenuGroupLink, {
          key: item.text,
          text: item.text,
          link: item.link
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const VPNavScreenMenuGroupSection_vue_vue_type_style_index_0_scoped_7478538b_lang = "";
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroupSection.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const VPNavScreenMenuGroupSection = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__scopeId", "data-v-7478538b"]]);
const _sfc_main$L = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroup",
  __ssrInlineRender: true,
  props: {
    text: null,
    items: null
  },
  setup(__props) {
    const props = __props;
    const isOpen = ref(false);
    const groupId = computed(
      () => `NavScreenGroup-${props.text.replace(" ", "-").toLowerCase()}`
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavScreenMenuGroup", { open: isOpen.value }]
      }, _attrs))} data-v-5bc84358><button class="button"${ssrRenderAttr("aria-controls", unref(groupId))}${ssrRenderAttr("aria-expanded", isOpen.value)} data-v-5bc84358><span class="button-text" data-v-5bc84358>${ssrInterpolate(__props.text)}</span>`);
      _push(ssrRenderComponent(VPIconPlus, { class: "button-icon" }, null, _parent));
      _push(`</button><div${ssrRenderAttr("id", unref(groupId))} class="items" data-v-5bc84358><!--[-->`);
      ssrRenderList(__props.items, (item) => {
        _push(`<!--[-->`);
        if ("link" in item) {
          _push(`<div class="item" data-v-5bc84358>`);
          _push(ssrRenderComponent(VPNavScreenMenuGroupLink, {
            text: item.text,
            link: item.link
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<div class="group" data-v-5bc84358>`);
          _push(ssrRenderComponent(VPNavScreenMenuGroupSection, {
            text: item.text,
            items: item.items
          }, null, _parent));
          _push(`</div>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const VPNavScreenMenuGroup_vue_vue_type_style_index_0_scoped_5bc84358_lang = "";
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroup.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const VPNavScreenMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["__scopeId", "data-v-5bc84358"]]);
const _sfc_main$K = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).nav) {
        _push(`<nav${ssrRenderAttrs(mergeProps({ class: "VPNavScreenMenu" }, _attrs))}><!--[-->`);
        ssrRenderList(unref(theme2).nav, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPNavScreenMenuLink, {
              text: item.text,
              link: item.link
            }, null, _parent));
          } else {
            _push(ssrRenderComponent(VPNavScreenMenuGroup, {
              text: item.text || "",
              items: item.items
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenu.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const _sfc_main$J = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { site } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(site).appearance) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavScreenAppearance" }, _attrs))} data-v-7bc19822><p class="text" data-v-7bc19822>Appearance</p>`);
        _push(ssrRenderComponent(VPSwitchAppearance, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavScreenAppearance_vue_vue_type_style_index_0_scoped_7bc19822_lang = "";
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenAppearance.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const VPNavScreenAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["__scopeId", "data-v-7bc19822"]]);
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenTranslations",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).localeLinks) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["VPNavScreenTranslations", { open: isOpen.value }]
        }, _attrs))} data-v-6bfcad30><button class="title" data-v-6bfcad30>`);
        _push(ssrRenderComponent(VPIconLanguages, { class: "icon lang" }, null, _parent));
        _push(` ${ssrInterpolate(unref(theme2).localeLinks.text)} `);
        _push(ssrRenderComponent(VPIconChevronDown, { class: "icon chevron" }, null, _parent));
        _push(`</button><ul class="list" data-v-6bfcad30><!--[-->`);
        ssrRenderList(unref(theme2).localeLinks.items, (locale) => {
          _push(`<li class="item" data-v-6bfcad30><a class="link"${ssrRenderAttr("href", locale.link)} data-v-6bfcad30>${ssrInterpolate(locale.text)}</a></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavScreenTranslations_vue_vue_type_style_index_0_scoped_6bfcad30_lang = "";
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenTranslations.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const VPNavScreenTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["__scopeId", "data-v-6bfcad30"]]);
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).socialLinks) {
        _push(ssrRenderComponent(VPSocialLinks, mergeProps({
          class: "VPNavScreenSocialLinks",
          links: unref(theme2).socialLinks
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreenSocialLinks.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreen",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const screen = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.open) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "VPNavScreen",
          ref_key: "screen",
          ref: screen
        }, _attrs))} data-v-5486b9d0><div class="container" data-v-5486b9d0>`);
        ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push, _parent);
        _push(ssrRenderComponent(_sfc_main$K, { class: "menu" }, null, _parent));
        _push(ssrRenderComponent(VPNavScreenTranslations, { class: "translations" }, null, _parent));
        _push(ssrRenderComponent(VPNavScreenAppearance, { class: "appearance" }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$H, { class: "social-links" }, null, _parent));
        ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPNavScreen_vue_vue_type_style_index_0_scoped_5486b9d0_lang = "";
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNavScreen.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const VPNavScreen = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__scopeId", "data-v-5486b9d0"]]);
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "VPNav",
  __ssrInlineRender: true,
  setup(__props) {
    const { isScreenOpen, closeScreen, toggleScreen } = useNav();
    const { hasSidebar } = useSidebar();
    provide("close-screen", closeScreen);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["VPNav", { "no-sidebar": !unref(hasSidebar) }]
      }, _attrs))} data-v-a71a30f1>`);
      _push(ssrRenderComponent(VPNavBar, {
        "is-screen-open": unref(isScreenOpen),
        onToggleScreen: unref(toggleScreen)
      }, {
        "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(VPNavScreen, { open: unref(isScreenOpen) }, {
        "nav-screen-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
            ];
          }
        }),
        "nav-screen-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</header>`);
    };
  }
});
const VPNav_vue_vue_type_style_index_0_scoped_a71a30f1_lang = "";
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPNav.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const VPNav = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["__scopeId", "data-v-a71a30f1"]]);
const _sfc_main$E = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"></path><path d="M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"></path><path d="M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"></path><path d="M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"></path></svg>`);
}
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconAlignLeft.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const VPIconAlignLeft = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNav",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  emits: ["open-menu"],
  setup(__props) {
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(hasSidebar)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPLocalNav" }, _attrs))} data-v-aac27d5e><button class="menu"${ssrRenderAttr("aria-expanded", __props.open)} aria-controls="VPSidebarNav" data-v-aac27d5e>`);
        _push(ssrRenderComponent(VPIconAlignLeft, { class: "menu-icon" }, null, _parent));
        _push(`<span class="menu-text" data-v-aac27d5e>Menu</span></button><a class="top-link" href="#" data-v-aac27d5e> Return to top </a></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPLocalNav_vue_vue_type_style_index_0_scoped_aac27d5e_lang = "";
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPLocalNav.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const VPLocalNav = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__scopeId", "data-v-aac27d5e"]]);
const _sfc_main$C = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2z M20,19c0,0.6-0.4,1-1,1H5c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h14c0.6,0,1,0.4,1,1V19z"></path><path d="M16,11h-3V8c0-0.6-0.4-1-1-1s-1,0.4-1,1v3H8c-0.6,0-1,0.4-1,1s0.4,1,1,1h3v3c0,0.6,0.4,1,1,1s1-0.4,1-1v-3h3c0.6,0,1-0.4,1-1S16.6,11,16,11z"></path></svg>`);
}
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconPlusSquare.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const VPIconPlusSquare = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$B = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2zM20,19c0,0.6-0.4,1-1,1H5c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h14c0.6,0,1,0.4,1,1V19z"></path><path d="M16,11H8c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1S16.6,11,16,11z"></path></svg>`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconMinusSquare.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const VPIconMinusSquare = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarLink",
  __ssrInlineRender: true,
  props: {
    item: null,
    depth: { default: 1 }
  },
  setup(__props) {
    const { page, frontmatter } = useData();
    const maxDepth = computed(() => frontmatter.value.sidebarDepth || Infinity);
    const closeSideBar = inject("close-sidebar");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPSidebarLink = resolveComponent("VPSidebarLink", true);
      _push(ssrRenderComponent(VPLink, mergeProps({
        class: ["link", { active: unref(isActive)(unref(page).relativePath, __props.item.link), offset: __props.depth > 1 }],
        href: __props.item.link,
        onClick: unref(closeSideBar)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="${ssrRenderClass([{ light: __props.depth > 1 }, "link-text"])}" data-v-f7e544fc${_scopeId}>${ssrInterpolate(__props.item.text)}</span>`);
            if ("items" in __props.item && __props.depth < unref(maxDepth)) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.item.items, (child) => {
                _push2(ssrRenderComponent(_component_VPSidebarLink, {
                  item: child,
                  depth: __props.depth + 1
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("span", {
                class: ["link-text", { light: __props.depth > 1 }]
              }, toDisplayString(__props.item.text), 3),
              "items" in __props.item && __props.depth < unref(maxDepth) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(__props.item.items, (child) => {
                return openBlock(), createBlock(_component_VPSidebarLink, {
                  key: child.link,
                  item: child,
                  depth: __props.depth + 1
                }, null, 8, ["item", "depth"]);
              }), 128)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const VPSidebarLink_vue_vue_type_style_index_0_scoped_f7e544fc_lang = "";
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSidebarLink.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const VPSidebarLink = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-f7e544fc"]]);
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarGroup",
  __ssrInlineRender: true,
  props: {
    text: null,
    items: null,
    collapsible: { type: Boolean },
    collapsed: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const collapsed = ref(false);
    watchEffect(() => {
      collapsed.value = !!(props.collapsible && props.collapsed);
    });
    const { page } = useData();
    watchEffect(() => {
      if (props.items.some((item) => {
        return isActive(page.value.relativePath, item.link);
      })) {
        collapsed.value = false;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["VPSidebarGroup", { collapsible: __props.collapsible, collapsed: collapsed.value }]
      }, _attrs))} data-v-2976c796>`);
      if (__props.text) {
        _push(`<div class="title"${ssrRenderAttr("role", __props.collapsible ? "button" : void 0)} data-v-2976c796><h2 class="title-text" data-v-2976c796>${ssrInterpolate(__props.text)}</h2><div class="action" data-v-2976c796>`);
        _push(ssrRenderComponent(VPIconMinusSquare, { class: "icon minus" }, null, _parent));
        _push(ssrRenderComponent(VPIconPlusSquare, { class: "icon plus" }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="items" data-v-2976c796><!--[-->`);
      ssrRenderList(__props.items, (item) => {
        _push(ssrRenderComponent(VPSidebarLink, { item }, null, _parent));
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const VPSidebarGroup_vue_vue_type_style_index_0_scoped_2976c796_lang = "";
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSidebarGroup.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const VPSidebarGroup = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-2976c796"]]);
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "VPSidebar",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { sidebar, hasSidebar } = useSidebar();
    let navEl = ref(null);
    watchPostEffect(async () => {
      var _a;
      if (props.open) {
        await nextTick();
        (_a = navEl.value) == null ? void 0 : _a.focus();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(hasSidebar)) {
        _push(`<aside${ssrRenderAttrs(mergeProps({
          class: ["VPSidebar", { open: __props.open }],
          ref_key: "navEl",
          ref: navEl
        }, _attrs))} data-v-f332cb62><nav class="nav" id="VPSidebarNav" aria-labelledby="sidebar-aria-label" tabindex="-1" data-v-f332cb62><span class="visually-hidden" id="sidebar-aria-label" data-v-f332cb62> Sidebar Navigation </span><!--[-->`);
        ssrRenderList(unref(sidebar), (group) => {
          _push(`<div class="group" data-v-f332cb62>`);
          _push(ssrRenderComponent(VPSidebarGroup, {
            text: group.text,
            items: group.items,
            collapsible: group.collapsible,
            collapsed: group.collapsed
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></nav></aside>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPSidebar_vue_vue_type_style_index_0_scoped_f332cb62_lang = "";
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSidebar.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const VPSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-f332cb62"]]);
const _sfc_main$x = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  const _component_Content = resolveComponent("Content");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPPage" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Content, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPPage.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const VPPage = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "VPButton",
  __ssrInlineRender: true,
  props: {
    tag: null,
    size: null,
    theme: null,
    text: null,
    href: null
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      var _a, _b;
      return [
        (_a = props.size) != null ? _a : "medium",
        (_b = props.theme) != null ? _b : "brand"
      ];
    });
    const isExternal2 = computed(() => props.href && EXTERNAL_URL_RE.test(props.href));
    const component = computed(() => {
      if (props.tag) {
        return props.tag;
      }
      return props.href ? "a" : "button";
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(component)), mergeProps({
        class: ["VPButton", unref(classes)],
        href: __props.href ? unref(normalizeLink)(__props.href) : void 0,
        target: unref(isExternal2) ? "_blank" : void 0,
        rel: unref(isExternal2) ? "noreferrer" : void 0
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.text), 1)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const VPButton_vue_vue_type_style_index_0_scoped_53dbb8eb_lang = "";
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPButton.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const VPButton = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-53dbb8eb"]]);
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "VPHero",
  __ssrInlineRender: true,
  props: {
    name: null,
    text: null,
    tagline: null,
    image: null,
    actions: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPHero", { "has-image": __props.image }]
      }, _attrs))} data-v-923ba72e><div class="container" data-v-923ba72e><div class="main" data-v-923ba72e>`);
      if (__props.name) {
        _push(`<h1 class="name" data-v-923ba72e><span class="clip" data-v-923ba72e>${ssrInterpolate(__props.name)}</span></h1>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.text) {
        _push(`<p class="text" data-v-923ba72e>${ssrInterpolate(__props.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.tagline) {
        _push(`<p class="tagline" data-v-923ba72e>${ssrInterpolate(__props.tagline)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.actions) {
        _push(`<div class="actions" data-v-923ba72e><!--[-->`);
        ssrRenderList(__props.actions, (action) => {
          _push(`<div class="action" data-v-923ba72e>`);
          _push(ssrRenderComponent(VPButton, {
            tag: "a",
            size: "medium",
            theme: action.theme,
            text: action.text,
            href: action.link
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.image) {
        _push(`<div class="image" data-v-923ba72e><div class="image-container" data-v-923ba72e><div class="image-bg" data-v-923ba72e></div>`);
        _push(ssrRenderComponent(VPImage, {
          class: "image-src",
          image: __props.image
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const VPHero_vue_vue_type_style_index_0_scoped_923ba72e_lang = "";
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPHero.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const VPHero = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-923ba72e"]]);
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "VPHomeHero",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(fm).hero) {
        _push(ssrRenderComponent(VPHero, mergeProps({
          class: "VPHomeHero",
          name: unref(fm).hero.name,
          text: unref(fm).hero.text,
          tagline: unref(fm).hero.tagline,
          image: unref(fm).hero.image,
          actions: unref(fm).hero.actions
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPHomeHero.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "VPFeature",
  __ssrInlineRender: true,
  props: {
    icon: null,
    title: null,
    details: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "VPFeature" }, _attrs))} data-v-d99b2f77>`);
      if (__props.icon) {
        _push(`<div class="icon" data-v-d99b2f77>${ssrInterpolate(__props.icon)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h2 class="title" data-v-d99b2f77>${ssrInterpolate(__props.title)}</h2><p class="details" data-v-d99b2f77>${ssrInterpolate(__props.details)}</p></article>`);
    };
  }
});
const VPFeature_vue_vue_type_style_index_0_scoped_d99b2f77_lang = "";
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPFeature.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const VPFeature = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-d99b2f77"]]);
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "VPFeatures",
  __ssrInlineRender: true,
  props: {
    features: null
  },
  setup(__props) {
    const props = __props;
    const grid = computed(() => {
      const length = props.features.length;
      if (!length) {
        return;
      } else if (length === 2) {
        return "grid-2";
      } else if (length === 3) {
        return "grid-3";
      } else if (length % 3 === 0) {
        return "grid-6";
      } else if (length % 2 === 0) {
        return "grid-4";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.features) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPFeatures" }, _attrs))} data-v-6a6451ec><div class="container" data-v-6a6451ec><div class="items" data-v-6a6451ec><!--[-->`);
        ssrRenderList(__props.features, (feature) => {
          _push(`<div class="${ssrRenderClass([[unref(grid)], "item"])}" data-v-6a6451ec>`);
          _push(ssrRenderComponent(VPFeature, {
            icon: feature.icon,
            title: feature.title,
            details: feature.details
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPFeatures_vue_vue_type_style_index_0_scoped_6a6451ec_lang = "";
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPFeatures.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const VPFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-6a6451ec"]]);
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "VPHomeFeatures",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(fm).features) {
        _push(ssrRenderComponent(VPFeatures, mergeProps({
          class: "VPHomeFeatures",
          features: unref(fm).features
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPHomeFeatures.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "VPHome",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPHome" }, _attrs))} data-v-1db23833>`);
      ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$u, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$r, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_Content, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const VPHome_vue_vue_type_style_index_0_scoped_1db23833_lang = "";
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPHome.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const VPHome = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-1db23833"]]);
function useAside() {
  const { hasSidebar } = useSidebar();
  const is960 = useMediaQuery("(min-width: 960px)");
  const is1280 = useMediaQuery("(min-width: 1280px)");
  const isAsideEnabled = computed(() => {
    if (!is1280.value && !is960.value) {
      return false;
    }
    return hasSidebar.value ? is1280.value : is960.value;
  });
  return {
    isAsideEnabled
  };
}
const PAGE_OFFSET = 56;
function useOutline() {
  const { page } = useData();
  const hasOutline = computed(() => {
    return page.value.headers.length > 0;
  });
  return {
    hasOutline
  };
}
function useActiveAnchor(container, marker) {
  const { isAsideEnabled } = useAside();
  const onScroll = throttleAndDebounce(setActiveLink, 100);
  let prevActiveLink = null;
  onMounted(() => {
    requestAnimationFrame(setActiveLink);
    window.addEventListener("scroll", onScroll);
  });
  onUpdated(() => {
    activateLink(location.hash);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
  function setActiveLink() {
    if (!isAsideEnabled.value) {
      return;
    }
    const links = [].slice.call(container.value.querySelectorAll(".outline-link"));
    const anchors = [].slice.call(document.querySelectorAll(".content .header-anchor")).filter((anchor) => {
      return links.some((link2) => {
        return link2.hash === anchor.hash && anchor.offsetParent !== null;
      });
    });
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;
    const offsetHeight = document.body.offsetHeight;
    const isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1;
    if (anchors.length && isBottom) {
      activateLink(anchors[anchors.length - 1].hash);
      return;
    }
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
      const nextAnchor = anchors[i + 1];
      const [isActive2, hash] = isAnchorActive(i, anchor, nextAnchor);
      if (isActive2) {
        activateLink(hash);
        return;
      }
    }
  }
  function activateLink(hash) {
    if (prevActiveLink) {
      prevActiveLink.classList.remove("active");
    }
    if (hash !== null) {
      prevActiveLink = container.value.querySelector(`a[href="${decodeURIComponent(hash)}"]`);
    }
    const activeLink = prevActiveLink;
    if (activeLink) {
      activeLink.classList.add("active");
      marker.value.style.top = activeLink.offsetTop + 33 + "px";
      marker.value.style.opacity = "1";
    } else {
      marker.value.style.top = "33px";
      marker.value.style.opacity = "0";
    }
  }
}
function getAnchorTop(anchor) {
  return anchor.parentElement.offsetTop - PAGE_OFFSET - 15;
}
function isAnchorActive(index2, anchor, nextAnchor) {
  const scrollTop = window.scrollY;
  if (index2 === 0 && scrollTop === 0) {
    return [true, null];
  }
  if (scrollTop < getAnchorTop(anchor)) {
    return [false, null];
  }
  if (!nextAnchor || scrollTop < getAnchorTop(nextAnchor)) {
    return [true, anchor.hash];
  }
  return [false, null];
}
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideOutline",
  __ssrInlineRender: true,
  setup(__props) {
    const { page, frontmatter, theme: theme2 } = useData();
    const { hasOutline } = useOutline();
    const container = ref();
    const marker = ref();
    useActiveAnchor(container, marker);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPDocAsideOutline", { "has-outline": unref(hasOutline) }],
        ref_key: "container",
        ref: container
      }, _attrs))} data-v-a3de185c><div class="content" data-v-a3de185c><div class="outline-marker" data-v-a3de185c></div><div class="outline-title" data-v-a3de185c>${ssrInterpolate(unref(theme2).outlineTitle || "On this page")}</div><nav aria-labelledby="doc-outline-aria-label" data-v-a3de185c><span class="visually-hidden" id="doc-outline-aria-label" data-v-a3de185c> Table of Contents for current page </span><ul class="root" data-v-a3de185c><!--[-->`);
      ssrRenderList(unref(page).headers, ({ title, link: link2, children }) => {
        _push(`<li data-v-a3de185c><a class="outline-link"${ssrRenderAttr("href", link2)} data-v-a3de185c>${ssrInterpolate(title)}</a>`);
        if (children && unref(frontmatter).outline === "deep") {
          _push(`<ul data-v-a3de185c><!--[-->`);
          ssrRenderList(children, ({ title: title2, link: link22 }) => {
            _push(`<li data-v-a3de185c><a class="outline-link nested"${ssrRenderAttr("href", link22)} data-v-a3de185c>${ssrInterpolate(title2)}</a></li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav></div></div>`);
    };
  }
});
const VPDocAsideOutline_vue_vue_type_style_index_0_scoped_a3de185c_lang = "";
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDocAsideOutline.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const VPDocAsideOutline = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-a3de185c"]]);
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideCarbonAds",
  __ssrInlineRender: true,
  setup(__props) {
    const VPCarbonAds = () => null;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAsideCarbonAds" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(VPCarbonAds), null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDocAsideCarbonAds.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "VPDocAside",
  __ssrInlineRender: true,
  setup(__props) {
    const { page, theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAside" }, _attrs))} data-v-aea49c31>`);
      ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push, _parent);
      if (unref(page).headers.length) {
        _push(ssrRenderComponent(VPDocAsideOutline, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push, _parent);
      _push(`<div class="spacer" data-v-aea49c31></div>`);
      ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push, _parent);
      if (unref(theme2).carbonAds) {
        _push(ssrRenderComponent(_sfc_main$o, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const VPDocAside_vue_vue_type_style_index_0_scoped_aea49c31_lang = "";
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDocAside.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const VPDocAside = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-aea49c31"]]);
function useEditLink() {
  const { theme: theme2, page } = useData();
  return computed(() => {
    const { text = "Edit this page", pattern } = theme2.value.editLink || {};
    const { relativePath } = page.value;
    const url = pattern.replace(/:path/g, relativePath);
    return { url, text };
  });
}
function usePrevNext() {
  const { page, theme: theme2, frontmatter } = useData();
  return computed(() => {
    const sidebar = getSidebar(theme2.value.sidebar, page.value.relativePath);
    const candidates = getFlatSideBarLinks(sidebar);
    const index2 = candidates.findIndex((link2) => {
      return isActive(page.value.relativePath, link2.link);
    });
    return {
      prev: frontmatter.value.prev ? { ...candidates[index2 - 1], text: frontmatter.value.prev } : candidates[index2 - 1],
      next: frontmatter.value.next ? { ...candidates[index2 + 1], text: frontmatter.value.next } : candidates[index2 + 1]
    };
  });
}
const _sfc_main$m = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M18,23H4c-1.7,0-3-1.3-3-3V6c0-1.7,1.3-3,3-3h7c0.6,0,1,0.4,1,1s-0.4,1-1,1H4C3.4,5,3,5.4,3,6v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1v-7c0-0.6,0.4-1,1-1s1,0.4,1,1v7C21,21.7,19.7,23,18,23z"></path><path d="M8,17c-0.3,0-0.5-0.1-0.7-0.3C7,16.5,6.9,16.1,7,15.8l1-4c0-0.2,0.1-0.3,0.3-0.5l9.5-9.5c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.5,9.5c-0.1,0.1-0.3,0.2-0.5,0.3l-4,1C8.2,17,8.1,17,8,17zM9.9,12.5l-0.5,2.1l2.1-0.5l9.3-9.3c0.4-0.4,0.4-1.1,0-1.6c-0.4-0.4-1.2-0.4-1.6,0l0,0L9.9,12.5z M18.5,2.5L18.5,2.5L18.5,2.5z"></path></svg>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconEdit.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const VPIconEdit = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooterLastUpdated",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, page } = useData();
    const date = computed(() => new Date(page.value.lastUpdated));
    const isoDatetime = computed(() => date.value.toISOString());
    const datetime = ref("");
    onMounted(() => {
      watchEffect(() => {
        datetime.value = date.value.toLocaleString(window.navigator.language);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<p${ssrRenderAttrs(mergeProps({ class: "VPLastUpdated" }, _attrs))} data-v-f7d51a9c>${ssrInterpolate((_a = unref(theme2).lastUpdatedText) != null ? _a : "Last updated")}: <time${ssrRenderAttr("datatime", unref(isoDatetime))} data-v-f7d51a9c>${ssrInterpolate(datetime.value)}</time></p>`);
    };
  }
});
const VPDocFooterLastUpdated_vue_vue_type_style_index_0_scoped_f7d51a9c_lang = "";
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDocFooterLastUpdated.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const VPDocFooterLastUpdated = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-f7d51a9c"]]);
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, page, frontmatter } = useData();
    const editLink = useEditLink();
    const control = usePrevNext();
    const hasEditLink = computed(() => {
      return theme2.value.editLink && frontmatter.value.editLink !== false;
    });
    const hasLastUpdated = computed(() => {
      return page.value.lastUpdated && frontmatter.value.lastUpdated !== false;
    });
    const showFooter = computed(() => {
      return hasEditLink.value || hasLastUpdated.value || control.value.prev || control.value.next;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      if (unref(showFooter)) {
        _push(`<footer${ssrRenderAttrs(mergeProps({ class: "VPDocFooter" }, _attrs))} data-v-a54a85bd>`);
        if (unref(hasEditLink) || unref(hasLastUpdated)) {
          _push(`<div class="edit-info" data-v-a54a85bd>`);
          if (unref(hasEditLink)) {
            _push(`<div class="edit-link" data-v-a54a85bd>`);
            _push(ssrRenderComponent(VPLink, {
              class: "edit-link-button",
              href: unref(editLink).url,
              "no-icon": true
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(VPIconEdit, { class: "edit-link-icon" }, null, _parent2, _scopeId));
                  _push2(` ${ssrInterpolate(unref(editLink).text)}`);
                } else {
                  return [
                    createVNode(VPIconEdit, { class: "edit-link-icon" }),
                    createTextVNode(" " + toDisplayString(unref(editLink).text), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(hasLastUpdated)) {
            _push(`<div class="last-updated" data-v-a54a85bd>`);
            _push(ssrRenderComponent(VPDocFooterLastUpdated, null, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(control).prev || unref(control).next) {
          _push(`<div class="prev-next" data-v-a54a85bd><div class="pager" data-v-a54a85bd>`);
          if (unref(control).prev) {
            _push(`<a class="pager-link prev"${ssrRenderAttr("href", unref(normalizeLink)(unref(control).prev.link))} data-v-a54a85bd><span class="desc" data-v-a54a85bd>${ssrInterpolate((_b = (_a = unref(theme2).docFooter) == null ? void 0 : _a.prev) != null ? _b : "Previous page")}</span><span class="title" data-v-a54a85bd>${ssrInterpolate(unref(control).prev.text)}</span></a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="${ssrRenderClass([{ "has-prev": unref(control).prev }, "pager"])}" data-v-a54a85bd>`);
          if (unref(control).next) {
            _push(`<a class="pager-link next"${ssrRenderAttr("href", unref(normalizeLink)(unref(control).next.link))} data-v-a54a85bd><span class="desc" data-v-a54a85bd>${ssrInterpolate((_d = (_c = unref(theme2).docFooter) == null ? void 0 : _c.next) != null ? _d : "Next page")}</span><span class="title" data-v-a54a85bd>${ssrInterpolate(unref(control).next.text)}</span></a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</footer>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPDocFooter_vue_vue_type_style_index_0_scoped_a54a85bd_lang = "";
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDocFooter.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const VPDocFooter = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-a54a85bd"]]);
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "VPDoc",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { hasSidebar, hasAside } = useSidebar();
    const pageName = computed(
      () => route.path.replace(/[./]+/g, "_").replace(/_html$/, "")
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPDoc", { "has-sidebar": unref(hasSidebar), "has-aside": unref(hasAside) }]
      }, _attrs))} data-v-f0af2311><div class="container" data-v-f0af2311>`);
      if (unref(hasAside)) {
        _push(`<div class="aside" data-v-f0af2311><div class="aside-curtain" data-v-f0af2311></div><div class="aside-container" data-v-f0af2311><div class="aside-content" data-v-f0af2311>`);
        _push(ssrRenderComponent(VPDocAside, null, {
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="content" data-v-f0af2311><div class="content-container" data-v-f0af2311>`);
      ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push, _parent);
      _push(`<main class="main" data-v-f0af2311>`);
      _push(ssrRenderComponent(_component_Content, {
        class: ["vp-doc", unref(pageName)]
      }, null, _parent));
      _push(`</main>`);
      ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPDocFooter, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push, _parent);
      _push(`</div></div></div></div>`);
    };
  }
});
const VPDoc_vue_vue_type_style_index_0_scoped_f0af2311_lang = "";
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDoc.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const VPDoc = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-f0af2311"]]);
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "VPContent",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    const NotFound2 = inject("NotFound");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPContent", {
          "has-sidebar": unref(hasSidebar),
          "is-home": unref(frontmatter).layout === "home"
        }],
        id: "VPContent"
      }, _attrs))} data-v-c95df128>`);
      if (unref(route).component === unref(NotFound2)) {
        _push(ssrRenderComponent(unref(NotFound2), null, null, _parent));
      } else if (unref(frontmatter).layout === "page") {
        _push(ssrRenderComponent(VPPage, null, null, _parent));
      } else if (unref(frontmatter).layout === "home") {
        _push(ssrRenderComponent(VPHome, null, {
          "home-hero-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
              ];
            }
          }),
          "home-hero-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
              ];
            }
          }),
          "home-features-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
              ];
            }
          }),
          "home-features-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(ssrRenderComponent(VPDoc, null, {
          "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
              ];
            }
          }),
          "doc-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
              ];
            }
          }),
          "doc-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
              ];
            }
          }),
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
});
const VPContent_vue_vue_type_style_index_0_scoped_c95df128_lang = "";
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPContent.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const VPContent = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-c95df128"]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "VPFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).footer) {
        _push(`<footer${ssrRenderAttrs(mergeProps({
          class: ["VPFooter", { "has-sidebar": unref(hasSidebar) }]
        }, _attrs))} data-v-9f24cc86><div class="container" data-v-9f24cc86>`);
        if (unref(theme2).footer.message) {
          _push(`<p class="message" data-v-9f24cc86>${unref(theme2).footer.message}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(theme2).footer.copyright) {
          _push(`<p class="copyright" data-v-9f24cc86>${unref(theme2).footer.copyright}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></footer>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const VPFooter_vue_vue_type_style_index_0_scoped_9f24cc86_lang = "";
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPFooter.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const VPFooter = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-9f24cc86"]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      isOpen: isSidebarOpen,
      open: openSidebar,
      close: closeSidebar
    } = useSidebar();
    const route = useRoute();
    watch(() => route.path, closeSidebar);
    useCloseSidebarOnEscape(isSidebarOpen, closeSidebar);
    provide("close-sidebar", closeSidebar);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "Layout" }, _attrs))} data-v-ca9ccb7e>`);
      ssrRenderSlot(_ctx.$slots, "layout-top", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPSkipLink, null, null, _parent));
      _push(ssrRenderComponent(VPBackdrop, {
        class: "backdrop",
        show: unref(isSidebarOpen),
        onClick: unref(closeSidebar)
      }, null, _parent));
      _push(ssrRenderComponent(VPNav, null, {
        "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
            ];
          }
        }),
        "nav-screen-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
            ];
          }
        }),
        "nav-screen-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(VPLocalNav, {
        open: unref(isSidebarOpen),
        onOpenMenu: unref(openSidebar)
      }, null, _parent));
      _push(ssrRenderComponent(VPSidebar, { open: unref(isSidebarOpen) }, null, _parent));
      _push(ssrRenderComponent(VPContent, null, {
        "home-hero-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
            ];
          }
        }),
        "home-hero-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
            ];
          }
        }),
        "home-features-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
            ];
          }
        }),
        "home-features-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
            ];
          }
        }),
        "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
            ];
          }
        }),
        "doc-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
            ];
          }
        }),
        "doc-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
            ];
          }
        }),
        "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
            ];
          }
        }),
        "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
            ];
          }
        }),
        "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
            ];
          }
        }),
        "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
            ];
          }
        }),
        "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
            ];
          }
        }),
        "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(VPFooter, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "layout-bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const Layout_vue_vue_type_style_index_0_scoped_ca9ccb7e_lang = "";
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/Layout.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-ca9ccb7e"]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  __ssrInlineRender: true,
  setup(__props) {
    const { site } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "NotFound" }, _attrs))} data-v-95656537><p class="code" data-v-95656537>404</p><h1 class="title" data-v-95656537>PAGE NOT FOUND</h1><div class="divider" data-v-95656537></div><blockquote class="quote" data-v-95656537> But if you don&#39;t change your direction, and if you keep looking, you may end up where you are heading. </blockquote><div class="action" data-v-95656537><a class="link"${ssrRenderAttr("href", unref(site).base)} aria-label="go to home" data-v-95656537> Take me home </a></div></div>`);
    };
  }
});
const NotFound_vue_vue_type_style_index_0_scoped_95656537_lang = "";
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/NotFound.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const NotFound$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-95656537"]]);
const _sfc_main$e = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12,22.2c-0.3,0-0.5-0.1-0.7-0.3l-8.8-8.8c-2.5-2.5-2.5-6.7,0-9.2c2.5-2.5,6.7-2.5,9.2,0L12,4.3l0.4-0.4c0,0,0,0,0,0C13.6,2.7,15.2,2,16.9,2c0,0,0,0,0,0c1.7,0,3.4,0.7,4.6,1.9l0,0c1.2,1.2,1.9,2.9,1.9,4.6c0,1.7-0.7,3.4-1.9,4.6l-8.8,8.8C12.5,22.1,12.3,22.2,12,22.2zM7,4C5.9,4,4.7,4.4,3.9,5.3c-1.8,1.8-1.8,4.6,0,6.4l8.1,8.1l8.1-8.1c0.9-0.9,1.3-2,1.3-3.2c0-1.2-0.5-2.3-1.3-3.2l0,0C19.3,4.5,18.2,4,17,4c0,0,0,0,0,0c-1.2,0-2.3,0.5-3.2,1.3c0,0,0,0,0,0l-1.1,1.1c-0.4,0.4-1,0.4-1.4,0l-1.1-1.1C9.4,4.4,8.2,4,7,4z"></path></svg>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/icons/VPIconHeart.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const VPIconHeart = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$4]]);
const GridSettings = {
  xmini: [[0, 2]],
  mini: [],
  small: [
    [920, 6],
    [768, 5],
    [640, 4],
    [480, 3],
    [0, 2]
  ],
  medium: [
    [960, 5],
    [832, 4],
    [640, 3],
    [480, 2]
  ],
  big: [
    [832, 3],
    [640, 2]
  ]
};
function useSponsorsGrid({ el, size = "medium" }) {
  const onResize = throttleAndDebounce(manage, 100);
  onMounted(() => {
    manage();
    window.addEventListener("resize", onResize);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", onResize);
  });
  function manage() {
    adjustSlots(el.value, size);
  }
}
function adjustSlots(el, size) {
  const tsize = el.children.length;
  const asize = el.querySelectorAll(".vp-sponsor-grid-item:not(.empty)").length;
  const grid = setGrid(el, size, asize);
  manageSlots(el, grid, tsize, asize);
}
function setGrid(el, size, items) {
  const settings = GridSettings[size];
  const screen = window.innerWidth;
  let grid = 1;
  settings.some(([breakpoint, value]) => {
    if (screen >= breakpoint) {
      grid = items < value ? items : value;
      return true;
    }
  });
  setGridData(el, grid);
  return grid;
}
function setGridData(el, value) {
  el.dataset.vpGrid = String(value);
}
function manageSlots(el, grid, tsize, asize) {
  const diff = tsize - asize;
  const rem = asize % grid;
  const drem = rem === 0 ? rem : grid - rem;
  neutralizeSlots(el, drem - diff);
}
function neutralizeSlots(el, count) {
  if (count === 0) {
    return;
  }
  count > 0 ? addSlots(el, count) : removeSlots(el, count * -1);
}
function addSlots(el, count) {
  for (let i = 0; i < count; i++) {
    const slot = document.createElement("div");
    slot.classList.add("vp-sponsor-grid-item", "empty");
    el.append(slot);
  }
}
function removeSlots(el, count) {
  for (let i = 0; i < count; i++) {
    el.removeChild(el.lastElementChild);
  }
}
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "VPSponsorsGrid",
  __ssrInlineRender: true,
  props: {
    size: null,
    data: null
  },
  setup(__props) {
    const props = __props;
    const el = ref(null);
    useSponsorsGrid({ el, size: props.size });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPSponsorsGrid vp-sponsor-grid", [(_a = props.size) != null ? _a : "medium"]],
        ref_key: "el",
        ref: el
      }, _attrs))}><!--[-->`);
      ssrRenderList(__props.data, (sponsor) => {
        _push(`<div class="vp-sponsor-grid-item"><a class="vp-sponsor-grid-link"${ssrRenderAttr("href", sponsor.url)} target="_blank" rel="sponsored noopener"><article class="vp-sponsor-grid-box"><h4 class="visually-hidden">${ssrInterpolate(sponsor.name)}</h4><img class="vp-sponsor-grid-image"${ssrRenderAttr("src", sponsor.img)}${ssrRenderAttr("alt", sponsor.name)}></article></a></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSponsorsGrid.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "VPSponsors",
  __ssrInlineRender: true,
  props: {
    mode: null,
    tier: null,
    size: null,
    data: null
  },
  setup(__props) {
    const props = __props;
    const sponsors = computed(() => {
      const isSponsors = props.data.some((s) => {
        return "items" in s;
      });
      if (isSponsors) {
        return props.data;
      }
      return [
        { tier: props.tier, size: props.size, items: props.data }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPSponsors vp-sponsor", [(_a = __props.mode) != null ? _a : "normal"]]
      }, _attrs))}><!--[-->`);
      ssrRenderList(unref(sponsors), (sponsor, index2) => {
        _push(`<section class="vp-sponsor-section">`);
        if (sponsor.tier) {
          _push(`<h3 class="vp-sponsor-tier">${ssrInterpolate(sponsor.tier)}</h3>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_sfc_main$d, {
          size: sponsor.size,
          data: sponsor.items
        }, null, _parent));
        _push(`</section>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPSponsors.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "VPHomeSponsors",
  __ssrInlineRender: true,
  props: {
    message: null,
    actionText: null,
    actionLink: null,
    data: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "VPHomeSponsors" }, _attrs))} data-v-247c88bc><div class="container" data-v-247c88bc><div class="header" data-v-247c88bc><div class="love" data-v-247c88bc>`);
      _push(ssrRenderComponent(VPIconHeart, { class: "icon" }, null, _parent));
      _push(`</div>`);
      if (__props.message) {
        _push(`<h2 class="message" data-v-247c88bc>${ssrInterpolate(__props.message)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="sponsors" data-v-247c88bc>`);
      _push(ssrRenderComponent(_sfc_main$c, { data: __props.data }, null, _parent));
      _push(`</div>`);
      if (__props.actionLink) {
        _push(`<div class="action" data-v-247c88bc>`);
        _push(ssrRenderComponent(VPButton, {
          theme: "sponsor",
          text: (_a = __props.actionText) != null ? _a : "Become a sponsor",
          href: __props.actionLink
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const VPHomeSponsors_vue_vue_type_style_index_0_scoped_247c88bc_lang = "";
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPHomeSponsors.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideSponsors",
  __ssrInlineRender: true,
  props: {
    tier: null,
    size: null,
    data: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAsideSponsors" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$c, {
        mode: "aside",
        tier: __props.tier,
        size: __props.size,
        data: __props.data
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPDocAsideSponsors.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const VPTeamPage_vue_vue_type_style_index_0_scoped_10b00018_lang = "";
const _sfc_main$9 = {};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPTeamPage.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const VPTeamPageTitle_vue_vue_type_style_index_0_scoped_bf2cbdac_lang = "";
const _sfc_main$8 = {};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPTeamPageTitle.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const VPTeamPageSection_vue_vue_type_style_index_0_scoped_be0f7349_lang = "";
const _sfc_main$7 = {};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPTeamPageSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "VPTeamMembersItem",
  __ssrInlineRender: true,
  props: {
    size: null,
    member: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: ["VPTeamMembersItem", [(_a = __props.size) != null ? _a : "medium"]]
      }, _attrs))} data-v-89ac5bf1><div class="profile" data-v-89ac5bf1><figure class="avatar" data-v-89ac5bf1><img class="avatar-img"${ssrRenderAttr("src", __props.member.avatar)}${ssrRenderAttr("alt", __props.member.name)} data-v-89ac5bf1></figure><div class="data" data-v-89ac5bf1><h1 class="name" data-v-89ac5bf1>${ssrInterpolate(__props.member.name)}</h1>`);
      if (__props.member.title || __props.member.org) {
        _push(`<p class="affiliation" data-v-89ac5bf1>`);
        if (__props.member.title) {
          _push(`<span class="title" data-v-89ac5bf1>${ssrInterpolate(__props.member.title)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.member.title && __props.member.org) {
          _push(`<span class="at" data-v-89ac5bf1> @ </span>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.member.org) {
          _push(ssrRenderComponent(VPLink, {
            class: ["org", { link: __props.member.orgLink }],
            href: __props.member.orgLink,
            "no-icon": ""
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(__props.member.org)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(__props.member.org), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.member.desc) {
        _push(`<p class="desc" data-v-89ac5bf1>${ssrInterpolate(__props.member.desc)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.member.links) {
        _push(`<div class="links" data-v-89ac5bf1>`);
        _push(ssrRenderComponent(VPSocialLinks, {
          links: __props.member.links
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (__props.member.sponsor) {
        _push(`<div class="sp" data-v-89ac5bf1>`);
        _push(ssrRenderComponent(VPLink, {
          class: "sp-link",
          href: __props.member.sponsor,
          "no-icon": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VPIconHeart, { class: "sp-icon" }, null, _parent2, _scopeId));
              _push2(` Sponsor `);
            } else {
              return [
                createVNode(VPIconHeart, { class: "sp-icon" }),
                createTextVNode(" Sponsor ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</article>`);
    };
  }
});
const VPTeamMembersItem_vue_vue_type_style_index_0_scoped_89ac5bf1_lang = "";
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPTeamMembersItem.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const VPTeamMembersItem = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-89ac5bf1"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "VPTeamMembers",
  __ssrInlineRender: true,
  props: {
    size: null,
    members: null
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      var _a;
      return [
        (_a = props.size) != null ? _a : "medium",
        `count-${props.members.length}`
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPTeamMembers", unref(classes)]
      }, _attrs))} data-v-04685dce><div class="container" data-v-04685dce><!--[-->`);
      ssrRenderList(__props.members, (member) => {
        _push(`<div class="item" data-v-04685dce>`);
        _push(ssrRenderComponent(VPTeamMembersItem, {
          size: __props.size,
          member
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const VPTeamMembers_vue_vue_type_style_index_0_scoped_04685dce_lang = "";
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/vitepress/dist/client/theme-default/components/VPTeamMembers.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const theme = {
  Layout,
  NotFound: NotFound$1
};
const index = "";
const waveDiffuse = {
  mounted(el, { value = "#ccc" }) {
    el.style.cssText = `
      overflow: hidden;
    `;
    const style2 = `
      position: absolute;
      background-color: ${value};
      transform: translate(-50%, -50%);
      pointer-events: none;
      border-radius: 50%;
      width: 0;
      height: 0;
      transition: all 1s linear;
    `;
    el.addEventListener("mousedown", function(e) {
      const v = e.target;
      const c = document.createElement("span");
      c.style.cssText = style2;
      const x = e.clientX - v.getBoundingClientRect().left;
      const y = e.clientY - v.getBoundingClientRect().top;
      c.style.left = x + "px";
      c.style.top = y + "px";
      this.appendChild(c);
      const width = v.offsetWidth;
      const height = v.offsetHeight;
      const size = width > height ? width : height;
      c.style.width = `${size * 5}px`;
      c.style.height = `${size * 5}px`;
      function fn() {
        c.style.transition = "all 0.675s ease-out";
        c.style.opacity = "0";
        setTimeout(() => {
          c.remove();
        }, 675);
      }
      el.addEventListener("mouseup", fn);
      el.addEventListener("mouseleave", fn);
    });
  }
};
const textHoverColor = {
  mounted(el, { value = "black" }) {
    const mask = document.createElement("div");
    const line = document.createElement("div");
    console.log();
    mask.innerHTML = el.innerHTML;
    mask.style.cssText = `
      z-index: 9;
      position: absolute;
      top: 0;
      left: 0;
      color: transparent;
      background-color: ${value};
      transition: all 0.35s;
      -webkit-background-clip: text;
      clip-path: circle(75% at 50% 50%);
    `;
    const line_height = el.offsetHeight / 20;
    line.style.cssText = `
      z-index: 9;
      position: absolute;
      width: 0%;
      height: ${line_height}px;
      bottom: 0;
      color: transparent;
      background-color: #2980b9;
      transition: all 0.35s;
      left: 50%;
      transform: translateX(-50%);
      border-radius: ${line_height}px;
    `;
    window.addEventListener("resize", () => {
      const line_height2 = el.offsetHeight / 20;
      line.style.height = line_height2 + "px";
      line.style.borderRadius = line_height2 + "px";
    });
    el.appendChild(mask);
    el.appendChild(line);
    el.addEventListener("mouseenter", () => {
      mask.style.clipPath = "circle(0% at 50% 50%)";
      line.style.width = "100%";
    });
    el.addEventListener("mouseleave", () => {
      mask.style.clipPath = "circle(75% at 50% 50%)";
      line.style.width = "0%";
    });
  }
};
const typewriterSingle = {
  mounted(el) {
    let lib = el;
    let cursor_timer = null;
    function cursor() {
      clearInterval(cursor_timer);
      cursor_timer = setInterval(() => {
        lib.classList.toggle("cursor");
      }, 500);
    }
    let say = lib.innerHTML;
    function again() {
      lib.innerHTML = "";
      let timer;
      let says = say;
      let num = 0, text = "";
      lib.innerHTML = "";
      timer = setInterval(() => {
        clearInterval(cursor_timer);
        lib.classList.add("cursor");
        text += say[num];
        lib.innerHTML = text;
        num++;
        if (num === say.length) {
          cursor();
          clearInterval(timer);
          setTimeout(() => {
            clearInterval(cursor_timer);
            let delText_timer = setInterval(() => {
              says = says.substr(0, says.length - 1);
              lib.innerHTML = says;
              if (says.length <= 0) {
                clearInterval(delText_timer);
                cursor();
                setTimeout(() => {
                  again();
                }, 1e3);
              }
            }, 100);
          }, 2e3);
        }
      }, 100);
    }
    again();
  }
};
const typewriterMultiple = {
  mounted(el) {
    let say = el.innerHTML;
    el.innerHTML = "";
    setTimeout(() => {
      let timer = null;
      let num = 0, text = "";
      fn();
      function fn() {
        timer = setInterval(() => {
          text += say[num];
          el.innerHTML = text;
          if ("\uFF0C\u3001\u3002\uFF1F\uFF01".includes(say[num])) {
            clearInterval(timer);
            setTimeout(
              () => {
                fn();
              },
              "\uFF0C" === say[num] ? 750 : "\u3001" === say[num] ? 250 : "\u3002" === say[num] ? 1500 : "\uFF1F\uFF01".includes(say[num]) ? 1e3 : 750
            );
          }
          num++;
          if (num == say.length) {
            clearInterval(timer);
          }
        }, 100);
      }
    }, 750);
  }
};
let particle_timer = null;
function $random(min = 0, max = 1, num = 0) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(num));
}
const particle = {
  mounted(el, { value }) {
    const box = el;
    let { color = "#cfb45c", size = 10 } = value || {};
    el.style.transition = "all 0.25s";
    const style2 = `
      position: absolute;
      background-color: ${color};
      pointer-events: none;
      width: ${size}px;
      height: ${size}px;
      bottom:0;
      box-shadow: 0 0 10px 0 ${color};
    `;
    const box_width = box.offsetWidth;
    const box_height = box.offsetHeight;
    particle_timer = setInterval(() => {
      const left = $random(0, box_width - size), top = $random(box_height / 2, box_height), scale = $random(0.25, 0.75, 1), time = $random(0.5, 2, 1), c = document.createElement("span");
      c.style.cssText = style2;
      c.style.left = left + "px";
      c.style.transform = `scale(${scale})`;
      c.style.transition = `all ${time}s linear`;
      box.appendChild(c);
      setTimeout(() => {
        c.style.bottom = top / 1.5 + "px";
        setTimeout(() => {
          c.style.transition = `all ${time / 4}s linear`;
          c.style.opacity = "0";
        }, time * 1e3 - time * 1e3 / 4);
        setTimeout(() => {
          c.remove();
        }, time * 1e3);
      }, 50);
    }, 50);
  },
  beforeUnmount() {
    clearInterval(particle_timer);
  }
};
const snowFalling = {
  mounted(el) {
    function $random2(min, max, num = 0) {
      return parseFloat((Math.random() * (max - min) + min).toFixed(num));
    }
    const lib = el;
    let particle2 = [];
    for (let i = 0; i < document.documentElement.offsetWidth / 15; i++) {
      particle2.push('<div class="particle"></div>');
    }
    function update() {
      lib.innerHTML = "";
      lib.innerHTML = particle2.join(" ");
      let left, size;
      const particles = lib.querySelectorAll(".particle");
      particles.forEach((item) => {
        size = $random2(100, 200);
        item.style.cssText = `
          --LibSnowFalling-left: 0;
          position: absolute;
          top: 0;
          left: 0;
          width: ${document.documentElement.offsetWidth / size}px;
          height: ${document.documentElement.offsetWidth / size}px;
          animation: LibSnowFalling var(--LibSnowFalling-time) infinite linear;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          pointer-events: none;
          background-color: #fff;
          border-radius: 50%;
        `;
        left = $random2(0, document.documentElement.offsetWidth);
        item.style.transform = `translateX(${left}px) translateY(-200%)`;
        item.style.setProperty("--LibSnowFalling-left", left + "px");
        item.style.setProperty("--LibSnowFalling-time", $random2(3, 5, 1) + "s");
        item.style.animationDelay = $random2(0, 10, 1) + "s";
      });
    }
    window.addEventListener("resize", update);
    update();
  }
};
const parallaxVideo = {
  mounted(el, { value = 2 }) {
    el.style.cssText = `
      position: absolute;
      pointer-events: none;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
      transition: all 0.25s ease-out;
    `;
    const sensitivity = [
      [15, 1.1],
      [10, 1.225],
      [5, 1.35]
    ];
    const multiple = sensitivity[value][0];
    function transformElement(x, y) {
      let box = el.getBoundingClientRect();
      let calcY = (box.height / 2 - (y - box.y)) / multiple;
      let calcX = (box.width / 2 - (x - box.x)) / multiple;
      el.style.transform = `translateY(${calcY}px) translateX(${calcX}px) scale(${sensitivity[value][1]})`;
    }
    el.parentElement.addEventListener("mousemove", (e) => {
      requestAnimationFrame(function() {
        transformElement(e.clientX, e.clientY);
      });
    });
  }
};
const parallaxImg = {
  mounted(el) {
    el.style.cssText = `
      position: absolute;
      pointer-events: none;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
      transition: all 0.25s ease-out;
    `;
    const size = [
      [15, 1.1],
      [10, 1.225],
      [5, 1.35]
    ];
    const multiple = size[1][0];
    function transformElement(x, y) {
      let box = el.getBoundingClientRect();
      let calcY = (box.height / 2 - (y - box.y)) / multiple;
      let calcX = (box.width / 2 - (x - box.x)) / multiple;
      el.style.transform = `translateY(${calcY}px) translateX(${calcX}px) scale(${size[1][1]})`;
    }
    el.parentElement.addEventListener("mousemove", (e) => {
      requestAnimationFrame(function() {
        transformElement(e.clientX, e.clientY);
      });
    });
  }
};
const sweepLight = {
  mounted(el, binding) {
    const { auto = true, time = 1 } = binding.value || {};
    setTimeout(() => {
      const a = auto !== false;
      const light = document.createElement("div");
      el.style.position = "relative";
      light.style.cssText = `
      position: absolute;
      top: 0px;
      left: 0px;
      width: ${el.offsetWidth / 3}px;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.5);
      transform: skewX(45deg) translateX(${el.offsetWidth * 1.5}px);
      transition: all ${time}s;
      filter: blur(5px)
    `;
      el.appendChild(light);
      if (a) {
        light.style.transform = `skewX(45deg) translateX(${-el.offsetWidth * 1.5}px)`;
      } else {
        el.addEventListener("mouseenter", () => {
          light.style.transform = `skewX(45deg) translateX(${-el.offsetWidth * 0.75}px)`;
        });
        el.addEventListener("mouseleave", () => {
          light.style.transform = `skewX(45deg) translateX(${el.offsetWidth * 1.5}px)`;
        });
      }
    });
  }
};
const downDrag = {
  mounted(el) {
    el.style.cursor = "move";
    let x = 0, y = 0, startX = 0, startY = 0, moveX = 0, moveY = 0;
    el.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      x = e.pageX;
      y = e.pageY;
      startX = el.offsetLeft;
      startY = el.offsetTop;
      window.addEventListener("mousemove", fn);
      function fn(e2) {
        requestAnimationFrame(function() {
          moveX = e2.pageX - x;
          moveY = e2.pageY - y;
          el.style.left = `${moveX + startX}px`;
          el.style.top = `${moveY + startY}px`;
        });
      }
      window.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", fn);
      });
    });
  }
};
const maskGradient = {
  mounted(el, binding) {
    const { color = "rgba(0, 0, 0, 0.75)", rotate = "0deg", num1 = "0%", num2 = "50%" } = binding.value || {};
    const mask = document.createElement("div");
    mask.style.cssText = `
    position: absolute;
    inset:0;
    background-image: linear-gradient(${rotate}, ${color} ${num1}, transparent ${num2});
    pointer-events: none;
    `;
    el.appendChild(mask);
  }
};
const tableLayout = {
  mounted(el, { value }) {
    el.style.cssText = `
      border-collapse: collapse;
    `;
    [...el.querySelectorAll("td")].forEach((item, index2) => {
      item.style.wordBreak = "break-all";
      item.style.textAlign = index2 % 2 ? value[1] : value[0];
    });
  }
};
const dragFile = {
  mounted(el, { value }) {
    el.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    el.addEventListener("drop", (e) => {
      e.preventDefault();
      let file = [...e.dataTransfer.items].map((item) => {
        if (item.kind === "file") {
          return item.getAsFile();
        }
      });
      value(file);
    });
  }
};
const viewImg = {
  mounted(el) {
    el.addEventListener("click", (e) => {
      new Lyb(e.target);
    });
    const svg = {
      CLOSE: `<svg t="1662135922951" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2662"><path d="M1022.583467 127.803733 894.779733 0 511.291733 383.4624 127.8464 0 0 127.803733 383.496533 511.274667 0 894.737067 127.8464 1022.5408 511.291733 639.0784 894.779733 1022.5408 1022.583467 894.737067 639.138133 511.274667Z" p-id="2663" fill="#ffffff"></path></svg>`,
      CLOCKWISE: `<svg t="1662135824052" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1399"><path d="M482.773333 66.517333l148.181334 151.168a21.333333 21.333333 0 0 1 0 29.866667l-147.84 150.826667a21.333333 21.333333 0 0 1-28.16 2.090666l-2.346667-2.090666-27.050667-27.605334a21.333333 21.333333 0 0 1 0-29.866666l69.888-71.338667a304.64 304.64 0 1 0 318.421334 352.682667l1.024-6.826667c0.170667-1.408 0.426667-3.285333 0.64-5.632a21.333333 21.333333 0 0 1 22.314666-19.114667l42.666667 2.261334a21.333333 21.333333 0 0 1 20.224 22.4l-0.085333 1.024-1.194667 10.496A389.973333 389.973333 0 1 1 484.821333 184.746667l-59.306666-60.458667a21.333333 21.333333 0 0 1 0-29.866667l27.093333-27.605333a21.333333 21.333333 0 0 1 30.165333-0.298667z" p-id="1400" fill="#ffffff"></path></svg>`,
      COUNTER: `<svg t="1662135840330" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1590"><path d="M541.226667 66.517333L393.045333 217.685333a21.333333 21.333333 0 0 0 0 29.866667l147.84 150.826667a21.333333 21.333333 0 0 0 28.16 2.090666l2.346667-2.090666 27.050667-27.605334a21.333333 21.333333 0 0 0 0-29.866666l-69.888-71.338667a304.64 304.64 0 1 1-318.421334 352.682667l-1.024-6.826667a176.554667 176.554667 0 0 1-0.64-5.632 21.333333 21.333333 0 0 0-22.314666-19.114667l-42.666667 2.261334a21.333333 21.333333 0 0 0-20.224 22.4l0.085333 1.024 1.194667 10.496A389.973333 389.973333 0 1 0 539.178667 184.746667l59.306666-60.458667a21.333333 21.333333 0 0 0 0-29.866667l-27.093333-27.605333a21.333333 21.333333 0 0 0-30.165333-0.298667z" p-id="1591" fill="#ffffff"></path></svg>`
    };
    class Lyb {
      constructor(el2) {
        __publicField(this, "x", 0);
        __publicField(this, "y", 0);
        __publicField(this, "size", 1);
        __publicField(this, "rotate", 0);
        __publicField(this, "status", 0);
        __publicField(this, "transform", "");
        __publicField(this, "origin", [0, 0]);
        __publicField(this, "position", [0, 0]);
        __publicField(this, "pic");
        __publicField(this, "tool");
        __publicField(this, "mask");
        __publicField(this, "boxDom");
        __publicField(this, "counter");
        __publicField(this, "closeBtn");
        __publicField(this, "clonedBox");
        __publicField(this, "clockwise");
        document.body.style.overflow = "hidden";
        this.boxDom = el2;
        this.createdMask();
        this.createPic();
        this.createBtn();
        this.createCloseBtn();
        if (this.boxDom.tagName !== "IMG")
          return;
        this.initImg();
        this.addEventListener();
      }
      createdMask() {
        this.mask = document.createElement("div");
        this.mask.style.cssText = ` display: none; position: fixed; inset: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.75); transition: all 0.25s; opacity: 0; z-index: 999; `;
        document.body.appendChild(this.mask);
      }
      createPic() {
        this.pic = document.createElement("div");
        this.pic.style.cssText = ` position: fixed; inset: 0; width: 100%; height: 100%; transition: all 0.25s; z-index: 1000; display: none; transform: scale(0.75); opacity: 0; `;
        document.body.appendChild(this.pic);
      }
      createBtn() {
        this.tool = document.createElement("div");
        this.clockwise = document.createElement("div");
        this.counter = document.createElement("div");
        this.tool.style.cssText = ` position: fixed; display: none; justify-content: space-between; width: 110px; left: 50%; bottom: 30px; transform: translateX(-50%); background-color: #606266; border-radius: 50px; z-index: 1001; padding: 10px 23px; opacity: 0; transition: all 0.25s; `;
        const base2 = `width: 23px; height: 23px; `;
        this.clockwise.style.cssText = base2;
        this.counter.style.cssText = base2;
        this.clockwise.innerHTML = svg.CLOCKWISE;
        this.counter.innerHTML = svg.COUNTER;
        this.tool.appendChild(this.counter);
        this.tool.appendChild(this.clockwise);
        document.body.appendChild(this.tool);
        this.clockwise.addEventListener("click", (e) => {
          e.stopPropagation();
          this.setPosition("clockwise");
        });
        this.counter.addEventListener("click", (e) => {
          e.stopPropagation();
          this.setPosition("counter");
        });
      }
      createCloseBtn() {
        this.closeBtn = document.createElement("div");
        this.closeBtn.innerHTML = svg.CLOSE;
        this.closeBtn.style.cssText = ` position: fixed; display: none; top: 60px; right: 60px; width: 40px; height: 40px; z-index: 1001; padding: 11px; background-color: #606266; transition: all 0.25s; opacity: 0; border-radius: 50%; `;
        document.body.appendChild(this.closeBtn);
      }
      initImg() {
        this.clonedBox = this.boxDom.cloneNode(true);
        this.clonedBox.style.cssText = ` position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); max-width: 100%; max-height: 100%; object-fit: contain; transition: all 0.25s; `;
        this.pic.appendChild(this.clonedBox);
        this.pic.style.display = "block";
        this.mask.style.display = "block";
        this.tool.style.display = "flex";
        this.closeBtn.style.display = "block";
        setTimeout(() => {
          this.mask.style.opacity = "1";
          this.pic.style.opacity = "1";
          this.pic.style.transform = "scale(1)";
          this.tool.style.opacity = "1";
          this.closeBtn.style.opacity = "1";
          this.origin = [this.clonedBox.offsetWidth / 2, this.clonedBox.offsetHeight / 2];
        });
      }
      setPosition(name) {
        const obj = {
          clockwise() {
            this.rotate += 90;
            this.status++;
          },
          counter() {
            this.rotate -= 90;
            this.status--;
          }
        };
        obj[name].call(this);
        this.setStyle();
      }
      setStyle() {
        this.clonedBox.style.transform = `translate(calc(-50% + ${this.x}px), calc(-50% + ${this.y}px)) rotate(${this.rotate}deg) scale(${this.size})`;
        this.clonedBox.style.transformOrigin = `${this.origin[0]}px ${this.origin[1]}px`;
      }
      addEventListener() {
        this.pic.addEventListener("mousewheel", this.wheel.bind(this));
        this.clonedBox.addEventListener("click", (e) => {
          e.stopPropagation();
        });
        this.closeBtn.addEventListener("click", this.close.bind(this));
        this.pic.addEventListener("click", this.close.bind(this));
        const _this = this;
        let startX = 0;
        let startY = 0;
        let moveX = 0;
        let moveY = 0;
        let originX = 0;
        let originY = 0;
        function fn(e) {
          const status = _this.status;
          if (status % 4 === 0) {
            _this.x = moveX + (e.pageX - startX) / _this.size;
            _this.y = moveY + (e.pageY - startY) / _this.size;
            _this.origin[0] = originX - (e.pageX - startX) / _this.size;
            _this.origin[1] = originY - (e.pageY - startY) / _this.size;
          }
          if (status % 4 === 1 || status % 4 === -3) {
            _this.x = moveX + (e.pageY - startY) / _this.size;
            _this.y = moveY - (e.pageX - startX) / _this.size;
            _this.origin[0] = originX - (e.pageY - startY) / _this.size;
            _this.origin[1] = originY + (e.pageX - startX) / _this.size;
          }
          if (status % 4 === 2 || status % 4 === -2) {
            _this.x = moveX - (e.pageX - startX) / _this.size;
            _this.y = moveY - (e.pageY - startY) / _this.size;
            _this.origin[0] = originX + (e.pageX - startX) / _this.size;
            _this.origin[1] = originY + (e.pageY - startY) / _this.size;
          }
          if (status % 4 === 3 || status % 4 === -1) {
            _this.x = moveX - (e.pageY - startY) / _this.size;
            _this.y = moveY + (e.pageX - startX) / _this.size;
            _this.origin[0] = originX + (e.pageY - startY) / _this.size;
            _this.origin[1] = originY - (e.pageX - startX) / _this.size;
          }
          _this.setStyle();
        }
        this.clonedBox.addEventListener("mousedown", (e) => {
          e.preventDefault();
          startX = e.pageX;
          startY = e.pageY;
          moveX = this.x;
          moveY = this.y;
          originX = this.origin[0];
          originY = this.origin[1];
          this.clonedBox.style.transition = "all 0s";
          this.clonedBox.addEventListener("mousemove", fn);
        });
        this.clonedBox.addEventListener("mouseup", () => {
          this.clonedBox.style.transition = "all 0.25s";
          this.clonedBox.removeEventListener("mousemove", fn);
        });
      }
      wheel(e) {
        if (e.deltaY > 0) {
          this.size /= 1.25;
          if (this.size < 0.1)
            this.size = 0.1;
        } else {
          this.size *= 1.25;
        }
        this.setStyle();
      }
      close() {
        document.body.style.overflow = "auto";
        this.pic.removeEventListener("mousewheel", this.wheel.bind(this));
        this.mask.style.opacity = "0";
        this.tool.style.opacity = "0";
        this.closeBtn.style.opacity = "0";
        this.pic.style.opacity = "0";
        this.pic.style.transform = "scale(0.75)";
        setTimeout(() => {
          this.mask.style.display = "none";
          this.tool.style.display = "none";
          this.pic.style.display = "none";
          this.pic.innerHTML = "";
          this.closeBtn.style.display = "none";
        }, 250);
      }
    }
  }
};
const directives = {
  waveDiffuse,
  textHoverColor,
  typewriterSingle,
  typewriterMultiple,
  particle,
  snowFalling,
  parallaxVideo,
  parallaxImg,
  sweepLight,
  downDrag,
  maskGradient,
  tableLayout,
  dragFile,
  viewImg
};
const ContainerBox_vue_vue_type_style_index_0_scoped_b2ed4c46_lang = "";
const _sfc_main$4 = {
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "ContainerBox" }, _attrs))} data-v-b2ed4c46><div class="title" data-v-b2ed4c46>${ssrInterpolate($props.title)}</div><div class="desc" data-v-b2ed4c46>`);
  ssrRenderSlot(_ctx.$slots, "desc", {}, null, _push, _parent);
  _push(`</div><div class="code" data-v-b2ed4c46>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/ContainerBox.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ContainerBox = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-b2ed4c46"]]);
const LibSvg_vue_vue_type_style_index_0_scoped_29311d3e_lang = "";
const _sfc_main$3 = {
  name: "LibSvg",
  props: {
    svg: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#000"
    },
    enterColor: {
      type: String,
      default: ""
    },
    downColor: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "25px"
    },
    top: {
      type: String,
      default: "0px"
    },
    right: {
      type: String,
      default: "0px"
    },
    bottom: {
      type: String,
      default: "0px"
    },
    left: {
      type: String,
      default: "0px"
    },
    downFn: {
      type: Function,
      default() {
      }
    },
    upFn: {
      type: Function,
      default() {
      }
    }
  },
  methods: {
    enter(el) {
      el.style.color = this.enterColor || this.color;
    },
    leave(el) {
      el.style.color = this.color;
      this.upFn(el);
      if (el.tagName === "svg") {
        this.upFn(el.parentNode);
      } else {
        this.upFn(el.parentNode.parentNode);
      }
    },
    down(el) {
      if (el.tagName === "svg") {
        el.parentNode.style.color = this.downColor || this.enterColor || this.color;
        this.downFn(el.parentNode);
      } else {
        el.parentNode.parentNode.style.color = this.downColor || this.enterColor || this.color;
        this.downFn(el.parentNode.parentNode);
      }
    },
    up(el) {
      if (el.tagName === "svg") {
        el.parentNode.style.color = this.enterColor || this.color;
        this.upFn(el.parentNode);
      } else {
        el.parentNode.parentNode.style.color = this.enterColor || this.color;
        this.upFn(el.parentNode.parentNode);
      }
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps({
    class: "LibSvg",
    style: {
      width: $props.size,
      height: $props.size,
      margin: `${$props.top} ${$props.right} ${$props.bottom} ${$props.left}`,
      color: $props.color
    },
    title: $props.title
  }, _attrs))} data-v-29311d3e>${$props.svg}</span>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/LibSvg.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const LibSvg = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-29311d3e"]]);
const icon = {
  DOWNUP: `<svg t="1658721099474" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="786"><path d="M513.25652853 794.45184022c-13.94570481 0-27.30915832-5.61367656-37.07115154-15.57565327L26.3266805 319.86960335c-20.06730256-20.47257727-19.73458702-53.33701025 0.73975948-73.40254357 20.47257727-20.06376237 53.33878121-19.73458702 73.40254358 0.73975945l412.78754497 421.18151532L926.04407525 247.20681923c20.06376237-20.47611747 52.92642615-20.81060222 73.40254356-0.73975945 20.47611747 20.06730256 20.80706201 52.92996632 0.73975945 73.40254357L550.32768007 778.87618695C540.56568687 788.83816369 527.20400431 794.45184022 513.25652853 794.45184022z" fill="currentColor" p-id="787"></path></svg>`
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ShowCode",
  __ssrInlineRender: true,
  props: {
    iskey: { type: Boolean, default: false }
  },
  setup(__props) {
    const show = ref(true);
    const text = ref("\u67E5\u770B");
    const lib = ref();
    const code = ref();
    watch(show, (v) => {
      if (!v) {
        if (document.documentElement.clientHeight - lib.value.getBoundingClientRect().y - code.value.scrollHeight < -500) {
          lib.value.classList.add("fixed");
        }
      } else {
        lib.value.classList.remove("fixed");
      }
    });
    onMounted(() => {
      code.value.style.height = code.value.scrollHeight + 10 + "px";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ShowCode" }, _attrs))} data-v-0c472e58><div class="${ssrRenderClass([{ showCode: show.value }, "code"])}" data-v-0c472e58>`);
      ssrRenderSlot(_ctx.$slots, "codes", {}, null, _push, _parent);
      _push(`</div><div class="show" data-v-0c472e58>`);
      _push(ssrRenderComponent(LibSvg, {
        class: ["LibSvg", { iconRotate: !show.value }],
        svg: unref(icon).DOWNUP,
        color: "var(--font-color)",
        size: "16px",
        right: "10px"
      }, null, _parent));
      _push(`<span data-v-0c472e58>${ssrInterpolate(text.value)}${ssrInterpolate(__props.iskey ? "\u5173\u952E\u4EE3\u7801" : "\u6E90\u7801")}</span></div></div>`);
    };
  }
});
const ShowCode_vue_vue_type_style_index_0_scoped_0c472e58_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/ShowCode.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ShowCode = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-0c472e58"]]);
const Logo_vue_vue_type_style_index_0_scoped_ea7474b7_lang = "";
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _directive_sweepLight = resolveDirective("sweepLight");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "Logo" }, _attrs))} data-v-ea7474b7><div${ssrRenderAttrs(mergeProps({ class: "lib" }, ssrGetDirectiveProps(_ctx, _directive_sweepLight, { time: 3 })))} data-v-ea7474b7><img src="https://lengyibai.gitee.io/img-bed/img/lib.png" alt="\u52A0\u8F7D\u5931\u8D25" data-v-ea7474b7></div><div class="name" data-v-ea7474b7>Lib</div><div class="desc" data-v-ea7474b7>\u8F7B\u91CF\u3001PC\u7AEF Vue \u81EA\u7528\u7EC4\u4EF6\u5E93</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/Logo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Logo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-ea7474b7"]]);
const Home_vue_vue_type_style_index_0_scoped_f77491c5_lang = "";
const _sfc_main = {
  name: "Home",
  data() {
    this.icon = `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>`;
    return {};
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "Home" }, _attrs))} data-v-f77491c5><h2 data-v-f77491c5>\u70ED\u95E8\u7EC4\u4EF6\u63A8\u8350</h2><a href="/doc/Components/statics/TriggerRay" data-v-f77491c5><h3 data-v-f77491c5>\u653E\u5C04\u70B9\u51FB\u6548\u679C<span data-v-f77491c5>${_ctx.icon}</span></h3></a><a href="/doc/Components/dynamics/Parallax" data-v-f77491c5><h3 data-v-f77491c5>\u89C6\u5DEE\u52A8\u753B<span data-v-f77491c5>${_ctx.icon}</span></h3></a><a href="/doc/Components/dynamics/ScrollInto" data-v-f77491c5><h3 data-v-f77491c5>\u6EDA\u52A8\u5165\u573A\u52A8\u753B<span data-v-f77491c5>${_ctx.icon}</span></h3></a><a href="/doc/Components/dynamics/Waterfall" data-v-f77491c5><h3 data-v-f77491c5>\u7011\u5E03\u6D41\u5E03\u5C40<span data-v-f77491c5>${_ctx.icon}</span></h3></a><h2 data-v-f77491c5>\u70ED\u95E8\u6307\u4EE4\u63A8\u8350</h2><a href="/doc/Directives/WaveDiffuse" data-v-f77491c5><h3 data-v-f77491c5>\u6C34\u6CE2\u52A8\u753B<span data-v-f77491c5>${_ctx.icon}</span></h3></a><a href="/doc/Directives/TypewriterMultiple" data-v-f77491c5><h3 data-v-f77491c5>\u6253\u5B57\u673A(\u591A\u884C)<span data-v-f77491c5>${_ctx.icon}</span></h3></a><a href="/doc/Directives/ViewImg" data-v-f77491c5><h3 data-v-f77491c5>\u67E5\u770B\u56FE\u7247<span data-v-f77491c5>${_ctx.icon}</span></h3></a><h2 data-v-f77491c5>\u70ED\u95E8\u51FD\u6570\u63A8\u8350</h2><a href="/doc/Functions/element/Parabolic" data-v-f77491c5><h3 data-v-f77491c5>\u629B\u7269\u7EBF\u5143\u7D20<span data-v-f77491c5>${_ctx.icon}</span></h3></a><a href="/doc/Functions/element/ScrollParallax" data-v-f77491c5><h3 data-v-f77491c5>\u6EDA\u52A8\u89C6\u5DEE\u52A8\u753B<span data-v-f77491c5>${_ctx.icon}</span></h3></a><a href="/doc/Functions/element/ScrollFollow" data-v-f77491c5><h3 data-v-f77491c5>\u6EDA\u52A8\u8DDF\u968F\u52A8\u753B<span data-v-f77491c5>${_ctx.icon}</span></h3></a><a href="/doc/Functions/custom/imageOptimizer" data-v-f77491c5><h3 data-v-f77491c5>\u56FE\u7247\u538B\u7F29<span data-v-f77491c5>${_ctx.icon}</span></h3></a><a href="/doc/Functions/custom/objToExc" data-v-f77491c5><h3 data-v-f77491c5>\u5BF9\u8C61\u8F6CExcel<span data-v-f77491c5>${_ctx.icon}</span></h3></a><a href="/doc/Functions/custom/search" data-v-f77491c5><h3 data-v-f77491c5>\u641C\u7D22(\u652F\u6301\u62FC\u97F3)<span data-v-f77491c5>${_ctx.icon}</span></h3></a><a href="/doc/Functions/custom/typeSort" data-v-f77491c5><h3 data-v-f77491c5>\u6392\u5E8F<span data-v-f77491c5>${_ctx.icon}</span></h3></a><a href="/doc/Functions/custom/fmtTime" data-v-f77491c5><h3 data-v-f77491c5>\u65E5\u671F\u683C\u5F0F\u5316<span data-v-f77491c5>${_ctx.icon}</span></h3></a><a href="/doc/Functions/custom/getCountTime" data-v-f77491c5><h3 data-v-f77491c5>\u5012\u8BA1\u65F6\u6216\u8BB0\u5F55\u5DF2\u8FC7\u53BB\u65F6\u95F4<span data-v-f77491c5>${_ctx.icon}</span></h3></a></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f77491c5"]]);
const components = {
  ContainerBox,
  ShowCode,
  Logo,
  Home
};
const Theme = {
  ...theme,
  enhanceApp({ app }) {
    Object.keys(components).forEach((key) => {
      app.component(key, components[key]);
    });
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key]);
    });
  }
};
function useUpdateHead(route, siteDataByRouteRef) {
  let managedHeadTags = [];
  let isFirstUpdate = true;
  const updateHeadTags = (newTags) => {
    if (isFirstUpdate) {
      isFirstUpdate = false;
      return;
    }
    managedHeadTags.forEach((el) => document.head.removeChild(el));
    managedHeadTags = [];
    newTags.forEach((headConfig) => {
      const el = createHeadElement(headConfig);
      document.head.appendChild(el);
      managedHeadTags.push(el);
    });
  };
  watchEffect(() => {
    const pageData = route.data;
    const siteData2 = siteDataByRouteRef.value;
    const pageDescription = pageData && pageData.description;
    const frontmatterHead = pageData && pageData.frontmatter.head || [];
    document.title = createTitle(siteData2, pageData);
    document.querySelector(`meta[name=description]`).setAttribute("content", pageDescription || siteData2.description);
    updateHeadTags(mergeHead(siteData2.head, filterOutHeadDescription(frontmatterHead)));
  });
}
function createHeadElement([tag, attrs, innerHTML]) {
  const el = document.createElement(tag);
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  if (innerHTML) {
    el.innerHTML = innerHTML;
  }
  return el;
}
function isMetaDescription(headConfig) {
  return headConfig[0] === "meta" && headConfig[1] && headConfig[1].name === "description";
}
function filterOutHeadDescription(head) {
  return head.filter((h2) => !isMetaDescription(h2));
}
const hasFetched = /* @__PURE__ */ new Set();
const createLink = () => document.createElement("link");
const viaDOM = (url) => {
  const link2 = createLink();
  link2.rel = `prefetch`;
  link2.href = url;
  document.head.appendChild(link2);
};
const viaXHR = (url) => {
  const req = new XMLHttpRequest();
  req.open("GET", url, req.withCredentials = true);
  req.send();
};
let link;
const doFetch = inBrowser$1 && (link = createLink()) && link.relList && link.relList.supports && link.relList.supports("prefetch") ? viaDOM : viaXHR;
function usePrefetch() {
  if (!inBrowser$1) {
    return;
  }
  if (!window.IntersectionObserver) {
    return;
  }
  let conn;
  if ((conn = navigator.connection) && (conn.saveData || /2g/.test(conn.effectiveType))) {
    return;
  }
  const rIC = window.requestIdleCallback || setTimeout;
  let observer = null;
  const observeLinks = () => {
    if (observer) {
      observer.disconnect();
    }
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link2 = entry.target;
          observer.unobserve(link2);
          const { pathname } = link2;
          if (!hasFetched.has(pathname)) {
            hasFetched.add(pathname);
            const pageChunkPath = pathToFile(pathname);
            doFetch(pageChunkPath);
          }
        }
      });
    });
    rIC(() => {
      document.querySelectorAll("#app a").forEach((link2) => {
        const { target, hostname, pathname } = link2;
        const extMatch = pathname.match(/\.\w+$/);
        if (extMatch && extMatch[0] !== ".html") {
          return;
        }
        if (target !== `_blank` && hostname === location.hostname) {
          if (pathname !== location.pathname) {
            observer.observe(link2);
          } else {
            hasFetched.add(pathname);
          }
        }
      });
    });
  };
  onMounted(observeLinks);
  const route = useRoute();
  watch(() => route.path, observeLinks);
  onUnmounted(() => {
    observer && observer.disconnect();
  });
}
const ClientOnly = defineComponent({
  setup(_, { slots }) {
    const show = ref(false);
    onMounted(() => {
      show.value = true;
    });
    return () => show.value && slots.default ? slots.default() : null;
  }
});
function useCopyCode() {
  if (inBrowser$1) {
    window.addEventListener("click", (e) => {
      var _a;
      const el = e.target;
      if (el.matches('div[class*="language-"] > button.copy')) {
        const parent = el.parentElement;
        const sibling = (_a = el.nextElementSibling) == null ? void 0 : _a.nextElementSibling;
        if (!parent || !sibling) {
          return;
        }
        const isShell = /language-(shellscript|shell|bash|sh|zsh)/.test(parent.classList.toString());
        let { innerText: text = "" } = sibling;
        if (isShell) {
          text = text.replace(/^ *(\$|>) /gm, "");
        }
        copyToClipboard(text).then(() => {
          el.classList.add("copied");
          setTimeout(() => {
            el.classList.remove("copied");
            el.blur();
          }, 2e3);
        });
      }
    });
  }
}
async function copyToClipboard(text) {
  try {
    return navigator.clipboard.writeText(text);
  } catch {
    const element = document.createElement("textarea");
    const previouslyFocusedElement = document.activeElement;
    element.value = text;
    element.setAttribute("readonly", "");
    element.style.contain = "strict";
    element.style.position = "absolute";
    element.style.left = "-9999px";
    element.style.fontSize = "12pt";
    const selection = document.getSelection();
    const originalRange = selection ? selection.rangeCount > 0 && selection.getRangeAt(0) : null;
    document.body.appendChild(element);
    element.select();
    element.selectionStart = 0;
    element.selectionEnd = text.length;
    document.execCommand("copy");
    document.body.removeChild(element);
    if (originalRange) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    }
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }
}
const NotFound = Theme.NotFound || (() => "404 Not Found");
const VitePressApp = defineComponent({
  name: "VitePressApp",
  setup() {
    const { site } = useData();
    onMounted(() => {
      watch(() => site.value.lang, (lang) => {
        document.documentElement.lang = lang;
      }, { immediate: true });
    });
    {
      usePrefetch();
    }
    useCopyCode();
    if (Theme.setup)
      Theme.setup();
    return () => h(Theme.Layout);
  }
});
function createApp() {
  const router = newRouter();
  const app = newApp();
  app.provide(RouterSymbol, router);
  const data = initData(router.route);
  app.provide(dataSymbol, data);
  app.provide("NotFound", NotFound);
  app.component("Content", Content);
  app.component("ClientOnly", ClientOnly);
  Object.defineProperty(app.config.globalProperties, "$frontmatter", {
    get() {
      return data.frontmatter.value;
    }
  });
  if (Theme.enhanceApp) {
    Theme.enhanceApp({
      app,
      router,
      siteData: siteDataRef
    });
  }
  return { app, router, data };
}
function newApp() {
  return createSSRApp(VitePressApp);
}
function newRouter() {
  let isInitialPageLoad = inBrowser$1;
  let initialPath;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path);
    if (isInitialPageLoad) {
      initialPath = pageFilePath;
    }
    if (isInitialPageLoad || initialPath === pageFilePath) {
      pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js");
    }
    if (inBrowser$1) {
      isInitialPageLoad = false;
    }
    return import(
      /*@vite-ignore*/
      pageFilePath
    );
  }, NotFound);
}
if (inBrowser$1) {
  const { app, router, data } = createApp();
  router.go().then(() => {
    useUpdateHead(router.route, data.site);
    app.mount("#app");
  });
}
async function render(path) {
  const { app, router } = createApp();
  await router.go(path);
  return renderToString(app);
}
export {
  render
};
