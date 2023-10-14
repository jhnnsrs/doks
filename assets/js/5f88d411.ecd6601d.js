"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[5209],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},25801:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"Live Graphs",sidebar_label:"Live Graphs",sidebar_position:1},o="KraphQL",s={unversionedId:"features/live_graphs",id:"features/live_graphs",title:"Live Graphs",description:"Arkitekt comes with experimental support for KraphQL, which is an extension of GraphQL syntax that allows you to query data through an GraphQL Api call and",source:"@site/docs/features/live_graphs.mdx",sourceDirName:"features",slug:"/features/live_graphs",permalink:"/docs/features/live_graphs",draft:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/features/live_graphs.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Live Graphs",sidebar_label:"Live Graphs",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Features",permalink:"/docs/category/features"},next:{title:"Live Queries",permalink:"/docs/features/live_queries"}},l={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kraphql"},"KraphQL"),(0,a.kt)("p",null,"Arkitekt comes with experimental support for KraphQL, which is an extension of GraphQL syntax that allows you to query data through an GraphQL Api call and\nallows you to describe the data of your plots in a declarative way.\nThis is useful for building dashboards and other applications that need to display live data."),(0,a.kt)("p",null,"Let's discover ",(0,a.kt)("strong",{parentName:"p"},"Live Graphs in less than 5 minutes"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kraphql",metastring:"live",live:!0},'query {\n  GROUP: dataset(id: 8) {\n    OBJECT: id\n    TYPE: __typename\n    NAME: name\n\n    DATA: representations(variety: VOXEL, limit: 10) {\n      FLATDATUM_OBJECT_AS_INDEX: id\n      FLATDATUM_VALUE_FROM_INT_AS_INDEX: id\n      FLATDATUM_TYPE_AS_INDEX: __typename\n\n\n\n      DATUM_AS_INCREASING: metric(key: "Increasing") {\n        OBJECT: id\n        VALUE_FROM_FLOAT: value\n\n      }\n\n\n      DATUM_AS_DECREASING: metric(key: "Decreasing") {\n        OBJECT: id\n        VALUE_FROM_FLOAT: value\n\n      }\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);