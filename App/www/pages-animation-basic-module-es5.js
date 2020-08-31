(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-animation-basic-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/animation/basic/page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/animation/basic/page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<common-header>D3.js with Ionic</common-header>\n</ion-header>\n\n<ion-content>\n\t<h1 class=\"ion-no-margin\">Demo 1</h1>\n\t<ion-button (click)=\"demo1_set_background()\">Background</ion-button>\n\t<ion-button (click)=\"demo1_init()\">Init</ion-button>\n\t<ion-button (click)=\"demo1()\">Run</ion-button>\n\n\t<div>\n\t\t<svg id=\"svg\" width=\"960px\" height=\"400px\">\n\t\t\t<rect id=\"playground1\" x=\"10\" y=\"200\" width=\"200\" height=\"30\" stroke=\"black\" fill=\"#69b3a2\"\n\t\t\t\tstroke-width=\"1\" />\n\t\t</svg>\n\t</div>\n\n\t<h1 class=\"ion-no-margin\">Demo 2: Trigger transition with a button</h1>\n\t<ion-button (click)=\"demo2()\">Run</ion-button>\n\n\t<div>\n\t\t<svg width=\"960px\" height=\"400px\">\n\t\t\t<rect id=\"playground2\" x=\"10\" y=\"200\" width=\"200\" height=\"30\" stroke=\"black\" fill=\"#69b3a2\"\n\t\t\t\tstroke-width=\"1\" />\n\t\t</svg>\n\t</div>\n\n\t<h1 class=\"ion-no-margin\">Demo 3: Piping transitions</h1>\n\t<button onclick=\"demo3()\">Run</button>\n\n\t<div>\n\t\t<svg width=\"960px\" height=\"400px\">\n\t\t\t<rect id=\"playground3\" x=\"10\" y=\"200\" width=\"200\" height=\"30\" stroke=\"black\" fill=\"#69b3a2\"\n\t\t\t\tstroke-width=\"1\" />\n\t\t</svg>\n\t</div>\n\n\t<h1 class=\"ion-no-margin\">Demo 4: Adding delay between elements</h1>\n\t<button onclick=\"demo4_init()\">Init</button>\n\t<button onclick=\"demo4()\">Run</button>\n\n\t<div>\n\t\t<svg width=\"960px\" height=\"400px\">\n\t\t\t<rect id=\"playground4\" x=\"10\" y=\"200\" width=\"200\" height=\"30\" stroke=\"black\" fill=\"#69b3a2\"\n\t\t\t\tstroke-width=\"1\" />\n\t\t</svg>\n\t</div>\n\n\t<h1 class=\"ion-no-margin\">Demo 5: Axis Transition</h1>\n\t<button onclick=\"demo5_init()\">Init</button>\n\t<button onclick=\"demo5()\">Run</button>\n\n\t<div>\n\t\t<svg width=\"960px\" height=\"400px\">\n\t\t\t<rect id=\"playground5\" x=\"10\" y=\"200\" width=\"200\" height=\"30\" stroke=\"black\" fill=\"#69b3a2\"\n\t\t\t\tstroke-width=\"1\" />\n\t\t</svg>\n\t</div>\n\n\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/animation/basic/module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/animation/basic/module.ts ***!
  \*************************************************/
/*! exports provided: AnimationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationPageModule", function() { return AnimationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/components.module */ "./src/app/shared/components/components.module.ts");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page */ "./src/app/pages/animation/basic/page.ts");








var AnimationPageModule = /** @class */ (function () {
    function AnimationPageModule() {
    }
    AnimationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{ path: '', component: _page__WEBPACK_IMPORTED_MODULE_7__["AnimationPage"] }]),
                src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_page__WEBPACK_IMPORTED_MODULE_7__["AnimationPage"]]
        })
    ], AnimationPageModule);
    return AnimationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/animation/basic/page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/animation/basic/page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuaW1hdGlvbi9iYXNpYy9wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/animation/basic/page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/animation/basic/page.ts ***!
  \***********************************************/
/*! exports provided: AnimationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationPage", function() { return AnimationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-axis */ "./node_modules/d3-axis/index.js");
/* harmony import */ var src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/helpers/toolbox.service */ "./src/app/shared/helpers/toolbox.service.ts");







