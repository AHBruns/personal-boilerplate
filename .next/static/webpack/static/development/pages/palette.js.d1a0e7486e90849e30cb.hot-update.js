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

var _jsxFileName = "/Users/vonnegut/drive/personal-frontend-boilerplate/pages/palette.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({
  padding: {
    padding: "32px"
  },
  preBlock: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
    margin: "16px",
    borderRadius: "4px",
    fontFamily: "Source Code Pro",
    border: "1px solid black"
  }, "borderRadius", "10px"),
  codeBlock: {
    padding: "10px"
  }
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
  }, Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_8__["makePageTitle"])("Palette"))), __jsx("p", {
    className: classes.padding,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Below is the theme object used in this project. Any and all styling should be driven by this object. If for some ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "extreme"), " ", "reason, you need to inject styles outside this theme, please comment the offending code with a clear reason and your name. Additionally, while style injections should be avoided in general, when styles outside of this theme object are injected they should be done so via", " ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "import ", _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"], " from \"@material-ui/core/styles\";"), " rather than inline jss,", " ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "<style jsx>{`.selector { color: red; }`}</style>"), ", or (even worse) style props. Finally, if you believe something should be added to this blurb please bring it up with the team at your next standup. Code and style standards are an evolving thing and they only get better when devs speak their minds."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
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
              lineNumber: 57
            },
            __self: this
          }, __jsx("link", {
            href: "https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap",
            rel: "stylesheet",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          })), __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_4__["TreeItem"], {
            nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_7___default()(),
            label: __jsx("pre", {
              className: "".concat(classes.preBlock),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 66
              },
              __self: this
            }, __jsx("code", {
              className: "language-javascript ".concat(classes.codeBlock),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              },
              __self: this
            }, literal.toString())),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            },
            __self: this
          }));

        case "string":
          {
            if (literal.startsWith("rgba(") && literal.endsWith(")")) return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1456904422", [literal]]]) + " " + "rgba-wrapper",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 81
              },
              __self: this
            }, __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_4__["TreeItem"], {
              nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_7___default()(),
              label: literal,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 82
              },
              __self: this
            })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
              id: "1456904422",
              dynamic: [literal],
              __self: this
            }, ".rgba-wrapper.__jsx-style-dynamic-selector{color:".concat(literal, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92b25uZWd1dC9kcml2ZS9wZXJzb25hbC1mcm9udGVuZC1ib2lsZXJwbGF0ZS9wYWdlcy9wYWxldHRlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RmdDLEFBRzRELG1DQUNyQyIsImZpbGUiOiIvVXNlcnMvdm9ubmVndXQvZHJpdmUvcGVyc29uYWwtZnJvbnRlbmQtYm9pbGVycGxhdGUvcGFnZXMvcGFsZXR0ZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBUcmVlSXRlbSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XG5pbXBvcnQgeyB1c2VUaGVtZSwgRGl2aWRlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCB1dWlkIGZyb20gXCJ1dWlkL3Y0XCI7XG5pbXBvcnQgeyBtYWtlUGFnZVRpdGxlIH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlcnNcIjtcbmltcG9ydCB7IE9iamVjdFRyZWUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9PYmplY3RUcmVlXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICBwYWRkaW5nOiB7XG4gICAgcGFkZGluZzogXCIzMnB4XCJcbiAgfSxcbiAgcHJlQmxvY2s6IHtcbiAgICBtYXJnaW46IFwiMTZweFwiLFxuICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcbiAgICBmb250RmFtaWx5OiBcIlNvdXJjZSBDb2RlIFByb1wiLFxuICAgIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiXG4gIH0sXG4gIGNvZGVCbG9jazoge1xuICAgIHBhZGRpbmc6IFwiMTBweFwiXG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e21ha2VQYWdlVGl0bGUoXCJQYWxldHRlXCIpfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMucGFkZGluZ30+XG4gICAgICAgIEJlbG93IGlzIHRoZSB0aGVtZSBvYmplY3QgdXNlZCBpbiB0aGlzIHByb2plY3QuIEFueSBhbmQgYWxsIHN0eWxpbmdcbiAgICAgICAgc2hvdWxkIGJlIGRyaXZlbiBieSB0aGlzIG9iamVjdC4gSWYgZm9yIHNvbWUgPHN0cm9uZz5leHRyZW1lPC9zdHJvbmc+e1wiIFwifVxuICAgICAgICByZWFzb24sIHlvdSBuZWVkIHRvIGluamVjdCBzdHlsZXMgb3V0c2lkZSB0aGlzIHRoZW1lLCBwbGVhc2UgY29tbWVudCB0aGVcbiAgICAgICAgb2ZmZW5kaW5nIGNvZGUgd2l0aCBhIGNsZWFyIHJlYXNvbiBhbmQgeW91ciBuYW1lLiBBZGRpdGlvbmFsbHksIHdoaWxlXG4gICAgICAgIHN0eWxlIGluamVjdGlvbnMgc2hvdWxkIGJlIGF2b2lkZWQgaW4gZ2VuZXJhbCwgd2hlbiBzdHlsZXMgb3V0c2lkZSBvZlxuICAgICAgICB0aGlzIHRoZW1lIG9iamVjdCBhcmUgaW5qZWN0ZWQgdGhleSBzaG91bGQgYmUgZG9uZSBzbyB2aWF7XCIgXCJ9XG4gICAgICAgIDxjb2RlPmltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiOzwvY29kZT4gcmF0aGVyXG4gICAgICAgIHRoYW4gaW5saW5lIGpzcyx7XCIgXCJ9XG4gICAgICAgIDxjb2RlPntcIjxzdHlsZSBqc3g+e2Auc2VsZWN0b3IgeyBjb2xvcjogcmVkOyB9YH08L3N0eWxlPlwifTwvY29kZT4sIG9yXG4gICAgICAgIChldmVuIHdvcnNlKSBzdHlsZSBwcm9wcy4gRmluYWxseSwgaWYgeW91IGJlbGlldmUgc29tZXRoaW5nIHNob3VsZCBiZVxuICAgICAgICBhZGRlZCB0byB0aGlzIGJsdXJiIHBsZWFzZSBicmluZyBpdCB1cCB3aXRoIHRoZSB0ZWFtIGF0IHlvdXIgbmV4dFxuICAgICAgICBzdGFuZHVwLiBDb2RlIGFuZCBzdHlsZSBzdGFuZGFyZHMgYXJlIGFuIGV2b2x2aW5nIHRoaW5nIGFuZCB0aGV5IG9ubHlcbiAgICAgICAgZ2V0IGJldHRlciB3aGVuIGRldnMgc3BlYWsgdGhlaXIgbWluZHMuXG4gICAgICA8L3A+XG4gICAgICA8RGl2aWRlciAvPlxuICAgICAgPE9iamVjdFRyZWVcbiAgICAgICAgb2JqZWN0PXt0aGVtZX1cbiAgICAgICAgY3VzdG9tTGl0ZXJhbFRvVHJlZUl0ZW09e2xpdGVyYWwgPT4ge1xuICAgICAgICAgIHN3aXRjaCAodHlwZW9mIGxpdGVyYWwpIHtcbiAgICAgICAgICAgIGNhc2UgXCJmdW5jdGlvblwiOlxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStDb2RlK1BybyZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgICAgPFRyZWVJdGVtXG4gICAgICAgICAgICAgICAgICAgIG5vZGVJZD17dXVpZCgpfVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17XG4gICAgICAgICAgICAgICAgICAgICAgPHByZSBjbGFzc05hbWU9e2Ake2NsYXNzZXMucHJlQmxvY2t9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Y29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BsYW5ndWFnZS1qYXZhc2NyaXB0ICR7Y2xhc3Nlcy5jb2RlQmxvY2t9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2xpdGVyYWwudG9TdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjoge1xuICAgICAgICAgICAgICBpZiAobGl0ZXJhbC5zdGFydHNXaXRoKFwicmdiYShcIikgJiYgbGl0ZXJhbC5lbmRzV2l0aChcIilcIikpXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmdiYS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFRyZWVJdGVtIG5vZGVJZD17dXVpZCgpfSBsYWJlbD17bGl0ZXJhbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICAgICAgKiBVc2luZyBqc3MgYmVjYXVzZSBpdCdzIHRoZSBjbGVhbmVzdCB3YXkgdG8gaW5qZWN0IHRoZXNlIHN0eWxlcy5cbiAgICAgICAgICAgICAgICAgICAgICogbWFrZVN0eWxlcyBkb2Vzbid0IHdvcmsgYmVjYXVzZSBpdCdzIGEgaG9vayAmIHN0eWxlIHByb3AgaXMgaGlnaGx5IGRpc2NvdXJhZ2VkXG4gICAgICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAgIC5yZ2JhLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7bGl0ZXJhbH07XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICByZXR1cm4gPFRyZWVJdGVtIG5vZGVJZD17dXVpZCgpfSBsYWJlbD17bGl0ZXJhbH0gLz47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gPFRyZWVJdGVtIG5vZGVJZD17dXVpZCgpfSBsYWJlbD17bGl0ZXJhbC50b1N0cmluZygpfSAvPjtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYWRkaW5nfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/vonnegut/drive/personal-frontend-boilerplate/pages/palette.jsx */")));
            return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_4__["TreeItem"], {
              nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_7___default()(),
              label: literal,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 95
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
              lineNumber: 98
            },
            __self: this
          });
      }
    },
    className: classes.padding,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=palette.js.d1a0e7486e90849e30cb.hot-update.js.map