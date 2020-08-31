(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-text-rotated-text-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/text/rotated-text/page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/text/rotated-text/page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<common-header>D3.js with Ionic</common-header>\n</ion-header>\n\n<ion-content>\n\t<div id=\"playground\"></div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/text/rotated-text/module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/text/rotated-text/module.ts ***!
  \***************************************************/
/*! exports provided: RotatedTextPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotatedTextPageModule", function() { return RotatedTextPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page */ "./src/app/pages/text/rotated-text/page.ts");
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/components.module */ "./src/app/shared/components/components.module.ts");








let RotatedTextPageModule = class RotatedTextPageModule {
};
RotatedTextPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{ path: '', component: _page__WEBPACK_IMPORTED_MODULE_6__["RotatedTextPage"] }]),
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        declarations: [_page__WEBPACK_IMPORTED_MODULE_6__["RotatedTextPage"]]
    })
], RotatedTextPageModule);



/***/ }),

/***/ "./src/app/pages/text/rotated-text/page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/text/rotated-text/page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font: 12px Arial;\n}\n\npath {\n  stroke: steelblue;\n  stroke-width: 2;\n  fill: none;\n}\n\n.axis path,\n.axis line {\n  fill: none;\n  stroke: grey;\n  stroke-width: 1;\n  shape-rendering: crispEdges;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TaGFyZWQvQ0xPVUQvRGV2ZWxvcG1lbnQuR2l0SHViL1JlcG9zaXRvcmllcy5Gcm9tR2l0aHViL3JlcG9zaXRvcmllcy9pb25pYy10b29sYm94L1dvcmtpbmctd2l0aF9EMy5qcy9zcmMvYXBwL3BhZ2VzL3RleHQvcm90YXRlZC10ZXh0L3BhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGV4dC9yb3RhdGVkLXRleHQvcGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNDRDs7QURFQTs7RUFFQyxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGV4dC9yb3RhdGVkLXRleHQvcGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG5cdGZvbnQ6IDEycHggQXJpYWw7XG59XG5cbnBhdGgge1xuXHRzdHJva2U6IHN0ZWVsYmx1ZTtcblx0c3Ryb2tlLXdpZHRoOiAyO1xuXHRmaWxsOiBub25lO1xufVxuXG4uYXhpcyBwYXRoLFxuLmF4aXMgbGluZSB7XG5cdGZpbGw6IG5vbmU7XG5cdHN0cm9rZTogZ3JleTtcblx0c3Ryb2tlLXdpZHRoOiAxO1xuXHRzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7XG59XG4iLCJib2R5IHtcbiAgZm9udDogMTJweCBBcmlhbDtcbn1cblxucGF0aCB7XG4gIHN0cm9rZTogc3RlZWxibHVlO1xuICBzdHJva2Utd2lkdGg6IDI7XG4gIGZpbGw6IG5vbmU7XG59XG5cbi5heGlzIHBhdGgsXG4uYXhpcyBsaW5lIHtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlOiBncmV5O1xuICBzdHJva2Utd2lkdGg6IDE7XG4gIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlcztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/text/rotated-text/page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/text/rotated-text/page.ts ***!
  \*************************************************/
/*! exports provided: RotatedTextPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotatedTextPage", function() { return RotatedTextPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/toolbox.service */ "./src/app/shared/helpers/toolbox.service.ts");




let RotatedTextPage = class RotatedTextPage {
    constructor() {
        this.ID = 'BasicShapesPage';
        this.toolbox = new src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_3__["Toolbox"](this.ID);
        this.toolbox.log('constructor');
    }
    ngOnInit() {
        this.toolbox.log('ngOnInit');
        this.demo();
    }
    demo() {
        const margin = { top: 30, right: 20, bottom: 70, left: 50 };
        const width = 600 - margin.left - margin.right;
        const height = 270 - margin.top - margin.bottom;
        const svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"]('#playground')
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
        d3__WEBPACK_IMPORTED_MODULE_2__["csv"]('/assets/data/date_value.csv', (item) => {
            return { date: d3__WEBPACK_IMPORTED_MODULE_2__["timeParse"]('%Y-%m-%d')(item.date), value: item.value };
        }, (data) => {
            // Add X axis --> it is a date format
            const x = d3__WEBPACK_IMPORTED_MODULE_2__["scaleTime"]()
                .domain(d3__WEBPACK_IMPORTED_MODULE_2__["extent"](data, (d) => d.date))
                .range([0, width]);
            svg.append('g')
                .attr('transform', 'translate(0,' + height + ')')
                .call(d3__WEBPACK_IMPORTED_MODULE_2__["axisBottom"](x));
            // Add Y axis
            const y = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]()
                .domain([0, d3__WEBPACK_IMPORTED_MODULE_2__["max"](data, (d) => +d.value)])
                .range([height, 0]);
            svg.append('g')
                .call(d3__WEBPACK_IMPORTED_MODULE_2__["axisLeft"](y));
            // Add the line
            svg.append('path')
                .datum(data)
                .attr('fill', 'none')
                .attr('stroke', 'steelblue')
                .attr('stroke-width', 1.5)
                .attr('d', d3__WEBPACK_IMPORTED_MODULE_2__["line"]()
                .x((d) => x(d.date))
                .y((d) => y(d.value)));
        });
    }
};
RotatedTextPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-rotated-text',
        template: __webpack_require__(/*! raw-loader!./page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/text/rotated-text/page.html"),
        styles: [__webpack_require__(/*! ./page.scss */ "./src/app/pages/text/rotated-text/page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RotatedTextPage);



/***/ })

}]);
//# sourceMappingURL=pages-text-rotated-text-module-es2015.js.map