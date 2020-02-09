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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_8__);





var _preBlock,
    _jsxFileName = "/Users/vonnegut/drive/personal-frontend-boilerplate/components/ObjectTree.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({
  wrapper: {
    padding: "32px"
  },
  preBlock: (_preBlock = {
    margin: "16px",
    borderRadius: "4px",
    fontFamily: "Source Code Pro",
    border: "1px solid black"
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_preBlock, "borderRadius", "4px"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_preBlock, "padding", "4px 10px"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_preBlock, "overflowX", "scroll"), _preBlock)
});

var defaultLiteralToTreeItem = function defaultLiteralToTreeItem(literal) {
  switch (typeof literal) {
    case "function":
      return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_5__["TreeItem"], {
        nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_8___default()(),
        label: __jsx("pre", {
          "class": "prettyprint",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, literal.toString()),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      });

    default:
      return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_5__["TreeItem"], {
        nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_8___default()(),
        label: literal.toString(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      });
  }
};

var objectToTreeItem = function objectToTreeItem(object, literalToTreeItem) {
  return _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default()(object).map(function (_ref) {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_5__["TreeItem"], {
      nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_8___default()(),
      label: key.toString(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, toTreeItems(value, literalToTreeItem));
  });
};

var toTreeItems = function toTreeItems(thing, customLiteralToTreeItem) {
  var literalToTreeItem = customLiteralToTreeItem === undefined ? defaultLiteralToTreeItem : customLiteralToTreeItem;

  if (typeof thing === "object") {
    // don't render empty objects
    if (_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(thing) === "{}") return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null);else return objectToTreeItem(thing, literalToTreeItem);
  } else return literalToTreeItem(thing);
};

var ObjectTree = function ObjectTree(_ref3) {
  var object = _ref3.object,
      customLiteralToTreeItem = _ref3.customLiteralToTreeItem,
      className = _ref3.className;
  return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_5__["TreeView"], {
    defaultCollapseIcon: __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_7__["MdExpandMore"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }),
    defaultExpandIcon: __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_7__["MdChevronRight"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, toTreeItems(object, customLiteralToTreeItem));
};

/***/ })

})
//# sourceMappingURL=palette.js.ee9558c0e0c31da768ac.hot-update.js.map