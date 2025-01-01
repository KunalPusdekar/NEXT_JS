"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-gfm-task-list-item";
exports.ids = ["vendor-chunks/mdast-util-gfm-task-list-item"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-gfm-task-list-item/lib/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-task-list-item/lib/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmTaskListItemFromMarkdown: () => (/* binding */ gfmTaskListItemFromMarkdown),\n/* harmony export */   gfmTaskListItemToMarkdown: () => (/* binding */ gfmTaskListItemToMarkdown)\n/* harmony export */ });\n/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devlop */ \"(ssr)/./node_modules/devlop/lib/development.js\");\n/* harmony import */ var mdast_util_to_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdast-util-to-markdown */ \"(ssr)/./node_modules/mdast-util-to-markdown/lib/handle/index.js\");\n/**\n * @typedef {import('mdast').ListItem} ListItem\n * @typedef {import('mdast').Paragraph} Paragraph\n * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext\n * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension\n * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle\n * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension\n * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle\n */\n\n\n\n\n/**\n * Create an extension for `mdast-util-from-markdown` to enable GFM task\n * list items in markdown.\n *\n * @returns {FromMarkdownExtension}\n *   Extension for `mdast-util-from-markdown` to enable GFM task list items.\n */\nfunction gfmTaskListItemFromMarkdown() {\n  return {\n    exit: {\n      taskListCheckValueChecked: exitCheck,\n      taskListCheckValueUnchecked: exitCheck,\n      paragraph: exitParagraphWithTaskListItem\n    }\n  }\n}\n\n/**\n * Create an extension for `mdast-util-to-markdown` to enable GFM task list\n * items in markdown.\n *\n * @returns {ToMarkdownExtension}\n *   Extension for `mdast-util-to-markdown` to enable GFM task list items.\n */\nfunction gfmTaskListItemToMarkdown() {\n  return {\n    unsafe: [{atBreak: true, character: '-', after: '[:|-]'}],\n    handlers: {listItem: listItemWithTaskListItem}\n  }\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitCheck(token) {\n  // We’re always in a paragraph, in a list item.\n  const node = this.stack[this.stack.length - 2]\n  ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(node.type === 'listItem')\n  node.checked = token.type === 'taskListCheckValueChecked'\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitParagraphWithTaskListItem(token) {\n  const parent = this.stack[this.stack.length - 2]\n\n  if (\n    parent &&\n    parent.type === 'listItem' &&\n    typeof parent.checked === 'boolean'\n  ) {\n    const node = this.stack[this.stack.length - 1]\n    ;(0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(node.type === 'paragraph')\n    const head = node.children[0]\n\n    if (head && head.type === 'text') {\n      const siblings = parent.children\n      let index = -1\n      /** @type {Paragraph | undefined} */\n      let firstParaghraph\n\n      while (++index < siblings.length) {\n        const sibling = siblings[index]\n        if (sibling.type === 'paragraph') {\n          firstParaghraph = sibling\n          break\n        }\n      }\n\n      if (firstParaghraph === node) {\n        // Must start with a space or a tab.\n        head.value = head.value.slice(1)\n\n        if (head.value.length === 0) {\n          node.children.shift()\n        } else if (\n          node.position &&\n          head.position &&\n          typeof head.position.start.offset === 'number'\n        ) {\n          head.position.start.column++\n          head.position.start.offset++\n          node.position.start = Object.assign({}, head.position.start)\n        }\n      }\n    }\n  }\n\n  this.exit(token)\n}\n\n/**\n * @type {ToMarkdownHandle}\n * @param {ListItem} node\n */\nfunction listItemWithTaskListItem(node, parent, state, info) {\n  const head = node.children[0]\n  const checkable =\n    typeof node.checked === 'boolean' && head && head.type === 'paragraph'\n  const checkbox = '[' + (node.checked ? 'x' : ' ') + '] '\n  const tracker = state.createTracker(info)\n\n  if (checkable) {\n    tracker.move(checkbox)\n  }\n\n  let value = mdast_util_to_markdown__WEBPACK_IMPORTED_MODULE_1__.handle.listItem(node, parent, state, {\n    ...info,\n    ...tracker.current()\n  })\n\n  if (checkable) {\n    value = value.replace(/^(?:[*+-]|\\d+\\.)([\\r\\n]| {1,3})/, check)\n  }\n\n  return value\n\n  /**\n   * @param {string} $0\n   * @returns {string}\n   */\n  function check($0) {\n    return $0 + checkbox\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tdGFzay1saXN0LWl0ZW0vbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBLGFBQWEsMEJBQTBCO0FBQ3ZDLGFBQWEsMkJBQTJCO0FBQ3hDLGFBQWEsbURBQW1EO0FBQ2hFLGFBQWEsOENBQThDO0FBQzNELGFBQWEsMkNBQTJDO0FBQ3hELGFBQWEsMENBQTBDO0FBQ3ZELGFBQWEseUNBQXlDO0FBQ3REOztBQUVtQztBQUNtQjs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUDtBQUNBLGNBQWMsOENBQThDO0FBQzVELGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkNBQU07QUFDUjtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyQ0FBTTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1QkFBdUI7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLDBEQUFlO0FBQzdCO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EscURBQXFELElBQUk7QUFDekQ7O0FBRUE7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95Y19kaXJlY3RvcnkvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tdGFzay1saXN0LWl0ZW0vbGliL2luZGV4LmpzPzMzZDgiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLkxpc3RJdGVtfSBMaXN0SXRlbVxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5QYXJhZ3JhcGh9IFBhcmFncmFwaFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duJykuQ29tcGlsZUNvbnRleHR9IENvbXBpbGVDb250ZXh0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nKS5FeHRlbnNpb259IEZyb21NYXJrZG93bkV4dGVuc2lvblxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duJykuSGFuZGxlfSBGcm9tTWFya2Rvd25IYW5kbGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24nKS5PcHRpb25zfSBUb01hcmtkb3duRXh0ZW5zaW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLXRvLW1hcmtkb3duJykuSGFuZGxlfSBUb01hcmtkb3duSGFuZGxlXG4gKi9cblxuaW1wb3J0IHtvayBhcyBhc3NlcnR9IGZyb20gJ2RldmxvcCdcbmltcG9ydCB7ZGVmYXVsdEhhbmRsZXJzfSBmcm9tICdtZGFzdC11dGlsLXRvLW1hcmtkb3duJ1xuXG4vKipcbiAqIENyZWF0ZSBhbiBleHRlbnNpb24gZm9yIGBtZGFzdC11dGlsLWZyb20tbWFya2Rvd25gIHRvIGVuYWJsZSBHRk0gdGFza1xuICogbGlzdCBpdGVtcyBpbiBtYXJrZG93bi5cbiAqXG4gKiBAcmV0dXJucyB7RnJvbU1hcmtkb3duRXh0ZW5zaW9ufVxuICogICBFeHRlbnNpb24gZm9yIGBtZGFzdC11dGlsLWZyb20tbWFya2Rvd25gIHRvIGVuYWJsZSBHRk0gdGFzayBsaXN0IGl0ZW1zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2ZtVGFza0xpc3RJdGVtRnJvbU1hcmtkb3duKCkge1xuICByZXR1cm4ge1xuICAgIGV4aXQ6IHtcbiAgICAgIHRhc2tMaXN0Q2hlY2tWYWx1ZUNoZWNrZWQ6IGV4aXRDaGVjayxcbiAgICAgIHRhc2tMaXN0Q2hlY2tWYWx1ZVVuY2hlY2tlZDogZXhpdENoZWNrLFxuICAgICAgcGFyYWdyYXBoOiBleGl0UGFyYWdyYXBoV2l0aFRhc2tMaXN0SXRlbVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBleHRlbnNpb24gZm9yIGBtZGFzdC11dGlsLXRvLW1hcmtkb3duYCB0byBlbmFibGUgR0ZNIHRhc2sgbGlzdFxuICogaXRlbXMgaW4gbWFya2Rvd24uXG4gKlxuICogQHJldHVybnMge1RvTWFya2Rvd25FeHRlbnNpb259XG4gKiAgIEV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtdG8tbWFya2Rvd25gIHRvIGVuYWJsZSBHRk0gdGFzayBsaXN0IGl0ZW1zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2ZtVGFza0xpc3RJdGVtVG9NYXJrZG93bigpIHtcbiAgcmV0dXJuIHtcbiAgICB1bnNhZmU6IFt7YXRCcmVhazogdHJ1ZSwgY2hhcmFjdGVyOiAnLScsIGFmdGVyOiAnWzp8LV0nfV0sXG4gICAgaGFuZGxlcnM6IHtsaXN0SXRlbTogbGlzdEl0ZW1XaXRoVGFza0xpc3RJdGVtfVxuICB9XG59XG5cbi8qKlxuICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAqL1xuZnVuY3Rpb24gZXhpdENoZWNrKHRva2VuKSB7XG4gIC8vIFdl4oCZcmUgYWx3YXlzIGluIGEgcGFyYWdyYXBoLCBpbiBhIGxpc3QgaXRlbS5cbiAgY29uc3Qgbm9kZSA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAyXVxuICBhc3NlcnQobm9kZS50eXBlID09PSAnbGlzdEl0ZW0nKVxuICBub2RlLmNoZWNrZWQgPSB0b2tlbi50eXBlID09PSAndGFza0xpc3RDaGVja1ZhbHVlQ2hlY2tlZCdcbn1cblxuLyoqXG4gKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICovXG5mdW5jdGlvbiBleGl0UGFyYWdyYXBoV2l0aFRhc2tMaXN0SXRlbSh0b2tlbikge1xuICBjb25zdCBwYXJlbnQgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMl1cblxuICBpZiAoXG4gICAgcGFyZW50ICYmXG4gICAgcGFyZW50LnR5cGUgPT09ICdsaXN0SXRlbScgJiZcbiAgICB0eXBlb2YgcGFyZW50LmNoZWNrZWQgPT09ICdib29sZWFuJ1xuICApIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdXG4gICAgYXNzZXJ0KG5vZGUudHlwZSA9PT0gJ3BhcmFncmFwaCcpXG4gICAgY29uc3QgaGVhZCA9IG5vZGUuY2hpbGRyZW5bMF1cblxuICAgIGlmIChoZWFkICYmIGhlYWQudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICBjb25zdCBzaWJsaW5ncyA9IHBhcmVudC5jaGlsZHJlblxuICAgICAgbGV0IGluZGV4ID0gLTFcbiAgICAgIC8qKiBAdHlwZSB7UGFyYWdyYXBoIHwgdW5kZWZpbmVkfSAqL1xuICAgICAgbGV0IGZpcnN0UGFyYWdocmFwaFxuXG4gICAgICB3aGlsZSAoKytpbmRleCA8IHNpYmxpbmdzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBzaWJsaW5nID0gc2libGluZ3NbaW5kZXhdXG4gICAgICAgIGlmIChzaWJsaW5nLnR5cGUgPT09ICdwYXJhZ3JhcGgnKSB7XG4gICAgICAgICAgZmlyc3RQYXJhZ2hyYXBoID0gc2libGluZ1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpcnN0UGFyYWdocmFwaCA9PT0gbm9kZSkge1xuICAgICAgICAvLyBNdXN0IHN0YXJ0IHdpdGggYSBzcGFjZSBvciBhIHRhYi5cbiAgICAgICAgaGVhZC52YWx1ZSA9IGhlYWQudmFsdWUuc2xpY2UoMSlcblxuICAgICAgICBpZiAoaGVhZC52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBub2RlLmNoaWxkcmVuLnNoaWZ0KClcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBub2RlLnBvc2l0aW9uICYmXG4gICAgICAgICAgaGVhZC5wb3NpdGlvbiAmJlxuICAgICAgICAgIHR5cGVvZiBoZWFkLnBvc2l0aW9uLnN0YXJ0Lm9mZnNldCA9PT0gJ251bWJlcidcbiAgICAgICAgKSB7XG4gICAgICAgICAgaGVhZC5wb3NpdGlvbi5zdGFydC5jb2x1bW4rK1xuICAgICAgICAgIGhlYWQucG9zaXRpb24uc3RhcnQub2Zmc2V0KytcbiAgICAgICAgICBub2RlLnBvc2l0aW9uLnN0YXJ0ID0gT2JqZWN0LmFzc2lnbih7fSwgaGVhZC5wb3NpdGlvbi5zdGFydClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuZXhpdCh0b2tlbilcbn1cblxuLyoqXG4gKiBAdHlwZSB7VG9NYXJrZG93bkhhbmRsZX1cbiAqIEBwYXJhbSB7TGlzdEl0ZW19IG5vZGVcbiAqL1xuZnVuY3Rpb24gbGlzdEl0ZW1XaXRoVGFza0xpc3RJdGVtKG5vZGUsIHBhcmVudCwgc3RhdGUsIGluZm8pIHtcbiAgY29uc3QgaGVhZCA9IG5vZGUuY2hpbGRyZW5bMF1cbiAgY29uc3QgY2hlY2thYmxlID1cbiAgICB0eXBlb2Ygbm9kZS5jaGVja2VkID09PSAnYm9vbGVhbicgJiYgaGVhZCAmJiBoZWFkLnR5cGUgPT09ICdwYXJhZ3JhcGgnXG4gIGNvbnN0IGNoZWNrYm94ID0gJ1snICsgKG5vZGUuY2hlY2tlZCA/ICd4JyA6ICcgJykgKyAnXSAnXG4gIGNvbnN0IHRyYWNrZXIgPSBzdGF0ZS5jcmVhdGVUcmFja2VyKGluZm8pXG5cbiAgaWYgKGNoZWNrYWJsZSkge1xuICAgIHRyYWNrZXIubW92ZShjaGVja2JveClcbiAgfVxuXG4gIGxldCB2YWx1ZSA9IGRlZmF1bHRIYW5kbGVycy5saXN0SXRlbShub2RlLCBwYXJlbnQsIHN0YXRlLCB7XG4gICAgLi4uaW5mbyxcbiAgICAuLi50cmFja2VyLmN1cnJlbnQoKVxuICB9KVxuXG4gIGlmIChjaGVja2FibGUpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL14oPzpbKistXXxcXGQrXFwuKShbXFxyXFxuXXwgezEsM30pLywgY2hlY2spXG4gIH1cblxuICByZXR1cm4gdmFsdWVcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9ICQwXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBjaGVjaygkMCkge1xuICAgIHJldHVybiAkMCArIGNoZWNrYm94XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-gfm-task-list-item/lib/index.js\n");

/***/ })

};
;