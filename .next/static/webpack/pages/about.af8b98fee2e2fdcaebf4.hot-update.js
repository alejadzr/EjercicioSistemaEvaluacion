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
          children: props.questions.map(function (question) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                className: "Question",
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
      children: "\n.board{\n    margin: 3% 3% 3% 3%;\n    background: url(https://media.istockphoto.com/photos/chalkboard-back-to-school-theme-picture-id482968188?b=1&k=20&m=482968188&s=170667a&w=0&h=ByKSDUnnROrFuIg3wYAP2EE7e8pLVdi7_99TRSzIdxU=);\n    background-size: 100%;\n    height: 650px;\n\n}\n\n.content {\n\n    font-family: 'Fredericka the Great', cursive;\n    background: hsla(0,0%,100%,.3);\n    height: 75%;\n    margin-left: 50px;\n    margin right: 50px;\n}\n\n.Buttonos {\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n    gap:45px;\n    margin-top: 55px;\n    height:85px;\n\n\n}\n\n\n\n\n"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuYWY4Yjk4ZmVlMmUyZmRjYWViZjQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQ7QUFBQSxzQkFDWjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLE9BQWY7QUFBQSw2QkFFRTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBLGdDQUNFO0FBQUEsb0JBQ0dBLEtBQUssQ0FBQ0MsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsVUFBQ0MsUUFBRDtBQUFBLGdDQUNuQjtBQUFBLHNDQUNFO0FBQUkseUJBQVMsRUFBQyxVQUFkO0FBQUEsMEJBQTBCQSxRQUFRLENBQUNBO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsRUFFR0EsUUFBUSxDQUFDQyxPQUFULENBQWlCRixHQUFqQixDQUFxQixVQUFDRyxFQUFEO0FBQUEsb0NBQ3BCO0FBQUEseUNBQVE7QUFBSyw2QkFBUyxFQUFDLFNBQWY7QUFBQSw4QkFBMEJBO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURvQjtBQUFBLGVBQXJCLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURtQjtBQUFBLFdBQXBCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVlFO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEsa0NBQ0U7QUFBUSxxQkFBUyxFQUFDLFVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBUSxxQkFBUyxFQUFDLFVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUF1QkY7QUFBTyxTQUFHLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFk7QUFBQSxDQUFkOztLQUFNTjtBQWtFTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2JvYXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vRXN0byBlcyBsbyBtaXNtbyBxdWUgTGF5b3V0XHJcbmltcG9ydCBBYm91dCBmcm9tIFwiLi4vcGFnZXMvYWJvdXRcIjtcclxuXHJcbmNvbnN0IEJvYXJkID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmRcIj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7cHJvcHMucXVlc3Rpb25zLm1hcCgocXVlc3Rpb24pID0+IChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiUXVlc3Rpb25cIj57cXVlc3Rpb24ucXVlc3Rpb259PC9oMj5cclxuICAgICAgICAgICAgICB7cXVlc3Rpb24ub3B0aW9ucy5tYXAoKG9wKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPjxkaXYgY2xhc3NOYW1lPVwiQW5zd2Vyc1wiPntvcH08L2Rpdj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCdXR0b25vc1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJDb21tYW5kc1wiPkVudmlhciA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiQ29tbWFuZHNcIj5UZXJtaW5hciA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG5cclxuPHN0eWxlIGpmeD57YFxyXG4uYm9hcmR7XHJcbiAgICBtYXJnaW46IDMlIDMlIDMlIDMlO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vbWVkaWEuaXN0b2NrcGhvdG8uY29tL3Bob3Rvcy9jaGFsa2JvYXJkLWJhY2stdG8tc2Nob29sLXRoZW1lLXBpY3R1cmUtaWQ0ODI5NjgxODg/Yj0xJms9MjAmbT00ODI5NjgxODgmcz0xNzA2NjdhJnc9MCZoPUJ5S1NEVW5uUk9yRnVJZzN3WUFQMkVFN2U4cExWZGk3Xzk5VFJTeklkeFU9KTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIGhlaWdodDogNjUwcHg7XHJcblxyXG59XHJcblxyXG4uY29udGVudCB7XHJcblxyXG4gICAgZm9udC1mYW1pbHk6ICdGcmVkZXJpY2thIHRoZSBHcmVhdCcsIGN1cnNpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBoc2xhKDAsMCUsMTAwJSwuMyk7XHJcbiAgICBoZWlnaHQ6IDc1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgbWFyZ2luIHJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uQnV0dG9ub3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDo0NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTVweDtcclxuICAgIGhlaWdodDo4NXB4O1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmB9PC9zdHlsZT5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcclxuIl0sIm5hbWVzIjpbIkFib3V0IiwiQm9hcmQiLCJwcm9wcyIsInF1ZXN0aW9ucyIsIm1hcCIsInF1ZXN0aW9uIiwib3B0aW9ucyIsIm9wIl0sInNvdXJjZVJvb3QiOiIifQ==