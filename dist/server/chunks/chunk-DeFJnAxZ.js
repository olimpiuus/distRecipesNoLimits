import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef } from "react";
/* empty css               */
const MealCard = ({
  mealData = {},
  description = "",
  showAddToCartButton = true
}) => {
  const [activeTab, setActiveTab] = useState("ingredients");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const cardRef = useRef(null);
  const handleCopyId = () => {
    if (mealData == null ? void 0 : mealData._id) {
      navigator.clipboard.writeText(mealData._id);
      setSnackbarOpen(true);
      setTimeout(() => setSnackbarOpen(false), 3e3);
    }
  };
  const renderChips = (items) => items.map((item, index) => /* @__PURE__ */ jsx("span", { className: "badge badge-secondary mr-1 mt-1", children: item }, index));
  return /* @__PURE__ */ jsxs("div", { ref: cardRef, children: [
    /* @__PURE__ */ jsxs("div", { className: "meal-card card bg-base-100 w-96 shadow-xl relative", children: [
      mealData._id && /* @__PURE__ */ jsx("div", { className: "copy-id", onClick: handleCopyId, children: /* @__PURE__ */ jsx("span", { children: "#" }) }),
      /* @__PURE__ */ jsxs("div", { className: "card-header p-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "meal-title text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mt-4 mb-2 text-2xl font-bold", children: mealData.name || "Loading..." }),
        /* @__PURE__ */ jsx("div", { className: "image-container", children: mealData.imageUrl ? /* @__PURE__ */ jsx("div", { className: "image-wrapper", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: `${mealData.imageUrl}`,
            alt: mealData.name || "Meal Image"
          }
        ) }) : /* @__PURE__ */ jsx("div", { className: "image-placeholder bg-gray-300 animate-pulse h-48 w-full" }) }),
        /* @__PURE__ */ jsxs("div", { className: "info-chips flex flex-wrap mt-4", children: [
          mealData.cookingTime !== void 0 && mealData.preparationTime !== void 0 && /* @__PURE__ */ jsx("div", { className: "info-chip bg-gray-200 text-gray-800 px-3 py-1 rounded-full mr-2 mb-2", children: `${mealData.cookingTime + mealData.preparationTime} min` }),
          mealData.price !== void 0 && /* @__PURE__ */ jsx("div", { className: "info-chip bg-gray-200 text-gray-800 px-3 py-1 rounded-full mr-2 mb-2", children: `$${mealData.price}` }),
          mealData.calories !== void 0 && /* @__PURE__ */ jsx("div", { className: "info-chip bg-gray-200 text-gray-800 px-3 py-1 rounded-full mr-2 mb-2", children: `${mealData.calories} kcal` }),
          mealData.difficultyPercent !== void 0 && /* @__PURE__ */ jsx("div", { className: "info-chip bg-gray-200 text-gray-800 px-3 py-1 rounded-full mr-2 mb-2", children: `Difficulty: ${mealData.difficultyPercent}%` }),
          mealData.servings !== void 0 && /* @__PURE__ */ jsx("div", { className: "info-chip bg-gray-200 text-gray-800 px-3 py-1 rounded-full mr-2 mb-2", children: `Servings: ${mealData.servings}` })
        ] }),
        mealData.allergens && mealData.allergens.length > 0 && /* @__PURE__ */ jsxs("div", { className: "allergens mt-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold mb-1", children: "Allergens:" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap", children: renderChips(mealData.allergens) })
        ] }),
        mealData.dietaryTags && mealData.dietaryTags.length > 0 && /* @__PURE__ */ jsxs("div", { className: "dietary-tags mt-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold mb-1", children: "Dietary Tags:" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap", children: renderChips(mealData.dietaryTags) })
        ] }),
        mealData.cuisine && mealData.cuisine.length > 0 && /* @__PURE__ */ jsxs("div", { className: "cuisine mt-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold mb-1", children: "Cuisine:" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap", children: renderChips(mealData.cuisine) })
        ] }),
        mealData.course && mealData.course.length > 0 && /* @__PURE__ */ jsxs("div", { className: "course mt-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold mb-1", children: "Course:" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap", children: renderChips(mealData.course) })
        ] }),
        mealData.tags && mealData.tags.length > 0 && /* @__PURE__ */ jsxs("div", { className: "tags mt-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold mb-1", children: "Tags:" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap", children: renderChips(mealData.tags) })
        ] }),
        mealData.occasions && mealData.occasions.length > 0 && /* @__PURE__ */ jsxs("div", { className: "tags mt-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold mb-1", children: "Occasions:" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap", children: renderChips(mealData.occasions) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "card-content p-4", children: [
        (description || mealData.quickTastyDescription) && /* @__PURE__ */ jsxs("div", { className: "description mb-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2", children: "Description" }),
          /* @__PURE__ */ jsx("p", { children: description || mealData.quickTastyDescription })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "tabs tabs-boxed", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              className: `tab ${activeTab === "ingredients" ? "tab-active" : ""}`,
              onClick: () => setActiveTab("ingredients"),
              children: "Ingredients"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: `tab ${activeTab === "instructions" ? "tab-active" : ""}`,
              onClick: () => setActiveTab("instructions"),
              children: "Cooking Instructions"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "tab-panels mt-4", children: [
          activeTab === "ingredients" && /* @__PURE__ */ jsxs("div", { className: "tab-panel", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2", children: "Ingredients" }),
            mealData.ingredients ? /* @__PURE__ */ jsx("ul", { className: "list-disc list-inside", children: mealData.ingredients.map((ingredient, index) => /* @__PURE__ */ jsxs("li", { className: "mb-1", children: [
              /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
                ingredient.name,
                ":"
              ] }),
              " ",
              ingredient.quantity
            ] }, index)) }) : /* @__PURE__ */ jsx("div", { className: "bg-gray-200 text-gray-200 px-4 py-2 rounded animate-pulse", children: "Loading ingredients..." })
          ] }),
          activeTab === "instructions" && /* @__PURE__ */ jsxs("div", { className: "tab-panel", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2", children: "Cooking Instructions" }),
            mealData.detailedCookingInstructions ? /* @__PURE__ */ jsx("ol", { className: "list-decimal list-inside", children: mealData.detailedCookingInstructions.map((step, index) => /* @__PURE__ */ jsx("li", { className: "mb-1", children: step }, index)) }) : /* @__PURE__ */ jsx("div", { className: "bg-gray-200 text-gray-200 px-4 py-2 rounded animate-pulse", children: "Loading instructions..." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "additional-info p-4 border-t border-gray-200", children: mealData.dateCreated && /* @__PURE__ */ jsxs("div", { className: "date-created mb-2", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold", children: "Date Created:" }),
        /* @__PURE__ */ jsx("p", { children: new Date(mealData.dateCreated).toLocaleDateString() })
      ] }) }),
      showAddToCartButton && /* @__PURE__ */ jsx("div", { className: "add-to-cart p-4 border-t border-gray-200", children: /* @__PURE__ */ jsx("button", { className: "btn btn-primary w-full", children: "Add to Cart" }) })
    ] }),
    snackbarOpen && /* @__PURE__ */ jsx("div", { className: "snackbar fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded shadow-lg", children: /* @__PURE__ */ jsx("p", { children: "ID copied to clipboard" }) })
  ] });
};
export {
  MealCard as M
};
