"use strict";
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./components/board.js":
/*!*****************************!*\
  !*** ./components/board.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/about */ "./pages/about.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\aledi\\OneDrive\\Documents\\Cursos\\Platzi Master\\P1 Sistema de evaluacion\\Nueva carpeta\\components\\board.js",
    _this = undefined;

//Esto es lo mismo que Layout



var Board = function Board(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "board",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "Question",
          children: props.questions.map(function (question) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                children: question.question
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 15
              }, _this), question.options.map(function (op) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "Answers",
                    children: op
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 14,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 14,
                  columnNumber: 17
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 13
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "Answers"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "Buttonos",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Commands",
            children: "Enviar "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Commands",
            children: "Terminar "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("style", {
      jfx: true,
      children: "\n.board{\n    margin: 3% 3% 3% 3%;\n    background: url(https://media.istockphoto.com/photos/chalkboard-back-to-school-theme-picture-id482968188?b=1&k=20&m=482968188&s=170667a&w=0&h=ByKSDUnnROrFuIg3wYAP2EE7e8pLVdi7_99TRSzIdxU=);\n    background-size: 100%;\n}\n\n.content {\n\n    font-family: 'Fredericka the Great', cursive;\n    /*justify-content: center;*/\n    display: grid;\n    grid-template-columns: 5% 50% 30% 15%;\n    grid-template-rows: 40px 250px 55px;\n    gap: 0px 0px;\n    grid-template-areas:\n\n    \". Question Answers Buttonos\"\n    \". Numbers Numbers .\";\n\n\n}\n\n\n\n\n\n"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 1
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, _this);
};

_c = Board;
/* harmony default export */ __webpack_exports__["default"] = (Board);

var _c;

$RefreshReg$(_c, "Board");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuODNmNjViYTc0ZGVmOWJiNzExMWIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQ7QUFBQSxzQkFDWjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLE9BQWY7QUFBQSw2QkFFRTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEsb0JBQ0dBLEtBQUssQ0FBQ0MsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsVUFBQ0MsUUFBRDtBQUFBLGdDQUNuQjtBQUFBLHNDQUNFO0FBQUEsMEJBQUtBLFFBQVEsQ0FBQ0E7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBRUdBLFFBQVEsQ0FBQ0MsT0FBVCxDQUFpQkYsR0FBakIsQ0FBcUIsVUFBQ0csRUFBRDtBQUFBLG9DQUNwQjtBQUFBLHlDQUFRO0FBQUssNkJBQVMsRUFBQyxTQUFmO0FBQUEsOEJBQTBCQTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEb0I7QUFBQSxlQUFyQixDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEbUI7QUFBQSxXQUFwQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFZRTtBQUFLLG1CQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGLGVBZUU7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxrQ0FDRTtBQUFRLHFCQUFTLEVBQUMsVUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFRLHFCQUFTLEVBQUMsVUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQTBCRjtBQUFPLFNBQUcsTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEWTtBQUFBLENBQWQ7O0tBQU1OO0FBK0ROLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYm9hcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9Fc3RvIGVzIGxvIG1pc21vIHF1ZSBMYXlvdXRcclxuaW1wb3J0IEFib3V0IGZyb20gXCIuLi9wYWdlcy9hYm91dFwiO1xyXG5cclxuY29uc3QgQm9hcmQgPSAocHJvcHMpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZFwiPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJRdWVzdGlvblwiPlxyXG4gICAgICAgICAge3Byb3BzLnF1ZXN0aW9ucy5tYXAoKHF1ZXN0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGgyPntxdWVzdGlvbi5xdWVzdGlvbn08L2gyPlxyXG4gICAgICAgICAgICAgIHtxdWVzdGlvbi5vcHRpb25zLm1hcCgob3ApID0+IChcclxuICAgICAgICAgICAgICAgIDxidXR0b24+PGRpdiBjbGFzc05hbWU9XCJBbnN3ZXJzXCI+e29wfTwvZGl2PjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFuc3dlcnNcIj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCdXR0b25vc1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJDb21tYW5kc1wiPkVudmlhciA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiQ29tbWFuZHNcIj5UZXJtaW5hciA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG5cclxuPHN0eWxlIGpmeD57YFxyXG4uYm9hcmR7XHJcbiAgICBtYXJnaW46IDMlIDMlIDMlIDMlO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vbWVkaWEuaXN0b2NrcGhvdG8uY29tL3Bob3Rvcy9jaGFsa2JvYXJkLWJhY2stdG8tc2Nob29sLXRoZW1lLXBpY3R1cmUtaWQ0ODI5NjgxODg/Yj0xJms9MjAmbT00ODI5NjgxODgmcz0xNzA2NjdhJnc9MCZoPUJ5S1NEVW5uUk9yRnVJZzN3WUFQMkVFN2U4cExWZGk3Xzk5VFJTeklkeFU9KTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiAnRnJlZGVyaWNrYSB0aGUgR3JlYXQnLCBjdXJzaXZlO1xyXG4gICAgLypqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsqL1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNSUgNTAlIDMwJSAxNSU7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMjUwcHggNTVweDtcclxuICAgIGdhcDogMHB4IDBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcblxyXG4gICAgXCIuIFF1ZXN0aW9uIEFuc3dlcnMgQnV0dG9ub3NcIlxyXG4gICAgXCIuIE51bWJlcnMgTnVtYmVycyAuXCI7XHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmB9PC9zdHlsZT5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcclxuIl0sIm5hbWVzIjpbIkFib3V0IiwiQm9hcmQiLCJwcm9wcyIsInF1ZXN0aW9ucyIsIm1hcCIsInF1ZXN0aW9uIiwib3B0aW9ucyIsIm9wIl0sInNvdXJjZVJvb3QiOiIifQ==