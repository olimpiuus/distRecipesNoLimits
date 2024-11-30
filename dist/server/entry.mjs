import { setImportBuildGetters } from "vike/__internal/loadImportBuild";
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const pageConfigsSerialized = [
  {
    pageId: "/pages/_error",
    isErrorPage: true,
    routeFilesystem: void 0,
    loadConfigValuesAll: () => import("./entries/pages_error.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/admin/create-blog",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/admin/create-blog", "definedBy": "/pages/admin/create-blog/" },
    loadConfigValuesAll: () => import("./entries/pages_admin_create-blog.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/admin/create-new-image",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/admin/create-new-image", "definedBy": "/pages/admin/create-new-image/" },
    loadConfigValuesAll: () => import("./entries/pages_admin_create-new-image.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/admin/createArticle",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/admin/createArticle", "definedBy": "/pages/admin/createArticle/" },
    loadConfigValuesAll: () => import("./entries/pages_admin_createArticle.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/blog",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/blog", "definedBy": "/pages/blog/" },
    loadConfigValuesAll: () => import("./entries/pages_blog.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/blog/@id",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/blog/@id", "definedBy": "/pages/blog/@id/" },
    loadConfigValuesAll: () => import("./entries/pages_blog_-id.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/index",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/", "definedBy": "/pages/index/" },
    loadConfigValuesAll: () => import("./entries/pages_index.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/recipes/@id",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/recipes/@id", "definedBy": "/pages/recipes/@id/" },
    loadConfigValuesAll: () => import("./entries/pages_recipes_-id.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/search",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/search", "definedBy": "/pages/search/" },
    loadConfigValuesAll: () => import("./entries/pages_search.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  }
];
const pageConfigGlobalSerialized = {
  configValuesSerialized: {}
};
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesExportNamesEagerIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerIsomorph = { ...pageFilesExportNamesEagerIsomorph1 };
pageFilesExportNamesEager[".page"] = pageFilesExportNamesEagerIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesExportNamesEagerServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerServer = { ...pageFilesExportNamesEagerServer1 };
pageFilesExportNamesEager[".page.server"] = pageFilesExportNamesEagerServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
const pageFiles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  neverLoaded,
  pageConfigGlobalSerialized,
  pageConfigsSerialized,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
}, Symbol.toStringTag, { value: "Module" }));
{
  const assetsManifest = {
  "_chunk-!~{00b}~.js": {
    "file": "assets/static/components_Header_Header-2f2beb17.Bb9cbtn0.css",
    "src": "_chunk-!~{00b}~.js"
  },
  "_chunk-!~{00c}~.js": {
    "file": "assets/static/components_MealCard_style-53c05b48.pl9UzD9T.css",
    "src": "_chunk-!~{00c}~.js"
  },
  "_chunk-!~{00d}~.js": {
    "file": "assets/static/layouts_style-b34a8e57.a91n6qlS.css",
    "src": "_chunk-!~{00d}~.js"
  },
  "_chunk-!~{00e}~.js": {
    "file": "assets/static/layouts_tailwind-00e65532.BW0x2jlB.css",
    "src": "_chunk-!~{00e}~.js"
  },
  "_chunk-!~{00f}~.js": {
    "file": "assets/static/vike-react-b64a028b.BcWtY8Ol.css",
    "src": "_chunk-!~{00f}~.js"
  },
  "_chunk-B8MOoQYQ.js": {
    "file": "assets/chunks/chunk-B8MOoQYQ.js",
    "name": "_onPageTransitionStart",
    "imports": [
      "_chunk-CXsRlRas.js"
    ],
    "css": [
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css",
      "assets/static/layouts_style-b34a8e57.a91n6qlS.css",
      "assets/static/layouts_tailwind-00e65532.BW0x2jlB.css",
      "assets/static/components_Header_Header-2f2beb17.Bb9cbtn0.css"
    ]
  },
  "_chunk-BTWFEZUG.js": {
    "file": "assets/chunks/chunk-BTWFEZUG.js",
    "name": "RecipeCard",
    "imports": [
      "_chunk-B8MOoQYQ.js"
    ]
  },
  "_chunk-BX696myR.js": {
    "file": "assets/chunks/chunk-BX696myR.js",
    "name": "Helmet",
    "imports": [
      "_chunk-B8MOoQYQ.js"
    ]
  },
  "_chunk-C1PDiBIl.js": {
    "file": "assets/chunks/chunk-C1PDiBIl.js",
    "name": "BlogPostCard",
    "imports": [
      "_chunk-B8MOoQYQ.js"
    ]
  },
  "_chunk-CHQPIMI2.js": {
    "file": "assets/chunks/chunk-CHQPIMI2.js",
    "name": "useData",
    "imports": [
      "_chunk-B8MOoQYQ.js"
    ]
  },
  "_chunk-CQU6upKd.js": {
    "file": "assets/chunks/chunk-CQU6upKd.js",
    "name": "PlogPost",
    "imports": [
      "_chunk-B8MOoQYQ.js",
      "_chunk-CgV_jjfO.js"
    ]
  },
  "_chunk-CXsRlRas.js": {
    "file": "assets/chunks/chunk-CXsRlRas.js",
    "name": "executeHook"
  },
  "_chunk-CgV_jjfO.js": {
    "file": "assets/chunks/chunk-CgV_jjfO.js",
    "name": "MealCard",
    "imports": [
      "_chunk-B8MOoQYQ.js"
    ],
    "css": [
      "assets/static/components_MealCard_style-53c05b48.pl9UzD9T.css"
    ]
  },
  "node_modules/vike/dist/esm/client/client-routing-runtime/entry.js": {
    "file": "assets/entries/entry-client-routing.DPyGkv0Y.js",
    "name": "entries/entry-client-routing",
    "src": "node_modules/vike/dist/esm/client/client-routing-runtime/entry.js",
    "isEntry": true,
    "imports": [
      "_chunk-CXsRlRas.js"
    ],
    "dynamicImports": [
      "virtual:vike:pageConfigValuesAll:client:/pages/_error",
      "virtual:vike:pageConfigValuesAll:client:/pages/admin/create-blog",
      "virtual:vike:pageConfigValuesAll:client:/pages/admin/create-new-image",
      "virtual:vike:pageConfigValuesAll:client:/pages/admin/createArticle",
      "virtual:vike:pageConfigValuesAll:client:/pages/blog",
      "virtual:vike:pageConfigValuesAll:client:/pages/blog/@id",
      "virtual:vike:pageConfigValuesAll:client:/pages/index",
      "virtual:vike:pageConfigValuesAll:client:/pages/recipes/@id",
      "virtual:vike:pageConfigValuesAll:client:/pages/search"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/_error": {
    "file": "assets/entries/pages_error.CrZqVvoC.js",
    "name": "entries/pages/_error",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/_error",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-B8MOoQYQ.js",
      "_chunk-CXsRlRas.js"
    ],
    "css": [
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css",
      "assets/static/layouts_style-b34a8e57.a91n6qlS.css",
      "assets/static/layouts_tailwind-00e65532.BW0x2jlB.css",
      "assets/static/components_Header_Header-2f2beb17.Bb9cbtn0.css"
    ],
    "assets": [
      "assets/static/logo.DZRcROEg.svg"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/admin/create-blog": {
    "file": "assets/entries/pages_admin_create-blog.xLkn6wLb.js",
    "name": "entries/pages/admin/create-blog",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/admin/create-blog",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-B8MOoQYQ.js",
      "_chunk-BX696myR.js",
      "_chunk-CQU6upKd.js",
      "_chunk-CXsRlRas.js",
      "_chunk-CgV_jjfO.js"
    ],
    "css": [
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css",
      "assets/static/layouts_style-b34a8e57.a91n6qlS.css",
      "assets/static/layouts_tailwind-00e65532.BW0x2jlB.css",
      "assets/static/components_Header_Header-2f2beb17.Bb9cbtn0.css",
      "assets/static/components_MealCard_style-53c05b48.pl9UzD9T.css"
    ],
    "assets": [
      "assets/static/logo.DZRcROEg.svg"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/admin/create-new-image": {
    "file": "assets/entries/pages_admin_create-new-image.BKUJVj44.js",
    "name": "entries/pages/admin/create-new-image",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/admin/create-new-image",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-B8MOoQYQ.js",
      "_chunk-BX696myR.js",
      "_chunk-CXsRlRas.js"
    ],
    "css": [
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css",
      "assets/static/layouts_style-b34a8e57.a91n6qlS.css",
      "assets/static/layouts_tailwind-00e65532.BW0x2jlB.css",
      "assets/static/components_Header_Header-2f2beb17.Bb9cbtn0.css"
    ],
    "assets": [
      "assets/static/logo.DZRcROEg.svg"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/admin/createArticle": {
    "file": "assets/entries/pages_admin_createArticle.B76dZZdU.js",
    "name": "entries/pages/admin/createArticle",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/admin/createArticle",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-B8MOoQYQ.js",
      "_chunk-BX696myR.js",
      "_chunk-CXsRlRas.js"
    ],
    "css": [
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css",
      "assets/static/layouts_style-b34a8e57.a91n6qlS.css",
      "assets/static/layouts_tailwind-00e65532.BW0x2jlB.css",
      "assets/static/components_Header_Header-2f2beb17.Bb9cbtn0.css"
    ],
    "assets": [
      "assets/static/logo.DZRcROEg.svg"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/blog": {
    "file": "assets/entries/pages_blog.DnfywxAU.js",
    "name": "entries/pages/blog",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/blog",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-B8MOoQYQ.js",
      "_chunk-CHQPIMI2.js",
      "_chunk-C1PDiBIl.js",
      "_chunk-CXsRlRas.js"
    ],
    "css": [
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css",
      "assets/static/layouts_style-b34a8e57.a91n6qlS.css",
      "assets/static/layouts_tailwind-00e65532.BW0x2jlB.css",
      "assets/static/components_Header_Header-2f2beb17.Bb9cbtn0.css"
    ],
    "assets": [
      "assets/static/logo.DZRcROEg.svg"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/blog/@id": {
    "file": "assets/entries/pages_blog_-id.te9Ad1io.js",
    "name": "entries/pages/blog/@id",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/blog/@id",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-B8MOoQYQ.js",
      "_chunk-CHQPIMI2.js",
      "_chunk-CQU6upKd.js",
      "_chunk-CXsRlRas.js",
      "_chunk-CgV_jjfO.js"
    ],
    "css": [
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css",
      "assets/static/layouts_style-b34a8e57.a91n6qlS.css",
      "assets/static/layouts_tailwind-00e65532.BW0x2jlB.css",
      "assets/static/components_Header_Header-2f2beb17.Bb9cbtn0.css",
      "assets/static/components_MealCard_style-53c05b48.pl9UzD9T.css"
    ],
    "assets": [
      "assets/static/logo.DZRcROEg.svg"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/index": {
    "file": "assets/entries/pages_index.DrV7rJGv.js",
    "name": "entries/pages/index",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/index",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-B8MOoQYQ.js",
      "_chunk-C1PDiBIl.js",
      "_chunk-CHQPIMI2.js",
      "_chunk-BTWFEZUG.js",
      "_chunk-CXsRlRas.js"
    ],
    "css": [
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css",
      "assets/static/layouts_style-b34a8e57.a91n6qlS.css",
      "assets/static/layouts_tailwind-00e65532.BW0x2jlB.css",
      "assets/static/components_Header_Header-2f2beb17.Bb9cbtn0.css"
    ],
    "assets": [
      "assets/static/logo.DZRcROEg.svg"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/recipes/@id": {
    "file": "assets/entries/pages_recipes_-id.rtGCYOKx.js",
    "name": "entries/pages/recipes/@id",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/recipes/@id",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-B8MOoQYQ.js",
      "_chunk-CHQPIMI2.js",
      "_chunk-CgV_jjfO.js",
      "_chunk-BX696myR.js",
      "_chunk-CXsRlRas.js"
    ],
    "css": [
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css",
      "assets/static/layouts_style-b34a8e57.a91n6qlS.css",
      "assets/static/layouts_tailwind-00e65532.BW0x2jlB.css",
      "assets/static/components_Header_Header-2f2beb17.Bb9cbtn0.css",
      "assets/static/components_MealCard_style-53c05b48.pl9UzD9T.css"
    ],
    "assets": [
      "assets/static/logo.DZRcROEg.svg"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/search": {
    "file": "assets/entries/pages_search.CNAJsoRB.js",
    "name": "entries/pages/search",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/search",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-B8MOoQYQ.js",
      "_chunk-BTWFEZUG.js",
      "_chunk-CXsRlRas.js"
    ],
    "css": [
      "assets/static/vike-react-b64a028b.BcWtY8Ol.css",
      "assets/static/layouts_style-b34a8e57.a91n6qlS.css",
      "assets/static/layouts_tailwind-00e65532.BW0x2jlB.css",
      "assets/static/components_Header_Header-2f2beb17.Bb9cbtn0.css"
    ],
    "assets": [
      "assets/static/logo.DZRcROEg.svg"
    ]
  }
};
  const pluginManifest = {
    "version": "0.4.204",
    "usesClientRouter": false,
    "baseServer": "/",
    "baseAssets": "/",
    "includeAssetsImportedByServer": true,
    "redirects": {},
    "trailingSlash": false,
    "disableUrlNormalization": false
  };
  setImportBuildGetters({
    pageFiles: () => pageFiles,
    getAssetsManifest: () => assetsManifest,
    pluginManifest: () => pluginManifest
  });
}
