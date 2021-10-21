"use strict";
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./components/board.js":
/*!*****************************!*\
  !*** ./components/board.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/about */ "./pages/about.js");
/* harmony import */ var next_dist_shared_lib_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/shared/lib/head */ "./node_modules/next/dist/shared/lib/head.js");
/* harmony import */ var next_dist_shared_lib_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\aledi\\OneDrive\\Documents\\Cursos\\Platzi Master\\P1 Sistema de evaluacion\\Nueva carpeta\\components\\board.js",
    _this = undefined;

//Esto es lo mismo que Layout




var Board = function Board(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "board",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_dist_shared_lib_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
          href: "https://fonts.googleapis.com/css2?family=Pangolin&display=swap')",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 5
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: props.questions.map(function (question) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
                className: "Question",
                children: question.question
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 15
              }, _this), question.options.map(function (op) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                  className: "Answers",
                  children: op
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 17,
                  columnNumber: 17
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 13
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "Buttonos",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
            className: "Commands",
            children: "Enviar "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
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
        lineNumber: 11,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("style", {
      jfx: true,
      children: "\n.board{\n    margin: 3% 3% 3% 3%;\n    background: url(https://media.istockphoto.com/photos/chalkboard-back-to-school-theme-picture-id482968188?b=1&k=20&m=482968188&s=170667a&w=0&h=ByKSDUnnROrFuIg3wYAP2EE7e8pLVdi7_99TRSzIdxU=);\n    background-size: 100%;\n    height: 650px;\n\n}\n\n.content {\n\n    background: hsla(0,0%,100%,.3);\n    height: 75%;\n    margin-left: 50px;\n    margin-right: 50px;\n\n}\n\n.Buttonos {\n    font-family: 'Pangolin' ,cursive;\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n    gap:45px;\n    margin-top: 55px;\n    height:85px;\n\n\n}\n\n.Answers{\n\n  font-family: 'Pangolin' ,cursive;\n\n}\n\n\n\n\n\n"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 1
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuNWE1ZmY0MjkzMTQxYTgwODBlNzYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxJQUFNRSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFEO0FBQUEsc0JBQ1o7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxPQUFmO0FBQUEsOEJBQ0EsOERBQUMsa0VBQUQ7QUFBQSwrQkFDQTtBQUFNLGNBQUksRUFBQyxrRUFBWDtBQUE4RSxhQUFHLEVBQUM7QUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQUlFO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQUEsZ0NBQ0U7QUFBQSxvQkFDR0EsS0FBSyxDQUFDQyxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixVQUFDQyxRQUFEO0FBQUEsZ0NBQ25CO0FBQUEsc0NBQ0U7QUFBSSx5QkFBUyxFQUFDLFVBQWQ7QUFBQSwwQkFBMEJBLFFBQVEsQ0FBQ0E7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUVHQSxRQUFRLENBQUNDLE9BQVQsQ0FBaUJGLEdBQWpCLENBQXFCLFVBQUNHLEVBQUQ7QUFBQSxvQ0FDcEI7QUFBUSwyQkFBUyxFQUFDLFNBQWxCO0FBQUEsNEJBQTZCQTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURvQjtBQUFBLGVBQXJCLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURtQjtBQUFBLFdBQXBCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVlFO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEsa0NBQ0U7QUFBUSxxQkFBUyxFQUFDLFVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBUSxxQkFBUyxFQUFDLFVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQXlCRjtBQUFPLFNBQUcsTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXpCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEWTtBQUFBLENBQWQ7O0tBQU1OO0FBNEVOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYm9hcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9Fc3RvIGVzIGxvIG1pc21vIHF1ZSBMYXlvdXRcclxuaW1wb3J0IEFib3V0IGZyb20gXCIuLi9wYWdlcy9hYm91dFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZFwiO1xyXG5cclxuY29uc3QgQm9hcmQgPSAocHJvcHMpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZFwiPlxyXG4gICAgPEhlYWQ+XHJcbiAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYW5nb2xpbiZkaXNwbGF5PXN3YXAnKVwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7cHJvcHMucXVlc3Rpb25zLm1hcCgocXVlc3Rpb24pID0+IChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiUXVlc3Rpb25cIj57cXVlc3Rpb24ucXVlc3Rpb259PC9oMj5cclxuICAgICAgICAgICAgICB7cXVlc3Rpb24ub3B0aW9ucy5tYXAoKG9wKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkFuc3dlcnNcIj57b3B9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQnV0dG9ub3NcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiQ29tbWFuZHNcIj5FbnZpYXIgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkNvbW1hbmRzXCI+VGVybWluYXIgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuXHJcbjxzdHlsZSBqZng+e2BcclxuLmJvYXJke1xyXG4gICAgbWFyZ2luOiAzJSAzJSAzJSAzJTtcclxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL21lZGlhLmlzdG9ja3Bob3RvLmNvbS9waG90b3MvY2hhbGtib2FyZC1iYWNrLXRvLXNjaG9vbC10aGVtZS1waWN0dXJlLWlkNDgyOTY4MTg4P2I9MSZrPTIwJm09NDgyOTY4MTg4JnM9MTcwNjY3YSZ3PTAmaD1CeUtTRFVublJPckZ1SWczd1lBUDJFRTdlOHBMVmRpN185OVRSU3pJZHhVPSk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDY1MHB4O1xyXG5cclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG5cclxuICAgIGJhY2tncm91bmQ6IGhzbGEoMCwwJSwxMDAlLC4zKTtcclxuICAgIGhlaWdodDogNzUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcblxyXG59XHJcblxyXG4uQnV0dG9ub3Mge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQYW5nb2xpbicgLGN1cnNpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOjQ1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1NXB4O1xyXG4gICAgaGVpZ2h0Ojg1cHg7XHJcblxyXG5cclxufVxyXG5cclxuLkFuc3dlcnN7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiAnUGFuZ29saW4nICxjdXJzaXZlO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmB9PC9zdHlsZT5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcclxuIl0sIm5hbWVzIjpbIkFib3V0IiwiSGVhZCIsIkJvYXJkIiwicHJvcHMiLCJxdWVzdGlvbnMiLCJtYXAiLCJxdWVzdGlvbiIsIm9wdGlvbnMiLCJvcCJdLCJzb3VyY2VSb290IjoiIn0=