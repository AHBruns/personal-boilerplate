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
        }, ".rgba-wrapper.__jsx-style-dynamic-selector{color:".concat(literal, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92b25uZWd1dC9kcml2ZS9wZXJzb25hbC1mcm9udGVuZC1ib2lsZXJwbGF0ZS9jb21wb25lbnRzL09iamVjdFRyZWUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCd0IsQUFHb0QsbUNBQ3JDIiwiZmlsZSI6Ii9Vc2Vycy92b25uZWd1dC9kcml2ZS9wZXJzb25hbC1mcm9udGVuZC1ib2lsZXJwbGF0ZS9jb21wb25lbnRzL09iamVjdFRyZWUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgVHJlZVZpZXcsIFRyZWVJdGVtIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9sYWJcIjtcbmltcG9ydCB7IE1kRXhwYW5kTW9yZSwgTWRDaGV2cm9uUmlnaHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCB1dWlkIGZyb20gXCJ1dWlkL3Y0XCI7XG5cbmNvbnN0IGxpdGVyYWxUb1RyZWVJdGVtID0gbGl0ZXJhbCA9PiB7XG4gIHN3aXRjaCAodHlwZW9mIGxpdGVyYWwpIHtcbiAgICBjYXNlIFwiZnVuY3Rpb25cIjpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUcmVlSXRlbVxuICAgICAgICAgIG5vZGVJZD17dXVpZCgpfVxuICAgICAgICAgIGxhYmVsPXs8cHJlIGNsYXNzPVwicHJldHR5cHJpbnQgbGFuZy1qc1wiPntsaXRlcmFsLnRvU3RyaW5nKCl9PC9wcmU+fVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICAvLyBzcGVjaWFsIGNhc2Ugc2hvdWxkIHByb2JhYmx5IGJlIHBhcmFtZXRlcml6ZWRcbiAgICBjYXNlIFwic3RyaW5nXCI6IHtcbiAgICAgIGlmIChsaXRlcmFsLnN0YXJ0c1dpdGgoXCJyZ2JhKFwiKSAmJiBsaXRlcmFsLmVuZHNXaXRoKFwiKVwiKSlcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZ2JhLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPFRyZWVJdGVtIG5vZGVJZD17dXVpZCgpfSBsYWJlbD17bGl0ZXJhbH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qXG4gICAgICAgICAgICAgKiBVc2luZyBqc3MgYmVjYXVzZSBpdCdzIHRoZSBjbGVhbmVzdCB3YXkgdG8gaW5qZWN0IHRoZXNlIHN0eWxlcy5cbiAgICAgICAgICAgICAqIG1ha2VTdHlsZXMgZG9lc24ndCB3b3JrIGJlY2F1c2UgaXQncyBhIGhvb2sgJiBzdHlsZSBwcm9wIGlzIGhpZ2hseSBkaXNjb3VyYWdlZFxuICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAucmdiYS13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHtsaXRlcmFsfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgICAgZWxzZSByZXR1cm4gPFRyZWVJdGVtIG5vZGVJZD17dXVpZCgpfSBsYWJlbD17bGl0ZXJhbH0gLz47XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gPFRyZWVJdGVtIG5vZGVJZD17dXVpZCgpfSBsYWJlbD17bGl0ZXJhbC50b1N0cmluZygpfSAvPjtcbiAgfVxufTtcblxuY29uc3Qgb2JqZWN0VG9UcmVlSXRlbSA9IG9iamVjdCA9PlxuICBPYmplY3QuZW50cmllcyhvYmplY3QpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoXG4gICAgPFRyZWVJdGVtIG5vZGVJZD17dXVpZCgpfSBsYWJlbD17a2V5LnRvU3RyaW5nKCl9PlxuICAgICAge3RvVHJlZUl0ZW1zKHZhbHVlKX1cbiAgICA8L1RyZWVJdGVtPlxuICApKTtcblxuY29uc3QgdG9UcmVlSXRlbXMgPSB0aGluZyA9PiB7XG4gIGlmICh0eXBlb2YgdGhpbmcgPT09IFwib2JqZWN0XCIpIHtcbiAgICAvLyBkb24ndCByZW5kZXIgZW1wdHkgb2JqZWN0c1xuICAgIGlmIChKU09OLnN0cmluZ2lmeSh0aGluZykgPT09IFwie31cIikgcmV0dXJuIDw+PC8+O1xuICAgIGVsc2UgcmV0dXJuIG9iamVjdFRvVHJlZUl0ZW0odGhpbmcpO1xuICB9IGVsc2UgcmV0dXJuIGxpdGVyYWxUb1RyZWVJdGVtKHRoaW5nKTtcbn07XG5cbmV4cG9ydCBjb25zdCBPYmplY3RUcmVlID0gKHsgb2JqZWN0LCBjbGFzc05hbWUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZ29vZ2xlL2NvZGUtcHJldHRpZnlAbWFzdGVyL2xvYWRlci9ydW5fcHJldHRpZnkuanNcIj48L3NjcmlwdD5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxUcmVlVmlld1xuICAgICAgICBkZWZhdWx0Q29sbGFwc2VJY29uPXs8TWRFeHBhbmRNb3JlIC8+fVxuICAgICAgICBkZWZhdWx0RXhwYW5kSWNvbj17PE1kQ2hldnJvblJpZ2h0IC8+fVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgID5cbiAgICAgICAge3RvVHJlZUl0ZW1zKG9iamVjdCl9XG4gICAgICA8L1RyZWVWaWV3PlxuICAgIDwvPlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/vonnegut/drive/personal-frontend-boilerplate/components/ObjectTree.jsx */")));else return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__["TreeItem"], {
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
//# sourceMappingURL=palette.js.88a887bd84cf8fb130f8.hot-update.js.map