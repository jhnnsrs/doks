"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[97777],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(n),g=r,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||s;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<s;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},64199:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>d,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=n(87462),r=n(67294),s=n(3905);const o={id:"agents",title:"agents",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,c={unversionedId:"schemas/arkitekt/queries/agents",id:"schemas/arkitekt/queries/agents",title:"agents",description:"No description",source:"@site/docs/schemas/arkitekt/queries/agents.mdx",sourceDirName:"schemas/arkitekt/queries",slug:"/schemas/arkitekt/queries/agents",permalink:"/doks/docs/schemas/arkitekt/queries/agents",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/arkitekt/queries/agents.mdx",tags:[],version:"current",frontMatter:{id:"agents",title:"agents",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},i={},u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>agents.<b>app</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-agentsbappbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>agents.<b>status</b></code><Bullet /><code>[AgentStatusInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-agentsbstatusbcodeagentstatusinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>Agent</code> <Badge class="secondary" text="object"/>',id:"agent-",level:4}],d=()=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,s.kt)(r.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:u,Bullet:d,SpecifiedBy:p,Badge:g};function k(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"No description"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"agents(\n  app: String\n  status: [AgentStatusInput]\n): [Agent]\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-agentsbappbcodestring-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"agents.",(0,s.kt)("b",null,"app"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-agentsbstatusbcodeagentstatusinput--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"agents.",(0,s.kt)("b",null,"status"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/enums/agent-status-input"},(0,s.kt)("inlineCode",{parentName:"a"},"[AgentStatusInput]"))," ",(0,s.kt)(g,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(g,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"agent-"},(0,s.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/objects/agent"},(0,s.kt)("inlineCode",{parentName:"a"},"Agent"))," ",(0,s.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null))}k.isMDXComponent=!0}}]);