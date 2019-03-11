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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-landing-page></app-landing-page>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ng-SriLanka';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_coming_soon_page_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/coming-soon-page/coming-soon-page.component */ "./src/app/components/coming-soon-page/coming-soon-page.component.ts");
/* harmony import */ var _components_mailchimp_form_mailchimp_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mailchimp-form/mailchimp-form.component */ "./src/app/components/mailchimp-form/mailchimp-form.component.ts");
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ "./src/app/components/landing-page/landing-page.component.ts");
/* harmony import */ var _components_common_header_component_header_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/common/header-component/header-component.component */ "./src/app/components/common/header-component/header-component.component.ts");
/* harmony import */ var _components_common_social_icons_component_social_icons_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/common/social-icons-component/social-icons-component.component */ "./src/app/components/common/social-icons-component/social-icons-component.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_coming_soon_page_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_4__["ComingSoonPageComponent"],
                _components_mailchimp_form_mailchimp_form_component__WEBPACK_IMPORTED_MODULE_5__["MailchimpFormComponent"],
                _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"],
                _components_common_header_component_header_component_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponentComponent"],
                _components_common_social_icons_component_social_icons_component_component__WEBPACK_IMPORTED_MODULE_8__["SocialIconsComponentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/coming-soon-page/coming-soon-page.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/coming-soon-page/coming-soon-page.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hero {\n    background-image: url(/assets/images/bg.jpg);\n    background-size: cover;\n    background-position: center center\n}\n\n.landing-page-content {\n    text-align: center;\n}\n\nh1#comingSoonText {\n    color: white;\n    font-size: 6rem;\n}\n\n.hero {\n    padding: 96px;\n    padding-bottom: 192px;\n}\n\n.logo-contatiner >  img {\n    width: 350px;\n}\n\n.logo-contatiner {\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21pbmctc29vbi1wYWdlL2NvbWluZy1zb29uLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZDQUE2QztJQUM3Qyx1QkFBdUI7SUFDdkIsa0NBQWtDO0NBQ3JDOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21pbmctc29vbi1wYWdlL2NvbWluZy1zb29uLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZXJvIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvYmcuanBnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXJcbn1cblxuLmxhbmRpbmctcGFnZS1jb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgxI2NvbWluZ1Nvb25UZXh0IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiA2cmVtO1xufVxuXG4uaGVybyB7XG4gICAgcGFkZGluZzogOTZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTkycHg7XG59XG5cbi5sb2dvLWNvbnRhdGluZXIgPiAgaW1nIHtcbiAgICB3aWR0aDogMzUwcHg7XG59XG5cbi5sb2dvLWNvbnRhdGluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/coming-soon-page/coming-soon-page.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/coming-soon-page/coming-soon-page.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero\">\n\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"landing-page-content\">\n          <div class=\"logo-contatiner\">\n            <img src=\"/assets/images/logo.png\" class=\"img-fluid\" alt=\"\" srcset=\"\">\n          </div>\n          <h1 class=\"display-4\" id=\"comingSoonText\">COMING SOON</h1>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <app-mailchimp-form>\n      </app-mailchimp-form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/coming-soon-page/coming-soon-page.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/coming-soon-page/coming-soon-page.component.ts ***!
  \***************************************************************************/
/*! exports provided: ComingSoonPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonPageComponent", function() { return ComingSoonPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComingSoonPageComponent = /** @class */ (function () {
    function ComingSoonPageComponent() {
    }
    ComingSoonPageComponent.prototype.ngOnInit = function () {
    };
    ComingSoonPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coming-soon-page',
            template: __webpack_require__(/*! ./coming-soon-page.component.html */ "./src/app/components/coming-soon-page/coming-soon-page.component.html"),
            styles: [__webpack_require__(/*! ./coming-soon-page.component.css */ "./src/app/components/coming-soon-page/coming-soon-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ComingSoonPageComponent);
    return ComingSoonPageComponent;
}());



/***/ }),

/***/ "./src/app/components/common/header-component/header-component.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/common/header-component/header-component.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n::ng-deep #header {\n    height: 90px;\n    padding: 25px 0;\n    /* position: fixed; */\n    left: 0;\n    top: 0;\n    right: 0;\n    transition: all 0.5s;\n    z-index: 997;\n  }\n  \n  ::ng-deep #header.header-scrolled,\n  ::ng-deep #header.header-fixed {\n    background: rgba(6, 12, 34, 0.98);\n    height: 70px;\n    padding: 15px 0;\n    transition: all 0.5s;\n  }\n  \n  ::ng-deep #header #logo h1 {\n    font-size: 36px;\n    margin: 0;\n    padding: 6px 0;\n    line-height: 1;\n    font-family: \"Raleway\", sans-serif;\n    font-weight: 700;\n    letter-spacing: 3px;\n    text-transform: uppercase;\n  }\n  \n  ::ng-deep #header #logo h1 span {\n    color: #f82249;\n  }\n  \n  ::ng-deep #header #logo h1 a,\n  ::ng-deep #header #logo h1 a:hover {\n    color: #fff;\n  }\n  \n  ::ng-deep #header #logo img {\n    padding: 0;\n    margin: 0;\n    max-height: 40px;\n  }\n  \n  #logo{\n    margin: auto !important;\n  }\n  \n  /*--------------------------------------------------------------\n# Navigation Menu\n--------------------------------------------------------------*/\n  \n  /* Nav Menu Essentials */\n  \n  .nav-menu,\n.nav-menu * {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n  \n  .nav-menu ul {\n  position: absolute;\n  display: none;\n  top: 100%;\n  left: 0;\n  z-index: 99;\n}\n  \n  .nav-menu li {\n  position: relative;\n  white-space: nowrap;\n}\n  \n  .nav-menu > li {\n  float: left;\n}\n  \n  .nav-menu li:hover > ul,\n.nav-menu li.sfHover > ul {\n  display: block;\n}\n  \n  .nav-menu ul ul {\n  top: 0;\n  left: 100%;\n}\n  \n  .nav-menu ul li {\n  min-width: 180px;\n}\n  \n  /* Nav Menu Arrows */\n  \n  .sf-arrows .sf-with-ul {\n  padding-right: 30px;\n}\n  \n  .sf-arrows .sf-with-ul:after {\n  content: \"\\f107\";\n  position: absolute;\n  right: 15px;\n  font-family: FontAwesome;\n  font-style: normal;\n  font-weight: normal;\n}\n  \n  .sf-arrows ul .sf-with-ul:after {\n  content: \"\\f105\";\n}\n  \n  /* Nav Meu Container */\n  \n  #nav-menu-container {\n  float: right;\n  margin: 0;\n}\n  \n  /* Nav Meu Styling */\n  \n  .nav-menu a {\n  padding: 8px;\n  text-decoration: none;\n  display: inline-block;\n  color: rgba(202, 206, 221, 0.8);\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  outline: none;\n}\n  \n  .nav-menu .menu-active a,\n.nav-menu a:hover {\n  color: #fff;\n}\n  \n  .nav-menu > li {\n  margin-left: 8px;\n}\n  \n  .nav-menu > li > a:before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: #f82249;\n  visibility: hidden;\n  transition: all 0.3s ease-in-out 0s;\n}\n  \n  .nav-menu a:hover:before,\n.nav-menu li:hover > a:before,\n.nav-menu .menu-active > a:before {\n  visibility: visible;\n  width: 100%;\n}\n  \n  .nav-menu li.buy-tickets a {\n  color: #fff;\n  background: #f82249;\n  padding: 7px 22px;\n  border-radius: 50px;\n  border: 2px solid #f82249;\n  transition: all ease-in-out 0.3s;\n  font-weight: 500;\n  margin-left: 8px;\n  margin-top: 2px;\n  line-height: 1;\n  font-size: 13px;\n}\n  \n  .nav-menu li.buy-tickets a:hover {\n  background: none;\n}\n  \n  .nav-menu li.buy-tickets:hover a:before,\n.nav-menu li.buy-tickets.menu-active a:before {\n  visibility: hidden;\n}\n  \n  .nav-menu ul {\n  margin: 4px 0 0 0;\n  padding: 10px;\n  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);\n  background: #fff;\n  border-radius: 3px;\n}\n  \n  .nav-menu ul li {\n  transition: 0.3s;\n}\n  \n  .nav-menu ul li a {\n  padding: 10px;\n  color: #060c22;\n  transition: 0.3s;\n  display: block;\n  font-size: 13px;\n  text-transform: none;\n  border-radius: 3px;\n}\n  \n  .nav-menu ul li:hover > a {\n  background: #f82249;\n  color: #fff;\n}\n  \n  .nav-menu ul ul {\n  margin: 0;\n}\n  \n  /* Mobile Nav Toggle */\n  \n  #mobile-nav-toggle {\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 999;\n  margin: 15px 15px 0 0;\n  border: 0;\n  background: none;\n  font-size: 24px;\n  display: none;\n  transition: all 0.4s;\n  outline: none;\n  cursor: pointer;\n}\n  \n  #mobile-nav-toggle i {\n  color: #fff;\n}\n  \n  /* Mobile Nav Styling */\n  \n  #mobile-nav {\n  position: fixed;\n  top: 0;\n  padding-top: 18px;\n  bottom: 0;\n  z-index: 998;\n  background: rgba(6, 12, 34, 0.9);\n  left: -260px;\n  width: 260px;\n  overflow-y: auto;\n  transition: 0.4s;\n}\n  \n  #mobile-nav ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n  \n  #mobile-nav ul li {\n  position: relative;\n}\n  \n  #mobile-nav ul li a {\n  color: #fff;\n  font-size: 45px;\n  overflow: hidden;\n  padding: 10px 22px 10px 15px;\n  position: relative;\n  text-decoration: none;\n  width: 100%;\n  display: block;\n  outline: none;\n}\n  \n  #mobile-nav ul li a:hover {\n  color: #f82249;\n}\n  \n  #mobile-nav ul li li {\n  padding-left: 30px;\n}\n  \n  #mobile-nav ul .menu-has-children i {\n  position:static;\n  right: 0;\n  z-index: 300;\n  padding: 34px;\n  cursor: pointer;\n  color: #fff;\n}\n  \n  #mobile-nav ul .menu-has-children i.fa-chevron-up {\n  color: #f82249;\n}\n  \n  #mobile-nav ul .menu-item-active {\n  color: #f82249;\n}\n  \n  #mobile-body-overly {\n  width: 100%;\n  height: 100%;\n  z-index: 997;\n  top: 100;\n  left: 0;\n  position:relative;\n  background: rgba(6, 12, 34, 0.8);\n  display: none;\n}\n  \n  /* Mobile Nav body classes */\n  \n  body.mobile-nav-active {\n  overflow: hidden;\n}\n  \n  body.mobile-nav-active #mobile-nav {\n  left: 0;\n}\n  \n  body.mobile-nav-active #mobile-nav-toggle {\n  color: #fff;\n}\n  \n  header#header> .container {\n    display: flex;\n    justify-content: space-between;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vaGVhZGVyLWNvbXBvbmVudC9oZWFkZXItY29tcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLE9BQU87SUFDUCxTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLGFBQWE7R0FDZDs7RUFFRDs7SUFFRSxrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixxQkFBcUI7R0FDdEI7O0VBRUQ7SUFDRSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUNBQW1DO0lBQ25DLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsMEJBQTBCO0dBQzNCOztFQUVEO0lBQ0UsZUFBZTtHQUNoQjs7RUFFRDs7SUFFRSxZQUFZO0dBQ2I7O0VBRUQ7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGlCQUFpQjtHQUNsQjs7RUFHRDtJQUNFLHdCQUF3QjtHQUN6Qjs7RUFNSDs7Z0VBRWdFOztFQUVoRSx5QkFBeUI7O0VBRXpCOztFQUVFLFVBQVU7RUFDVixXQUFXO0VBQ1gsaUJBQWlCO0NBQ2xCOztFQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxVQUFVO0VBQ1YsUUFBUTtFQUNSLFlBQVk7Q0FDYjs7RUFFRDtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7Q0FDckI7O0VBRUQ7RUFDRSxZQUFZO0NBQ2I7O0VBRUQ7O0VBRUUsZUFBZTtDQUNoQjs7RUFFRDtFQUNFLE9BQU87RUFDUCxXQUFXO0NBQ1o7O0VBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0VBRUQscUJBQXFCOztFQUVyQjtFQUNFLG9CQUFvQjtDQUNyQjs7RUFFRDtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsb0JBQW9CO0NBQ3JCOztFQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztFQUVELHVCQUF1Qjs7RUFFdkI7RUFDRSxhQUFhO0VBQ2IsVUFBVTtDQUNYOztFQUVELHFCQUFxQjs7RUFFckI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixnQ0FBZ0M7RUFDaEMsbUNBQW1DO0VBQ25DLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztDQUNmOztFQUVEOztFQUVFLFlBQVk7Q0FDYjs7RUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7RUFFRDtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFlBQVk7RUFDWixVQUFVO0VBQ1YsUUFBUTtFQUNSLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsb0NBQW9DO0NBQ3JDOztFQUVEOzs7RUFHRSxvQkFBb0I7RUFDcEIsWUFBWTtDQUNiOztFQUVEO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLDBCQUEwQjtFQUMxQixpQ0FBaUM7RUFDakMsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtDQUNqQjs7RUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7RUFFRDs7RUFFRSxtQkFBbUI7Q0FDcEI7O0VBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1EQUFtRDtFQUNuRCxpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCOztFQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztFQUVEO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsbUJBQW1CO0NBQ3BCOztFQUVEO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7Q0FDYjs7RUFFRDtFQUNFLFVBQVU7Q0FDWDs7RUFFRCx1QkFBdUI7O0VBRXZCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxnQkFBZ0I7Q0FDakI7O0VBRUQ7RUFDRSxZQUFZO0NBQ2I7O0VBRUQsd0JBQXdCOztFQUV4QjtFQUNFLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtDQUNsQjs7RUFFRDtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUJBQWlCO0NBQ2xCOztFQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztFQUVEO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0NBQ2Y7O0VBRUQ7RUFDRSxlQUFlO0NBQ2hCOztFQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztFQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0NBQ2I7O0VBRUQ7RUFDRSxlQUFlO0NBQ2hCOztFQUVEO0VBQ0UsZUFBZTtDQUNoQjs7RUFFRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLFNBQVM7RUFDVCxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxjQUFjO0NBQ2Y7O0VBRUQsNkJBQTZCOztFQUU3QjtFQUNFLGlCQUFpQjtDQUNsQjs7RUFFRDtFQUNFLFFBQVE7Q0FDVDs7RUFFRDtFQUNFLFlBQVk7Q0FDYjs7RUFHRDtJQUNJLGNBQWM7SUFDZCwrQkFBK0I7Q0FDbEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbW1vbi9oZWFkZXItY29tcG9uZW50L2hlYWRlci1jb21wb25lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOjpuZy1kZWVwICNoZWFkZXIge1xuICAgIGhlaWdodDogOTBweDtcbiAgICBwYWRkaW5nOiAyNXB4IDA7XG4gICAgLyogcG9zaXRpb246IGZpeGVkOyAqL1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgIHotaW5kZXg6IDk5NztcbiAgfVxuICBcbiAgOjpuZy1kZWVwICNoZWFkZXIuaGVhZGVyLXNjcm9sbGVkLFxuICA6Om5nLWRlZXAgI2hlYWRlci5oZWFkZXItZml4ZWQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNiwgMTIsIDM0LCAwLjk4KTtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgcGFkZGluZzogMTVweCAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICB9XG4gIFxuICA6Om5nLWRlZXAgI2hlYWRlciAjbG9nbyBoMSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiA2cHggMDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgXG4gIDo6bmctZGVlcCAjaGVhZGVyICNsb2dvIGgxIHNwYW4ge1xuICAgIGNvbG9yOiAjZjgyMjQ5O1xuICB9XG4gIFxuICA6Om5nLWRlZXAgI2hlYWRlciAjbG9nbyBoMSBhLFxuICA6Om5nLWRlZXAgI2hlYWRlciAjbG9nbyBoMSBhOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgOjpuZy1kZWVwICNoZWFkZXIgI2xvZ28gaW1nIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xuICB9XG5cblxuICAjbG9nb3tcbiAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuXG4gIFxuXG4gIFxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4jIE5hdmlnYXRpb24gTWVudVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4vKiBOYXYgTWVudSBFc3NlbnRpYWxzICovXG5cbi5uYXYtbWVudSxcbi5uYXYtbWVudSAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4ubmF2LW1lbnUgdWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTk7XG59XG5cbi5uYXYtbWVudSBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLm5hdi1tZW51ID4gbGkge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLm5hdi1tZW51IGxpOmhvdmVyID4gdWwsXG4ubmF2LW1lbnUgbGkuc2ZIb3ZlciA+IHVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5uYXYtbWVudSB1bCB1bCB7XG4gIHRvcDogMDtcbiAgbGVmdDogMTAwJTtcbn1cblxuLm5hdi1tZW51IHVsIGxpIHtcbiAgbWluLXdpZHRoOiAxODBweDtcbn1cblxuLyogTmF2IE1lbnUgQXJyb3dzICovXG5cbi5zZi1hcnJvd3MgLnNmLXdpdGgtdWwge1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG4uc2YtYXJyb3dzIC5zZi13aXRoLXVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcXGYxMDdcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5zZi1hcnJvd3MgdWwgLnNmLXdpdGgtdWw6YWZ0ZXIge1xuICBjb250ZW50OiBcIlxcZjEwNVwiO1xufVxuXG4vKiBOYXYgTWV1IENvbnRhaW5lciAqL1xuXG4jbmF2LW1lbnUtY29udGFpbmVyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDA7XG59XG5cbi8qIE5hdiBNZXUgU3R5bGluZyAqL1xuXG4ubmF2LW1lbnUgYSB7XG4gIHBhZGRpbmc6IDhweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiByZ2JhKDIwMiwgMjA2LCAyMjEsIDAuOCk7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubmF2LW1lbnUgLm1lbnUtYWN0aXZlIGEsXG4ubmF2LW1lbnUgYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubmF2LW1lbnUgPiBsaSB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5uYXYtbWVudSA+IGxpID4gYTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjgyMjQ5O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xufVxuXG4ubmF2LW1lbnUgYTpob3ZlcjpiZWZvcmUsXG4ubmF2LW1lbnUgbGk6aG92ZXIgPiBhOmJlZm9yZSxcbi5uYXYtbWVudSAubWVudS1hY3RpdmUgPiBhOmJlZm9yZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubmF2LW1lbnUgbGkuYnV5LXRpY2tldHMgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjZjgyMjQ5O1xuICBwYWRkaW5nOiA3cHggMjJweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2Y4MjI0OTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuM3M7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLm5hdi1tZW51IGxpLmJ1eS10aWNrZXRzIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4ubmF2LW1lbnUgbGkuYnV5LXRpY2tldHM6aG92ZXIgYTpiZWZvcmUsXG4ubmF2LW1lbnUgbGkuYnV5LXRpY2tldHMubWVudS1hY3RpdmUgYTpiZWZvcmUge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5uYXYtbWVudSB1bCB7XG4gIG1hcmdpbjogNHB4IDAgMCAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDMwcHggcmdiYSgxMjcsIDEzNywgMTYxLCAwLjI1KTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4ubmF2LW1lbnUgdWwgbGkge1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4ubmF2LW1lbnUgdWwgbGkgYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjMDYwYzIyO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4ubmF2LW1lbnUgdWwgbGk6aG92ZXIgPiBhIHtcbiAgYmFja2dyb3VuZDogI2Y4MjI0OTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5uYXYtbWVudSB1bCB1bCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogTW9iaWxlIE5hdiBUb2dnbGUgKi9cblxuI21vYmlsZS1uYXYtdG9nZ2xlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA5OTk7XG4gIG1hcmdpbjogMTVweCAxNXB4IDAgMDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNtb2JpbGUtbmF2LXRvZ2dsZSBpIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8qIE1vYmlsZSBOYXYgU3R5bGluZyAqL1xuXG4jbW9iaWxlLW5hdiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMThweDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiA5OTg7XG4gIGJhY2tncm91bmQ6IHJnYmEoNiwgMTIsIDM0LCAwLjkpO1xuICBsZWZ0OiAtMjYwcHg7XG4gIHdpZHRoOiAyNjBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuI21vYmlsZS1uYXYgdWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbiNtb2JpbGUtbmF2IHVsIGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jbW9iaWxlLW5hdiB1bCBsaSBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMTBweCAyMnB4IDEwcHggMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuI21vYmlsZS1uYXYgdWwgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjZjgyMjQ5O1xufVxuXG4jbW9iaWxlLW5hdiB1bCBsaSBsaSB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuI21vYmlsZS1uYXYgdWwgLm1lbnUtaGFzLWNoaWxkcmVuIGkge1xuICBwb3NpdGlvbjpzdGF0aWM7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAzMDA7XG4gIHBhZGRpbmc6IDM0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbiNtb2JpbGUtbmF2IHVsIC5tZW51LWhhcy1jaGlsZHJlbiBpLmZhLWNoZXZyb24tdXAge1xuICBjb2xvcjogI2Y4MjI0OTtcbn1cblxuI21vYmlsZS1uYXYgdWwgLm1lbnUtaXRlbS1hY3RpdmUge1xuICBjb2xvcjogI2Y4MjI0OTtcbn1cblxuI21vYmlsZS1ib2R5LW92ZXJseSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDk5NztcbiAgdG9wOiAxMDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDYsIDEyLCAzNCwgMC44KTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogTW9iaWxlIE5hdiBib2R5IGNsYXNzZXMgKi9cblxuYm9keS5tb2JpbGUtbmF2LWFjdGl2ZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmJvZHkubW9iaWxlLW5hdi1hY3RpdmUgI21vYmlsZS1uYXYge1xuICBsZWZ0OiAwO1xufVxuXG5ib2R5Lm1vYmlsZS1uYXYtYWN0aXZlICNtb2JpbGUtbmF2LXRvZ2dsZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5cbmhlYWRlciNoZWFkZXI+IC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/common/header-component/header-component.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/common/header-component/header-component.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n  <div class=\"container\">\n\n\n    <div id=\"logo\">\n      <a href=\"#intro\" class=\"scrollto\">\n        <img src=\"assets/images/logo.png\" alt=\"\" title=\"\">\n      </a>\n    </div>\n\n    <!-- <div id=\"logo\" class=\"pull-left\">\n      <a href=\"#intro\" class=\"scrollto\">\n        <img src=\"assets/images/logo.png\" alt=\"\" title=\"\">\n      </a>\n    </div> -->\n\n    <!-- <nav id=\"nav-menu-container\">\n      <ul class=\"nav-menu\">\n        <li class=\"menu-active\"><a href=\"#intro\">Home</a></li>\n        <li><a href=\"#about\">About</a></li>\n        <li><a href=\"#speakers\">Speakers</a></li>\n        <li><a href=\"#sponsors\">Sponsors</a></li>\n        <li><a href=\"#contact\">Contact</a></li>\n        <li class=\"buy-tickets\"><a href=\"#buy-tickets\">Tickets</a></li>\n      </ul>\n    </nav>#nav-menu-container -->\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/components/common/header-component/header-component.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/common/header-component/header-component.component.ts ***!
  \**********************************************************************************/
/*! exports provided: HeaderComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponentComponent", function() { return HeaderComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponentComponent = /** @class */ (function () {
    function HeaderComponentComponent() {
    }
    HeaderComponentComponent.prototype.ngOnInit = function () {
    };
    HeaderComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-component',
            template: __webpack_require__(/*! ./header-component.component.html */ "./src/app/components/common/header-component/header-component.component.html"),
            styles: [__webpack_require__(/*! ./header-component.component.css */ "./src/app/components/common/header-component/header-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponentComponent);
    return HeaderComponentComponent;
}());



/***/ }),

/***/ "./src/app/components/common/social-icons-component/social-icons-component.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/common/social-icons-component/social-icons-component.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".social-links a {\n    font-size: 18px;\n    display: inline-block;\n    background: #222636;\n    color: #eee;\n    line-height: 1;\n    padding: 8px 0;\n    margin-right: 4px;\n    border-radius: 50%;\n    text-align: center;\n    width: 36px;\n    height: 36px;\n    transition: 0.3s;\n  }\n\n\n  .social-links a:hover {\n    background: #f82249;\n    color: #fff;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vc29jaWFsLWljb25zLWNvbXBvbmVudC9zb2NpYWwtaWNvbnMtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtHQUNsQjs7O0VBR0Q7SUFDRSxvQkFBb0I7SUFDcEIsWUFBWTtHQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vc29jaWFsLWljb25zLWNvbXBvbmVudC9zb2NpYWwtaWNvbnMtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29jaWFsLWxpbmtzIGEge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogIzIyMjYzNjtcbiAgICBjb2xvcjogI2VlZTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBwYWRkaW5nOiA4cHggMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIGhlaWdodDogMzZweDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICB9XG5cblxuICAuc29jaWFsLWxpbmtzIGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmODIyNDk7XG4gICAgY29sb3I6ICNmZmY7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/common/social-icons-component/social-icons-component.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/components/common/social-icons-component/social-icons-component.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"social-links\">\n  <a href=\"https://twitter.com/ngslconf\" class=\"twitter\" target=\"blank\">\n    <i class=\"fa fa-twitter\"></i>\n  </a>\n  <a href=\"https://www.facebook.com/ngslconf/\" class=\"facebook\" target=\"blank\">\n    <i class=\"fa fa-facebook\"></i>\n  </a>\n  <a href=\"https://www.instagram.com/ngslconf/?hl=en\" class=\"instagram\" target=\"blank\">\n    <i class=\"fa fa-instagram\"></i>\n  </a>\n  <!-- <a href=\"#\" class=\"google-plus\"><i class=\"fa fa-google-plus\"></i></a> -->\n  <a href=\"https://www.linkedin.com/company/ng-sl/\" class=\"linkedin\" target=\"blank\">\n    <i class=\"fa fa-linkedin\"></i>\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/components/common/social-icons-component/social-icons-component.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/common/social-icons-component/social-icons-component.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: SocialIconsComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialIconsComponentComponent", function() { return SocialIconsComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialIconsComponentComponent = /** @class */ (function () {
    function SocialIconsComponentComponent() {
    }
    SocialIconsComponentComponent.prototype.ngOnInit = function () {
    };
    SocialIconsComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social-icons-component',
            template: __webpack_require__(/*! ./social-icons-component.component.html */ "./src/app/components/common/social-icons-component/social-icons-component.component.html"),
            styles: [__webpack_require__(/*! ./social-icons-component.component.css */ "./src/app/components/common/social-icons-component/social-icons-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialIconsComponentComponent);
    return SocialIconsComponentComponent;
}());



/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*--------------------------------------------------------------\n# Intro Section\n--------------------------------------------------------------*/\n\n\n@media only screen and (max-device-width: 480px) {\n  div#main-section {\n    padding: 24px;\n    top: 0 !important;\n  }\n\n}\n\n\n/* Desktops and laptops ----------- */\n\n\n@media only screen and (min-width : 1824px) {\n  #landing-page {\n    width: 100%;\n    height: 150vh;\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\n    /* background: url('/assets/images/about-bg.jpg') top center; */\n    background-size: cover;\n    position: relative;\n  }\n}\n\n\n/* Large screens ----------- */\n\n\n@media only screen and (min-width : 1824px) {\n  #landing-page {\n    width: 100%;\n    height: 100vh;\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\n    /* background: url('/assets/images/about-bg.jpg') top center; */\n    background-size: cover;\n    position: relative;\n  }\n}\n\n\n/* Smartphones (portrait and landscape) ----------- */\n\n\n@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n  #landing-page {\n    width: 100%;\n    height: 100vh;\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\n    /* background: url('/assets/images/about-bg.jpg') top center; */\n    background-size: cover;\n    position: relative;\n  }\n}\n\n\n/* Smartphones (landscape) ----------- */\n\n\n@media only screen and (min-width : 321px) {\n  #landing-page {\n    width: 100%;\n    height: 100vh;\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\n    /* background: url('/assets/images/about-bg.jpg') top center; */\n    background-size: cover;\n    position: relative;\n  }\n}\n\n\n/* Smartphones (portrait) ----------- */\n\n\n@media only screen and (max-width : 320px) {\n  #landing-page {\n    width: 100%;\n    height: 150vh;\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\n    /* background: url('/assets/images/about-bg.jpg') top center; */\n    background-size: cover;\n    position: relative;\n  }\n}\n\n\n/* iPads (portrait and landscape) ----------- */\n\n\n@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {\n  #landing-page {\n    width: 100%;\n    height: 100vh;\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\n    /* background: url('/assets/images/about-bg.jpg') top center; */\n    background-size: cover;\n    position: relative;\n  }\n}\n\n\n/* iPads (landscape) ----------- */\n\n\n@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {\n  #landing-page {\n    width: 100%;\n    height: 100vh;\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\n    /* background: url('/assets/images/about-bg.jpg') top center; */\n    background-size: cover;\n    position: relative;\n  }\n}\n\n\n/* iPads (portrait) ----------- */\n\n\n@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {\n  #landing-page {\n    width: 100%;\n    height: 100vh;\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\n    /* background: url('/assets/images/about-bg.jpg') top center; */\n    background-size: cover;\n    position: relative;\n  }\n}\n\n\n/**********\n  iPad 3\n  **********/\n\n\n@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {\n  #landing-page {\n    width: 100%;\n    height: 100vh;\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\n    /* background: url('/assets/images/about-bg.jpg') top center; */\n    background-size: cover;\n    position: relative;\n  }\n}\n\n\n@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {\n  #landing-page {\n    width: 100%;\n    height: 100vh;\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\n    /* background: url('/assets/images/about-bg.jpg') top center; */\n    background-size: cover;\n    position: relative;\n  }\n}\n\n\n/* iPhone 4 ----------- */\n\n\n@media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {\n  #landing-page {\n    width: 100%;\n    height: 100vh;\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\n    /* background: url('/assets/images/about-bg.jpg') top center; */\n    background-size: cover;\n    position: relative;\n  }\n}\n\n\n@media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {\n  #landing-page {\n    width: 100%;\n    height: 100vh;\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\n    /* background: url('/assets/images/about-bg.jpg') top center; */\n    background-size: cover;\n    position: relative;\n  }\n}\n\n\n/* iPhone 5 ----------- */\n\n\n@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2) {\n  #landing-page {\n    width: 100%;\n    height: 100vh;\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\n    /* background: url('/assets/images/about-bg.jpg') top center; */\n    background-size: cover;\n    position: relative;\n  }\n}\n\n\n@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2) {\n  #landing-page {\n    width: 100%;\n    height: 100vh;\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\n    /* background: url('/assets/images/about-bg.jpg') top center; */\n    background-size: cover;\n    position: relative;\n  }\n}\n\n\n/* iPhone 6, 7, 8 ----------- */\n\n\n@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2) {\n  #landing-page {\n    width: 100%;\n    height: 100vh;\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\n    /* background: url('/assets/images/about-bg.jpg') top center; */\n    background-size: cover;\n    position: relative;\n  }\n}\n\n\n@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2) {\n  #landing-page {\n    width: 100%;\n    height: 100vh;\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\n    /* background: url('/assets/images/about-bg.jpg') top center; */\n    background-size: cover;\n    position: relative;\n  }\n}\n\n\n/* iPhone 6+, 7+, 8+ ----------- */\n\n\n@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2) {\n  #landing-page {\n    width: 100%;\n    height: 100vh;\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\n    /* background: url('/assets/images/about-bg.jpg') top center; */\n    background-size: cover;\n    position: relative;\n  }\n}\n\n\n@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2) {\n  #landing-page {\n    width: 100%;\n    height: 100vh;\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\n    /* background: url('/assets/images/about-bg.jpg') top center; */\n    background-size: cover;\n    position: relative;\n  }\n}\n\n\n/* iPhone X ----------- */\n\n\n@media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3) {\n  #landing-page {\n    width: 100%;\n    height: 100vh;\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\n    /* background: url('/assets/images/about-bg.jpg') top center; */\n    background-size: cover;\n    position: relative;\n  }\n}\n\n\n@media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3) {\n  #landing-page {\n    width: 100%;\n    height: 100vh;\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\n    /* background: url('/assets/images/about-bg.jpg') top center; */\n    background-size: cover;\n    position: relative;\n  }\n}\n\n\n/* iPhone XS Max, XR ----------- */\n\n\n@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3) {\n  #landing-page {\n    width: 100%;\n    height: 100vh;\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\n    /* background: url('/assets/images/about-bg.jpg') top center; */\n    background-size: cover;\n    position: relative;\n  }\n}\n\n\n@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3) {\n  #landing-page {\n    width: 100%;\n    height: 100vh;\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\n    /* background: url('/assets/images/about-bg.jpg') top center; */\n    background-size: cover;\n    position: relative;\n  }\n}\n\n\n/* Samsung Galaxy S3 ----------- */\n\n\n@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2) {\n  #landing-page {\n    width: 100%;\n    height: 100vh;\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\n    /* background: url('/assets/images/about-bg.jpg') top center; */\n    background-size: cover;\n    position: relative;\n  }\n}\n\n\n@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2) {\n  #landing-page {\n    width: 100%;\n    height: 114vh;\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\n    /* background: url('/assets/images/about-bg.jpg') top center; */\n    background-size: cover;\n    position: relative;\n  }\n}\n\n\n/* Samsung Galaxy S4 ----------- */\n\n\n@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3) {\n  #landing-page {\n    width: 100%;\n    height: 100vh;\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\n    /* background: url('/assets/images/about-bg.jpg') top center; */\n    background-size: cover;\n    position: relative;\n  }\n}\n\n\n@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3) {\n  #landing-page {\n    width: 100%;\n    height: 100vh;\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\n    /* background: url('/assets/images/about-bg.jpg') top center; */\n    background-size: cover;\n    position: relative;\n  }\n}\n\n\n/* Samsung Galaxy S5 ----------- */\n\n\n@media only screen and (min-device-width: 360px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3) {\n  #landing-page {\n    width: 100%;\n    height: 100vh;\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\n    /* background: url('/assets/images/about-bg.jpg') top center; */\n    background-size: cover;\n    position: relative;\n  }\n}\n\n\n@media only screen and (min-device-width: 360px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3) {\n  #landing-page {\n    width: 100%;\n    height: 100vh;\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\n    /* background: url('/assets/images/about-bg.jpg') top center; */\n    background-size: cover;\n    position: relative;\n  }\n}\n\n\n#intro .intro-container {\n\n  display: flex;\n  justify-content: center;\n  align-items: top;\n  flex-direction: column;\n  text-align: center;\n  -webkit-text-emphasis-position: up;\n          text-emphasis-position: up;\n  padding: 0 13px;\n}\n\n\n#intro h1 {\n  color: #fff;\n  font-family: \"Raleway\", sans-serif;\n  font-size: 80px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n\n#intro h1 span {\n  color: #f82249;\n}\n\n\n#intro p {\n  color: #ebebeb;\n  font-weight: 700;\n  font-size: 20px;\n}\n\n\n@-webkit-keyframes pulsate-btn {\n  0% {\n    -webkit-transform: scale(0.6, 0.6);\n    transform: scale(0.6, 0.6);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n    opacity: 0;\n  }\n}\n\n\n@keyframes pulsate-btn {\n  0% {\n    -webkit-transform: scale(0.6, 0.6);\n    transform: scale(0.6, 0.6);\n    opacity: 1;\n  }\n\n  100% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1);\n    opacity: 0;\n  }\n}\n\n\ndiv#main-section {\n  display: flex;\n  margin: auto;\n  text-align: center;\n  /* width: 960px; */\n  flex-direction: column;\n  position: relative;\n  top: 15vh;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O2dFQUVnRTs7O0FBR2hFO0VBQ0U7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0dBQ25COztDQUVGOzs7QUFFRCxzQ0FBc0M7OztBQUN0QztFQUNFO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxtRUFBbUU7SUFDbkUsZ0VBQWdFO0lBQ2hFLHVCQUF1QjtJQUN2QixtQkFBbUI7R0FDcEI7Q0FDRjs7O0FBRUQsK0JBQStCOzs7QUFDL0I7RUFDRTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUVBQW1FO0lBQ25FLGdFQUFnRTtJQUNoRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0dBQ3BCO0NBQ0Y7OztBQUVELHNEQUFzRDs7O0FBQ3REO0VBQ0U7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLG1FQUFtRTtJQUNuRSxnRUFBZ0U7SUFDaEUsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtHQUNwQjtDQUNGOzs7QUFFRCx5Q0FBeUM7OztBQUN6QztFQUNFO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxtRUFBbUU7SUFDbkUsZ0VBQWdFO0lBQ2hFLHVCQUF1QjtJQUN2QixtQkFBbUI7R0FDcEI7Q0FDRjs7O0FBRUQsd0NBQXdDOzs7QUFDeEM7RUFDRTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUVBQW1FO0lBQ25FLGdFQUFnRTtJQUNoRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0dBQ3BCO0NBQ0Y7OztBQUVELGdEQUFnRDs7O0FBQ2hEO0VBQ0U7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLG1FQUFtRTtJQUNuRSxnRUFBZ0U7SUFDaEUsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtHQUNwQjtDQUNGOzs7QUFFRCxtQ0FBbUM7OztBQUNuQztFQUNFO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxtRUFBbUU7SUFDbkUsZ0VBQWdFO0lBQ2hFLHVCQUF1QjtJQUN2QixtQkFBbUI7R0FDcEI7Q0FDRjs7O0FBRUQsa0NBQWtDOzs7QUFDbEM7RUFDRTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUVBQW1FO0lBQ25FLGdFQUFnRTtJQUNoRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0dBQ3BCO0NBQ0Y7OztBQUVEOzthQUVhOzs7QUFDYjtFQUNFO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxtRUFBbUU7SUFDbkUsZ0VBQWdFO0lBQ2hFLHVCQUF1QjtJQUN2QixtQkFBbUI7R0FDcEI7Q0FDRjs7O0FBRUQ7RUFDRTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUVBQW1FO0lBQ25FLGdFQUFnRTtJQUNoRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0dBQ3BCO0NBQ0Y7OztBQUVELDBCQUEwQjs7O0FBQzFCO0VBQ0U7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLG1FQUFtRTtJQUNuRSxnRUFBZ0U7SUFDaEUsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtHQUNwQjtDQUNGOzs7QUFFRDtFQUNFO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxtRUFBbUU7SUFDbkUsZ0VBQWdFO0lBQ2hFLHVCQUF1QjtJQUN2QixtQkFBbUI7R0FDcEI7Q0FDRjs7O0FBRUQsMEJBQTBCOzs7QUFDMUI7RUFDRTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUVBQW1FO0lBQ25FLGdFQUFnRTtJQUNoRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0dBQ3BCO0NBQ0Y7OztBQUVEO0VBQ0U7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLG1FQUFtRTtJQUNuRSxnRUFBZ0U7SUFDaEUsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtHQUNwQjtDQUNGOzs7QUFFRCxnQ0FBZ0M7OztBQUNoQztFQUNFO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxtRUFBbUU7SUFDbkUsZ0VBQWdFO0lBQ2hFLHVCQUF1QjtJQUN2QixtQkFBbUI7R0FDcEI7Q0FDRjs7O0FBRUQ7RUFDRTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUVBQW1FO0lBQ25FLGdFQUFnRTtJQUNoRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0dBQ3BCO0NBQ0Y7OztBQUVELG1DQUFtQzs7O0FBQ25DO0VBQ0U7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLG1FQUFtRTtJQUNuRSxnRUFBZ0U7SUFDaEUsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtHQUNwQjtDQUNGOzs7QUFFRDtFQUNFO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxtRUFBbUU7SUFDbkUsZ0VBQWdFO0lBQ2hFLHVCQUF1QjtJQUN2QixtQkFBbUI7R0FDcEI7Q0FDRjs7O0FBRUQsMEJBQTBCOzs7QUFDMUI7RUFDRTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUVBQW1FO0lBQ25FLGdFQUFnRTtJQUNoRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0dBQ3BCO0NBQ0Y7OztBQUVEO0VBQ0U7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLG1FQUFtRTtJQUNuRSxnRUFBZ0U7SUFDaEUsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtHQUNwQjtDQUNGOzs7QUFFRCxtQ0FBbUM7OztBQUNuQztFQUNFO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxtRUFBbUU7SUFDbkUsZ0VBQWdFO0lBQ2hFLHVCQUF1QjtJQUN2QixtQkFBbUI7R0FDcEI7Q0FDRjs7O0FBRUQ7RUFDRTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUVBQW1FO0lBQ25FLGdFQUFnRTtJQUNoRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0dBQ3BCO0NBQ0Y7OztBQUVELG1DQUFtQzs7O0FBQ25DO0VBQ0U7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLG1FQUFtRTtJQUNuRSxnRUFBZ0U7SUFDaEUsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtHQUNwQjtDQUNGOzs7QUFFRDtFQUNFO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxtRUFBbUU7SUFDbkUsZ0VBQWdFO0lBQ2hFLHVCQUF1QjtJQUN2QixtQkFBbUI7R0FDcEI7Q0FDRjs7O0FBRUQsbUNBQW1DOzs7QUFDbkM7RUFDRTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUVBQW1FO0lBQ25FLGdFQUFnRTtJQUNoRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0dBQ3BCO0NBQ0Y7OztBQUVEO0VBQ0U7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLG1FQUFtRTtJQUNuRSxnRUFBZ0U7SUFDaEUsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtHQUNwQjtDQUNGOzs7QUFFRCxtQ0FBbUM7OztBQUNuQztFQUNFO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxtRUFBbUU7SUFDbkUsZ0VBQWdFO0lBQ2hFLHVCQUF1QjtJQUN2QixtQkFBbUI7R0FDcEI7Q0FDRjs7O0FBRUQ7RUFDRTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUVBQW1FO0lBQ25FLGdFQUFnRTtJQUNoRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0dBQ3BCO0NBQ0Y7OztBQUdEOztFQUVFLGNBQWM7RUFHZCx3QkFBd0I7RUFHeEIsaUJBQWlCO0VBSWpCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixnQkFBZ0I7Q0FDakI7OztBQUVEO0VBQ0UsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtDQUMzQjs7O0FBRUQ7RUFDRSxlQUFlO0NBQ2hCOzs7QUFFRDtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0NBQ2pCOzs7QUFJRDtFQUNFO0lBQ0UsbUNBQW1DO0lBQ25DLDJCQUEyQjtJQUMzQixXQUFXO0dBQ1o7O0VBRUQ7SUFDRSwrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLFdBQVc7R0FDWjtDQUNGOzs7QUFFRDtFQUNFO0lBQ0UsbUNBQW1DO0lBQ25DLDJCQUEyQjtJQUMzQixXQUFXO0dBQ1o7O0VBRUQ7SUFDRSwrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLFdBQVc7R0FDWjtDQUNGOzs7QUFHRDtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFVBQVU7O0NBRVgiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiMgSW50cm8gU2VjdGlvblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XG4gIGRpdiNtYWluLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxufVxuXG4vKiBEZXNrdG9wcyBhbmQgbGFwdG9wcyAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoIDogMTgyNHB4KSB7XG4gICNsYW5kaW5nLXBhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTUwdmg7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbnRyby1iZy9pbnRyby1iZy5qcGcnKSB0b3AgY2VudGVyO1xuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYWJvdXQtYmcuanBnJykgdG9wIGNlbnRlcjsgKi9cbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuXG4vKiBMYXJnZSBzY3JlZW5zIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiAxODI0cHgpIHtcbiAgI2xhbmRpbmctcGFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2ludHJvLWJnL2ludHJvLWJnLmpwZycpIHRvcCBjZW50ZXI7XG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9hYm91dC1iZy5qcGcnKSB0b3AgY2VudGVyOyAqL1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG5cbi8qIFNtYXJ0cGhvbmVzIChwb3J0cmFpdCBhbmQgbGFuZHNjYXBlKSAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aCA6IDMyMHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA0ODBweCkge1xuICAjbGFuZGluZy1wYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaW50cm8tYmcvaW50cm8tYmcuanBnJykgdG9wIGNlbnRlcjtcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Fib3V0LWJnLmpwZycpIHRvcCBjZW50ZXI7ICovXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cblxuLyogU21hcnRwaG9uZXMgKGxhbmRzY2FwZSkgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDMyMXB4KSB7XG4gICNsYW5kaW5nLXBhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbnRyby1iZy9pbnRyby1iZy5qcGcnKSB0b3AgY2VudGVyO1xuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYWJvdXQtYmcuanBnJykgdG9wIGNlbnRlcjsgKi9cbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuXG4vKiBTbWFydHBob25lcyAocG9ydHJhaXQpIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiAzMjBweCkge1xuICAjbGFuZGluZy1wYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1MHZoO1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaW50cm8tYmcvaW50cm8tYmcuanBnJykgdG9wIGNlbnRlcjtcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Fib3V0LWJnLmpwZycpIHRvcCBjZW50ZXI7ICovXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cblxuLyogaVBhZHMgKHBvcnRyYWl0IGFuZCBsYW5kc2NhcGUpIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDEwMjRweCkge1xuICAjbGFuZGluZy1wYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaW50cm8tYmcvaW50cm8tYmcuanBnJykgdG9wIGNlbnRlcjtcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Fib3V0LWJnLmpwZycpIHRvcCBjZW50ZXI7ICovXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cblxuLyogaVBhZHMgKGxhbmRzY2FwZSkgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSB7XG4gICNsYW5kaW5nLXBhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbnRyby1iZy9pbnRyby1iZy5qcGcnKSB0b3AgY2VudGVyO1xuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYWJvdXQtYmcuanBnJykgdG9wIGNlbnRlcjsgKi9cbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuXG4vKiBpUGFkcyAocG9ydHJhaXQpIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbiA6IHBvcnRyYWl0KSB7XG4gICNsYW5kaW5nLXBhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbnRyby1iZy9pbnRyby1iZy5qcGcnKSB0b3AgY2VudGVyO1xuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYWJvdXQtYmcuanBnJykgdG9wIGNlbnRlcjsgKi9cbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuXG4vKioqKioqKioqKlxuICBpUGFkIDNcbiAgKioqKioqKioqKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbyA6IDIpIHtcbiAgI2xhbmRpbmctcGFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2ludHJvLWJnL2ludHJvLWJnLmpwZycpIHRvcCBjZW50ZXI7XG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9hYm91dC1iZy5qcGcnKSB0b3AgY2VudGVyOyAqL1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uIDogcG9ydHJhaXQpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvIDogMikge1xuICAjbGFuZGluZy1wYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaW50cm8tYmcvaW50cm8tYmcuanBnJykgdG9wIGNlbnRlcjtcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Fib3V0LWJnLmpwZycpIHRvcCBjZW50ZXI7ICovXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cblxuLyogaVBob25lIDQgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzMjBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNDgwcHgpIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvIDogMikge1xuICAjbGFuZGluZy1wYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaW50cm8tYmcvaW50cm8tYmcuanBnJykgdG9wIGNlbnRlcjtcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Fib3V0LWJnLmpwZycpIHRvcCBjZW50ZXI7ICovXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aCA6IDMyMHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA0ODBweCkgYW5kIChvcmllbnRhdGlvbiA6IHBvcnRyYWl0KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbyA6IDIpIHtcbiAgI2xhbmRpbmctcGFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2ludHJvLWJnL2ludHJvLWJnLmpwZycpIHRvcCBjZW50ZXI7XG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9hYm91dC1iZy5qcGcnKSB0b3AgY2VudGVyOyAqL1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG5cbi8qIGlQaG9uZSA1IC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogNTY4cHgpIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgI2xhbmRpbmctcGFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2ludHJvLWJnL2ludHJvLWJnLmpwZycpIHRvcCBjZW50ZXI7XG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9hYm91dC1iZy5qcGcnKSB0b3AgY2VudGVyOyAqL1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0OiA1NjhweCkgYW5kIChvcmllbnRhdGlvbiA6IHBvcnRyYWl0KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gICNsYW5kaW5nLXBhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbnRyby1iZy9pbnRyby1iZy5qcGcnKSB0b3AgY2VudGVyO1xuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYWJvdXQtYmcuanBnJykgdG9wIGNlbnRlcjsgKi9cbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuXG4vKiBpUGhvbmUgNiwgNywgOCAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQ6IDY2N3B4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gICNsYW5kaW5nLXBhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbnRyby1iZy9pbnRyby1iZy5qcGcnKSB0b3AgY2VudGVyO1xuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYWJvdXQtYmcuanBnJykgdG9wIGNlbnRlcjsgKi9cbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogNjY3cHgpIGFuZCAob3JpZW50YXRpb24gOiBwb3J0cmFpdCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAjbGFuZGluZy1wYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaW50cm8tYmcvaW50cm8tYmcuanBnJykgdG9wIGNlbnRlcjtcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Fib3V0LWJnLmpwZycpIHRvcCBjZW50ZXI7ICovXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cblxuLyogaVBob25lIDYrLCA3KywgOCsgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0OiA3MzZweCkgYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAjbGFuZGluZy1wYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaW50cm8tYmcvaW50cm8tYmcuanBnJykgdG9wIGNlbnRlcjtcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Fib3V0LWJnLmpwZycpIHRvcCBjZW50ZXI7ICovXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDE0cHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQ6IDczNnB4KSBhbmQgKG9yaWVudGF0aW9uIDogcG9ydHJhaXQpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgI2xhbmRpbmctcGFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2ludHJvLWJnL2ludHJvLWJnLmpwZycpIHRvcCBjZW50ZXI7XG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9hYm91dC1iZy5qcGcnKSB0b3AgY2VudGVyOyAqL1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG5cbi8qIGlQaG9uZSBYIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogODEycHgpIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHtcbiAgI2xhbmRpbmctcGFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2ludHJvLWJnL2ludHJvLWJnLmpwZycpIHRvcCBjZW50ZXI7XG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9hYm91dC1iZy5qcGcnKSB0b3AgY2VudGVyOyAqL1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0OiA4MTJweCkgYW5kIChvcmllbnRhdGlvbiA6IHBvcnRyYWl0KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XG4gICNsYW5kaW5nLXBhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbnRyby1iZy9pbnRyby1iZy5qcGcnKSB0b3AgY2VudGVyO1xuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYWJvdXQtYmcuanBnJykgdG9wIGNlbnRlcjsgKi9cbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuXG4vKiBpUGhvbmUgWFMgTWF4LCBYUiAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDE0cHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQ6IDg5NnB4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XG4gICNsYW5kaW5nLXBhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbnRyby1iZy9pbnRyby1iZy5qcGcnKSB0b3AgY2VudGVyO1xuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYWJvdXQtYmcuanBnJykgdG9wIGNlbnRlcjsgKi9cbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0MTRweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogODk2cHgpIGFuZCAob3JpZW50YXRpb24gOiBwb3J0cmFpdCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykge1xuICAjbGFuZGluZy1wYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaW50cm8tYmcvaW50cm8tYmcuanBnJykgdG9wIGNlbnRlcjtcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Fib3V0LWJnLmpwZycpIHRvcCBjZW50ZXI7ICovXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cblxuLyogU2Ftc3VuZyBHYWxheHkgUzMgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0OiA2NDBweCkgYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikge1xuICAjbGFuZGluZy1wYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaW50cm8tYmcvaW50cm8tYmcuanBnJykgdG9wIGNlbnRlcjtcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Fib3V0LWJnLmpwZycpIHRvcCBjZW50ZXI7ICovXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQ6IDY0MHB4KSBhbmQgKG9yaWVudGF0aW9uIDogcG9ydHJhaXQpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgI2xhbmRpbmctcGFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMTR2aDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2ludHJvLWJnL2ludHJvLWJnLmpwZycpIHRvcCBjZW50ZXI7XG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9hYm91dC1iZy5qcGcnKSB0b3AgY2VudGVyOyAqL1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG5cbi8qIFNhbXN1bmcgR2FsYXh5IFM0IC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogNjQwcHgpIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHtcbiAgI2xhbmRpbmctcGFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2ludHJvLWJnL2ludHJvLWJnLmpwZycpIHRvcCBjZW50ZXI7XG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9hYm91dC1iZy5qcGcnKSB0b3AgY2VudGVyOyAqL1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0OiA2NDBweCkgYW5kIChvcmllbnRhdGlvbiA6IHBvcnRyYWl0KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XG4gICNsYW5kaW5nLXBhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbnRyby1iZy9pbnRyby1iZy5qcGcnKSB0b3AgY2VudGVyO1xuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYWJvdXQtYmcuanBnJykgdG9wIGNlbnRlcjsgKi9cbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuXG4vKiBTYW1zdW5nIEdhbGF4eSBTNSAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzYwcHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQ6IDY0MHB4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XG4gICNsYW5kaW5nLXBhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbnRyby1iZy9pbnRyby1iZy5qcGcnKSB0b3AgY2VudGVyO1xuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYWJvdXQtYmcuanBnJykgdG9wIGNlbnRlcjsgKi9cbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzNjBweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogNjQwcHgpIGFuZCAob3JpZW50YXRpb24gOiBwb3J0cmFpdCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykge1xuICAjbGFuZGluZy1wYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaW50cm8tYmcvaW50cm8tYmcuanBnJykgdG9wIGNlbnRlcjtcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Fib3V0LWJnLmpwZycpIHRvcCBjZW50ZXI7ICovXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cblxuXG4jaW50cm8gLmludHJvLWNvbnRhaW5lciB7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogdG9wO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogdG9wO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1lbXBoYXNpcy1wb3NpdGlvbjogdXA7XG4gIHBhZGRpbmc6IDAgMTNweDtcbn1cblxuI2ludHJvIGgxIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA4MHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4jaW50cm8gaDEgc3BhbiB7XG4gIGNvbG9yOiAjZjgyMjQ5O1xufVxuXG4jaW50cm8gcCB7XG4gIGNvbG9yOiAjZWJlYmViO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cblxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2F0ZS1idG4ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHB1bHNhdGUtYnRuIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuXG5kaXYjbWFpbi1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8qIHdpZHRoOiA5NjBweDsgKi9cbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDE1dmg7XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"landing-page\">\n\n  <app-header-component></app-header-component>\n\n  <div id=\"main-section\">\n    <section id=\"intro\">\n      <div class=\"intro-container wow fadeIn\">\n        <!-- <img src=\"/assets/images/logo.png\" alt=\"\" srcset=\"\"> -->\n        <h1 class=\"mb-4 pb-0\">\n          <span class=\"ng-text\">NG</span>SriLanka 2019</h1>\n        <p class=\"mb-4 pb-0\">Sri Lanka's first ever Angular Conference</p>\n\n      </div>\n    </section>\n\n    <app-social-icons-component></app-social-icons-component>\n\n    <app-mailchimp-form></app-mailchimp-form>\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/components/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/components/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/components/mailchimp-form/mailchimp-form.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/mailchimp-form/mailchimp-form.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div#mailchimp-form {\n    padding: 24px;\n    text-align: center;\n    margin-top: -96px;\n}\n\n.sigup-container {\n    width: 100%;\n    margin: auto;\n}\n\n.sigup-container > input[type='text'] {\n    margin-bottom: 12px;\n}\n\n/* \n\n#subscribe {\n    padding: 60px;\n    background: url('/assets/images/subscribe1-bg.jpg') center center no-repeat;\n    background-size: cover;\n    overflow: hidden;\n    position: relative;\n  }\n  \n  #subscribe:before {\n    content: \"\";\n    background: rgba(6, 12, 34, 0.6);\n    position: absolute;\n    bottom: 0;\n    top: 0;\n    left: 0;\n    right: 0;\n  }\n   */\n\n#subscribe .section-header h2,\n  #subscribe p {\n    color: #fff;\n  }\n\n#subscribe input {\n    background: #fff;\n    color: #060c22;\n    border: 0;\n    outline: none;\n    margin: 10px;\n    padding: 9px 20px;\n    border-radius: 5px;\n    font-size: 14px;\n  }\n\n#subscribe button {\n    border: 0;\n    padding: 9px 48px;\n    cursor: pointer;\n    background: #f82249;\n    color: #fff;\n    transition: all 0.3s ease;\n    outline: none;\n    font-size: 14px;\n    border-radius: 50px;\n  }\n\n#subscribe button:hover {\n    background: #e0072f;\n  }\n\n/* \n  .form-row {\n    display: flex;\n    justify-content: center;\n} */\n\n/* .form-row >  * {\n    margin-right: 24px;\n}\n\n\n.form-row > input {\n    width: 400px;\n} */\n\ndiv#mailc-input-container {\n    display: flex;\n    flex-direction: column; \n    justify-content: center;\n    margin-top: 24px;\n    margin-bottom: 12px;\n}\n\ndiv#mailc-input-container > input {\n    text-align: center;\n}\n\n#mailc-input-email{\n    width: 400px;\n}\n\n#mailc-input-firstName, #mailc-input-lastName {\n    width: 190px;\n}\n\n#mailc-input-name-container, #mailc-input-email-container{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n}\n\nh3.hero-text {\n    color: white;\n    margin: 24px 0;\n}\n\n@media only screen and (max-device-width: 480px) {\n    #mailc-input-email{\n        width: 100%;\n    }\n    #mailc-input-firstName, #mailc-input-lastName ,#subscribe input {\n        width: 100%;\n        margin: 5px 0 !important\n    }\n\n    div#mailc-input-name-container {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        margin-top: 5px;\n        margin-bottom: 5px;\n    }\n\n    div#mailc-input-container {\n        padding: 0 12px;\n    }\n    \n    h3.hero-text {\n        font-size: 1.4rem !important;\n    }\n    \n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWlsY2hpbXAtZm9ybS9tYWlsY2hpbXAtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtDQUNoQjs7QUFFRDtJQUNJLG9CQUFvQjtDQUN2Qjs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQW1CSzs7QUFDSDs7SUFFRSxZQUFZO0dBQ2I7O0FBRUQ7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFVBQVU7SUFDVixjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0dBQ2pCOztBQUVEO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7R0FDckI7O0FBRUQ7SUFDRSxvQkFBb0I7R0FDckI7O0FBQ0g7Ozs7SUFJSTs7QUFFSjs7Ozs7OztJQU9JOztBQUVKO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtJQUNwQix3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsZUFBZTtDQUNsQjs7QUFFRDtJQUNJO1FBQ0ksWUFBWTtLQUNmO0lBQ0Q7UUFDSSxZQUFZO1FBQ1osd0JBQXdCO0tBQzNCOztJQUVEO1FBQ0ksY0FBYztRQUNkLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtLQUN0Qjs7SUFFRDtRQUNJLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLDZCQUE2QjtLQUNoQzs7O0NBR0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haWxjaGltcC1mb3JtL21haWxjaGltcC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYjbWFpbGNoaW1wLWZvcm0ge1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IC05NnB4O1xufVxuXG4uc2lndXAtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5zaWd1cC1jb250YWluZXIgPiBpbnB1dFt0eXBlPSd0ZXh0J10ge1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi8qIFxuXG4jc3Vic2NyaWJlIHtcbiAgICBwYWRkaW5nOiA2MHB4O1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvc3Vic2NyaWJlMS1iZy5qcGcnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAjc3Vic2NyaWJlOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDYsIDEyLCAzNCwgMC42KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gICAqL1xuICAjc3Vic2NyaWJlIC5zZWN0aW9uLWhlYWRlciBoMixcbiAgI3N1YnNjcmliZSBwIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgI3N1YnNjcmliZSBpbnB1dCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb2xvcjogIzA2MGMyMjtcbiAgICBib3JkZXI6IDA7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcGFkZGluZzogOXB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICBcbiAgI3N1YnNjcmliZSBidXR0b24ge1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiA5cHggNDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2Y4MjI0OTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIH1cbiAgXG4gICNzdWJzY3JpYmUgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTAwNzJmO1xuICB9XG4vKiBcbiAgLmZvcm0tcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSAqL1xuXG4vKiAuZm9ybS1yb3cgPiAgKiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xufVxuXG5cbi5mb3JtLXJvdyA+IGlucHV0IHtcbiAgICB3aWR0aDogNDAwcHg7XG59ICovXG5cbmRpdiNtYWlsYy1pbnB1dC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG5kaXYjbWFpbGMtaW5wdXQtY29udGFpbmVyID4gaW5wdXQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI21haWxjLWlucHV0LWVtYWlse1xuICAgIHdpZHRoOiA0MDBweDtcbn1cblxuI21haWxjLWlucHV0LWZpcnN0TmFtZSwgI21haWxjLWlucHV0LWxhc3ROYW1lIHtcbiAgICB3aWR0aDogMTkwcHg7XG59XG5cbiNtYWlsYy1pbnB1dC1uYW1lLWNvbnRhaW5lciwgI21haWxjLWlucHV0LWVtYWlsLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmgzLmhlcm8tdGV4dCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMjRweCAwO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweCkge1xuICAgICNtYWlsYy1pbnB1dC1lbWFpbHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgICNtYWlsYy1pbnB1dC1maXJzdE5hbWUsICNtYWlsYy1pbnB1dC1sYXN0TmFtZSAsI3N1YnNjcmliZSBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDVweCAwICFpbXBvcnRhbnRcbiAgICB9XG5cbiAgICBkaXYjbWFpbGMtaW5wdXQtbmFtZS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG4gICAgZGl2I21haWxjLWlucHV0LWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTJweDtcbiAgICB9XG4gICAgXG4gICAgaDMuaGVyby10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW0gIWltcG9ydGFudDtcbiAgICB9XG4gICAgXG4gICAgXG59Il19 */"

/***/ }),

