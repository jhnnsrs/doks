"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[29496],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||l;return r?a.createElement(f,c(c({ref:t},u),{},{components:r})):a.createElement(f,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,c=new Array(l);c[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<l;s++)c[s]=r[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},74030:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>d,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var a=r(87462),n=r(67294),l=r(3905);const c={id:"metric-value",title:"MetricValue",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,i={unversionedId:"schemas/mikro/scalars/metric-value",id:"schemas/mikro/scalars/metric-value",title:"MetricValue",description:"A Metric Value",source:"@site/docs/schemas/mikro/scalars/metric-value.mdx",sourceDirName:"schemas/mikro/scalars",slug:"/schemas/mikro/scalars/metric-value",permalink:"/doks/docs/schemas/mikro/scalars/metric-value",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/mikro/scalars/metric-value.mdx",tags:[],version:"current",frontMatter:{id:"metric-value",title:"MetricValue",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},s={},u=[{value:"Member of",id:"member-of",level:3}],m=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:u,Bullet:m,SpecifiedBy:p,Badge:d};function k(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A Metric Value"),(0,l.kt)("p",null,"This scalar ensures serializaiton of metric values. Metric values\ncan be of different types, such as int, float, string, datetime, etc."),(0,l.kt)("p",null,"However we impose a few rules on the metric values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The value must be a scalar"),(0,l.kt)("li",{parentName:"ul"},"The value must be a scalar that can be serialized to JSON")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar MetricValue\n")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/create-metric"},(0,l.kt)("inlineCode",{parentName:"a"},"createMetric")),"  ",(0,l.kt)(d,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/metric"},(0,l.kt)("inlineCode",{parentName:"a"},"Metric")),"  ",(0,l.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);