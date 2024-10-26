(()=>{var e={};e.id=931,e.ids=[931],e.modules={20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},79348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},30412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},55315:e=>{"use strict";e.exports=require("path")},83596:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>x,tree:()=>d});var s=r(3003),a=r(14293),n=r(66550),i=r.n(n),o=r(86979),l={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9012)),"/home/trex4096/Desktop/Projects/test/app/page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,66877)),"/home/trex4096/Desktop/Projects/test/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,52075,23)),"next/dist/client/components/not-found-error"]}],c=["/home/trex4096/Desktop/Projects/test/app/page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},74828:(e,t,r)=>{Promise.resolve().then(r.bind(r,81271)),Promise.resolve().then(r.bind(r,99071)),Promise.resolve().then(r.bind(r,56102)),Promise.resolve().then(r.bind(r,98618))},65998:(e,t,r)=>{Promise.resolve().then(r.bind(r,88743))},85874:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,96114,23)),Promise.resolve().then(r.t.bind(r,92639,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,79671,23)),Promise.resolve().then(r.t.bind(r,41868,23)),Promise.resolve().then(r.t.bind(r,84759,23)),Promise.resolve().then(r.t.bind(r,22816,23))},88743:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(68819),a=r(17266),n=r(35047);let i=()=>{let[e,t]=(0,a.useState)(!1),[r,i]=(0,a.useState)(!1),o=(0,n.useRouter)();return(0,s.jsx)("div",{className:"min-h-screen w-full from-blue-50 via-purple-50 to-pink-50 p-4",style:{backgroundImage:'url("/bg.svg")',backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",width:"100vw",height:"100%"},children:(0,s.jsxs)("div",{className:"max-w-md mx-auto pt-8",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center mb-8",children:[" ",(0,s.jsx)("button",{onClick:()=>i(!r),className:"opacity-0 px-3 py-1 rounded-full bg-white/70 hover:bg-white/90 text-sm shadow-sm",children:r?"English":"العربية"}),(0,s.jsx)("div",{className:"w-60 sm:w-65 md:w-64",children:(0,s.jsx)("img",{src:"Logo1.svg",alt:"Logo"})})]}),(0,s.jsxs)("div",{className:"p-6 bg-white/30 backdrop-blur-sm shadow-sm rounded-lg",children:[(0,s.jsx)("h1",{className:"text-4xl font-bold text-center mb-8",children:"Welcome!"}),(0,s.jsxs)("div",{className:"mb-8",children:[(0,s.jsx)("h2",{className:"text-2xl font-bold mb-4",children:"How to play?"}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)("p",{children:"Follow these simple steps:"}),(0,s.jsxs)("ol",{className:"list-decimal list-inside space-y-2 ml-4",children:[(0,s.jsx)("li",{children:"Register for the game."}),(0,s.jsx)("li",{children:"Answer questions to earn spins."}),(0,s.jsx)("li",{children:"Spin the wheel to land on situations."}),(0,s.jsx)("li",{children:"Spend spins to engage with situations and earn career points."}),(0,s.jsx)("li",{children:"Answer more questions for extra spins."}),(0,s.jsx)("li",{children:"Highest career points wins a prize."}),(0,s.jsx)("li",{children:"Max 30 spins per user."}),(0,s.jsx)("li",{children:"Use the toggle on top left to change the language to Arabic"})]})]})]}),(0,s.jsxs)("div",{className:"flex justify-center items-center gap-2 mb-6",children:[(0,s.jsx)("input",{type:"checkbox",id:"agree",checked:e,onChange:e=>t(e.target.checked),className:"w-4 h-4 rounded border-gray-200"}),(0,s.jsx)("label",{htmlFor:"agree",className:"text-sm",children:"I agree to play this game"})]}),(0,s.jsx)("button",{onClick:()=>o.push("/login"),disabled:!e,className:`w-full py-3 rounded-full text-xl font-semibold transition-all duration-300
              ${e?"bg-gradient-to-r from-blue-300 to-purple-300 hover:from-blue-400 hover:to-purple-400 text-white shadow-sm":"bg-gray-100 text-gray-400 cursor-not-allowed"}`,children:"Start"})]})]})})}},81271:(e,t,r)=>{"use strict";r.d(t,{AdminContextProvider:()=>i,Z:()=>o});var s=r(68819),a=r(17266);let n=(0,a.createContext)(void 0);function i({children:e}){let[t,r]=(0,a.useState)(!1),[i,o]=(0,a.useState)(1),[l,d]=(0,a.useState)([]);return(0,s.jsx)(n.Provider,{value:{refresh:t,setRefresh:r,optionIndex:["A","B","C","D"],noOfQuestion:i,setNoofQuestion:o,Form:l,setForm:d},children:e})}let o=n},99071:(e,t,r)=>{"use strict";r.d(t,{AppModeContextProvider:()=>i,Z:()=>o});var s=r(68819),a=r(17266);let n=(0,a.createContext)(void 0);function i({children:e}){let[t,r]=(0,a.useState)(!0);return(0,s.jsx)(n.Provider,{value:{lightmode:t,setLightMode:r},children:e})}let o=n},56102:(e,t,r)=>{"use strict";r.d(t,{UserContextProvider:()=>i,Z:()=>o});var s=r(68819),a=r(17266);let n=(0,a.createContext)(void 0);function i({children:e}){let[t,r]=(0,a.useState)("");return(0,s.jsx)(n.Provider,{value:{UserId:t,setUserId:r},children:e})}let o=n},35047:(e,t,r)=>{"use strict";var s=r(77389);r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}})},66877:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>h,metadata:()=>m});var a=r(89351),n=r(68215),i=r.n(n),o=r(20623),l=r.n(o);r(67272);var d=r(69256),c=r(73449),u=r(3182),x=r(39651),p=e([d,c,u,x]);[d,c,u,x]=p.then?(await p)():p;let m={title:"Create Next App",description:"Generated by create next app"};function h({children:e}){return(0,a.jsx)("html",{lang:"en",children:(0,a.jsx)("body",{className:`${i().variable} ${l().variable} antialiased`,children:(0,a.jsx)(d.eA,{children:(0,a.jsx)(u.H,{children:(0,a.jsx)(c.f,{children:(0,a.jsx)(x.S,{children:e})})})})})})}s()}catch(e){s(e)}})},9012:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>e});var a=r(71851);let e=(await (0,a.createProxy)(String.raw`/home/trex4096/Desktop/Projects/test/app/page.tsx`)).default;s()}catch(e){s(e)}},1)},3182:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{H:()=>n});var a=r(71851);let e=await (0,a.createProxy)(String.raw`/home/trex4096/Desktop/Projects/test/context/adminContext.tsx`),n=e.AdminContextProvider;e.default,s()}catch(e){s(e)}},1)},39651:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{S:()=>n});var a=r(71851);let e=await (0,a.createProxy)(String.raw`/home/trex4096/Desktop/Projects/test/context/appMode.tsx`),n=e.AppModeContextProvider;e.default,s()}catch(e){s(e)}},1)},73449:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{f:()=>n});var a=r(71851);let e=await (0,a.createProxy)(String.raw`/home/trex4096/Desktop/Projects/test/context/userContext.tsx`),n=e.UserContextProvider;e.default,s()}catch(e){s(e)}},1)},67272:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[826,363],()=>r(83596));module.exports=s})();