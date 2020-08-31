(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dynamic-svg-coord-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/dynamic-svg-coord/page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/dynamic-svg-coord/page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<common-header>D3.js with Ionic</common-header>\n</ion-header>\n\n<ion-content>\n\n\t<h1 class=\"ion-no-margin\">Dynamic SVG Coordinate Space</h1>\n\n\t<div class=\"ion-padding-horizontal ion-padding-bottom\">\n\t\t<p padding-top>How to make the SVG Coordinate Space scale up and/or down to fit the data?</p>\n\t\t<p padding-bottom>Basically we have to change the width and height value of the SVG container to fit the max X\n\t\t\tand the max Y where the shapes will be drawn.: </p>\n\n\t\t<p padding-top>What are max.x and max.y ?</p>\n\t\t<p padding-bottom>It comes from the getMaxSVG method that does what follows: </p>\n\n\t\t<p padding-top>Result:</p>\n\t\t<div id=\"dynamicSvg\"></div>\n\t</div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/dynamic-svg-coord/module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/dynamic-svg-coord/module.ts ***!
  \***************************************************/
/*! exports provided: DynamicSvgCoordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicSvgCoordPageModule", function() { return DynamicSvgCoordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page */ "./src/app/pages/dynamic-svg-coord/page.ts");
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/components.module */ "./src/app/shared/components/components.module.ts");








var DynamicSvgCoordPageModule = /** @class */ (function () {
    function DynamicSvgCoordPageModule() {
    }
    DynamicSvgCoordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{ path: '', component: _page__WEBPACK_IMPORTED_MODULE_6__["DynamicSvgCoordPage"] }]),
                src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_page__WEBPACK_IMPORTED_MODULE_6__["DynamicSvgCoordPage"]]
        })
    ], DynamicSvgCoordPageModule);
    return DynamicSvgCoordPageModule;
}());



/***/ }),

/***/ "./src/app/pages/dynamic-svg-coord/page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/dynamic-svg-coord/page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2R5bmFtaWMtc3ZnLWNvb3JkL3BhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/dynamic-svg-coord/page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/dynamic-svg-coord/page.ts ***!
  \*************************************************/
/*! exports provided: DynamicSvgCoordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicSvgCoordPage", function() { return DynamicSvgCoordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/toolbox.service */ "./src/app/shared/helpers/toolbox.service.ts");




var DynamicSvgCoordPage = /** @class */ (function () {
    function DynamicSvgCoordPage() {
        this.ID = 'DynamicSvgCoordPage';
        this.toolbox = new src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_3__["Toolbox"](this.ID);
    }
    DynamicSvgCoordPage.prototype.ngOnInit = function () {
        this.createDynamicSvg();
    };
    DynamicSvgCoordPage.prototype.createDynamicSvg = function () {
        var jsonRectangles = [
            { x: 10, y: 10, height: 20, width: 20, color: 'green' },
            { x: 160, y: 40, height: 20, width: 20, color: 'purple' },
            { x: 70, y: 70, height: 20, width: 20, color: 'red' }
        ];
        // Loop through the array of JSON objects to get the max x-coordinate and the max y-coordinate
        var max = this.getMaxSVG(jsonRectangles, 'x', 'y', 'width', 'height');
        var svgContainer = d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"]('#dynamicSvg').append('svg')
            // dynamically change the width and height attributes of the SVG Container/Viewport according to the data
            .attr('width', max.x)
            .attr('height', max.y)
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
    /**
     * The max x-coordinate and max y-coordinate will be the bottom right hand point of the rectangle
     * @param data
     * @param {string} xKey the x key property to loop through the data
     * @param {string} yKey the y key property to loop through the data
     * @param {string} wKey the width key property to loop through the data
     * @param {string} hKey the height key property to loop through the data
     * @returns {{x: number, y: number}}
     */
    DynamicSvgCoordPage.prototype.getMaxSVG = function (data, xKey, yKey, wKey, hKey) {
        var max = {
            x: 0,
            y: 0
        };
        data.forEach(function (item) {
            max.x = Math.max(item[xKey] + item[wKey], max.x);
            max.y = Math.max(item[yKey] + item[hKey], max.y);
        });
        return max;
    };
    DynamicSvgCoordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-dynamic-svg-coord',
            template: __webpack_require__(/*! raw-loader!./page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/dynamic-svg-coord/page.html"),
            styles: [__webpack_require__(/*! ./page.scss */ "./src/app/pages/dynamic-svg-coord/page.scss")]
        })
    ], DynamicSvgCoordPage);
    return DynamicSvgCoordPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-dynamic-svg-coord-module-es5.js.map