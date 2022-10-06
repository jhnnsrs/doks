"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[13492],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>k});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},i=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,d=e.parentName,i=r(e,["components","mdxType","originalType","parentName"]),p=c(a),k=o,h=p["".concat(d,".").concat(k)]||p[k]||m[k]||l;return a?n.createElement(h,s(s({ref:t},i),{},{components:a})):n.createElement(h,s({ref:t},i))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,s=new Array(l);s[0]=p;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var c=2;c<l;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},19013:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>k,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>r,default:()=>y,frontMatter:()=>s,metadata:()=>d,toc:()=>i});var n=a(87462),o=a(67294),l=a(3905);const s={id:"sample",title:"Sample",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},r=void 0,d={unversionedId:"schemas/mikro/objects/sample",id:"schemas/mikro/objects/sample",title:"Sample",description:"Samples are storage containers for representations. A Sample is to be understood analogous to a Biological Sample. It existed in Time (the time of acquisiton and experimental procedure), was measured in space (x,y,z) and in different modalities (c). Sample therefore provide a datacontainer where each Representation of the data shares the same dimensions. Every transaction to our image data is still part of the original acuqistion, so also filtered images are refering back to the sample",source:"@site/docs/schemas/mikro/objects/sample.mdx",sourceDirName:"schemas/mikro/objects",slug:"/schemas/mikro/objects/sample",permalink:"/doks/docs/schemas/mikro/objects/sample",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/mikro/objects/sample.mdx",tags:[],version:"current",frontMatter:{id:"sample",title:"Sample",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},c={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Sample.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-samplebidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Sample.<b>meta</b></code><Bullet /><code>GenericScalar</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-samplebmetabcodegenericscalar-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Sample.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-samplebnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Sample.<b>experiments</b></code><Bullet /><code>[Experiment!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-samplebexperimentsbcodeexperiment--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Sample.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-samplebcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Sample.<b>creator</b></code><Bullet /><code>User</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-samplebcreatorbcodeuser-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Sample.<b>pinnedBy</b></code><Bullet /><code>[User!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-samplebpinnedbybcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Sample.<b>tags</b></code><Bullet /><code>[String]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-samplebtagsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Sample.<b>representations</b></code><Bullet /><code>[Representation]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-samplebrepresentationsbcoderepresentation--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Sample.representations.<b>pinned</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-samplerepresentationsbpinnedbcodeboolean-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Sample.representations.<b>tags</b></code><Bullet /><code>[String]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-samplerepresentationsbtagsbcodestring--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Sample.representations.<b>ids</b></code><Bullet /><code>[String]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-samplerepresentationsbidsbcodestring--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Sample.representations.<b>experiments</b></code><Bullet /><code>[ID]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-samplerepresentationsbexperimentsbcodeid--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Sample.representations.<b>samples</b></code><Bullet /><code>[ID]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-samplerepresentationsbsamplesbcodeid--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Sample.representations.<b>noChildren</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-samplerepresentationsbnochildrenbcodeboolean-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Sample.representations.<b>ordering</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-samplerepresentationsborderingbcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Sample.representations.<b>hasMetric</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-samplerepresentationsbhasmetricbcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Sample.representations.<b>order</b></code><Bullet /><code>[String]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-samplerepresentationsborderbcodestring--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Sample.representations.<b>variety</b></code><Bullet /><code>RepresentationVarietyInput</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-samplerepresentationsbvarietybcoderepresentationvarietyinput-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Sample.representations.<b>forceThumbnail</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-samplerepresentationsbforcethumbnailbcodeboolean-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Sample.representations.<b>createdAfter</b></code><Bullet /><code>DateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-samplerepresentationsbcreatedafterbcodedatetime-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Sample.representations.<b>creator</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-samplerepresentationsbcreatorbcodeid-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Sample.representations.<b>createdBefore</b></code><Bullet /><code>DateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-samplerepresentationsbcreatedbeforebcodedatetime-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Sample.representations.<b>derivedTags</b></code><Bullet /><code>[String]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-samplerepresentationsbderivedtagsbcodestring--",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Sample.representations.<b>limit</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-samplerepresentationsblimitbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Sample.representations.<b>offset</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-samplerepresentationsboffsetbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Sample.<b>metrics</b></code><Bullet /><code>[Metric!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-samplebmetricsbcodemetric--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Sample.<b>tables</b></code><Bullet /><code>[Table!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-samplebtablesbcodetable--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Sample.<b>pinned</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-samplebpinnedbcodeboolean-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],m=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{class:"badge badge--"+e.class},e.text)),h={toc:i,Bullet:m,SpecifiedBy:p,Badge:k};function y(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Samples are storage containers for representations. A Sample is to be understood analogous to a Biological Sample. It existed in Time (the time of acquisiton and experimental procedure), was measured in space (x,y,z) and in different modalities (c). Sample therefore provide a datacontainer where each Representation of the data shares the same dimensions. Every transaction to our image data is still part of the original acuqistion, so also filtered images are refering back to the sample"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Sample {\n  id: ID!\n  meta: GenericScalar\n  name: String!\n  experiments: [Experiment!]!\n  createdAt: DateTime!\n  creator: User\n  pinnedBy: [User!]!\n  tags: [String]\n  representations(\n  name: String\n  pinned: Boolean\n  tags: [String]\n  ids: [String]\n  experiments: [ID]\n  samples: [ID]\n  noChildren: Boolean\n  ordering: String\n  hasMetric: String\n  order: [String]\n  variety: RepresentationVarietyInput\n  forceThumbnail: Boolean\n  createdAfter: DateTime\n  creator: ID\n  createdBefore: DateTime\n  derivedTags: [String]\n  limit: Int\n  offset: Int\n): [Representation]\n  metrics: [Metric!]!\n  tables: [Table!]!\n  pinned: Boolean\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-samplebidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Sample.",(0,l.kt)("b",null,"id"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-samplebmetabcodegenericscalar-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Sample.",(0,l.kt)("b",null,"meta"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/generic-scalar"},(0,l.kt)("inlineCode",{parentName:"a"},"GenericScalar"))," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-samplebnamebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Sample.",(0,l.kt)("b",null,"name"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The name of the sample")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-samplebexperimentsbcodeexperiment--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Sample.",(0,l.kt)("b",null,"experiments"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/experiment"},(0,l.kt)("inlineCode",{parentName:"a"},"[Experiment!]!"))," ",(0,l.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The experiments this sample belongs to")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-samplebcreatedatbcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Sample.",(0,l.kt)("b",null,"createdAt"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The time the sample was created")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-samplebcreatorbcodeuser-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Sample.",(0,l.kt)("b",null,"creator"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/user"},(0,l.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,l.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The user that created the sample")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-samplebpinnedbybcodeuser--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Sample.",(0,l.kt)("b",null,"pinnedBy"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/user"},(0,l.kt)("inlineCode",{parentName:"a"},"[User!]!"))," ",(0,l.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The users that have pinned the sample")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-samplebtagsbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Sample.",(0,l.kt)("b",null,"tags"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,l.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A comma-separated list of tags.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-samplebrepresentationsbcoderepresentation--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Sample.",(0,l.kt)("b",null,"representations"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/representation"},(0,l.kt)("inlineCode",{parentName:"a"},"[Representation]"))," ",(0,l.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Associated representations of this Sample"),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-samplerepresentationsbnamebcodestring-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Sample.representations.",(0,l.kt)("b",null,"name"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/schemas/mikro/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("p",{parentName:"blockquote"},"Search for substring of name")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-samplerepresentationsbpinnedbcodeboolean-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Sample.representations.",(0,l.kt)("b",null,"pinned"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/schemas/mikro/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by pinned")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-samplerepresentationsbtagsbcodestring--"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Sample.representations.",(0,l.kt)("b",null,"tags"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/schemas/mikro/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,l.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The tags you want to filter by")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-samplerepresentationsbidsbcodestring--"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Sample.representations.",(0,l.kt)("b",null,"ids"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/schemas/mikro/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,l.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The ids you want to filter by")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-samplerepresentationsbexperimentsbcodeid--"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Sample.representations.",(0,l.kt)("b",null,"experiments"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/schemas/mikro/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"[ID]"))," ",(0,l.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The Experiment the Sample of this Representation belongs to")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-samplerepresentationsbsamplesbcodeid--"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Sample.representations.",(0,l.kt)("b",null,"samples"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/schemas/mikro/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"[ID]"))," ",(0,l.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h5",{id:"code-style-fontweight-normal-samplerepresentationsbnochildrenbcodeboolean-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Sample.representations.",(0,l.kt)("b",null,"noChildren"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/schemas/mikro/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Only show Representations without children")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-samplerepresentationsborderingbcodestring-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Sample.representations.",(0,l.kt)("b",null,"ordering"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/schemas/mikro/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Ordering")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-samplerepresentationsbhasmetricbcodestring-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Sample.representations.",(0,l.kt)("b",null,"hasMetric"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/schemas/mikro/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter by required Metric Keys (seperated by ,)")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-samplerepresentationsborderbcodestring--"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Sample.representations.",(0,l.kt)("b",null,"order"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/schemas/mikro/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,l.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Order by Keys")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-samplerepresentationsbvarietybcoderepresentationvarietyinput-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Sample.representations.",(0,l.kt)("b",null,"variety"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/schemas/mikro/enums/representation-variety-input"},(0,l.kt)("inlineCode",{parentName:"a"},"RepresentationVarietyInput"))," ",(0,l.kt)(k,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h5",{id:"code-style-fontweight-normal-samplerepresentationsbforcethumbnailbcodeboolean-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Sample.representations.",(0,l.kt)("b",null,"forceThumbnail"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/schemas/mikro/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h5",{id:"code-style-fontweight-normal-samplerepresentationsbcreatedafterbcodedatetime-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Sample.representations.",(0,l.kt)("b",null,"createdAfter"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/schemas/mikro/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h5",{id:"code-style-fontweight-normal-samplerepresentationsbcreatorbcodeid-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Sample.representations.",(0,l.kt)("b",null,"creator"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/schemas/mikro/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h5",{id:"code-style-fontweight-normal-samplerepresentationsbcreatedbeforebcodedatetime-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Sample.representations.",(0,l.kt)("b",null,"createdBefore"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/schemas/mikro/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h5",{id:"code-style-fontweight-normal-samplerepresentationsbderivedtagsbcodestring--"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Sample.representations.",(0,l.kt)("b",null,"derivedTags"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/schemas/mikro/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,l.kt)(k,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The tags you want to filter by")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-samplerepresentationsblimitbcodeint-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Sample.representations.",(0,l.kt)("b",null,"limit"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/schemas/mikro/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Query limit")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-samplerepresentationsboffsetbcodeint-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Sample.representations.",(0,l.kt)("b",null,"offset"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/docs/schemas/mikro/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Query offset")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-samplebmetricsbcodemetric--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Sample.",(0,l.kt)("b",null,"metrics"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/metric"},(0,l.kt)("inlineCode",{parentName:"a"},"[Metric!]!"))," ",(0,l.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The Sample this Metric belongs to")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-samplebtablesbcodetable--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Sample.",(0,l.kt)("b",null,"tables"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/table"},(0,l.kt)("inlineCode",{parentName:"a"},"[Table!]!"))," ",(0,l.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sample this table belongs to")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-samplebpinnedbcodeboolean-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"Sample.",(0,l.kt)("b",null,"pinned"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,l.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"returned-by"},"Returned by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/create-sample"},(0,l.kt)("inlineCode",{parentName:"a"},"createSample")),"  ",(0,l.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/mysamples"},(0,l.kt)("inlineCode",{parentName:"a"},"mysamples")),"  ",(0,l.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/pin-sample"},(0,l.kt)("inlineCode",{parentName:"a"},"pinSample")),"  ",(0,l.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/sample"},(0,l.kt)("inlineCode",{parentName:"a"},"sample")),"  ",(0,l.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/samples"},(0,l.kt)("inlineCode",{parentName:"a"},"samples")),"  ",(0,l.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/update-sample"},(0,l.kt)("inlineCode",{parentName:"a"},"updateSample")),"  ",(0,l.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"})),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/experiment"},(0,l.kt)("inlineCode",{parentName:"a"},"Experiment")),"  ",(0,l.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/metric"},(0,l.kt)("inlineCode",{parentName:"a"},"Metric")),"  ",(0,l.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/representation"},(0,l.kt)("inlineCode",{parentName:"a"},"Representation")),"  ",(0,l.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/samples-event"},(0,l.kt)("inlineCode",{parentName:"a"},"SamplesEvent")),"  ",(0,l.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/table"},(0,l.kt)("inlineCode",{parentName:"a"},"Table")),"  ",(0,l.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);