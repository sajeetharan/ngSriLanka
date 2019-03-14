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
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_speakers_speakers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/speakers/speakers.component */ "./src/app/components/speakers/speakers.component.ts");
/* harmony import */ var _components_sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/sponsors/sponsors.component */ "./src/app/components/sponsors/sponsors.component.ts");
/* harmony import */ var _components_venue_venue_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/venue/venue.component */ "./src/app/components/venue/venue.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/tickets/tickets.component */ "./src/app/components/tickets/tickets.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_sponsorship_packages_sponsorship_packages_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/sponsorship-packages/sponsorship-packages.component */ "./src/app/components/sponsorship-packages/sponsorship-packages.component.ts");
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
                _components_common_social_icons_component_social_icons_component_component__WEBPACK_IMPORTED_MODULE_8__["SocialIconsComponentComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _components_speakers_speakers_component__WEBPACK_IMPORTED_MODULE_11__["SpeakersComponent"],
                _components_sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_12__["SponsorsComponent"],
                _components_venue_venue_component__WEBPACK_IMPORTED_MODULE_13__["VenueComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _components_tickets_tickets_component__WEBPACK_IMPORTED_MODULE_15__["TicketsComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                _components_sponsorship_packages_sponsorship_packages_component__WEBPACK_IMPORTED_MODULE_17__["SponsorshipPackagesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mrg-top {\r\n    margin-top: 25px;\r\n}\r\n\r\n.sub-txt-title{\r\n    font-weight: 400;\r\n}\r\n\r\n.txt-title{\r\n    font-weight: 500;\r\n}\r\n\r\n.cmb-title {\r\n  font-weight: 200 !important;\r\n}\r\n\r\n.txt-title-sub {\r\n  font-weight: 200;\r\n}\r\n\r\n.detail-sec-mrg{\r\n    margin-top: 150px;\r\n}\r\n\r\n#about {\r\n    min-height: 100vh;\r\n    padding-top: 60px;\r\n}\r\n\r\n.mt30 {\r\n    margin-top: 30px !important;\r\n}\r\n\r\n.icon_box_one {\r\n    background-color: #f0f2f6;\r\n    padding: 0;\r\n    margin: 25px 0;\r\n    position: relative;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 0 rgba(0, 0, 0, 0.08);\r\n    transition: all 0.4s ease-in-out;\r\n    height: 290px;\r\n}\r\n\r\n.icon_box_one i {\r\n    margin-top: -10px;\r\n    padding: 0 15px;\r\n    font-size: 72px;\r\n    color: #f50136;\r\n    border-radius: 4px;\r\n    display: block;\r\n    margin-bottom: 15px;\r\n    line-height: 1;\r\n    transition: all 0.4s ease-in-out;\r\n  }\r\n\r\n.icon_box_one .content {\r\n    margin-top: 0;\r\n    padding: 10px 25px 25px;\r\n  }\r\n\r\n.icon_box_one .content h4 {\r\n    color: #18181c;\r\n    margin-bottom: 15px;\r\n    text-transform: capitalize;\r\n    transition: all 0.4s ease-in-out;\r\n  }\r\n\r\n.icon_box_one .content a {\r\n    color: #f50136;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    text-transform: capitalize;\r\n    transition: all 0.4s ease-in-out;\r\n  }\r\n\r\n.icon_box_one .content p {\r\n    transition: all 0.4s ease-in-out;\r\n  }\r\n\r\n.icon_box_one:hover {\r\n    box-shadow: 0 10px 32px rgba(0, 0, 0, 0.25);\r\n    background-color: #f50136;\r\n    transition: all 0.4s ease-in-out;\r\n  }\r\n\r\n.icon_box_one:hover i {\r\n    color: #ffffff;\r\n    transition: all 0.4s ease-in-out;\r\n  }\r\n\r\n.icon_box_one:hover .content h4 {\r\n    color: #ffffff;\r\n    transition: all 0.4s ease-in-out;\r\n  }\r\n\r\n.icon_box_one .contrnt p {\r\n    font-size: 14px;\r\n    font-family: \"Montserrat\", sans-serif;\r\n    margin: 0 0 15px;\r\n    line-height: 24px;\r\n    font-weight: 400;\r\n    color: #838383;\r\n  }\r\n\r\n.icon_box_one:hover .content p {\r\n    color: #ffffff;\r\n    transition: all 0.4s ease-in-out;\r\n  }\r\n\r\n.icon_box_one:hover .content a {\r\n    color: #ffffff;\r\n    transition: all 0.4s ease-in-out;\r\n  }\r\n\r\n#speaker {\r\n    height: 70px;\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksaUJBQWlCO0NBQ3BCOztBQUVEO0VBQ0UsNEJBQTRCO0NBQzdCOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0lBQ0ksa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLDRCQUE0QjtDQUMvQjs7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFFVCxzQ0FBc0M7SUFFOUMsaUNBQWlDO0lBQ2pDLGNBQWM7Q0FDakI7O0FBQ0M7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZUFBZTtJQUVmLGlDQUFpQztHQUNsQzs7QUFDRDtJQUNFLGNBQWM7SUFDZCx3QkFBd0I7R0FDekI7O0FBQ0Q7SUFDRSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLDJCQUEyQjtJQUUzQixpQ0FBaUM7R0FDbEM7O0FBQ0Q7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFFM0IsaUNBQWlDO0dBQ2xDOztBQUNEO0lBRUUsaUNBQWlDO0dBQ2xDOztBQUNEO0lBRVUsNENBQTRDO0lBQ3BELDBCQUEwQjtJQUUxQixpQ0FBaUM7R0FDbEM7O0FBQ0Q7SUFDRSxlQUFlO0lBRWYsaUNBQWlDO0dBQ2xDOztBQUNEO0lBQ0UsZUFBZTtJQUVmLGlDQUFpQztHQUNsQzs7QUFDRDtJQUNFLGdCQUFnQjtJQUNoQixzQ0FBc0M7SUFDdEMsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtHQUNoQjs7QUFFRDtJQUNFLGVBQWU7SUFFZixpQ0FBaUM7R0FDbEM7O0FBQ0Q7SUFDRSxlQUFlO0lBRWYsaUNBQWlDO0dBQ2xDOztBQUNEO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtHQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1yZy10b3Age1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLnN1Yi10eHQtdGl0bGV7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4udHh0LXRpdGxle1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmNtYi10aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udHh0LXRpdGxlLXN1YiB7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG5cclxuLmRldGFpbC1zZWMtbXJne1xyXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbn1cclxuXHJcbiNhYm91dCB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG59XHJcblxyXG4ubXQzMCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pY29uX2JveF9vbmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjJmNjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDI1cHggMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgICBoZWlnaHQ6IDI5MHB4O1xyXG59XHJcbiAgLmljb25fYm94X29uZSBpIHtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgZm9udC1zaXplOiA3MnB4O1xyXG4gICAgY29sb3I6ICNmNTAxMzY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgLmljb25fYm94X29uZSAuY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgcGFkZGluZzogMTBweCAyNXB4IDI1cHg7XHJcbiAgfVxyXG4gIC5pY29uX2JveF9vbmUgLmNvbnRlbnQgaDQge1xyXG4gICAgY29sb3I6ICMxODE4MWM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIC5pY29uX2JveF9vbmUgLmNvbnRlbnQgYSB7XHJcbiAgICBjb2xvcjogI2Y1MDEzNjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgLmljb25fYm94X29uZSAuY29udGVudCBwIHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgLmljb25fYm94X29uZTpob3ZlciB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAzMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjUwMTM2O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAuaWNvbl9ib3hfb25lOmhvdmVyIGkge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIC5pY29uX2JveF9vbmU6aG92ZXIgLmNvbnRlbnQgaDQge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIC5pY29uX2JveF9vbmUgLmNvbnRybnQgcCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDAgMCAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM4MzgzODM7XHJcbiAgfVxyXG5cclxuICAuaWNvbl9ib3hfb25lOmhvdmVyIC5jb250ZW50IHAge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIC5pY29uX2JveF9vbmU6aG92ZXIgLmNvbnRlbnQgYSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuICB9ICBcclxuICAjc3BlYWtlciB7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"about\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <h2  id=\"abt-txt-title\" class=\"txt-title\">Ng-SriLanka Conference 2019 </h2>\r\n            <h3 class=\"cmb-title\">Colombo</h3>\r\n          </div>   \r\n        </div>\r\n      \r\n        <div class=\"row\">\r\n          <div class=\"col-md-12 mrg-top\">\r\n            <h6 class=\"txt-title-sub\">ng-SriLanka is the cardinal event organized by the Angular community of SriLanka.</h6>\r\n          </div>\r\n        </div>\r\n      \r\n        <div class=\"row\">\r\n            <div class=\"row justify-content-center mt30\">\r\n                <div class=\"col-12 col-md-6 col-lg-3\">\r\n                    <div class=\"icon_box_one\">\r\n                        <i class=\"lnr lnr-mic\"></i>\r\n                        <div class=\"content\">\r\n                            <h4>16 TALKS</h4>\r\n                            <p>Code based talks and hands-on sessions on Angular and JavaScript</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n    \r\n                <div class=\"col-12 col-md-6 col-lg-3\">\r\n                    <div class=\"icon_box_one\">\r\n                        <i class=\"lnr lnr-rocket\"></i>\r\n                        <div class=\"content\">\r\n                            <h4>SINGLE DAY</h4>\r\n                            <p>11 Hours of in-depth learning in Angular and JavaScript</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n    \r\n                <div class=\"col-12 col-md-6 col-lg-3\">\r\n                    <div class=\"icon_box_one\">\r\n                        <i class=\"lnr lnr-bullhorn\"></i>\r\n                        <div class=\"content\">\r\n                            <h4>16 SPEAKERS</h4>\r\n                            <p>Internationally recognized speakers and local industry experts share their expertise</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n    \r\n                <div class=\"col-12 col-md-6 col-lg-3\">\r\n                    <div class=\"icon_box_one\">\r\n                        <i class=\"lnr lnr-users\"></i>\r\n                        <div class=\"content\">\r\n                            <h4>800+ DELEGATES</h4>\r\n                            <p>Industry experts, Enthusiastic developers, Project managers and Product makers networking and learning together</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n          </div> \r\n        </div>\r\n        <div id=\"speaker\"></div>   \r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/coming-soon-page/coming-soon-page.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/coming-soon-page/coming-soon-page.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hero {\r\n    background-image: url(/assets/images/bg.jpg);\r\n    background-size: cover;\r\n    background-position: center center\r\n}\r\n\r\n.landing-page-content {\r\n    text-align: center;\r\n}\r\n\r\nh1#comingSoonText {\r\n    color: white;\r\n    font-size: 6rem;\r\n}\r\n\r\n.hero {\r\n    padding: 96px;\r\n    padding-bottom: 192px;\r\n}\r\n\r\n.logo-contatiner >  img {\r\n    width: 350px;\r\n}\r\n\r\n.logo-contatiner {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21pbmctc29vbi1wYWdlL2NvbWluZy1zb29uLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZDQUE2QztJQUM3Qyx1QkFBdUI7SUFDdkIsa0NBQWtDO0NBQ3JDOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21pbmctc29vbi1wYWdlL2NvbWluZy1zb29uLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZXJvIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9iZy5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXJcclxufVxyXG5cclxuLmxhbmRpbmctcGFnZS1jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDEjY29taW5nU29vblRleHQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiA2cmVtO1xyXG59XHJcblxyXG4uaGVybyB7XHJcbiAgICBwYWRkaW5nOiA5NnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE5MnB4O1xyXG59XHJcblxyXG4ubG9nby1jb250YXRpbmVyID4gIGltZyB7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbn1cclxuXHJcbi5sb2dvLWNvbnRhdGluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/coming-soon-page/coming-soon-page.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/coming-soon-page/coming-soon-page.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero\">\r\n\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"landing-page-content\">\r\n          <div class=\"logo-contatiner\">\r\n            <img src=\"/assets/images/logo.png\" class=\"img-fluid\" alt=\"\" srcset=\"\">\r\n          </div>\r\n          <h1 class=\"display-4\" id=\"comingSoonText\">COMING SOON</h1>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-mailchimp-form>\r\n      </app-mailchimp-form>\r\n    </div>\r\n  </div>\r\n</div>"

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

module.exports = "\r\n::ng-deep #header {\r\n    height: 70px;\r\n    padding: 17px 0;\r\n    position: fixed; \r\n    left: 0;\r\n    top: 0;\r\n    right: 0;\r\n    transition: all 0.5s;\r\n    z-index: 997;\r\n  }\r\n  \r\n  ::ng-deep #header.header-scrolled,\r\n  ::ng-deep #header.header-fixed {\r\n    background: rgba(6, 12, 34, 0.98);\r\n    height: 70px;\r\n    padding: 15px 0;\r\n    transition: all 0.5s;\r\n  }\r\n  \r\n  ::ng-deep #header #logo h1 {\r\n    font-size: 36px;\r\n    margin: 0;\r\n    padding: 6px 0;\r\n    line-height: 1;\r\n    font-family: \"Raleway\", sans-serif;\r\n    font-weight: 700;\r\n    letter-spacing: 3px;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  ::ng-deep #header #logo h1 span {\r\n    color: #f82249;\r\n  }\r\n  \r\n  ::ng-deep #header #logo h1 a,\r\n  ::ng-deep #header #logo h1 a:hover {\r\n    color: #fff;\r\n  }\r\n  \r\n  ::ng-deep #header #logo img {\r\n    padding: 0;\r\n    margin: 0;\r\n    max-height: 40px;\r\n  }\r\n  \r\n  #logo{\r\n    margin: auto !important;\r\n  }\r\n  \r\n  /*--------------------------------------------------------------\r\n# Navigation Menu\r\n--------------------------------------------------------------*/\r\n  \r\n  /* Nav Menu Essentials */\r\n  \r\n  header{\r\n  background: black;\r\n  box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.30);\r\n}\r\n  \r\n  .nav-menu,\r\n.nav-menu * {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n  \r\n  .nav-menu ul {\r\n  position: absolute;\r\n  display: none;\r\n  top: 100%;\r\n  left: 0;\r\n  z-index: 99;\r\n}\r\n  \r\n  .nav-menu li {\r\n  position: relative;\r\n  white-space: nowrap;\r\n}\r\n  \r\n  .nav-menu > li {\r\n  float: left;\r\n}\r\n  \r\n  .nav-menu li:hover > ul,\r\n.nav-menu li.sfHover > ul {\r\n  display: block;\r\n}\r\n  \r\n  .nav-menu ul ul {\r\n  top: 0;\r\n  left: 100%;\r\n}\r\n  \r\n  .nav-menu ul li {\r\n  min-width: 180px;\r\n}\r\n  \r\n  /* Nav Menu Arrows */\r\n  \r\n  .sf-arrows .sf-with-ul {\r\n  padding-right: 30px;\r\n}\r\n  \r\n  .sf-arrows .sf-with-ul:after {\r\n  content: \"\\f107\";\r\n  position: absolute;\r\n  right: 15px;\r\n  font-family: FontAwesome;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n}\r\n  \r\n  .sf-arrows ul .sf-with-ul:after {\r\n  content: \"\\f105\";\r\n}\r\n  \r\n  /* Nav Meu Container */\r\n  \r\n  #nav-menu-container {\r\n  float: right;\r\n  margin: 0;\r\n}\r\n  \r\n  /* Nav Meu Styling */\r\n  \r\n  .nav-menu a {\r\n  padding: 8px;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  color: rgba(202, 206, 221, 0.8);\r\n  font-family: \"Raleway\", sans-serif;\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n  outline: none;\r\n}\r\n  \r\n  .nav-menu .menu-active a,\r\n.nav-menu a:hover {\r\n  color: #fff;\r\n}\r\n  \r\n  .nav-menu > li {\r\n  margin-left: 8px;\r\n}\r\n  \r\n  .nav-menu > li > a:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 0;\r\n  height: 2px;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: #f82249;\r\n  visibility: hidden;\r\n  transition: all 0.3s ease-in-out 0s;\r\n}\r\n  \r\n  .nav-menu a:hover:before,\r\n.nav-menu li:hover > a:before,\r\n.nav-menu .menu-active > a:before {\r\n  visibility: visible;\r\n  width: 100%;\r\n}\r\n  \r\n  .nav-menu li.buy-tickets a {\r\n  color: #fff;\r\n  background: #f82249;\r\n  padding: 7px 22px;\r\n  border-radius: 50px;\r\n  border: 2px solid #f82249;\r\n  transition: all ease-in-out 0.3s;\r\n  font-weight: 500;\r\n  margin-left: 8px;\r\n  margin-top: 2px;\r\n  line-height: 1;\r\n  font-size: 13px;\r\n}\r\n  \r\n  .nav-menu li.buy-tickets a:hover {\r\n  background: none;\r\n}\r\n  \r\n  .nav-menu li.buy-tickets:hover a:before,\r\n.nav-menu li.buy-tickets.menu-active a:before {\r\n  visibility: hidden;\r\n}\r\n  \r\n  .nav-menu ul {\r\n  margin: 4px 0 0 0;\r\n  padding: 10px;\r\n  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);\r\n  background: #fff;\r\n  border-radius: 3px;\r\n}\r\n  \r\n  .nav-menu ul li {\r\n  transition: 0.3s;\r\n}\r\n  \r\n  .nav-menu ul li a {\r\n  padding: 10px;\r\n  color: #060c22;\r\n  transition: 0.3s;\r\n  display: block;\r\n  font-size: 13px;\r\n  text-transform: none;\r\n  border-radius: 3px;\r\n}\r\n  \r\n  .nav-menu ul li:hover > a {\r\n  background: #f82249;\r\n  color: #fff;\r\n}\r\n  \r\n  .nav-menu ul ul {\r\n  margin: 0;\r\n}\r\n  \r\n  /* Mobile Nav Toggle */\r\n  \r\n  #mobile-nav-toggle {\r\n  position: fixed;\r\n  right: 0;\r\n  top: 0;\r\n  z-index: 999;\r\n  margin: 15px 15px 0 0;\r\n  border: 0;\r\n  background: none;\r\n  font-size: 24px;\r\n  display: none;\r\n  transition: all 0.4s;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n  \r\n  #mobile-nav-toggle i {\r\n  color: #fff;\r\n}\r\n  \r\n  /* Mobile Nav Styling */\r\n  \r\n  #mobile-nav {\r\n  position: fixed;\r\n  top: 0;\r\n  padding-top: 18px;\r\n  bottom: 0;\r\n  z-index: 998;\r\n  background: rgba(6, 12, 34, 0.9);\r\n  left: -260px;\r\n  width: 260px;\r\n  overflow-y: auto;\r\n  transition: 0.4s;\r\n}\r\n  \r\n  #mobile-nav ul {\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n}\r\n  \r\n  #mobile-nav ul li {\r\n  position: relative;\r\n}\r\n  \r\n  #mobile-nav ul li a {\r\n  color: #fff;\r\n  font-size: 45px;\r\n  overflow: hidden;\r\n  padding: 10px 22px 10px 15px;\r\n  position: relative;\r\n  text-decoration: none;\r\n  width: 100%;\r\n  display: block;\r\n  outline: none;\r\n}\r\n  \r\n  #mobile-nav ul li a:hover {\r\n  color: #f82249;\r\n}\r\n  \r\n  #mobile-nav ul li li {\r\n  padding-left: 30px;\r\n}\r\n  \r\n  #mobile-nav ul .menu-has-children i {\r\n  position:static;\r\n  right: 0;\r\n  z-index: 300;\r\n  padding: 34px;\r\n  cursor: pointer;\r\n  color: #fff;\r\n}\r\n  \r\n  #mobile-nav ul .menu-has-children i.fa-chevron-up {\r\n  color: #f82249;\r\n}\r\n  \r\n  #mobile-nav ul .menu-item-active {\r\n  color: #f82249;\r\n}\r\n  \r\n  #mobile-body-overly {\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 997;\r\n  top: 100;\r\n  left: 0;\r\n  position:relative;\r\n  background: rgba(6, 12, 34, 0.8);\r\n  display: none;\r\n}\r\n  \r\n  /* Mobile Nav body classes */\r\n  \r\n  body.mobile-nav-active {\r\n  overflow: hidden;\r\n}\r\n  \r\n  body.mobile-nav-active #mobile-nav {\r\n  left: 0;\r\n}\r\n  \r\n  body.mobile-nav-active #mobile-nav-toggle {\r\n  color: #fff;\r\n}\r\n  \r\n  header#header> .container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vaGVhZGVyLWNvbXBvbmVudC9oZWFkZXItY29tcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLE9BQU87SUFDUCxTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLGFBQWE7R0FDZDs7RUFFRDs7SUFFRSxrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixxQkFBcUI7R0FDdEI7O0VBRUQ7SUFDRSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGVBQWU7SUFDZixlQUFlO0lBQ2YsbUNBQW1DO0lBQ25DLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsMEJBQTBCO0dBQzNCOztFQUVEO0lBQ0UsZUFBZTtHQUNoQjs7RUFFRDs7SUFFRSxZQUFZO0dBQ2I7O0VBRUQ7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGlCQUFpQjtHQUNsQjs7RUFHRDtJQUNFLHdCQUF3QjtHQUN6Qjs7RUFNSDs7Z0VBRWdFOztFQUVoRSx5QkFBeUI7O0VBRXpCO0VBQ0Usa0JBQWtCO0VBRWxCLDhDQUE4QztDQUMvQzs7RUFFRDs7RUFFRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGlCQUFpQjtDQUNsQjs7RUFFRDtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsVUFBVTtFQUNWLFFBQVE7RUFDUixZQUFZO0NBQ2I7O0VBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0NBQ3JCOztFQUVEO0VBQ0UsWUFBWTtDQUNiOztFQUVEOztFQUVFLGVBQWU7Q0FDaEI7O0VBRUQ7RUFDRSxPQUFPO0VBQ1AsV0FBVztDQUNaOztFQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztFQUVELHFCQUFxQjs7RUFFckI7RUFDRSxvQkFBb0I7Q0FDckI7O0VBRUQ7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLG9CQUFvQjtDQUNyQjs7RUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7RUFFRCx1QkFBdUI7O0VBRXZCO0VBQ0UsYUFBYTtFQUNiLFVBQVU7Q0FDWDs7RUFFRCxxQkFBcUI7O0VBRXJCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsZ0NBQWdDO0VBQ2hDLG1DQUFtQztFQUNuQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7Q0FDZjs7RUFFRDs7RUFFRSxZQUFZO0NBQ2I7O0VBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0VBRUQ7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxZQUFZO0VBQ1osVUFBVTtFQUNWLFFBQVE7RUFDUiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLG9DQUFvQztDQUNyQzs7RUFFRDs7O0VBR0Usb0JBQW9CO0VBQ3BCLFlBQVk7Q0FDYjs7RUFFRDtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7Q0FDakI7O0VBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0VBRUQ7O0VBRUUsbUJBQW1CO0NBQ3BCOztFQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxtREFBbUQ7RUFDbkQsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjs7RUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7RUFFRDtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtDQUNwQjs7RUFFRDtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0NBQ2I7O0VBRUQ7RUFDRSxVQUFVO0NBQ1g7O0VBRUQsdUJBQXVCOztFQUV2QjtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZ0JBQWdCO0NBQ2pCOztFQUVEO0VBQ0UsWUFBWTtDQUNiOztFQUVELHdCQUF3Qjs7RUFFeEI7RUFDRSxnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2IsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixpQkFBaUI7Q0FDbEI7O0VBRUQ7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQjtDQUNsQjs7RUFFRDtFQUNFLG1CQUFtQjtDQUNwQjs7RUFFRDtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztDQUNmOztFQUVEO0VBQ0UsZUFBZTtDQUNoQjs7RUFFRDtFQUNFLG1CQUFtQjtDQUNwQjs7RUFFRDtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsWUFBWTtDQUNiOztFQUVEO0VBQ0UsZUFBZTtDQUNoQjs7RUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0VBRUQ7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixTQUFTO0VBQ1QsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsY0FBYztDQUNmOztFQUVELDZCQUE2Qjs7RUFFN0I7RUFDRSxpQkFBaUI7Q0FDbEI7O0VBRUQ7RUFDRSxRQUFRO0NBQ1Q7O0VBRUQ7RUFDRSxZQUFZO0NBQ2I7O0VBR0Q7SUFDSSxjQUFjO0lBQ2QsK0JBQStCO0NBQ2xDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vaGVhZGVyLWNvbXBvbmVudC9oZWFkZXItY29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuOjpuZy1kZWVwICNoZWFkZXIge1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgcGFkZGluZzogMTdweCAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyBcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgei1pbmRleDogOTk3O1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgI2hlYWRlci5oZWFkZXItc2Nyb2xsZWQsXHJcbiAgOjpuZy1kZWVwICNoZWFkZXIuaGVhZGVyLWZpeGVkIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNiwgMTIsIDM0LCAwLjk4KTtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgI2hlYWRlciAjbG9nbyBoMSB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiA2cHggMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgI2hlYWRlciAjbG9nbyBoMSBzcGFuIHtcclxuICAgIGNvbG9yOiAjZjgyMjQ5O1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgI2hlYWRlciAjbG9nbyBoMSBhLFxyXG4gIDo6bmctZGVlcCAjaGVhZGVyICNsb2dvIGgxIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIDo6bmctZGVlcCAjaGVhZGVyICNsb2dvIGltZyB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWF4LWhlaWdodDogNDBweDtcclxuICB9XHJcblxyXG5cclxuICAjbG9nb3tcclxuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgXHJcblxyXG4gIFxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4jIE5hdmlnYXRpb24gTWVudVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4vKiBOYXYgTWVudSBFc3NlbnRpYWxzICovXHJcblxyXG5oZWFkZXJ7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAuNHJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4zMCk7XHJcbiAgYm94LXNoYWRvdzogMCAwLjRyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMzApO1xyXG59XHJcblxyXG4ubmF2LW1lbnUsXHJcbi5uYXYtbWVudSAqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4ubmF2LW1lbnUgdWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHRvcDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDk5O1xyXG59XHJcblxyXG4ubmF2LW1lbnUgbGkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4ubmF2LW1lbnUgPiBsaSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5uYXYtbWVudSBsaTpob3ZlciA+IHVsLFxyXG4ubmF2LW1lbnUgbGkuc2ZIb3ZlciA+IHVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm5hdi1tZW51IHVsIHVsIHtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMTAwJTtcclxufVxyXG5cclxuLm5hdi1tZW51IHVsIGxpIHtcclxuICBtaW4td2lkdGg6IDE4MHB4O1xyXG59XHJcblxyXG4vKiBOYXYgTWVudSBBcnJvd3MgKi9cclxuXHJcbi5zZi1hcnJvd3MgLnNmLXdpdGgtdWwge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5zZi1hcnJvd3MgLnNmLXdpdGgtdWw6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXFxmMTA3XCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLnNmLWFycm93cyB1bCAuc2Ytd2l0aC11bDphZnRlciB7XHJcbiAgY29udGVudDogXCJcXGYxMDVcIjtcclxufVxyXG5cclxuLyogTmF2IE1ldSBDb250YWluZXIgKi9cclxuXHJcbiNuYXYtbWVudS1jb250YWluZXIge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qIE5hdiBNZXUgU3R5bGluZyAqL1xyXG5cclxuLm5hdi1tZW51IGEge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGNvbG9yOiByZ2JhKDIwMiwgMjA2LCAyMjEsIDAuOCk7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5uYXYtbWVudSAubWVudS1hY3RpdmUgYSxcclxuLm5hdi1tZW51IGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubmF2LW1lbnUgPiBsaSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLm5hdi1tZW51ID4gbGkgPiBhOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4MjI0OTtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XHJcbn1cclxuXHJcbi5uYXYtbWVudSBhOmhvdmVyOmJlZm9yZSxcclxuLm5hdi1tZW51IGxpOmhvdmVyID4gYTpiZWZvcmUsXHJcbi5uYXYtbWVudSAubWVudS1hY3RpdmUgPiBhOmJlZm9yZSB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm5hdi1tZW51IGxpLmJ1eS10aWNrZXRzIGEge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICNmODIyNDk7XHJcbiAgcGFkZGluZzogN3B4IDIycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZjgyMjQ5O1xyXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjNzO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4ubmF2LW1lbnUgbGkuYnV5LXRpY2tldHMgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLm5hdi1tZW51IGxpLmJ1eS10aWNrZXRzOmhvdmVyIGE6YmVmb3JlLFxyXG4ubmF2LW1lbnUgbGkuYnV5LXRpY2tldHMubWVudS1hY3RpdmUgYTpiZWZvcmUge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLm5hdi1tZW51IHVsIHtcclxuICBtYXJnaW46IDRweCAwIDAgMDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMzBweCByZ2JhKDEyNywgMTM3LCAxNjEsIDAuMjUpO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4ubmF2LW1lbnUgdWwgbGkge1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5uYXYtbWVudSB1bCBsaSBhIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiAjMDYwYzIyO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLm5hdi1tZW51IHVsIGxpOmhvdmVyID4gYSB7XHJcbiAgYmFja2dyb3VuZDogI2Y4MjI0OTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm5hdi1tZW51IHVsIHVsIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qIE1vYmlsZSBOYXYgVG9nZ2xlICovXHJcblxyXG4jbW9iaWxlLW5hdi10b2dnbGUge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIG1hcmdpbjogMTVweCAxNXB4IDAgMDtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI21vYmlsZS1uYXYtdG9nZ2xlIGkge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4vKiBNb2JpbGUgTmF2IFN0eWxpbmcgKi9cclxuXHJcbiNtb2JpbGUtbmF2IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAxOHB4O1xyXG4gIGJvdHRvbTogMDtcclxuICB6LWluZGV4OiA5OTg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg2LCAxMiwgMzQsIDAuOSk7XHJcbiAgbGVmdDogLTI2MHB4O1xyXG4gIHdpZHRoOiAyNjBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbiNtb2JpbGUtbmF2IHVsIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4jbW9iaWxlLW5hdiB1bCBsaSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jbW9iaWxlLW5hdiB1bCBsaSBhIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDQ1cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAxMHB4IDIycHggMTBweCAxNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuI21vYmlsZS1uYXYgdWwgbGkgYTpob3ZlciB7XHJcbiAgY29sb3I6ICNmODIyNDk7XHJcbn1cclxuXHJcbiNtb2JpbGUtbmF2IHVsIGxpIGxpIHtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbiNtb2JpbGUtbmF2IHVsIC5tZW51LWhhcy1jaGlsZHJlbiBpIHtcclxuICBwb3NpdGlvbjpzdGF0aWM7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMzAwO1xyXG4gIHBhZGRpbmc6IDM0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jbW9iaWxlLW5hdiB1bCAubWVudS1oYXMtY2hpbGRyZW4gaS5mYS1jaGV2cm9uLXVwIHtcclxuICBjb2xvcjogI2Y4MjI0OTtcclxufVxyXG5cclxuI21vYmlsZS1uYXYgdWwgLm1lbnUtaXRlbS1hY3RpdmUge1xyXG4gIGNvbG9yOiAjZjgyMjQ5O1xyXG59XHJcblxyXG4jbW9iaWxlLWJvZHktb3Zlcmx5IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogOTk3O1xyXG4gIHRvcDogMTAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg2LCAxMiwgMzQsIDAuOCk7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogTW9iaWxlIE5hdiBib2R5IGNsYXNzZXMgKi9cclxuXHJcbmJvZHkubW9iaWxlLW5hdi1hY3RpdmUge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbmJvZHkubW9iaWxlLW5hdi1hY3RpdmUgI21vYmlsZS1uYXYge1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbmJvZHkubW9iaWxlLW5hdi1hY3RpdmUgI21vYmlsZS1uYXYtdG9nZ2xlIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbmhlYWRlciNoZWFkZXI+IC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/common/header-component/header-component.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/common/header-component/header-component.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\r\n  <div class=\"container\">\r\n\r\n\r\n    <div id=\"logo\">\r\n      <a href=\"#\" class=\"scrollto\">\r\n        <img src=\"assets/images/logo.png\" alt=\"\" title=\"\">\r\n      </a>\r\n    </div>\r\n\r\n    <nav id=\"nav-menu-container\">\r\n      <ul class=\"nav-menu\">\r\n        <li><a href=\"#\">Home</a></li>\r\n        <li><a href=\"#about-event\">About</a></li>\r\n        <li><a href=\"#speaker\">Speakers</a></li>\r\n        <li><a href=\"#event-sponsors\">Sponsors</a></li>\r\n        <li><a href=\"#contact\">Contact</a></li>\r\n        <li class=\"buy-tickets\"><a href=\"#tickets\">Tickets</a></li>\r\n      </ul>\r\n    </nav>\r\n\r\n  </div>\r\n</header>"

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

module.exports = ".social-links a {\r\n    font-size: 18px;\r\n    display: inline-block;\r\n    background: #222636;\r\n    color: #eee;\r\n    line-height: 1;\r\n    padding: 8px 0;\r\n    margin-right: 4px;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    width: 36px;\r\n    height: 36px;\r\n    transition: 0.3s;\r\n  }\r\n\r\n\r\n  .social-links a:hover {\r\n    background: #f82249;\r\n    color: #fff;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vc29jaWFsLWljb25zLWNvbXBvbmVudC9zb2NpYWwtaWNvbnMtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtHQUNsQjs7O0VBR0Q7SUFDRSxvQkFBb0I7SUFDcEIsWUFBWTtHQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vc29jaWFsLWljb25zLWNvbXBvbmVudC9zb2NpYWwtaWNvbnMtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29jaWFsLWxpbmtzIGEge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogIzIyMjYzNjtcclxuICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIH1cclxuXHJcblxyXG4gIC5zb2NpYWwtbGlua3MgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjgyMjQ5O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/common/social-icons-component/social-icons-component.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/components/common/social-icons-component/social-icons-component.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"social-links\">\r\n  <a href=\"https://twitter.com/ngslconf\" class=\"twitter\" target=\"blank\">\r\n    <i class=\"fa fa-twitter\"></i>\r\n  </a>\r\n  <a href=\"https://www.facebook.com/ngslconf/\" class=\"facebook\" target=\"blank\">\r\n    <i class=\"fa fa-facebook\"></i>\r\n  </a>\r\n  <a href=\"https://www.instagram.com/ngslconf/?hl=en\" class=\"instagram\" target=\"blank\">\r\n    <i class=\"fa fa-instagram\"></i>\r\n  </a>\r\n  <!-- <a href=\"#\" class=\"google-plus\"><i class=\"fa fa-google-plus\"></i></a> -->\r\n  <a href=\"https://www.linkedin.com/company/ng-sl/\" class=\"linkedin\" target=\"blank\">\r\n    <i class=\"fa fa-linkedin\"></i>\r\n  </a>\r\n</div>"

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

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n  padding: 50px 0 100px;\r\n  background-color: #0b031b;\r\n}\r\nfooter .footer_box {\r\n  position: relative;\r\n  margin-top: 50px;\r\n}\r\nfooter .footer_box h4.footer_title {\r\n  text-transform: uppercase;\r\n  padding: 10px 0;\r\n  font-size: 18px;\r\n  color: #ffffff;\r\n}\r\nfooter .footer_box h4.footer_title:before {\r\n  width: 30px;\r\n  content: \" \";\r\n  position: absolute;\r\n  border-top: solid 3px #f50136;\r\n  left: 0;\r\n  top: 0;\r\n}\r\nfooter .footer_header {\r\n  margin-bottom: 30px;\r\n}\r\n.copyright_footer {\r\n  background-color: #080113;\r\n  padding: 15px;\r\n}\r\n.copyright_footer p {\r\n  font-size: 13px;\r\n  padding: 10px;\r\n  text-transform: capitalize;\r\n  color: #ffffff;\r\n}\r\n.copyright_footer ul.footer_menu {\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n  direction: rtl;\r\n}\r\n.copyright_footer ul.footer_menu li {\r\n  display: inline-block;\r\n}\r\n.copyright_footer ul.footer_menu li a {\r\n  padding: 10px;\r\n  text-transform: capitalize;\r\n  color: #838383;\r\n}\r\n.copyright_footer ul.footer_menu li a:hover {\r\n  color: #ffffff;\r\n}\r\n.footer_title {\r\n    color: #ffffff;\r\n}\r\n.footer-image {\r\n    width: 14em;\r\n}\r\n@media (max-width: 767px) {\r\n  .copyright_footer {\r\n    text-align: center;\r\n  }\r\n}\r\n@media (max-width: 767px) {\r\n    .footer-image {\r\n        margin-bottom: 2em;\r\n    }\r\n    .footer_title {\r\n        margin-top: 2em;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsUUFBUTtFQUNSLE9BQU87Q0FDUjtBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCO0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIsY0FBYztDQUNmO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLDJCQUEyQjtFQUMzQixlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxzQkFBc0I7Q0FDdkI7QUFDRDtFQUNFLGNBQWM7RUFDZCwyQkFBMkI7RUFDM0IsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUVEO0lBQ0ksZUFBZTtDQUNsQjtBQUVEO0lBQ0ksWUFBWTtDQUNmO0FBRUQ7RUFDRTtJQUNFLG1CQUFtQjtHQUNwQjtDQUNGO0FBRUQ7SUFDSTtRQUNJLG1CQUFtQjtLQUN0QjtJQUNEO1FBQ0ksZ0JBQWdCO0tBQ25CO0dBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgcGFkZGluZzogNTBweCAwIDEwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjAzMWI7XHJcbn1cclxuZm9vdGVyIC5mb290ZXJfYm94IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5mb290ZXIgLmZvb3Rlcl9ib3ggaDQuZm9vdGVyX3RpdGxlIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuZm9vdGVyIC5mb290ZXJfYm94IGg0LmZvb3Rlcl90aXRsZTpiZWZvcmUge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItdG9wOiBzb2xpZCAzcHggI2Y1MDEzNjtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxufVxyXG5mb290ZXIgLmZvb3Rlcl9oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5jb3B5cmlnaHRfZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgwMTEzO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLmNvcHlyaWdodF9mb290ZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmNvcHlyaWdodF9mb290ZXIgdWwuZm9vdGVyX21lbnUge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlyZWN0aW9uOiBydGw7XHJcbn1cclxuLmNvcHlyaWdodF9mb290ZXIgdWwuZm9vdGVyX21lbnUgbGkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uY29weXJpZ2h0X2Zvb3RlciB1bC5mb290ZXJfbWVudSBsaSBhIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGNvbG9yOiAjODM4MzgzO1xyXG59XHJcbi5jb3B5cmlnaHRfZm9vdGVyIHVsLmZvb3Rlcl9tZW51IGxpIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uZm9vdGVyX3RpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uZm9vdGVyLWltYWdlIHtcclxuICAgIHdpZHRoOiAxNGVtO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuY29weXJpZ2h0X2Zvb3RlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5mb290ZXItaW1hZ2Uge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICAgIH1cclxuICAgIC5mb290ZXJfdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"footer-section\">\r\n    <footer>\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm\">\r\n              <div class=\"col-sm-12\">\r\n                  <img src=\"../../../assets/images/logo-single.png\" alt=\"ng-srilanka\" class=\"img-responsive footer-image\">\r\n                  <app-social-icons-component></app-social-icons-component>\r\n              </div>\r\n            </div>\r\n          \r\n            <div class=\"col-sm\">\r\n              <div class=\"col-sm-12\">\r\n                  <h4 class=\"footer_title\">\r\n                      Keep in touch\r\n                  </h4>\r\n                  <app-mailchimp-form></app-mailchimp-form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </footer>\r\n    <div class=\"copyright_footer\">\r\n        <div class=\"container\">\r\n            <div class=\"row justify-content-center\">\r\n                <div class=\"col-md-6 col-12\">\r\n                    <p>Copyright &copy; All rights reserved</p>\r\n                </div>\r\n                <div class=\"col-12 col-md-6 \">\r\n                    <ul class=\"footer_menu\">\r\n                        <li>\r\n                            <a href=\"#\">Contact</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#sponsors\">Sponsors</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#speakers\">Speakers</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#about\">About</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#\">Home</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: url('/assets/images/intro-bg/intro-bg.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2Qsd0RBQXdEO0lBQ3hELHVCQUF1QjtJQUN2Qiw0QkFBNEI7O0NBRS9CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNob21lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaW50cm8tYmcvaW50cm8tYmcuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"home\">\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*--------------------------------------------------------------\r\n# Intro Section\r\n--------------------------------------------------------------*/\r\n\r\n\r\n@media only screen and (max-device-width: 480px) {\r\n  div#main-section {\r\n    padding: 24px;\r\n    top: 0 !important;\r\n  }\r\n\r\n}\r\n\r\n\r\n/* Desktops and laptops ----------- */\r\n\r\n\r\n@media only screen and (min-width : 1824px) {\r\n  #landing-page {\r\n    width: 100%;\r\n    height: 150vh;\r\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\r\n    /* background: url('/assets/images/about-bg.jpg') top center; */\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n}\r\n\r\n\r\n/* Large screens ----------- */\r\n\r\n\r\n@media only screen and (min-width : 1824px) {\r\n  #landing-page {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\r\n    /* background: url('/assets/images/about-bg.jpg') top center; */\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n}\r\n\r\n\r\n/* Smartphones (portrait and landscape) ----------- */\r\n\r\n\r\n@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\r\n  #landing-page {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\r\n    /* background: url('/assets/images/about-bg.jpg') top center; */\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n}\r\n\r\n\r\n/* Smartphones (landscape) ----------- */\r\n\r\n\r\n@media only screen and (min-width : 321px) {\r\n  #landing-page {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\r\n    /* background: url('/assets/images/about-bg.jpg') top center; */\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n}\r\n\r\n\r\n/* Smartphones (portrait) ----------- */\r\n\r\n\r\n@media only screen and (max-width : 320px) {\r\n  #landing-page {\r\n    width: 100%;\r\n    height: 150vh;\r\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\r\n    /* background: url('/assets/images/about-bg.jpg') top center; */\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n}\r\n\r\n\r\n/* iPads (portrait and landscape) ----------- */\r\n\r\n\r\n@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {\r\n  #landing-page {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\r\n    /* background: url('/assets/images/about-bg.jpg') top center; */\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n}\r\n\r\n\r\n/* iPads (landscape) ----------- */\r\n\r\n\r\n@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {\r\n  #landing-page {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\r\n    /* background: url('/assets/images/about-bg.jpg') top center; */\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n}\r\n\r\n\r\n/* iPads (portrait) ----------- */\r\n\r\n\r\n@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {\r\n  #landing-page {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\r\n    /* background: url('/assets/images/about-bg.jpg') top center; */\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n}\r\n\r\n\r\n/**********\r\n  iPad 3\r\n  **********/\r\n\r\n\r\n@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {\r\n  #landing-page {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\r\n    /* background: url('/assets/images/about-bg.jpg') top center; */\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n}\r\n\r\n\r\n@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {\r\n  #landing-page {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\r\n    /* background: url('/assets/images/about-bg.jpg') top center; */\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n}\r\n\r\n\r\n/* iPhone 4 ----------- */\r\n\r\n\r\n@media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {\r\n  #landing-page {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\r\n    /* background: url('/assets/images/about-bg.jpg') top center; */\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n}\r\n\r\n\r\n@media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {\r\n  #landing-page {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\r\n    /* background: url('/assets/images/about-bg.jpg') top center; */\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n}\r\n\r\n\r\n/* iPhone 5 ----------- */\r\n\r\n\r\n@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2) {\r\n  #landing-page {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\r\n    /* background: url('/assets/images/about-bg.jpg') top center; */\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n}\r\n\r\n\r\n@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2) {\r\n  #landing-page {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\r\n    /* background: url('/assets/images/about-bg.jpg') top center; */\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n}\r\n\r\n\r\n/* iPhone 6, 7, 8 ----------- */\r\n\r\n\r\n@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2) {\r\n  #landing-page {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\r\n    /* background: url('/assets/images/about-bg.jpg') top center; */\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n}\r\n\r\n\r\n@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2) {\r\n  #landing-page {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\r\n    /* background: url('/assets/images/about-bg.jpg') top center; */\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n}\r\n\r\n\r\n/* iPhone 6+, 7+, 8+ ----------- */\r\n\r\n\r\n@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2) {\r\n  #landing-page {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\r\n    /* background: url('/assets/images/about-bg.jpg') top center; */\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n}\r\n\r\n\r\n@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2) {\r\n  #landing-page {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\r\n    /* background: url('/assets/images/about-bg.jpg') top center; */\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n}\r\n\r\n\r\n/* iPhone X ----------- */\r\n\r\n\r\n@media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3) {\r\n  #landing-page {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\r\n    /* background: url('/assets/images/about-bg.jpg') top center; */\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n}\r\n\r\n\r\n@media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3) {\r\n  #landing-page {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\r\n    /* background: url('/assets/images/about-bg.jpg') top center; */\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n}\r\n\r\n\r\n/* iPhone XS Max, XR ----------- */\r\n\r\n\r\n@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3) {\r\n  #landing-page {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\r\n    /* background: url('/assets/images/about-bg.jpg') top center; */\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n}\r\n\r\n\r\n@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3) {\r\n  #landing-page {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\r\n    /* background: url('/assets/images/about-bg.jpg') top center; */\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n}\r\n\r\n\r\n/* Samsung Galaxy S3 ----------- */\r\n\r\n\r\n@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2) {\r\n  #landing-page {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\r\n    /* background: url('/assets/images/about-bg.jpg') top center; */\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n}\r\n\r\n\r\n@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2) {\r\n  #landing-page {\r\n    width: 100%;\r\n    height: 114vh;\r\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\r\n    /* background: url('/assets/images/about-bg.jpg') top center; */\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n}\r\n\r\n\r\n/* Samsung Galaxy S4 ----------- */\r\n\r\n\r\n@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3) {\r\n  #landing-page {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\r\n    /* background: url('/assets/images/about-bg.jpg') top center; */\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n}\r\n\r\n\r\n@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3) {\r\n  #landing-page {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\r\n    /* background: url('/assets/images/about-bg.jpg') top center; */\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n}\r\n\r\n\r\n/* Samsung Galaxy S5 ----------- */\r\n\r\n\r\n@media only screen and (min-device-width: 360px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3) {\r\n  #landing-page {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\r\n    /* background: url('/assets/images/about-bg.jpg') top center; */\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n}\r\n\r\n\r\n@media only screen and (min-device-width: 360px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3) {\r\n  #landing-page {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: url('/assets/images/intro-bg/intro-bg.jpg') top center;\r\n    /* background: url('/assets/images/about-bg.jpg') top center; */\r\n    background-size: cover;\r\n    position: relative;\r\n  }\r\n}\r\n\r\n\r\n#intro .intro-container {\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: top;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  -webkit-text-emphasis-position: up;\r\n          text-emphasis-position: up;\r\n  padding: 0 13px;\r\n}\r\n\r\n\r\n#intro h1 {\r\n  color: #fff;\r\n  font-family: \"Raleway\", sans-serif;\r\n  font-size: 80px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n}\r\n\r\n\r\n#intro h1 span {\r\n  color: #f82249;\r\n}\r\n\r\n\r\n#intro p {\r\n  color: #ebebeb;\r\n  font-weight: 700;\r\n  font-size: 20px;\r\n}\r\n\r\n\r\n@-webkit-keyframes pulsate-btn {\r\n  0% {\r\n    -webkit-transform: scale(0.6, 0.6);\r\n    transform: scale(0.6, 0.6);\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: scale(1, 1);\r\n    transform: scale(1, 1);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n\r\n@keyframes pulsate-btn {\r\n  0% {\r\n    -webkit-transform: scale(0.6, 0.6);\r\n    transform: scale(0.6, 0.6);\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: scale(1, 1);\r\n    transform: scale(1, 1);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n\r\ndiv#main-section {\r\n  display: flex;\r\n  margin: auto;\r\n  text-align: center;\r\n  /* width: 960px; */\r\n  flex-direction: column;\r\n  position: relative;\r\n  /* top: 15vh; */\r\n\r\n}\r\n\r\n\r\n#about-event {\r\n  width: 100%;\r\n  height: 90px;\r\n  position: absolute;\r\n  bottom: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O2dFQUVnRTs7O0FBR2hFO0VBQ0U7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0dBQ25COztDQUVGOzs7QUFFRCxzQ0FBc0M7OztBQUN0QztFQUNFO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxtRUFBbUU7SUFDbkUsZ0VBQWdFO0lBQ2hFLHVCQUF1QjtJQUN2QixtQkFBbUI7R0FDcEI7Q0FDRjs7O0FBRUQsK0JBQStCOzs7QUFDL0I7RUFDRTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUVBQW1FO0lBQ25FLGdFQUFnRTtJQUNoRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0dBQ3BCO0NBQ0Y7OztBQUVELHNEQUFzRDs7O0FBQ3REO0VBQ0U7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLG1FQUFtRTtJQUNuRSxnRUFBZ0U7SUFDaEUsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtHQUNwQjtDQUNGOzs7QUFFRCx5Q0FBeUM7OztBQUN6QztFQUNFO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxtRUFBbUU7SUFDbkUsZ0VBQWdFO0lBQ2hFLHVCQUF1QjtJQUN2QixtQkFBbUI7R0FDcEI7Q0FDRjs7O0FBRUQsd0NBQXdDOzs7QUFDeEM7RUFDRTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUVBQW1FO0lBQ25FLGdFQUFnRTtJQUNoRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0dBQ3BCO0NBQ0Y7OztBQUVELGdEQUFnRDs7O0FBQ2hEO0VBQ0U7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLG1FQUFtRTtJQUNuRSxnRUFBZ0U7SUFDaEUsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtHQUNwQjtDQUNGOzs7QUFFRCxtQ0FBbUM7OztBQUNuQztFQUNFO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxtRUFBbUU7SUFDbkUsZ0VBQWdFO0lBQ2hFLHVCQUF1QjtJQUN2QixtQkFBbUI7R0FDcEI7Q0FDRjs7O0FBRUQsa0NBQWtDOzs7QUFDbEM7RUFDRTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUVBQW1FO0lBQ25FLGdFQUFnRTtJQUNoRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0dBQ3BCO0NBQ0Y7OztBQUVEOzthQUVhOzs7QUFDYjtFQUNFO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxtRUFBbUU7SUFDbkUsZ0VBQWdFO0lBQ2hFLHVCQUF1QjtJQUN2QixtQkFBbUI7R0FDcEI7Q0FDRjs7O0FBRUQ7RUFDRTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUVBQW1FO0lBQ25FLGdFQUFnRTtJQUNoRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0dBQ3BCO0NBQ0Y7OztBQUVELDBCQUEwQjs7O0FBQzFCO0VBQ0U7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLG1FQUFtRTtJQUNuRSxnRUFBZ0U7SUFDaEUsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtHQUNwQjtDQUNGOzs7QUFFRDtFQUNFO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxtRUFBbUU7SUFDbkUsZ0VBQWdFO0lBQ2hFLHVCQUF1QjtJQUN2QixtQkFBbUI7R0FDcEI7Q0FDRjs7O0FBRUQsMEJBQTBCOzs7QUFDMUI7RUFDRTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUVBQW1FO0lBQ25FLGdFQUFnRTtJQUNoRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0dBQ3BCO0NBQ0Y7OztBQUVEO0VBQ0U7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLG1FQUFtRTtJQUNuRSxnRUFBZ0U7SUFDaEUsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtHQUNwQjtDQUNGOzs7QUFFRCxnQ0FBZ0M7OztBQUNoQztFQUNFO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxtRUFBbUU7SUFDbkUsZ0VBQWdFO0lBQ2hFLHVCQUF1QjtJQUN2QixtQkFBbUI7R0FDcEI7Q0FDRjs7O0FBRUQ7RUFDRTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUVBQW1FO0lBQ25FLGdFQUFnRTtJQUNoRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0dBQ3BCO0NBQ0Y7OztBQUVELG1DQUFtQzs7O0FBQ25DO0VBQ0U7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLG1FQUFtRTtJQUNuRSxnRUFBZ0U7SUFDaEUsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtHQUNwQjtDQUNGOzs7QUFFRDtFQUNFO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxtRUFBbUU7SUFDbkUsZ0VBQWdFO0lBQ2hFLHVCQUF1QjtJQUN2QixtQkFBbUI7R0FDcEI7Q0FDRjs7O0FBRUQsMEJBQTBCOzs7QUFDMUI7RUFDRTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUVBQW1FO0lBQ25FLGdFQUFnRTtJQUNoRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0dBQ3BCO0NBQ0Y7OztBQUVEO0VBQ0U7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLG1FQUFtRTtJQUNuRSxnRUFBZ0U7SUFDaEUsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtHQUNwQjtDQUNGOzs7QUFFRCxtQ0FBbUM7OztBQUNuQztFQUNFO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxtRUFBbUU7SUFDbkUsZ0VBQWdFO0lBQ2hFLHVCQUF1QjtJQUN2QixtQkFBbUI7R0FDcEI7Q0FDRjs7O0FBRUQ7RUFDRTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUVBQW1FO0lBQ25FLGdFQUFnRTtJQUNoRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0dBQ3BCO0NBQ0Y7OztBQUVELG1DQUFtQzs7O0FBQ25DO0VBQ0U7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLG1FQUFtRTtJQUNuRSxnRUFBZ0U7SUFDaEUsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtHQUNwQjtDQUNGOzs7QUFFRDtFQUNFO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxtRUFBbUU7SUFDbkUsZ0VBQWdFO0lBQ2hFLHVCQUF1QjtJQUN2QixtQkFBbUI7R0FDcEI7Q0FDRjs7O0FBRUQsbUNBQW1DOzs7QUFDbkM7RUFDRTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUVBQW1FO0lBQ25FLGdFQUFnRTtJQUNoRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0dBQ3BCO0NBQ0Y7OztBQUVEO0VBQ0U7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLG1FQUFtRTtJQUNuRSxnRUFBZ0U7SUFDaEUsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtHQUNwQjtDQUNGOzs7QUFFRCxtQ0FBbUM7OztBQUNuQztFQUNFO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxtRUFBbUU7SUFDbkUsZ0VBQWdFO0lBQ2hFLHVCQUF1QjtJQUN2QixtQkFBbUI7R0FDcEI7Q0FDRjs7O0FBRUQ7RUFDRTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUVBQW1FO0lBQ25FLGdFQUFnRTtJQUNoRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0dBQ3BCO0NBQ0Y7OztBQUdEOztFQUVFLGNBQWM7RUFHZCx3QkFBd0I7RUFHeEIsaUJBQWlCO0VBSWpCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixnQkFBZ0I7Q0FDakI7OztBQUVEO0VBQ0UsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtDQUMzQjs7O0FBRUQ7RUFDRSxlQUFlO0NBQ2hCOzs7QUFFRDtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0NBQ2pCOzs7QUFJRDtFQUNFO0lBQ0UsbUNBQW1DO0lBQ25DLDJCQUEyQjtJQUMzQixXQUFXO0dBQ1o7O0VBRUQ7SUFDRSwrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLFdBQVc7R0FDWjtDQUNGOzs7QUFFRDtFQUNFO0lBQ0UsbUNBQW1DO0lBQ25DLDJCQUEyQjtJQUMzQixXQUFXO0dBQ1o7O0VBRUQ7SUFDRSwrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLFdBQVc7R0FDWjtDQUNGOzs7QUFHRDtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjs7Q0FFakI7OztBQUdEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsVUFBVTtDQUNYIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiMgSW50cm8gU2VjdGlvblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNDgwcHgpIHtcclxuICBkaXYjbWFpbi1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICB0b3A6IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKiBEZXNrdG9wcyBhbmQgbGFwdG9wcyAtLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiAxODI0cHgpIHtcclxuICAjbGFuZGluZy1wYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNTB2aDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaW50cm8tYmcvaW50cm8tYmcuanBnJykgdG9wIGNlbnRlcjtcclxuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYWJvdXQtYmcuanBnJykgdG9wIGNlbnRlcjsgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBMYXJnZSBzY3JlZW5zIC0tLS0tLS0tLS0tICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDE4MjRweCkge1xyXG4gICNsYW5kaW5nLXBhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbnRyby1iZy9pbnRyby1iZy5qcGcnKSB0b3AgY2VudGVyO1xyXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9hYm91dC1iZy5qcGcnKSB0b3AgY2VudGVyOyAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbn1cclxuXHJcbi8qIFNtYXJ0cGhvbmVzIChwb3J0cmFpdCBhbmQgbGFuZHNjYXBlKSAtLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDQ4MHB4KSB7XHJcbiAgI2xhbmRpbmctcGFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2ludHJvLWJnL2ludHJvLWJnLmpwZycpIHRvcCBjZW50ZXI7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Fib3V0LWJnLmpwZycpIHRvcCBjZW50ZXI7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxufVxyXG5cclxuLyogU21hcnRwaG9uZXMgKGxhbmRzY2FwZSkgLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoIDogMzIxcHgpIHtcclxuICAjbGFuZGluZy1wYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaW50cm8tYmcvaW50cm8tYmcuanBnJykgdG9wIGNlbnRlcjtcclxuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYWJvdXQtYmcuanBnJykgdG9wIGNlbnRlcjsgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTbWFydHBob25lcyAocG9ydHJhaXQpIC0tLS0tLS0tLS0tICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDMyMHB4KSB7XHJcbiAgI2xhbmRpbmctcGFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTUwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2ludHJvLWJnL2ludHJvLWJnLmpwZycpIHRvcCBjZW50ZXI7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Fib3V0LWJnLmpwZycpIHRvcCBjZW50ZXI7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxufVxyXG5cclxuLyogaVBhZHMgKHBvcnRyYWl0IGFuZCBsYW5kc2NhcGUpIC0tLS0tLS0tLS0tICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogMTAyNHB4KSB7XHJcbiAgI2xhbmRpbmctcGFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2ludHJvLWJnL2ludHJvLWJnLmpwZycpIHRvcCBjZW50ZXI7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Fib3V0LWJnLmpwZycpIHRvcCBjZW50ZXI7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxufVxyXG5cclxuLyogaVBhZHMgKGxhbmRzY2FwZSkgLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aCA6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpIHtcclxuICAjbGFuZGluZy1wYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaW50cm8tYmcvaW50cm8tYmcuanBnJykgdG9wIGNlbnRlcjtcclxuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYWJvdXQtYmcuanBnJykgdG9wIGNlbnRlcjsgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBpUGFkcyAocG9ydHJhaXQpIC0tLS0tLS0tLS0tICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uIDogcG9ydHJhaXQpIHtcclxuICAjbGFuZGluZy1wYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaW50cm8tYmcvaW50cm8tYmcuanBnJykgdG9wIGNlbnRlcjtcclxuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYWJvdXQtYmcuanBnJykgdG9wIGNlbnRlcjsgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKlxyXG4gIGlQYWQgM1xyXG4gICoqKioqKioqKiovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbyA6IDIpIHtcclxuICAjbGFuZGluZy1wYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaW50cm8tYmcvaW50cm8tYmcuanBnJykgdG9wIGNlbnRlcjtcclxuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYWJvdXQtYmcuanBnJykgdG9wIGNlbnRlcjsgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbiA6IHBvcnRyYWl0KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbyA6IDIpIHtcclxuICAjbGFuZGluZy1wYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaW50cm8tYmcvaW50cm8tYmcuanBnJykgdG9wIGNlbnRlcjtcclxuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYWJvdXQtYmcuanBnJykgdG9wIGNlbnRlcjsgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBpUGhvbmUgNCAtLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDQ4MHB4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbyA6IDIpIHtcclxuICAjbGFuZGluZy1wYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaW50cm8tYmcvaW50cm8tYmcuanBnJykgdG9wIGNlbnRlcjtcclxuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYWJvdXQtYmcuanBnJykgdG9wIGNlbnRlcjsgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDQ4MHB4KSBhbmQgKG9yaWVudGF0aW9uIDogcG9ydHJhaXQpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvIDogMikge1xyXG4gICNsYW5kaW5nLXBhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbnRyby1iZy9pbnRyby1iZy5qcGcnKSB0b3AgY2VudGVyO1xyXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9hYm91dC1iZy5qcGcnKSB0b3AgY2VudGVyOyAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbn1cclxuXHJcbi8qIGlQaG9uZSA1IC0tLS0tLS0tLS0tICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0OiA1NjhweCkgYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikge1xyXG4gICNsYW5kaW5nLXBhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbnRyby1iZy9pbnRyby1iZy5qcGcnKSB0b3AgY2VudGVyO1xyXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9hYm91dC1iZy5qcGcnKSB0b3AgY2VudGVyOyAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0OiA1NjhweCkgYW5kIChvcmllbnRhdGlvbiA6IHBvcnRyYWl0KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XHJcbiAgI2xhbmRpbmctcGFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2ludHJvLWJnL2ludHJvLWJnLmpwZycpIHRvcCBjZW50ZXI7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Fib3V0LWJnLmpwZycpIHRvcCBjZW50ZXI7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxufVxyXG5cclxuLyogaVBob25lIDYsIDcsIDggLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQ6IDY2N3B4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XHJcbiAgI2xhbmRpbmctcGFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2ludHJvLWJnL2ludHJvLWJnLmpwZycpIHRvcCBjZW50ZXI7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Fib3V0LWJnLmpwZycpIHRvcCBjZW50ZXI7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQ6IDY2N3B4KSBhbmQgKG9yaWVudGF0aW9uIDogcG9ydHJhaXQpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcclxuICAjbGFuZGluZy1wYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaW50cm8tYmcvaW50cm8tYmcuanBnJykgdG9wIGNlbnRlcjtcclxuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYWJvdXQtYmcuanBnJykgdG9wIGNlbnRlcjsgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBpUGhvbmUgNissIDcrLCA4KyAtLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0MTRweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogNzM2cHgpIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcclxuICAjbGFuZGluZy1wYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaW50cm8tYmcvaW50cm8tYmcuanBnJykgdG9wIGNlbnRlcjtcclxuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYWJvdXQtYmcuanBnJykgdG9wIGNlbnRlcjsgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0MTRweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogNzM2cHgpIGFuZCAob3JpZW50YXRpb24gOiBwb3J0cmFpdCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikge1xyXG4gICNsYW5kaW5nLXBhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbnRyby1iZy9pbnRyby1iZy5qcGcnKSB0b3AgY2VudGVyO1xyXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9hYm91dC1iZy5qcGcnKSB0b3AgY2VudGVyOyAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbn1cclxuXHJcbi8qIGlQaG9uZSBYIC0tLS0tLS0tLS0tICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0OiA4MTJweCkgYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykge1xyXG4gICNsYW5kaW5nLXBhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbnRyby1iZy9pbnRyby1iZy5qcGcnKSB0b3AgY2VudGVyO1xyXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9hYm91dC1iZy5qcGcnKSB0b3AgY2VudGVyOyAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0OiA4MTJweCkgYW5kIChvcmllbnRhdGlvbiA6IHBvcnRyYWl0KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XHJcbiAgI2xhbmRpbmctcGFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2ludHJvLWJnL2ludHJvLWJnLmpwZycpIHRvcCBjZW50ZXI7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Fib3V0LWJnLmpwZycpIHRvcCBjZW50ZXI7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxufVxyXG5cclxuLyogaVBob25lIFhTIE1heCwgWFIgLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDE0cHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQ6IDg5NnB4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XHJcbiAgI2xhbmRpbmctcGFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2ludHJvLWJnL2ludHJvLWJnLmpwZycpIHRvcCBjZW50ZXI7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Fib3V0LWJnLmpwZycpIHRvcCBjZW50ZXI7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDE0cHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQ6IDg5NnB4KSBhbmQgKG9yaWVudGF0aW9uIDogcG9ydHJhaXQpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHtcclxuICAjbGFuZGluZy1wYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaW50cm8tYmcvaW50cm8tYmcuanBnJykgdG9wIGNlbnRlcjtcclxuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYWJvdXQtYmcuanBnJykgdG9wIGNlbnRlcjsgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTYW1zdW5nIEdhbGF4eSBTMyAtLS0tLS0tLS0tLSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogNjQwcHgpIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcclxuICAjbGFuZGluZy1wYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaW50cm8tYmcvaW50cm8tYmcuanBnJykgdG9wIGNlbnRlcjtcclxuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYWJvdXQtYmcuanBnJykgdG9wIGNlbnRlcjsgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogNjQwcHgpIGFuZCAob3JpZW50YXRpb24gOiBwb3J0cmFpdCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikge1xyXG4gICNsYW5kaW5nLXBhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDExNHZoO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbnRyby1iZy9pbnRyby1iZy5qcGcnKSB0b3AgY2VudGVyO1xyXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9hYm91dC1iZy5qcGcnKSB0b3AgY2VudGVyOyAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbn1cclxuXHJcbi8qIFNhbXN1bmcgR2FsYXh5IFM0IC0tLS0tLS0tLS0tICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0OiA2NDBweCkgYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMykge1xyXG4gICNsYW5kaW5nLXBhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9pbnRyby1iZy9pbnRyby1iZy5qcGcnKSB0b3AgY2VudGVyO1xyXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9hYm91dC1iZy5qcGcnKSB0b3AgY2VudGVyOyAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0OiA2NDBweCkgYW5kIChvcmllbnRhdGlvbiA6IHBvcnRyYWl0KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XHJcbiAgI2xhbmRpbmctcGFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2ludHJvLWJnL2ludHJvLWJnLmpwZycpIHRvcCBjZW50ZXI7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Fib3V0LWJnLmpwZycpIHRvcCBjZW50ZXI7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxufVxyXG5cclxuLyogU2Ftc3VuZyBHYWxheHkgUzUgLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzYwcHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQ6IDY0MHB4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XHJcbiAgI2xhbmRpbmctcGFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2ludHJvLWJnL2ludHJvLWJnLmpwZycpIHRvcCBjZW50ZXI7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Fib3V0LWJnLmpwZycpIHRvcCBjZW50ZXI7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzYwcHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQ6IDY0MHB4KSBhbmQgKG9yaWVudGF0aW9uIDogcG9ydHJhaXQpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpIHtcclxuICAjbGFuZGluZy1wYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaW50cm8tYmcvaW50cm8tYmcuanBnJykgdG9wIGNlbnRlcjtcclxuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYWJvdXQtYmcuanBnJykgdG9wIGNlbnRlcjsgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuI2ludHJvIC5pbnRyby1jb250YWluZXIge1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IHRvcDtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiB0b3A7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWVtcGhhc2lzLXBvc2l0aW9uOiB1cDtcclxuICBwYWRkaW5nOiAwIDEzcHg7XHJcbn1cclxuXHJcbiNpbnRybyBoMSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogODBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbiNpbnRybyBoMSBzcGFuIHtcclxuICBjb2xvcjogI2Y4MjI0OTtcclxufVxyXG5cclxuI2ludHJvIHAge1xyXG4gIGNvbG9yOiAjZWJlYmViO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBwdWxzYXRlLWJ0biB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNiwgMC42KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHB1bHNhdGUtYnRuIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42LCAwLjYpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYsIDAuNik7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5kaXYjbWFpbi1zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLyogd2lkdGg6IDk2MHB4OyAqL1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qIHRvcDogMTV2aDsgKi9cclxuXHJcbn1cclxuXHJcblxyXG4jYWJvdXQtZXZlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogOTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section id=\"landing-page\">\r\n    <app-header-component></app-header-component>\r\n  \r\n  <div id=\"main-section\">\r\n    <section id=\"intro\">\r\n      <div class=\"intro-container wow fadeIn\">\r\n        <h1 class=\"mb-4 pb-0\">\r\n          <span class=\"ng-text\">NG</span>SriLanka 2019</h1>\r\n        <p class=\"mb-4 pb-0\">Sri Lanka's first ever Angular Conference</p>\r\n\r\n      </div>\r\n    </section>\r\n\r\n    <app-social-icons-component></app-social-icons-component>\r\n\r\n    <app-mailchimp-form></app-mailchimp-form>\r\n    <div id=\"about-event\"></div>\r\n  </div>\r\n\r\n  \r\n\r\n</section>\r\n<!-- <app-nav></app-nav>\r\n<div id=\"main-section\">\r\n  <app-home></app-home>\r\n</div> -->\r\n\r\n<div id=\"main-section\">\r\n  <app-about></app-about>\r\n</div>\r\n\r\n<div id=\"main-section\">\r\n    <app-speakers></app-speakers>\r\n</div>\r\n\r\n<div id=\"main-section\">\r\n  <app-sponsors></app-sponsors>\r\n</div>\r\n\r\n<div id=\"main-section\">\r\n    <app-venue></app-venue>\r\n</div>\r\n\r\n<div id=\"main-section\">\r\n    <app-tickets></app-tickets>\r\n</div>\r\n\r\n<div id=\"main-section\">\r\n    <app-footer></app-footer>\r\n</div>\r\n  \r\n\r\n\r\n\r\n"

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

module.exports = "div#mailchimp-form {\r\n    padding: 24px;\r\n    text-align: center;\r\n    margin-top: -96px;\r\n}\r\n\r\n.sigup-container {\r\n    width: 100%;\r\n    margin: auto;\r\n}\r\n\r\n.sigup-container > input[type='text'] {\r\n    margin-bottom: 12px;\r\n}\r\n\r\n/* \r\n\r\n#subscribe {\r\n    padding: 60px;\r\n    background: url('/assets/images/subscribe1-bg.jpg') center center no-repeat;\r\n    background-size: cover;\r\n    overflow: hidden;\r\n    position: relative;\r\n  }\r\n  \r\n  #subscribe:before {\r\n    content: \"\";\r\n    background: rgba(6, 12, 34, 0.6);\r\n    position: absolute;\r\n    bottom: 0;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n   */\r\n\r\n#subscribe .section-header h2,\r\n  #subscribe p {\r\n    color: #fff;\r\n  }\r\n\r\n#subscribe input {\r\n    background: #fff;\r\n    color: #060c22;\r\n    border: 0;\r\n    outline: none;\r\n    margin: 10px;\r\n    padding: 9px 20px;\r\n    border-radius: 5px;\r\n    font-size: 14px;\r\n  }\r\n\r\n#subscribe button {\r\n    border: 0;\r\n    padding: 9px 48px;\r\n    cursor: pointer;\r\n    background: #f82249;\r\n    color: #fff;\r\n    transition: all 0.3s ease;\r\n    outline: none;\r\n    font-size: 14px;\r\n    border-radius: 50px;\r\n  }\r\n\r\n#subscribe button:hover {\r\n    background: #e0072f;\r\n  }\r\n\r\n/* \r\n  .form-row {\r\n    display: flex;\r\n    justify-content: center;\r\n} */\r\n\r\n/* .form-row >  * {\r\n    margin-right: 24px;\r\n}\r\n\r\n\r\n.form-row > input {\r\n    width: 400px;\r\n} */\r\n\r\ndiv#mailc-input-container {\r\n    display: flex;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    margin-top: 24px;\r\n    margin-bottom: 12px;\r\n}\r\n\r\ndiv#mailc-input-container > input {\r\n    text-align: center;\r\n}\r\n\r\n#mailc-input-email{\r\n    width: 400px;\r\n}\r\n\r\n#mailc-input-firstName, #mailc-input-lastName {\r\n    width: 190px;\r\n}\r\n\r\n#mailc-input-name-container, #mailc-input-email-container{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\r\n\r\nh3.hero-text {\r\n    color: white;\r\n    margin: 24px 0;\r\n}\r\n\r\n@media only screen and (max-device-width: 480px) {\r\n    #mailc-input-email{\r\n        width: 100%;\r\n    }\r\n    #mailc-input-firstName, #mailc-input-lastName ,#subscribe input {\r\n        width: 100%;\r\n        margin: 5px 0 !important\r\n    }\r\n\r\n    div#mailc-input-name-container {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        margin-top: 5px;\r\n        margin-bottom: 5px;\r\n    }\r\n\r\n    div#mailc-input-container {\r\n        padding: 0 12px;\r\n    }\r\n    \r\n    h3.hero-text {\r\n        font-size: 1.4rem !important;\r\n    }\r\n    \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWlsY2hpbXAtZm9ybS9tYWlsY2hpbXAtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtDQUNoQjs7QUFFRDtJQUNJLG9CQUFvQjtDQUN2Qjs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQW1CSzs7QUFDSDs7SUFFRSxZQUFZO0dBQ2I7O0FBRUQ7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFVBQVU7SUFDVixjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0dBQ2pCOztBQUVEO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQkFBb0I7R0FDckI7O0FBRUQ7SUFDRSxvQkFBb0I7R0FDckI7O0FBQ0g7Ozs7SUFJSTs7QUFFSjs7Ozs7OztJQU9JOztBQUVKO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtJQUNwQix3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsZUFBZTtDQUNsQjs7QUFFRDtJQUNJO1FBQ0ksWUFBWTtLQUNmO0lBQ0Q7UUFDSSxZQUFZO1FBQ1osd0JBQXdCO0tBQzNCOztJQUVEO1FBQ0ksY0FBYztRQUNkLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtLQUN0Qjs7SUFFRDtRQUNJLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLDZCQUE2QjtLQUNoQzs7O0NBR0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haWxjaGltcC1mb3JtL21haWxjaGltcC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYjbWFpbGNoaW1wLWZvcm0ge1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IC05NnB4O1xyXG59XHJcblxyXG4uc2lndXAtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uc2lndXAtY29udGFpbmVyID4gaW5wdXRbdHlwZT0ndGV4dCddIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi8qIFxyXG5cclxuI3N1YnNjcmliZSB7XHJcbiAgICBwYWRkaW5nOiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9zdWJzY3JpYmUxLWJnLmpwZycpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gICNzdWJzY3JpYmU6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDYsIDEyLCAzNCwgMC42KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbiAgICovXHJcbiAgI3N1YnNjcmliZSAuc2VjdGlvbi1oZWFkZXIgaDIsXHJcbiAgI3N1YnNjcmliZSBwIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAjc3Vic2NyaWJlIGlucHV0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogIzA2MGMyMjtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA5cHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgXHJcbiAgI3N1YnNjcmliZSBidXR0b24ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogOXB4IDQ4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjgyMjQ5O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gICNzdWJzY3JpYmUgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlMDA3MmY7XHJcbiAgfVxyXG4vKiBcclxuICAuZm9ybS1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59ICovXHJcblxyXG4vKiAuZm9ybS1yb3cgPiAgKiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1yb3cgPiBpbnB1dCB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbn0gKi9cclxuXHJcbmRpdiNtYWlsYy1pbnB1dC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuZGl2I21haWxjLWlucHV0LWNvbnRhaW5lciA+IGlucHV0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI21haWxjLWlucHV0LWVtYWlse1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4jbWFpbGMtaW5wdXQtZmlyc3ROYW1lLCAjbWFpbGMtaW5wdXQtbGFzdE5hbWUge1xyXG4gICAgd2lkdGg6IDE5MHB4O1xyXG59XHJcblxyXG4jbWFpbGMtaW5wdXQtbmFtZS1jb250YWluZXIsICNtYWlsYy1pbnB1dC1lbWFpbC1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5oMy5oZXJvLXRleHQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAyNHB4IDA7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAjbWFpbGMtaW5wdXQtZW1haWx7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAjbWFpbGMtaW5wdXQtZmlyc3ROYW1lLCAjbWFpbGMtaW5wdXQtbGFzdE5hbWUgLCNzdWJzY3JpYmUgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDAgIWltcG9ydGFudFxyXG4gICAgfVxyXG5cclxuICAgIGRpdiNtYWlsYy1pbnB1dC1uYW1lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2I21haWxjLWlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoMy5oZXJvLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/mailchimp-form/mailchimp-form.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/mailchimp-form/mailchimp-form.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"card\" id=\"mailchimp-form\">\r\n\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">\r\n      <p class=\"lead\">Subscribe to receive latest updates on ngSriLanka</p>\r\n    </h5>\r\n\r\n    <div class=\"card-text\">\r\n      <div class=\"sigup-container\">\r\n        <input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Your Name\" id=\"\" />\r\n        <input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Email\" id=\"\" />\r\n        <a href=\"#\" class=\"btn btn-primary\">Notify Me</a>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div> -->\r\n\r\n\r\n<!--==========================\r\n      Subscribe Section\r\n    ============================-->\r\n<section id=\"subscribe\" *ngIf=\"!isHideForm\">\r\n  <form>\r\n    <h3 class=\"hero-text\">Excited? Don't forget to subscribe for more updates </h3>\r\n    <div class=\"form-row\">\r\n\r\n\r\n      <div id=\"mailc-input-container\">\r\n        <div id=\"mailc-input-name-container\">\r\n          <input id=\"mailc-input-firstName\" type=\"text\" class=\"form-control\" [(ngModel)]='first_name' name='first_name' placeholder=\"First name\">\r\n          <input id=\"mailc-input-lastName\" type=\"text\" class=\"form-control\" placeholder=\"Last name\" [(ngModel)]='last_name' name='last_name'>\r\n        </div>\r\n        <div id=\"mailc-input-email-container\">\r\n          <input id=\"mailc-input-email\" type=\"text\" class=\"form-control\" placeholder=\"Enter your Email\" [(ngModel)]='email' name='email'>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div id=\"mailc-btn-container\">\r\n        <button type=\"button\" [disabled]='isBtnDisabled' (click)=\"handleNotify()\">Subscribe</button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </form>\r\n\r\n</section>"

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

/***/ "./src/app/components/speakers/speaker.model.ts":
/*!******************************************************!*\
  !*** ./src/app/components/speakers/speaker.model.ts ***!
  \******************************************************/
/*! exports provided: Speaker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Speaker", function() { return Speaker; });
var Speaker = /** @class */ (function () {
    function Speaker(name, company, twitter, github, imagePath) {
        this.name = name;
        this.company = company;
        this.twitter = twitter;
        this.github = github;
        this.imagePath = imagePath;
    }
    return Speaker;
}());



/***/ }),

/***/ "./src/app/components/speakers/speakers.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/speakers/speakers.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  p {\r\n    font-weight: 300;\r\n    color: #888;\r\n  }\r\n  \r\n  \r\n  a {\r\n    color: #82b641;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n  \r\n  \r\n  img {\r\n    max-width: 100%;\r\n    height: auto;\r\n  }\r\n  \r\n  \r\n  ul,\r\n  li {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  \r\n  \r\n  .event-speaker figure img {\r\n    border-radius: 4px;\r\n    transition: all 1s ease;\r\n  }\r\n  \r\n  \r\n  .nav>li>a { padding: 12px 16px; }\r\n  \r\n  \r\n  .event-speaker h4 { margin: 24px 0 6px; }\r\n  \r\n  \r\n  .event-speaker p { font-style: italic; }\r\n  \r\n  \r\n  .event-speaker .social li a {\r\n    width: 45px;\r\n    height: 45px;\r\n    line-height: 45px;\r\n  }\r\n  \r\n  \r\n  .event-speaker .social li a:hover {\r\n    color: #fcfcfc;\r\n  }\r\n  \r\n  \r\n  .fa{\r\n      color: #f82249;\r\n  }\r\n  \r\n  \r\n  .event-speaker .bttn {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 57%;\r\n    bottom: auto;\r\n    right: auto;\r\n    -webkit-transform: translateX(-50%) translateY(-50%);\r\n    transform: translateX(-50%) translateY(-50%);\r\n  }\r\n  \r\n  \r\n  .owl-wrapper-outer { margin-bottom: 1.5em; }\r\n  \r\n  \r\n  .speaker-slider .item { \r\n    margin: 3px;\r\n    \r\n    \r\n    }\r\n  \r\n  \r\n  img{\r\n    transition: all 700ms ease;\r\n  }\r\n  \r\n  \r\n  .social li {\r\n    display: inline-block;\r\n    padding-right: .8em;\r\n  }\r\n  \r\n  \r\n  .social li:last-child { padding-right: 0; }\r\n  \r\n  \r\n  .social li a {\r\n    display: block;\r\n    transition: all 0.3s ease-in-out;\r\n    font-size: 1.3em;\r\n  }\r\n  \r\n  \r\n  .site-footer .social li a {\r\n    color: #8ec150;\r\n    background: transparent;\r\n    border: 1px solid #8ec150;\r\n    width: 55px;\r\n    height: 55px;\r\n    line-height: 55px;\r\n    border-radius: 50%;\r\n    font-size: 1.5em;\r\n  }\r\n  \r\n  \r\n  .site-footer .social li a:hover {\r\n    background: #8ec150;\r\n    border: 1px solid #8ec150;\r\n    color: #fff;\r\n  }\r\n  \r\n  \r\n  img:hover{\r\n    -webkit-transform :scale(1.03);\r\n\ttransform: scale(1.03);\r\n  }\r\n  \r\n  \r\n  #speakers{\r\n      min-height: 100vh;\r\n      padding-top: 60px;\r\n  }\r\n  \r\n  \r\n  #event-sponsors {\r\n    width: 100%;\r\n    height: 70px;\r\n    position: absolute;\r\n    bottom: 0;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zcGVha2Vycy9zcGVha2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7R0FDYjs7O0VBR0Q7SUFDRSxlQUFlO0lBQ2YsaUNBQWlDO0dBQ2xDOzs7RUFFRDtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0dBQ2Q7OztFQUVEOztJQUVFLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsVUFBVTtHQUNYOzs7RUFFRDtJQUNFLG1CQUFtQjtJQUNuQix3QkFBd0I7R0FDekI7OztFQUVELFlBQVksbUJBQW1CLEVBQUU7OztFQUVqQyxvQkFBb0IsbUJBQW1CLEVBQUU7OztFQUV6QyxtQkFBbUIsbUJBQW1CLEVBQUU7OztFQUV4QztJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0dBQ25COzs7RUFFRDtJQUNFLGVBQWU7R0FDaEI7OztFQUVEO01BQ0ksZUFBZTtHQUNsQjs7O0VBRUQ7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFNBQVM7SUFDVCxhQUFhO0lBQ2IsWUFBWTtJQUNaLHFEQUFxRDtJQUVyRCw2Q0FBNkM7R0FDOUM7OztFQUVELHFCQUFxQixxQkFBcUIsRUFBRTs7O0VBRTVDO0lBQ0UsWUFBWTs7O0tBR1g7OztFQUVIO0lBRUUsMkJBQTJCO0dBQzVCOzs7RUFJRDtJQUNFLHNCQUFzQjtJQUN0QixvQkFBb0I7R0FDckI7OztFQUVELHdCQUF3QixpQkFBaUIsRUFBRTs7O0VBRTNDO0lBQ0UsZUFBZTtJQUNmLGlDQUFpQztJQUNqQyxpQkFBaUI7R0FDbEI7OztFQUVEO0lBQ0UsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtHQUNsQjs7O0VBRUQ7SUFDRSxvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLFlBQVk7R0FDYjs7O0VBRUQ7SUFDRSwrQkFBK0I7Q0FDbEMsdUJBQXVCO0dBQ3JCOzs7RUFHRDtNQUNJLGtCQUFrQjtNQUNsQixrQkFBa0I7R0FDckI7OztFQUVEO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtHQUNYIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zcGVha2Vycy9zcGVha2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBwIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogIzg4ODtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogIzgyYjY0MTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAgXHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgdWwsXHJcbiAgbGkge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5ldmVudC1zcGVha2VyIGZpZ3VyZSBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXY+bGk+YSB7IHBhZGRpbmc6IDEycHggMTZweDsgfVxyXG4gIFxyXG4gIC5ldmVudC1zcGVha2VyIGg0IHsgbWFyZ2luOiAyNHB4IDAgNnB4OyB9XHJcbiAgXHJcbiAgLmV2ZW50LXNwZWFrZXIgcCB7IGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxyXG4gIFxyXG4gIC5ldmVudC1zcGVha2VyIC5zb2NpYWwgbGkgYSB7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gIH1cclxuICBcclxuICAuZXZlbnQtc3BlYWtlciAuc29jaWFsIGxpIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmY2ZjZmM7XHJcbiAgfVxyXG5cclxuICAuZmF7XHJcbiAgICAgIGNvbG9yOiAjZjgyMjQ5O1xyXG4gIH1cclxuICBcclxuICAuZXZlbnQtc3BlYWtlciAuYnR0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDU3JTtcclxuICAgIGJvdHRvbTogYXV0bztcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuICBcclxuICAub3dsLXdyYXBwZXItb3V0ZXIgeyBtYXJnaW4tYm90dG9tOiAxLjVlbTsgfVxyXG4gIFxyXG4gIC5zcGVha2VyLXNsaWRlciAuaXRlbSB7IFxyXG4gICAgbWFyZ2luOiAzcHg7XHJcbiAgICBcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICBpbWd7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA3MDBtcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDcwMG1zIGVhc2U7XHJcbiAgfVxyXG4gXHJcbiAgXHJcbiAgXHJcbiAgLnNvY2lhbCBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAuOGVtO1xyXG4gIH1cclxuICBcclxuICAuc29jaWFsIGxpOmxhc3QtY2hpbGQgeyBwYWRkaW5nLXJpZ2h0OiAwOyB9XHJcbiAgXHJcbiAgLnNvY2lhbCBsaSBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gIH1cclxuICBcclxuICAuc2l0ZS1mb290ZXIgLnNvY2lhbCBsaSBhIHtcclxuICAgIGNvbG9yOiAjOGVjMTUwO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOGVjMTUwO1xyXG4gICAgd2lkdGg6IDU1cHg7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5zaXRlLWZvb3RlciAuc29jaWFsIGxpIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzhlYzE1MDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ZWMxNTA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIGltZzpob3ZlcntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtIDpzY2FsZSgxLjAzKTtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xyXG4gIH1cclxuXHRcclxuXHJcbiAgI3NwZWFrZXJze1xyXG4gICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgfVxyXG5cclxuICAjZXZlbnQtc3BvbnNvcnMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/speakers/speakers.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/speakers/speakers.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"speaker section-spacing text-center\" id=\"speakers\">\r\n    <div class=\"container\">\r\n      <header>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n              <h2>Speakers</h2>\r\n              <h3 class=\"section-sub-title\">Experts who will be speaking at the event</h3>\r\n          </div>\r\n        </div>       \r\n      </header>\r\n      <div class=\"row\">\r\n                <div class=\"col-sm-3 shrink-div\" *ngFor=\"let speaker of speakers\">\r\n                    <div class=\"item shrink\"> \r\n                        <div class=\"event-speaker\">\r\n                          <figure> <img src=\"../../assets/images/speakers/{{speaker.imagePath}}\" alt=\"event-speaker\" data-no-retina>\r\n                            <figcaption>\r\n                              <h4>{{ speaker.name }}</h4>\r\n                              <p>{{ speaker.company}}</p>\r\n                              <ul class=\"social\">\r\n                                <li><a href=\"https://twitter.com/{{ speaker.twitter}}\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a></li>\r\n                                <li><a href=\"https://github.com/{{speaker.github}}\" target=\"_blank\"><i class=\"fa fa-github-alt\"></i></a></li>\r\n                              </ul>\r\n                            </figcaption>\r\n                          </figure>\r\n                        </div>\r\n                      </div>\r\n                  </div>\r\n            </div>\r\n        </div>\r\n        <div id=\"event-sponsors\"></div>\r\n</section>"

/***/ }),

