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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "/Users/vonnegut/drive/personal-frontend-boilerplate/components/ObjectTree.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var useStyles = makeStyles({
  padding: {
    padding: "32px"
  }
});

var literalToTreeItem = function literalToTreeItem(literal, classes) {
  switch (typeof literal) {
    case "function":
      return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_5__["TreeItem"], {
        nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_7___default()(),
        label: __jsx("pre", {
          "class": "prettyprint lang-js",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }, literal.toString()),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      });

    case "string":
      return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_5__["TreeItem"], {
        nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_7___default()(),
        label: __jsx("pre", {
          "class": "prettyprint lang-js",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, literal.toString()),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      });

    default:
      return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_5__["TreeItem"], {
        nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_7___default()(),
        label: literal.toString(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      });
  }
};

var objectToTreeItem = function objectToTreeItem(object, classes) {
  return _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default()(object).map(function (_ref) {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_5__["TreeItem"], {
      nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_7___default()(),
      label: key.toString(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, toTreeItems(value));
  });
};

var toTreeItems = function toTreeItems(thing, classes) {
  if (typeof thing === "object") {
    // don't render empty objects
    if (_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(thing) === "{}") return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null);else return objectToTreeItem(thing);
  } else return literalToTreeItem(thing);
};

var ObjectTree = function ObjectTree(_ref3) {
  var object = _ref3.object,
      className = _ref3.className;
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("script", {
    src: "https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_5__["TreeView"], {
    defaultCollapseIcon: __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_6__["MdExpandMore"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }),
    defaultExpandIcon: __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_6__["MdChevronRight"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }),
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, toTreeItems(object, classes)));
};

/***/ })

})
//# sourceMappingURL=palette.js.2aeb860d839539752aae.hot-update.js.map