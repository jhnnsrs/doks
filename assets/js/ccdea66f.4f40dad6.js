"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[43652],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=i(n),k=a,p=u["".concat(c,".").concat(k)]||u[k]||m[k]||o;return n?r.createElement(p,l(l({ref:t},d),{},{components:n})):r.createElement(p,l({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77209:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>k,Bullet:()=>m,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(87462),a=n(67294),o=n(3905);const l={id:"instrument",title:"Instrument",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,c={unversionedId:"schemas/mikro/objects/instrument",id:"schemas/mikro/objects/instrument",title:"Instrument",description:"Instrument(id, name, detectors, dichroics, filters, lotnumber, manufacturer, model, serialnumber)",source:"@site/docs/schemas/mikro/objects/instrument.mdx",sourceDirName:"schemas/mikro/objects",slug:"/schemas/mikro/objects/instrument",permalink:"/doks/docs/schemas/mikro/objects/instrument",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/mikro/objects/instrument.mdx",tags:[],version:"current",frontMatter:{id:"instrument",title:"Instrument",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},i={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Instrument.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-instrumentbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Instrument.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-instrumentbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Instrument.<b>detectors</b></code><Bullet /><code>GenericScalar</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-instrumentbdetectorsbcodegenericscalar-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Instrument.<b>dichroics</b></code><Bullet /><code>GenericScalar</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-instrumentbdichroicsbcodegenericscalar-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Instrument.<b>filters</b></code><Bullet /><code>GenericScalar</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-instrumentbfiltersbcodegenericscalar-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Instrument.<b>lotNumber</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-instrumentblotnumberbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Instrument.<b>manufacturer</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-instrumentbmanufacturerbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Instrument.<b>model</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-instrumentbmodelbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Instrument.<b>serialNumber</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-instrumentbserialnumberbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Instrument.<b>omeroSet</b></code><Bullet /><code>[Omero!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-instrumentbomerosetbcodeomero--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],m=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),p={toc:d,Bullet:m,SpecifiedBy:u,Badge:k};function b(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Instrument(id, name, detectors, dichroics, filters, lot_number, manufacturer, model, serial_number)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Instrument {\n  id: ID!\n  name: String!\n  detectors: GenericScalar\n  dichroics: GenericScalar\n  filters: GenericScalar\n  lotNumber: String\n  manufacturer: String\n  model: String\n  serialNumber: String\n  omeroSet: [Omero!]!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-instrumentbidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Instrument.",(0,o.kt)("b",null,"id"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-instrumentbnamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Instrument.",(0,o.kt)("b",null,"name"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-instrumentbdetectorsbcodegenericscalar-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Instrument.",(0,o.kt)("b",null,"detectors"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/generic-scalar"},(0,o.kt)("inlineCode",{parentName:"a"},"GenericScalar"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-instrumentbdichroicsbcodegenericscalar-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Instrument.",(0,o.kt)("b",null,"dichroics"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/generic-scalar"},(0,o.kt)("inlineCode",{parentName:"a"},"GenericScalar"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-instrumentbfiltersbcodegenericscalar-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Instrument.",(0,o.kt)("b",null,"filters"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/generic-scalar"},(0,o.kt)("inlineCode",{parentName:"a"},"GenericScalar"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-instrumentblotnumberbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Instrument.",(0,o.kt)("b",null,"lotNumber"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-instrumentbmanufacturerbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Instrument.",(0,o.kt)("b",null,"manufacturer"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-instrumentbmodelbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Instrument.",(0,o.kt)("b",null,"model"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-instrumentbserialnumberbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Instrument.",(0,o.kt)("b",null,"serialNumber"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-instrumentbomerosetbcodeomero--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Instrument.",(0,o.kt)("b",null,"omeroSet"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/omero"},(0,o.kt)("inlineCode",{parentName:"a"},"[Omero!]!"))," ",(0,o.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/mutations/create-instrument"},(0,o.kt)("inlineCode",{parentName:"a"},"createInstrument")),"  ",(0,o.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/instrument"},(0,o.kt)("inlineCode",{parentName:"a"},"instrument")),"  ",(0,o.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/queries/instruments"},(0,o.kt)("inlineCode",{parentName:"a"},"instruments")),"  ",(0,o.kt)(k,{class:"secondary",text:"query",mdxType:"Badge"})),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/schemas/mikro/objects/omero"},(0,o.kt)("inlineCode",{parentName:"a"},"Omero")),"  ",(0,o.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);