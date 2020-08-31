(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-paths-svg-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/paths-svg/page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/paths-svg/page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<common-header>D3.js with Ionic</common-header>\n</ion-header>\n\n<ion-content>\n\n\t<h1 class=\"ion-no-margin\">SVG Paths</h1>\n\n\t<div class=\"ion-padding-horizontal\">\n\t\t<p class=\"ion-padding-vertical\">The \"curve\" method sets the curve factory and returns the line generator.\n\t\t\tInstead of just providing the data to the svg container, we provide the generated data by the chosen\n\t\t\tgenerator.</p>\n\t</div>\n\n\t<h2>Allowed factories</h2>\n\t<div class=\"ion-padding-horizontal\">\n\t\t<ul>\n\t\t\t<li>d3Shape.curveBasis</li>\n\t\t\t<li>d3Shape.curveBasisClosed</li>\n\t\t\t<li>d3Shape.curveBasisOpen</li>\n\t\t\t<li>d3Shape.curveBundle</li>\n\t\t\t<li>d3Shape.curveCardinal</li>\n\t\t\t<li>d3Shape.curveCardinalClosed</li>\n\t\t\t<li>d3Shape.curveCardinalOpen</li>\n\t\t\t<li>d3Shape.curveCatmullRom</li>\n\t\t\t<li>d3Shape.curveCatmullRomClosed</li>\n\t\t\t<li>d3Shape.curveCatmullRomOpen</li>\n\t\t\t<li>d3Shape.curveLinear</li>\n\t\t\t<li>d3Shape.curveLinearClosed</li>\n\t\t\t<li>d3Shape.curveMonotoneX</li>\n\t\t\t<li>d3Shape.curveMonotoneY</li>\n\t\t\t<li>d3Shape.curveNatural</li>\n\t\t\t<li>d3Shape.curveStep</li>\n\t\t\t<li>d3Shape.curveStepAfter</li>\n\t\t\t<li>d3Shape.curveStepBefore</li>\n\t\t</ul>\n\t</div>\n\n\n\t<h2>Examples</h2>\n\t<div class=\"ion-padding-horizontal ion-padding-bottom\">\n\t\t<ion-item class=\"no-lines no-padding\">\n\n\t\t\t<ion-label>Interpolation</ion-label>\n\n\t\t\t<ion-select [(ngModel)]=\"interpolationSelected\" (ionChange)=\"createSvgPathsLines($event)\"\n\t\t\t\tinterface=\"popover\">\n\t\t\t\t<ion-option *ngFor=\"let interpolation of interpolationsSelectList\">{{interpolation}}</ion-option>\n\t\t\t</ion-select>\n\n\t\t</ion-item>\n\n\t\t<div id=\"paths\"></div>\n\t</div>\n\n\n\t<footer-links color=\"dark\" class=\"ion-no-margin\" tutorialUrl=\"https://www.dashingd3js.com/svg-paths-and-d3js\">\n\t</footer-links>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/paths-svg/module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/paths-svg/module.ts ***!
  \*******************************************/
/*! exports provided: PathsSvgPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathsSvgPageModule", function() { return PathsSvgPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page */ "./src/app/pages/paths-svg/page.ts");
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/components.module */ "./src/app/shared/components/components.module.ts");








let PathsSvgPageModule = class PathsSvgPageModule {
};
PathsSvgPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{ path: '', component: _page__WEBPACK_IMPORTED_MODULE_6__["PathsSvgPage"] }]),
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        declarations: [_page__WEBPACK_IMPORTED_MODULE_6__["PathsSvgPage"]]
    })
], PathsSvgPageModule);



/***/ }),

/***/ "./src/app/pages/paths-svg/page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/paths-svg/page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhdGhzLXN2Zy9wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/paths-svg/page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/paths-svg/page.ts ***!
  \*****************************************/
/*! exports provided: PathsSvgPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathsSvgPage", function() { return PathsSvgPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/* harmony import */ var src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/helpers/toolbox.service */ "./src/app/shared/helpers/toolbox.service.ts");





let PathsSvgPage = class PathsSvgPage {
    constructor() {
        this.ID = 'PathsSvgPage';
        this.toolbox = new src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_4__["Toolbox"](this.ID);
        this.interpolations = [
            { name: 'basis', value: d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveBasis"] },
            { name: 'basisClosed', value: d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveBasisClosed"] },
            { name: 'basisOpen', value: d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveBasisOpen"] },
            { name: 'bundle', value: d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveBundle"] },
            { name: 'cardinal', value: d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveCardinal"] },
            { name: 'cardinalClosed', value: d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveCardinalClosed"] },
            { name: 'cardinalOpen', value: d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveCardinalOpen"] },
            { name: 'catmullRom', value: d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveCatmullRom"] },
            { name: 'catmullRomClosed', value: d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveCatmullRomClosed"] },
            { name: 'catmullRomOpen', value: d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveCatmullRomOpen"] },
            { name: 'linear', value: d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveLinear"] },
            { name: 'linearClosed', value: d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveLinearClosed"] },
            { name: 'monotoneX', value: d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveMonotoneX"] },
            { name: 'monotoneY', value: d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveMonotoneY"] },
            { name: 'natural', value: d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveNatural"] },
            { name: 'step', value: d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveStep"] },
            { name: 'stepAfter', value: d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveStepAfter"] },
            { name: 'stepBefore', value: d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveStepBefore"] }
        ];
        this.interpolationSelected = 'linear';
        this.interpolationsSelectList = this.interpolations.map((interpolation) => interpolation.name);
    }
    ngAfterViewInit() {
        this.createSvgPathsLines();
    }
    createSvgPathsLines() {
        // Data set
        const lineData = [
            { x: 1, y: 90 }, { x: 20, y: 20 },
            { x: 40, y: 50 }, { x: 60, y: 100 },
            { x: 80, y: 10 }, { x: 100, y: 40 },
            { x: 120, y: 30 }, { x: 140, y: 80 },
            { x: 160, y: 5 }, { x: 180, y: 60 },
            { x: 200, y: 5 }, { x: 220, y: 60 },
            { x: 240, y: 90 }, { x: 260, y: 120 }
        ];
        // Clear the previous svg drawn
        d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"]('#paths svg').remove();
        const svgContainer = d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"]('#paths').append('svg')
            .attr('width', 300)
            .attr('height', 200)
            .style('border', '1px solid black');
        // Generator
        const lineGenerator = d3_shape__WEBPACK_IMPORTED_MODULE_3__["line"]()
            .x((d) => d.x)
            .y((d) => d.y)
            .curve(this.interpolations.find((intplt) => intplt.name === this.interpolationSelected).value);
        // Provide the data to the path container
        svgContainer.append('path')
            .attr('d', lineGenerator(lineData))
            .attr('stroke', 'green')
            .attr('stroke-width', 2)
            .attr('fill', 'yellow');
        // Add the name of the interpolation to the svg as a text element
        svgContainer.append('text')
            .attr('x', 20)
            .attr('y', parseInt(svgContainer.attr('height'), 10) - 20)
            .text(this.interpolationSelected);
    }
};
PathsSvgPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-paths-svg',
        template: __webpack_require__(/*! raw-loader!./page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/paths-svg/page.html"),
        styles: [__webpack_require__(/*! ./page.scss */ "./src/app/pages/paths-svg/page.scss")]
    })
], PathsSvgPage);



/***/ })

}]);
//# sourceMappingURL=pages-paths-svg-module-es2015.js.map