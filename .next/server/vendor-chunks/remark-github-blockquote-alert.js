"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/remark-github-blockquote-alert";
exports.ids = ["vendor-chunks/remark-github-blockquote-alert"];
exports.modules = {

/***/ "(ssr)/./node_modules/remark-github-blockquote-alert/lib/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/remark-github-blockquote-alert/lib/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAlertIcon: () => (/* binding */ getAlertIcon),\n/* harmony export */   remarkAlert: () => (/* binding */ remarkAlert)\n/* harmony export */ });\n/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unist-util-visit */ \"(ssr)/./node_modules/unist-util-visit/lib/index.js\");\n\nconst alertRegex = /^\\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\\]/i;\nconst alertLegacyRegex = /^\\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)(\\/.*)?\\]/i;\n/**\n * Alerts are a Markdown extension based on the blockquote syntax that you can use to emphasize critical information.\n * On GitHub, they are displayed with distinctive colors and icons to indicate the significance of the content.\n * https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts\n */\nconst remarkAlert = ({ legacyTitle = false } = {}) => {\n    return (tree) => {\n        (0,unist_util_visit__WEBPACK_IMPORTED_MODULE_0__.visit)(tree, \"blockquote\", (node, index, parent) => {\n            let alertType = '';\n            let title = '';\n            let isNext = true;\n            let child = node.children.map((item) => {\n                if (isNext && item.type === \"paragraph\") {\n                    const firstNode = item.children[0];\n                    const text = firstNode.type === 'text' ? firstNode.value : '';\n                    const reg = legacyTitle ? alertLegacyRegex : alertRegex;\n                    const match = text.match(reg);\n                    if (match) {\n                        isNext = false;\n                        alertType = match[1].toLocaleLowerCase();\n                        title = legacyTitle ? match[2] || alertType.toLocaleUpperCase() : alertType.toLocaleUpperCase();\n                        if (text.includes('\\n')) {\n                            item.children[0] = {\n                                type: 'text',\n                                value: text.replace(reg, '').replace(/^\\n+/, ''),\n                            };\n                        }\n                        if (!text.includes('\\n')) {\n                            const itemChild = [];\n                            item.children.forEach((item, idx) => {\n                                if (idx == 0)\n                                    return;\n                                if (idx == 1 && item.type === 'break') {\n                                    return;\n                                }\n                                itemChild.push(item);\n                            });\n                            item.children = [...itemChild];\n                        }\n                    }\n                }\n                return item;\n            });\n            if (!!alertType) {\n                node.data = {\n                    hName: \"div\",\n                    hProperties: {\n                        class: `markdown-alert markdown-alert-${alertType}`,\n                        dir: 'auto'\n                    },\n                };\n                child.unshift({\n                    type: \"paragraph\",\n                    children: [\n                        getAlertIcon(alertType),\n                        {\n                            type: \"text\",\n                            value: title.replace(/^\\//, ''),\n                        }\n                    ],\n                    data: {\n                        hProperties: {\n                            class: \"markdown-alert-title\",\n                            dir: \"auto\"\n                        }\n                    }\n                });\n            }\n            node.children = [...child];\n        });\n    };\n};\nfunction getAlertIcon(type) {\n    let pathD = pathData[type] ?? '';\n    return {\n        type: \"emphasis\",\n        data: {\n            hName: \"svg\",\n            hProperties: {\n                class: \"octicon\",\n                viewBox: '0 0 16 16',\n                width: '16',\n                height: '16',\n                ariaHidden: 'true',\n            },\n        },\n        children: [\n            {\n                type: \"emphasis\",\n                data: {\n                    hName: \"path\",\n                    hProperties: {\n                        d: pathD\n                    }\n                },\n                children: []\n            }\n        ]\n    };\n}\nconst pathData = {\n    note: 'M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z',\n    tip: 'M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z',\n    important: 'M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z',\n    warning: 'M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z',\n    caution: 'M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z',\n};\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVtYXJrLWdpdGh1Yi1ibG9ja3F1b3RlLWFsZXJ0L2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyx1QkFBdUIsc0JBQXNCLElBQUk7QUFDeEQ7QUFDQSxRQUFRLHVEQUFLO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxVQUFVO0FBQzFFO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3ljX2RpcmVjdG9yeS8uL25vZGVfbW9kdWxlcy9yZW1hcmstZ2l0aHViLWJsb2NrcXVvdGUtYWxlcnQvbGliL2luZGV4LmpzP2VmNmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdmlzaXQgfSBmcm9tICd1bmlzdC11dGlsLXZpc2l0JztcbmNvbnN0IGFsZXJ0UmVnZXggPSAvXlxcWyEoTk9URXxUSVB8SU1QT1JUQU5UfFdBUk5JTkd8Q0FVVElPTilcXF0vaTtcbmNvbnN0IGFsZXJ0TGVnYWN5UmVnZXggPSAvXlxcWyEoTk9URXxUSVB8SU1QT1JUQU5UfFdBUk5JTkd8Q0FVVElPTikoXFwvLiopP1xcXS9pO1xuLyoqXG4gKiBBbGVydHMgYXJlIGEgTWFya2Rvd24gZXh0ZW5zaW9uIGJhc2VkIG9uIHRoZSBibG9ja3F1b3RlIHN5bnRheCB0aGF0IHlvdSBjYW4gdXNlIHRvIGVtcGhhc2l6ZSBjcml0aWNhbCBpbmZvcm1hdGlvbi5cbiAqIE9uIEdpdEh1YiwgdGhleSBhcmUgZGlzcGxheWVkIHdpdGggZGlzdGluY3RpdmUgY29sb3JzIGFuZCBpY29ucyB0byBpbmRpY2F0ZSB0aGUgc2lnbmlmaWNhbmNlIG9mIHRoZSBjb250ZW50LlxuICogaHR0cHM6Ly9kb2NzLmdpdGh1Yi5jb20vZW4vZ2V0LXN0YXJ0ZWQvd3JpdGluZy1vbi1naXRodWIvZ2V0dGluZy1zdGFydGVkLXdpdGgtd3JpdGluZy1hbmQtZm9ybWF0dGluZy1vbi1naXRodWIvYmFzaWMtd3JpdGluZy1hbmQtZm9ybWF0dGluZy1zeW50YXgjYWxlcnRzXG4gKi9cbmV4cG9ydCBjb25zdCByZW1hcmtBbGVydCA9ICh7IGxlZ2FjeVRpdGxlID0gZmFsc2UgfSA9IHt9KSA9PiB7XG4gICAgcmV0dXJuICh0cmVlKSA9PiB7XG4gICAgICAgIHZpc2l0KHRyZWUsIFwiYmxvY2txdW90ZVwiLCAobm9kZSwgaW5kZXgsIHBhcmVudCkgPT4ge1xuICAgICAgICAgICAgbGV0IGFsZXJ0VHlwZSA9ICcnO1xuICAgICAgICAgICAgbGV0IHRpdGxlID0gJyc7XG4gICAgICAgICAgICBsZXQgaXNOZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IG5vZGUuY2hpbGRyZW4ubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTmV4dCAmJiBpdGVtLnR5cGUgPT09IFwicGFyYWdyYXBoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3ROb2RlID0gaXRlbS5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGZpcnN0Tm9kZS50eXBlID09PSAndGV4dCcgPyBmaXJzdE5vZGUudmFsdWUgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnID0gbGVnYWN5VGl0bGUgPyBhbGVydExlZ2FjeVJlZ2V4IDogYWxlcnRSZWdleDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSB0ZXh0Lm1hdGNoKHJlZyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNOZXh0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydFR5cGUgPSBtYXRjaFsxXS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSBsZWdhY3lUaXRsZSA/IG1hdGNoWzJdIHx8IGFsZXJ0VHlwZS50b0xvY2FsZVVwcGVyQ2FzZSgpIDogYWxlcnRUeXBlLnRvTG9jYWxlVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGV4dC5pbmNsdWRlcygnXFxuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNoaWxkcmVuWzBdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0ZXh0LnJlcGxhY2UocmVnLCAnJykucmVwbGFjZSgvXlxcbisvLCAnJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGV4dC5pbmNsdWRlcygnXFxuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtQ2hpbGQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNoaWxkcmVuLmZvckVhY2goKGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWR4ID09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZHggPT0gMSAmJiBpdGVtLnR5cGUgPT09ICdicmVhaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtQ2hpbGQucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNoaWxkcmVuID0gWy4uLml0ZW1DaGlsZF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghIWFsZXJ0VHlwZSkge1xuICAgICAgICAgICAgICAgIG5vZGUuZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgaE5hbWU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIGhQcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogYG1hcmtkb3duLWFsZXJ0IG1hcmtkb3duLWFsZXJ0LSR7YWxlcnRUeXBlfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXI6ICdhdXRvJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY2hpbGQudW5zaGlmdCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicGFyYWdyYXBoXCIsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRBbGVydEljb24oYWxlcnRUeXBlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGl0bGUucmVwbGFjZSgvXlxcLy8sICcnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgaFByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJtYXJrZG93bi1hbGVydC10aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcjogXCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5jaGlsZHJlbiA9IFsuLi5jaGlsZF07XG4gICAgICAgIH0pO1xuICAgIH07XG59O1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFsZXJ0SWNvbih0eXBlKSB7XG4gICAgbGV0IHBhdGhEID0gcGF0aERhdGFbdHlwZV0gPz8gJyc7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJlbXBoYXNpc1wiLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBoTmFtZTogXCJzdmdcIixcbiAgICAgICAgICAgIGhQcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IFwib2N0aWNvblwiLFxuICAgICAgICAgICAgICAgIHZpZXdCb3g6ICcwIDAgMTYgMTYnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTYnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzE2JyxcbiAgICAgICAgICAgICAgICBhcmlhSGlkZGVuOiAndHJ1ZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiZW1waGFzaXNcIixcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGhOYW1lOiBcInBhdGhcIixcbiAgICAgICAgICAgICAgICAgICAgaFByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ6IHBhdGhEXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfTtcbn1cbmNvbnN0IHBhdGhEYXRhID0ge1xuICAgIG5vdGU6ICdNMCA4YTggOCAwIDEgMSAxNiAwQTggOCAwIDAgMSAwIDhabTgtNi41YTYuNSA2LjUgMCAxIDAgMCAxMyA2LjUgNi41IDAgMCAwIDAtMTNaTTYuNSA3Ljc1QS43NS43NSAwIDAgMSA3LjI1IDdoMWEuNzUuNzUgMCAwIDEgLjc1Ljc1djIuNzVoLjI1YS43NS43NSAwIDAgMSAwIDEuNWgtMmEuNzUuNzUgMCAwIDEgMC0xLjVoLjI1di0yaC0uMjVhLjc1Ljc1IDAgMCAxLS43NS0uNzVaTTggNmExIDEgMCAxIDEgMC0yIDEgMSAwIDAgMSAwIDJaJyxcbiAgICB0aXA6ICdNOCAxLjVjLTIuMzYzIDAtNCAxLjY5LTQgMy43NSAwIC45ODQuNDI0IDEuNjI1Ljk4NCAyLjMwNGwuMjE0LjI1M2MuMjIzLjI2NC40Ny41NTYuNjczLjg0OC4yODQuNDExLjUzNy44OTYuNjIxIDEuNDlhLjc1Ljc1IDAgMCAxLTEuNDg0LjIxMWMtLjA0LS4yODItLjE2My0uNTQ3LS4zNy0uODQ3YTguNDU2IDguNDU2IDAgMCAwLS41NDItLjY4Yy0uMDg0LS4xLS4xNzMtLjIwNS0uMjY4LS4zMkMzLjIwMSA3Ljc1IDIuNSA2Ljc2NiAyLjUgNS4yNSAyLjUgMi4zMSA0Ljg2MyAwIDggMHM1LjUgMi4zMSA1LjUgNS4yNWMwIDEuNTE2LS43MDEgMi41LTEuMzI4IDMuMjU5LS4wOTUuMTE1LS4xODQuMjItLjI2OC4zMTktLjIwNy4yNDUtLjM4My40NTMtLjU0MS42ODEtLjIwOC4zLS4zMy41NjUtLjM3Ljg0N2EuNzUxLjc1MSAwIDAgMS0xLjQ4NS0uMjEyYy4wODQtLjU5My4zMzctMS4wNzguNjIxLTEuNDg5LjIwMy0uMjkyLjQ1LS41ODQuNjczLS44NDguMDc1LS4wODguMTQ3LS4xNzMuMjEzLS4yNTMuNTYxLS42NzkuOTg1LTEuMzIuOTg1LTIuMzA0IDAtMi4wNi0xLjYzNy0zLjc1LTQtMy43NVpNNS43NSAxMmg0LjVhLjc1Ljc1IDAgMCAxIDAgMS41aC00LjVhLjc1Ljc1IDAgMCAxIDAtMS41Wk02IDE1LjI1YS43NS43NSAwIDAgMSAuNzUtLjc1aDIuNWEuNzUuNzUgMCAwIDEgMCAxLjVoLTIuNWEuNzUuNzUgMCAwIDEtLjc1LS43NVonLFxuICAgIGltcG9ydGFudDogJ00wIDEuNzVDMCAuNzg0Ljc4NCAwIDEuNzUgMGgxMi41QzE1LjIxNiAwIDE2IC43ODQgMTYgMS43NXY5LjVBMS43NSAxLjc1IDAgMCAxIDE0LjI1IDEzSDguMDZsLTIuNTczIDIuNTczQTEuNDU4IDEuNDU4IDAgMCAxIDMgMTQuNTQzVjEzSDEuNzVBMS43NSAxLjc1IDAgMCAxIDAgMTEuMjVabTEuNzUtLjI1YS4yNS4yNSAwIDAgMC0uMjUuMjV2OS41YzAgLjEzOC4xMTIuMjUuMjUuMjVoMmEuNzUuNzUgMCAwIDEgLjc1Ljc1djIuMTlsMi43Mi0yLjcyYS43NDkuNzQ5IDAgMCAxIC41My0uMjJoNi41YS4yNS4yNSAwIDAgMCAuMjUtLjI1di05LjVhLjI1LjI1IDAgMCAwLS4yNS0uMjVabTcgMi4yNXYyLjVhLjc1Ljc1IDAgMCAxLTEuNSAwdi0yLjVhLjc1Ljc1IDAgMCAxIDEuNSAwWk05IDlhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwWicsXG4gICAgd2FybmluZzogJ002LjQ1NyAxLjA0N2MuNjU5LTEuMjM0IDIuNDI3LTEuMjM0IDMuMDg2IDBsNi4wODIgMTEuMzc4QTEuNzUgMS43NSAwIDAgMSAxNC4wODIgMTVIMS45MThhMS43NSAxLjc1IDAgMCAxLTEuNTQzLTIuNTc1Wm0xLjc2My43MDdhLjI1LjI1IDAgMCAwLS40NCAwTDEuNjk4IDEzLjEzMmEuMjUuMjUgMCAwIDAgLjIyLjM2OGgxMi4xNjRhLjI1LjI1IDAgMCAwIC4yMi0uMzY4Wm0uNTMgMy45OTZ2Mi41YS43NS43NSAwIDAgMS0xLjUgMHYtMi41YS43NS43NSAwIDAgMSAxLjUgMFpNOSAxMWExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBaJyxcbiAgICBjYXV0aW9uOiAnTTQuNDcuMjJBLjc0OS43NDkgMCAwIDEgNSAwaDZjLjE5OSAwIC4zODkuMDc5LjUzLjIybDQuMjUgNC4yNWMuMTQxLjE0LjIyLjMzMS4yMi41M3Y2YS43NDkuNzQ5IDAgMCAxLS4yMi41M2wtNC4yNSA0LjI1QS43NDkuNzQ5IDAgMCAxIDExIDE2SDVhLjc0OS43NDkgMCAwIDEtLjUzLS4yMkwuMjIgMTEuNTNBLjc0OS43NDkgMCAwIDEgMCAxMVY1YzAtLjE5OS4wNzktLjM4OS4yMi0uNTNabS44NCAxLjI4TDEuNSA1LjMxdjUuMzhsMy44MSAzLjgxaDUuMzhsMy44MS0zLjgxVjUuMzFMMTAuNjkgMS41Wk04IDRhLjc1Ljc1IDAgMCAxIC43NS43NXYzLjVhLjc1Ljc1IDAgMCAxLTEuNSAwdi0zLjVBLjc1Ljc1IDAgMCAxIDggNFptMCA4YTEgMSAwIDEgMSAwLTIgMSAxIDAgMCAxIDAgMlonLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/remark-github-blockquote-alert/lib/index.js\n");

/***/ })

};
;