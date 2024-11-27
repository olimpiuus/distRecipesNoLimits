import { jsx, jsxs } from "react/jsx-runtime";
import "react";
const slugify = (text) => {
  return text.toString().toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-");
};
const RecipeCard = ({ recipe }) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "card shadow-lg hover:shadow-xl transition-shadow",
      children: /* @__PURE__ */ jsxs("a", { href: `/recipes/${slugify(recipe.name)}-${recipe._id}`, className: "block", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: recipe.imageUrl,
            alt: recipe.name,
            className: `w-full h-48 object-cover rounded-t-lg`
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "card-body p-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "card-title text-lg font-semibold mb-1", children: recipe.name }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mb-2", children: Array.isArray(recipe.cuisine) ? recipe.cuisine.join(", ") : recipe.cuisine }),
          recipe.quickTastyDescription && /* @__PURE__ */ jsx("p", { className: "mb-2 text-gray-700 text-sm", children: recipe.quickTastyDescription }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 mt-2", children: [
            recipe.tags && recipe.tags.map((tag, index) => /* @__PURE__ */ jsx("div", { className: "badge badge-outline", children: tag }, index)),
            recipe.dietaryTags && recipe.dietaryTags.map((tag, index) => /* @__PURE__ */ jsx("div", { className: "badge badge-primary", children: tag }, index))
          ] })
        ] })
      ] })
    },
    recipe._id
  );
};
export {
  RecipeCard as R
};