/***/ "./src/app/components/mailchimp-form/mailchimp-form.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/mailchimp-form/mailchimp-form.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"card\" id=\"mailchimp-form\">\n\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">\n      <p class=\"lead\">Subscribe to receive latest updates on ngSriLanka</p>\n    </h5>\n\n    <div class=\"card-text\">\n      <div class=\"sigup-container\">\n        <input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Your Name\" id=\"\" />\n        <input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Email\" id=\"\" />\n        <a href=\"#\" class=\"btn btn-primary\">Notify Me</a>\n      </div>\n\n    </div>\n\n  </div>\n</div> -->\n\n\n<!--==========================\n      Subscribe Section\n    ============================-->\n<section id=\"subscribe\" *ngIf=\"!isHideForm\">\n  <form>\n    <h3 class=\"hero-text\">Excited? Don't forget to subscribe for more updates </h3>\n    <div class=\"form-row\">\n\n\n      <div id=\"mailc-input-container\">\n        <div id=\"mailc-input-name-container\">\n          <input id=\"mailc-input-firstName\" type=\"text\" class=\"form-control\" [(ngModel)]='first_name' name='first_name' placeholder=\"First name\">\n          <input id=\"mailc-input-lastName\" type=\"text\" class=\"form-control\" placeholder=\"Last name\" [(ngModel)]='last_name' name='last_name'>\n        </div>\n        <div id=\"mailc-input-email-container\">\n          <input id=\"mailc-input-email\" type=\"text\" class=\"form-control\" placeholder=\"Enter your Email\" [(ngModel)]='email' name='email'>\n        </div>\n      </div>\n\n\n      <div id=\"mailc-btn-container\">\n        <button type=\"button\" [disabled]='isBtnDisabled' (click)=\"handleNotify()\">Subscribe</button>\n      </div>\n\n    </div>\n\n  </form>\n\n</section>"

