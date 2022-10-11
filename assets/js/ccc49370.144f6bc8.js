"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[46103,27918,13085],{65203:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var l=n(67294),a=n(86010),r=n(1944),o=n(35281),i=n(9460),s=n(39058),c=n(30390),m=n(87462),d=n(95999),u=n(32244);function f(e){const{nextItem:t,prevItem:n}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&l.createElement(u.Z,(0,m.Z)({},n,{subLabel:l.createElement(d.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&l.createElement(u.Z,(0,m.Z)({},t,{subLabel:l.createElement(d.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function g(){const{assets:e,metadata:t}=(0,i.C)(),{title:n,description:a,date:o,tags:s,authors:c,frontMatter:m}=t,{keywords:d}=m,u=e.image??m.image;return l.createElement(r.d,{title:n,description:a,keywords:d,image:u},l.createElement("meta",{property:"og:type",content:"article"}),l.createElement("meta",{property:"article:published_time",content:o}),c.some((e=>e.url))&&l.createElement("meta",{property:"article:author",content:c.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&l.createElement("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")}))}var E=n(39407);function h(e){let{sidebar:t,children:n}=e;const{metadata:a,toc:r}=(0,i.C)(),{nextItem:o,prevItem:m,frontMatter:d}=a,{hide_table_of_contents:u,toc_min_heading_level:g,toc_max_heading_level:h}=d;return l.createElement(s.Z,{sidebar:t,toc:!u&&r.length>0?l.createElement(E.Z,{toc:r,minHeadingLevel:g,maxHeadingLevel:h}):void 0},l.createElement(c.Z,null,n),(o||m)&&l.createElement(f,{nextItem:o,prevItem:m}))}function v(e){const t=e.content;return l.createElement(i.n,{content:e.content,isBlogPostPage:!0},l.createElement(r.FG,{className:(0,a.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},l.createElement(g,null),l.createElement(h,{sidebar:e.sidebar},l.createElement(t,null))))}},39407:(e,t,n)=>{n.d(t,{Z:()=>s});var l=n(87462),a=n(67294),r=n(86010),o=n(93743);const i="tableOfContents_bqdL";function s(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar",t)},a.createElement(o.Z,(0,l.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},93743:(e,t,n)=>{n.d(t,{Z:()=>g});var l=n(87462),a=n(67294),r=n(86668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const l=n.slice(2,e.level);e.parentIndex=Math.max(...l),n[e.level]=t}));const l=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):l.push(a)})),l}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:l});return function(e){return e.level>=n&&e.level<=l}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const l=e.find((e=>s(e).top>=n));if(l){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(l))?l:e[e.indexOf(l)-1]??null}return e[e.length-1]??null}function m(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=m();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:l,linkActiveClassName:a,minHeadingLevel:r,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(l),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const l=[];for(let a=t;a<=n;a+=1)l.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(l.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),s=c(i,{anchorTopOffset:n.current}),m=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:l,isChild:r}=e;return t.length?a.createElement("ul",{className:r?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:l}))))):null}const f=a.memo(u);function g(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:m,maxHeadingLevel:u,...g}=e;const E=(0,r.L)(),h=m??E.tableOfContents.minHeadingLevel,v=u??E.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>i({toc:o(t),minHeadingLevel:n,maxHeadingLevel:l})),[t,n,l])}({toc:t,minHeadingLevel:h,maxHeadingLevel:v});return d((0,a.useMemo)((()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:h,maxHeadingLevel:v}}),[s,c,h,v])),a.createElement(f,(0,l.Z)({toc:p,className:n,linkClassName:s},g))}},21613:(e,t,n)=>{n.d(t,{g1:()=>r});n(18641),n(5959);var l=n(67294),a=(n(78015),n(95398),n(54308),n(83580),n(35419));const r=e=>{const{activeTree:t}=(0,a.UK)();return l.createElement("div",{className:"overflow-y-auto"},t&&l.createElement(a.mp,{group:t,groupsClassName:()=>"",containerClassName:e=>"w-full h-[300px] "+(e.omit?"":" ")}))}},78015:(e,t,n)=>{n.d(t,{e:()=>i});var l=n(91262),a=n(18641),r=n(82580),o=n(67294);const i=e=>{const{load:t}=(0,a.sT)(),[n,i]=(0,o.useState)(null);return o.createElement("div",{className:"flex flex-col"},o.createElement("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},o.createElement(l.Z,null,(()=>o.createElement(r.J9,{initialValues:{host:`${window.location.hostname}:8000`},onSubmit:(e,n)=>{let{host:l}=e,{setSubmitting:a}=n;a(!0),i(t({endpoint:{name:"Localhost",base_url:`http://${l}/f/`},clientId:"Zvc8fwLMMINjcAxoaTBG2L6ATlV746D3Zc4T4Wiu",clientSecret:"bPDJKpvrZkhqsIvytwJuuLv8SEKeybPaPeMVpIRtdByLUERtyES2v18Dm38PUbVO0myUFAwLzwyWjo4jk91Yrhlfn51DPXN7MxYCIRedXSaNabvINv8EKv3kcWSY8Wos"}).then((()=>{i(null),a(!1)})).catch((e=>{alert({message:e.message,subtitle:e.stack})})).finally((()=>{i(null),a(!1)}),!0))}},(e=>o.createElement(r.l0,null,o.createElement("div",{className:"flex flex-row"},o.createElement("div",{className:"text-left overflow-hidden "},o.createElement(r.gN,{type:"input",name:"host",placeholder:"your host"})),o.createElement("div",{className:"ml-2"},n?o.createElement("button",{onClick:()=>n.cancel(),className:"w-full shadow-lg shadow-red-700/90 flex items-center justify-center px-2 py-1 border border-transparent text-base font-medium rounded-md text-white bg-red-300 hover:bg-red-400 md:py-1 md:text-lg md:px-10"}," ","Cancel"," "):o.createElement("button",{type:"submit",className:" shadow-lg shadow-primary-700/90 flex items-center  border border-transparent text-base font-medium rounded-md text-white bg-primary-300 hover:bg-primary-500"}," ","Use"))))))))))}},95398:(e,t,n)=>{n.d(t,{s:()=>s});var l=n(91262),a=n(52263),r=n(18641),o=n(5959),i=n(67294);const s=e=>{const{login:t}=(0,o.gX)(),n=(0,a.Z)(),{fakts:s,setFakts:c}=(0,r.sT)(),[m,d]=(0,i.useState)(null);return i.createElement("div",{className:"flex flex-col"},i.createElement("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},i.createElement(l.Z,null,(()=>i.createElement(i.Fragment,null,i.createElement("button",{onClick:()=>t({clientId:s.herre.client_id,clientSecret:s.herre.client_secret,scopes:s.herre.scopes,redirectUri:window.location.origin+n.siteConfig.baseUrl+"callback"},{base_url:s.herre.base_url,tokenUrl:s.herre.base_url+"/token/",userInfoEndpoint:s.herre.base_url+"/userinfo/",authUrl:s.herre.base_url+"/authorize/"}),className:"w-full shadow-lg shadow-primary-300/60 flex items-center justify-center px-8 py-3 border text-base font-medium rounded-md dark:text-white text-back-700 border-primary-400 bg-primary-300 hover:bg-primary-400 md:py-4 md:text-lg md:px-10"},"Login with ",s.herre.base_url),i.createElement("button",{onClick:()=>c(null)},"Disconnect"))))))}},83580:(e,t,n)=>{n.d(t,{D:()=>i});var l=n(91262),a=n(18641),r=n(5959),o=n(67294);const i=e=>{const{login:t,logout:n}=(0,r.gX)(),{fakts:i,setFakts:s}=(0,a.sT)();return o.createElement("div",{className:"flex flex-col"},o.createElement("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},o.createElement(l.Z,null,(()=>o.createElement(o.Fragment,null,"Could not connect to mikro on this instance",o.createElement("button",{onClick:()=>s(null)},"Disconnect"))))))}},29138:(e,t,n)=>{n.d(t,{Z:()=>A});var l=n(87462),a=n(67294),r=n(86010),o=n(72389),i=n(10407),s=n(95999),c=n(52263),m=n(91262),d=n(66412);const u="playgroundContainer_TGbA",f="playgroundHeader_qwyd",g="playgroundEditor_PvJ1",E="playgroundPreview_bb8I";var h=n(18641),v=n(5959),p=n(54308),b=n(78015),y=n(95398),x=n(83580);const N=e=>{let{children:t}=e;return a.createElement(h.k6,{fallback:a.createElement(b.e,null)},a.createElement(v.J,{fallback:a.createElement(y.s,null)},a.createElement(p.SS,{fallback:a.createElement(x.D,null)},t)))};var k=n(35419),C=n(21613),L=n(52094),w=n(1616),H=n(74842);function Z(e){var t;const n=e.isHeadersEditorEnabled??!0,l=(0,H._i)({nonNull:!0}),r=((0,H.JB)({nonNull:!0}),(0,H.J5)({nonNull:!0}),(0,H.bN)(),(0,H.gp)()),{theme:o,setTheme:i}=((0,H.Xd)({onCopyQuery:e.onCopyQuery}),(0,H.pQ)(),(0,H.fE)(),(0,H.Fg)()),s=(null==r||null==(t=r.visiblePlugin)||t.content,(0,H.Xx)({defaultSizeRelation:1/3,direction:"horizontal",initiallyHidden:null!=r&&r.visiblePlugin?void 0:"first",onHiddenElementChange:e=>{"first"===e&&(null==r||r.setVisiblePlugin(null))},sizeThresholdSecond:200,storageKey:"docExplorerFlex"})),c=(0,H.Xx)({direction:"horizontal",storageKey:"editorFlex"}),m=(0,H.Xx)({defaultSizeRelation:3,direction:"vertical",initiallyHidden:(()=>{if("variables"!==e.defaultEditorToolsVisibility&&"headers"!==e.defaultEditorToolsVisibility)return"boolean"==typeof e.defaultEditorToolsVisibility?e.defaultEditorToolsVisibility?void 0:"second":l.initialVariables||l.initialHeaders?void 0:"second"})(),sizeThresholdSecond:60,storageKey:"secondaryEditorFlex"}),[d,u]=(0,a.useState)((()=>"variables"===e.defaultEditorToolsVisibility||"headers"===e.defaultEditorToolsVisibility?e.defaultEditorToolsVisibility:!l.initialVariables&&l.initialHeaders&&n?"headers":"variables")),[f,g]=(0,a.useState)(null),[E,h]=(0,a.useState)(null);window.navigator.platform.toLowerCase().indexOf("mac");return a.createElement("div",{"data-testid":"graphiql-container",className:"graphiql-container border border-primary-300 rounded-lg relative"},a.createElement("div",{className:"graphiql-main"},a.createElement("div",{className:"graphiql-sessions"},a.createElement("div",{role:"tabpanel",id:"graphiql-session",className:"graphiql-session","aria-labelledby":`graphiql-session-tab-${l.activeTabIndex}`},a.createElement("div",{ref:c.firstRef},a.createElement("div",{className:"graphiql-editors"+(1===l.tabs.length?" full-height":"")},a.createElement("div",{ref:m.firstRef},a.createElement("section",{className:"graphiql-query-editor","aria-label":"Query Editor"},a.createElement("div",{className:"graphiql-query-editor-wrapper dark:bg-slate-700"},a.createElement(H.WK,{editorTheme:e.editorTheme,keyMap:e.keyMap,onClickReference:()=>{"first"===s.hiddenElement&&s.setHiddenElement(null)},onCopyQuery:e.onCopyQuery,onEdit:e.onEditQuery,readOnly:e.readOnly}))))))))))}const _=e=>{let{query:t,onEditQuery:n}=e;const{config:l}=(0,p.rM)(),{token:r}=(0,v.gX)(),[o,i]=(0,a.useState)(),c=(0,L.nq)({url:(null==l?void 0:l.endpointUrl)||"",headers:{Authorization:`Bearer ${r}`}});return a.createElement(a.Fragment,null,a.createElement("div",{className:"p-2 w-full text-xl font-light bg-gray-200 text-slate-900 rounded-t-md"},a.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live")),a.createElement("div",{className:"h-[300px]"},a.createElement(w.j$,{fetcher:c,query:t},a.createElement(Z,{onEditQuery:n}))))};var T=n(31230);const S=e=>{const{setActiveQueryData:t}=(0,k.UK)(),{client:n}=(0,p.rM)();return(0,a.useEffect)((()=>{if(e.code){console.log("props.code",e.code);try{n.query({query:(0,T.ZP)(e.code)}).then((e=>{t(e.data)}))}catch(l){console.error(l)}}}),[e.code]),a.createElement(C.g1,null)};function P(e){const[t,n]=(0,a.useState)(),[l,r]=(0,a.useState)();return(0,a.useEffect)((()=>{let e=new k.vF;e.registerChart({name:"test",match:e=>{if(e.data)return{priority:1,Component:k.b0}}}),n(e);let t=new k.HD({name:"fallback",object:"fallback",Component:e=>a.createElement("div",null,JSON.stringify(e.value))});t.registerSmart({name:"Omero",object:"Omero",Component:e=>a.createElement("div",{className:"bg-slate-900 p-3 rounded rounded-md"},"This is the Omero file ",JSON.stringify(e.value))}),r(t)}),[]),a.createElement(a.Fragment,null,a.createElement("div",{className:"p-2 w-full text-xl font-light bg-slate-600 text-slate-200 shadow shadow-md"},a.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),a.createElement("div",null,a.createElement(m.Z,{fallback:a.createElement("div",null,"Hallo")},(()=>a.createElement(N,null,l&&t&&a.createElement(k.z0,{chartRegistry:t,smartRegistry:l,palette:{graphColor:"#ffffff",dataColors:["rgb(var(--color-primary-100))","rgb(var(--color-primary-200))","rgb(var(--color-primary-300))"]}},a.createElement(S,{code:e.code})))))))}const I=e=>{let{code:t,playgroundPosition:n}=e;const[l,r]=(0,a.useState)(t);return a.createElement("div",{className:"border-slate-300 border border-1 p-1 "},a.createElement(a.Fragment,null,a.createElement(_,{query:l,onEditQuery:r}),a.createElement(P,{code:l})))};function q(e){let{children:t}=e;return a.createElement("div",{className:(0,r.Z)(f)},t)}function F(){return a.createElement("div",null,"Loading...")}function R(){return a.createElement(a.Fragment,null,a.createElement(q,null,a.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),a.createElement("div",{className:E},a.createElement(m.Z,{fallback:a.createElement(F,null)},(()=>a.createElement(N,null,a.createElement(i.i5,null),a.createElement(i.IF,null))))))}function j(){const e=(0,o.Z)();return a.createElement(i.uz,{key:String(e),className:g})}function O(){return a.createElement(a.Fragment,null,a.createElement(q,null,a.createElement(s.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),a.createElement(j,null))}function A(e){var t,n;let{children:r,transformCode:o,...s}=e;const{siteConfig:{themeConfig:f}}=(0,c.Z)(),{liveCodeBlock:{playgroundPosition:g}}=f,E=(0,d.p)(),h=(null==(t=s.metastring)?void 0:t.includes("noInline"))??!1;if(null!=(n=s.className)&&n.includes("language-")){return"jsx"===s.className.replace("language-","")?a.createElement("div",{className:u},a.createElement(i.nu,(0,l.Z)({code:r.replace(/\n$/,""),noInline:h,transformCode:o??(e=>`${e};`),theme:E},s),"top"===g?a.createElement(a.Fragment,null,a.createElement(R,null),a.createElement(O,null)):a.createElement(a.Fragment,null,a.createElement(O,null),a.createElement(R,null)))):a.createElement(m.Z,{fallback:a.createElement(F,null)},(()=>a.createElement(I,{code:r.replace(/\n$/,""),playgroundPosition:g})))}}},56922:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(67294),a=n(54308),r=n(31230);const o={React:l,...l,withMikro:a.R1,useMikroQuery:a.WE,gql:r.Ps}}}]);