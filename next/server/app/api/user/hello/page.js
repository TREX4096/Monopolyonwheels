(()=>{var e={};e.id=250,e.ids=[250],e.modules={20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},79348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},30412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},27790:e=>{"use strict";e.exports=require("assert")},17702:e=>{"use strict";e.exports=require("events")},92048:e=>{"use strict";e.exports=require("fs")},32615:e=>{"use strict";e.exports=require("http")},35240:e=>{"use strict";e.exports=require("https")},19801:e=>{"use strict";e.exports=require("os")},55315:e=>{"use strict";e.exports=require("path")},76162:e=>{"use strict";e.exports=require("stream")},74175:e=>{"use strict";e.exports=require("tty")},17360:e=>{"use strict";e.exports=require("url")},21764:e=>{"use strict";e.exports=require("util")},71568:e=>{"use strict";e.exports=require("zlib")},82496:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>u.a,__next_app__:()=>d,pages:()=>l,routeModule:()=>c,tree:()=>p});var s=t(3003),i=t(14293),o=t(66550),u=t.n(o),a=t(86979),n={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>a[e]);t.d(r,n);let p=["",{children:["api",{children:["user",{children:["hello",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,42790)),"/home/trex4096/Desktop/Projects/test/app/api/user/hello/page.tsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,66877)),"/home/trex4096/Desktop/Projects/test/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,52075,23)),"next/dist/client/components/not-found-error"]}],l=["/home/trex4096/Desktop/Projects/test/app/api/user/hello/page.tsx"],d={require:t,loadChunk:()=>Promise.resolve()},c=new s.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/api/user/hello/page",pathname:"/api/user/hello",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},66049:(e,r,t)=>{Promise.resolve().then(t.bind(t,26205))},26205:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>p});var s=t(68819),i=t(17266);t(44099);var o=t(90661),u=t(98618),a=t(35047),n=t(56102);function p(){(0,a.useRouter)();let e=(0,i.useContext)(n.Z),{data:r}=(0,u.kP)();if(!e)throw Error("AdminContextProvider is missing");let{UserId:t}=e,[p,l]=(0,i.useState)(null),[d,c]=(0,i.useState)(""),[x,h]=(0,i.useState)(!0),v=r?.user?.id;return x?(0,s.jsx)("div",{children:"Loading..."}):p?(0,s.jsx)("div",{children:(0,s.jsx)(o.Z,{formId:d,isSurvey:p.isSurvey,questions:p.questions,onProgressUpdate:e=>{console.log(`Remaining questions: ${e}`)},userId:v})}):(0,s.jsx)("div",{children:"No form available"})}},42790:(e,r,t)=>{"use strict";t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{default:()=>e});var i=t(71851);let e=(await (0,i.createProxy)(String.raw`/home/trex4096/Desktop/Projects/test/app/api/user/hello/page.tsx`)).default;s()}catch(e){s(e)}},1)}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[826,363,99,482],()=>t(82496));module.exports=s})();