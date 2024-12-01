import import1 from "vike-react/__internal/components/Loading";
import { onRenderHtml } from "vike-react/__internal/integration/onRenderHtml";
import { L as LayoutDefault, i as import4$1 } from "../chunks/chunk-Cu_3oeEo.js";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import "react";
import { B as BlogPostCard } from "../chunks/chunk-DFlf8hmI.js";
import { useData } from "vike-react/useData";
import { R as RecipeCard } from "../chunks/chunk-Ck-Owxb3.js";
import dotenv from "dotenv";
import fetch from "node-fetch";
/* empty css                       */
/* empty css                       */
/* empty css                       */
const Head = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("title", { children: "Recipes No Limits" }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: `Explore a world of delicious recipes with Recipes No Limits. From baking to meat dishes, discover articles and an AI-powered recipe generator to create meals tailored to your taste and dietary needs.` }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Recipes No Limits" }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: `Explore a world of delicious recipes with Recipes No Limits. From baking to meat dishes, discover articles and an AI-powered recipe generator to create meals tailored to your taste and dietary needs.` })
  ] });
};
const import4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Head
}, Symbol.toStringTag, { value: "Module" }));
function Page() {
  const data2 = useData();
  const posts = data2.posts;
  const recipes = data2.recipes;
  data2.americanRecipes;
  data2.mexicanRecipes;
  data2.comfortFoodRecipes;
  data2.healthyRecipes;
  data2.quickRecipes;
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-6", children: [
    /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: "Latest Blog Posts" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: posts.map((post) => /* @__PURE__ */ jsx(BlogPostCard, { post }, post.slug)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", children: "Recent Recipes" }) }),
      recipes && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: recipes.map((recipe) => recipe ? /* @__PURE__ */ jsx(RecipeCard, { recipe }, recipe._id) : null) })
    ] })
  ] });
}
const import6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page
}, Symbol.toStringTag, { value: "Module" }));
dotenv.config();
async function data() {
  try {
    const baseUrl = process.env.BASE_URL;
    const response = await fetch(`${baseUrl}/api/blog/all`);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    let posts = await response.json();
    const recipesResponse = await fetch(`${baseUrl}/api/recipes/last/159`);
    if (!recipesResponse.ok) {
      throw new Error(`Network response was not ok: ${recipesResponse.statusText}`);
    }
    let recipes = await recipesResponse.json();
    const americanRecipes = await fetch(`${baseUrl}/api/recipes/cuisines/American/59`).then((res) => res.json());
    const mexicanRecipes = await fetch(`${baseUrl}/api/recipes/cuisines/Mexican/29`).then((res) => res.json());
    const comfortFoodRecipes = await fetch(`${baseUrl}/api/recipes/tags/Comfort Food/29`).then((res) => res.json());
    const healthyRecipes = await fetch(`${baseUrl}/api/recipes/tags/Healthy/29`).then((res) => res.json());
    const quickRecipes = await fetch(`${baseUrl}/api/recipes/tags/Quick/29`).then((res) => res.json());
    return {
      posts,
      recipes,
      americanRecipes,
      mexicanRecipes,
      comfortFoodRecipes,
      healthyRecipes,
      quickRecipes
    };
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return {
      error: "Failed to fetch blog posts and recipes. Please try again later.",
      posts: [],
      recipes: [],
      americanRecipes: [],
      mexicanRecipes: [],
      comfortFoodRecipes: [],
      healthyRecipes: [],
      quickRecipes: []
    };
  }
}
const import7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data
}, Symbol.toStringTag, { value: "Module" }));
const configValuesSerialized = {
  ["isClientRuntimeLoaded"]: {
    type: "computed",
    definedAtData: null,
    valueSerialized: {
      type: "js-serialized",
      value: true
    }
  },
  ["Loading"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "vike-react/__internal/components/Loading", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "pointer-import",
      value: import1
    }
  },
  ["onRenderHtml"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "vike-react/__internal/integration/onRenderHtml", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "pointer-import",
      value: onRenderHtml
    }
  },
  ["passToClient"]: {
    type: "cumulative",
    definedAtData: [{ "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "passToClient"] }],
    valueSerialized: [{
      type: "js-serialized",
      value: ["_configFromHook"]
    }]
  },
  ["Layout"]: {
    type: "cumulative",
    definedAtData: [{ "filePathToShowToUser": "/layouts/LayoutDefault.jsx", "fileExportPathToShowToUser": [] }],
    valueSerialized: [{
      type: "pointer-import",
      value: LayoutDefault
    }]
  },
  ["Head"]: {
    type: "cumulative",
    definedAtData: [{ "filePathToShowToUser": "/pages/index/+Head.jsx", "fileExportPathToShowToUser": [] }, { "filePathToShowToUser": "/pages/+Head.jsx", "fileExportPathToShowToUser": [] }],
    valueSerialized: [{
      type: "plus-file",
      exportValues: import4
    }, {
      type: "plus-file",
      exportValues: import4$1
    }]
  },
  ["Page"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/index/+Page.jsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import6
    }
  },
  ["data"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/index/+data.js", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import7
    }
  }
};
export {
  configValuesSerialized
};
