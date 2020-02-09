webpackHotUpdate("static/development/pages/palette.js",{

/***/ "./pages/palette.jsx":
/*!***************************!*\
  !*** ./pages/palette.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/helpers */ "./utils/helpers.js");
/* harmony import */ var _components_ObjectTree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ObjectTree */ "./components/ObjectTree.jsx");
var _jsxFileName = "/Users/vonnegut/drive/personal-frontend-boilerplate/pages/palette.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])({
  padding: {
    padding: "32px"
  },
  codeBlock: {
    margin: "0"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["makePageTitle"])("Palette"))), __jsx("p", {
    className: classes.padding,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Below is the theme object used in this project. Any and all styling should be driven by this object. If for some ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "extreme"), " ", "reason, you need to inject styles outside this theme, please comment the offending code with a clear reason and your name. Additionally, while style injections should be avoided in general, when styles outside of this theme object are injected they should be done so via", " ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "import ", _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"], " from \"@material-ui/core/styles\";"), " rather than inline jss,", " ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "<style jsx>{`.selector { color: red; }`}</style>"), ", or (even worse) style props. Finally, if you believe something should be added to this blurb please bring it up with the team at your next standup. Code and style standards are an evolving thing and they only get better when devs speak their minds."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx(_components_ObjectTree__WEBPACK_IMPORTED_MODULE_8__["ObjectTree"], {
    object: theme,
    customLiteralToTreeItem: function customLiteralToTreeItem(literal) {
      switch (typeof literal) {
        case "function":
          return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__["TreeItem"], {
            nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_6___default()(),
            label: __jsx("pre", {
              "class": "prettyprint lang-js linenums" //className={classes.codeBlock}
              ,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              },
              __self: this
            }, literal.toString()),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          });

        case "string":
          {
            if (literal.startsWith("rgba(") && literal.endsWith(")")) return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1456904422", [literal]]]) + " " + "rgba-wrapper",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              },
              __self: this
            }, __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__["TreeItem"], {
              nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_6___default()(),
              label: literal,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 66
              },
              __self: this
            })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
              id: "1456904422",
              dynamic: [literal],
              __self: this
            }, ".rgba-wrapper.__jsx-style-dynamic-selector{color:".concat(literal, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92b25uZWd1dC9kcml2ZS9wZXJzb25hbC1mcm9udGVuZC1ib2lsZXJwbGF0ZS9wYWdlcy9wYWxldHRlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RWdDLEFBRzRELG1DQUNyQyIsImZpbGUiOiIvVXNlcnMvdm9ubmVndXQvZHJpdmUvcGVyc29uYWwtZnJvbnRlbmQtYm9pbGVycGxhdGUvcGFnZXMvcGFsZXR0ZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBUcmVlSXRlbSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XG5pbXBvcnQgeyB1c2VUaGVtZSwgRGl2aWRlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCB1dWlkIGZyb20gXCJ1dWlkL3Y0XCI7XG5pbXBvcnQgeyBtYWtlUGFnZVRpdGxlIH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlcnNcIjtcbmltcG9ydCB7IE9iamVjdFRyZWUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9PYmplY3RUcmVlXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICBwYWRkaW5nOiB7XG4gICAgcGFkZGluZzogXCIzMnB4XCJcbiAgfSxcbiAgY29kZUJsb2NrOiB7XG4gICAgbWFyZ2luOiBcIjBcIlxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnttYWtlUGFnZVRpdGxlKFwiUGFsZXR0ZVwiKX08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnBhZGRpbmd9PlxuICAgICAgICBCZWxvdyBpcyB0aGUgdGhlbWUgb2JqZWN0IHVzZWQgaW4gdGhpcyBwcm9qZWN0LiBBbnkgYW5kIGFsbCBzdHlsaW5nXG4gICAgICAgIHNob3VsZCBiZSBkcml2ZW4gYnkgdGhpcyBvYmplY3QuIElmIGZvciBzb21lIDxzdHJvbmc+ZXh0cmVtZTwvc3Ryb25nPntcIiBcIn1cbiAgICAgICAgcmVhc29uLCB5b3UgbmVlZCB0byBpbmplY3Qgc3R5bGVzIG91dHNpZGUgdGhpcyB0aGVtZSwgcGxlYXNlIGNvbW1lbnQgdGhlXG4gICAgICAgIG9mZmVuZGluZyBjb2RlIHdpdGggYSBjbGVhciByZWFzb24gYW5kIHlvdXIgbmFtZS4gQWRkaXRpb25hbGx5LCB3aGlsZVxuICAgICAgICBzdHlsZSBpbmplY3Rpb25zIHNob3VsZCBiZSBhdm9pZGVkIGluIGdlbmVyYWwsIHdoZW4gc3R5bGVzIG91dHNpZGUgb2ZcbiAgICAgICAgdGhpcyB0aGVtZSBvYmplY3QgYXJlIGluamVjdGVkIHRoZXkgc2hvdWxkIGJlIGRvbmUgc28gdmlhe1wiIFwifVxuICAgICAgICA8Y29kZT5pbXBvcnQge21ha2VTdHlsZXN9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjs8L2NvZGU+IHJhdGhlclxuICAgICAgICB0aGFuIGlubGluZSBqc3Mse1wiIFwifVxuICAgICAgICA8Y29kZT57XCI8c3R5bGUganN4PntgLnNlbGVjdG9yIHsgY29sb3I6IHJlZDsgfWB9PC9zdHlsZT5cIn08L2NvZGU+LCBvclxuICAgICAgICAoZXZlbiB3b3JzZSkgc3R5bGUgcHJvcHMuIEZpbmFsbHksIGlmIHlvdSBiZWxpZXZlIHNvbWV0aGluZyBzaG91bGQgYmVcbiAgICAgICAgYWRkZWQgdG8gdGhpcyBibHVyYiBwbGVhc2UgYnJpbmcgaXQgdXAgd2l0aCB0aGUgdGVhbSBhdCB5b3VyIG5leHRcbiAgICAgICAgc3RhbmR1cC4gQ29kZSBhbmQgc3R5bGUgc3RhbmRhcmRzIGFyZSBhbiBldm9sdmluZyB0aGluZyBhbmQgdGhleSBvbmx5XG4gICAgICAgIGdldCBiZXR0ZXIgd2hlbiBkZXZzIHNwZWFrIHRoZWlyIG1pbmRzLlxuICAgICAgPC9wPlxuICAgICAgPERpdmlkZXIgLz5cbiAgICAgIDxPYmplY3RUcmVlXG4gICAgICAgIG9iamVjdD17dGhlbWV9XG4gICAgICAgIGN1c3RvbUxpdGVyYWxUb1RyZWVJdGVtPXtsaXRlcmFsID0+IHtcbiAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiBsaXRlcmFsKSB7XG4gICAgICAgICAgICBjYXNlIFwiZnVuY3Rpb25cIjpcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8VHJlZUl0ZW1cbiAgICAgICAgICAgICAgICAgIG5vZGVJZD17dXVpZCgpfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9e1xuICAgICAgICAgICAgICAgICAgICA8cHJlXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwcmV0dHlwcmludCBsYW5nLWpzIGxpbmVudW1zXCJcbiAgICAgICAgICAgICAgICAgICAgICAvL2NsYXNzTmFtZT17Y2xhc3Nlcy5jb2RlQmxvY2t9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7bGl0ZXJhbC50b1N0cmluZygpfVxuICAgICAgICAgICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgY2FzZSBcInN0cmluZ1wiOiB7XG4gICAgICAgICAgICAgIGlmIChsaXRlcmFsLnN0YXJ0c1dpdGgoXCJyZ2JhKFwiKSAmJiBsaXRlcmFsLmVuZHNXaXRoKFwiKVwiKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZ2JhLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8VHJlZUl0ZW0gbm9kZUlkPXt1dWlkKCl9IGxhYmVsPXtsaXRlcmFsfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgey8qXG4gICAgICAgICAgICAgICAgICAgICAqIFVzaW5nIGpzcyBiZWNhdXNlIGl0J3MgdGhlIGNsZWFuZXN0IHdheSB0byBpbmplY3QgdGhlc2Ugc3R5bGVzLlxuICAgICAgICAgICAgICAgICAgICAgKiBtYWtlU3R5bGVzIGRvZXNuJ3Qgd29yayBiZWNhdXNlIGl0J3MgYSBob29rICYgc3R5bGUgcHJvcCBpcyBoaWdobHkgZGlzY291cmFnZWRcbiAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgLnJnYmEtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtsaXRlcmFsfTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHJldHVybiA8VHJlZUl0ZW0gbm9kZUlkPXt1dWlkKCl9IGxhYmVsPXtsaXRlcmFsfSAvPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiA8VHJlZUl0ZW0gbm9kZUlkPXt1dWlkKCl9IGxhYmVsPXtsaXRlcmFsLnRvU3RyaW5nKCl9IC8+O1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnBhZGRpbmd9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/vonnegut/drive/personal-frontend-boilerplate/pages/palette.jsx */")));
            return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__["TreeItem"], {
              nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_6___default()(),
              label: literal,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 79
              },
              __self: this
            });
          }

        default:
          return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__["TreeItem"], {
            nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_6___default()(),
            label: literal.toString(),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          });
      }
    },
    className: classes.padding,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=palette.js.3de33833ae22ae46e010.hot-update.js.map