(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-basic-shapes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/basic/shapes/page.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/basic/shapes/page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<common-header>D3.js with Ionic</common-header>\n</ion-header>\n\n<ion-content>\n\n\t<h1 class=\"ion-no-margin ion-margin-bottom\">Drawing Basic Shapes using JSON data</h1>\n\n\t<h2 class=\"ion-margin-bottom\">Circles</h2>\n\t<div class=\"ion-padding-horizontal ion-padding-bottom\">\n\t\t<div id=\"circles\"></div>\n\t</div>\n\n\n\t<h2 class=\"ion-margin-bottom\">Rectangles</h2>\n\t<div class=\"ion-padding-horizontal ion-padding-bottom\">\n\t\t<div id=\"rectangles\"></div>\n\t</div>\n\n\t<h2 class=\"ion-margin-bottom\">Ellipses</h2>\n\t<div class=\"ion-padding-horizontal ion-padding-bottom\">\n\t\t<div id=\"ellipses\"></div>\n\t</div>\n\n\n\t<h2 class=\"ion-margin-bottom\">Lines</h2>\n\t<div class=\"ion-padding-horizontal ion-padding-bottom\">\n\t\t<div id=\"lines\"></div>\n\t</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/basic/shapes/module.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/basic/shapes/module.ts ***!
  \**********************************************/
/*! exports provided: BasicShapesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicShapesPageModule", function() { return BasicShapesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page */ "./src/app/pages/basic/shapes/page.ts");
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/components.module */ "./src/app/shared/components/components.module.ts");








var BasicShapesPageModule = /** @class */ (function () {
    function BasicShapesPageModule() {
    }
    BasicShapesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{ path: '', component: _page__WEBPACK_IMPORTED_MODULE_6__["BasicShapesPage"] }]),
                src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_page__WEBPACK_IMPORTED_MODULE_6__["BasicShapesPage"]]
        })
    ], BasicShapesPageModule);
    return BasicShapesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/basic/shapes/page.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/basic/shapes/page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jhc2ljL3NoYXBlcy9wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/basic/shapes/page.ts":
/*!********************************************!*\
  !*** ./src/app/pages/basic/shapes/page.ts ***!
  \********************************************/
/*! exports provided: BasicShapesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicShapesPage", function() { return BasicShapesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/toolbox.service */ "./src/app/shared/helpers/toolbox.service.ts");




var BasicShapesPage = /** @class */ (function () {
    function BasicShapesPage() {
        this.ID = 'BasicShapesPage';
        this.toolbox = new src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_3__["Toolbox"](this.ID);
        this.toolbox.log('constructor');
    }
    BasicShapesPage.prototype.ngOnInit = function () {
        this.toolbox.log('ngOnInit');
        this.createCircles();
        this.createRectangles();
        this.createEllipses();
        this.createLines();
    };
    BasicShapesPage.prototype.createCircles = function () {
        this.toolbox.log('ngOnInit');
        var jsonCircles = [
            { x_axis: 30, y_axis: 30, radius: 20, color: 'green' },
            { x_axis: 70, y_axis: 70, radius: 20, color: 'purple' },
            { x_axis: 110, y_axis: 100, radius: 20, color: 'red' }
        ];
        var svgContainer = d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"]('#circles').append('svg')
            .attr('width', 300)
            .attr('height', 200)
            .style('border', '1px solid black');
        this.toolbox.log('createChart', 'svg = ' + svgContainer);
        var circles = svgContainer.selectAll('circle')
            .data(jsonCircles)
            .enter()
            .append('circle');
        circles
            .attr('cx', function (d) { return d.x_axis; })
            .attr('cy', function (d) { return d.y_axis; })
            .attr('r', function (d) { return d.radius; })
            .style('fill', function (d) { return d.color; });
    };
    BasicShapesPage.prototype.createRectangles = function () {
        this.toolbox.log('createRectangles');
        var jsonRectangles = [
            { x: 0, y: 0, width: 100, height: 80, color: 'green' },
            { x: 110, y: 70, width: 70, height: 50, color: 'purple' },
            { x: 200, y: 100, width: 50, height: 25, color: 'red' }
        ];
        var svgContainer = d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"]('#rectangles').append('svg')
            .attr('width', 300)
            .attr('height', 200)
            .style('border', '1px solid black');
        var rectangles = svgContainer.selectAll('rect')
            .data(jsonRectangles)
            .enter()
            .append('rect');
        rectangles
            .attr('x', function (d) { return d.x; })
            .attr('y', function (d) { return d.y; })
            .attr('width', function (d) { return d.width; })
            .attr('height', function (d) { return d.height; })
            .style('fill', function (d) { return d.color; });
    };
    BasicShapesPage.prototype.createEllipses = function () {
        this.toolbox.log('createEllipses');
        var jsonEllipses = [
            { cx: 50, cy: 20, rx: 50, ry: 20, color: 'green' },
            { cx: 120, cy: 70, rx: 20, ry: 50, color: 'purple' },
            { cx: 200, cy: 90, rx: 40, ry: 70, color: 'red' }
        ];
        var svgContainer = d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"]('#ellipses').append('svg')
            .attr('width', 300)
            .attr('height', 200)
            .style('border', '1px solid black');
        var ellipses = svgContainer.selectAll('ellipse')
            .data(jsonEllipses)
            .enter()
            .append('ellipse');
        ellipses
            .attr('cx', function (d) { return d.cx; })
            .attr('cy', function (d) { return d.cy; })
            .attr('rx', function (d) { return d.rx; })
            .attr('ry', function (d) { return d.ry; })
            .style('fill', function (d) { return d.color; });
    };
    BasicShapesPage.prototype.createLines = function () {
        this.toolbox.log('createLines');
        var jsonLines = [
            { x1: 0, y1: 0, x2: 100, y2: 90, width: 2, color: 'green' },
            { x1: 150, y1: 10, x2: 150, y2: 90, width: 4, color: 'purple' },
            { x1: 300, y1: 0, x2: 200, y2: 90, width: 6, color: 'red' }
        ];
        var svgContainer = d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"]('#lines').append('svg')
            .attr('width', 300)
            .attr('height', 200)
            .style('border', '1px solid black');
        var lines = svgContainer.selectAll('line')
            .data(jsonLines)
            .enter()
            .append('line');
        lines
            .attr('x1', function (d) { return d.x1; })
            .attr('y1', function (d) { return d.y1; })
            .attr('x2', function (d) { return d.x2; })
            .attr('y2', function (d) { return d.y2; })
            .attr('stroke-width', function (d) { return d.width; })
            .attr('stroke', function (d) { return d.color; });
    };
    BasicShapesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-basic-shapes',
            template: __webpack_require__(/*! raw-loader!./page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/basic/shapes/page.html"),
            styles: [__webpack_require__(/*! ./page.scss */ "./src/app/pages/basic/shapes/page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BasicShapesPage);
    return BasicShapesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-basic-shapes-module-es5.js.map