/***/ "./src/app/components/speakers/speakers.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/speakers/speakers.component.ts ***!
  \***********************************************************/
/*! exports provided: SpeakersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakersComponent", function() { return SpeakersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _speaker_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speaker.model */ "./src/app/components/speakers/speaker.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpeakersComponent = /** @class */ (function () {
    function SpeakersComponent() {
        this.speakers = [
            new _speaker_model__WEBPACK_IMPORTED_MODULE_1__["Speaker"]('Dhananjay Kumar', 'Infragistics', 'Debug_mode', 'debugmodedotnet', 'dhananjaykumar.jpg'),
            new _speaker_model__WEBPACK_IMPORTED_MODULE_1__["Speaker"]('Marta Wiśniewska', 'Cosmose', 'MartaW_PL', '', 'martawiśniewska.jpg'),
            new _speaker_model__WEBPACK_IMPORTED_MODULE_1__["Speaker"]('Nishu Goel', 'IBM', 'DcoustaWilson', 'nishugoel', 'nishugoel.jpeg'),
            new _speaker_model__WEBPACK_IMPORTED_MODULE_1__["Speaker"]('Pankaj Parkar', 'Synerzip', '', '', 'pankajparkar.jpg'),
        ];
    }
    SpeakersComponent.prototype.ngOnInit = function () {
    };
    SpeakersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-speakers',
            template: __webpack_require__(/*! ./speakers.component.html */ "./src/app/components/speakers/speakers.component.html"),
            styles: [__webpack_require__(/*! ./speakers.component.css */ "./src/app/components/speakers/speakers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpeakersComponent);
    return SpeakersComponent;
}());



