(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chart-bar-race-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/chart-bar/race/page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/chart-bar/race/page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<common-header>D3.js with Ionic</common-header>\n</ion-header>\n\n<ion-content>\n\t<div class=\"bar-chart-box ion-padding-horizontal ion-padding-bottom\">\n\t\t<div id=\"bar-chart-race\" class=\"bar-chart\"></div>\n\t</div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/chart-bar/race/module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/chart-bar/race/module.ts ***!
  \************************************************/
/*! exports provided: BarChartRacePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartRacePageModule", function() { return BarChartRacePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/components.module */ "./src/app/shared/components/components.module.ts");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page */ "./src/app/pages/chart-bar/race/page.ts");








let BarChartRacePageModule = class BarChartRacePageModule {
};
BarChartRacePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{ path: '', component: _page__WEBPACK_IMPORTED_MODULE_7__["BarChartRacePage"] }]),
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        declarations: [_page__WEBPACK_IMPORTED_MODULE_7__["BarChartRacePage"]]
    })
], BarChartRacePageModule);



/***/ }),

/***/ "./src/app/pages/chart-bar/race/page.scss":
/*!************************************************!*\
  !*** ./src/app/pages/chart-bar/race/page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Xbar-chart-box {\n  background-color: purple;\n}\n\n.Xbar-chart {\n  background-color: orange;\n}\n\ntext {\n  font-size: 16px;\n  font-family: Open Sans, sans-serif;\n}\n\ntext.title {\n  font-size: 24px;\n  font-weight: 500;\n}\n\ntext.subTitle {\n  font-weight: 500;\n  fill: #777777;\n}\n\ntext.caption {\n  font-weight: 400;\n  font-size: 14px;\n  fill: #777777;\n}\n\ntext.label {\n  font-weight: 600;\n}\n\ntext.yearText {\n  font-size: 64px;\n  font-weight: 700;\n  opacity: 0.25;\n}\n\n.tick text {\n  fill: #777777;\n}\n\n.xAxis .tick:nth-child(2) text {\n  text-anchor: start;\n}\n\n.tick line {\n  shape-rendering: CrispEdges;\n  stroke: #dddddd;\n}\n\n.tick line.origin {\n  stroke: #aaaaaa;\n}\n\npath.domain {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TaGFyZWQvQ0xPVUQvRGV2ZWxvcG1lbnQuR2l0SHViL1JlcG9zaXRvcmllcy5Gcm9tR2l0aHViL3JlcG9zaXRvcmllcy9pb25pYy10b29sYm94L1dvcmtpbmctd2l0aF9EMy5qcy9zcmMvYXBwL3BhZ2VzL2NoYXJ0LWJhci9yYWNlL3BhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hhcnQtYmFyL3JhY2UvcGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msd0JBQUE7QUNDRDs7QURDQTtFQUNDLHdCQUFBO0FDRUQ7O0FEQ0E7RUFDQyxlQUFBO0VBQ0Esa0NBQUE7QUNFRDs7QURBQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtBQ0dEOztBRERBO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0FDSUQ7O0FERkE7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDS0Q7O0FESEE7RUFDQyxnQkFBQTtBQ01EOztBREpBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ09EOztBRExBO0VBQ0MsYUFBQTtBQ1FEOztBRE5BO0VBQ0Msa0JBQUE7QUNTRDs7QURQQTtFQUNDLDJCQUFBO0VBQ0EsZUFBQTtBQ1VEOztBRFJBO0VBQ0MsZUFBQTtBQ1dEOztBRFRBO0VBQ0MsYUFBQTtBQ1lEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hhcnQtYmFyL3JhY2UvcGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlhiYXItY2hhcnQtYm94IHtcblx0YmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xufVxuLlhiYXItY2hhcnQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG59XG5cbnRleHQge1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIHNhbnMtc2VyaWY7XG59XG50ZXh0LnRpdGxlIHtcblx0Zm9udC1zaXplOiAyNHB4O1xuXHRmb250LXdlaWdodDogNTAwO1xufVxudGV4dC5zdWJUaXRsZSB7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGZpbGw6ICM3Nzc3Nzc7XG59XG50ZXh0LmNhcHRpb24ge1xuXHRmb250LXdlaWdodDogNDAwO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGZpbGw6ICM3Nzc3Nzc7XG59XG50ZXh0LmxhYmVsIHtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcbn1cbnRleHQueWVhclRleHQge1xuXHRmb250LXNpemU6IDY0cHg7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdG9wYWNpdHk6IDAuMjU7XG59XG4udGljayB0ZXh0IHtcblx0ZmlsbDogIzc3Nzc3Nztcbn1cbi54QXhpcyAudGljazpudGgtY2hpbGQoMikgdGV4dCB7XG5cdHRleHQtYW5jaG9yOiBzdGFydDtcbn1cbi50aWNrIGxpbmUge1xuXHRzaGFwZS1yZW5kZXJpbmc6IENyaXNwRWRnZXM7XG5cdHN0cm9rZTogI2RkZGRkZDtcbn1cbi50aWNrIGxpbmUub3JpZ2luIHtcblx0c3Ryb2tlOiAjYWFhYWFhO1xufVxucGF0aC5kb21haW4ge1xuXHRkaXNwbGF5OiBub25lO1xufVxuIiwiLlhiYXItY2hhcnQtYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xufVxuXG4uWGJhci1jaGFydCB7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucywgc2Fucy1zZXJpZjtcbn1cblxudGV4dC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxudGV4dC5zdWJUaXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZpbGw6ICM3Nzc3Nzc7XG59XG5cbnRleHQuY2FwdGlvbiB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZmlsbDogIzc3Nzc3Nztcbn1cblxudGV4dC5sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbnRleHQueWVhclRleHQge1xuICBmb250LXNpemU6IDY0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG9wYWNpdHk6IDAuMjU7XG59XG5cbi50aWNrIHRleHQge1xuICBmaWxsOiAjNzc3Nzc3O1xufVxuXG4ueEF4aXMgLnRpY2s6bnRoLWNoaWxkKDIpIHRleHQge1xuICB0ZXh0LWFuY2hvcjogc3RhcnQ7XG59XG5cbi50aWNrIGxpbmUge1xuICBzaGFwZS1yZW5kZXJpbmc6IENyaXNwRWRnZXM7XG4gIHN0cm9rZTogI2RkZGRkZDtcbn1cblxuLnRpY2sgbGluZS5vcmlnaW4ge1xuICBzdHJva2U6ICNhYWFhYWE7XG59XG5cbnBhdGguZG9tYWluIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/chart-bar/race/page.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/chart-bar/race/page.ts ***!
  \**********************************************/
