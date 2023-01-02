"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[90301],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,k=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return r?n.createElement(k,o(o({ref:t},d),{},{components:r})):n.createElement(k,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},96258:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(87462),a=r(67294),s=r(3905);const o={id:"reservations",title:"reservations",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,l={unversionedId:"schemas/arkitekt/queries/reservations",id:"schemas/arkitekt/queries/reservations",title:"reservations",description:"No description",source:"@site/docs/schemas/arkitekt/queries/reservations.mdx",sourceDirName:"schemas/arkitekt/queries",slug:"/schemas/arkitekt/queries/reservations",permalink:"/doks/docs/schemas/arkitekt/queries/reservations",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/arkitekt/queries/reservations.mdx",tags:[],version:"current",frontMatter:{id:"reservations",title:"reservations",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},c={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>reservations.<b>exclude</b></code><Bullet /><code>[ReservationStatusInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-reservationsbexcludebcodereservationstatusinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>reservations.<b>filter</b></code><Bullet /><code>[ReservationStatusInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-reservationsbfilterbcodereservationstatusinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>reservations.<b>identifier</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-reservationsbidentifierbcodestring-",level:4},{value:"Type",id:"type",level:3},{value:'<code>Reservation</code> <Badge class="secondary" text="object"/>',id:"reservation-",level:4}],u=()=>(0,s.kt)(a.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,s.kt)(a.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,s.kt)(a.Fragment,null,(0,s.kt)("span",{class:"badge badge--"+e.class},e.text)),k={toc:d,Bullet:u,SpecifiedBy:p,Badge:m};function f(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"No description"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},'reservations(\n  exclude: [ReservationStatusInput]\n  filter: [ReservationStatusInput]\n  identifier: String = "default"\n): [Reservation]\n')),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-reservationsbexcludebcodereservationstatusinput--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"reservations.",(0,s.kt)("b",null,"exclude"))),(0,s.kt)(u,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/enums/reservation-status-input"},(0,s.kt)("inlineCode",{parentName:"a"},"[ReservationStatusInput]"))," ",(0,s.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The excluded values")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-reservationsbfilterbcodereservationstatusinput--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"reservations.",(0,s.kt)("b",null,"filter"))),(0,s.kt)(u,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/enums/reservation-status-input"},(0,s.kt)("inlineCode",{parentName:"a"},"[ReservationStatusInput]"))," ",(0,s.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The included values")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-reservationsbidentifierbcodestring-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"reservations.",(0,s.kt)("b",null,"identifier"))),(0,s.kt)(u,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"reservation-"},(0,s.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/objects/reservation"},(0,s.kt)("inlineCode",{parentName:"a"},"Reservation"))," ",(0,s.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null))}f.isMDXComponent=!0}}]);