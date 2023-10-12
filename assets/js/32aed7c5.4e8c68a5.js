"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[5989],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,i(i({ref:t},l),{},{components:n})):a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},79295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={id:"Usage",title:"Usage",sidebar_label:"Usage"},i="Usage",s={unversionedId:"developers/python/classical/Usage",id:"developers/python/classical/Usage",title:"Usage",description:"A few words about this setup:",source:"@site/docs/developers/python/classical/usage.mdx",sourceDirName:"developers/python/classical",slug:"/developers/python/classical/Usage",permalink:"/doks/docs/developers/python/classical/Usage",draft:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/developers/python/classical/usage.mdx",tags:[],version:"current",frontMatter:{id:"Usage",title:"Usage",sidebar_label:"Usage"},sidebar:"tutorialSidebar",previous:{title:"Classic",permalink:"/doks/docs/category/classic"},next:{title:"Functional",permalink:"/doks/docs/category/functional"}},p={},c=[],l={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from arkitekt import easy\n\napp = easy("your_app_name", "your_app_version")\n\nwith app:\n    # do stuff with arkitekt\n\n\n')),(0,o.kt)("p",null,"A few words about this setup:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Arkitekt apps are configured through builder functions in this case through the ",(0,o.kt)("inlineCode",{parentName:"p"},"easy")," function.\nDepending on the builder, different services are configured. The ",(0,o.kt)("inlineCode",{parentName:"p"},"easy")," builder configures\narkitekt to mostly autoconfigure itself. This means that it will try to discover and connect\nto the backend automatically and will authenticate the user and the app through opening a browser\nwindow. Depending on your user environment you can also use different builders like the ",(0,o.kt)("inlineCode",{parentName:"p"},"jupy"),"\nbuilder to ehanve arkitekt for use in a jupyter notebook.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Arkitekt relies on the concept of an application context. This is a context manager that\nis used to manage the lifecycle of the application (e.g setup connections to the backend\nand tear down these connections). This is used to ensure that the\napplication is properly closed when it is no longer needed.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Within this context, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," object to access the various services that\nArkitekt provides. These services are available as attributes on the ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," object.\nFor example, to access the ",(0,o.kt)("inlineCode",{parentName:"p"},"Fakts")," service, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"app.fakts"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The context manager also sets some context specific variables (contextvars).\nThis means that some functionaly within this context will automatically use the governing\napp context. This allows for more declarative and functional code. For example, you can use simply call\n",(0,o.kt)("inlineCode",{parentName:"p"},"from_xarray")," to save an xarray on the mikro instance of the governing app context, without\nexplicitly passing the app context to the function. You can always opt out of this behaviour\nby specifically passing the desired context to the function."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},' from arkitekt import Arkitekt\n from mikro import from_xarray\n import xarray as xr\n\n app = easy()\n\n with app:\n     image = from_xarray(xr.DataArray((100,100,1), dims=["x", "y", "z"])) # stores the xarray on the mikro instance of the governing app context\n')),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This behaviour allows for more functional and concise code but can also lead to unexpected\nbehaviour. For example, if you have multiple app contexts running in parallel, the\n",(0,o.kt)("inlineCode",{parentName:"p"},"from_xarray")," function will use the app context that is currently active. This can lead to\nunexpected behaviour if you are not aware of this."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Within the context you should avoid setting attributes on the ",(0,o.kt)("inlineCode",{parentName:"p"},"app"),". Arkitekt was designed\nto be configured before entering the context.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Apps work both in async and synchronous contexts. This means that you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"app"),"\nobject in both async and sync code. The ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," object will automatically detect the context\nand use the correct backend (check the documentation of koil for this). This means that you can use the same code in both async and\nsync code."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"}," from arkitekt import Arkitekt\n import asyncio\n\n app = easy()\n\n async def main():\n     async with app:\n         # do stuff with arkitekt\n\n asyncio.run(main())\n")),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Arkitekt always uses an ",(0,o.kt)("inlineCode",{parentName:"p"},"asyncio")," event loop internally to manage the app context. In the non-async context, this event loop is\nrun in a separate thread. Koil ensures that this threaded event loop is properly closed when the app context is closed, and bridges\nthe calls between the threaded event loop and the main thread to ensure threadsafety. Btw: Threads started through rekuest are also\nable to call async / syncfuntions or the governing app context.")))))}d.isMDXComponent=!0}}]);