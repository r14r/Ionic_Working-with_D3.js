(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chart-pie-basic-pages-module"],{

/***/ "./node_modules/d3-dsv/src/autoType.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-dsv/src/autoType.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return autoType; });
function autoType(object) {
  for (var key in object) {
    var value = object[key].trim(), number, m;
    if (!value) value = null;
    else if (value === "true") value = true;
    else if (value === "false") value = false;
    else if (value === "NaN") value = NaN;
    else if (!isNaN(number = +value)) value = number;
    else if (m = value.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/)) {
      if (fixtz && !!m[4] && !m[7]) value = value.replace(/-/g, "/").replace(/T/, " ");
      value = new Date(value);
    }
    else continue;
    object[key] = value;
  }
  return object;
}

// https://github.com/d3/d3-dsv/issues/45
var fixtz = new Date("2019-01-01T00:00").getHours() || new Date("2019-07-01T00:00").getHours();

/***/ }),

/***/ "./node_modules/d3-dsv/src/csv.js":
/*!****************************************!*\
  !*** ./node_modules/d3-dsv/src/csv.js ***!
  \****************************************/
/*! exports provided: csvParse, csvParseRows, csvFormat, csvFormatBody, csvFormatRows, csvFormatRow, csvFormatValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csvParse", function() { return csvParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csvParseRows", function() { return csvParseRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csvFormat", function() { return csvFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csvFormatBody", function() { return csvFormatBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csvFormatRows", function() { return csvFormatRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csvFormatRow", function() { return csvFormatRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csvFormatValue", function() { return csvFormatValue; });
/* harmony import */ var _dsv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dsv.js */ "./node_modules/d3-dsv/src/dsv.js");


var csv = Object(_dsv_js__WEBPACK_IMPORTED_MODULE_0__["default"])(",");

var csvParse = csv.parse;
var csvParseRows = csv.parseRows;
var csvFormat = csv.format;
var csvFormatBody = csv.formatBody;
var csvFormatRows = csv.formatRows;
var csvFormatRow = csv.formatRow;
var csvFormatValue = csv.formatValue;


/***/ }),

