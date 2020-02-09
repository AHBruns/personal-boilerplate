module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ObjectTree.jsx":
/*!***********************************!*\
  !*** ./components/ObjectTree.jsx ***!
  \***********************************/
/*! exports provided: ObjectTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectTree", function() { return ObjectTree; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/lab */ "@material-ui/lab");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/vonnegut/drive/personal-frontend-boilerplate/components/ObjectTree.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  treeView: {
    marginLeft: "-9px"
  }
});

const defaultLiteralToTreeItem = literal => {
  switch (typeof literal) {
    case "function":
      return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_1__["TreeItem"], {
        nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_4___default()(),
        label: __jsx("pre", {
          class: "prettyprint",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: undefined
        }, literal.toString()),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: undefined
      });

    default:
      return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_1__["TreeItem"], {
        nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_4___default()(),
        label: literal.toString(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: undefined
      });
  }
};

const objectToTreeItem = (object, literalToTreeItem) => Object.entries(object).map(([key, value]) => __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_1__["TreeItem"], {
  nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_4___default()(),
  label: key.toString(),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, toTreeItems(value, literalToTreeItem)));

const toTreeItems = (thing, customLiteralToTreeItem) => {
  let literalToTreeItem = customLiteralToTreeItem === undefined ? defaultLiteralToTreeItem : customLiteralToTreeItem;

  if (typeof thing === "object") {
    // don't render empty objects
    if (JSON.stringify(thing) === "{}") return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);else return objectToTreeItem(thing, literalToTreeItem);
  } else return literalToTreeItem(thing);
};

const ObjectTree = ({
  object,
  customLiteralToTreeItem,
  className
}) => {
  const classes = useStyles();
  return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_1__["TreeView"], {
    defaultCollapseIcon: __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdExpandMore"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: undefined
    }),
    defaultExpandIcon: __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdChevronRight"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: undefined
    }),
    className: classes.treeView,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, toTreeItems(object, customLiteralToTreeItem));
};

/***/ }),

/***/ "./pages/dev/palette.jsx":
/*!*******************************!*\
  !*** ./pages/dev/palette.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab */ "@material-ui/lab");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/helpers */ "./utils/helpers.js");
