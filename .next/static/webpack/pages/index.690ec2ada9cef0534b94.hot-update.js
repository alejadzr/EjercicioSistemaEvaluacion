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
    question: "we _____ soccer together in the park",
    options: ["eat", "play", "live", "sing"],
    answer: "play"
  }, {
    question: "______ : A temporary state of mind or feeling",
    options: ["food", "mud", "bud", "mood"],
    answer: "mood"
  }, {
    question: "We need to find some _____ for the fire",
    options: ["stocks", "sticks", "paper", "rocks"],
    answer: "sticks"
  }, {
    question: "I prefer _____ activities, except when its raining",
    options: ["chess", " indoor", "outdoor", "quiet"],
    answer: "outdoor"
  }, {
    question: "____: a flying insect with a long thin body and four large, usually brightly coloured, wings",
    options: ["", " ", "", "Fagot"],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjkwZWMyYWRhOWNlZjA1MzRiOTQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQU1BLElBQUksR0FBRztBQUNYQyxFQUFBQSxTQUFTLEVBQUUsQ0FDVDtBQUNFQyxJQUFBQSxRQUFRLEVBQUUsdUNBRFo7QUFFRUMsSUFBQUEsT0FBTyxFQUFFLENBQUMsVUFBRCxFQUFhLE1BQWIsRUFBcUIsY0FBckIsRUFBcUMsU0FBckMsQ0FGWDtBQUdFQyxJQUFBQSxNQUFNLEVBQUU7QUFIVixHQURTLEVBTVQ7QUFDRUYsSUFBQUEsUUFBUSxFQUFFLHlEQURaO0FBRUVDLElBQUFBLE9BQU8sRUFBRSxDQUFDLFFBQUQsRUFBVyxPQUFYLEVBQW9CLFNBQXBCLEVBQStCLGFBQS9CLENBRlg7QUFHRUMsSUFBQUEsTUFBTSxFQUFFO0FBSFYsR0FOUyxFQVdUO0FBQ0VGLElBQUFBLFFBQVEsRUFBRSwyREFEWjtBQUVFQyxJQUFBQSxPQUFPLEVBQUUsQ0FBQyxjQUFELEVBQWlCLE9BQWpCLEVBQTBCLFFBQTFCLEVBQW9DLFFBQXBDLENBRlg7QUFHRUMsSUFBQUEsTUFBTSxFQUFFO0FBSFYsR0FYUyxFQWdCVDtBQUNFRixJQUFBQSxRQUFRLEVBQUUsd0VBRFo7QUFFRUMsSUFBQUEsT0FBTyxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsT0FBbkIsRUFBNEIsV0FBNUIsQ0FGWDtBQUdFQyxJQUFBQSxNQUFNLEVBQUU7QUFIVixHQWhCUyxFQXFCVDtBQUNFRixJQUFBQSxRQUFRLEVBQUUsbURBRFo7QUFFRUMsSUFBQUEsT0FBTyxFQUFFLENBQUMsU0FBRCxFQUFZLGlDQUFaLEVBQStDLFVBQS9DLEVBQTJELFNBQTNELENBRlg7QUFHRUMsSUFBQUEsTUFBTSxFQUFFO0FBSFYsR0FyQlMsQ0FEQTtBQTRCWEMsRUFBQUEsV0FBVyxFQUFFLENBQ1g7QUFDRUgsSUFBQUEsUUFBUSxFQUFFLHdCQURaO0FB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RUFBRTtBQUhWLEdBWE0sRUFnQk47QUFDRUYsSUFBQUEsUUFBUSxFQUFFLG9EQURaO0FBRUVDLElBQUFBLE9BQU8sRUFBRSxDQUFDLE9BQUQsRUFBVSxTQUFWLEVBQXFCLFNBQXJCLEVBQWdDLE9BQWhDLENBRlg7QUFHRUMsSUFBQUEsTUFBTSxFQUFFO0FBSFYsR0FoQk0sRUFxQk47QUFDRUYsSUFBQUEsUUFBUSxFQUFFLDhGQURaO0FBRUVDLElBQUFBLE9BQU8sRUFBRSxDQUFDLEVBQUQsRUFBSyxHQUFMLEVBQVUsRUFBVixFQUFjLE9BQWQsQ0FGWDtBQUdFQyxJQUFBQSxNQUFNLEVBQUU7QUFIVixHQXJCTTtBQWxGQyxDQUFiO0FBK0dBLCtEQUFlSixJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2RhdGFiYXNlL2RhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGF0YSA9IHtcclxuICBHZW9ncmFmaWE6IFtcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246IFwiwr9DdcOhbCBlcyBlbCByw61vIG3DoXMgZ3JhbmRlIGRlbCBtdW5kbz9cIixcclxuICAgICAgb3B0aW9uczogW1wiQW1hem9uYXNcIiwgXCJOaWxvXCIsIFwiUsOtbyBBbWFyaWxsb1wiLCBcIllhbmd0c8OpXCJdLFxyXG4gICAgICBhbnN3ZXI6IFwiTmlsb1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246IFwiwr9RdWUgcGHDrXMgdGllbmUgbGEgbWF5b3IgY2FudGlkYWQgZGUgaXNsYXMgZW4gZWwgbXVuZG8/XCIsXHJcbiAgICAgIG9wdGlvbnM6IFtcIlN1ZWNpYVwiLCBcIkNoaW5hXCIsIFwiTWFsYXNpYVwiLCBcIkdyb2VubGFuZGlhXCJdLFxyXG4gICAgICBhbnN3ZXI6IFwiU3VlY2lhXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogXCLCv0PDumFsIGRlIGVzdG9zIHBhw61zZXMgZXMgYmHDsWFkbyDDum5pY2FtZW50ZSBwb3IgdW4gb2PDqWFubz9cIixcclxuICAgICAgb3B0aW9uczogW1wiR3JhbiBCcmV0YcOxYVwiLCBcIlJ1c2lhXCIsIFwiQ2FuYWRhXCIsIFwiTcOpeGljb1wiXSxcclxuICAgICAgYW5zd2VyOiBcIkdyYW4gQnJldGHDsWFcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiBcIsK/UXXDqSBwYcOtcyBlcyBlbCBzZWd1bmRvIG3DoXMgZ3JhbmRlIGRlbCBtdW5kbyBlbiB0w6lybWlub3MgZGUgcG9ibGFjacOzbj9cIixcclxuICAgICAgb3B0aW9uczogW1wiQ2hpbmFcIiwgXCJSdXNpYVwiLCBcIkluZGlhXCIsIFwiSW5kb25lc2lhXCJdLFxyXG4gICAgICBhbnN3ZXI6IFwiSW5kaWFcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiBcIsK/Q8O6YWwgZGUgZXN0b3MgcGHDrXNlcyBlcyBlbCBtw6FzIGdyYW5kZSBlbiDDgWZyaWNhP1wiLFxyXG4gICAgICBvcHRpb25zOiBbXCJBcmdlbGlhXCIsIFwiUmVww7pibGljYSBEZW1vY3LDoXRpY2EgZGVsIENvbmdvXCIsIFwiVGFuemFuaWFcIiwgXCJOYW1pYmlhXCJdLFxyXG4gICAgICBhbnN3ZXI6IFwiQXJnZWxpYVwiLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIE1hdGVtw6F0aWNhczogW1xyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogXCLCv0EgY8O6YW50byBlcXVpdmFsZSBwaT9cIixcclxuICAgICAgb3B0aW9uczogW1wiMywxNDE1OTJcIiwgXCIzLDE0OTIxNVwiLCBcIjMsMTQ0NDIzXCIsIFwiMywxNDQxMjNcIl0sXHJcbiAgICAgIGFuc3dlcjogXCIzLDE0MTU5MlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246IFwiwr9Dw7NtbyBzZSBsbGFtYSBhIHVuIHBvbGllZHJvIGRlIDIwIGNhcmFzP1wiLFxyXG4gICAgICBvcHRpb25zOiBbXCJJY29zYWVkcm9cIiwgXCJEb2RlY2FlZHJvXCIsIFwiVGV0cmFkZWNhZWRyb1wiLCBcIkFwZWlyb2Vkcm9cIl0sXHJcbiAgICAgIGFuc3dlcjogXCJJY29zYWVkcm9cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiBcIsK/Q3XDoWwgZXMgZWwgcmVzdWx0YWRvIGRlIHN1bWFyIDEgaG9yYSB5IDQwIG1pbnV0b3MgeSAxIGhvcmEgeSAzMCBtaW51dG9zP1wiLFxyXG4gICAgICBvcHRpb25zOiBbXCIxIGhvcmEgeSA0MCBtaW51dG9zXCIsIFwiMyBob3Jhc1wiLCBcIjMgaG9yYSB5IDEwIG1pbnV0b3NcIiwgXCIyIGhvcmFzIHkgNTAgbWludXRvc1wiXSxcclxuICAgICAgYW5zd2VyOiBcIjMgaG9yYXMgeSAxMCBtaW51dG9zXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogXCLCv0PDumFudG9zIGxhZG9zIHRpZW5lIHVuIGhleMOhZ29ubz9cIixcclxuICAgICAgb3B0aW9uczogW1wiOCBsYWRvc1wiLCBcIjYgbGFkb3NcIiwgXCI1IGxhZG9zXCIsIFwiNyBsYWRvc1wiXSxcclxuICAgICAgYW5zd2VyOiBcIjYgbGFkb3NcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiBcIsK/cXXDqSBkaXN0YW5jaWEgcmVjb3JyZXLDoSB1biBjb2NoZSBlbiB0cmVzIGhvcmFzIHNpIHZhIGEgNTAga20vaD9cIixcclxuICAgICAgb3B0aW9uczogW1wiMzAwIGttXCIsIFwiNTAwIGttXCIsIFwiMTAwIGttXCIsIFwiMTUwIGttXCJdLFxyXG4gICAgICBhbnN3ZXI6IFwiMTUwIGttXCIsXHJcbiAgICB9XSxcclxuICAgIE3DunNpY2E6IFtcclxuICAgICAge1xyXG4gICAgICAgIHF1ZXN0aW9uOiBcIsK/Q8O6YW50YXMgbMOtbmVhcyB5IGVzcGFjaW9zIHRpZW5lIHVuIHBlbnRhZ3JhbWE/XCIsXHJcbiAgICAgICAgb3B0aW9uczogW1wiNSBsw61uZWFzIHkgNCBlc3BhY2lvc1wiLCBcIjUgbMOtbmVhcyB5IDUgZXNwYWNpb3NcIiwgXCIgNSBsw61uZWFzIHkgNiBlc3BhY2lvc1wiLCBcIjYgbMOtbmVhcyB5IDYgZXNwYWNpb3NcIl0sXHJcbiAgICAgICAgYW5zd2VyOiBcIjUgbMOtbmVhcyB5IDQgZXNwYWNpb3NcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHF1ZXN0aW9uOiBcIsK/QSBjw7phbnRhcyBuZWdyYXMgZXF1aXZhbGUgdW5hIHJlZG9uZGE/XCIsXHJcbiAgICAgICAgb3B0aW9uczogW1wiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNlwiXSxcclxuICAgICAgICBhbnN3ZXI6IFwiNFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcXVlc3Rpb246IFwiwr9Dw7phbCBkZSBlc3RvcyBpbnN0cnVtZW50b3Mgbm8gcGVydGVuZWNlIGEgdW5hIG9ycXVlc3RhIHNpbmbDs25pY2E/XCIsXHJcbiAgICAgICAgb3B0aW9uczogW1wiQXJwYVwiLCBcIlBpYW5vXCIsIFwiRmFnb3RcIiwgXCJTYXhvZsOzblwiXSxcclxuICAgICAgICBhbnN3ZXI6IFwiU2F4b2bDs25cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHF1ZXN0aW9uOiBcIsK/TGEgJ29kYSBhIGxhIGFsZWdyw61hJyBmb3JtYSBwYXJ0ZSBkZSBxdWUgc2luZm9uw61hIGRlIEJlZXRob3Zlbj9cIixcclxuICAgICAgICBvcHRpb25zOiBbXCJTaW5mb27DrWEgbsKwLiA1XCIsIFwiU2luZm9uw61hIG7CsC4gNlwiLCBcIlNpbmZvbsOtYSBuwrAuIDhcIiwgXCJTaW5mb27DrWEgbsKwLiA5XCJdLFxyXG4gICAgICAgIGFuc3dlcjogXCJTaW5mb27DrWEgbsKwLiA5XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBxdWVzdGlvbjogXCLCv0PDumFsIGRlIGVzdG9zIG5vIGVzIHVuIGluc3RydW1lbnRvIGRlIHZpZW50byAtIG1hZGVyYT9cIixcclxuICAgICAgICBvcHRpb25zOiBbXCJTYXhvZsOzblwiLCBcIkZsYXV0YSB0cmF2ZXNlcmFcIiwgXCJUcm9tcGV0YVwiLCBcIkZhZ290XCJdLFxyXG4gICAgICAgIGFuc3dlcjogXCJUcm9tcGV0YVwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuXHJcbiAgICBJbmdsw6lzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBxdWVzdGlvbjogXCJ3ZSBfX19fXyBzb2NjZXIgdG9nZXRoZXIgaW4gdGhlIHBhcmtcIixcclxuICAgICAgICBvcHRpb25zOiBbXCJlYXRcIiwgXCJwbGF5XCIsIFwibGl2ZVwiLCBcInNpbmdcIl0sXHJcbiAgICAgICAgYW5zd2VyOiBcInBsYXlcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHF1ZXN0aW9uOiBcIl9fX19fXyA6IEEgdGVtcG9yYXJ5IHN0YXRlIG9mIG1pbmQgb3IgZmVlbGluZ1wiLFxyXG4gICAgICAgIG9wdGlvbnM6IFtcImZvb2RcIiwgXCJtdWRcIiwgXCJidWRcIiwgXCJtb29kXCJdLFxyXG4gICAgICAgIGFuc3dlcjogXCJtb29kXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBxdWVzdGlvbjogXCJXZSBuZWVkIHRvIGZpbmQgc29tZSBfX19fXyBmb3IgdGhlIGZpcmVcIixcclxuICAgICAgICBvcHRpb25zOiBbXCJzdG9ja3NcIiwgXCJzdGlja3NcIiwgXCJwYXBlclwiLCBcInJvY2tzXCJdLFxyXG4gICAgICAgIGFuc3dlcjogXCJzdGlja3NcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHF1ZXN0aW9uOiBcIkkgcHJlZmVyIF9fX19fIGFjdGl2aXRpZXMsIGV4Y2VwdCB3aGVuIGl0cyByYWluaW5nXCIsXHJcbiAgICAgICAgb3B0aW9uczogW1wiY2hlc3NcIiwgXCIgaW5kb29yXCIsIFwib3V0ZG9vclwiLCBcInF1aWV0XCJdLFxyXG4gICAgICAgIGFuc3dlcjogXCJvdXRkb29yXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBxdWVzdGlvbjogXCJfX19fOiBhIGZseWluZyBpbnNlY3Qgd2l0aCBhIGxvbmcgdGhpbiBib2R5IGFuZCBmb3VyIGxhcmdlLCB1c3VhbGx5IGJyaWdodGx5IGNvbG91cmVkLCB3aW5nc1wiLFxyXG4gICAgICAgIG9wdGlvbnM6IFtcIlwiLCBcIiBcIiwgXCJcIiwgXCJGYWdvdFwiXSxcclxuICAgICAgICBhbnN3ZXI6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYXRhO1xyXG4iXSwibmFtZXMiOlsiZGF0YSIsIkdlb2dyYWZpYSIsInF1ZXN0aW9uIiwib3B0aW9ucyIsImFuc3dlciIsIk1hdGVtw6F0aWNhcyIsIk3DunNpY2EiLCJJbmdsw6lzIl0sInNvdXJjZVJvb3QiOiIifQ==