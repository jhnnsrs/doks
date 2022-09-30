"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[22528],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>u});var s=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,s,o=function(e,t){if(null==e)return{};var a,s,o={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=s.createContext({}),d=function(e){var t=s.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},i=function(e){var t=d(e.components);return s.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},k=s.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),k=d(a),u=o,p=k["".concat(c,".").concat(u)]||k[u]||m[u]||n;return a?s.createElement(p,r(r({ref:t},i),{},{components:a})):s.createElement(p,r({ref:t},i))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,r=new Array(n);r[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<n;d++)r[d]=a[d];return s.createElement.apply(null,r)}return s.createElement.apply(null,a)}k.displayName="MDXCreateElement"},19056:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>m,SpecifiedBy:()=>k,assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var s=a(87462),o=a(67294),n=a(3905);const r={id:"user",title:"User",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},l=void 0,c={unversionedId:"schemas/arkitekt/objects/user",id:"schemas/arkitekt/objects/user",title:"User",description:"A reflection on the real User",source:"@site/docs/schemas/arkitekt/objects/user.mdx",sourceDirName:"schemas/arkitekt/objects",slug:"/schemas/arkitekt/objects/user",permalink:"/doks/docs/schemas/arkitekt/objects/user",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/arkitekt/objects/user.mdx",tags:[],version:"current",frontMatter:{id:"user",title:"User",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},d={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>password</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbpasswordbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>lastLogin</b></code><Bullet /><code>DateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userblastloginbcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>isSuperuser</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbissuperuserbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>groups</b></code><Bullet /><code>[Group!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userbgroupsbcodegroup--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>userPermissions</b></code><Bullet /><code>[Permission!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userbuserpermissionsbcodepermission--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>username</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbusernamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>firstName</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbfirstnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>lastName</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userblastnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>isStaff</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbisstaffbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>isActive</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbisactivebcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>dateJoined</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbdatejoinedbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>email</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbemailbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>roles</b></code><Bullet /><code>GenericScalar</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbrolesbcodegenericscalar-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>registrySet</b></code><Bullet /><code>[Registry!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userbregistrysetbcoderegistry--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>templateSet</b></code><Bullet /><code>[Template!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userbtemplatesetbcodetemplate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>provisionSet</b></code><Bullet /><code>[Provision!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userbprovisionsetbcodeprovision--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>reservationSet</b></code><Bullet /><code>[Reservation!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userbreservationsetbcodereservation--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>assignationSet</b></code><Bullet /><code>[Assignation!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-userbassignationsetbcodeassignation--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>User.<b>color</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbcolorbcodestring-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],m=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),k=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{class:"badge badge--"+e.class},e.text)),p={toc:i,Bullet:m,SpecifiedBy:k,Badge:u};function y(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A reflection on the real User"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type User {\n  id: ID!\n  password: String!\n  lastLogin: DateTime\n  isSuperuser: Boolean!\n  groups: [Group!]!\n  userPermissions: [Permission!]!\n  username: String!\n  firstName: String!\n  lastName: String!\n  isStaff: Boolean!\n  isActive: Boolean!\n  dateJoined: DateTime!\n  email: String!\n  roles: GenericScalar\n  registrySet: [Registry!]!\n  templateSet: [Template!]!\n  provisionSet: [Provision!]!\n  reservationSet: [Reservation!]!\n  assignationSet: [Assignation!]!\n  color: String\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbidbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"id"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbpasswordbcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"password"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userblastloginbcodedatetime-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"lastLogin"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/date-time"},(0,n.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbissuperuserbcodeboolean--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"isSuperuser"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Designates that this user has all permissions without explicitly assigning them.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbgroupsbcodegroup--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"groups"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/objects/group"},(0,n.kt)("inlineCode",{parentName:"a"},"[Group!]!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The groups this user belongs to. A user will get all permissions granted to each of their groups.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbuserpermissionsbcodepermission--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"userPermissions"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/objects/permission"},(0,n.kt)("inlineCode",{parentName:"a"},"[Permission!]!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Specific permissions for this user.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbusernamebcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"username"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbfirstnamebcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"firstName"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userblastnamebcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"lastName"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbisstaffbcodeboolean--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"isStaff"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Designates whether the user can log into this admin site.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbisactivebcodeboolean--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"isActive"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/boolean"},(0,n.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Designates whether this user should be treated as active. Unselect this instead of deleting accounts.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbdatejoinedbcodedatetime--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"dateJoined"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/date-time"},(0,n.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbemailbcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"email"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbrolesbcodegenericscalar-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"roles"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/generic-scalar"},(0,n.kt)("inlineCode",{parentName:"a"},"GenericScalar"))," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbregistrysetbcoderegistry--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"registrySet"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/objects/registry"},(0,n.kt)("inlineCode",{parentName:"a"},"[Registry!]!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The Associated App")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbtemplatesetbcodetemplate--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"templateSet"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/objects/template"},(0,n.kt)("inlineCode",{parentName:"a"},"[Template!]!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Who created this template on this instance")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbprovisionsetbcodeprovision--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"provisionSet"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/objects/provision"},(0,n.kt)("inlineCode",{parentName:"a"},"[Provision!]!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This provision creator")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbreservationsetbcodereservation--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"reservationSet"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/objects/reservation"},(0,n.kt)("inlineCode",{parentName:"a"},"[Reservation!]!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This Reservations creator")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbassignationsetbcodeassignation--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"assignationSet"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/objects/assignation"},(0,n.kt)("inlineCode",{parentName:"a"},"[Assignation!]!"))," ",(0,n.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The creator is this assignation")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-userbcolorbcodestring-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"User.",(0,n.kt)("b",null,"color"))),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/schemas/arkitekt/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The associated color for this user")),(0,n.kt)("h3",{id:"returned-by"},"Returned by"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/arkitekt/queries/me"},(0,n.kt)("inlineCode",{parentName:"a"},"me")),"  ",(0,n.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/arkitekt/queries/user"},(0,n.kt)("inlineCode",{parentName:"a"},"user")),"  ",(0,n.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/arkitekt/queries/users"},(0,n.kt)("inlineCode",{parentName:"a"},"users")),"  ",(0,n.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"})),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/arkitekt/objects/assignation"},(0,n.kt)("inlineCode",{parentName:"a"},"Assignation")),"  ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/arkitekt/objects/group"},(0,n.kt)("inlineCode",{parentName:"a"},"Group")),"  ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/arkitekt/objects/permission"},(0,n.kt)("inlineCode",{parentName:"a"},"Permission")),"  ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/arkitekt/objects/provision"},(0,n.kt)("inlineCode",{parentName:"a"},"Provision")),"  ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/arkitekt/objects/registry"},(0,n.kt)("inlineCode",{parentName:"a"},"Registry")),"  ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/arkitekt/objects/reservation"},(0,n.kt)("inlineCode",{parentName:"a"},"Reservation")),"  ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/arkitekt/objects/template"},(0,n.kt)("inlineCode",{parentName:"a"},"Template")),"  ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(m,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/docs/schemas/arkitekt/objects/user-assignment"},(0,n.kt)("inlineCode",{parentName:"a"},"UserAssignment")),"  ",(0,n.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);