import{r as o,j as e,i as p,o as u,L as h,a as f,b as c}from"../chunks/chunk-CGEPNDJl.js";/* empty css                      */import"../chunks/chunk-CXsRlRas.js";/* empty css                      *//* empty css                      *//* empty css                      */function T(){const[l,n]=o.useState(""),[t,i]=o.useState(null),s=async a=>{a.preventDefault();try{const d=await(await fetch("/api/recipes/createArticle/all")).json();i(d)}catch(r){i({error:"Failed to fetch article",details:r.message})}};return e.jsxs("div",{children:[e.jsx("h1",{children:"Create Article"}),e.jsxs("form",{onSubmit:s,children:[e.jsx("input",{type:"text",value:l,onChange:a=>n(a.target.value),placeholder:"Enter Meal ID",required:!0}),e.jsx("button",{type:"submit",children:"Create Article"})]}),t&&e.jsx("div",{children:t.error?e.jsxs("p",{children:["Error: ",t.details]}):e.jsx("p",{children:t.message})})]})}const S=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),j={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},Loading:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/components/Loading",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:p}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/integration/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:u}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},Layout:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/layouts/LayoutDefault.jsx",fileExportPathToShowToUser:[]}],valueSerialized:[{type:"pointer-import",value:h}]},title:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+config.js",fileExportPathToShowToUser:["default","title"]},valueSerialized:{type:"js-serialized",value:"Recipes No Limits"}},onPageTransitionEnd:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+onPageTransitionEnd.js",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},onPageTransitionStart:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+onPageTransitionStart.js",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:c}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/admin/createArticle/+Page.jsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}}};export{j as configValuesSerialized};
