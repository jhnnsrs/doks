"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[86898],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),c=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return a.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=n,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(f,s(s({ref:r},p),{},{components:t})):a.createElement(f,s({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=m;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},39303:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>d,Bullet:()=>u,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=t(87462),n=t(67294),o=t(3905);const s={id:"xarray",title:"XArray",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,i={unversionedId:"schemas/mikro/scalars/xarray",id:"schemas/mikro/scalars/xarray",title:"XArray",description:"XArray scalar",source:"@site/docs/schemas/mikro/scalars/xarray.mdx",sourceDirName:"schemas/mikro/scalars",slug:"/schemas/mikro/scalars/xarray",permalink:"/doks/docs/schemas/mikro/scalars/xarray",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/mikro/scalars/xarray.mdx",tags:[],version:"current",frontMatter:{id:"xarray",title:"XArray",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},c={},p=[{value:"Member of",id:"member-of",level:3}],u=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:u,SpecifiedBy:m,Badge:d};function y(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"XArray scalar"),(0,o.kt)("p",null,"This scalar is used to represent xarray objects and allows them to\nbe serialized correct.\nXArray objects are used to represent multidimensional data, such as\ntime series, images, and other data."),(0,o.kt)("p",null,"They are used in this project to represent the data of a Representation.\nThe Python interface can used to extra and manipulate the data."),(0,o.kt)("p",null,"This scalar is used to represent the data stored as an object on a S3 bucket\nthis object representats a zarr store of an xarray"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar XArray\n")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/from-xarray"},(0,o.kt)("inlineCode",{parentName:"a"},"fromXArray")),"  ",(0,o.kt)(d,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);