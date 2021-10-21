"use strict";
(() => {
var exports = {};
exports.id = "pages/api/exam";
exports.ids = ["pages/api/exam"];
exports.modules = {

/***/ "./database/data.js":
/*!**************************!*\
  !*** ./database/data.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const data = {
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
    question: "¿Qué distancia recorrerá un coche en tres horas si va a 50 km/h?",
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
    question: "We _____ soccer together in the park",
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
    options: ["Flamingo", "Peacock", "Butterfly", "Ladybug"],
    answer: "Butterfly"
  }]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);

/***/ }),

/***/ "./database/db.js":
/*!************************!*\
  !*** ./database/db.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./database/data.js");
// Oh you curious...
// This is not a real database,
// But let's imagine it is one :)
 // Estoy utilizando un objeto llamado Database para seguir simulando un ambiente llamando la base de datos.

const Database = {};

Database.getAll = async () => {
  const asArray = Object.values(_data__WEBPACK_IMPORTED_MODULE_0__.default);
  await randomDelay();
  return asArray;
};

Database.getById = async id => {
  const entry = _data__WEBPACK_IMPORTED_MODULE_0__.default[id];
  await randomDelay();
  return entry;
}; // Modifique el tiempo del delay para simular el tiempo de espera
// Tardara entre 1 a 4 segundos


const randomDelay = () => {
  return new Promise(resolve => {
    const delay = Math.floor(Math.random() * 500) + 1000;
    setTimeout(resolve, delay);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Database);

/***/ }),

/***/ "./pages/api/exam/index.js":
/*!*********************************!*\
  !*** ./pages/api/exam/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _database_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../database/db */ "./database/db.js");


