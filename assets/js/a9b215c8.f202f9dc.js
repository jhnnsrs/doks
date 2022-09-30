"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[57064],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=i(r),g=a,p=u["".concat(s,".").concat(g)]||u[g]||m[g]||c;return r?n.createElement(p,o(o({ref:t},d),{},{components:r})):n.createElement(p,o({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<c;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},42:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>g,Bullet:()=>m,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(87462),a=r(67294),c=r(3905);const o={id:"create-instrument",title:"createInstrument",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,s={unversionedId:"schemas/mikro/mutations/create-instrument",id:"schemas/mikro/mutations/create-instrument",title:"createInstrument",description:"Creates a Representation",source:"@site/docs/schemas/mikro/mutations/create-instrument.mdx",sourceDirName:"schemas/mikro/mutations",slug:"/schemas/mikro/mutations/create-instrument",permalink:"/doks/docs/schemas/mikro/mutations/create-instrument",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/mikro/mutations/create-instrument.mdx",tags:[],version:"current",frontMatter:{id:"create-instrument",title:"createInstrument",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},i={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>createInstrument.<b>detectors</b></code><Bullet /><code>[GenericScalar]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createinstrumentbdetectorsbcodegenericscalar--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>createInstrument.<b>dichroics</b></code><Bullet /><code>[GenericScalar]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createinstrumentbdichroicsbcodegenericscalar--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>createInstrument.<b>filters</b></code><Bullet /><code>[GenericScalar]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createinstrumentbfiltersbcodegenericscalar--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>createInstrument.<b>lotNumber</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createinstrumentblotnumberbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>createInstrument.<b>manufacturer</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createinstrumentbmanufacturerbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>createInstrument.<b>model</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createinstrumentbmodelbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>createInstrument.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createinstrumentbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>createInstrument.<b>serialNumber</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createinstrumentbserialnumberbcodestring-",level:4},{value:"Type",id:"type",level:3},{value:'<code>Instrument</code> <Badge class="secondary" text="object"/>',id:"instrument-",level:4}],m=()=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,c.kt)(a.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{class:"badge badge--"+e.class},e.text)),p={toc:d,Bullet:m,SpecifiedBy:u,Badge:g};function k(e){let{components:t,...r}=e;return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Creates a Representation"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"createInstrument(\n  detectors: [GenericScalar]\n  dichroics: [GenericScalar]\n  filters: [GenericScalar]\n  lotNumber: String\n  manufacturer: String\n  model: String\n  name: String!\n  serialNumber: String\n): Instrument\n")),(0,c.kt)("h3",{id:"arguments"},"Arguments"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-createinstrumentbdetectorsbcodegenericscalar--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"createInstrument.",(0,c.kt)("b",null,"detectors"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/generic-scalar"},(0,c.kt)("inlineCode",{parentName:"a"},"[GenericScalar]"))," ",(0,c.kt)(g,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Which Representaiton does this metric belong to")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-createinstrumentbdichroicsbcodegenericscalar--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"createInstrument.",(0,c.kt)("b",null,"dichroics"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/generic-scalar"},(0,c.kt)("inlineCode",{parentName:"a"},"[GenericScalar]"))," ",(0,c.kt)(g,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Which Representaiton does this metric belong to")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-createinstrumentbfiltersbcodegenericscalar--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"createInstrument.",(0,c.kt)("b",null,"filters"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/generic-scalar"},(0,c.kt)("inlineCode",{parentName:"a"},"[GenericScalar]"))," ",(0,c.kt)(g,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,c.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Which Representaiton does this metric belong to")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-createinstrumentblotnumberbcodestring-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"createInstrument.",(0,c.kt)("b",null,"lotNumber"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,c.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-createinstrumentbmanufacturerbcodestring-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"createInstrument.",(0,c.kt)("b",null,"manufacturer"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,c.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-createinstrumentbmodelbcodestring-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"createInstrument.",(0,c.kt)("b",null,"model"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,c.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-createinstrumentbnamebcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"createInstrument.",(0,c.kt)("b",null,"name"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-createinstrumentbserialnumberbcodestring-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"createInstrument.",(0,c.kt)("b",null,"serialNumber"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,c.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"type"},"Type"),(0,c.kt)("h4",{id:"instrument-"},(0,c.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/instrument"},(0,c.kt)("inlineCode",{parentName:"a"},"Instrument"))," ",(0,c.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null))}k.isMDXComponent=!0}}]);