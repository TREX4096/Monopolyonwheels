(()=>{var e={};e.id=278,e.ids=[278],e.modules={20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},79348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},30412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},27790:e=>{"use strict";e.exports=require("assert")},17702:e=>{"use strict";e.exports=require("events")},92048:e=>{"use strict";e.exports=require("fs")},32615:e=>{"use strict";e.exports=require("http")},35240:e=>{"use strict";e.exports=require("https")},19801:e=>{"use strict";e.exports=require("os")},55315:e=>{"use strict";e.exports=require("path")},76162:e=>{"use strict";e.exports=require("stream")},74175:e=>{"use strict";e.exports=require("tty")},17360:e=>{"use strict";e.exports=require("url")},21764:e=>{"use strict";e.exports=require("util")},71568:e=>{"use strict";e.exports=require("zlib")},98911:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>x,pages:()=>c,routeModule:()=>u,tree:()=>l});var s=r(3003),i=r(14293),a=r(66550),o=r.n(a),d=r(86979),n={};for(let e in d)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>d[e]);r.d(t,n);let l=["",{children:["api",{children:["admin",{children:["createform",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,38550)),"/home/trex4096/Desktop/Projects/test/app/api/admin/createform/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,49648)),"/home/trex4096/Desktop/Projects/test/app/api/admin/layout.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,66877)),"/home/trex4096/Desktop/Projects/test/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,52075,23)),"next/dist/client/components/not-found-error"]}],c=["/home/trex4096/Desktop/Projects/test/app/api/admin/createform/page.tsx"],x={require:r,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/api/admin/createform/page",pathname:"/api/admin/createform",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},48936:(e,t,r)=>{Promise.resolve().then(r.bind(r,88308))},37986:(e,t,r)=>{Promise.resolve().then(r.bind(r,71879))},74828:(e,t,r)=>{Promise.resolve().then(r.bind(r,81271)),Promise.resolve().then(r.bind(r,99071)),Promise.resolve().then(r.bind(r,56102)),Promise.resolve().then(r.bind(r,98618))},85874:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,96114,23)),Promise.resolve().then(r.t.bind(r,92639,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,79671,23)),Promise.resolve().then(r.t.bind(r,41868,23)),Promise.resolve().then(r.t.bind(r,84759,23)),Promise.resolve().then(r.t.bind(r,22816,23))},88308:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var s=r(68819),i=r(17266),a=r(99071),o=r(81271);let d=({idx:e,lightmode:t,setOption:r,disabled:a})=>{let d=(0,i.useContext)(o.Z);if(!d)throw Error("AdminContextProvider is missing");let{refresh:n,setRefresh:l}=d;return(0,s.jsxs)("div",{className:`w-full flex items-center gap-2 p-2 rounded-lg m-1 
    ${t?"border-gray-200 bg-white shadow-lg border-[1px] ":"text-darkText bg-darkBg border-[1px] border-darkBorder"}`,children:[(0,s.jsxs)("span",{children:[e,". "]}),(0,s.jsx)("input",{type:"text",disabled:a,placeholder:`Enter option No. ${e} here`,className:"w-full border border-gray-300 rounded px-2 py-1 focus:outline-none",onChange:e=>{r(e.target.value)}})]})};var n=r(31215),l=r(44389),c=r(69669);let x=({index:e})=>{let t=(0,i.useContext)(o.Z);if(!t)throw Error("AdminContextProvider is missing");let{noOfQuestion:r,setNoofQuestion:a,Form:x,refresh:u,setForm:p,setRefresh:m}=t,[h,f]=(0,i.useState)(!1),[v,b]=(0,i.useState)(""),[g,y]=(0,i.useState)(""),[j,P]=(0,i.useState)(""),[w,k]=(0,i.useState)(""),[C,N]=(0,i.useState)(""),[S,q]=(0,i.useState)(!0),A=()=>""!==v.trim()&&""!==g.trim()&&""!==j.trim()&&""!==w.trim()&&""!==C.trim(),Z={question:v,options:[g,j,w,C],multiple:h};return(0,i.useEffect)(()=>{A()&&([...x][e]=Z,m(!u))},[v,g,j,w,C,h]),(0,s.jsxs)("div",{className:"my-5 p-5 border-gray-200 bg-white shadow-lg border-[1px] ",children:[(0,s.jsxs)("div",{className:"mb-3 flex flex-row justify-between items-center",children:[(0,s.jsxs)("div",{className:"flex flex-row items-center space-x-2",children:[(0,s.jsx)("label",{htmlFor:"terms",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"Is this question MultiCorrect?"}),(0,s.jsx)("input",{type:"checkbox",className:"cursor-pointer",onChange:()=>{f(!h)},disabled:!S})]}),(0,s.jsxs)("div",{className:"flex flex-row gap-2 items-center",children:[(0,s.jsx)("button",{className:"text-black",onClick:()=>{if(S){if(A()){let t=[...x];t[e]=Z,p(t),console.log(x),q(!1)}else alert("All fields are required")}else q(!0)},children:S?(0,s.jsx)(n.Z,{size:18}):(0,s.jsx)(l.Z,{size:18})}),(0,s.jsx)(c.Z,{className:"hover:cursor-pointer hover:text-red-600 opacity-45 hover:opacity-100",size:"19px",onClick:()=>{r>=2&&a(r-1)}})]})]}),(0,s.jsx)("div",{children:(0,s.jsx)("input",{type:"text",placeholder:"Enter Your Question Here",className:"w-full border border-gray-300 rounded px-2 py-1 focus:outline-none",onChange:e=>{b(e.target.value)},value:v,disabled:!S})}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 items-baseline gap-2",children:[(0,s.jsx)(d,{idx:1,lightmode:!0,setOption:y,disabled:!S}),(0,s.jsx)(d,{idx:2,lightmode:!0,setOption:P,disabled:!S}),(0,s.jsx)(d,{idx:3,lightmode:!0,setOption:k,disabled:!S}),(0,s.jsx)(d,{idx:4,lightmode:!0,setOption:N,disabled:!S})]})]})};var u=r(44099);let p=()=>{let e=(0,i.useContext)(a.Z);if(!e)throw Error("AppModeContextProvider is missing");let{lightmode:t}=e,r=(0,i.useContext)(o.Z);if(!r)throw Error("AdminContextProvider is missing");let[d,n]=(0,i.useState)(""),{noOfQuestion:l,setNoofQuestion:c,Form:p}=r,m=async()=>{if(!p||0===Object.keys(p).length){alert("Please fill out the form completely");return}try{console.log({formName:d,formData:p});let e=await u.Z.post("https://spin-the-wheel-backend.onrender.com/admin/addForm/4a8e0f7b-77cb-4c01-a436-fcc1ee22d5a1",{formName:d,formData:p});201===e.status?alert("Form added successfully"):alert("Form not added, please try again")}catch(e){alert(e?.response?.data?.message||"Error while adding form")}};return(0,s.jsxs)("div",{className:`gap-5 p-4 ${!t&&"bg-darkBg"}`,children:[(0,s.jsx)("div",{className:"flex flex-row justify-center my-3",children:(0,s.jsx)("button",{className:"w-[100px] border-[1px] text-center px-3 py-2 bg-[#0077ED] text-white rounded-md",onClick:m,children:"Submit"})}),(0,s.jsxs)("div",{className:`rounded-lg p-4 ${t?"border-gray-200 bg-white shadow-lg border-[1px] ":"text-darkText bg-darkBg border-[1px] border-darkBorder"}`,children:[(0,s.jsx)("div",{className:"my-2",children:(0,s.jsx)("input",{type:"text",placeholder:"Enter Form Name Here",className:"w-full  border border-gray-300 rounded px-2 py-1 focus:outline-none",onChange:e=>{n(e.target.value)}})}),(0,s.jsx)("div",{children:Array.from({length:l},(e,t)=>(0,s.jsx)(x,{index:t}))}),(0,s.jsx)("div",{className:"my-4 flex flex-row w-full justify-center items-center",children:(0,s.jsx)("button",{className:"w-[130px] border-[1px] text-center px-3 py-2 bg-[#0077ED] text-white rounded-md",onClick:()=>{c(l+1)},children:"Add Question"})})]})]})};function m(){let e=(0,i.useContext)(a.Z);if(!e)throw Error("AppModeContextProvider is missing");let{lightmode:t,setLightMode:r}=e,d=(0,i.useContext)(o.Z);if(!d)throw Error("AdminContextProvider is missing");let{refresh:n,setRefresh:l}=d,[c,x]=(0,i.useState)([]);return(0,s.jsx)(p,{})}},71879:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(68819),i=r(17266),a=r(90434),o=r(99071),d=r(60850),n=r(93093);function l({children:e}){let t=(0,i.useContext)(o.Z);if(!t)throw Error("AppModeContextProvider is missing");let{lightmode:r,setLightMode:l}=t;return(0,s.jsxs)("div",{className:`${r?"bg-lightBg":"bg-darkBg"} z-[10000]`,children:[(0,s.jsxs)("div",{className:`px-3 h-[55px] flex flex-row justify-between items-center sticky top-0
         ${r?"text-gray-500":" text-darkText border-b-[1px] border-darkBorder"} backdrop-blur-md`,children:[(0,s.jsxs)("div",{className:"flex flex-row gap-5",children:[(0,s.jsx)(a.default,{href:"dashboard",children:"Dashboard"}),(0,s.jsx)(a.default,{href:"form",children:"Form"}),(0,s.jsx)(a.default,{href:"results",children:"Result"}),(0,s.jsx)(a.default,{href:"createform",children:"Add"})]}),(0,s.jsx)("div",{className:"flex flex-row items-center gap-2 cursor-pointer",onClick:()=>l(!r),children:r?(0,s.jsx)(d.Z,{}):(0,s.jsx)(n.Z,{})})]}),e]})}},81271:(e,t,r)=>{"use strict";r.d(t,{AdminContextProvider:()=>o,Z:()=>d});var s=r(68819),i=r(17266);let a=(0,i.createContext)(void 0);function o({children:e}){let[t,r]=(0,i.useState)(!1),[o,d]=(0,i.useState)(1),[n,l]=(0,i.useState)([]);return(0,s.jsx)(a.Provider,{value:{refresh:t,setRefresh:r,optionIndex:["A","B","C","D"],noOfQuestion:o,setNoofQuestion:d,Form:n,setForm:l},children:e})}let d=a},99071:(e,t,r)=>{"use strict";r.d(t,{AppModeContextProvider:()=>o,Z:()=>d});var s=r(68819),i=r(17266);let a=(0,i.createContext)(void 0);function o({children:e}){let[t,r]=(0,i.useState)(!0);return(0,s.jsx)(a.Provider,{value:{lightmode:t,setLightMode:r},children:e})}let d=a},56102:(e,t,r)=>{"use strict";r.d(t,{UserContextProvider:()=>o,Z:()=>d});var s=r(68819),i=r(17266);let a=(0,i.createContext)(void 0);function o({children:e}){let[t,r]=(0,i.useState)("");return(0,s.jsx)(a.Provider,{value:{UserId:t,setUserId:r},children:e})}let d=a},69669:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s=(0,r(62881).Z)("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]])},44389:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s=(0,r(62881).Z)("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]])},31215:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s=(0,r(62881).Z)("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]])},38550:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>e});var i=r(71851);let e=(await (0,i.createProxy)(String.raw`/home/trex4096/Desktop/Projects/test/app/api/admin/createform/page.tsx`)).default;s()}catch(e){s(e)}},1)},49648:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>e});var i=r(71851);let e=(await (0,i.createProxy)(String.raw`/home/trex4096/Desktop/Projects/test/app/api/admin/layout.tsx`)).default;s()}catch(e){s(e)}},1)},66877:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>m,metadata:()=>h});var i=r(89351),a=r(68215),o=r.n(a),d=r(20623),n=r.n(d);r(67272);var l=r(69256),c=r(73449),x=r(3182),u=r(39651),p=e([l,c,x,u]);[l,c,x,u]=p.then?(await p)():p;let h={title:"Create Next App",description:"Generated by create next app"};function m({children:e}){return(0,i.jsx)("html",{lang:"en",children:(0,i.jsx)("body",{className:`${o().variable} ${n().variable} antialiased`,children:(0,i.jsx)(l.eA,{children:(0,i.jsx)(x.H,{children:(0,i.jsx)(c.f,{children:(0,i.jsx)(u.S,{children:e})})})})})})}s()}catch(e){s(e)}})},3182:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{H:()=>a});var i=r(71851);let e=await (0,i.createProxy)(String.raw`/home/trex4096/Desktop/Projects/test/context/adminContext.tsx`),a=e.AdminContextProvider;e.default,s()}catch(e){s(e)}},1)},39651:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{S:()=>a});var i=r(71851);let e=await (0,i.createProxy)(String.raw`/home/trex4096/Desktop/Projects/test/context/appMode.tsx`),a=e.AppModeContextProvider;e.default,s()}catch(e){s(e)}},1)},73449:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{f:()=>a});var i=r(71851);let e=await (0,i.createProxy)(String.raw`/home/trex4096/Desktop/Projects/test/context/userContext.tsx`),a=e.UserContextProvider;e.default,s()}catch(e){s(e)}},1)},67272:()=>{}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[826,363,99,984],()=>r(98911));module.exports=s})();