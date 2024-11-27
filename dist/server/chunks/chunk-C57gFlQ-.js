import { jsx, jsxs, Fragment } from "react/jsx-runtime";
/* empty css               */
/* empty css               */
import { useState } from "react";
/* empty css               */
import dotenv from "dotenv";
const Logo = () => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    preserveAspectRatio: "xMidYMid meet",
    style: { width: "100%", height: "100%", maxWidth: "50px" },
    children: /* @__PURE__ */ jsxs(
      "g",
      {
        transform: "translate(0,1024) scale(0.1,-0.1)",
        fill: "currentColor",
        stroke: "none",
        children: [
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M5050 8544 c-559 -40 -874 -120 -1315 -335 -198 -96 -444 -252 -610\n-386 -360 -292 -693 -737 -916 -1228 -119 -260 -212 -606 -251 -930 -17 -147\n-17 -617 0 -755 18 -138 73 -371 129 -545 158 -490 481 -999 879 -1385 308\n-299 741 -561 1169 -707 96 -33 568 -153 601 -153 2 0 4 79 4 175 0 173 0 176\n-23 184 -12 5 -96 25 -187 46 -194 43 -296 77 -480 157 -178 78 -269 127 -425\n230 -180 119 -276 198 -451 373 -298 297 -506 598 -649 937 -152 364 -215 691\n-215 1117 0 444 90 843 278 1231 54 112 136 257 181 320 17 25 56 81 86 125\n207 307 647 681 1024 870 120 60 375 160 448 176 47 10 65 20 98 54 53 55 128\n93 211 104 99 14 156 0 214 -55 26 -24 51 -44 55 -44 4 0 29 21 54 48 54 56\n98 72 197 72 95 0 172 -24 230 -71 l47 -40 41 40 c55 54 124 69 227 52 89 -14\n138 -39 192 -97 32 -34 55 -48 97 -60 296 -83 622 -245 880 -437 415 -310 801\n-839 978 -1342 57 -162 115 -386 137 -530 37 -245 43 -568 15 -780 -48 -359\n-175 -749 -334 -1020 -178 -303 -382 -560 -590 -744 -427 -377 -843 -590\n-1375 -705 -62 -13 -113 -26 -114 -28 -1 -1 -1 -79 1 -172 l3 -168 41 6 c110\n18 408 93 528 133 449 151 889 411 1197 707 475 455 797 1011 947 1634 57 235\n71 372 71 697 0 310 -2 340 -50 600 -82 441 -282 908 -541 1261 -32 45 -95\n130 -138 190 -95 130 -398 437 -528 534 -393 293 -904 521 -1344 599 -162 29\n-580 55 -724 45z"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M5121 8002 c-73 -36 -69 -13 -81 -557 -5 -269 -15 -663 -20 -875 -6\n-212 -10 -420 -10 -462 0 -72 -2 -78 -30 -107 -39 -39 -87 -48 -133 -26 -74\n35 -68 -39 -72 1012 l-4 945 -22 24 c-49 52 -126 37 -154 -29 -18 -45 -73\n-663 -100 -1142 -9 -154 -21 -329 -26 -390 -6 -60 -13 -225 -16 -365 -5 -229\n-3 -265 15 -350 41 -195 89 -278 258 -445 69 -68 125 -134 147 -172 40 -70 80\n-192 98 -298 8 -50 12 -468 14 -1430 2 -1014 6 -1371 15 -1405 22 -83 112\n-148 187 -134 55 10 111 44 134 81 21 34 21 38 20 1457 -2 1554 -4 1491 55\n1637 45 112 59 131 190 271 105 111 140 156 186 240 111 199 125 335 89 868\n-12 173 -26 396 -31 495 -6 99 -17 236 -26 305 -8 69 -19 193 -24 275 -30 496\n-33 515 -82 549 -43 30 -111 15 -128 -28 -4 -12 -11 -434 -15 -937 -4 -506\n-11 -930 -16 -951 -22 -85 -126 -118 -191 -59 l-33 29 -7 334 c-3 183 -12 612\n-18 952 -13 682 -11 665 -75 692 -44 18 -53 18 -94 -4z"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M4227 7760 c-485 -196 -938 -563 -1223 -991 -158 -237 -252 -433\n-338 -709 -76 -246 -106 -468 -106 -779 1 -356 56 -629 194 -949 184 -427 457\n-777 834 -1070 90 -70 189 -142 220 -161 263 -156 522 -267 756 -322 49 -11\n107 -28 128 -36 21 -9 41 -13 44 -11 3 3 2 89 -2 191 l-7 186 -31 6 c-75 16\n-388 120 -463 155 -250 117 -468 275 -688 502 -127 130 -212 238 -301 384\n-137 223 -203 382 -264 627 -53 219 -64 310 -64 522 1 546 186 1061 525 1461\n96 114 246 256 362 343 152 114 413 266 487 284 26 6 26 7 43 194 10 103 17\n194 17 201 0 19 -17 15 -123 -28z"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M5985 7790 c-3 -5 2 -70 10 -146 8 -77 16 -163 17 -192 l3 -52 115\n-53 c236 -109 402 -228 615 -442 271 -272 416 -503 550 -875 69 -194 115 -471\n115 -700 0 -501 -151 -955 -443 -1330 -308 -397 -665 -661 -1087 -805 -74 -26\n-171 -54 -215 -64 l-80 -18 4 -184 c2 -101 4 -185 5 -186 3 -4 202 53 346 100\n272 87 590 257 812 435 181 144 416 393 555 587 229 321 390 739 445 1155 19\n146 16 491 -6 630 -74 484 -238 875 -525 1258 -239 317 -560 583 -916 758\n-156 76 -312 137 -320 124z"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M4260 7113 c-62 -23 -297 -189 -422 -299 -87 -76 -183 -184 -275\n-307 -257 -346 -392 -762 -393 -1212 0 -265 42 -481 140 -715 237 -568 730\n-1003 1330 -1174 47 -14 86 -24 87 -22 1 1 3 86 4 190 1 151 -1 190 -12 196\n-8 4 -49 17 -91 29 -107 29 -285 117 -398 198 -124 88 -338 302 -420 421 -117\n167 -205 370 -256 587 -29 125 -27 469 4 622 32 161 98 346 175 488 83 156\n304 405 460 519 l77 57 0 83 c0 80 16 278 25 324 5 22 -4 26 -35 15z"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M6034 7087 c14 -58 38 -307 33 -354 -6 -61 -3 -67 83 -123 78 -52\n224 -198 303 -303 221 -293 324 -576 343 -942 17 -319 -100 -699 -296 -964\n-76 -102 -225 -257 -325 -338 -152 -122 -373 -236 -532 -273 l-53 -12 0 -200\nc0 -156 3 -199 13 -195 6 2 53 17 102 32 426 129 751 349 1030 696 205 254\n354 593 406 924 17 108 17 427 0 540 -51 340 -193 677 -401 954 -134 177 -402\n419 -588 530 -96 57 -128 65 -118 28z"
            }
          )
        ]
      }
    )
  }
);
const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  return /* @__PURE__ */ jsxs("div", { className: "navbar bg-base-100 px-4 py-2 shadow-md", children: [
    /* @__PURE__ */ jsx("div", { className: "navbar-st", children: /* @__PURE__ */ jsxs("a", { href: "/", className: "btn btn-ghost text-xl flex flex-col items-center", "aria-label": "Homepage", children: [
      /* @__PURE__ */ jsx(Logo, { className: "h-8 w-8 mr-2" }),
      /* @__PURE__ */ jsxs("div", { className: "grid-container", children: [
        /* @__PURE__ */ jsx("div", { className: "text-black", children: "Recipes" }),
        /* @__PURE__ */ jsx("div", { className: "grid-no-limits text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600", children: "No Limits" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center w-full navbar-search relative", children: /* @__PURE__ */ jsxs(
      "form",
      {
        action: "/search",
        method: "get",
        className: "search-container w-full relative flex justify-center",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex w-full", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "q",
                placeholder: "Search or create recipes, ingredients, or anything...",
                className: "input input-bordered w-full pulsating-shadow rounded-l-md",
                value: searchInput,
                onChange: (e) => setSearchInput(e.target.value),
                "aria-label": "Search"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: "btn btn-primary rounded-r-md flex items-center justify-center",
                "aria-label": "Submit Search",
                children: /* @__PURE__ */ jsx(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-5 w-5",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      }
                    )
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "advice-box mt-2 p-4 bg-gray-50 rounded-lg shadow-md", children: [
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-2 font-semibold", children: "Need some inspiration? Try typing:" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-gray-600 space-y-1", children: [
              /* @__PURE__ */ jsx("li", { children: '"Vegan breakfast options without soy and nuts"' }),
              /* @__PURE__ */ jsx("li", { children: '"Quick dinner recipes with chicken and broccoli"' }),
              /* @__PURE__ */ jsx("li", { children: '"Gluten-free desserts with chocolate"' })
            ] })
          ] })
        ]
      }
    ) })
  ] });
};
function LayoutDefault({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", "data-theme": "cupcake", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Content, { children })
  ] });
}
function Content({ children }) {
  return /* @__PURE__ */ jsx("div", { id: "page-container", children: /* @__PURE__ */ jsx("div", { id: "page-content", className: "p-5 pb-12 min-h-screen", children }) });
}
const logoUrl = "/assets/static/logo.DZRcROEg.svg";
dotenv.config();
const fullLogoUrl = logoUrl;
function HeadDefault() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("link", { rel: "icon", href: fullLogoUrl }),
    /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Recipes No Limits" }),
    /* @__PURE__ */ jsx(
      "script",
      {
        async: true,
        src: `https://www.googletagmanager.com/gtag/js?id=${process.env.PUBLIC_ENV__GOOGLE_ANALYTICS}`
      }
    ),
    /* @__PURE__ */ jsx(
      "script",
      {
        dangerouslySetInnerHTML: {
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.PUBLIC_ENV__GOOGLE_ANALYTICS}', {
              'send_page_view': false  // Initial page view can be manually sent later if needed
            });
          `
        }
      }
    )
  ] });
}
const import4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HeadDefault
}, Symbol.toStringTag, { value: "Module" }));
export {
  LayoutDefault as L,
  import4 as i
};
