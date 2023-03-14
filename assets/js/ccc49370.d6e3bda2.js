"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[6103,7918,3085],{9178:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var l=n(7294),a=n(6010),r=n(1944),o=n(5281),i=n(9460),c=n(9058),s=n(390),d=n(7462),m=n(5999),u=n(2244);function g(e){const{nextItem:t,prevItem:n}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&l.createElement(u.Z,(0,d.Z)({},n,{subLabel:l.createElement(m.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&l.createElement(u.Z,(0,d.Z)({},t,{subLabel:l.createElement(m.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function f(){const{assets:e,metadata:t}=(0,i.C)(),{title:n,description:a,date:o,tags:c,authors:s,frontMatter:d}=t,{keywords:m}=d,u=e.image??d.image;return l.createElement(r.d,{title:n,description:a,keywords:m,image:u},l.createElement("meta",{property:"og:type",content:"article"}),l.createElement("meta",{property:"article:published_time",content:o}),s.some((e=>e.url))&&l.createElement("meta",{property:"article:author",content:s.map((e=>e.url)).filter(Boolean).join(",")}),c.length>0&&l.createElement("meta",{property:"article:tag",content:c.map((e=>e.label)).join(",")}))}var E=n(9407);function v(e){let{sidebar:t,children:n}=e;const{metadata:a,toc:r}=(0,i.C)(),{nextItem:o,prevItem:d,frontMatter:m}=a,{hide_table_of_contents:u,toc_min_heading_level:f,toc_max_heading_level:v}=m;return l.createElement(c.Z,{sidebar:t,toc:!u&&r.length>0?l.createElement(E.Z,{toc:r,minHeadingLevel:f,maxHeadingLevel:v}):void 0},l.createElement(s.Z,null,n),(o||d)&&l.createElement(g,{nextItem:o,prevItem:d}))}function p(e){const t=e.content;return l.createElement(i.n,{content:e.content,isBlogPostPage:!0},l.createElement(r.FG,{className:(0,a.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},l.createElement(f,null),l.createElement(v,{sidebar:e.sidebar},l.createElement(t,null))))}},9407:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(7462),a=n(7294),r=n(6010),o=n(3743);const i="tableOfContents_bqdL";function c(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar",t)},a.createElement(o.Z,(0,l.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:(e,t,n)=>{n.d(t,{Z:()=>f});var l=n(7462),a=n(7294),r=n(6668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const l=n.slice(2,e.level);e.parentIndex=Math.max(...l),n[e.level]=t}));const l=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):l.push(a)})),l}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:l});return function(e){return e.level>=n&&e.level<=l}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function s(e,t){let{anchorTopOffset:n}=t;const l=e.find((e=>c(e).top>=n));if(l){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(l))?l:e[e.indexOf(l)-1]??null}return e[e.length-1]??null}function d(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,a.useRef)(void 0),n=d();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:l,linkActiveClassName:a,minHeadingLevel:r,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(l),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const l=[];for(let a=t;a<=n;a+=1)l.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(l.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),c=s(i,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:l,isChild:r}=e;return t.length?a.createElement("ul",{className:r?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:l}))))):null}const g=a.memo(u);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:d,maxHeadingLevel:u,...f}=e;const E=(0,r.L)(),v=d??E.tableOfContents.minHeadingLevel,p=u??E.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>i({toc:o(t),minHeadingLevel:n,maxHeadingLevel:l})),[t,n,l])}({toc:t,minHeadingLevel:v,maxHeadingLevel:p});return m((0,a.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:v,maxHeadingLevel:p}}),[c,s,v,p])),a.createElement(g,(0,l.Z)({toc:h,className:n,linkClassName:c},f))}},7082:(e,t,n)=>{n.d(t,{Z:()=>R});var l=n(7462),a=n(7294),r=n(6010),o=n(2389),i=n(407),c=n(5999),s=n(2263),d=n(1262),m=n(6412),u=n(4763);const g={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I"};var f=n(9903),E=n(210),v=n(7393);const p=()=>a.createElement(a.Fragment,null,"Please connect to your Server first to use this Feature"),h=e=>{let{children:t}=e;return a.createElement(f.k6,{fallback:a.createElement(p,null)},a.createElement(E.J,{fallback:a.createElement(p,null)},a.createElement(v.SS,{fallback:a.createElement(p,null)},t)))};var b=n(5419);n(8015);n(1963);const y=e=>{const{activeTree:t}=(0,b.UK)();return a.createElement("div",{className:"overflow-y-auto"},t&&a.createElement(b.mp,{group:t,groupsClassName:()=>"",containerClassName:e=>"w-full h-[300px] "+(e.omit?"":" ")}))};var N=n(2094),k=n(1616),C=n(4842);function x(e){var t;const n=e.isHeadersEditorEnabled??!0,l=(0,C._i)({nonNull:!0}),r=((0,C.JB)({nonNull:!0}),(0,C.J5)({nonNull:!0}),(0,C.bN)(),(0,C.gp)()),{theme:o,setTheme:i}=((0,C.Xd)({onCopyQuery:e.onCopyQuery}),(0,C.pQ)(),(0,C.fE)(),(0,C.Fg)()),c=(null==r||null==(t=r.visiblePlugin)||t.content,(0,C.Xx)({defaultSizeRelation:1/3,direction:"horizontal",initiallyHidden:null!=r&&r.visiblePlugin?void 0:"first",onHiddenElementChange:e=>{"first"===e&&(null==r||r.setVisiblePlugin(null))},sizeThresholdSecond:200,storageKey:"docExplorerFlex"})),s=(0,C.Xx)({direction:"horizontal",storageKey:"editorFlex"}),d=(0,C.Xx)({defaultSizeRelation:3,direction:"vertical",initiallyHidden:(()=>{if("variables"!==e.defaultEditorToolsVisibility&&"headers"!==e.defaultEditorToolsVisibility)return"boolean"==typeof e.defaultEditorToolsVisibility?e.defaultEditorToolsVisibility?void 0:"second":l.initialVariables||l.initialHeaders?void 0:"second"})(),sizeThresholdSecond:60,storageKey:"secondaryEditorFlex"}),[m,u]=(0,a.useState)((()=>"variables"===e.defaultEditorToolsVisibility||"headers"===e.defaultEditorToolsVisibility?e.defaultEditorToolsVisibility:!l.initialVariables&&l.initialHeaders&&n?"headers":"variables")),[g,f]=(0,a.useState)(null),[E,v]=(0,a.useState)(null);window.navigator.platform.toLowerCase().indexOf("mac");return a.createElement("div",{"data-testid":"graphiql-container",className:"graphiql-container border border-primary-300 rounded-lg relative"},a.createElement("div",{className:"graphiql-main"},a.createElement("div",{className:"graphiql-sessions"},a.createElement("div",{role:"tabpanel",id:"graphiql-session",className:"graphiql-session","aria-labelledby":`graphiql-session-tab-${l.activeTabIndex}`},a.createElement("div",{ref:s.firstRef},a.createElement("div",{className:"graphiql-editors"+(1===l.tabs.length?" full-height":"")},a.createElement("div",{ref:d.firstRef},a.createElement("section",{className:"graphiql-query-editor","aria-label":"Query Editor"},a.createElement("div",{className:"graphiql-query-editor-wrapper dark:bg-slate-700"},a.createElement(C.WK,{editorTheme:e.editorTheme,keyMap:e.keyMap,onClickReference:()=>{"first"===c.hiddenElement&&c.setHiddenElement(null)},onCopyQuery:e.onCopyQuery,onEdit:e.onEditQuery,readOnly:e.readOnly}))))))))))}const L=e=>{let{query:t,onEditQuery:n}=e;const{config:l}=(0,v.rM)(),{token:r}=(0,E.gX)(),[o,i]=(0,a.useState)(),s=(0,N.nq)({url:(null==l?void 0:l.endpointUrl)||"",headers:{Authorization:`Bearer ${r}`}});return a.createElement(a.Fragment,null,a.createElement("div",{className:"p-2 w-full text-xl font-light bg-gray-200 text-slate-900 rounded-t-md border-none border-0 "},a.createElement(c.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live")),a.createElement("div",{className:"h-[300px]"},a.createElement(k.j$,{fetcher:s,query:t},a.createElement(x,{onEditQuery:n}))))};var H=n(1230);const w=e=>{const{setActiveQueryData:t}=(0,b.UK)(),{client:n}=(0,v.rM)();return(0,a.useEffect)((()=>{if(e.code){console.log("props.code",e.code);try{n.query({query:(0,H.ZP)(e.code)}).then((e=>{t(e.data)}))}catch(l){console.log("e",l)}}}),[e.code]),a.createElement(y,null)};function Z(e){const[t,n]=(0,a.useState)(),[l,r]=(0,a.useState)();return(0,a.useEffect)((()=>{let e=new b.vF;e.registerChart({name:"test",match:e=>{if(e.data)return{priority:1,Component:b.b0}}}),n(e);let t=new b.HD({name:"fallback",object:"fallback",Component:e=>a.createElement("div",null,JSON.stringify(e.value))});t.registerSmart({name:"Omero",object:"Omero",Component:e=>a.createElement("div",{className:"bg-slate-900 p-3 rounded rounded-md"},"This is the Omero file ",JSON.stringify(e.value))}),r(t)}),[]),a.createElement(a.Fragment,null,a.createElement("div",{className:"p-2 w-full text-xl font-light bg-slate-600 text-slate-200 shadow shadow-md"},a.createElement(c.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),a.createElement("div",null,a.createElement(d.Z,{fallback:a.createElement("div",null,"Hallo")},(()=>a.createElement(h,null,l&&t&&a.createElement(b.z0,{chartRegistry:t,smartRegistry:l,palette:{graphColor:"#ffffff",dataColors:["rgb(var(--color-primary-100))","rgb(var(--color-primary-200))","rgb(var(--color-primary-300))"]}},a.createElement(w,{code:e.code})))))))}const P=e=>{let{code:t,playgroundPosition:n}=e;const[l,r]=(0,a.useState)(t);return a.createElement("div",{className:"border-slate-300  p-1 "},a.createElement(a.Fragment,null,a.createElement(L,{query:l,onEditQuery:r}),a.createElement(Z,{code:l})))};function T(e){let{children:t}=e;return a.createElement("div",{className:(0,r.Z)(g.playgroundHeader)},t)}function _(){return a.createElement("div",null,"Loading...")}function q(e){let{error:t,tryAgain:n}=e;return a.createElement("div",{className:g.errorFallback},a.createElement("p",null,t.message))}function S(){return a.createElement(d.Z,{fallback:a.createElement(_,null)},(()=>a.createElement(a.Fragment,null,a.createElement(u.Z,{fallback:e=>a.createElement(q,e)},a.createElement(i.i5,null)),a.createElement(i.IF,null))))}function I(){return a.createElement(a.Fragment,null,a.createElement(T,null,a.createElement(c.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),a.createElement("div",{className:g.playgroundPreview},a.createElement(h,null,a.createElement(S,null))))}function F(){const e=(0,o.Z)();return a.createElement(i.uz,{key:String(e),className:g.playgroundEditor})}function O(){return a.createElement(a.Fragment,null,a.createElement(T,null,a.createElement(c.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),a.createElement(F,null))}function R(e){var t;let{children:n,transformCode:r,...o}=e;const{siteConfig:{themeConfig:c}}=(0,s.Z)(),{liveCodeBlock:{playgroundPosition:u}}=c,f=(0,m.p)();if(console.log(o),"language-kraphql"===o.className)return a.createElement(d.Z,null,(()=>a.createElement(P,{code:n,playgroundPosition:u})));const E=(null==(t=o.metastring)?void 0:t.includes("noInline"))??!1;return a.createElement("div",{className:g.playgroundContainer},a.createElement(i.nu,(0,l.Z)({code:n.replace(/\n$/,""),noInline:E,transformCode:r??(e=>`${e};`),theme:f},o),"top"===u?a.createElement(a.Fragment,null,a.createElement(I,null),a.createElement(O,null)):a.createElement(a.Fragment,null,a.createElement(O,null),a.createElement(I,null))))}},7176:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(7294),a=n(7393),r=n(203),o=n(1090);var i=n(1230);const c={React:l,...l,withMikro:a.R1,useMikroQuery:a.WE,BioImage:e=>{let{image:t}=e;const{s3resolve:n}=(0,r.th)();return l.createElement("div",{className:"h-20 flex flex-row bg-black text-white border-gray-200 border border-1 rounded relative overflow-hidden shadow-lg shadow "},t.store&&t.shape&&l.createElement(o.Yr,{path:n(t.store),shape:t.shape}),l.createElement("div",{className:"absolute w-full top-0 left-0 p-2 bg-gradient-to-b from-black to-transparent"},t.name," "))},useDatalayer:r.th,gql:i.Ps}}}]);