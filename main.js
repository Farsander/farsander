(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<router-outlet></router-outlet>-->\r\n\r\n<puregolf-header></puregolf-header>\r\n<puregolf-hero></puregolf-hero>\r\n<puregolf-footer></puregolf-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'PureGolfUI';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hero/hero.component */ "./src/app/hero/hero.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./button/button.component */ "./src/app/button/button.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _hero_hero_component__WEBPACK_IMPORTED_MODULE_6__["HeroComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _button_button_component__WEBPACK_IMPORTED_MODULE_8__["ButtonComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/button/button.component.html":
/*!**********************************************!*\
  !*** ./src/app/button/button.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"type === 'login-desktop'\">\r\n  <a class=\"button-login u-hover-enlarged button-login--desktop\" href=\"#\">\r\n    <img src=\"assets/img/login-icon.png\" alt=\"login\">\r\n    <span class=\"button-login__text text-light u-uppercase\">Login</span>\r\n  </a>\r\n</ng-template>\r\n\r\n<ng-template [ngIf]=\"type === 'login-mobile'\">\r\n  <img src=\"assets/img/login-icon-white.png\" class=\"visible-mobile button-login__icon--mobile\" alt=\"login\">\r\n</ng-template>\r\n\r\n<ng-template [ngIf]=\"type === 'register-desktop'\">\r\n  <a class=\"button-register button button--main u-uppercase visible-desktop u-hover-enlarged\" href=\"#\">\r\n    Register now\r\n  </a>\r\n</ng-template>\r\n\r\n<ng-template [ngIf]=\"type === 'register-mobile'\">\r\n  <img src=\"assets/img/register-icon.png\" class=\"visible-mobile button-register__icon\" alt=\"register\">\r\n</ng-template>\r\n\r\n<ng-template [ngIf]=\"type === 'cta-mobile'\">\r\n  <a href=\"#\" class=\"button button--cta button--cta-mobile\">\r\n    <span class=\"button__text button__text--cta\">Play Now</span>\r\n  </a>\r\n</ng-template>\r\n\r\n<ng-template [ngIf]=\"type === 'cta-desktop'\">\r\n  <a href=\"#\" class=\"button button--cta button--cta-desktop\">\r\n    <span class=\"button__text button__text--cta\">Play Now</span>\r\n  </a>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/button/button.component.less":
/*!**********************************************!*\
  !*** ./src/app/button/button.component.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmSU5fBBc9.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu4mxP.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 900;\n  src: local('Roboto Black'), local('Roboto-Black'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmYUtfBBc9.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Raleway';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Raleway'), local('Raleway-Regular'), url(https://fonts.gstatic.com/s/raleway/v13/1Ptug8zYS_SKggPNyC0ISg.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Raleway';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Raleway Bold'), local('Raleway-Bold'), url(https://fonts.gstatic.com/s/raleway/v13/1Ptrg8zYS_SKggPNwJYtWqZPBQ.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Raleway';\n  font-style: normal;\n  font-weight: 800;\n  src: local('Raleway ExtraBold'), local('Raleway-ExtraBold'), url(https://fonts.gstatic.com/s/raleway/v13/1Ptrg8zYS_SKggPNwIouWqZPBQ.ttf) format('truetype');\n}\n.button {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 900;\n  font-size: 14px;\n  max-width: 270px;\n  padding: 15px 30px;\n  text-align: center;\n  background-size: cover;\n  text-transform: uppercase;\n}\n.button:hover {\n  transition: 0.3s all ease;\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n}\n.button-login {\n  display: flex;\n  align-items: center;\n  color: #ffa800;\n}\n.button-login--desktop {\n  padding-right: 30px;\n}\n.button-login__text {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  padding-left: 15px;\n}\n.button-login__icon--mobile {\n  margin-right: 25px;\n}\n.button-register {\n  position: relative;\n  letter-spacing: 5px;\n}\n.button-register__icon {\n  justify-self: end;\n}\n.button--main {\n  color: #000000;\n  background-image: url(\"/assets/img/button-main-bg.png\");\n}\n.button--cta {\n  color: #ffffff;\n  max-width: 310px;\n  background-image: url(\"/assets/img/button-cta-bg.png\");\n  letter-spacing: 5px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.button--cta-mobile {\n  display: inline-block;\n  width: 100%;\n}\n.button--cta-desktop {\n  display: block;\n  max-width: 100%;\n}\n.button--cta .button__text--cta {\n  position: relative;\n}\n.button--cta .button__text--cta:before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: -50%;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n  width: 34px;\n  height: 34px;\n  background: url(\"/assets/img/trophy-icon.png\") top center no-repeat;\n  background-size: cover;\n}\n@media only screen and (min-width: 1200px) {\n  .button--cta {\n    letter-spacing: 5px;\n  }\n}\n@media only screen and (min-width: 992px) {\n  .button--cta {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    letter-spacing: 3px;\n  }\n}\n@media only screen and (max-width: 992px) {\n  .button-login--desktop {\n    display: none;\n  }\n  .button--cta {\n    font-size: 18px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw5MDAiLCJzcmMvYXBwL2J1dHRvbi9idXR0b24uY29tcG9uZW50Lmxlc3MiLCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheTo0MDAsNzAwLDgwMCIsInNyYy9hcHAvYnV0dG9uL0Q6L1lldmhlbi9Qcm9ncmFtbWluZy9Qcm9qZWN0cy9Wb3ZhL1B1cmVHb2xmL3B1cmVnb2xmX3dlYi9QdXJlR29sZlVJL3NyYy9hcHAvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYnV0dG9uL0Q6L1lldmhlbi9Qcm9ncmFtbWluZy9Qcm9qZWN0cy9Wb3ZhL1B1cmVHb2xmL3B1cmVnb2xmX3dlYi9QdXJlR29sZlVJL3NyYy9zdHlsZXMvY29tbW9uLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4SUFBQTtBQ0NGO0FEQ0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzSUFBQTtBQ0NGO0FEQ0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4SUFBQTtBQ0NGO0FDakJBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMklBQUE7QURtQkY7QUNqQkE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpSkFBQTtBRG1CRjtBQ2pCQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJKQUFBO0FEbUJGO0FFakNBO0VDK0RFLGlDQUFBO0VBQ0EsZ0JBQUE7RUQ5REEsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUZvQ0Y7QUVsQ0U7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUZvQ0o7QUVoQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FGa0NGO0FFL0JBO0VBQ0UsbUJBQUE7QUZpQ0Y7QUU5QkE7RUNzQ0UsaUNBQUE7RUFDQSxnQkFBQTtFRHJDQSxrQkFBQTtBRmlDRjtBRTlCQTtFQUNFLGtCQUFBO0FGZ0NGO0FFN0JBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBRitCRjtBRTVCQTtFQUNFLGlCQUFBO0FGOEJGO0FFM0JBO0VBQ0UsY0FBQTtFQUNBLHVEQUFBO0FGNkJGO0FFMUJBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0RBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUY0QkY7QUUxQkU7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUY0Qko7QUV6QkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBRjJCSjtBRTFDQTtFQW1CSSxrQkFBQTtBRjBCSjtBRXhCSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUVBQUE7RUFDQSxzQkFBQTtBRjBCTjtBRXJCQTtFQUNFO0lBQ0UsbUJBQUE7RUZ1QkY7QUFDRjtBRXBCQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxvQkFBQTtJQUNBLG1CQUFBO0VGc0JGO0FBQ0Y7QUVuQkE7RUFDRTtJQUNFLGFBQUE7RUZxQkY7RUVsQkE7SUFDRSxlQUFBO0VGb0JGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBzcmM6IGxvY2FsKCdSb2JvdG8gTGlnaHQnKSwgbG9jYWwoJ1JvYm90by1MaWdodCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTkvS0ZPbENucUV1OTJGcjFNbVNVNWZCQmM5LnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IGxvY2FsKCdSb2JvdG8nKSwgbG9jYWwoJ1JvYm90by1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOS9LRk9tQ25xRXU5MkZyMU11NG14UC50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgc3JjOiBsb2NhbCgnUm9ib3RvIEJsYWNrJyksIGxvY2FsKCdSb2JvdG8tQmxhY2snKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE5L0tGT2xDbnFFdTkyRnIxTW1ZVXRmQkJjOS50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbiIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgc3JjOiBsb2NhbCgnUm9ib3RvIExpZ2h0JyksIGxvY2FsKCdSb2JvdG8tTGlnaHQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE5L0tGT2xDbnFFdTkyRnIxTW1TVTVmQkJjOS50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiBsb2NhbCgnUm9ib3RvJyksIGxvY2FsKCdSb2JvdG8tUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTkvS0ZPbUNucUV1OTJGcjFNdTRteFAudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHNyYzogbG9jYWwoJ1JvYm90byBCbGFjaycpLCBsb2NhbCgnUm9ib3RvLUJsYWNrJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOS9LRk9sQ25xRXU5MkZyMU1tWVV0ZkJCYzkudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IGxvY2FsKCdSYWxld2F5JyksIGxvY2FsKCdSYWxld2F5LVJlZ3VsYXInKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yYWxld2F5L3YxMy8xUHR1Zzh6WVNfU0tnZ1BOeUMwSVNnLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgc3JjOiBsb2NhbCgnUmFsZXdheSBCb2xkJyksIGxvY2FsKCdSYWxld2F5LUJvbGQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yYWxld2F5L3YxMy8xUHRyZzh6WVNfU0tnZ1BOd0pZdFdxWlBCUS50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHNyYzogbG9jYWwoJ1JhbGV3YXkgRXh0cmFCb2xkJyksIGxvY2FsKCdSYWxld2F5LUV4dHJhQm9sZCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JhbGV3YXkvdjEzLzFQdHJnOHpZU19TS2dnUE53SW91V3FaUEJRLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXgtd2lkdGg6IDI3MHB4O1xuICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5idXR0b246aG92ZXIge1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuLmJ1dHRvbi1sb2dpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZhODAwO1xufVxuLmJ1dHRvbi1sb2dpbi0tZGVza3RvcCB7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG4uYnV0dG9uLWxvZ2luX190ZXh0IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG4uYnV0dG9uLWxvZ2luX19pY29uLS1tb2JpbGUge1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG4uYnV0dG9uLXJlZ2lzdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xufVxuLmJ1dHRvbi1yZWdpc3Rlcl9faWNvbiB7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xufVxuLmJ1dHRvbi0tbWFpbiB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9idXR0b24tbWFpbi1iZy5wbmdcIik7XG59XG4uYnV0dG9uLS1jdGEge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWF4LXdpZHRoOiAzMTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvYnV0dG9uLWN0YS1iZy5wbmdcIik7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbi5idXR0b24tLWN0YS1tb2JpbGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJ1dHRvbi0tY3RhLWRlc2t0b3Age1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLmJ1dHRvbi0tY3RhIC5idXR0b25fX3RleHQtLWN0YSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5idXR0b24tLWN0YSAuYnV0dG9uX190ZXh0LS1jdGE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogLTUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL3Ryb3BoeS1pY29uLnBuZ1wiKSB0b3AgY2VudGVyIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5idXR0b24tLWN0YSB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAuYnV0dG9uLS1jdGEge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmJ1dHRvbi1sb2dpbi0tZGVza3RvcCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuYnV0dG9uLS1jdGEge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiBsb2NhbCgnUmFsZXdheScpLCBsb2NhbCgnUmFsZXdheS1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcmFsZXdheS92MTMvMVB0dWc4ellTX1NLZ2dQTnlDMElTZy50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHNyYzogbG9jYWwoJ1JhbGV3YXkgQm9sZCcpLCBsb2NhbCgnUmFsZXdheS1Cb2xkJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcmFsZXdheS92MTMvMVB0cmc4ellTX1NLZ2dQTndKWXRXcVpQQlEudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBzcmM6IGxvY2FsKCdSYWxld2F5IEV4dHJhQm9sZCcpLCBsb2NhbCgnUmFsZXdheS1FeHRyYUJvbGQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yYWxld2F5L3YxMy8xUHRyZzh6WVNfU0tnZ1BOd0lvdVdxWlBCUS50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbiIsIkBpbXBvcnQgXCJjb21tb25cIjtcblxuLmJ1dHRvbiB7XG4gIC5mb250LXJvYm90byg5MDApO1xuICBmb250LXNpemU6IEBmb250LXNpemUtc3RhbmRhcmQ7XG4gIG1heC13aWR0aDogMjcwcHg7XG4gIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zaXRpb246IEB0cmFuc2l0aW9uLXN0YW5kYXJkO1xuICAgIHRyYW5zZm9ybTogQHNjYWxlLXNpemU7XG4gIH1cbn1cblxuLmJ1dHRvbi1sb2dpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiBAdGV4dC1jb2xvci1tYWluO1xufVxuXG4uYnV0dG9uLWxvZ2luLS1kZXNrdG9wIHtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxuLmJ1dHRvbi1sb2dpbl9fdGV4dCB7XG4gIC5mb250LXJvYm90byg0MDApO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi5idXR0b24tbG9naW5fX2ljb24tLW1vYmlsZSB7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cblxuLmJ1dHRvbi1yZWdpc3RlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IEBsZXR0ZXItc3BhY2luZy1tZDtcbn1cblxuLmJ1dHRvbi1yZWdpc3Rlcl9faWNvbiB7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4uYnV0dG9uLS1tYWluIHtcbiAgY29sb3I6IEB0ZXh0LWNvbG9yLWJsYWNrO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9idXR0b24tbWFpbi1iZy5wbmdcIik7XG59XG5cbi5idXR0b24tLWN0YSB7XG4gIGNvbG9yOiBAdGV4dC1jb2xvci13aGl0ZTtcbiAgbWF4LXdpZHRoOiAzMTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvYnV0dG9uLWN0YS1iZy5wbmdcIik7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcblxuICAmLW1vYmlsZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJi1kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuYnV0dG9uX190ZXh0LS1jdGEge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IC01MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgICAgIHdpZHRoOiAzNHB4O1xuICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWcvdHJvcGh5LWljb24ucG5nXCIpIHRvcCBjZW50ZXIgbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBAc2NyZWVuLWxnKSB7XG4gIC5idXR0b24tLWN0YSB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IEBzY3JlZW4tbWQpIHtcbiAgLmJ1dHRvbi0tY3RhIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogQHNjcmVlbi1tZCkge1xuICAuYnV0dG9uLWxvZ2luLS1kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmJ1dHRvbi0tY3RhIHtcbiAgICBmb250LXNpemU6IEBmb250LXNpemUtbWVkaXVtLW1vYmlsZTtcbiAgfVxufVxuIiwiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw5MDAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheTo0MDAsNzAwLDgwMCcpO1xuXG5AbWFpbi1jb2xvcjogI2ZmYTgwMDtcbkBhY2NlbnQtY29sb3I6ICM5ZTlkNmU7XG5Ad2hpdGUtY29sb3I6ICNmZmZmZmY7XG5AZ3JleS1kYXJrLWNvbG9yOiAjNmM2YTZhO1xuQGdyZXktY29sb3I6ICM0NDQ3NTU7XG5AZGFyay1jb2xvcjogIzBBMEEwQTtcbkBibGFjay1jb2xvcjogIzAwMDAwMDtcblxuQHRleHQtY29sb3ItbWFpbjogQG1haW4tY29sb3I7XG5AdGV4dC1jb2xvci1hY2NlbnQ6IEBhY2NlbnQtY29sb3I7XG5AdGV4dC1jb2xvci13aGl0ZTogQHdoaXRlLWNvbG9yO1xuQHRleHQtY29sb3ItZ3JleS1kYXJrOiBAZ3JleS1kYXJrLWNvbG9yO1xuQHRleHQtY29sb3ItZ3JleTogQGdyZXktY29sb3I7XG5AdGV4dC1jb2xvci1ibGFjazogQGJsYWNrLWNvbG9yO1xuXG5AZm9udC1zaXplLXN1Yi10aXRsZS1kZXNrdG9wOiAxMDRweDtcbkBmb250LXNpemUtdGl0bGUtZGVza3RvcDogNTJweDtcbkBmb250LXNpemUtdGl0bGUtbW9iaWxlOiA2M3B4O1xuQGZvbnQtc2l6ZS1zdWItdGl0bGUtbW9iaWxlOiAxNDNweDtcbkBmb250LXNpemUtbGFyZ2U6IDMwcHg7XG5AZm9udC1zaXplLWgyLW1vYmlsZTogMjJweDtcbkBmb250LXNpemUtbWVkaXVtLW1vYmlsZTogMThweDtcbkBmb250LXNpemUtbWVkaXVtOiAxNnB4O1xuQGZvbnQtc2l6ZS1pbmZvOiAxNXB4O1xuQGZvbnQtc2l6ZS1zdGFuZGFyZDogMTRweDtcbkBmb250LXNpemUtc21hbGw6IDEycHg7XG5AZm9udC1zaXplLWgyOiAyNnB4O1xuXG5AbGluZS1oZWlnaHQtZXh0cmEtbGFyZ2U6IDExMHB4O1xuQGxpbmUtaGVpZ2h0LXRpdGxlLWRlc2t0b3A6IDEyNHB4O1xuQGxpbmUtaGVpZ2h0LWluZm86IDIycHg7XG5AbGluZS1oZWlnaHQtaW5mby1tb2JpbGU6IDI4cHg7XG5cbkBmb250LXNpemUtcmVzcG9uc2l2ZS1zdGFuZGFyZDogMXZ3O1xuQGZvbnQtc2l6ZS1yZXNwb25zaXZlLWxhcmdlOiAydnc7XG5AZm9udC1zaXplLXJlc3BvbnNpdmUtaDI6IDEuNXZ3O1xuQGZvbnQtc2l6ZS1yZXNwb25zaXZlLXRpdGxlOiAzdnc7XG5AZm9udC1zaXplLXJlc3BvbnNpdmUtc3ViLXRpdGxlOiA1LjV2dztcblxuQGZvbnQtd2VpZ2h0LWV4dHJhLWJvbGQ6IDkwMDtcbkBmb250LXdlaWdodC1ib2xkOiA3MDA7XG5AZm9udC13ZWlnaHQtbWVkaXVtOiA0MDA7XG5AZm9udC13ZWlnaHQtc3RhbmRhcmQ6IDMwMDtcblxuQGxldHRlci1zcGFjaW5nLW1kOiA1cHg7XG5cbkBjb250YWluZXItb2Zmc2V0LWRlc2t0b3A6IDEwJTtcbkBjb250YWluZXItYmctY29sb3I6IEBkYXJrLWNvbG9yO1xuXG5AZm9vdGVyLWJnLWNvbG9yOiBAYmxhY2stY29sb3I7XG5cbkB0cmFuc2l0aW9uLXN0YW5kYXJkOiAwLjNzIGFsbCBlYXNlO1xuXG5Ac2NhbGUtc2l6ZTogc2NhbGUoMS4wNSk7XG5cbkBzY3JlZW4tZXh0cmEtbGc6IDE5MjBweDtcbkBzY3JlZW4tbGc6IDEyMDBweDtcbkBzY3JlZW4tbWQ6IDk5MnB4O1xuQHNjcmVlbi1zbTogNzY4cHg7XG5Ac2NyZWVuLXhzOiA0ODBweDtcblxuLmZvbnQtcm9ib3RvKEBmb250LXdlaWdodCkge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBAZm9udC13ZWlnaHQ7XG59XG5cbi5mb250LXJhbGV3YXkoQGZvbnQtd2VpZ2h0KSB7XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBAZm9udC13ZWlnaHQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/button/button.component.ts":
/*!********************************************!*\
  !*** ./src/app/button/button.component.ts ***!
  \********************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ButtonComponent.prototype, "type", void 0);
    ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'puregolf-button',
            template: __webpack_require__(/*! ./button.component.html */ "./src/app/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.less */ "./src/app/button/button.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <ul class=\"footer__contacts\">\r\n    <li class=\"footer__item\"><a href=\"#\" class=\"footer__link\">Site map</a></li>\r\n    <li class=\"footer__item\"><a href=\"#\" class=\"footer__link\">Cookies notice</a></li>\r\n    <li class=\"footer__item\"><a href=\"#\" class=\"footer__link\">Contacts</a></li>\r\n  </ul>\r\n  <ul class=\"footer__social\">\r\n    <li class=\"footer__item u-uppercase\"><a href=\"#\" class=\"footer__link\">Facebook</a></li>\r\n    <li class=\"footer__item u-uppercase\"><a href=\"#\" class=\"footer__link\">Youtube</a></li>\r\n    <li class=\"footer__item u-uppercase\"><a href=\"#\" class=\"footer__link\">Twitter</a></li>\r\n  </ul>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.less":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmSU5fBBc9.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu4mxP.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 900;\n  src: local('Roboto Black'), local('Roboto-Black'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmYUtfBBc9.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Raleway';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Raleway'), local('Raleway-Regular'), url(https://fonts.gstatic.com/s/raleway/v13/1Ptug8zYS_SKggPNyC0ISg.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Raleway';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Raleway Bold'), local('Raleway-Bold'), url(https://fonts.gstatic.com/s/raleway/v13/1Ptrg8zYS_SKggPNwJYtWqZPBQ.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Raleway';\n  font-style: normal;\n  font-weight: 800;\n  src: local('Raleway ExtraBold'), local('Raleway-ExtraBold'), url(https://fonts.gstatic.com/s/raleway/v13/1Ptrg8zYS_SKggPNwIouWqZPBQ.ttf) format('truetype');\n}\n.footer {\n  background-color: #000000;\n  padding: 10px 0;\n  display: flex;\n  justify-content: space-around;\n}\n.footer__contacts,\n.footer__social {\n  display: flex;\n  justify-content: space-around;\n}\n.footer__item {\n  display: inline-block;\n  padding: 0 35px;\n}\n.footer > ul > li:first-child {\n  padding-left: 0;\n}\n.footer > ul > li:last-child {\n  padding-right: 0;\n}\n.footer__link {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  font-size: 12px;\n  transition: 0.3s all ease;\n  color: #444755;\n}\n.footer__link:hover {\n  color: #ffa800;\n}\n@media only screen and (max-width: 992px) {\n  .footer {\n    padding: 30px 10%;\n    flex-wrap: wrap;\n  }\n  .footer__item {\n    padding: 0;\n    text-align: center;\n  }\n  .footer__link {\n    font-size: 16px;\n  }\n  .footer__contacts,\n  .footer__social {\n    width: 100%;\n  }\n  .footer__contacts {\n    padding-bottom: 30px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw5MDAiLCJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmxlc3MiLCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheTo0MDAsNzAwLDgwMCIsInNyYy9hcHAvZm9vdGVyL0Q6L1lldmhlbi9Qcm9ncmFtbWluZy9Qcm9qZWN0cy9Wb3ZhL1B1cmVHb2xmL3B1cmVnb2xmX3dlYi9QdXJlR29sZlVJL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvZm9vdGVyL0Q6L1lldmhlbi9Qcm9ncmFtbWluZy9Qcm9qZWN0cy9Wb3ZhL1B1cmVHb2xmL3B1cmVnb2xmX3dlYi9QdXJlR29sZlVJL3NyYy9zdHlsZXMvY29tbW9uLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4SUFBQTtBQ0NGO0FEQ0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzSUFBQTtBQ0NGO0FEQ0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4SUFBQTtBQ0NGO0FDakJBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMklBQUE7QURtQkY7QUNqQkE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpSkFBQTtBRG1CRjtBQ2pCQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJKQUFBO0FEbUJGO0FFakNBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FGbUNGO0FFaENBOztFQUVFLGFBQUE7RUFDQSw2QkFBQTtBRmtDRjtBRS9CQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBRmlDRjtBRTdCRTtFQUNFLGVBQUE7QUYrQko7QUU1QkU7RUFDRSxnQkFBQTtBRjhCSjtBRTFCQTtFQ21DRSxpQ0FBQTtFQUNBLGdCQUFBO0VEbENBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUY2QkY7QUUzQkU7RUFDRSxjQUFBO0FGNkJKO0FFekJBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGVBQUE7RUYyQkY7RUV4QkE7SUFDRSxVQUFBO0lBQ0Esa0JBQUE7RUYwQkY7RUV2QkE7SUFDRSxlQUFBO0VGeUJGO0VFdEJBOztJQUVFLFdBQUE7RUZ3QkY7RUVyQkE7SUFDRSxvQkFBQTtFRnVCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgc3JjOiBsb2NhbCgnUm9ib3RvIExpZ2h0JyksIGxvY2FsKCdSb2JvdG8tTGlnaHQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE5L0tGT2xDbnFFdTkyRnIxTW1TVTVmQkJjOS50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiBsb2NhbCgnUm9ib3RvJyksIGxvY2FsKCdSb2JvdG8tUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTkvS0ZPbUNucUV1OTJGcjFNdTRteFAudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHNyYzogbG9jYWwoJ1JvYm90byBCbGFjaycpLCBsb2NhbCgnUm9ib3RvLUJsYWNrJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOS9LRk9sQ25xRXU5MkZyMU1tWVV0ZkJCYzkudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHNyYzogbG9jYWwoJ1JvYm90byBMaWdodCcpLCBsb2NhbCgnUm9ib3RvLUxpZ2h0JyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOS9LRk9sQ25xRXU5MkZyMU1tU1U1ZkJCYzkudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogbG9jYWwoJ1JvYm90bycpLCBsb2NhbCgnUm9ib3RvLVJlZ3VsYXInKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE5L0tGT21DbnFFdTkyRnIxTXU0bXhQLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogOTAwO1xuICBzcmM6IGxvY2FsKCdSb2JvdG8gQmxhY2snKSwgbG9jYWwoJ1JvYm90by1CbGFjaycpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTkvS0ZPbENucUV1OTJGcjFNbVlVdGZCQmM5LnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiBsb2NhbCgnUmFsZXdheScpLCBsb2NhbCgnUmFsZXdheS1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcmFsZXdheS92MTMvMVB0dWc4ellTX1NLZ2dQTnlDMElTZy50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHNyYzogbG9jYWwoJ1JhbGV3YXkgQm9sZCcpLCBsb2NhbCgnUmFsZXdheS1Cb2xkJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcmFsZXdheS92MTMvMVB0cmc4ellTX1NLZ2dQTndKWXRXcVpQQlEudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBzcmM6IGxvY2FsKCdSYWxld2F5IEV4dHJhQm9sZCcpLCBsb2NhbCgnUmFsZXdheS1FeHRyYUJvbGQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yYWxld2F5L3YxMy8xUHRyZzh6WVNfU0tnZ1BOd0lvdVdxWlBCUS50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmZvb3Rlcl9fY29udGFjdHMsXG4uZm9vdGVyX19zb2NpYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5mb290ZXJfX2l0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAgMzVweDtcbn1cbi5mb290ZXIgPiB1bCA+IGxpOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLmZvb3RlciA+IHVsID4gbGk6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4uZm9vdGVyX19saW5rIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2U7XG4gIGNvbG9yOiAjNDQ0NzU1O1xufVxuLmZvb3Rlcl9fbGluazpob3ZlciB7XG4gIGNvbG9yOiAjZmZhODAwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAzMHB4IDEwJTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbiAgLmZvb3Rlcl9faXRlbSB7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmZvb3Rlcl9fbGluayB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5mb290ZXJfX2NvbnRhY3RzLFxuICAuZm9vdGVyX19zb2NpYWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5mb290ZXJfX2NvbnRhY3RzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgfVxufVxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiBsb2NhbCgnUmFsZXdheScpLCBsb2NhbCgnUmFsZXdheS1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcmFsZXdheS92MTMvMVB0dWc4ellTX1NLZ2dQTnlDMElTZy50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHNyYzogbG9jYWwoJ1JhbGV3YXkgQm9sZCcpLCBsb2NhbCgnUmFsZXdheS1Cb2xkJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcmFsZXdheS92MTMvMVB0cmc4ellTX1NLZ2dQTndKWXRXcVpQQlEudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBzcmM6IGxvY2FsKCdSYWxld2F5IEV4dHJhQm9sZCcpLCBsb2NhbCgnUmFsZXdheS1FeHRyYUJvbGQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yYWxld2F5L3YxMy8xUHRyZzh6WVNfU0tnZ1BOd0lvdVdxWlBCUS50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbiIsIkBpbXBvcnQgXCJjb21tb25cIjtcblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IEBmb290ZXItYmctY29sb3I7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5mb290ZXJfX2NvbnRhY3RzLFxuLmZvb3Rlcl9fc29jaWFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5mb290ZXJfX2l0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAgMzVweDtcbn1cblxuLmZvb3RlciA+IHVsID4gbGkge1xuICAmOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cblxuICAmOmxhc3QtY2hpbGQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cbn1cblxuLmZvb3Rlcl9fbGluayB7XG4gIC5mb250LXJvYm90bygzMDApO1xuICBmb250LXNpemU6IEBmb250LXNpemUtc21hbGw7XG4gIHRyYW5zaXRpb246IEB0cmFuc2l0aW9uLXN0YW5kYXJkO1xuICBjb2xvcjogQHRleHQtY29sb3ItZ3JleTtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogQHRleHQtY29sb3ItbWFpbjtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IEBzY3JlZW4tbWQpIHtcbiAgLmZvb3RlciB7XG4gICAgcGFkZGluZzogMzBweCAxMCU7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG5cbiAgLmZvb3Rlcl9faXRlbSB7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuZm9vdGVyX19saW5rIHtcbiAgICBmb250LXNpemU6IEBmb250LXNpemUtbWVkaXVtO1xuICB9XG5cbiAgLmZvb3Rlcl9fY29udGFjdHMsXG4gIC5mb290ZXJfX3NvY2lhbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuZm9vdGVyX19jb250YWN0cyB7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIH1cbn1cbiIsIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCw0MDAsOTAwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXk6NDAwLDcwMCw4MDAnKTtcblxuQG1haW4tY29sb3I6ICNmZmE4MDA7XG5AYWNjZW50LWNvbG9yOiAjOWU5ZDZlO1xuQHdoaXRlLWNvbG9yOiAjZmZmZmZmO1xuQGdyZXktZGFyay1jb2xvcjogIzZjNmE2YTtcbkBncmV5LWNvbG9yOiAjNDQ0NzU1O1xuQGRhcmstY29sb3I6ICMwQTBBMEE7XG5AYmxhY2stY29sb3I6ICMwMDAwMDA7XG5cbkB0ZXh0LWNvbG9yLW1haW46IEBtYWluLWNvbG9yO1xuQHRleHQtY29sb3ItYWNjZW50OiBAYWNjZW50LWNvbG9yO1xuQHRleHQtY29sb3Itd2hpdGU6IEB3aGl0ZS1jb2xvcjtcbkB0ZXh0LWNvbG9yLWdyZXktZGFyazogQGdyZXktZGFyay1jb2xvcjtcbkB0ZXh0LWNvbG9yLWdyZXk6IEBncmV5LWNvbG9yO1xuQHRleHQtY29sb3ItYmxhY2s6IEBibGFjay1jb2xvcjtcblxuQGZvbnQtc2l6ZS1zdWItdGl0bGUtZGVza3RvcDogMTA0cHg7XG5AZm9udC1zaXplLXRpdGxlLWRlc2t0b3A6IDUycHg7XG5AZm9udC1zaXplLXRpdGxlLW1vYmlsZTogNjNweDtcbkBmb250LXNpemUtc3ViLXRpdGxlLW1vYmlsZTogMTQzcHg7XG5AZm9udC1zaXplLWxhcmdlOiAzMHB4O1xuQGZvbnQtc2l6ZS1oMi1tb2JpbGU6IDIycHg7XG5AZm9udC1zaXplLW1lZGl1bS1tb2JpbGU6IDE4cHg7XG5AZm9udC1zaXplLW1lZGl1bTogMTZweDtcbkBmb250LXNpemUtaW5mbzogMTVweDtcbkBmb250LXNpemUtc3RhbmRhcmQ6IDE0cHg7XG5AZm9udC1zaXplLXNtYWxsOiAxMnB4O1xuQGZvbnQtc2l6ZS1oMjogMjZweDtcblxuQGxpbmUtaGVpZ2h0LWV4dHJhLWxhcmdlOiAxMTBweDtcbkBsaW5lLWhlaWdodC10aXRsZS1kZXNrdG9wOiAxMjRweDtcbkBsaW5lLWhlaWdodC1pbmZvOiAyMnB4O1xuQGxpbmUtaGVpZ2h0LWluZm8tbW9iaWxlOiAyOHB4O1xuXG5AZm9udC1zaXplLXJlc3BvbnNpdmUtc3RhbmRhcmQ6IDF2dztcbkBmb250LXNpemUtcmVzcG9uc2l2ZS1sYXJnZTogMnZ3O1xuQGZvbnQtc2l6ZS1yZXNwb25zaXZlLWgyOiAxLjV2dztcbkBmb250LXNpemUtcmVzcG9uc2l2ZS10aXRsZTogM3Z3O1xuQGZvbnQtc2l6ZS1yZXNwb25zaXZlLXN1Yi10aXRsZTogNS41dnc7XG5cbkBmb250LXdlaWdodC1leHRyYS1ib2xkOiA5MDA7XG5AZm9udC13ZWlnaHQtYm9sZDogNzAwO1xuQGZvbnQtd2VpZ2h0LW1lZGl1bTogNDAwO1xuQGZvbnQtd2VpZ2h0LXN0YW5kYXJkOiAzMDA7XG5cbkBsZXR0ZXItc3BhY2luZy1tZDogNXB4O1xuXG5AY29udGFpbmVyLW9mZnNldC1kZXNrdG9wOiAxMCU7XG5AY29udGFpbmVyLWJnLWNvbG9yOiBAZGFyay1jb2xvcjtcblxuQGZvb3Rlci1iZy1jb2xvcjogQGJsYWNrLWNvbG9yO1xuXG5AdHJhbnNpdGlvbi1zdGFuZGFyZDogMC4zcyBhbGwgZWFzZTtcblxuQHNjYWxlLXNpemU6IHNjYWxlKDEuMDUpO1xuXG5Ac2NyZWVuLWV4dHJhLWxnOiAxOTIwcHg7XG5Ac2NyZWVuLWxnOiAxMjAwcHg7XG5Ac2NyZWVuLW1kOiA5OTJweDtcbkBzY3JlZW4tc206IDc2OHB4O1xuQHNjcmVlbi14czogNDgwcHg7XG5cbi5mb250LXJvYm90byhAZm9udC13ZWlnaHQpIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogQGZvbnQtd2VpZ2h0O1xufVxuXG4uZm9udC1yYWxld2F5KEBmb250LXdlaWdodCkge1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogQGZvbnQtd2VpZ2h0O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'puregolf-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.less */ "./src/app/footer/footer.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\r\n  <img src=\"assets/img/logo.png\" alt=\"logo\" class=\"header__logo\">\r\n  <a class=\"header__menu u-hover-enlarged\" href=\"#\">\r\n    <img src=\"assets/img/menu-icon.png\" alt=\"menu\">\r\n    <span class=\"header__menu-title text-light u-uppercase visible-desktop\">Menu</span>\r\n  </a>\r\n  <div class=\"header__form\">\r\n    <puregolf-button type=\"login-desktop\"></puregolf-button>\r\n    <puregolf-button type=\"register-desktop\"></puregolf-button>\r\n    <puregolf-button type=\"login-mobile\"></puregolf-button>\r\n    <puregolf-button type=\"register-mobile\"></puregolf-button>\r\n  </div>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.less":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmSU5fBBc9.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu4mxP.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 900;\n  src: local('Roboto Black'), local('Roboto-Black'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmYUtfBBc9.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Raleway';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Raleway'), local('Raleway-Regular'), url(https://fonts.gstatic.com/s/raleway/v13/1Ptug8zYS_SKggPNyC0ISg.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Raleway';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Raleway Bold'), local('Raleway-Bold'), url(https://fonts.gstatic.com/s/raleway/v13/1Ptrg8zYS_SKggPNwJYtWqZPBQ.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Raleway';\n  font-style: normal;\n  font-weight: 800;\n  src: local('Raleway ExtraBold'), local('Raleway-ExtraBold'), url(https://fonts.gstatic.com/s/raleway/v13/1Ptrg8zYS_SKggPNwIouWqZPBQ.ttf) format('truetype');\n}\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 30px 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 15;\n}\n.header:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0.3;\n  background-color: #000000;\n  z-index: -1;\n}\n.header__logo {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  margin-left: -15px;\n  z-index: 20;\n}\n.header__menu,\n.header__form {\n  display: flex;\n  align-items: center;\n}\n.header__menu {\n  margin-right: auto;\n  padding-left: 15%;\n}\n.header__form {\n  padding-right: 15%;\n}\n.header__menu-title {\n  color: #ffa800;\n  letter-spacing: 5px;\n  padding-left: 30px;\n}\n@media only screen and (max-width: 1200px) {\n  .header__menu {\n    padding-left: 5%;\n  }\n  .header__form {\n    padding-right: 5%;\n  }\n}\n@media only screen and (max-width: 992px) {\n  .header {\n    padding: 20px 0;\n  }\n  .header__menu {\n    padding-left: 10%;\n  }\n  .header__form {\n    padding-right: 10%;\n  }\n  .header__logo {\n    max-width: 175px;\n    height: auto;\n    top: 30px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw5MDAiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmxlc3MiLCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheTo0MDAsNzAwLDgwMCIsInNyYy9hcHAvaGVhZGVyL0Q6L1lldmhlbi9Qcm9ncmFtbWluZy9Qcm9qZWN0cy9Wb3ZhL1B1cmVHb2xmL3B1cmVnb2xmX3dlYi9QdXJlR29sZlVJL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhJQUFBO0FDQ0Y7QURDQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNJQUFBO0FDQ0Y7QURDQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhJQUFBO0FDQ0Y7QUNqQkE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwySUFBQTtBRG1CRjtBQ2pCQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlKQUFBO0FEbUJGO0FDakJBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkpBQUE7QURtQkY7QUVqQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUZtQ0Y7QUVqQ0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBRm1DSjtBRS9CQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE1BQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FGaUNGO0FFOUJBOztFQUVFLGFBQUE7RUFDQSxtQkFBQTtBRmdDRjtBRTdCQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUYrQkY7QUU1QkE7RUFDRSxrQkFBQTtBRjhCRjtBRTNCQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FGNkJGO0FFMUJBO0VBQ0U7SUFDRSxnQkFBQTtFRjRCRjtFRXpCQTtJQUNFLGlCQUFBO0VGMkJGO0FBQ0Y7QUV4QkE7RUFDRTtJQUNFLGVBQUE7RUYwQkY7RUV2QkE7SUFDRSxpQkFBQTtFRnlCRjtFRXRCQTtJQUNFLGtCQUFBO0VGd0JGO0VFckJBO0lBQ0UsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsU0FBQTtFRnVCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgc3JjOiBsb2NhbCgnUm9ib3RvIExpZ2h0JyksIGxvY2FsKCdSb2JvdG8tTGlnaHQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE5L0tGT2xDbnFFdTkyRnIxTW1TVTVmQkJjOS50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiBsb2NhbCgnUm9ib3RvJyksIGxvY2FsKCdSb2JvdG8tUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTkvS0ZPbUNucUV1OTJGcjFNdTRteFAudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHNyYzogbG9jYWwoJ1JvYm90byBCbGFjaycpLCBsb2NhbCgnUm9ib3RvLUJsYWNrJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOS9LRk9sQ25xRXU5MkZyMU1tWVV0ZkJCYzkudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHNyYzogbG9jYWwoJ1JvYm90byBMaWdodCcpLCBsb2NhbCgnUm9ib3RvLUxpZ2h0JyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOS9LRk9sQ25xRXU5MkZyMU1tU1U1ZkJCYzkudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogbG9jYWwoJ1JvYm90bycpLCBsb2NhbCgnUm9ib3RvLVJlZ3VsYXInKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE5L0tGT21DbnFFdTkyRnIxTXU0bXhQLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogOTAwO1xuICBzcmM6IGxvY2FsKCdSb2JvdG8gQmxhY2snKSwgbG9jYWwoJ1JvYm90by1CbGFjaycpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTkvS0ZPbENucUV1OTJGcjFNbVlVdGZCQmM5LnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiBsb2NhbCgnUmFsZXdheScpLCBsb2NhbCgnUmFsZXdheS1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcmFsZXdheS92MTMvMVB0dWc4ellTX1NLZ2dQTnlDMElTZy50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHNyYzogbG9jYWwoJ1JhbGV3YXkgQm9sZCcpLCBsb2NhbCgnUmFsZXdheS1Cb2xkJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcmFsZXdheS92MTMvMVB0cmc4ellTX1NLZ2dQTndKWXRXcVpQQlEudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogODAwO1xuICBzcmM6IGxvY2FsKCdSYWxld2F5IEV4dHJhQm9sZCcpLCBsb2NhbCgnUmFsZXdheS1FeHRyYUJvbGQnKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yYWxld2F5L3YxMy8xUHRyZzh6WVNfU0tnZ1BOd0lvdVdxWlBCUS50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxNTtcbn1cbi5oZWFkZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9wYWNpdHk6IDAuMztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgei1pbmRleDogLTE7XG59XG4uaGVhZGVyX19sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgei1pbmRleDogMjA7XG59XG4uaGVhZGVyX19tZW51LFxuLmhlYWRlcl9fZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyX19tZW51IHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDE1JTtcbn1cbi5oZWFkZXJfX2Zvcm0ge1xuICBwYWRkaW5nLXJpZ2h0OiAxNSU7XG59XG4uaGVhZGVyX19tZW51LXRpdGxlIHtcbiAgY29sb3I6ICNmZmE4MDA7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5oZWFkZXJfX21lbnUge1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gIH1cbiAgLmhlYWRlcl9fZm9ybSB7XG4gICAgcGFkZGluZy1yaWdodDogNSU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmhlYWRlciB7XG4gICAgcGFkZGluZzogMjBweCAwO1xuICB9XG4gIC5oZWFkZXJfX21lbnUge1xuICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICB9XG4gIC5oZWFkZXJfX2Zvcm0ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgfVxuICAuaGVhZGVyX19sb2dvIHtcbiAgICBtYXgtd2lkdGg6IDE3NXB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICB0b3A6IDMwcHg7XG4gIH1cbn1cbiIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogbG9jYWwoJ1JhbGV3YXknKSwgbG9jYWwoJ1JhbGV3YXktUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JhbGV3YXkvdjEzLzFQdHVnOHpZU19TS2dnUE55QzBJU2cudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBzcmM6IGxvY2FsKCdSYWxld2F5IEJvbGQnKSwgbG9jYWwoJ1JhbGV3YXktQm9sZCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JhbGV3YXkvdjEzLzFQdHJnOHpZU19TS2dnUE53Sll0V3FaUEJRLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgc3JjOiBsb2NhbCgnUmFsZXdheSBFeHRyYUJvbGQnKSwgbG9jYWwoJ1JhbGV3YXktRXh0cmFCb2xkJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcmFsZXdheS92MTMvMVB0cmc4ellTX1NLZ2dQTndJb3VXcVpQQlEudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG4iLCJAaW1wb3J0IFwiY29tbW9uXCI7XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxNTtcblxuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9wYWNpdHk6IC4zO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBibGFjay1jb2xvcjtcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxufVxuXG4uaGVhZGVyX19sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgei1pbmRleDogMjA7XG59XG5cbi5oZWFkZXJfX21lbnUsXG4uaGVhZGVyX19mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWRlcl9fbWVudSB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAxNSU7XG59XG5cbi5oZWFkZXJfX2Zvcm0ge1xuICBwYWRkaW5nLXJpZ2h0OiAxNSU7XG59XG5cbi5oZWFkZXJfX21lbnUtdGl0bGUge1xuICBjb2xvcjogQHRleHQtY29sb3ItbWFpbjtcbiAgbGV0dGVyLXNwYWNpbmc6IEBsZXR0ZXItc3BhY2luZy1tZDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IEBzY3JlZW4tbGcpIHtcbiAgLmhlYWRlcl9fbWVudSB7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgfVxuXG4gIC5oZWFkZXJfX2Zvcm0ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogQHNjcmVlbi1tZCkge1xuICAuaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gIH1cblxuICAuaGVhZGVyX19tZW51IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgfVxuXG4gIC5oZWFkZXJfX2Zvcm0ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgfVxuXG4gIC5oZWFkZXJfX2xvZ28ge1xuICAgIG1heC13aWR0aDogMTc1cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHRvcDogMzBweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'puregolf-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.less */ "./src/app/header/header.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/hero/hero.component.html":
/*!******************************************!*\
  !*** ./src/app/hero/hero.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <section class=\"hero\">\r\n    <img src=\"assets/img/hero-bg.png\" alt=\"golf-image\" class=\"phantom-img\">\r\n    <img src=\"assets/img/mininav.png\" alt=\"mini-navigation\" class=\"hero__mini-nav visible-desktop\">\r\n\r\n    <div class=\"visible-mobile\">\r\n      <h1 class=\"hero__title--mobile u-uppercase\">\r\n        Preorder <strong class=\"highlighted\">Now</strong>\r\n      </h1>\r\n\r\n      <div class=\"hero__info--mobile\">\r\n        <p class=\"hero__info-text \">\r\n          Contact <a href=\"#\" class=\"hero__info-link\">info@puregolf.io</a>\r\n          for more information on collaborations and partnerships\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"hero__wrapper--mobile\">\r\n        <div class=\"hero__list-container\">\r\n          <ul class=\"hero__list\">\r\n            <li class=\"hero__item\">\r\n              <h2 class=\"hero__item-text\"><strong class=\"highlighted\">Pure</strong> Rules</h2>\r\n            </li>\r\n            <li class=\"hero__item\">\r\n              <h2 class=\"hero__item-text\"><strong class=\"highlighted\">Pure</strong> physic</h2>\r\n            </li>\r\n            <li class=\"hero__item\">\r\n              <h2 class=\"hero__item-text\"><strong class=\"highlighted\">Pure</strong> game mechanics</h2>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class=\"hero__button-container\">\r\n          <puregolf-button type=\"cta-mobile\"></puregolf-button>\r\n        </div>\r\n\r\n        <p class=\"hero__divider\">or</p>\r\n\r\n        <div class=\"hero__link-wrapper\">\r\n          <a href=\"#\" class=\"hero__link\">Register now</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"hero__wrapper--desktop\">\r\n      <h2 class=\"hero__title\">Preorder <strong class=\"highlighted\">Now!</strong></h2>\r\n\r\n      <div class=\"hero__info\">\r\n        <puregolf-button type=\"cta-desktop\"></puregolf-button>\r\n        <p class=\"hero__info-text\">\r\n          Contact <a href=\"#\" class=\"hero__info-link\">info@puregolf.io</a>\r\n          for more information on collaborations and partnerships\r\n        </p>\r\n      </div>\r\n\r\n      <ul class=\"hero__list hero__list--right\">\r\n        <li class=\"hero__item\">\r\n          <h2 class=\"hero__item-text\"><strong class=\"highlighted\">Pure</strong> Rules</h2>\r\n        </li>\r\n        <li class=\"hero__item\">\r\n          <h2 class=\"hero__item-text\"><strong class=\"highlighted\">Pure</strong> physic</h2>\r\n        </li>\r\n        <li class=\"hero__item\">\r\n          <h2 class=\"hero__item-text\"><strong class=\"highlighted\">Pure</strong> game mechanics</h2>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/hero/hero.component.less":
/*!******************************************!*\
  !*** ./src/app/hero/hero.component.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmSU5fBBc9.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu4mxP.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 900;\n  src: local('Roboto Black'), local('Roboto-Black'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmYUtfBBc9.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Raleway';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Raleway'), local('Raleway-Regular'), url(https://fonts.gstatic.com/s/raleway/v13/1Ptug8zYS_SKggPNyC0ISg.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Raleway';\n  font-style: normal;\n  font-weight: 700;\n  src: local('Raleway Bold'), local('Raleway-Bold'), url(https://fonts.gstatic.com/s/raleway/v13/1Ptrg8zYS_SKggPNwJYtWqZPBQ.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Raleway';\n  font-style: normal;\n  font-weight: 800;\n  src: local('Raleway ExtraBold'), local('Raleway-ExtraBold'), url(https://fonts.gstatic.com/s/raleway/v13/1Ptrg8zYS_SKggPNwIouWqZPBQ.ttf) format('truetype');\n}\n.container {\n  width: 100%;\n  height: auto;\n  background-color: #0A0A0A;\n  overflow-x: hidden;\n}\n.hero {\n  display: flex;\n  position: relative;\n  background: url(\"/assets/img/hero-bg.png\") top center no-repeat;\n  background-size: cover;\n  z-index: 10;\n  overflow: hidden;\n}\n.hero__wrapper--desktop {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.hero__mini-nav {\n  position: absolute;\n  top: 125px;\n  left: 10%;\n  height: 60%;\n}\n.hero__title,\n.hero__item-text,\n.hero__item-title {\n  color: #ffffff;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n}\n.hero__title {\n  position: relative;\n  right: 60px;\n  text-transform: uppercase;\n  font-size: 52px;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 900;\n}\n.hero__title .highlighted {\n  display: block;\n  font-size: 104px;\n}\n.hero__item-title {\n  font-size: 2vw;\n}\n.hero__title--mobile,\n.hero__info--mobile {\n  position: absolute;\n  top: 100px;\n  left: 50%;\n  text-align: center;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  max-width: 330px;\n}\n.hero__title--mobile {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 900;\n  font-size: 63px;\n  color: #ffa800;\n  line-height: 110px;\n}\n.hero__title--mobile .highlighted {\n  font-size: 143px;\n}\n.hero__wrapper--mobile {\n  position: relative;\n  top: -140px;\n  max-width: 100vw;\n}\n.hero__item-text {\n  font-size: 26px;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  margin: 25px 0;\n  text-transform: uppercase;\n}\n.hero__item-text .highlighted {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 900;\n  text-transform: uppercase;\n  color: #ffa800;\n}\n.hero__info {\n  position: relative;\n  left: 15px;\n  top: 265px;\n  max-width: 270px;\n}\n.hero__info--mobile {\n  top: 750px;\n  max-width: 290px;\n  display: inline-block;\n  width: 100%;\n}\n.hero__info-text {\n  color: #9e9d6e;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n  font-size: 15px;\n  line-height: 22px;\n  text-align: center;\n  padding-top: 20px;\n}\n.hero__info-link {\n  color: #ffa800;\n}\n.hero__button-container,\n.hero__list-container {\n  text-align: center;\n}\n.hero__list {\n  display: inline-block;\n  text-align: left;\n  position: relative;\n  left: 90px;\n}\n.hero__divider,\n.hero__link {\n  font-size: 18px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 5px;\n  text-align: center;\n}\n.hero__divider {\n  color: #6c6a6a;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  padding: 30px 0;\n}\n.hero__link-wrapper {\n  text-align: center;\n}\n.hero__link {\n  color: #ffa800;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n}\n@media only screen and (min-width: 1920px) {\n  .hero__title {\n    right: 5%;\n    top: -10%;\n  }\n  .hero__info {\n    left: 1%;\n    top: 25%;\n  }\n  .hero__list {\n    left: 7%;\n    top: -10%;\n  }\n}\n@media only screen and (max-width: 992px) {\n  .hero {\n    background-image: url(\"/assets/img/hero-bg-mobile.png\");\n    background-size: auto;\n    display: block;\n  }\n  .hero__wrapper--desktop {\n    display: none;\n  }\n  .hero__title--mobile {\n    top: 260px;\n  }\n  .hero__info-text {\n    font-size: 18px;\n    line-height: 28px;\n  }\n  .hero__list {\n    left: 0;\n    padding-bottom: 50px;\n  }\n  .hero__item-title,\n  .hero__item-text {\n    color: #ffffff;\n    font-size: 22px;\n    max-width: 400px;\n  }\n  .hero__item-title .highlighted,\n  .hero__item-text .highlighted {\n    color: #ffa800;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .hero__item-title,\n  .hero__item-text {\n    max-width: 240px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw5MDAiLCJzcmMvYXBwL2hlcm8vaGVyby5jb21wb25lbnQubGVzcyIsImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5OjQwMCw3MDAsODAwIiwic3JjL2FwcC9oZXJvL0Q6L1lldmhlbi9Qcm9ncmFtbWluZy9Qcm9qZWN0cy9Wb3ZhL1B1cmVHb2xmL3B1cmVnb2xmX3dlYi9QdXJlR29sZlVJL3NyYy9hcHAvaGVyby9oZXJvLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9oZXJvL0Q6L1lldmhlbi9Qcm9ncmFtbWluZy9Qcm9qZWN0cy9Wb3ZhL1B1cmVHb2xmL3B1cmVnb2xmX3dlYi9QdXJlR29sZlVJL3NyYy9zdHlsZXMvY29tbW9uLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4SUFBQTtBQ0NGO0FEQ0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzSUFBQTtBQ0NGO0FEQ0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4SUFBQTtBQ0NGO0FDakJBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMklBQUE7QURtQkY7QUNqQkE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpSkFBQTtBRG1CRjtBQ2pCQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJKQUFBO0FEbUJGO0FFakNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FGbUNGO0FFaENBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0RBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRmtDRjtBRS9CQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FGaUNGO0FFOUJBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUZnQ0Y7QUU3QkE7OztFQUdFLGNBQUE7RUMwQkEsaUNBQUE7RUFDQSxnQkFBQTtBSE1GO0FFN0JBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VDa0JBLGlDQUFBO0VBQ0EsZ0JBQUE7QUhjRjtBRXJDQTtFQVFJLGNBQUE7RUFDQSxnQkFBQTtBRmdDSjtBRTVCQTtFQUNFLGNBQUE7QUY4QkY7QUUzQkE7O0VBRUUsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGdCQUFBO0FGNkJGO0FFMUJBO0VDTEUsaUNBQUE7RUFDQSxnQkFBQTtFRE1BLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUY2QkY7QUVqQ0E7RUFPSSxnQkFBQTtBRjZCSjtBRXpCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FGMkJGO0FFeEJBO0VBQ0UsZUFBQTtFQ3ZCQSxpQ0FBQTtFQUNBLGdCQUFBO0VEd0JBLGNBQUE7RUFDQSx5QkFBQTtBRjJCRjtBRS9CQTtFQ3RCRSxpQ0FBQTtFQUNBLGdCQUFBO0VENkJFLHlCQUFBO0VBQ0EsY0FBQTtBRjRCSjtBRXhCQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBRjBCRjtBRXZCQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBRnlCRjtBRXRCQTtFQUNFLGNBQUE7RUNsREEsaUNBQUE7RUFDQSxnQkFBQTtFRG1EQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FGeUJGO0FFdEJBO0VBQ0UsY0FBQTtBRndCRjtBRXJCQTs7RUFFRSxrQkFBQTtBRnVCRjtBRXBCQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUZzQkY7QUVuQkE7O0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FGcUJGO0FFbEJBO0VBQ0UsY0FBQTtFQ3BGQSxpQ0FBQTtFQUNBLGdCQUFBO0VEcUZBLGVBQUE7QUZxQkY7QUVsQkE7RUFDRSxrQkFBQTtBRm9CRjtBRWpCQTtFQUNFLGNBQUE7RUM5RkEsaUNBQUE7RUFDQSxnQkFBQTtBSGtIRjtBRWpCQTtFQUNFO0lBQ0UsU0FBQTtJQUNBLFNBQUE7RUZtQkY7RUVoQkE7SUFDRSxRQUFBO0lBQ0EsUUFBQTtFRmtCRjtFRWZBO0lBQ0UsUUFBQTtJQUNBLFNBQUE7RUZpQkY7QUFDRjtBRWRBO0VBQ0U7SUFDRSx1REFBQTtJQUNBLHFCQUFBO0lBQ0EsY0FBQTtFRmdCRjtFRWJBO0lBQ0UsYUFBQTtFRmVGO0VFWkE7SUFDRSxVQUFBO0VGY0Y7RUVYQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFRmFGO0VFVkE7SUFDRSxPQUFBO0lBQ0Esb0JBQUE7RUZZRjtFRVRBOztJQUVFLGNBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUZXRjtFRWZBOztJQU9JLGNBQUE7RUZZSjtBQUNGO0FFUkE7RUFDRTs7SUFFRSxnQkFBQTtFRlVGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZXJvL2hlcm8uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHNyYzogbG9jYWwoJ1JvYm90byBMaWdodCcpLCBsb2NhbCgnUm9ib3RvLUxpZ2h0JyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOS9LRk9sQ25xRXU5MkZyMU1tU1U1ZkJCYzkudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogbG9jYWwoJ1JvYm90bycpLCBsb2NhbCgnUm9ib3RvLVJlZ3VsYXInKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE5L0tGT21DbnFFdTkyRnIxTXU0bXhQLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogOTAwO1xuICBzcmM6IGxvY2FsKCdSb2JvdG8gQmxhY2snKSwgbG9jYWwoJ1JvYm90by1CbGFjaycpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTkvS0ZPbENucUV1OTJGcjFNbVlVdGZCQmM5LnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBzcmM6IGxvY2FsKCdSb2JvdG8gTGlnaHQnKSwgbG9jYWwoJ1JvYm90by1MaWdodCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JvYm90by92MTkvS0ZPbENucUV1OTJGcjFNbVNVNWZCQmM5LnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IGxvY2FsKCdSb2JvdG8nKSwgbG9jYWwoJ1JvYm90by1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YxOS9LRk9tQ25xRXU5MkZyMU11NG14UC50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgc3JjOiBsb2NhbCgnUm9ib3RvIEJsYWNrJyksIGxvY2FsKCdSb2JvdG8tQmxhY2snKSwgdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9yb2JvdG8vdjE5L0tGT2xDbnFFdTkyRnIxTW1ZVXRmQkJjOS50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogbG9jYWwoJ1JhbGV3YXknKSwgbG9jYWwoJ1JhbGV3YXktUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JhbGV3YXkvdjEzLzFQdHVnOHpZU19TS2dnUE55QzBJU2cudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBzcmM6IGxvY2FsKCdSYWxld2F5IEJvbGQnKSwgbG9jYWwoJ1JhbGV3YXktQm9sZCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JhbGV3YXkvdjEzLzFQdHJnOHpZU19TS2dnUE53Sll0V3FaUEJRLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgc3JjOiBsb2NhbCgnUmFsZXdheSBFeHRyYUJvbGQnKSwgbG9jYWwoJ1JhbGV3YXktRXh0cmFCb2xkJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcmFsZXdheS92MTMvMVB0cmc4ellTX1NLZ2dQTndJb3VXcVpQQlEudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBBMEEwQTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuLmhlcm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL2hlcm8tYmcucG5nXCIpIHRvcCBjZW50ZXIgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB6LWluZGV4OiAxMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5oZXJvX193cmFwcGVyLS1kZXNrdG9wIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmhlcm9fX21pbmktbmF2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEyNXB4O1xuICBsZWZ0OiAxMCU7XG4gIGhlaWdodDogNjAlO1xufVxuLmhlcm9fX3RpdGxlLFxuLmhlcm9fX2l0ZW0tdGV4dCxcbi5oZXJvX19pdGVtLXRpdGxlIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5oZXJvX190aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDYwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogNTJweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuLmhlcm9fX3RpdGxlIC5oaWdobGlnaHRlZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEwNHB4O1xufVxuLmhlcm9fX2l0ZW0tdGl0bGUge1xuICBmb250LXNpemU6IDJ2dztcbn1cbi5oZXJvX190aXRsZS0tbW9iaWxlLFxuLmhlcm9fX2luZm8tLW1vYmlsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDBweDtcbiAgbGVmdDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgbWF4LXdpZHRoOiAzMzBweDtcbn1cbi5oZXJvX190aXRsZS0tbW9iaWxlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDYzcHg7XG4gIGNvbG9yOiAjZmZhODAwO1xuICBsaW5lLWhlaWdodDogMTEwcHg7XG59XG4uaGVyb19fdGl0bGUtLW1vYmlsZSAuaGlnaGxpZ2h0ZWQge1xuICBmb250LXNpemU6IDE0M3B4O1xufVxuLmhlcm9fX3dyYXBwZXItLW1vYmlsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTQwcHg7XG4gIG1heC13aWR0aDogMTAwdnc7XG59XG4uaGVyb19faXRlbS10ZXh0IHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbjogMjVweCAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmhlcm9fX2l0ZW0tdGV4dCAuaGlnaGxpZ2h0ZWQge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjZmZhODAwO1xufVxuLmhlcm9fX2luZm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDE1cHg7XG4gIHRvcDogMjY1cHg7XG4gIG1heC13aWR0aDogMjcwcHg7XG59XG4uaGVyb19faW5mby0tbW9iaWxlIHtcbiAgdG9wOiA3NTBweDtcbiAgbWF4LXdpZHRoOiAyOTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbi5oZXJvX19pbmZvLXRleHQge1xuICBjb2xvcjogIzllOWQ2ZTtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLmhlcm9fX2luZm8tbGluayB7XG4gIGNvbG9yOiAjZmZhODAwO1xufVxuLmhlcm9fX2J1dHRvbi1jb250YWluZXIsXG4uaGVyb19fbGlzdC1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaGVyb19fbGlzdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA5MHB4O1xufVxuLmhlcm9fX2RpdmlkZXIsXG4uaGVyb19fbGluayB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhlcm9fX2RpdmlkZXIge1xuICBjb2xvcjogIzZjNmE2YTtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nOiAzMHB4IDA7XG59XG4uaGVyb19fbGluay13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhlcm9fX2xpbmsge1xuICBjb2xvcjogI2ZmYTgwMDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgLmhlcm9fX3RpdGxlIHtcbiAgICByaWdodDogNSU7XG4gICAgdG9wOiAtMTAlO1xuICB9XG4gIC5oZXJvX19pbmZvIHtcbiAgICBsZWZ0OiAxJTtcbiAgICB0b3A6IDI1JTtcbiAgfVxuICAuaGVyb19fbGlzdCB7XG4gICAgbGVmdDogNyU7XG4gICAgdG9wOiAtMTAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5oZXJvIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9oZXJvLWJnLW1vYmlsZS5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5oZXJvX193cmFwcGVyLS1kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5oZXJvX190aXRsZS0tbW9iaWxlIHtcbiAgICB0b3A6IDI2MHB4O1xuICB9XG4gIC5oZXJvX19pbmZvLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgfVxuICAuaGVyb19fbGlzdCB7XG4gICAgbGVmdDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgfVxuICAuaGVyb19faXRlbS10aXRsZSxcbiAgLmhlcm9fX2l0ZW0tdGV4dCB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gIH1cbiAgLmhlcm9fX2l0ZW0tdGl0bGUgLmhpZ2hsaWdodGVkLFxuICAuaGVyb19faXRlbS10ZXh0IC5oaWdobGlnaHRlZCB7XG4gICAgY29sb3I6ICNmZmE4MDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmhlcm9fX2l0ZW0tdGl0bGUsXG4gIC5oZXJvX19pdGVtLXRleHQge1xuICAgIG1heC13aWR0aDogMjQwcHg7XG4gIH1cbn1cbiIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogbG9jYWwoJ1JhbGV3YXknKSwgbG9jYWwoJ1JhbGV3YXktUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JhbGV3YXkvdjEzLzFQdHVnOHpZU19TS2dnUE55QzBJU2cudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBzcmM6IGxvY2FsKCdSYWxld2F5IEJvbGQnKSwgbG9jYWwoJ1JhbGV3YXktQm9sZCcpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3JhbGV3YXkvdjEzLzFQdHJnOHpZU19TS2dnUE53Sll0V3FaUEJRLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgc3JjOiBsb2NhbCgnUmFsZXdheSBFeHRyYUJvbGQnKSwgbG9jYWwoJ1JhbGV3YXktRXh0cmFCb2xkJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvcmFsZXdheS92MTMvMVB0cmc4ellTX1NLZ2dQTndJb3VXcVpQQlEudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG4iLCJAaW1wb3J0IFwiY29tbW9uXCI7XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBAY29udGFpbmVyLWJnLWNvbG9yO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5oZXJvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltZy9oZXJvLWJnLnBuZ1wiKSB0b3AgY2VudGVyIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgei1pbmRleDogMTA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5oZXJvX193cmFwcGVyLS1kZXNrdG9wIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaGVyb19fbWluaS1uYXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTI1cHg7XG4gIGxlZnQ6IEBjb250YWluZXItb2Zmc2V0LWRlc2t0b3A7XG4gIGhlaWdodDogNjAlO1xufVxuXG4uaGVyb19fdGl0bGUsXG4uaGVyb19faXRlbS10ZXh0LFxuLmhlcm9fX2l0ZW0tdGl0bGUge1xuICBjb2xvcjogQHRleHQtY29sb3Itd2hpdGU7XG4gIC5mb250LXJvYm90bygzMDApO1xufVxuXG4uaGVyb19fdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiA2MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IEBmb250LXNpemUtdGl0bGUtZGVza3RvcDtcbiAgLmZvbnQtcm9ib3RvKDkwMCk7XG5cbiAgLmhpZ2hsaWdodGVkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IEBmb250LXNpemUtc3ViLXRpdGxlLWRlc2t0b3A7XG4gIH1cbn1cblxuLmhlcm9fX2l0ZW0tdGl0bGUge1xuICBmb250LXNpemU6IEBmb250LXNpemUtcmVzcG9uc2l2ZS1sYXJnZTtcbn1cblxuLmhlcm9fX3RpdGxlLS1tb2JpbGUsXG4uaGVyb19faW5mby0tbW9iaWxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBtYXgtd2lkdGg6IDMzMHB4O1xufVxuXG4uaGVyb19fdGl0bGUtLW1vYmlsZSB7XG4gIC5mb250LXJvYm90byg5MDApO1xuICBmb250LXNpemU6IEBmb250LXNpemUtdGl0bGUtbW9iaWxlO1xuICBjb2xvcjogQHRleHQtY29sb3ItbWFpbjtcbiAgbGluZS1oZWlnaHQ6IEBsaW5lLWhlaWdodC1leHRyYS1sYXJnZTtcblxuICAuaGlnaGxpZ2h0ZWQge1xuICAgIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1zdWItdGl0bGUtbW9iaWxlO1xuICB9XG59XG5cbi5oZXJvX193cmFwcGVyLS1tb2JpbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTE0MHB4O1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xufVxuXG4uaGVyb19faXRlbS10ZXh0IHtcbiAgZm9udC1zaXplOiBAZm9udC1zaXplLWgyO1xuICAuZm9udC1yb2JvdG8oNDAwKTtcbiAgbWFyZ2luOiAyNXB4IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgLmhpZ2hsaWdodGVkIHtcbiAgICAuZm9udC1yb2JvdG8oOTAwKTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiBAdGV4dC1jb2xvci1tYWluO1xuICB9XG59XG5cbi5oZXJvX19pbmZvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxNXB4O1xuICB0b3A6IDI2NXB4O1xuICBtYXgtd2lkdGg6IDI3MHB4O1xufVxuXG4uaGVyb19faW5mby0tbW9iaWxlIHtcbiAgdG9wOiA3NTBweDtcbiAgbWF4LXdpZHRoOiAyOTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhlcm9fX2luZm8tdGV4dCB7XG4gIGNvbG9yOiBAdGV4dC1jb2xvci1hY2NlbnQ7XG4gIC5mb250LXJvYm90byg0MDApO1xuICBmb250LXNpemU6IEBmb250LXNpemUtaW5mbztcbiAgbGluZS1oZWlnaHQ6IEBsaW5lLWhlaWdodC1pbmZvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uaGVyb19faW5mby1saW5rIHtcbiAgY29sb3I6IEB0ZXh0LWNvbG9yLW1haW47XG59XG5cbi5oZXJvX19idXR0b24tY29udGFpbmVyLFxuLmhlcm9fX2xpc3QtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVyb19fbGlzdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA5MHB4O1xufVxuXG4uaGVyb19fZGl2aWRlcixcbi5oZXJvX19saW5rIHtcbiAgZm9udC1zaXplOiBAZm9udC1zaXplLW1lZGl1bS1tb2JpbGU7XG4gIGZvbnQtd2VpZ2h0OiBAZm9udC13ZWlnaHQtYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVyb19fZGl2aWRlciB7XG4gIGNvbG9yOiBAdGV4dC1jb2xvci1ncmV5LWRhcms7XG4gIC5mb250LXJvYm90bygzMDApO1xuICBwYWRkaW5nOiAzMHB4IDA7XG59XG5cbi5oZXJvX19saW5rLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZXJvX19saW5rIHtcbiAgY29sb3I6IEB0ZXh0LWNvbG9yLW1haW47XG4gIC5mb250LXJvYm90byg0MDApO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IEBzY3JlZW4tZXh0cmEtbGcpIHtcbiAgLmhlcm9fX3RpdGxlIHtcbiAgICByaWdodDogNSU7XG4gICAgdG9wOiAtMTAlO1xuICB9XG5cbiAgLmhlcm9fX2luZm8ge1xuICAgIGxlZnQ6IDElO1xuICAgIHRvcDogMjUlO1xuICB9XG5cbiAgLmhlcm9fX2xpc3Qge1xuICAgIGxlZnQ6IDclO1xuICAgIHRvcDogLTEwJTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IEBzY3JlZW4tbWQpIHtcbiAgLmhlcm8ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2hlcm8tYmctbW9iaWxlLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuaGVyb19fd3JhcHBlci0tZGVza3RvcCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5oZXJvX190aXRsZS0tbW9iaWxlIHtcbiAgICB0b3A6IDI2MHB4O1xuICB9XG5cbiAgLmhlcm9fX2luZm8tdGV4dCB7XG4gICAgZm9udC1zaXplOiBAZm9udC1zaXplLW1lZGl1bS1tb2JpbGU7XG4gICAgbGluZS1oZWlnaHQ6IEBsaW5lLWhlaWdodC1pbmZvLW1vYmlsZTtcbiAgfVxuXG4gIC5oZXJvX19saXN0IHtcbiAgICBsZWZ0OiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICB9XG5cbiAgLmhlcm9fX2l0ZW0tdGl0bGUsXG4gIC5oZXJvX19pdGVtLXRleHQge1xuICAgIGNvbG9yOiBAdGV4dC1jb2xvci13aGl0ZTtcbiAgICBmb250LXNpemU6IEBmb250LXNpemUtaDItbW9iaWxlO1xuICAgIG1heC13aWR0aDogNDAwcHg7XG5cbiAgICAuaGlnaGxpZ2h0ZWQge1xuICAgICAgY29sb3I6IEB0ZXh0LWNvbG9yLW1haW47XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogQHNjcmVlbi14cykge1xuICAuaGVyb19faXRlbS10aXRsZSxcbiAgLmhlcm9fX2l0ZW0tdGV4dCB7XG4gICAgbWF4LXdpZHRoOiAyNDBweDtcbiAgfVxufVxuIiwiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw5MDAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheTo0MDAsNzAwLDgwMCcpO1xuXG5AbWFpbi1jb2xvcjogI2ZmYTgwMDtcbkBhY2NlbnQtY29sb3I6ICM5ZTlkNmU7XG5Ad2hpdGUtY29sb3I6ICNmZmZmZmY7XG5AZ3JleS1kYXJrLWNvbG9yOiAjNmM2YTZhO1xuQGdyZXktY29sb3I6ICM0NDQ3NTU7XG5AZGFyay1jb2xvcjogIzBBMEEwQTtcbkBibGFjay1jb2xvcjogIzAwMDAwMDtcblxuQHRleHQtY29sb3ItbWFpbjogQG1haW4tY29sb3I7XG5AdGV4dC1jb2xvci1hY2NlbnQ6IEBhY2NlbnQtY29sb3I7XG5AdGV4dC1jb2xvci13aGl0ZTogQHdoaXRlLWNvbG9yO1xuQHRleHQtY29sb3ItZ3JleS1kYXJrOiBAZ3JleS1kYXJrLWNvbG9yO1xuQHRleHQtY29sb3ItZ3JleTogQGdyZXktY29sb3I7XG5AdGV4dC1jb2xvci1ibGFjazogQGJsYWNrLWNvbG9yO1xuXG5AZm9udC1zaXplLXN1Yi10aXRsZS1kZXNrdG9wOiAxMDRweDtcbkBmb250LXNpemUtdGl0bGUtZGVza3RvcDogNTJweDtcbkBmb250LXNpemUtdGl0bGUtbW9iaWxlOiA2M3B4O1xuQGZvbnQtc2l6ZS1zdWItdGl0bGUtbW9iaWxlOiAxNDNweDtcbkBmb250LXNpemUtbGFyZ2U6IDMwcHg7XG5AZm9udC1zaXplLWgyLW1vYmlsZTogMjJweDtcbkBmb250LXNpemUtbWVkaXVtLW1vYmlsZTogMThweDtcbkBmb250LXNpemUtbWVkaXVtOiAxNnB4O1xuQGZvbnQtc2l6ZS1pbmZvOiAxNXB4O1xuQGZvbnQtc2l6ZS1zdGFuZGFyZDogMTRweDtcbkBmb250LXNpemUtc21hbGw6IDEycHg7XG5AZm9udC1zaXplLWgyOiAyNnB4O1xuXG5AbGluZS1oZWlnaHQtZXh0cmEtbGFyZ2U6IDExMHB4O1xuQGxpbmUtaGVpZ2h0LXRpdGxlLWRlc2t0b3A6IDEyNHB4O1xuQGxpbmUtaGVpZ2h0LWluZm86IDIycHg7XG5AbGluZS1oZWlnaHQtaW5mby1tb2JpbGU6IDI4cHg7XG5cbkBmb250LXNpemUtcmVzcG9uc2l2ZS1zdGFuZGFyZDogMXZ3O1xuQGZvbnQtc2l6ZS1yZXNwb25zaXZlLWxhcmdlOiAydnc7XG5AZm9udC1zaXplLXJlc3BvbnNpdmUtaDI6IDEuNXZ3O1xuQGZvbnQtc2l6ZS1yZXNwb25zaXZlLXRpdGxlOiAzdnc7XG5AZm9udC1zaXplLXJlc3BvbnNpdmUtc3ViLXRpdGxlOiA1LjV2dztcblxuQGZvbnQtd2VpZ2h0LWV4dHJhLWJvbGQ6IDkwMDtcbkBmb250LXdlaWdodC1ib2xkOiA3MDA7XG5AZm9udC13ZWlnaHQtbWVkaXVtOiA0MDA7XG5AZm9udC13ZWlnaHQtc3RhbmRhcmQ6IDMwMDtcblxuQGxldHRlci1zcGFjaW5nLW1kOiA1cHg7XG5cbkBjb250YWluZXItb2Zmc2V0LWRlc2t0b3A6IDEwJTtcbkBjb250YWluZXItYmctY29sb3I6IEBkYXJrLWNvbG9yO1xuXG5AZm9vdGVyLWJnLWNvbG9yOiBAYmxhY2stY29sb3I7XG5cbkB0cmFuc2l0aW9uLXN0YW5kYXJkOiAwLjNzIGFsbCBlYXNlO1xuXG5Ac2NhbGUtc2l6ZTogc2NhbGUoMS4wNSk7XG5cbkBzY3JlZW4tZXh0cmEtbGc6IDE5MjBweDtcbkBzY3JlZW4tbGc6IDEyMDBweDtcbkBzY3JlZW4tbWQ6IDk5MnB4O1xuQHNjcmVlbi1zbTogNzY4cHg7XG5Ac2NyZWVuLXhzOiA0ODBweDtcblxuLmZvbnQtcm9ib3RvKEBmb250LXdlaWdodCkge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBAZm9udC13ZWlnaHQ7XG59XG5cbi5mb250LXJhbGV3YXkoQGZvbnQtd2VpZ2h0KSB7XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBAZm9udC13ZWlnaHQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/hero/hero.component.ts":
/*!****************************************!*\
  !*** ./src/app/hero/hero.component.ts ***!
  \****************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
    }
    HeroComponent.prototype.ngOnInit = function () {
    };
    HeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'puregolf-hero',
            template: __webpack_require__(/*! ./hero.component.html */ "./src/app/hero/hero.component.html"),
            styles: [__webpack_require__(/*! ./hero.component.less */ "./src/app/hero/hero.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeroComponent);
    return HeroComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Yevhen\Programming\Projects\Vova\PureGolf\puregolf_web\PureGolfUI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map