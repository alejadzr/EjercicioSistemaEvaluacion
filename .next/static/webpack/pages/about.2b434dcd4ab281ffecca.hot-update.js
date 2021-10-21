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



var Question = function Question(_ref) {
  var question = _ref.question;
  console.log(question.question);

  var Board = function Board(props) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: [question.question, question.options.map(function (op) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          children: op
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 9
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }, _this);
  };

  var QHopper = function QHopper(imdex) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Question, {
        question: props.questions[imdex]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 37
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 32
    }, _this);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "board",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "Question",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(QHopper, {
            imdex: 2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
            children: "Ac\xE1 van las preguntas Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, hic animi quidem assumenda,?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "Answers",
          children: props.questions.map(function (question) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                children: question.options
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 13
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "Buttonos",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Commands",
            children: "Anterior "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Commands",
            children: "Siguiente "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Commands",
            children: "Enviar "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Commands",
            children: "Terminar "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "Numbers",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Total",
            children: " 1 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Total",
            children: " 2 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Total",
            children: " 3 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Total",
            children: " 4 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Total",
            children: " 5 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 3
  }, _this);
};

_c = Question;
/* harmony default export */ __webpack_exports__["default"] = (Board);

var _c;

$RefreshReg$(_c, "Question");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuMmI0MzRkY2Q0YWIyODFmZmVjY2EuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUNBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ2pDQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBUSxDQUFDQSxRQUFyQjs7QUFDQSxNQUFNRyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFDekIsd0JBQ0U7QUFBQSxpQkFDR0osUUFBUSxDQUFDQSxRQURaLEVBRUdBLFFBQVEsQ0FBQ0ssT0FBVCxDQUFpQkMsR0FBakIsQ0FBcUIsVUFBQ0MsRUFBRDtBQUFBLDRCQUNwQjtBQUFBLG9CQUFTQTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRG9CO0FBQUEsT0FBckIsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQVFELEdBVEM7O0FBVUUsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRDtBQUFBLHdCQUFXO0FBQUEsNkJBQUssOERBQUMsUUFBRDtBQUFVLGdCQUFRLEVBQUVMLEtBQUssQ0FBQ00sU0FBTixDQUFnQkQsS0FBaEI7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBWDtBQUFBLEdBQWhCOztBQUVBLHNCQUNGO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsT0FBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxrQ0FDRSw4REFBQyxPQUFEO0FBQVMsaUJBQUssRUFBRTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBUUU7QUFBSyxtQkFBUyxFQUFDLFNBQWY7QUFBQSxvQkFDR0wsS0FBSyxDQUFDTSxTQUFOLENBQWdCSixHQUFoQixDQUFvQixVQUFDTixRQUFEO0FBQUEsZ0NBQ25CO0FBQUEscUNBQ0U7QUFBQSwwQkFBU0EsUUFBUSxDQUFDSztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEbUI7QUFBQSxXQUFwQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkYsZUFlRTtBQUFLLG1CQUFTLEVBQUMsVUFBZjtBQUFBLGtDQUNFO0FBQVEscUJBQVMsRUFBQyxVQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQVEscUJBQVMsRUFBQyxVQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQVEscUJBQVMsRUFBQyxVQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFO0FBQVEscUJBQVMsRUFBQyxVQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkYsZUFxQkU7QUFBSyxtQkFBUyxFQUFDLFNBQWY7QUFBQSxrQ0FDRTtBQUFRLHFCQUFTLEVBQUMsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFRLHFCQUFTLEVBQUMsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFRLHFCQUFTLEVBQUMsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFJRTtBQUFRLHFCQUFTLEVBQUMsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFLRTtBQUFRLHFCQUFTLEVBQUMsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURFO0FBa0NGLENBaERGOztLQUFNTjtBQWtETiwrREFBZUksS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2JvYXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vRXN0byBlcyBsbyBtaXNtbyBxdWUgTGF5b3V0XHJcbmltcG9ydCBBYm91dCBmcm9tIFwiLi4vcGFnZXMvYWJvdXRcIjtcclxuY29uc3QgUXVlc3Rpb24gPSAoeyBxdWVzdGlvbiB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2cocXVlc3Rpb24ucXVlc3Rpb24pO1xyXG4gIGNvbnN0IEJvYXJkID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtxdWVzdGlvbi5xdWVzdGlvbn1cclxuICAgICAge3F1ZXN0aW9uLm9wdGlvbnMubWFwKChvcCkgPT4gKFxyXG4gICAgICAgIDxidXR0b24+e29wfTwvYnV0dG9uPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiAgICBjb25zdCBRSG9wcGVyID0gKGltZGV4KSA9PiA8ZGl2PjxRdWVzdGlvbiBxdWVzdGlvbj17cHJvcHMucXVlc3Rpb25zW2ltZGV4XX0vPjwvZGl2PjtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgPGRpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJRdWVzdGlvblwiPlxyXG4gICAgICAgICAgPFFIb3BwZXIgaW1kZXg9ezJ9Lz5cclxuICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgQWPDoSB2YW4gbGFzIHByZWd1bnRhcyBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXJcclxuICAgICAgICAgICAgYWRpcGlzaWNpbmcgZWxpdC4gTWluaW1hLCBoaWMgYW5pbWkgcXVpZGVtIGFzc3VtZW5kYSw/XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQW5zd2Vyc1wiPlxyXG4gICAgICAgICAge3Byb3BzLnF1ZXN0aW9ucy5tYXAoKHF1ZXN0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbj57cXVlc3Rpb24ub3B0aW9uc308L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJ1dHRvbm9zXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkNvbW1hbmRzXCI+QW50ZXJpb3IgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkNvbW1hbmRzXCI+U2lndWllbnRlIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJDb21tYW5kc1wiPkVudmlhciA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiQ29tbWFuZHNcIj5UZXJtaW5hciA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk51bWJlcnNcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiVG90YWxcIj4gMSA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiVG90YWxcIj4gMiA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiVG90YWxcIj4gMyA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiVG90YWxcIj4gNCA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiVG90YWxcIj4gNSA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKX07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcclxuIl0sIm5hbWVzIjpbIkFib3V0IiwiUXVlc3Rpb24iLCJxdWVzdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJCb2FyZCIsInByb3BzIiwib3B0aW9ucyIsIm1hcCIsIm9wIiwiUUhvcHBlciIsImltZGV4IiwicXVlc3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==