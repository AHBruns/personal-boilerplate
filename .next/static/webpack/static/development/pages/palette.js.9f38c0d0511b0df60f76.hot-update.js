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
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Below is the theme object used in this project. Any styles which are used in more than one place or are expected to be used in more than one place should be defined via this object rather than via in-line styles injection via makeStyles, jss, or style props."), __jsx(_components_ObjectTree__WEBPACK_IMPORTED_MODULE_9__["ObjectTree"], {
    object: theme,
    customLiteralToTreeItem: function customLiteralToTreeItem(literal) {
      switch (typeof literal) {
        case "function":
          return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          }, __jsx("link", {
            href: "https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap",
            rel: "stylesheet",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          })), __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_4__["TreeItem"], {
            nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_7___default()(),
            label: __jsx("pre", {
              className: "".concat(classes.preBlock),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              },
              __self: this
            }, __jsx("code", {
              className: "language-javascript ".concat(classes.codeBlock),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              },
              __self: this
            }, literal.toString())),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          }));

        case "string":
          {
            if (literal.startsWith("rgba(") && literal.endsWith(")")) return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4100267622", [literal]]]) + " " + "rgba-wrapper",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              },
              __self: this
            }, __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_4__["TreeItem"], {
              nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_7___default()(),
              label: literal,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 73
              },
              __self: this
            })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
              id: "4100267622",
              dynamic: [literal],
              __self: this
            }, ".rgba-wrapper.__jsx-style-dynamic-selector{color:".concat(literal, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92b25uZWd1dC9kcml2ZS9wZXJzb25hbC1mcm9udGVuZC1ib2lsZXJwbGF0ZS9wYWdlcy9wYWxldHRlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RWtDLEFBRzhELG1DQUNyQyIsImZpbGUiOiIvVXNlcnMvdm9ubmVndXQvZHJpdmUvcGVyc29uYWwtZnJvbnRlbmQtYm9pbGVycGxhdGUvcGFnZXMvcGFsZXR0ZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBUcmVlSXRlbSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XG5pbXBvcnQgeyB1c2VUaGVtZSwgRGl2aWRlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCB1dWlkIGZyb20gXCJ1dWlkL3Y0XCI7XG5pbXBvcnQgeyBtYWtlUGFnZVRpdGxlIH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlcnNcIjtcbmltcG9ydCB7IE9iamVjdFRyZWUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9PYmplY3RUcmVlXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICB3cmFwcGVyOiB7XG4gICAgcGFkZGluZzogXCIzMnB4XCJcbiAgfSxcbiAgaGVhZGVyOiB7fSxcbiAgcHJlQmxvY2s6IHtcbiAgICBtYXJnaW46IFwiMTZweFwiLFxuICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcbiAgICBmb250RmFtaWx5OiBcIlNvdXJjZSBDb2RlIFByb1wiLFxuICAgIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXG4gICAgcGFkZGluZzogXCI0cHggMTBweFwiLFxuICAgIG92ZXJmbG93WDogXCJzY3JvbGxcIlxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnttYWtlUGFnZVRpdGxlKFwiUGFsZXR0ZVwiKX08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEJlbG93IGlzIHRoZSB0aGVtZSBvYmplY3QgdXNlZCBpbiB0aGlzIHByb2plY3QuIEFueSBzdHlsZXMgd2hpY2ggYXJlXG4gICAgICAgICAgdXNlZCBpbiBtb3JlIHRoYW4gb25lIHBsYWNlIG9yIGFyZSBleHBlY3RlZCB0byBiZSB1c2VkIGluIG1vcmUgdGhhblxuICAgICAgICAgIG9uZSBwbGFjZSBzaG91bGQgYmUgZGVmaW5lZCB2aWEgdGhpcyBvYmplY3QgcmF0aGVyIHRoYW4gdmlhIGluLWxpbmVcbiAgICAgICAgICBzdHlsZXMgaW5qZWN0aW9uIHZpYSBtYWtlU3R5bGVzLCBqc3MsIG9yIHN0eWxlIHByb3BzLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxPYmplY3RUcmVlXG4gICAgICAgICAgb2JqZWN0PXt0aGVtZX1cbiAgICAgICAgICBjdXN0b21MaXRlcmFsVG9UcmVlSXRlbT17bGl0ZXJhbCA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiBsaXRlcmFsKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJmdW5jdGlvblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrQ29kZStQcm8mZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPFRyZWVJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgbm9kZUlkPXt1dWlkKCl9XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e1xuICAgICAgICAgICAgICAgICAgICAgICAgPHByZSBjbGFzc05hbWU9e2Ake2NsYXNzZXMucHJlQmxvY2t9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbGFuZ3VhZ2UtamF2YXNjcmlwdCAke2NsYXNzZXMuY29kZUJsb2NrfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGl0ZXJhbC50b1N0cmluZygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NvZGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6IHtcbiAgICAgICAgICAgICAgICBpZiAobGl0ZXJhbC5zdGFydHNXaXRoKFwicmdiYShcIikgJiYgbGl0ZXJhbC5lbmRzV2l0aChcIilcIikpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmdiYS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJlZUl0ZW0gbm9kZUlkPXt1dWlkKCl9IGxhYmVsPXtsaXRlcmFsfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICAgICAgICAqIFVzaW5nIGpzcyBiZWNhdXNlIGl0J3MgdGhlIGNsZWFuZXN0IHdheSB0byBpbmplY3QgdGhlc2Ugc3R5bGVzLlxuICAgICAgICAgICAgICAgICAgICAgICAqIG1ha2VTdHlsZXMgZG9lc24ndCB3b3JrIGJlY2F1c2UgaXQncyBhIGhvb2sgJiBzdHlsZSBwcm9wIGlzIGhpZ2hseSBkaXNjb3VyYWdlZFxuICAgICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICAucmdiYS13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7bGl0ZXJhbH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxUcmVlSXRlbSBub2RlSWQ9e3V1aWQoKX0gbGFiZWw9e2xpdGVyYWx9IC8+O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxUcmVlSXRlbSBub2RlSWQ9e3V1aWQoKX0gbGFiZWw9e2xpdGVyYWwudG9TdHJpbmcoKX0gLz47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/vonnegut/drive/personal-frontend-boilerplate/pages/palette.jsx */")));
            return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_4__["TreeItem"], {
              nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_7___default()(),
              label: literal,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 86
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
              lineNumber: 89
            },
            __self: this
          });
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=palette.js.9f38c0d0511b0df60f76.hot-update.js.map