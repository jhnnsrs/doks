"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[1779],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(n),k=o,m=p["".concat(c,".").concat(k)]||p[k]||s[k]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},23165:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>k,Bullet:()=>s,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(87462),o=n(67294),a=n(3905);const l={id:"return-port-input",title:"ReturnPortInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,c={unversionedId:"schemas/arkitekt/inputs/return-port-input",id:"schemas/arkitekt/inputs/return-port-input",title:"ReturnPortInput",description:"No description",source:"@site/docs/schemas/arkitekt/inputs/return-port-input.mdx",sourceDirName:"schemas/arkitekt/inputs",slug:"/schemas/arkitekt/inputs/return-port-input",permalink:"/doks/docs/schemas/arkitekt/inputs/return-port-input",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/arkitekt/inputs/return-port-input.mdx",tags:[],version:"current",frontMatter:{id:"return-port-input",title:"ReturnPortInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},d={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ReturnPortInput.<b>identifier</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-returnportinputbidentifierbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ReturnPortInput.<b>key</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-returnportinputbkeybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ReturnPortInput.<b>name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-returnportinputbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ReturnPortInput.<b>label</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-returnportinputblabelbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ReturnPortInput.<b>kind</b></code><Bullet /><code>PortKindInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-returnportinputbkindbcodeportkindinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ReturnPortInput.<b>description</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-returnportinputbdescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ReturnPortInput.<b>child</b></code><Bullet /><code>ChildPortInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-returnportinputbchildbcodechildportinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ReturnPortInput.<b>widget</b></code><Bullet /><code>ReturnWidgetInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-returnportinputbwidgetbcodereturnwidgetinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ReturnPortInput.<b>nullable</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-returnportinputbnullablebcodeboolean--",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:u,Bullet:s,SpecifiedBy:p,Badge:k};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input ReturnPortInput {\n  identifier: String\n  key: String!\n  name: String\n  label: String\n  kind: PortKindInput!\n  description: String\n  child: ChildPortInput\n  widget: ReturnWidgetInput\n  nullable: Boolean!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-returnportinputbidentifierbcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ReturnPortInput.",(0,a.kt)("b",null,"identifier"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The identifier")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-returnportinputbkeybcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ReturnPortInput.",(0,a.kt)("b",null,"key"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The key of the arg")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-returnportinputbnamebcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ReturnPortInput.",(0,a.kt)("b",null,"name"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The name of this argument")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-returnportinputblabelbcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ReturnPortInput.",(0,a.kt)("b",null,"label"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The name of this argument")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-returnportinputbkindbcodeportkindinput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ReturnPortInput.",(0,a.kt)("b",null,"kind"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/enums/port-kind-input"},(0,a.kt)("inlineCode",{parentName:"a"},"PortKindInput!"))," ",(0,a.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(k,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The type of this argument")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-returnportinputbdescriptionbcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ReturnPortInput.",(0,a.kt)("b",null,"description"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The description of this argument")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-returnportinputbchildbcodechildportinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ReturnPortInput.",(0,a.kt)("b",null,"child"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/inputs/child-port-input"},(0,a.kt)("inlineCode",{parentName:"a"},"ChildPortInput"))," ",(0,a.kt)(k,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The child of this argument")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-returnportinputbwidgetbcodereturnwidgetinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ReturnPortInput.",(0,a.kt)("b",null,"widget"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/inputs/return-widget-input"},(0,a.kt)("inlineCode",{parentName:"a"},"ReturnWidgetInput"))," ",(0,a.kt)(k,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The child of this argument")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-returnportinputbnullablebcodeboolean--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ReturnPortInput.",(0,a.kt)("b",null,"nullable"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,a.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Is this argument nullable")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/schemas/arkitekt/inputs/definition-input"},(0,a.kt)("inlineCode",{parentName:"a"},"DefinitionInput")),"  ",(0,a.kt)(k,{class:"secondary",text:"input",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);