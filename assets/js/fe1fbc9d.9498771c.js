"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[8067],{2453:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(7462),o=(a(7294),a(3905));const i={id:"my-first-app",title:"My first App",sidebar_label:"The basics"},r="Quickstart",s={unversionedId:"developers/python/my-first-app",id:"developers/python/my-first-app",title:"My first App",description:"The easiest way to install the library is to use poetry or pip:",source:"@site/docs/developers/python/my-first-app.md",sourceDirName:"developers/python",slug:"/developers/python/my-first-app",permalink:"/doks/docs/developers/python/my-first-app",draft:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/developers/python/my-first-app.md",tags:[],version:"current",frontMatter:{id:"my-first-app",title:"My first App",sidebar_label:"The basics"},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/doks/docs/developers/python/Intro"},next:{title:"Intro",permalink:"/doks/docs/developers/intro"}},p={},l=[],c={toc:l};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quickstart"},"Quickstart"),(0,o.kt)("p",null,"The easiest way to install the library is to use poetry or pip:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"pip install arkitekt\n")),(0,o.kt)("p",null,"As Arkitekt comes with a CLI, you can then use it to create a new project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"arkitekt init\n")),(0,o.kt)("p",null,"This will setup arkitekt in the local directory and guide you through connecting to your\nlocal arkitekt instance for the first time."),(0,o.kt)("h1",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Lets's create an Arkitekt App, as it is the connection layer between your code and the arkitet server. If you don't know what we mean by an app, check out the ",(0,o.kt)("a",{parentName:"p",href:"/doks/docs/design/terminology/app"},"App")," section of the terminology page."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from arkitekt import easy\n\n\napp = easy("my-app-name")\n\nwith app:\n    # do stuff with arkitekt\n\n\n')),(0,o.kt)("p",null,"Before we start exploring what you can do with this app a few general words about this\nsetup:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You might notice that we are creating an arkitekt app through calling the easy function, specifying only the name of the app, without having to explicitly\npointing the app to an arkitekt instance. This is by design. Your code should not be aware of the backend it is connecting to, as this allows easy installation of your code anywhere. Arkitekt uses the fakt service to discover the backend, and will retrieve its configuration from the backend, before connecting to it, on the first call within the context (a useful feature for system admins to configure apps after deployment). Of course you can opt out of this behaviours by passing an explicity url of the arkitekt server or by changing the fakts attributes before entering the context."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},' from arkitekt import easy\n from fakts.grants.remote import RemoteDeviceGrant\n\n app = easy("my-app-name")\n\n app.fakts.grant = RemoteDeviceGrant("my-device-id", "my-device-secret") # Will try to connect claiming to be a preconfigured client\n with app:\n     # do stuff with arkitekt\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Arkitekt relies on the concept of an context manager (that ",(0,o.kt)("inlineCode",{parentName:"p"},"with")," statement). We use\nthis to manage the lifecycle of the application (e.g setup connections to the backend\nand tear down these connections). With this pattern we can ensure a graceful shutdown\nwhen it is no longer needed (or when an error occurs)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Within this context, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," object to access the various services that\nArkitekt provides. These services are available as attributes on the ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," object.\nFor example, to access the ",(0,o.kt)("inlineCode",{parentName:"p"},"Mikro")," service (responsible for storing your microscopy data\n), you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"app.mikro"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The context manager also sets some context specific variables (contextvars).\nThis means we can inject its dependencys within this context automatically sing the governing\napp context. This allows for more functional code. For example, you can use simply call\n",(0,o.kt)("inlineCode",{parentName:"p"},"from_xarray")," to save an xarray on the mikro instance of the governing app context, without\nexplicitly passing the apps mikro server to the function. You can always opt out of this behaviour\nby specifically passing the desired context to the function."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},' from arkitekt import easy\n from mikro.api.schema import from_xarray\n import xarray as xr\n\n app = easy("my-app-name")\n\n with app:\n     image = from_xarray(xr.DataArray((100,100,1), dims=["x", "y", "z"])) # stores the xarray on the mikro instance of the governing app context\n\n      # or\n\n     image = from_xarray(xr.DataArray((100,100,1), dims=["x", "y", "z"]), rath=app.mikro.rath) # stores the xarray on the specified mikro instance\n')),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This behaviour allows for more functional and concise code but can also lead to unexpected\nbehaviour. For example, if you have multiple app contexts running in parallel, the\n",(0,o.kt)("inlineCode",{parentName:"p"},"from_xarray")," function will use the app context that is currently active. This can lead to\nunexpected behaviour if you are not aware of this."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Within the context you should avoid setting attributes on the ",(0,o.kt)("inlineCode",{parentName:"p"},"app"),". An Arkitekt was designed\nto be configured before entering the context and not to be changed within the context.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Apps work both in async and synchronous contexts. This means that you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"app"),"\nobject in both async and sync code. The ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," object will automatically detect the context\nand use the correct backend (check the documentation of koil for this). This means that you can use the same code in both async and\nsync code."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"}," from arkitekt import Arkitekt\n import asyncio\n\n app = Arkitekt()\n\n async def main():\n     async with app:\n         # do stuff with arkitekt\n\n asyncio.run(main())\n")),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Arkitekt always uses an ",(0,o.kt)("inlineCode",{parentName:"p"},"asyncio")," event loop internaly to manage the app context. In the non-async context, this event loop is\nrun in a separate thread. Koil ensures that this threaded event loop is properly closed when the app context is closed, and bridges\nthe calls between the threaded event loop and the main thread to ensure threadsafety. Btw: Threads started through rekuest are also\nable to call async / syncfuntions or the governing app context."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Calls outside of the app, context will always fail, as the app context is required to\nsetup the connection to the backend. This is by design, as it ensures that you are aware\nof the context in which your code is running."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},' from arkitekt import easy\n from mikro.api.schema import from_xarray\n\n app = Arkitekt()\n\n with app:\n      # do stuff with arkitekt\n      from_xarray(xr.DataArray((100,100,1), dims=["x", "y", "z"]), name="my-image") \n\n from_xarray(xr.DataArray((100,100,1), dims=["x", "y", "z"]), name="my-failed-image")  # will fail\n')))),(0,o.kt)("h1",{id:"lets-get-started"},"Lets get started"),(0,o.kt)("p",null,"Now that we have a basic understanding of how Arkitekt works, let's start exploring the various things you can do with it.\nWe have created a few tutorials to get you started:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/doks/docs/developers/python/basics/my-first-app"},"Storing image data")),(0,o.kt)("li",{parentName:"ul"})))}h.isMDXComponent=!0}}]);