import import1 from "vike-react/__internal/components/Loading";
import { onRenderHtml } from "vike-react/__internal/integration/onRenderHtml";
import { L as LayoutDefault, i as import4$1 } from "../chunks/chunk-Cu_3oeEo.js";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import "react";
import { useData } from "vike-react/useData";
import { i as import5 } from "../chunks/chunk-Dv07Q67F.js";
import { B as BlogPost } from "../chunks/chunk-DynuMH5n.js";
import { useConfig } from "vike-react/useConfig";
/* empty css                       */
/* empty css                       */
/* empty css                       */
import "dotenv";
import "../chunks/chunk-DeFJnAxZ.js";
/* empty css                       */
const Head = () => {
  const blogData = useData();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("title", { children: blogData.metaTitle ? blogData.metaTitle : blogData.title }),
    /* @__PURE__ */ jsx("meta", { name: "og:title", content: blogData.metaTitle ? blogData.metaTitle : blogData.title }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: blogData.description }),
    /* @__PURE__ */ jsx("meta", { name: "og:description", content: blogData.description }),
    /* @__PURE__ */ jsx("meta", { property: "og:image", content: `https://www.recipesnolimits.com/${blogData.imageUrl}` })
  ] });
};
const import4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Head
}, Symbol.toStringTag, { value: "Module" }));
function Page() {
  const blogData = useData();
  return /* @__PURE__ */ jsx(BlogPost, { blogData });
}
const import7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page
}, Symbol.toStringTag, { value: "Module" }));
const data = async (pageContext) => {
  useConfig();
  const slug = pageContext.routeParams.id;
  const baseUrl = process.env.BASE_URL;
  const response = await fetch(`${baseUrl}/api/blog/${slug}`);
  if (!response.ok) {
    throw new Error("Error fetching blog data");
  }
  let blogData = await response.json();
  return blogData;
};
const import8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data
}, Symbol.toStringTag, { value: "Module" }));
process.env.BASE_URL;
async function onBeforePrerenderStart() {
  const posts = await fetchAllRecipeUrls();
  const blogUrls = posts.map((blog) => `/blog/${blog.slug}`);
  return blogUrls;
}
async function fetchAllRecipeUrls() {
  try {
    const baseUrl = process.env.BASE_URL;
    const response = await fetch(`${baseUrl}/api/blog/all`);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    let posts = await response.json();
    return posts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
  }
}
const import9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
    definedAtData: [{ "filePathToShowToUser": "/pages/blog/@id/+Head.jsx", "fileExportPathToShowToUser": [] }, { "filePathToShowToUser": "/pages/blog/+Head.jsx", "fileExportPathToShowToUser": [] }, { "filePathToShowToUser": "/pages/+Head.jsx", "fileExportPathToShowToUser": [] }],
    valueSerialized: [{
      type: "plus-file",
      exportValues: import4
    }, {
      type: "plus-file",
      exportValues: import5
    }, {
      type: "plus-file",
      exportValues: import4$1
    }]
  },
  ["Page"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/blog/@id/+Page.jsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import7
    }
  },
  ["data"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/blog/@id/+data.js", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import8
    }
  },
  ["onBeforePrerenderStart"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/blog/@id/+onBeforePrerenderStart.js", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import9
    }
  }
};
export {
  configValuesSerialized
};
