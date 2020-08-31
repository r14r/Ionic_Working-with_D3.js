(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-interactivity-tooltips_simple-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/interactivity/tooltips_simple/page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/interactivity/tooltips_simple/page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<common-header>D3.js with Ionic</common-header>\n</ion-header>\n\n<ion-content>\n\t<div id=\"playground\"></div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/interactivity/tooltips_simple/module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/interactivity/tooltips_simple/module.ts ***!
  \***************************************************************/
/*! exports provided: TooltipsSimplePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipsSimplePageModule", function() { return TooltipsSimplePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page */ "./src/app/pages/interactivity/tooltips_simple/page.ts");
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/components.module */ "./src/app/shared/components/components.module.ts");








var TooltipsSimplePageModule = /** @class */ (function () {
    function TooltipsSimplePageModule() {
    }
    TooltipsSimplePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{ path: '', component: _page__WEBPACK_IMPORTED_MODULE_6__["TooltipsSimplePage"] }]),
                src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_page__WEBPACK_IMPORTED_MODULE_6__["TooltipsSimplePage"]]
        })
    ], TooltipsSimplePageModule);
    return TooltipsSimplePageModule;
}());



/***/ }),

/***/ "./src/app/pages/interactivity/tooltips_simple/page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/interactivity/tooltips_simple/page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font: 12px Arial;\n}\n\npath {\n  stroke: steelblue;\n  stroke-width: 2;\n  fill: none;\n}\n\n.axis path,\n.axis line {\n  fill: none;\n  stroke: grey;\n  stroke-width: 1;\n  shape-rendering: crispEdges;\n}\n\ndiv.tooltip {\n  position: absolute;\n  text-align: center;\n  width: 60px;\n  height: 28px;\n  padding: 2px;\n  font: 12px sans-serif;\n  background: lightsteelblue;\n  border: 0px;\n  border-radius: 8px;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TaGFyZWQvQ0xPVUQvRGV2ZWxvcG1lbnQuR2l0SHViL1JlcG9zaXRvcmllcy5Gcm9tR2l0aHViL3JlcG9zaXRvcmllcy9pb25pYy10b29sYm94L1dvcmtpbmctd2l0aF9EMy5qcy9zcmMvYXBwL3BhZ2VzL2ludGVyYWN0aXZpdHkvdG9vbHRpcHNfc2ltcGxlL3BhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW50ZXJhY3Rpdml0eS90b29sdGlwc19zaW1wbGUvcGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNDRDs7QURFQTs7RUFFQyxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQ0NEOztBREVBO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW50ZXJhY3Rpdml0eS90b29sdGlwc19zaW1wbGUvcGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG5cdGZvbnQ6IDEycHggQXJpYWw7XG59XG5cbnBhdGgge1xuXHRzdHJva2U6IHN0ZWVsYmx1ZTtcblx0c3Ryb2tlLXdpZHRoOiAyO1xuXHRmaWxsOiBub25lO1xufVxuXG4uYXhpcyBwYXRoLFxuLmF4aXMgbGluZSB7XG5cdGZpbGw6IG5vbmU7XG5cdHN0cm9rZTogZ3JleTtcblx0c3Ryb2tlLXdpZHRoOiAxO1xuXHRzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7XG59XG5cbmRpdi50b29sdGlwIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHdpZHRoOiA2MHB4O1xuXHRoZWlnaHQ6IDI4cHg7XG5cdHBhZGRpbmc6IDJweDtcblx0Zm9udDogMTJweCBzYW5zLXNlcmlmO1xuXHRiYWNrZ3JvdW5kOiBsaWdodHN0ZWVsYmx1ZTtcblx0Ym9yZGVyOiAwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDhweDtcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4iLCJib2R5IHtcbiAgZm9udDogMTJweCBBcmlhbDtcbn1cblxucGF0aCB7XG4gIHN0cm9rZTogc3RlZWxibHVlO1xuICBzdHJva2Utd2lkdGg6IDI7XG4gIGZpbGw6IG5vbmU7XG59XG5cbi5heGlzIHBhdGgsXG4uYXhpcyBsaW5lIHtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlOiBncmV5O1xuICBzdHJva2Utd2lkdGg6IDE7XG4gIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlcztcbn1cblxuZGl2LnRvb2x0aXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMjhweDtcbiAgcGFkZGluZzogMnB4O1xuICBmb250OiAxMnB4IHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQ6IGxpZ2h0c3RlZWxibHVlO1xuICBib3JkZXI6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/interactivity/tooltips_simple/page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/interactivity/tooltips_simple/page.ts ***!
  \*************************************************************/
