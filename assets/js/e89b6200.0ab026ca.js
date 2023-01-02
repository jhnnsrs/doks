"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[22198],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var o=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=o.createContext({}),u=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=u(t.components);return o.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=u(n),m=i,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(b,r(r({ref:e},c),{},{components:n})):o.createElement(b,r({ref:e},c))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,r=new Array(a);r[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:i,r[1]=s;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68398:(t,e,n)=>{n.r(e),n.d(e,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>d,assets:()=>u,contentTitle:()=>s,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(87462),i=n(67294),a=n(3905);const r={id:"provision-status-input",title:"ProvisionStatusInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},s=void 0,l={unversionedId:"schemas/arkitekt/enums/provision-status-input",id:"schemas/arkitekt/enums/provision-status-input",title:"ProvisionStatusInput",description:"An enumeration.",source:"@site/docs/schemas/arkitekt/enums/provision-status-input.mdx",sourceDirName:"schemas/arkitekt/enums",slug:"/schemas/arkitekt/enums/provision-status-input",permalink:"/doks/docs/schemas/arkitekt/enums/provision-status-input",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/schemas/arkitekt/enums/provision-status-input.mdx",tags:[],version:"current",frontMatter:{id:"provision-status-input",title:"ProvisionStatusInput",hide_table_of_contents:!0,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},u={},c=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>ProvisionStatusInput.<b>PENDING</b></code>",id:"code-style-fontweight-normal-provisionstatusinputbpendingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProvisionStatusInput.<b>BOUND</b></code>",id:"code-style-fontweight-normal-provisionstatusinputbboundbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProvisionStatusInput.<b>PROVIDING</b></code>",id:"code-style-fontweight-normal-provisionstatusinputbprovidingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProvisionStatusInput.<b>ACTIVE</b></code>",id:"code-style-fontweight-normal-provisionstatusinputbactivebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProvisionStatusInput.<b>INACTIVE</b></code>",id:"code-style-fontweight-normal-provisionstatusinputbinactivebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProvisionStatusInput.<b>CANCELING</b></code>",id:"code-style-fontweight-normal-provisionstatusinputbcancelingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProvisionStatusInput.<b>DISCONNECTED</b></code>",id:"code-style-fontweight-normal-provisionstatusinputbdisconnectedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProvisionStatusInput.<b>RECONNECTING</b></code>",id:"code-style-fontweight-normal-provisionstatusinputbreconnectingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProvisionStatusInput.<b>DENIED</b></code>",id:"code-style-fontweight-normal-provisionstatusinputbdeniedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProvisionStatusInput.<b>ERROR</b></code>",id:"code-style-fontweight-normal-provisionstatusinputberrorbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProvisionStatusInput.<b>CRITICAL</b></code>",id:"code-style-fontweight-normal-provisionstatusinputbcriticalbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProvisionStatusInput.<b>ENDED</b></code>",id:"code-style-fontweight-normal-provisionstatusinputbendedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProvisionStatusInput.<b>CANCELLED</b></code>",id:"code-style-fontweight-normal-provisionstatusinputbcancelledbcode",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=t=>(0,a.kt)(i.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),m=t=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+t.class},t.text)),b={toc:c,Bullet:p,SpecifiedBy:d,Badge:m};function k(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,o.Z)({},b,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An enumeration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum ProvisionStatusInput {\n  PENDING\n  BOUND\n  PROVIDING\n  ACTIVE\n  INACTIVE\n  CANCELING\n  DISCONNECTED\n  RECONNECTING\n  DENIED\n  ERROR\n  CRITICAL\n  ENDED\n  CANCELLED\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-provisionstatusinputbpendingbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProvisionStatusInput.",(0,a.kt)("b",null,"PENDING")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Pending (Request has been created and waits for its initial creation)")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-provisionstatusinputbboundbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProvisionStatusInput.",(0,a.kt)("b",null,"BOUND")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Bound (Provision was bound to an Agent)")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-provisionstatusinputbprovidingbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProvisionStatusInput.",(0,a.kt)("b",null,"PROVIDING")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Providing (Request has been send to its Agent and waits for Result")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-provisionstatusinputbactivebcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProvisionStatusInput.",(0,a.kt)("b",null,"ACTIVE")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Active (Provision is currently active)")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-provisionstatusinputbinactivebcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProvisionStatusInput.",(0,a.kt)("b",null,"INACTIVE")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Inactive (Provision is currently not active)")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-provisionstatusinputbcancelingbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProvisionStatusInput.",(0,a.kt)("b",null,"CANCELING")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Cancelling (Provisions is currently being cancelled)")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-provisionstatusinputbdisconnectedbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProvisionStatusInput.",(0,a.kt)("b",null,"DISCONNECTED")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Lost (Subscribers to this Topic have lost their connection)")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-provisionstatusinputbreconnectingbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProvisionStatusInput.",(0,a.kt)("b",null,"RECONNECTING")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Reconnecting (We are trying to Reconnect to this Topic)")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-provisionstatusinputbdeniedbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProvisionStatusInput.",(0,a.kt)("b",null,"DENIED")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Denied (Provision was rejected for this User)")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-provisionstatusinputberrorbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProvisionStatusInput.",(0,a.kt)("b",null,"ERROR")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Error (Reservation was not able to be performed (See StatusMessage)")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-provisionstatusinputbcriticalbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProvisionStatusInput.",(0,a.kt)("b",null,"CRITICAL")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Critical (Provision resulted in an critical system error)")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-provisionstatusinputbendedbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProvisionStatusInput.",(0,a.kt)("b",null,"ENDED")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Ended (Provision was cancelled by the Platform and will no longer create Topics)")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-provisionstatusinputbcancelledbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProvisionStatusInput.",(0,a.kt)("b",null,"CANCELLED")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Cancelled (Provision was cancelled by the User and will no longer create Topics)")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/schemas/arkitekt/queries/allprovisions"},(0,a.kt)("inlineCode",{parentName:"a"},"allprovisions")),"  ",(0,a.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/docs/schemas/arkitekt/queries/myprovisions"},(0,a.kt)("inlineCode",{parentName:"a"},"myprovisions")),"  ",(0,a.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/docs/schemas/arkitekt/queries/provisions"},(0,a.kt)("inlineCode",{parentName:"a"},"provisions")),"  ",(0,a.kt)(m,{class:"secondary",text:"query",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/docs/schemas/arkitekt/mutations/reset-provisions"},(0,a.kt)("inlineCode",{parentName:"a"},"resetProvisions")),"  ",(0,a.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);