(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[530],{24135:(e,t,s)=>{Promise.resolve().then(s.bind(s,60269))},60269:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>k});var r=s(57437),a=s(2265),n=s(97669),o=s(38472),l=s(28930);let d=e=>{let{users:t,lightmode:s,heading:a}=e;return(0,r.jsxs)("div",{className:"p-2 min-w-[300px] h-[85vh] overflow-scroll scrollbar-hide ".concat(s?"text-black shadow-md border-[1px]":"text-darkText border-[1px] border-darkBorder"," rounded-xl"),children:[(0,r.jsx)("h3",{className:"text-center",children:a}),(0,r.jsxs)("div",{className:"mt-5 mb-3 px-4 py-[6px] flex flex-row justify-between rounded-2xl ".concat(s?"bg-white shadow-md":"border-[1px] border-darkBorder"),children:[(0,r.jsxs)("div",{className:"flex flex-row gap-2 items-center",children:[(0,r.jsx)("span",{className:"w-[30px]",children:"#"}),(0,r.jsx)("span",{className:"w-50% ",children:"Name"})]}),(0,r.jsx)("span",{children:"Points"})]}),(0,r.jsx)("div",{className:"flex flex-col gap-1",children:t.length>0?null==t?void 0:t.map((e,t)=>(0,r.jsxs)("div",{className:"m-1 px-4 py-[6px] flex flex-row justify-between items-center rounded-2xl ".concat(s?"bg-white shadow-md":"border-[1px] border-darkBorder"),children:[(0,r.jsxs)("div",{className:"flex flex-row gap-2 items-center",children:[(0,r.jsx)("span",{className:"w-[30px] flex",children:t+1}),(0,r.jsx)("span",{className:"w-50% overflow-ellipsis",children:e.name})]}),(0,r.jsx)("span",{children:e.points})]},e.name)):(0,r.jsx)("div",{className:"text-center ".concat(s?"bg-white":" text-darkText"),children:(0,r.jsx)("span",{children:"No User Found"})})})]})},c=e=>{let{users:t,lightmode:s,heading:a}=e;return(0,r.jsxs)("div",{className:"p-2 w-full h-[180px] overflow-scroll scrollbar-hide ".concat(s?"text-black shadow-md border-[1px]":"text-darkText border-[1px] border-darkBorder"," rounded-xl"),children:[(0,r.jsx)("h3",{className:"text-center",children:a}),(0,r.jsx)("div",{className:"flex flex-col gap-1",children:(null==t?void 0:t.length)>0?null==t?void 0:t.map((e,t)=>(0,r.jsxs)("div",{className:"m-1 px-4 py-[6px] flex flex-row justify-between items-center rounded-2xl ".concat(s?"bg-white shadow-md":"border-[1px] border-darkBorder"),children:[(0,r.jsxs)("div",{className:"flex flex-row gap-2 items-center",children:[(0,r.jsx)("span",{className:"w-[30px] flex",children:t+1}),(0,r.jsx)("span",{className:"w-50% overflow-ellipsis",children:e.name})]}),(0,r.jsx)("span",{children:e.points})]},e.name)):(0,r.jsx)("div",{className:"text-center ".concat(s?"bg-white":" text-darkText"),children:(0,r.jsx)("span",{children:"No User Found"})})})]})},i=e=>{let{heading:t,popup:s,setPopup:l,resetOrNot:d,task:c,setFunctionName:i}=e,x=(0,a.useContext)(n.Z);if(!x)throw Error("AppModeContextProvider is missing");let{lightmode:m,setLightMode:f}=x,u=async()=>{try{let e=await o.Z.post("".concat("https://spin-the-wheel-backend.onrender.com","/admin/resetLeaderBoard"));200===e.status&&console.log("Reset SuccessFull")}catch(e){}};return(0,r.jsxs)("div",{className:"my-4 w-full h-fit rounded-xl p-4 flex flex-col  gap-3 ".concat(m?"text-black shadow-md border-[1px]":"text-darkText bg-darkBg  border-[1px] border-darkBorder"),children:[(0,r.jsx)("h3",{className:"text-center",children:"Set Reset Timer for ".concat(t)}),(0,r.jsxs)("div",{className:"flex flex-col md:flex-row justify-between",children:[(0,r.jsxs)("div",{className:"flex flex-col b-r-[1px] ",children:[(0,r.jsx)("span",{children:"Last Updated at:-  ".concat(null==c?void 0:c.updatedAt)}),(0,r.jsx)("span",{children:(null==c?void 0:c.timeLeft)!==null?"Time Left:- ".concat(null==c?void 0:c.timeLeft):"Task Completed"})]}),(0,r.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,r.jsx)("button",{className:"px-3 py-2  ".concat(m?"bg-blue-400 text-white":"bg-darkBg border-[1px] border-darkBorder text-darkText hover:bg-gray-800"," text-dark rounded-lg"),onClick:()=>{l(!s),"MegaLeaderBoard"===t?i("setAllCareerPointsToZero"):i("sessionWinner")},children:"Update"}),d&&(0,r.jsx)("button",{className:"px-3 py-2  ".concat(m?"bg-blue-400 text-white":"bg-darkBg border-[1px] border-darkBorder text-darkText hover:bg-gray-800"," text-dark rounded-lg"),onClick:u,children:"Reset"})]})]})]})};var x=s(17055),m=s(87592),f=s(22468),u=s(28165),p=s(37440);let h=x.fC,b=x.xz;x.ZA,x.Uv,x.Tr,x.Ee,a.forwardRef((e,t)=>{let{className:s,inset:a,children:n,...o}=e;return(0,r.jsxs)(x.fF,{ref:t,className:(0,p.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-zinc-100 data-[state=open]:bg-zinc-100 dark:focus:bg-zinc-800 dark:data-[state=open]:bg-zinc-800",a&&"pl-8",s),...o,children:[n,(0,r.jsx)(m.Z,{className:"ml-auto h-4 w-4"})]})}).displayName=x.fF.displayName,a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(x.tu,{ref:t,className:(0,p.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border border-zinc-200 bg-white p-1 text-zinc-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",s),...a})}).displayName=x.tu.displayName;let g=a.forwardRef((e,t)=>{let{className:s,sideOffset:a=4,...n}=e;return(0,r.jsx)(x.Uv,{children:(0,r.jsx)(x.VY,{ref:t,sideOffset:a,className:(0,p.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border border-zinc-200 bg-white p-1 text-zinc-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",s),...n})})});g.displayName=x.VY.displayName;let w=a.forwardRef((e,t)=>{let{className:s,inset:a,...n}=e;return(0,r.jsx)(x.ck,{ref:t,className:(0,p.cn)("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus:bg-zinc-800 dark:focus:text-zinc-50",a&&"pl-8",s),...n})});w.displayName=x.ck.displayName,a.forwardRef((e,t)=>{let{className:s,children:a,checked:n,...o}=e;return(0,r.jsxs)(x.oC,{ref:t,className:(0,p.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50",s),checked:n,...o,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(x.wU,{children:(0,r.jsx)(f.Z,{className:"h-4 w-4"})})}),a]})}).displayName=x.oC.displayName,a.forwardRef((e,t)=>{let{className:s,children:a,...n}=e;return(0,r.jsxs)(x.Rk,{ref:t,className:(0,p.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50",s),...n,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(x.wU,{children:(0,r.jsx)(u.Z,{className:"h-2 w-2 fill-current"})})}),a]})}).displayName=x.Rk.displayName,a.forwardRef((e,t)=>{let{className:s,inset:a,...n}=e;return(0,r.jsx)(x.__,{ref:t,className:(0,p.cn)("px-2 py-1.5 text-sm font-semibold",a&&"pl-8",s),...n})}).displayName=x.__.displayName;let j=a.forwardRef((e,t)=>{let{className:s,...a}=e;return(0,r.jsx)(x.Z0,{ref:t,className:(0,p.cn)("-mx-1 my-1 h-px bg-zinc-100 dark:bg-zinc-800",s),...a})});j.displayName=x.Z0.displayName;let N=e=>{let{items:t,value:s,setvalue:a}=e;return(0,r.jsxs)(h,{children:[(0,r.jsx)(b,{children:(0,r.jsx)("div",{className:"px-4 py-2 bg-gray-200 text-gray-800 border-2 border-darkBorder rounded-md hover:bg-gray-300 transition duration-150",children:s||"Select"})}),(0,r.jsxs)(g,{className:"mb-1 max-h-60 overflow-y-auto scrollbar-hide",children:[(0,r.jsx)(j,{className:"overflow-scroll scrollbar-hide"}),t.map((e,t)=>(0,r.jsx)(w,{onClick:()=>a(e),children:e},t))]})]})},v=e=>{switch(e){case"days":return Array.from({length:7},(e,t)=>(t+1).toString());case"hours":return Array.from({length:24},(e,t)=>(t+1).toString());case"minutes":return["15","30","45"];default:return[]}};console.log(v("days"));let y=e=>{let{onClose:t,functionName:s}=e,n=["days","hours","minutes"],[d,c]=(0,a.useState)(""),[i,x]=(0,a.useState)(!1),[m,f]=(0,a.useState)(n[2]),u=v(m),p=async()=>{let e={functionToRun:s,durationValue:parseInt(d),durationUnit:m};try{x(!0);let s=await o.Z.post("".concat("https://spin-the-wheel-backend.onrender.com","/admin/putTimer/").concat("4a8e0f7b-77cb-4c01-a436-fcc1ee22d5a1"),e);200===s.status&&(console.log("Response:",s.data),console.log(e),x(!1),t())}catch(e){e.response?(console.error("Error Data:",e.response.data),console.error("Error Status:",e.response.status)):e.request?console.error("No response received:",e.request):console.error("Error:",e.message)}};return(0,r.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",children:i?(0,r.jsx)("div",{className:"w-full h-[100%] flex flex-row justify-center items-center",children:(0,r.jsx)(l.Z,{color:"#00BFFF",loading:!0,size:50})}):(0,r.jsxs)("div",{className:"bg-white rounded-lg p-6 shadow-lg",children:[(0,r.jsx)("h2",{className:"text-xl text-center font-bold",children:"You are setting the reset timer for Mega-LeaderBoard "}),(0,r.jsxs)("div",{className:"flex flex-row justify-center gap-3",children:[(0,r.jsx)(N,{items:u,setvalue:c,value:"".concat(d)}),(0,r.jsx)(N,{items:n,setvalue:f,value:"".concat(m)})]}),(0,r.jsxs)("div",{className:"flex flex-row justify-between items-center",children:[(0,r.jsx)("button",{onClick:t,className:"mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",children:"Close"}),(0,r.jsx)("button",{onClick:p,className:"mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",children:"Set"})]})]})})};function k(){let[e,t]=(0,a.useState)([]),[s,x]=(0,a.useState)([]),[m,f]=(0,a.useState)([]),[u,p]=(0,a.useState)(""),[h,b]=(0,a.useState)([]),[g,w]=(0,a.useState)([]),[j,N]=(0,a.useState)([]),[v,k]=(0,a.useState)(!1),[z,S]=(0,a.useState)(!1),B=(0,a.useContext)(n.Z);if(!B)throw Error("AppModeContextProvider is missing");let{lightmode:C,setLightMode:E}=B,T=async()=>{try{let e="".concat("https://spin-the-wheel-backend.onrender.com","/admin/getAllusers/").concat("4a8e0f7b-77cb-4c01-a436-fcc1ee22d5a1");S(!0);let s=(await o.Z.get(e)).data;t(s)}catch(e){e.response?console.error("Error fetching forms:",e.response.status,e.response.data):console.error("Error fetching forms:",e.message)}finally{S(!1)}},Z=async()=>{try{let e="".concat("https://spin-the-wheel-backend.onrender.com","/admin/getAdmin/").concat("4a8e0f7b-77cb-4c01-a436-fcc1ee22d5a1");S(!0);let t=await o.Z.get(e);200===t.status?(b(t.data.lastSessionWinners),w(t.data.tasks.sessionWinner),N(t.data.tasks.setAllCareerPointsToZero)):console.log(t.data)}catch(e){e.response?console.error("Error fetching forms:",e.response.status,e.response.data):console.error("Error fetching forms:",e.message)}finally{S(!1)}},R=async()=>{try{let e="".concat("https://spin-the-wheel-backend.onrender.com","/admin/getSessionusers/").concat("4a8e0f7b-77cb-4c01-a436-fcc1ee22d5a1","/sessionWinner");S(!0);let t=(await o.Z.get(e)).data;x(t.users)}catch(e){e.response?console.log("Error fetching forms:",e.response.status,e.response.data):console.log("Error fetching forms:",e.message)}finally{S(!1)}};return(0,a.useEffect)(()=>{(async()=>{try{await T(),await Z(),await R()}catch(e){console.error("Error fetching data:",e)}})()},[y]),z?(0,r.jsx)("div",{className:"w-full h-[100vh] flex flex-row justify-center items-center",children:(0,r.jsx)(l.Z,{color:"#00BFFF",loading:!0,size:50})}):(0,r.jsxs)("div",{className:"flex flex-col-reverse md items-center md:flex-row p-4 md:items-start justify-between",children:[(0,r.jsx)(d,{lightmode:C,heading:"MegaLeaderboard",users:e}),(0,r.jsxs)("div",{className:"w-full h-[90%] px-4 ".concat(C?"text-black":"text-darkText"," flex-col justify-between"),children:[(0,r.jsxs)("div",{className:"flex flex-row gap-4",children:[(0,r.jsxs)("div",{className:"min-w-[150px] h-[180px] rounded-xl p-6 flex flex-col justify-center items-center gap-3 ".concat(C?"text-black shadow-lg":"text-darkText bg-darkBg  border-[1px] border-darkBorder"),children:[(0,r.jsx)("h3",{className:"text-[19px] font-bold",children:"Total Users"}),(0,r.jsx)("span",{className:"text-[23px] font-medium",children:e.length})]}),(0,r.jsx)(c,{heading:"Last Session Winners",lightmode:C,users:h})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(i,{heading:"MegaLeaderBoard",popup:v,setPopup:k,resetOrNot:!0,task:j,setFunctionName:p}),(0,r.jsx)(i,{heading:"Session LeaderBoard",popup:v,setPopup:k,resetOrNot:!1,task:g,setFunctionName:p})]})]}),(0,r.jsx)(d,{lightmode:C,heading:"LeaderBoard",users:s}),v&&(0,r.jsx)(y,{onClose:()=>{k(!1)},functionName:u})]})}},97669:(e,t,s)=>{"use strict";s.d(t,{AppModeContextProvider:()=>o,Z:()=>l});var r=s(57437),a=s(2265);let n=(0,a.createContext)(void 0);function o(e){let{children:t}=e,[s,o]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{s?localStorage.setItem("lightmode","true"):localStorage.setItem("lightmode","false")},[s]),(0,r.jsx)(n.Provider,{value:{lightmode:s,setLightMode:o},children:t})}let l=n},37440:(e,t,s)=>{"use strict";s.d(t,{cn:()=>n});var r=s(44839),a=s(96164);function n(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,a.m6)((0,r.W)(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[472,909,347,130,184,744],()=>t(24135)),_N_E=e.O()}]);