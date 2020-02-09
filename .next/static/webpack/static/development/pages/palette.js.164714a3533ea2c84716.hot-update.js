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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/vonnegut/drive/personal-frontend-boilerplate/components/ObjectTree.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




var toTreeItems = function toTreeItems(object) {
  switch (typeof object) {
    case "object":
      {}

    default:
      {
        __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__["TreeItem"], {
          nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_8___default()(),
          label: object.toString(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        });
      }
  }

  var entries = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_4___default()(object);

  return entries.map(function (_ref) {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    switch (typeof key) {}

    switch (typeof value) {
      case "number":
        return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__["TreeItem"], {
          nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_8___default()(),
          label: key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        });

      case "string":
        return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__["TreeItem"], {
          nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_8___default()(),
          label: key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__["TreeItem"], {
          nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_8___default()(),
          label: value,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }));

      case "object":
        if (_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(value) === "{}") return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null);

        if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(value)) {
          var arrayEntries = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(value);

          return arrayEntries.map(toTreeItems);
        } else return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__["TreeItem"], {
          nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_8___default()(),
          label: key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, toTreeItems(value));

      default:
        return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__["TreeItem"], {
          nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_8___default()(),
          label: key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__["TreeItem"], {
          nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_8___default()(),
          label: "UNKNOWN TYPE: ".concat(typeof value),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }));
    }
  });
};

var ObjectTree = function ObjectTree(_ref3) {
  var object = _ref3.object;
  return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__["TreeView"], {
    defaultCollapseIcon: __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_7__["MdExpandMore"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }),
    defaultExpandIcon: __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_7__["MdExpandLess"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, toTreeItems(object));
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "./node_modules/core-js/library/fn/object/values.js");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/values.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/values.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.values */ "./node_modules/core-js/library/modules/es7.object.values.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.values;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.object.values.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.object.values.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/library/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ })

})
//# sourceMappingURL=palette.js.164714a3533ea2c84716.hot-update.js.map