/***/ }),

/***/ "./src/app/components/mailchimp-form/mailchimp-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/mailchimp-form/mailchimp-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: MailchimpFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailchimpFormComponent", function() { return MailchimpFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.scss */ "./node_modules/sweetalert2/src/sweetalert2.scss");
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var MailchimpFormComponent = /** @class */ (function () {
    function MailchimpFormComponent(http) {
        this.http = http;
        this.isBtnDisabled = false;
        this.isHideForm = false;
    }
    MailchimpFormComponent.prototype.ngOnInit = function () {
    };
    MailchimpFormComponent.prototype.handleNotify = function () {
        return __awaiter(this, void 0, void 0, function () {
            var server_url, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isBtnDisabled = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        server_url = 'https://ngsrilankaconf-backend.herokuapp.com/preregister';
                        return [4 /*yield*/, this.http.post(server_url, { first_name: this.first_name, last_name: this.last_name, email: this.email }).toPromise()];
                    case 2:
                        response = _a.sent();
                        if (response.status) {
                            this.isHideForm = true;
                        }
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            type: 'success',
                            title: 'Keep in touch!',
                            text: "Thanks for registering with us!.We will keep you updated"
                        });
                        this.isBtnDisabled = false;
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        alert('Unable to keep you in the loop. Try again :D');
                        this.isBtnDisabled = false;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MailchimpFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mailchimp-form',
            template: __webpack_require__(/*! ./mailchimp-form.component.html */ "./src/app/components/mailchimp-form/mailchimp-form.component.html"),
            styles: [__webpack_require__(/*! ./mailchimp-form.component.css */ "./src/app/components/mailchimp-form/mailchimp-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MailchimpFormComponent);
    return MailchimpFormComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vinushap/Desktop/Azkar /untitled folder/ngSriLanka/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map