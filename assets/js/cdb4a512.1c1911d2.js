"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[10175],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=d(n),p=o,m=g["".concat(c,".").concat(p)]||g[p]||i[p]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},89140:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>i,SpecifiedBy:()=>g,assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(87462),o=n(67294),a=n(3905);const l={id:"run-log",title:"RunLog",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,c={unversionedId:"schemas/fluss/objects/run-log",id:"schemas/fluss/objects/run-log",title:"RunLog",description:"No description",source:"@site/docs/schemas/fluss/objects/run-log.mdx",sourceDirName:"schemas/fluss/objects",slug:"/schemas/fluss/objects/run-log",permalink:"/doks/docs/schemas/fluss/objects/run-log",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/fluss/objects/run-log.mdx",tags:[],version:"current",frontMatter:{id:"run-log",title:"RunLog",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},d={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RunLog.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-runlogbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RunLog.<b>run</b></code><Bullet /><code>Run</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-runlogbrunbcoderun-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RunLog.<b>log</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-runlogblogbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RunLog.<b>node</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-runlogbnodebcodestring--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],i=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:u,Bullet:i,SpecifiedBy:g,Badge:p};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type RunLog {\n  id: ID!\n  run: Run\n  log: String\n  node: String!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-runlogbidbcodeid--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"RunLog.",(0,a.kt)("b",null,"id"))),(0,a.kt)(i,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,a.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-runlogbrunbcoderun-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"RunLog.",(0,a.kt)("b",null,"run"))),(0,a.kt)(i,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/objects/run"},(0,a.kt)("inlineCode",{parentName:"a"},"Run"))," ",(0,a.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-runlogblogbcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"RunLog.",(0,a.kt)("b",null,"log"))),(0,a.kt)(i,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-runlogbnodebcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"RunLog.",(0,a.kt)("b",null,"node"))),(0,a.kt)(i,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"returned-by"},"Returned by"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/mutations/alog"},(0,a.kt)("inlineCode",{parentName:"a"},"alog")),"  ",(0,a.kt)(p,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,a.kt)(i,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/queries/run-logs"},(0,a.kt)("inlineCode",{parentName:"a"},"runLogs")),"  ",(0,a.kt)(p,{class:"secondary",text:"query",mdxType:"Badge"})),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/objects/run"},(0,a.kt)("inlineCode",{parentName:"a"},"Run")),"  ",(0,a.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);