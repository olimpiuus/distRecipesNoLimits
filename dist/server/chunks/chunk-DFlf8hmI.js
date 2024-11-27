import { jsx, jsxs } from "react/jsx-runtime";
import "react";
const BlogPostCard = ({ post }) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "card shadow-lg hover:shadow-xl transition-shadow",
      children: /* @__PURE__ */ jsxs("a", { href: `/blog/${post.slug}`, className: "block", children: [
        post.imageUrl && /* @__PURE__ */ jsx(
          "img",
          {
            src: post.imageUrl,
            alt: post.title,
            className: "w-full h-48 object-cover rounded-t-lg"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "card-body p-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "card-title text-lg font-semibold mb-1", children: post.title }),
          post.createdAt && /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mb-2", children: new Date(post.createdAt).toLocaleDateString(void 0, {
            year: "numeric",
            month: "long",
            day: "numeric"
          }) }),
          post.excerpt && /* @__PURE__ */ jsx("p", { className: "mb-2 text-gray-700 text-sm", children: post.excerpt }),
          /* @__PURE__ */ jsx("span", { className: "btn btn-primary btn-sm mt-2", children: "Read More" })
        ] })
      ] })
    },
    post.slug
  );
};
export {
  BlogPostCard as B
};
