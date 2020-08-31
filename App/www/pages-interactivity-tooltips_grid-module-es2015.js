(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-interactivity-tooltips_grid-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/interactivity/tooltips_grid/page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/interactivity/tooltips_grid/page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<common-header>D3.js with Ionic</common-header>\n</ion-header>\n\n<ion-content>\n\t<div id=\"playground\"></div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/interactivity/tooltips_grid/module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/interactivity/tooltips_grid/module.ts ***!
  \*************************************************************/
/*! exports provided: TooltipsGridPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipsGridPageModule", function() { return TooltipsGridPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page */ "./src/app/pages/interactivity/tooltips_grid/page.ts");
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/components.module */ "./src/app/shared/components/components.module.ts");








let TooltipsGridPageModule = class TooltipsGridPageModule {
};
TooltipsGridPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{ path: '', component: _page__WEBPACK_IMPORTED_MODULE_6__["TooltipsGridPage"] }]),
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        declarations: [_page__WEBPACK_IMPORTED_MODULE_6__["TooltipsGridPage"]]
    })
], TooltipsGridPageModule);



/***/ }),

/***/ "./src/app/pages/interactivity/tooltips_grid/page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/interactivity/tooltips_grid/page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font: 12px Arial;\n}\n\npath {\n  stroke: steelblue;\n  stroke-width: 2;\n  fill: none;\n}\n\n.axis path,\n.axis line {\n  fill: none;\n  stroke: grey;\n  stroke-width: 1;\n  shape-rendering: crispEdges;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TaGFyZWQvQ0xPVUQvRGV2ZWxvcG1lbnQuR2l0SHViL1JlcG9zaXRvcmllcy5Gcm9tR2l0aHViL3JlcG9zaXRvcmllcy9pb25pYy10b29sYm94L1dvcmtpbmctd2l0aF9EMy5qcy9zcmMvYXBwL3BhZ2VzL2ludGVyYWN0aXZpdHkvdG9vbHRpcHNfZ3JpZC9wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ludGVyYWN0aXZpdHkvdG9vbHRpcHNfZ3JpZC9wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQkFBQTtBQ0NEOztBREVBO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0NEOztBREVBOztFQUVDLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnRlcmFjdGl2aXR5L3Rvb2x0aXBzX2dyaWQvcGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG5cdGZvbnQ6IDEycHggQXJpYWw7XG59XG5cbnBhdGgge1xuXHRzdHJva2U6IHN0ZWVsYmx1ZTtcblx0c3Ryb2tlLXdpZHRoOiAyO1xuXHRmaWxsOiBub25lO1xufVxuXG4uYXhpcyBwYXRoLFxuLmF4aXMgbGluZSB7XG5cdGZpbGw6IG5vbmU7XG5cdHN0cm9rZTogZ3JleTtcblx0c3Ryb2tlLXdpZHRoOiAxO1xuXHRzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7XG59XG4iLCJib2R5IHtcbiAgZm9udDogMTJweCBBcmlhbDtcbn1cblxucGF0aCB7XG4gIHN0cm9rZTogc3RlZWxibHVlO1xuICBzdHJva2Utd2lkdGg6IDI7XG4gIGZpbGw6IG5vbmU7XG59XG5cbi5heGlzIHBhdGgsXG4uYXhpcyBsaW5lIHtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlOiBncmV5O1xuICBzdHJva2Utd2lkdGg6IDE7XG4gIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlcztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/interactivity/tooltips_grid/page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/interactivity/tooltips_grid/page.ts ***!
  \***********************************************************/
/*! exports provided: TooltipsGridPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipsGridPage", function() { return TooltipsGridPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/toolbox.service */ "./src/app/shared/helpers/toolbox.service.ts");




