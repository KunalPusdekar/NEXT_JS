"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/groq";
exports.ids = ["vendor-chunks/groq"];
exports.modules = {

/***/ "(action-browser)/./node_modules/groq/lib/groq.js":
/*!***************************************!*\
  !*** ./node_modules/groq/lib/groq.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ groq),\n/* harmony export */   defineQuery: () => (/* binding */ defineQuery)\n/* harmony export */ });\nfunction defineQuery(query) {\n  return query;\n}\nfunction groq(strings, ...keys) {\n  const lastIndex = strings.length - 1;\n  return strings.slice(0, lastIndex).reduce((acc, str, i) => acc + str + keys[i], \"\") + strings[lastIndex];\n}\n\n//# sourceMappingURL=groq.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9ncm9xL2xpYi9ncm9xLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veWNfZGlyZWN0b3J5Ly4vbm9kZV9tb2R1bGVzL2dyb3EvbGliL2dyb3EuanM/MWUyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBkZWZpbmVRdWVyeShxdWVyeSkge1xuICByZXR1cm4gcXVlcnk7XG59XG5mdW5jdGlvbiBncm9xKHN0cmluZ3MsIC4uLmtleXMpIHtcbiAgY29uc3QgbGFzdEluZGV4ID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICByZXR1cm4gc3RyaW5ncy5zbGljZSgwLCBsYXN0SW5kZXgpLnJlZHVjZSgoYWNjLCBzdHIsIGkpID0+IGFjYyArIHN0ciArIGtleXNbaV0sIFwiXCIpICsgc3RyaW5nc1tsYXN0SW5kZXhdO1xufVxuZXhwb3J0IHtcbiAgZ3JvcSBhcyBkZWZhdWx0LFxuICBkZWZpbmVRdWVyeVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdyb3EuanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/groq/lib/groq.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/groq/lib/groq.js":
/*!***************************************!*\
  !*** ./node_modules/groq/lib/groq.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ groq),\n/* harmony export */   defineQuery: () => (/* binding */ defineQuery)\n/* harmony export */ });\nfunction defineQuery(query) {\n  return query;\n}\nfunction groq(strings, ...keys) {\n  const lastIndex = strings.length - 1;\n  return strings.slice(0, lastIndex).reduce((acc, str, i) => acc + str + keys[i], \"\") + strings[lastIndex];\n}\n\n//# sourceMappingURL=groq.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZ3JvcS9saWIvZ3JvcS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3ljX2RpcmVjdG9yeS8uL25vZGVfbW9kdWxlcy9ncm9xL2xpYi9ncm9xLmpzPzRmNTQiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZGVmaW5lUXVlcnkocXVlcnkpIHtcbiAgcmV0dXJuIHF1ZXJ5O1xufVxuZnVuY3Rpb24gZ3JvcShzdHJpbmdzLCAuLi5rZXlzKSB7XG4gIGNvbnN0IGxhc3RJbmRleCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgcmV0dXJuIHN0cmluZ3Muc2xpY2UoMCwgbGFzdEluZGV4KS5yZWR1Y2UoKGFjYywgc3RyLCBpKSA9PiBhY2MgKyBzdHIgKyBrZXlzW2ldLCBcIlwiKSArIHN0cmluZ3NbbGFzdEluZGV4XTtcbn1cbmV4cG9ydCB7XG4gIGdyb3EgYXMgZGVmYXVsdCxcbiAgZGVmaW5lUXVlcnlcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ncm9xLmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/groq/lib/groq.js\n");

/***/ })

};
;