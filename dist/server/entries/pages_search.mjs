import import1 from "vike-react/__internal/components/Loading";
import { onRenderHtml } from "vike-react/__internal/integration/onRenderHtml";
import { L as LayoutDefault, i as import4 } from "../chunks/chunk-Cu_3oeEo.js";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect, useCallback } from "react";
import { R as RecipeCard } from "../chunks/chunk-Ck-Owxb3.js";
/* empty css                       */
/* empty css                       */
/* empty css                       */
import "dotenv";
function SearchResultPage() {
  const [query, setQuery] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState(null);
  const [recipes, setRecipes] = useState([]);
  useRef("");
  const abortControllerRef = useRef(null);
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const queryParam = searchParams.get("q") || "";
    setQuery(queryParam);
  }, []);
  useEffect(() => {
    if (!query) {
      setRecipes([]);
      return;
    }
    const cacheKey = `searchRecipes_${query}`;
    const cachedRecipes = sessionStorage.getItem(cacheKey);
    if (cachedRecipes) {
      try {
        const parsedRecipes = JSON.parse(cachedRecipes);
        setRecipes(parsedRecipes);
      } catch (err) {
        console.error("Failed to parse cached recipes:", err);
        fetchRecipes(query);
      }
    } else {
      fetchRecipes(query);
    }
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [query]);
  useEffect(() => {
    if (query && recipes.length > 0) {
      const cacheKey = `searchRecipes_${query}`;
      sessionStorage.setItem(cacheKey, JSON.stringify(recipes));
    }
  }, [recipes, query]);
  const processChunk = useCallback((chunk) => {
    const { type, id, data, imageUrl, message, error: chunkError } = chunk;
    switch (type) {
      case "start":
      case "startAI":
        break;
      case "DbData":
        try {
          setRecipes((prevRecipes) => {
            const existingIndex = prevRecipes.findIndex((recipe) => recipe._id === id);
            if (existingIndex !== -1) {
              const updatedRecipes = [...prevRecipes];
              updatedRecipes[existingIndex] = { ...updatedRecipes[existingIndex], ...data };
              return updatedRecipes;
            } else {
              return [...prevRecipes, { _id: id, ...data }];
            }
          });
        } catch (error2) {
          console.error("Error parsing data chunk:", error2);
        }
        break;
      case "data":
        try {
          const parsedData = JSON.parse(data);
          setRecipes((prevRecipes) => {
            const existingIndex = prevRecipes.findIndex((recipe) => recipe._id === id);
            if (existingIndex !== -1) {
              const updatedRecipes = [...prevRecipes];
              updatedRecipes[existingIndex] = { ...updatedRecipes[existingIndex], ...parsedData };
              return updatedRecipes;
            } else {
              return [...prevRecipes, { _id: id, ...parsedData }];
            }
          });
        } catch (error2) {
          console.error("Error parsing data chunk:", error2);
        }
        break;
      case "image":
        setRecipes(
          (prevRecipes) => prevRecipes.map(
            (recipe) => recipe._id === id ? { ...recipe, imageUrl } : recipe
          )
        );
        break;
      case "complete":
        break;
      case "end":
        break;
      case "error":
        setError(`Error fetching meal with ID ${id}: ${chunkError}`);
        break;
    }
  }, []);
  const fetchRecipes = useCallback(async (searchQuery, loadedMeals = []) => {
    const baseUrl = `${window.location.protocol}//api.${window.location.host}:3002`;
    const url = `${baseUrl}/api/recipes/customReceipt?search=${encodeURIComponent(searchQuery)}&loadedMeals=${encodeURIComponent(loadedMeals.join(","))}`;
    abortControllerRef.current = new AbortController();
    const { signal } = abortControllerRef.current;
    try {
      const response = await fetch(url, { signal });
      if (!response.ok) {
        throw new Error("Failed to fetch meal data");
      }
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      setIsStreaming(true);
      let buffer = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          setIsStreaming(false);
          break;
        }
        buffer += decoder.decode(value, { stream: true });
        let boundary = buffer.indexOf("\n");
        while (boundary !== -1) {
          const completeChunk = buffer.slice(0, boundary).trim();
          buffer = buffer.slice(boundary + 1);
          if (completeChunk) {
            try {
              const parsedChunk = JSON.parse(completeChunk);
              processChunk(parsedChunk);
            } catch (err) {
              console.error("Failed to parse JSON chunk:", err, "Chunk:", completeChunk);
            }
          }
          boundary = buffer.indexOf("\n");
        }
      }
      if (buffer.trim()) {
        try {
          const parsedChunk = JSON.parse(buffer.trim());
          processChunk(parsedChunk);
        } catch (err) {
          console.error("Failed to parse JSON chunk from remaining buffer:", err, "Buffer:", buffer);
        }
      }
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
        console.error("Error fetching streamed data:", err);
        setIsStreaming(false);
      }
    }
  }, [processChunk]);
  const handleLoadMore = () => {
    const loadedMealNames = recipes.map((recipe) => recipe.name);
    fetchRecipes(query, loadedMealNames);
  };
  useEffect(() => {
  }, [recipes]);
  return /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ jsxs("h1", { className: "text-2xl font-semibold mb-4", children: [
      'Search Results for "',
      query,
      '"'
    ] }),
    error && /* @__PURE__ */ jsx("div", { className: "alert alert-error shadow-lg mb-4", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "stroke-current flex-shrink-0 h-6 w-6",
          fill: "none",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9z"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx("span", { children: error })
    ] }) }),
    recipes.length === 0 && !isStreaming && !error && /* @__PURE__ */ jsx("div", { className: "text-gray-600", children: "No recipes found for your search." }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", children: [
      recipes.map((recipe) => recipe.name && /* @__PURE__ */ jsx(RecipeCard, { recipe }, recipe._id)),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleLoadMore,
          disabled: isStreaming,
          className: `card shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center p-4 border border-gray-300 rounded-lg bg-white hover:bg-gray-100 ${isStreaming ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`,
          children: isStreaming ? "Loading..." : "Load More"
        }
      )
    ] }),
    isStreaming && /* @__PURE__ */ jsx("div", { className: "mt-4 text-blue-500", children: "Loading recipes..." })
  ] });
}
function Page() {
  return /* @__PURE__ */ jsx(SearchResultPage, {});
}
const import5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Page
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
    definedAtData: { "filePathToShowToUser": "/pages/search/+Page.jsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import5
    }
  },
  ["hooksTimeout"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/search/+config.js", "fileExportPathToShowToUser": ["default", "hooksTimeout"] },
    valueSerialized: {
      type: "js-serialized",
      value: { "data": { "warning": false, "error": false, "onRenderClient": false } }
    }
  }
};
export {
  configValuesSerialized
};