/***/ }),

/***/ "./src/app/components/sponsors/sponsors.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/sponsors/sponsors.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  .sponsor > .container > .row:first-of-type { margin-bottom: 3em; }\r\n\r\n.action-btn-sponsor,\r\n.action-btn-pricing { margin-top: 3em; }\r\n\r\n.sponsor figure {\r\n  display: inline-block;\r\n  padding: 1em 2.5em 2.5em;\r\n}\r\n\r\n.sponsor img {\r\n  -webkit-filter: grayscale(100%);\r\n  filter: grayscale(100%);\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.sponsor img:hover {\r\n  -webkit-filter: grayscale(0);\r\n  filter: grayscale(0);\r\n}\r\n\r\n.btm-margin {\r\n    margin-bottom: 4em;\r\n    margin-top: 5em\r\n}\r\n\r\n.btn-primary {\r\n    background: #ee0933 !important;\r\n    border: #ee0933;\r\n    height: 45px;\r\n}\r\n\r\n.btn-primary:hover {\r\n    background: #f5103a !important;\r\n    border: #f51c44 ;\r\n    cursor: pointer;\r\n}\r\n\r\n#sponsors {\r\n    min-height: 100vh;\r\n    padding-top: 60px;\r\n}\r\n\r\n/* Sponsorship packages */\r\n\r\n.card-row {\r\n  padding-top: 5em;\r\n}\r\n\r\n.price_box {\r\n  position: relative;\r\n  padding: 35px 30px;\r\n  margin-bottom: 30px;\r\n  text-align: center;\r\n  background-color: #f0f2f6;\r\n  transition: all ease-in-out 0.4s;\r\n}\r\n\r\n.price_box .price_highlight {\r\n  background-color: #f50136;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  font-size: 12px;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  padding: 10px 15px;\r\n  color: #fff;\r\n}\r\n\r\n.price_box .price_header h4 {\r\n  font-size: 24px;\r\n  margin-bottom: 5px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.price_features { \r\n  text-align: left;\r\n  color: #838383;\r\n  font-family: sans-serif;\r\n}\r\n\r\n.price_box .price_header h6 {\r\n  font-size: 14px;\r\n  text-transform: capitalize;\r\n  color: #838383;\r\n  font-weight: 400;\r\n}\r\n\r\n.price_box .price_tag {\r\n  padding: 15px 0;\r\n  text-transform: capitalize;\r\n  color: #18181c;\r\n  font-size: 48px;\r\n  font-weight: 700;\r\n}\r\n\r\n.price_box .price_tag sup {\r\n  font-size: 24px;\r\n  font-weight: 400;\r\n  top: -15px;\r\n  left: -7px;\r\n  color: #838383;\r\n}\r\n\r\n.price_box .price_features ul {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.price_box .price_features ul li {\r\n  padding: 7px;\r\n  font-size: 14px;\r\n  font-weight: 100;;\r\n}\r\n\r\n.price_box .price_footer {\r\n  margin-top: 30px;\r\n}\r\n\r\n.price_box.active {\r\n  background-color: #ffffff;\r\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\r\n  transition: all ease-in-out 0.4s;\r\n}\r\n\r\n.badge-price {\r\n  width: 200px;\r\n    height: 40px;\r\n    padding-top: 8px;\r\n    font-size: 25px;\r\n    font-weight: 300;\r\n}\r\n\r\n.bronze {\r\n  color: #cd7f32;\r\n}\r\n\r\n.bronze-bac {\r\n  background: #cd7f32;\r\n}\r\n\r\n.silver {\r\n  color: #a7a5a5;\r\n}\r\n\r\n.silver-bac {\r\n  background: #a7a5a5;\r\n}\r\n\r\n.gold {\r\n  color: \t\t#D4AF37;\r\n}\r\n\r\n.gold-bac {\r\n  background: \t#D4AF37;\r\n}\r\n\r\n.platinum {\r\n  color: #ee0933;\r\n}\r\n\r\n.platinum-bac {\r\n  background: #ee0933;\r\n}\r\n\r\n#sponsors {\r\n  transition: all 3s ease-in-out;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zcG9uc29ycy9zcG9uc29ycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJFQUFFLDZDQUE2QyxtQkFBbUIsRUFBRTs7QUFFcEU7c0JBQ3NCLGdCQUFnQixFQUFFOztBQUV4QztFQUNFLHNCQUFzQjtFQUN0Qix5QkFBeUI7Q0FDMUI7O0FBRUQ7RUFDRSxnQ0FBZ0M7RUFDaEMsd0JBQXdCO0VBQ3hCLGlDQUFpQztDQUNsQzs7QUFFRDtFQUNFLDZCQUE2QjtFQUM3QixxQkFBcUI7Q0FDdEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtDQUNyQjs7QUFFRCwwQkFBMEI7O0FBRTFCO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUUxQixpQ0FBaUM7Q0FDbEM7O0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLFlBQVk7Q0FDYjs7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtDQUMzQjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysd0JBQXdCO0NBQ3pCOztBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsaUJBQWlCO0NBQ2xCOztBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjs7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0NBQ2hCOztBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxVQUFVO0NBQ1g7O0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtDQUNsQjs7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFHRDtFQUNFLDBCQUEwQjtFQUVsQiw0Q0FBNEM7RUFFcEQsaUNBQWlDO0NBQ2xDOztBQUVEO0VBQ0UsYUFBYTtJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtDQUNwQjs7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxlQUFlO0NBQ2hCOztBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UscUJBQXFCO0NBQ3RCOztBQUVEO0VBQ0UsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUlFLCtCQUErQjtDQUNoQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3BvbnNvcnMvc3BvbnNvcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLnNwb25zb3IgPiAuY29udGFpbmVyID4gLnJvdzpmaXJzdC1vZi10eXBlIHsgbWFyZ2luLWJvdHRvbTogM2VtOyB9XHJcblxyXG4uYWN0aW9uLWJ0bi1zcG9uc29yLFxyXG4uYWN0aW9uLWJ0bi1wcmljaW5nIHsgbWFyZ2luLXRvcDogM2VtOyB9XHJcblxyXG4uc3BvbnNvciBmaWd1cmUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAxZW0gMi41ZW0gMi41ZW07XHJcbn1cclxuXHJcbi5zcG9uc29yIGltZyB7XHJcbiAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnNwb25zb3IgaW1nOmhvdmVyIHtcclxuICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDApO1xyXG4gIGZpbHRlcjogZ3JheXNjYWxlKDApO1xyXG59XHJcblxyXG4uYnRtLW1hcmdpbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0ZW07XHJcbiAgICBtYXJnaW4tdG9wOiA1ZW1cclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQ6ICNlZTA5MzMgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogI2VlMDkzMztcclxuICAgIGhlaWdodDogNDVweDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmNTEwM2EgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogI2Y1MWM0NCA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNzcG9uc29ycyB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG59XHJcblxyXG4vKiBTcG9uc29yc2hpcCBwYWNrYWdlcyAqL1xyXG5cclxuLmNhcmQtcm93IHtcclxuICBwYWRkaW5nLXRvcDogNWVtO1xyXG59XHJcblxyXG4ucHJpY2VfYm94IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMzVweCAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYyZjY7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC40cztcclxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC40cztcclxufVxyXG4ucHJpY2VfYm94IC5wcmljZV9oaWdobGlnaHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNTAxMzY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5wcmljZV9ib3ggLnByaWNlX2hlYWRlciBoNCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5wcmljZV9mZWF0dXJlcyB7IFxyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICM4MzgzODM7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuLnByaWNlX2JveCAucHJpY2VfaGVhZGVyIGg2IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgY29sb3I6ICM4MzgzODM7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4ucHJpY2VfYm94IC5wcmljZV90YWcge1xyXG4gIHBhZGRpbmc6IDE1cHggMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBjb2xvcjogIzE4MTgxYztcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4ucHJpY2VfYm94IC5wcmljZV90YWcgc3VwIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0b3A6IC0xNXB4O1xyXG4gIGxlZnQ6IC03cHg7XHJcbiAgY29sb3I6ICM4MzgzODM7XHJcbn1cclxuLnByaWNlX2JveCAucHJpY2VfZmVhdHVyZXMgdWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLnByaWNlX2JveCAucHJpY2VfZmVhdHVyZXMgdWwgbGkge1xyXG4gIHBhZGRpbmc6IDdweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDs7XHJcbn1cclxuLnByaWNlX2JveCAucHJpY2VfZm9vdGVyIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG5cclxuLnByaWNlX2JveC5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjRzO1xyXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjRzO1xyXG59XHJcblxyXG4uYmFkZ2UtcHJpY2Uge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uYnJvbnplIHtcclxuICBjb2xvcjogI2NkN2YzMjtcclxufVxyXG5cclxuLmJyb256ZS1iYWMge1xyXG4gIGJhY2tncm91bmQ6ICNjZDdmMzI7XHJcbn1cclxuXHJcbi5zaWx2ZXIge1xyXG4gIGNvbG9yOiAjYTdhNWE1O1xyXG59XHJcblxyXG4uc2lsdmVyLWJhYyB7XHJcbiAgYmFja2dyb3VuZDogI2E3YTVhNTtcclxufVxyXG5cclxuLmdvbGQge1xyXG4gIGNvbG9yOiBcdFx0I0Q0QUYzNztcclxufVxyXG5cclxuLmdvbGQtYmFjIHtcclxuICBiYWNrZ3JvdW5kOiBcdCNENEFGMzc7XHJcbn1cclxuXHJcbi5wbGF0aW51bSB7XHJcbiAgY29sb3I6ICNlZTA5MzM7XHJcbn1cclxuXHJcbi5wbGF0aW51bS1iYWMge1xyXG4gIGJhY2tncm91bmQ6ICNlZTA5MzM7XHJcbn1cclxuXHJcbiNzcG9uc29ycyB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDNzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAzcyBlYXNlLWluLW91dDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/sponsors/sponsors.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/sponsors/sponsors.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"sponsor section-spacing text-center\" id=\"sponsors\" *ngIf=\"!showpackages\">\r\n    <div class=\"container\">\r\n      <header>\r\n        <h2>Sponsors</h2>\r\n        <h3 class=\"section-sub-title\">Meet our wonderful sponsors for this year's event</h3>\r\n      </header>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <figure><img src=\"../../../assets/images/sponsors/sponsor-1.png\"  alt=\"sponsor\"></figure>\r\n          <figure><img src=\"../../../assets/images/sponsors/sponsor-2.png\"  alt=\"sponsor\"></figure>\r\n          <figure><img src=\"../../../assets/images/sponsors/sponsor-3.png\"  alt=\"sponsor\"></figure>\r\n          <figure><img src=\"../../../assets/images/sponsors/sponsor-4.png\"  alt=\"sponsor\"></figure>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <figure><img src=\"../../../assets/images/sponsors/sponsor-5.png\"  alt=\"sponsor\"></figure>\r\n          <figure><img src=\"../../../assets/images/sponsors/sponsor-6.png\"  alt=\"sponsor\"></figure>\r\n          <figure><img src=\"../../../assets/images/sponsors/sponsor-7.png\"  alt=\"sponsor\"></figure>\r\n          <figure><img src=\"../../../assets/images/sponsors/sponsor-8.png\"  alt=\"sponsor\"></figure>\r\n        </div>\r\n      </div>\r\n      <div class=\"row btm-margin\">\r\n        <div class=\"col-sm-12\">\r\n          <button class=\"btn btn-primary\" (click)=\"showPackages()\">Become a sponsor</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section id=\"sponsors\" *ngIf=\"showpackages\">\r\n    <div class=\"container\">\r\n        <header>\r\n          <h2>Sponsorship Packages</h2>\r\n        </header>\r\n    </div>\r\n    <div class=\"container\">\r\n        <div class=\"row card-row justify-content-center\">\r\n          \r\n            <div class=\"col-md-3 col-12\">\r\n                <div class=\"price_box active\">\r\n                   <div class=\"price_header bronze\">\r\n                       <h4>\r\n                          Bronze\r\n                       </h4>\r\n                   </div>\r\n                   <hr>\r\n                    <div class=\"price_features\">\r\n                        <ul>\r\n                            <li>\r\n                                Logo on website\r\n                            </li>\r\n                            <li>\r\n                                Logo on brochures\r\n                            </li>\r\n                            <li>\r\n                                Logo on registration desk\r\n                            </li>\r\n                            <li>\r\n                                Flyer in participants kit\r\n                            </li>\r\n                            <li>\r\n                                Promotion on social media accounts\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"price_footer\">\r\n                        <span class=\"badge badge-primary badge-price bronze-bac\">$ 250</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 col-12\">\r\n                <div class=\"price_box active\">\r\n                   <div class=\"price_header silver\">\r\n                       <h4>\r\n                          Silver\r\n                       </h4>\r\n                   </div>\r\n                   <hr>\r\n                    <div class=\"price_features\">\r\n                        <ul>\r\n                            <li>\r\n                                Logo on website\r\n                            </li>\r\n                            <li>\r\n                                Logo on brochures\r\n                            </li>\r\n                            <li>\r\n                                Logo on registration desk\r\n                            </li>\r\n                            <li>\r\n                                Logo on stage\r\n                            </li>\r\n                            <li>\r\n                                Logo on conference notepad\r\n                            </li>\r\n                            <li>\r\n                                Flyer in participants kit\r\n                            </li>\r\n                            <li>\r\n                                Promotion on social media accounts\r\n                            </li>\r\n                            <li>\r\n                                One post conference email to participants\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"price_footer\">\r\n                        <span class=\"badge badge-primary badge-price silver-bac\">$ 500</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 col-12\">\r\n                <div class=\"price_box active\">\r\n                   <div class=\"price_header gold\">\r\n                       <h4>\r\n                          Gold\r\n                       </h4>\r\n                   </div>\r\n                   <hr>\r\n                    <div class=\"price_features\">\r\n                        <ul>\r\n                            <li>\r\n                                Logo on website\r\n                            </li>\r\n                            <li>\r\n                                Logo on brochures\r\n                            </li>\r\n                            <li>\r\n                                Logo on registration desk\r\n                            </li>\r\n                            <li>\r\n                                Logo on stage\r\n                            </li>\r\n                            <li>\r\n                                Logo on conference notepad\r\n                            </li>\r\n                            <li>\r\n                                Flyer in participants kit\r\n                            </li>\r\n                            <li>\r\n                                Promotion on social media accounts\r\n                            </li>\r\n                            <li>\r\n                                One post conference email to participants\r\n                            </li>\r\n                            <li>\r\n                                Full page in conference brochure\r\n                            </li>\r\n                            <li>\r\n                                One booth without TV\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"price_footer\">\r\n                        <span class=\"badge badge-primary badge-price gold-bac\">$ 750</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-3 col-12\">\r\n                <div class=\"price_box active\">\r\n                   <div class=\"price_header platinum\">\r\n                       <h4>\r\n                          Platinum\r\n                       </h4>\r\n                   </div>\r\n                   <hr>\r\n                    <div class=\"price_features\">\r\n                        <ul>\r\n                            <li>\r\n                                Logo on website\r\n                            </li>\r\n                            <li>\r\n                                Logo on brochures\r\n                            </li>\r\n                            <li>\r\n                                Logo on registration desk and lounge standees\r\n                            </li>\r\n                            <li>\r\n                                Logo on photo booth\r\n                            </li>\r\n                            <li>\r\n                                Logo on stage\r\n                            </li>\r\n                            <li>\r\n                                Full page in conference brochure\r\n                            </li>\r\n                            <li>\r\n                                Logo on conference notepad\r\n                            </li>\r\n                            <li>\r\n                                Two standee with product / company in lounge\r\n                            </li>\r\n                            <li>\r\n                                Two emails to participants\r\n                            </li>\r\n                            <li>\r\n                                One speaking slot\r\n                            </li>\r\n                            <li>\r\n                                One booth without TV\r\n                            </li>\r\n                            <li>\r\n                                Brand logo on lanyard\r\n                            </li>\r\n                            <li>\r\n                                5-10 minute sponsor talk\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"price_footer\">\r\n                        <span class=\"badge badge-primary badge-price platinum-bac\">$ 1000</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n      </div>\r\n  </section>"

