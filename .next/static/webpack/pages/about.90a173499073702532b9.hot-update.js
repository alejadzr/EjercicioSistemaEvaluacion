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



var Question = function Question(question) {
  console.log(que);
};

_c = Question;

var Board = function Board(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "board",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "Question",
          children: [props.questions.map(function (question) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Question, {
              question: question
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 1
            }, _this);
          }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
            children: "Ac\xE1 van las preguntas Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, hic animi quidem assumenda,?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "Answers",
          children: props.questions.map(function (question) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                children: question.options
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 13
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "Buttonos",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Commands",
            children: "Anterior "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Commands",
            children: "Siguiente "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Commands",
            children: "Enviar "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Commands",
            children: "Terminar "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "Numbers",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Total",
            children: " 1 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Total",
            children: " 2 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Total",
            children: " 3 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Total",
            children: " 4 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Total",
            children: " 5 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, _this);
};

_c2 = Board;
/* harmony default export */ __webpack_exports__["default"] = (Board);

var _c, _c2;

$RefreshReg$(_c, "Question");
$RefreshReg$(_c2, "Board");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuOTBhMTczNDk5MDczNzAyNTMyYjkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUNBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLFFBQUQsRUFBWTtBQUFDQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsR0FBWjtBQUFpQixDQUEvQzs7S0FBTUo7O0FBQ04sSUFBTUssS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRDtBQUFBLHNCQUNaO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsT0FBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxxQkFDR0EsS0FBSyxDQUFDQyxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixVQUFDUCxRQUFEO0FBQUEsZ0NBQy9CLDhEQUFDLFFBQUQ7QUFBVSxzQkFBUSxFQUFFQTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUQrQjtBQUFBLFdBQXBCLENBREgsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFVRTtBQUFLLG1CQUFTLEVBQUMsU0FBZjtBQUFBLG9CQUNHSyxLQUFLLENBQUNDLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLFVBQUNQLFFBQUQ7QUFBQSxnQ0FDbkI7QUFBQSxxQ0FDRTtBQUFBLDBCQUFTQSxRQUFRLENBQUNRO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURtQjtBQUFBLFdBQXBCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRixlQWlCRTtBQUFLLG1CQUFTLEVBQUMsVUFBZjtBQUFBLGtDQUNFO0FBQVEscUJBQVMsRUFBQyxVQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQVEscUJBQVMsRUFBQyxVQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQVEscUJBQVMsRUFBQyxVQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFO0FBQVEscUJBQVMsRUFBQyxVQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJGLGVBdUJFO0FBQUssbUJBQVMsRUFBQyxTQUFmO0FBQUEsa0NBQ0U7QUFBUSxxQkFBUyxFQUFDLE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBUSxxQkFBUyxFQUFDLE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBUSxxQkFBUyxFQUFDLE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLGVBSUU7QUFBUSxxQkFBUyxFQUFDLE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBS0U7QUFBUSxxQkFBUyxFQUFDLE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEWTtBQUFBLENBQWQ7O01BQU1KO0FBc0NOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYm9hcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9Fc3RvIGVzIGxvIG1pc21vIHF1ZSBMYXlvdXRcclxuaW1wb3J0IEFib3V0IGZyb20gXCIuLi9wYWdlcy9hYm91dFwiO1xyXG5jb25zdCBRdWVzdGlvbiA9IChxdWVzdGlvbik9Pntjb25zb2xlLmxvZyhxdWUpfVxyXG5jb25zdCBCb2FyZCA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUXVlc3Rpb25cIj5cclxuICAgICAgICAgIHtwcm9wcy5xdWVzdGlvbnMubWFwKChxdWVzdGlvbikgPT4gKFxyXG48UXVlc3Rpb24gcXVlc3Rpb249e3F1ZXN0aW9ufS8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgQWPDoSB2YW4gbGFzIHByZWd1bnRhcyBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXJcclxuICAgICAgICAgICAgYWRpcGlzaWNpbmcgZWxpdC4gTWluaW1hLCBoaWMgYW5pbWkgcXVpZGVtIGFzc3VtZW5kYSw/XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQW5zd2Vyc1wiPlxyXG4gICAgICAgICAge3Byb3BzLnF1ZXN0aW9ucy5tYXAoKHF1ZXN0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbj57cXVlc3Rpb24ub3B0aW9uc308L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJ1dHRvbm9zXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkNvbW1hbmRzXCI+QW50ZXJpb3IgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkNvbW1hbmRzXCI+U2lndWllbnRlIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJDb21tYW5kc1wiPkVudmlhciA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiQ29tbWFuZHNcIj5UZXJtaW5hciA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk51bWJlcnNcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiVG90YWxcIj4gMSA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiVG90YWxcIj4gMiA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiVG90YWxcIj4gMyA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiVG90YWxcIj4gNCA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiVG90YWxcIj4gNSA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvYXJkO1xyXG4iXSwibmFtZXMiOlsiQWJvdXQiLCJRdWVzdGlvbiIsInF1ZXN0aW9uIiwiY29uc29sZSIsImxvZyIsInF1ZSIsIkJvYXJkIiwicHJvcHMiLCJxdWVzdGlvbnMiLCJtYXAiLCJvcHRpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==