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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: [question.question, question.options.map(function (op) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        children: op
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};

_c = Question;

var QHopper = function QHopper(imdex) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Question, {
      question: props.questions[imdex]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 33
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 28
  }, _this);
};

_c2 = QHopper;

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
              lineNumber: 21,
              columnNumber: 13
            }, _this);
          }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
            children: "Ac\xE1 van las preguntas Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, hic animi quidem assumenda,?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
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
        lineNumber: 18,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 3
  }, _this);
};

_c3 = Board;
/* harmony default export */ __webpack_exports__["default"] = (Board);

var _c, _c2, _c3;

$RefreshReg$(_c, "Question");
$RefreshReg$(_c2, "QHopper");
$RefreshReg$(_c3, "Board");

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


/***/ }),

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
    window.fetch("/api/exam").then(function (response) {
      return response.json();
    }).then(function (_ref) {
      var data = _ref.data;
      setQuestionList(data[0]);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("title", {
          children: "NextProject - About "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
        children: "Welcome to Next.js! This is About"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_board__WEBPACK_IMPORTED_MODULE_4__.default, {
        questions: questionList
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuYWE1NWE0YzRmMGEwNzkzM2FiM2EuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUNBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ2pDQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBUSxDQUFDQSxRQUFyQjtBQUNBLHNCQUNFO0FBQUEsZUFDR0EsUUFBUSxDQUFDQSxRQURaLEVBRUdBLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQkMsR0FBakIsQ0FBcUIsVUFBQ0MsRUFBRDtBQUFBLDBCQUNwQjtBQUFBLGtCQUFTQTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEb0I7QUFBQSxLQUFyQixDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBUUQsQ0FWRDs7S0FBTU47O0FBV04sSUFBTU8sT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRDtBQUFBLHNCQUFXO0FBQUEsMkJBQUssOERBQUMsUUFBRDtBQUFVLGNBQVEsRUFBRUMsS0FBSyxDQUFDQyxTQUFOLENBQWdCRixLQUFoQjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFYO0FBQUEsQ0FBaEI7O01BQU1EOztBQUNOLElBQU1JLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNGLEtBQUQ7QUFBQSxzQkFDWjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLE9BQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEscUJBQ0dBLEtBQUssQ0FBQ0MsU0FBTixDQUFnQkwsR0FBaEIsQ0FBb0IsVUFBQ0osUUFBRDtBQUFBLGdDQUNuQiw4REFBQyxRQUFEO0FBQVUsc0JBQVEsRUFBRUE7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEbUI7QUFBQSxXQUFwQixDQURILGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBVUU7QUFBSyxtQkFBUyxFQUFDLFNBQWY7QUFBQSxvQkFDR1EsS0FBSyxDQUFDQyxTQUFOLENBQWdCTCxHQUFoQixDQUFvQixVQUFDSixRQUFEO0FBQUEsZ0NBQ25CO0FBQUEscUNBQ0U7QUFBQSwwQkFBU0EsUUFBUSxDQUFDRztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEbUI7QUFBQSxXQUFwQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkYsZUFpQkU7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxrQ0FDRTtBQUFRLHFCQUFTLEVBQUMsVUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFRLHFCQUFTLEVBQUMsVUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFRLHFCQUFTLEVBQUMsVUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFJRTtBQUFRLHFCQUFTLEVBQUMsVUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpCRixlQXVCRTtBQUFLLG1CQUFTLEVBQUMsU0FBZjtBQUFBLGtDQUNFO0FBQVEscUJBQVMsRUFBQyxPQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQVEscUJBQVMsRUFBQyxPQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQVEscUJBQVMsRUFBQyxPQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFO0FBQVEscUJBQVMsRUFBQyxPQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixlQUtFO0FBQVEscUJBQVMsRUFBQyxPQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFk7QUFBQSxDQUFkOztNQUFNTztBQXNDTiwrREFBZUEsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNWixLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLGtCQUF3Q2UsK0NBQVEsQ0FBQyxFQUFELENBQWhEO0FBQUEsTUFBT0ssWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFFQVAsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RRLElBQUFBLE1BQU0sQ0FDSEosS0FESCxDQUNTLFdBRFQsRUFFR0ssSUFGSCxDQUVRLFVBQUNDLFFBQUQ7QUFBQSxhQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLEtBRlIsRUFHR0YsSUFISCxDQUdRLGdCQUFjO0FBQUEsVUFBWEcsSUFBVyxRQUFYQSxJQUFXO0FBQ2xCTCxNQUFBQSxlQUFlLENBQUNLLElBQUksQ0FBQyxDQUFELENBQUwsQ0FBZjtBQUNELEtBTEg7QUFNRCxHQVBRLEVBT04sRUFQTSxDQUFUO0FBU0Esc0JBQ0U7QUFBQSwyQkFDRSw4REFBQywwREFBRDtBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBS0UsOERBQUMsc0RBQUQ7QUFBTyxpQkFBUyxFQUFFTjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBWUQsQ0F4QkQsRUF5QkE7QUFDQTtBQUNBOzs7R0EzQk1wQjs7S0FBQUE7QUE2Qk4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ib2FyZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9Fc3RvIGVzIGxvIG1pc21vIHF1ZSBMYXlvdXRcclxuaW1wb3J0IEFib3V0IGZyb20gXCIuLi9wYWdlcy9hYm91dFwiO1xyXG5jb25zdCBRdWVzdGlvbiA9ICh7IHF1ZXN0aW9uIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhxdWVzdGlvbi5xdWVzdGlvbik7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtxdWVzdGlvbi5xdWVzdGlvbn1cclxuICAgICAge3F1ZXN0aW9uLm9wdGlvbnMubWFwKChvcCkgPT4gKFxyXG4gICAgICAgIDxidXR0b24+e29wfTwvYnV0dG9uPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IFFIb3BwZXIgPSAoaW1kZXgpID0+IDxkaXY+PFF1ZXN0aW9uIHF1ZXN0aW9uPXtwcm9wcy5xdWVzdGlvbnNbaW1kZXhdfS8+PC9kaXY+O1xyXG5jb25zdCBCb2FyZCA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUXVlc3Rpb25cIj5cclxuICAgICAgICAgIHtwcm9wcy5xdWVzdGlvbnMubWFwKChxdWVzdGlvbikgPT4gKFxyXG4gICAgICAgICAgICA8UXVlc3Rpb24gcXVlc3Rpb249e3F1ZXN0aW9ufSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgIEFjw6EgdmFuIGxhcyBwcmVndW50YXMgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyXHJcbiAgICAgICAgICAgIGFkaXBpc2ljaW5nIGVsaXQuIE1pbmltYSwgaGljIGFuaW1pIHF1aWRlbSBhc3N1bWVuZGEsP1xyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFuc3dlcnNcIj5cclxuICAgICAgICAgIHtwcm9wcy5xdWVzdGlvbnMubWFwKChxdWVzdGlvbikgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24+e3F1ZXN0aW9uLm9wdGlvbnN9PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCdXR0b25vc1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJDb21tYW5kc1wiPkFudGVyaW9yIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJDb21tYW5kc1wiPlNpZ3VpZW50ZSA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiQ29tbWFuZHNcIj5FbnZpYXIgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkNvbW1hbmRzXCI+VGVybWluYXIgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOdW1iZXJzXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIlRvdGFsXCI+IDEgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIlRvdGFsXCI+IDIgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIlRvdGFsXCI+IDMgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIlRvdGFsXCI+IDQgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIlRvdGFsXCI+IDUgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcclxuaW1wb3J0IEJvYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL2JvYXJkXCI7XHJcbmltcG9ydCBkYXRhcyBmcm9tIFwiLi4vZGF0YWJhc2UvZGF0YVwiO1xyXG5cclxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3F1ZXN0aW9uTGlzdCwgc2V0UXVlc3Rpb25MaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvd1xyXG4gICAgICAuZmV0Y2goXCIvYXBpL2V4YW1cIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIHNldFF1ZXN0aW9uTGlzdChkYXRhWzBdKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5OZXh0UHJvamVjdCAtIEFib3V0IDwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxoMT5XZWxjb21lIHRvIE5leHQuanMhIFRoaXMgaXMgQWJvdXQ8L2gxPlxyXG4gICAgICAgIDxCb2FyZCBxdWVzdGlvbnM9e3F1ZXN0aW9uTGlzdH0gLz5cclxuXHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuLy8qe3F1ZXN0aW9uTGlzdC5tYXAoKHF1ZXN0aW9uKSA9PiAoXHJcbi8vKjxkaXY+IHtjb25zb2xlLmxvZyhkYXRhWzBdKX1cclxuLy8qPC9kaXY+XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcclxuIl0sIm5hbWVzIjpbIkFib3V0IiwiUXVlc3Rpb24iLCJxdWVzdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb25zIiwibWFwIiwib3AiLCJRSG9wcGVyIiwiaW1kZXgiLCJwcm9wcyIsInF1ZXN0aW9ucyIsIkJvYXJkIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lciIsIkhlYWQiLCJmZXRjaCIsImRhdGFzIiwicXVlc3Rpb25MaXN0Iiwic2V0UXVlc3Rpb25MaXN0Iiwid2luZG93IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9