(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-group-element-d3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/group-element-d3/page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/group-element-d3/page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<common-header>D3.js with Ionic</common-header>\n</ion-header>\n\n<ion-content>\n\n\t<h1 class=\"ion-no-margin margin-bottom\">Group Element (D3)</h1>\n\n\n\t<h2 class=\"ion-margin-bottom\">4 SVG basic shape elements with D3.js</h2>\n\t<div class=\"ion-padding-horizontal ion-padding-bottom\">\n\t\t<p>Add an SVG Group Element to the defined SVG Container then add the shapes into this container.</p>\n\t\t<div id=\"svg-element\" class=\"svg-element\"></div>\n\t</div>\n\n\t<h2 class=\"ion-margin-bottom\">Transforming SVG Elements Together with D3.js</h2>\n\n\t<div class=\"ion-padding-horizontal ion-padding-bottom\">\n\t\t<h3 class=\"ion-no-padding\">Translate</h3>\n\t\t<div class=\"svg-element\" id=\"svg-element-transform-translate\" data-transformations='[{\n                \"group\":\"circles\",\n                \"properties\": [\n                    \"translate( 80, 0 )\"\n                ]}]'>\n\t\t</div>\n\n\t\t<h3 class=\"ion-no-padding\">Scale</h3>\n\t\t<div class=\"svg-element\" id=\"svg-element-transform-scale\" data-transformations='[{\n                \"group\": \"circles\",\n                \"properties\": [\n                    \"scale( 2, 1 )\"\n                ]}, {\n                \"group\": \"rectangles\",\n                \"properties\": [\n                    \"scale( 0.5 )\"\n                ]}\n            ]'>\n\t\t</div>\n\n\t\t<h3 class=\"ion-no-padding\">Skew</h3>\n\t\t<textarea ion-prism=\"javascript\">\n            circleGroup.attr('transform', 'skewX( 20 )');\n            rectangleGroup.attr('transform', 'skewY( 8 )');\n        </textarea>\n\t\t<div class=\"svg-element\" id=\"svg-element-transform-skew\" data-transformations='[{\n                \"group\":\"circles\",\n                \"properties\": [\n                    \"skewX( 20 )\"\n                ]}, {\n                \"group\": \"rectangles\",\n                \"properties\": [\n                    \"skewY( 8 )\"\n                ]}\n            ]'>\n\t\t</div>\n\n\t\t<h3 class=\"ion-no-padding\">Matrix</h3>\n\t\t<div class=\"svg-element\" id=\"svg-element-transform-matrix\" data-transformations='[{\n                \"group\":\"circles\",\n                \"properties\": [\n                    \"matrix( 1, 2, 3, 4, 5, 6 )\"\n                ]}\n            ]'>\n\t\t</div>\n\n\t\t<h3 class=\"ion-no-padding\">Rotate</h3>\n\t\t<div class=\"svg-element\" id=\"svg-element-transform-rotate\" data-transformations='[{\n                \"group\":\"circles\",\n                \"properties\": [\n                    \"rotate( 45, 50, 50 )\"\n                ]}, {\n                \"group\": \"rectangles\",\n                \"properties\": [\n                    \"rotate( -5 )\"\n                ]}\n            ]'>\n\t\t</div>\n\t</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/group-element-d3/module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/group-element-d3/module.ts ***!
  \**************************************************/
/*! exports provided: GroupElementD3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupElementD3PageModule", function() { return GroupElementD3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page */ "./src/app/pages/group-element-d3/page.ts");
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/components.module */ "./src/app/shared/components/components.module.ts");








let GroupElementD3PageModule = class GroupElementD3PageModule {
};
GroupElementD3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{ path: '', component: _page__WEBPACK_IMPORTED_MODULE_6__["GroupElementD3Page"] }]),
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        declarations: [_page__WEBPACK_IMPORTED_MODULE_6__["GroupElementD3Page"]]
    })
], GroupElementD3PageModule);



/***/ }),

/***/ "./src/app/pages/group-element-d3/page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/group-element-d3/page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dyb3VwLWVsZW1lbnQtZDMvcGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/group-element-d3/page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/group-element-d3/page.ts ***!
  \************************************************/
/*! exports provided: GroupElementD3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupElementD3Page", function() { return GroupElementD3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/helpers/toolbox.service */ "./src/app/shared/helpers/toolbox.service.ts");




let GroupElementD3Page = class GroupElementD3Page {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.ID = 'GroupElementD3Page';
        this.toolbox = new src_app_shared_helpers_toolbox_service__WEBPACK_IMPORTED_MODULE_3__["Toolbox"](this.ID);
    }
    ngAfterViewInit() {
        this.elementRef.nativeElement.querySelectorAll('.svg-element').forEach((container) => {
            this.createSVG('#' + container.id, JSON.parse(container.getAttribute('data-transformations')));
        });
    }
    createSVG(wrapperId, transformations) {
        const circleData = [
            { cx: 20, cy: 20, radius: 20, color: 'green' },
            { cx: 70, cy: 70, radius: 20, color: 'purple' }
        ];
        const rectangleData = [
            { rx: 110, ry: 110, height: 30, width: 30, color: 'blue' },
            { rx: 160, ry: 160, height: 30, width: 30, color: 'red' }
        ];
        const svgContainer = d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"](wrapperId).append('svg')
            .attr('width', 200)
            .attr('height', 200);
        // Appending an SVG Group Element to the already defined SVG Container
        const circleGroup = svgContainer.append('g');
        const rectangleGroup = svgContainer.append('g');
        // Add circles to the group container
        const circles = circleGroup.selectAll('circle')
            .data(circleData)
            .enter()
            .append('circle');
        circles
            .attr('cx', (d) => d.cx)
            .attr('cy', (d) => d.cy)
            .attr('r', (d) => d.radius)
            .style('fill', (d) => d.color);
        // Add rectangles to the group container
        const rectangles = rectangleGroup.selectAll('rect')
            .data(rectangleData)
            .enter()
            .append('rect');
        rectangles
            .attr('x', (d) => d.rx)
            .attr('y', (d) => d.ry)
            .attr('height', (d) => d.height)
            .attr('width', (d) => d.width)
            .style('fill', (d) => d.color);
        // Transform the groups
        if (transformations) {
            transformations.forEach((transformation) => {
                let group = null;
                switch (transformation.group) {
                    case 'circles':
                        group = circleGroup;
                        break;
                    case 'rectangles':
                        group = rectangleGroup;
                        break;
                }
                if (group) {
                    transformation.properties.forEach((property) => {
                        group.attr('transform', property);
                    });
                }
            });
        }
    }
};
GroupElementD3Page.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
GroupElementD3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-group-element-d3',
        template: __webpack_require__(/*! raw-loader!./page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/group-element-d3/page.html"),
        styles: [__webpack_require__(/*! ./page.scss */ "./src/app/pages/group-element-d3/page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], GroupElementD3Page);



/***/ })

}]);
//# sourceMappingURL=pages-group-element-d3-module-es2015.js.map