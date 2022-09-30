"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[5570],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>p});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),c=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=c(a),p=n,f=u["".concat(d,".").concat(p)]||u[p]||m[p]||l;return a?r.createElement(f,o(o({ref:t},i),{},{components:a})):r.createElement(f,o({ref:t},i))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},48805:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>m,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var r=a(87462),n=a(67294),l=a(3905);const o={id:"diagram",title:"Diagram",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,d={unversionedId:"schemas/fluss/objects/diagram",id:"schemas/fluss/objects/diagram",title:"Diagram",description:"No description",source:"@site/docs/schemas/fluss/objects/diagram.mdx",sourceDirName:"schemas/fluss/objects",slug:"/schemas/fluss/objects/diagram",permalink:"/doks/docs/schemas/fluss/objects/diagram",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/fluss/objects/diagram.mdx",tags:[],version:"current",frontMatter:{id:"diagram",title:"Diagram",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},c={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Diagram.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-diagrambidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Diagram.<b>name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-diagrambnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Diagram.<b>creator</b></code><Bullet /><code>User</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-diagrambcreatorbcodeuser-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Diagram.<b>flows</b></code><Bullet /><code>[Flow!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-diagrambflowsbcodeflow--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Diagram.<b>latestFlow</b></code><Bullet /><code>Flow</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-diagramblatestflowbcodeflow-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],m=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:i,Bullet:m,SpecifiedBy:u,Badge:p};function g(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Diagram {\n  id: ID!\n  name: String\n  creator: User\n  flows: [Flow!]!\n  latestFlow: Flow\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-diagrambidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Diagram.",(0,l.kt)("b",null,"id"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-diagrambnamebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Diagram.",(0,l.kt)("b",null,"name"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-diagrambcreatorbcodeuser-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Diagram.",(0,l.kt)("b",null,"creator"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/objects/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-diagrambflowsbcodeflow--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Diagram.",(0,l.kt)("b",null,"flows"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/objects/flow"},(0,l.kt)("inlineCode",{parentName:"a"},"[Flow!]!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-diagramblatestflowbcodeflow-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Diagram.",(0,l.kt)("b",null,"latestFlow"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/objects/flow"},(0,l.kt)("inlineCode",{parentName:"a"},"Flow"))," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The latest flow")),(0,l.kt)("h3",{id:"returned-by"},"Returned by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/queries/diagram"},(0,l.kt)("inlineCode",{parentName:"a"},"diagram")),"  ",(0,l.kt)(p,{class:"secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/queries/diagrams"},(0,l.kt)("inlineCode",{parentName:"a"},"diagrams")),"  ",(0,l.kt)(p,{class:"secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/mutations/drawvanilla"},(0,l.kt)("inlineCode",{parentName:"a"},"drawvanilla")),"  ",(0,l.kt)(p,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/queries/mydiagrams"},(0,l.kt)("inlineCode",{parentName:"a"},"mydiagrams")),"  ",(0,l.kt)(p,{class:"secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/mutations/updatediagram"},(0,l.kt)("inlineCode",{parentName:"a"},"updatediagram")),"  ",(0,l.kt)(p,{class:"secondary",text:"mutation",mdxType:"Badge"})),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/objects/flow"},(0,l.kt)("inlineCode",{parentName:"a"},"Flow")),"  ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/objects/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User")),"  ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);