const allQuestions = async (req, res) => {
  const AllEntries = await _database_db__WEBPACK_IMPORTED_MODULE_0__.default.getAll();
  const length = AllEntries.length;
  res.status(200).json({
    data: AllEntries,
    length
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allQuestions);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/exam/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU1nQixZQUFZLEdBQUcsT0FBTUMsR0FBTixFQUFXQyxHQUFYLEtBQW1CO0FBQ3BDLFFBQU1DLFVBQVUsR0FBRyxNQUFNbkIsd0RBQUEsRUFBekI7QUFDQSxRQUFNb0IsTUFBTSxHQUFHRCxVQUFVLENBQUNDLE1BQTFCO0FBQ0FGLEVBQUFBLEdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUM5QixJQUFBQSxJQUFJLEVBQUMyQixVQUFOO0FBQWtCQyxJQUFBQTtBQUFsQixHQUFyQjtBQUNELENBSkg7O0FBTUEsaUVBQWVKLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhYmFzZS9kYXRhLmpzIiwid2VicGFjazovLy8uL2RhdGFiYXNlL2RiLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9leGFtL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRhdGEgPSB7XHJcbiAgR2VvZ3JhZmlhOiBbXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiBcIsK/Q3XDoWwgZXMgZWwgcsOtbyBtw6FzIGdyYW5kZSBkZWwgbXVuZG8/XCIsXHJcbiAgICAgIG9wdGlvbnM6IFtcIkFtYXpvbmFzXCIsIFwiTmlsb1wiLCBcIlLDrW8gQW1hcmlsbG9cIiwgXCJZYW5ndHPDqVwiXSxcclxuICAgICAgYW5zd2VyOiBcIk5pbG9cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiBcIsK/UXVlIHBhw61zIHRpZW5lIGxhIG1heW9yIGNhbnRpZGFkIGRlIGlzbGFzIGVuIGVsIG11bmRvP1wiLFxyXG4gICAgICBvcHRpb25zOiBbXCJTdWVjaWFcIiwgXCJDaGluYVwiLCBcIk1hbGFzaWFcIiwgXCJHcm9lbmxhbmRpYVwiXSxcclxuICAgICAgYW5zd2VyOiBcIlN1ZWNpYVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246IFwiwr9Dw7phbCBkZSBlc3RvcyBwYcOtc2VzIGVzIGJhw7FhZG8gw7puaWNhbWVudGUgcG9yIHVuIG9jw6lhbm8/XCIsXHJcbiAgICAgIG9wdGlvbnM6IFtcIkdyYW4gQnJldGHDsWFcIiwgXCJSdXNpYVwiLCBcIkNhbmFkYVwiLCBcIk3DqXhpY29cIl0sXHJcbiAgICAgIGFuc3dlcjogXCJHcmFuIEJyZXRhw7FhXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogXCLCv1F1w6kgcGHDrXMgZXMgZWwgc2VndW5kbyBtw6FzIGdyYW5kZSBkZWwgbXVuZG8gZW4gdMOpcm1pbm9zIGRlIHBvYmxhY2nDs24/XCIsXHJcbiAgICAgIG9wdGlvbnM6IFtcIkNoaW5hXCIsIFwiUnVzaWFcIiwgXCJJbmRpYVwiLCBcIkluZG9uZXNpYVwiXSxcclxuICAgICAgYW5zd2VyOiBcIkluZGlhXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogXCLCv0PDumFsIGRlIGVzdG9zIHBhw61zZXMgZXMgZWwgbcOhcyBncmFuZGUgZW4gw4FmcmljYT9cIixcclxuICAgICAgb3B0aW9uczogW1wiQXJnZWxpYVwiLCBcIlJlcMO6YmxpY2EgRGVtb2Nyw6F0aWNhIGRlbCBDb25nb1wiLCBcIlRhbnphbmlhXCIsIFwiTmFtaWJpYVwiXSxcclxuICAgICAgYW5zd2VyOiBcIkFyZ2VsaWFcIixcclxuICAgIH0sXHJcbiAgXSxcclxuICBNYXRlbcOhdGljYXM6IFtcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246IFwiwr9BIGPDumFudG8gZXF1aXZhbGUgcGk/XCIsXHJcbiAgICAgIG9wdGlvbnM6IFtcIjMsMTQxNTkyXCIsIFwiMywxNDkyMTVcIiwgXCIzLDE0NDQyM1wiLCBcIjMsMTQ0MTIzXCJdLFxyXG4gICAgICBhbnN3ZXI6IFwiMywxNDE1OTJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiBcIsK/Q8OzbW8gc2UgbGxhbWEgYSB1biBwb2xpZWRybyBkZSAyMCBjYXJhcz9cIixcclxuICAgICAgb3B0aW9uczogW1wiSWNvc2FlZHJvXCIsIFwiRG9kZWNhZWRyb1wiLCBcIlRldHJhZGVjYWVkcm9cIiwgXCJBcGVpcm9lZHJvXCJdLFxyXG4gICAgICBhbnN3ZXI6IFwiSWNvc2FlZHJvXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogXCLCv0N1w6FsIGVzIGVsIHJlc3VsdGFkbyBkZSBzdW1hciAxIGhvcmEgeSA0MCBtaW51dG9zIHkgMSBob3JhIHkgMzAgbWludXRvcz9cIixcclxuICAgICAgb3B0aW9uczogW1wiMSBob3JhIHkgNDAgbWludXRvc1wiLCBcIjMgaG9yYXNcIiwgXCIzIGhvcmEgeSAxMCBtaW51dG9zXCIsIFwiMiBob3JhcyB5IDUwIG1pbnV0b3NcIl0sXHJcbiAgICAgIGFuc3dlcjogXCIzIGhvcmFzIHkgMTAgbWludXRvc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246IFwiwr9Dw7phbnRvcyBsYWRvcyB0aWVuZSB1biBoZXjDoWdvbm8/XCIsXHJcbiAgICAgIG9wdGlvbnM6IFtcIjggbGFkb3NcIiwgXCI2IGxhZG9zXCIsIFwiNSBsYWRvc1wiLCBcIjcgbGFkb3NcIl0sXHJcbiAgICAgIGFuc3dlcjogXCI2IGxhZG9zXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogXCLCv1F1w6kgZGlzdGFuY2lhIHJlY29ycmVyw6EgdW4gY29jaGUgZW4gdHJlcyBob3JhcyBzaSB2YSBhIDUwIGttL2g/XCIsXHJcbiAgICAgIG9wdGlvbnM6IFtcIjMwMCBrbVwiLCBcIjUwMCBrbVwiLCBcIjEwMCBrbVwiLCBcIjE1MCBrbVwiXSxcclxuICAgICAgYW5zd2VyOiBcIjE1MCBrbVwiLFxyXG4gICAgfV0sXHJcbiAgICBNw7pzaWNhOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBxdWVzdGlvbjogXCLCv0PDumFudGFzIGzDrW5lYXMgeSBlc3BhY2lvcyB0aWVuZSB1biBwZW50YWdyYW1hP1wiLFxyXG4gICAgICAgIG9wdGlvbnM6IFtcIjUgbMOtbmVhcyB5IDQgZXNwYWNpb3NcIiwgXCI1IGzDrW5lYXMgeSA1IGVzcGFjaW9zXCIsIFwiIDUgbMOtbmVhcyB5IDYgZXNwYWNpb3NcIiwgXCI2IGzDrW5lYXMgeSA2IGVzcGFjaW9zXCJdLFxyXG4gICAgICAgIGFuc3dlcjogXCI1IGzDrW5lYXMgeSA0IGVzcGFjaW9zXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBxdWVzdGlvbjogXCLCv0EgY8O6YW50YXMgbmVncmFzIGVxdWl2YWxlIHVuYSByZWRvbmRhP1wiLFxyXG4gICAgICAgIG9wdGlvbnM6IFtcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjZcIl0sXHJcbiAgICAgICAgYW5zd2VyOiBcIjRcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHF1ZXN0aW9uOiBcIsK/Q8O6YWwgZGUgZXN0b3MgaW5zdHJ1bWVudG9zIG5vIHBlcnRlbmVjZSBhIHVuYSBvcnF1ZXN0YSBzaW5mw7NuaWNhP1wiLFxyXG4gICAgICAgIG9wdGlvbnM6IFtcIkFycGFcIiwgXCJQaWFub1wiLCBcIkZhZ290XCIsIFwiU2F4b2bDs25cIl0sXHJcbiAgICAgICAgYW5zd2VyOiBcIlNheG9mw7NuXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBxdWVzdGlvbjogXCLCv0xhICdvZGEgYSBsYSBhbGVncsOtYScgZm9ybWEgcGFydGUgZGUgcXVlIHNpbmZvbsOtYSBkZSBCZWV0aG92ZW4/XCIsXHJcbiAgICAgICAgb3B0aW9uczogW1wiU2luZm9uw61hIG7CsC4gNVwiLCBcIlNpbmZvbsOtYSBuwrAuIDZcIiwgXCJTaW5mb27DrWEgbsKwLiA4XCIsIFwiU2luZm9uw61hIG7CsC4gOVwiXSxcclxuICAgICAgICBhbnN3ZXI6IFwiU2luZm9uw61hIG7CsC4gOVwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcXVlc3Rpb246IFwiwr9Dw7phbCBkZSBlc3RvcyBubyBlcyB1biBpbnN0cnVtZW50byBkZSB2aWVudG8gLSBtYWRlcmE/XCIsXHJcbiAgICAgICAgb3B0aW9uczogW1wiU2F4b2bDs25cIiwgXCJGbGF1dGEgdHJhdmVzZXJhXCIsIFwiVHJvbXBldGFcIiwgXCJGYWdvdFwiXSxcclxuICAgICAgICBhbnN3ZXI6IFwiVHJvbXBldGFcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcblxyXG4gICAgSW5nbMOpczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcXVlc3Rpb246IFwiV2UgX19fX18gc29jY2VyIHRvZ2V0aGVyIGluIHRoZSBwYXJrXCIsXHJcbiAgICAgICAgb3B0aW9uczogW1wiZWF0XCIsIFwicGxheVwiLCBcImxpdmVcIiwgXCJzaW5nXCJdLFxyXG4gICAgICAgIGFuc3dlcjogXCJwbGF5XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBxdWVzdGlvbjogXCJfX19fX18gOiBBIHRlbXBvcmFyeSBzdGF0ZSBvZiBtaW5kIG9yIGZlZWxpbmdcIixcclxuICAgICAgICBvcHRpb25zOiBbXCJmb29kXCIsIFwibXVkXCIsIFwiYnVkXCIsIFwibW9vZFwiXSxcclxuICAgICAgICBhbnN3ZXI6IFwibW9vZFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcXVlc3Rpb246IFwiV2UgbmVlZCB0byBmaW5kIHNvbWUgX19fX18gZm9yIHRoZSBmaXJlXCIsXHJcbiAgICAgICAgb3B0aW9uczogW1wic3RvY2tzXCIsIFwic3RpY2tzXCIsIFwicGFwZXJcIiwgXCJyb2Nrc1wiXSxcclxuICAgICAgICBhbnN3ZXI6IFwic3RpY2tzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBxdWVzdGlvbjogXCJJIHByZWZlciBfX19fXyBhY3Rpdml0aWVzLCBleGNlcHQgd2hlbiBpdHMgcmFpbmluZ1wiLFxyXG4gICAgICAgIG9wdGlvbnM6IFtcImNoZXNzXCIsIFwiIGluZG9vclwiLCBcIm91dGRvb3JcIiwgXCJxdWlldFwiXSxcclxuICAgICAgICBhbnN3ZXI6IFwib3V0ZG9vclwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcXVlc3Rpb246IFwiX19fXzogYSBmbHlpbmcgaW5zZWN0IHdpdGggYSBsb25nIHRoaW4gYm9keSBhbmQgZm91ciBsYXJnZSwgdXN1YWxseSBicmlnaHRseSBjb2xvdXJlZCwgd2luZ3NcIixcclxuICAgICAgICBvcHRpb25zOiBbXCJGbGFtaW5nb1wiLCBcIlBlYWNvY2tcIiwgXCJCdXR0ZXJmbHlcIiwgXCJMYWR5YnVnXCJdLFxyXG4gICAgICAgIGFuc3dlcjogXCJCdXR0ZXJmbHlcIixcclxuICAgICAgfSxcclxuICAgIF1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRhdGE7XHJcbiIsIi8vIE9oIHlvdSBjdXJpb3VzLi4uXHJcbi8vIFRoaXMgaXMgbm90IGEgcmVhbCBkYXRhYmFzZSxcclxuLy8gQnV0IGxldCdzIGltYWdpbmUgaXQgaXMgb25lIDopXHJcbmltcG9ydCBkYXRhIGZyb20gJy4vZGF0YSc7XHJcblxyXG4vLyBFc3RveSB1dGlsaXphbmRvIHVuIG9iamV0byBsbGFtYWRvIERhdGFiYXNlIHBhcmEgc2VndWlyIHNpbXVsYW5kbyB1biBhbWJpZW50ZSBsbGFtYW5kbyBsYSBiYXNlIGRlIGRhdG9zLlxyXG5jb25zdCBEYXRhYmFzZSA9IHt9O1xyXG5cclxuRGF0YWJhc2UuZ2V0QWxsID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGFzQXJyYXkgPSBPYmplY3QudmFsdWVzKGRhdGEpO1xyXG4gIGF3YWl0IHJhbmRvbURlbGF5KCk7XHJcbiAgcmV0dXJuIGFzQXJyYXk7XHJcbn07XHJcblxyXG5EYXRhYmFzZS5nZXRCeUlkID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgY29uc3QgZW50cnkgPSBkYXRhW2lkXTtcclxuICBhd2FpdCByYW5kb21EZWxheSgpO1xyXG4gIHJldHVybiBlbnRyeTtcclxufTtcclxuXHJcbi8vIE1vZGlmaXF1ZSBlbCB0aWVtcG8gZGVsIGRlbGF5IHBhcmEgc2ltdWxhciBlbCB0aWVtcG8gZGUgZXNwZXJhXHJcbi8vIFRhcmRhcmEgZW50cmUgMSBhIDQgc2VndW5kb3NcclxuY29uc3QgcmFuZG9tRGVsYXkgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICBjb25zdCBkZWxheSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUwMCkgKyAxMDAwO1xyXG4gICAgc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhYmFzZTsiLCJpbXBvcnQgRGF0YWJhc2UgZnJvbSBcIi4uLy4uLy4uL2RhdGFiYXNlL2RiXCJcclxuXHJcblxyXG5cclxuY29uc3QgYWxsUXVlc3Rpb25zID0gYXN5bmMocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IEFsbEVudHJpZXMgPSBhd2FpdCBEYXRhYmFzZS5nZXRBbGwoKVxyXG4gICAgY29uc3QgbGVuZ3RoID0gQWxsRW50cmllcy5sZW5ndGhcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtkYXRhOkFsbEVudHJpZXMsIGxlbmd0aH0pXHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWxsUXVlc3Rpb25zIl0sIm5hbWVzIjpbImRhdGEiLCJHZW9ncmFmaWEiLCJxdWVzdGlvbiIsIm9wdGlvbnMiLCJhbnN3ZXIiLCJNYXRlbcOhdGljYXMiLCJNw7pzaWNhIiwiSW5nbMOpcyIsIkRhdGFiYXNlIiwiZ2V0QWxsIiwiYXNBcnJheSIsIk9iamVjdCIsInZhbHVlcyIsInJhbmRvbURlbGF5IiwiZ2V0QnlJZCIsImlkIiwiZW50cnkiLCJQcm9taXNlIiwicmVzb2x2ZSIsImRlbGF5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0VGltZW91dCIsImFsbFF1ZXN0aW9ucyIsInJlcSIsInJlcyIsIkFsbEVudHJpZXMiLCJsZW5ndGgiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==