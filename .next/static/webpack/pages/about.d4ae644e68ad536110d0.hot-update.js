"use strict";
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_board__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/board */ "./components/board.js");
/* harmony import */ var _database_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../database/data */ "./database/data.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\aledi\\OneDrive\\Documents\\Cursos\\Platzi Master\\P1 Sistema de evaluacion\\Nueva carpeta\\pages\\about.js",
    _this = undefined,
    _s = $RefreshSig$();









var About = function About() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      questionList = _useState[0],
      setQuestionList = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.fetch('/api/exam').then(function (response) {
      return response.json();
    }).then(function (_ref) {
      var data = _ref.data;
      console.log(data[0]);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("title", {
          children: "NextProject -  About "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
        children: "Welcome to Next.js! This is About"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_board__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this);
}; //*{questionList.map((question) => (
//*<div> {console.log(data[0])}
//*</div>


_s(About, "jV5/Rk/qgjW3ankKagSnEUwt3Vg=");

_c = About;
/* harmony default export */ __webpack_exports__["default"] = (About);

var _c;

$RefreshReg$(_c, "About");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuZDRhZTY0NGU2OGFkNTM2MTEwZDAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBSUEsSUFBTVEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNoQixrQkFBd0NOLCtDQUFRLENBQUMsRUFBRCxDQUFoRDtBQUFBLE1BQU9PLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBRUFULEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaVSxJQUFBQSxNQUFNLENBQ0xOLEtBREQsQ0FDTyxXQURQLEVBRUNPLElBRkQsQ0FFTSxVQUFDQyxRQUFEO0FBQUEsYUFBYUEsUUFBUSxDQUFDQyxJQUFULEVBQWI7QUFBQSxLQUZOLEVBR0NGLElBSEQsQ0FHTSxnQkFBWTtBQUFBLFVBQVZHLElBQVUsUUFBVkEsSUFBVTtBQUFDQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBSSxDQUFDLENBQUQsQ0FBaEI7QUFDbEIsS0FKRDtBQUtILEdBTlEsRUFNTixFQU5NLENBQVQ7QUFRQSxzQkFDQTtBQUFBLDJCQUNJLDhEQUFDLDBEQUFEO0FBQUEsOEJBQ0EsOERBQUMsa0RBQUQ7QUFBQSwrQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQUlKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkksZUFLQSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURBO0FBYUUsQ0F4Qk4sRUF5QkE7QUFDSTtBQUNBOzs7R0EzQkVQOztLQUFBQTtBQThCTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hYm91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lclwiXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcclxuaW1wb3J0IEJvYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL2JvYXJkXCJcclxuaW1wb3J0IGRhdGFzIGZyb20gXCIuLi9kYXRhYmFzZS9kYXRhXCJcclxuXHJcblxyXG5cclxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbcXVlc3Rpb25MaXN0LCBzZXRRdWVzdGlvbkxpc3RdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3dcclxuICAgICAgICAuZmV0Y2goJy9hcGkvZXhhbScpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7Y29uc29sZS5sb2coZGF0YVswXSlcclxuICAgICAgICB9KVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPk5leHRQcm9qZWN0IC0gIEFib3V0IDwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgPGgxPldlbGNvbWUgdG8gTmV4dC5qcyEgVGhpcyBpcyBBYm91dDwvaDE+XHJcbiAgICAgICAgPEJvYXJkPlxyXG4gICAgICAgIDwvQm9hcmQ+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICApfVxyXG4vLyp7cXVlc3Rpb25MaXN0Lm1hcCgocXVlc3Rpb24pID0+IChcclxuICAgIC8vKjxkaXY+IHtjb25zb2xlLmxvZyhkYXRhWzBdKX1cclxuICAgIC8vKjwvZGl2PlxyXG5cclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBBYm91dCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29udGFpbmVyIiwiSGVhZCIsImZldGNoIiwiQm9hcmQiLCJkYXRhcyIsIkFib3V0IiwicXVlc3Rpb25MaXN0Iiwic2V0UXVlc3Rpb25MaXN0Iiwid2luZG93IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==