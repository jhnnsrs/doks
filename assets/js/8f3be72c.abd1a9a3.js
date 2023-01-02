"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[14736],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),g=r,m=u["".concat(i,".").concat(g)]||u[g]||p[g]||o;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24882:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(87462),r=n(67294),o=n(3905);const l={id:"arg-port-input",title:"ArgPortInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,i={unversionedId:"schemas/fluss/inputs/arg-port-input",id:"schemas/fluss/inputs/arg-port-input",title:"ArgPortInput",description:"No description",source:"@site/docs/schemas/fluss/inputs/arg-port-input.mdx",sourceDirName:"schemas/fluss/inputs",slug:"/schemas/fluss/inputs/arg-port-input",permalink:"/doks/docs/schemas/fluss/inputs/arg-port-input",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/fluss/inputs/arg-port-input.mdx",tags:[],version:"current",frontMatter:{id:"arg-port-input",title:"ArgPortInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},d={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ArgPortInput.<b>identifier</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-argportinputbidentifierbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ArgPortInput.<b>key</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-argportinputbkeybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ArgPortInput.<b>name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-argportinputbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ArgPortInput.<b>label</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-argportinputblabelbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ArgPortInput.<b>kind</b></code><Bullet /><code>StreamKind!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-argportinputbkindbcodestreamkind--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ArgPortInput.<b>description</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-argportinputbdescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ArgPortInput.<b>child</b></code><Bullet /><code>ChildPortInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-argportinputbchildbcodechildportinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ArgPortInput.<b>widget</b></code><Bullet /><code>WidgetInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-argportinputbwidgetbcodewidgetinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ArgPortInput.<b>default</b></code><Bullet /><code>Any</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-argportinputbdefaultbcodeany-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ArgPortInput.<b>nullable</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-argportinputbnullablebcodeboolean--",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:c,Bullet:p,SpecifiedBy:u,Badge:g};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input ArgPortInput {\n  identifier: String\n  key: String!\n  name: String\n  label: String\n  kind: StreamKind!\n  description: String\n  child: ChildPortInput\n  widget: WidgetInput\n  default: Any\n  nullable: Boolean!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-argportinputbidentifierbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ArgPortInput.",(0,o.kt)("b",null,"identifier"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The identifier")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-argportinputbkeybcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ArgPortInput.",(0,o.kt)("b",null,"key"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The key of the arg")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-argportinputbnamebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ArgPortInput.",(0,o.kt)("b",null,"name"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The name of this argument")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-argportinputblabelbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ArgPortInput.",(0,o.kt)("b",null,"label"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The name of this argument")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-argportinputbkindbcodestreamkind--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ArgPortInput.",(0,o.kt)("b",null,"kind"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/enums/stream-kind"},(0,o.kt)("inlineCode",{parentName:"a"},"StreamKind!"))," ",(0,o.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The type of this argument")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-argportinputbdescriptionbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ArgPortInput.",(0,o.kt)("b",null,"description"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The description of this argument")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-argportinputbchildbcodechildportinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ArgPortInput.",(0,o.kt)("b",null,"child"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/inputs/child-port-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ChildPortInput"))," ",(0,o.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The child of this argument")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-argportinputbwidgetbcodewidgetinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ArgPortInput.",(0,o.kt)("b",null,"widget"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/inputs/widget-input"},(0,o.kt)("inlineCode",{parentName:"a"},"WidgetInput"))," ",(0,o.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The child of this argument")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-argportinputbdefaultbcodeany-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ArgPortInput.",(0,o.kt)("b",null,"default"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/any"},(0,o.kt)("inlineCode",{parentName:"a"},"Any"))," ",(0,o.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The key of the arg")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-argportinputbnullablebcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ArgPortInput.",(0,o.kt)("b",null,"nullable"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/schemas/fluss/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Is this argument nullable")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/schemas/fluss/inputs/graph-input"},(0,o.kt)("inlineCode",{parentName:"a"},"GraphInput")),"  ",(0,o.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);