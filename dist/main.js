/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./home.js":
/*!*****************!*\
  !*** ./home.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction home (){\r\n\r\n    const homeContainer=document.createElement(\"div\");\r\n    homeContainer.classList.add(\"home-container\");\r\n\r\n    const homeBox=document.createElement(\"div\");\r\n    homeBox.classList.add(\"home-box\")\r\n\r\n    const homeTittle=document.createElement(\"div\");\r\n    homeTittle.innerHTML=\"Marijuana Guide\"\r\n    homeTittle.classList.add(\"home-tittle\");\r\n\r\n    const searchBox=document.createElement(\"div\")\r\n    searchBox.classList.add(\"search-box\");\r\n    var input = document.createElement(\"div\")\r\n    input.classList.add(\"input\");\r\n    input.classList.add(\"bounce-in-left\")\r\n\r\n    var array = [\"Sativa\",\"Indica\",\"Hybrid\"];\r\n\r\n    var selectList = document.createElement(\"select\");\r\n    selectList.classList.add(\"race\");\r\n    selectList.id = \"mySelect\";\r\n        selectList.addEventListener('change', (event) => {\r\n        console.log(`Tipo ${event.target.value}`);\r\n    });\r\n    input.appendChild(selectList);\r\n\r\n    for (var i = 0; i < array.length;i++) {\r\n        var option = document.createElement(\"option\");\r\n        option.classList.add(\"options\");\r\n        option.value = array[i];\r\n        option.text = array[i];\r\n        selectList.appendChild(option);\r\n    }\r\n\r\n    const homeDescription=document.createElement(\"div\");\r\n    homeDescription.innerHTML=\"Flavors and Effects\"\r\n    homeDescription.classList.add(\"home-description\");\r\n\r\n    searchBox.appendChild(input)\r\n    homeBox.append(homeTittle, searchBox, homeDescription);\r\n    homeContainer.appendChild(homeBox);\r\n   \r\n    return homeContainer;\r\n\r\n    }\r\n    \r\n    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home); \n\n//# sourceURL=webpack://webpack-demo/./home.js?");

/***/ }),

