(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/page.html":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<common-header>D3.js with Ionic</common-header>\n</ion-header>\n\n<ion-content class=\"ion-no-margin ion-no-padding\">\n\n\t<h1 class=\"ion-margin-bottom ion-no-margin\">Welcome Ninja!</h1>\n\n\t<div #boxRef>\n\t\tBOX\n\t</div>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/home/module.ts":
/*!**************************************!*\
  !*** ./src/app/pages/home/module.ts ***!
  \**************************************/
/*! exports provided: DemosHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemosHomePageModule", function() { return DemosHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/components.module */ "./src/app/shared/components/components.module.ts");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page */ "./src/app/pages/home/page.ts");








var DemosHomePageModule = /** @class */ (function () {
    function DemosHomePageModule() {
    }
    DemosHomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{ path: '', component: _page__WEBPACK_IMPORTED_MODULE_7__["DemosHomePage"] }]),
                src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_page__WEBPACK_IMPORTED_MODULE_7__["DemosHomePage"]]
        })
    ], DemosHomePageModule);
    return DemosHomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/page.scss":
/*!**************************************!*\
  !*** ./src/app/pages/home/page.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-home button {\n  -webkit-box-align: baseline;\n          align-items: baseline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TaGFyZWQvQ0xPVUQvRGV2ZWxvcG1lbnQuR2l0SHViL1JlcG9zaXRvcmllcy5Gcm9tR2l0aHViL3JlcG9zaXRvcmllcy9pb25pYy10b29sYm94L1dvcmtpbmctd2l0aF9EMy5qcy9zcmMvYXBwL3BhZ2VzL2hvbWUvcGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL3BhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLDJCQUFBO1VBQUEscUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvcGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicGFnZS1ob21lIHtcblxuICBidXR0b24ge1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgfVxuXG59XG4iLCJwYWdlLWhvbWUgYnV0dG9uIHtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/page.ts":
/*!************************************!*\
  !*** ./src/app/pages/home/page.ts ***!
  \************************************/
/*! exports provided: DemosHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemosHomePage", function() { return DemosHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/helpers/toolbox.service */ "./src/app/shared/helpers/toolbox.service.ts");



var DemosHomePage = /** @class */ (function () {
    function DemosHomePage() {
        this.ID = 'DemosHomePage';
        this.toolbox = new src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_2__["Toolbox"](this.ID);
        this.toolbox.log('constructor');
        try {
            this.toolbox.log('constructor', 'elementRefBox = ' + this.elementRefBox);
            this.toolbox.log('constructor', 'try reading element ref for #boxRef');
            this.box = this.elementRefBox.nativeElement;
        }
        catch (error) {
            console.log('ERROR:', error);
        }
        this.toolbox.log('constructor', 'element #box=' + this.box);
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('boxRef', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DemosHomePage.prototype, "elementRefBox", void 0);
    DemosHomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-samples-home',
            template: __webpack_require__(/*! raw-loader!./page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/page.html"),
            styles: [__webpack_require__(/*! ./page.scss */ "./src/app/pages/home/page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DemosHomePage);
    return DemosHomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-module-es5.js.map