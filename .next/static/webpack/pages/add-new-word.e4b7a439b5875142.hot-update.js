"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/add-new-word",{

/***/ "./src/pages/add-new-word.tsx":
/*!************************************!*\
  !*** ./src/pages/add-new-word.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Grid,TextField,Typography!=!@mui/material */ \"__barrel_optimize__?names=Button,Grid,TextField,Typography!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction AddNewWord() {\n    _s();\n    const [word, setWord] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [answer, setAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleAddWord = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:4000/add-new-word\", {\n                word: word,\n                answer: answer,\n                image: image\n            });\n            console.log(response.data);\n            setWord(\"\");\n            setAnswer(\"\");\n            setImage(\"\");\n        } catch (error) {\n            console.error(\"Error adding word:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                variant: \"h5\",\n                sx: {\n                    fontWeight: 500,\n                    textAlign: \"center\",\n                    mb: 3,\n                    mt: 4\n                },\n                children: \"Enter a new word\"\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/word-challenge/src/pages/add-new-word.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                sx: {\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    justifyContent: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                    sx: {\n                        display: \"flex\",\n                        flexDirection: \"column\",\n                        gap: \"10px\",\n                        minWidth: 350\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                            fullWidth: true,\n                            id: \"word\",\n                            label: \"Word\",\n                            variant: \"outlined\",\n                            value: word,\n                            onChange: (e)=>setWord(e.target.value),\n                            sx: {\n                                \"& .MuiOutlinedInput-root\": {\n                                    borderRadius: \"30px !important\"\n                                }\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/word-challenge/src/pages/add-new-word.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                            fullWidth: true,\n                            id: \"answer\",\n                            label: \"Answer\",\n                            variant: \"outlined\",\n                            value: answer,\n                            onChange: (e)=>setAnswer(e.target.value),\n                            sx: {\n                                \"& .MuiOutlinedInput-root\": {\n                                    borderRadius: \"30px !important\"\n                                }\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/word-challenge/src/pages/add-new-word.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                            fullWidth: true,\n                            id: \"image\",\n                            label: \"Image\",\n                            variant: \"outlined\",\n                            value: image,\n                            onChange: (e)=>setImage(e.target.value),\n                            sx: {\n                                \"& .MuiOutlinedInput-root\": {\n                                    borderRadius: \"30px !important\"\n                                }\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/word-challenge/src/pages/add-new-word.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            variant: \"contained\",\n                            onClick: handleAddWord,\n                            sx: {\n                                borderRadius: \"30px\"\n                            },\n                            children: \"Add\"\n                        }, void 0, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/word-challenge/src/pages/add-new-word.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            style: {\n                                textDecoration: \"none\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    variant: \"contained\",\n                                    onClick: handleAddWord,\n                                    sx: {\n                                        borderRadius: \"30px\",\n                                        display: \"flex\",\n                                        alignItems: \"center\",\n                                        justifyContent: \"center\",\n                                        textDecoration: \"none\",\n                                        textTransform: \"none\"\n                                    },\n                                    children: \"Back to Home\"\n                                }, void 0, false, {\n                                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/word-challenge/src/pages/add-new-word.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/word-challenge/src/pages/add-new-word.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/word-challenge/src/pages/add-new-word.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/word-challenge/src/pages/add-new-word.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/word-challenge/src/pages/add-new-word.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/word-challenge/src/pages/add-new-word.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(AddNewWord, \"B5wHByMK9CysXxQ7c4nLAGBi4cM=\");\n_c = AddNewWord;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddNewWord);\nvar _c;\n$RefreshReg$(_c, \"AddNewWord\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYWRkLW5ldy13b3JkLnRzeD8yNTJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkLCBHcmlkLCBUeXBvZ3JhcGh5LCBCdXR0b24gfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmZ1bmN0aW9uIEFkZE5ld1dvcmQoKSB7XG4gIGNvbnN0IFt3b3JkLCBzZXRXb3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYW5zd2VyLCBzZXRBbnN3ZXJdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlQWRkV29yZCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FkZC1uZXctd29yZFwiLCB7XG4gICAgICAgIHdvcmQ6IHdvcmQsXG4gICAgICAgIGFuc3dlcjogYW5zd2VyLFxuICAgICAgICBpbWFnZTogaW1hZ2UsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgc2V0V29yZChcIlwiKTtcbiAgICAgIHNldEFuc3dlcihcIlwiKTtcbiAgICAgIHNldEltYWdlKFwiXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIHdvcmQ6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8R3JpZD5cbiAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgIHZhcmlhbnQ9XCJoNVwiXG4gICAgICAgIHN4PXt7IGZvbnRXZWlnaHQ6IDUwMCwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYjogMywgbXQ6IDQgfX1cbiAgICAgID5cbiAgICAgICAgRW50ZXIgYSBuZXcgd29yZFxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPEdyaWRcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8R3JpZFxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICBnYXA6IFwiMTBweFwiLFxuICAgICAgICAgICAgbWluV2lkdGg6IDM1MCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cIndvcmRcIlxuICAgICAgICAgICAgbGFiZWw9XCJXb3JkXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICB2YWx1ZT17d29yZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0V29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBcIiYgLk11aU91dGxpbmVkSW5wdXQtcm9vdFwiOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjMwcHggIWltcG9ydGFudFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJhbnN3ZXJcIlxuICAgICAgICAgICAgbGFiZWw9XCJBbnN3ZXJcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIHZhbHVlPXthbnN3ZXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFuc3dlcihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBcIiYgLk11aU91dGxpbmVkSW5wdXQtcm9vdFwiOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjMwcHggIWltcG9ydGFudFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgaWQ9XCJpbWFnZVwiXG4gICAgICAgICAgICBsYWJlbD1cIkltYWdlXCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICB2YWx1ZT17aW1hZ2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEltYWdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIFwiJiAuTXVpT3V0bGluZWRJbnB1dC1yb290XCI6IHtcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMzBweCAhaW1wb3J0YW50XCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGRXb3JkfVxuICAgICAgICAgICAgc3g9e3sgYm9yZGVyUmFkaXVzOiBcIjMwcHhcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFkZFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19PlxuICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGRXb3JkfVxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMzBweFwiLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQmFjayB0byBIb21lXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRkTmV3V29yZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiVGV4dEZpZWxkIiwiR3JpZCIsIlR5cG9ncmFwaHkiLCJCdXR0b24iLCJheGlvcyIsIkxpbmsiLCJBZGROZXdXb3JkIiwid29yZCIsInNldFdvcmQiLCJhbnN3ZXIiLCJzZXRBbnN3ZXIiLCJpbWFnZSIsInNldEltYWdlIiwiaGFuZGxlQWRkV29yZCIsInJlc3BvbnNlIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZXJyb3IiLCJ2YXJpYW50Iiwic3giLCJmb250V2VpZ2h0IiwidGV4dEFsaWduIiwibWIiLCJtdCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwiZ2FwIiwibWluV2lkdGgiLCJmdWxsV2lkdGgiLCJpZCIsImxhYmVsIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJib3JkZXJSYWRpdXMiLCJvbkNsaWNrIiwiaHJlZiIsInN0eWxlIiwidGV4dERlY29yYXRpb24iLCJ0ZXh0VHJhbnNmb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/add-new-word.tsx\n"));

/***/ })

});