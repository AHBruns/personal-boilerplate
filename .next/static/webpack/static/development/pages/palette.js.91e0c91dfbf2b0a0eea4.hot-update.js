webpackHotUpdate("static/development/pages/palette.js",{

/***/ "./components/ObjectTree.jsx":
/*!***********************************!*\
  !*** ./components/ObjectTree.jsx ***!
  \***********************************/
/*! exports provided: ObjectTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectTree", function() { return ObjectTree; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "/Users/vonnegut/drive/personal-frontend-boilerplate/components/ObjectTree.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;





var literalToTreeItem = function literalToTreeItem(literal) {
  switch (typeof literal) {
    case "function":
      return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__["TreeItem"], {
        nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_8___default()(),
        label: __jsx("pre", {
          "class": "prettyprint lang-js",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }, literal.toString()),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      });
    // special case should probably be parameterized

    case "string":
      {
        if (literal.startsWith("rgba(") && literal.endsWith(")")) return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("div", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["2726034019", [literal]]]) + " " + "rgba-wrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__["TreeItem"], {
          nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_8___default()(),
          label: literal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
          id: "2726034019",
          dynamic: [literal],
          __self: this
        }, ".rgba-wrapper.__jsx-style-dynamic-selector{color:".concat(literal, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92b25uZWd1dC9kcml2ZS9wZXJzb25hbC1mcm9udGVuZC1ib2lsZXJwbGF0ZS9jb21wb25lbnRzL09iamVjdFRyZWUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCd0IsQUFHb0QsbUNBQ3JDIiwiZmlsZSI6Ii9Vc2Vycy92b25uZWd1dC9kcml2ZS9wZXJzb25hbC1mcm9udGVuZC1ib2lsZXJwbGF0ZS9jb21wb25lbnRzL09iamVjdFRyZWUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgVHJlZVZpZXcsIFRyZWVJdGVtIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9sYWJcIjtcbmltcG9ydCB7IE1kRXhwYW5kTW9yZSwgTWRDaGV2cm9uUmlnaHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCB1dWlkIGZyb20gXCJ1dWlkL3Y0XCI7XG5cbmNvbnN0IGxpdGVyYWxUb1RyZWVJdGVtID0gbGl0ZXJhbCA9PiB7XG4gIHN3aXRjaCAodHlwZW9mIGxpdGVyYWwpIHtcbiAgICBjYXNlIFwiZnVuY3Rpb25cIjpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUcmVlSXRlbVxuICAgICAgICAgIG5vZGVJZD17dXVpZCgpfVxuICAgICAgICAgIGxhYmVsPXs8cHJlIGNsYXNzPVwicHJldHR5cHJpbnQgbGFuZy1qc1wiPntsaXRlcmFsLnRvU3RyaW5nKCl9PC9wcmU+fVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICAvLyBzcGVjaWFsIGNhc2Ugc2hvdWxkIHByb2JhYmx5IGJlIHBhcmFtZXRlcml6ZWRcbiAgICBjYXNlIFwic3RyaW5nXCI6IHtcbiAgICAgIGlmIChsaXRlcmFsLnN0YXJ0c1dpdGgoXCJyZ2JhKFwiKSAmJiBsaXRlcmFsLmVuZHNXaXRoKFwiKVwiKSlcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZ2JhLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPFRyZWVJdGVtIG5vZGVJZD17dXVpZCgpfSBsYWJlbD17bGl0ZXJhbH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qXG4gICAgICAgICAgICAgKiBVc2luZyBqc3MgYmVjYXVzZSBpdCdzIHRoZSBjbGVhbmVzdCB3YXkgdG8gaW5qZWN0IHRoZXNlIHN0eWxlcy5cbiAgICAgICAgICAgICAqIG1ha2VTdHlsZXMgZG9lc24ndCB3b3JrIGJlY2F1c2UgaXQncyBhIGhvb2sgJiBzdHlsZSBwcm9wIGlzIGhpZ2hseSBkaXNjb3VyYWdlZFxuICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAucmdiYS13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHtsaXRlcmFsfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgICAgcmV0dXJuIDxUcmVlSXRlbSBub2RlSWQ9e3V1aWQoKX0gbGFiZWw9e2xpdGVyYWx9IC8+O1xuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIDxUcmVlSXRlbSBub2RlSWQ9e3V1aWQoKX0gbGFiZWw9e2xpdGVyYWwudG9TdHJpbmcoKX0gLz47XG4gIH1cbn07XG5cbmNvbnN0IG9iamVjdFRvVHJlZUl0ZW0gPSBvYmplY3QgPT5cbiAgT2JqZWN0LmVudHJpZXMob2JqZWN0KS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKFxuICAgIDxUcmVlSXRlbSBub2RlSWQ9e3V1aWQoKX0gbGFiZWw9e2tleS50b1N0cmluZygpfT5cbiAgICAgIHt0b1RyZWVJdGVtcyh2YWx1ZSl9XG4gICAgPC9UcmVlSXRlbT5cbiAgKSk7XG5cbmNvbnN0IHRvVHJlZUl0ZW1zID0gdGhpbmcgPT4ge1xuICBpZiAodHlwZW9mIHRoaW5nID09PSBcIm9iamVjdFwiKSB7XG4gICAgLy8gZG9uJ3QgcmVuZGVyIGVtcHR5IG9iamVjdHNcbiAgICBpZiAoSlNPTi5zdHJpbmdpZnkodGhpbmcpID09PSBcInt9XCIpIHJldHVybiA8PjwvPjtcbiAgICBlbHNlIHJldHVybiBvYmplY3RUb1RyZWVJdGVtKHRoaW5nKTtcbiAgfSBlbHNlIHJldHVybiBsaXRlcmFsVG9UcmVlSXRlbSh0aGluZyk7XG59O1xuXG5leHBvcnQgY29uc3QgT2JqZWN0VHJlZSA9ICh7IG9iamVjdCwgY2xhc3NOYW1lIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2dvb2dsZS9jb2RlLXByZXR0aWZ5QG1hc3Rlci9sb2FkZXIvcnVuX3ByZXR0aWZ5LmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8VHJlZVZpZXdcbiAgICAgICAgZGVmYXVsdENvbGxhcHNlSWNvbj17PE1kRXhwYW5kTW9yZSAvPn1cbiAgICAgICAgZGVmYXVsdEV4cGFuZEljb249ezxNZENoZXZyb25SaWdodCAvPn1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICA+XG4gICAgICAgIHt0b1RyZWVJdGVtcyhvYmplY3QpfVxuICAgICAgPC9UcmVlVmlldz5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/vonnegut/drive/personal-frontend-boilerplate/components/ObjectTree.jsx */")));
        return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__["TreeItem"], {
          nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_8___default()(),
          label: literal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        });
      }

    default:
      return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__["TreeItem"], {
        nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_8___default()(),
        label: literal.toString(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      });
  }
};

var objectToTreeItem = function objectToTreeItem(object) {
  return _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default()(object).map(function (_ref) {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__["TreeItem"], {
      nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_8___default()(),
      label: key.toString(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, toTreeItems(value));
  });
};

var toTreeItems = function toTreeItems(thing) {
  if (typeof thing === "object") {
    // don't render empty objects
    if (_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(thing) === "{}") return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null);else return objectToTreeItem(thing);
  } else return literalToTreeItem(thing);
};

var ObjectTree = function ObjectTree(_ref3) {
  var object = _ref3.object,
      className = _ref3.className;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("script", {
    src: "https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })), __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__["TreeView"], {
    defaultCollapseIcon: __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_7__["MdExpandMore"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }),
    defaultExpandIcon: __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_7__["MdChevronRight"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }),
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, toTreeItems(object)));
};

/***/ })

})
//# sourceMappingURL=palette.js.91e0c91dfbf2b0a0eea4.hot-update.js.map