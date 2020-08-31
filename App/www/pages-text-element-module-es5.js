(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-text-element-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/text-element/page.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/text-element/page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<common-header>D3.js with Ionic</common-header>\n</ion-header>\n\n<ion-content>\n\n\t<h1 class=\"ion-no-margin\" margin-bottom>SVG Text Element</h1>\n\n\t<h2 class=\"ion-margin-bottom\">Text Label in an existing SVG Element</h2>\n\t<div class=\"ion-padding-horizontal ion-padding-bottom\">\n\t\t<h3 class=\"ion-no-padding\">The simple Text element</h3>\n\n\t\t<svg width=\"100\" height=\"100\">\n\t\t\t<circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"green\" />\n\t\t\t<circle cx=\"70\" cy=\"70\" r=\"20\" fill=\"purple\" />\n\t\t\t<text x=\"20\" y=\"20\" font-family=\"sans-serif\" font-size=\"20px\" fill=\"red\">Hello!</text>\n\t\t\t<text x=\"70\" y=\"70\" font-family=\"sans-serif\" font-size=\"20px\" fill=\"red\">Hello!</text>\n\t\t</svg>\n\n\t\t<h3 class=\"ion-no-padding\">Text-anchor attribute</h3>\n\n\t\t<svg width=\"100\" height=\"100\">\n\t\t\t<circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"green\" />\n\t\t\t<circle cx=\"70\" cy=\"70\" r=\"20\" fill=\"purple\" />\n\t\t\t<text text-anchor=\"middle\" x=\"20\" y=\"20\" font-family=\"sans-serif\" font-size=\"20px\" fill=\"red\">Hello!</text>\n\t\t\t<text text-anchor=\"middle\" x=\"70\" y=\"70\" font-family=\"sans-serif\" font-size=\"20px\" fill=\"red\">Hello!</text>\n\t\t</svg>\n\t</div>\n\n\t<h2>SVG Text Element and D3.js</h2>\n\t<div class=\"ion-padding-horizontal ion-padding-bottom\">\n\t\t<div id=\"svg-text\"></div>\n\t</div>\n\n\n\t<footer-links color=\"dark\" class=\"ion-no-margin\" tutorialUrl=\"https://www.dashingd3js.com/svg-text-element\">\n\t</footer-links>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/text-element/module.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/text-element/module.ts ***!
  \**********************************************/
/*! exports provided: TextElementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextElementPageModule", function() { return TextElementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/components.module */ "./src/app/shared/components/components.module.ts");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page */ "./src/app/pages/text-element/page.ts");








var TextElementPageModule = /** @class */ (function () {
    function TextElementPageModule() {
    }
    TextElementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{ path: '', component: _page__WEBPACK_IMPORTED_MODULE_7__["TextElementPage"] }]),
                src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_page__WEBPACK_IMPORTED_MODULE_7__["TextElementPage"]]
        })
    ], TextElementPageModule);
    return TextElementPageModule;
}());



/***/ }),

/***/ "./src/app/pages/text-element/page.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/text-element/page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RleHQtZWxlbWVudC9wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/text-element/page.ts":
/*!********************************************!*\
  !*** ./src/app/pages/text-element/page.ts ***!
  \********************************************/
/*! exports provided: TextElementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextElementPage", function() { return TextElementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/helpers/toolbox.service */ "./src/app/shared/helpers/toolbox.service.ts");





var TextElementPage = /** @class */ (function () {
    function TextElementPage(router, avtivatedRouters) {
        this.router = router;
        this.avtivatedRouters = avtivatedRouters;
        this.ID = 'TextElementPage';
        this.toolbox = new src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_4__["Toolbox"](this.ID);
    }
    TextElementPage.prototype.ngOnInit = function () {
        this.createSVG();
    };
    TextElementPage.prototype.createSVG = function () {
        // Data Set
        var circleData = [
            { cx: 20, cy: 20, radius: 20, color: 'green' },
            { cx: 70, cy: 70, radius: 20, color: 'purple' }
        ];
        // SVG Viewport
        var svgContainer = d3_selection__WEBPACK_IMPORTED_MODULE_3__["select"]('#svg-text').append('svg')
            .attr('width', 200)
            .attr('height', 200);
        // Add circles to the svgContainer
        var circles = svgContainer.selectAll('circle')
            .data(circleData)
            .enter()
            .append('circle');
        // Add the circle attributes
        circles
            .attr('cx', function (d) { return d.cx; })
            .attr('cy', function (d) { return d.cy; })
            .attr('r', function (d) { return d.radius; })
            .style('fill', function (d) { return d.color; });
        // Add the SVG Text Element to the svgContainer
        var text = svgContainer.selectAll('text')
            .data(circleData)
            .enter()
            .append('text');
        // Add the text attributes
        text
            .attr('x', function (d) { return d.cx; })
            .attr('y', function (d) { return d.cy; })
            .text(function (d) { return '( ' + d.cx + ', ' + d.cy + ' )'; })
            .attr('font-family', 'sans-serif')
            .attr('font-size', '20px')
            .attr('fill', 'red');
    };
    TextElementPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    TextElementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-text-element',
            template: __webpack_require__(/*! raw-loader!./page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/text-element/page.html"),
            styles: [__webpack_require__(/*! ./page.scss */ "./src/app/pages/text-element/page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TextElementPage);
    return TextElementPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-text-element-module-es5.js.map