/***/ }),

/***/ "./src/app/components/sponsors/sponsors.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/sponsors/sponsors.component.ts ***!
  \***********************************************************/
/*! exports provided: SponsorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorsComponent", function() { return SponsorsComponent; });
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

var SponsorsComponent = /** @class */ (function () {
    function SponsorsComponent() {
        this.showpackages = false;
    }
    SponsorsComponent.prototype.ngOnInit = function () {
    };
    SponsorsComponent.prototype.showPackages = function () {
        this.showpackages = true;
    };
    SponsorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sponsors',
            template: __webpack_require__(/*! ./sponsors.component.html */ "./src/app/components/sponsors/sponsors.component.html"),
            styles: [__webpack_require__(/*! ./sponsors.component.css */ "./src/app/components/sponsors/sponsors.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SponsorsComponent);
    return SponsorsComponent;
}());



/***/ }),

/***/ "./src/app/components/sponsorship-packages/sponsorship-packages.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/sponsorship-packages/sponsorship-packages.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3BvbnNvcnNoaXAtcGFja2FnZXMvc3BvbnNvcnNoaXAtcGFja2FnZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/sponsorship-packages/sponsorship-packages.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/sponsorship-packages/sponsorship-packages.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-component></app-header-component>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/sponsorship-packages/sponsorship-packages.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/sponsorship-packages/sponsorship-packages.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SponsorshipPackagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorshipPackagesComponent", function() { return SponsorshipPackagesComponent; });
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

