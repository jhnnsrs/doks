"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[12420],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>k});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=l.createContext({}),d=function(e){var t=l.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},i=function(e){var t=d(e.components);return l.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},b=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=d(a),k=n,u=b["".concat(c,".").concat(k)]||b[k]||m[k]||o;return a?l.createElement(u,r(r({ref:t},i),{},{components:a})):l.createElement(u,r({ref:t},i))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}b.displayName="MDXCreateElement"},87973:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>k,Bullet:()=>m,SpecifiedBy:()=>b,assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var l=a(87462),n=a(67294),o=a(3905);const r={id:"label",title:"Label",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,c={unversionedId:"schemas/mikro/objects/label",id:"schemas/mikro/objects/label",title:"Label",description:"A Label is a trough model for image and features.",source:"@site/docs/schemas/mikro/objects/label.mdx",sourceDirName:"schemas/mikro/objects",slug:"/schemas/mikro/objects/label",permalink:"/doks/docs/schemas/mikro/objects/label",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/mikro/objects/label.mdx",tags:[],version:"current",frontMatter:{id:"label",title:"Label",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},d={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Label.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-labelbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Label.<b>instance</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-labelbinstancebcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Label.<b>name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-labelbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Label.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-labelbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Label.<b>creator</b></code><Bullet /><code>User!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-labelbcreatorbcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Label.<b>representation</b></code><Bullet /><code>Representation</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-labelbrepresentationbcoderepresentation-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Label.<b>pinnedBy</b></code><Bullet /><code>[User!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-labelbpinnedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Label.<b>tags</b></code><Bullet /><code>[String]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-labelbtagsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Label.<b>features</b></code><Bullet /><code>[Feature]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-labelbfeaturesbcodefeature--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Label.features.<b>creator</b></code><Bullet /><code>Float</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-labelfeaturesbcreatorbcodefloat-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Label.features.<b>keys</b></code><Bullet /><code>[String]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-labelfeaturesbkeysbcodestring--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Label.features.<b>substring</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-labelfeaturesbsubstringbcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Label.features.<b>limit</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-labelfeaturesblimitbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Label.features.<b>offset</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-labelfeaturesboffsetbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Label.<b>feature</b></code><Bullet /><code>Feature</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-labelbfeaturebcodefeature-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Label.<b>pinned</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-labelbpinnedbcodeboolean-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],m=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),u={toc:i,Bullet:m,SpecifiedBy:b,Badge:k};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A Label is a trough model for image and features."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Its map an instance value of a representation\n(e.g. a pixel value of a segmentation mask) to a set of corresponding features of the segmented\nclass instance.\n\nThere can only be one label per representation and class instance. You can then attach\nfeatures to the label.\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Label {\n  id: ID!\n  instance: Int!\n  name: String\n  createdAt: DateTime!\n  creator: User!\n  representation: Representation\n  pinnedBy: [User!]!\n  tags: [String]\n  features(\n  label: ID\n  creator: Float\n  keys: [String]\n  substring: String\n  limit: Int\n  offset: Int\n): [Feature]\n  feature(\n  key: String!\n): Feature\n  pinned: Boolean\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-labelbidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Label.",(0,o.kt)("b",null,"id"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-labelbinstancebcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Label.",(0,o.kt)("b",null,"instance"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The instance value of the representation (pixel value). Must be a value of the image array")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-labelbnamebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Label.",(0,o.kt)("b",null,"name"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The name of the instance")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-labelbcreatedatbcodedatetime--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Label.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,o.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The time the Label was created")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-labelbcreatorbcodeuser--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Label.",(0,o.kt)("b",null,"creator"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,o.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The user that created the Label")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-labelbrepresentationbcoderepresentation-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Label.",(0,o.kt)("b",null,"representation"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/representation"},(0,o.kt)("inlineCode",{parentName:"a"},"Representation"))," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Representation this Label instance belongs to")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-labelbpinnedbybcodeuser--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Label.",(0,o.kt)("b",null,"pinnedBy"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"[User!]!"))," ",(0,o.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The users that pinned this Label")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-labelbtagsbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Label.",(0,o.kt)("b",null,"tags"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,o.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A comma-separated list of tags.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-labelbfeaturesbcodefeature--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Label.",(0,o.kt)("b",null,"features"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/feature"},(0,o.kt)("inlineCode",{parentName:"a"},"[Feature]"))," ",(0,o.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Features attached to this Label"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-labelfeaturesblabelbcodeid-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Label.features.",(0,o.kt)("b",null,"label"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/docs/schemas/mikro/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("p",{parentName:"blockquote"},"The corresponding label that you want to filter by")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-labelfeaturesbcreatorbcodefloat-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Label.features.",(0,o.kt)("b",null,"creator"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/docs/schemas/mikro/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h5",{id:"code-style-fontweight-normal-labelfeaturesbkeysbcodestring--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Label.features.",(0,o.kt)("b",null,"keys"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/docs/schemas/mikro/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,o.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The key you want to filter by")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-labelfeaturesbsubstringbcodestring-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Label.features.",(0,o.kt)("b",null,"substring"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/docs/schemas/mikro/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The substring you want to filter by")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-labelfeaturesblimitbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Label.features.",(0,o.kt)("b",null,"limit"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/docs/schemas/mikro/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Query limit")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-labelfeaturesboffsetbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Label.features.",(0,o.kt)("b",null,"offset"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/docs/schemas/mikro/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Query offset")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-labelbfeaturebcodefeature-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Label.",(0,o.kt)("b",null,"feature"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/feature"},(0,o.kt)("inlineCode",{parentName:"a"},"Feature"))," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-labelfeaturebkeybcodestring--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Label.feature.",(0,o.kt)("b",null,"key"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/docs/schemas/mikro/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"}))),(0,o.kt)("h4",{id:"code-style-fontweight-normal-labelbpinnedbcodeboolean-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Label.",(0,o.kt)("b",null,"pinned"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/create-label"},(0,o.kt)("inlineCode",{parentName:"a"},"createLabel")),"  ",(0,o.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/label"},(0,o.kt)("inlineCode",{parentName:"a"},"label")),"  ",(0,o.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/label-for"},(0,o.kt)("inlineCode",{parentName:"a"},"labelFor")),"  ",(0,o.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/labels"},(0,o.kt)("inlineCode",{parentName:"a"},"labels")),"  ",(0,o.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"})),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/feature"},(0,o.kt)("inlineCode",{parentName:"a"},"Feature")),"  ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/representation"},(0,o.kt)("inlineCode",{parentName:"a"},"Representation")),"  ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})))}p.isMDXComponent=!0}}]);