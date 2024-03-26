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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Grid,TextField,Typography!=!@mui/material */ \"__barrel_optimize__?names=Button,Grid,TextField,Typography!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction AddNewWord() {\n    _s();\n    const [word, setWord] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [answer, setAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleAddWord = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:4000/add-new-word\", {\n                word: word,\n                answer: answer,\n                image: image\n            });\n            console.log(response.data);\n            setWord(\"\");\n            setAnswer(\"\");\n            setImage(\"\");\n        } catch (error) {\n            console.error(\"Error adding word:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                variant: \"h5\",\n                sx: {\n                    fontWeight: 500,\n                    textAlign: \"center\",\n                    mb: 3,\n                    mt: 4\n                },\n                children: \"Enter a new word\"\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/word-challenge/src/pages/add-new-word.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                sx: {\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    justifyContent: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n                    sx: {\n                        display: \"flex\",\n                        flexDirection: \"column\",\n                        gap: \"10px\",\n                        minWidth: 350\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n                            fullWidth: true,\n                            id: \"word\",\n                            label: \"Word\",\n                            variant: \"outlined\",\n                            value: word,\n                            onChange: (e)=>setWord(e.target.value),\n                            sx: {\n                                \"& .MuiOutlinedInput-root\": {\n                                    borderRadius: \"30px !important\"\n                                }\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/word-challenge/src/pages/add-new-word.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n                            fullWidth: true,\n                            id: \"answer\",\n                            label: \"Answer\",\n                            variant: \"outlined\",\n                            value: answer,\n                            onChange: (e)=>setAnswer(e.target.value),\n                            sx: {\n                                \"& .MuiOutlinedInput-root\": {\n                                    borderRadius: \"30px !important\"\n                                }\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/word-challenge/src/pages/add-new-word.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n                            fullWidth: true,\n                            id: \"image\",\n                            label: \"Image\",\n                            variant: \"outlined\",\n                            value: image,\n                            onChange: (e)=>setImage(e.target.value),\n                            sx: {\n                                \"& .MuiOutlinedInput-root\": {\n                                    borderRadius: \"30px !important\"\n                                }\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/word-challenge/src/pages/add-new-word.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            variant: \"contained\",\n                            onClick: handleAddWord,\n                            sx: {\n                                borderRadius: \"30px\"\n                            },\n                            children: \"Add\"\n                        }, void 0, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/word-challenge/src/pages/add-new-word.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            variant: \"contained\",\n                            onClick: handleAddWord,\n                            sx: {\n                                borderRadius: \"30px\"\n                            },\n                            children: \"Back to Home\"\n                        }, void 0, false, {\n                            fileName: \"/Applications/XAMPP/xamppfiles/htdocs/word-challenge/src/pages/add-new-word.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Applications/XAMPP/xamppfiles/htdocs/word-challenge/src/pages/add-new-word.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Applications/XAMPP/xamppfiles/htdocs/word-challenge/src/pages/add-new-word.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Applications/XAMPP/xamppfiles/htdocs/word-challenge/src/pages/add-new-word.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(AddNewWord, \"B5wHByMK9CysXxQ7c4nLAGBi4cM=\");\n_c = AddNewWord;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddNewWord);\nvar _c;\n$RefreshReg$(_c, \"AddNewWord\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWRkLW5ldy13b3JkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDNEI7QUFDMUM7QUFFMUIsU0FBU087O0lBQ1AsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1MsUUFBUUMsVUFBVSxHQUFHViwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNXLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQUM7SUFFbkMsTUFBTWEsZ0JBQWdCO1FBQ3BCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1ULGtEQUFVLENBQUMsc0NBQXNDO2dCQUN0RUUsTUFBTUE7Z0JBQ05FLFFBQVFBO2dCQUNSRSxPQUFPQTtZQUNUO1lBQ0FLLFFBQVFDLEdBQUcsQ0FBQ0gsU0FBU0ksSUFBSTtZQUN6QlYsUUFBUTtZQUNSRSxVQUFVO1lBQ1ZFLFNBQVM7UUFDWCxFQUFFLE9BQU9PLE9BQU87WUFDZEgsUUFBUUcsS0FBSyxDQUFDLHNCQUFzQkE7UUFDdEM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDakIsc0dBQUlBOzswQkFDSCw4REFBQ0MsNEdBQVVBO2dCQUNUaUIsU0FBUTtnQkFDUkMsSUFBSTtvQkFBRUMsWUFBWTtvQkFBS0MsV0FBVztvQkFBVUMsSUFBSTtvQkFBR0MsSUFBSTtnQkFBRTswQkFDMUQ7Ozs7OzswQkFHRCw4REFBQ3ZCLHNHQUFJQTtnQkFDSG1CLElBQUk7b0JBQ0ZLLFNBQVM7b0JBQ1RDLFlBQVk7b0JBQ1pDLGdCQUFnQjtnQkFDbEI7MEJBRUEsNEVBQUMxQixzR0FBSUE7b0JBQ0htQixJQUFJO3dCQUNGSyxTQUFTO3dCQUNURyxlQUFlO3dCQUNmQyxLQUFLO3dCQUNMQyxVQUFVO29CQUNaOztzQ0FFQSw4REFBQzlCLDJHQUFTQTs0QkFDUitCLFNBQVM7NEJBQ1RDLElBQUc7NEJBQ0hDLE9BQU07NEJBQ05kLFNBQVE7NEJBQ1JlLE9BQU81Qjs0QkFDUDZCLFVBQVUsQ0FBQ0MsSUFBTTdCLFFBQVE2QixFQUFFQyxNQUFNLENBQUNILEtBQUs7NEJBQ3ZDZCxJQUFJO2dDQUNGLDRCQUE0QjtvQ0FDMUJrQixjQUFjO2dDQUNoQjs0QkFDRjs7Ozs7O3NDQUVGLDhEQUFDdEMsMkdBQVNBOzRCQUNSK0IsU0FBUzs0QkFDVEMsSUFBRzs0QkFDSEMsT0FBTTs0QkFDTmQsU0FBUTs0QkFDUmUsT0FBTzFCOzRCQUNQMkIsVUFBVSxDQUFDQyxJQUFNM0IsVUFBVTJCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs0QkFDekNkLElBQUk7Z0NBQ0YsNEJBQTRCO29DQUMxQmtCLGNBQWM7Z0NBQ2hCOzRCQUNGOzs7Ozs7c0NBRUYsOERBQUN0QywyR0FBU0E7NEJBQ1IrQixTQUFTOzRCQUNUQyxJQUFHOzRCQUNIQyxPQUFNOzRCQUNOZCxTQUFROzRCQUNSZSxPQUFPeEI7NEJBQ1B5QixVQUFVLENBQUNDLElBQU16QixTQUFTeUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzRCQUN4Q2QsSUFBSTtnQ0FDRiw0QkFBNEI7b0NBQzFCa0IsY0FBYztnQ0FDaEI7NEJBQ0Y7Ozs7OztzQ0FFRiw4REFBQ25DLHdHQUFNQTs0QkFDTGdCLFNBQVE7NEJBQ1JvQixTQUFTM0I7NEJBQ1RRLElBQUk7Z0NBQUVrQixjQUFjOzRCQUFPO3NDQUM1Qjs7Ozs7O3NDQUdELDhEQUFDbkMsd0dBQU1BOzRCQUNMZ0IsU0FBUTs0QkFDUm9CLFNBQVMzQjs0QkFDVFEsSUFBSTtnQ0FBRWtCLGNBQWM7NEJBQU87c0NBQzVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBckdTakM7S0FBQUE7QUF1R1QsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FkZC1uZXctd29yZC50c3g/MjUyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRleHRGaWVsZCwgR3JpZCwgVHlwb2dyYXBoeSwgQnV0dG9uIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZnVuY3Rpb24gQWRkTmV3V29yZCgpIHtcbiAgY29uc3QgW3dvcmQsIHNldFdvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFthbnN3ZXIsIHNldEFuc3dlcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVBZGRXb3JkID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvYWRkLW5ldy13b3JkXCIsIHtcbiAgICAgICAgd29yZDogd29yZCxcbiAgICAgICAgYW5zd2VyOiBhbnN3ZXIsXG4gICAgICAgIGltYWdlOiBpbWFnZSxcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICBzZXRXb3JkKFwiXCIpO1xuICAgICAgc2V0QW5zd2VyKFwiXCIpO1xuICAgICAgc2V0SW1hZ2UoXCJcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgd29yZDpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkPlxuICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgdmFyaWFudD1cImg1XCJcbiAgICAgICAgc3g9e3sgZm9udFdlaWdodDogNTAwLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIG1iOiAzLCBtdDogNCB9fVxuICAgICAgPlxuICAgICAgICBFbnRlciBhIG5ldyB3b3JkXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8R3JpZFxuICAgICAgICBzeD17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxHcmlkXG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgIGdhcDogXCIxMHB4XCIsXG4gICAgICAgICAgICBtaW5XaWR0aDogMzUwLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIGlkPVwid29yZFwiXG4gICAgICAgICAgICBsYWJlbD1cIldvcmRcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIHZhbHVlPXt3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRXb3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIFwiJiAuTXVpT3V0bGluZWRJbnB1dC1yb290XCI6IHtcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMzBweCAhaW1wb3J0YW50XCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cImFuc3dlclwiXG4gICAgICAgICAgICBsYWJlbD1cIkFuc3dlclwiXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgdmFsdWU9e2Fuc3dlcn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QW5zd2VyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIFwiJiAuTXVpT3V0bGluZWRJbnB1dC1yb290XCI6IHtcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMzBweCAhaW1wb3J0YW50XCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBpZD1cImltYWdlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiSW1hZ2VcIlxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIHZhbHVlPXtpbWFnZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW1hZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgXCImIC5NdWlPdXRsaW5lZElucHV0LXJvb3RcIjoge1xuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIzMHB4ICFpbXBvcnRhbnRcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFkZFdvcmR9XG4gICAgICAgICAgICBzeD17eyBib3JkZXJSYWRpdXM6IFwiMzBweFwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWRkXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGRXb3JkfVxuICAgICAgICAgICAgc3g9e3sgYm9yZGVyUmFkaXVzOiBcIjMwcHhcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEJhY2sgdG8gSG9tZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBZGROZXdXb3JkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJUZXh0RmllbGQiLCJHcmlkIiwiVHlwb2dyYXBoeSIsIkJ1dHRvbiIsImF4aW9zIiwiQWRkTmV3V29yZCIsIndvcmQiLCJzZXRXb3JkIiwiYW5zd2VyIiwic2V0QW5zd2VyIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImhhbmRsZUFkZFdvcmQiLCJyZXNwb25zZSIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVycm9yIiwidmFyaWFudCIsInN4IiwiZm9udFdlaWdodCIsInRleHRBbGlnbiIsIm1iIiwibXQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleERpcmVjdGlvbiIsImdhcCIsIm1pbldpZHRoIiwiZnVsbFdpZHRoIiwiaWQiLCJsYWJlbCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYm9yZGVyUmFkaXVzIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/add-new-word.tsx\n"));

/***/ })

});