import import1 from "vike-react/__internal/components/Loading";
import { onRenderHtml } from "vike-react/__internal/integration/onRenderHtml";
import { L as LayoutDefault, i as import4 } from "../chunks/chunk-Cu_3oeEo.js";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Helmet } from "react-helmet";
/* empty css                       */
/* empty css                       */
/* empty css                       */
import "dotenv";
function CreateArticlePage() {
  const [mealId, setMealId] = useState("");
  const [response, setResponse] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(`/api/recipes/createArticle/all`);
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      setResponse({ error: "Failed to fetch article", details: error.message });
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Helmet, { children: /* @__PURE__ */ jsx("meta", { name: "robots", content: "noindex, nofollow" }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { children: "Create Article" }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            value: mealId,
            onChange: (e) => setMealId(e.target.value),
            placeholder: "Enter Meal ID",
            required: true
          }
        ),
        /* @__PURE__ */ jsx("button", { type: "submit", children: "Create Article" })
      ] }),
      response && /* @__PURE__ */ jsx("div", { children: response.error ? /* @__PURE__ */ jsxs("p", { children: [
        "Error: ",
        response.details
      ] }) : /* @__PURE__ */ jsx("p", { children: response.message }) })
    ] })
  ] });
}
const import5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CreateArticlePage
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
  ["Page"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/admin/createArticle/+Page.jsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import5
    }
  }
};
export {
  configValuesSerialized
};
