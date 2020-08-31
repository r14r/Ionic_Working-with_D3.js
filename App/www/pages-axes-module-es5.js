(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-axes-module"],{

/***/ "./node_modules/d3-axis/index.js":
/*!***************************************!*\
  !*** ./node_modules/d3-axis/index.js ***!
  \***************************************/
/*! exports provided: axisTop, axisRight, axisBottom, axisLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_axis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/axis */ "./node_modules/d3-axis/src/axis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisTop", function() { return _src_axis__WEBPACK_IMPORTED_MODULE_0__["axisTop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisRight", function() { return _src_axis__WEBPACK_IMPORTED_MODULE_0__["axisRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisBottom", function() { return _src_axis__WEBPACK_IMPORTED_MODULE_0__["axisBottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisLeft", function() { return _src_axis__WEBPACK_IMPORTED_MODULE_0__["axisLeft"]; });




/***/ }),

/***/ "./node_modules/d3-axis/src/array.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-axis/src/array.js ***!
  \*******************************************/
/*! exports provided: slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),

/***/ "./node_modules/d3-axis/src/axis.js":
/*!******************************************!*\
  !*** ./node_modules/d3-axis/src/axis.js ***!
  \******************************************/
/*! exports provided: axisTop, axisRight, axisBottom, axisLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axisTop", function() { return axisTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axisRight", function() { return axisRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axisBottom", function() { return axisBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axisLeft", function() { return axisLeft; });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/d3-axis/src/array.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity */ "./node_modules/d3-axis/src/identity.js");



var top = 1,
    right = 2,
    bottom = 3,
    left = 4,
    epsilon = 1e-6;

function translateX(x) {
  return "translate(" + (x + 0.5) + ",0)";
}

function translateY(y) {
  return "translate(0," + (y + 0.5) + ")";
}

function number(scale) {
  return function(d) {
    return +scale(d);
  };
}

function center(scale) {
  var offset = Math.max(0, scale.bandwidth() - 1) / 2; // Adjust for 0.5px offset.
  if (scale.round()) offset = Math.round(offset);
  return function(d) {
    return +scale(d) + offset;
  };
}

function entering() {
  return !this.__axis;
}

function axis(orient, scale) {
  var tickArguments = [],
      tickValues = null,
      tickFormat = null,
      tickSizeInner = 6,
      tickSizeOuter = 6,
      tickPadding = 3,
      k = orient === top || orient === left ? -1 : 1,
      x = orient === left || orient === right ? "x" : "y",
      transform = orient === top || orient === bottom ? translateX : translateY;

  function axis(context) {
    var values = tickValues == null ? (scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain()) : tickValues,
        format = tickFormat == null ? (scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : _identity__WEBPACK_IMPORTED_MODULE_1__["default"]) : tickFormat,
        spacing = Math.max(tickSizeInner, 0) + tickPadding,
        range = scale.range(),
        range0 = +range[0] + 0.5,
        range1 = +range[range.length - 1] + 0.5,
        position = (scale.bandwidth ? center : number)(scale.copy()),
        selection = context.selection ? context.selection() : context,
        path = selection.selectAll(".domain").data([null]),
        tick = selection.selectAll(".tick").data(values, scale).order(),
        tickExit = tick.exit(),
        tickEnter = tick.enter().append("g").attr("class", "tick"),
        line = tick.select("line"),
        text = tick.select("text");

    path = path.merge(path.enter().insert("path", ".tick")
        .attr("class", "domain")
        .attr("stroke", "#000"));

    tick = tick.merge(tickEnter);

    line = line.merge(tickEnter.append("line")
        .attr("stroke", "#000")
        .attr(x + "2", k * tickSizeInner));

    text = text.merge(tickEnter.append("text")
        .attr("fill", "#000")
        .attr(x, k * spacing)
        .attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));

    if (context !== selection) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);

      tickExit = tickExit.transition(context)
          .attr("opacity", epsilon)
          .attr("transform", function(d) { return isFinite(d = position(d)) ? transform(d) : this.getAttribute("transform"); });

      tickEnter
          .attr("opacity", epsilon)
          .attr("transform", function(d) { var p = this.parentNode.__axis; return transform(p && isFinite(p = p(d)) ? p : position(d)); });
    }

    tickExit.remove();

    path
        .attr("d", orient === left || orient == right
            ? "M" + k * tickSizeOuter + "," + range0 + "H0.5V" + range1 + "H" + k * tickSizeOuter
            : "M" + range0 + "," + k * tickSizeOuter + "V0.5H" + range1 + "V" + k * tickSizeOuter);

    tick
        .attr("opacity", 1)
        .attr("transform", function(d) { return transform(position(d)); });

    line
        .attr(x + "2", k * tickSizeInner);

    text
        .attr(x, k * spacing)
        .text(format);

    selection.filter(entering)
        .attr("fill", "none")
        .attr("font-size", 10)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");

    selection
        .each(function() { this.__axis = position; });
  }

  axis.scale = function(_) {
    return arguments.length ? (scale = _, axis) : scale;
  };

  axis.ticks = function() {
    return tickArguments = _array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(arguments), axis;
  };

  axis.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : _array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_), axis) : tickArguments.slice();
  };

  axis.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : _array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_), axis) : tickValues && tickValues.slice();
  };

  axis.tickFormat = function(_) {
    return arguments.length ? (tickFormat = _, axis) : tickFormat;
  };

  axis.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
  };

  axis.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
  };

  axis.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
  };

  axis.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis) : tickPadding;
  };

  return axis;
}

