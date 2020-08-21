webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/Tiles/Tiles.js":
/*!***************************************!*\
  !*** ./src/components/Tiles/Tiles.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LeftNav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\digit\\Desktop\\interview-test\\interview-test\\src\\components\\Tiles\\Tiles.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function LeftNav(_ref) {
  var _this = this;

  var data = _ref.data;
  return __jsx("div", {
    className: "row card-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, data && data.map(function (item, index) {
    var _item$links, _item$launch_success, _item$launch_success$, _item$launch_success$2, _item$launch_success$3;

    return __jsx("div", {
      key: index,
      className: "col-12 col-sm-8 col-md-6 col-lg-3 d-flex card-mob align-items-stretch",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "cards",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "card-image-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: item === null || item === void 0 ? void 0 : (_item$links = item.links) === null || _item$links === void 0 ? void 0 : _item$links.mission_patch_small,
      alt: item.mission_name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "card-title h5",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, item.mission_name), __jsx("ul", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: "mission-id card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 19
      }
    }, "List Mission Ids: "), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 19
      }
    }, __jsx("p", {
      className: "mission-id card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }
    }, item.mission_id))), __jsx("p", {
      className: "mission-id card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }, "Launch Year: ", item.launch_year), __jsx("p", {
      className: "mission-id card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }, "Successful Launch: ", item.launch_success ? 'True' : 'Flase'), __jsx("p", {
      className: "mission-id card-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }
    }, "Successful Landing:", ((_item$launch_success = item.launch_success) === null || _item$launch_success === void 0 ? void 0 : (_item$launch_success$ = _item$launch_success.rocket) === null || _item$launch_success$ === void 0 ? void 0 : (_item$launch_success$2 = _item$launch_success$.first_stage) === null || _item$launch_success$2 === void 0 ? void 0 : (_item$launch_success$3 = _item$launch_success$2.cores[0]) === null || _item$launch_success$3 === void 0 ? void 0 : _item$launch_success$3.land_success) ? 'True' : 'False'))));
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.0c90bbc3f4a34266dc9c.hot-update.js.map