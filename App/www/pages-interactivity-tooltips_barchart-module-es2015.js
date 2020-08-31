(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-interactivity-tooltips_barchart-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/interactivity/tooltips_barchart/page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/interactivity/tooltips_barchart/page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<common-header>D3.js with Ionic</common-header>\n</ion-header>\n\n<ion-content>\n\t<div id=\"playground\"></div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/interactivity/tooltips_barchart/module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/interactivity/tooltips_barchart/module.ts ***!
  \*****************************************************************/
/*! exports provided: TooltipsBarChartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipsBarChartPageModule", function() { return TooltipsBarChartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page */ "./src/app/pages/interactivity/tooltips_barchart/page.ts");
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/components.module */ "./src/app/shared/components/components.module.ts");








let TooltipsBarChartPageModule = class TooltipsBarChartPageModule {
};
TooltipsBarChartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{ path: '', component: _page__WEBPACK_IMPORTED_MODULE_6__["TooltipsBarChartPage"] }]),
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        declarations: [_page__WEBPACK_IMPORTED_MODULE_6__["TooltipsBarChartPage"]]
    })
], TooltipsBarChartPageModule);



/***/ }),

/***/ "./src/app/pages/interactivity/tooltips_barchart/page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/interactivity/tooltips_barchart/page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\nbody {\n  font: 10px sans-serif;\n}\n.axis path,\n.axis line {\n  fill: none;\n  stroke: #000;\n  shape-rendering: crispEdges;\n}\n.bar {\n  fill: orange;\n}\n.bar:hover {\n  fill: orangered;\n}\n.x.axis path {\n  display: none;\n}\n.d3-tip {\n  line-height: 1;\n  font-weight: bold;\n  padding: 12px;\n  background: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  border-radius: 2px;\n}\n/* Creates a small triangle extender for the tooltip */\n.d3-tip:after {\n  box-sizing: border-box;\n  display: inline;\n  font-size: 10px;\n  width: 100%;\n  line-height: 1;\n  color: rgba(0, 0, 0, 0.8);\n  content: \"▼\";\n  position: absolute;\n  text-align: center;\n}\n/* Style northward tooltips differently */\n.d3-tip.n:after {\n  margin: -1px 0 0 0;\n  top: 100%;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW50ZXJhY3Rpdml0eS90b29sdGlwc19iYXJjaGFydC9wYWdlLnNjc3MiLCIvVXNlcnMvU2hhcmVkL0NMT1VEL0RldmVsb3BtZW50LkdpdEh1Yi9SZXBvc2l0b3JpZXMuRnJvbUdpdGh1Yi9yZXBvc2l0b3JpZXMvaW9uaWMtdG9vbGJveC9Xb3JraW5nLXdpdGhfRDMuanMvc3JjL2FwcC9wYWdlcy9pbnRlcmFjdGl2aXR5L3Rvb2x0aXBzX2JhcmNoYXJ0L3BhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxxQkFBQTtBREVGO0FDQ0E7O0VBRUUsVUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBREVGO0FDQ0E7RUFDRSxZQUFBO0FERUY7QUNDQTtFQUNFLGVBQUE7QURFRjtBQ0NBO0VBQ0UsYUFBQTtBREVGO0FDQ0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QURFRjtBQ0NBLHNEQUFBO0FBQ0E7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FERUY7QUNDQSx5Q0FBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBREVGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW50ZXJhY3Rpdml0eS90b29sdGlwc19iYXJjaGFydC9wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5ib2R5IHtcbiAgZm9udDogMTBweCBzYW5zLXNlcmlmO1xufVxuXG4uYXhpcyBwYXRoLFxuLmF4aXMgbGluZSB7XG4gIGZpbGw6IG5vbmU7XG4gIHN0cm9rZTogIzAwMDtcbiAgc2hhcGUtcmVuZGVyaW5nOiBjcmlzcEVkZ2VzO1xufVxuXG4uYmFyIHtcbiAgZmlsbDogb3JhbmdlO1xufVxuXG4uYmFyOmhvdmVyIHtcbiAgZmlsbDogb3JhbmdlcmVkO1xufVxuXG4ueC5heGlzIHBhdGgge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZDMtdGlwIHtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi8qIENyZWF0ZXMgYSBzbWFsbCB0cmlhbmdsZSBleHRlbmRlciBmb3IgdGhlIHRvb2x0aXAgKi9cbi5kMy10aXA6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBjb250ZW50OiBcIuKWvFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogU3R5bGUgbm9ydGh3YXJkIHRvb2x0aXBzIGRpZmZlcmVudGx5ICovXG4uZDMtdGlwLm46YWZ0ZXIge1xuICBtYXJnaW46IC0xcHggMCAwIDA7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMDtcbn0iLCJib2R5IHtcbiAgZm9udDogMTBweCBzYW5zLXNlcmlmO1xufVxuXG4uYXhpcyBwYXRoLFxuLmF4aXMgbGluZSB7XG4gIGZpbGw6IG5vbmU7XG4gIHN0cm9rZTogIzAwMDtcbiAgc2hhcGUtcmVuZGVyaW5nOiBjcmlzcEVkZ2VzO1xufVxuXG4uYmFyIHtcbiAgZmlsbDogb3JhbmdlO1xufVxuXG4uYmFyOmhvdmVyIHtcbiAgZmlsbDogb3JhbmdlcmVkIDtcbn1cblxuLnguYXhpcyBwYXRoIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmQzLXRpcCB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTJweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4vKiBDcmVhdGVzIGEgc21hbGwgdHJpYW5nbGUgZXh0ZW5kZXIgZm9yIHRoZSB0b29sdGlwICovXG4uZDMtdGlwOmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogaW5saW5lO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgY29udGVudDogXCJcXDI1QkNcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIFN0eWxlIG5vcnRod2FyZCB0b29sdGlwcyBkaWZmZXJlbnRseSAqL1xuLmQzLXRpcC5uOmFmdGVyIHtcbiAgbWFyZ2luOiAtMXB4IDAgMCAwO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/interactivity/tooltips_barchart/page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/interactivity/tooltips_barchart/page.ts ***!
  \***************************************************************/