var AnimationPage = /** @class */ (function () {
    function AnimationPage(router, elementRef) {
        this.router = router;
        this.elementRef = elementRef;
        this.ID = 'AnimationPage';
        this.toolbox = new src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_6__["Toolbox"](this.ID);
        this.toolbox.log('constructor');
    }
    AnimationPage.prototype.ngOnInit = function () {
        this.toolbox.log('constructor');
    };
    AnimationPage.prototype.demo1_init = function () {
        this.toolbox.log('demo1_init');
    };
    AnimationPage.prototype.demo1 = function () {
        this.toolbox.log('demo1');
        var playground = d3__WEBPACK_IMPORTED_MODULE_3__["select"]("#playground1");
        this.toolbox.log('demo1', 'playground = ' + JSON.stringify(playground));
        this.toolbox.log('demo1', 'playground = ' + typeof (playground));
        playground
            // .transition()
            // .duration(2000)
            .attr("width", "400");
    };
    AnimationPage.prototype.demo1_set_background = function () {
        this.toolbox.log('demo1_set_background');
        var svg = d3__WEBPACK_IMPORTED_MODULE_3__["select"]("#svg");
        this.toolbox.log('demo1_set_background', 'svg = ' + svg);
        svg
            .transition()
            .style("color", "red");
    };
    AnimationPage.prototype.demo2 = function () {
        d3__WEBPACK_IMPORTED_MODULE_3__["select"]("#playground2")
            .transition()
            .delay(100)
            .duration(2000)
            .attr("width", "400");
    };
    AnimationPage.prototype.demo3 = function () {
        d3__WEBPACK_IMPORTED_MODULE_3__["select"]("#playground3")
            // First, make the bar wider
            .transition()
            .duration(2000)
            .attr("width", "400")
            // Second, higher
            .transition()
            .attr("height", "100")
            // Change its color
            .transition()
            .style("fill", "red")
            // And now very small
            .transition()
            .duration(200)
            .attr("height", "10")
            .attr("width", "10");
    };
    AnimationPage.prototype.demo4_init = function () {
        var position = [50, 100, 150, 200, 250, 300, 350];
        // Add circles at the top
        d3__WEBPACK_IMPORTED_MODULE_3__["select"]("#dataviz_delay")
            .selectAll("mycircles")
            .data(position)
            .enter()
            .append("circle")
            .attr("cx", function (d) { return d; })
            .attr("cy", 40)
            .attr("r", 10);
    };
    // Animation: put them down one by one:
    AnimationPage.prototype.demo4 = function () {
        d3__WEBPACK_IMPORTED_MODULE_3__["selectAll"]("circle")
            .transition()
            .duration(2000)
            .attr("cy", 300)
            .delay(function (i) { return (i * 10); });
    };
    AnimationPage.prototype.demo5_init = function () {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_3__["select"]("#svgAxisTransition");
        // Create the scale
        this.scaleX = d3_scale__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"]()
            .domain([0, 100]) // This is what is written on the Axis: from 0 to 100
            .range([10, 400]); // This is where the axis is placed: from 100 px to 800px
        // Draw the axis
        this.svg.append("g")
            .attr("transform", "translate(0,200)") // This controls the vertical position of the Axis
            .call(d3_axis__WEBPACK_IMPORTED_MODULE_5__["axisBottom"](this.scaleX))
            .attr("class", "myAxis"); // Give a class to this element: we'll have to call it later
    };
    AnimationPage.prototype.demo5 = function () {
        // Change the scale of the axis
        this.scaleX.domain([0, 1000]);
        // Update the axis
        this.svg.select(".myAxis")
            .transition()
            .duration(3000)
            .call(d3_axis__WEBPACK_IMPORTED_MODULE_5__["axisBottom"](this.scaleX));
    };
    AnimationPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    AnimationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-animation',
            template: __webpack_require__(/*! raw-loader!./page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/animation/basic/page.html"),
            styles: [__webpack_require__(/*! ./page.scss */ "./src/app/pages/animation/basic/page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AnimationPage);
    return AnimationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-animation-basic-module-es5.js.map