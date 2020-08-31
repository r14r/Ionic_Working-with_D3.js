(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-animation-arc-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/animation/arc/page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/animation/arc/page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<common-header>D3.js with Ionic</common-header>\n</ion-header>\n\n<ion-content>\n\t<ion-button (click)=\"step()\">Step</ion-button>\n\t<ion-button (click)=\"start()\">Start</ion-button>\n\t<ion-button (click)=\"stop()\">Stop</ion-button>\n\t<ion-button (click)=\"resume()\">Resume</ion-button>\n\n\t<div>\n\t\t<svg id='playground' width=\"100%\" height=\"220\">\n\t\t\t<g transform=\"translate(300, 110)\"></g>\n\t\t</svg>\n\t</div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/animation/arc/module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/animation/arc/module.ts ***!
  \***********************************************/
/*! exports provided: ArcAnimationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArcAnimationPageModule", function() { return ArcAnimationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/components.module */ "./src/app/shared/components/components.module.ts");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page */ "./src/app/pages/animation/arc/page.ts");








var ArcAnimationPageModule = /** @class */ (function () {
    function ArcAnimationPageModule() {
    }
    ArcAnimationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{ path: '', component: _page__WEBPACK_IMPORTED_MODULE_7__["ArcAnimationPage"] }]),
                src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_page__WEBPACK_IMPORTED_MODULE_7__["ArcAnimationPage"]]
        })
    ], ArcAnimationPageModule);
    return ArcAnimationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/animation/arc/page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/animation/arc/page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  margin: 5% 5% 0 5%;\n}\n\nsvg {\n  background-color: white;\n  padding: 5px 0 5px 0;\n}\n\n/* Working */\n\n.playground {\n  fill: red;\n  stroke: none;\n  stroke-width: 1px;\n}\n\npath.playground.outer {\n  fill: red;\n  stroke: red;\n  stroke-width: 1px;\n}\n\npath.playground.inner {\n  fill: lightgreen;\n  stroke: lightgreen;\n  stroke-width: 1px;\n}\n\n/* Working */\n\npath {\n  fill: white;\n  stroke: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TaGFyZWQvQ0xPVUQvRGV2ZWxvcG1lbnQuR2l0SHViL1JlcG9zaXRvcmllcy5Gcm9tR2l0aHViL3JlcG9zaXRvcmllcy9pb25pYy10b29sYm94L1dvcmtpbmctd2l0aF9EMy5qcy9zcmMvYXBwL3BhZ2VzL2FuaW1hdGlvbi9hcmMvcGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hbmltYXRpb24vYXJjL3BhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFBO0FDQ0Q7O0FERUE7RUFDQyx1QkFBQTtFQUNBLG9CQUFBO0FDQ0Q7O0FERUEsWUFBQTs7QUFDQTtFQUNDLFNBQUE7RUFFQSxZQUFBO0VBQ0EsaUJBQUE7QUNBRDs7QURHQTtFQUNDLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNBRDs7QURHQTtFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0FEOztBREdBLFlBQUE7O0FBQ0E7RUFDQyxXQUFBO0VBQ0EsYUFBQTtBQ0FEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYW5pbWF0aW9uL2FyYy9wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcblx0bWFyZ2luOiA1JSA1JSAwIDUlO1xufVxuXG5zdmcge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0cGFkZGluZzogNXB4IDAgNXB4IDA7XG59XG5cbi8qIFdvcmtpbmcgKi9cbi5wbGF5Z3JvdW5kIHtcblx0ZmlsbDogcmVkO1xuXG5cdHN0cm9rZTogbm9uZTtcblx0c3Ryb2tlLXdpZHRoOiAxcHg7XG59XG5cbnBhdGgucGxheWdyb3VuZC5vdXRlciB7XG5cdGZpbGw6IHJlZDtcblx0c3Ryb2tlOiByZWQ7XG5cdHN0cm9rZS13aWR0aDogMXB4O1xufVxuXG5wYXRoLnBsYXlncm91bmQuaW5uZXIge1xuXHRmaWxsOiBsaWdodGdyZWVuO1xuXHRzdHJva2U6IGxpZ2h0Z3JlZW47XG5cdHN0cm9rZS13aWR0aDogMXB4O1xufVxuXG4vKiBXb3JraW5nICovXG5wYXRoIHtcblx0ZmlsbDogd2hpdGU7XG5cdHN0cm9rZTogd2hpdGU7XG59XG4iLCJib2R5IHtcbiAgbWFyZ2luOiA1JSA1JSAwIDUlO1xufVxuXG5zdmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDA7XG59XG5cbi8qIFdvcmtpbmcgKi9cbi5wbGF5Z3JvdW5kIHtcbiAgZmlsbDogcmVkO1xuICBzdHJva2U6IG5vbmU7XG4gIHN0cm9rZS13aWR0aDogMXB4O1xufVxuXG5wYXRoLnBsYXlncm91bmQub3V0ZXIge1xuICBmaWxsOiByZWQ7XG4gIHN0cm9rZTogcmVkO1xuICBzdHJva2Utd2lkdGg6IDFweDtcbn1cblxucGF0aC5wbGF5Z3JvdW5kLmlubmVyIHtcbiAgZmlsbDogbGlnaHRncmVlbjtcbiAgc3Ryb2tlOiBsaWdodGdyZWVuO1xuICBzdHJva2Utd2lkdGg6IDFweDtcbn1cblxuLyogV29ya2luZyAqL1xucGF0aCB7XG4gIGZpbGw6IHdoaXRlO1xuICBzdHJva2U6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/animation/arc/page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/animation/arc/page.ts ***!
  \*********************************************/
/*! exports provided: ArcAnimationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArcAnimationPage", function() { return ArcAnimationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/helpers/toolbox.service */ "./src/app/shared/helpers/toolbox.service.ts");






