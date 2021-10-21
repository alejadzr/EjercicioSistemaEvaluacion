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
          className: "Buttonos",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Commands",
            children: "Enviar "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Commands",
            children: "Terminar "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
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
      children: "\n.board{\n    margin: 3% 3% 3% 3%;\n    background: url(https://media.istockphoto.com/photos/chalkboard-back-to-school-theme-picture-id482968188?b=1&k=20&m=482968188&s=170667a&w=0&h=ByKSDUnnROrFuIg3wYAP2EE7e8pLVdi7_99TRSzIdxU=);\n    background-size: 100%;\n}\n\n.content {\n\n    font-family: 'Fredericka the Great', cursive;\n    /*justify-content: center;*/\n    display: grid;\n    grid-template-columns: 50% 50%;\n    grid-template-rows: 600px 600px;\n    gap: 0px 0px;\n    grid-template-areas:\n    \" Question Answers \"\n\n    \"Buttonos Buttonos;\n\n\n}\n\n\n\n\n\n"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuOTczYjc2M2JlMzhmZTVlZDkyNDMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQ7QUFBQSxzQkFDWjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLE9BQWY7QUFBQSw2QkFFRTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEsb0JBQ0dBLEtBQUssQ0FBQ0MsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsVUFBQ0MsUUFBRDtBQUFBLGdDQUNuQjtBQUFBLHNDQUNFO0FBQUEsMEJBQUtBLFFBQVEsQ0FBQ0E7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBRUdBLFFBQVEsQ0FBQ0MsT0FBVCxDQUFpQkYsR0FBakIsQ0FBcUIsVUFBQ0csRUFBRDtBQUFBLG9DQUNwQjtBQUFBLHlDQUFRO0FBQUssNkJBQVMsRUFBQyxTQUFmO0FBQUEsOEJBQTBCQTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEb0I7QUFBQSxlQUFyQixDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEbUI7QUFBQSxXQUFwQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFZRTtBQUFLLG1CQUFTLEVBQUMsVUFBZjtBQUFBLGtDQUNFO0FBQVEscUJBQVMsRUFBQyxVQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQVEscUJBQVMsRUFBQyxVQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBdUJGO0FBQU8sU0FBRyxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdkJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURZO0FBQUEsQ0FBZDs7S0FBTU47QUE0RE4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ib2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0VzdG8gZXMgbG8gbWlzbW8gcXVlIExheW91dFxyXG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4uL3BhZ2VzL2Fib3V0XCI7XHJcblxyXG5jb25zdCBCb2FyZCA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkXCI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlF1ZXN0aW9uXCI+XHJcbiAgICAgICAgICB7cHJvcHMucXVlc3Rpb25zLm1hcCgocXVlc3Rpb24pID0+IChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDI+e3F1ZXN0aW9uLnF1ZXN0aW9ufTwvaDI+XHJcbiAgICAgICAgICAgICAge3F1ZXN0aW9uLm9wdGlvbnMubWFwKChvcCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj48ZGl2IGNsYXNzTmFtZT1cIkFuc3dlcnNcIj57b3B9PC9kaXY+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQnV0dG9ub3NcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiQ29tbWFuZHNcIj5FbnZpYXIgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkNvbW1hbmRzXCI+VGVybWluYXIgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuXHJcbjxzdHlsZSBqZng+e2BcclxuLmJvYXJke1xyXG4gICAgbWFyZ2luOiAzJSAzJSAzJSAzJTtcclxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL21lZGlhLmlzdG9ja3Bob3RvLmNvbS9waG90b3MvY2hhbGtib2FyZC1iYWNrLXRvLXNjaG9vbC10aGVtZS1waWN0dXJlLWlkNDgyOTY4MTg4P2I9MSZrPTIwJm09NDgyOTY4MTg4JnM9MTcwNjY3YSZ3PTAmaD1CeUtTRFVublJPckZ1SWczd1lBUDJFRTdlOHBMVmRpN185OVRSU3pJZHhVPSk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuXHJcbiAgICBmb250LWZhbWlseTogJ0ZyZWRlcmlja2EgdGhlIEdyZWF0JywgY3Vyc2l2ZTtcclxuICAgIC8qanVzdGlmeS1jb250ZW50OiBjZW50ZXI7Ki9cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwMHB4IDYwMHB4O1xyXG4gICAgZ2FwOiAwcHggMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgIFwiIFF1ZXN0aW9uIEFuc3dlcnMgXCJcclxuXHJcbiAgICBcIkJ1dHRvbm9zIEJ1dHRvbm9zO1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5gfTwvc3R5bGU+XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7XHJcbiJdLCJuYW1lcyI6WyJBYm91dCIsIkJvYXJkIiwicHJvcHMiLCJxdWVzdGlvbnMiLCJtYXAiLCJxdWVzdGlvbiIsIm9wdGlvbnMiLCJvcCJdLCJzb3VyY2VSb290IjoiIn0=