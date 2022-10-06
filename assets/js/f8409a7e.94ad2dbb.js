"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[3206],{21613:(e,t,n)=>{n.d(t,{g1:()=>s});n(18641),n(5959);var a=n(67294),r=(n(78015),n(95398),n(54308),n(83580),n(35419));const s=e=>{const{activeTree:t}=(0,r.UK)();return a.createElement("div",{className:"overflow-y-auto"},t&&a.createElement(r.mp,{group:t,groupsClassName:()=>"",containerClassName:e=>"w-full h-[300px] "+(e.omit?"":" ")}))}},78015:(e,t,n)=>{n.d(t,{e:()=>o});var a=n(91262),r=n(18641),s=n(82580),l=n(67294);const o=e=>{const{load:t}=(0,r.sT)(),[n,o]=(0,l.useState)(null);return l.createElement("div",{className:"flex flex-col"},l.createElement("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},l.createElement(a.Z,null,(()=>l.createElement(s.J9,{initialValues:{host:`${window.location.hostname}:8000`},onSubmit:(e,n)=>{let{host:a}=e,{setSubmitting:r}=n;r(!0),o(t({endpoint:{name:"Localhost",base_url:`http://${a}/f/`},clientId:"Zvc8fwLMMINjcAxoaTBG2L6ATlV746D3Zc4T4Wiu",clientSecret:"bPDJKpvrZkhqsIvytwJuuLv8SEKeybPaPeMVpIRtdByLUERtyES2v18Dm38PUbVO0myUFAwLzwyWjo4jk91Yrhlfn51DPXN7MxYCIRedXSaNabvINv8EKv3kcWSY8Wos"}).then((()=>{o(null),r(!1)})).catch((e=>{alert({message:e.message,subtitle:e.stack})})).finally((()=>{o(null),r(!1)}),!0))}},(e=>l.createElement(s.l0,null,l.createElement("div",{className:"flex flex-row"},l.createElement("div",{className:"text-left overflow-hidden "},l.createElement(s.gN,{type:"input",name:"host",placeholder:"your host"})),l.createElement("div",{className:"ml-2"},n?l.createElement("button",{onClick:()=>n.cancel(),className:"w-full shadow-lg shadow-red-700/90 flex items-center justify-center px-2 py-1 border border-transparent text-base font-medium rounded-md text-white bg-red-300 hover:bg-red-400 md:py-1 md:text-lg md:px-10"}," ","Cancel"," "):l.createElement("button",{type:"submit",className:" shadow-lg shadow-primary-700/90 flex items-center  border border-transparent text-base font-medium rounded-md text-white bg-primary-300 hover:bg-primary-500"}," ","Use"))))))))))}},95398:(e,t,n)=>{n.d(t,{s:()=>i});var a=n(91262),r=n(52263),s=n(18641),l=n(5959),o=n(67294);const i=e=>{const{login:t}=(0,l.gX)(),n=(0,r.Z)(),{fakts:i,setFakts:u}=(0,s.sT)(),[c,m]=(0,o.useState)(null);return o.createElement("div",{className:"flex flex-col"},o.createElement("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},o.createElement(a.Z,null,(()=>o.createElement(o.Fragment,null,o.createElement("button",{onClick:()=>t({clientId:i.herre.client_id,clientSecret:i.herre.client_secret,scopes:i.herre.scopes,redirectUri:window.location.origin+n.siteConfig.baseUrl+"callback"},{base_url:i.herre.base_url,tokenUrl:i.herre.base_url+"/token/",userInfoEndpoint:i.herre.base_url+"/userinfo/",authUrl:i.herre.base_url+"/authorize/"}),className:"w-full shadow-lg shadow-primary-300/60 flex items-center justify-center px-8 py-3 border text-base font-medium rounded-md dark:text-white text-back-700 border-primary-400 bg-primary-300 hover:bg-primary-400 md:py-4 md:text-lg md:px-10"},"Login with ",i.herre.base_url),o.createElement("button",{onClick:()=>u(null)},"Disconnect"))))))}},83580:(e,t,n)=>{n.d(t,{D:()=>o});var a=n(91262),r=n(18641),s=n(5959),l=n(67294);const o=e=>{const{login:t,logout:n}=(0,s.gX)(),{fakts:o,setFakts:i}=(0,r.sT)();return l.createElement("div",{className:"flex flex-col"},l.createElement("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},l.createElement(a.Z,null,(()=>l.createElement(l.Fragment,null,"Could not connect to mikro on this instance",l.createElement("button",{onClick:()=>i(null)},"Disconnect"))))))}},69568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));n(21613);const s={sidebar_position:1},l="Tutorial Intro",o={unversionedId:"intro",id:"intro",title:"Tutorial Intro",description:"Let's discover Docusaurus in less than 5 minutes.",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/doks/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Tutorial - Basics",permalink:"/doks/docs/category/tutorial---basics"}},i={},u=[{value:"Getting Started",id:"getting-started",level:2},{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"Generate a new site",id:"generate-a-new-site",level:2},{value:"Start your site",id:"start-your-site",level:2}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tutorial-intro"},"Tutorial Intro"),(0,r.kt)("p",null,"Let's discover ",(0,r.kt)("strong",{parentName:"p"},"Docusaurus in less than 5 minutes"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kraphql",metastring:"live",live:!0},'query {\n      GROUP: experiment(id: 6) {\n        OBJECT: id\n        TYPE: __typename\n        NAME: name\n\n        GROUPS: samples(tags: "bad", limit: 1) {\n          OBJECT: id\n          TYPE: __typename\n          NAME: name\n          DATA: representations(variety: VOXEL) {\n            DATUM_AS_TIME: omero {\n              VALUE_FROM_DATE: acquisitionDate\n            }\n\n            FLATDATUM_OBJECT_AS_INDEX: id\n            FLATDATUM_VALUE_FROM_INT_AS_INDEX: id\n            FLATDATUM_TYPE_AS_INDEX: __typename\n\n            DATUM_AS_EXPOSURE_TIME: omero {\n              OBJECT: id\n              TYPE: __typename\n              VALUE_FROM_SUM: planes {\n                VALUE_FROM_FLOAT: exposureTime\n              }\n            }\n          }\n        }\n      }\n    }\n')),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Get started by ",(0,r.kt)("strong",{parentName:"p"},"creating a new site"),"."),(0,r.kt)("p",null,"Or ",(0,r.kt)("strong",{parentName:"p"},"try Docusaurus immediately")," with ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docusaurus.new"},"docusaurus.new")),"."),(0,r.kt)("h3",{id:"what-youll-need"},"What you'll need"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version 16.14 or above:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When installing Node.js, you are recommended to check all checkboxes related to dependencies.")))),(0,r.kt)("h2",{id:"generate-a-new-site"},"Generate a new site"),(0,r.kt)("p",null,"Generate a new Docusaurus site using the ",(0,r.kt)("strong",{parentName:"p"},"classic template"),"."),(0,r.kt)("p",null,"The classic template will automatically be added to your project after you run the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm init docusaurus@latest my-website classic\n")),(0,r.kt)("p",null,"You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor."),(0,r.kt)("p",null,"The command also installs all necessary dependencies you need to run Docusaurus."),(0,r.kt)("h2",{id:"start-your-site"},"Start your site"),(0,r.kt)("p",null,"Run the development server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-website\nnpm run start\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run start")," command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/."),(0,r.kt)("p",null,"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," (this page) and edit some lines: the site ",(0,r.kt)("strong",{parentName:"p"},"reloads automatically")," and displays your changes."))}m.isMDXComponent=!0}}]);