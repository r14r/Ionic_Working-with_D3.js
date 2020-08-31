(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-countdown-timer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/countdown-timer/page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/countdown-timer/page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<common-header>Countdown Timer</common-header>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<h3 class=\"page-header-text\">Ring Countdown Timer Component Demo</h3>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<ion-col col-12 class=\"svg-column\">\n\t\t\t\t<ring-timer id=\"ring-timer-gauge1\" timerAction={{ringTimerAction}} warmUpFor={{warmUpFor}}\n\t\t\t\t\tcountdownFor={{countdownFor}} warningFor={{warningFor}} (finished)=\"onFinished($event)\">\n\t\t\t\t</ring-timer>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col class=\"disappearing-col\">\n\t\t\t</ion-col>\n\t\t\t<ion-col col-33 control-grid-col class=\"button-grid-col\">\n\t\t\t\t<button ion-button block color=primary [disabled]=\"startMicTimerBtnDisabled\"\n\t\t\t\t\t(click)=\"onStartMicTimer()\">\n\t\t\t\t\t<ion-icon name=\"play\"></ion-icon>\n\t\t\t\t</button>\n\t\t\t</ion-col>\n\t\t\t<ion-col col-33 control-grid-col class=\"button-grid-col\">\n\t\t\t\t<button ion-button block color=primary [disabled]=\"pauseMicTimerBtnDisabled\"\n\t\t\t\t\t(click)=\"onPauseMicTimer()\">\n\t\t\t\t\t<ion-icon name=\"pause\"></ion-icon>\n\t\t\t\t</button>\n\t\t\t</ion-col>\n\t\t\t<ion-col col-33 control-grid-col class=\"button-grid-col\">\n\t\t\t\t<button ion-button block color=primary [disabled]=\"stopMicTimerBtnDisabled\" (click)=\"onStopMicTimer()\">\n\t\t\t\t\t<ion-icon name=\"square\"></ion-icon>\n\t\t\t\t</button>\n\t\t\t</ion-col>\n\t\t\t<ion-col class=\"disappearing-col\">\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t</ion-col>\n\t\t\t<ion-col class=\"control-cols\">\n\t\t\t\t<ion-row col-100 class=\"special\">\n\t\t\t\t\t<p class=\"control-label-text\">Warm Up Time (ms)</p>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row class='control-rows-sub'>\n\t\t\t\t\t<ion-col col-33 control-grid-col class=\"control-cols-sub\">\n\t\t\t\t\t\t<button ion-button block class=\"small-icon-button-warm-up sib-right\"\n\t\t\t\t\t\t\t[disabled]=\"warmupDownBtnDisabled\" (click)=\"onWarmupDown()\" item-right>\n\t\t\t\t\t\t\t<ion-icon name=\"arrow-down\" class=\"small-icon\"></ion-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col col-33 control-grid-col class=\"control-cols-sub\">\n\t\t\t\t\t\t<ion-label class='control-text-input' text-center>{{warmUpFor}}</ion-label>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col col-33 control-grid-col class=\"control-cols-sub\">\n\t\t\t\t\t\t<button ion-button block class=\"small-icon-button-warm-up sib-left\"\n\t\t\t\t\t\t\t[disabled]=\"warmupUpBtnDisabled\" (click)=\"onWarmupUp()\" item-left>\n\t\t\t\t\t\t\t<ion-icon name=\"arrow-up\" class=\"small-icon\"></ion-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t</ion-col>\n\t\t\t<ion-col class=\"control-cols\">\n\t\t\t\t<ion-row col-100 class=\"special\">\n\t\t\t\t\t<p class=\"control-label-text\">Countdown Time (ms)</p>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row class='control-rows-sub'>\n\t\t\t\t\t<ion-col col-33 control-grid-col>\n\t\t\t\t\t\t<button ion-button block round class=\"small-icon-button-countdown sib-right\"\n\t\t\t\t\t\t\t[disabled]=\"countdownDownBtnDisabled\" (click)=\"onCountdownDown()\">\n\t\t\t\t\t\t\t<ion-icon name=\"arrow-down\" class=\"small-icon\"></ion-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col col-33 control-grid-col>\n\t\t\t\t\t\t<ion-label class='control-text-input' text-center>{{countdownFor}}</ion-label>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col col-33 control-grid-col>\n\t\t\t\t\t\t<button ion-button block round class=\"small-icon-button-countdown sib-left\"\n\t\t\t\t\t\t\t[disabled]=\"countdownUpBtnDisabled\" (click)=\"onCountdownUp()\">\n\t\t\t\t\t\t\t<ion-icon name=\"arrow-up\" class=\"small-icon\"></ion-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t</ion-col>\n\t\t\t<ion-col class=\"control-cols\">\n\t\t\t\t<ion-row col-100 class=\"special\">\n\t\t\t\t\t<p class=\"control-label-text\">Warning Time (ms)</p>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row class='control-rows-sub'>\n\t\t\t\t\t<ion-col col-33 control-grid-col>\n\t\t\t\t\t\t<button ion-button block round class=\"small-icon-button-warning sib-right\"\n\t\t\t\t\t\t\t[disabled]=\"warningDownBtnDisabled\" (click)=\"onWarningDown()\">\n\t\t\t\t\t\t\t<ion-icon name=\"arrow-down\" class=\"small-icon\"></ion-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col col-33 control-grid-col>\n\t\t\t\t\t\t<ion-label class='control-text-input' text-center>{{warningFor}}</ion-label>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col col-33 control-grid-col>\n\t\t\t\t\t\t<button ion-button block round class=\"small-icon-button-warning sib-left\"\n\t\t\t\t\t\t\t[disabled]=\"warningUpBtnDisabled\" (click)=\"onWarningUp()\">\n\t\t\t\t\t\t\t<ion-icon name=\"arrow-up\" class=\"small-icon\"></ion-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t</ion-grid>\n\n\t<p>The warm-up time gives the signal that the countdown is about to start.</p>\n\t<p>The warning time changes the dial colour to red near the end of the countdown period.</p>\n\t<p>Increasing the countdown beyond 60,000ms, will introduce an additional outer ring for the minutes.</p>\n\t<p>After the minutes ring, hour and day rings will be added as required, though with this interface that would\n\t\trequire\n\t\ta large amount of clicking.\n\t</p>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/countdown-timer/module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/countdown-timer/module.ts ***!
  \*************************************************/
/*! exports provided: CountdownTimerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownTimerPageModule", function() { return CountdownTimerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page */ "./src/app/pages/countdown-timer/page.ts");
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/components.module */ "./src/app/shared/components/components.module.ts");