/***/ "./node_modules/d3-dsv/src/dsv.js":
/*!****************************************!*\
  !*** ./node_modules/d3-dsv/src/dsv.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var EOL = {},
    EOF = {},
    QUOTE = 34,
    NEWLINE = 10,
    RETURN = 13;

function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function(name, i) {
    return JSON.stringify(name) + ": d[" + i + "] || \"\"";
  }).join(",") + "}");
}

function customConverter(columns, f) {
  var object = objectConverter(columns);
  return function(row, i) {
    return f(object(row), i, columns);
  };
}

// Compute unique columns in order of discovery.
function inferColumns(rows) {
  var columnSet = Object.create(null),
      columns = [];

  rows.forEach(function(row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });

  return columns;
}

function pad(value, width) {
  var s = value + "", length = s.length;
  return length < width ? new Array(width - length + 1).join(0) + s : s;
}

function formatYear(year) {
  return year < 0 ? "-" + pad(-year, 6)
    : year > 9999 ? "+" + pad(year, 6)
    : pad(year, 4);
}

function formatDate(date) {
  var hours = date.getUTCHours(),
      minutes = date.getUTCMinutes(),
      seconds = date.getUTCSeconds(),
      milliseconds = date.getUTCMilliseconds();
  return isNaN(date) ? "Invalid Date"
      : formatYear(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1, 2) + "-" + pad(date.getUTCDate(), 2)
      + (milliseconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "." + pad(milliseconds, 3) + "Z"
      : seconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "Z"
      : minutes || hours ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + "Z"
      : "");
}

/* harmony default export */ __webpack_exports__["default"] = (function(delimiter) {
  var reFormat = new RegExp("[\"" + delimiter + "\n\r]"),
      DELIMITER = delimiter.charCodeAt(0);

  function parse(text, f) {
    var convert, columns, rows = parseRows(text, function(row, i) {
      if (convert) return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns || [];
    return rows;
  }

  function parseRows(text, f) {
    var rows = [], // output rows
        N = text.length,
        I = 0, // current character index
        n = 0, // current line number
        t, // current token
        eof = N <= 0, // current token followed by EOF?
        eol = false; // current token followed by EOL?

    // Strip the trailing newline.
    if (text.charCodeAt(N - 1) === NEWLINE) --N;
    if (text.charCodeAt(N - 1) === RETURN) --N;

    function token() {
      if (eof) return EOF;
      if (eol) return eol = false, EOL;

      // Unescape quotes.
      var i, j = I, c;
      if (text.charCodeAt(j) === QUOTE) {
        while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE);
        if ((i = I) >= N) eof = true;
        else if ((c = text.charCodeAt(I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        return text.slice(j + 1, i - 1).replace(/""/g, "\"");
      }

      // Find next delimiter or newline.
      while (I < N) {
        if ((c = text.charCodeAt(i = I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        else if (c !== DELIMITER) continue;
        return text.slice(j, i);
      }

      // Return last token before EOF.
      return eof = true, text.slice(j, N);
    }

    while ((t = token()) !== EOF) {
      var row = [];
      while (t !== EOL && t !== EOF) row.push(t), t = token();
      if (f && (row = f(row, n++)) == null) continue;
      rows.push(row);
    }

    return rows;
  }

  function preformatBody(rows, columns) {
    return rows.map(function(row) {
      return columns.map(function(column) {
        return formatValue(row[column]);
      }).join(delimiter);
    });
  }

  function format(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(preformatBody(rows, columns)).join("\n");
  }

  function formatBody(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return preformatBody(rows, columns).join("\n");
  }

  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }

  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }

  function formatValue(value) {
    return value == null ? ""
        : value instanceof Date ? formatDate(value)
        : reFormat.test(value += "") ? "\"" + value.replace(/"/g, "\"\"") + "\""
        : value;
  }

  return {
    parse: parse,
    parseRows: parseRows,
    format: format,
    formatBody: formatBody,
    formatRows: formatRows,
    formatRow: formatRow,
    formatValue: formatValue
  };
});


/***/ }),

/***/ "./node_modules/d3-dsv/src/index.js":
/*!******************************************!*\
  !*** ./node_modules/d3-dsv/src/index.js ***!
  \******************************************/
/*! exports provided: dsvFormat, csvParse, csvParseRows, csvFormat, csvFormatBody, csvFormatRows, csvFormatRow, csvFormatValue, tsvParse, tsvParseRows, tsvFormat, tsvFormatBody, tsvFormatRows, tsvFormatRow, tsvFormatValue, autoType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dsv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dsv.js */ "./node_modules/d3-dsv/src/dsv.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dsvFormat", function() { return _dsv_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _csv_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./csv.js */ "./node_modules/d3-dsv/src/csv.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csvParse", function() { return _csv_js__WEBPACK_IMPORTED_MODULE_1__["csvParse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csvParseRows", function() { return _csv_js__WEBPACK_IMPORTED_MODULE_1__["csvParseRows"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csvFormat", function() { return _csv_js__WEBPACK_IMPORTED_MODULE_1__["csvFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csvFormatBody", function() { return _csv_js__WEBPACK_IMPORTED_MODULE_1__["csvFormatBody"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csvFormatRows", function() { return _csv_js__WEBPACK_IMPORTED_MODULE_1__["csvFormatRows"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csvFormatRow", function() { return _csv_js__WEBPACK_IMPORTED_MODULE_1__["csvFormatRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csvFormatValue", function() { return _csv_js__WEBPACK_IMPORTED_MODULE_1__["csvFormatValue"]; });

/* harmony import */ var _tsv_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tsv.js */ "./node_modules/d3-dsv/src/tsv.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tsvParse", function() { return _tsv_js__WEBPACK_IMPORTED_MODULE_2__["tsvParse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tsvParseRows", function() { return _tsv_js__WEBPACK_IMPORTED_MODULE_2__["tsvParseRows"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tsvFormat", function() { return _tsv_js__WEBPACK_IMPORTED_MODULE_2__["tsvFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tsvFormatBody", function() { return _tsv_js__WEBPACK_IMPORTED_MODULE_2__["tsvFormatBody"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tsvFormatRows", function() { return _tsv_js__WEBPACK_IMPORTED_MODULE_2__["tsvFormatRows"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tsvFormatRow", function() { return _tsv_js__WEBPACK_IMPORTED_MODULE_2__["tsvFormatRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tsvFormatValue", function() { return _tsv_js__WEBPACK_IMPORTED_MODULE_2__["tsvFormatValue"]; });

/* harmony import */ var _autoType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autoType.js */ "./node_modules/d3-dsv/src/autoType.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "autoType", function() { return _autoType_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "./node_modules/d3-dsv/src/tsv.js":
/*!****************************************!*\
  !*** ./node_modules/d3-dsv/src/tsv.js ***!
  \****************************************/
/*! exports provided: tsvParse, tsvParseRows, tsvFormat, tsvFormatBody, tsvFormatRows, tsvFormatRow, tsvFormatValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsvParse", function() { return tsvParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsvParseRows", function() { return tsvParseRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsvFormat", function() { return tsvFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsvFormatBody", function() { return tsvFormatBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsvFormatRows", function() { return tsvFormatRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsvFormatRow", function() { return tsvFormatRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tsvFormatValue", function() { return tsvFormatValue; });
/* harmony import */ var _dsv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dsv.js */ "./node_modules/d3-dsv/src/dsv.js");


var tsv = Object(_dsv_js__WEBPACK_IMPORTED_MODULE_0__["default"])("\t");

var tsvParse = tsv.parse;
var tsvParseRows = tsv.parseRows;
var tsvFormat = tsv.format;
var tsvFormatBody = tsv.formatBody;
var tsvFormatRows = tsv.formatRows;
var tsvFormatRow = tsv.formatRow;
var tsvFormatValue = tsv.formatValue;


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/chart-pie/basic/pages/page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/chart-pie/basic/pages/page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<common-header>D3.js with Ionic</common-header>\n</ion-header>\n\n<ion-content>\n\t<div class=\"bar-chart-box ion-padding-horizontal ion-padding-bottom\">\n\t\t<div id=\"playground\" class=\"bar-chart\"></div>\n\t</div>\n\n\t<h2>Pie Charts</h2>\n\t<div id=\"pieChart\"></div>\n\t<h5 class=\"text-center\">Election Result of India 2019</h5>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/chart-pie/basic/pages/module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/chart-pie/basic/pages/module.ts ***!
  \*******************************************************/
/*! exports provided: PieChartBasicPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartBasicPageModule", function() { return PieChartBasicPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/components.module */ "./src/app/shared/components/components.module.ts");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page */ "./src/app/pages/chart-pie/basic/pages/page.ts");








let PieChartBasicPageModule = class PieChartBasicPageModule {
};
PieChartBasicPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{ path: '', component: _page__WEBPACK_IMPORTED_MODULE_7__["PieChartBasicPage"] }]),
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        declarations: [_page__WEBPACK_IMPORTED_MODULE_7__["PieChartBasicPage"]]
    })
], PieChartBasicPageModule);



/***/ }),

/***/ "./src/app/pages/chart-pie/basic/pages/page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/chart-pie/basic/pages/page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Xbar-chart-box {\n  background-color: purple;\n}\n\n.Xbar-chart {\n  background-color: orange;\n}\n\ntext {\n  font-size: 16px;\n  font-family: Open Sans, sans-serif;\n}\n\ntext.title {\n  font-size: 24px;\n  font-weight: 500;\n}\n\ntext.subTitle {\n  font-weight: 500;\n  fill: #777777;\n}\n\ntext.caption {\n  font-weight: 400;\n  font-size: 14px;\n  fill: #777777;\n}\n\ntext.label {\n  font-weight: 600;\n}\n\ntext.yearText {\n  font-size: 64px;\n  font-weight: 700;\n  opacity: 0.25;\n}\n\n.tick text {\n  fill: #777777;\n}\n\n.xAxis .tick:nth-child(2) text {\n  text-anchor: start;\n}\n\n.tick line {\n  shape-rendering: CrispEdges;\n  stroke: #dddddd;\n}\n\n.tick line.origin {\n  stroke: #aaaaaa;\n}\n\npath.domain {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TaGFyZWQvQ0xPVUQvRGV2ZWxvcG1lbnQuR2l0SHViL1JlcG9zaXRvcmllcy5Gcm9tR2l0aHViL3JlcG9zaXRvcmllcy9pb25pYy10b29sYm94L1dvcmtpbmctd2l0aF9EMy5qcy9zcmMvYXBwL3BhZ2VzL2NoYXJ0LXBpZS9iYXNpYy9wYWdlcy9wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYXJ0LXBpZS9iYXNpYy9wYWdlcy9wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx3QkFBQTtBQ0NEOztBRENBO0VBQ0Msd0JBQUE7QUNFRDs7QURDQTtFQUNDLGVBQUE7RUFDQSxrQ0FBQTtBQ0VEOztBREFBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0FDR0Q7O0FEREE7RUFDQyxnQkFBQTtFQUNBLGFBQUE7QUNJRDs7QURGQTtFQUNDLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNLRDs7QURIQTtFQUNDLGdCQUFBO0FDTUQ7O0FESkE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDT0Q7O0FETEE7RUFDQyxhQUFBO0FDUUQ7O0FETkE7RUFDQyxrQkFBQTtBQ1NEOztBRFBBO0VBQ0MsMkJBQUE7RUFDQSxlQUFBO0FDVUQ7O0FEUkE7RUFDQyxlQUFBO0FDV0Q7O0FEVEE7RUFDQyxhQUFBO0FDWUQiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGFydC1waWUvYmFzaWMvcGFnZXMvcGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlhiYXItY2hhcnQtYm94IHtcblx0YmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xufVxuLlhiYXItY2hhcnQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG59XG5cbnRleHQge1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIHNhbnMtc2VyaWY7XG59XG50ZXh0LnRpdGxlIHtcblx0Zm9udC1zaXplOiAyNHB4O1xuXHRmb250LXdlaWdodDogNTAwO1xufVxudGV4dC5zdWJUaXRsZSB7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGZpbGw6ICM3Nzc3Nzc7XG59XG50ZXh0LmNhcHRpb24ge1xuXHRmb250LXdlaWdodDogNDAwO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGZpbGw6ICM3Nzc3Nzc7XG59XG50ZXh0LmxhYmVsIHtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcbn1cbnRleHQueWVhclRleHQge1xuXHRmb250LXNpemU6IDY0cHg7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdG9wYWNpdHk6IDAuMjU7XG59XG4udGljayB0ZXh0IHtcblx0ZmlsbDogIzc3Nzc3Nztcbn1cbi54QXhpcyAudGljazpudGgtY2hpbGQoMikgdGV4dCB7XG5cdHRleHQtYW5jaG9yOiBzdGFydDtcbn1cbi50aWNrIGxpbmUge1xuXHRzaGFwZS1yZW5kZXJpbmc6IENyaXNwRWRnZXM7XG5cdHN0cm9rZTogI2RkZGRkZDtcbn1cbi50aWNrIGxpbmUub3JpZ2luIHtcblx0c3Ryb2tlOiAjYWFhYWFhO1xufVxucGF0aC5kb21haW4ge1xuXHRkaXNwbGF5OiBub25lO1xufVxuIiwiLlhiYXItY2hhcnQtYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xufVxuXG4uWGJhci1jaGFydCB7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcbn1cblxudGV4dC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxudGV4dC5zdWJUaXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZpbGw6ICM3Nzc3Nzc7XG59XG5cbnRleHQuY2FwdGlvbiB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZmlsbDogIzc3Nzc3Nztcbn1cblxudGV4dC5sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbnRleHQueWVhclRleHQge1xuICBmb250LXNpemU6IDY0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG9wYWNpdHk6IDAuMjU7XG59XG5cbi50aWNrIHRleHQge1xuICBmaWxsOiAjNzc3Nzc3O1xufVxuXG4ueEF4aXMgLnRpY2s6bnRoLWNoaWxkKDIpIHRleHQge1xuICB0ZXh0LWFuY2hvcjogc3RhcnQ7XG59XG5cbi50aWNrIGxpbmUge1xuICBzaGFwZS1yZW5kZXJpbmc6IENyaXNwRWRnZXM7XG4gIHN0cm9rZTogI2RkZGRkZDtcbn1cblxuLnRpY2sgbGluZS5vcmlnaW4ge1xuICBzdHJva2U6ICNhYWFhYWE7XG59XG5cbnBhdGguZG9tYWluIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/chart-pie/basic/pages/page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/chart-pie/basic/pages/page.ts ***!
  \*****************************************************/
/*! exports provided: DataModel, PieChartBasicPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataModel", function() { return DataModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartBasicPage", function() { return PieChartBasicPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/* harmony import */ var d3_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-fetch */ "./node_modules/d3-fetch/src/index.js");
/* harmony import */ var src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/helpers/toolbox.service */ "./src/app/shared/helpers/toolbox.service.ts");
/* harmony import */ var src_app_pages_chart_bar_basic_data_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pages/chart-bar/basic/data/data */ "./src/app/pages/chart-bar/basic/data/data.ts");
/*
 https://observablehq.com/d/bef0441bd98d59a7
*/









class DataModel {
}
let PieChartBasicPage = class PieChartBasicPage {
    constructor(http) {
        this.http = http;
        this.ID = 'PieChartBasicPage';
        this.toolbox = new src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_7__["Toolbox"](this.ID);
        this.title = 'D3 Barchart with Ionic 4';
        this.margin = { top: 20, right: 20, bottom: 30, left: 50 };
        //
        //
        this.brandData = [];
        this.toolbox.log('constructor');
        this.width = 900 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
        this.radius = Math.min(this.width, this.height) / 2;
    }
    ngOnInit() {
        this.toolbox.log('ngOnInit');
        this.initSvg();
        this.drawPie();
        this.getChartData().then((data) => {
            this.brandData = data;
            this.createChart();
        });
    }
    ngOnDestroy() {
    }
    getChartData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.toolbox.log('initChartData');
            const ROOT = '/assets';
            const GIST = 'data';
            const FILE = 'brands.csv';
            const URL = ROOT + '/' + GIST + '/' + FILE;
            return d3_fetch__WEBPACK_IMPORTED_MODULE_6__["csv"](URL);
        });
    }
    createChart() { }
    initSvg() {
        this.color = d3_scale__WEBPACK_IMPORTED_MODULE_4__["scaleOrdinal"]()
            .range(['#FFA500', '#00FF00', '#FF0000', '#6b486b', '#FF00FF', '#d0743c', '#00FA9A']);
        this.arc = d3_shape__WEBPACK_IMPORTED_MODULE_5__["arc"]()
            .outerRadius(this.radius - 10)
            .innerRadius(0);
        this.labelArc = d3_shape__WEBPACK_IMPORTED_MODULE_5__["arc"]()
            .outerRadius(this.radius - 40)
            .innerRadius(this.radius - 40);
        this.labelPer = d3_shape__WEBPACK_IMPORTED_MODULE_5__["arc"]()
            .outerRadius(this.radius - 80)
            .innerRadius(this.radius - 80);
        this.pie = d3_shape__WEBPACK_IMPORTED_MODULE_5__["pie"]()
            .sort(null)
            .value((d) => d.electionP);
        this.svg = d3_selection__WEBPACK_IMPORTED_MODULE_3__["select"]('#pieChart')
            .append('svg')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('viewBox', '0 0 ' + Math.min(this.width, this.height) + ' ' + Math.min(this.width, this.height))
            .append('g')
            .attr('transform', 'translate(' + Math.min(this.width, this.height) / 2 + ',' + Math.min(this.width, this.height) / 2 + ')');
    }
    drawPie() {
        const g = this.svg.selectAll('.arc')
            .data(this.pie(src_app_pages_chart_bar_basic_data_data__WEBPACK_IMPORTED_MODULE_8__["StatsPieChart"]))
            .enter().append('g')
            .attr('class', 'arc');
        g.append('path').attr('d', this.arc)
            .style('fill', (d) => this.color(d.data.party));
        g.append('text').attr('transform', (d) => 'translate(' + this.labelArc.centroid(d) + ')')
            .attr('dy', '.35em')
            .text((d) => d.data.party);
        g.append('text').attr('transform', (d) => 'translate(' + this.labelPer.centroid(d) + ')')
            .attr('dy', '.35em')
            .text((d) => d.data.electionP + '%');
    }
};
PieChartBasicPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PieChartBasicPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-basic-shapes',
        template: __webpack_require__(/*! raw-loader!./page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/chart-pie/basic/pages/page.html"),
        styles: [__webpack_require__(/*! ./page.scss */ "./src/app/pages/chart-pie/basic/pages/page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], PieChartBasicPage);



/***/ })

}]);
//# sourceMappingURL=pages-chart-pie-basic-pages-module-es2015.js.map