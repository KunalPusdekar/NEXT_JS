"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-extension-gfm";
exports.ids = ["vendor-chunks/micromark-extension-gfm"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-extension-gfm/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/micromark-extension-gfm/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfm: () => (/* binding */ gfm),\n/* harmony export */   gfmHtml: () => (/* binding */ gfmHtml)\n/* harmony export */ });\n/* harmony import */ var micromark_util_combine_extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-combine-extensions */ \"(ssr)/./node_modules/micromark-util-combine-extensions/index.js\");\n/* harmony import */ var micromark_extension_gfm_autolink_literal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-extension-gfm-autolink-literal */ \"(ssr)/./node_modules/micromark-extension-gfm-autolink-literal/dev/lib/syntax.js\");\n/* harmony import */ var micromark_extension_gfm_autolink_literal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! micromark-extension-gfm-autolink-literal */ \"(ssr)/./node_modules/micromark-extension-gfm-autolink-literal/dev/lib/html.js\");\n/* harmony import */ var micromark_extension_gfm_footnote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-extension-gfm-footnote */ \"(ssr)/./node_modules/micromark-extension-gfm-footnote/dev/lib/syntax.js\");\n/* harmony import */ var micromark_extension_gfm_footnote__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! micromark-extension-gfm-footnote */ \"(ssr)/./node_modules/micromark-extension-gfm-footnote/dev/lib/html.js\");\n/* harmony import */ var micromark_extension_gfm_strikethrough__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-extension-gfm-strikethrough */ \"(ssr)/./node_modules/micromark-extension-gfm-strikethrough/dev/lib/syntax.js\");\n/* harmony import */ var micromark_extension_gfm_strikethrough__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! micromark-extension-gfm-strikethrough */ \"(ssr)/./node_modules/micromark-extension-gfm-strikethrough/dev/lib/html.js\");\n/* harmony import */ var micromark_extension_gfm_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-extension-gfm-table */ \"(ssr)/./node_modules/micromark-extension-gfm-table/dev/lib/syntax.js\");\n/* harmony import */ var micromark_extension_gfm_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! micromark-extension-gfm-table */ \"(ssr)/./node_modules/micromark-extension-gfm-table/dev/lib/html.js\");\n/* harmony import */ var micromark_extension_gfm_tagfilter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! micromark-extension-gfm-tagfilter */ \"(ssr)/./node_modules/micromark-extension-gfm-tagfilter/lib/index.js\");\n/* harmony import */ var micromark_extension_gfm_task_list_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! micromark-extension-gfm-task-list-item */ \"(ssr)/./node_modules/micromark-extension-gfm-task-list-item/dev/lib/syntax.js\");\n/* harmony import */ var micromark_extension_gfm_task_list_item__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! micromark-extension-gfm-task-list-item */ \"(ssr)/./node_modules/micromark-extension-gfm-task-list-item/dev/lib/html.js\");\n/**\n * @typedef {import('micromark-extension-gfm-footnote').HtmlOptions} HtmlOptions\n * @typedef {import('micromark-extension-gfm-strikethrough').Options} Options\n * @typedef {import('micromark-util-types').Extension} Extension\n * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension\n */\n\n\n\n\n\n\n\n\n\n/**\n * Create an extension for `micromark` to enable GFM syntax.\n *\n * @param {Options | null | undefined} [options]\n *   Configuration (optional).\n *\n *   Passed to `micromark-extens-gfm-strikethrough`.\n * @returns {Extension}\n *   Extension for `micromark` that can be passed in `extensions` to enable GFM\n *   syntax.\n */\nfunction gfm(options) {\n  return (0,micromark_util_combine_extensions__WEBPACK_IMPORTED_MODULE_0__.combineExtensions)([\n    (0,micromark_extension_gfm_autolink_literal__WEBPACK_IMPORTED_MODULE_1__.gfmAutolinkLiteral)(),\n    (0,micromark_extension_gfm_footnote__WEBPACK_IMPORTED_MODULE_2__.gfmFootnote)(),\n    (0,micromark_extension_gfm_strikethrough__WEBPACK_IMPORTED_MODULE_3__.gfmStrikethrough)(options),\n    (0,micromark_extension_gfm_table__WEBPACK_IMPORTED_MODULE_4__.gfmTable)(),\n    (0,micromark_extension_gfm_task_list_item__WEBPACK_IMPORTED_MODULE_5__.gfmTaskListItem)()\n  ])\n}\n\n/**\n * Create an extension for `micromark` to support GFM when serializing to HTML.\n *\n * @param {HtmlOptions | null | undefined} [options]\n *   Configuration (optional).\n *\n *   Passed to `micromark-extens-gfm-footnote`.\n * @returns {HtmlExtension}\n *   Extension for `micromark` that can be passed in `htmlExtensions` to\n *   support GFM when serializing to HTML.\n */\nfunction gfmHtml(options) {\n  return (0,micromark_util_combine_extensions__WEBPACK_IMPORTED_MODULE_0__.combineHtmlExtensions)([\n    (0,micromark_extension_gfm_autolink_literal__WEBPACK_IMPORTED_MODULE_6__.gfmAutolinkLiteralHtml)(),\n    (0,micromark_extension_gfm_footnote__WEBPACK_IMPORTED_MODULE_7__.gfmFootnoteHtml)(options),\n    (0,micromark_extension_gfm_strikethrough__WEBPACK_IMPORTED_MODULE_8__.gfmStrikethroughHtml)(),\n    (0,micromark_extension_gfm_table__WEBPACK_IMPORTED_MODULE_9__.gfmTableHtml)(),\n    (0,micromark_extension_gfm_tagfilter__WEBPACK_IMPORTED_MODULE_10__.gfmTagfilterHtml)(),\n    (0,micromark_extension_gfm_task_list_item__WEBPACK_IMPORTED_MODULE_11__.gfmTaskListItemHtml)()\n  ])\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLGFBQWEsd0RBQXdEO0FBQ3JFLGFBQWEseURBQXlEO0FBQ3RFLGFBQWEsMENBQTBDO0FBQ3ZELGFBQWEsOENBQThDO0FBQzNEOztBQUswQztBQUlPO0FBQzRCO0FBSS9CO0FBQ3NCO0FBQ0Y7QUFJbkI7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNEJBQTRCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDTztBQUNQLFNBQVMsb0ZBQWlCO0FBQzFCLElBQUksNEZBQWtCO0FBQ3RCLElBQUksNkVBQVc7QUFDZixJQUFJLHVGQUFnQjtBQUNwQixJQUFJLHVFQUFRO0FBQ1osSUFBSSx1RkFBZTtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0NBQWdDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDTztBQUNQLFNBQVMsd0ZBQXFCO0FBQzlCLElBQUksZ0dBQXNCO0FBQzFCLElBQUksaUZBQWU7QUFDbkIsSUFBSSwyRkFBb0I7QUFDeEIsSUFBSSwyRUFBWTtBQUNoQixJQUFJLG9GQUFnQjtBQUNwQixJQUFJLDRGQUFtQjtBQUN2QjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veWNfZGlyZWN0b3J5Ly4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1leHRlbnNpb24tZ2ZtL2luZGV4LmpzP2ZlZTIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstZXh0ZW5zaW9uLWdmbS1mb290bm90ZScpLkh0bWxPcHRpb25zfSBIdG1sT3B0aW9uc1xuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tc3RyaWtldGhyb3VnaCcpLk9wdGlvbnN9IE9wdGlvbnNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuRXh0ZW5zaW9ufSBFeHRlbnNpb25cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuSHRtbEV4dGVuc2lvbn0gSHRtbEV4dGVuc2lvblxuICovXG5cbmltcG9ydCB7XG4gIGNvbWJpbmVFeHRlbnNpb25zLFxuICBjb21iaW5lSHRtbEV4dGVuc2lvbnNcbn0gZnJvbSAnbWljcm9tYXJrLXV0aWwtY29tYmluZS1leHRlbnNpb25zJ1xuaW1wb3J0IHtcbiAgZ2ZtQXV0b2xpbmtMaXRlcmFsLFxuICBnZm1BdXRvbGlua0xpdGVyYWxIdG1sXG59IGZyb20gJ21pY3JvbWFyay1leHRlbnNpb24tZ2ZtLWF1dG9saW5rLWxpdGVyYWwnXG5pbXBvcnQge2dmbUZvb3Rub3RlLCBnZm1Gb290bm90ZUh0bWx9IGZyb20gJ21pY3JvbWFyay1leHRlbnNpb24tZ2ZtLWZvb3Rub3RlJ1xuaW1wb3J0IHtcbiAgZ2ZtU3RyaWtldGhyb3VnaCxcbiAgZ2ZtU3RyaWtldGhyb3VnaEh0bWxcbn0gZnJvbSAnbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tc3RyaWtldGhyb3VnaCdcbmltcG9ydCB7Z2ZtVGFibGUsIGdmbVRhYmxlSHRtbH0gZnJvbSAnbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tdGFibGUnXG5pbXBvcnQge2dmbVRhZ2ZpbHRlckh0bWx9IGZyb20gJ21pY3JvbWFyay1leHRlbnNpb24tZ2ZtLXRhZ2ZpbHRlcidcbmltcG9ydCB7XG4gIGdmbVRhc2tMaXN0SXRlbSxcbiAgZ2ZtVGFza0xpc3RJdGVtSHRtbFxufSBmcm9tICdtaWNyb21hcmstZXh0ZW5zaW9uLWdmbS10YXNrLWxpc3QtaXRlbSdcblxuLyoqXG4gKiBDcmVhdGUgYW4gZXh0ZW5zaW9uIGZvciBgbWljcm9tYXJrYCB0byBlbmFibGUgR0ZNIHN5bnRheC5cbiAqXG4gKiBAcGFyYW0ge09wdGlvbnMgfCBudWxsIHwgdW5kZWZpbmVkfSBbb3B0aW9uc11cbiAqICAgQ29uZmlndXJhdGlvbiAob3B0aW9uYWwpLlxuICpcbiAqICAgUGFzc2VkIHRvIGBtaWNyb21hcmstZXh0ZW5zLWdmbS1zdHJpa2V0aHJvdWdoYC5cbiAqIEByZXR1cm5zIHtFeHRlbnNpb259XG4gKiAgIEV4dGVuc2lvbiBmb3IgYG1pY3JvbWFya2AgdGhhdCBjYW4gYmUgcGFzc2VkIGluIGBleHRlbnNpb25zYCB0byBlbmFibGUgR0ZNXG4gKiAgIHN5bnRheC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdmbShvcHRpb25zKSB7XG4gIHJldHVybiBjb21iaW5lRXh0ZW5zaW9ucyhbXG4gICAgZ2ZtQXV0b2xpbmtMaXRlcmFsKCksXG4gICAgZ2ZtRm9vdG5vdGUoKSxcbiAgICBnZm1TdHJpa2V0aHJvdWdoKG9wdGlvbnMpLFxuICAgIGdmbVRhYmxlKCksXG4gICAgZ2ZtVGFza0xpc3RJdGVtKClcbiAgXSlcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gZXh0ZW5zaW9uIGZvciBgbWljcm9tYXJrYCB0byBzdXBwb3J0IEdGTSB3aGVuIHNlcmlhbGl6aW5nIHRvIEhUTUwuXG4gKlxuICogQHBhcmFtIHtIdG1sT3B0aW9ucyB8IG51bGwgfCB1bmRlZmluZWR9IFtvcHRpb25zXVxuICogICBDb25maWd1cmF0aW9uIChvcHRpb25hbCkuXG4gKlxuICogICBQYXNzZWQgdG8gYG1pY3JvbWFyay1leHRlbnMtZ2ZtLWZvb3Rub3RlYC5cbiAqIEByZXR1cm5zIHtIdG1sRXh0ZW5zaW9ufVxuICogICBFeHRlbnNpb24gZm9yIGBtaWNyb21hcmtgIHRoYXQgY2FuIGJlIHBhc3NlZCBpbiBgaHRtbEV4dGVuc2lvbnNgIHRvXG4gKiAgIHN1cHBvcnQgR0ZNIHdoZW4gc2VyaWFsaXppbmcgdG8gSFRNTC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdmbUh0bWwob3B0aW9ucykge1xuICByZXR1cm4gY29tYmluZUh0bWxFeHRlbnNpb25zKFtcbiAgICBnZm1BdXRvbGlua0xpdGVyYWxIdG1sKCksXG4gICAgZ2ZtRm9vdG5vdGVIdG1sKG9wdGlvbnMpLFxuICAgIGdmbVN0cmlrZXRocm91Z2hIdG1sKCksXG4gICAgZ2ZtVGFibGVIdG1sKCksXG4gICAgZ2ZtVGFnZmlsdGVySHRtbCgpLFxuICAgIGdmbVRhc2tMaXN0SXRlbUh0bWwoKVxuICBdKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-extension-gfm/index.js\n");

/***/ })

};
;