(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[278],{74167:(e,t,r)=>{Promise.resolve().then(r.bind(r,53883))},53883:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var s=r(57437),o=r(2265),a=r(97669),l=r(24277);let i=e=>{let{idx:t,lightmode:r,setOption:a,disabled:i}=e,d=(0,o.useContext)(l.Z);if(!d)throw Error("AdminContextProvider is missing");let{refresh:n,setRefresh:c}=d;return(0,s.jsxs)("div",{className:"w-full flex items-center gap-2 p-2 rounded-lg m-1 \n    ".concat(r?"border-gray-200 bg-white shadow-lg border-[1px] ":"text-darkText bg-darkBg border-[1px] border-darkBorder"),children:[(0,s.jsxs)("span",{children:[t,". "]}),(0,s.jsx)("input",{type:"text",disabled:i,placeholder:"Enter option No. ".concat(t," here"),className:"w-full border border-gray-300 rounded px-2 py-1 focus:outline-none",onChange:e=>{a(e.target.value)}})]})};var d=r(59061),n=r(18422),c=r(71935);let u=e=>{let{index:t}=e,r=(0,o.useContext)(l.Z);if(!r)throw Error("AdminContextProvider is missing");let{noOfQuestion:a,setNoofQuestion:u,Form:x,refresh:m,setForm:h,setRefresh:p}=r,[g,f]=(0,o.useState)(!1),[v,b]=(0,o.useState)(""),[y,w]=(0,o.useState)(""),[j,k]=(0,o.useState)(""),[C,N]=(0,o.useState)(""),[E,Z]=(0,o.useState)(""),[S,A]=(0,o.useState)(!0),P=()=>""!==v.trim()&&""!==y.trim()&&""!==j.trim()&&""!==C.trim()&&""!==E.trim(),z={question:v,options:[y,j,C,E],multiple:g};return(0,o.useEffect)(()=>{P()&&([...x][t]=z,p(!m))},[v,y,j,C,E,g]),(0,s.jsxs)("div",{className:"my-5 p-5 ".concat("border-gray-200 bg-white shadow-lg border-[1px] "),children:[(0,s.jsxs)("div",{className:"mb-3 flex flex-row justify-between items-center",children:[(0,s.jsxs)("div",{className:"flex flex-row items-center space-x-2",children:[(0,s.jsx)("label",{htmlFor:"terms",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"Is this question MultiCorrect?"}),(0,s.jsx)("input",{type:"checkbox",className:"cursor-pointer",onChange:()=>{f(!g)},disabled:!S})]}),(0,s.jsxs)("div",{className:"flex flex-row gap-2 items-center",children:[(0,s.jsx)("button",{className:"text-black",onClick:()=>{if(S){if(P()){let e=[...x];e[t]=z,h(e),console.log(x),A(!1)}else alert("All fields are required")}else A(!0)},children:S?(0,s.jsx)(d.Z,{size:18}):(0,s.jsx)(n.Z,{size:18})}),(0,s.jsx)(c.Z,{className:"hover:cursor-pointer hover:text-red-600 opacity-45 hover:opacity-100",size:"19px",onClick:()=>{a>=2&&u(a-1)}})]})]}),(0,s.jsx)("div",{children:(0,s.jsx)("input",{type:"text",placeholder:"Enter Your Question Here",className:"w-full border border-gray-300 rounded px-2 py-1 focus:outline-none",onChange:e=>{b(e.target.value)},value:v,disabled:!S})}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 items-baseline gap-2",children:[(0,s.jsx)(i,{idx:1,lightmode:!0,setOption:w,disabled:!S}),(0,s.jsx)(i,{idx:2,lightmode:!0,setOption:k,disabled:!S}),(0,s.jsx)(i,{idx:3,lightmode:!0,setOption:N,disabled:!S}),(0,s.jsx)(i,{idx:4,lightmode:!0,setOption:Z,disabled:!S})]})]})};var x=r(38472);let m=()=>{let e=(0,o.useContext)(a.Z);if(!e)throw Error("AppModeContextProvider is missing");let{lightmode:t}=e,r=(0,o.useContext)(l.Z);if(!r)throw Error("AdminContextProvider is missing");let[i,d]=(0,o.useState)(""),{noOfQuestion:n,setNoofQuestion:c,Form:m}=r,h=async()=>{let e="".concat("https://spin-the-wheel-backend.onrender.com","/admin/addForm/").concat("4a8e0f7b-77cb-4c01-a436-fcc1ee22d5a1");if(!m||0===Object.keys(m).length){alert("Please fill out the form completely");return}try{console.log({formName:i,formData:m});let t=await x.Z.post(e,{formName:i,formData:m});201===t.status?alert("Form added successfully"):alert("Form not added, please try again")}catch(e){var t,r;alert((null==e?void 0:null===(r=e.response)||void 0===r?void 0:null===(t=r.data)||void 0===t?void 0:t.message)||"Error while adding form")}};return(0,s.jsxs)("div",{className:"gap-5 p-4 ".concat(!t&&"bg-darkBg"),children:[(0,s.jsx)("div",{className:"flex flex-row justify-center my-3",children:(0,s.jsx)("button",{className:"w-[100px] border-[1px] text-center px-3 py-2 bg-[#0077ED] text-white rounded-md",onClick:h,children:"Submit"})}),(0,s.jsxs)("div",{className:"rounded-lg p-4 ".concat(t?"border-gray-200 bg-white shadow-lg border-[1px] ":"text-darkText bg-darkBg border-[1px] border-darkBorder"),children:[(0,s.jsx)("div",{className:"my-2",children:(0,s.jsx)("input",{type:"text",placeholder:"Enter Form Name Here",className:"w-full  border border-gray-300 rounded px-2 py-1 focus:outline-none",onChange:e=>{d(e.target.value)}})}),(0,s.jsx)("div",{children:Array.from({length:n},(e,t)=>(0,s.jsx)(u,{index:t}))}),(0,s.jsx)("div",{className:"my-4 flex flex-row w-full justify-center items-center",children:(0,s.jsx)("button",{className:"w-[130px] border-[1px] text-center px-3 py-2 bg-[#0077ED] text-white rounded-md",onClick:()=>{c(n+1)},children:"Add Question"})})]})]})};function h(){let e=(0,o.useContext)(a.Z);if(!e)throw Error("AppModeContextProvider is missing");let{lightmode:t,setLightMode:r}=e,i=(0,o.useContext)(l.Z);if(!i)throw Error("AdminContextProvider is missing");let{refresh:d,setRefresh:n}=i,[c,u]=(0,o.useState)([]);return(0,s.jsx)(m,{})}},24277:(e,t,r)=>{"use strict";r.d(t,{AdminContextProvider:()=>l,Z:()=>i});var s=r(57437),o=r(2265);let a=(0,o.createContext)(void 0);function l(e){let{children:t}=e,[r,l]=(0,o.useState)(!1),[i,d]=(0,o.useState)(1),[n,c]=(0,o.useState)([]);return(0,s.jsx)(a.Provider,{value:{refresh:r,setRefresh:l,optionIndex:["A","B","C","D"],noOfQuestion:i,setNoofQuestion:d,Form:n,setForm:c},children:t})}let i=a},97669:(e,t,r)=>{"use strict";r.d(t,{AppModeContextProvider:()=>l,Z:()=>i});var s=r(57437),o=r(2265);let a=(0,o.createContext)(void 0);function l(e){let{children:t}=e,[r,l]=(0,o.useState)(!0);return(0,o.useEffect)(()=>{r?localStorage.setItem("lightmode","true"):localStorage.setItem("lightmode","false")},[r]),(0,s.jsx)(a.Provider,{value:{lightmode:r,setLightMode:l},children:t})}let i=a},78030:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var s=r(2265);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,s.forwardRef)((e,t)=>{let{color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:d,className:n="",children:c,iconNode:u,...x}=e;return(0,s.createElement)("svg",{ref:t,...l,width:o,height:o,stroke:r,strokeWidth:d?24*Number(i)/Number(o):i,className:a("lucide",n),...x},[...u.map(e=>{let[t,r]=e;return(0,s.createElement)(t,r)}),...Array.isArray(c)?c:[c]])}),d=(e,t)=>{let r=(0,s.forwardRef)((r,l)=>{let{className:d,...n}=r;return(0,s.createElement)(i,{ref:l,iconNode:t,className:a("lucide-".concat(o(e)),d),...n})});return r.displayName="".concat(e),r}},71935:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s=(0,r(78030).Z)("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]])},18422:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s=(0,r(78030).Z)("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]])},59061:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s=(0,r(78030).Z)("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]])}},e=>{var t=t=>e(e.s=t);e.O(0,[472,130,184,744],()=>t(74167)),_N_E=e.O()}]);