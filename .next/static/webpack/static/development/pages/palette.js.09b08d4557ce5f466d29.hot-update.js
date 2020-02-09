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
    margin: "16px",
    borderRadius: "4px"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["makePageTitle"])("Palette"))), __jsx("p", {
    className: classes.padding,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Below is the theme object used in this project. Any and all styling should be driven by this object. If for some ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "extreme"), " ", "reason, you need to inject styles outside this theme, please comment the offending code with a clear reason and your name. Additionally, while style injections should be avoided in general, when styles outside of this theme object are injected they should be done so via", " ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "import ", _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"], " from \"@material-ui/core/styles\";"), " rather than inline jss,", " ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "<style jsx>{`.selector { color: red; }`}</style>"), ", or (even worse) style props. Finally, if you believe something should be added to this blurb please bring it up with the team at your next standup. Code and style standards are an evolving thing and they only get better when devs speak their minds."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(_components_ObjectTree__WEBPACK_IMPORTED_MODULE_8__["ObjectTree"], {
    object: theme,
    customLiteralToTreeItem: function customLiteralToTreeItem(literal) {
      switch (typeof literal) {
        case "function":
          return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          }, __jsx("link", {
            href: "https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap",
            rel: "stylesheet",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          })), __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__["TreeItem"], {
            nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_6___default()(),
            label: __jsx("pre", {
              className: "".concat(classes.codeBlock),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              },
              __self: this
            }, __jsx("code", {
              className: "language-javascript",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              },
              __self: this
            }, literal.toString())),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }));

        case "string":
          {
            if (literal.startsWith("rgba(") && literal.endsWith(")")) return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1456904422", [literal]]]) + " " + "rgba-wrapper",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 73
              },
              __self: this
            }, __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__["TreeItem"], {
              nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_6___default()(),
              label: literal,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 74
              },
              __self: this
            })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
              id: "1456904422",
              dynamic: [literal],
              __self: this
            }, ".rgba-wrapper.__jsx-style-dynamic-selector{color:".concat(literal, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92b25uZWd1dC9kcml2ZS9wZXJzb25hbC1mcm9udGVuZC1ib2lsZXJwbGF0ZS9wYWdlcy9wYWxldHRlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRWdDLEFBRzRELG1DQUNyQyIsImZpbGUiOiIvVXNlcnMvdm9ubmVndXQvZHJpdmUvcGVyc29uYWwtZnJvbnRlbmQtYm9pbGVycGxhdGUvcGFnZXMvcGFsZXR0ZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBUcmVlSXRlbSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiXCI7XG5pbXBvcnQgeyB1c2VUaGVtZSwgRGl2aWRlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCB1dWlkIGZyb20gXCJ1dWlkL3Y0XCI7XG5pbXBvcnQgeyBtYWtlUGFnZVRpdGxlIH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlcnNcIjtcbmltcG9ydCB7IE9iamVjdFRyZWUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9PYmplY3RUcmVlXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICBwYWRkaW5nOiB7XG4gICAgcGFkZGluZzogXCIzMnB4XCJcbiAgfSxcbiAgY29kZUJsb2NrOiB7XG4gICAgbWFyZ2luOiBcIjE2cHhcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCJcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57bWFrZVBhZ2VUaXRsZShcIlBhbGV0dGVcIil9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYWRkaW5nfT5cbiAgICAgICAgQmVsb3cgaXMgdGhlIHRoZW1lIG9iamVjdCB1c2VkIGluIHRoaXMgcHJvamVjdC4gQW55IGFuZCBhbGwgc3R5bGluZ1xuICAgICAgICBzaG91bGQgYmUgZHJpdmVuIGJ5IHRoaXMgb2JqZWN0LiBJZiBmb3Igc29tZSA8c3Ryb25nPmV4dHJlbWU8L3N0cm9uZz57XCIgXCJ9XG4gICAgICAgIHJlYXNvbiwgeW91IG5lZWQgdG8gaW5qZWN0IHN0eWxlcyBvdXRzaWRlIHRoaXMgdGhlbWUsIHBsZWFzZSBjb21tZW50IHRoZVxuICAgICAgICBvZmZlbmRpbmcgY29kZSB3aXRoIGEgY2xlYXIgcmVhc29uIGFuZCB5b3VyIG5hbWUuIEFkZGl0aW9uYWxseSwgd2hpbGVcbiAgICAgICAgc3R5bGUgaW5qZWN0aW9ucyBzaG91bGQgYmUgYXZvaWRlZCBpbiBnZW5lcmFsLCB3aGVuIHN0eWxlcyBvdXRzaWRlIG9mXG4gICAgICAgIHRoaXMgdGhlbWUgb2JqZWN0IGFyZSBpbmplY3RlZCB0aGV5IHNob3VsZCBiZSBkb25lIHNvIHZpYXtcIiBcIn1cbiAgICAgICAgPGNvZGU+aW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7PC9jb2RlPiByYXRoZXJcbiAgICAgICAgdGhhbiBpbmxpbmUganNzLHtcIiBcIn1cbiAgICAgICAgPGNvZGU+e1wiPHN0eWxlIGpzeD57YC5zZWxlY3RvciB7IGNvbG9yOiByZWQ7IH1gfTwvc3R5bGU+XCJ9PC9jb2RlPiwgb3JcbiAgICAgICAgKGV2ZW4gd29yc2UpIHN0eWxlIHByb3BzLiBGaW5hbGx5LCBpZiB5b3UgYmVsaWV2ZSBzb21ldGhpbmcgc2hvdWxkIGJlXG4gICAgICAgIGFkZGVkIHRvIHRoaXMgYmx1cmIgcGxlYXNlIGJyaW5nIGl0IHVwIHdpdGggdGhlIHRlYW0gYXQgeW91ciBuZXh0XG4gICAgICAgIHN0YW5kdXAuIENvZGUgYW5kIHN0eWxlIHN0YW5kYXJkcyBhcmUgYW4gZXZvbHZpbmcgdGhpbmcgYW5kIHRoZXkgb25seVxuICAgICAgICBnZXQgYmV0dGVyIHdoZW4gZGV2cyBzcGVhayB0aGVpciBtaW5kcy5cbiAgICAgIDwvcD5cbiAgICAgIDxEaXZpZGVyIC8+XG4gICAgICA8T2JqZWN0VHJlZVxuICAgICAgICBvYmplY3Q9e3RoZW1lfVxuICAgICAgICBjdXN0b21MaXRlcmFsVG9UcmVlSXRlbT17bGl0ZXJhbCA9PiB7XG4gICAgICAgICAgc3dpdGNoICh0eXBlb2YgbGl0ZXJhbCkge1xuICAgICAgICAgICAgY2FzZSBcImZ1bmN0aW9uXCI6XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK0NvZGUrUHJvJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgICA8VHJlZUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgbm9kZUlkPXt1dWlkKCl9XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtcbiAgICAgICAgICAgICAgICAgICAgICA8cHJlIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5jb2RlQmxvY2t9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJsYW5ndWFnZS1qYXZhc2NyaXB0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtsaXRlcmFsLnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2NvZGU+XG4gICAgICAgICAgICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6IHtcbiAgICAgICAgICAgICAgaWYgKGxpdGVyYWwuc3RhcnRzV2l0aChcInJnYmEoXCIpICYmIGxpdGVyYWwuZW5kc1dpdGgoXCIpXCIpKVxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJnYmEtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxUcmVlSXRlbSBub2RlSWQ9e3V1aWQoKX0gbGFiZWw9e2xpdGVyYWx9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7LypcbiAgICAgICAgICAgICAgICAgICAgICogVXNpbmcganNzIGJlY2F1c2UgaXQncyB0aGUgY2xlYW5lc3Qgd2F5IHRvIGluamVjdCB0aGVzZSBzdHlsZXMuXG4gICAgICAgICAgICAgICAgICAgICAqIG1ha2VTdHlsZXMgZG9lc24ndCB3b3JrIGJlY2F1c2UgaXQncyBhIGhvb2sgJiBzdHlsZSBwcm9wIGlzIGhpZ2hseSBkaXNjb3VyYWdlZFxuICAgICAgICAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgICAucmdiYS13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke2xpdGVyYWx9O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgcmV0dXJuIDxUcmVlSXRlbSBub2RlSWQ9e3V1aWQoKX0gbGFiZWw9e2xpdGVyYWx9IC8+O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIDxUcmVlSXRlbSBub2RlSWQ9e3V1aWQoKX0gbGFiZWw9e2xpdGVyYWwudG9TdHJpbmcoKX0gLz47XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucGFkZGluZ31cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/vonnegut/drive/personal-frontend-boilerplate/pages/palette.jsx */")));
            return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__["TreeItem"], {
              nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_6___default()(),
              label: literal,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 87
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
              lineNumber: 90
            },
            __self: this
          });
      }
    },
    className: classes.padding,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=palette.js.09b08d4557ce5f466d29.hot-update.js.map