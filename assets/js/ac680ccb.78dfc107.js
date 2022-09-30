"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[20535],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>k});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(o),k=r,u=p["".concat(i,".").concat(k)]||p[k]||m[k]||n;return o?a.createElement(u,l(l({ref:t},d),{},{components:o})):a.createElement(u,l({ref:t},d))}));function k(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,l=new Array(n);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<n;c++)l[c]=o[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},21719:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>k,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=o(87462),r=o(67294),n=o(3905);const l={id:"rois",title:"rois",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,i={unversionedId:"schemas/mikro/queries/rois",id:"schemas/mikro/queries/rois",title:"rois",description:"All represetations",source:"@site/docs/schemas/mikro/queries/rois.mdx",sourceDirName:"schemas/mikro/queries",slug:"/schemas/mikro/queries/rois",permalink:"/doks/docs/schemas/mikro/queries/rois",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/mikro/queries/rois.mdx",tags:[],version:"current",frontMatter:{id:"rois",title:"rois",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},c={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>rois.<b>pinned</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-roisbpinnedbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>rois.<b>representation</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-roisbrepresentationbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>rois.<b>repname</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-roisbrepnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>rois.<b>createdAfter</b></code><Bullet /><code>DateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-roisbcreatedafterbcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>rois.<b>createdBefore</b></code><Bullet /><code>DateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-roisbcreatedbeforebcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>rois.<b>creator</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-roisbcreatorbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>rois.<b>ordering</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-roisborderingbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>rois.<b>tags</b></code><Bullet /><code>[String]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-roisbtagsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>rois.<b>type</b></code><Bullet /><code>[RoiTypeInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-roisbtypebcoderoitypeinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>rois.<b>limit</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-roisblimitbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>rois.<b>offset</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-roisboffsetbcodeint-",level:4},{value:"Type",id:"type",level:3},{value:'<code>ROI</code> <Badge class="secondary" text="object"/>',id:"roi-",level:4}],m=()=>(0,n.kt)(r.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,n.kt)(r.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,n.kt)(r.Fragment,null,(0,n.kt)("span",{class:"badge badge--"+e.class},e.text)),u={toc:d,Bullet:m,SpecifiedBy:p,Badge:k};function y(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"All represetations"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"rois(\n  pinned: Boolean\n  representation: ID\n  repname: String\n  createdAfter: DateTime\n  createdBefore: DateTime\n  creator: ID\n  ordering: String\n  tags: [String]\n  type: [RoiTypeInput]\n  limit: Int\n  offset: Int\n): [ROI]\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-roisbpinnedbcodeboolean-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"rois.",(0,n.kt)("b",null,"pinned"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Filter by pinned")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-roisbrepresentationbcodeid-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"rois.",(0,n.kt)("b",null,"representation"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-roisbrepnamebcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"rois.",(0,n.kt)("b",null,"repname"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-roisbcreatedafterbcodedatetime-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"rois.",(0,n.kt)("b",null,"createdAfter"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/date-time"},(0,n.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-roisbcreatedbeforebcodedatetime-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"rois.",(0,n.kt)("b",null,"createdBefore"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/date-time"},(0,n.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-roisbcreatorbcodeid-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"rois.",(0,n.kt)("b",null,"creator"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-roisborderingbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"rois.",(0,n.kt)("b",null,"ordering"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Ordering")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-roisbtagsbcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"rois.",(0,n.kt)("b",null,"tags"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,n.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The tags you want to filter by")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-roisbtypebcoderoitypeinput--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"rois.",(0,n.kt)("b",null,"type"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/enums/roi-type-input"},(0,n.kt)("inlineCode",{parentName:"a"},"[RoiTypeInput]"))," ",(0,n.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(k,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-roisblimitbcodeint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"rois.",(0,n.kt)("b",null,"limit"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Query limit")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-roisboffsetbcodeint-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"rois.",(0,n.kt)("b",null,"offset"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Query offset")),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"roi-"},(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/roi"},(0,n.kt)("inlineCode",{parentName:"a"},"ROI"))," ",(0,n.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null))}y.isMDXComponent=!0}}]);