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

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.fetch("/api/exam").then(function (response) {
      return response.json();
    }).then(function (_ref) {
      var data = _ref.data;
      if (_index__WEBPACK_IMPORTED_MODULE_6__.valida == 0) setQuestionList(data[0]);else if (_index__WEBPACK_IMPORTED_MODULE_6__.valida == 1) setQuestionList(data[1]);else if (_index__WEBPACK_IMPORTED_MODULE_6__.valida == 2) setQuestionList(data[2]);else {
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
          lineNumber: 29,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h1", {
        children: "Welcome to Next.js! This is About"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this), questionList.length && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_board__WEBPACK_IMPORTED_MODULE_4__.default, {
        questions: questionList
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 33
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "valida": function() { return /* binding */ valida; }
/* harmony export */ });
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










function myfunction(param) {
  var valida = param;
  console.log(valida);
  return valida;
}

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
          lineNumber: 34,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("link", {
          href: "https://fonts.googleapis.com/css2?family=Pangolin&display=swap')",
          rel: "stylesheet",
          className: "jsx-2700298786"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h1", {
        className: "jsx-2700298786",
        children: " Welcome to Next.js! This is Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "jsx-2700298786",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h1", {
          className: "jsx-2700298786",
          children: " Seleccionar tema"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
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
                lineNumber: 41,
                columnNumber: 91
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
              className: "jsx-2700298786",
              children: "bkbkjbk"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 114
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
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
                lineNumber: 42,
                columnNumber: 93
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
              className: "jsx-2700298786",
              children: "bkbkjbk"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 118
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
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
                lineNumber: 43,
                columnNumber: 88
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
              className: "jsx-2700298786",
              children: "bkbkjbk"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 108
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
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
                lineNumber: 44,
                columnNumber: 88
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
              className: "jsx-2700298786",
              children: "bkbkjbk"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 108
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "2700298786",
      children: ".temas.jsx-2700298786{-webkit-text-decoration:none;text-decoration:none;display:grid;justify-items:center;grid-template-columns:600px 600px;grid-template-rows:250px 250px;gap:0px 0px;grid-template-areas: \"geografia matematicas\" \"musica ingles\";row-gap:40px;margin:40px;}.temas.jsx-2700298786>button.jsx-2700298786{font-family:'Pangolin',cursive;font-size:40px;border:transparent;background-color:#71aab5;border-radius:70px;width:500px;-webkit-transition-duration:0.4s;transition-duration:0.4s;}.temas.jsx-2700298786>button.jsx-2700298786:hover{background-color:#c9dcdb;box-shadow:0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);}.temas.jsx-2700298786>button.jsx-2700298786 a.jsx-2700298786{color:#0c839c;-webkit-text-decoration:none;text-decoration:none;}.temas.jsx-2700298786>button.jsx-2700298786 p.jsx-2700298786{font-size:25px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWxlZGlcXE9uZURyaXZlXFxEb2N1bWVudHNcXEN1cnNvc1xcUGxhdHppIE1hc3RlclxcUDEgU2lzdGVtYSBkZSBldmFsdWFjaW9uXFxOdWV2YSBjYXJwZXRhXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NZLEFBSXlCLEFBa0JXLEFBV1AsQUFPWCxBQU1DLGNBTEUsQ0FPcEIsVUFkOEUsTUFYNUQsZUFDSSxJQWxCTCxhQUNRLENBb0N6QixDQWxCNkIsbUJBakJVLE1Ba0JoQixRQVl2QixXQVhnQixTQWxCbUIsR0FtQlAsNEJBbEJaLFlBR0csa0JBZ0JuQiwyQ0FmaUIsYUFFRixZQUlQIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYWxlZGlcXE9uZURyaXZlXFxEb2N1bWVudHNcXEN1cnNvc1xcUGxhdHppIE1hc3RlclxcUDEgU2lzdGVtYSBkZSBldmFsdWFjaW9uXFxOdWV2YSBjYXJwZXRhXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lclwiXHJcbmltcG9ydCBkYXRhIGZyb20gXCIuLy4uL2RhdGFiYXNlL2RhdGFcIlxyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuXHJcbmZ1bmN0aW9uIG15ZnVuY3Rpb24ocGFyYW0pe1xyXG5cclxuICAgIGNvbnN0IHZhbGlkYT1wYXJhbTtcclxuICAgIGNvbnNvbGUubG9nKHZhbGlkYSk7XHJcblxyXG4gICAgcmV0dXJuIHZhbGlkYTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcblxyXG4gICAgLypjb25zdCBbcHJvZHVjdExpc3QsIHNldFByb2R1Y3RMaXN0XSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93XHJcbiAgICAgICAgLmZldGNoKCcvYXBpL2V4YW0nKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4geyBzZXRQcm9kdWN0TGlzdChkYXRhKX0pXHJcbiAgICB9LCBbXSkqL1xyXG4gICAgcmV0dXJuICg8ZGl2PlxyXG5cclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5OZXh0UHJvamVjdCAtICBIb21lIDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhbmdvbGluJmRpc3BsYXk9c3dhcCcpXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGgxPiBXZWxjb21lIHRvIE5leHQuanMhIFRoaXMgaXMgSG9tZTwvaDE+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPiBTZWxlY2Npb25hciB0ZW1hPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZW1hc1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj48TGluayBocmVmPVwiL2Fib3V0XCIgb25jbGljaz17bXlmdW5jdGlvbigwKX0gY2xhc3NOYW1lPVwiZ2VvZ3JhZmlhXCI+PGE+R2VvZ3JhZsOtYTwvYT48L0xpbms+PHA+Ymtia2piazwvcD48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+PExpbmsgaHJlZj1cIi9hYm91dFwiIG9uY2xpY2s9e215ZnVuY3Rpb24oMSl9IGNsYXNzTmFtZT1cIm1hdGVtYXRpY2FzXCI+PGE+TWF0ZW3DoXRpY2FzPC9hPjwvTGluaz48cD5ia2JramJrPC9wPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj48TGluayBocmVmPVwiL2Fib3V0XCIgb25jbGljaz17bXlmdW5jdGlvbigyKX0gY2xhc3NOYW1lPVwibXVzaWNhXCI+PGE+TcO6c2ljYTwvYT48L0xpbms+PHA+Ymtia2piazwvcD48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+PExpbmsgaHJlZj1cIi9hYm91dFwiIG9uY2xpY2s9e215ZnVuY3Rpb24oMyl9IGNsYXNzTmFtZT1cImluZ2xlc1wiPjxhPkluZ2zDqXM8L2E+PC9MaW5rPjxwPmJrYmtqYms8L3A+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9Db250YWluZXI+XHJcbjxzdHlsZSBqc3g+e2BcclxuXHJcbi50ZW1hc3tcclxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG5cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwMHB4IDYwMHB4IDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjUwcHggMjUwcHg7XHJcbiAgICBnYXA6IDBweCAwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgXCJnZW9ncmFmaWEgbWF0ZW1hdGljYXNcIlxyXG4gICAgXCJtdXNpY2EgaW5nbGVzXCI7XHJcbiAgICByb3ctZ2FwOiA0MHB4O1xyXG5cclxuICAgIG1hcmdpbjo0MHB4O1xyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuLnRlbWFzID4gYnV0dG9ue1xyXG4gICAgZm9udC1mYW1pbHk6ICdQYW5nb2xpbicsY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTo0MHB4O1xyXG4gICAgYm9yZGVyOnRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcxYWFiNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDcwcHg7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOjAuNHM7XHJcbn1cclxuXHJcbi50ZW1hcyA+IGJ1dHRvbjpob3ZlcntcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNjOWRjZGI7XHJcbiAgICBib3gtc2hhZG93OiAwIDEycHggMTZweCAwIHJnYmEoMCwwLDAsMC4yNCksIDAgMTdweCA1MHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcclxuXHJcblxyXG5cclxufVxyXG4udGVtYXMgPiBidXR0b24gYXtcclxuICAgIGNvbG9yOiMwYzgzOWM7XHJcbnRleHQtZGVjb3JhdGlvbjpub25lO1xyXG5cclxufVxyXG5cclxuLnRlbWFzID5idXR0b24gcHtcclxuICAgIGZvbnQtc2l6ZToyNXB4O1xyXG5cclxufVxyXG5cclxuXHJcbmB9PC9zdHlsZT5cclxuXHJcblxyXG4gICA8L2Rpdj5cclxuICAgICl9XHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGxldCB2YWxpZGE7XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il19 */\n/*@ sourceURL=C:\\\\Users\\\\aledi\\\\OneDrive\\\\Documents\\\\Cursos\\\\Platzi Master\\\\P1 Sistema de evaluacion\\\\Nueva carpeta\\\\pages\\\\index.js */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 13
  }, _this);
};

_c = Index;
var valida;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuMWQ4YmM0NjU5ZDg3ZGM5YzM3MjAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTVMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixrQkFBd0NQLCtDQUFRLENBQUMsRUFBRCxDQUFoRDtBQUFBLE1BQU9RLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBR0FWLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkVyxJQUFBQSxNQUFNLENBQ0hQLEtBREgsQ0FDUyxXQURULEVBRUdRLElBRkgsQ0FFUSxVQUFDQyxRQUFEO0FBQUEsYUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBQWQ7QUFBQSxLQUZSLEVBR0dGLElBSEgsQ0FHUSxnQkFBYztBQUFBLFVBQVhHLElBQVcsUUFBWEEsSUFBVztBQUNsQixVQUFHUiwwQ0FBTSxJQUFJLENBQWIsRUFBZ0JHLGVBQWUsQ0FBQ0ssSUFBSSxDQUFDLENBQUQsQ0FBTCxDQUFmLENBQWhCLEtBQ0ssSUFBR1IsMENBQU0sSUFBSSxDQUFiLEVBQWdCRyxlQUFlLENBQUNLLElBQUksQ0FBQyxDQUFELENBQUwsQ0FBZixDQUFoQixLQUNBLElBQUdSLDBDQUFNLElBQUksQ0FBYixFQUFnQkcsZUFBZSxDQUFDSyxJQUFJLENBQUMsQ0FBRCxDQUFMLENBQWYsQ0FBaEIsS0FDQTtBQUFDTCxRQUFBQSxlQUFlLENBQUNLLElBQUksQ0FBQyxDQUFELENBQUwsQ0FBZjtBQUF5QjtBQUNoQyxLQVJIO0FBU0QsR0FWUSxFQVVOLEVBVk0sQ0FBVDtBQVlBLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsMERBQUQ7QUFBQSw4QkFDRSw4REFBQyxrREFBRDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7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a0JBQUksRUFBQyxRQUFYO0FBQW9CLHFCQUFPLEVBQUVBLFVBQVUsQ0FBQyxDQUFELENBQXZDO0FBQTRDLHVCQUFTLEVBQUMsUUFBdEQ7QUFBQSxxQ0FBK0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFSLGVBQTJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVI7QUF3RUUsQ0FsRk47O0tBQU1JO0FBd0ZDLElBQUlmLE1BQUo7QUFDUCwrREFBZWUsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcclxuaW1wb3J0IEJvYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL2JvYXJkXCI7XHJcbmltcG9ydCBkYXRhcyBmcm9tIFwiLi4vZGF0YWJhc2UvZGF0YVwiO1xyXG5pbXBvcnQge3ZhbGlkYX0gZnJvbSBcIi4vaW5kZXhcIlxyXG5cclxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3F1ZXN0aW9uTGlzdCwgc2V0UXVlc3Rpb25MaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3dcclxuICAgICAgLmZldGNoKFwiL2FwaS9leGFtXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICBpZih2YWxpZGEgPT0gMCkgc2V0UXVlc3Rpb25MaXN0KGRhdGFbMF0pO1xyXG4gICAgICAgIGVsc2UgaWYodmFsaWRhID09IDEpIHNldFF1ZXN0aW9uTGlzdChkYXRhWzFdKTtcclxuICAgICAgICBlbHNlIGlmKHZhbGlkYSA9PSAyKSBzZXRRdWVzdGlvbkxpc3QoZGF0YVsyXSk7XHJcbiAgICAgICAgZWxzZSB7c2V0UXVlc3Rpb25MaXN0KGRhdGFbM10pfVxyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPk5leHRQcm9qZWN0IC0gQWJvdXQgPC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGgxPldlbGNvbWUgdG8gTmV4dC5qcyEgVGhpcyBpcyBBYm91dDwvaDE+XHJcbiAgICAgICAge3F1ZXN0aW9uTGlzdC5sZW5ndGggJiYgPEJvYXJkIHF1ZXN0aW9ucz17cXVlc3Rpb25MaXN0fSAvPn1cclxuXHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuLy8qe3F1ZXN0aW9uTGlzdC5tYXAoKHF1ZXN0aW9uKSA9PiAoXHJcbi8vKjxkaXY+IHtjb25zb2xlLmxvZyhkYXRhWzBdKX1cclxuLy8qPC9kaXY+XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJcIlxyXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi8uLi9kYXRhYmFzZS9kYXRhXCJcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcblxyXG5mdW5jdGlvbiBteWZ1bmN0aW9uKHBhcmFtKXtcclxuXHJcbiAgICBjb25zdCB2YWxpZGE9cGFyYW07XHJcbiAgICBjb25zb2xlLmxvZyh2YWxpZGEpO1xyXG5cclxuICAgIHJldHVybiB2YWxpZGE7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG5cclxuICAgIC8qY29uc3QgW3Byb2R1Y3RMaXN0LCBzZXRQcm9kdWN0TGlzdF0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvd1xyXG4gICAgICAgIC5mZXRjaCgnL2FwaS9leGFtJylcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHsgc2V0UHJvZHVjdExpc3QoZGF0YSl9KVxyXG4gICAgfSwgW10pKi9cclxuICAgIHJldHVybiAoPGRpdj5cclxuXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+TmV4dFByb2plY3QgLSAgSG9tZSA8L3RpdGxlPlxyXG4gICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QYW5nb2xpbiZkaXNwbGF5PXN3YXAnKVwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxoMT4gV2VsY29tZSB0byBOZXh0LmpzISBUaGlzIGlzIEhvbWU8L2gxPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT4gU2VsZWNjaW9uYXIgdGVtYTwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVtYXNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+PExpbmsgaHJlZj1cIi9hYm91dFwiIG9uY2xpY2s9e215ZnVuY3Rpb24oMCl9IGNsYXNzTmFtZT1cImdlb2dyYWZpYVwiPjxhPkdlb2dyYWbDrWE8L2E+PC9MaW5rPjxwPmJrYmtqYms8L3A+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPjxMaW5rIGhyZWY9XCIvYWJvdXRcIiBvbmNsaWNrPXtteWZ1bmN0aW9uKDEpfSBjbGFzc05hbWU9XCJtYXRlbWF0aWNhc1wiPjxhPk1hdGVtw6F0aWNhczwvYT48L0xpbms+PHA+Ymtia2piazwvcD48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+PExpbmsgaHJlZj1cIi9hYm91dFwiIG9uY2xpY2s9e215ZnVuY3Rpb24oMil9IGNsYXNzTmFtZT1cIm11c2ljYVwiPjxhPk3DunNpY2E8L2E+PC9MaW5rPjxwPmJrYmtqYms8L3A+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPjxMaW5rIGhyZWY9XCIvYWJvdXRcIiBvbmNsaWNrPXtteWZ1bmN0aW9uKDMpfSBjbGFzc05hbWU9XCJpbmdsZXNcIj48YT5Jbmdsw6lzPC9hPjwvTGluaz48cD5ia2JramJrPC9wPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG48c3R5bGUganN4PntgXHJcblxyXG4udGVtYXN7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MDBweCA2MDBweCA7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDI1MHB4IDI1MHB4O1xyXG4gICAgZ2FwOiAwcHggMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgIFwiZ2VvZ3JhZmlhIG1hdGVtYXRpY2FzXCJcclxuICAgIFwibXVzaWNhIGluZ2xlc1wiO1xyXG4gICAgcm93LWdhcDogNDBweDtcclxuXHJcbiAgICBtYXJnaW46NDBweDtcclxuXHJcblxyXG5cclxuICAgICAgICB9XHJcbi50ZW1hcyA+IGJ1dHRvbntcclxuICAgIGZvbnQtZmFtaWx5OiAnUGFuZ29saW4nLGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6NDBweDtcclxuICAgIGJvcmRlcjp0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MWFhYjU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3MHB4O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjowLjRzO1xyXG59XHJcblxyXG4udGVtYXMgPiBidXR0b246aG92ZXJ7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojYzlkY2RiO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMjQpLCAwIDE3cHggNTBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XHJcblxyXG5cclxuXHJcbn1cclxuLnRlbWFzID4gYnV0dG9uIGF7XHJcbiAgICBjb2xvcjojMGM4MzljO1xyXG50ZXh0LWRlY29yYXRpb246bm9uZTtcclxuXHJcbn1cclxuXHJcbi50ZW1hcyA+YnV0dG9uIHB7XHJcbiAgICBmb250LXNpemU6MjVweDtcclxuXHJcbn1cclxuXHJcblxyXG5gfTwvc3R5bGU+XHJcblxyXG5cclxuICAgPC9kaXY+XHJcbiAgICApfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBsZXQgdmFsaWRhO1xyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29udGFpbmVyIiwiSGVhZCIsImZldGNoIiwiQm9hcmQiLCJkYXRhcyIsInZhbGlkYSIsIkFib3V0IiwicXVlc3Rpb25MaXN0Iiwic2V0UXVlc3Rpb25MaXN0Iiwid2luZG93IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJsZW5ndGgiLCJMaW5rIiwibXlmdW5jdGlvbiIsInBhcmFtIiwiY29uc29sZSIsImxvZyIsIkluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==