"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[28736],{3905:(e,t,o)=>{o.d(t,{Zo:()=>i,kt:()=>k});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=a.createContext({}),d=function(e){var t=a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},i=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=d(o),k=n,y=p["".concat(c,".").concat(k)]||p[k]||m[k]||r;return o?a.createElement(y,l(l({ref:t},i),{},{components:o})):a.createElement(y,l({ref:t},i))}));function k(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,l=new Array(r);l[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var d=2;d<r;d++)l[d]=o[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},99977:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>k,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var a=o(87462),n=o(67294),r=o(3905);const l={id:"roi",title:"ROI",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,c={unversionedId:"schemas/mikro/objects/roi",id:"schemas/mikro/objects/roi",title:"ROI",description:"No description",source:"@site/docs/schemas/mikro/objects/roi.mdx",sourceDirName:"schemas/mikro/objects",slug:"/schemas/mikro/objects/roi",permalink:"/doks/docs/schemas/mikro/objects/roi",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/mikro/objects/roi.mdx",tags:[],version:"current",frontMatter:{id:"roi",title:"ROI",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},d={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ROI.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-roibidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ROI.<b>nodeid</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-roibnodeidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ROI.<b>creator</b></code><Bullet /><code>User!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-roibcreatorbcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ROI.<b>vectors</b></code><Bullet /><code>[Vector]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-roibvectorsbcodevector--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ROI.<b>type</b></code><Bullet /><code>ROIType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-roibtypebcoderoitype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ROI.<b>color</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-roibcolorbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ROI.<b>signature</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-roibsignaturebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ROI.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-roibcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ROI.<b>representation</b></code><Bullet /><code>Representation</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-roibrepresentationbcoderepresentation-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ROI.<b>label</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-roiblabelbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ROI.<b>pinnedBy</b></code><Bullet /><code>[User!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-roibpinnedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ROI.<b>tags</b></code><Bullet /><code>[String]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-roibtagsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ROI.<b>derivedRepresentations</b></code><Bullet /><code>[Representation!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-roibderivedrepresentationsbcoderepresentation--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ROI.<b>pinned</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-roibpinnedbcodeboolean-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],m=()=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(n.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,r.kt)(n.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),y={toc:i,Bullet:m,SpecifiedBy:p,Badge:k};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},y,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type ROI {\n  id: ID!\n  nodeid: String\n  creator: User!\n  vectors: [Vector]\n  type: ROIType!\n  color: String\n  signature: String\n  createdAt: DateTime!\n  representation: Representation\n  label: String\n  pinnedBy: [User!]!\n  tags: [String]\n  derivedRepresentations: [Representation!]!\n  pinned: Boolean\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-roibidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ROI.",(0,r.kt)("b",null,"id"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-roibnodeidbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ROI.",(0,r.kt)("b",null,"nodeid"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-roibcreatorbcodeuser--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ROI.",(0,r.kt)("b",null,"creator"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/user"},(0,r.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,r.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-roibvectorsbcodevector--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ROI.",(0,r.kt)("b",null,"vectors"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/vector"},(0,r.kt)("inlineCode",{parentName:"a"},"[Vector]"))," ",(0,r.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-roibtypebcoderoitype--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ROI.",(0,r.kt)("b",null,"type"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/enums/roitype"},(0,r.kt)("inlineCode",{parentName:"a"},"ROIType!"))," ",(0,r.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(k,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The Representation can have varying types, consult your API")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-roibcolorbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ROI.",(0,r.kt)("b",null,"color"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-roibsignaturebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ROI.",(0,r.kt)("b",null,"signature"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-roibcreatedatbcodedatetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ROI.",(0,r.kt)("b",null,"createdAt"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,r.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-roibrepresentationbcoderepresentation-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ROI.",(0,r.kt)("b",null,"representation"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/representation"},(0,r.kt)("inlineCode",{parentName:"a"},"Representation"))," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-roiblabelbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ROI.",(0,r.kt)("b",null,"label"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-roibpinnedbybcodeuser--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ROI.",(0,r.kt)("b",null,"pinnedBy"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/user"},(0,r.kt)("inlineCode",{parentName:"a"},"[User!]!"))," ",(0,r.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-roibtagsbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ROI.",(0,r.kt)("b",null,"tags"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,r.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A comma-separated list of tags.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-roibderivedrepresentationsbcoderepresentation--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ROI.",(0,r.kt)("b",null,"derivedRepresentations"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/representation"},(0,r.kt)("inlineCode",{parentName:"a"},"[Representation!]!"))," ",(0,r.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-roibpinnedbcodeboolean-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ROI.",(0,r.kt)("b",null,"pinned"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,r.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/create-roi"},(0,r.kt)("inlineCode",{parentName:"a"},"createROI")),"  ",(0,r.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/pin-roi"},(0,r.kt)("inlineCode",{parentName:"a"},"pinROI")),"  ",(0,r.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/roi"},(0,r.kt)("inlineCode",{parentName:"a"},"roi")),"  ",(0,r.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/rois"},(0,r.kt)("inlineCode",{parentName:"a"},"rois")),"  ",(0,r.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"})),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/representation"},(0,r.kt)("inlineCode",{parentName:"a"},"Representation")),"  ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/roi-event"},(0,r.kt)("inlineCode",{parentName:"a"},"RoiEvent")),"  ",(0,r.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);