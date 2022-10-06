"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[1712],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=n,p=u["".concat(s,".").concat(f)]||u[f]||d[f]||l;return r?o.createElement(p,a(a({ref:t},m),{},{components:r})):o.createElement(p,a({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},53259:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>f,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var o=r(87462),n=r(67294),l=r(3905);const a={id:"omerofiles",title:"omerofiles",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,s={unversionedId:"schemas/mikro/queries/omerofiles",id:"schemas/mikro/queries/omerofiles",title:"omerofiles",description:"All OmeroFiles",source:"@site/docs/schemas/mikro/queries/omerofiles.mdx",sourceDirName:"schemas/mikro/queries",slug:"/schemas/mikro/queries/omerofiles",permalink:"/doks/docs/schemas/mikro/queries/omerofiles",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/mikro/queries/omerofiles.mdx",tags:[],version:"current",frontMatter:{id:"omerofiles",title:"omerofiles",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},c={},m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>omerofiles.<b>name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-omerofilesbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>omerofiles.<b>limit</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-omerofilesblimitbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>omerofiles.<b>offset</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-omerofilesboffsetbcodeint-",level:4},{value:"Type",id:"type",level:3},{value:'<code>OmeroFile</code> <Badge class="secondary" text="object"/>',id:"omerofile-",level:4}],d=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),p={toc:m,Bullet:d,SpecifiedBy:u,Badge:f};function k(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"All OmeroFiles"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"This query returns all OmeroFiles that are stored on the platform\ndepending on the user's permissions. Generally, this query will return\nall OmeroFiles that the user has access to. If the user is an amdin\nor superuser, all OmeroFiles will be returned.\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"omerofiles(\n  name: String\n  limit: Int\n  offset: Int\n): [OmeroFile]\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-omerofilesbnamebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"omerofiles.",(0,l.kt)("b",null,"name"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-omerofilesblimitbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"omerofiles.",(0,l.kt)("b",null,"limit"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Query limit")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-omerofilesboffsetbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"omerofiles.",(0,l.kt)("b",null,"offset"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Query offset")),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"omerofile-"},(0,l.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/omero-file"},(0,l.kt)("inlineCode",{parentName:"a"},"OmeroFile"))," ",(0,l.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null))}k.isMDXComponent=!0}}]);