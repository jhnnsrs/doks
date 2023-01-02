"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[64152],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),h=o,f=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99498:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={id:"Intro",title:"Intro",sidebar_label:"Intro"},i=void 0,l={unversionedId:"developers/python/Intro",id:"developers/python/Intro",title:"Intro",description:"Python as the reference",source:"@site/docs/developers/python/intro.md",sourceDirName:"developers/python",slug:"/developers/python/Intro",permalink:"/doks/docs/developers/python/Intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/developers/python/intro.md",tags:[],version:"current",frontMatter:{id:"Intro",title:"Intro",sidebar_label:"Intro"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/doks/docs/developers/python/installation"},next:{title:"The basics",permalink:"/doks/docs/developers/python/my-first-app"}},s={},p=[{value:"Python as the reference",id:"python-as-the-reference",level:2},{value:"Before we start",id:"before-we-start",level:2},{value:"What we will cover",id:"what-we-will-cover",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"python-as-the-reference"},"Python as the reference"),(0,o.kt)("p",null,"Python is our reference implementation for Arkitekt. It is the language we used to develop the core of Arkitekt in, and at the moment a first class citizen language to develop apps in. We are working on making it easy to develop apps in other languages as well, but for now if you are using Python, you are in luck."),(0,o.kt)("h2",{id:"before-we-start"},"Before we start"),(0,o.kt)("p",null,"This tutorial assumes that you have a basic understanding of Python, and that you have a basic understanding of how to use the command line. If you don't, we recommend that you take a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.python.org/3/tutorial/index.html"},"Python Tutorial")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://www.makeuseof.com/tag/a-beginners-guide-to-the-command-line/"},"Command Line Tutorial"),"."),(0,o.kt)("p",null,"This tutorial also assumes that you have a basic understanding of some of the terminology that we use in Arkitekt. If you don't, we recommend that you take a look at the ",(0,o.kt)("a",{parentName:"p",href:"/doks/docs/design/terminology/why"},"Terminology")," page."),(0,o.kt)("h2",{id:"what-we-will-cover"},"What we will cover"),(0,o.kt)("p",null,"In this tutorial we will cover the following topics:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#installing-arkitekt"},"Installing Arkitekt Client")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#creating-a-new-app"},"Creating a new app")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#creating-your-first-node"},"Creating your first Node")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#accessing-the-data"},"Accessing your data"))))}u.isMDXComponent=!0}}]);