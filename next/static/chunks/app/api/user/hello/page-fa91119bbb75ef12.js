(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[250],{30234:(e,t,r)=>{Promise.resolve().then(r.bind(r,52333))},52333:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(57437),n=r(2265),l=r(38472),a=r(83225),i=r(98174),o=r(16463),c=r(19911);function d(){var e;let t=(0,o.useRouter)(),r=(0,n.useContext)(c.Z),{data:d}=(0,i.kP)();if(!r)throw Error("AdminContextProvider is missing");let{UserId:u}=r,[h,m]=(0,n.useState)(null),[x,g]=(0,n.useState)(""),[p,b]=(0,n.useState)(!0),f=null==d?void 0:null===(e=d.user)||void 0===e?void 0:e.id;return((0,n.useEffect)(()=>{(async()=>{b(!0);try{let e=(await l.Z.get("".concat("https://spin-the-wheel-backend.onrender.com","/user/getFormId/").concat("4a8e0f7b-77cb-4c01-a436-fcc1ee22d5a1","/").concat(f))).data;0==e.length&&t.push("/api/user/spin"),g(e[0]);let r="".concat("https://spin-the-wheel-backend.onrender.com","/user/getForm/").concat(e[0],"/").concat(f),s=await l.Z.get(r);console.log(s.data);let n=s.data;m(n)}catch(e){console.error("Error fetching forms:",e.response?"".concat(e.response.status,": ").concat(e.response.data):e.message)}finally{b(!1)}})()},[f]),p)?(0,s.jsx)("div",{children:"Loading..."}):h?(0,s.jsx)("div",{children:(0,s.jsx)(a.Z,{formId:x,isSurvey:h.isSurvey,questions:h.questions,onProgressUpdate:e=>{console.log("Remaining questions: ".concat(e))},userId:f})}):(0,s.jsx)("div",{children:"No form available"})}},83225:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var s=r(57437),n=r(2265),l=r(16463),a=r(38472),i=r(78030);let o=(0,i.Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),c=(0,i.Z)("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);var d=r(71935),u=r(98174);let h=e=>{let{showBack:t=!0}=e,r=(0,l.useRouter)(),[a,i]=(0,n.useState)(!0);return(0,s.jsx)("div",{className:"fixed top-0 left-0 right-0 bg-white border-b z-10",children:(0,s.jsxs)("div",{className:"max-w-2xl mx-auto px-4 py-3 flex items-center",children:[t&&(0,s.jsx)("button",{onClick:()=>r.push("/api/user/spin"),className:"mr-3 p-1 hover:bg-gray-100 rounded-full transition-colors",children:(0,s.jsx)(o,{className:"w-5 h-5"})}),(0,s.jsxs)("div",{className:"flex justify-between items-center w-full",children:[(0,s.jsx)("h1",{className:"text-2xl font-medium",children:"Monopolyonwheels"}),(0,s.jsx)("button",{onClick:()=>i(!a),className:"opacity-0 text-sm px-3 py-1 rounded-full border bg-gray-50 hover:bg-gray-100 transition-colors",children:a?"En":"عربي"})]})]})})},m=e=>{let{current:t,total:r}=e;return(0,s.jsx)("div",{className:"w-full bg-gray-200 rounded-full h-2.5 mb-4",children:(0,s.jsx)("div",{className:"bg-green-400 h-2.5 rounded-full",style:{width:"".concat(t/r*100,"%")}})})},x=e=>{let{question:t,options:r,onOptionSelect:n,selectedOption:l,handleNavigation:a,loading:i,isMultipleCorrect:o,isSurvey:u,answerFeedback:h,showingFeedback:m}=e,x=e=>{if(!m)return l.includes(e)?"border-blue-400 bg-blue-50":"border-gray-200 hover:border-gray-300";if(h){if(h.answers.includes(e))return"border-green-400 bg-green-50";if(h.incorrect.includes(e))return"border-red-400 bg-red-50"}return"border-gray-200"},g=e=>m&&h?h.answers.includes(e)?(0,s.jsx)(c,{className:"w-5 h-5 text-green-500"}):h.incorrect.includes(e)?(0,s.jsx)(d.Z,{className:"w-5 h-5 text-red-500"}):null:null,p=e=>{m||(o?l.includes(e)?n(l.filter(t=>t!==e)):n([...l,e]):n([e]))};return(0,s.jsxs)("div",{className:"max-w-2xl mx-auto",children:[(0,s.jsx)("div",{className:"mb-6",children:(0,s.jsxs)("h2",{className:"text-lg font-medium mb-4",children:[t," ",o&&"(multiple)"]})}),(0,s.jsx)("div",{className:"space-y-3",children:r.map(e=>(0,s.jsx)("div",{className:"border rounded-lg p-4 cursor-pointer transition-all ".concat(x(e.id)),onClick:()=>p(e.id),children:(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("div",{className:"flex items-center flex-1",children:[(0,s.jsx)("div",{className:"w-4 h-4 rounded-full border mr-3 flex items-center justify-center ".concat(l.includes(e.id)?"border-blue-400 bg-blue-400":"border-gray-300"),children:l.includes(e.id)&&(0,s.jsx)("div",{className:"w-2 h-2 bg-white rounded-full"})}),(0,s.jsx)("label",{className:"flex-1 cursor-pointer",children:e.option})]}),(0,s.jsx)("div",{className:"ml-2",children:g(e.id)})]})},e.id))}),(0,s.jsx)("div",{className:"flex justify-between mt-8",children:(0,s.jsx)("button",{onClick:()=>a("next"),disabled:0===l.length||i,className:"px-6 py-2 bg-green-400 text-white rounded-full hover:bg-green-500 transition-colors disabled:bg-gray-300",children:i?"Submitting...":m?"Next":u?"Next":"Submit"})})]})},g=e=>{var t;let{questions:r,formId:i,isSurvey:o}=e,c=(0,l.useRouter)(),{data:d}=(0,u.kP)(),g=null==d?void 0:null===(t=d.user)||void 0===t?void 0:t.id,p=r.filter(e=>!e.ismarked),[b,f]=(0,n.useState)(0),[v,w]=(0,n.useState)([]),[y,j]=(0,n.useState)(!1),[N,k]=(0,n.useState)(null),[C,S]=(0,n.useState)(null),[Z,E]=(0,n.useState)(!1),q=async e=>{if("prev"===e&&b>0){f(e=>e-1),w([]),S(null),E(!1);return}if(g&&0!==v.length){j(!0),k(null);try{let e="".concat("https://spin-the-wheel-backend.onrender.com","/user/mark/").concat(g),t={formId:i,isSurvey:o,questionId:p[b].questionId,optionIds:v},r=await a.Z.post(e,t);o?r.data.marked&&(b===p.length-1?c.push("/api/user/spin"):(f(e=>e+1),w([]))):Z?b===p.length-1?c.push("/api/user/spin"):(f(e=>e+1),w([]),S(null),E(!1)):(S(r.data),E(!0))}catch(e){k("Error submitting answer. Please try again."),console.error(e)}finally{j(!1)}}},R=p[b];return(0,s.jsxs)("div",{className:"min-h-screen bg-gray-50",children:[(0,s.jsx)(h,{}),(0,s.jsxs)("div",{className:"max-w-2xl mx-auto pt-16 px-4",children:[(0,s.jsx)(m,{current:b+1,total:p.length}),(0,s.jsx)("div",{className:"bg-white rounded-lg shadow-sm p-6",children:(0,s.jsx)(x,{question:R.question,questionId:R.questionId,options:R.options,ismarked:R.ismarked,isMultipleCorrect:R.isMultipleCorrect,onOptionSelect:w,selectedOption:v,handleNavigation:q,loading:y,isSurvey:o,answerFeedback:C,showingFeedback:Z})}),N&&(0,s.jsx)("p",{className:"mt-4 text-red-500 text-center",children:N})]})]})}},19911:(e,t,r)=>{"use strict";r.d(t,{UserContextProvider:()=>a,Z:()=>i});var s=r(57437),n=r(2265);let l=(0,n.createContext)(void 0);function a(e){let{children:t}=e,[r,a]=(0,n.useState)("");return(0,s.jsx)(l.Provider,{value:{UserId:r,setUserId:a},children:t})}let i=l},78030:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(2265);let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,s.forwardRef)((e,t)=>{let{color:r="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:c="",children:d,iconNode:u,...h}=e;return(0,s.createElement)("svg",{ref:t,...a,width:n,height:n,stroke:r,strokeWidth:o?24*Number(i)/Number(n):i,className:l("lucide",c),...h},[...u.map(e=>{let[t,r]=e;return(0,s.createElement)(t,r)}),...Array.isArray(d)?d:[d]])}),o=(e,t)=>{let r=(0,s.forwardRef)((r,a)=>{let{className:o,...c}=r;return(0,s.createElement)(i,{ref:a,iconNode:t,className:l("lucide-".concat(n(e)),o),...c})});return r.displayName="".concat(e),r}},71935:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s=(0,r(78030).Z)("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]])},16463:(e,t,r)=>{"use strict";var s=r(71169);r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}})}},e=>{var t=t=>e(e.s=t);e.O(0,[472,174,130,184,744],()=>t(30234)),_N_E=e.O()}]);