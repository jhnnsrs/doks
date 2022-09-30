"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[91305],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>p});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(o),p=a,f=u["".concat(c,".").concat(p)]||u[p]||d[p]||n;return o?r.createElement(f,l(l({ref:t},m),{},{components:o})):r.createElement(f,l({ref:t},m))}));function p(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,l=new Array(n);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<n;s++)l[s]=o[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},93954:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>p,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var r=o(87462),a=o(67294),n=o(3905);const l={id:"upload-omero-file",title:"uploadOmeroFile",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},i=void 0,c={unversionedId:"schemas/mikro/mutations/upload-omero-file",id:"schemas/mikro/mutations/upload-omero-file",title:"uploadOmeroFile",description:"No description",source:"@site/docs/schemas/mikro/mutations/upload-omero-file.mdx",sourceDirName:"schemas/mikro/mutations",slug:"/schemas/mikro/mutations/upload-omero-file",permalink:"/doks/docs/schemas/mikro/mutations/upload-omero-file",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/mikro/mutations/upload-omero-file.mdx",tags:[],version:"current",frontMatter:{id:"upload-omero-file",title:"uploadOmeroFile",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},s={},m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>uploadOmeroFile.<b>file</b></code><Bullet /><code>ImageFile!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-uploadomerofilebfilebcodeimagefile--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>uploadOmeroFile.<b>name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-uploadomerofilebnamebcodestring-",level:4},{value:"Type",id:"type",level:3},{value:'<code>OmeroFile</code> <Badge class="secondary" text="object"/>',id:"omerofile-",level:4}],d=()=>(0,n.kt)(a.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,n.kt)(a.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,n.kt)(a.Fragment,null,(0,n.kt)("span",{class:"badge badge--"+e.class},e.text)),f={toc:m,Bullet:d,SpecifiedBy:u,Badge:p};function g(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"uploadOmeroFile(\n  file: ImageFile!\n  name: String\n): OmeroFile\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-uploadomerofilebfilebcodeimagefile--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"uploadOmeroFile.",(0,n.kt)("b",null,"file"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/image-file"},(0,n.kt)("inlineCode",{parentName:"a"},"ImageFile!"))," ",(0,n.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-uploadomerofilebnamebcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"uploadOmeroFile.",(0,n.kt)("b",null,"name"))),(0,n.kt)(d,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"omerofile-"},(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/mikro/objects/omero-file"},(0,n.kt)("inlineCode",{parentName:"a"},"OmeroFile"))," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null))}g.isMDXComponent=!0}}]);