"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[10381],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const a={id:"node",title:"What is a Node?",sidebar_label:"Node",sidebar_position:1},i=void 0,l={unversionedId:"design/terminology/node",id:"design/terminology/node",title:"What is a Node?",description:"What is a node?",source:"@site/docs/design/terminology/node.md",sourceDirName:"design/terminology",slug:"/design/terminology/node",permalink:"/doks/docs/design/terminology/node",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/design/terminology/node.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"node",title:"What is a Node?",sidebar_label:"Node",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tasks",permalink:"/doks/docs/design/terminology/tasks"},next:{title:"Template",permalink:"/doks/docs/design/terminology/template"}},s={},d=[{value:"What is a node?",id:"what-is-a-node",level:2},{value:"Nodes are not",id:"nodes-are-not",level:2},{value:"Programming Analogy",id:"programming-analogy",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-a-node"},"What is a node?"),(0,o.kt)("p",null,"Nodes are a core conceptual element of the arkitekt platform, that represent the\nfunctionality that Arkitekt can do for you. "),(0,o.kt)("h2",{id:"nodes-are-not"},"Nodes are not"),(0,o.kt)("p",null,"One of the core concepts of Nodes are that they are not bound to an implementation. What do we mean with that:\nNodes are conceptual ideas about a specific task (like projecting an image)"),(0,o.kt)("h2",{id:"programming-analogy"},"Programming Analogy"),(0,o.kt)("p",null,"Everybody knows and loves functions, lets look at the sheer glory of one written in python:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\ndef project_image(image: Image, dim = "z") -> Image:\n    pro\n\n\nNodes are best explained in interplay with explaining it with a Template\n')))}p.isMDXComponent=!0}}]);