/***/ "./items.js":
/*!******************!*\
  !*** ./items.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction items(){\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (items);\n\n//# sourceURL=webpack://webpack-demo/./items.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Amatic_woff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Amatic.woff */ \"./src/Amatic.woff\");\n/* harmony import */ var _home_image_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-image.jpg */ \"./src/home-image.jpg\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_Amatic_woff__WEBPACK_IMPORTED_MODULE_2__);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_home_image_jpg__WEBPACK_IMPORTED_MODULE_3__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* ----------------------------------------------\\r\\n * Generated by Animista on 2021-3-16 17:58:13\\r\\n * Licensed under FreeBSD License.\\r\\n * See http://animista.net/license for more info. \\r\\n * w: http://animista.net, t: @cssanimista\\r\\n * ---------------------------------------------- */\\r\\n\\r\\n/**\\r\\n * ----------------------------------------\\r\\n * animation bounce-in-left\\r\\n * ----------------------------------------\\r\\n */\\r\\n @-webkit-keyframes bounce-in-left {\\r\\n    0% {\\r\\n      -webkit-transform: translateX(-600px);\\r\\n              transform: translateX(-600px);\\r\\n      -webkit-animation-timing-function: ease-in;\\r\\n              animation-timing-function: ease-in;\\r\\n      opacity: 0;\\r\\n    }\\r\\n    38% {\\r\\n      -webkit-transform: translateX(0);\\r\\n              transform: translateX(0);\\r\\n      -webkit-animation-timing-function: ease-out;\\r\\n              animation-timing-function: ease-out;\\r\\n      opacity: 1;\\r\\n    }\\r\\n    55% {\\r\\n      -webkit-transform: translateX(-68px);\\r\\n              transform: translateX(-68px);\\r\\n      -webkit-animation-timing-function: ease-in;\\r\\n              animation-timing-function: ease-in;\\r\\n    }\\r\\n    72% {\\r\\n      -webkit-transform: translateX(0);\\r\\n              transform: translateX(0);\\r\\n      -webkit-animation-timing-function: ease-out;\\r\\n              animation-timing-function: ease-out;\\r\\n    }\\r\\n    81% {\\r\\n      -webkit-transform: translateX(-28px);\\r\\n              transform: translateX(-28px);\\r\\n      -webkit-animation-timing-function: ease-in;\\r\\n              animation-timing-function: ease-in;\\r\\n    }\\r\\n    90% {\\r\\n      -webkit-transform: translateX(0);\\r\\n              transform: translateX(0);\\r\\n      -webkit-animation-timing-function: ease-out;\\r\\n              animation-timing-function: ease-out;\\r\\n    }\\r\\n    95% {\\r\\n      -webkit-transform: translateX(-8px);\\r\\n              transform: translateX(-8px);\\r\\n      -webkit-animation-timing-function: ease-in;\\r\\n              animation-timing-function: ease-in;\\r\\n    }\\r\\n    100% {\\r\\n      -webkit-transform: translateX(0);\\r\\n              transform: translateX(0);\\r\\n      -webkit-animation-timing-function: ease-out;\\r\\n              animation-timing-function: ease-out;\\r\\n    }\\r\\n  }\\r\\n  @keyframes bounce-in-left {\\r\\n    0% {\\r\\n      -webkit-transform: translateX(-600px);\\r\\n              transform: translateX(-600px);\\r\\n      -webkit-animation-timing-function: ease-in;\\r\\n              animation-timing-function: ease-in;\\r\\n      opacity: 0;\\r\\n    }\\r\\n    38% {\\r\\n      -webkit-transform: translateX(0);\\r\\n              transform: translateX(0);\\r\\n      -webkit-animation-timing-function: ease-out;\\r\\n              animation-timing-function: ease-out;\\r\\n      opacity: 1;\\r\\n    }\\r\\n    55% {\\r\\n      -webkit-transform: translateX(-68px);\\r\\n              transform: translateX(-68px);\\r\\n      -webkit-animation-timing-function: ease-in;\\r\\n              animation-timing-function: ease-in;\\r\\n    }\\r\\n    72% {\\r\\n      -webkit-transform: translateX(0);\\r\\n              transform: translateX(0);\\r\\n      -webkit-animation-timing-function: ease-out;\\r\\n              animation-timing-function: ease-out;\\r\\n    }\\r\\n    81% {\\r\\n      -webkit-transform: translateX(-28px);\\r\\n              transform: translateX(-28px);\\r\\n      -webkit-animation-timing-function: ease-in;\\r\\n              animation-timing-function: ease-in;\\r\\n    }\\r\\n    90% {\\r\\n      -webkit-transform: translateX(0);\\r\\n              transform: translateX(0);\\r\\n      -webkit-animation-timing-function: ease-out;\\r\\n              animation-timing-function: ease-out;\\r\\n    }\\r\\n    95% {\\r\\n      -webkit-transform: translateX(-8px);\\r\\n              transform: translateX(-8px);\\r\\n      -webkit-animation-timing-function: ease-in;\\r\\n              animation-timing-function: ease-in;\\r\\n    }\\r\\n    100% {\\r\\n      -webkit-transform: translateX(0);\\r\\n              transform: translateX(0);\\r\\n      -webkit-animation-timing-function: ease-out;\\r\\n              animation-timing-function: ease-out;\\r\\n    }\\r\\n  }\\r\\n  \\r\\n*{\\r\\n    outline: none;\\r\\n}\\r\\n\\r\\n@font-face{\\r\\n    font-family: 'Amatic';\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('woff');\\r\\n    font-weight: 600;\\r\\n    font-style: normal;\\r\\n}\\r\\n\\r\\nbody, html, .parent{\\r\\n    width: 100%;\\r\\n    height:100%;\\r\\n    padding: 0%;\\r\\n    margin: 0%;\\r\\n    overflow-x: hidden;\\r\\n}\\r\\n\\r\\n.home-container{\\r\\n    background:url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    background-size: cover;\\r\\n    background-repeat: no-repeat; \\r\\n    background-position-x: left; \\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n\\r\\n}\\r\\n\\r\\n.home-box{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    width: 600px;\\r\\n    height: 300px;\\r\\n    background-color: black;\\r\\n    opacity: 0.7;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.home-tittle{\\r\\n    width: 100%;\\r\\n    height: 40%;\\r\\n    font-size: 80px;\\r\\n    color:  white;\\r\\n    font-family:'Amatic';\\r\\n    align-items: center;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.search-box{\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\nselect {\\r\\n    background-color: transparent;\\r\\n    border: none;\\r\\n    padding: 0 1em 0 0;\\r\\n    margin: 0;\\r\\n    width: 100%;\\r\\n    font-family: inherit;\\r\\n    font-size: inherit;\\r\\n    line-height: inherit;\\r\\n  }\\r\\n\\r\\n  select::-ms-expand {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  :root {\\r\\n    --select-border:rgb(95, 152, 62);\\r\\n    --select-focus:rgb(95, 152, 62);\\r\\n  }\\r\\n\\r\\n  .input {\\r\\n    width: 100%;\\r\\n    border: 1px solid var(--select-border);\\r\\n    border-radius: 0.25em;\\r\\n    padding: 0.25em 0.5em;\\r\\n    font-size: 25px;\\r\\n    font-family:'Amatic';\\r\\n    cursor: pointer;\\r\\n    line-height: 1.1;\\r\\n    background-color: #fff;\\r\\n  }\\r\\n\\r\\n.bounce-in-left {\\r\\n\\t-webkit-animation: bounce-in-left 1.1s both;\\r\\n\\t        animation: bounce-in-left 1.1s both;\\r\\n}\\r\\n\\r\\n.home-description{\\r\\n    width: 100%;\\r\\n    height: 40%;\\r\\n    font-size: 80px;\\r\\n    color: white;\\r\\n    font-family:'Amatic';\\r\\n    text-align: center;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://webpack-demo/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/Amatic.woff":
/*!*************************!*\
  !*** ./src/Amatic.woff ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3bccd1ee94e75c1f835b.woff\";\n\n//# sourceURL=webpack://webpack-demo/./src/Amatic.woff?");

/***/ }),

/***/ "./src/home-image.jpg":
/*!****************************!*\
  !*** ./src/home-image.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f05037d3f92ae4000aae.jpg\";\n\n//# sourceURL=webpack://webpack-demo/./src/home-image.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home */ \"./home.js\");\n/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items */ \"./items.js\");\n/* harmony import */ var _home_image_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-image.jpg */ \"./src/home-image.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst parent=document.getElementById(\"parent\")\r\nparent.append((0,_home__WEBPACK_IMPORTED_MODULE_1__.default)());\r\n\r\nconst hbImage = document.createElement(\"img\");\r\nhbImage.src = _home_image_jpg__WEBPACK_IMPORTED_MODULE_3__;\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;