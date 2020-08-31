(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-group-element-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/group-element/page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/group-element/page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<common-header>D3.js with Ionic</common-header>\n</ion-header>\n\n<ion-content>\n\n\t<h1 class=\"ion-no-margin margin-bottom\">Group Element (SVG)</h1>\n\n\t<h2 class=\"ion-margin-bottom\">Grouping SVG Elements Together</h2>\n\t<div class=\"ion-padding-horizontal ion-padding-bottom\">\n\t\t<h3 class=\"ion-no-padding\">4 SVG basic shape elements</h3>\n\t\t<svg width=\"200\" height=\"200\">\n\t\t\t<circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"green\" />\n\t\t\t<circle cx=\"70\" cy=\"70\" r=\"20\" fill=\"purple\" />\n\t\t\t<rect x=\"110\" y=\"110\" height=\"30\" width=\"30\" fill=\"blue\" />\n\t\t\t<rect x=\"160\" y=\"160\" height=\"30\" width=\"30\" fill=\"red\" />\n\t\t</svg>\n\n\t\t<h3 class=\"ion-no-padding ion-padding-top\">The same basic shape elements with groups</h3>\n\t\t<svg width=\"200\" height=\"200\">\n\t\t\t<g>\n\t\t\t\t<circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"green\" />\n\t\t\t\t<circle cx=\"70\" cy=\"70\" r=\"20\" fill=\"purple\" />\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<rect x=\"110\" y=\"110\" height=\"30\" width=\"30\" fill=\"blue\" />\n\t\t\t\t<rect x=\"160\" y=\"160\" height=\"30\" width=\"30\" fill=\"red\" />\n\t\t\t</g>\n\t\t</svg>\n\t</div>\n\n\t<h2 class=\"ion-margin-bottom\">Transforming SVG Elements Together</h2>\n\n\t<div class=\"ion-padding-horizontal ion-padding-bottom\">\n\t\t<p>Change attributes, here: adding 80 units to the cx attribute of each circles:</p>\n\n\t\t<svg width=\"200\" height=\"200\">\n\t\t\t<g>\n\t\t\t\t<circle cx=\"100\" cy=\"20\" r=\"20\" fill=\"green\" />\n\t\t\t\t<circle cx=\"150\" cy=\"70\" r=\"20\" fill=\"purple\" />\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<rect x=\"110\" y=\"110\" height=\"30\" width=\"30\" fill=\"blue\" />\n\t\t\t\t<rect x=\"160\" y=\"160\" height=\"30\" width=\"30\" fill=\"red\" />\n\t\t\t</g>\n\t\t</svg>\n\t</div>\n\n\t<h2 class=\"ion-margin-bottom\">SVG Transform Attribute</h2>\n\n\t<div class=\"ion-padding-horizontal ion-padding-bottom\">\n\t\t<h3 class=\"ion-no-padding\">Translate</h3>\n\t\t<p class=\"ion-no-margin margin-bottom\">This transform definition specifies a translation by x and y. This is\n\t\t\tequivalent to\n\t\t\tmatrix(1 0 0 1 x y). If y is not provided, it is assumed to be zero.</p>\n\t\t<svg width=\"200\" height=\"200\">\n\t\t\t<g transform=\"translate(80,0)\">\n\t\t\t\t<circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"green\" />\n\t\t\t\t<circle cx=\"70\" cy=\"70\" r=\"20\" fill=\"purple\" />\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<rect x=\"110\" y=\"110\" height=\"30\" width=\"30\" fill=\"blue\" />\n\t\t\t\t<rect x=\"160\" y=\"160\" height=\"30\" width=\"30\" fill=\"red\" />\n\t\t\t</g>\n\t\t</svg>\n\n\t\t<h3 class=\"ion-no-padding ion-padding-top\">Scale</h3>\n\t\t<p class=\"ion-no-margin margin-bottom\">This transform definition specifies a scale operation by x and y.\n\t\t\tThis is equivalent to matrix(x 0 0 y 0 0). If y is not provided, it is assumed to be equal to x.</p>\n\n\t\t<svg width=\"200\" height=\"200\">\n\t\t\t<g transform=\"scale(2, 1)\">\n\t\t\t\t<circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"green\" />\n\t\t\t\t<circle cx=\"70\" cy=\"70\" r=\"20\" fill=\"purple\" />\n\t\t\t</g>\n\t\t\t<g transform=\"scale(0.5)\">\n\t\t\t\t<rect x=\"110\" y=\"110\" height=\"30\" width=\"30\" fill=\"blue\" />\n\t\t\t\t<rect x=\"160\" y=\"160\" height=\"30\" width=\"30\" fill=\"red\" />\n\t\t\t</g>\n\t\t</svg>\n\n\t\t<h3 class=\"ion-no-padding ion-padding-top\">Skew : skewX(a), skewY(a)</h3>\n\t\t<p class=\"ion-no-margin margin-bottom\">This transform definition specifies a skew transformation along the x or\n\t\t\ty axis by a degrees.</p>\n\n\t\t<svg width=\"200\" height=\"200\">\n\t\t\t<g transform=\"skewX(20)\">\n\t\t\t\t<circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"green\" />\n\t\t\t\t<circle cx=\"70\" cy=\"70\" r=\"20\" fill=\"purple\" />\n\t\t\t</g>\n\t\t\t<g transform=\"skewY(8)\">\n\t\t\t\t<rect x=\"110\" y=\"110\" height=\"30\" width=\"30\" fill=\"blue\" />\n\t\t\t\t<rect x=\"160\" y=\"160\" height=\"30\" width=\"30\" fill=\"red\" />\n\t\t\t</g>\n\t\t</svg>\n\n\t\t<h3 class=\"ion-no-padding ion-padding-top\">Matrix</h3>\n\t\t<p class=\"ion-no-margin margin-bottom\">This transform definition specifies a transformation in the form of a\n\t\t\ttransformation\n\t\t\tmatrix of six values.</p>\n\t\t<svg width=\"200\" height=\"200\">\n\t\t\t<g transform=\"matrix(1,2,3,4,5,6)\">\n\t\t\t\t<circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"green\" />\n\t\t\t\t<circle cx=\"70\" cy=\"70\" r=\"20\" fill=\"purple\" />\n\t\t\t</g>\n\t\t\t<g>\n\t\t\t\t<rect x=\"110\" y=\"110\" height=\"30\" width=\"30\" fill=\"blue\" />\n\t\t\t\t<rect x=\"160\" y=\"160\" height=\"30\" width=\"30\" fill=\"red\" />\n\t\t\t</g>\n\t\t</svg>\n\n\n\t\t<h3 class=\"ion-no-padding ion-padding-top\">Rotate</h3>\n\t\t<p class=\"ion-no-margin\">This transform definition specifies a rotation by a degrees about a given point. If\n\t\t\toptional parameters x and y are not supplied, the rotate is about the origin of the current user\n\t\t\tcoordinate\n\t\t\tsystem</p>\n\t\t<p>If optional parameters x and y are supplied, the rotate is about the point (x, y)</p>\n\n\t\t<svg width=\"200\" height=\"200\">\n\t\t\t<g transform=\"rotate(45, 50, 50)\">\n\t\t\t\t<circle cx=\"20\" cy=\"20\" r=\"20\" fill=\"green\" />\n\t\t\t\t<circle cx=\"70\" cy=\"70\" r=\"20\" fill=\"purple\" />\n\t\t\t</g>\n\t\t\t<g transform=\"rotate(-5)\">\n\t\t\t\t<rect x=\"110\" y=\"110\" height=\"30\" width=\"30\" fill=\"blue\" />\n\t\t\t\t<rect x=\"160\" y=\"160\" height=\"30\" width=\"30\" fill=\"red\" />\n\t\t\t</g>\n\t\t</svg>\n\t</div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/group-element/module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/group-element/module.ts ***!
  \***********************************************/
/*! exports provided: GroupElementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupElementPageModule", function() { return GroupElementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page */ "./src/app/pages/group-element/page.ts");
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/components.module */ "./src/app/shared/components/components.module.ts");








let GroupElementPageModule = class GroupElementPageModule {
};
GroupElementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{ path: '', component: _page__WEBPACK_IMPORTED_MODULE_6__["GroupElementPage"] }]),
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        declarations: [_page__WEBPACK_IMPORTED_MODULE_6__["GroupElementPage"]]
    })
], GroupElementPageModule);



/***/ }),

/***/ "./src/app/pages/group-element/page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/group-element/page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dyb3VwLWVsZW1lbnQvcGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/group-element/page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/group-element/page.ts ***!
  \*********************************************/
/*! exports provided: GroupElementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupElementPage", function() { return GroupElementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/helpers/toolbox.service */ "./src/app/shared/helpers/toolbox.service.ts");



let GroupElementPage = class GroupElementPage {
    constructor() {
        this.ID = 'GroupElementPage';
        this.toolbox = new src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_2__["Toolbox"](this.ID);
    }
};
GroupElementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-group-element',
        template: __webpack_require__(/*! raw-loader!./page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/group-element/page.html"),
        styles: [__webpack_require__(/*! ./page.scss */ "./src/app/pages/group-element/page.scss")]
    })
], GroupElementPage);



/***/ })

}]);
//# sourceMappingURL=pages-group-element-module-es2015.js.map