var ArcAnimationPage = /** @class */ (function () {
    function ArcAnimationPage(router, elementRef) {
        this.router = router;
        this.elementRef = elementRef;
        this.ID = 'ArcAnimationPage';
        this.toolbox = new src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_4__["Toolbox"](this.ID);
        this.curr1 = 180;
        this.curr2 = 90;
        this.stopIntervall = false;
        this.toolbox.log('constructor');
    }
    ArcAnimationPage.prototype.ngOnInit = function () {
        this.toolbox.log('ngOnInit');
        this.playground = d3__WEBPACK_IMPORTED_MODULE_3__["select"]('#playground');
        this.a = d3__WEBPACK_IMPORTED_MODULE_3__["arc"]();
        this.arcInner = this.playground
            .select('g')
            .append('path')
            .classed('playground inner', true);
        this.arcOuter = this.playground
            .select('g')
            .append('path')
            .classed('playground outer', true);
    };
    ArcAnimationPage.prototype.update = function (angelOuter, angelInner) {
        console.log('update', 'inner=' + angelInner + ', outer=' + angelOuter);
        this.dataInner = this.a({
            startAngle: 0,
            endAngle: (angelOuter / 180) * Math.PI,
            innerRadius: 70,
            outerRadius: 90
        });
        this.dataOuter = this.a({
            startAngle: 0,
            endAngle: (angelInner / 180) * Math.PI,
            innerRadius: 50,
            outerRadius: 70
        });
        this.arcInner.attr('d', this.dataOuter);
        this.arcOuter.attr('d', this.dataInner);
        return angelOuter + 1;
    };
    ArcAnimationPage.prototype.stop = function () {
        this.stopIntervall = true;
        console.log('stop_intervall: ysn_stop_intervall=' + this.stopIntervall);
    };
    ArcAnimationPage.prototype.resume = function () {
        this.stopIntervall = false;
        console.log('resume_intervall: ysn_stop_intervall=' + this.stopIntervall);
    };
    ArcAnimationPage.prototype.step = function () {
        this.update(this.curr1, this.curr2);
        this.curr1 += 1;
        if (this.curr1 > 365) {
            this.curr1 = 0;
            this.curr2 += 5;
        }
    };
    ArcAnimationPage.prototype.start = function () {
        var _this = this;
        console.log('start_intervall:');
        var intervall = d3__WEBPACK_IMPORTED_MODULE_3__["interval"](function (elapsed) {
            _this.update(_this.curr1, 360 /* curr2 */);
            _this.curr1 += 1;
            if (_this.curr1 > 365) {
                _this.curr1 = 0;
                _this.curr2 += 5;
            }
            if (_this.curr2 > 356) {
                intervall.stop();
            }
            console.log('d3.interval: stopIntervall=' + _this.stopIntervall);
            if (_this.stopIntervall === true) {
                console.log('d3.interval: stop interval');
                intervall.stop();
            }
        }, 10);
    };
    ArcAnimationPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    ArcAnimationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-animation',
            template: __webpack_require__(/*! raw-loader!./page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/animation/arc/page.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./page.scss */ "./src/app/pages/animation/arc/page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ArcAnimationPage);
    return ArcAnimationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-animation-arc-module-es5.js.map