/*! exports provided: TooltipsSimplePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipsSimplePage", function() { return TooltipsSimplePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-axis */ "./node_modules/d3-axis/index.js");
/* harmony import */ var src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/helpers/toolbox.service */ "./src/app/shared/helpers/toolbox.service.ts");






var TooltipsSimplePage = /** @class */ (function () {
    function TooltipsSimplePage() {
        this.ID = 'TooltipsPage';
        this.toolbox = new src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_5__["Toolbox"](this.ID);
        this.toolbox.log('constructor');
    }
    TooltipsSimplePage.prototype.ngOnDestroy = function () { this.toolbox.log('ngOnDestroy'); };
    TooltipsSimplePage.prototype.ngOnInit = function () {
        this.toolbox.log('ngOnInit');
        this.demo();
    };
    TooltipsSimplePage.prototype.demo = function () {
        var _this = this;
        this.toolbox.log('demo');
        var margin = { top: 30, right: 20, bottom: 30, left: 50 };
        var width = 600 - margin.left - margin.right;
        var height = 270 - margin.top - margin.bottom;
        // Adds the svg canvas
        var svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"]('#playground')
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
        // Define the axes
        var x = d3_scale__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"]().domain([0, 100]).range([0, width]);
        var y = d3_scale__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"]().domain([0, 100]).range([height, 0]);
        var xAxis = d3_axis__WEBPACK_IMPORTED_MODULE_4__["axisBottom"](x).tickFormat(d3__WEBPACK_IMPORTED_MODULE_2__["timeFormat"]('%m/%d'));
        var yAxis = d3_axis__WEBPACK_IMPORTED_MODULE_4__["axisLeft"](y).ticks(10);
        // Define the line
        var valueline = d3__WEBPACK_IMPORTED_MODULE_2__["line"]()
            .x(function (d) { return x(d.date); })
            .y(function (d) { return y(d.value); });
        // Define the div for the tooltip
        var div = d3__WEBPACK_IMPORTED_MODULE_2__["select"]('body')
            .append('div')
            .attr('class', 'tooltip')
            .style('opacity', 0);
        // Parse the date / time
        var parseDate = d3__WEBPACK_IMPORTED_MODULE_2__["timeParse"]('%Y-%m-%d');
        var printTime = d3__WEBPACK_IMPORTED_MODULE_2__["timeFormat"]('%e %B');
        // Get the data
        d3__WEBPACK_IMPORTED_MODULE_2__["csv"]('/assets/data/date_value_2.csv', function (error, data) {
            data.forEach(function (d) {
                d.date = parseDate(d.date);
                d.value = +d.value;
            });
            console.table(data.slice(0, 10));
            _this.toolbox.log('Scale the range of the data');
            x.domain(d3__WEBPACK_IMPORTED_MODULE_2__["extent"](data, function (d) { return d.date; }));
            y.domain([0, d3__WEBPACK_IMPORTED_MODULE_2__["max"](data, function (d) { return d.value; })]);
            _this.toolbox.log('Add the X Axis');
            svg.append('g')
                .attr('class', 'x axis')
                .attr('transform', 'translate(0,' + height + ')')
                .call(xAxis);
            _this.toolbox.log('Add the Y Axis');
            svg.append('g')
                .attr('class', 'y axis')
                .call(yAxis);
            _this.toolbox.log('Add the valueline path');
            svg.append('path')
                .attr('class', 'line')
                .attr('d', valueline(data));
            _this.toolbox.log('Add the scatterplot');
            svg.selectAll('dot')
                .data(data)
                .enter().append('circle')
                .attr('r', 5)
                .attr('cx', function (d) { return x(d.date); })
                .attr('cy', function (d) { return y(d.value); })
                .on('mouseover', function (d) {
                console.log('mouseover', 'd=' + d + ' div=' + div);
                div.transition()
                    .duration(200)
                    .style('opacity', .9);
                div.html(printTime(d.date) + '<br/>' + d.value)
                    .style('left', (d3__WEBPACK_IMPORTED_MODULE_2__["event"].pageX) + 'px')
                    .style('top', (d3__WEBPACK_IMPORTED_MODULE_2__["event"].pageY - 28) + 'px');
            })
                .on('mouseout', function (d) {
                console.log('mouseout', 'd=' + d + ' div=' + div);
                div.transition()
                    .duration(500)
                    .style('opacity', 0);
            });
        });
    };
    TooltipsSimplePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-rotated-text',
            template: __webpack_require__(/*! raw-loader!./page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/interactivity/tooltips_simple/page.html"),
            styles: [__webpack_require__(/*! ./page.scss */ "./src/app/pages/interactivity/tooltips_simple/page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TooltipsSimplePage);
    return TooltipsSimplePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-interactivity-tooltips_simple-module-es5.js.map