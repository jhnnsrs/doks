"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[62046],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,f=u["".concat(l,".").concat(p)]||u[p]||m[p]||o;return n?s.createElement(f,a(a({ref:t},d),{},{components:n})):s.createElement(f,a({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94825:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>m,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=n(87462),r=n(67294),o=n(3905);const a={id:"permissions-of-return",title:"PermissionsOfReturn",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,l={unversionedId:"schemas/arkitekt/objects/permissions-of-return",id:"schemas/arkitekt/objects/permissions-of-return",title:"PermissionsOfReturn",description:"No description",source:"@site/docs/schemas/arkitekt/objects/permissions-of-return.mdx",sourceDirName:"schemas/arkitekt/objects",slug:"/schemas/arkitekt/objects/permissions-of-return",permalink:"/doks/docs/schemas/arkitekt/objects/permissions-of-return",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/arkitekt/objects/permissions-of-return.mdx",tags:[],version:"current",frontMatter:{id:"permissions-of-return",title:"PermissionsOfReturn",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},c={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PermissionsOfReturn.<b>available</b></code><Bullet /><code>[Permission]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-permissionsofreturnbavailablebcodepermission--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PermissionsOfReturn.<b>userAssignments</b></code><Bullet /><code>[UserAssignment]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-permissionsofreturnbuserassignmentsbcodeuserassignment--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PermissionsOfReturn.<b>groupAssignments</b></code><Bullet /><code>[GroupAssignment]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-permissionsofreturnbgroupassignmentsbcodegroupassignment--",level:4},{value:"Returned by",id:"returned-by",level:3}],m=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:m,SpecifiedBy:u,Badge:p};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,s.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PermissionsOfReturn {\n  available: [Permission]\n  userAssignments: [UserAssignment]\n  groupAssignments: [GroupAssignment]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-permissionsofreturnbavailablebcodepermission--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PermissionsOfReturn.",(0,o.kt)("b",null,"available"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/objects/permission"},(0,o.kt)("inlineCode",{parentName:"a"},"[Permission]"))," ",(0,o.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-permissionsofreturnbuserassignmentsbcodeuserassignment--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PermissionsOfReturn.",(0,o.kt)("b",null,"userAssignments"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/objects/user-assignment"},(0,o.kt)("inlineCode",{parentName:"a"},"[UserAssignment]"))," ",(0,o.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-permissionsofreturnbgroupassignmentsbcodegroupassignment--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PermissionsOfReturn.",(0,o.kt)("b",null,"groupAssignments"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/objects/group-assignment"},(0,o.kt)("inlineCode",{parentName:"a"},"[GroupAssignment]"))," ",(0,o.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/schemas/arkitekt/queries/permissions-of"},(0,o.kt)("inlineCode",{parentName:"a"},"permissionsOf")),"  ",(0,o.kt)(p,{class:"secondary",text:"query",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);