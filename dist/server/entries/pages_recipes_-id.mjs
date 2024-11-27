import import1 from "vike-react/__internal/components/Loading";
import { onRenderHtml } from "vike-react/__internal/integration/onRenderHtml";
import { L as LayoutDefault, i as import4 } from "../chunks/chunk-DpZLXpZO.js";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import "react";
import { useData } from "vike-react/useData";
import { M as MealCard } from "../chunks/chunk-DeFJnAxZ.js";
import { useConfig } from "vike-react/useConfig";
/* empty css                       */
/* empty css                       */
/* empty css                       */
import "dotenv";
/* empty css                       */
function Page() {
  var _a, _b, _c;
  const recipeData = useData();
  let meal = recipeData;
  if (recipeData.mealId) {
    meal = recipeData.mealId;
  }
  const slugify = (text) => {
    return text.toString().toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-");
  };
  const colors = {
    primary: {
      from: "from-orange-500",
      to: "to-orange-600",
      border: "border-orange-400",
      text: "text-orange-600"
    },
    faq: {
      from: "from-gray-700",
      to: "to-gray-800",
      border: "border-gray-400",
      text: "text-gray-700"
    }
  };
  const formatStepDescription = (description) => {
    const parts = description.split("**");
    return parts.map((part, index) => {
      if (part.toLowerCase().startsWith("tip:") || part.toLowerCase().startsWith("note:")) {
        const cleanPart = part.replace(/\*\*$/, "");
        return /* @__PURE__ */ jsxs("div", { className: "mt-4 italic", children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-orange-600", children: cleanPart.substring(0, 5) }),
          cleanPart.substring(5)
        ] }, index);
      }
      return /* @__PURE__ */ jsx("span", { children: part }, index);
    });
  };
  const toISO8601Duration = (minutes) => {
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `PT${hrs > 0 ? `${hrs}H` : ""}${mins}M`;
  };
  const recipeStructuredData = {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": meal.name || meal.detailedName,
    "image": meal.imageUrl ? `https://recipesnolimits.com${meal.imageUrl}` : [],
    // Add multiple images if available
    "author": {
      "@type": "Organization",
      "name": "Recipes No Limits"
    },
    "datePublished": meal.createdAt ? new Date(meal.createdAt).toISOString() : void 0,
    "description": meal.quickTastyDescription || "",
    "recipeCuisine": meal.cuisine || [],
    "prepTime": toISO8601Duration(meal.preparationTime),
    "cookTime": toISO8601Duration(meal.cookingTime),
    "totalTime": toISO8601Duration(meal.preparationTime + meal.cookingTime),
    "keywords": meal.tags ? `${meal.tags.join(", ")}, ${meal.SEOLongkeywords ? meal.SEOLongkeywords.join(",") : ""}}` : "",
    "recipeYield": meal.servings ? `${meal.servings} servings` : "",
    "recipeCategory": meal.course ? meal.course.join(", ") : "",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": `${meal.calories} calories`
    },
    "recipeIngredient": meal.ingredients.map((ing) => `${ing.quantity} of ${ing.name}`),
    "recipeInstructions": recipeData.mealId ? recipeData.cookingSteps.map(({ name, description }) => ({
      "@type": "HowToStep",
      "name": name,
      "text": description,
      "url": `https://recipesnolimits.com/recipes/${slugify(meal.name)}-${meal._id}#coocking-step-${slugify(name)}`
      // Optionally, add images or URLs for each step if available
    })) : meal.detailedCookingInstructions.map(({ description, index }) => ({
      "@type": "HowToStep",
      "name": `step ${index}`,
      "text": description
    }))
    // Optionally, add aggregateRating if available
    // ...(meal.aggregateRating && {
    //   "aggregateRating": {
    //     "@type": "AggregateRating",
    //     "ratingValue": meal.aggregateRating.ratingValue,
    //     "ratingCount": meal.aggregateRating.ratingCount
    //   }
    // }),
    // // Optionally, add video if available
    // ...(meal.video && {
    //   "video": {
    //     "@type": "VideoObject",
    //     "name": meal.name,
    //     "description": meal.quickTastyDescription,
    //     "thumbnailUrl": [meal.imageUrl],
    //     "contentUrl": meal.video,
    //     "uploadDate": meal.dateCreated ? new Date(meal.dateCreated).toISOString() : undefined,
    //     // Add other video properties as needed
    //   }
    // })
  };
  return /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 py-8 bg-white rounded-lg", children: [
    /* @__PURE__ */ jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(recipeStructuredData) }
      }
    ),
    recipeData.mealId && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h2", { className: `text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${colors.primary.from} ${colors.primary.to} mb-8`, children: meal.name }),
      /* @__PURE__ */ jsx("a", { href: "#recipe", target: "_self", className: "text-blue-500 hover:underline font-semibold  p-3 block", children: "Jump to Recipe" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-700 mb-8 leading-relaxed font-medium text-justify", children: recipeData.introduction }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12 text-justify", children: [
        /* @__PURE__ */ jsx("h2", { className: `text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r ${colors.faq.from} ${colors.faq.to}`, children: "Ingredients" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: (_a = recipeData.ingredients) == null ? void 0 : _a.map((ingredient, index) => /* @__PURE__ */ jsxs("div", { className: `bg-white rounded-xl shadow-lg p-6 border-l-4 ${colors.faq.border} hover:shadow-xl transition-shadow`, children: [
          /* @__PURE__ */ jsx("h3", { className: `text-xl font-bold mb-3 ${colors.faq.text}`, children: ingredient.name }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: ingredient.advice })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12 text-justify", children: [
        /* @__PURE__ */ jsx("h2", { className: `text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r ${colors.primary.from} ${colors.primary.to}`, children: "Cooking Steps" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-6", children: (_b = recipeData.cookingSteps) == null ? void 0 : _b.map((step, index) => /* @__PURE__ */ jsxs("li", { id: `coocking-step-${slugify(step.name)}`, className: `bg-white rounded-xl shadow-lg p-6 border-l-4 ${colors.primary.border} hover:shadow-xl transition-shadow`, children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold mb-3 text-gray-800", children: [
            "Step ",
            index + 1,
            ": ",
            /* @__PURE__ */ jsx("span", { className: colors.primary.text, children: step.name })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-gray-700 leading-relaxed", children: formatStepDescription(step.description) })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12 text-justify", children: [
        /* @__PURE__ */ jsx("h2", { className: `text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r ${colors.faq.from} ${colors.faq.to}`, children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: (_c = recipeData.faqs) == null ? void 0 : _c.map((faq, index) => /* @__PURE__ */ jsxs("div", { className: `bg-white rounded-xl shadow-lg p-6 border-l-4 ${colors.faq.border} hover:shadow-xl transition-shadow`, children: [
          /* @__PURE__ */ jsx("h3", { className: `text-xl font-bold mb-3 ${colors.faq.text}`, children: faq.question }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: faq.answer })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-12 text-justify", children: [
        /* @__PURE__ */ jsx("h2", { className: `text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r ${colors.primary.from} ${colors.primary.to}`, children: "Additional Information" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          recipeData.pairings.dietary_considerations && /* @__PURE__ */ jsxs("div", { className: `bg-white rounded-xl shadow-lg p-6 border-l-4 ${colors.primary.border} hover:shadow-xl transition-shadow`, children: [
            /* @__PURE__ */ jsx("h3", { className: `text-xl font-bold mb-3 ${colors.primary.text}`, children: "Dietary Considerations" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: recipeData.pairings.dietary_considerations })
          ] }),
          recipeData.pairings.pairings && /* @__PURE__ */ jsxs("div", { className: `bg-white rounded-xl shadow-lg p-6 border-l-4 ${colors.primary.border} hover:shadow-xl transition-shadow`, children: [
            /* @__PURE__ */ jsx("h3", { className: `text-xl font-bold mb-3 ${colors.primary.text}`, children: "Pairings" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: recipeData.pairings.pairings })
          ] }),
          recipeData.pairings.serving_suggestions && /* @__PURE__ */ jsxs("div", { className: `bg-white rounded-xl shadow-lg p-6 border-l-4 ${colors.primary.border} hover:shadow-xl transition-shadow`, children: [
            /* @__PURE__ */ jsx("h3", { className: `text-xl font-bold mb-3 ${colors.primary.text}`, children: "Serving Suggestions" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: recipeData.pairings.serving_suggestions })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12", id: "recipe", children: /* @__PURE__ */ jsx(MealCard, { mealData: meal, description: meal.intro, showAddToCartButton: false }) })
  ] });
}
const import5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page
}, Symbol.toStringTag, { value: "Module" }));
const data = async (pageContext) => {
  const config = useConfig();
  const slug = pageContext.routeParams.id;
  const baseUrl2 = process.env.BASE_URL;
  const response = await fetch(`${baseUrl2}/api/recipes/${slug}`);
  if (!response.ok) {
    throw new Error(`Error fetching recipe data ${slug}`);
  }
  let recipeData = await response.json();
  if (recipeData.mealId) {
    config({
      title: `${recipeData.SEOTitle ? recipeData.SEOTitle : recipeData.mealId.name}`,
      description: recipeData.SEODescription ? recipeData.SEODescription : recipeData.mealId.quickTastyDescription,
      image: `https://www.recipesnolimits.com${recipeData.mealId.imageUrl}`
    });
  } else {
    config({
      title: `${recipeData.name}`,
      description: recipeData.quickTastyDescription,
      image: `https://www.recipesnolimits.com${recipeData.imageUrl}`
    });
  }
  return recipeData;
};
const import6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data
}, Symbol.toStringTag, { value: "Module" }));
const baseUrl = process.env.BASE_URL;
async function onBeforePrerenderStart() {
  const recipeUrls = await fetchAllRecipeUrls();
  const recipePageURLs = recipeUrls.map((recipeUrl) => `/recipes/${recipeUrl}`);
  return recipePageURLs;
}
async function fetchAllRecipeUrls() {
  const response = await fetch(`${baseUrl}/api/recipes/allRecipeUrls`);
  if (!response.ok) {
    throw new Error("Failed to fetch recipe IDs");
  }
  const recipeUrls = await response.json();
  return recipeUrls;
}
const import7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  onBeforePrerenderStart
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
    definedAtData: [{ "filePathToShowToUser": "/pages/+Head.jsx", "fileExportPathToShowToUser": [] }],
    valueSerialized: [{
      type: "plus-file",
      exportValues: import4
    }]
  },
  ["title"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/+config.js", "fileExportPathToShowToUser": ["default", "title"] },
    valueSerialized: {
      type: "js-serialized",
      value: "Recipes No Limits"
    }
  },
  ["description"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/+config.js", "fileExportPathToShowToUser": ["default", "description"] },
    valueSerialized: {
      type: "js-serialized",
      value: "Explore a world of delicious recipes with Recipes No Limits. From baking to meat dishes, discover articles and an AI-powered recipe generator to create meals tailored to your taste and dietary needs."
    }
  },
  ["Page"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/recipes/@id/+Page.jsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import5
    }
  },
  ["data"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/recipes/@id/+data.js", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import6
    }
  },
  ["onBeforePrerenderStart"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/recipes/@id/+onBeforePrerenderStart.js", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import7
    }
  }
};
export {
  configValuesSerialized
};
