"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[45343],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>y});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},i=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=d(n),y=l,u=m["".concat(c,".").concat(y)]||m[y]||g[y]||o;return n?a.createElement(u,r(r({ref:t},i),{},{components:n})):a.createElement(u,r({ref:t},i))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82547:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>g,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var a=n(87462),l=n(67294),o=n(3905);const r={id:"fancy-edge",title:"FancyEdge",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,c={unversionedId:"schemas/fluss/objects/fancy-edge",id:"schemas/fluss/objects/fancy-edge",title:"FancyEdge",description:"No description",source:"@site/docs/schemas/fluss/objects/fancy-edge.mdx",sourceDirName:"schemas/fluss/objects",slug:"/schemas/fluss/objects/fancy-edge",permalink:"/doks/docs/schemas/fluss/objects/fancy-edge",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/fluss/objects/fancy-edge.mdx",tags:[],version:"current",frontMatter:{id:"fancy-edge",title:"FancyEdge",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},d={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FancyEdge.<b>id</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-fancyedgebidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FancyEdge.<b>source</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-fancyedgebsourcebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FancyEdge.<b>target</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-fancyedgebtargetbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FancyEdge.<b>sourceHandle</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-fancyedgebsourcehandlebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FancyEdge.<b>targetHandle</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-fancyedgebtargethandlebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FancyEdge.<b>typename</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-fancyedgebtypenamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FancyEdge.<b>stream</b></code><Bullet /><code>[StreamItem]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-fancyedgebstreambcodestreamitem--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>FlowEdge</code> <Badge class="secondary" text="interface"/>',id:"flowedge-",level:4},{value:'<code>FlowEdgeCommons</code> <Badge class="secondary" text="interface"/>',id:"flowedgecommons-",level:4}],g=()=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(l.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),u={toc:i,Bullet:g,SpecifiedBy:m,Badge:y};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type FancyEdge implements FlowEdge, FlowEdgeCommons {\n  id: String!\n  source: String!\n  target: String!\n  sourceHandle: String!\n  targetHandle: String!\n  typename: String!\n  stream: [StreamItem]!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-fancyedgebidbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FancyEdge.",(0,o.kt)("b",null,"id"))),(0,o.kt)(g,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-fancyedgebsourcebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FancyEdge.",(0,o.kt)("b",null,"source"))),(0,o.kt)(g,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-fancyedgebtargetbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FancyEdge.",(0,o.kt)("b",null,"target"))),(0,o.kt)(g,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-fancyedgebsourcehandlebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FancyEdge.",(0,o.kt)("b",null,"sourceHandle"))),(0,o.kt)(g,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-fancyedgebtargethandlebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FancyEdge.",(0,o.kt)("b",null,"targetHandle"))),(0,o.kt)(g,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-fancyedgebtypenamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FancyEdge.",(0,o.kt)("b",null,"typename"))),(0,o.kt)(g,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-fancyedgebstreambcodestreamitem--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"FancyEdge.",(0,o.kt)("b",null,"stream"))),(0,o.kt)(g,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/objects/stream-item"},(0,o.kt)("inlineCode",{parentName:"a"},"[StreamItem]!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"flowedge-"},(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/interfaces/flow-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"FlowEdge"))," ",(0,o.kt)(y,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"flowedgecommons-"},(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/interfaces/flow-edge-commons"},(0,o.kt)("inlineCode",{parentName:"a"},"FlowEdgeCommons"))," ",(0,o.kt)(y,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null))}f.isMDXComponent=!0}}]);