"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[3089,7918,3085],{9928:(e,t,l)=>{l.r(t),l.d(t,{default:()=>E});var r=l(7294),a=l(6010),n=l(9962),i=l(5463),o=l(3702),s=l(2506),c=l(2568),d=l(3647),m=l(8389);function u(e){const{metadata:t}=e,{siteConfig:{title:l}}=(0,n.Z)(),{blogDescription:a,blogTitle:o,permalink:s}=t,c="/"===s?l:o;return r.createElement(r.Fragment,null,r.createElement(i.d,{title:c,description:a}),r.createElement(d.Z,{tag:"blog_posts_list"}))}function g(e){const{metadata:t,items:l,sidebar:a}=e;return r.createElement(s.Z,{sidebar:a},r.createElement(m.Z,{items:l}),r.createElement(c.Z,{metadata:t}))}function E(e){return r.createElement(i.FG,{className:(0,a.default)(o.k.wrapper.blogPages,o.k.page.blogListPage)},r.createElement(u,e),r.createElement(g,e))}},2568:(e,t,l)=>{l.d(t,{Z:()=>i});var r=l(7294),a=l(7325),n=l(3672);function i(e){const{metadata:t}=e,{previousPage:l,nextPage:i}=t;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,a.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l&&r.createElement(n.Z,{permalink:l,title:r.createElement(a.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&r.createElement(n.Z,{permalink:i,title:r.createElement(a.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},8389:(e,t,l)=>{l.d(t,{Z:()=>i});var r=l(7294),a=l(9107),n=l(1116);function i(e){let{items:t,component:l=n.Z}=e;return r.createElement(r.Fragment,null,t.map((e=>{let{content:t}=e;return r.createElement(a.n,{key:t.metadata.permalink,content:t},r.createElement(l,null,r.createElement(t,null)))})))}},8373:(e,t,l)=>{l.d(t,{Z:()=>O});var r=l(7462),a=l(7294),n=l(6010),i=l(1048),o=l(5607),s=l(7325),c=l(9962),d=l(748),m=l(4779),u=l(3256);const g={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I"};var E=l(9903),p=l(210),f=l(7393);const b=()=>a.createElement(a.Fragment,null,"Please connect to your Server first to use this Feature"),h=e=>{let{children:t}=e;return a.createElement(E.k6,{fallback:a.createElement(b,null)},a.createElement(p.J,{fallback:a.createElement(b,null)},a.createElement(f.SS,{fallback:a.createElement(b,null)},t)))};var v=l(5419);l(85);l(1963);const y=e=>{const{activeTree:t}=(0,v.UK)();return a.createElement("div",{className:"overflow-y-auto"},t&&a.createElement(v.mp,{group:t,groupsClassName:()=>"",containerClassName:e=>"w-full h-[300px] "+(e.omit?"":" ")}))};var k=l(2094),N=l(1616),w=l(4842);function C(e){var t;const l=e.isHeadersEditorEnabled??!0,r=(0,w._i)({nonNull:!0}),n=((0,w.JB)({nonNull:!0}),(0,w.J5)({nonNull:!0}),(0,w.bN)(),(0,w.gp)()),{theme:i,setTheme:o}=((0,w.Xd)({onCopyQuery:e.onCopyQuery}),(0,w.pQ)(),(0,w.fE)(),(0,w.Fg)()),s=(null==n||null==(t=n.visiblePlugin)||t.content,(0,w.Xx)({defaultSizeRelation:1/3,direction:"horizontal",initiallyHidden:null!=n&&n.visiblePlugin?void 0:"first",onHiddenElementChange:e=>{"first"===e&&(null==n||n.setVisiblePlugin(null))},sizeThresholdSecond:200,storageKey:"docExplorerFlex"})),c=(0,w.Xx)({direction:"horizontal",storageKey:"editorFlex"}),d=(0,w.Xx)({defaultSizeRelation:3,direction:"vertical",initiallyHidden:(()=>{if("variables"!==e.defaultEditorToolsVisibility&&"headers"!==e.defaultEditorToolsVisibility)return"boolean"==typeof e.defaultEditorToolsVisibility?e.defaultEditorToolsVisibility?void 0:"second":r.initialVariables||r.initialHeaders?void 0:"second"})(),sizeThresholdSecond:60,storageKey:"secondaryEditorFlex"}),[m,u]=(0,a.useState)((()=>"variables"===e.defaultEditorToolsVisibility||"headers"===e.defaultEditorToolsVisibility?e.defaultEditorToolsVisibility:!r.initialVariables&&r.initialHeaders&&l?"headers":"variables")),[g,E]=(0,a.useState)(null),[p,f]=(0,a.useState)(null);window.navigator.platform.toLowerCase().indexOf("mac");return a.createElement("div",{"data-testid":"graphiql-container",className:"graphiql-container border border-primary-300 rounded-lg relative"},a.createElement("div",{className:"graphiql-main"},a.createElement("div",{className:"graphiql-sessions"},a.createElement("div",{role:"tabpanel",id:"graphiql-session",className:"graphiql-session","aria-labelledby":`graphiql-session-tab-${r.activeTabIndex}`},a.createElement("div",{ref:c.firstRef},a.createElement("div",{className:"graphiql-editors"+(1===r.tabs.length?" full-height":"")},a.createElement("div",{ref:d.firstRef},a.createElement("section",{className:"graphiql-query-editor","aria-label":"Query Editor"},a.createElement("div",{className:"graphiql-query-editor-wrapper dark:bg-slate-700"},a.createElement(w.WK,{editorTheme:e.editorTheme,keyMap:e.keyMap,onClickReference:()=>{"first"===s.hiddenElement&&s.setHiddenElement(null)},onCopyQuery:e.onCopyQuery,onEdit:e.onEditQuery,readOnly:e.readOnly}))))))))))}const Z=e=>{let{query:t,onEditQuery:l}=e;const{config:r}=(0,f.rM)(),{token:n}=(0,p.gX)(),[i,o]=(0,a.useState)(),c=(0,k.nq)({url:(null==r?void 0:r.endpointUrl)||"",headers:{Authorization:`Bearer ${n}`}});return a.createElement(a.Fragment,null,a.createElement("div",{className:"p-2 w-full text-xl font-light bg-gray-200 text-slate-900 rounded-t-md border-none border-0 "},a.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live")),a.createElement("div",{className:"h-[300px]"},a.createElement(N.j$,{fetcher:c,query:t},a.createElement(C,{onEditQuery:l}))))};var T=l(1230);const x=e=>{const{setActiveQueryData:t}=(0,v.UK)(),{client:l}=(0,f.rM)();return(0,a.useEffect)((()=>{if(e.code){console.log("props.code",e.code);try{l.query({query:(0,T.ZP)(e.code)}).then((e=>{t(e.data)}))}catch(r){console.log("e",r)}}}),[e.code]),a.createElement(y,null)};function q(e){const[t,l]=(0,a.useState)(),[r,n]=(0,a.useState)();return(0,a.useEffect)((()=>{let e=new v.vF;e.registerChart({name:"test",match:e=>{if(e.data)return{priority:1,Component:v.b0}}}),l(e);let t=new v.HD({name:"fallback",object:"fallback",Component:e=>a.createElement("div",null,JSON.stringify(e.value))});t.registerSmart({name:"Omero",object:"Omero",Component:e=>a.createElement("div",{className:"bg-slate-900 p-3 rounded rounded-md"},"This is the Omero file ",JSON.stringify(e.value))}),n(t)}),[]),a.createElement(a.Fragment,null,a.createElement("div",{className:"p-2 w-full text-xl font-light bg-slate-600 text-slate-200 shadow shadow-md"},a.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),a.createElement("div",null,a.createElement(d.Z,{fallback:a.createElement("div",null,"Hallo")},(()=>a.createElement(h,null,r&&t&&a.createElement(v.z0,{chartRegistry:t,smartRegistry:r,palette:{graphColor:"#ffffff",dataColors:["rgb(var(--color-primary-100))","rgb(var(--color-primary-200))","rgb(var(--color-primary-300))"]}},a.createElement(x,{code:e.code})))))))}const P=e=>{let{code:t,playgroundPosition:l}=e;const[r,n]=(0,a.useState)(t);return a.createElement("div",{className:"border-slate-300  p-1 "},a.createElement(a.Fragment,null,a.createElement(Z,{query:r,onEditQuery:n}),a.createElement(q,{code:r})))};function F(e){let{children:t}=e;return a.createElement("div",{className:(0,n.default)(g.playgroundHeader)},t)}function S(){return a.createElement("div",null,"Loading...")}function H(e){let{error:t,tryAgain:l}=e;return a.createElement("div",{className:g.errorFallback},a.createElement("p",null,t.message))}function Q(){return a.createElement(d.Z,{fallback:a.createElement(S,null)},(()=>a.createElement(a.Fragment,null,a.createElement(u.Z,{fallback:e=>a.createElement(H,e)},a.createElement(o.i5,null)),a.createElement(o.IF,null))))}function R(){return a.createElement(a.Fragment,null,a.createElement(F,null,a.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),a.createElement("div",{className:g.playgroundPreview},a.createElement(h,null,a.createElement(Q,null))))}function V(){const e=(0,i.Z)();return a.createElement(o.uz,{key:String(e),className:g.playgroundEditor})}function z(){return a.createElement(a.Fragment,null,a.createElement(F,null,a.createElement(s.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),a.createElement(V,null))}function O(e){var t;let{children:l,transformCode:n,...i}=e;const{siteConfig:{themeConfig:s}}=(0,c.Z)(),{liveCodeBlock:{playgroundPosition:u}}=s,E=(0,m.p)();if(console.log(i),"language-kraphql"===i.className)return a.createElement(d.Z,null,(()=>a.createElement(P,{code:l,playgroundPosition:u})));const p=(null==(t=i.metastring)?void 0:t.includes("noInline"))??!1;return a.createElement("div",{className:g.playgroundContainer},a.createElement(o.nu,(0,r.Z)({code:l.replace(/\n$/,""),noInline:p,transformCode:n??(e=>`${e};`),theme:E},i),"top"===u?a.createElement(a.Fragment,null,a.createElement(R,null),a.createElement(z,null)):a.createElement(a.Fragment,null,a.createElement(z,null),a.createElement(R,null))))}},5522:(e,t,l)=>{l.d(t,{Z:()=>s});var r=l(7294),a=l(7393),n=l(203),i=l(1127);var o=l(1230);const s={React:r,...r,withMikro:a.R1,useMikroQuery:a.WE,BioImage:e=>{let{image:t}=e;const{s3resolve:l}=(0,n.th)();return r.createElement("div",{className:"h-20 flex flex-row bg-black text-white border-gray-200 border border-1 rounded relative overflow-hidden shadow-lg shadow "},t.store&&t.shape&&r.createElement(i.Yr,{path:l(t.store),shape:t.shape}),r.createElement("div",{className:"absolute w-full top-0 left-0 p-2 bg-gradient-to-b from-black to-transparent"},t.name," "))},useDatalayer:n.th,gql:o.Ps}}}]);