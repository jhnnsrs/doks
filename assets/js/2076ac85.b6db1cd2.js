"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[80772],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3426:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>u,SpecifiedBy:()=>m,assets:()=>l,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(87462),o=n(67294),a=n(3905);const s={id:"provision-access",title:"ProvisionAccess",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,c={unversionedId:"schemas/arkitekt/enums/provision-access",id:"schemas/arkitekt/enums/provision-access",title:"ProvisionAccess",description:"An enumeration.",source:"@site/docs/schemas/arkitekt/enums/provision-access.mdx",sourceDirName:"schemas/arkitekt/enums",slug:"/schemas/arkitekt/enums/provision-access",permalink:"/doks/docs/schemas/arkitekt/enums/provision-access",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/arkitekt/enums/provision-access.mdx",tags:[],version:"current",frontMatter:{id:"provision-access",title:"ProvisionAccess",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},l={},p=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>ProvisionAccess.<b>EXCLUSIVE</b></code>",id:"code-style-fontweight-normal-provisionaccessbexclusivebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProvisionAccess.<b>EVERYONE</b></code>",id:"code-style-fontweight-normal-provisionaccessbeveryonebcode",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:u,SpecifiedBy:m,Badge:d};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An enumeration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum ProvisionAccess {\n  EXCLUSIVE\n  EVERYONE\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-provisionaccessbexclusivebcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProvisionAccess.",(0,a.kt)("b",null,"EXCLUSIVE")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This Topic is Only Accessible linkable for its creating User")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-provisionaccessbeveryonebcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProvisionAccess.",(0,a.kt)("b",null,"EVERYONE")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Everyone can link to this Topic")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/schemas/arkitekt/objects/provision"},(0,a.kt)("inlineCode",{parentName:"a"},"Provision")),"  ",(0,a.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);