var SponsorshipPackagesComponent = /** @class */ (function () {
    function SponsorshipPackagesComponent() {
    }
    SponsorshipPackagesComponent.prototype.ngOnInit = function () {
    };
    SponsorshipPackagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sponsorship-packages',
            template: __webpack_require__(/*! ./sponsorship-packages.component.html */ "./src/app/components/sponsorship-packages/sponsorship-packages.component.html"),
            styles: [__webpack_require__(/*! ./sponsorship-packages.component.css */ "./src/app/components/sponsorship-packages/sponsorship-packages.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SponsorshipPackagesComponent);
    return SponsorshipPackagesComponent;
}());



/***/ }),

/***/ "./src/app/components/tickets/tickets.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/tickets/tickets.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  .mb30 {\r\n    margin-bottom: 30px !important;\r\n  }\r\n  .btn-rounded {\r\n    border-radius: 50px;\r\n  }\r\n  .mt30 {\r\n    margin-top: 30px !important;\r\n  }\r\n  section {\r\n      height: 60vh;\r\n  }\r\n  #buy-tickets{\r\n   padding-top: 60px;\r\n}\r\n  .btn-primary {\r\n    background: #ee0933 !important;\r\n    border: #ee0933;\r\n}\r\n  .btn-primary:hover {\r\n    background: #f5103a !important;\r\n    border: #f51c44 ;\r\n    cursor: pointer;\r\n}\r\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\r\n  #tickets{\r\n      margin-top: 4em;\r\n  }\r\n}\r\n  #contact {\r\n  width: 100%;\r\n  height: 70px;\r\n  position: absolute;\r\n  bottom: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aWNrZXRzL3RpY2tldHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRTtJQUNFLCtCQUErQjtHQUNoQztFQUNEO0lBQ0Usb0JBQW9CO0dBQ3JCO0VBQ0Q7SUFDRSw0QkFBNEI7R0FDN0I7RUFFRDtNQUNJLGFBQWE7R0FDaEI7RUFFRDtHQUNDLGtCQUFrQjtDQUNwQjtFQUVEO0lBQ0ksK0JBQStCO0lBQy9CLGdCQUFnQjtDQUNuQjtFQUVEO0lBQ0ksK0JBQStCO0lBQy9CLGlCQUFpQjtJQUNqQixnQkFBZ0I7Q0FDbkI7RUFFRDtFQUNFO01BQ0ksZ0JBQWdCO0dBQ25CO0NBQ0Y7RUFFRDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFVBQVU7Q0FDWCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGlja2V0cy90aWNrZXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC5tYjMwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmJ0bi1yb3VuZGVkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgfVxyXG4gIC5tdDMwIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgc2VjdGlvbiB7XHJcbiAgICAgIGhlaWdodDogNjB2aDtcclxuICB9XHJcblxyXG4gICNidXktdGlja2V0c3tcclxuICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWUwOTMzICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6ICNlZTA5MzM7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjUxMDNhICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6ICNmNTFjNDQgO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDQ4MHB4KSB7XHJcbiAgI3RpY2tldHN7XHJcbiAgICAgIG1hcmdpbi10b3A6IDRlbTtcclxuICB9XHJcbn1cclxuXHJcbiNjb250YWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/tickets/tickets.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/tickets/tickets.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"buy-tickets\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <h2>Get your tickets</h2>\r\n      </div>\r\n    </div>\r\n\r\n      <div class=\"row justify-content-center align-items-center\">\r\n          <div class=\"col-md-9 text-md-left text-center color-light\">\r\n             Get your tickets now\r\n          </div>\r\n          <div class=\"col-md-3 text-md-right text-center\">\r\n              <a href=\"#\" class=\"btn btn-primary btn-rounded mt30\">buy now</a>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div id=\"contact\"></div>\r\n</section>"

