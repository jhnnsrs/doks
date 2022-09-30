"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[59833],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>k});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=i(o),k=r,m=y["".concat(p,".").concat(k)]||y[k]||d[k]||n;return o?a.createElement(m,l(l({ref:t},c),{},{components:o})):a.createElement(m,l({ref:t},c))}));function k(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,l=new Array(n);l[0]=y;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<n;i++)l[i]=o[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}y.displayName="MDXCreateElement"},79923:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>k,Bullet:()=>d,SpecifiedBy:()=>y,assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=o(87462),r=o(67294),n=o(3905);const l={id:"app-repository",title:"AppRepository",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,p={unversionedId:"schemas/arkitekt/objects/app-repository",id:"schemas/arkitekt/objects/app-repository",title:"AppRepository",description:"No description",source:"@site/docs/schemas/arkitekt/objects/app-repository.mdx",sourceDirName:"schemas/arkitekt/objects",slug:"/schemas/arkitekt/objects/app-repository",permalink:"/doks/docs/schemas/arkitekt/objects/app-repository",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/arkitekt/objects/app-repository.mdx",tags:[],version:"current",frontMatter:{id:"app-repository",title:"AppRepository",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},i={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AppRepository.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-apprepositorybidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AppRepository.<b>installedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-apprepositorybinstalledatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AppRepository.<b>type</b></code><Bullet /><code>RepositoryType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-apprepositorybtypebcoderepositorytype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AppRepository.<b>name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-apprepositorybnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AppRepository.<b>unique</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-apprepositorybuniquebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AppRepository.<b>app</b></code><Bullet /><code>LokApp</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-apprepositorybappbcodelokapp-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AppRepository.<b>nodes</b></code><Bullet /><code>[Node]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-apprepositorybnodesbcodenode--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Repository</code> <Badge class="secondary" text="interface"/>',id:"repository-",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,n.kt)(r.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),y=e=>(0,n.kt)(r.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,n.kt)(r.Fragment,null,(0,n.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:c,Bullet:d,SpecifiedBy:y,Badge:k};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type AppRepository implements Repository {\n  id: ID!\n  installedAt: DateTime!\n  type: RepositoryType!\n  name: String\n  unique: String!\n  app: LokApp\n  nodes(\n  package: String\n): [Node]\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-apprepositorybidbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AppRepository.",(0,n.kt)("b",null,"id"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Id of the Repository")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-apprepositorybinstalledatbcodedatetime--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AppRepository.",(0,n.kt)("b",null,"installedAt"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/date-time"},(0,n.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,n.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-apprepositorybtypebcoderepositorytype--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AppRepository.",(0,n.kt)("b",null,"type"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/enums/repository-type"},(0,n.kt)("inlineCode",{parentName:"a"},"RepositoryType!"))," ",(0,n.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(k,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-apprepositorybnamebcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AppRepository.",(0,n.kt)("b",null,"name"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The Name of the Repository")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-apprepositorybuniquebcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AppRepository.",(0,n.kt)("b",null,"unique"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A world-unique identifier")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-apprepositorybappbcodelokapp-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AppRepository.",(0,n.kt)("b",null,"app"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/objects/lok-app"},(0,n.kt)("inlineCode",{parentName:"a"},"LokApp"))," ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The Associated App")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-apprepositorybnodesbcodenode--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AppRepository.",(0,n.kt)("b",null,"nodes"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/objects/node"},(0,n.kt)("inlineCode",{parentName:"a"},"[Node]"))," ",(0,n.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-apprepositorynodesbpackagebcodestring-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AppRepository.nodes.",(0,n.kt)("b",null,"package"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/docs/schemas/arkitekt/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"}))),(0,n.kt)("h3",{id:"interfaces"},"Interfaces"),(0,n.kt)("h4",{id:"repository-"},(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/interfaces/repository"},(0,n.kt)("inlineCode",{parentName:"a"},"Repository"))," ",(0,n.kt)(k,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/arkitekt/objects/lok-app"},(0,n.kt)("inlineCode",{parentName:"a"},"LokApp")),"  ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);