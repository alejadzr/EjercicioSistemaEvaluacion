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

  var valida = 0;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.fetch("/api/exam").then(function (response) {
      return response.json();
    }).then(function (_ref) {
      var data = _ref.data;
      if (valida == 0) setQuestionList(data[0]);
      if (valida == 0) setQuestionList(data[0]);else {
        setQuestionList(data[1]);
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
          lineNumber: 28,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
        children: "Welcome to Next.js! This is About"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this), questionList.length && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_board__WEBPACK_IMPORTED_MODULE_4__.default, {
        questions: questionList
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 33
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuNWJkMWQyYjZkODljNzg2MWYzYzYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTVEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixrQkFBd0NOLCtDQUFRLENBQUMsRUFBRCxDQUFoRDtBQUFBLE1BQU9PLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBRUEsTUFBTUMsTUFBTSxHQUFDLENBQWI7QUFFQVYsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RXLElBQUFBLE1BQU0sQ0FDSFAsS0FESCxDQUNTLFdBRFQsRUFFR1EsSUFGSCxDQUVRLFVBQUNDLFFBQUQ7QUFBQSxhQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLEtBRlIsRUFHR0YsSUFISCxDQUdRLGdCQUFjO0FBQUEsVUFBWEcsSUFBVyxRQUFYQSxJQUFXO0FBQ2xCLFVBQUdMLE1BQU0sSUFBSSxDQUFiLEVBQWdCRCxlQUFlLENBQUNNLElBQUksQ0FBQyxDQUFELENBQUwsQ0FBZjtBQUNoQixVQUFHTCxNQUFNLElBQUksQ0FBYixFQUFnQkQsZUFBZSxDQUFDTSxJQUFJLENBQUMsQ0FBRCxDQUFMLENBQWYsQ0FBaEIsS0FDSztBQUFDTixRQUFBQSxlQUFlLENBQUNNLElBQUksQ0FBQyxDQUFELENBQUwsQ0FBZjtBQUF5QjtBQUNoQyxLQVBIO0FBUUQsR0FUUSxFQVNOLEVBVE0sQ0FBVDtBQVdBLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsMERBQUQ7QUFBQSw4QkFDRSw4REFBQyxrREFBRDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixFQUtHUCxZQUFZLENBQUNRLE1BQWIsaUJBQXVCLDhEQUFDLHNEQUFEO0FBQU8saUJBQVMsRUFBRVI7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUwxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFZRCxDQTVCRCxFQTZCQTtBQUNBO0FBQ0E7OztHQS9CTUQ7O0tBQUFBO0FBaUNOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Fib3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XHJcbmltcG9ydCBCb2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9ib2FyZFwiO1xyXG5pbXBvcnQgZGF0YXMgZnJvbSBcIi4uL2RhdGFiYXNlL2RhdGFcIjtcclxuXHJcbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtxdWVzdGlvbkxpc3QsIHNldFF1ZXN0aW9uTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IHZhbGlkYT0wO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93XHJcbiAgICAgIC5mZXRjaChcIi9hcGkvZXhhbVwiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgaWYodmFsaWRhID09IDApIHNldFF1ZXN0aW9uTGlzdChkYXRhWzBdKTtcclxuICAgICAgICBpZih2YWxpZGEgPT0gMCkgc2V0UXVlc3Rpb25MaXN0KGRhdGFbMF0pO1xyXG4gICAgICAgIGVsc2Uge3NldFF1ZXN0aW9uTGlzdChkYXRhWzFdKX1cclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5OZXh0UHJvamVjdCAtIEFib3V0IDwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxoMT5XZWxjb21lIHRvIE5leHQuanMhIFRoaXMgaXMgQWJvdXQ8L2gxPlxyXG4gICAgICAgIHtxdWVzdGlvbkxpc3QubGVuZ3RoICYmIDxCb2FyZCBxdWVzdGlvbnM9e3F1ZXN0aW9uTGlzdH0gLz59XHJcblxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbi8vKntxdWVzdGlvbkxpc3QubWFwKChxdWVzdGlvbikgPT4gKFxyXG4vLyo8ZGl2PiB7Y29uc29sZS5sb2coZGF0YVswXSl9XHJcbi8vKjwvZGl2PlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29udGFpbmVyIiwiSGVhZCIsImZldGNoIiwiQm9hcmQiLCJkYXRhcyIsIkFib3V0IiwicXVlc3Rpb25MaXN0Iiwic2V0UXVlc3Rpb25MaXN0IiwidmFsaWRhIiwid2luZG93IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9