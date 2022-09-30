"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[82316],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=s,y=m["".concat(i,".").concat(p)]||m[p]||d[p]||r;return n?a.createElement(y,o(o({ref:t},u),{},{components:n})):a.createElement(y,o({ref:t},u))}));function p(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16001:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(87462),s=n(67294),r=n(3905);const o={id:"myrequests",title:"myrequests",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,i={unversionedId:"schemas/arkitekt/queries/myrequests",id:"schemas/arkitekt/queries/myrequests",title:"myrequests",description:"No description",source:"@site/docs/schemas/arkitekt/queries/myrequests.mdx",sourceDirName:"schemas/arkitekt/queries",slug:"/schemas/arkitekt/queries/myrequests",permalink:"/doks/docs/schemas/arkitekt/queries/myrequests",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/arkitekt/queries/myrequests.mdx",tags:[],version:"current",frontMatter:{id:"myrequests",title:"myrequests",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},c={},u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>myrequests.<b>exclude</b></code><Bullet /><code>[AssignationStatusInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-myrequestsbexcludebcodeassignationstatusinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>myrequests.<b>filter</b></code><Bullet /><code>[AssignationStatusInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-myrequestsbfilterbcodeassignationstatusinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>myrequests.<b>limit</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-myrequestsblimitbcodeint-",level:4},{value:"Type",id:"type",level:3},{value:'<code>Assignation</code> <Badge class="secondary" text="object"/>',id:"assignation-",level:4}],d=()=>(0,r.kt)(s.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,r.kt)(s.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(s.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:u,Bullet:d,SpecifiedBy:m,Badge:p};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"myrequests(\n  exclude: [AssignationStatusInput]\n  filter: [AssignationStatusInput]\n  limit: Int\n): [Assignation]\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-myrequestsbexcludebcodeassignationstatusinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"myrequests.",(0,r.kt)("b",null,"exclude"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/enums/assignation-status-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[AssignationStatusInput]"))," ",(0,r.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The excluded values")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-myrequestsbfilterbcodeassignationstatusinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"myrequests.",(0,r.kt)("b",null,"filter"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/enums/assignation-status-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[AssignationStatusInput]"))," ",(0,r.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The included values")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-myrequestsblimitbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"myrequests.",(0,r.kt)("b",null,"limit"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The excluded values")),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"assignation-"},(0,r.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/objects/assignation"},(0,r.kt)("inlineCode",{parentName:"a"},"Assignation"))," ",(0,r.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null))}k.isMDXComponent=!0}}]);