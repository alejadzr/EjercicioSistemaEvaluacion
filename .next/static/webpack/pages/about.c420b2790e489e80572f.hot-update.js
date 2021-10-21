"use strict";
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./components/board.js":
/*!*****************************!*\
  !*** ./components/board.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/about */ "./pages/about.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\aledi\\OneDrive\\Documents\\Cursos\\Platzi Master\\P1 Sistema de evaluacion\\Nueva carpeta\\components\\board.js",
    _this = undefined;


//Esto es lo mismo que Layout



var Board = function Board(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "jsx-2115023874",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "jsx-2115023874" + " " + "board",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "jsx-2115023874" + " " + "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "jsx-2115023874" + " " + "Question",
          children: [props.questions.map(function (question) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "jsx-2115023874",
              children: question.question
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 45
            }, _this);
          }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
            className: "jsx-2115023874",
            children: "Ac\xE1 van  las preguntas Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, hic animi quidem assumenda,?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "jsx-2115023874" + " " + "Answers",
          children: props.questions.map(function (question) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "jsx-2115023874",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                className: "jsx-2115023874",
                children: question.options
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 54
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 49
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "jsx-2115023874" + " " + "Buttonos",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
            className: "jsx-2115023874" + " " + "Commands",
            children: "Anterior "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
            className: "jsx-2115023874" + " " + "Commands",
            children: "Siguiente "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
            className: "jsx-2115023874" + " " + "Commands",
            children: "Enviar "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
            className: "jsx-2115023874" + " " + "Commands",
            children: "Terminar "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "jsx-2115023874" + " " + "Numbers",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
            className: "jsx-2115023874" + " " + "Total",
            children: " 1 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
            className: "jsx-2115023874" + " " + "Total",
            children: " 2 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
            className: "jsx-2115023874" + " " + "Total",
            children: " 3 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
            className: "jsx-2115023874" + " " + "Total",
            children: " 4 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
            className: "jsx-2115023874" + " " + "Total",
            children: " 5 "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "jsx-2115023874" + " " + "props",
      children: props.questionList
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }, _this), console.log(props), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "2115023874",
      children: ".board.jsx-2115023874{margin:10% 10% 10% 10%;background:url(https://media.istockphoto.com/photos/chalkboard-back-to-school-theme-picture-id482968188?b=1&k=20&m=482968188&s=170667a&w=0&h=ByKSDUnnROrFuIg3wYAP2EE7e8pLVdi7_99TRSzIdxU=);background-size:100%;}.content.jsx-2115023874{display:grid;grid-template-columns:5% 50% 30% 15%;grid-template-rows:40px 250px 55px;gap:0px 0px;grid-template-areas: \"Title Title Title Title\" \". Question Answers Buttonos\" \". Numbers Numbers .\";height:500px;}.Title.jsx-2115023874{grid-area:Title;color:aqua;}.Buttonos.jsx-2115023874{grid-area:Buttonos;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.Buttonos.jsx-2115023874 .Commands.jsx-2115023874{border-radius:25%;background-color:transparent;font-family:inherit;color:papayawhip;}.Numbers.jsx-2115023874{grid-area:Numbers;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:20px;}.Total.jsx-2115023874{border-radius:50%;border-color:transparent;font-family:inherit;}.Answers.jsx-2115023874{grid-area:Answers;background:hsla(0,0%,100%,.3);font-family:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.Question.jsx-2115023874{grid-area:Question;color:white;opacity:90%;background:hsla(0,0%,100%,.3);justify-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWxlZGlcXE9uZURyaXZlXFxEb2N1bWVudHNcXEN1cnNvc1xcUGxhdHppIE1hc3RlclxcUDEgU2lzdGVtYSBkZSBldmFsdWFjaW9uXFxOdWV2YSBjYXJwZXRhXFxjb21wb25lbnRzXFxib2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRGdCLEFBSW9DLEFBU2QsQUFhRyxBQUlHLEFBU0QsQUFXSixBQVVELEFBTUMsQUFjQyxhQWxFc0IsR0FhMUIsRUFha0IsQUFXcEIsQUFVWSxBQU1LLENBcENiLEFBa0ROLElBNUVvTCxJQXNCL0ssSUF1REosWUFwQlEsQUFxQlUsSUExQ04sQ0EyQkosRUFyRG1CLGFBZ0QzQyxJQXJCeUIsQ0EyQlIsS0FlUSxXQXZDakIsQ0E3QlksT0FvQ08sQ0FwQkcsQ0FxRDFCLEdBakV5Qiw2Q0FrREgsNkJBckNXLG9CQW9CZCxLQWhDSCxhQUVaLENBakJvQixVQWlFSyxXQS9EekIscURBOENLLFNBR2IsQ0F2QjZCLGlEQXNDSiwyQkFyQ0UsaURBc0NKLDRDQXBDdkIsaURBc0NBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYWxlZGlcXE9uZURyaXZlXFxEb2N1bWVudHNcXEN1cnNvc1xcUGxhdHppIE1hc3RlclxcUDEgU2lzdGVtYSBkZSBldmFsdWFjaW9uXFxOdWV2YSBjYXJwZXRhXFxjb21wb25lbnRzXFxib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vRXN0byBlcyBsbyBtaXNtbyBxdWUgTGF5b3V0XHJcbmltcG9ydCBBYm91dCBmcm9tIFwiLi4vcGFnZXMvYWJvdXRcIlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBCb2FyZCA9KHByb3BzKSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZFwiPlxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUXVlc3Rpb25cIj5cclxuICAgICAgICB7cHJvcHMucXVlc3Rpb25zLm1hcCgocXVlc3Rpb24pID0+ICg8ZGl2PntxdWVzdGlvbi5xdWVzdGlvbn1cclxuICAgICAgICBcclxuICAgICAgICA8L2Rpdj4pKX1cclxuICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICBBY8OhIHZhbiAgbGFzIHByZWd1bnRhcyBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTWluaW1hLCBoaWMgYW5pbWkgcXVpZGVtIGFzc3VtZW5kYSw/PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFuc3dlcnNcIj5cclxuICAgICAgICAgICAge3Byb3BzLnF1ZXN0aW9ucy5tYXAoKHF1ZXN0aW9uKSA9PiAoPGRpdj48YnV0dG9uPntxdWVzdGlvbi5vcHRpb25zfTwvYnV0dG9uPjwvZGl2PikpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQnV0dG9ub3NcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJDb21tYW5kc1wiID5BbnRlcmlvciA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJDb21tYW5kc1wiPlNpZ3VpZW50ZSA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJDb21tYW5kc1wiPkVudmlhciA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJDb21tYW5kc1wiPlRlcm1pbmFyIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTnVtYmVyc1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIlRvdGFsXCI+IDEgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiVG90YWxcIj4gMiA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJUb3RhbFwiPiAzIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIlRvdGFsXCI+IDQgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiVG90YWxcIj4gNSA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3BzXCI+e3Byb3BzLnF1ZXN0aW9uTGlzdH08L2Rpdj5cclxuXHJcbiAgICB7Y29uc29sZS5sb2cocHJvcHMpfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICAgIC5ib2FyZHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMCUgMTAlIDEwJSAxMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vbWVkaWEuaXN0b2NrcGhvdG8uY29tL3Bob3Rvcy9jaGFsa2JvYXJkLWJhY2stdG8tc2Nob29sLXRoZW1lLXBpY3R1cmUtaWQ0ODI5NjgxODg/Yj0xJms9MjAmbT00ODI5NjgxODgmcz0xNzA2NjdhJnc9MCZoPUJ5S1NEVW5uUk9yRnVJZzN3WUFQMkVFN2U4cExWZGk3Xzk5VFJTeklkeFU9KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6MTAwJTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGVudHtcclxuXHJcbiAgICAgICAgLypqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsqL1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1JSA1MCUgMzAlIDE1JTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQwcHggMjUwcHggNTVweDtcclxuICAgICAgICBnYXA6IDBweCAwcHg7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICBcIlRpdGxlIFRpdGxlIFRpdGxlIFRpdGxlXCJcclxuICAgICAgICBcIi4gUXVlc3Rpb24gQW5zd2VycyBCdXR0b25vc1wiXHJcbiAgICAgICAgXCIuIE51bWJlcnMgTnVtYmVycyAuXCI7XHJcbiAgICAgICAgaGVpZ2h0OjUwMHB4O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5UaXRsZSB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBUaXRsZTtcclxuICAgICAgICBjb2xvcjogYXF1YTt9XHJcblxyXG4gICAgICAgIC5CdXR0b25vcyB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBCdXR0b25vcztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcbiAgICAgICAgLkJ1dHRvbm9zIC5Db21tYW5kcyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjUlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgICAgIGNvbG9yOiBwYXBheWF3aGlwO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbi5OdW1iZXJzIHtcclxuXHJcbiAgICBncmlkLWFyZWE6IE51bWJlcnM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG5cclxuXHJcbn1cclxuXHJcbi5Ub3RhbHtcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG59XHJcblxyXG4uQW5zd2Vyc3tcclxuICAgIGdyaWQtYXJlYTogQW5zd2VycztcclxuICAgIGJhY2tncm91bmQ6IGhzbGEoMCwwJSwxMDAlLC4zKTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi5RdWVzdGlvbiB7XHJcbiAgICBncmlkLWFyZWE6IFF1ZXN0aW9uO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBvcGFjaXR5OiA5MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBoc2xhKDAsMCUsMTAwJSwuMyk7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgYH0gPC9zdHlsZT5cclxuXHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9hcmQiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\aledi\\\\OneDrive\\\\Documents\\\\Cursos\\\\Platzi Master\\\\P1 Sistema de evaluacion\\\\Nueva carpeta\\\\components\\\\board.js */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuYzQyMGIyNzkwZTQ4OWU4MDU3MmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQU9BLElBQU1DLEtBQUssR0FBRSxTQUFQQSxLQUFPLENBQUNDLEtBQUQ7QUFBQSxzQkFDVDtBQUFBO0FBQUEsNEJBQ0E7QUFBQSwwQ0FBZSxPQUFmO0FBQUEsNkJBRUE7QUFBQSw0Q0FBZSxTQUFmO0FBQUEsZ0NBQ0k7QUFBQSw4Q0FBZSxVQUFmO0FBQUEscUJBQ0NBLEtBQUssQ0FBQ0MsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsVUFBQ0MsUUFBRDtBQUFBLGdDQUFlO0FBQUE7QUFBQSx3QkFBTUEsUUFBUSxDQUFDQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWY7QUFBQSxXQUFwQixDQURELGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFRSTtBQUFBLDhDQUFlLFNBQWY7QUFBQSxvQkFDS0gsS0FBSyxDQUFDQyxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixVQUFDQyxRQUFEO0FBQUEsZ0NBQWU7QUFBQTtBQUFBLHFDQUFLO0FBQUE7QUFBQSwwQkFBU0EsUUFBUSxDQUFDQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBZjtBQUFBLFdBQXBCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSSixlQVdJO0FBQUEsOENBQWUsVUFBZjtBQUFBLGtDQUNJO0FBQUEsZ0RBQWtCLFVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBQSxnREFBa0IsVUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSTtBQUFBLGdEQUFrQixVQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISixlQUlJO0FBQUEsZ0RBQWtCLFVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYSixlQWlCSTtBQUFBLDhDQUFlLFNBQWY7QUFBQSxrQ0FDSTtBQUFBLGdEQUFrQixPQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUEsZ0RBQWtCLE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBR0k7QUFBQSxnREFBa0IsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEosZUFJSTtBQUFBLGdEQUFrQixPQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixlQUtJO0FBQUEsZ0RBQWtCLE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGVBK0JBO0FBQUEsMENBQWUsT0FBZjtBQUFBLGdCQUF3QkosS0FBSyxDQUFDSztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBL0JBLEVBaUNDQyxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsS0FBWixDQWpDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEUztBQUFBLENBQWI7O0tBQU1EO0FBMklOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYm9hcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9Fc3RvIGVzIGxvIG1pc21vIHF1ZSBMYXlvdXRcclxuaW1wb3J0IEFib3V0IGZyb20gXCIuLi9wYWdlcy9hYm91dFwiXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEJvYXJkID0ocHJvcHMpID0+IChcclxuICAgIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkXCI+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJRdWVzdGlvblwiPlxyXG4gICAgICAgIHtwcm9wcy5xdWVzdGlvbnMubWFwKChxdWVzdGlvbikgPT4gKDxkaXY+e3F1ZXN0aW9uLnF1ZXN0aW9ufVxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PikpfVxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgIEFjw6EgdmFuICBsYXMgcHJlZ3VudGFzIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBNaW5pbWEsIGhpYyBhbmltaSBxdWlkZW0gYXNzdW1lbmRhLD88L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQW5zd2Vyc1wiPlxyXG4gICAgICAgICAgICB7cHJvcHMucXVlc3Rpb25zLm1hcCgocXVlc3Rpb24pID0+ICg8ZGl2PjxidXR0b24+e3F1ZXN0aW9uLm9wdGlvbnN9PC9idXR0b24+PC9kaXY+KSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCdXR0b25vc1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkNvbW1hbmRzXCIgPkFudGVyaW9yIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkNvbW1hbmRzXCI+U2lndWllbnRlIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkNvbW1hbmRzXCI+RW52aWFyIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkNvbW1hbmRzXCI+VGVybWluYXIgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOdW1iZXJzXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiVG90YWxcIj4gMSA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJUb3RhbFwiPiAyIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIlRvdGFsXCI+IDMgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiVG90YWxcIj4gNCA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJUb3RhbFwiPiA1IDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcHNcIj57cHJvcHMucXVlc3Rpb25MaXN0fTwvZGl2PlxyXG5cclxuICAgIHtjb25zb2xlLmxvZyhwcm9wcyl9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICAgICAgLmJvYXJke1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwJSAxMCUgMTAlIDEwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9tZWRpYS5pc3RvY2twaG90by5jb20vcGhvdG9zL2NoYWxrYm9hcmQtYmFjay10by1zY2hvb2wtdGhlbWUtcGljdHVyZS1pZDQ4Mjk2ODE4OD9iPTEmaz0yMCZtPTQ4Mjk2ODE4OCZzPTE3MDY2N2Emdz0wJmg9QnlLU0RVbm5ST3JGdUlnM3dZQVAyRUU3ZThwTFZkaTdfOTlUUlN6SWR4VT0pO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZToxMDAlO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250ZW50e1xyXG5cclxuICAgICAgICAvKmp1c3RpZnktY29udGVudDogY2VudGVyOyovXHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUlIDUwJSAzMCUgMTUlO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDBweCAyNTBweCA1NXB4O1xyXG4gICAgICAgIGdhcDogMHB4IDBweDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgIFwiVGl0bGUgVGl0bGUgVGl0bGUgVGl0bGVcIlxyXG4gICAgICAgIFwiLiBRdWVzdGlvbiBBbnN3ZXJzIEJ1dHRvbm9zXCJcclxuICAgICAgICBcIi4gTnVtYmVycyBOdW1iZXJzIC5cIjtcclxuICAgICAgICBoZWlnaHQ6NTAwcHg7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLlRpdGxlIHtcclxuICAgICAgICBncmlkLWFyZWE6IFRpdGxlO1xyXG4gICAgICAgIGNvbG9yOiBhcXVhO31cclxuXHJcbiAgICAgICAgLkJ1dHRvbm9zIHtcclxuICAgICAgICBncmlkLWFyZWE6IEJ1dHRvbm9zO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuICAgICAgICAuQnV0dG9ub3MgLkNvbW1hbmRzIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNSU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICAgICAgY29sb3I6IHBhcGF5YXdoaXA7XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuLk51bWJlcnMge1xyXG5cclxuICAgIGdyaWQtYXJlYTogTnVtYmVycztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDIwcHg7XHJcblxyXG5cclxufVxyXG5cclxuLlRvdGFse1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5BbnN3ZXJze1xyXG4gICAgZ3JpZC1hcmVhOiBBbnN3ZXJzO1xyXG4gICAgYmFja2dyb3VuZDogaHNsYSgwLDAlLDEwMCUsLjMpO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLlF1ZXN0aW9uIHtcclxuICAgIGdyaWQtYXJlYTogUXVlc3Rpb247XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIG9wYWNpdHk6IDkwJTtcclxuICAgIGJhY2tncm91bmQ6IGhzbGEoMCwwJSwxMDAlLC4zKTtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICBgfSA8L3N0eWxlPlxyXG5cclxuICAgIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZCJdLCJuYW1lcyI6WyJBYm91dCIsIkJvYXJkIiwicHJvcHMiLCJxdWVzdGlvbnMiLCJtYXAiLCJxdWVzdGlvbiIsIm9wdGlvbnMiLCJxdWVzdGlvbkxpc3QiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==