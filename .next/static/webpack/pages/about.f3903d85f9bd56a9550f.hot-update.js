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
      console.log(data);
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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_board__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: questionList.map(function (question) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            children: [question.question, question.options, question.answer]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 9
          }, _this);
        })
      }, void 0, false, {
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
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuZjM5MDNkODVmOWJkNTZhOTU1MGYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBSUEsSUFBTVEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNoQixrQkFBd0NOLCtDQUFRLENBQUMsRUFBRCxDQUFoRDtBQUFBLE1BQU9PLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBRUFULEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaVSxJQUFBQSxNQUFNLENBQ0xOLEtBREQsQ0FDTyxXQURQLEVBRUNPLElBRkQsQ0FFTSxVQUFDQyxRQUFEO0FBQUEsYUFBYUEsUUFBUSxDQUFDQyxJQUFULEVBQWI7QUFBQSxLQUZOLEVBR0NGLElBSEQsQ0FHTSxnQkFBWTtBQUFBLFVBQVZHLElBQVUsUUFBVkEsSUFBVTtBQUFFQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNuQixLQUpEO0FBS0gsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLHNCQUNBO0FBQUEsMkJBQ0ksOERBQUMsMERBQUQ7QUFBQSw4QkFDQSw4REFBQyxrREFBRDtBQUFBLCtCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBSUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSSxlQUtBLDhEQUFDLHNEQUFEO0FBQUEsa0JBQVFOLFlBQVksQ0FBQ1MsR0FBYixDQUFpQixVQUFDQyxRQUFEO0FBQUEsOEJBQ3pCO0FBQUEsdUJBQU1BLFFBQVEsQ0FBQ0EsUUFBZixFQUF5QkEsUUFBUSxDQUFDQyxPQUFsQyxFQUEyQ0QsUUFBUSxDQUFDRSxNQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRHlCO0FBQUEsU0FBakI7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURBO0FBa0JFLENBN0JOOztHQUFNYjs7S0FBQUE7QUErQk4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJcIlxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXHJcbmltcG9ydCBCb2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9ib2FyZFwiXHJcbmltcG9ydCBkYXRhcyBmcm9tIFwiLi4vZGF0YWJhc2UvZGF0YVwiXHJcblxyXG5cclxuXHJcbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3F1ZXN0aW9uTGlzdCwgc2V0UXVlc3Rpb25MaXN0XSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93XHJcbiAgICAgICAgLmZldGNoKCcvYXBpL2V4YW0nKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4geyBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+TmV4dFByb2plY3QgLSAgQWJvdXQgPC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICA8aDE+V2VsY29tZSB0byBOZXh0LmpzISBUaGlzIGlzIEFib3V0PC9oMT5cclxuICAgICAgICA8Qm9hcmQ+e3F1ZXN0aW9uTGlzdC5tYXAoKHF1ZXN0aW9uKSA9PiAoXHJcbiAgICAgICAgPGRpdj57cXVlc3Rpb24ucXVlc3Rpb259e3F1ZXN0aW9uLm9wdGlvbnN9e3F1ZXN0aW9uLmFuc3dlcn08L2Rpdj5cclxuICAgICAgICApKX1cclxuXHJcblxyXG5cclxuICAgICAgICA8L0JvYXJkPlxyXG4gICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgKX1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb250YWluZXIiLCJIZWFkIiwiZmV0Y2giLCJCb2FyZCIsImRhdGFzIiwiQWJvdXQiLCJxdWVzdGlvbkxpc3QiLCJzZXRRdWVzdGlvbkxpc3QiLCJ3aW5kb3ciLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJxdWVzdGlvbiIsIm9wdGlvbnMiLCJhbnN3ZXIiXSwic291cmNlUm9vdCI6IiJ9