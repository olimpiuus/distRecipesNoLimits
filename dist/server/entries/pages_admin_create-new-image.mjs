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
const CreateNewImage = () => {
  const [imageId, setImageId] = useState("");
  const [response, setResponse] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("images/create-new-for-a-meal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ mealId: imageId })
      // Send the image ID
    });
    const data = await res.json();
    setResponse(data);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Helmet, { children: /* @__PURE__ */ jsx("meta", { name: "robots", content: "noindex, nofollow" }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { children: "Create New Image" }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            value: imageId,
            onChange: (e) => setImageId(e.target.value),
            placeholder: "Enter Meal ID",
            required: true
          }
        ),
        /* @__PURE__ */ jsx("button", { type: "submit", children: "Generate Image" })
      ] }),
      response && /* @__PURE__ */ jsx("div", { children: JSON.stringify(response) })
    ] })
  ] });
};
const import5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CreateNewImage
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
    definedAtData: { "filePathToShowToUser": "/pages/admin/create-new-image/+Page.jsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import5
    }
  }
};
export {
  configValuesSerialized
};
