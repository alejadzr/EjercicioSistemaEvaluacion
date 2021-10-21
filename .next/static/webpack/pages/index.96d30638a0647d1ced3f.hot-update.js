"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

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
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "board",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "Question",
          children: [props.questions.map(function (question) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                children: question.question
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 15
              }, _this), question.options.map(function (op) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                  children: op
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
          }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
            children: "Ac\xE1 van las preguntas Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, hic animi quidem assumenda,?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "Answers"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "Buttonos",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Commands",
            children: "Anterior "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Commands",
            children: "Siguiente "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Commands",
            children: "Enviar "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Commands",
            children: "Terminar "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "Numbers",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Total",
            children: " 1 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Total",
            children: " 2 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Total",
            children: " 3 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Total",
            children: " 4 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: "Total",
            children: " 5 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
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
    }, _this)
  }, void 0, false, {
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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index */ "./pages/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\aledi\\OneDrive\\Documents\\Cursos\\Platzi Master\\P1 Sistema de evaluacion\\Nueva carpeta\\pages\\about.js",
    _this = undefined,
    _s = $RefreshSig$();










var About = function About() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      questionList = _useState[0],
      setQuestionList = _useState[1];

  var valida = _index__WEBPACK_IMPORTED_MODULE_6__.valida;
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("title", {
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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h1", {
        children: "Welcome to Next.js! This is About"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this), questionList.length && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_board__WEBPACK_IMPORTED_MODULE_4__.default, {
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


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");
/* harmony import */ var _database_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../database/data */ "./database/data.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about */ "./pages/about.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\aledi\\OneDrive\\Documents\\Cursos\\Platzi Master\\P1 Sistema de evaluacion\\Nueva carpeta\\pages\\index.js",
    _this = undefined;











var Index = function Index() {
  /*const [productList, setProductList] = useState([])
    useEffect(() => {
      window
      .fetch('/api/exam')
      .then((response) =>response.json())
      .then(({data}) => { setProductList(data)})
  }, [])*/
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    className: "jsx-2700298786",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("title", {
          className: "jsx-2700298786",
          children: "NextProject -  Home "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("link", {
          href: "https://fonts.googleapis.com/css2?family=Pangolin&display=swap')",
          rel: "stylesheet",
          className: "jsx-2700298786"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h1", {
        className: "jsx-2700298786",
        children: " Welcome to Next.js! This is Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "jsx-2700298786",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h1", {
          className: "jsx-2700298786",
          children: " Seleccionar tema"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "jsx-2700298786" + " " + "temas",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
            className: "jsx-2700298786",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: "/about",
              onclick: myfunction(0),
              className: "geografia",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
                className: "jsx-2700298786",
                children: "Geograf\xEDa"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 91
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
              className: "jsx-2700298786",
              children: "bkbkjbk"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 114
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
            className: "jsx-2700298786",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: "/about",
              onclick: myfunction(1),
              className: "matematicas",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
                className: "jsx-2700298786",
                children: "Matem\xE1ticas"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 93
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
              className: "jsx-2700298786",
              children: "bkbkjbk"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 118
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
            className: "jsx-2700298786",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: "/about",
              onclick: myfunction(2),
              className: "musica",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
                className: "jsx-2700298786",
                children: "M\xFAsica"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 88
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
              className: "jsx-2700298786",
              children: "bkbkjbk"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 108
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
            className: "jsx-2700298786",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: "/about",
              onclick: myfunction(3),
              className: "ingles",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
                className: "jsx-2700298786",
                children: "Ingl\xE9s"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 88
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
              className: "jsx-2700298786",
              children: "bkbkjbk"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 108
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "2700298786",
      children: ".temas.jsx-2700298786{-webkit-text-decoration:none;text-decoration:none;display:grid;justify-items:center;grid-template-columns:600px 600px;grid-template-rows:250px 250px;gap:0px 0px;grid-template-areas: \"geografia matematicas\" \"musica ingles\";row-gap:40px;margin:40px;}.temas.jsx-2700298786>button.jsx-2700298786{font-family:'Pangolin',cursive;font-size:40px;border:transparent;background-color:#71aab5;border-radius:70px;width:500px;-webkit-transition-duration:0.4s;transition-duration:0.4s;}.temas.jsx-2700298786>button.jsx-2700298786:hover{background-color:#c9dcdb;box-shadow:0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);}.temas.jsx-2700298786>button.jsx-2700298786 a.jsx-2700298786{color:#0c839c;-webkit-text-decoration:none;text-decoration:none;}.temas.jsx-2700298786>button.jsx-2700298786 p.jsx-2700298786{font-size:25px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWxlZGlcXE9uZURyaXZlXFxEb2N1bWVudHNcXEN1cnNvc1xcUGxhdHppIE1hc3RlclxcUDEgU2lzdGVtYSBkZSBldmFsdWFjaW9uXFxOdWV2YSBjYXJwZXRhXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNZLEFBSXlCLEFBa0JXLEFBV1AsQUFPWCxBQU1DLGNBTEUsQ0FPcEIsVUFkOEUsTUFYNUQsZUFDSSxJQWxCTCxhQUNRLENBb0N6QixDQWxCNkIsbUJBakJVLE1Ba0JoQixRQVl2QixXQVhnQixTQWxCbUIsR0FtQlAsNEJBbEJaLFlBR0csa0JBZ0JuQiwyQ0FmaUIsYUFFRixZQUlQIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYWxlZGlcXE9uZURyaXZlXFxEb2N1bWVudHNcXEN1cnNvc1xcUGxhdHppIE1hc3RlclxcUDEgU2lzdGVtYSBkZSBldmFsdWFjaW9uXFxOdWV2YSBjYXJwZXRhXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lclwiXHJcbmltcG9ydCBkYXRhIGZyb20gXCIuLy4uL2RhdGFiYXNlL2RhdGFcIlxyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9hYm91dCdcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcblxyXG4gICAgLypjb25zdCBbcHJvZHVjdExpc3QsIHNldFByb2R1Y3RMaXN0XSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93XHJcbiAgICAgICAgLmZldGNoKCcvYXBpL2V4YW0nKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4geyBzZXRQcm9kdWN0TGlzdChkYXRhKX0pXHJcbiAgICB9LCBbXSkqL1xyXG4gICAgcmV0dXJuICg8ZGl2PlxyXG5cclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5OZXh0UHJvamVjdCAtICBIb21lIDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhbmdvbGluJmRpc3BsYXk9c3dhcCcpXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGgxPiBXZWxjb21lIHRvIE5leHQuanMhIFRoaXMgaXMgSG9tZTwvaDE+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPiBTZWxlY2Npb25hciB0ZW1hPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZW1hc1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj48TGluayBocmVmPVwiL2Fib3V0XCIgb25jbGljaz17bXlmdW5jdGlvbigwKX0gY2xhc3NOYW1lPVwiZ2VvZ3JhZmlhXCI+PGE+R2VvZ3JhZsOtYTwvYT48L0xpbms+PHA+Ymtia2piazwvcD48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+PExpbmsgaHJlZj1cIi9hYm91dFwiIG9uY2xpY2s9e215ZnVuY3Rpb24oMSl9IGNsYXNzTmFtZT1cIm1hdGVtYXRpY2FzXCI+PGE+TWF0ZW3DoXRpY2FzPC9hPjwvTGluaz48cD5ia2JramJrPC9wPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj48TGluayBocmVmPVwiL2Fib3V0XCIgb25jbGljaz17bXlmdW5jdGlvbigyKX0gY2xhc3NOYW1lPVwibXVzaWNhXCI+PGE+TcO6c2ljYTwvYT48L0xpbms+PHA+Ymtia2piazwvcD48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+PExpbmsgaHJlZj1cIi9hYm91dFwiIG9uY2xpY2s9e215ZnVuY3Rpb24oMyl9IGNsYXNzTmFtZT1cImluZ2xlc1wiPjxhPkluZ2zDqXM8L2E+PC9MaW5rPjxwPmJrYmtqYms8L3A+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9Db250YWluZXI+XHJcbjxzdHlsZSBqc3g+e2BcclxuXHJcbi50ZW1hc3tcclxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG5cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwMHB4IDYwMHB4IDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjUwcHggMjUwcHg7XHJcbiAgICBnYXA6IDBweCAwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgXCJnZW9ncmFmaWEgbWF0ZW1hdGljYXNcIlxyXG4gICAgXCJtdXNpY2EgaW5nbGVzXCI7XHJcbiAgICByb3ctZ2FwOiA0MHB4O1xyXG5cclxuICAgIG1hcmdpbjo0MHB4O1xyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuLnRlbWFzID4gYnV0dG9ue1xyXG4gICAgZm9udC1mYW1pbHk6ICdQYW5nb2xpbicsY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTo0MHB4O1xyXG4gICAgYm9yZGVyOnRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcxYWFiNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDcwcHg7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOjAuNHM7XHJcbn1cclxuXHJcbi50ZW1hcyA+IGJ1dHRvbjpob3ZlcntcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNjOWRjZGI7XHJcbiAgICBib3gtc2hhZG93OiAwIDEycHggMTZweCAwIHJnYmEoMCwwLDAsMC4yNCksIDAgMTdweCA1MHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcclxuXHJcblxyXG5cclxufVxyXG4udGVtYXMgPiBidXR0b24gYXtcclxuICAgIGNvbG9yOiMwYzgzOWM7XHJcbnRleHQtZGVjb3JhdGlvbjpub25lO1xyXG5cclxufVxyXG5cclxuLnRlbWFzID5idXR0b24gcHtcclxuICAgIGZvbnQtc2l6ZToyNXB4O1xyXG5cclxufVxyXG5cclxuXHJcbmB9PC9zdHlsZT5cclxuXHJcblxyXG4gICA8L2Rpdj5cclxuICAgICl9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il19 */\n/*@ sourceURL=C:\\\\Users\\\\aledi\\\\OneDrive\\\\Documents\\\\Cursos\\\\Platzi Master\\\\P1 Sistema de evaluacion\\\\Nueva carpeta\\\\pages\\\\index.js */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 13
  }, _this);
};

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTZkMzA2MzhhMDY0N2QxY2VkM2YuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQ7QUFBQSxzQkFDWjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLE9BQWY7QUFBQSw2QkFFRTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEscUJBQ0dBLEtBQUssQ0FBQ0MsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsVUFBQ0MsUUFBRDtBQUFBLGdDQUNuQjtBQUFBLHNDQUNFO0FBQUEsMEJBQUtBLFFBQVEsQ0FBQ0E7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBRUdBLFFBQVEsQ0FBQ0MsT0FBVCxDQUFpQkYsR0FBakIsQ0FBcUIsVUFBQ0csRUFBRDtBQUFBLG9DQUNwQjtBQUFBLDRCQUFTQTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRG9CO0FBQUEsZUFBckIsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRG1CO0FBQUEsV0FBcEIsQ0FESCxlQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQWVFO0FBQUssbUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkYsZUFrQkU7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxrQ0FDRTtBQUFRLHFCQUFTLEVBQUMsVUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFRLHFCQUFTLEVBQUMsVUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFRLHFCQUFTLEVBQUMsVUFBbEI7QUFBQTtBQUFB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUjtBQXdFRSxDQWxGTjs7S0FBTUQ7QUF5Rk4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ib2FyZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vRXN0byBlcyBsbyBtaXNtbyBxdWUgTGF5b3V0XHJcbmltcG9ydCBBYm91dCBmcm9tIFwiLi4vcGFnZXMvYWJvdXRcIjtcclxuXHJcbmNvbnN0IEJvYXJkID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmRcIj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUXVlc3Rpb25cIj5cclxuICAgICAgICAgIHtwcm9wcy5xdWVzdGlvbnMubWFwKChxdWVzdGlvbikgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMj57cXVlc3Rpb24ucXVlc3Rpb259PC9oMj5cclxuICAgICAgICAgICAgICB7cXVlc3Rpb24ub3B0aW9ucy5tYXAoKG9wKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPntvcH08L2J1dHRvbj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgQWPDoSB2YW4gbGFzIHByZWd1bnRhcyBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXJcclxuICAgICAgICAgICAgYWRpcGlzaWNpbmcgZWxpdC4gTWluaW1hLCBoaWMgYW5pbWkgcXVpZGVtIGFzc3VtZW5kYSw/XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQW5zd2Vyc1wiPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJ1dHRvbm9zXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkNvbW1hbmRzXCI+QW50ZXJpb3IgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkNvbW1hbmRzXCI+U2lndWllbnRlIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJDb21tYW5kc1wiPkVudmlhciA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiQ29tbWFuZHNcIj5UZXJtaW5hciA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk51bWJlcnNcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiVG90YWxcIj4gMSA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiVG90YWxcIj4gMiA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiVG90YWxcIj4gMyA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiVG90YWxcIj4gNCA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiVG90YWxcIj4gNSA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcblxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XHJcbmltcG9ydCBCb2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9ib2FyZFwiO1xyXG5pbXBvcnQgZGF0YXMgZnJvbSBcIi4uL2RhdGFiYXNlL2RhdGFcIjtcclxuaW1wb3J0ICogYXMgbnVtcyBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3F1ZXN0aW9uTGlzdCwgc2V0UXVlc3Rpb25MaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgbGV0IHZhbGlkYT0gbnVtcy52YWxpZGE7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3dcclxuICAgICAgLmZldGNoKFwiL2FwaS9leGFtXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICBpZih7dmFsaWRhfSA9PSAwKSBzZXRRdWVzdGlvbkxpc3QoZGF0YVswXSk7XHJcbiAgICAgICAgZWxzZSBpZih7dmFsaWRhfSA9PSAxKSBzZXRRdWVzdGlvbkxpc3QoZGF0YVsxXSk7XHJcbiAgICAgICAgZWxzZSBpZih7dmFsaWRhfSA9PSAyKSBzZXRRdWVzdGlvbkxpc3QoZGF0YVsyXSk7XHJcbiAgICAgICAgZWxzZSB7c2V0UXVlc3Rpb25MaXN0KGRhdGFbM10pfVxyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPk5leHRQcm9qZWN0IC0gQWJvdXQgPC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGgxPldlbGNvbWUgdG8gTmV4dC5qcyEgVGhpcyBpcyBBYm91dDwvaDE+XHJcbiAgICAgICAge3F1ZXN0aW9uTGlzdC5sZW5ndGggJiYgPEJvYXJkIHF1ZXN0aW9ucz17cXVlc3Rpb25MaXN0fSAvPn1cclxuXHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuLy8qe3F1ZXN0aW9uTGlzdC5tYXAoKHF1ZXN0aW9uKSA9PiAoXHJcbi8vKjxkaXY+IHtjb25zb2xlLmxvZyhkYXRhWzBdKX1cclxuLy8qPC9kaXY+XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJcIlxyXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi8uLi9kYXRhYmFzZS9kYXRhXCJcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEFib3V0IGZyb20gJy4vYWJvdXQnXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG5cclxuICAgIC8qY29uc3QgW3Byb2R1Y3RMaXN0LCBzZXRQcm9kdWN0TGlzdF0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvd1xyXG4gICAgICAgIC5mZXRjaCgnL2FwaS9leGFtJylcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHsgc2V0UHJvZHVjdExpc3QoZGF0YSl9KVxyXG4gICAgfSwgW10pKi9cclxuICAgIHJldHVybiAoPGRpdj5cclxuXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+TmV4dFByb2plY3QgLSAgSG9tZSA8L3RpdGxlPlxyXG4gICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYW5nb2xpbiZkaXNwbGF5PXN3YXAnKVwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxoMT4gV2VsY29tZSB0byBOZXh0LmpzISBUaGlzIGlzIEhvbWU8L2gxPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT4gU2VsZWNjaW9uYXIgdGVtYTwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVtYXNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+PExpbmsgaHJlZj1cIi9hYm91dFwiIG9uY2xpY2s9e215ZnVuY3Rpb24oMCl9IGNsYXNzTmFtZT1cImdlb2dyYWZpYVwiPjxhPkdlb2dyYWbDrWE8L2E+PC9MaW5rPjxwPmJrYmtqYms8L3A+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPjxMaW5rIGhyZWY9XCIvYWJvdXRcIiBvbmNsaWNrPXtteWZ1bmN0aW9uKDEpfSBjbGFzc05hbWU9XCJtYXRlbWF0aWNhc1wiPjxhPk1hdGVtw6F0aWNhczwvYT48L0xpbms+PHA+Ymtia2piazwvcD48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+PExpbmsgaHJlZj1cIi9hYm91dFwiIG9uY2xpY2s9e215ZnVuY3Rpb24oMil9IGNsYXNzTmFtZT1cIm11c2ljYVwiPjxhPk3DunNpY2E8L2E+PC9MaW5rPjxwPmJrYmtqYms8L3A+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPjxMaW5rIGhyZWY9XCIvYWJvdXRcIiBvbmNsaWNrPXtteWZ1bmN0aW9uKDMpfSBjbGFzc05hbWU9XCJpbmdsZXNcIj48YT5Jbmdsw6lzPC9hPjwvTGluaz48cD5ia2JramJrPC9wPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG48c3R5bGUganN4PntgXHJcblxyXG4udGVtYXN7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MDBweCA2MDBweCA7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDI1MHB4IDI1MHB4O1xyXG4gICAgZ2FwOiAwcHggMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgIFwiZ2VvZ3JhZmlhIG1hdGVtYXRpY2FzXCJcclxuICAgIFwibXVzaWNhIGluZ2xlc1wiO1xyXG4gICAgcm93LWdhcDogNDBweDtcclxuXHJcbiAgICBtYXJnaW46NDBweDtcclxuXHJcblxyXG5cclxuICAgICAgICB9XHJcbi50ZW1hcyA+IGJ1dHRvbntcclxuICAgIGZvbnQtZmFtaWx5OiAnUGFuZ29saW4nLGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6NDBweDtcclxuICAgIGJvcmRlcjp0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MWFhYjU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3MHB4O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjowLjRzO1xyXG59XHJcblxyXG4udGVtYXMgPiBidXR0b246aG92ZXJ7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojYzlkY2RiO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMjQpLCAwIDE3cHggNTBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XHJcblxyXG5cclxuXHJcbn1cclxuLnRlbWFzID4gYnV0dG9uIGF7XHJcbiAgICBjb2xvcjojMGM4MzljO1xyXG50ZXh0LWRlY29yYXRpb246bm9uZTtcclxuXHJcbn1cclxuXHJcbi50ZW1hcyA+YnV0dG9uIHB7XHJcbiAgICBmb250LXNpemU6MjVweDtcclxuXHJcbn1cclxuXHJcblxyXG5gfTwvc3R5bGU+XHJcblxyXG5cclxuICAgPC9kaXY+XHJcbiAgICApfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJuYW1lcyI6WyJBYm91dCIsIkJvYXJkIiwicHJvcHMiLCJxdWVzdGlvbnMiLCJtYXAiLCJxdWVzdGlvbiIsIm9wdGlvbnMiLCJvcCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb250YWluZXIiLCJIZWFkIiwiZmV0Y2giLCJkYXRhcyIsIm51bXMiLCJxdWVzdGlvbkxpc3QiLCJzZXRRdWVzdGlvbkxpc3QiLCJ2YWxpZGEiLCJ3aW5kb3ciLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImxlbmd0aCIsIkxpbmsiLCJJbmRleCIsIm15ZnVuY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9