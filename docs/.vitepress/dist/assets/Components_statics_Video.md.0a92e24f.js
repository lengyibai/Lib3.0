import{d as S,r as u,C as Y,a as h,c as g,f as e,t as D,n as C,x as $,D as _,u as P,e as k,v as M,_ as R,z as L,o as Z,b as v,w as b,q,T,h as E,i as m}from"./app.eabe4ce1.js";const ee="/lib3.0/assets/icon.483b3032.svg",le={class:"LibRange"},te={key:0,class:"sliderValue"},se={class:"field"},ae=["src"],oe=["value","min","max","step"],ne=S({__name:"index",props:{min:{default:0},max:{default:1},modelValue:{default:0},text:{default:""},color:{default:"#3498db"},size:{default:20},showDot:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!1},icon:{default:ee},showNum:{type:Boolean,default:!0},step:{default:1}},emits:["update:modelValue"],setup(s,{emit:a}){const i=s,r=u(!1),c=u(0),d=Y(()=>{let p=i.modelValue-i.min,o=i.max-i.min;return`calc(${p/(o/100)}% + ${(i.size-(i.showDot?0:25))*(o/2-p)/o}px)`}),f=p=>{const o=Number(p.target.value);r.value=!0,a("update:modelValue",Number(o)),c.value=o/i.max};return(p,o)=>(h(),g("div",le,[s.showNum?(h(),g("div",te,[e("span",{class:C({showNum:r.value}),style:$({left:_(d)})},D(s.text||s.modelValue),7)])):P("",!0),e("div",se,[e("div",{class:"bar",style:$({width:_(d),backgroundColor:s.color})},[k(e("img",{src:s.icon,style:$({width:s.size+"px",height:s.size+"px"})},null,12,ae),[[M,s.showIcon&&s.showDot]]),k(e("span",{style:$({width:s.size+"px",height:s.size+"px",backgroundColor:s.color})},null,4),[[M,s.showDot&&!s.showIcon]])],4),e("input",{value:s.modelValue,onInput:f,onMouseup:o[0]||(o[0]=y=>r.value=!1),type:"range",min:s.min,max:s.max,step:s.step},null,40,oe)])]))}});const A=R(ne,[["__scopeId","data-v-a3abd14d"]]),ue="/lib3.0/assets/play.ca41ffe0.svg",ie="/lib3.0/assets/pause.30ff1ff8.svg",re="/lib3.0/assets/volume_disable.c27594a7.svg",ce="/lib3.0/assets/volume.60de8b2e.svg",de="/lib3.0/assets/full_screen_exit.b28efc8b.svg",ve="/lib3.0/assets/full_sreen.400a72e3.svg",me=["src","muted"],fe={class:"bar",ref:"bar"},pe={class:"left"},_e={key:0,class:"time"},he={key:1,class:"time"},be={class:"center"},ye=["src"],ge={class:"right"},xe=["src"],we={class:"volume-box",ref:"volumeBox"},$e={class:"box"},De=["src"],Fe=S({__name:"index",props:{url:{default:""}},setup(s){const a=u(),i=u(null),r=u(!1),c=u(!1),d=u(!0),f=u(!1),p=u(!1),o=u(0),y=u(1),w=u(!1),x=u(!1),F=u(!1),O=(()=>{let l=0;return(t=()=>{},n=800)=>{l&&clearTimeout(l),l=setTimeout(t,n)}})(),U=()=>{O(()=>{r.value||(x.value=w.value)},500)};L(o,l=>{!r||(a.value.currentTime=l*a.value.duration)}),L(y,l=>{a.value.volume=l}),Z(()=>{let l=null;l=setInterval(()=>{var t;(t=a.value)!=null&&t.readyState&&(p.value=!0,clearInterval(l))},1e3)});const V=l=>{let t=Math.floor(l/3600)>=10?Math.floor(l/3600):`0${Math.floor(l/3600)}`;l-=3600*t;let n=Math.floor(l/60)>=10?Math.floor(l/60):`0${Math.floor(l/60)}`;l-=60*n,l=Math.ceil(l);let z=l>=10?l:`0${l}`;return[t,n,z,`${t}:${n}:${z}`]},j=()=>{document.documentElement.requestFullscreen()},J=()=>{document.exitFullscreen()},W=()=>{x.value=!0,!(!c.value||w.value)&&U()},I=()=>{a.value.play(),i.value=setInterval(()=>{a.value.ended&&(f.value=!1,clearInterval(i.value)),o.value=parseFloat((a.value.currentTime/a.value.duration).toFixed(4))},1e3)},B=()=>{clearInterval(i.value),a.value.pause()},G=l=>{const t=l.target;t.tagName!=="VIDEO"&&t.className!=="play-pause"||(f.value=!f.value,f.value?I():B())},N=l=>{if(l==="down")B(),r.value=!0;else if(l==="up"){if(r.value=!1,!f.value)return;I()}},H=()=>{d.value=!d.value,d.value?a.value.volume=0:a.value.volume=y.value},K=()=>{F.value=!0},Q=()=>{F.value=!1},X=()=>{c.value=!c.value,c.value?j():J()};return(l,t)=>(h(),g("div",{class:C(["LibVideo",{fullScreen:c.value}]),ref:"LibVideo",onMousemove:W,onMouseleave:t[6]||(t[6]=n=>x.value=!1),onClick:G},[e("video",{ref_key:"video",ref:a,src:s.url,muted:d.value},null,8,me),v(T,{name:"fade"},{default:b(()=>[e("div",{class:C(["toolbar",{hidden:!x.value}])},[e("div",fe,[a.value?(h(),q(A,{key:0,modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=n=>o.value=n),text:V(a.value.currentTime)[3],showDot:x.value,step:.001,onMousedown:t[1]||(t[1]=n=>N("down")),onMouseup:t[2]||(t[2]=n=>N("up"))},null,8,["modelValue","text","showDot","step"])):P("",!0)],512),e("div",{class:"options",onMouseenter:t[4]||(t[4]=n=>w.value=!0),onMouseleave:t[5]||(t[5]=n=>w.value=!1)},[e("div",pe,[p.value?(h(),g("span",_e,D(V(a.value.currentTime)[3])+" / "+D(V(a.value.duration)[3]),1)):(h(),g("span",he,"00:00:00 / 00:00:00"))]),e("div",be,[e("img",{class:"play-pause",src:f.value?_(ue):_(ie)},null,8,ye)]),e("div",ge,[e("div",{class:"volume",onMouseenter:K,onMouseleave:Q},[e("img",{onClick:H,src:d.value?_(re):_(ce),alt:""},null,8,xe),v(T,{name:"fade"},{default:b(()=>[k(e("div",we,[e("div",$e,[e("span",null,D((y.value*100).toFixed(0)),1),v(A,{modelValue:y.value,"onUpdate:modelValue":t[3]||(t[3]=n=>y.value=n),class:"LibRange-volume",size:15,showNum:!1,step:.01},null,8,["modelValue","step"])])],512),[[M,F.value&&!d.value]])]),_:1})],32),e("img",{onClick:X,class:"full-screen",src:c.value?_(de):_(ve)},null,8,De)])],32)],2)]),_:1})],34))}});const Ve=R(Fe,[["__scopeId","data-v-aa25cc24"]]),Ce=S({__name:"index",setup(s){return(a,i)=>(h(),q(Ve,{url:"https://www.runoob.com/try/demo_source/movie.mp4"}))}}),ke=e("h1",{id:"video",tabindex:"-1"},[m("Video "),e("a",{class:"header-anchor",href:"#video","aria-hidden":"true"},"#")],-1),Me=m(" \u4E00\u4E2A\u8F7B\u5DE7\u7684\u89C6\u9891\u64AD\u653E\u5668 "),Se=e("p",null,[e("a",{href:"https://gitee.com/lengyibai/lib3-component-packages/raw/master/Lib/static/LibVideo.zip",target:"_blank",rel:"noreferrer"},"\u4E0B\u8F7D\u7EC4\u4EF6\u5305\u53CA\u5F53\u524D\u7EC4\u4EF6\u7684\u6240\u6709\u6848\u4F8B")],-1),Ie=e("p",null,[m("\u5F15\u5165\u53C2\u8003 "),e("a",{href:"/lib3.0/Components/base/start.html"},"\u5F15\u5165\u7EC4\u4EF6")],-1),Be=e("h2",{id:"\u4EE3\u7801\u6F14\u793A",tabindex:"-1"},[m("\u4EE3\u7801\u6F14\u793A "),e("a",{class:"header-anchor",href:"#\u4EE3\u7801\u6F14\u793A","aria-hidden":"true"},"#")],-1),Ne={class:"demoBox"},ze=e("div",{class:"language-vue"},[e("button",{class:"copy"}),e("span",{class:"lang"},"vue"),e("pre",null,[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#F07178"}},"template"),e("span",{style:{color:"#89DDFF"}},">")]),m(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"  "),e("span",{style:{color:"#89DDFF"}},"<"),e("span",{style:{color:"#FFCB6B"}},"LibVideo"),e("span",{style:{color:"#89DDFF"}}," "),e("span",{style:{color:"#C792EA"}},"url"),e("span",{style:{color:"#89DDFF"}},"="),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"https://www.runoob.com/try/demo_source/movie.mp4"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}}," />")]),m(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"</"),e("span",{style:{color:"#F07178"}},"template"),e("span",{style:{color:"#89DDFF"}},">")]),m(`
`),e("span",{class:"line"})])])],-1),Le=e("h2",{id:"api",tabindex:"-1"},[m("API "),e("a",{class:"header-anchor",href:"#api","aria-hidden":"true"},"#")],-1),Te=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"\u53C2\u6570"),e("th",null,"\u8BF4\u660E"),e("th",null,"\u7C7B\u578B"),e("th",null,"\u9ED8\u8BA4\u503C")])]),e("tbody",null,[e("tr",null,[e("td",null,"url"),e("td",null,[m("\u89C6\u9891\u5730\u5740\uFF0C\u5F15\u5165\u672C\u5730\u89C6\u9891\u8BF7\u4F7F\u7528"),e("code",null,"require('\u8DEF\u5F84')")]),e("td",null,"\u672A\u77E5"),e("td",null,"-")])])],-1),Pe=JSON.parse('{"title":"Video","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EE3\u7801\u6F14\u793A","slug":"\u4EE3\u7801\u6F14\u793A","link":"#\u4EE3\u7801\u6F14\u793A","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[]}],"relativePath":"Components/statics/Video.md","lastUpdated":1666717310000}'),Ee={name:"Components/statics/Video.md"},Re=Object.assign(Ee,{setup(s){return(a,i)=>{const r=E("ContainerBox"),c=E("ShowCode");return h(),g("div",null,[ke,v(r,{title:"\u4ECB\u7ECD"},{desc:b(()=>[Me]),_:1}),v(r,{title:"\u4E0B\u8F7D\u5E76\u5F15\u5165"},{desc:b(()=>[Se,Ie]),_:1}),Be,v(r,{title:"\u57FA\u7840\u7528\u6CD5"},{default:b(()=>[e("div",Ne,[v(Ce)]),v(c,null,{codes:b(()=>[ze]),_:1})]),_:1}),Le,v(r,{title:"Props"},{desc:b(()=>[Te]),_:1})])}}});export{Pe as __pageData,Re as default};