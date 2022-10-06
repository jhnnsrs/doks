"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[33632],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,k=p["".concat(l,".").concat(u)]||p[u]||m[u]||s;return n?o.createElement(k,a(a({ref:t},d),{},{components:n})):o.createElement(k,a({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5913:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=n(87462),r=n(67294),s=n(3905);const a={id:"permission",title:"Permission",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,l={unversionedId:"schemas/mikro/objects/permission",id:"schemas/mikro/objects/permission",title:"Permission",description:"A Permission object",source:"@site/docs/schemas/mikro/objects/permission.mdx",sourceDirName:"schemas/mikro/objects",slug:"/schemas/mikro/objects/permission",permalink:"/doks/docs/schemas/mikro/objects/permission",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/mikro/objects/permission.mdx",tags:[],version:"current",frontMatter:{id:"permission",title:"Permission",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},c={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Permission.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-permissionbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Permission.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-permissionbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Permission.<b>codename</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-permissionbcodenamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Permission.<b>groupSet</b></code><Bullet /><code>[Group!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-permissionbgroupsetbcodegroup--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Permission.<b>userSet</b></code><Bullet /><code>[User!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-permissionbusersetbcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Permission.<b>unique</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-permissionbuniquebcodestring--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],m=()=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,s.kt)(r.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{class:"badge badge--"+e.class},e.text)),k={toc:d,Bullet:m,SpecifiedBy:p,Badge:u};function y(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"A Permission object"),(0,s.kt)("p",null,"This object represents a permission in the system. Permissions are\nused to control access to different parts of the system. Permissions\nare assigned to groups and users. A user has access to a part of the\nsystem if the user is a member of a group that has the permission\nassigned to it."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type Permission {\n  id: ID!\n  name: String!\n  codename: String!\n  groupSet: [Group!]!\n  userSet: [User!]!\n  unique: String!\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-permissionbidbcodeid--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"Permission.",(0,s.kt)("b",null,"id"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/id"},(0,s.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,s.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-permissionbnamebcodestring--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"Permission.",(0,s.kt)("b",null,"name"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,s.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-permissionbcodenamebcodestring--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"Permission.",(0,s.kt)("b",null,"codename"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,s.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-permissionbgroupsetbcodegroup--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"Permission.",(0,s.kt)("b",null,"groupSet"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/group"},(0,s.kt)("inlineCode",{parentName:"a"},"[Group!]!"))," ",(0,s.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-permissionbusersetbcodeuser--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"Permission.",(0,s.kt)("b",null,"userSet"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/user"},(0,s.kt)("inlineCode",{parentName:"a"},"[User!]!"))," ",(0,s.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Specific permissions for this user.")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-permissionbuniquebcodestring--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"Permission.",(0,s.kt)("b",null,"unique"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,s.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Unique ID for this permission")),(0,s.kt)("h3",{id:"returned-by"},"Returned by"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/permissions-for"},(0,s.kt)("inlineCode",{parentName:"a"},"permissionsFor")),"  ",(0,s.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"})),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/group"},(0,s.kt)("inlineCode",{parentName:"a"},"Group")),"  ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/permissions-of-return"},(0,s.kt)("inlineCode",{parentName:"a"},"PermissionsOfReturn")),"  ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);