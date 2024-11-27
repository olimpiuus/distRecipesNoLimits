import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { M as MealCard } from "./chunk-DeFJnAxZ.js";
function BlogPost({ blogData }) {
  return /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto p-4", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold text-center my-8", children: blogData.title }),
    /* @__PURE__ */ jsx("p", { className: "text-center text-gray-500 mb-8", children: blogData.createdAt ? new Date(blogData.createdAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }) : (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }) }),
    blogData.imageUrl && /* @__PURE__ */ jsx(
      "img",
      {
        src: blogData.imageUrl.startsWith("http") || blogData.imageUrl.startsWith("blob:") ? blogData.imageUrl : `/${blogData.imageUrl}`,
        alt: blogData.title,
        className: "w-full h-auto rounded-lg shadow-lg mb-8"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "prose lg:prose-xl mb-12 text-justify", children: [
      /* @__PURE__ */ jsx("p", { className: "text text-gray-800 leading-relaxed mb-4", dangerouslySetInnerHTML: { __html: blogData.intro } }),
      /* @__PURE__ */ jsx("style", { jsx: true, children: `
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
        ` })
    ] }),
    blogData.meals && blogData.meals.map((meal, index) => /* @__PURE__ */ jsx("div", { className: `mt-${index === 0 ? 0 : 12}`, children: meal.meal && /* @__PURE__ */ jsx(
      MealCard,
      {
        mealData: meal.meal,
        description: meal.description,
        showAddToCartButton: false
      }
    ) }, index)),
    /* @__PURE__ */ jsx("div", { className: "prose lg:prose-xl mt-12 text-justify", children: /* @__PURE__ */ jsx("p", { dangerouslySetInnerHTML: { __html: blogData.conclusion } }) })
  ] });
}
export {
  BlogPost as B
};