function axisTop(scale) {
  return axis(top, scale);
}

function axisRight(scale) {
  return axis(right, scale);
}

function axisBottom(scale) {
  return axis(bottom, scale);
}

function axisLeft(scale) {
  return axis(left, scale);
}


/***/ }),

/***/ "./node_modules/d3-axis/src/identity.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-axis/src/identity.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/axes/page.html":
/*!****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/axes/page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<common-header>D3.js with Ionic</common-header>\n</ion-header>\n\n<ion-content>\n\t<h1 class=\"ion-no-margin\">D3.js Axes</h1>\n\n\t<div class=\"ion-padding-horizontal ion-padding-bottom\">\n\t\t<h4 class=\"ion-text-lowercase\">d3Axis.axisBottom</h4>\n\t\t<div id=\"axis-svg\"></div>\n\n\t\t<h4 class=\"ion-text-lowercase\">d3Axis.axisTop</h4>\n\t\t<div id=\"svg-axis-top\" class=\"svg-axis\" data-config='{\n                \"axisPosition\": \"top\",\n                \"width\": 400, \"height\": 100,\n                \"domain\": [0,100], \"range\": [0,300]}'>\n\t\t</div>\n\n\t\t<h4 class=\"ion-text-lowercase\">d3Axis.axisLeft</h4>\n\t\t<div id=\"svg-axis-left\" class=\"svg-axis\" data-config='{\n                \"axisPosition\": \"left\",\n                \"width\": 400, \"height\": 200,\n                \"domain\": [0,100], \"range\": [0,200]}'>\n\t\t</div>\n\n\t\t<h4 class=\"ion-text-lowercase\">d3Axis.axisRight</h4>\n\t\t<div id=\"svg-axis-right\" class=\"svg-axis\" data-config='{\n                \"axisPosition\": \"right\",\n                \"width\": 350, \"height\": 200,\n                \"domain\": [0,100], \"range\": [0,200]}'>\n\t\t</div>\n\t</div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/axes/module.ts":
/*!**************************************!*\
  !*** ./src/app/pages/axes/module.ts ***!
  \**************************************/
/*! exports provided: AxesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxesPageModule", function() { return AxesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/components.module */ "./src/app/shared/components/components.module.ts");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page */ "./src/app/pages/axes/page.ts");








