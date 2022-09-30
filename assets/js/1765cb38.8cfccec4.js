"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[81258],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=i(a),u=n,k=p["".concat(s,".").concat(u)]||p[u]||g[u]||c;return a?r.createElement(k,o(o({ref:t},d),{},{components:a})):r.createElement(k,o({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var i=2;i<c;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},42033:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>g,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=a(87462),n=a(67294),c=a(3905);const o={id:"search-widget",title:"SearchWidget",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,s={unversionedId:"schemas/arkitekt/objects/search-widget",id:"schemas/arkitekt/objects/search-widget",title:"SearchWidget",description:"No description",source:"@site/docs/schemas/arkitekt/objects/search-widget.mdx",sourceDirName:"schemas/arkitekt/objects",slug:"/schemas/arkitekt/objects/search-widget",permalink:"/doks/docs/schemas/arkitekt/objects/search-widget",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/arkitekt/objects/search-widget.mdx",tags:[],version:"current",frontMatter:{id:"search-widget",title:"SearchWidget",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},i={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SearchWidget.<b>kind</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchwidgetbkindbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SearchWidget.<b>dependencies</b></code><Bullet /><code>[String]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchwidgetbdependenciesbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SearchWidget.<b>query</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchwidgetbquerybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SearchWidget.<b>ward</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-searchwidgetbwardbcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Widget</code> <Badge class="secondary" text="interface"/>',id:"widget-",level:4}],g=()=>(0,c.kt)(n.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,c.kt)(n.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,c.kt)(n.Fragment,null,(0,c.kt)("span",{class:"badge badge--"+e.class},e.text)),k={toc:d,Bullet:g,SpecifiedBy:p,Badge:u};function m(e){let{components:t,...a}=e;return(0,c.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type SearchWidget implements Widget {\n  kind: String!\n  dependencies: [String]\n  query: String!\n  ward: String!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-searchwidgetbkindbcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SearchWidget.",(0,c.kt)("b",null,"kind"))),(0,c.kt)(g,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-searchwidgetbdependenciesbcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SearchWidget.",(0,c.kt)("b",null,"dependencies"))),(0,c.kt)(g,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,c.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"The set-keys this widget depends on, check ",(0,c.kt)("em",{parentName:"p"},"query parameters"))),(0,c.kt)("h4",{id:"code-style-fontweight-normal-searchwidgetbquerybcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SearchWidget.",(0,c.kt)("b",null,"query"))),(0,c.kt)(g,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"A Complex description")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-searchwidgetbwardbcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SearchWidget.",(0,c.kt)("b",null,"ward"))),(0,c.kt)(g,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"A ward for the app to call")),(0,c.kt)("h3",{id:"interfaces"},"Interfaces"),(0,c.kt)("h4",{id:"widget-"},(0,c.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/interfaces/widget"},(0,c.kt)("inlineCode",{parentName:"a"},"Widget"))," ",(0,c.kt)(u,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null))}m.isMDXComponent=!0}}]);