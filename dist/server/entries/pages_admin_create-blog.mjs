import import1 from "vike-react/__internal/components/Loading";
import { onRenderHtml } from "vike-react/__internal/integration/onRenderHtml";
import { L as LayoutDefault, i as import4 } from "../chunks/chunk-Cu_3oeEo.js";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { B as BlogPost } from "../chunks/chunk-DynuMH5n.js";
/* empty css                       */
/* empty css                       */
/* empty css                       */
import "dotenv";
import "../chunks/chunk-DeFJnAxZ.js";
/* empty css                       */
const CreateBlogPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [intro, setIntro] = useState("");
  const [conclusion, setConclusion] = useState("");
  const [meals, setMeals] = useState([]);
  const [password, setPassword] = useState("");
  const [previewData, setPreviewData] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const imageInputRef = useRef();
  const [metaTitle, setMetaTitle] = useState("");
  useEffect(() => {
    return () => {
      if (imagePreviewUrl) {
        URL.revokeObjectURL(imagePreviewUrl);
      }
    };
  }, [imagePreviewUrl]);
  const handleAddMeal = () => {
    setMeals([...meals, { mealId: "", description: "", mealData: null }]);
  };
  const handleRemoveMeal = (index) => {
    const updatedMeals = meals.filter((_, i) => i !== index);
    setMeals(updatedMeals);
  };
  const handleMealChange = async (index, field, value) => {
    const updatedMeals = [...meals];
    updatedMeals[index][field] = value;
    if (field === "mealId" && value) {
      try {
        const response = await axios.get(`/api/recipes/${value}`);
        updatedMeals[index].mealData = response.data;
      } catch (error) {
        console.error("Error fetching meal data:", error);
        updatedMeals[index].mealData = null;
      }
    }
    setMeals(updatedMeals);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreviewUrl(previewUrl);
    } else {
      setImagePreviewUrl(null);
    }
  };
  const handlePreview = () => {
    const blogDataToView = {
      title,
      description,
      intro,
      conclusion,
      meals: meals.map((m) => ({
        meal: m.mealData,
        description: m.description
      })),
      imageUrl: imagePreviewUrl,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
      // Added createdAt for preview
    };
    setPreviewData(blogDataToView);
  };
  const handleSave = async () => {
    var _a, _b;
    if (!title.trim()) {
      alert("Title is required.");
      return;
    }
    if (!password.trim()) {
      alert("Password is required.");
      return;
    }
    let image = null;
    if (imageFile) {
      const formData = new FormData();
      formData.append("image", imageFile);
      formData.append("title", title);
      try {
        const imageResponse = await axios.post("/images/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        image = imageResponse.data.savedImage;
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Failed to upload image.");
        return;
      }
    }
    const blogData = {
      title,
      description,
      intro,
      conclusion,
      meals: meals.map((m) => ({
        meal: m.mealId,
        description: m.description
      })),
      password,
      metaTitle,
      image: image == null ? void 0 : image._id,
      imageUrl: image ? `images/${image.slug}-${image._id}.${image.format}` : imagePreviewUrl
    };
    try {
      const baseurl = window.location.origin;
      console.log(baseurl);
      const response = await axios.post(`${baseurl}/api/blog/save`, blogData);
      alert("Blog post saved successfully!");
      window.location.href = `/blog/${response.data.slug}`;
    } catch (error) {
      console.error("Error saving blog post:", error);
      const errorMsg = ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.error) || "Failed to save blog post.";
      alert(errorMsg);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Helmet, { children: /* @__PURE__ */ jsx("meta", { name: "robots", content: "noindex, nofollow" }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto my-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-center mb-6", children: "Create New Blog Post" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "col-span-1", children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-1", children: "Title *" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              className: "input input-bordered w-full",
              value: title,
              onChange: (e) => setTitle(e.target.value),
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-1", children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-1", children: "Meta Title" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              className: "input input-bordered w-full",
              value: metaTitle,
              onChange: (e) => setMetaTitle(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-1", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold mb-2", children: "Upload Image" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "file",
              accept: "image/*",
              ref: imageInputRef,
              onChange: handleImageChange,
              className: "file-input file-input-bordered w-full"
            }
          ),
          imagePreviewUrl && /* @__PURE__ */ jsx(
            "img",
            {
              src: imagePreviewUrl,
              alt: "Selected",
              className: "w-full h-64 object-cover rounded mt-4 shadow"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-1", children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-1", children: "Description" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              className: "textarea textarea-bordered w-full",
              rows: 2,
              value: description,
              onChange: (e) => setDescription(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-1", children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-1", children: "Intro" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              className: "textarea textarea-bordered w-full",
              rows: 4,
              value: intro,
              onChange: (e) => setIntro(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-1", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold mb-2", children: "Meals" }),
          meals.map((meal, index) => /* @__PURE__ */ jsx("div", { className: "p-4 mb-4 bg-base-200 rounded", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-12 gap-4 items-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "col-span-5", children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-1", children: "Meal ID" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  className: "input input-bordered w-full",
                  value: meal.mealId,
                  onChange: (e) => handleMealChange(index, "mealId", e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "col-span-5", children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-1", children: "Meal Description" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  className: "input input-bordered w-full",
                  value: meal.description,
                  onChange: (e) => handleMealChange(index, "description", e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "col-span-2 flex items-center justify-center", children: /* @__PURE__ */ jsx(
              "button",
              {
                className: "btn btn-outline btn-error",
                onClick: () => handleRemoveMeal(index),
                children: /* @__PURE__ */ jsx(MinusIcon, { className: "h-5 w-5" })
              }
            ) }),
            meal.mealData && /* @__PURE__ */ jsxs("div", { className: "col-span-12", children: [
              /* @__PURE__ */ jsxs("p", { className: "font-semibold", children: [
                "Meal Name: ",
                meal.mealData.name
              ] }),
              /* @__PURE__ */ jsxs("p", { children: [
                "Calories: ",
                meal.mealData.calories
              ] })
            ] })
          ] }) }, index)),
          /* @__PURE__ */ jsxs("button", { className: "btn btn-primary", onClick: handleAddMeal, children: [
            /* @__PURE__ */ jsx(PlusIcon, { className: "h-5 w-5 mr-2" }),
            "Add Meal"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-1", children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-1", children: "Conclusion" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              className: "textarea textarea-bordered w-full",
              rows: 4,
              value: conclusion,
              onChange: (e) => setConclusion(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-1", children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-1", children: "Password *" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "password",
              className: "input input-bordered w-full",
              value: password,
              onChange: (e) => setPassword(e.target.value),
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-1 text-center", children: [
          /* @__PURE__ */ jsx("button", { className: "btn btn-outline btn-primary mr-4", onClick: handlePreview, children: "Preview" }),
          /* @__PURE__ */ jsx("button", { className: "btn btn-primary", onClick: handleSave, children: "Save" })
        ] })
      ] }),
      previewData && /* @__PURE__ */ jsxs("div", { className: "mt-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: "Preview" }),
        /* @__PURE__ */ jsx(BlogPost, { blogData: previewData }),
        /* @__PURE__ */ jsx("button", { className: "btn btn-secondary mt-4", onClick: () => setPreviewData(null), children: "Close Preview" })
      ] })
    ] })
  ] });
};
const import5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CreateBlogPost
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
    definedAtData: { "filePathToShowToUser": "/pages/admin/create-blog/+Page.jsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import5
    }
  }
};
export {
  configValuesSerialized
};
