"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[93089,27918,13085],{80046:(e,t,l)=>{l.r(t),l.d(t,{default:()=>g});var r=l(67294),a=l(86010),n=l(52263),i=l(1944),o=l(35281),s=l(39058),c=l(99703),m=l(90197),d=l(79985);function u(e){const{metadata:t}=e,{siteConfig:{title:l}}=(0,n.Z)(),{blogDescription:a,blogTitle:o,permalink:s}=t,c="/"===s?l:o;return r.createElement(r.Fragment,null,r.createElement(i.d,{title:c,description:a}),r.createElement(m.Z,{tag:"blog_posts_list"}))}function E(e){const{metadata:t,items:l,sidebar:a}=e;return r.createElement(s.Z,{sidebar:a},r.createElement(d.Z,{items:l}),r.createElement(c.Z,{metadata:t}))}function g(e){return r.createElement(i.FG,{className:(0,a.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},r.createElement(u,e),r.createElement(E,e))}},99703:(e,t,l)=>{l.d(t,{Z:()=>i});var r=l(67294),a=l(95999),n=l(32244);function i(e){const{metadata:t}=e,{previousPage:l,nextPage:i}=t;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,a.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l&&r.createElement(n.Z,{permalink:l,title:r.createElement(a.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&r.createElement(n.Z,{permalink:i,title:r.createElement(a.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},79985:(e,t,l)=>{l.d(t,{Z:()=>i});var r=l(67294),a=l(9460),n=l(30390);function i(e){let{items:t,component:l=n.Z}=e;return r.createElement(r.Fragment,null,t.map((e=>{let{content:t}=e;return r.createElement(a.n,{key:t.metadata.permalink,content:t},r.createElement(l,null,r.createElement(t,null)))})))}},26277:(e,t,l)=>{l.d(t,{Z:()=>U});var r=l(87462),a=l(67294),n=l(86010),i=l(72389),o=l(10407),s=l(95999),c=l(52263),m=l(91262),d=l(66412);const u="playgroundContainer_TGbA",E="playgroundHeader_qwyd",g="playgroundEditor_PvJ1",f="playgroundPreview_bb8I";var p=l(18641),b=l(5959),h=l(54308),y=l(82580);const v=e=>{const{load:t}=(0,p.sT)(),[l,r]=(0,a.useState)(null);return a.createElement("div",{className:"flex flex-col"},a.createElement("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},a.createElement(m.Z,null,(()=>a.createElement(y.J9,{initialValues:{host:"https://lok-sibarita.iins.u-bordeaux.fr/f/"},onSubmit:(e,l)=>{let{host:a}=e,{setSubmitting:n}=l;n(!0),r(t({endpoint:{name:"Localhost",base_url:a},clientId:"Zvc8fwLMMINjcAxoaTBG2L6ATlV746D3Zc4T4Wiu",clientSecret:"bPDJKpvrZkhqsIvytwJuuLv8SEKeybPaPeMVpIRtdByLUERtyES2v18Dm38PUbVO0myUFAwLzwyWjo4jk91Yrhlfn51DPXN7MxYCIRedXSaNabvINv8EKv3kcWSY8Wos"}).then((()=>{r(null),n(!1)})).catch((e=>{alert({message:e.message,subtitle:e.stack})})).finally((()=>{r(null),n(!1)}),!0))}},(e=>a.createElement(y.l0,null,a.createElement("div",{className:"flex flex-row"},a.createElement("div",{className:"text-left overflow-hidden "},a.createElement(y.gN,{type:"input",name:"host",placeholder:"your host"})),a.createElement("div",{className:"ml-2"},l?a.createElement("button",{onClick:()=>l.cancel(),className:"w-full shadow-lg shadow-red-700/90 flex items-center justify-center px-2 py-1 border border-transparent text-base font-medium rounded-md text-white bg-red-300 hover:bg-red-400 md:py-1 md:text-lg md:px-10"}," ","Cancel"," "):a.createElement("button",{type:"submit",className:" shadow-lg shadow-primary-700/90 flex items-center  border border-transparent text-base font-medium rounded-md text-white bg-primary-300 hover:bg-primary-500"}," ","Use"))))))))))},k=e=>{const{login:t}=(0,b.gX)(),l=(0,c.Z)(),{fakts:r,setFakts:n}=(0,p.sT)(),[i,o]=(0,a.useState)(null);return a.createElement("div",{className:"flex flex-col"},a.createElement("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},a.createElement(m.Z,null,(()=>a.createElement(a.Fragment,null,a.createElement("button",{onClick:()=>t({clientId:r.herre.client_id,clientSecret:r.herre.client_secret,scopes:r.herre.scopes,redirectUri:window.location.origin+l.siteConfig.baseUrl+"callback"},{base_url:r.herre.base_url,tokenUrl:r.herre.base_url+"/token/",userInfoEndpoint:r.herre.base_url+"/userinfo/",authUrl:r.herre.base_url+"/authorize/"}),className:"w-full shadow-lg shadow-primary-300/60 flex items-center justify-center px-8 py-3 border text-base font-medium rounded-md dark:text-white text-back-700 border-primary-400 bg-primary-300 hover:bg-primary-400 md:py-4 md:text-lg md:px-10"},"Login with ",r.herre.base_url),a.createElement("button",{onClick:()=>n(null)},"Disconnect"))))))},x=e=>{const{login:t,logout:l}=(0,b.gX)(),{fakts:r,setFakts:n}=(0,p.sT)();return a.createElement("div",{className:"flex flex-col"},a.createElement("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},a.createElement(m.Z,null,(()=>a.createElement(a.Fragment,null,"Could not connect to mikro on this instance",a.createElement("button",{onClick:()=>n(null)},"Disconnect"))))))},N=e=>{let{children:t}=e;return a.createElement(p.k6,{fallback:a.createElement(v,null)},a.createElement(b.J,{fallback:a.createElement(k,null)},a.createElement(h.SS,{fallback:a.createElement(x,null)},t)))};var w=l(35419);const Z=e=>{const{activeTree:t}=(0,w.UK)();return a.createElement("div",{className:"overflow-y-auto"},t&&a.createElement(w.mp,{group:t,groupsClassName:()=>"",containerClassName:e=>"w-full h-[300px] "+(e.omit?"":" ")}))};var C=l(52094),T=l(1616),S=l(74842);function P(e){var t;const l=e.isHeadersEditorEnabled??!0,r=(0,S._i)({nonNull:!0}),n=((0,S.JB)({nonNull:!0}),(0,S.J5)({nonNull:!0}),(0,S.bN)(),(0,S.gp)()),{theme:i,setTheme:o}=((0,S.Xd)({onCopyQuery:e.onCopyQuery}),(0,S.pQ)(),(0,S.fE)(),(0,S.Fg)()),s=(null==n||null==(t=n.visiblePlugin)||t.content,(0,S.Xx)({defaultSizeRelation:1/3,direction:"horizontal",initiallyHidden:null!=n&&n.visiblePlugin?void 0:"first",onHiddenElementChange:e=>{"first"===e&&(null==n||n.setVisiblePlugin(null))},sizeThresholdSecond:200,storageKey:"docExplorerFlex"})),c=(0,S.Xx)({direction:"horizontal",storageKey:"editorFlex"}),m=(0,S.Xx)({defaultSizeRelation:3,direction:"vertical",initiallyHidden:(()=>{if("variables"!==e.defaultEditorToolsVisibility&&"headers"!==e.defaultEditorToolsVisibility)return"boolean"==typeof e.defaultEditorToolsVisibility?e.defaultEditorToolsVisibility?void 0:"second":r.initialVariables||r.initialHeaders?void 0:"second"})(),sizeThresholdSecond:60,storageKey:"secondaryEditorFlex"}),[d,u]=(0,a.useState)((()=>"variables"===e.defaultEditorToolsVisibility||"headers"===e.defaultEditorToolsVisibility?e.defaultEditorToolsVisibility:!r.initialVariables&&r.initialHeaders&&l?"headers":"variables")),[E,g]=(0,a.useState)(null),[f,p]=(0,a.useState)(null);window.navigator.platform.toLowerCase().indexOf("mac");return a.createElement("div",{"data-testid":"graphiql-container",className:"graphiql-container border border-primary-300 rounded-lg relative"},a.createElement("div",{className:"graphiql-main"},a.createElement("div",{className:"graphiql-sessions"},a.createElement("div",{role:"tabpanel",id:"graphiql-session",className:"graphiql-session","aria-labelledby":`graphiql-session-tab-${r.activeTabIndex}`},a.createElement("div",{ref:c.firstRef},a.createElement("div",{className:"graphiql-editors"+(1===r.tabs.length?" full-height":"")},a.createElement("div",{ref:m.firstRef},a.createElement("section",{className:"graphiql-query-editor","aria-label":"Query Editor"},a.createElement("div",{className:"graphiql-query-editor-wrapper dark:bg-slate-700"},a.createElement(S.WK,{editorTheme:e.editorTheme,keyMap:e.keyMap,onClickReference:()=>{"first"===s.hiddenElement&&s.setHiddenElement(null)},onCopyQuery:e.onCopyQuery,onEdit:e.onEditQuery,readOnly:e.readOnly}))))))))))}const q=e=>{let{query:t,onEditQuery:l}=e;const{config:r}=(0,h.rM)(),{token:n}=(0,b.gX)(),[i,o]=(0,a.useState)(),c=(0,C.nq)({url:(null==r?void 0:r.endpointUrl)||"",headers:{Authorization:`Bearer ${n}`}});return a.createElement(a.Fragment,null,a.createElement("div",{className:"p-2 w-full text-xl font-light bg-gray-200 text-slate-900 rounded-t-md"},a.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live")),a.createElement("div",{className:"h-[300px]"},a.createElement(T.j$,{fetcher:c,query:t},a.createElement(P,{onEditQuery:l}))))};var F=l(31230);const _=e=>{const{setActiveQueryData:t}=(0,w.UK)(),{client:l}=(0,h.rM)();return(0,a.useEffect)((()=>{if(e.code){console.log("props.code",e.code);try{l.query({query:(0,F.ZP)(e.code)}).then((e=>{t(e.data)}))}catch(r){console.error(r)}}}),[e.code]),a.createElement(Z,null)};function j(e){const[t,l]=(0,a.useState)(),[r,n]=(0,a.useState)();return(0,a.useEffect)((()=>{let e=new w.vF;e.registerChart({name:"test",match:e=>{if(e.data)return{priority:1,Component:w.b0}}}),l(e);let t=new w.HD({name:"fallback",object:"fallback",Component:e=>a.createElement("div",null,JSON.stringify(e.value))});t.registerSmart({name:"Omero",object:"Omero",Component:e=>a.createElement("div",{className:"bg-slate-900 p-3 rounded rounded-md"},"This is the Omero file ",JSON.stringify(e.value))}),n(t)}),[]),a.createElement(a.Fragment,null,a.createElement("div",{className:"p-2 w-full text-xl font-light bg-slate-600 text-slate-200 shadow shadow-md"},a.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),a.createElement("div",null,a.createElement(m.Z,{fallback:a.createElement("div",null,"Hallo")},(()=>a.createElement(N,null,r&&t&&a.createElement(w.z0,{chartRegistry:t,smartRegistry:r,palette:{graphColor:"#ffffff",dataColors:["rgb(var(--color-primary-100))","rgb(var(--color-primary-200))","rgb(var(--color-primary-300))"]}},a.createElement(_,{code:e.code})))))))}const I=e=>{let{code:t,playgroundPosition:l}=e;const[r,n]=(0,a.useState)(t);return a.createElement("div",{className:"border-slate-300 border border-1 p-1 "},a.createElement(a.Fragment,null,a.createElement(q,{query:r,onEditQuery:n}),a.createElement(j,{code:r})))};function R(e){let{children:t}=e;return a.createElement("div",{className:(0,n.Z)(E)},t)}function V(){return a.createElement("div",null,"Loading...")}function L(){return a.createElement(a.Fragment,null,a.createElement(R,null,a.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),a.createElement("div",{className:f},a.createElement(m.Z,{fallback:a.createElement(V,null)},(()=>a.createElement(N,null,a.createElement(o.i5,null),a.createElement(o.IF,null))))))}function Q(){const e=(0,i.Z)();return a.createElement(o.uz,{key:String(e),className:g})}function z(){return a.createElement(a.Fragment,null,a.createElement(R,null,a.createElement(s.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),a.createElement(Q,null))}function U(e){var t,l;let{children:n,transformCode:i,...s}=e;const{siteConfig:{themeConfig:E}}=(0,c.Z)(),{liveCodeBlock:{playgroundPosition:g}}=E,f=(0,d.p)(),p=(null==(t=s.metastring)?void 0:t.includes("noInline"))??!1;if(null!=(l=s.className)&&l.includes("language-")){return"jsx"===s.className.replace("language-","")?a.createElement("div",{className:u},a.createElement(o.nu,(0,r.Z)({code:n.replace(/\n$/,""),noInline:p,transformCode:i??(e=>`${e};`),theme:f},s),"top"===g?a.createElement(a.Fragment,null,a.createElement(L,null),a.createElement(z,null)):a.createElement(a.Fragment,null,a.createElement(z,null),a.createElement(L,null)))):a.createElement(m.Z,{fallback:a.createElement(V,null)},(()=>a.createElement(I,{code:n.replace(/\n$/,""),playgroundPosition:g})))}}},56922:(e,t,l)=>{l.d(t,{Z:()=>i});var r=l(67294),a=l(54308),n=l(31230);const i={React:r,...r,withMikro:a.R1,useMikroQuery:a.WE,gql:n.Ps}}}]);