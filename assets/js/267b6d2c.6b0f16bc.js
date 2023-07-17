(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[6205],{4126:(e,t,o)=>{e.exports={src:{srcSet:o.p+"assets/ideal-img/installer.5666d26.640.png 640w,"+o.p+"assets/ideal-img/installer.cafa34f.1320.png 1320w,"+o.p+"assets/ideal-img/installer.3793b16.2000.png 2000w",images:[{path:o.p+"assets/ideal-img/installer.5666d26.640.png",width:640,height:226},{path:o.p+"assets/ideal-img/installer.cafa34f.1320.png",width:1320,height:465},{path:o.p+"assets/ideal-img/installer.3793b16.2000.png",width:2e3,height:704}],src:o.p+"assets/ideal-img/installer.5666d26.640.png",toString:function(){return o.p+"assets/ideal-img/installer.5666d26.640.png"},placeholder:void 0,width:640,height:226},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAADCAYAAACqPZ51AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhklEQVQImQF7AIT/ADY0NsQ4NznqNjIx13V6fS7///8Kk/r6NJj9/jeE0fcAn5/vF6ah7yIALi8x7i8uMP8yMTL/aW1tM////wSY+/lfmvv+VwAAAACUkO5Xk47sdwAwMjN0P0BBkzc4OoJxcXYZ///2C9nekhTR//8LlM/IAf///wH///8CjDY+oRkGXcwAAAAASUVORK5CYII="}},5023:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>k,contentTitle:()=>p,default:()=>y,frontMatter:()=>u,metadata:()=>h,toc:()=>f});var a=o(7462),n=o(7294),r=o(4137),s=o(3750),i=o(9583);const l=e=>{let{children:t}=e;return n.createElement("div",{className:"grid grid-cols-3 md:grid-cols-3 gap-4 mb-3 "},n.createElement("a",{href:"https://github.com/jhnnsrs/konstruktor/releases/latest/download/konstruktor_0.0.1_amd64.deb",target:"_blank",className:"p-2 bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto "},n.createElement("div",{className:"my-auto mr-2"},n.createElement(i._Aq,{size:"3em"}))," ",n.createElement("div",{className:"my-auto"},"Linux")),n.createElement("a",{href:"https://github.com/jhnnsrs/konstruktor/releases/latest/download/konstruktor_0.0.1_x64_en-US.msi",target:"_blank",className:"bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white flex flex-col items-center my-auto"},n.createElement("div",{className:"my-auto mr-2"},n.createElement(s.L1p,{size:"3em"}))," ",n.createElement("div",{className:"my-auto"},"Windows")),n.createElement("a",{href:"https://github.com/jhnnsrs/konstruktor/releases/latest/download/konstruktor_0.0.1_x64.dmg",target:"_blank",className:"bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto"},n.createElement("div",{className:"my-auto mr-2"},n.createElement(i.oPZ,{size:"3em"}))," ",n.createElement("div",{className:"my-auto"},"Mac")))};var c=o(5944),d=o(4126),m=o.n(d);const u={title:"Installation",sidebar_label:"Installation",sidebar_position:1},p=void 0,h={unversionedId:"introduction/installation",id:"introduction/installation",title:"Installation",description:"Before we start",source:"@site/docs/introduction/installation.mdx",sourceDirName:"introduction",slug:"/introduction/installation",permalink:"/doks/docs/introduction/installation",draft:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/introduction/installation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Installation",sidebar_label:"Installation",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/doks/docs/category/introduction"},next:{title:"Services",permalink:"/doks/docs/category/services"}},k={},f=[{value:"Before we start",id:"before-we-start",level:2},{value:"Graphical installer",id:"graphical-installer",level:2},{value:"Docker-Compose",id:"docker-compose",level:2},{value:"Helm Charts",id:"helm-charts",level:2},{value:"Custom installation",id:"custom-installation",level:2}],g={toc:f};function y(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"before-we-start"},"Before we start"),(0,r.kt)("p",null,"Before you start, allow a few comments about the installation of the arkitekt platform. Arkitekt\nis a web-server platform, that was designed to scale from the needs of one person to the needs of\na large organization. You can install it on your own computer, or on a server in your company, or\non a server in the cloud. Depending on the scenario, the installation process will differ\nas you might want to adjust the platform and its dependencies to your needs."),(0,r.kt)("p",null,"The core strategies of the installation process are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Graphical Installer"),", that will guide you through the installation process and will install\nall dependencies for you. This is the ",(0,r.kt)("strong",{parentName:"p"},"recommended")," way to install arkitekt on your own computer,\nif you are not familiar with the command line, and want to get started quickly. The installer\nwill guide you through the installation and install the most common modules of the platform.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Docker-Compose"),", this strategy includes a docker-compose configuration that sets up the platform\nexposing you to some decent amount of configuration options. This is the recommended way to install\narkitekt if you want to participate in the development of the platform, or if you want to integrate\nit in a larger infrastructure of your company that is powered by docker-compose.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Helm Charts ")," (coming soon), this strategy includes a helm chart that sets up the platform\nexposing you on a kubernetes cluster.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Custom Installation"),", you shouldn't really choose this strategy, unless you are a developer and\nare already familiar with the platform and its smaller subservices. Your on your own here, but\nyou can find some hints in the."))),(0,r.kt)("h2",{id:"graphical-installer"},"Graphical installer"),(0,r.kt)("p",null,'Go ahead and download our installer for your operating system "Konstruktor" , and follow the instructions:'),(0,r.kt)(l,{mdxType:"DownloadGrid"}),(0,r.kt)("p",null,"This installer ( once installed) will guide you through the installation process and the deployment of the  platform on your specific hardware. It will also give you a rough estimate of the resources you will need for the installation. Once installed it will serves  simple desktop app that  additionaly acts as an updater ,  as well as and admin interface to the platform and allows you to ",(0,r.kt)("strong",{parentName:"p"},"start")," and ",(0,r.kt)("strong",{parentName:"p"},"stop")," the platform. Additionaly it will act as a beacon\nthat advertises the platform on your local network, so that other users can find it."),(0,r.kt)("p",null,"Konstruktor necessitates the installation of a container runtime (Docker) on the machine where you want to install arkitekt.\nIf you don't have docker installed, you can download it from ",(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"here"),". Docker\nis available for Windows, Mac and Linux and is the sole outside dependency of the arkitekt platform. Please check out\nthe FAQ section for more information about the installation of docker especially when you are seeking to use GPU support\non your machine."),(0,r.kt)(c.Z,{img:m(),mdxType:"Image"}),(0,r.kt)("h2",{id:"docker-compose"},"Docker-Compose"),(0,r.kt)("p",null,"If you are familiar with docker-compose, you can use the docker-compose configuration to set up the platform. We maintain\nan active repository with the docker-compose configuration that you can find ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jhnnsrs/arkitekt-server"},"here"),".\nThis includes already the configuration for the most common modules of the platform, and when cloned with the submodules\n(`git clone --recurse-submodules``) will also include the source code of the platform. If you encounter any problems with\nthe docker-compose configuration, please open an issue in the repository."),(0,r.kt)("h2",{id:"helm-charts"},"Helm Charts"),(0,r.kt)("p",null,"We are currently working on a helm chart that will allow you to install arkitekt on a kubernetes cluster. This will be\navailable soon. You can find the repository ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jhnnsrs/arkitekt-helm"},"here"),". For now, you can use the\ndocker-compose configuration to set up the platform on a kubernetes cluster using the ",(0,r.kt)("a",{parentName:"p",href:"https://kompose.io/"},"kompose")," tool."),(0,r.kt)("h2",{id:"custom-installation"},"Custom installation"),(0,r.kt)("p",null,"From here be dragons. You can find some hints in the  developer section of each module and consult each sub\nmodules documentation for more information about the installation of the platform. At this point however you are on your\nown. If you encounter any problems, please open an issue in the respective repository."))}y.isMDXComponent=!0}}]);