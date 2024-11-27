import{j as t}from"./chunk-BCMqDkJQ.js";import{M as l}from"./chunk-BoqlynPX.js";function m({blogData:e}){return t.jsxs("div",{className:"max-w-3xl mx-auto p-4",children:[t.jsx("h1",{className:"text-5xl font-bold text-center my-8",children:e.title}),t.jsx("p",{className:"text-center text-gray-500 mb-8",children:e.createdAt?new Date(e.createdAt).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}),e.imageUrl&&t.jsx("img",{src:e.imageUrl.startsWith("http")||e.imageUrl.startsWith("blob:")?e.imageUrl:`/${e.imageUrl}`,alt:e.title,className:"w-full h-auto rounded-lg shadow-lg mb-8"}),t.jsxs("div",{className:"prose lg:prose-xl mb-12 text-justify",children:[t.jsx("p",{className:"text text-gray-800 leading-relaxed mb-4",dangerouslySetInnerHTML:{__html:e.intro}}),t.jsx("style",{jsx:!0,children:`
          p a {
            color: #3b82f6; /* Tailwind's text-blue-500 */
            text-decoration: underline;
          }
          p a:hover {
            color: #1d4ed8; /* Tailwind's hover:text-blue-700 */
          }
          p p {
            margin-bottom: 10px
          }
        `})]}),e.meals&&e.meals.map((r,s)=>t.jsx("div",{className:`mt-${s===0?0:12}`,children:r.meal&&t.jsx(l,{mealData:r.meal,description:r.description,showAddToCartButton:!1})},s)),t.jsx("div",{className:"prose lg:prose-xl mt-12 text-justify",children:t.jsx("p",{dangerouslySetInnerHTML:{__html:e.conclusion}})})]})}export{m as B};