/***/ }),

/***/ "./src/app/components/tickets/tickets.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/tickets/tickets.component.ts ***!
  \*********************************************************/
/*! exports provided: TicketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsComponent", function() { return TicketsComponent; });
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

var TicketsComponent = /** @class */ (function () {
    function TicketsComponent() {
    }
    TicketsComponent.prototype.ngOnInit = function () {
    };
    TicketsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tickets',
            template: __webpack_require__(/*! ./tickets.component.html */ "./src/app/components/tickets/tickets.component.html"),
            styles: [__webpack_require__(/*! ./tickets.component.css */ "./src/app/components/tickets/tickets.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TicketsComponent);
    return TicketsComponent;
}());



/***/ }),

/***/ "./src/app/components/venue/venue.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/venue/venue.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".venue {\r\n    background: url('venue-bg.jpg') center center no-repeat fixed;\r\n    background-size: cover;\r\n    position: relative;\r\n    color: #fff;\r\n  }\r\n  \r\n  .venue::before { background: rgba(0, 0, 0, 0.5); }\r\n  \r\n  .venue h2 {\r\n    font-size: 36px;\r\n    font-weight: 700;\r\n    margin-top: 0;\r\n    color: #fff;\r\n  }\r\n  \r\n  .venue address { margin-bottom: 3em; }\r\n  \r\n  .venue address p {\r\n    color: #fff;\r\n    font-size: 18px;\r\n  }\r\n  \r\n  .venue address p:first-child { margin-bottom: 1px; }\r\n  \r\n  .venue address i {\r\n    padding-right: .3em;\r\n    font-size: 1.4em;\r\n  }\r\n  \r\n  .venue address .map-link {\r\n    font-size: 16px;\r\n    text-decoration: underline;\r\n    color: #fff;\r\n  }\r\n  \r\n  .map-link a { color: #fff; }\r\n  \r\n  #map-canvas {\r\n    width: 100%;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    height: 30em;\r\n    border-radius: 4px;\r\n  }\r\n  \r\n  #map-canvas img { max-width: none; }\r\n  \r\n  .venue-sec{\r\n      height: 250px;\r\n      margin-top: 25vh;\r\n  }\r\n  \r\n  #tickets {\r\n    width: 100%;\r\n    height: 70px;\r\n    position: absolute;\r\n    bottom: 0;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92ZW51ZS92ZW51ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOERBQW1GO0lBQ25GLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtHQUNiOztFQUVELGlCQUFpQiwrQkFBK0IsRUFBRTs7RUFFbEQ7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxZQUFZO0dBQ2I7O0VBRUQsaUJBQWlCLG1CQUFtQixFQUFFOztFQUV0QztJQUNFLFlBQVk7SUFDWixnQkFBZ0I7R0FDakI7O0VBRUQsK0JBQStCLG1CQUFtQixFQUFFOztFQUVwRDtJQUNFLG9CQUFvQjtJQUNwQixpQkFBaUI7R0FDbEI7O0VBRUQ7SUFDRSxnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLFlBQVk7R0FDYjs7RUFFRCxjQUFjLFlBQVksRUFBRTs7RUFFNUI7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0dBQ3BCOztFQUVELGtCQUFrQixnQkFBZ0IsRUFBRTs7RUFFcEM7TUFDSSxjQUFjO01BQ2QsaUJBQWlCO0dBQ3BCOztFQUVEO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtHQUNYIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92ZW51ZS92ZW51ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlbnVlIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3ZlbnVlLWJnLmpwZykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQgZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC52ZW51ZTo6YmVmb3JlIHsgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpOyB9XHJcbiAgXHJcbiAgLnZlbnVlIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC52ZW51ZSBhZGRyZXNzIHsgbWFyZ2luLWJvdHRvbTogM2VtOyB9XHJcbiAgXHJcbiAgLnZlbnVlIGFkZHJlc3MgcCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgXHJcbiAgLnZlbnVlIGFkZHJlc3MgcDpmaXJzdC1jaGlsZCB7IG1hcmdpbi1ib3R0b206IDFweDsgfVxyXG4gIFxyXG4gIC52ZW51ZSBhZGRyZXNzIGkge1xyXG4gICAgcGFkZGluZy1yaWdodDogLjNlbTtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgfVxyXG4gIFxyXG4gIC52ZW51ZSBhZGRyZXNzIC5tYXAtbGluayB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAubWFwLWxpbmsgYSB7IGNvbG9yOiAjZmZmOyB9XHJcbiAgIFxyXG4gICNtYXAtY2FudmFzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNtYXAtY2FudmFzIGltZyB7IG1heC13aWR0aDogbm9uZTsgfVxyXG5cclxuICAudmVudWUtc2Vje1xyXG4gICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAyNXZoO1xyXG4gIH1cclxuXHJcbiAgI3RpY2tldHMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/venue/venue.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/venue/venue.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"venue section-spacing\" id=\"venue\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-5 venue-sec\">\r\n          <h2>The Venue</h2>\r\n          <address>\r\n          <p> <i class=\"fa fa-map-marker\"></i> NSBM Green University Town, Pitipana, Homagama</p>\r\n          <p><i class=\"fa fa-mobile\"></i>(+94)77 330 4035</p>\r\n          <p class=\"map-link\"><a target=\"_blank\" href=\"https://www.google.com/maps/place/NSBM+Green+University/@6.8211381,80.0408951,15z/data=!4m5!3m4!1s0x0:0xddb466719c0595db!8m2!3d6.8211381!4d80.0408951\">View on Google Maps</a></p>\r\n          </address>\r\n        </div>\r\n        <div class=\"col-md-7\"> \r\n          <div class=\"map\">\r\n            <div id=\"map-canvas\">\r\n                \r\n            </div>\r\n            \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"tickets\"></div>\r\n  </section>"

/***/ }),

/***/ "./src/app/components/venue/venue.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/venue/venue.component.ts ***!
  \*****************************************************/
/*! exports provided: VenueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenueComponent", function() { return VenueComponent; });
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

var VenueComponent = /** @class */ (function () {
    function VenueComponent() {
    }
    VenueComponent.prototype.ngOnInit = function () {
    };
    VenueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-venue',
            template: __webpack_require__(/*! ./venue.component.html */ "./src/app/components/venue/venue.component.html"),
            styles: [__webpack_require__(/*! ./venue.component.css */ "./src/app/components/venue/venue.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VenueComponent);
    return VenueComponent;
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

module.exports = __webpack_require__(/*! D:\ng-Sri Lanka\ngSriLanka\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map