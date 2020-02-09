webpackHotUpdate("static/development/pages/palette.js",{

/***/ "./pages/palette.jsx":
/*!***************************!*\
  !*** ./pages/palette.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/helpers */ "./utils/helpers.js");
/* harmony import */ var _components_ObjectTree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ObjectTree */ "./components/ObjectTree.jsx");


var _preBlock,
    _jsxFileName = "/Users/vonnegut/drive/personal-frontend-boilerplate/pages/palette.jsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({
  wrapper: {
    padding: "32px"
  },
  header: {},
  preBlock: (_preBlock = {
    margin: "16px",
    borderRadius: "4px",
    fontFamily: "Source Code Pro",
    border: "1px solid black"
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_preBlock, "borderRadius", "4px"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_preBlock, "padding", "4px 10px"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_preBlock, "overflowX", "scroll"), _preBlock)
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_8__["makePageTitle"])("Palette"))), __jsx("div", {
    className: classes.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Explainer"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Below is the theme object used in this project. Any styles which are used in more than one place or are expected to be used in more than one place throughout this codebase should be defined via this theme object rather than via in-line styles. When injecting one-off styles, developers should use this preference order:", __jsx("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "MaterialUI makeStyles"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "jss"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "style props"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Theme"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx(_components_ObjectTree__WEBPACK_IMPORTED_MODULE_9__["ObjectTree"], {
    object: theme,
    customLiteralToTreeItem: function customLiteralToTreeItem(literal) {
      switch (typeof literal) {
        case "function":
          return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, __jsx("link", {
            href: "https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap",
            rel: "stylesheet",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          })), __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_4__["TreeItem"], {
            nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_7___default()(),
            label: __jsx("pre", {
              className: "".concat(classes.preBlock),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              },
              __self: this
            }, __jsx("code", {
              className: "language-javascript ".concat(classes.codeBlock),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              },
              __self: this
            }, literal.toString())),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            },
            __self: this
          }));

        case "string":
          {
            if (literal.startsWith("rgba(") && literal.endsWith(")")) return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4100267622", [literal]]]) + " " + "rgba-wrapper",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 82
              },
              __self: this
            }, __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_4__["TreeItem"], {
              nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_7___default()(),
              label: literal,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 83
              },
              __self: this
            })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
              id: "4100267622",
              dynamic: [literal],
              __self: this
            }, ".rgba-wrapper.__jsx-style-dynamic-selector{color:".concat(literal, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92b25uZWd1dC9kcml2ZS9wZXJzb25hbC1mcm9udGVuZC1ib2lsZXJwbGF0ZS9wYWdlcy9wYWxldHRlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RmtDLEFBRzhELG1DQUNyQyIsImZpbGUiOiIvVXNlcnMvdm9ubmVndXQvZHJpdmUvcGVyc29uYWwtZnJvbnRlbmQtYm9pbGVycGxhdGUvcGFnZXMvcGFsZXR0ZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBUcmVlSXRlbSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XG5pbXBvcnQgeyB1c2VUaGVtZSwgRGl2aWRlciwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCB1dWlkIGZyb20gXCJ1dWlkL3Y0XCI7XG5pbXBvcnQgeyBtYWtlUGFnZVRpdGxlIH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlcnNcIjtcbmltcG9ydCB7IE9iamVjdFRyZWUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9PYmplY3RUcmVlXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICB3cmFwcGVyOiB7XG4gICAgcGFkZGluZzogXCIzMnB4XCJcbiAgfSxcbiAgaGVhZGVyOiB7fSxcbiAgcHJlQmxvY2s6IHtcbiAgICBtYXJnaW46IFwiMTZweFwiLFxuICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcbiAgICBmb250RmFtaWx5OiBcIlNvdXJjZSBDb2RlIFByb1wiLFxuICAgIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgcGFkZGluZzogXCI0cHggMTBweFwiLFxuICAgIG92ZXJmbG93WDogXCJzY3JvbGxcIlxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnttYWtlUGFnZVRpdGxlKFwiUGFsZXR0ZVwiKX08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPkV4cGxhaW5lcjwvVHlwb2dyYXBoeT5cbiAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+XG4gICAgICAgICAgQmVsb3cgaXMgdGhlIHRoZW1lIG9iamVjdCB1c2VkIGluIHRoaXMgcHJvamVjdC4gQW55IHN0eWxlcyB3aGljaCBhcmVcbiAgICAgICAgICB1c2VkIGluIG1vcmUgdGhhbiBvbmUgcGxhY2Ugb3IgYXJlIGV4cGVjdGVkIHRvIGJlIHVzZWQgaW4gbW9yZSB0aGFuXG4gICAgICAgICAgb25lIHBsYWNlIHRocm91Z2hvdXQgdGhpcyBjb2RlYmFzZSBzaG91bGQgYmUgZGVmaW5lZCB2aWEgdGhpcyB0aGVtZVxuICAgICAgICAgIG9iamVjdCByYXRoZXIgdGhhbiB2aWEgaW4tbGluZSBzdHlsZXMuIFdoZW4gaW5qZWN0aW5nIG9uZS1vZmYgc3R5bGVzLFxuICAgICAgICAgIGRldmVsb3BlcnMgc2hvdWxkIHVzZSB0aGlzIHByZWZlcmVuY2Ugb3JkZXI6XG4gICAgICAgICAgPG9sPlxuICAgICAgICAgICAgPGxpPk1hdGVyaWFsVUkgbWFrZVN0eWxlczwvbGk+XG4gICAgICAgICAgICA8bGk+anNzPC9saT5cbiAgICAgICAgICAgIDxsaT5zdHlsZSBwcm9wczwvbGk+XG4gICAgICAgICAgPC9vbD5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5UaGVtZTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgPE9iamVjdFRyZWVcbiAgICAgICAgICBvYmplY3Q9e3RoZW1lfVxuICAgICAgICAgIGN1c3RvbUxpdGVyYWxUb1RyZWVJdGVtPXtsaXRlcmFsID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZW9mIGxpdGVyYWwpIHtcbiAgICAgICAgICAgICAgY2FzZSBcImZ1bmN0aW9uXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStDb2RlK1BybyZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgICAgICA8VHJlZUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICBub2RlSWQ9e3V1aWQoKX1cbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17XG4gICAgICAgICAgICAgICAgICAgICAgICA8cHJlIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5wcmVCbG9ja31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BsYW5ndWFnZS1qYXZhc2NyaXB0ICR7Y2xhc3Nlcy5jb2RlQmxvY2t9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaXRlcmFsLnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjoge1xuICAgICAgICAgICAgICAgIGlmIChsaXRlcmFsLnN0YXJ0c1dpdGgoXCJyZ2JhKFwiKSAmJiBsaXRlcmFsLmVuZHNXaXRoKFwiKVwiKSlcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZ2JhLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmVlSXRlbSBub2RlSWQ9e3V1aWQoKX0gbGFiZWw9e2xpdGVyYWx9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgey8qXG4gICAgICAgICAgICAgICAgICAgICAgICogVXNpbmcganNzIGJlY2F1c2UgaXQncyB0aGUgY2xlYW5lc3Qgd2F5IHRvIGluamVjdCB0aGVzZSBzdHlsZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICogbWFrZVN0eWxlcyBkb2Vzbid0IHdvcmsgYmVjYXVzZSBpdCdzIGEgaG9vayAmIHN0eWxlIHByb3AgaXMgaGlnaGx5IGRpc2NvdXJhZ2VkXG4gICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZ2JhLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtsaXRlcmFsfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gPFRyZWVJdGVtIG5vZGVJZD17dXVpZCgpfSBsYWJlbD17bGl0ZXJhbH0gLz47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gPFRyZWVJdGVtIG5vZGVJZD17dXVpZCgpfSBsYWJlbD17bGl0ZXJhbC50b1N0cmluZygpfSAvPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/vonnegut/drive/personal-frontend-boilerplate/pages/palette.jsx */")));
            return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_4__["TreeItem"], {
              nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_7___default()(),
              label: literal,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 96
              },
              __self: this
            });
          }

        default:
          return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_4__["TreeItem"], {
            nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_7___default()(),
            label: literal.toString(),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          });
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=palette.js.b176d13f0f6023513758.hot-update.js.map