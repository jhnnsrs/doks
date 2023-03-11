"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[8610],{9703:(e,t,l)=>{l.d(t,{Z:()=>o});var a=l(7294),r=l(5999),n=l(2244);function o(e){const{metadata:t}=e,{previousPage:l,nextPage:o}=t;return a.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l&&a.createElement(n.Z,{permalink:l,title:a.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&a.createElement(n.Z,{permalink:o,title:a.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:(e,t,l)=>{l.d(t,{Z:()=>o});var a=l(7294),r=l(9460),n=l(390);function o(e){let{items:t,component:l=n.Z}=e;return a.createElement(a.Fragment,null,t.map((e=>{let{content:t}=e;return a.createElement(r.n,{key:t.metadata.permalink,content:t},a.createElement(l,null,a.createElement(t,null)))})))}},1714:(e,t,l)=>{l.r(t),l.d(t,{default:()=>h});var a=l(7294),r=l(6010),n=l(5999),o=l(850),i=l(1944),s=l(5281),c=l(9960),d=l(9058),u=l(9703),m=l(197),g=l(9985);function E(e){const t=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,n.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,n.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function p(e){let{tag:t}=e;const l=E(t);return a.createElement(a.Fragment,null,a.createElement(i.d,{title:l}),a.createElement(m.Z,{tag:"blog_tags_posts"}))}function f(e){let{tag:t,items:l,sidebar:r,listMetadata:o}=e;const i=E(t);return a.createElement(d.Z,{sidebar:r},a.createElement("header",{className:"margin-bottom--xl"},a.createElement("h1",null,i),a.createElement(c.Z,{href:t.allTagsPath},a.createElement(n.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.createElement(g.Z,{items:l}),a.createElement(u.Z,{metadata:o}))}function h(e){return a.createElement(i.FG,{className:(0,r.Z)(s.k.wrapper.blogPages,s.k.page.blogTagPostListPage)},a.createElement(p,e),a.createElement(f,e))}},7082:(e,t,l)=>{l.d(t,{Z:()=>I});var a=l(7462),r=l(7294),n=l(6010),o=l(2389),i=l(407),s=l(5999),c=l(2263),d=l(1262),u=l(6412),m=l(4763);const g={playgroundContainer:"playgroundContainer_TGbA",playgroundHeader:"playgroundHeader_qwyd",playgroundEditor:"playgroundEditor_PvJ1",playgroundPreview:"playgroundPreview_bb8I"};var E=l(9903),p=l(210),f=l(4308);const h=()=>r.createElement(r.Fragment,null,"Please connect to your Server first to use this Feature"),b=e=>{let{children:t}=e;return r.createElement(E.k6,{fallback:r.createElement(h,null)},r.createElement(p.J,{fallback:r.createElement(h,null)},r.createElement(f.SS,{fallback:r.createElement(h,null)},t)))};var v=l(5419);l(8015);const y=e=>{const{activeTree:t}=(0,v.UK)();return r.createElement("div",{className:"overflow-y-auto"},t&&r.createElement(v.mp,{group:t,groupsClassName:()=>"",containerClassName:e=>"w-full h-[300px] "+(e.omit?"":" ")}))};var k=l(2094),N=l(1616),w=l(4842);function T(e){var t;const l=e.isHeadersEditorEnabled??!0,a=(0,w._i)({nonNull:!0}),n=((0,w.JB)({nonNull:!0}),(0,w.J5)({nonNull:!0}),(0,w.bN)(),(0,w.gp)()),{theme:o,setTheme:i}=((0,w.Xd)({onCopyQuery:e.onCopyQuery}),(0,w.pQ)(),(0,w.fE)(),(0,w.Fg)()),s=(null==n||null==(t=n.visiblePlugin)||t.content,(0,w.Xx)({defaultSizeRelation:1/3,direction:"horizontal",initiallyHidden:null!=n&&n.visiblePlugin?void 0:"first",onHiddenElementChange:e=>{"first"===e&&(null==n||n.setVisiblePlugin(null))},sizeThresholdSecond:200,storageKey:"docExplorerFlex"})),c=(0,w.Xx)({direction:"horizontal",storageKey:"editorFlex"}),d=(0,w.Xx)({defaultSizeRelation:3,direction:"vertical",initiallyHidden:(()=>{if("variables"!==e.defaultEditorToolsVisibility&&"headers"!==e.defaultEditorToolsVisibility)return"boolean"==typeof e.defaultEditorToolsVisibility?e.defaultEditorToolsVisibility?void 0:"second":a.initialVariables||a.initialHeaders?void 0:"second"})(),sizeThresholdSecond:60,storageKey:"secondaryEditorFlex"}),[u,m]=(0,r.useState)((()=>"variables"===e.defaultEditorToolsVisibility||"headers"===e.defaultEditorToolsVisibility?e.defaultEditorToolsVisibility:!a.initialVariables&&a.initialHeaders&&l?"headers":"variables")),[g,E]=(0,r.useState)(null),[p,f]=(0,r.useState)(null);window.navigator.platform.toLowerCase().indexOf("mac");return r.createElement("div",{"data-testid":"graphiql-container",className:"graphiql-container border border-primary-300 rounded-lg relative"},r.createElement("div",{className:"graphiql-main"},r.createElement("div",{className:"graphiql-sessions"},r.createElement("div",{role:"tabpanel",id:"graphiql-session",className:"graphiql-session","aria-labelledby":`graphiql-session-tab-${a.activeTabIndex}`},r.createElement("div",{ref:c.firstRef},r.createElement("div",{className:"graphiql-editors"+(1===a.tabs.length?" full-height":"")},r.createElement("div",{ref:d.firstRef},r.createElement("section",{className:"graphiql-query-editor","aria-label":"Query Editor"},r.createElement("div",{className:"graphiql-query-editor-wrapper dark:bg-slate-700"},r.createElement(w.WK,{editorTheme:e.editorTheme,keyMap:e.keyMap,onClickReference:()=>{"first"===s.hiddenElement&&s.setHiddenElement(null)},onCopyQuery:e.onCopyQuery,onEdit:e.onEditQuery,readOnly:e.readOnly}))))))))))}const Z=e=>{let{query:t,onEditQuery:l}=e;const{config:a}=(0,f.rM)(),{token:n}=(0,p.gX)(),[o,i]=(0,r.useState)(),c=(0,k.nq)({url:(null==a?void 0:a.endpointUrl)||"",headers:{Authorization:`Bearer ${n}`}});return r.createElement(r.Fragment,null,r.createElement("div",{className:"p-2 w-full text-xl font-light bg-gray-200 text-slate-900 rounded-t-md border-none border-0 "},r.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Live")),r.createElement("div",{className:"h-[300px]"},r.createElement(N.j$,{fetcher:c,query:t},r.createElement(T,{onEditQuery:l}))))};var P=l(1230);const x=e=>{const{setActiveQueryData:t}=(0,v.UK)(),{client:l}=(0,f.rM)();return(0,r.useEffect)((()=>{if(e.code){console.log("props.code",e.code);try{l.query({query:(0,P.ZP)(e.code)}).then((e=>{t(e.data)}))}catch(a){console.log("e",a)}}}),[e.code]),r.createElement(y,null)};function C(e){const[t,l]=(0,r.useState)(),[a,n]=(0,r.useState)();return(0,r.useEffect)((()=>{let e=new v.vF;e.registerChart({name:"test",match:e=>{if(e.data)return{priority:1,Component:v.b0}}}),l(e);let t=new v.HD({name:"fallback",object:"fallback",Component:e=>r.createElement("div",null,JSON.stringify(e.value))});t.registerSmart({name:"Omero",object:"Omero",Component:e=>r.createElement("div",{className:"bg-slate-900 p-3 rounded rounded-md"},"This is the Omero file ",JSON.stringify(e.value))}),n(t)}),[]),r.createElement(r.Fragment,null,r.createElement("div",{className:"p-2 w-full text-xl font-light bg-slate-600 text-slate-200 shadow shadow-md"},r.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),r.createElement("div",null,r.createElement(d.Z,{fallback:r.createElement("div",null,"Hallo")},(()=>r.createElement(b,null,a&&t&&r.createElement(v.z0,{chartRegistry:t,smartRegistry:a,palette:{graphColor:"#ffffff",dataColors:["rgb(var(--color-primary-100))","rgb(var(--color-primary-200))","rgb(var(--color-primary-300))"]}},r.createElement(x,{code:e.code})))))))}const q=e=>{let{code:t,playgroundPosition:l}=e;const[a,n]=(0,r.useState)(t);return r.createElement("div",{className:"border-slate-300  p-1 "},r.createElement(r.Fragment,null,r.createElement(Z,{query:a,onEditQuery:n}),r.createElement(C,{code:a})))};function F(e){let{children:t}=e;return r.createElement("div",{className:(0,n.Z)(g.playgroundHeader)},t)}function S(){return r.createElement("div",null,"Loading...")}function H(e){let{error:t,tryAgain:l}=e;return r.createElement("div",{className:g.errorFallback},r.createElement("p",null,t.message))}function Q(){return r.createElement(d.Z,{fallback:r.createElement(S,null)},(()=>r.createElement(r.Fragment,null,r.createElement(m.Z,{fallback:e=>r.createElement(H,e)},r.createElement(i.i5,null)),r.createElement(i.IF,null))))}function R(){return r.createElement(r.Fragment,null,r.createElement(F,null,r.createElement(s.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),r.createElement("div",{className:g.playgroundPreview},r.createElement(b,null,r.createElement(Q,null))))}function V(){const e=(0,o.Z)();return r.createElement(i.uz,{key:String(e),className:g.playgroundEditor})}function z(){return r.createElement(r.Fragment,null,r.createElement(F,null,r.createElement(s.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),r.createElement(V,null))}function I(e){var t;let{children:l,transformCode:n,...o}=e;const{siteConfig:{themeConfig:s}}=(0,c.Z)(),{liveCodeBlock:{playgroundPosition:m}}=s,E=(0,u.p)();if(console.log(o),"language-kraphql"===o.className)return r.createElement(d.Z,null,(()=>r.createElement(q,{code:l,playgroundPosition:m})));const p=(null==(t=o.metastring)?void 0:t.includes("noInline"))??!1;return r.createElement("div",{className:g.playgroundContainer},r.createElement(i.nu,(0,a.Z)({code:l.replace(/\n$/,""),noInline:p,transformCode:n??(e=>`${e};`),theme:E},o),"top"===m?r.createElement(r.Fragment,null,r.createElement(R,null),r.createElement(z,null)):r.createElement(r.Fragment,null,r.createElement(z,null),r.createElement(R,null))))}},7176:(e,t,l)=>{l.d(t,{Z:()=>o});var a=l(7294),r=l(4308);var n=l(1230);const o={React:a,...a,withMikro:r.R1,useMikroQuery:r.WE,BioImage:e=>{let{image:t}=e;return a.createElement("div",{className:"p-2 flex flex-row bg-black text-white border-gray-200 border border-1 rounded "},t.name)},gql:n.Ps}}}]);