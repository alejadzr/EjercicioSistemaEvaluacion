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
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                    className: "Answers",
                    children: op
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 17,
                    columnNumber: 25
                  }, _this)
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
      children: "\n.board{\n    margin: 3% 3% 3% 3%;\n    background: url(https://media.istockphoto.com/photos/chalkboard-back-to-school-theme-picture-id482968188?b=1&k=20&m=482968188&s=170667a&w=0&h=ByKSDUnnROrFuIg3wYAP2EE7e8pLVdi7_99TRSzIdxU=);\n    background-size: 100%;\n    height: 650px;\n\n}\n\n.content {\n\n    background: hsla(0,0%,100%,.3);\n    height: 75%;\n    margin-left: 50px;\n    margin-right: 50px;\n\n}\n\n.Buttonos {\n    font-family: 'Pangolin' ,cursive;\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n    gap:45px;\n    margin-top: 55px;\n    height:85px;\n\n\n}\n\n-Answers{\n\n}\n\n\n\n\n\n"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuZGJiMTlkODliZTU0ZTg1Mzk4N2QuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxJQUFNRSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFEO0FBQUEsc0JBQ1o7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxPQUFmO0FBQUEsOEJBQ0EsOERBQUMsa0VBQUQ7QUFBQSwrQkFDQTtBQUFNLGNBQUksRUFBQyxrRUFBWDtBQUE4RSxhQUFHLEVBQUM7QUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQUlFO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQUEsZ0NBQ0U7QUFBQSxvQkFDR0EsS0FBSyxDQUFDQyxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixVQUFDQyxRQUFEO0FBQUEsZ0NBQ25CO0FBQUEsc0NBQ0U7QUFBSSx5QkFBUyxFQUFDLFVBQWQ7QUFBQSwwQkFBMEJBLFFBQVEsQ0FBQ0E7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUVHQSxRQUFRLENBQUNDLE9BQVQsQ0FBaUJGLEdBQWpCLENBQXFCLFVBQUNHLEVBQUQ7QUFBQSxvQ0FDcEI7QUFBQSx5Q0FBUTtBQUFLLDZCQUFTLEVBQUMsU0FBZjtBQUFBLDhCQUEwQkE7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRG9CO0FBQUEsZUFBckIsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRG1CO0FBQUEsV0FBcEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBWUU7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxrQ0FDRTtBQUFRLHFCQUFTLEVBQUMsVUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFRLHFCQUFTLEVBQUMsVUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBeUJGO0FBQU8sU0FBRyxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBekJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURZO0FBQUEsQ0FBZDs7S0FBTU47QUEwRU4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ib2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0VzdG8gZXMgbG8gbWlzbW8gcXVlIExheW91dFxyXG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4uL3BhZ2VzL2Fib3V0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkXCI7XHJcblxyXG5jb25zdCBCb2FyZCA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkXCI+XHJcbiAgICA8SGVhZD5cclxuICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhbmdvbGluJmRpc3BsYXk9c3dhcCcpXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtwcm9wcy5xdWVzdGlvbnMubWFwKChxdWVzdGlvbikgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJRdWVzdGlvblwiPntxdWVzdGlvbi5xdWVzdGlvbn08L2gyPlxyXG4gICAgICAgICAgICAgIHtxdWVzdGlvbi5vcHRpb25zLm1hcCgob3ApID0+IChcclxuICAgICAgICAgICAgICAgIDxidXR0b24+PGRpdiBjbGFzc05hbWU9XCJBbnN3ZXJzXCI+e29wfTwvZGl2PjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJ1dHRvbm9zXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkNvbW1hbmRzXCI+RW52aWFyIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJDb21tYW5kc1wiPlRlcm1pbmFyIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcblxyXG48c3R5bGUgamZ4PntgXHJcbi5ib2FyZHtcclxuICAgIG1hcmdpbjogMyUgMyUgMyUgMyU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9tZWRpYS5pc3RvY2twaG90by5jb20vcGhvdG9zL2NoYWxrYm9hcmQtYmFjay10by1zY2hvb2wtdGhlbWUtcGljdHVyZS1pZDQ4Mjk2ODE4OD9iPTEmaz0yMCZtPTQ4Mjk2ODE4OCZzPTE3MDY2N2Emdz0wJmg9QnlLU0RVbm5ST3JGdUlnM3dZQVAyRUU3ZThwTFZkaTdfOTlUUlN6SWR4VT0pO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2NTBweDtcclxuXHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiBoc2xhKDAsMCUsMTAwJSwuMyk7XHJcbiAgICBoZWlnaHQ6IDc1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG5cclxufVxyXG5cclxuLkJ1dHRvbm9zIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUGFuZ29saW4nICxjdXJzaXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDo0NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTVweDtcclxuICAgIGhlaWdodDo4NXB4O1xyXG5cclxuXHJcbn1cclxuXHJcbi1BbnN3ZXJze1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmB9PC9zdHlsZT5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcclxuIl0sIm5hbWVzIjpbIkFib3V0IiwiSGVhZCIsIkJvYXJkIiwicHJvcHMiLCJxdWVzdGlvbnMiLCJtYXAiLCJxdWVzdGlvbiIsIm9wdGlvbnMiLCJvcCJdLCJzb3VyY2VSb290IjoiIn0=