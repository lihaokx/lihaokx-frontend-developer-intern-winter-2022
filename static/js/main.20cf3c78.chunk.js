(this["webpackJsonpfrontend-developer-intern-winter-2022"]=this["webpackJsonpfrontend-developer-intern-winter-2022"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c.n(s),n=c(15),i=c.n(n),r=(c(25),c(26),c(27),c(10)),l=c(16),j=c.n(l),o=c(3);var d=function(e){var t=e.q,c=e.setQ;return Object(o.jsx)("div",{className:"row mb-3 searchdiv",children:Object(o.jsx)("input",{type:"search",id:"search",className:"searchInput col-8 offset-2",name:"searchInput",placeholder:"Search by title ",value:t,onChange:function(e){c(e.target.value)}})})},m=c(43),b=c(44),h=c(45),x=c(46),O=c(47),u=c(48),f=c(49),p=c(52),g=c(8),N=c(50),v=c(51),k=function(e){var t=e.pic,c=e.islike,a=e.setIslike,n=e.isExplan,i=e.setIsExplan;return Object(s.useEffect)((function(){localStorage.setItem("islike",c)}),[c]),Object(o.jsx)("div",{className:"col-md-6",children:Object(o.jsxs)(m.a,{className:"mb-3 everyCard",children:[Object(o.jsxs)(b.a,{children:[Object(o.jsx)(h.a,{tag:"h5",className:"cardTitle",children:t.title}),Object(o.jsxs)(x.a,{tag:"h6",className:"  text-muted",children:["  ",Object(o.jsx)(g.a,{className:"mb-1"})," ",t.date]})]}),Object(o.jsx)(O.a,{src:t.url,className:"imagesInCard"}),Object(o.jsxs)(u.a,{className:"socialRow",children:[Object(o.jsx)(f.a,{xs:{size:2,offset:1},md:{size:1,offset:1},children:Object(o.jsx)(g.e,{className:c[t.id]?" dolike":" notlike",onClick:function(){c[t.id]?a(c.map((function(e,c){return t.id===c&&(e=!1),e}))):a(c.map((function(e,c){return t.id===c&&(e=!0),e})))}})}),Object(o.jsx)(f.a,{xs:2,md:1,children:Object(o.jsx)(N.a,{url:t.url,children:Object(o.jsx)(g.c,{size:"2rem",className:"socialIcon fb"})})}),Object(o.jsx)(f.a,{xs:2,md:1,children:Object(o.jsx)(v.a,{url:t.url,children:Object(o.jsx)(g.f,{size:"2rem",className:"socialIcon tw"})})})]}),Object(o.jsx)(b.a,{className:"pt-0",children:n[t.id]?Object(o.jsxs)("div",{children:[Object(o.jsxs)(p.a,{className:"textInCard",children:[t.explanation," ",Object(o.jsx)("span",{className:"lessSpan",onClick:function(){i(n.map((function(e,c){return c===t.id&&(e=!1),e})))},children:" less"})]}),Object(o.jsxs)("p",{className:"copyright mt-2",children:[Object(o.jsx)(g.b,{className:"mb-1"}),"  ",t.copyright?"Copyright: "+t.copyright:""]})]}):Object(o.jsxs)(p.a,{className:"textInCard",children:[t.explanation.substring(0,200)," ... ",Object(o.jsx)("span",{className:"moreSpan",onClick:function(){i(n.map((function(e,c){return c===t.id&&(e=!0),e})))},children:" more"})]})})]})})},I=c(17),S=c.n(I);var y=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),i=Object(r.a)(n,2),l=i[0],m=i[1],b=Object(s.useState)(!0),h=Object(r.a)(b,2),x=h[0],O=h[1],u=Object(s.useState)(null===localStorage.getItem("islike")||0===localStorage.getItem("islike").length?[]:localStorage.getItem("islike").split(",").map((function(e){return JSON.parse(e)}))),f=Object(r.a)(u,2),p=f[0],g=f[1],N=Object(s.useState)([]),v=Object(r.a)(N,2),I=v[0],y=v[1],w=j()("https://api.nasa.gov/planetary/apod?start_date=2021-05-02&end_date=2021-05-24&api_key=XLMRzybJ1sxCqjnb1yJZAynuc7mCGNfZKoQjaO7c"),C=w.isLoading,z=w.data;return Object(s.useEffect)((function(){C||new Promise((function(e,t){a(z.map((function(e,t){return e.id=t,e}))),e()})).then((function(){g(null===localStorage.getItem("islike")||0===localStorage.getItem("islike").length?Array(z.length).fill(!1):localStorage.getItem("islike").split(",").map((function(e){return JSON.parse(e)})))})).then((function(){y(Array(z.length).fill(!1))})).then(O(!1))}),[C,z]),x?Object(o.jsx)("div",{className:"loading",children:Object(o.jsx)(S.a,{size:150})}):function(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"row mb-3 searchdiv",children:Object(o.jsx)(d,{q:l,setQ:m})}),Object(o.jsx)("div",{className:"row",children:(t=e,t.filter((function(e){return e.title.toLowerCase().indexOf(l)>-1}))).map((function(e){return Object(o.jsx)(k,{pic:e,islike:p,setIslike:g,isExplan:I,setIsExplan:y},e.id)}))})]});var t}(c)},w=c(18),C=c(19),z=c(53);var A=function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"text-start mt-2",children:Object(o.jsx)("a",{href:"https://github.com/lihaokx/lihaokx-frontend-developer-intern-winter-2022",target:"_blank",rel:"noreferrer",className:"gitBtn",children:Object(o.jsx)(g.d,{size:"2rem"})})}),Object(o.jsxs)("div",{className:"row align-items-center",children:[Object(o.jsxs)("div",{className:"col-md-8 offset-md-2 headertext ",children:[Object(o.jsxs)("p",{className:"headertext1 col ",children:["I am ",Object(o.jsx)("b",{children:" Hao Li"}),". Welcome to Spcacetagram"]}),Object(o.jsxs)("p",{className:"headertext2 col ",children:["Share photos from ",Object(o.jsx)("a",{href:"https://api.nasa.gov/",target:"_blank",rel:"noreferrer",children:" NASA\u2019s APOD image API "})]}),Object(o.jsx)("a",{href:"#search",className:"headertext2",children:Object(o.jsx)(z.a,{children:" Get Started  "})})]}),Object(o.jsx)("div",{className:"col-12 backgroundHead",children:Object(o.jsxs)("div",{className:" row ",children:[Object(o.jsx)("div",{className:"col-md-2 offset-md-1",children:Object(o.jsx)(w.a,{size:"10rem",className:"spaceIcon"})}),Object(o.jsx)("div",{className:"col-md-2 offset-md-6",children:Object(o.jsx)(C.a,{size:"15rem",className:"spaceIcon"})})]})})]})]})};var E=function(){return Object(o.jsxs)("div",{className:"App container",children:[Object(o.jsx)("div",{children:Object(o.jsx)(A,{})}),Object(o.jsx)("div",{className:"row justify-content-center",children:Object(o.jsx)("div",{className:"col-10",children:Object(o.jsx)(y,{})})})]})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,54)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(E,{})}),document.getElementById("root")),J()}},[[41,1,2]]]);
//# sourceMappingURL=main.20cf3c78.chunk.js.map