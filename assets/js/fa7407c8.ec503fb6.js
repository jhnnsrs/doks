"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[7560],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=n,y=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return r?o.createElement(y,i(i({ref:t},c),{},{components:r})):o.createElement(y,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97748:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const a={},i="Intro",s={unversionedId:"developers/intro",id:"developers/intro",title:"Intro",description:"You want to develop some functionaly for the arkitekt framework. Great!",source:"@site/docs/developers/intro.mdx",sourceDirName:"developers",slug:"/developers/intro",permalink:"/doks/docs/developers/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/developers/intro.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The basics",permalink:"/doks/docs/developers/python/my-first-app"},next:{title:"Schemas",permalink:"/doks/docs/category/schemas"}},l={},u=[{value:"What is Arkitekt?",id:"what-is-arkitekt",level:2},{value:"What is Arkitekt not?",id:"what-is-arkitekt-not",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"intro"},"Intro"),(0,n.kt)("p",null,"You want to develop some functionaly for the arkitekt framework. Great!\nWithout you this framework would not exists. So thank you for your contribution."),(0,n.kt)("p",null,"So lets get you started!"),(0,n.kt)("h2",{id:"what-is-arkitekt"},"What is Arkitekt?"),(0,n.kt)("p",null,"Let's answer this question a little bit more in detail. Arkitekt is a framework,\nthat aims to provide you the bioimage analyst developer with a set of tools to let you build\nyour own bioimage analysis pipeline, without having to worry about the underlying infrastructure,\nand without having to reinvent the wheel."),(0,n.kt)("p",null,"As such we are trying to provide you with a set of tools that will help you to build your own\napplications, that you want to use for your own bioimage analysis. We also would like you to then\nhave an easy time sharing your analysis programs with others, so that they can use them as well."),(0,n.kt)("h2",{id:"what-is-arkitekt-not"},"What is Arkitekt not?"),(0,n.kt)("p",null,"Arkitekt is not a framework that will do the analysis for you. It is not a framework that will\nprovide you with a set of analysis tools. It is not a framework that will provide you with a\nset of analysis algorithms. It is a backbone for exactly this. But you will (and have to ) be the star\nof the show!"))}p.isMDXComponent=!0}}]);