/*! exports provided: DataModel, BarChartRacePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataModel", function() { return DataModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartRacePage", function() { return BarChartRacePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-axis */ "./node_modules/d3-axis/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/index.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/index.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/index.js");
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-ease */ "./node_modules/d3-ease/src/index.js");
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var d3_fetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! d3-fetch */ "./node_modules/d3-fetch/src/index.js");
/* harmony import */ var src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/helpers/toolbox.service */ "./src/app/shared/helpers/toolbox.service.ts");
/*
 https://observablehq.com/d/bef0441bd98d59a7
*/














class DataModel {
}
let BarChartRacePage = class BarChartRacePage {
    constructor(http) {
        this.http = http;
        this.ID = 'BarChartRacePage';
        this.toolbox = new src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_13__["Toolbox"](this.ID);
        //
        //
        this.brandData = [];
        this.toolbox.log('constructor');
    }
    ngOnInit() {
        this.toolbox.log('ngOnInit');
        this.getChartData().then((data) => {
            this.brandData = data;
            this.createChart();
        });
    }
    ngOnDestroy() {
        this.ticker.stop();
    }
    // This is a lightly modified version of Mike Bostock’s text halo function from @d3/connected-scatterplot
    halo(text, strokeWidth) {
        text.select(function () {
            return this.parentNode.insertBefore(this.cloneNode(true), this);
        })
            .style('fill', '#ffffff')
            .style('stroke', '#ffffff')
            .style('stroke-width', strokeWidth)
            .style('stroke-linejoin', 'round')
            .style('opacity', 1);
    }
    extractData(data) {
        this.toolbox.log('extractData', 'data = ' + data);
        this.brandData = data;
    }
    handleError(err) {
        this.toolbox.log('handleError', 'err = ' + JSON.stringify(err));
    }
    getChartData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.toolbox.log('initChartData');
            /*
            const ROOT = 'https://gist.githubusercontent.com/johnburnmurdoch';
            const GIST = '2e5712cce1e2a9407bf081a952b85bac/raw/08cf82f5e03c619f7da2700d1777da0b5247df18';
            const FILE = 'INTERBRAND_brand_values_2000_2018_decimalised.csv';
            */
            const ROOT = '/assets';
            const GIST = 'data';
            const FILE = 'brands.csv';
            const URL = ROOT + '/' + GIST + '/' + FILE;
            return d3_fetch__WEBPACK_IMPORTED_MODULE_12__["csv"](URL);
            if (false) {}
            this.toolbox.log('initChartData', 'done: brandData = ' + this.brandData);
        });
    }
    createChart() {
        this.toolbox.log('createChart');
        const tickDuration = 333;
        const topN = 12;
        const height = 800;
        const width = 800;
        const svg = d3_selection__WEBPACK_IMPORTED_MODULE_3__["select"]('#bar-chart-race').append('svg')
            .attr('width', height)
            .attr('height', width)
            .style('border', '1px solid black');
        this.toolbox.log('createChart', 'svg = ' + svg);
        const margin = { top: 80, right: 0, bottom: 5, left: 0 };
        const barPadding = (height - (margin.bottom + margin.top)) / (topN * 5);
        const title = svg.append('text')
            .attr('class', 'title')
            .attr('y', 40)
            .html('18 years of Interbrand’s Top Global Brands');
        const subTitle = svg.append('text')
            .attr('class', 'subTitle')
            .attr('y', 20)
            .html('Brand value, $m');
        const caption = svg.append('text')
            .attr('class', 'caption')
            .attr('x', width)
            .attr('y', height - 5)
            .style('text-anchor', 'end')
            .html('Source: Interbrand');
        let year = 2000;
        this.brandData.forEach(d => {
            d.value = +d.value;
            d.lastValue = +d.lastValue;
            d.value = isNaN(d.value) ? 0 : d.value;
            d.year = +d.year;
            d.colour = d3_color__WEBPACK_IMPORTED_MODULE_11__["hsl"](Math.random() * 360, 0.75, 0.75);
        });
        let yearSlice = this.brandData.filter(d => d.year == year && !isNaN(d.value))
            .sort((a, b) => b.value - a.value)
            .slice(0, topN);
        yearSlice.forEach((d, i) => d.rank = i);
        this.toolbox.log('createChart', 'yearSlice for year ' + year);
        console.table(yearSlice);
        const x = d3_scale__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"]()
            .domain([0, d3_array__WEBPACK_IMPORTED_MODULE_7__["max"](yearSlice, d => d.value)])
            .range([margin.left, width - margin.right - 65]);
        const y = d3_scale__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"]()
            .domain([topN, 0])
            .range([height - margin.bottom, margin.top]);
        const xAxis = d3_axis__WEBPACK_IMPORTED_MODULE_5__["axisTop"]()
            .scale(x)
            .ticks(width > 500 ? 5 : 2)
            .tickSize(-(height - margin.top - margin.bottom))
            .tickFormat(d => d3_format__WEBPACK_IMPORTED_MODULE_9__["format"](',')(d));
        svg.append('g')
            .attr('class', 'axis xAxis')
            .attr('transform', `translate(0, ${margin.top})`)
            .call(xAxis)
            .selectAll('.tick line')
            .classed('origin', d => d === 0);
        svg.selectAll('rect.bar')
            .data(yearSlice, d => d.name)
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', x(0) + 1)
            .attr('width', d => x(d.value) - x(0) - 1)
            .attr('y', d => y(d.rank) + 5)
            .attr('height', y(1) - y(0) - barPadding)
            .style('fill', d => d.colour);
        svg.selectAll('text.label')
            .data(yearSlice, d => d.name)
            .enter()
            .append('text')
            .attr('class', 'label')
            .attr('x', d => x(d.value) - 8)
            .attr('y', d => y(d.rank) + 5 + ((y(1) - y(0)) / 2) + 1)
            .attr('text-anchor', 'end')
            .html(d => d.name);
        svg.selectAll('text.valueLabel')
            .data(yearSlice, d => d.name)
            .enter()
            .append('text')
            .attr('class', 'valueLabel')
            .attr('x', d => x(d.value) + 5)
            .attr('y', d => y(d.rank) + 5 + ((y(1) - y(0)) / 2) + 1)
            .text(d => d3_format__WEBPACK_IMPORTED_MODULE_9__["format"](',.0f')(d.lastValue));
        const yearText = svg.append('text')
            .attr('class', 'yearText')
            .attr('x', width - margin.right)
            .attr('y', height - 25)
            .style('text-anchor', 'end')
            .html(year);
        /*-----------------------------------------------------------------------------------------
        **
        **
        **---------------------------------------------------------------------------------------*/
        this.ticker = d3_timer__WEBPACK_IMPORTED_MODULE_8__["interval"](e => {
            this.toolbox.log('createChart:ticker', '*** yearSlice for year = ' + year);
            yearSlice = this.brandData.filter(d => d.year == year && !isNaN(d.value))
                .sort((a, b) => b.value - a.value)
                .slice(0, topN);
            yearSlice.forEach((d, i) => d.rank = i);
            x.domain([0, d3_array__WEBPACK_IMPORTED_MODULE_7__["max"](yearSlice, d => d.value)]);
            this.toolbox.log('createChart:ticker', 'select xAxis');
            /*
            svg.select('.xAxis')
                .transition()
                .duration(tickDuration)
                .ease(d3Ease.easeLinear)
                .call(xAxis);
            */
            const bars = svg.selectAll('.bar').data(yearSlice, d => d.name);
            this.toolbox.log('createChart:ticker', 'bars enter');
            bars
                .enter()
                .append('rect')
                .attr('class', d => `bar ${d.name.replace(/\s/g, '_')}`)
                .attr('x', x(0) + 1)
                .attr('width', d => x(d.value) - x(0) - 1)
                .attr('y', d => y(topN + 1) + 5)
                .attr('height', y(1) - y(0) - barPadding)
                .style('fill', d => d.colour)
                .transition()
                .duration(tickDuration)
                .ease(d3_ease__WEBPACK_IMPORTED_MODULE_10__["easeLinear"])
                .attr('y', d => y(d.rank) + 5);
            this.toolbox.log('createChart:ticker', 'bars transistion');
            bars
                .transition()
                .duration(tickDuration)
                .ease(d3_ease__WEBPACK_IMPORTED_MODULE_10__["easeLinear"])
                .attr('width', d => x(d.value) - x(0) - 1)
                .attr('y', d => y(d.rank) + 5);
            this.toolbox.log('createChart:ticker', 'bars exit');
            bars
                .exit()
                .transition()
                .duration(tickDuration)
                .ease(d3_ease__WEBPACK_IMPORTED_MODULE_10__["easeLinear"])
                .attr('width', d => x(d.value) - x(0) - 1)
                .attr('y', d => y(topN + 1) + 5)
                .remove();
            const labels = svg.selectAll('.label').data(yearSlice, d => d.name);
            this.toolbox.log('createChart:ticker', 'labels enter');
            labels
                .enter()
                .append('text')
                .attr('class', 'label')
                .attr('x', d => x(d.value) - 8)
                .attr('y', d => y(topN + 1) + 5 + ((y(1) - y(0)) / 2))
                .attr('text-anchor', 'end')
                .html(d => d.name)
                .transition()
                .duration(tickDuration)
                .ease(d3_ease__WEBPACK_IMPORTED_MODULE_10__["easeLinear"])
                .attr('y', d => y(d.rank) + 5 + ((y(1) - y(0)) / 2) + 1);
            this.toolbox.log('createChart:ticker', 'labels transition');
            labels
                .transition()
                .duration(tickDuration)
                .ease(d3_ease__WEBPACK_IMPORTED_MODULE_10__["easeLinear"])
                .attr('x', d => x(d.value) - 8)
                .attr('y', d => y(d.rank) + 5 + ((y(1) - y(0)) / 2) + 1);
            this.toolbox.log('createChart:ticker', 'labels exit');
            labels
                .exit()
                .transition()
                .duration(tickDuration)
                .ease(d3_ease__WEBPACK_IMPORTED_MODULE_10__["easeLinear"])
                .attr('x', d => x(d.value) - 8)
                .attr('y', d => y(topN + 1) + 5)
                .remove();
            const valueLabels = svg.selectAll('.valueLabel').data(yearSlice, d => d.name);
            this.toolbox.log('createChart:ticker', 'valueLabels enter');
            valueLabels
                .enter()
                .append('text')
                .attr('class', 'valueLabel')
                .attr('x', d => x(d.value) + 5)
                .attr('y', d => y(topN + 1) + 5)
                .text(d => d3_format__WEBPACK_IMPORTED_MODULE_9__["format"](',.0f')(d.lastValue))
                .transition()
                .duration(tickDuration)
                .ease(d3_ease__WEBPACK_IMPORTED_MODULE_10__["easeLinear"])
                .attr('y', d => y(d.rank) + 5 + ((y(1) - y(0)) / 2) + 1);
            valueLabels
                .transition()
                .duration(tickDuration)
                .ease(d3_ease__WEBPACK_IMPORTED_MODULE_10__["easeLinear"])
                .attr('x', d => x(d.value) + 5)
                .attr('y', d => y(d.rank) + 5 + ((y(1) - y(0)) / 2) + 1)
                .tween('text', (d) => {
                const i = d3_interpolate__WEBPACK_IMPORTED_MODULE_6__["interpolateRound"](d.lastValue, d.value);
                return function (t) {
                    this.textContent = d3_format__WEBPACK_IMPORTED_MODULE_9__["format"](',')(i(t));
                };
            });
            valueLabels
                .exit()
                .transition()
                .duration(tickDuration)
                .ease(d3_ease__WEBPACK_IMPORTED_MODULE_10__["easeLinear"])
                .attr('x', d => x(d.value) + 5)
                .attr('y', d => y(topN + 1) + 5)
                .remove();
            yearText.html(year);
            if (year === 2003) {
                this.ticker.stop();
            }
            year = d3_format__WEBPACK_IMPORTED_MODULE_9__["format"]('.1f')((+year) + 0.1);
        }, tickDuration);
        return svg.node();
    }
};
BarChartRacePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BarChartRacePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-basic-shapes',
        template: __webpack_require__(/*! raw-loader!./page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/chart-bar/race/page.html"),
        styles: [__webpack_require__(/*! ./page.scss */ "./src/app/pages/chart-bar/race/page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], BarChartRacePage);



/***/ })

}]);
//# sourceMappingURL=pages-chart-bar-race-module-es2015.js.map