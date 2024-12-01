import{r as d,j as s}from"./chunk-B17XolXo.js";/* empty css              */const j=({mealData:e={},description:l="",showAddToCartButton:o=!0})=>{const[c,t]=d.useState("ingredients"),[x,a]=d.useState(!1),m=d.useRef(null),h=()=>{e!=null&&e._id&&(navigator.clipboard.writeText(e._id),a(!0),setTimeout(()=>a(!1),3e3))},i=n=>n.map((r,g)=>s.jsx("span",{className:"badge badge-secondary mr-1 mt-1",children:r},g));return s.jsxs("div",{ref:m,children:[s.jsxs("div",{className:"meal-card card bg-base-100 w-96 shadow-xl relative",children:[e._id&&s.jsx("div",{className:"copy-id",onClick:h,children:s.jsx("span",{children:"#"})}),s.jsxs("div",{className:"card-header p-8",children:[s.jsx("h2",{className:"meal-title text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mt-4 mb-2 text-2xl font-bold",children:e.name||"Loading..."}),s.jsx("div",{className:"image-container",children:e.imageUrl?s.jsx("div",{className:"image-wrapper",children:s.jsx("img",{src:`${e.imageUrl}`,alt:e.name||"Meal Image"})}):s.jsx("div",{className:"image-placeholder bg-gray-300 animate-pulse h-48 w-full"})}),s.jsxs("div",{className:"info-chips flex flex-wrap mt-4",children:[e.cookingTime!==void 0&&e.preparationTime!==void 0&&s.jsx("div",{className:"info-chip bg-gray-200 text-gray-800 px-3 py-1 rounded-full mr-2 mb-2",children:`${e.cookingTime+e.preparationTime} min`}),e.price!==void 0&&s.jsx("div",{className:"info-chip bg-gray-200 text-gray-800 px-3 py-1 rounded-full mr-2 mb-2",children:`$${e.price}`}),e.calories!==void 0&&s.jsx("div",{className:"info-chip bg-gray-200 text-gray-800 px-3 py-1 rounded-full mr-2 mb-2",children:`${e.calories} kcal`}),e.difficultyPercent!==void 0&&s.jsx("div",{className:"info-chip bg-gray-200 text-gray-800 px-3 py-1 rounded-full mr-2 mb-2",children:`Difficulty: ${e.difficultyPercent}%`}),e.servings!==void 0&&s.jsx("div",{className:"info-chip bg-gray-200 text-gray-800 px-3 py-1 rounded-full mr-2 mb-2",children:`Servings: ${e.servings}`})]}),e.allergens&&e.allergens.length>0&&s.jsxs("div",{className:"allergens mt-2",children:[s.jsx("h3",{className:"text-sm font-semibold mb-1",children:"Allergens:"}),s.jsx("div",{className:"flex flex-wrap",children:i(e.allergens)})]}),e.dietaryTags&&e.dietaryTags.length>0&&s.jsxs("div",{className:"dietary-tags mt-2",children:[s.jsx("h3",{className:"text-sm font-semibold mb-1",children:"Dietary Tags:"}),s.jsx("div",{className:"flex flex-wrap",children:i(e.dietaryTags)})]}),e.cuisine&&e.cuisine.length>0&&s.jsxs("div",{className:"cuisine mt-2",children:[s.jsx("h3",{className:"text-sm font-semibold mb-1",children:"Cuisine:"}),s.jsx("div",{className:"flex flex-wrap",children:i(e.cuisine)})]}),e.course&&e.course.length>0&&s.jsxs("div",{className:"course mt-2",children:[s.jsx("h3",{className:"text-sm font-semibold mb-1",children:"Course:"}),s.jsx("div",{className:"flex flex-wrap",children:i(e.course)})]}),e.tags&&e.tags.length>0&&s.jsxs("div",{className:"tags mt-2",children:[s.jsx("h3",{className:"text-sm font-semibold mb-1",children:"Tags:"}),s.jsx("div",{className:"flex flex-wrap",children:i(e.tags)})]}),e.occasions&&e.occasions.length>0&&s.jsxs("div",{className:"tags mt-2",children:[s.jsx("h3",{className:"text-sm font-semibold mb-1",children:"Occasions:"}),s.jsx("div",{className:"flex flex-wrap",children:i(e.occasions)})]})]}),s.jsxs("div",{className:"card-content p-4",children:[(l||e.quickTastyDescription)&&s.jsxs("div",{className:"description mb-4",children:[s.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Description"}),s.jsx("p",{children:l||e.quickTastyDescription})]}),s.jsxs("div",{className:"tabs tabs-boxed",children:[s.jsx("button",{className:`tab ${c==="ingredients"?"tab-active":""}`,onClick:()=>t("ingredients"),children:"Ingredients"}),s.jsx("button",{className:`tab ${c==="instructions"?"tab-active":""}`,onClick:()=>t("instructions"),children:"Cooking Instructions"})]}),s.jsxs("div",{className:"tab-panels mt-4",children:[c==="ingredients"&&s.jsxs("div",{className:"tab-panel",children:[s.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Ingredients"}),e.ingredients?s.jsx("ul",{className:"list-disc list-inside",children:e.ingredients.map((n,r)=>s.jsxs("li",{className:"mb-1",children:[s.jsxs("span",{className:"font-medium",children:[n.name,":"]})," ",n.quantity]},r))}):s.jsx("div",{className:"bg-gray-200 text-gray-200 px-4 py-2 rounded animate-pulse",children:"Loading ingredients..."})]}),c==="instructions"&&s.jsxs("div",{className:"tab-panel",children:[s.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Cooking Instructions"}),e.detailedCookingInstructions?s.jsx("ol",{className:"list-decimal list-inside",children:e.detailedCookingInstructions.map((n,r)=>s.jsx("li",{className:"mb-1",children:n},r))}):s.jsx("div",{className:"bg-gray-200 text-gray-200 px-4 py-2 rounded animate-pulse",children:"Loading instructions..."})]})]})]}),s.jsx("div",{className:"additional-info p-4 border-t border-gray-200",children:e.dateCreated&&s.jsxs("div",{className:"date-created mb-2",children:[s.jsx("h3",{className:"text-sm font-semibold",children:"Date Created:"}),s.jsx("p",{children:new Date(e.dateCreated).toLocaleDateString()})]})}),o&&s.jsx("div",{className:"add-to-cart p-4 border-t border-gray-200",children:s.jsx("button",{className:"btn btn-primary w-full",children:"Add to Cart"})})]}),x&&s.jsx("div",{className:"snackbar fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded shadow-lg",children:s.jsx("p",{children:"ID copied to clipboard"})})]})};export{j as M};
