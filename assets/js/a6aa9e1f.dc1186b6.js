"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[93089,27918,13085],{80046:(e,t,l)=>{l.r(t),l.d(t,{default:()=>g});var r=l(67294),a=l(86010),n=l(52263),i=l(1944),o=l(35281),s=l(39058),c=l(99703),m=l(90197),d=l(79985);function u(e){const{metadata:t}=e,{siteConfig:{title:l}}=(0,n.Z)(),{blogDescription:a,blogTitle:o,permalink:s}=t,c="/"===s?l:o;return r.createElement(r.Fragment,null,r.createElement(i.d,{title:c,description:a}),r.createElement(m.Z,{tag:"blog_posts_list"}))}function E(e){const{metadata:t,items:l,sidebar:a}=e;return r.createElement(s.Z,{sidebar:a},r.createElement(d.Z,{items:l}),r.createElement(c.Z,{metadata:t}))}function g(e){return r.createElement(i.FG,{className:(0,a.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},r.createElement(u,e),r.createElement(E,e))}},99703:(e,t,l)=>{l.d(t,{Z:()=>i});var r=l(67294),a=l(95999),n=l(32244);function i(e){const{metadata:t}=e,{previousPage:l,nextPage:i}=t;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,a.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l&&r.createElement(n.Z,{permalink:l,title:r.createElement(a.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&r.createElement(n.Z,{permalink:i,title:r.createElement(a.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},79985:(e,t,l)=>{l.d(t,{Z:()=>i});var r=l(67294),a=l(9460),n=l(30390);function i(e){let{items:t,component:l=n.Z}=e;return r.createElement(r.Fragment,null,t.map((e=>{let{content:t}=e;return r.createElement(a.n,{key:t.metadata.permalink,content:t},r.createElement(l,null,r.createElement(t,null)))})))}},21613:(e,t,l)=>{l.d(t,{g1:()=>n});l(18641),l(5959);var r=l(67294),a=(l(78015),l(95398),l(54308),l(83580),l(35419));const n=e=>{const{activeTree:t}=(0,a.UK)();return r.createElement("div",{className:"overflow-y-auto"},t&&r.createElement(a.mp,{group:t,groupsClassName:()=>"",containerClassName:e=>"w-full h-[300px] "+(e.omit?"":" ")}))}},78015:(e,t,l)=>{l.d(t,{e:()=>o});var r=l(91262),a=l(18641),n=l(82580),i=l(67294);const o=e=>{const{load:t}=(0,a.sT)(),[l,o]=(0,i.useState)(null);return i.createElement("div",{className:"flex flex-col"},i.createElement("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},i.createElement(r.Z,null,(()=>i.createElement(n.J9,{initialValues:{host:`${window.location.hostname}:8000`},onSubmit:(e,l)=>{let{host:r}=e,{setSubmitting:a}=l;a(!0),o(t({endpoint:{name:"Localhost",base_url:`http://${r}/f/`},clientId:"Zvc8fwLMMINjcAxoaTBG2L6ATlV746D3Zc4T4Wiu",clientSecret:"bPDJKpvrZkhqsIvytwJuuLv8SEKeybPaPeMVpIRtdByLUERtyES2v18Dm38PUbVO0myUFAwLzwyWjo4jk91Yrhlfn51DPXN7MxYCIRedXSaNabvINv8EKv3kcWSY8Wos"}).then((()=>{o(null),a(!1)})).catch((e=>{alert({message:e.message,subtitle:e.stack})})).finally((()=>{o(null),a(!1)}),!0))}},(e=>i.createElement(n.l0,null,i.createElement("div",{className:"flex flex-row"},i.createElement("div",{className:"text-left overflow-hidden "},i.createElement(n.gN,{type:"input",name:"host",placeholder:"your host"})),i.createElement("div",{className:"ml-2"},l?i.createElement("button",{onClick:()=>l.cancel(),className:"w-full shadow-lg shadow-red-700/90 flex items-center justify-center px-2 py-1 border border-transparent text-base font-medium rounded-md text-white bg-red-300 hover:bg-red-400 md:py-1 md:text-lg md:px-10"}," ","Cancel"," "):i.createElement("button",{type:"submit",className:" shadow-lg shadow-primary-700/90 flex items-center  border border-transparent text-base font-medium rounded-md text-white bg-primary-300 hover:bg-primary-500"}," ","Use"))))))))))}},95398:(e,t,l)=>{l.d(t,{s:()=>s});var r=l(91262),a=l(52263),n=l(18641),i=l(5959),o=l(67294);const s=e=>{const{login:t}=(0,i.gX)(),l=(0,a.Z)(),{fakts:s,setFakts:c}=(0,n.sT)(),[m,d]=(0,o.useState)(null);return o.createElement("div",{className:"flex flex-col"},o.createElement("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},o.createElement(r.Z,null,(()=>o.createElement(o.Fragment,null,o.createElement("button",{onClick:()=>t({clientId:s.herre.client_id,clientSecret:s.herre.client_secret,scopes:s.herre.scopes,redirectUri:window.location.origin+l.siteConfig.baseUrl+"callback"},{base_url:s.herre.base_url,tokenUrl:s.herre.base_url+"/token/",userInfoEndpoint:s.herre.base_url+"/userinfo/",authUrl:s.herre.base_url+"/authorize/"}),className:"w-full shadow-lg shadow-primary-300/60 flex items-center justify-center px-8 py-3 border text-base font-medium rounded-md dark:text-white text-back-700 border-primary-400 bg-primary-300 hover:bg-primary-400 md:py-4 md:text-lg md:px-10"},"Login with ",s.herre.base_url),o.createElement("button",{onClick:()=>c(null)},"Disconnect"))))))}},83580:(e,t,l)=>{l.d(t,{D:()=>o});var r=l(91262),a=l(18641),n=l(5959),i=l(67294);const o=e=>{const{login:t,logout:l}=(0,n.gX)(),{fakts:o,setFakts:s}=(0,a.sT)();return i.createElement("div",{className:"flex flex-col"},i.createElement("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},i.createElement(r.Z,null,(()=>i.createElement(i.Fragment,null,"Could not connect to mikro on this instance",i.createElement("button",{onClick:()=>s(null)},"Disconnect"))))))}},29138:(e,t,l)=>{l.d(t,{Z:()=>z});var r=l(87462),a=l(67294),n=l(86010),i=l(72389),o=l(10407),s=l(95999),c=l(52263),m=l(91262),d=l(66412);const u="playgroundContainer_TGbA",E="playgroundHeader_qwyd",g="playgroundEditor_PvJ1",p="playgroundPreview_bb8I";var f=l(18641),b=l(5959),h=l(54308),v=l(78015),y=l(95398),k=l(83580);const x=e=>{let{children:t}=e;return a.createElement(f.k6,{fallback:a.createElement(v.e,null)},a.createElement(b.J,{fallback:a.createElement(y.s,null)},a.createElement(h.SS,{fallback:a.createElement(k.D,null)},t)))};var N=l(35419),w=l(21613),Z=l(52094),C=l(1616),T=l(74842);function S(e){var t;const l=e.isHeadersEditorEnabled??!0,r=(0,T._i)({nonNull:!0}),n=((0,T.JB)({nonNull:!0}),(0,T.J5)({nonNull:!0}),(0,T.bN)(),(0,T.gp)()),{theme:i,setTheme:o}=((0,T.Xd)({onCopyQuery:e.onCopyQuery}),(0,T.pQ)(),(0,T.fE)(),(0,T.Fg)()),s=(null==n||null==(t=n.visiblePlugin)||t.content,(0,T.Xx)({defaultSizeRelation:1/3,direction:"horizontal",initiallyHidden:null!=n&&n.visiblePlugin?void 0:"first",onHiddenElementChange:e=>{"first"===e&&(null==n||n.setVisiblePlugin(null))},sizeThresholdSecond:200,storageKey:"docExplorerFlex"})),c=(0,T.Xx)({direction:"horizontal",storageKey:"editorFlex"}),m=(0,T.Xx)({defaultSizeRelation:3,direction:"vertical",initiallyHidden:(()=>{if("variables"!==e.defaultEditorToolsVisibility&&"headers"!==e.defaultEditorToolsVisibility)return"boolean"==typeof e.defaultEditorToolsVisibility?e.defaultEditorToolsVisibility?void 0:"second":r.initialVariables||r.initialHeaders?void 0:"second"})(),sizeThresholdSecond:60,storageKey:"secondaryEditorFlex"}),[d,u]=(0,a.useState)((()=>"variables"===e.defaultEditorToolsVisibility||"headers"===e.defaultEditorToolsVisibility?e.defaultEditorToolsVisibility:!r.initialVariables&&r.initialHeaders&&l?"headers":"variables")),[E,g]=(0,a.useState)(null),[p,f]=(0,a.useState)(null);window.navigator.platform.toLowerCase().indexOf("mac");return a.createElement("div",{"data-testid":"graphiql-container",className:"graphiql-container border border-primary-300 rounded-lg relative"},a.createElement("div",{className:"graphiql-main"},a.createElement("div",{className:"graphiql-sessions"},a.createElement("div",{role:"tabpanel",id:"graphiql-session",className:"graphiql-session","aria-labelledby":`graphiql-session-tab-${r.activeTabIndex}`},a.createElement("div",{ref:c.firstRef},a.createElement("div",{className:"graphiql-editors"+(1===r.tabs.length?" full-height":"")},a.createElement("div",{ref:m.firstRef},a.createElement("section",{className:"graphiql-query-editor","aria-label":"Query Editor"},a.createElement("div",{className:"graphiql-query-editor-wrapper dark:bg-slate-700"},a.createElement(T.WK,{editorTheme:e.editorTheme,keyMap:e.keyMap,onClickReference:()=>{"first"===s.hiddenElement&&s.setHiddenElement(null)},onCopyQuery:e.onCopyQuery,onEdit:e.onEditQuery,readOnly:e.readOnly}))))))))))}const P=e=>{let{query:t,onEditQuery:l}=e;const{config:r}=(0,h.rM)(),{token:n}=(0,b.gX)(),[i,o]=(0,a.useState)(),c=(0,Z.nq)({url:(null==r?void 0:r.endpointUrl)||"",headers:{Authorization:`Bearer ${n}`}});return a.createElement(a.Fragment,null,a.createElement("div",{className:"p-2 w-full text-xl font-light bg-gray-200 text-slate-900 rounded-t-md"},a.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live")),a.createElement("div",{className:"h-[300px]"},a.createElement(C.j$,{fetcher:c,query:t},a.createElement(S,{onEditQuery:l}))))};var q=l(31230);const F=e=>{const{setActiveQueryData:t}=(0,N.UK)(),{client:l}=(0,h.rM)();return(0,a.useEffect)((()=>{if(e.code){console.log("props.code",e.code);try{l.query({query:(0,q.ZP)(e.code)}).then((e=>{t(e.data)}))}catch(r){console.error(r)}}}),[e.code]),a.createElement(w.g1,null)};function _(e){const[t,l]=(0,a.useState)(),[r,n]=(0,a.useState)();return(0,a.useEffect)((()=>{let e=new N.vF;e.registerChart({name:"test",match:e=>{if(e.data)return{priority:1,Component:N.b0}}}),l(e);let t=new N.HD({name:"fallback",object:"fallback",Component:e=>a.createElement("div",null,JSON.stringify(e.value))});t.registerSmart({name:"Omero",object:"Omero",Component:e=>a.createElement("div",{className:"bg-slate-900 p-3 rounded rounded-md"},"This is the Omero file ",JSON.stringify(e.value))}),n(t)}),[]),a.createElement(a.Fragment,null,a.createElement("div",{className:"p-2 w-full text-xl font-light bg-slate-600 text-slate-200 shadow shadow-md"},a.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),a.createElement("div",null,a.createElement(m.Z,{fallback:a.createElement("div",null,"Hallo")},(()=>a.createElement(x,null,r&&t&&a.createElement(N.z0,{chartRegistry:t,smartRegistry:r,palette:{graphColor:"#ffffff",dataColors:["rgb(var(--color-primary-100))","rgb(var(--color-primary-200))","rgb(var(--color-primary-300))"]}},a.createElement(F,{code:e.code})))))))}const j=e=>{let{code:t,playgroundPosition:l}=e;const[r,n]=(0,a.useState)(t);return a.createElement("div",{className:"border-slate-300 border border-1 p-1 "},a.createElement(a.Fragment,null,a.createElement(P,{query:r,onEditQuery:n}),a.createElement(_,{code:r})))};function I(e){let{children:t}=e;return a.createElement("div",{className:(0,n.Z)(E)},t)}function R(){return a.createElement("div",null,"Loading...")}function V(){return a.createElement(a.Fragment,null,a.createElement(I,null,a.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),a.createElement("div",{className:p},a.createElement(m.Z,{fallback:a.createElement(R,null)},(()=>a.createElement(x,null,a.createElement(o.i5,null),a.createElement(o.IF,null))))))}function L(){const e=(0,i.Z)();return a.createElement(o.uz,{key:String(e),className:g})}function Q(){return a.createElement(a.Fragment,null,a.createElement(I,null,a.createElement(s.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),a.createElement(L,null))}function z(e){var t,l;let{children:n,transformCode:i,...s}=e;const{siteConfig:{themeConfig:E}}=(0,c.Z)(),{liveCodeBlock:{playgroundPosition:g}}=E,p=(0,d.p)(),f=(null==(t=s.metastring)?void 0:t.includes("noInline"))??!1;if(null!=(l=s.className)&&l.includes("language-")){return"jsx"===s.className.replace("language-","")?a.createElement("div",{className:u},a.createElement(o.nu,(0,r.Z)({code:n.replace(/\n$/,""),noInline:f,transformCode:i??(e=>`${e};`),theme:p},s),"top"===g?a.createElement(a.Fragment,null,a.createElement(V,null),a.createElement(Q,null)):a.createElement(a.Fragment,null,a.createElement(Q,null),a.createElement(V,null)))):a.createElement(m.Z,{fallback:a.createElement(R,null)},(()=>a.createElement(j,{code:n.replace(/\n$/,""),playgroundPosition:g})))}}},56922:(e,t,l)=>{l.d(t,{Z:()=>i});var r=l(67294),a=l(54308),n=l(31230);const i={React:r,...r,withMikro:a.R1,useMikroQuery:a.WE,gql:n.Ps}}}]);