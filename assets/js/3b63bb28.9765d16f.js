"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[59029],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},i=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,d=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=l,f=u["".concat(d,".").concat(m)]||u[m]||g[m]||o;return n?a.createElement(f,r(r({ref:t},i),{},{components:n})):a.createElement(f,r({ref:t},i))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},86973:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>g,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>i});var a=n(87462),l=n(67294),o=n(3905);const r={id:"flow-edge",title:"FlowEdge",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,d={unversionedId:"schemas/fluss/interfaces/flow-edge",id:"schemas/fluss/interfaces/flow-edge",title:"FlowEdge",description:"No description",source:"@site/docs/schemas/fluss/interfaces/flow-edge.mdx",sourceDirName:"schemas/fluss/interfaces",slug:"/schemas/fluss/interfaces/flow-edge",permalink:"/doks/docs/schemas/fluss/interfaces/flow-edge",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/fluss/interfaces/flow-edge.mdx",tags:[],version:"current",frontMatter:{id:"flow-edge",title:"FlowEdge",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},c={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FlowEdge.<b>id</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-flowedgebidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FlowEdge.<b>source</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-flowedgebsourcebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FlowEdge.<b>target</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-flowedgebtargetbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FlowEdge.<b>sourceHandle</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-flowedgebsourcehandlebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FlowEdge.<b>targetHandle</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-flowedgebtargethandlebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FlowEdge.<b>typename</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-flowedgebtypenamebcodestring--",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],g=()=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(l.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:i,Bullet:g,SpecifiedBy:u,Badge:m};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"interface FlowEdge {\n  id: String!\n  source: String!\n  target: String!\n  sourceHandle: String!\n  targetHandle: String!\n  typename: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-flowedgebidbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FlowEdge.",(0,o.kt)("b",null,"id"))),(0,o.kt)(g,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-flowedgebsourcebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FlowEdge.",(0,o.kt)("b",null,"source"))),(0,o.kt)(g,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-flowedgebtargetbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FlowEdge.",(0,o.kt)("b",null,"target"))),(0,o.kt)(g,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-flowedgebsourcehandlebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FlowEdge.",(0,o.kt)("b",null,"sourceHandle"))),(0,o.kt)(g,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-flowedgebtargethandlebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FlowEdge.",(0,o.kt)("b",null,"targetHandle"))),(0,o.kt)(g,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-flowedgebtypenamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FlowEdge.",(0,o.kt)("b",null,"typename"))),(0,o.kt)(g,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/objects/flow-graph"},(0,o.kt)("inlineCode",{parentName:"a"},"FlowGraph")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/objects/fancy-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"FancyEdge")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(g,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/objects/labeled-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"LabeledEdge")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}p.isMDXComponent=!0}}]);