import{_ as c,h as a,a as r,c as p,b as o,w as e,f as s,i as l}from"./app.eabe4ce1.js";const f=JSON.parse('{"title":"$lazyLoadImages","description":"","frontmatter":{},"headers":[],"relativePath":"Functions/custom/LazyLoadImages.md","lastUpdated":null}'),F={name:"Functions/custom/LazyLoadImages.md"},y=s("h1",{id:"lazyloadimages",tabindex:"-1"},[l("$lazyLoadImages "),s("a",{class:"header-anchor",href:"#lazyloadimages","aria-hidden":"true"},"#")],-1),D=l(' \u7528\u4E8E\u957F\u5217\u8868\u6EDA\u52A8\uFF0C\u5F53\u56FE\u7247\u672A\u5728\u53EF\u89C6\u533A\uFF0C\u901A\u8FC7`visibility = "hidden"`\u8FDB\u884C\u9690\u85CF\uFF0C\u63D0\u5347\u6EDA\u52A8\u6027\u80FD '),i=s("div",{class:"language-js"},[s("button",{class:"copy"}),s("span",{class:"lang"},"js"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," imgs "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," document"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"querySelector"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"img"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"$lazyLoadImages"),s("span",{style:{color:"#A6ACCD"}},"(imgs)"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"})])])],-1),A=s("div",{class:"language-js"},[s("button",{class:"copy"}),s("span",{class:"lang"},"js"),s("pre",null,[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"export"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#A6ACCD"}}," $lazyLoadImages "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"imgs"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"observer"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"new"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#82AAFF"}},"IntersectionObserver"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"entries"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#A6ACCD"}},"entries"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"forEach"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"entry"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"img"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"entry"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"target"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#89DDFF"}},"if"),s("span",{style:{color:"#F07178"}}," ("),s("span",{style:{color:"#A6ACCD"}},"entry"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"intersectionRatio"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#F07178"}},") "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#A6ACCD"}},"img"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"style"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"visibility"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"visible"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"else"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#A6ACCD"}},"img"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"style"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#A6ACCD"}},"visibility"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"hidden"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#A6ACCD"}},"imgs"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"forEach"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD"}},"element"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#A6ACCD"}},"observer"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"observe"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#A6ACCD"}},"element"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"};")]),l(`
`),s("span",{class:"line"})])])],-1),C=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"\u53C2\u6570"),s("th",null,"\u8BF4\u660E"),s("th",null,"\u7C7B\u578B")])]),s("tbody",null,[s("tr",null,[s("td",null,"imgs"),s("td",null,"\u4F20\u9012\u8981\u590D\u5236\u7684\u503C"),s("td",null,"Elements")])])],-1);function d(m,u,_,g,h,E){const n=a("ContainerBox"),t=a("ShowCode");return r(),p("div",null,[y,o(n,{title:"\u4ECB\u7ECD"},{desc:e(()=>[D]),_:1}),o(n,{title:"\u57FA\u7840\u7528\u6CD5"},{default:e(()=>[i,o(t,null,{codes:e(()=>[A]),_:1})]),_:1}),o(n,{title:"Params"},{desc:e(()=>[C]),_:1})])}const v=c(F,[["render",d]]);export{f as __pageData,v as default};