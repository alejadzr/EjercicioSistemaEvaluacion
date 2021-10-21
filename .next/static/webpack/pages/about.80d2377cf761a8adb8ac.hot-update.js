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
    question: "¿?",
    options: ["", "", "", ""],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuODBkMjM3N2NmNzYxYThhZGI4YWMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLElBQU1BLElBQUksR0FBRztBQUNYQyxFQUFBQSxTQUFTLEVBQUUsQ0FDVDtBQUNFQyxJQUFBQSxRQUFRLEVBQUUsdUNBRFo7QUFFRUMsSUFBQUEsT0FBTyxFQUFFLENBQUMsVUFBRCxFQUFhLE1BQWIsRUFBcUIsY0FBckIsRUFBcUMsU0FBckMsQ0FGWDtBQUdFQyxJQUFBQSxNQUFNLEVBQUU7QUFIVixHQURTLEVBTVQ7QUFDRUYsSUFBQUEsUUFBUSxFQUFFLHlEQURaO0FBRUVDLElBQUFBLE9BQU8sRUFBRSxDQUFDLFFBQUQsRUFBVyxPQUFYLEVBQW9CLFNBQXBCLEVBQStCLGFBQS9CLENBRlg7QUFHRUMsSUFBQUEsTUFBTSxFQUFFO0FBSFYsR0FOUyxFQVdUO0FBQ0VGLElBQUFBLFFBQVEsRUFBRSwyREFEWjtBQUVFQyxJQUFBQSxPQUFPLEVBQUUsQ0FBQyxjQUFELEVBQWlCLE9BQWpCLEVBQTBCLFFBQTFCLEVBQW9DLFFBQXBDLENBRlg7QUFHRUMsSUFBQUEsTUFBTSxFQUFFO0FBSFYsR0FYUyxFQWdCVDtBQUNFRixJQUFBQSxRQUFRLEVBQUUsd0VBRFo7QUFFRUMsSUFBQUEsT0FBTyxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsT0FBbkIsRUFBNEIsV0FBNUIsQ0FGWDtBQUdFQyxJQUFBQSxNQUFNLEVBQUU7QUFIVixHQWhCUyxFQXFCVDtBQUNFRixJQUFBQSxRQUFRLEVBQUUsbURBRFo7QUFFRUMsSUFBQUEsT0FBTyxFQUFFLENBQUMsU0FBRCxFQUFZLGlDQUFaLEVBQStDLFVBQS9DLEVBQTJELFNBQTNELENBRlg7QUFHRUMsSUFBQUEsTUFBTSxFQUFFO0FBSFYsR0FyQlMsQ0FEQTtBQTRCWEMsRUFBQUEsV0FBVyxFQUFFLENBQ1g7QUFDRUgsSUFBQUEsUUFBUSxFQUFFLHdCQURaO0FB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QUFIVixHQVhNLEVBZ0JOO0FBQ0VGLElBQUFBLFFBQVEsRUFBRSxJQURaO0FBRUVDLElBQUFBLE9BQU8sRUFBRSxDQUFDLGdCQUFELEVBQW1CLGdCQUFuQixFQUFxQyxnQkFBckMsRUFBdUQsZ0JBQXZELENBRlg7QUFHRUMsSUFBQUEsTUFBTSxFQUFFO0FBSFYsR0FoQk0sRUFxQk47QUFDRUYsSUFBQUEsUUFBUSxFQUFFLElBRFo7QUFFRUMsSUFBQUEsT0FBTyxFQUFFLENBQUMsU0FBRCxFQUFZLGtCQUFaLEVBQWdDLFVBQWhDLEVBQTRDLE9BQTVDLENBRlg7QUFHRUMsSUFBQUEsTUFBTSxFQUFFO0FBSFYsR0FyQk07QUFsRkMsQ0FBYjtBQStHQSwrREFBZUosSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9kYXRhYmFzZS9kYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRhdGEgPSB7XHJcbiAgR2VvZ3JhZmlhOiBbXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiBcIsK/Q3XDoWwgZXMgZWwgcsOtbyBtw6FzIGdyYW5kZSBkZWwgbXVuZG8/XCIsXHJcbiAgICAgIG9wdGlvbnM6IFtcIkFtYXpvbmFzXCIsIFwiTmlsb1wiLCBcIlLDrW8gQW1hcmlsbG9cIiwgXCJZYW5ndHPDqVwiXSxcclxuICAgICAgYW5zd2VyOiBcIk5pbG9cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiBcIsK/UXVlIHBhw61zIHRpZW5lIGxhIG1heW9yIGNhbnRpZGFkIGRlIGlzbGFzIGVuIGVsIG11bmRvP1wiLFxyXG4gICAgICBvcHRpb25zOiBbXCJTdWVjaWFcIiwgXCJDaGluYVwiLCBcIk1hbGFzaWFcIiwgXCJHcm9lbmxhbmRpYVwiXSxcclxuICAgICAgYW5zd2VyOiBcIlN1ZWNpYVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246IFwiwr9Dw7phbCBkZSBlc3RvcyBwYcOtc2VzIGVzIGJhw7FhZG8gw7puaWNhbWVudGUgcG9yIHVuIG9jw6lhbm8/XCIsXHJcbiAgICAgIG9wdGlvbnM6IFtcIkdyYW4gQnJldGHDsWFcIiwgXCJSdXNpYVwiLCBcIkNhbmFkYVwiLCBcIk3DqXhpY29cIl0sXHJcbiAgICAgIGFuc3dlcjogXCJHcmFuIEJyZXRhw7FhXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogXCLCv1F1w6kgcGHDrXMgZXMgZWwgc2VndW5kbyBtw6FzIGdyYW5kZSBkZWwgbXVuZG8gZW4gdMOpcm1pbm9zIGRlIHBvYmxhY2nDs24/XCIsXHJcbiAgICAgIG9wdGlvbnM6IFtcIkNoaW5hXCIsIFwiUnVzaWFcIiwgXCJJbmRpYVwiLCBcIkluZG9uZXNpYVwiXSxcclxuICAgICAgYW5zd2VyOiBcIkluZGlhXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogXCLCv0PDumFsIGRlIGVzdG9zIHBhw61zZXMgZXMgZWwgbcOhcyBncmFuZGUgZW4gw4FmcmljYT9cIixcclxuICAgICAgb3B0aW9uczogW1wiQXJnZWxpYVwiLCBcIlJlcMO6YmxpY2EgRGVtb2Nyw6F0aWNhIGRlbCBDb25nb1wiLCBcIlRhbnphbmlhXCIsIFwiTmFtaWJpYVwiXSxcclxuICAgICAgYW5zd2VyOiBcIkFyZ2VsaWFcIixcclxuICAgIH0sXHJcbiAgXSxcclxuICBNYXRlbcOhdGljYXM6IFtcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246IFwiwr9BIGPDumFudG8gZXF1aXZhbGUgcGk/XCIsXHJcbiAgICAgIG9wdGlvbnM6IFtcIjMsMTQxNTkyXCIsIFwiMywxNDkyMTVcIiwgXCIzLDE0NDQyM1wiLCBcIjMsMTQ0MTIzXCJdLFxyXG4gICAgICBhbnN3ZXI6IFwiMywxNDE1OTJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiBcIsK/Q8OzbW8gc2UgbGxhbWEgYSB1biBwb2xpZWRybyBkZSAyMCBjYXJhcz9cIixcclxuICAgICAgb3B0aW9uczogW1wiSWNvc2FlZHJvXCIsIFwiRG9kZWNhZWRyb1wiLCBcIlRldHJhZGVjYWVkcm9cIiwgXCJBcGVpcm9lZHJvXCJdLFxyXG4gICAgICBhbnN3ZXI6IFwiSWNvc2FlZHJvXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogXCLCv0N1w6FsIGVzIGVsIHJlc3VsdGFkbyBkZSBzdW1hciAxIGhvcmEgeSA0MCBtaW51dG9zIHkgMSBob3JhIHkgMzAgbWludXRvcz9cIixcclxuICAgICAgb3B0aW9uczogW1wiMSBob3JhIHkgNDAgbWludXRvc1wiLCBcIjMgaG9yYXNcIiwgXCIzIGhvcmEgeSAxMCBtaW51dG9zXCIsIFwiMiBob3JhcyB5IDUwIG1pbnV0b3NcIl0sXHJcbiAgICAgIGFuc3dlcjogXCIzIGhvcmFzIHkgMTAgbWludXRvc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246IFwiwr9Dw7phbnRvcyBsYWRvcyB0aWVuZSB1biBoZXjDoWdvbm8/XCIsXHJcbiAgICAgIG9wdGlvbnM6IFtcIjggbGFkb3NcIiwgXCI2IGxhZG9zXCIsIFwiNSBsYWRvc1wiLCBcIjcgbGFkb3NcIl0sXHJcbiAgICAgIGFuc3dlcjogXCI2IGxhZG9zXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogXCLCv3F1w6kgZGlzdGFuY2lhIHJlY29ycmVyw6EgdW4gY29jaGUgZW4gdHJlcyBob3JhcyBzaSB2YSBhIDUwIGttL2g/XCIsXHJcbiAgICAgIG9wdGlvbnM6IFtcIjMwMCBrbVwiLCBcIjUwMCBrbVwiLCBcIjEwMCBrbVwiLCBcIjE1MCBrbVwiXSxcclxuICAgICAgYW5zd2VyOiBcIjE1MCBrbVwiLFxyXG4gICAgfV0sXHJcbiAgICBNw7pzaWNhOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBxdWVzdGlvbjogXCLCv0PDumFudGFzIGzDrW5lYXMgeSBlc3BhY2lvcyB0aWVuZSB1biBwZW50YWdyYW1hP1wiLFxyXG4gICAgICAgIG9wdGlvbnM6IFtcIjUgbMOtbmVhcyB5IDQgZXNwYWNpb3NcIiwgXCI1IGzDrW5lYXMgeSA1IGVzcGFjaW9zXCIsIFwiIDUgbMOtbmVhcyB5IDYgZXNwYWNpb3NcIiwgXCI2IGzDrW5lYXMgeSA2IGVzcGFjaW9zXCJdLFxyXG4gICAgICAgIGFuc3dlcjogXCI1IGzDrW5lYXMgeSA0IGVzcGFjaW9zXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBxdWVzdGlvbjogXCLCv0EgY8O6YW50YXMgbmVncmFzIGVxdWl2YWxlIHVuYSByZWRvbmRhP1wiLFxyXG4gICAgICAgIG9wdGlvbnM6IFtcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjZcIl0sXHJcbiAgICAgICAgYW5zd2VyOiBcIjRcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHF1ZXN0aW9uOiBcIsK/Q8O6YWwgZGUgZXN0b3MgaW5zdHJ1bWVudG9zIG5vIHBlcnRlbmVjZSBhIHVuYSBvcnF1ZXN0YSBzaW5mw7NuaWNhP1wiLFxyXG4gICAgICAgIG9wdGlvbnM6IFtcIkFycGFcIiwgXCJQaWFub1wiLCBcIkZhZ290XCIsIFwiU2F4b2bDs25cIl0sXHJcbiAgICAgICAgYW5zd2VyOiBcIlNheG9mw7NuXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBxdWVzdGlvbjogXCLCv0xhICdvZGEgYSBsYSBhbGVncsOtYScgZm9ybWEgcGFydGUgZGUgcXVlIHNpbmZvbsOtYSBkZSBCZWV0aG92ZW4/XCIsXHJcbiAgICAgICAgb3B0aW9uczogW1wiU2luZm9uw61hIG7CsC4gNVwiLCBcIlNpbmZvbsOtYSBuwrAuIDZcIiwgXCJTaW5mb27DrWEgbsKwLiA4XCIsIFwiU2luZm9uw61hIG7CsC4gOVwiXSxcclxuICAgICAgICBhbnN3ZXI6IFwiU2luZm9uw61hIG7CsC4gOVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcXVlc3Rpb246IFwiwr9Dw7phbCBkZSBlc3RvcyBubyBlcyB1biBpbnN0cnVtZW50byBkZSB2aWVudG8gLSBtYWRlcmE/XCIsXHJcbiAgICAgICAgb3B0aW9uczogW1wiU2F4b2bDs25cIiwgXCJGbGF1dGEgdHJhdmVzZXJhXCIsIFwiVHJvbXBldGFcIiwgXCJGYWdvdFwiXSxcclxuICAgICAgICBhbnN3ZXI6IFwiVHJvbXBldGFcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcblxyXG4gICAgSW5nbMOpczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcXVlc3Rpb246IFwid2UgX19fX18gc29jY2VyIHRvZ2V0aGVyIGluIHRoZSBwYXJrXCIsXHJcbiAgICAgICAgb3B0aW9uczogW1wiZWF0XCIsIFwicGxheVwiLCBcImxpdmVcIiwgXCJzaW5nXCJdLFxyXG4gICAgICAgIGFuc3dlcjogXCJwbGF5XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBxdWVzdGlvbjogXCJfX19fX18gOiBBIHRlbXBvcmFyeSBzdGF0ZSBvZiBtaW5kIG9yIGZlZWxpbmdcIixcclxuICAgICAgICBvcHRpb25zOiBbXCJmb29kXCIsIFwibXVkXCIsIFwiYnVkXCIsIFwibW9vZFwiXSxcclxuICAgICAgICBhbnN3ZXI6IFwibW9vZFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcXVlc3Rpb246IFwiwr8/XCIsXHJcbiAgICAgICAgb3B0aW9uczogW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxyXG4gICAgICAgIGFuc3dlcjogXCJTYXhvZsOzblwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcXVlc3Rpb246IFwiwr8/XCIsXHJcbiAgICAgICAgb3B0aW9uczogW1wiU2luZm9uw61hIG7CsC4gNVwiLCBcIlNpbmZvbsOtYSBuwrAuIDZcIiwgXCJTaW5mb27DrWEgbsKwLiA4XCIsIFwiU2luZm9uw61hIG7CsC4gOVwiXSxcclxuICAgICAgICBhbnN3ZXI6IFwiXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBxdWVzdGlvbjogXCLCvz9cIixcclxuICAgICAgICBvcHRpb25zOiBbXCJTYXhvZsOzblwiLCBcIkZsYXV0YSB0cmF2ZXNlcmFcIiwgXCJUcm9tcGV0YVwiLCBcIkZhZ290XCJdLFxyXG4gICAgICAgIGFuc3dlcjogXCJcIixcclxuICAgICAgfSxcclxuICAgIF1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRhdGE7XHJcbiJdLCJuYW1lcyI6WyJkYXRhIiwiR2VvZ3JhZmlhIiwicXVlc3Rpb24iLCJvcHRpb25zIiwiYW5zd2VyIiwiTWF0ZW3DoXRpY2FzIiwiTcO6c2ljYSIsIkluZ2zDqXMiXSwic291cmNlUm9vdCI6IiJ9