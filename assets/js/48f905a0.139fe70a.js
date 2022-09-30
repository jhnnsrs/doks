"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[49530],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>k});var r=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},i=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),c=d(a),k=s,u=c["".concat(p,".").concat(k)]||c[k]||l[k]||n;return a?r.createElement(u,m(m({ref:t},i),{},{components:a})):r.createElement(u,m({ref:t},i))}));function k(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,m=new Array(n);m[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:s,m[1]=o;for(var d=2;d<n;d++)m[d]=a[d];return r.createElement.apply(null,m)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5370:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>k,Bullet:()=>l,SpecifiedBy:()=>c,assets:()=>d,contentTitle:()=>o,default:()=>y,frontMatter:()=>m,metadata:()=>p,toc:()=>i});var r=a(87462),s=a(67294),n=a(3905);const m={id:"id",title:"ID",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},o=void 0,p={unversionedId:"schemas/mikro/scalars/id",id:"schemas/mikro/scalars/id",title:"ID",description:'The ID scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as "4") or integer (such as 4) input value will be accepted as an ID.',source:"@site/docs/schemas/mikro/scalars/id.mdx",sourceDirName:"schemas/mikro/scalars",slug:"/schemas/mikro/scalars/id",permalink:"/doks/docs/schemas/mikro/scalars/id",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/mikro/scalars/id.mdx",tags:[],version:"current",frontMatter:{id:"id",title:"ID",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},d={},i=[{value:"Member of",id:"member-of",level:3}],l=()=>(0,n.kt)(s.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,n.kt)(s.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,n.kt)(s.Fragment,null,(0,n.kt)("span",{class:"badge badge--"+e.class},e.text)),u={toc:i,Bullet:l,SpecifiedBy:c,Badge:k};function y(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"ID")," scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as ",(0,n.kt)("inlineCode",{parentName:"p"},'"4"'),") or integer (such as ",(0,n.kt)("inlineCode",{parentName:"p"},"4"),") input value will be accepted as an ID."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar ID\n")),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/change-permissions"},(0,n.kt)("inlineCode",{parentName:"a"},"changePermissions")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/columnsof"},(0,n.kt)("inlineCode",{parentName:"a"},"columnsof")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/comment"},(0,n.kt)("inlineCode",{parentName:"a"},"Comment")),"  ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/commentsfor"},(0,n.kt)("inlineCode",{parentName:"a"},"commentsfor")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/create-comment"},(0,n.kt)("inlineCode",{parentName:"a"},"createComment")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/createfeature"},(0,n.kt)("inlineCode",{parentName:"a"},"createfeature")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/create-label"},(0,n.kt)("inlineCode",{parentName:"a"},"createLabel")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/create-metric"},(0,n.kt)("inlineCode",{parentName:"a"},"createMetric")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/create-roi"},(0,n.kt)("inlineCode",{parentName:"a"},"createROI")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/create-sample"},(0,n.kt)("inlineCode",{parentName:"a"},"createSample")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/create-table"},(0,n.kt)("inlineCode",{parentName:"a"},"createTable")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/delete-experiment"},(0,n.kt)("inlineCode",{parentName:"a"},"deleteExperiment")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/delete-omero-file"},(0,n.kt)("inlineCode",{parentName:"a"},"deleteOmeroFile")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/delete-plot"},(0,n.kt)("inlineCode",{parentName:"a"},"deletePlot")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/delete-representation"},(0,n.kt)("inlineCode",{parentName:"a"},"deleteRepresentation")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/delete-roi"},(0,n.kt)("inlineCode",{parentName:"a"},"deleteROI")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/delete-sample"},(0,n.kt)("inlineCode",{parentName:"a"},"deleteSample")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/delete-table"},(0,n.kt)("inlineCode",{parentName:"a"},"deleteTable")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/experiment"},(0,n.kt)("inlineCode",{parentName:"a"},"Experiment")),"  ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/experiment"},(0,n.kt)("inlineCode",{parentName:"a"},"experiment")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/experiments"},(0,n.kt)("inlineCode",{parentName:"a"},"experiments")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/experiments-event"},(0,n.kt)("inlineCode",{parentName:"a"},"ExperimentsEvent")),"  ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/feature"},(0,n.kt)("inlineCode",{parentName:"a"},"Feature")),"  ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/feature"},(0,n.kt)("inlineCode",{parentName:"a"},"feature")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/features"},(0,n.kt)("inlineCode",{parentName:"a"},"features")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/from-df"},(0,n.kt)("inlineCode",{parentName:"a"},"fromDf")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/from-xarray"},(0,n.kt)("inlineCode",{parentName:"a"},"fromXArray")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/group"},(0,n.kt)("inlineCode",{parentName:"a"},"Group")),"  ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/inputs/group-assignment-input"},(0,n.kt)("inlineCode",{parentName:"a"},"GroupAssignmentInput")),"  ",(0,n.kt)(k,{class:"secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/instrument"},(0,n.kt)("inlineCode",{parentName:"a"},"Instrument")),"  ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/instrument"},(0,n.kt)("inlineCode",{parentName:"a"},"instrument")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/label"},(0,n.kt)("inlineCode",{parentName:"a"},"Label")),"  ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/label"},(0,n.kt)("inlineCode",{parentName:"a"},"label")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/label-for"},(0,n.kt)("inlineCode",{parentName:"a"},"labelFor")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/labels"},(0,n.kt)("inlineCode",{parentName:"a"},"labels")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/mention-event"},(0,n.kt)("inlineCode",{parentName:"a"},"MentionEvent")),"  ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/metric"},(0,n.kt)("inlineCode",{parentName:"a"},"Metric")),"  ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/metric"},(0,n.kt)("inlineCode",{parentName:"a"},"metric")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/metrics"},(0,n.kt)("inlineCode",{parentName:"a"},"metrics")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/myexperiments"},(0,n.kt)("inlineCode",{parentName:"a"},"myexperiments")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/myrepresentations"},(0,n.kt)("inlineCode",{parentName:"a"},"myrepresentations")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/subscriptions/my-representations"},(0,n.kt)("inlineCode",{parentName:"a"},"myRepresentations")),"  ",(0,n.kt)(k,{class:"secondary",text:"subscription",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/mysamples"},(0,n.kt)("inlineCode",{parentName:"a"},"mysamples")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/mytables"},(0,n.kt)("inlineCode",{parentName:"a"},"mytables")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/omero"},(0,n.kt)("inlineCode",{parentName:"a"},"Omero")),"  ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/omero-file"},(0,n.kt)("inlineCode",{parentName:"a"},"OmeroFile")),"  ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/omerofile"},(0,n.kt)("inlineCode",{parentName:"a"},"omerofile")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/inputs/omero-representation-input"},(0,n.kt)("inlineCode",{parentName:"a"},"OmeroRepresentationInput")),"  ",(0,n.kt)(k,{class:"secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/permission"},(0,n.kt)("inlineCode",{parentName:"a"},"Permission")),"  ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/permissions-of"},(0,n.kt)("inlineCode",{parentName:"a"},"permissionsOf")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/pin-experiment"},(0,n.kt)("inlineCode",{parentName:"a"},"pinExperiment")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/pin-representation"},(0,n.kt)("inlineCode",{parentName:"a"},"pinRepresentation")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/pin-roi"},(0,n.kt)("inlineCode",{parentName:"a"},"pinROI")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/pin-sample"},(0,n.kt)("inlineCode",{parentName:"a"},"pinSample")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/plot"},(0,n.kt)("inlineCode",{parentName:"a"},"Plot")),"  ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/plot"},(0,n.kt)("inlineCode",{parentName:"a"},"plot")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/representation"},(0,n.kt)("inlineCode",{parentName:"a"},"Representation")),"  ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/representation"},(0,n.kt)("inlineCode",{parentName:"a"},"representation")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/representation-event"},(0,n.kt)("inlineCode",{parentName:"a"},"RepresentationEvent")),"  ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/representations"},(0,n.kt)("inlineCode",{parentName:"a"},"representations")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/roi"},(0,n.kt)("inlineCode",{parentName:"a"},"ROI")),"  ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/roi"},(0,n.kt)("inlineCode",{parentName:"a"},"roi")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/roi-event"},(0,n.kt)("inlineCode",{parentName:"a"},"RoiEvent")),"  ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/rois"},(0,n.kt)("inlineCode",{parentName:"a"},"rois")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/subscriptions/rois"},(0,n.kt)("inlineCode",{parentName:"a"},"rois")),"  ",(0,n.kt)(k,{class:"secondary",text:"subscription",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/sample"},(0,n.kt)("inlineCode",{parentName:"a"},"Sample")),"  ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/sample"},(0,n.kt)("inlineCode",{parentName:"a"},"sample")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/samples"},(0,n.kt)("inlineCode",{parentName:"a"},"samples")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/samples-event"},(0,n.kt)("inlineCode",{parentName:"a"},"SamplesEvent")),"  ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/table"},(0,n.kt)("inlineCode",{parentName:"a"},"Table")),"  ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/table"},(0,n.kt)("inlineCode",{parentName:"a"},"table")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/tables"},(0,n.kt)("inlineCode",{parentName:"a"},"tables")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/tables-event"},(0,n.kt)("inlineCode",{parentName:"a"},"TablesEvent")),"  ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/tag"},(0,n.kt)("inlineCode",{parentName:"a"},"Tag")),"  ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/thumbnail"},(0,n.kt)("inlineCode",{parentName:"a"},"Thumbnail")),"  ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/thumbnail"},(0,n.kt)("inlineCode",{parentName:"a"},"thumbnail")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/thumbnails"},(0,n.kt)("inlineCode",{parentName:"a"},"thumbnails")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/update-experiment"},(0,n.kt)("inlineCode",{parentName:"a"},"updateExperiment")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/update-omero-file"},(0,n.kt)("inlineCode",{parentName:"a"},"updateOmeroFile")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/update-plot"},(0,n.kt)("inlineCode",{parentName:"a"},"updatePlot")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/update-representation"},(0,n.kt)("inlineCode",{parentName:"a"},"updateRepresentation")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/update-sample"},(0,n.kt)("inlineCode",{parentName:"a"},"updateSample")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/update-table"},(0,n.kt)("inlineCode",{parentName:"a"},"updateTable")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/upload-thumbnail"},(0,n.kt)("inlineCode",{parentName:"a"},"uploadThumbnail")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(l,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/user"},(0,n.kt)("inlineCode",{parentName:"a"},"User")),"  ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);