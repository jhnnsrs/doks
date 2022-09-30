"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[81012],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>p});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),d=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=d(r),p=o,u=m["".concat(c,".").concat(p)]||m[p]||g[p]||n;return r?a.createElement(u,l(l({ref:t},i),{},{components:r})):a.createElement(u,l({ref:t},i))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var d=2;d<n;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},10140:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>g,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var a=r(87462),o=r(67294),n=r(3905);const l={id:"arg-port",title:"ArgPort",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,c={unversionedId:"schemas/fluss/objects/arg-port",id:"schemas/fluss/objects/arg-port",title:"ArgPort",description:"No description",source:"@site/docs/schemas/fluss/objects/arg-port.mdx",sourceDirName:"schemas/fluss/objects",slug:"/schemas/fluss/objects/arg-port",permalink:"/doks/docs/schemas/fluss/objects/arg-port",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/fluss/objects/arg-port.mdx",tags:[],version:"current",frontMatter:{id:"arg-port",title:"ArgPort",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},d={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ArgPort.<b>key</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-argportbkeybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ArgPort.<b>nullable</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-argportbnullablebcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ArgPort.<b>default</b></code><Bullet /><code>Any</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-argportbdefaultbcodeany-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ArgPort.<b>identifier</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-argportbidentifierbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ArgPort.<b>name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-argportbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ArgPort.<b>kind</b></code><Bullet /><code>StreamKind!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-argportbkindbcodestreamkind--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ArgPort.<b>child</b></code><Bullet /><code>ArgPortChild</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-argportbchildbcodeargportchild-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ArgPort.<b>label</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-argportblabelbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ArgPort.<b>description</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-argportbdescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ArgPort.<b>widget</b></code><Bullet /><code>Widget</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-argportbwidgetbcodewidget-",level:4},{value:"Member of",id:"member-of",level:3}],g=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{class:"badge badge--"+e.class},e.text)),u={toc:i,Bullet:g,SpecifiedBy:m,Badge:p};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type ArgPort {\n  key: String!\n  nullable: Boolean!\n  default: Any\n  identifier: String\n  name: String\n  kind: StreamKind!\n  child: ArgPortChild\n  label: String\n  description: String\n  widget: Widget\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-argportbkeybcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"ArgPort.",(0,n.kt)("b",null,"key"))),(0,n.kt)(g,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-argportbnullablebcodeboolean--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"ArgPort.",(0,n.kt)("b",null,"nullable"))),(0,n.kt)(g,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,n.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The key of the arg")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-argportbdefaultbcodeany-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"ArgPort.",(0,n.kt)("b",null,"default"))),(0,n.kt)(g,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/any"},(0,n.kt)("inlineCode",{parentName:"a"},"Any"))," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-argportbidentifierbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"ArgPort.",(0,n.kt)("b",null,"identifier"))),(0,n.kt)(g,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-argportbnamebcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"ArgPort.",(0,n.kt)("b",null,"name"))),(0,n.kt)(g,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-argportbkindbcodestreamkind--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"ArgPort.",(0,n.kt)("b",null,"kind"))),(0,n.kt)(g,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/enums/stream-kind"},(0,n.kt)("inlineCode",{parentName:"a"},"StreamKind!"))," ",(0,n.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-argportbchildbcodeargportchild-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"ArgPort.",(0,n.kt)("b",null,"child"))),(0,n.kt)(g,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/objects/arg-port-child"},(0,n.kt)("inlineCode",{parentName:"a"},"ArgPortChild"))," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-argportblabelbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"ArgPort.",(0,n.kt)("b",null,"label"))),(0,n.kt)(g,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-argportbdescriptionbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"ArgPort.",(0,n.kt)("b",null,"description"))),(0,n.kt)(g,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-argportbwidgetbcodewidget-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"ArgPort.",(0,n.kt)("b",null,"widget"))),(0,n.kt)(g,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/objects/widget"},(0,n.kt)("inlineCode",{parentName:"a"},"Widget"))," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/objects/flow-graph"},(0,n.kt)("inlineCode",{parentName:"a"},"FlowGraph")),"  ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);