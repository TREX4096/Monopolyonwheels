(()=>{var e={};e.id=618,e.ids=[618],e.modules={20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},79348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},30412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},27790:e=>{"use strict";e.exports=require("assert")},17702:e=>{"use strict";e.exports=require("events")},92048:e=>{"use strict";e.exports=require("fs")},32615:e=>{"use strict";e.exports=require("http")},35240:e=>{"use strict";e.exports=require("https")},19801:e=>{"use strict";e.exports=require("os")},55315:e=>{"use strict";e.exports=require("path")},76162:e=>{"use strict";e.exports=require("stream")},74175:e=>{"use strict";e.exports=require("tty")},17360:e=>{"use strict";e.exports=require("url")},21764:e=>{"use strict";e.exports=require("util")},71568:e=>{"use strict";e.exports=require("zlib")},3001:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>u.a,__next_app__:()=>l,pages:()=>d,routeModule:()=>c,tree:()=>p});var s=t(3003),i=t(14293),o=t(66550),u=t.n(o),a=t(86979),n={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>a[e]);t.d(r,n);let p=["",{children:["api",{children:["user",{children:["survey1",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,32933)),"/home/trex4096/Desktop/Projects/test/app/api/user/survey1/page.tsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,66877)),"/home/trex4096/Desktop/Projects/test/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,52075,23)),"next/dist/client/components/not-found-error"]}],d=["/home/trex4096/Desktop/Projects/test/app/api/user/survey1/page.tsx"],l={require:t,loadChunk:()=>Promise.resolve()},c=new s.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/api/user/survey1/page",pathname:"/api/user/survey1",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},90419:(e,r,t)=>{Promise.resolve().then(t.bind(t,31895))},31895:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n});var s=t(68819),i=t(17266),o=t(35047);t(44099);var u=t(90661),a=t(98618);function n(){(0,o.useRouter)();let[e,r]=(0,i.useState)(null),[t,n]=(0,i.useState)(""),[p,d]=(0,i.useState)(!0),{data:l}=(0,a.kP)(),c=l?.user?.id;return p?(0,s.jsx)("div",{children:"Loading..."}):e?(0,s.jsx)("div",{children:(0,s.jsx)(u.Z,{formId:t,isSurvey:e.isSurvey,questions:e.questions,onProgressUpdate:e=>{console.log(`Remaining questions: ${e}`)},userId:c})}):(0,s.jsx)("div",{children:"No form available"})}},32933:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{default:()=>e});var i=t(71851);let e=(await (0,i.createProxy)(String.raw`/home/trex4096/Desktop/Projects/test/app/api/user/survey1/page.tsx`)).default;s()}catch(e){s(e)}},1)}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[826,363,99,482],()=>t(3001));module.exports=s})();