var AxesPageModule = /** @class */ (function () {
    function AxesPageModule() {
    }
    AxesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{ path: '', component: _page__WEBPACK_IMPORTED_MODULE_7__["AxesPage"] }]),
                src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_page__WEBPACK_IMPORTED_MODULE_7__["AxesPage"]]
        })
    ], AxesPageModule);
    return AxesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/axes/page.scss":
/*!**************************************!*\
  !*** ./src/app/pages/axes/page.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F4ZXMvcGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/axes/page.ts":
/*!************************************!*\
  !*** ./src/app/pages/axes/page.ts ***!
  \************************************/
/*! exports provided: AxesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxesPage", function() { return AxesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _scales_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scales/page */ "./src/app/pages/scales/page.ts");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-axis */ "./node_modules/d3-axis/index.js");
/* harmony import */ var src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/helpers/toolbox.service */ "./src/app/shared/helpers/toolbox.service.ts");








var AxesPage = /** @class */ (function () {
    function AxesPage(router, elementRef) {
        this.router = router;
        this.elementRef = elementRef;
        this.ID = 'AxesPage';
        this.toolbox = new src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_7__["Toolbox"](this.ID);
        this.scalePage = _scales_page__WEBPACK_IMPORTED_MODULE_3__["ScalesPage"];
        this.toolbox.log('constructor');
    }
    AxesPage.prototype.ngOnInit = function () {
        this.toolbox.log('constructor');
        this.createAxis();
        this.createSVG();
        this.createOtherAxis();
    };
    AxesPage.prototype.createAxis = function () {
        var axisScale = d3_scale__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]()
            .domain([0, 100])
            .range([0, 300]);
        this.xAxis = d3_axis__WEBPACK_IMPORTED_MODULE_6__["axisBottom"](axisScale);
    };
    AxesPage.prototype.createSVG = function () {
        var svgContainer = d3_selection__WEBPACK_IMPORTED_MODULE_4__["select"]('#axis-svg').append('svg')
            .attr('width', 300)
            .attr('height', 100);
        svgContainer.append('g')
            .call(this.xAxis);
    };
    AxesPage.prototype.createOtherAxis = function () {
        this.elementRef.nativeElement.querySelectorAll('.svg-axis').forEach(function (container) {
            var config = JSON.parse(container.getAttribute('data-config'));
            var svgContainer = d3_selection__WEBPACK_IMPORTED_MODULE_4__["select"]('#' + container.id).append('svg')
                .attr('width', config.width)
                .attr('height', config.height);
            var axisScale = d3_scale__WEBPACK_IMPORTED_MODULE_5__["scaleLinear"]()
                .domain(config.domain)
                .range(config.range);
            var axisGroup = svgContainer.append('g');
            var axis;
            var translateValue = [0, 0];
            switch (config.axisPosition) {
                case 'top':
                    axis = d3_axis__WEBPACK_IMPORTED_MODULE_6__["axisTop"](axisScale);
                    translateValue = [0, 20];
                    break;
                case 'left':
                    axis = d3_axis__WEBPACK_IMPORTED_MODULE_6__["axisLeft"](axisScale);
                    translateValue = [20, 0];
                    break;
                case 'right':
                    axis = d3_axis__WEBPACK_IMPORTED_MODULE_6__["axisRight"](axisScale);
                    break;
                default:
                    axis = d3_axis__WEBPACK_IMPORTED_MODULE_6__["axisBottom"](axisScale);
                    break;
            }
            axisGroup.call(axis);
            axisGroup.attr('transform', 'translate(' + translateValue.join() + ')');
        });
    };
    AxesPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    AxesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-axes',
            template: __webpack_require__(/*! raw-loader!./page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/axes/page.html"),
            styles: [__webpack_require__(/*! ./page.scss */ "./src/app/pages/axes/page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AxesPage);
    return AxesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-axes-module-es5.js.map