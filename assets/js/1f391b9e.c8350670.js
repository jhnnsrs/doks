"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[13085,27918],{21613:(e,t,l)=>{l.d(t,{g1:()=>a});l(18641),l(5959);var r=l(67294),n=(l(78015),l(95398),l(54308),l(83580),l(35419));const a=e=>{const{activeTree:t}=(0,n.UK)();return r.createElement("div",{className:"overflow-y-auto"},t&&r.createElement(n.mp,{group:t,groupsClassName:()=>"",containerClassName:e=>"w-full h-[300px] "+(e.omit?"":" ")}))}},78015:(e,t,l)=>{l.d(t,{e:()=>o});var r=l(91262),n=l(18641),a=l(82580),i=l(67294);const o=e=>{const{load:t}=(0,n.sT)(),[l,o]=(0,i.useState)(null);return i.createElement("div",{className:"flex flex-col"},i.createElement("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},i.createElement(r.Z,null,(()=>i.createElement(a.J9,{initialValues:{host:`${window.location.hostname}:8000`},onSubmit:(e,l)=>{let{host:r}=e,{setSubmitting:n}=l;n(!0),o(t({endpoint:{name:"Localhost",base_url:`http://${r}/f/`},clientId:"Zvc8fwLMMINjcAxoaTBG2L6ATlV746D3Zc4T4Wiu",clientSecret:"bPDJKpvrZkhqsIvytwJuuLv8SEKeybPaPeMVpIRtdByLUERtyES2v18Dm38PUbVO0myUFAwLzwyWjo4jk91Yrhlfn51DPXN7MxYCIRedXSaNabvINv8EKv3kcWSY8Wos"}).then((()=>{o(null),n(!1)})).catch((e=>{alert({message:e.message,subtitle:e.stack})})).finally((()=>{o(null),n(!1)}),!0))}},(e=>i.createElement(a.l0,null,i.createElement("div",{className:"flex flex-row"},i.createElement("div",{className:"text-left overflow-hidden "},i.createElement(a.gN,{type:"input",name:"host",placeholder:"your host"})),i.createElement("div",{className:"ml-2"},l?i.createElement("button",{onClick:()=>l.cancel(),className:"w-full shadow-lg shadow-red-700/90 flex items-center justify-center px-2 py-1 border border-transparent text-base font-medium rounded-md text-white bg-red-300 hover:bg-red-400 md:py-1 md:text-lg md:px-10"}," ","Cancel"," "):i.createElement("button",{type:"submit",className:" shadow-lg shadow-primary-700/90 flex items-center  border border-transparent text-base font-medium rounded-md text-white bg-primary-300 hover:bg-primary-500"}," ","Use"))))))))))}},95398:(e,t,l)=>{l.d(t,{s:()=>s});var r=l(91262),n=l(52263),a=l(18641),i=l(5959),o=l(67294);const s=e=>{const{login:t}=(0,i.gX)(),l=(0,n.Z)(),{fakts:s,setFakts:c}=(0,a.sT)(),[d,m]=(0,o.useState)(null);return o.createElement("div",{className:"flex flex-col"},o.createElement("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},o.createElement(r.Z,null,(()=>o.createElement(o.Fragment,null,o.createElement("button",{onClick:()=>t({clientId:s.herre.client_id,clientSecret:s.herre.client_secret,scopes:s.herre.scopes,redirectUri:window.location.origin+l.siteConfig.baseUrl+"callback"},{base_url:s.herre.base_url,tokenUrl:s.herre.base_url+"/token/",userInfoEndpoint:s.herre.base_url+"/userinfo/",authUrl:s.herre.base_url+"/authorize/"}),className:"w-full shadow-lg shadow-primary-300/60 flex items-center justify-center px-8 py-3 border text-base font-medium rounded-md dark:text-white text-back-700 border-primary-400 bg-primary-300 hover:bg-primary-400 md:py-4 md:text-lg md:px-10"},"Login with ",s.herre.base_url),o.createElement("button",{onClick:()=>c(null)},"Disconnect"))))))}},83580:(e,t,l)=>{l.d(t,{D:()=>o});var r=l(91262),n=l(18641),a=l(5959),i=l(67294);const o=e=>{const{login:t,logout:l}=(0,a.gX)(),{fakts:o,setFakts:s}=(0,n.sT)();return i.createElement("div",{className:"flex flex-col"},i.createElement("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},i.createElement(r.Z,null,(()=>i.createElement(i.Fragment,null,"Could not connect to mikro on this instance",i.createElement("button",{onClick:()=>s(null)},"Disconnect"))))))}},29138:(e,t,l)=>{l.d(t,{Z:()=>L});var r=l(87462),n=l(67294),a=l(86010),i=l(72389),o=l(10407),s=l(95999),c=l(52263),d=l(91262),m=l(66412);const u="playgroundContainer_TGbA",E="playgroundHeader_qwyd",f="playgroundEditor_PvJ1",g="playgroundPreview_bb8I";var h=l(18641),b=l(5959),y=l(54308),p=l(78015),v=l(95398),x=l(83580);const k=e=>{let{children:t}=e;return n.createElement(h.k6,{fallback:n.createElement(p.e,null)},n.createElement(b.J,{fallback:n.createElement(v.s,null)},n.createElement(y.SS,{fallback:n.createElement(x.D,null)},t)))};var N=l(35419),w=l(21613),C=l(52094),S=l(1616),T=l(74842);function q(e){var t;const l=e.isHeadersEditorEnabled??!0,r=(0,T._i)({nonNull:!0}),a=((0,T.JB)({nonNull:!0}),(0,T.J5)({nonNull:!0}),(0,T.bN)(),(0,T.gp)()),{theme:i,setTheme:o}=((0,T.Xd)({onCopyQuery:e.onCopyQuery}),(0,T.pQ)(),(0,T.fE)(),(0,T.Fg)()),s=(null==a||null==(t=a.visiblePlugin)||t.content,(0,T.Xx)({defaultSizeRelation:1/3,direction:"horizontal",initiallyHidden:null!=a&&a.visiblePlugin?void 0:"first",onHiddenElementChange:e=>{"first"===e&&(null==a||a.setVisiblePlugin(null))},sizeThresholdSecond:200,storageKey:"docExplorerFlex"})),c=(0,T.Xx)({direction:"horizontal",storageKey:"editorFlex"}),d=(0,T.Xx)({defaultSizeRelation:3,direction:"vertical",initiallyHidden:(()=>{if("variables"!==e.defaultEditorToolsVisibility&&"headers"!==e.defaultEditorToolsVisibility)return"boolean"==typeof e.defaultEditorToolsVisibility?e.defaultEditorToolsVisibility?void 0:"second":r.initialVariables||r.initialHeaders?void 0:"second"})(),sizeThresholdSecond:60,storageKey:"secondaryEditorFlex"}),[m,u]=(0,n.useState)((()=>"variables"===e.defaultEditorToolsVisibility||"headers"===e.defaultEditorToolsVisibility?e.defaultEditorToolsVisibility:!r.initialVariables&&r.initialHeaders&&l?"headers":"variables")),[E,f]=(0,n.useState)(null),[g,h]=(0,n.useState)(null);window.navigator.platform.toLowerCase().indexOf("mac");return n.createElement("div",{"data-testid":"graphiql-container",className:"graphiql-container border border-primary-300 rounded-lg relative"},n.createElement("div",{className:"graphiql-main"},n.createElement("div",{className:"graphiql-sessions"},n.createElement("div",{role:"tabpanel",id:"graphiql-session",className:"graphiql-session","aria-labelledby":`graphiql-session-tab-${r.activeTabIndex}`},n.createElement("div",{ref:c.firstRef},n.createElement("div",{className:"graphiql-editors"+(1===r.tabs.length?" full-height":"")},n.createElement("div",{ref:d.firstRef},n.createElement("section",{className:"graphiql-query-editor","aria-label":"Query Editor"},n.createElement("div",{className:"graphiql-query-editor-wrapper dark:bg-slate-700"},n.createElement(T.WK,{editorTheme:e.editorTheme,keyMap:e.keyMap,onClickReference:()=>{"first"===s.hiddenElement&&s.setHiddenElement(null)},onCopyQuery:e.onCopyQuery,onEdit:e.onEditQuery,readOnly:e.readOnly}))))))))))}const Z=e=>{let{query:t,onEditQuery:l}=e;const{config:r}=(0,y.rM)(),{token:a}=(0,b.gX)(),[i,o]=(0,n.useState)(),c=(0,C.nq)({url:(null==r?void 0:r.endpointUrl)||"",headers:{Authorization:`Bearer ${a}`}});return n.createElement(n.Fragment,null,n.createElement("div",{className:"p-2 w-full text-xl font-light bg-gray-200 text-slate-900 rounded-t-md"},n.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live")),n.createElement("div",{className:"h-[300px]"},n.createElement(S.j$,{fetcher:c,query:t},n.createElement(q,{onEditQuery:l}))))};var P=l(31230);const F=e=>{const{setActiveQueryData:t}=(0,N.UK)(),{client:l}=(0,y.rM)();return(0,n.useEffect)((()=>{if(e.code){console.log("props.code",e.code);try{l.query({query:(0,P.ZP)(e.code)}).then((e=>{t(e.data)}))}catch(r){console.error(r)}}}),[e.code]),n.createElement(w.g1,null)};function j(e){const[t,l]=(0,n.useState)(),[r,a]=(0,n.useState)();return(0,n.useEffect)((()=>{let e=new N.vF;e.registerChart({name:"test",match:e=>{if(e.data)return{priority:1,Component:N.b0}}}),l(e);let t=new N.HD({name:"fallback",object:"fallback",Component:e=>n.createElement("div",null,JSON.stringify(e.value))});t.registerSmart({name:"Omero",object:"Omero",Component:e=>n.createElement("div",{className:"bg-slate-900 p-3 rounded rounded-md"},"This is the Omero file ",JSON.stringify(e.value))}),a(t)}),[]),n.createElement(n.Fragment,null,n.createElement("div",{className:"p-2 w-full text-xl font-light bg-slate-600 text-slate-200 shadow shadow-md"},n.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),n.createElement("div",null,n.createElement(d.Z,{fallback:n.createElement("div",null,"Hallo")},(()=>n.createElement(k,null,r&&t&&n.createElement(N.z0,{chartRegistry:t,smartRegistry:r,palette:{graphColor:"#ffffff",dataColors:["rgb(var(--color-primary-100))","rgb(var(--color-primary-200))","rgb(var(--color-primary-300))"]}},n.createElement(F,{code:e.code})))))))}const R=e=>{let{code:t,playgroundPosition:l}=e;const[r,a]=(0,n.useState)(t);return n.createElement("div",{className:"border-slate-300 border border-1 p-1 "},n.createElement(n.Fragment,null,n.createElement(Z,{query:r,onEditQuery:a}),n.createElement(j,{code:r})))};function V(e){let{children:t}=e;return n.createElement("div",{className:(0,a.Z)(E)},t)}function _(){return n.createElement("div",null,"Loading...")}function I(){return n.createElement(n.Fragment,null,n.createElement(V,null,n.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),n.createElement("div",{className:g},n.createElement(d.Z,{fallback:n.createElement(_,null)},(()=>n.createElement(k,null,n.createElement(o.i5,null),n.createElement(o.IF,null))))))}function Q(){const e=(0,i.Z)();return n.createElement(o.uz,{key:String(e),className:f})}function z(){return n.createElement(n.Fragment,null,n.createElement(V,null,n.createElement(s.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),n.createElement(Q,null))}function L(e){var t,l;let{children:a,transformCode:i,...s}=e;const{siteConfig:{themeConfig:E}}=(0,c.Z)(),{liveCodeBlock:{playgroundPosition:f}}=E,g=(0,m.p)(),h=(null==(t=s.metastring)?void 0:t.includes("noInline"))??!1;if(null!=(l=s.className)&&l.includes("language-")){return"jsx"===s.className.replace("language-","")?n.createElement("div",{className:u},n.createElement(o.nu,(0,r.Z)({code:a.replace(/\n$/,""),noInline:h,transformCode:i??(e=>`${e};`),theme:g},s),"top"===f?n.createElement(n.Fragment,null,n.createElement(I,null),n.createElement(z,null)):n.createElement(n.Fragment,null,n.createElement(z,null),n.createElement(I,null)))):n.createElement(d.Z,{fallback:n.createElement(_,null)},(()=>n.createElement(R,{code:a.replace(/\n$/,""),playgroundPosition:f})))}}},56922:(e,t,l)=>{l.d(t,{Z:()=>i});var r=l(67294),n=l(54308),a=l(31230);const i={React:r,...r,withMikro:n.R1,useMikroQuery:n.WE,gql:a.Ps}}}]);