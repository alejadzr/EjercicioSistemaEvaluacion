"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./database/data.js":
/*!**************************!*\
  !*** ./database/data.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* module decorator */ module = __webpack_require__.hmd(module);
var data = {
  Geografia: [{
    question: "¿Cuál es el río más grande del mundo?",
    options: ["Amazonas", "Nilo", "Río Amarillo", "Yangtsé"],
    answer: "Nilo"
  }, {
    question: "¿Que país tiene la mayor cantidad de islas en el mundo?",
    options: ["Suecia", "China", "Malasia", "Groenlandia"],
    answer: "Suecia"
  }, {
    question: "¿Cúal de estos países es bañado únicamente por un océano?",
    options: ["Gran Bretaña", "Rusia", "Canada", "México"],
    answer: "Gran Bretaña"
  }, {
    question: "¿Qué país es el segundo más grande del mundo en términos de población?",
    options: ["China", "Rusia", "India", "Indonesia"],
    answer: "India"
  }, {
    question: "¿Cúal de estos países es el más grande en África?",
    options: ["Argelia", "República Democrática del Congo", "Tanzania", "Namibia"],
    answer: "Argelia"
  }],
  Matemáticas: [{
    question: "¿A cúanto equivale pi?",
    options: ["3,141592", "3,149215", "3,144423", "3,144123"],
    answer: "3,141592"
  }, {
    question: "¿Cómo se llama a un poliedro de 20 caras?",
    options: ["Icosaedro", "Dodecaedro", "Tetradecaedro", "Apeiroedro"],
    answer: "Icosaedro"
  }, {
    question: "¿Cuál es el resultado de sumar 1 hora y 40 minutos y 1 hora y 30 minutos?",
    options: ["1 hora y 40 minutos", "3 horas", "3 hora y 10 minutos", "2 horas y 50 minutos"],
    answer: "3 horas y 10 minutos"
  }, {
    question: "¿Cúantos lados tiene un hexágono?",
    options: ["8 lados", "6 lados", "5 lados", "7 lados"],
    answer: "6 lados"
  }, {
    question: "¿qué distancia recorrerá un coche en tres horas si va a 50 km/h?",
    options: ["300 km", "500 km", "100 km", "150 km"],
    answer: "150 km"
  }],
  Música: [{
    question: "¿Cúantas líneas y espacios tiene un pentagrama?",
    options: ["5 líneas y 4 espacios", "5 líneas y 5 espacios", " 5 líneas y 6 espacios", "6 líneas y 6 espacios"],
    answer: "5 líneas y 4 espacios"
  }, {
    question: "¿A cúantas negras equivale una redonda?",
    options: ["2", "3", "4", "6"],
    answer: "4"
  }, {
    question: "¿Cúal de estos instrumentos no pertenece a una orquesta sinfónica?",
    options: ["Arpa", "Piano", "Fagot", "Saxofón"],
    answer: "Saxofón"
  }, {
    question: "¿La 'oda a la alegría' forma parte de que sinfonía de Beethoven?",
    options: ["Sinfonía n°. 5", "Sinfonía n°. 6", "Sinfonía n°. 8", "Sinfonía n°. 9"],
    answer: "Sinfonía n°. 9"
  }, {
    question: "¿Cúal de estos no es un instrumento de viento - madera?",
    options: ["Saxofón", "Flauta travesera", "Trompeta", "Fagot"],
    answer: "Trompeta"
  }],
  Inglés: [{
    question: "¿?",
    options: ["5 líneas y 4 espacios", "5 líneas y 5 espacios", " 5 líneas y 6 espacios", "6 líneas y 6 espacios"],
    answer: "5 líneas y 4 espacios"
  }, {
    question: "¿?",
    options: ["2", "3", "4", "6"],
    answer: "4"
  }, {
    question: "¿?",
    options: ["", "", "Fagot", "Saxofón"],
    answer: "Saxofón"
  }, {
    question: "¿?",
    options: ["Sinfonía n°. 5", "Sinfonía n°. 6", "Sinfonía n°. 8", "Sinfonía n°. 9"],
    answer: ""
  }, {
    question: "¿?",
    options: ["Saxofón", "Flauta travesera", "Trompeta", "Fagot"],
    answer: ""
  }]
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTZjMDFmOTk3MjVlZDIyZWQ4NWEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQU1BLElBQUksR0FBRztBQUNYQyxFQUFBQSxTQUFTLEVBQUUsQ0FDVDtBQUNFQyxJQUFBQSxRQUFRLEVBQUUsdUNBRFo7QUFFRUMsSUFBQUEsT0FBTyxFQUFFLENBQUMsVUFBRCxFQUFhLE1BQWIsRUFBcUIsY0FBckIsRUFBcUMsU0FBckMsQ0FGWDtBQUdFQyxJQUFBQSxNQUFNLEVBQUU7QUFIVixHQURTLEVBTVQ7QUFDRUYsSUFBQUEsUUFBUSxFQUFFLHlEQURaO0FBRUVDLElBQUFBLE9BQU8sRUFBRSxDQUFDLFFBQUQsRUFBVyxPQUFYLEVBQW9CLFNBQXBCLEVBQStCLGFBQS9CLENBRlg7QUFHRUMsSUFBQUEsTUFBTSxFQUFFO0FBSFYsR0FOUyxFQVdUO0FBQ0VGLElBQUFBLFFBQVEsRUFBRSwyREFEWjtBQUVFQyxJQUFBQSxPQUFPLEVBQUUsQ0FBQyxjQUFELEVBQWlCLE9BQWpCLEVBQTBCLFFBQTFCLEVBQW9DLFFBQXBDLENBRlg7QUFHRUMsSUFBQUEsTUFBTSxFQUFFO0FBSFYsR0FYUyxFQWdCVDtBQUNFRixJQUFBQSxRQUFRLEVBQUUsd0VBRFo7QUFFRUMsSUFBQUEsT0FBTyxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsT0FBbkIsRUFBNEIsV0FBNUIsQ0FGWDtBQUdFQyxJQUFBQSxNQUFNLEVBQUU7QUFIVixHQWhCUyxFQXFCVDtBQUNFRixJQUFBQSxRQUFRLEVBQUUsbURBRFo7QUFFRUMsSUFBQUEsT0FBTyxFQUFFLENBQUMsU0FBRCxFQUFZLGlDQUFaLEVBQStDLFVBQS9DLEVBQTJELFNBQTNELENBRlg7QUFHRUMsSUFBQUEsTUFBTSxFQUFFO0FBSFYsR0FyQlMsQ0FEQTtBQTRCWEMsRUFBQUEsV0FBVyxFQUFFLENBQ1g7QUFDRUgsSUFBQUEsUUFBUSxFQUFFLHdCQURaO0FB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QUFFO0FBSFYsR0FYTSxFQWdCTjtBQUNFRixJQUFBQSxRQUFRLEVBQUUsSUFEWjtBQUVFQyxJQUFBQSxPQUFPLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixnQkFBbkIsRUFBcUMsZ0JBQXJDLEVBQXVELGdCQUF2RCxDQUZYO0FBR0VDLElBQUFBLE1BQU0sRUFBRTtBQUhWLEdBaEJNLEVBcUJOO0FBQ0VGLElBQUFBLFFBQVEsRUFBRSxJQURaO0FBRUVDLElBQUFBLE9BQU8sRUFBRSxDQUFDLFNBQUQsRUFBWSxrQkFBWixFQUFnQyxVQUFoQyxFQUE0QyxPQUE1QyxDQUZYO0FBR0VDLElBQUFBLE1BQU0sRUFBRTtBQUhWLEdBckJNO0FBbEZDLENBQWI7QUErR0EsK0RBQWVKLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YWJhc2UvZGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkYXRhID0ge1xyXG4gIEdlb2dyYWZpYTogW1xyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogXCLCv0N1w6FsIGVzIGVsIHLDrW8gbcOhcyBncmFuZGUgZGVsIG11bmRvP1wiLFxyXG4gICAgICBvcHRpb25zOiBbXCJBbWF6b25hc1wiLCBcIk5pbG9cIiwgXCJSw61vIEFtYXJpbGxvXCIsIFwiWWFuZ3Rzw6lcIl0sXHJcbiAgICAgIGFuc3dlcjogXCJOaWxvXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogXCLCv1F1ZSBwYcOtcyB0aWVuZSBsYSBtYXlvciBjYW50aWRhZCBkZSBpc2xhcyBlbiBlbCBtdW5kbz9cIixcclxuICAgICAgb3B0aW9uczogW1wiU3VlY2lhXCIsIFwiQ2hpbmFcIiwgXCJNYWxhc2lhXCIsIFwiR3JvZW5sYW5kaWFcIl0sXHJcbiAgICAgIGFuc3dlcjogXCJTdWVjaWFcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiBcIsK/Q8O6YWwgZGUgZXN0b3MgcGHDrXNlcyBlcyBiYcOxYWRvIMO6bmljYW1lbnRlIHBvciB1biBvY8OpYW5vP1wiLFxyXG4gICAgICBvcHRpb25zOiBbXCJHcmFuIEJyZXRhw7FhXCIsIFwiUnVzaWFcIiwgXCJDYW5hZGFcIiwgXCJNw6l4aWNvXCJdLFxyXG4gICAgICBhbnN3ZXI6IFwiR3JhbiBCcmV0YcOxYVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246IFwiwr9RdcOpIHBhw61zIGVzIGVsIHNlZ3VuZG8gbcOhcyBncmFuZGUgZGVsIG11bmRvIGVuIHTDqXJtaW5vcyBkZSBwb2JsYWNpw7NuP1wiLFxyXG4gICAgICBvcHRpb25zOiBbXCJDaGluYVwiLCBcIlJ1c2lhXCIsIFwiSW5kaWFcIiwgXCJJbmRvbmVzaWFcIl0sXHJcbiAgICAgIGFuc3dlcjogXCJJbmRpYVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246IFwiwr9Dw7phbCBkZSBlc3RvcyBwYcOtc2VzIGVzIGVsIG3DoXMgZ3JhbmRlIGVuIMOBZnJpY2E/XCIsXHJcbiAgICAgIG9wdGlvbnM6IFtcIkFyZ2VsaWFcIiwgXCJSZXDDumJsaWNhIERlbW9jcsOhdGljYSBkZWwgQ29uZ29cIiwgXCJUYW56YW5pYVwiLCBcIk5hbWliaWFcIl0sXHJcbiAgICAgIGFuc3dlcjogXCJBcmdlbGlhXCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgTWF0ZW3DoXRpY2FzOiBbXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiBcIsK/QSBjw7phbnRvIGVxdWl2YWxlIHBpP1wiLFxyXG4gICAgICBvcHRpb25zOiBbXCIzLDE0MTU5MlwiLCBcIjMsMTQ5MjE1XCIsIFwiMywxNDQ0MjNcIiwgXCIzLDE0NDEyM1wiXSxcclxuICAgICAgYW5zd2VyOiBcIjMsMTQxNTkyXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogXCLCv0PDs21vIHNlIGxsYW1hIGEgdW4gcG9saWVkcm8gZGUgMjAgY2FyYXM/XCIsXHJcbiAgICAgIG9wdGlvbnM6IFtcIkljb3NhZWRyb1wiLCBcIkRvZGVjYWVkcm9cIiwgXCJUZXRyYWRlY2FlZHJvXCIsIFwiQXBlaXJvZWRyb1wiXSxcclxuICAgICAgYW5zd2VyOiBcIkljb3NhZWRyb1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246IFwiwr9DdcOhbCBlcyBlbCByZXN1bHRhZG8gZGUgc3VtYXIgMSBob3JhIHkgNDAgbWludXRvcyB5IDEgaG9yYSB5IDMwIG1pbnV0b3M/XCIsXHJcbiAgICAgIG9wdGlvbnM6IFtcIjEgaG9yYSB5IDQwIG1pbnV0b3NcIiwgXCIzIGhvcmFzXCIsIFwiMyBob3JhIHkgMTAgbWludXRvc1wiLCBcIjIgaG9yYXMgeSA1MCBtaW51dG9zXCJdLFxyXG4gICAgICBhbnN3ZXI6IFwiMyBob3JhcyB5IDEwIG1pbnV0b3NcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiBcIsK/Q8O6YW50b3MgbGFkb3MgdGllbmUgdW4gaGV4w6Fnb25vP1wiLFxyXG4gICAgICBvcHRpb25zOiBbXCI4IGxhZG9zXCIsIFwiNiBsYWRvc1wiLCBcIjUgbGFkb3NcIiwgXCI3IGxhZG9zXCJdLFxyXG4gICAgICBhbnN3ZXI6IFwiNiBsYWRvc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246IFwiwr9xdcOpIGRpc3RhbmNpYSByZWNvcnJlcsOhIHVuIGNvY2hlIGVuIHRyZXMgaG9yYXMgc2kgdmEgYSA1MCBrbS9oP1wiLFxyXG4gICAgICBvcHRpb25zOiBbXCIzMDAga21cIiwgXCI1MDAga21cIiwgXCIxMDAga21cIiwgXCIxNTAga21cIl0sXHJcbiAgICAgIGFuc3dlcjogXCIxNTAga21cIixcclxuICAgIH1dLFxyXG4gICAgTcO6c2ljYTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcXVlc3Rpb246IFwiwr9Dw7phbnRhcyBsw61uZWFzIHkgZXNwYWNpb3MgdGllbmUgdW4gcGVudGFncmFtYT9cIixcclxuICAgICAgICBvcHRpb25zOiBbXCI1IGzDrW5lYXMgeSA0IGVzcGFjaW9zXCIsIFwiNSBsw61uZWFzIHkgNSBlc3BhY2lvc1wiLCBcIiA1IGzDrW5lYXMgeSA2IGVzcGFjaW9zXCIsIFwiNiBsw61uZWFzIHkgNiBlc3BhY2lvc1wiXSxcclxuICAgICAgICBhbnN3ZXI6IFwiNSBsw61uZWFzIHkgNCBlc3BhY2lvc1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcXVlc3Rpb246IFwiwr9BIGPDumFudGFzIG5lZ3JhcyBlcXVpdmFsZSB1bmEgcmVkb25kYT9cIixcclxuICAgICAgICBvcHRpb25zOiBbXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI2XCJdLFxyXG4gICAgICAgIGFuc3dlcjogXCI0XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBxdWVzdGlvbjogXCLCv0PDumFsIGRlIGVzdG9zIGluc3RydW1lbnRvcyBubyBwZXJ0ZW5lY2UgYSB1bmEgb3JxdWVzdGEgc2luZsOzbmljYT9cIixcclxuICAgICAgICBvcHRpb25zOiBbXCJBcnBhXCIsIFwiUGlhbm9cIiwgXCJGYWdvdFwiLCBcIlNheG9mw7NuXCJdLFxyXG4gICAgICAgIGFuc3dlcjogXCJTYXhvZsOzblwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcXVlc3Rpb246IFwiwr9MYSAnb2RhIGEgbGEgYWxlZ3LDrWEnIGZvcm1hIHBhcnRlIGRlIHF1ZSBzaW5mb27DrWEgZGUgQmVldGhvdmVuP1wiLFxyXG4gICAgICAgIG9wdGlvbnM6IFtcIlNpbmZvbsOtYSBuwrAuIDVcIiwgXCJTaW5mb27DrWEgbsKwLiA2XCIsIFwiU2luZm9uw61hIG7CsC4gOFwiLCBcIlNpbmZvbsOtYSBuwrAuIDlcIl0sXHJcbiAgICAgICAgYW5zd2VyOiBcIlNpbmZvbsOtYSBuwrAuIDlcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHF1ZXN0aW9uOiBcIsK/Q8O6YWwgZGUgZXN0b3Mgbm8gZXMgdW4gaW5zdHJ1bWVudG8gZGUgdmllbnRvIC0gbWFkZXJhP1wiLFxyXG4gICAgICAgIG9wdGlvbnM6IFtcIlNheG9mw7NuXCIsIFwiRmxhdXRhIHRyYXZlc2VyYVwiLCBcIlRyb21wZXRhXCIsIFwiRmFnb3RcIl0sXHJcbiAgICAgICAgYW5zd2VyOiBcIlRyb21wZXRhXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG5cclxuICAgIEluZ2zDqXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHF1ZXN0aW9uOiBcIsK/P1wiLFxyXG4gICAgICAgIG9wdGlvbnM6IFtcIjUgbMOtbmVhcyB5IDQgZXNwYWNpb3NcIiwgXCI1IGzDrW5lYXMgeSA1IGVzcGFjaW9zXCIsIFwiIDUgbMOtbmVhcyB5IDYgZXNwYWNpb3NcIiwgXCI2IGzDrW5lYXMgeSA2IGVzcGFjaW9zXCJdLFxyXG4gICAgICAgIGFuc3dlcjogXCI1IGzDrW5lYXMgeSA0IGVzcGFjaW9zXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBxdWVzdGlvbjogXCLCvz9cIixcclxuICAgICAgICBvcHRpb25zOiBbXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI2XCJdLFxyXG4gICAgICAgIGFuc3dlcjogXCI0XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBxdWVzdGlvbjogXCLCvz9cIixcclxuICAgICAgICBvcHRpb25zOiBbXCJcIiwgXCJcIiwgXCJGYWdvdFwiLCBcIlNheG9mw7NuXCJdLFxyXG4gICAgICAgIGFuc3dlcjogXCJTYXhvZsOzblwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcXVlc3Rpb246IFwiwr8/XCIsXHJcbiAgICAgICAgb3B0aW9uczogW1wiU2luZm9uw61hIG7CsC4gNVwiLCBcIlNpbmZvbsOtYSBuwrAuIDZcIiwgXCJTaW5mb27DrWEgbsKwLiA4XCIsIFwiU2luZm9uw61hIG7CsC4gOVwiXSxcclxuICAgICAgICBhbnN3ZXI6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBxdWVzdGlvbjogXCLCvz9cIixcclxuICAgICAgICBvcHRpb25zOiBbXCJTYXhvZsOzblwiLCBcIkZsYXV0YSB0cmF2ZXNlcmFcIiwgXCJUcm9tcGV0YVwiLCBcIkZhZ290XCJdLFxyXG4gICAgICAgIGFuc3dlcjogXCJcIixcclxuICAgICAgfSxcclxuICAgIF1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRhdGE7XHJcbiJdLCJuYW1lcyI6WyJkYXRhIiwiR2VvZ3JhZmlhIiwicXVlc3Rpb24iLCJvcHRpb25zIiwiYW5zd2VyIiwiTWF0ZW3DoXRpY2FzIiwiTcO6c2ljYSIsIkluZ2zDqXMiXSwic291cmNlUm9vdCI6IiJ9