let TooltipsGridPage = class TooltipsGridPage {
    constructor() {
        this.ID = 'TooltipsPage';
        this.toolbox = new src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_3__["Toolbox"](this.ID);
        this.toolbox.log('constructor');
    }
    ngOnInit() {
        this.toolbox.log('ngOnInit');
        this.demo();
    }
    demo() {
        this.toolbox.log('demo');
        const margin = { top: 20, right: 25, bottom: 30, left: 40 };
        const width = 450 - margin.left - margin.right;
        const height = 450 - margin.top - margin.bottom;
        //
        // append the svg object to the body of the page
        //
        const svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"]('#playground')
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
        //
        //
        //
        this.toolbox.log('read csv data');
        d3__WEBPACK_IMPORTED_MODULE_2__["csv"]('/assets/data/heatmap.csv', (data) => {
            // Labels of row and columns -> unique identifier of the column called 'group' and 'variable'
            const myGroups = d3__WEBPACK_IMPORTED_MODULE_2__["map"](data, (d) => d.group).keys();
            const myVars = d3__WEBPACK_IMPORTED_MODULE_2__["map"](data, (d) => d.variable).keys();
            // Build X scales and axis:
            const x = d3__WEBPACK_IMPORTED_MODULE_2__["scaleBand"]()
                .range([0, width])
                .domain(myGroups)
                .padding(0.05);
            svg.append('g')
                .style('font-size', 15)
                .attr('transform', 'translate(0,' + height + ')')
                .call(d3__WEBPACK_IMPORTED_MODULE_2__["axisBottom"](x).tickSize(0))
                .select('.domain').remove();
            // Build Y scales and axis:
            const y = d3__WEBPACK_IMPORTED_MODULE_2__["scaleBand"]()
                .range([height, 0])
                .domain(myVars)
                .padding(0.05);
            svg.append('g')
                .style('font-size', 15)
                .call(d3__WEBPACK_IMPORTED_MODULE_2__["axisLeft"](y).tickSize(0))
                .select('.domain').remove();
            // Build color scale
            const myColor = d3__WEBPACK_IMPORTED_MODULE_2__["scaleSequential"]()
                .interpolator(d3__WEBPACK_IMPORTED_MODULE_2__["interpolateInferno"])
                .domain([1, 100]);
            // create a tooltip
            const Tooltip = d3__WEBPACK_IMPORTED_MODULE_2__["select"]('#playground')
                .append('div')
                .style('opacity', 0)
                .attr('class', 'tooltip')
                .style('background-color', 'white')
                .style('border', 'solid')
                .style('border-width', '2px')
                .style('border-radius', '5px')
                .style('padding', '5px');
            // Three function that change the tooltip when user hover / move / leave a cell
            const mouseover = (d, i) => {
                this.toolbox.log('mouseover', 'd = ' + JSON.stringify(d) + ' i = ' + JSON.stringify(i));
                try {
                    Tooltip
                        .style('opacity', 1);
                }
                catch (error) {
                    this.toolbox.log('mousemove', 'tooltip error ' + error);
                }
                try {
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"](this)
                        .style('stroke', 'black')
                        .style('opacity', 1);
                }
                catch (error) {
                    this.toolbox.log('mousemove', 'd3.select error ' + error);
                }
            };
            const mousemove = (d, i) => {
                const mouse = d3__WEBPACK_IMPORTED_MODULE_2__["mouse"](d3__WEBPACK_IMPORTED_MODULE_2__["event"].currentTarget);
                const posX = mouse[0];
                const posY = mouse[1];
                this.toolbox.log('mousemove', 'd = ' + JSON.stringify(d) + ' i = ' + JSON.stringify(i) + ' mouse = ' + JSON.stringify(mouse) + ' posx=' + posX + ' posy=' + posY);
                try {
                    Tooltip
                        .html('The exact value of<br>this cell is: ' + d.value)
                        .style('left', (posX + 70) + 'px')
                        .style('top', posY + 'px');
                }
                catch (error) {
                    this.toolbox.log('mousemove', 'tooltip error ' + error);
                }
            };
            const mouseleave = (d, i) => {
                this.toolbox.log('mouseover', 'd = ' + JSON.stringify(d) + ' i = ' + JSON.stringify(i));
                try {
                    Tooltip
                        .style('opacity', 0);
                }
                catch (error) {
                    this.toolbox.log('mousemove', 'tooltip error ' + error);
                }
                try {
                    d3__WEBPACK_IMPORTED_MODULE_2__["select"](this)
                        .style('stroke', 'none')
                        .style('opacity', 0.8);
                }
                catch (error) {
                    this.toolbox.log('mousemove', 'd3.select error ' + error);
                }
            };
            svg.selectAll()
                .data(data, (d) => d.group + ':' + d.variable)
                .enter()
                .append('rect')
                .attr('x', (d) => x(d.group))
                .attr('y', (d) => y(d.variable))
                .attr('rx', 4)
                .attr('ry', 4)
                .attr('width', x.bandwidth())
                .attr('height', y.bandwidth())
                .style('fill', (d) => myColor(d.value))
                .style('stroke-width', 4)
                .style('stroke', 'none')
                .style('opacity', 0.8)
                .on('mouseover', mouseover)
                .on('mousemove', mousemove)
                .on('mouseleave', mouseleave);
        });
    }
};
TooltipsGridPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-tooltips-grid',
        template: __webpack_require__(/*! raw-loader!./page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/interactivity/tooltips_grid/page.html"),
        styles: [__webpack_require__(/*! ./page.scss */ "./src/app/pages/interactivity/tooltips_grid/page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TooltipsGridPage);



/***/ })

}]);
//# sourceMappingURL=pages-interactivity-tooltips_grid-module-es2015.js.map