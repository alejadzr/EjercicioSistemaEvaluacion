"use strict";
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./database/data.js":
/*!**************************!*\
  !*** ./database/data.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* module decorator */ module = __webpack_require__.hmd(module);
var data = {
  'Geography': {
    name: 'Maluma Hass Avocado',
    id: 'Geography',
    sku: 'NUR72KCM',
    price: 1.15,
    image: '/images/maluma.jpg',
    "attributes": {
      description: 'A relatively new cultivar, it was, the pretty boy baby, discovered in South Africa in the early 1990s by Mr. A.G. (Dries) Joubert. Maluma Babyy. It is a chance seedling of unknown parentage',
      "shape": 'Oval',
      hardiness: '1 °C',
      taste: 'Catchy, is an avocado'
    }
  },
  '6trfgkkj': {
    name: 'Fuerte Avocado',
    id: '6trfgkkj',
    sku: 'AX4M8SJV',
    price: 1.21,
    image: '/images/fuerte.jpg',
    attributes: {
      description: 'The Fuerte avocado is the second largest commercial variety behind Hass. It is a long time California commercial variety valued for its winter season ripening and its B-Type blossom type which most growers plant adjacent to the Hass for a more consistent production cycle. This avocado tends to produce heavily in alternate years.',
      shape: 'Pear',
      hardiness: '-1 °C',
      taste: 'Magnificent, is a strong avocado'
    }
  },
  '7bcr49em': {
    name: 'Gwen Hass Avocado',
    id: '7bcr49em',
    sku: 'HYA78F6J',
    price: 1.25,
    image: '/images/gwen.jpg',
    attributes: {
      description: "A seedling bred from 'Hass' x 'Thille' in 1982, 'Gwen' is higher yielding and more dwarfing than 'Hass' in California. The fruit has an oval shape, slightly smaller than 'Hass' (100–200 g or 3.5–7.1 oz), with a rich, nutty flavor. The skin texture is more finely pebbled than 'Hass', and is dull green when ripe. It is frost-hardy down to −1 °C (30 °F)",
      shape: 'Plump',
      hardiness: '−1 °C',
      taste: 'Superb, is an avocado'
    }
  },
  '098323ks': {
    name: 'Bacon Avocado',
    id: '098323ks',
    sku: 'BXD100BLK',
    price: 1.51,
    image: '/images/bacon.jpg',
    attributes: {
      description: 'Developed by a farmer, James Bacon, in 1954, Bacon has medium-sized fruit with smooth, green skin with yellow-green, light-tasting flesh. When ripe, the skin remains green, but darkens slightly, and fruit yields to gentle pressure. It is cold-hardy down to −5 °C (23 °F)',
      shape: 'Oval',
      hardiness: '−5 °C',
      taste: 'Creamy, is an avocado'
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (data);

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
    window.fetch('/api/exam').then(function (response) {
      return response.json();
    }).then(function (_ref) {
      var data = _ref.data;
      setQuestionList([5]);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("title", {
          children: "NextProject -  About "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
        children: "Welcome to Next.js! This is About"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_board__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: questionList.map(function (question) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            children: [question.question, question.attributes.shape, question.attributes.hardiness]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 9
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuMjMxYjM1YTc0ZWE4NDVjYjM4MDkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQU1BLElBQUksR0FBRztBQUNULGVBQWE7QUFDWEMsSUFBQUEsSUFBSSxFQUFFLHFCQURLO0FBRVhDLElBQUFBLEVBQUUsRUFBRSxXQUZPO0FBR1hDLElBQUFBLEdBQUcsRUFBRSxVQUhNO0FBSVhDLElBQUFBLEtBQUssRUFBRSxJQUpJO0FBS1hDLElBQUFBLEtBQUssRUFBRSxvQkFMSTtBQU1YLGtCQUFjO0FBQ1pDLE1BQUFBLFdBQVcsRUFDVCwrTEFGVTtBQUdaLGVBQVMsTUFIRztBQUlaQyxNQUFBQSxTQUFTLEVBQUUsTUFKQztBQUtaQyxNQUFBQSxLQUFLLEVBQUU7QUFMSztBQU5ILEdBREo7QUFlVCxjQUFZO0FBQ1ZQLElBQUFBLElBQUksRUFBRSxnQkFESTtBQUVWQyxJQUFBQSxFQUFFLEVBQUUsVUFGTTtBQUdWQyxJQUFBQSxHQUFHLEVBQUUsVUFISztBQUlWQyxJQUFBQSxLQUFLLEVBQUUsSUFKRztBQUtWQyxJQUFBQSxLQUFLLEVBQUUsb0JBTEc7QUFNVkksSUFBQUEsVUFBVSxFQUFFO0FBQ1ZILE1BQUFBLFdBQVcsRUFDVCw0VUFGUTtBQUdWSSxNQUFBQSxLQUFLLEVBQUUsTUFIRztBQUlWSCxNQUFBQSxTQUFTLEVBQUUsT0FKRDtBQUtWQyxNQUFBQSxLQUFLLEVBQUU7QUFMRztBQU5GLEdBZkg7QUE2QlQsY0FBWTtBQUNWUCxJQUFBQSxJQUFJLEVBQUUsbUJBREk7QUFFVkMsSUFBQUEsRUFBRSxFQUFFLFVBRk07QUFHVkMsSUFBQUEsR0FBRyxFQUFFLFVBSEs7QUFJVkMsSUFBQUEsS0FBSyxFQUFFLElBSkc7QUFLVkMsSUFBQUEsS0FBSyxFQUFFLGtCQUxHO0FBTVZJLElBQUFBLFVBQVUsRUFBRTtBQUNWSCxNQUFBQSxXQUFXLEVBQ1Qsa1dBRlE7QUFHVkksTUFBQUEsS0FBSyxFQUFFLE9BSEc7QUFJVkgsTUFBQUEsU0FBUyxFQUFFLE9BSkQ7QUFLVkMsTUFBQUEsS0FBSyxFQUFFO0FBTEc7QUFORixHQTdCSDtBQTJDVCxjQUFZO0FBQ1ZQLElBQUFBLElBQUksRUFBRSxlQURJO0FBRVZDLElBQUFBLEVBQUUsRUFBRSxVQUZNO0FBR1ZDLElBQUFBLEdBQUcsRUFBRSxXQUhLO0FBSVZDLElBQUFBLEtBQUssRUFBRSxJQUpHO0FBS1ZDLElBQUFBLEtBQUssRUFBRSxtQkFMRztBQU1WSSxJQUFBQSxVQUFVLEVBQUU7QUFDVkgsTUFBQUEsV0FBVyxFQUNULGdSQUZRO0FBR1ZJLE1BQUFBLEtBQUssRUFBRSxNQUhHO0FBSVZILE1BQUFBLFNBQVMsRUFBRSxPQUpEO0FBS1ZDLE1BQUFBLEtBQUssRUFBRTtBQUxHO0FBTkY7QUEzQ0gsQ0FBYjtBQTJERSwrREFBZVIsSUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQSxJQUFNbUIsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNoQixrQkFBd0NOLCtDQUFRLENBQUMsRUFBRCxDQUFoRDtBQUFBLE1BQU9PLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBRUFULEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNaVSxJQUFBQSxNQUFNLENBQ0xOLEtBREQsQ0FDTyxXQURQLEVBRUNPLElBRkQsQ0FFTSxVQUFDQyxRQUFEO0FBQUEsYUFBYUEsUUFBUSxDQUFDQyxJQUFULEVBQWI7QUFBQSxLQUZOLEVBR0NGLElBSEQsQ0FHTSxnQkFBWTtBQUFBLFVBQVZ2QixJQUFVLFFBQVZBLElBQVU7QUFBRXFCLE1BQUFBLGVBQWUsQ0FDL0IsQ0FBQyxDQUFELENBRCtCLENBQWY7QUFFbEIsS0FMRjtBQU1ILEdBUFEsRUFPTixFQVBNLENBQVQ7QUFTQSxzQkFDQTtBQUFBLDJCQUNJLDhEQUFDLDBEQUFEO0FBQUEsOEJBQ0EsOERBQUMsa0RBQUQ7QUFBQSwrQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQUlKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkksZUFLQSw4REFBQyxzREFBRDtBQUFBLGtCQUFRRCxZQUFZLENBQUNNLEdBQWIsQ0FBaUIsVUFBQ0MsUUFBRDtBQUFBLDhCQUN6QjtBQUFBLHVCQUFNQSxRQUFRLENBQUNBLFFBQWYsRUFBeUJBLFFBQVEsQ0FBQ2xCLFVBQVQsQ0FBb0JDLEtBQTdDLEVBQW9EaUIsUUFBUSxDQUFDbEIsVUFBVCxDQUFvQkYsU0FBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUR5QjtBQUFBLFNBQWpCO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEQTtBQWtCRSxDQTlCTjs7R0FBTVk7O0tBQUFBO0FBZ0NOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2RhdGFiYXNlL2RhdGEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Fib3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRhdGEgPSB7XHJcbiAgICAnR2VvZ3JhcGh5Jzoge1xyXG4gICAgICBuYW1lOiAnTWFsdW1hIEhhc3MgQXZvY2FkbycsXHJcbiAgICAgIGlkOiAnR2VvZ3JhcGh5JyxcclxuICAgICAgc2t1OiAnTlVSNzJLQ00nLFxyXG4gICAgICBwcmljZTogMS4xNSxcclxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL21hbHVtYS5qcGcnLFxyXG4gICAgICBcImF0dHJpYnV0ZXNcIjoge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgJ0EgcmVsYXRpdmVseSBuZXcgY3VsdGl2YXIsIGl0IHdhcywgdGhlIHByZXR0eSBib3kgYmFieSwgZGlzY292ZXJlZCBpbiBTb3V0aCBBZnJpY2EgaW4gdGhlIGVhcmx5IDE5OTBzIGJ5IE1yLiBBLkcuIChEcmllcykgSm91YmVydC4gTWFsdW1hIEJhYnl5LiBJdCBpcyBhIGNoYW5jZSBzZWVkbGluZyBvZiB1bmtub3duIHBhcmVudGFnZScsXHJcbiAgICAgICAgXCJzaGFwZVwiOiAnT3ZhbCcsXHJcbiAgICAgICAgaGFyZGluZXNzOiAnMSDCsEMnLFxyXG4gICAgICAgIHRhc3RlOiAnQ2F0Y2h5LCBpcyBhbiBhdm9jYWRvJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJzZ0cmZna2tqJzoge1xyXG4gICAgICBuYW1lOiAnRnVlcnRlIEF2b2NhZG8nLFxyXG4gICAgICBpZDogJzZ0cmZna2tqJyxcclxuICAgICAgc2t1OiAnQVg0TThTSlYnLFxyXG4gICAgICBwcmljZTogMS4yMSxcclxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2Z1ZXJ0ZS5qcGcnLFxyXG4gICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAnVGhlIEZ1ZXJ0ZSBhdm9jYWRvIGlzIHRoZSBzZWNvbmQgbGFyZ2VzdCBjb21tZXJjaWFsIHZhcmlldHkgYmVoaW5kIEhhc3MuIEl0IGlzIGEgbG9uZyB0aW1lIENhbGlmb3JuaWEgY29tbWVyY2lhbCB2YXJpZXR5IHZhbHVlZCBmb3IgaXRzIHdpbnRlciBzZWFzb24gcmlwZW5pbmcgYW5kIGl0cyBCLVR5cGUgYmxvc3NvbSB0eXBlIHdoaWNoIG1vc3QgZ3Jvd2VycyBwbGFudCBhZGphY2VudCB0byB0aGUgSGFzcyBmb3IgYSBtb3JlIGNvbnNpc3RlbnQgcHJvZHVjdGlvbiBjeWNsZS4gVGhpcyBhdm9jYWRvIHRlbmRzIHRvIHByb2R1Y2UgaGVhdmlseSBpbiBhbHRlcm5hdGUgeWVhcnMuJyxcclxuICAgICAgICBzaGFwZTogJ1BlYXInLFxyXG4gICAgICAgIGhhcmRpbmVzczogJy0xIMKwQycsXHJcbiAgICAgICAgdGFzdGU6ICdNYWduaWZpY2VudCwgaXMgYSBzdHJvbmcgYXZvY2FkbydcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgICc3YmNyNDllbSc6IHtcclxuICAgICAgbmFtZTogJ0d3ZW4gSGFzcyBBdm9jYWRvJyxcclxuICAgICAgaWQ6ICc3YmNyNDllbScsXHJcbiAgICAgIHNrdTogJ0hZQTc4RjZKJyxcclxuICAgICAgcHJpY2U6IDEuMjUsXHJcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9nd2VuLmpwZycsXHJcbiAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgIFwiQSBzZWVkbGluZyBicmVkIGZyb20gJ0hhc3MnIHggJ1RoaWxsZScgaW4gMTk4MiwgJ0d3ZW4nIGlzIGhpZ2hlciB5aWVsZGluZyBhbmQgbW9yZSBkd2FyZmluZyB0aGFuICdIYXNzJyBpbiBDYWxpZm9ybmlhLiBUaGUgZnJ1aXQgaGFzIGFuIG92YWwgc2hhcGUsIHNsaWdodGx5IHNtYWxsZXIgdGhhbiAnSGFzcycgKDEwMOKAkzIwMCBnIG9yIDMuNeKAkzcuMSBveiksIHdpdGggYSByaWNoLCBudXR0eSBmbGF2b3IuIFRoZSBza2luIHRleHR1cmUgaXMgbW9yZSBmaW5lbHkgcGViYmxlZCB0aGFuICdIYXNzJywgYW5kIGlzIGR1bGwgZ3JlZW4gd2hlbiByaXBlLiBJdCBpcyBmcm9zdC1oYXJkeSBkb3duIHRvIOKIkjEgwrBDICgzMCDCsEYpXCIsXHJcbiAgICAgICAgc2hhcGU6ICdQbHVtcCcsXHJcbiAgICAgICAgaGFyZGluZXNzOiAn4oiSMSDCsEMnLFxyXG4gICAgICAgIHRhc3RlOiAnU3VwZXJiLCBpcyBhbiBhdm9jYWRvJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgJzA5ODMyM2tzJzoge1xyXG4gICAgICBuYW1lOiAnQmFjb24gQXZvY2FkbycsXHJcbiAgICAgIGlkOiAnMDk4MzIza3MnLFxyXG4gICAgICBza3U6ICdCWEQxMDBCTEsnLFxyXG4gICAgICBwcmljZTogMS41MSxcclxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2JhY29uLmpwZycsXHJcbiAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICdEZXZlbG9wZWQgYnkgYSBmYXJtZXIsIEphbWVzIEJhY29uLCBpbiAxOTU0LCBCYWNvbiBoYXMgbWVkaXVtLXNpemVkIGZydWl0IHdpdGggc21vb3RoLCBncmVlbiBza2luIHdpdGggeWVsbG93LWdyZWVuLCBsaWdodC10YXN0aW5nIGZsZXNoLiBXaGVuIHJpcGUsIHRoZSBza2luIHJlbWFpbnMgZ3JlZW4sIGJ1dCBkYXJrZW5zIHNsaWdodGx5LCBhbmQgZnJ1aXQgeWllbGRzIHRvIGdlbnRsZSBwcmVzc3VyZS4gSXQgaXMgY29sZC1oYXJkeSBkb3duIHRvIOKIkjUgwrBDICgyMyDCsEYpJyxcclxuICAgICAgICBzaGFwZTogJ092YWwnLFxyXG4gICAgICAgIGhhcmRpbmVzczogJ+KIkjUgwrBDJyxcclxuICAgICAgICB0YXN0ZTogJ0NyZWFteSwgaXMgYW4gYXZvY2FkbydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgZGF0YSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFpbmVyXCJcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xyXG5pbXBvcnQgQm9hcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvYm9hcmRcIlxyXG5pbXBvcnQgZGF0YXMgZnJvbSBcIi4uL2RhdGFiYXNlL2RhdGFcIlxyXG5cclxuXHJcblxyXG5jb25zdCBBYm91dCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtxdWVzdGlvbkxpc3QsIHNldFF1ZXN0aW9uTGlzdF0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvd1xyXG4gICAgICAgIC5mZXRjaCgnL2FwaS9leGFtJylcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+cmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHsgc2V0UXVlc3Rpb25MaXN0KFxyXG4gICAgICAgICAgICBbNV1cclxuICAgICAgICApfSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5OZXh0UHJvamVjdCAtICBBYm91dCA8L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgIDxoMT5XZWxjb21lIHRvIE5leHQuanMhIFRoaXMgaXMgQWJvdXQ8L2gxPlxyXG4gICAgICAgIDxCb2FyZD57cXVlc3Rpb25MaXN0Lm1hcCgocXVlc3Rpb24pID0+IChcclxuICAgICAgICA8ZGl2PntxdWVzdGlvbi5xdWVzdGlvbn17cXVlc3Rpb24uYXR0cmlidXRlcy5zaGFwZX17cXVlc3Rpb24uYXR0cmlidXRlcy5oYXJkaW5lc3N9PC9kaXY+XHJcbiAgICAgICAgKSl9XHJcblxyXG5cclxuXHJcbiAgICAgICAgPC9Cb2FyZD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgICl9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dCJdLCJuYW1lcyI6WyJkYXRhIiwibmFtZSIsImlkIiwic2t1IiwicHJpY2UiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwiaGFyZGluZXNzIiwidGFzdGUiLCJhdHRyaWJ1dGVzIiwic2hhcGUiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29udGFpbmVyIiwiSGVhZCIsImZldGNoIiwiQm9hcmQiLCJkYXRhcyIsIkFib3V0IiwicXVlc3Rpb25MaXN0Iiwic2V0UXVlc3Rpb25MaXN0Iiwid2luZG93IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsIm1hcCIsInF1ZXN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==