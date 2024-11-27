import{r as s,j as o,i as R,o as U,L as z,a as C,b as D}from"../chunks/chunk-BCMqDkJQ.js";import{R as N}from"../chunks/chunk-B1TC07mu.js";/* empty css                      */import"../chunks/chunk-CXsRlRas.js";/* empty css                      *//* empty css                      *//* empty css                      */function A(){const[n,P]=s.useState(""),[h,y]=s.useState(!1),[S,k]=s.useState(null),[d,p]=s.useState([]);s.useRef("");const m=s.useRef(null);s.useEffect(()=>{const l=new URLSearchParams(window.location.search).get("q")||"";P(l)},[]),s.useEffect(()=>{if(!n){p([]);return}const r=`searchRecipes_${n}`,l=sessionStorage.getItem(r);if(l)try{const i=JSON.parse(l);p(i)}catch(i){console.error("Failed to parse cached recipes:",i),w(n)}else w(n);return()=>{m.current&&m.current.abort()}},[n]),s.useEffect(()=>{if(n&&d.length>0){const r=`searchRecipes_${n}`;sessionStorage.setItem(r,JSON.stringify(d))}},[d,n]);const x=s.useCallback(r=>{const{type:l,id:i,data:f,imageUrl:T,message:c,error:b}=r;switch(l){case"start":case"startAI":break;case"DbData":try{p(a=>{const e=a.findIndex(t=>t._id===i);if(e!==-1){const t=[...a];return t[e]={...t[e],...f},t}else return[...a,{_id:i,...f}]})}catch(a){console.error("Error parsing data chunk:",a)}break;case"data":try{const a=JSON.parse(f);p(e=>{const t=e.findIndex(u=>u._id===i);if(t!==-1){const u=[...e];return u[t]={...u[t],...a},u}else return[...e,{_id:i,...a}]})}catch(a){console.error("Error parsing data chunk:",a)}break;case"image":p(a=>a.map(e=>e._id===i?{...e,imageUrl:T}:e));break;case"complete":break;case"end":break;case"error":k(`Error fetching meal with ID ${i}: ${b}`);break}},[]),w=s.useCallback(async(r,l=[])=>{const f=`${`${window.location.protocol}//${window.location.host}`}/api/recipes/customReceipt?search=${encodeURIComponent(r)}&loadedMeals=${encodeURIComponent(l.join(","))}`;m.current=new AbortController;const{signal:T}=m.current;try{const c=await fetch(f,{signal:T});if(!c.ok)throw new Error("Failed to fetch meal data");const b=c.body.getReader(),a=new TextDecoder;y(!0);let e="";for(;;){const{value:t,done:u}=await b.read();if(u){y(!1);break}e+=a.decode(t,{stream:!0});let g=e.indexOf(`
`);for(;g!==-1;){const v=e.slice(0,g).trim();if(e=e.slice(g+1),v)try{const j=JSON.parse(v);x(j)}catch(j){console.error("Failed to parse JSON chunk:",j,"Chunk:",v)}g=e.indexOf(`
`)}}if(e.trim())try{const t=JSON.parse(e.trim());x(t)}catch(t){console.error("Failed to parse JSON chunk from remaining buffer:",t,"Buffer:",e)}}catch(c){c.name!=="AbortError"&&(k(c.message),console.error("Error fetching streamed data:",c),y(!1))}},[x]),E=()=>{const r=d.map(l=>l.name);w(n,r)};return s.useEffect(()=>{},[d]),o.jsxs("div",{className:"p-4",children:[o.jsxs("h1",{className:"text-2xl font-semibold mb-4",children:['Search Results for "',n,'"']}),S&&o.jsx("div",{className:"alert alert-error shadow-lg mb-4",children:o.jsxs("div",{children:[o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:o.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9z"})}),o.jsx("span",{children:S})]})}),d.length===0&&!h&&!S&&o.jsx("div",{className:"text-gray-600",children:"No recipes found for your search."}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",children:[d.map(r=>r.name&&o.jsx(N,{recipe:r},r._id)),o.jsx("button",{onClick:E,disabled:h,className:`card shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center p-4 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 ${h?"cursor-not-allowed opacity-50":"cursor-pointer"}`,children:h?"Loading...":"Load More"})]}),h&&o.jsx("div",{className:"mt-4 text-blue-500",children:"Loading recipes..."})]})}function _(){return o.jsx(A,{})}const L=Object.freeze(Object.defineProperty({__proto__:null,Page:_},Symbol.toStringTag,{value:"Module"})),V={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Loading:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/components/Loading",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:R}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/integration/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:U}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},Layout:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/layouts/LayoutDefault.jsx",fileExportPathToShowToUser:[]}],valueSerialized:[{type:"pointer-import",value:z}]},title:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+config.js",fileExportPathToShowToUser:["default","title"]},valueSerialized:{type:"js-serialized",value:"Recipes No Limits"}},onPageTransitionEnd:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+onPageTransitionEnd.js",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:C}},onPageTransitionStart:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+onPageTransitionStart.js",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:D}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/search/+Page.jsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:L}},hooksTimeout:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/search/+config.js",fileExportPathToShowToUser:["default","hooksTimeout"]},valueSerialized:{type:"js-serialized",value:{data:{warning:!1,error:!1,onRenderClient:!1}}}}};export{V as configValuesSerialized};
