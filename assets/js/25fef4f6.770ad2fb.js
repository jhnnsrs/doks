"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[34723],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),p=o,f=u["".concat(s,".").concat(p)]||u[p]||m[p]||n;return a?r.createElement(f,l(l({ref:t},d),{},{components:a})):r.createElement(f,l({ref:t},d))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<n;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3783:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>m,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=a(87462),o=a(67294),n=a(3905);const l={id:"update-omero-file",title:"updateOmeroFile",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,s={unversionedId:"schemas/mikro/mutations/update-omero-file",id:"schemas/mikro/mutations/update-omero-file",title:"updateOmeroFile",description:"Update an omero file",source:"@site/docs/schemas/mikro/mutations/update-omero-file.mdx",sourceDirName:"schemas/mikro/mutations",slug:"/schemas/mikro/mutations/update-omero-file",permalink:"/doks/docs/schemas/mikro/mutations/update-omero-file",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/mikro/mutations/update-omero-file.mdx",tags:[],version:"current",frontMatter:{id:"update-omero-file",title:"updateOmeroFile",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},c={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateOmeroFile.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateomerofilebidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>updateOmeroFile.<b>tags</b></code><Bullet /><code>[String]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateomerofilebtagsbcodestring--",level:4},{value:"Type",id:"type",level:3},{value:'<code>OmeroFile</code> <Badge class="secondary" text="object"/>',id:"omerofile-",level:4}],m=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:m,SpecifiedBy:u,Badge:p};function g(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Update an omero file"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"updateOmeroFile(\n  id: ID!\n  tags: [String]\n): OmeroFile\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-updateomerofilebidbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"updateOmeroFile.",(0,n.kt)("b",null,"id"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The omero file you want to update")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-updateomerofilebtagsbcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"updateOmeroFile.",(0,n.kt)("b",null,"tags"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,n.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The updated tags ( old tags will be deleted)")),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"omerofile-"},(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/omero-file"},(0,n.kt)("inlineCode",{parentName:"a"},"OmeroFile"))," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null))}g.isMDXComponent=!0}}]);