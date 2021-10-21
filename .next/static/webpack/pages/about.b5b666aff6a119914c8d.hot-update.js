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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: "jsx-2700298786",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("title", {
          className: "jsx-2700298786",
          children: "NextProject -  Home "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("link", {
          href: "https://fonts.googleapis.com/css2?family=Pangolin&display=swap')",
          rel: "stylesheet",
          className: "jsx-2700298786"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h1", {
        className: "jsx-2700298786",
        children: " Welcome to Next.js! This is Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "jsx-2700298786",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h1", {
          className: "jsx-2700298786",
          children: " Seleccionar tema"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "jsx-2700298786" + " " + "temas",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
            className: "jsx-2700298786",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: "/about",
              onclick: myfunction(0),
              className: "geografia",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
                className: "jsx-2700298786",
                children: "Geograf\xEDa"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 91
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
              className: "jsx-2700298786",
              children: "bkbkjbk"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 114
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
            className: "jsx-2700298786",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: "/about",
              onclick: myfunction(1),
              className: "matematicas",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
                className: "jsx-2700298786",
                children: "Matem\xE1ticas"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 93
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
              className: "jsx-2700298786",
              children: "bkbkjbk"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 118
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
            className: "jsx-2700298786",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: "/about",
              onclick: myfunction(2),
              className: "musica",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
                className: "jsx-2700298786",
                children: "M\xFAsica"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 88
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
              className: "jsx-2700298786",
              children: "bkbkjbk"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 108
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
            className: "jsx-2700298786",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: "/about",
              onclick: myfunction(3),
              className: "ingles",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
                className: "jsx-2700298786",
                children: "Ingl\xE9s"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 88
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
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
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "2700298786",
      children: ".temas.jsx-2700298786{-webkit-text-decoration:none;text-decoration:none;display:grid;justify-items:center;grid-template-columns:600px 600px;grid-template-rows:250px 250px;gap:0px 0px;grid-template-areas: \"geografia matematicas\" \"musica ingles\";row-gap:40px;margin:40px;}.temas.jsx-2700298786>button.jsx-2700298786{font-family:'Pangolin',cursive;font-size:40px;border:transparent;background-color:#71aab5;border-radius:70px;width:500px;-webkit-transition-duration:0.4s;transition-duration:0.4s;}.temas.jsx-2700298786>button.jsx-2700298786:hover{background-color:#c9dcdb;box-shadow:0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);}.temas.jsx-2700298786>button.jsx-2700298786 a.jsx-2700298786{color:#0c839c;-webkit-text-decoration:none;text-decoration:none;}.temas.jsx-2700298786>button.jsx-2700298786 p.jsx-2700298786{font-size:25px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWxlZGlcXE9uZURyaXZlXFxEb2N1bWVudHNcXEN1cnNvc1xcUGxhdHppIE1hc3RlclxcUDEgU2lzdGVtYSBkZSBldmFsdWFjaW9uXFxOdWV2YSBjYXJwZXRhXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NZLEFBSXlCLEFBa0JXLEFBV1AsQUFPWCxBQU1DLGNBTEUsQ0FPcEIsVUFkOEUsTUFYNUQsZUFDSSxJQWxCTCxhQUNRLENBb0N6QixDQWxCNkIsbUJBakJVLE1Ba0JoQixRQVl2QixXQVhnQixTQWxCbUIsR0FtQlAsNEJBbEJaLFlBR0csa0JBZ0JuQiwyQ0FmaUIsYUFFRixZQUlQIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYWxlZGlcXE9uZURyaXZlXFxEb2N1bWVudHNcXEN1cnNvc1xcUGxhdHppIE1hc3RlclxcUDEgU2lzdGVtYSBkZSBldmFsdWFjaW9uXFxOdWV2YSBjYXJwZXRhXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lclwiXHJcbmltcG9ydCBkYXRhIGZyb20gXCIuLy4uL2RhdGFiYXNlL2RhdGFcIlxyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuXHJcbiAgICAvKmNvbnN0IFtwcm9kdWN0TGlzdCwgc2V0UHJvZHVjdExpc3RdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3dcclxuICAgICAgICAuZmV0Y2goJy9hcGkvZXhhbScpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB7IHNldFByb2R1Y3RMaXN0KGRhdGEpfSlcclxuICAgIH0sIFtdKSovXHJcbiAgICByZXR1cm4gKDxkaXY+XHJcblxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPk5leHRQcm9qZWN0IC0gIEhvbWUgPC90aXRsZT5cclxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGFuZ29saW4mZGlzcGxheT1zd2FwJylcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8aDE+IFdlbGNvbWUgdG8gTmV4dC5qcyEgVGhpcyBpcyBIb21lPC9oMT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+IFNlbGVjY2lvbmFyIHRlbWE8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlbWFzXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPjxMaW5rIGhyZWY9XCIvYWJvdXRcIiBvbmNsaWNrPXtteWZ1bmN0aW9uKDApfSBjbGFzc05hbWU9XCJnZW9ncmFmaWFcIj48YT5HZW9ncmFmw61hPC9hPjwvTGluaz48cD5ia2JramJrPC9wPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj48TGluayBocmVmPVwiL2Fib3V0XCIgb25jbGljaz17bXlmdW5jdGlvbigxKX0gY2xhc3NOYW1lPVwibWF0ZW1hdGljYXNcIj48YT5NYXRlbcOhdGljYXM8L2E+PC9MaW5rPjxwPmJrYmtqYms8L3A+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPjxMaW5rIGhyZWY9XCIvYWJvdXRcIiBvbmNsaWNrPXtteWZ1bmN0aW9uKDIpfSBjbGFzc05hbWU9XCJtdXNpY2FcIj48YT5Nw7pzaWNhPC9hPjwvTGluaz48cD5ia2JramJrPC9wPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj48TGluayBocmVmPVwiL2Fib3V0XCIgb25jbGljaz17bXlmdW5jdGlvbigzKX0gY2xhc3NOYW1lPVwiaW5nbGVzXCI+PGE+SW5nbMOpczwvYT48L0xpbms+PHA+Ymtia2piazwvcD48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuPHN0eWxlIGpzeD57YFxyXG5cclxuLnRlbWFze1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcblxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjAwcHggNjAwcHggO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNTBweCAyNTBweDtcclxuICAgIGdhcDogMHB4IDBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICBcImdlb2dyYWZpYSBtYXRlbWF0aWNhc1wiXHJcbiAgICBcIm11c2ljYSBpbmdsZXNcIjtcclxuICAgIHJvdy1nYXA6IDQwcHg7XHJcblxyXG4gICAgbWFyZ2luOjQwcHg7XHJcblxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4udGVtYXMgPiBidXR0b257XHJcbiAgICBmb250LWZhbWlseTogJ1BhbmdvbGluJyxjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOjQwcHg7XHJcbiAgICBib3JkZXI6dHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzFhYWI1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNzBweDtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246MC40cztcclxufVxyXG5cclxuLnRlbWFzID4gYnV0dG9uOmhvdmVye1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6I2M5ZGNkYjtcclxuICAgIGJveC1zaGFkb3c6IDAgMTJweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjI0KSwgMCAxN3B4IDUwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xyXG5cclxuXHJcblxyXG59XHJcbi50ZW1hcyA+IGJ1dHRvbiBhe1xyXG4gICAgY29sb3I6IzBjODM5YztcclxudGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcblxyXG59XHJcblxyXG4udGVtYXMgPmJ1dHRvbiBwe1xyXG4gICAgZm9udC1zaXplOjI1cHg7XHJcblxyXG59XHJcblxyXG5cclxuYH08L3N0eWxlPlxyXG5cclxuXHJcbiAgIDwvZGl2PlxyXG4gICAgKX1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\aledi\\\\OneDrive\\\\Documents\\\\Cursos\\\\Platzi Master\\\\P1 Sistema de evaluacion\\\\Nueva carpeta\\\\pages\\\\index.js */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuYjViNjY2YWZmNmExMTk5MTRjOGQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTVMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixrQkFBd0NQLCtDQUFRLENBQUMsRUFBRCxDQUFoRDtBQUFBLE1BQU9RLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBRUEsTUFBSUMsTUFBTSxHQUFFSiwwQ0FBWjtBQUVBUCxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZFksSUFBQUEsTUFBTSxDQUNIUixLQURILENBQ1MsV0FEVCxFQUVHUyxJQUZILENBRVEsVUFBQ0MsUUFBRDtBQUFBLGFBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFkO0FBQUEsS0FGUixFQUdHRixJQUhILENBR1EsZ0JBQWM7QUFBQSxVQUFYRyxJQUFXLFFBQVhBLElBQVc7QUFDbEIsVUFBRztBQUFDTCxRQUFBQSxNQUFNLEVBQU5BO0FBQUQsV0FBWSxDQUFmLEVBQWtCRCxlQUFlLENBQUNNLElBQUksQ0FBQyxDQUFELENBQUwsQ0FBZixDQUFsQixLQUNLLElBQUc7QUFBQ0wsUUFBQUEsTUFBTSxFQUFOQTtBQUFELFdBQVksQ0FBZixFQUFrQkQsZUFBZSxDQUFDTSxJQUFJLENBQUMsQ0FBRCxDQUFMLENBQWYsQ0FBbEIsS0FDQSxJQUFHO0FBQUNMLFFBQUFBLE1BQU0sRUFBTkE7QUFBRCxXQUFZLENBQWYsRUFBa0JELGVBQWUsQ0FBQ00sSUFBSSxDQUFDLENBQUQsQ0FBTCxDQUFmLENBQWxCLEtBQ0E7QUFBQ04sUUFBQUEsZUFBZSxDQUFDTSxJQUFJLENBQUMsQ0FBRCxDQUFMLENBQWY7QUFBeUI7QUFDaEMsS0FSSDtBQVNELEdBVlEsRUFVTixFQVZNLENBQVQ7QUFZQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFD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QVUsQ0FBQyxDQUFELENBQXZDO0FBQTRDLHVCQUFTLEVBQUMsUUFBdEQ7QUFBQSxxQ0FBK0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFSLGVBQTJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVI7QUF3RUUsQ0FsRk47O0tBQU1EO0FBeUZOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Fib3V0LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy1mZXRjaFwiO1xyXG5pbXBvcnQgQm9hcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvYm9hcmRcIjtcclxuaW1wb3J0IGRhdGFzIGZyb20gXCIuLi9kYXRhYmFzZS9kYXRhXCI7XHJcbmltcG9ydCAqIGFzIG51bXMgZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtxdWVzdGlvbkxpc3QsIHNldFF1ZXN0aW9uTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGxldCB2YWxpZGE9IG51bXMudmFsaWRhO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93XHJcbiAgICAgIC5mZXRjaChcIi9hcGkvZXhhbVwiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgaWYoe3ZhbGlkYX0gPT0gMCkgc2V0UXVlc3Rpb25MaXN0KGRhdGFbMF0pO1xyXG4gICAgICAgIGVsc2UgaWYoe3ZhbGlkYX0gPT0gMSkgc2V0UXVlc3Rpb25MaXN0KGRhdGFbMV0pO1xyXG4gICAgICAgIGVsc2UgaWYoe3ZhbGlkYX0gPT0gMikgc2V0UXVlc3Rpb25MaXN0KGRhdGFbMl0pO1xyXG4gICAgICAgIGVsc2Uge3NldFF1ZXN0aW9uTGlzdChkYXRhWzNdKX1cclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5OZXh0UHJvamVjdCAtIEFib3V0IDwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxoMT5XZWxjb21lIHRvIE5leHQuanMhIFRoaXMgaXMgQWJvdXQ8L2gxPlxyXG4gICAgICAgIHtxdWVzdGlvbkxpc3QubGVuZ3RoICYmIDxCb2FyZCBxdWVzdGlvbnM9e3F1ZXN0aW9uTGlzdH0gLz59XHJcblxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbi8vKntxdWVzdGlvbkxpc3QubWFwKChxdWVzdGlvbikgPT4gKFxyXG4vLyo8ZGl2PiB7Y29uc29sZS5sb2coZGF0YVswXSl9XHJcbi8vKjwvZGl2PlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFpbmVyXCJcclxuaW1wb3J0IGRhdGEgZnJvbSBcIi4vLi4vZGF0YWJhc2UvZGF0YVwiXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG5cclxuICAgIC8qY29uc3QgW3Byb2R1Y3RMaXN0LCBzZXRQcm9kdWN0TGlzdF0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvd1xyXG4gICAgICAgIC5mZXRjaCgnL2FwaS9leGFtJylcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHsgc2V0UHJvZHVjdExpc3QoZGF0YSl9KVxyXG4gICAgfSwgW10pKi9cclxuICAgIHJldHVybiAoPGRpdj5cclxuXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+TmV4dFByb2plY3QgLSAgSG9tZSA8L3RpdGxlPlxyXG4gICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYW5nb2xpbiZkaXNwbGF5PXN3YXAnKVwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxoMT4gV2VsY29tZSB0byBOZXh0LmpzISBUaGlzIGlzIEhvbWU8L2gxPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT4gU2VsZWNjaW9uYXIgdGVtYTwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVtYXNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+PExpbmsgaHJlZj1cIi9hYm91dFwiIG9uY2xpY2s9e215ZnVuY3Rpb24oMCl9IGNsYXNzTmFtZT1cImdlb2dyYWZpYVwiPjxhPkdlb2dyYWbDrWE8L2E+PC9MaW5rPjxwPmJrYmtqYms8L3A+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPjxMaW5rIGhyZWY9XCIvYWJvdXRcIiBvbmNsaWNrPXtteWZ1bmN0aW9uKDEpfSBjbGFzc05hbWU9XCJtYXRlbWF0aWNhc1wiPjxhPk1hdGVtw6F0aWNhczwvYT48L0xpbms+PHA+Ymtia2piazwvcD48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+PExpbmsgaHJlZj1cIi9hYm91dFwiIG9uY2xpY2s9e215ZnVuY3Rpb24oMil9IGNsYXNzTmFtZT1cIm11c2ljYVwiPjxhPk3DunNpY2E8L2E+PC9MaW5rPjxwPmJrYmtqYms8L3A+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPjxMaW5rIGhyZWY9XCIvYWJvdXRcIiBvbmNsaWNrPXtteWZ1bmN0aW9uKDMpfSBjbGFzc05hbWU9XCJpbmdsZXNcIj48YT5Jbmdsw6lzPC9hPjwvTGluaz48cD5ia2JramJrPC9wPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG48c3R5bGUganN4PntgXHJcblxyXG4udGVtYXN7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MDBweCA2MDBweCA7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDI1MHB4IDI1MHB4O1xyXG4gICAgZ2FwOiAwcHggMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgIFwiZ2VvZ3JhZmlhIG1hdGVtYXRpY2FzXCJcclxuICAgIFwibXVzaWNhIGluZ2xlc1wiO1xyXG4gICAgcm93LWdhcDogNDBweDtcclxuXHJcbiAgICBtYXJnaW46NDBweDtcclxuXHJcblxyXG5cclxuICAgICAgICB9XHJcbi50ZW1hcyA+IGJ1dHRvbntcclxuICAgIGZvbnQtZmFtaWx5OiAnUGFuZ29saW4nLGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6NDBweDtcclxuICAgIGJvcmRlcjp0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MWFhYjU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3MHB4O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjowLjRzO1xyXG59XHJcblxyXG4udGVtYXMgPiBidXR0b246aG92ZXJ7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojYzlkY2RiO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMjQpLCAwIDE3cHggNTBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XHJcblxyXG5cclxuXHJcbn1cclxuLnRlbWFzID4gYnV0dG9uIGF7XHJcbiAgICBjb2xvcjojMGM4MzljO1xyXG50ZXh0LWRlY29yYXRpb246bm9uZTtcclxuXHJcbn1cclxuXHJcbi50ZW1hcyA+YnV0dG9uIHB7XHJcbiAgICBmb250LXNpemU6MjVweDtcclxuXHJcbn1cclxuXHJcblxyXG5gfTwvc3R5bGU+XHJcblxyXG5cclxuICAgPC9kaXY+XHJcbiAgICApfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29udGFpbmVyIiwiSGVhZCIsImZldGNoIiwiQm9hcmQiLCJkYXRhcyIsIm51bXMiLCJBYm91dCIsInF1ZXN0aW9uTGlzdCIsInNldFF1ZXN0aW9uTGlzdCIsInZhbGlkYSIsIndpbmRvdyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwibGVuZ3RoIiwiTGluayIsIkluZGV4IiwibXlmdW5jdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=