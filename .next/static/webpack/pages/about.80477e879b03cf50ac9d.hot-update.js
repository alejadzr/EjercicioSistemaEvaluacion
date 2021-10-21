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

  var valida = 1;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.fetch("/api/exam").then(function (response) {
      return response.json();
    }).then(function (_ref) {
      var data = _ref.data;
      if ({
        valida: valida
      } == 0) setQuestionList(data[0]);else if ({
        valida: valida
      } == 1) setQuestionList(data[1]);else if ({
        valida: valida
      } == 2) setQuestionList(data[2]);else {
        setQuestionList(data[3]);
      }
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("title", {
          children: "NextProject - About "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
        children: "Welcome to Next.js! This is About"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this), questionList.length && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_board__WEBPACK_IMPORTED_MODULE_4__.default, {
        questions: questionList
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 33
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuODA0NzdlODc5YjAzY2Y1MGFjOWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsSUFBTVEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixrQkFBd0NOLCtDQUFRLENBQUMsRUFBRCxDQUFoRDtBQUFBLE1BQU9PLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHLENBQWY7QUFFQVYsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RXLElBQUFBLE1BQU0sQ0FDSFAsS0FESCxDQUNTLFdBRFQsRUFFR1EsSUFGSCxDQUVRLFVBQUNDLFFBQUQ7QUFBQSxhQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLEtBRlIsRUFHR0YsSUFISCxDQUdRLGdCQUFjO0FBQUEsVUFBWEcsSUFBVyxRQUFYQSxJQUFXO0FBQ2xCLFVBQUc7QUFBQ0wsUUFBQUEsTUFBTSxFQUFOQTtBQUFELFdBQVksQ0FBZixFQUFrQkQsZUFBZSxDQUFDTSxJQUFJLENBQUMsQ0FBRCxDQUFMLENBQWYsQ0FBbEIsS0FDSyxJQUFHO0FBQUNMLFFBQUFBLE1BQU0sRUFBTkE7QUFBRCxXQUFZLENBQWYsRUFBa0JELGVBQWUsQ0FBQ00sSUFBSSxDQUFDLENBQUQsQ0FBTCxDQUFmLENBQWxCLEtBQ0EsSUFBRztBQUFDTCxRQUFBQSxNQUFNLEVBQU5BO0FBQUQsV0FBWSxDQUFmLEVBQWtCRCxlQUFlLENBQUNNLElBQUksQ0FBQyxDQUFELENBQUwsQ0FBZixDQUFsQixLQUNBO0FBQUNOLFFBQUFBLGVBQWUsQ0FBQ00sSUFBSSxDQUFDLENBQUQsQ0FBTCxDQUFmO0FBQXlCO0FBQ2hDLEtBUkg7QUFTRCxHQVZRLEVBVU4sRUFWTSxDQUFUO0FBWUEsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQywwREFBRDtBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLEVBS0dQLFlBQVksQ0FBQ1EsTUFBYixpQkFBdUIsOERBQUMsc0RBQUQ7QUFBTyxpQkFBUyxFQUFFUjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTDFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVlELENBN0JELEVBOEJBO0FBQ0E7QUFDQTs7O0dBaENNRDs7S0FBQUE7QUFrQ04sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcclxuaW1wb3J0IEJvYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL2JvYXJkXCI7XHJcbmltcG9ydCBkYXRhcyBmcm9tIFwiLi4vZGF0YWJhc2UvZGF0YVwiO1xyXG5cclxuXHJcbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtxdWVzdGlvbkxpc3QsIHNldFF1ZXN0aW9uTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IHZhbGlkYSA9IDE7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3dcclxuICAgICAgLmZldGNoKFwiL2FwaS9leGFtXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICBpZih7dmFsaWRhfSA9PSAwKSBzZXRRdWVzdGlvbkxpc3QoZGF0YVswXSk7XHJcbiAgICAgICAgZWxzZSBpZih7dmFsaWRhfSA9PSAxKSBzZXRRdWVzdGlvbkxpc3QoZGF0YVsxXSk7XHJcbiAgICAgICAgZWxzZSBpZih7dmFsaWRhfSA9PSAyKSBzZXRRdWVzdGlvbkxpc3QoZGF0YVsyXSk7XHJcbiAgICAgICAgZWxzZSB7c2V0UXVlc3Rpb25MaXN0KGRhdGFbM10pfVxyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPk5leHRQcm9qZWN0IC0gQWJvdXQgPC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGgxPldlbGNvbWUgdG8gTmV4dC5qcyEgVGhpcyBpcyBBYm91dDwvaDE+XHJcbiAgICAgICAge3F1ZXN0aW9uTGlzdC5sZW5ndGggJiYgPEJvYXJkIHF1ZXN0aW9ucz17cXVlc3Rpb25MaXN0fSAvPn1cclxuXHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuLy8qe3F1ZXN0aW9uTGlzdC5tYXAoKHF1ZXN0aW9uKSA9PiAoXHJcbi8vKjxkaXY+IHtjb25zb2xlLmxvZyhkYXRhWzBdKX1cclxuLy8qPC9kaXY+XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb250YWluZXIiLCJIZWFkIiwiZmV0Y2giLCJCb2FyZCIsImRhdGFzIiwiQWJvdXQiLCJxdWVzdGlvbkxpc3QiLCJzZXRRdWVzdGlvbkxpc3QiLCJ2YWxpZGEiLCJ3aW5kb3ciLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=