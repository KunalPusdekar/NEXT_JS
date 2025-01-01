"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/devlop";
exports.ids = ["vendor-chunks/devlop"];
exports.modules = {

/***/ "(ssr)/./node_modules/devlop/lib/development.js":
/*!************************************************!*\
  !*** ./node_modules/devlop/lib/development.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deprecate: () => (/* binding */ deprecate),\n/* harmony export */   equal: () => (/* binding */ equal),\n/* harmony export */   ok: () => (/* binding */ ok),\n/* harmony export */   unreachable: () => (/* binding */ unreachable)\n/* harmony export */ });\n/* harmony import */ var dequal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dequal */ \"(ssr)/./node_modules/dequal/dist/index.mjs\");\n\n\n/**\n * @type {Set<string>}\n */\nconst codesWarned = new Set()\n\nclass AssertionError extends Error {\n  name = /** @type {const} */ ('Assertion')\n  code = /** @type {const} */ ('ERR_ASSERTION')\n\n  /**\n   * Create an assertion error.\n   *\n   * @param {string} message\n   *   Message explaining error.\n   * @param {unknown} actual\n   *   Value.\n   * @param {unknown} expected\n   *   Baseline.\n   * @param {string} operator\n   *   Name of equality operation.\n   * @param {boolean} generated\n   *   Whether `message` is a custom message or not\n   * @returns\n   *   Instance.\n   */\n  // eslint-disable-next-line max-params\n  constructor(message, actual, expected, operator, generated) {\n    super(message)\n\n    if (Error.captureStackTrace) {\n      Error.captureStackTrace(this, this.constructor)\n    }\n\n    /**\n     * @type {unknown}\n     */\n    this.actual = actual\n\n    /**\n     * @type {unknown}\n     */\n    this.expected = expected\n\n    /**\n     * @type {boolean}\n     */\n    this.generated = generated\n\n    /**\n     * @type {string}\n     */\n    this.operator = operator\n  }\n}\n\nclass DeprecationError extends Error {\n  name = /** @type {const} */ ('DeprecationWarning')\n\n  /**\n   * Create a deprecation message.\n   *\n   * @param {string} message\n   *   Message explaining deprecation.\n   * @param {string | undefined} code\n   *   Deprecation identifier; deprecation messages will be generated only once per code.\n   * @returns\n   *   Instance.\n   */\n  constructor(message, code) {\n    super(message)\n\n    /**\n     * @type {string | undefined}\n     */\n    this.code = code\n  }\n}\n\n/**\n * Wrap a function or class to show a deprecation message when first called.\n *\n * > 👉 **Important**: only shows a message when the `development` condition is\n * > used, does nothing in production.\n *\n * When the resulting wrapped `fn` is called, emits a warning once to\n * `console.error` (`stderr`).\n * If a code is given, one warning message will be emitted in total per code.\n *\n * @template {Function} T\n *   Function or class kind.\n * @param {T} fn\n *   Function or class.\n * @param {string} message\n *   Message explaining deprecation.\n * @param {string | null | undefined} [code]\n *   Deprecation identifier (optional); deprecation messages will be generated\n *   only once per code.\n * @returns {T}\n *   Wrapped `fn`.\n */\nfunction deprecate(fn, message, code) {\n  let warned = false\n\n  // The wrapper will keep the same prototype as fn to maintain prototype chain\n  Object.setPrototypeOf(deprecated, fn)\n\n  // @ts-expect-error: it’s perfect, typescript…\n  return deprecated\n\n  /**\n   * @this {unknown}\n   * @param  {...Array<unknown>} args\n   * @returns {unknown}\n   */\n  function deprecated(...args) {\n    if (!warned) {\n      warned = true\n\n      if (typeof code === 'string' && codesWarned.has(code)) {\n        // Empty.\n      } else {\n        console.error(new DeprecationError(message, code || undefined))\n\n        if (typeof code === 'string') codesWarned.add(code)\n      }\n    }\n\n    return new.target\n      ? Reflect.construct(fn, args, new.target)\n      : Reflect.apply(fn, this, args)\n  }\n}\n\n/**\n * Assert deep strict equivalence.\n *\n * > 👉 **Important**: only asserts when the `development` condition is used,\n * > does nothing in production.\n *\n * @template {unknown} T\n *   Expected kind.\n * @param {unknown} actual\n *   Value.\n * @param {T} expected\n *   Baseline.\n * @param {Error | string | null | undefined} [message]\n *   Message for assertion error (default: `'Expected values to be deeply equal'`).\n * @returns {asserts actual is T}\n *   Nothing; throws when `actual` is not deep strict equal to `expected`.\n * @throws {AssertionError}\n *   Throws when `actual` is not deep strict equal to `expected`.\n */\nfunction equal(actual, expected, message) {\n  assert(\n    (0,dequal__WEBPACK_IMPORTED_MODULE_0__.dequal)(actual, expected),\n    actual,\n    expected,\n    'equal',\n    'Expected values to be deeply equal',\n    message\n  )\n}\n\n/**\n * Assert if `value` is truthy.\n *\n * > 👉 **Important**: only asserts when the `development` condition is used,\n * > does nothing in production.\n *\n * @param {unknown} value\n *   Value to assert.\n * @param {Error | string | null | undefined} [message]\n *   Message for assertion error (default: `'Expected value to be truthy'`).\n * @returns {asserts value}\n *   Nothing; throws when `value` is falsey.\n * @throws {AssertionError}\n *   Throws when `value` is falsey.\n */\nfunction ok(value, message) {\n  assert(\n    Boolean(value),\n    false,\n    true,\n    'ok',\n    'Expected value to be truthy',\n    message\n  )\n}\n\n/**\n * Assert that a code path never happens.\n *\n * > 👉 **Important**: only asserts when the `development` condition is used,\n * > does nothing in production.\n *\n * @param {Error | string | null | undefined} [message]\n *   Message for assertion error (default: `'Unreachable'`).\n * @returns {never}\n *   Nothing; always throws.\n * @throws {AssertionError}\n *   Throws when `value` is falsey.\n */\nfunction unreachable(message) {\n  assert(false, false, true, 'ok', 'Unreachable', message)\n}\n\n/**\n * @param {boolean} bool\n *   Whether to skip this operation.\n * @param {unknown} actual\n *   Actual value.\n * @param {unknown} expected\n *   Expected value.\n * @param {string} operator\n *   Operator.\n * @param {string} defaultMessage\n *   Default message for operation.\n * @param {Error | string | null | undefined} userMessage\n *   User-provided message.\n * @returns {asserts bool}\n *   Nothing; throws when falsey.\n */\n// eslint-disable-next-line max-params\nfunction assert(bool, actual, expected, operator, defaultMessage, userMessage) {\n  if (!bool) {\n    throw userMessage instanceof Error\n      ? userMessage\n      : new AssertionError(\n          userMessage || defaultMessage,\n          actual,\n          expected,\n          operator,\n          !userMessage\n        )\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGV2bG9wL2xpYi9kZXZlbG9wbWVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE2Qjs7QUFFN0I7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCLG9CQUFvQixPQUFPOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLE9BQU87O0FBRTNCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBLGFBQWEsb0JBQW9CO0FBQ2pDLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxVQUFVO0FBQ3hCO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLDJCQUEyQjtBQUN0Qyx3Q0FBd0M7QUFDeEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaLGNBQWMsbUJBQW1CO0FBQ2pDLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsV0FBVyxtQ0FBbUM7QUFDOUM7QUFDQSxhQUFhO0FBQ2IsY0FBYztBQUNkLFlBQVk7QUFDWjtBQUNBO0FBQ087QUFDUDtBQUNBLElBQUksOENBQU07QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLG1DQUFtQztBQUM5QztBQUNBLGFBQWE7QUFDYixjQUFjO0FBQ2QsWUFBWTtBQUNaO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1DQUFtQztBQUM5QztBQUNBLGFBQWE7QUFDYixjQUFjO0FBQ2QsWUFBWTtBQUNaO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLG1DQUFtQztBQUM5QztBQUNBLGFBQWE7QUFDYixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veWNfZGlyZWN0b3J5Ly4vbm9kZV9tb2R1bGVzL2RldmxvcC9saWIvZGV2ZWxvcG1lbnQuanM/NWNjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2RlcXVhbH0gZnJvbSAnZGVxdWFsJ1xuXG4vKipcbiAqIEB0eXBlIHtTZXQ8c3RyaW5nPn1cbiAqL1xuY29uc3QgY29kZXNXYXJuZWQgPSBuZXcgU2V0KClcblxuY2xhc3MgQXNzZXJ0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIG5hbWUgPSAvKiogQHR5cGUge2NvbnN0fSAqLyAoJ0Fzc2VydGlvbicpXG4gIGNvZGUgPSAvKiogQHR5cGUge2NvbnN0fSAqLyAoJ0VSUl9BU1NFUlRJT04nKVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gYXNzZXJ0aW9uIGVycm9yLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICAgKiAgIE1lc3NhZ2UgZXhwbGFpbmluZyBlcnJvci5cbiAgICogQHBhcmFtIHt1bmtub3dufSBhY3R1YWxcbiAgICogICBWYWx1ZS5cbiAgICogQHBhcmFtIHt1bmtub3dufSBleHBlY3RlZFxuICAgKiAgIEJhc2VsaW5lLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3BlcmF0b3JcbiAgICogICBOYW1lIG9mIGVxdWFsaXR5IG9wZXJhdGlvbi5cbiAgICogQHBhcmFtIHtib29sZWFufSBnZW5lcmF0ZWRcbiAgICogICBXaGV0aGVyIGBtZXNzYWdlYCBpcyBhIGN1c3RvbSBtZXNzYWdlIG9yIG5vdFxuICAgKiBAcmV0dXJuc1xuICAgKiAgIEluc3RhbmNlLlxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1wYXJhbXNcbiAgY29uc3RydWN0b3IobWVzc2FnZSwgYWN0dWFsLCBleHBlY3RlZCwgb3BlcmF0b3IsIGdlbmVyYXRlZCkge1xuICAgIHN1cGVyKG1lc3NhZ2UpXG5cbiAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge3Vua25vd259XG4gICAgICovXG4gICAgdGhpcy5hY3R1YWwgPSBhY3R1YWxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHt1bmtub3dufVxuICAgICAqL1xuICAgIHRoaXMuZXhwZWN0ZWQgPSBleHBlY3RlZFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5nZW5lcmF0ZWQgPSBnZW5lcmF0ZWRcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yXG4gIH1cbn1cblxuY2xhc3MgRGVwcmVjYXRpb25FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgbmFtZSA9IC8qKiBAdHlwZSB7Y29uc3R9ICovICgnRGVwcmVjYXRpb25XYXJuaW5nJylcblxuICAvKipcbiAgICogQ3JlYXRlIGEgZGVwcmVjYXRpb24gbWVzc2FnZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAgICogICBNZXNzYWdlIGV4cGxhaW5pbmcgZGVwcmVjYXRpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgdW5kZWZpbmVkfSBjb2RlXG4gICAqICAgRGVwcmVjYXRpb24gaWRlbnRpZmllcjsgZGVwcmVjYXRpb24gbWVzc2FnZXMgd2lsbCBiZSBnZW5lcmF0ZWQgb25seSBvbmNlIHBlciBjb2RlLlxuICAgKiBAcmV0dXJuc1xuICAgKiAgIEluc3RhbmNlLlxuICAgKi9cbiAgY29uc3RydWN0b3IobWVzc2FnZSwgY29kZSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7c3RyaW5nIHwgdW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHRoaXMuY29kZSA9IGNvZGVcbiAgfVxufVxuXG4vKipcbiAqIFdyYXAgYSBmdW5jdGlvbiBvciBjbGFzcyB0byBzaG93IGEgZGVwcmVjYXRpb24gbWVzc2FnZSB3aGVuIGZpcnN0IGNhbGxlZC5cbiAqXG4gKiA+IPCfkYkgKipJbXBvcnRhbnQqKjogb25seSBzaG93cyBhIG1lc3NhZ2Ugd2hlbiB0aGUgYGRldmVsb3BtZW50YCBjb25kaXRpb24gaXNcbiAqID4gdXNlZCwgZG9lcyBub3RoaW5nIGluIHByb2R1Y3Rpb24uXG4gKlxuICogV2hlbiB0aGUgcmVzdWx0aW5nIHdyYXBwZWQgYGZuYCBpcyBjYWxsZWQsIGVtaXRzIGEgd2FybmluZyBvbmNlIHRvXG4gKiBgY29uc29sZS5lcnJvcmAgKGBzdGRlcnJgKS5cbiAqIElmIGEgY29kZSBpcyBnaXZlbiwgb25lIHdhcm5pbmcgbWVzc2FnZSB3aWxsIGJlIGVtaXR0ZWQgaW4gdG90YWwgcGVyIGNvZGUuXG4gKlxuICogQHRlbXBsYXRlIHtGdW5jdGlvbn0gVFxuICogICBGdW5jdGlvbiBvciBjbGFzcyBraW5kLlxuICogQHBhcmFtIHtUfSBmblxuICogICBGdW5jdGlvbiBvciBjbGFzcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gKiAgIE1lc3NhZ2UgZXhwbGFpbmluZyBkZXByZWNhdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvZGVdXG4gKiAgIERlcHJlY2F0aW9uIGlkZW50aWZpZXIgKG9wdGlvbmFsKTsgZGVwcmVjYXRpb24gbWVzc2FnZXMgd2lsbCBiZSBnZW5lcmF0ZWRcbiAqICAgb25seSBvbmNlIHBlciBjb2RlLlxuICogQHJldHVybnMge1R9XG4gKiAgIFdyYXBwZWQgYGZuYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlcHJlY2F0ZShmbiwgbWVzc2FnZSwgY29kZSkge1xuICBsZXQgd2FybmVkID0gZmFsc2VcblxuICAvLyBUaGUgd3JhcHBlciB3aWxsIGtlZXAgdGhlIHNhbWUgcHJvdG90eXBlIGFzIGZuIHRvIG1haW50YWluIHByb3RvdHlwZSBjaGFpblxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZGVwcmVjYXRlZCwgZm4pXG5cbiAgLy8gQHRzLWV4cGVjdC1lcnJvcjogaXTigJlzIHBlcmZlY3QsIHR5cGVzY3JpcHTigKZcbiAgcmV0dXJuIGRlcHJlY2F0ZWRcblxuICAvKipcbiAgICogQHRoaXMge3Vua25vd259XG4gICAqIEBwYXJhbSAgey4uLkFycmF5PHVua25vd24+fSBhcmdzXG4gICAqIEByZXR1cm5zIHt1bmtub3dufVxuICAgKi9cbiAgZnVuY3Rpb24gZGVwcmVjYXRlZCguLi5hcmdzKSB7XG4gICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgIHdhcm5lZCA9IHRydWVcblxuICAgICAgaWYgKHR5cGVvZiBjb2RlID09PSAnc3RyaW5nJyAmJiBjb2Rlc1dhcm5lZC5oYXMoY29kZSkpIHtcbiAgICAgICAgLy8gRW1wdHkuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKG5ldyBEZXByZWNhdGlvbkVycm9yKG1lc3NhZ2UsIGNvZGUgfHwgdW5kZWZpbmVkKSlcblxuICAgICAgICBpZiAodHlwZW9mIGNvZGUgPT09ICdzdHJpbmcnKSBjb2Rlc1dhcm5lZC5hZGQoY29kZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3LnRhcmdldFxuICAgICAgPyBSZWZsZWN0LmNvbnN0cnVjdChmbiwgYXJncywgbmV3LnRhcmdldClcbiAgICAgIDogUmVmbGVjdC5hcHBseShmbiwgdGhpcywgYXJncylcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydCBkZWVwIHN0cmljdCBlcXVpdmFsZW5jZS5cbiAqXG4gKiA+IPCfkYkgKipJbXBvcnRhbnQqKjogb25seSBhc3NlcnRzIHdoZW4gdGhlIGBkZXZlbG9wbWVudGAgY29uZGl0aW9uIGlzIHVzZWQsXG4gKiA+IGRvZXMgbm90aGluZyBpbiBwcm9kdWN0aW9uLlxuICpcbiAqIEB0ZW1wbGF0ZSB7dW5rbm93bn0gVFxuICogICBFeHBlY3RlZCBraW5kLlxuICogQHBhcmFtIHt1bmtub3dufSBhY3R1YWxcbiAqICAgVmFsdWUuXG4gKiBAcGFyYW0ge1R9IGV4cGVjdGVkXG4gKiAgIEJhc2VsaW5lLlxuICogQHBhcmFtIHtFcnJvciB8IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWR9IFttZXNzYWdlXVxuICogICBNZXNzYWdlIGZvciBhc3NlcnRpb24gZXJyb3IgKGRlZmF1bHQ6IGAnRXhwZWN0ZWQgdmFsdWVzIHRvIGJlIGRlZXBseSBlcXVhbCdgKS5cbiAqIEByZXR1cm5zIHthc3NlcnRzIGFjdHVhbCBpcyBUfVxuICogICBOb3RoaW5nOyB0aHJvd3Mgd2hlbiBgYWN0dWFsYCBpcyBub3QgZGVlcCBzdHJpY3QgZXF1YWwgdG8gYGV4cGVjdGVkYC5cbiAqIEB0aHJvd3Mge0Fzc2VydGlvbkVycm9yfVxuICogICBUaHJvd3Mgd2hlbiBgYWN0dWFsYCBpcyBub3QgZGVlcCBzdHJpY3QgZXF1YWwgdG8gYGV4cGVjdGVkYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgYXNzZXJ0KFxuICAgIGRlcXVhbChhY3R1YWwsIGV4cGVjdGVkKSxcbiAgICBhY3R1YWwsXG4gICAgZXhwZWN0ZWQsXG4gICAgJ2VxdWFsJyxcbiAgICAnRXhwZWN0ZWQgdmFsdWVzIHRvIGJlIGRlZXBseSBlcXVhbCcsXG4gICAgbWVzc2FnZVxuICApXG59XG5cbi8qKlxuICogQXNzZXJ0IGlmIGB2YWx1ZWAgaXMgdHJ1dGh5LlxuICpcbiAqID4g8J+RiSAqKkltcG9ydGFudCoqOiBvbmx5IGFzc2VydHMgd2hlbiB0aGUgYGRldmVsb3BtZW50YCBjb25kaXRpb24gaXMgdXNlZCxcbiAqID4gZG9lcyBub3RoaW5nIGluIHByb2R1Y3Rpb24uXG4gKlxuICogQHBhcmFtIHt1bmtub3dufSB2YWx1ZVxuICogICBWYWx1ZSB0byBhc3NlcnQuXG4gKiBAcGFyYW0ge0Vycm9yIHwgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZH0gW21lc3NhZ2VdXG4gKiAgIE1lc3NhZ2UgZm9yIGFzc2VydGlvbiBlcnJvciAoZGVmYXVsdDogYCdFeHBlY3RlZCB2YWx1ZSB0byBiZSB0cnV0aHknYCkuXG4gKiBAcmV0dXJucyB7YXNzZXJ0cyB2YWx1ZX1cbiAqICAgTm90aGluZzsgdGhyb3dzIHdoZW4gYHZhbHVlYCBpcyBmYWxzZXkuXG4gKiBAdGhyb3dzIHtBc3NlcnRpb25FcnJvcn1cbiAqICAgVGhyb3dzIHdoZW4gYHZhbHVlYCBpcyBmYWxzZXkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvayh2YWx1ZSwgbWVzc2FnZSkge1xuICBhc3NlcnQoXG4gICAgQm9vbGVhbih2YWx1ZSksXG4gICAgZmFsc2UsXG4gICAgdHJ1ZSxcbiAgICAnb2snLFxuICAgICdFeHBlY3RlZCB2YWx1ZSB0byBiZSB0cnV0aHknLFxuICAgIG1lc3NhZ2VcbiAgKVxufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IGEgY29kZSBwYXRoIG5ldmVyIGhhcHBlbnMuXG4gKlxuICogPiDwn5GJICoqSW1wb3J0YW50Kio6IG9ubHkgYXNzZXJ0cyB3aGVuIHRoZSBgZGV2ZWxvcG1lbnRgIGNvbmRpdGlvbiBpcyB1c2VkLFxuICogPiBkb2VzIG5vdGhpbmcgaW4gcHJvZHVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yIHwgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZH0gW21lc3NhZ2VdXG4gKiAgIE1lc3NhZ2UgZm9yIGFzc2VydGlvbiBlcnJvciAoZGVmYXVsdDogYCdVbnJlYWNoYWJsZSdgKS5cbiAqIEByZXR1cm5zIHtuZXZlcn1cbiAqICAgTm90aGluZzsgYWx3YXlzIHRocm93cy5cbiAqIEB0aHJvd3Mge0Fzc2VydGlvbkVycm9yfVxuICogICBUaHJvd3Mgd2hlbiBgdmFsdWVgIGlzIGZhbHNleS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVucmVhY2hhYmxlKG1lc3NhZ2UpIHtcbiAgYXNzZXJ0KGZhbHNlLCBmYWxzZSwgdHJ1ZSwgJ29rJywgJ1VucmVhY2hhYmxlJywgbWVzc2FnZSlcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJvb2xcbiAqICAgV2hldGhlciB0byBza2lwIHRoaXMgb3BlcmF0aW9uLlxuICogQHBhcmFtIHt1bmtub3dufSBhY3R1YWxcbiAqICAgQWN0dWFsIHZhbHVlLlxuICogQHBhcmFtIHt1bmtub3dufSBleHBlY3RlZFxuICogICBFeHBlY3RlZCB2YWx1ZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBvcGVyYXRvclxuICogICBPcGVyYXRvci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkZWZhdWx0TWVzc2FnZVxuICogICBEZWZhdWx0IG1lc3NhZ2UgZm9yIG9wZXJhdGlvbi5cbiAqIEBwYXJhbSB7RXJyb3IgfCBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkfSB1c2VyTWVzc2FnZVxuICogICBVc2VyLXByb3ZpZGVkIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7YXNzZXJ0cyBib29sfVxuICogICBOb3RoaW5nOyB0aHJvd3Mgd2hlbiBmYWxzZXkuXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG5mdW5jdGlvbiBhc3NlcnQoYm9vbCwgYWN0dWFsLCBleHBlY3RlZCwgb3BlcmF0b3IsIGRlZmF1bHRNZXNzYWdlLCB1c2VyTWVzc2FnZSkge1xuICBpZiAoIWJvb2wpIHtcbiAgICB0aHJvdyB1c2VyTWVzc2FnZSBpbnN0YW5jZW9mIEVycm9yXG4gICAgICA/IHVzZXJNZXNzYWdlXG4gICAgICA6IG5ldyBBc3NlcnRpb25FcnJvcihcbiAgICAgICAgICB1c2VyTWVzc2FnZSB8fCBkZWZhdWx0TWVzc2FnZSxcbiAgICAgICAgICBhY3R1YWwsXG4gICAgICAgICAgZXhwZWN0ZWQsXG4gICAgICAgICAgb3BlcmF0b3IsXG4gICAgICAgICAgIXVzZXJNZXNzYWdlXG4gICAgICAgIClcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/devlop/lib/development.js\n");

/***/ })

};
;