/* harmony import */ var _components_ObjectTree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ObjectTree */ "./components/ObjectTree.jsx");
var _jsxFileName = "/Users/vonnegut/drive/personal-frontend-boilerplate/pages/dev/palette.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])({
  wrapper: {
    padding: "32px"
  },
  header: {},
  preBlock: {
    margin: "16px",
    borderRadius: "4px",
    fontFamily: "Source Code Pro",
    border: "1px solid black",
    borderRadius: "4px",
    padding: "4px 10px",
    overflowX: "scroll"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  const classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["makePageTitle"])("Palette"))), __jsx("div", {
    className: classes.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "Explainer"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "body1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Below is the global MaterialUI theme object used throughout this project. Any styles which are used in more than one place or are expected to be used in more than one place throughout this codebase should be defined via this theme object rather than via in-line styles. When injecting one-off styles, developers should use this preference order:", __jsx("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "MaterialUI makeStyles"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "jss"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "style props"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "Theme"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), __jsx(_components_ObjectTree__WEBPACK_IMPORTED_MODULE_8__["ObjectTree"], {
    object: theme,
    customLiteralToTreeItem: literal => {
      switch (typeof literal) {
        case "function":
          return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: undefined
          }, __jsx("link", {
            href: "https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap",
            rel: "stylesheet",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: undefined
          })), __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__["TreeItem"], {
            nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_6___default()(),
            label: __jsx("pre", {
              className: `${classes.preBlock}`,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              },
              __self: undefined
            }, __jsx("code", {
              className: `language-javascript ${classes.codeBlock}`,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              },
              __self: undefined
            }, literal.toString())),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            },
            __self: undefined
          }));

        case "string":
          {
            if (literal.startsWith("rgba(") && literal.endsWith(")")) return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4100267622", [literal]]]) + " " + "rgba-wrapper",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 83
              },
              __self: undefined
            }, __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__["TreeItem"], {
              nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_6___default()(),
              label: literal,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 84
              },
              __self: undefined
            })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
              id: "4100267622",
              dynamic: [literal],
              __self: undefined
            }, `.rgba-wrapper.__jsx-style-dynamic-selector{color:${literal};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92b25uZWd1dC9kcml2ZS9wZXJzb25hbC1mcm9udGVuZC1ib2lsZXJwbGF0ZS9wYWdlcy9kZXYvcGFsZXR0ZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUZrQyxBQUc4RCxtQ0FDckMiLCJmaWxlIjoiL1VzZXJzL3Zvbm5lZ3V0L2RyaXZlL3BlcnNvbmFsLWZyb250ZW5kLWJvaWxlcnBsYXRlL3BhZ2VzL2Rldi9wYWxldHRlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFRyZWVJdGVtIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9sYWJcIjtcbmltcG9ydCB7IHVzZVRoZW1lLCBEaXZpZGVyLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IHV1aWQgZnJvbSBcInV1aWQvdjRcIjtcbmltcG9ydCB7IG1ha2VQYWdlVGl0bGUgfSBmcm9tIFwiLi4vLi4vdXRpbHMvaGVscGVyc1wiO1xuaW1wb3J0IHsgT2JqZWN0VHJlZSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL09iamVjdFRyZWVcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHdyYXBwZXI6IHtcbiAgICBwYWRkaW5nOiBcIjMycHhcIlxuICB9LFxuICBoZWFkZXI6IHt9LFxuICBwcmVCbG9jazoge1xuICAgIG1hcmdpbjogXCIxNnB4XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxuICAgIGZvbnRGYW1pbHk6IFwiU291cmNlIENvZGUgUHJvXCIsXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLFxuICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcbiAgICBwYWRkaW5nOiBcIjRweCAxMHB4XCIsXG4gICAgb3ZlcmZsb3dYOiBcInNjcm9sbFwiXG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e21ha2VQYWdlVGl0bGUoXCJQYWxldHRlXCIpfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+RXhwbGFpbmVyPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIj5cbiAgICAgICAgICBCZWxvdyBpcyB0aGUgZ2xvYmFsIE1hdGVyaWFsVUkgdGhlbWUgb2JqZWN0IHVzZWQgdGhyb3VnaG91dCB0aGlzXG4gICAgICAgICAgcHJvamVjdC4gQW55IHN0eWxlcyB3aGljaCBhcmUgdXNlZCBpbiBtb3JlIHRoYW4gb25lIHBsYWNlIG9yIGFyZVxuICAgICAgICAgIGV4cGVjdGVkIHRvIGJlIHVzZWQgaW4gbW9yZSB0aGFuIG9uZSBwbGFjZSB0aHJvdWdob3V0IHRoaXMgY29kZWJhc2VcbiAgICAgICAgICBzaG91bGQgYmUgZGVmaW5lZCB2aWEgdGhpcyB0aGVtZSBvYmplY3QgcmF0aGVyIHRoYW4gdmlhIGluLWxpbmVcbiAgICAgICAgICBzdHlsZXMuIFdoZW4gaW5qZWN0aW5nIG9uZS1vZmYgc3R5bGVzLCBkZXZlbG9wZXJzIHNob3VsZCB1c2UgdGhpc1xuICAgICAgICAgIHByZWZlcmVuY2Ugb3JkZXI6XG4gICAgICAgICAgPG9sPlxuICAgICAgICAgICAgPGxpPk1hdGVyaWFsVUkgbWFrZVN0eWxlczwvbGk+XG4gICAgICAgICAgICA8bGk+anNzPC9saT5cbiAgICAgICAgICAgIDxsaT5zdHlsZSBwcm9wczwvbGk+XG4gICAgICAgICAgPC9vbD5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5UaGVtZTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgPE9iamVjdFRyZWVcbiAgICAgICAgICBvYmplY3Q9e3RoZW1lfVxuICAgICAgICAgIGN1c3RvbUxpdGVyYWxUb1RyZWVJdGVtPXtsaXRlcmFsID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZW9mIGxpdGVyYWwpIHtcbiAgICAgICAgICAgICAgY2FzZSBcImZ1bmN0aW9uXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStDb2RlK1BybyZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgICAgICA8VHJlZUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICBub2RlSWQ9e3V1aWQoKX1cbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17XG4gICAgICAgICAgICAgICAgICAgICAgICA8cHJlIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5wcmVCbG9ja31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BsYW5ndWFnZS1qYXZhc2NyaXB0ICR7Y2xhc3Nlcy5jb2RlQmxvY2t9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaXRlcmFsLnRvU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjoge1xuICAgICAgICAgICAgICAgIGlmIChsaXRlcmFsLnN0YXJ0c1dpdGgoXCJyZ2JhKFwiKSAmJiBsaXRlcmFsLmVuZHNXaXRoKFwiKVwiKSlcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZ2JhLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmVlSXRlbSBub2RlSWQ9e3V1aWQoKX0gbGFiZWw9e2xpdGVyYWx9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgey8qXG4gICAgICAgICAgICAgICAgICAgICAgICogVXNpbmcganNzIGJlY2F1c2UgaXQncyB0aGUgY2xlYW5lc3Qgd2F5IHRvIGluamVjdCB0aGVzZSBzdHlsZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICogbWFrZVN0eWxlcyBkb2Vzbid0IHdvcmsgYmVjYXVzZSBpdCdzIGEgaG9vayAmIHN0eWxlIHByb3AgaXMgaGlnaGx5IGRpc2NvdXJhZ2VkXG4gICAgICAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZ2JhLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtsaXRlcmFsfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gPFRyZWVJdGVtIG5vZGVJZD17dXVpZCgpfSBsYWJlbD17bGl0ZXJhbH0gLz47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gPFRyZWVJdGVtIG5vZGVJZD17dXVpZCgpfSBsYWJlbD17bGl0ZXJhbC50b1N0cmluZygpfSAvPjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuIl19 */
/*@ sourceURL=/Users/vonnegut/drive/personal-frontend-boilerplate/pages/dev/palette.jsx */`));
            return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__["TreeItem"], {
              nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_6___default()(),
              label: literal,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 97
              },
              __self: undefined
            });
          }

        default:
          return __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__["TreeItem"], {
            nodeId: uuid_v4__WEBPACK_IMPORTED_MODULE_6___default()(),
            label: literal.toString(),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            },
            __self: undefined
          });
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  })));
});

/***/ }),

/***/ "./utils/constants.js":
/*!****************************!*\
  !*** ./utils/constants.js ***!
  \****************************/
/*! exports provided: applicationName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applicationName", function() { return applicationName; });
const applicationName = "Default";

/***/ }),

/***/ "./utils/helpers.js":
/*!**************************!*\
  !*** ./utils/helpers.js ***!
  \**************************/
/*! exports provided: makePageTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePageTitle", function() { return makePageTitle; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./utils/constants.js");

const makePageTitle = pageName => `${_constants__WEBPACK_IMPORTED_MODULE_0__["applicationName"]} | ${pageName}`;

/***/ }),

/***/ 4:
/*!*************************************!*\
  !*** multi ./pages/dev/palette.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vonnegut/drive/personal-frontend-boilerplate/pages/dev/palette.jsx */"./pages/dev/palette.jsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/lab":
/*!***********************************!*\
  !*** external "@material-ui/lab" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ })

/******/ });
//# sourceMappingURL=palette.js.map