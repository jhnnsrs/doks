"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[31618],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(a),d=n,m=f["".concat(i,".").concat(d)]||f[d]||u[d]||s;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<s;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},83075:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>d,Bullet:()=>u,SpecifiedBy:()=>f,assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(87462),n=a(67294),s=a(3905);const o={id:"float",title:"Float",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,i={unversionedId:"schemas/fluss/scalars/float",id:"schemas/fluss/scalars/float",title:"Float",description:"The Float scalar type represents signed double-precision fractional values as specified by IEEE 754.",source:"@site/docs/schemas/fluss/scalars/float.mdx",sourceDirName:"schemas/fluss/scalars",slug:"/schemas/fluss/scalars/float",permalink:"/doks/docs/schemas/fluss/scalars/float",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/fluss/scalars/float.mdx",tags:[],version:"current",frontMatter:{id:"float",title:"Float",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},c={},p=[{value:"Member of",id:"member-of",level:3}],u=()=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,s.kt)(n.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:u,SpecifiedBy:f,Badge:d};function y(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Float")," scalar type represents signed double-precision fractional values as specified by ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IEEE_floating_point"},"IEEE 754"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar Float\n")),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/objects/flow"},(0,s.kt)("inlineCode",{parentName:"a"},"Flow")),"  ",(0,s.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(u,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/objects/flow-graph"},(0,s.kt)("inlineCode",{parentName:"a"},"FlowGraph")),"  ",(0,s.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(u,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/inputs/graph-input"},(0,s.kt)("inlineCode",{parentName:"a"},"GraphInput")),"  ",(0,s.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"}),(0,s.kt)(u,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/inputs/position-input"},(0,s.kt)("inlineCode",{parentName:"a"},"PositionInput")),"  ",(0,s.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);