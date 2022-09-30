"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[33513],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,m=d["".concat(i,".").concat(u)]||d[u]||k[u]||r;return n?o.createElement(m,l(l({ref:t},s),{},{components:n})):o.createElement(m,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20102:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>k,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>p,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var o=n(87462),a=n(67294),r=n(3905);const l={id:"lok-app-grant-type",title:"LokAppGrantType",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},p=void 0,i={unversionedId:"schemas/arkitekt/enums/lok-app-grant-type",id:"schemas/arkitekt/enums/lok-app-grant-type",title:"LokAppGrantType",description:"An enumeration.",source:"@site/docs/schemas/arkitekt/enums/lok-app-grant-type.mdx",sourceDirName:"schemas/arkitekt/enums",slug:"/schemas/arkitekt/enums/lok-app-grant-type",permalink:"/doks/docs/schemas/arkitekt/enums/lok-app-grant-type",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/arkitekt/enums/lok-app-grant-type.mdx",tags:[],version:"current",frontMatter:{id:"lok-app-grant-type",title:"LokAppGrantType",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},c={},s=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>LokAppGrantType.<b>CLIENT_CREDENTIALS</b></code>",id:"code-style-fontweight-normal-lokappgranttypebclient_credentialsbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>LokAppGrantType.<b>IMPLICIT</b></code>",id:"code-style-fontweight-normal-lokappgranttypebimplicitbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>LokAppGrantType.<b>AUTHORIZATION_CODE</b></code>",id:"code-style-fontweight-normal-lokappgranttypebauthorization_codebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>LokAppGrantType.<b>PASSWORD</b></code>",id:"code-style-fontweight-normal-lokappgranttypebpasswordbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>LokAppGrantType.<b>SESSION</b></code>",id:"code-style-fontweight-normal-lokappgranttypebsessionbcode",level:4},{value:"Member of",id:"member-of",level:3}],k=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:k,SpecifiedBy:d,Badge:u};function y(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An enumeration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum LokAppGrantType {\n  CLIENT_CREDENTIALS\n  IMPLICIT\n  AUTHORIZATION_CODE\n  PASSWORD\n  SESSION\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-lokappgranttypebclient_credentialsbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"LokAppGrantType.",(0,r.kt)("b",null,"CLIENT_CREDENTIALS")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Backend (Client Credentials)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-lokappgranttypebimplicitbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"LokAppGrantType.",(0,r.kt)("b",null,"IMPLICIT")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Implicit Grant")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-lokappgranttypebauthorization_codebcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"LokAppGrantType.",(0,r.kt)("b",null,"AUTHORIZATION_CODE")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Authorization Code")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-lokappgranttypebpasswordbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"LokAppGrantType.",(0,r.kt)("b",null,"PASSWORD")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Password")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-lokappgranttypebsessionbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"LokAppGrantType.",(0,r.kt)("b",null,"SESSION")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Django Session")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/arkitekt/objects/lok-app"},(0,r.kt)("inlineCode",{parentName:"a"},"LokApp")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);