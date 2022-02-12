(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37],{30245:function(r,t,n){"use strict";n.d(t,{Z:function(){return b}});var o=n(63366),e=n(87462),i=n(67294),a=(n(45697),n(86010)),p=n(59766),s=n(74178);const c=["sx"];function u(r){const{sx:t}=r,n=(0,o.Z)(r,c),{systemProps:i,otherProps:a}=(r=>{const t={systemProps:{},otherProps:{}};return Object.keys(r).forEach((n=>{s.G[n]?t.systemProps[n]=r[n]:t.otherProps[n]=r[n]})),t})(n);let u;return u=Array.isArray(t)?[i,...t]:"function"===typeof t?(...r)=>{const n=t(...r);return(0,p.P)(n)?(0,e.Z)({},i,n):i}:(0,e.Z)({},i,t),(0,e.Z)({},a,{sx:u})}var d=n(27192),h=n(51861),l=n(16122),m=n(98216),g=n(28979);function f(r){return(0,g.Z)("MuiTypography",r)}(0,n(76087).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var v=n(85893);const x=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],y=(0,h.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(r,t)=>{const{ownerState:n}=r;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t[`align${(0,m.Z)(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((({theme:r,ownerState:t})=>(0,e.Z)({margin:0},t.variant&&r.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),w={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var b=i.forwardRef((function(r,t){const n=(0,l.Z)({props:r,name:"MuiTypography"}),i=(r=>Z[r]||r)(n.color),p=u((0,e.Z)({},n,{color:i})),{align:s="inherit",className:c,component:h,gutterBottom:g=!1,noWrap:b=!1,paragraph:_=!1,variant:j="body1",variantMapping:P=w}=p,A=(0,o.Z)(p,x),k=(0,e.Z)({},p,{align:s,color:i,className:c,component:h,gutterBottom:g,noWrap:b,paragraph:_,variant:j,variantMapping:P}),B=h||(_?"p":P[j]||w[j])||"span",N=(r=>{const{align:t,gutterBottom:n,noWrap:o,paragraph:e,variant:i,classes:a}=r,p={root:["root",i,"inherit"!==r.align&&`align${(0,m.Z)(t)}`,n&&"gutterBottom",o&&"noWrap",e&&"paragraph"]};return(0,d.Z)(p,f,a)})(k);return(0,v.jsx)(y,(0,e.Z)({as:B,ref:t,ownerState:k,className:(0,a.Z)(N.root,c)},A))}))},62887:function(r,t,n){"use strict";n.r(t);var o=n(51043),e=n(24237),i=n(54521),a=n(41664),p=n(67294),s=n(28186),c=n(30245),u=n(96486),d=n(85893),h=e.ZP.div.withConfig({displayName:"stock__WrapperAddress",componentId:"sc-72ucix-0"})(["display:grid;grid-row-gap:16px;grid-template-rows:min-content;"]),l=e.ZP.img.withConfig({displayName:"stock__CustomImage",componentId:"sc-72ucix-1"})(["width:100%;@media (min-width:","px){width:320px;}"],i.theme.breakpoint.mobileMd),m=e.ZP.div.withConfig({displayName:"stock__WrapperBlock",componentId:"sc-72ucix-2"})(["display:grid;height:fit-content;grid-template-rows:min-content min-content min-content min-content;box-shadow:rgba(50,50,93,0.25) 0px 13px 27px -5px,rgba(0,0,0,0.3) 0px 8px 16px -8px;grid-row-gap:16px;border-radius:20px;padding:24px;background:#eaeaea;"]),g=e.ZP.div.withConfig({displayName:"stock__WrapperLinkHome",componentId:"sc-72ucix-3"})(["display:grid;grid-template-columns:13px 1fr;grid-column-gap:16px;"]);t.default=function(){var r=(0,p.useState)([]),t=r[0],n=r[1];return(0,p.useEffect)((function(){(0,s.Sn)().then((function(r){var t=(0,u.orderBy)(null===r||void 0===r?void 0:r.data,"priority");n(t)}))}),[]),(0,d.jsx)(o.jj,{children:(0,d.jsxs)(h,{children:[(0,d.jsx)(a.default,{href:"/",passHref:!0,children:(0,d.jsx)("a",{children:(0,d.jsxs)(g,{children:[(0,d.jsx)(i.Arrow,{}),"\u041d\u0430\u0437\u0430\u0434"]})})}),null===t||void 0===t?void 0:t.map((function(r){var t=r.title,n=r.description,o=r.expiration,e=r.image;return(0,d.jsxs)(m,{children:[(0,d.jsx)(c.Z,{variant:"h5",gutterBottom:!0,component:"div",children:t}),(0,d.jsx)("div",{children:n}),(null===e||void 0===e?void 0:e.url)&&(0,d.jsx)("div",{children:(0,d.jsx)(l,{src:null===e||void 0===e?void 0:e.name,alt:null===e||void 0===e?void 0:e.name})}),o&&(0,d.jsxs)("div",{children:["\u041e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u0435 \u0430\u043a\u0446\u0438\u0438 ",o]})]},t)})),(0,d.jsx)("div",{style:{height:"480px"}})]})})}},54521:function(r,t,n){"use strict";n.d(t,{LayoutPage:function(){return o.jj},theme:function(){return i.r},Arrow:function(){return a.Eh}});var o=n(51043),e=n(73777);n.o(e,"Arrow")&&n.d(t,{Arrow:function(){return e.Arrow}}),n.o(e,"theme")&&n.d(t,{theme:function(){return e.theme}});var i=n(41978),a=n(15929)},75812:function(){},8069:function(){},73777:function(r,t,n){"use strict";var o=n(8069);n.o(o,"Arrow")&&n.d(t,{Arrow:function(){return o.Arrow}}),n.o(o,"theme")&&n.d(t,{theme:function(){return o.theme}});var e=n(75812);n.o(e,"Arrow")&&n.d(t,{Arrow:function(){return e.Arrow}}),n.o(e,"theme")&&n.d(t,{theme:function(){return e.theme}})},42217:function(r,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stock",function(){return n(62887)}])}},function(r){r.O(0,[774,662,231,43,888,377],(function(){return t=42217,r(r.s=t);var t}));var t=r.O();_N_E=t}]);