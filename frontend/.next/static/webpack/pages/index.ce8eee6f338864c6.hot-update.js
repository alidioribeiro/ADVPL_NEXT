"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_modal_ProductModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/modal/ProductModal */ \"./components/modal/ProductModal.tsx\");\n/* harmony import */ var _hooks_useFetchClients__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useFetchClients */ \"./hooks/useFetchClients.ts\");\n/* harmony import */ var _components_table_ClientTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/table/ClientTable */ \"./components/table/ClientTable.tsx\");\n/* harmony import */ var _components_table_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/table/Pagination */ \"./components/table/Pagination.tsx\");\n// pages/index.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ITEMS_PER_PAGE = 10;\nfunction Home() {\n    _s();\n    const [isModalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [currentUser, setCurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { data: clients, isLoading, refetch: refreshList } = (0,_hooks_useFetchClients__WEBPACK_IMPORTED_MODULE_3__.useFetchClients)(currentPage, ITEMS_PER_PAGE);\n    const totalPages = Math.ceil(((clients === null || clients === void 0 ? void 0 : clients.length) || 0) / ITEMS_PER_PAGE);\n    const handleNextPage = ()=>currentPage < totalPages && setCurrentPage(currentPage + 1);\n    const handlePreviousPage = ()=>currentPage > 1 && setCurrentPage(currentPage - 1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-6 bg-white rounded-xl shadow-sm h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center mb-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-semibold\",\n                        children: \"Clientes\"\n                    }, void 0, false, {\n                        fileName: \"/Users/leonardotelles/Documents/fatec/projeto-advpl/ADVLP/frontend/pages/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setModalOpen(true),\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded-md\",\n                        children: \"Adicionar\"\n                    }, void 0, false, {\n                        fileName: \"/Users/leonardotelles/Documents/fatec/projeto-advpl/ADVLP/frontend/pages/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/leonardotelles/Documents/fatec/projeto-advpl/ADVLP/frontend/pages/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modal_ProductModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                open: isModalOpen,\n                handleClose: ()=>{\n                    setModalOpen(false);\n                    setCurrentUser(null);\n                },\n                user: currentUser\n            }, void 0, false, {\n                fileName: \"/Users/leonardotelles/Documents/fatec/projeto-advpl/ADVLP/frontend/pages/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center h-40\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500\"\n                }, void 0, false, {\n                    fileName: \"/Users/leonardotelles/Documents/fatec/projeto-advpl/ADVLP/frontend/pages/index.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/leonardotelles/Documents/fatec/projeto-advpl/ADVLP/frontend/pages/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_table_ClientTable__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                clients: clients || [],\n                onViewClient: (client)=>{\n                    setCurrentUser(client);\n                    setModalOpen(true);\n                },\n                refresh: refreshList\n            }, void 0, false, {\n                fileName: \"/Users/leonardotelles/Documents/fatec/projeto-advpl/ADVLP/frontend/pages/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_table_Pagination__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                currentPage: currentPage,\n                totalPages: totalPages,\n                onNext: handleNextPage,\n                onPrevious: handlePreviousPage\n            }, void 0, false, {\n                fileName: \"/Users/leonardotelles/Documents/fatec/projeto-advpl/ADVLP/frontend/pages/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/leonardotelles/Documents/fatec/projeto-advpl/ADVLP/frontend/pages/index.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"2khEpoBArUdqZ3UrHbi2DcRYtl0=\", false, function() {\n    return [\n        _hooks_useFetchClients__WEBPACK_IMPORTED_MODULE_3__.useFetchClients\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsa0JBQWtCOzs7QUFDc0I7QUFDc0I7QUFDSjtBQUNEO0FBQ0Y7QUFHdkQsTUFBTU0saUJBQWlCO0FBRVIsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsYUFBYUMsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNTLGFBQWFDLGVBQWUsR0FBR1YsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDVyxhQUFhQyxlQUFlLEdBQUdaLCtDQUFRQSxDQUFrQjtJQUVoRSxNQUFNLEVBQUVhLE1BQU1DLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxTQUFTQyxXQUFXLEVBQUUsR0FBR2YsdUVBQWVBLENBQUNPLGFBQWFKO0lBQ3hGLE1BQU1hLGFBQWFDLEtBQUtDLElBQUksQ0FBQyxDQUFDTixDQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVNPLE1BQU0sS0FBSSxLQUFLaEI7SUFFdEQsTUFBTWlCLGlCQUFpQixJQUFNYixjQUFjUyxjQUFjUixlQUFlRCxjQUFjO0lBQ3RGLE1BQU1jLHFCQUFxQixJQUFNZCxjQUFjLEtBQUtDLGVBQWVELGNBQWM7SUFFakYscUJBQ0UsOERBQUNlO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUF5Qjs7Ozs7O2tDQUN2Qyw4REFBQ0U7d0JBQU9DLFNBQVMsSUFBTXBCLGFBQWE7d0JBQU9pQixXQUFVO2tDQUE4Qzs7Ozs7Ozs7Ozs7OzBCQUtyRyw4REFBQ3hCLHNFQUFlQTtnQkFBQzRCLE1BQU10QjtnQkFBYXVCLGFBQWE7b0JBQVF0QixhQUFhO29CQUFRSSxlQUFlO2dCQUFPO2dCQUFHbUIsTUFBTXBCOzs7Ozs7WUFFNUdJLDBCQUNDLDhEQUFDUztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7cUNBR2pCLDhEQUFDdEIscUVBQVdBO2dCQUFDVyxTQUFTQSxXQUFXLEVBQUU7Z0JBQUVrQixjQUFjLENBQUNDO29CQUFhckIsZUFBZXFCO29CQUFTekIsYUFBYTtnQkFBTztnQkFBRzBCLFNBQVNqQjs7Ozs7OzBCQUczSCw4REFBQ2Isb0VBQVVBO2dCQUFDSyxhQUFhQTtnQkFBYVMsWUFBWUE7Z0JBQVlpQixRQUFRYjtnQkFBZ0JjLFlBQVliOzs7Ozs7Ozs7Ozs7QUFHeEc7R0FqQ3dCakI7O1FBS3FDSixtRUFBZUE7OztLQUxwREkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvaW5kZXgudHN4XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWRkUHJvZHVjdE1vZGFsIGZyb20gJ0AvY29tcG9uZW50cy9tb2RhbC9Qcm9kdWN0TW9kYWwnO1xuaW1wb3J0IHsgdXNlRmV0Y2hDbGllbnRzIH0gZnJvbSAnQC9ob29rcy91c2VGZXRjaENsaWVudHMnO1xuaW1wb3J0IENsaWVudFRhYmxlIGZyb20gJ0AvY29tcG9uZW50cy90YWJsZS9DbGllbnRUYWJsZSc7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICdAL2NvbXBvbmVudHMvdGFibGUvUGFnaW5hdGlvbic7XG5pbXBvcnQgeyBGb3JtRGF0YSB9IGZyb20gJ0AvdmFsaWRhdGlvbnMnO1xuXG5jb25zdCBJVEVNU19QRVJfUEFHRSA9IDEwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXJdID0gdXNlU3RhdGU8Rm9ybURhdGEgfCBudWxsPihudWxsKTtcblxuICBjb25zdCB7IGRhdGE6IGNsaWVudHMsIGlzTG9hZGluZywgcmVmZXRjaDogcmVmcmVzaExpc3QgfSA9IHVzZUZldGNoQ2xpZW50cyhjdXJyZW50UGFnZSwgSVRFTVNfUEVSX1BBR0UpO1xuICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKChjbGllbnRzPy5sZW5ndGggfHwgMCkgLyBJVEVNU19QRVJfUEFHRSk7XG5cbiAgY29uc3QgaGFuZGxlTmV4dFBhZ2UgPSAoKSA9PiBjdXJyZW50UGFnZSA8IHRvdGFsUGFnZXMgJiYgc2V0Q3VycmVudFBhZ2UoY3VycmVudFBhZ2UgKyAxKTtcbiAgY29uc3QgaGFuZGxlUHJldmlvdXNQYWdlID0gKCkgPT4gY3VycmVudFBhZ2UgPiAxICYmIHNldEN1cnJlbnRQYWdlKGN1cnJlbnRQYWdlIC0gMSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBiZy13aGl0ZSByb3VuZGVkLXhsIHNoYWRvdy1zbSBoLWZ1bGxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTZcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGRcIj5DbGllbnRlczwvaDE+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0TW9kYWxPcGVuKHRydWUpfSBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkLW1kXCI+XG4gICAgICAgICAgQWRpY2lvbmFyXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxBZGRQcm9kdWN0TW9kYWwgb3Blbj17aXNNb2RhbE9wZW59IGhhbmRsZUNsb3NlPXsoKSA9PiB7IHNldE1vZGFsT3BlbihmYWxzZSk7IHNldEN1cnJlbnRVc2VyKG51bGwpOyB9fSB1c2VyPXtjdXJyZW50VXNlcn0gLz5cblxuICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtNDAnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1zcGluIHJvdW5kZWQtZnVsbCBoLTEwIHctMTAgYm9yZGVyLWItMiBib3JkZXItYmx1ZS01MDBcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8Q2xpZW50VGFibGUgY2xpZW50cz17Y2xpZW50cyB8fCBbXX0gb25WaWV3Q2xpZW50PXsoY2xpZW50KSA9PiB7IHNldEN1cnJlbnRVc2VyKGNsaWVudCk7IHNldE1vZGFsT3Blbih0cnVlKTsgfX0gcmVmcmVzaD17cmVmcmVzaExpc3R9IC8+XG4gICAgICApfVxuXG4gICAgICA8UGFnaW5hdGlvbiBjdXJyZW50UGFnZT17Y3VycmVudFBhZ2V9IHRvdGFsUGFnZXM9e3RvdGFsUGFnZXN9IG9uTmV4dD17aGFuZGxlTmV4dFBhZ2V9IG9uUHJldmlvdXM9e2hhbmRsZVByZXZpb3VzUGFnZX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQWRkUHJvZHVjdE1vZGFsIiwidXNlRmV0Y2hDbGllbnRzIiwiQ2xpZW50VGFibGUiLCJQYWdpbmF0aW9uIiwiSVRFTVNfUEVSX1BBR0UiLCJIb21lIiwiaXNNb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwiY3VycmVudFVzZXIiLCJzZXRDdXJyZW50VXNlciIsImRhdGEiLCJjbGllbnRzIiwiaXNMb2FkaW5nIiwicmVmZXRjaCIsInJlZnJlc2hMaXN0IiwidG90YWxQYWdlcyIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwiaGFuZGxlTmV4dFBhZ2UiLCJoYW5kbGVQcmV2aW91c1BhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJvcGVuIiwiaGFuZGxlQ2xvc2UiLCJ1c2VyIiwib25WaWV3Q2xpZW50IiwiY2xpZW50IiwicmVmcmVzaCIsIm9uTmV4dCIsIm9uUHJldmlvdXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});