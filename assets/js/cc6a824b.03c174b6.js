"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[70735],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},i=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),i=u(n),g=o,m=i["".concat(p,".").concat(g)]||i[g]||c[g]||r;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=i;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}i.displayName="MDXCreateElement"},14627:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>c,SpecifiedBy:()=>i,assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(87462),o=n(67294),r=n(3905);const l={id:"graph-input",title:"GraphInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,p={unversionedId:"schemas/fluss/inputs/graph-input",id:"schemas/fluss/inputs/graph-input",title:"GraphInput",description:"No description",source:"@site/docs/schemas/fluss/inputs/graph-input.mdx",sourceDirName:"schemas/fluss/inputs",slug:"/schemas/fluss/inputs/graph-input",permalink:"/doks/docs/schemas/fluss/inputs/graph-input",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/fluss/inputs/graph-input.mdx",tags:[],version:"current",frontMatter:{id:"graph-input",title:"GraphInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},u={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>GraphInput.<b>zoom</b></code><Bullet /><code>Float</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-graphinputbzoombcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GraphInput.<b>nodes</b></code><Bullet /><code>[NodeInput]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-graphinputbnodesbcodenodeinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GraphInput.<b>edges</b></code><Bullet /><code>[EdgeInput]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-graphinputbedgesbcodeedgeinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GraphInput.<b>args</b></code><Bullet /><code>[ArgPortInput]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-graphinputbargsbcodeargportinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GraphInput.<b>returns</b></code><Bullet /><code>[ReturnPortInput]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-graphinputbreturnsbcodereturnportinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GraphInput.<b>globals</b></code><Bullet /><code>[GlobalInput]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-graphinputbglobalsbcodeglobalinput--",level:4},{value:"Member of",id:"member-of",level:3}],c=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),i=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:c,SpecifiedBy:i,Badge:g};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input GraphInput {\n  zoom: Float\n  nodes: [NodeInput]!\n  edges: [EdgeInput]!\n  args: [ArgPortInput]!\n  returns: [ReturnPortInput]!\n  globals: [GlobalInput]!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-graphinputbzoombcodefloat-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"GraphInput.",(0,r.kt)("b",null,"zoom"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,r.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-graphinputbnodesbcodenodeinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"GraphInput.",(0,r.kt)("b",null,"nodes"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/inputs/node-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[NodeInput]!"))," ",(0,r.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-graphinputbedgesbcodeedgeinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"GraphInput.",(0,r.kt)("b",null,"edges"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/inputs/edge-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[EdgeInput]!"))," ",(0,r.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-graphinputbargsbcodeargportinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"GraphInput.",(0,r.kt)("b",null,"args"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/inputs/arg-port-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[ArgPortInput]!"))," ",(0,r.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-graphinputbreturnsbcodereturnportinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"GraphInput.",(0,r.kt)("b",null,"returns"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/inputs/return-port-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[ReturnPortInput]!"))," ",(0,r.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-graphinputbglobalsbcodeglobalinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"GraphInput.",(0,r.kt)("b",null,"globals"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/inputs/global-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[GlobalInput]!"))," ",(0,r.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/mutations/updatediagram"},(0,r.kt)("inlineCode",{parentName:"a"},"updatediagram")),"  ",(0,r.kt)(g,{class:"secondary",text:"mutation",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);