"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[11920],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},63153:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(87462),o=r(67294),a=r(3905);const l={id:"plot",title:"plot",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,c={unversionedId:"schemas/mikro/queries/plot",id:"schemas/mikro/queries/plot",title:"plot",description:"No description",source:"@site/docs/schemas/mikro/queries/plot.mdx",sourceDirName:"schemas/mikro/queries",slug:"/schemas/mikro/queries/plot",permalink:"/doks/docs/schemas/mikro/queries/plot",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/mikro/queries/plot.mdx",tags:[],version:"current",frontMatter:{id:"plot",title:"plot",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},s={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>plot.<b>id</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-plotbidbcodeid-",level:4},{value:"Type",id:"type",level:3},{value:'<code>Plot</code> <Badge class="secondary" text="object"/>',id:"plot-",level:4}],d=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:d,SpecifiedBy:u,Badge:m};function y(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"plot(\n  id: ID\n): Plot\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-plotbidbcodeid-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"plot.",(0,a.kt)("b",null,"id"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The id of the plot")),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"plot-"},(0,a.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/plot"},(0,a.kt)("inlineCode",{parentName:"a"},"Plot"))," ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null))}y.isMDXComponent=!0}}]);