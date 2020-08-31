(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-basic-elements-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/basic/elements/page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/basic/elements/page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<common-header>D3.js with Ionic</common-header>\n</ion-header>\n\n<ion-content>\n\n\t<h1 class=\"ion-no-margin ion-margin-bottom\">Basic SVG Elements</h1>\n\n\t<h2>Creating SVG Elements Based on Data</h2>\n\t<div class=\"ion-padding\">\n\t\t<div id=\"circles-basic\"></div>\n\t</div>\n\n\t<h2>Using the SVG Coordinate Space</h2>\n\t<div class=\"ion-padding\">\n\t\t<div id=\"coordinateCircles\"></div>\n\t</div>\n\n\t<footer-links color=\"dark\" class=\"ion-no-margin\" [parent]=\"this\"\n\t\ttutorialUrl=\"https://www.dashingd3js.com/using-json-to-simplify-code\">\n\t</footer-links>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/basic/elements/module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/basic/elements/module.ts ***!
  \************************************************/
/*! exports provided: BasicElementsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicElementsPageModule", function() { return BasicElementsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/components.module */ "./src/app/shared/components/components.module.ts");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page */ "./src/app/pages/basic/elements/page.ts");








let BasicElementsPageModule = class BasicElementsPageModule {
};
BasicElementsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{ path: '', component: _page__WEBPACK_IMPORTED_MODULE_7__["BasicElementsPage"] }]),
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        declarations: [_page__WEBPACK_IMPORTED_MODULE_7__["BasicElementsPage"]]
    })
], BasicElementsPageModule);



/***/ }),

/***/ "./src/app/pages/basic/elements/page.scss":
/*!************************************************!*\
  !*** ./src/app/pages/basic/elements/page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jhc2ljL2VsZW1lbnRzL3BhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/basic/elements/page.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/basic/elements/page.ts ***!
  \**********************************************/
/*! exports provided: BasicElementsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicElementsPage", function() { return BasicElementsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/toolbox.service */ "./src/app/shared/helpers/toolbox.service.ts");




let BasicElementsPage = class BasicElementsPage {
    constructor() {
        this.ID = 'BasicElementsPage';
        this.toolbox = new src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_3__["Toolbox"](this.ID);
        this.toolbox.log('constructor');
    }
    ngOnInit() {
        this.createCircles();
        this.createCoordinateCircles();
    }
    createCircles() {
        const circleRadii = [40, 20, 10];
        const svgContainer = d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"]('#circles-basic').append('svg')
            .attr('width', 300)
            .attr('height', 100)
            .style('border', '1px solid black');
        const circles = svgContainer
            .selectAll('circle')
            .data(circleRadii)
            .enter()
            .append('circle');
        circles
            .attr('cx', 50)
            .attr('cy', 50)
            .attr('r', (d) => d)
            .style('fill', (d) => {
            let returnColor;
            if (d === 40) {
                returnColor = 'green';
            }
            else if (d === 20) {
                returnColor = 'purple';
            }
            else if (d === 10) {
                returnColor = 'red';
            }
            return returnColor;
        });
    }
    createCoordinateCircles() {
        const spaceCircles = [30, 70, 110];
        const svgContainer = d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"]('#coordinateCircles').append('svg')
            .attr('width', 300)
            .attr('height', 200)
            .style('border', '1px solid black');
        const circles = svgContainer.selectAll('circle')
            .data(spaceCircles)
            .enter()
            .append('circle');
        circles
            .attr('cx', (d) => d)
            .attr('cy', (d) => d)
            .attr('r', 20)
            .style('fill', (d) => {
            let returnColor;
            if (d === 30) {
                returnColor = 'green';
            }
            else if (d === 70) {
                returnColor = 'purple';
            }
            else if (d === 110) {
                returnColor = 'red';
            }
            return returnColor;
        });
    }
};
BasicElementsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-basic-elements',
        template: __webpack_require__(/*! raw-loader!./page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/basic/elements/page.html"),
        styles: [__webpack_require__(/*! ./page.scss */ "./src/app/pages/basic/elements/page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BasicElementsPage);



/***/ })

}]);
//# sourceMappingURL=pages-basic-elements-module-es2015.js.map