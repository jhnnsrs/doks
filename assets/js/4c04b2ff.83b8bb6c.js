"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[32631],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(a),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<s;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},97492:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=a(87462),r=a(67294),s=a(3905);const o={id:"int",title:"Int",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,c={unversionedId:"schemas/fluss/scalars/int",id:"schemas/fluss/scalars/int",title:"Int",description:"The Int scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",source:"@site/docs/schemas/fluss/scalars/int.mdx",sourceDirName:"schemas/fluss/scalars",slug:"/schemas/fluss/scalars/int",permalink:"/doks/docs/schemas/fluss/scalars/int",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/fluss/scalars/int.mdx",tags:[],version:"current",frontMatter:{id:"int",title:"Int",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},i={},p=[{value:"Member of",id:"member-of",level:3}],d=()=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,s.kt)(r.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:d,SpecifiedBy:u,Badge:m};function y(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"Int")," scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar Int\n")),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/queries/events-between"},(0,s.kt)("inlineCode",{parentName:"a"},"eventsBetween")),"  ",(0,s.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"}),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/objects/flow"},(0,s.kt)("inlineCode",{parentName:"a"},"Flow")),"  ",(0,s.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/objects/flow-graph"},(0,s.kt)("inlineCode",{parentName:"a"},"FlowGraph")),"  ",(0,s.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/objects/position"},(0,s.kt)("inlineCode",{parentName:"a"},"Position")),"  ",(0,s.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/objects/return-widget"},(0,s.kt)("inlineCode",{parentName:"a"},"ReturnWidget")),"  ",(0,s.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/objects/run-event"},(0,s.kt)("inlineCode",{parentName:"a"},"RunEvent")),"  ",(0,s.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/mutations/snapshot"},(0,s.kt)("inlineCode",{parentName:"a"},"snapshot")),"  ",(0,s.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/objects/snapshot"},(0,s.kt)("inlineCode",{parentName:"a"},"Snapshot")),"  ",(0,s.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/mutations/track"},(0,s.kt)("inlineCode",{parentName:"a"},"track")),"  ",(0,s.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/objects/widget"},(0,s.kt)("inlineCode",{parentName:"a"},"Widget")),"  ",(0,s.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/inputs/widget-input"},(0,s.kt)("inlineCode",{parentName:"a"},"WidgetInput")),"  ",(0,s.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);