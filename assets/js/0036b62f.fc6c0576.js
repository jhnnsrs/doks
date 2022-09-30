"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[80471],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>k});var l=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,l,o=function(e,t){if(null==e)return{};var a,l,o={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=l.createContext({}),d=function(e){var t=l.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},i=function(e){var t=d(e.components);return l.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},b=l.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=d(a),k=o,p=b["".concat(c,".").concat(k)]||b[k]||m[k]||n;return a?l.createElement(p,r(r({ref:t},i),{},{components:a})):l.createElement(p,r({ref:t},i))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,r=new Array(n);r[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<n;d++)r[d]=a[d];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}b.displayName="MDXCreateElement"},59320:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>k,Bullet:()=>m,SpecifiedBy:()=>b,assets:()=>d,contentTitle:()=>s,default:()=>y,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var l=a(87462),o=a(67294),n=a(3905);const r={id:"table",title:"Table",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,c={unversionedId:"schemas/mikro/objects/table",id:"schemas/mikro/objects/table",title:"Table",description:"No description",source:"@site/docs/schemas/mikro/objects/table.mdx",sourceDirName:"schemas/mikro/objects",slug:"/schemas/mikro/objects/table",permalink:"/doks/docs/schemas/mikro/objects/table",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/mikro/objects/table.mdx",tags:[],version:"current",frontMatter:{id:"table",title:"Table",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},d={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Table.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-tablebidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Table.<b>representation</b></code><Bullet /><code>Representation</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-tablebrepresentationbcoderepresentation-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Table.<b>sample</b></code><Bullet /><code>Sample</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-tablebsamplebcodesample-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Table.<b>experiment</b></code><Bullet /><code>Experiment</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-tablebexperimentbcodeexperiment-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Table.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-tablebnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Table.<b>columns</b></code><Bullet /><code>[Column]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-tablebcolumnsbcodecolumn--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Table.<b>store</b></code><Bullet /><code>Parquet</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-tablebstorebcodeparquet-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Table.<b>pinnedBy</b></code><Bullet /><code>[User!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-tablebpinnedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Table.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-tablebcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Table.<b>creator</b></code><Bullet /><code>User</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-tablebcreatorbcodeuser-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Table.<b>tags</b></code><Bullet /><code>[String]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-tablebtagsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Table.<b>query</b></code><Bullet /><code>[GenericScalar]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-tablebquerybcodegenericscalar--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Table.query.<b>offset</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-tablequeryboffsetbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Table.query.<b>limit</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-tablequeryblimitbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Table.query.<b>query</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-tablequerybquerybcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Table.<b>pinned</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-tablebpinnedbcodeboolean-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],m=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{class:"badge badge--"+e.class},e.text)),p={toc:i,Bullet:m,SpecifiedBy:b,Badge:k};function y(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type Table {\n  id: ID!\n  representation: Representation\n  sample: Sample\n  experiment: Experiment\n  name: String!\n  columns(\n  only: [String]\n): [Column]\n  store: Parquet\n  pinnedBy: [User!]!\n  createdAt: DateTime!\n  creator: User\n  tags: [String]\n  query(\n  only: [String]\n  offset: Int\n  limit: Int\n  query: String\n): [GenericScalar]\n  pinned: Boolean\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-tablebidbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Table.",(0,n.kt)("b",null,"id"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-tablebrepresentationbcoderepresentation-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Table.",(0,n.kt)("b",null,"representation"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/representation"},(0,n.kt)("inlineCode",{parentName:"a"},"Representation"))," ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-tablebsamplebcodesample-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Table.",(0,n.kt)("b",null,"sample"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/sample"},(0,n.kt)("inlineCode",{parentName:"a"},"Sample"))," ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-tablebexperimentbcodeexperiment-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Table.",(0,n.kt)("b",null,"experiment"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/experiment"},(0,n.kt)("inlineCode",{parentName:"a"},"Experiment"))," ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-tablebnamebcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Table.",(0,n.kt)("b",null,"name"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-tablebcolumnsbcodecolumn--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Table.",(0,n.kt)("b",null,"columns"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/column"},(0,n.kt)("inlineCode",{parentName:"a"},"[Column]"))," ",(0,n.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Columns Data"),(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-tablecolumnsbonlybcodestring--"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Table.columns.",(0,n.kt)("b",null,"only"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/docs/schemas/mikro/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,n.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("p",{parentName:"blockquote"},"Columns you want to select")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-tablebstorebcodeparquet-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Table.",(0,n.kt)("b",null,"store"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/parquet"},(0,n.kt)("inlineCode",{parentName:"a"},"Parquet"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-tablebpinnedbybcodeuser--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Table.",(0,n.kt)("b",null,"pinnedBy"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/user"},(0,n.kt)("inlineCode",{parentName:"a"},"[User!]!"))," ",(0,n.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-tablebcreatedatbcodedatetime--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Table.",(0,n.kt)("b",null,"createdAt"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/date-time"},(0,n.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,n.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-tablebcreatorbcodeuser-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Table.",(0,n.kt)("b",null,"creator"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/user"},(0,n.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-tablebtagsbcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Table.",(0,n.kt)("b",null,"tags"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,n.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A comma-separated list of tags.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-tablebquerybcodegenericscalar--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Table.",(0,n.kt)("b",null,"query"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/generic-scalar"},(0,n.kt)("inlineCode",{parentName:"a"},"[GenericScalar]"))," ",(0,n.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"List of Records"),(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-tablequerybonlybcodestring--"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Table.query.",(0,n.kt)("b",null,"only"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/docs/schemas/mikro/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,n.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("p",{parentName:"blockquote"},"Columns you want to select")),(0,n.kt)("h5",{id:"code-style-fontweight-normal-tablequeryboffsetbcodeint-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Table.query.",(0,n.kt)("b",null,"offset"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/docs/schemas/mikro/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The Offset for the query")),(0,n.kt)("h5",{id:"code-style-fontweight-normal-tablequeryblimitbcodeint-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Table.query.",(0,n.kt)("b",null,"limit"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/docs/schemas/mikro/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The Offset for the query")),(0,n.kt)("h5",{id:"code-style-fontweight-normal-tablequerybquerybcodestring-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Table.query.",(0,n.kt)("b",null,"query"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/docs/schemas/mikro/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The Query for the query")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-tablebpinnedbcodeboolean-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Table.",(0,n.kt)("b",null,"pinned"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"returned-by"},"Returned by"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/create-table"},(0,n.kt)("inlineCode",{parentName:"a"},"createTable")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/from-df"},(0,n.kt)("inlineCode",{parentName:"a"},"fromDf")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/mytables"},(0,n.kt)("inlineCode",{parentName:"a"},"mytables")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/table"},(0,n.kt)("inlineCode",{parentName:"a"},"table")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/tables"},(0,n.kt)("inlineCode",{parentName:"a"},"tables")),"  ",(0,n.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/update-table"},(0,n.kt)("inlineCode",{parentName:"a"},"updateTable")),"  ",(0,n.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"})),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/experiment"},(0,n.kt)("inlineCode",{parentName:"a"},"Experiment")),"  ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/representation"},(0,n.kt)("inlineCode",{parentName:"a"},"Representation")),"  ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/sample"},(0,n.kt)("inlineCode",{parentName:"a"},"Sample")),"  ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/tables-event"},(0,n.kt)("inlineCode",{parentName:"a"},"TablesEvent")),"  ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);