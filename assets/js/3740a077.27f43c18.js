"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[78561],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var s=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,g=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return n?s.createElement(g,o(o({ref:t},m),{},{components:n})):s.createElement(g,o({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1949:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var s=n(87462),a=n(67294),r=n(3905);const o={id:"change-permissions",title:"changePermissions",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,l={unversionedId:"schemas/arkitekt/mutations/change-permissions",id:"schemas/arkitekt/mutations/change-permissions",title:"changePermissions",description:"Creates a Sample",source:"@site/docs/schemas/arkitekt/mutations/change-permissions.mdx",sourceDirName:"schemas/arkitekt/mutations",slug:"/schemas/arkitekt/mutations/change-permissions",permalink:"/doks/docs/schemas/arkitekt/mutations/change-permissions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/arkitekt/mutations/change-permissions.mdx",tags:[],version:"current",frontMatter:{id:"change-permissions",title:"changePermissions",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},c={},m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>changePermissions.<b>groupAssignments</b></code><Bullet /><code>[GroupAssignmentInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-changepermissionsbgroupassignmentsbcodegroupassignmentinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>changePermissions.<b>object</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-changepermissionsbobjectbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>changePermissions.<b>type</b></code><Bullet /><code>AvailableModels!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-changepermissionsbtypebcodeavailablemodels--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>changePermissions.<b>userAssignments</b></code><Bullet /><code>[UserAssignmentInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-changepermissionsbuserassignmentsbcodeuserassignmentinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>ChangePermissionsResult</code> <Badge class="secondary" text="object"/>',id:"changepermissionsresult-",level:4}],d=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),g={toc:m,Bullet:d,SpecifiedBy:p,Badge:u};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Creates a Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"changePermissions(\n  groupAssignments: [GroupAssignmentInput]\n  object: ID!\n  type: AvailableModels!\n  userAssignments: [UserAssignmentInput]\n): ChangePermissionsResult\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-changepermissionsbgroupassignmentsbcodegroupassignmentinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"changePermissions.",(0,r.kt)("b",null,"groupAssignments"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/inputs/group-assignment-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[GroupAssignmentInput]"))," ",(0,r.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-changepermissionsbobjectbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"changePermissions.",(0,r.kt)("b",null,"object"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The Representationss this sROI belongs to")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-changepermissionsbtypebcodeavailablemodels--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"changePermissions.",(0,r.kt)("b",null,"type"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/enums/available-models"},(0,r.kt)("inlineCode",{parentName:"a"},"AvailableModels!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-changepermissionsbuserassignmentsbcodeuserassignmentinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"changePermissions.",(0,r.kt)("b",null,"userAssignments"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/inputs/user-assignment-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[UserAssignmentInput]"))," ",(0,r.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"changepermissionsresult-"},(0,r.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/objects/change-permissions-result"},(0,r.kt)("inlineCode",{parentName:"a"},"ChangePermissionsResult"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null))}h.isMDXComponent=!0}}]);