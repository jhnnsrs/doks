"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[93312],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(r),u=o,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||s;return r?n.createElement(f,a(a({ref:t},m),{},{components:r})):n.createElement(f,a({ref:t},m))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},64923:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>d,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var n=r(87462),o=r(67294),s=r(3905);const a={id:"permissions-for",title:"permissionsFor",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,l={unversionedId:"schemas/mikro/queries/permissions-for",id:"schemas/mikro/queries/permissions-for",title:"permissionsFor",description:"No description",source:"@site/docs/schemas/mikro/queries/permissions-for.mdx",sourceDirName:"schemas/mikro/queries",slug:"/schemas/mikro/queries/permissions-for",permalink:"/doks/docs/schemas/mikro/queries/permissions-for",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/mikro/queries/permissions-for.mdx",tags:[],version:"current",frontMatter:{id:"permissions-for",title:"permissionsFor",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},c={},m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>permissionsFor.<b>model</b></code><Bullet /><code>SharableModels!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-permissionsforbmodelbcodesharablemodels--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>permissionsFor.<b>name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-permissionsforbnamebcodestring-",level:4},{value:"Type",id:"type",level:3},{value:'<code>Permission</code> <Badge class="secondary" text="object"/>',id:"permission-",level:4}],d=()=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,s.kt)(o.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:m,Bullet:d,SpecifiedBy:p,Badge:u};function y(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"No description"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"permissionsFor(\n  model: SharableModels!\n  name: String\n): [Permission]\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-permissionsforbmodelbcodesharablemodels--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"permissionsFor.",(0,s.kt)("b",null,"model"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/enums/sharable-models"},(0,s.kt)("inlineCode",{parentName:"a"},"SharableModels!"))," ",(0,s.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-permissionsforbnamebcodestring-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"permissionsFor.",(0,s.kt)("b",null,"name"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"permission-"},(0,s.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/permission"},(0,s.kt)("inlineCode",{parentName:"a"},"Permission"))," ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null))}y.isMDXComponent=!0}}]);