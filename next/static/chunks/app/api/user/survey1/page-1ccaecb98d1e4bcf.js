(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[618],{76522:(e,r,t)=>{Promise.resolve().then(t.bind(t,55785))},55785:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});var s=t(57437),n=t(2265),l=t(16463),a=t(38472),i=t(83225),c=t(98174);function o(){var e;let r=(0,l.useRouter)(),[t,o]=(0,n.useState)(null),[d,u]=(0,n.useState)(""),[h,m]=(0,n.useState)(!0),{data:x}=(0,c.kP)(),g=null==x?void 0:null===(e=x.user)||void 0===e?void 0:e.id;return((0,n.useEffect)(()=>{(async()=>{m(!0);try{let e=(await a.Z.get("".concat("https://spin-the-wheel-backend.onrender.com","/user/getFormId/").concat("4a8e0f7b-77cb-4c01-a436-fcc1ee22d5a1","/").concat(g))).data;0==e.length&&r.push("/api/user/feedback"),u(e[0]);let t="".concat("https://spin-the-wheel-backend.onrender.com","/user/getForm/").concat(e[0],"/").concat(g),s=await a.Z.get(t);console.log(s.data);let n=s.data;o(n)}catch(e){console.error("Error fetching forms:",e.response?"".concat(e.response.status,": ").concat(e.response.data):e.message)}finally{m(!1)}})()},[g]),h)?(0,s.jsx)("div",{children:"Loading..."}):t?(0,s.jsx)("div",{children:(0,s.jsx)(i.Z,{formId:d,isSurvey:t.isSurvey,questions:t.questions,onProgressUpdate:e=>{console.log("Remaining questions: ".concat(e))},userId:g})}):(0,s.jsx)("div",{children:"No form available"})}},83225:(e,r,t)=>{"use strict";t.d(r,{Z:()=>g});var s=t(57437),n=t(2265),l=t(16463),a=t(38472),i=t(78030);let c=(0,i.Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),o=(0,i.Z)("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);var d=t(71935),u=t(98174);let h=e=>{let{showBack:r=!0}=e,t=(0,l.useRouter)(),[a,i]=(0,n.useState)(!0);return(0,s.jsx)("div",{className:"fixed top-0 left-0 right-0 bg-white border-b z-10",children:(0,s.jsxs)("div",{className:"max-w-2xl mx-auto px-4 py-3 flex items-center",children:[r&&(0,s.jsx)("button",{onClick:()=>t.push("/api/user/spin"),className:"mr-3 p-1 hover:bg-gray-100 rounded-full transition-colors",children:(0,s.jsx)(c,{className:"w-5 h-5"})}),(0,s.jsxs)("div",{className:"flex justify-between items-center w-full",children:[(0,s.jsx)("h1",{className:"text-2xl font-medium",children:"Monopolyonwheels"}),(0,s.jsx)("button",{onClick:()=>i(!a),className:"opacity-0 text-sm px-3 py-1 rounded-full border bg-gray-50 hover:bg-gray-100 transition-colors",children:a?"En":"عربي"})]})]})})},m=e=>{let{current:r,total:t}=e;return(0,s.jsx)("div",{className:"w-full bg-gray-200 rounded-full h-2.5 mb-4",children:(0,s.jsx)("div",{className:"bg-green-400 h-2.5 rounded-full",style:{width:"".concat(r/t*100,"%")}})})},x=e=>{let{question:r,options:t,onOptionSelect:n,selectedOption:l,handleNavigation:a,loading:i,isMultipleCorrect:c,isSurvey:u,answerFeedback:h,showingFeedback:m}=e,x=e=>{if(!m)return l.includes(e)?"border-blue-400 bg-blue-50":"border-gray-200 hover:border-gray-300";if(h){if(h.answers.includes(e))return"border-green-400 bg-green-50";if(h.incorrect.includes(e))return"border-red-400 bg-red-50"}return"border-gray-200"},g=e=>m&&h?h.answers.includes(e)?(0,s.jsx)(o,{className:"w-5 h-5 text-green-500"}):h.incorrect.includes(e)?(0,s.jsx)(d.Z,{className:"w-5 h-5 text-red-500"}):null:null,b=e=>{m||(c?l.includes(e)?n(l.filter(r=>r!==e)):n([...l,e]):n([e]))};return(0,s.jsxs)("div",{className:"max-w-2xl mx-auto",children:[(0,s.jsx)("div",{className:"mb-6",children:(0,s.jsxs)("h2",{className:"text-lg font-medium mb-4",children:[r," ",c&&"(multiple)"]})}),(0,s.jsx)("div",{className:"space-y-3",children:t.map(e=>(0,s.jsx)("div",{className:"border rounded-lg p-4 cursor-pointer transition-all ".concat(x(e.id)),onClick:()=>b(e.id),children:(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("div",{className:"flex items-center flex-1",children:[(0,s.jsx)("div",{className:"w-4 h-4 rounded-full border mr-3 flex items-center justify-center ".concat(l.includes(e.id)?"border-blue-400 bg-blue-400":"border-gray-300"),children:l.includes(e.id)&&(0,s.jsx)("div",{className:"w-2 h-2 bg-white rounded-full"})}),(0,s.jsx)("label",{className:"flex-1 cursor-pointer",children:e.option})]}),(0,s.jsx)("div",{className:"ml-2",children:g(e.id)})]})},e.id))}),(0,s.jsx)("div",{className:"flex justify-between mt-8",children:(0,s.jsx)("button",{onClick:()=>a("next"),disabled:0===l.length||i,className:"px-6 py-2 bg-green-400 text-white rounded-full hover:bg-green-500 transition-colors disabled:bg-gray-300",children:i?"Submitting...":m?"Next":u?"Next":"Submit"})})]})},g=e=>{var r;let{questions:t,formId:i,isSurvey:c}=e,o=(0,l.useRouter)(),{data:d}=(0,u.kP)(),g=null==d?void 0:null===(r=d.user)||void 0===r?void 0:r.id,b=t.filter(e=>!e.ismarked),[p,f]=(0,n.useState)(0),[v,y]=(0,n.useState)([]),[w,j]=(0,n.useState)(!1),[N,k]=(0,n.useState)(null),[S,C]=(0,n.useState)(null),[Z,q]=(0,n.useState)(!1),E=async e=>{if("prev"===e&&p>0){f(e=>e-1),y([]),C(null),q(!1);return}if(g&&0!==v.length){j(!0),k(null);try{let e="".concat("https://spin-the-wheel-backend.onrender.com","/user/mark/").concat(g),r={formId:i,isSurvey:c,questionId:b[p].questionId,optionIds:v},t=await a.Z.post(e,r);c?t.data.marked&&(p===b.length-1?o.push("/api/user/spin"):(f(e=>e+1),y([]))):Z?p===b.length-1?o.push("/api/user/spin"):(f(e=>e+1),y([]),C(null),q(!1)):(C(t.data),q(!0))}catch(e){k("Error submitting answer. Please try again."),console.error(e)}finally{j(!1)}}},R=b[p];return(0,s.jsxs)("div",{className:"min-h-screen bg-gray-50",children:[(0,s.jsx)(h,{}),(0,s.jsxs)("div",{className:"max-w-2xl mx-auto pt-16 px-4",children:[(0,s.jsx)(m,{current:p+1,total:b.length}),(0,s.jsx)("div",{className:"bg-white rounded-lg shadow-sm p-6",children:(0,s.jsx)(x,{question:R.question,questionId:R.questionId,options:R.options,ismarked:R.ismarked,isMultipleCorrect:R.isMultipleCorrect,onOptionSelect:y,selectedOption:v,handleNavigation:E,loading:w,isSurvey:c,answerFeedback:S,showingFeedback:Z})}),N&&(0,s.jsx)("p",{className:"mt-4 text-red-500 text-center",children:N})]})]})}},78030:(e,r,t)=>{"use strict";t.d(r,{Z:()=>c});var s=t(2265);let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter((e,r,t)=>!!e&&t.indexOf(e)===r).join(" ")};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,s.forwardRef)((e,r)=>{let{color:t="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:c,className:o="",children:d,iconNode:u,...h}=e;return(0,s.createElement)("svg",{ref:r,...a,width:n,height:n,stroke:t,strokeWidth:c?24*Number(i)/Number(n):i,className:l("lucide",o),...h},[...u.map(e=>{let[r,t]=e;return(0,s.createElement)(r,t)}),...Array.isArray(d)?d:[d]])}),c=(e,r)=>{let t=(0,s.forwardRef)((t,a)=>{let{className:c,...o}=t;return(0,s.createElement)(i,{ref:a,iconNode:r,className:l("lucide-".concat(n(e)),c),...o})});return t.displayName="".concat(e),t}},71935:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});let s=(0,t(78030).Z)("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]])},16463:(e,r,t)=>{"use strict";var s=t(71169);t.o(s,"useRouter")&&t.d(r,{useRouter:function(){return s.useRouter}})}},e=>{var r=r=>e(e.s=r);e.O(0,[472,174,130,184,744],()=>r(76522)),_N_E=e.O()}]);