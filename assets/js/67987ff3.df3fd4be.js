"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[42524],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},i=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return n?o.createElement(k,d(d({ref:t},i),{},{components:n})):o.createElement(k,d({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,d=new Array(a);d[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,d[1]=l;for(var s=2;s<a;s++)d[s]=n[s];return o.createElement.apply(null,d)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37897:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>d,metadata:()=>c,toc:()=>i});var o=n(87462),r=n(67294),a=n(3905);const d={id:"node-event",title:"NodeEvent",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,c={unversionedId:"schemas/arkitekt/objects/node-event",id:"schemas/arkitekt/objects/node-event",title:"NodeEvent",description:"No description",source:"@site/docs/schemas/arkitekt/objects/node-event.mdx",sourceDirName:"schemas/arkitekt/objects",slug:"/schemas/arkitekt/objects/node-event",permalink:"/doks/docs/schemas/arkitekt/objects/node-event",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/arkitekt/objects/node-event.mdx",tags:[],version:"current",frontMatter:{id:"node-event",title:"NodeEvent",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},s={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>NodeEvent.<b>created</b></code><Bullet /><code>Node</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-nodeeventbcreatedbcodenode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>NodeEvent.<b>deleted</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-nodeeventbdeletedbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>NodeEvent.<b>updated</b></code><Bullet /><code>Node</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-nodeeventbupdatedbcodenode-",level:4},{value:"Returned by",id:"returned-by",level:3}],p=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),k={toc:i,Bullet:p,SpecifiedBy:u,Badge:m};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type NodeEvent {\n  created: Node\n  deleted: ID\n  updated: Node\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-nodeeventbcreatedbcodenode-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"NodeEvent.",(0,a.kt)("b",null,"created"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/objects/node"},(0,a.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-nodeeventbdeletedbcodeid-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"NodeEvent.",(0,a.kt)("b",null,"deleted"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-nodeeventbupdatedbcodenode-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"NodeEvent.",(0,a.kt)("b",null,"updated"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/objects/node"},(0,a.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"returned-by"},"Returned by"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/schemas/arkitekt/subscriptions/nodes"},(0,a.kt)("inlineCode",{parentName:"a"},"nodes")),"  ",(0,a.kt)(m,{class:"secondary",text:"subscription",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);