var CountdownTimerPageModule = /** @class */ (function () {
    function CountdownTimerPageModule() {
    }
    CountdownTimerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{ path: '', component: _page__WEBPACK_IMPORTED_MODULE_6__["CountdownTimerPage"] }]),
                src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_page__WEBPACK_IMPORTED_MODULE_6__["CountdownTimerPage"]]
        })
    ], CountdownTimerPageModule);
    return CountdownTimerPageModule;
}());



/***/ }),

/***/ "./src/app/pages/countdown-timer/page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/countdown-timer/page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-home ion-grid {\n  padding: 0;\n}\npage-home .page-header-text {\n  text-align: center;\n  color: cornflowerblue;\n}\npage-home ion-row {\n  -webkit-box-flex: 1;\n          flex: 1;\n  border-width: 0px;\n  border-style: solid;\n  border-bottom-color: mediumseagreen;\n  border-top-color: mediumseagreen;\n}\npage-home ion-col {\n  -webkit-box-flex: 1;\n          flex: 1;\n  border-width: 0px;\n  border-style: solid;\n  border-left-color: blueviolet;\n  border-right-color: blueviolet;\n}\npage-home .control-cols {\n  min-width: 13em;\n}\npage-home .control-cols-sub {\n  min-width: 4em;\n}\npage-home .control-rows-sub {\n  padding: 0;\n  max-height: 28px;\n}\npage-home .control-rows-sub .label {\n  margin: 0;\n}\npage-home .disappearing-col {\n  min-width: 0;\n}\npage-home .svg-column {\n  text-align: center;\n}\npage-home .button-grid-col {\n  max-width: 4em;\n  min-width: 2.5em;\n}\npage-home .control-grid-col {\n  max-width: 4em;\n  min-width: 2.5em;\n  border: solid;\n  border-top-width: 2px;\n  border-top-color: red;\n}\npage-home .special {\n  padding: 0;\n  height: 18px;\n  background-color: lightblue;\n  border-top: 0px solid;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom: 1px solid;\n  border-bottom-color: darkblue;\n}\npage-home .special p {\n  color: darkblue;\n}\npage-home .control-label-text {\n  font-size: 8pt;\n  margin-top: 2px;\n  margin-left: 8px;\n  margin-bottom: 2px;\n}\npage-home .control-text-input {\n  min-height: 18px;\n  position: relative;\n  top: 4px;\n  border-width: 0px;\n  border-style: solid;\n}\npage-home div.item-inner {\n  padding-right: 0px !important;\n}\npage-home .small-icon {\n  font-size: 14px;\n}\npage-home .small-icon-button, page-home .small-icon-button-warning, page-home .small-icon-button-countdown, page-home .small-icon-button-warm-up {\n  height: 2.5rem;\n  vertical-align: middle;\n  min-width: 1em;\n  max-width: 3.6em;\n  position: absolute;\n  padding: 0;\n  background-color: transparent;\n  color: cornflowerblue;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 5px;\n  opacity: 0.8;\n}\npage-home .sib-right {\n  position: absolute;\n  right: 0.25em;\n  top: 0;\n}\npage-home .sib-left {\n  position: absolute;\n  left: 0.25em;\n  top: 0;\n}\npage-home .small-icon-button-warm-up {\n  border-color: orange;\n}\npage-home .small-icon-button-countdown {\n  border-color: seagreen;\n}\npage-home .small-icon-button-warning {\n  border-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TaGFyZWQvQ0xPVUQvRGV2ZWxvcG1lbnQuR2l0SHViL1JlcG9zaXRvcmllcy5Gcm9tR2l0aHViL3JlcG9zaXRvcmllcy9pb25pYy10b29sYm94L1dvcmtpbmctd2l0aF9EMy5qcy9zcmMvYXBwL3BhZ2VzL2NvdW50ZG93bi10aW1lci9wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvdW50ZG93bi10aW1lci9wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxVQUFBO0FDRFI7QURJSTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUNGUjtBRE1JO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7QUNKUjtBRFFJO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUNOUjtBRFNJO0VBQ0ksZUFBQTtBQ1BSO0FEU0k7RUFDSSxjQUFBO0FDUFI7QURTSTtFQUNJLFVBQUE7RUFJQSxnQkFBQTtBQ1ZSO0FET1E7RUFDSSxTQUFBO0FDTFo7QURTSTtFQUNJLFlBQUE7QUNQUjtBRFVJO0VBQ0ksa0JBQUE7QUNSUjtBRFdJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDVFI7QURZSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FDVlI7QURhSTtFQUlJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDZCQUFBO0FDZFI7QURJUTtFQUNJLGVBQUE7QUNGWjtBRGNJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDWlI7QURjSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ1pSO0FEZUk7RUFDSSw2QkFBQTtBQ2JSO0FEZ0JJO0VBQ0ksZUFBQTtBQ2RSO0FEaUJJO0VBQ0ksY0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNmUjtBRGlCSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7QUNmUjtBRGlCSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7QUNmUjtBRGtCSTtFQUVJLG9CQUFBO0FDakJSO0FEbUJJO0VBRUksc0JBQUE7QUNsQlI7QURvQkk7RUFFSSxpQkFBQTtBQ25CUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvdW50ZG93bi10aW1lci9wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLWhvbWUge1xuXG4gICAgaW9uLWdyaWQge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cblxuICAgIC5wYWdlLWhlYWRlci10ZXh0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XG4gICAgfVxuXG4gICAgXG4gICAgaW9uLXJvdyB7IC8vIGJvcmRlciBzdHlsZXMganVzdCBoZXJlIGZvciBsYXlvdXQgaW5zcGVjdHMgaW4gdGVzdGluZ1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBib3JkZXItd2lkdGg6IDBweDtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogbWVkaXVtc2VhZ3JlZW47XG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IG1lZGl1bXNlYWdyZWVuO1xuXG4gICAgfVxuICAgIFxuICAgIGlvbi1jb2wgeyAvLyBib3JkZXIgc3R5bGVzIGp1c3QgaGVyZSBmb3IgbGF5b3V0IGluc3BlY3RzIGluIHRlc3RpbmdcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBibHVldmlvbGV0O1xuICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6IGJsdWV2aW9sZXQ7XG4gICAgfVxuXG4gICAgLmNvbnRyb2wtY29sc3tcbiAgICAgICAgbWluLXdpZHRoOiAxM2VtO1xuICAgIH1cbiAgICAuY29udHJvbC1jb2xzLXN1YntcbiAgICAgICAgbWluLXdpZHRoOiA0ZW07XG4gICAgfVxuICAgIC5jb250cm9sLXJvd3Mtc3Vie1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIG1heC1oZWlnaHQ6IDI4cHg7XG4gICAgfVxuICAgIC5kaXNhcHBlYXJpbmctY29sIHtcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgIH1cblxuICAgIC5zdmctY29sdW1uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgIFxuICAgIC5idXR0b24tZ3JpZC1jb2wge1xuICAgICAgICBtYXgtd2lkdGg6IDQuMGVtO1xuICAgICAgICBtaW4td2lkdGg6IDIuNWVtO1xuICAgIH1cblxuICAgIC5jb250cm9sLWdyaWQtY29sIHtcbiAgICAgICAgbWF4LXdpZHRoOiA0LjBlbTtcbiAgICAgICAgbWluLXdpZHRoOiAyLjVlbTtcbiAgICAgICAgYm9yZGVyOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXRvcC13aWR0aDogMnB4O1xuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiByZWQ7XG4gICAgfVxuXG4gICAgLnNwZWNpYWx7XG4gICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6IGRhcmtibHVlO1xuICAgICAgICB9XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICAgICAgICBib3JkZXItdG9wOiAwcHggc29saWQ7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiBkYXJrYmx1ZTtcbiAgICB9XG5cbiAgICAuY29udHJvbC1sYWJlbC10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiA4cHQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIH1cbiAgICAuY29udHJvbC10ZXh0LWlucHV0e1xuICAgICAgICBtaW4taGVpZ2h0OiAxOHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogNHB4O1xuICAgICAgICBib3JkZXItd2lkdGg6IDBweDtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICB9XG5cbiAgICBkaXYuaXRlbS1pbm5lciB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5zbWFsbC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC5zbWFsbC1pY29uLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBtaW4td2lkdGg6IDFlbTtcbiAgICAgICAgbWF4LXdpZHRoOiAzLjZlbTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgIFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIG9wYWNpdHk6IDAuODsgICAgICAgICAgICAgIFxuICAgIH1cbiAgICAuc2liLXJpZ2h0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMC4yNWVtO1xuICAgICAgICB0b3A6IDA7XG4gICAgfVxuICAgIC5zaWItbGVmdCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMC4yNWVtO1xuICAgICAgICB0b3A6IDA7XG4gICAgfVxuICAgIFxuICAgIC5zbWFsbC1pY29uLWJ1dHRvbi13YXJtLXVwIHtcbiAgICAgICAgQGV4dGVuZCAuc21hbGwtaWNvbi1idXR0b247XG4gICAgICAgIGJvcmRlci1jb2xvcjogb3JhbmdlO1xuICAgIH1cbiAgICAuc21hbGwtaWNvbi1idXR0b24tY291bnRkb3duIHtcbiAgICAgICAgQGV4dGVuZCAuc21hbGwtaWNvbi1idXR0b247XG4gICAgICAgIGJvcmRlci1jb2xvcjogc2VhZ3JlZW47XG4gICAgfVxuICAgIC5zbWFsbC1pY29uLWJ1dHRvbi13YXJuaW5nIHtcbiAgICAgICAgQGV4dGVuZCAuc21hbGwtaWNvbi1idXR0b247XG4gICAgICAgIGJvcmRlci1jb2xvcjogcmVkO1xuICAgIH1cblxufVxuXG4iLCJwYWdlLWhvbWUgaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwO1xufVxucGFnZS1ob21lIC5wYWdlLWhlYWRlci10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XG59XG5wYWdlLWhvbWUgaW9uLXJvdyB7XG4gIGZsZXg6IDE7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiBtZWRpdW1zZWFncmVlbjtcbiAgYm9yZGVyLXRvcC1jb2xvcjogbWVkaXVtc2VhZ3JlZW47XG59XG5wYWdlLWhvbWUgaW9uLWNvbCB7XG4gIGZsZXg6IDE7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItbGVmdC1jb2xvcjogYmx1ZXZpb2xldDtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBibHVldmlvbGV0O1xufVxucGFnZS1ob21lIC5jb250cm9sLWNvbHMge1xuICBtaW4td2lkdGg6IDEzZW07XG59XG5wYWdlLWhvbWUgLmNvbnRyb2wtY29scy1zdWIge1xuICBtaW4td2lkdGg6IDRlbTtcbn1cbnBhZ2UtaG9tZSAuY29udHJvbC1yb3dzLXN1YiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1heC1oZWlnaHQ6IDI4cHg7XG59XG5wYWdlLWhvbWUgLmNvbnRyb2wtcm93cy1zdWIgLmxhYmVsIHtcbiAgbWFyZ2luOiAwO1xufVxucGFnZS1ob21lIC5kaXNhcHBlYXJpbmctY29sIHtcbiAgbWluLXdpZHRoOiAwO1xufVxucGFnZS1ob21lIC5zdmctY29sdW1uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxucGFnZS1ob21lIC5idXR0b24tZ3JpZC1jb2wge1xuICBtYXgtd2lkdGg6IDRlbTtcbiAgbWluLXdpZHRoOiAyLjVlbTtcbn1cbnBhZ2UtaG9tZSAuY29udHJvbC1ncmlkLWNvbCB7XG4gIG1heC13aWR0aDogNGVtO1xuICBtaW4td2lkdGg6IDIuNWVtO1xuICBib3JkZXI6IHNvbGlkO1xuICBib3JkZXItdG9wLXdpZHRoOiAycHg7XG4gIGJvcmRlci10b3AtY29sb3I6IHJlZDtcbn1cbnBhZ2UtaG9tZSAuc3BlY2lhbCB7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICBib3JkZXItdG9wOiAwcHggc29saWQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiBkYXJrYmx1ZTtcbn1cbnBhZ2UtaG9tZSAuc3BlY2lhbCBwIHtcbiAgY29sb3I6IGRhcmtibHVlO1xufVxucGFnZS1ob21lIC5jb250cm9sLWxhYmVsLXRleHQge1xuICBmb250LXNpemU6IDhwdDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5wYWdlLWhvbWUgLmNvbnRyb2wtdGV4dC1pbnB1dCB7XG4gIG1pbi1oZWlnaHQ6IDE4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0cHg7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxucGFnZS1ob21lIGRpdi5pdGVtLWlubmVyIHtcbiAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5wYWdlLWhvbWUgLnNtYWxsLWljb24ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5wYWdlLWhvbWUgLnNtYWxsLWljb24tYnV0dG9uLCBwYWdlLWhvbWUgLnNtYWxsLWljb24tYnV0dG9uLXdhcm5pbmcsIHBhZ2UtaG9tZSAuc21hbGwtaWNvbi1idXR0b24tY291bnRkb3duLCBwYWdlLWhvbWUgLnNtYWxsLWljb24tYnV0dG9uLXdhcm0tdXAge1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWluLXdpZHRoOiAxZW07XG4gIG1heC13aWR0aDogMy42ZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3BhY2l0eTogMC44O1xufVxucGFnZS1ob21lIC5zaWItcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwLjI1ZW07XG4gIHRvcDogMDtcbn1cbnBhZ2UtaG9tZSAuc2liLWxlZnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDAuMjVlbTtcbiAgdG9wOiAwO1xufVxucGFnZS1ob21lIC5zbWFsbC1pY29uLWJ1dHRvbi13YXJtLXVwIHtcbiAgYm9yZGVyLWNvbG9yOiBvcmFuZ2U7XG59XG5wYWdlLWhvbWUgLnNtYWxsLWljb24tYnV0dG9uLWNvdW50ZG93biB7XG4gIGJvcmRlci1jb2xvcjogc2VhZ3JlZW47XG59XG5wYWdlLWhvbWUgLnNtYWxsLWljb24tYnV0dG9uLXdhcm5pbmcge1xuICBib3JkZXItY29sb3I6IHJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/countdown-timer/page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/countdown-timer/page.ts ***!
  \***********************************************/
