"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[57077],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=i(r),m=a,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(k,c(c({ref:t},d),{},{components:r})):n.createElement(k,c({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},42905:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var n=r(87462),a=r(67294),o=r(3905);const c={id:"structure",title:"Structure",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,s={unversionedId:"schemas/arkitekt/objects/structure",id:"schemas/arkitekt/objects/structure",title:"Structure",description:"No description",source:"@site/docs/schemas/arkitekt/objects/structure.mdx",sourceDirName:"schemas/arkitekt/objects",slug:"/schemas/arkitekt/objects/structure",permalink:"/doks/docs/schemas/arkitekt/objects/structure",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/arkitekt/objects/structure.mdx",tags:[],version:"current",frontMatter:{id:"structure",title:"Structure",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},i={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Structure.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-structurebidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Structure.<b>repository</b></code><Bullet /><code>Repository</code> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-structurebrepositorybcoderepository-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Structure.<b>extenders</b></code><Bullet /><code>GenericScalar</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-structurebextendersbcodegenericscalar-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Structure.<b>identifier</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-structurebidentifierbcodestring--",level:4},{value:"Returned by",id:"returned-by",level:3}],u=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),k={toc:d,Bullet:u,SpecifiedBy:p,Badge:m};function y(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Structure {\n  id: ID!\n  repository: Repository\n  extenders: GenericScalar\n  identifier: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-structurebidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Structure.",(0,o.kt)("b",null,"id"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-structurebrepositorybcoderepository-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Structure.",(0,o.kt)("b",null,"repository"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/interfaces/repository"},(0,o.kt)("inlineCode",{parentName:"a"},"Repository"))," ",(0,o.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-structurebextendersbcodegenericscalar-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Structure.",(0,o.kt)("b",null,"extenders"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/generic-scalar"},(0,o.kt)("inlineCode",{parentName:"a"},"GenericScalar"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-structurebidentifierbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Structure.",(0,o.kt)("b",null,"identifier"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A unique identifier for this Model accross the Platform")),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/schemas/arkitekt/queries/structure"},(0,o.kt)("inlineCode",{parentName:"a"},"structure")),"  ",(0,o.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/schemas/arkitekt/queries/structures"},(0,o.kt)("inlineCode",{parentName:"a"},"structures")),"  ",(0,o.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);