/*! exports provided: TooltipsBarChartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipsBarChartPage", function() { return TooltipsBarChartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-axis */ "./node_modules/d3-axis/index.js");
/* harmony import */ var src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/helpers/toolbox.service */ "./src/app/shared/helpers/toolbox.service.ts");






let TooltipsBarChartPage = class TooltipsBarChartPage {
    constructor() {
        this.ID = 'TooltipsBarChartPage';
        this.toolbox = new src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_5__["Toolbox"](this.ID);
        this.toolbox.log('constructor');
    }
    ngOnDestroy() { this.toolbox.log('ngOnDestroy'); }
    ngOnInit() {
        this.toolbox.log('ngOnInit');
        this.demo();
    }
    demo() {
        this.toolbox.log('demo');
        const margin = { top: 40, right: 20, bottom: 30, left: 40 };
        const width = 960 - margin.left - margin.right;
        const height = 500 - margin.top - margin.bottom;
        const x = d3_scale__WEBPACK_IMPORTED_MODULE_3__["scaleOrdinal"]().domain([0, 100]).range([0, width]);
        const y = d3_scale__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"]().domain([0, 100]).range([height, 0]);
        const xAxis = d3_axis__WEBPACK_IMPORTED_MODULE_4__["axisBottom"](x);
        const yAxis = d3_axis__WEBPACK_IMPORTED_MODULE_4__["axisLeft"](y).tickFormat(d3__WEBPACK_IMPORTED_MODULE_2__["format"]('.0%'));
        const svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"]('#playground')
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
        /*
        const tip = d3.tip()
            .attr('class', 'd3-tip')
            .offset([-10, 0])
            .html(d => '<strong>Frequency:</strong> <span style=\'color:red\'>' + d.frequency + '</span>');
        svg.call(tip);
        */
        d3__WEBPACK_IMPORTED_MODULE_2__["tsv"]('/assets/data/tooltips_barchart.tsv', type, (error, data) => {
            x.domain(data.map(d => d.letter));
            y.domain([0, d3__WEBPACK_IMPORTED_MODULE_2__["max"](data, d => d.frequency)]);
            svg.append('g')
                .attr('class', 'x axis')
                .attr('transform', 'translate(0,' + height + ')')
                .call(xAxis);
            svg.append('g')
                .attr('class', 'y axis')
                .call(yAxis)
                .append('text')
                .attr('transform', 'rotate(-90)')
                .attr('y', 6)
                .attr('dy', '.71em')
                .style('text-anchor', 'end')
                .text('Frequency');
            svg.selectAll('.bar')
                .data(data)
                .enter().append('rect')
                .attr('class', 'bar')
                .attr('x', d => x(d.letter))
                .attr('width', x.rangeBand())
                .attr('y', (d) => y(d.frequency))
                .attr('height', (d) => height - y(d.frequency));
        });
        function type(d) {
            d.frequency = +d.frequency;
            return d;
        }
    }
};
TooltipsBarChartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-tooltips-barchart',
        template: __webpack_require__(/*! raw-loader!./page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/interactivity/tooltips_barchart/page.html"),
        styles: [__webpack_require__(/*! ./page.scss */ "./src/app/pages/interactivity/tooltips_barchart/page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TooltipsBarChartPage);



/***/ })

}]);
//# sourceMappingURL=pages-interactivity-tooltips_barchart-module-es2015.js.map