/*! exports provided: CountdownTimerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownTimerPage", function() { return CountdownTimerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/toolbox.service */ "./src/app/shared/helpers/toolbox.service.ts");




var CountdownTimerPage = /** @class */ (function () {
    function CountdownTimerPage(router) {
        this.router = router;
        this.ID = 'BasicElementsPage';
        this.toolbox = new src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_3__["Toolbox"](this.ID);
        this.warmUpFor = 5000;
        this.countdownFor = 20000;
        this.warningFor = 1000;
        this.startMicTimerBtnDisabled = false;
        this.pauseMicTimerBtnDisabled = true;
        this.stopMicTimerBtnDisabled = true;
        // Variables of Disabling Buttons
        this.warmupUpBtnDisabled = false;
        this.countdownUpBtnDisabled = false;
        this.warningUpBtnDisabled = false;
        this.warmupDownBtnDisabled = false;
        this.countdownDownBtnDisabled = false;
        this.warningDownBtnDisabled = false;
        this.toolbox.log('constructor');
    }
    CountdownTimerPage.prototype.ngOnInit = function () {
    };
    CountdownTimerPage.prototype.disableControlBtns = function (disabled) {
        this.warmupUpBtnDisabled = disabled;
        this.countdownUpBtnDisabled = disabled;
        this.warningUpBtnDisabled = disabled;
        this.warmupDownBtnDisabled = disabled;
        this.countdownDownBtnDisabled = disabled;
        this.warningDownBtnDisabled = disabled;
    };
    // **
    // ** actions on micTimer component
    // **
    CountdownTimerPage.prototype.onStartMicTimer = function () {
        this.ringTimerAction = 'start';
        this.micStatus = 'recording';
        this.startMicTimerBtnDisabled = true;
        this.pauseMicTimerBtnDisabled = false;
        this.stopMicTimerBtnDisabled = false;
        this.disableControlBtns(true);
    };
    CountdownTimerPage.prototype.onPauseMicTimer = function () {
        if (this.micStatus !== 'paused') {
            this.ringTimerAction = 'pause';
            this.micStatus = 'paused';
        }
        else {
            this.ringTimerAction = 'unPause';
            this.micStatus = 'recording';
        }
    };
    CountdownTimerPage.prototype.onStopMicTimer = function () {
        this.ringTimerAction = 'stop';
        this.micStatus = 'stopped';
        this.startMicTimerBtnDisabled = false;
        this.pauseMicTimerBtnDisabled = true;
        this.stopMicTimerBtnDisabled = true;
        this.disableControlBtns(false);
    };
    CountdownTimerPage.prototype.onFinished = function () {
        console.log('in home.ts=>onFinished');
        this.ringTimerAction = 'stopped';
        this.micStatus = 'stopped';
        this.startMicTimerBtnDisabled = false;
        this.pauseMicTimerBtnDisabled = true;
        this.stopMicTimerBtnDisabled = true;
        this.disableControlBtns(false);
        console.log('in home.ts=>onFinished');
    };
    CountdownTimerPage.prototype.onWarmupUp = function () {
        console.log('onWarmupUp');
        this.warmUpFor += 1000;
        console.log(this.warmUpFor);
    };
    CountdownTimerPage.prototype.onWarmupDown = function () {
        this.warmUpFor -= 1000;
        this.warmUpFor = Math.max(this.warmUpFor, 0);
    };
    CountdownTimerPage.prototype.onCountdownUp = function () {
        this.countdownFor += 1000;
    };
    CountdownTimerPage.prototype.onCountdownDown = function () {
        this.countdownFor -= 1000;
        // TODO allow the counter to show 1000ms or less (goes down to a single ring)
        this.countdownFor = Math.max(this.countdownFor, 2000);
    };
    CountdownTimerPage.prototype.onWarningUp = function () {
        this.warningFor += 1000;
    };
    CountdownTimerPage.prototype.onWarningDown = function () {
        this.warningFor -= 1000;
        this.warningFor = Math.max(this.warningFor, 0);
    };
    CountdownTimerPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    CountdownTimerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-countdown',
            template: __webpack_require__(/*! raw-loader!./page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/countdown-timer/page.html"),
            styles: [__webpack_require__(/*! ./page.scss */ "./src/app/pages/countdown-timer/page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CountdownTimerPage);
    return CountdownTimerPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-countdown-timer-module-es5.js.map