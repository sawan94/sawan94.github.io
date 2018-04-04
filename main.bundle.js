webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".content-area{\n    min-height: 85vh;\n}\n.sidebar{\n    \n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header\">\n\t<app-header>Loading...</app-header>\n</header>\n<div class=\"component-sidenav\">\n\t<div class=\"content-area main main-raised\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-2 sidebar\">\n\t\t\t\t<app-sidebar></app-sidebar>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-10\">\n\t\t\t\t<router-outlet></router-outlet>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_font_awesome__ = __webpack_require__("./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_authentication_guard_service__ = __webpack_require__("./src/app/services/authentication-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_constants_service__ = __webpack_require__("./src/app/services/constants.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_observable_request_service__ = __webpack_require__("./src/app/services/observable-request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_user_idle_service__ = __webpack_require__("./src/app/services/user-idle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__sidebar_sidebar_component__ = __webpack_require__("./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__tests_tests_module__ = __webpack_require__("./src/app/tests/tests.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__app_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_17__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_18__register_register_component__["a" /* RegisterComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["u" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["w" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["B" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["C" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["D" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["E" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["F" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_16__tests_tests_module__["a" /* TestsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6_ngx_cookie_service__["a" /* CookieService */],
                __WEBPACK_IMPORTED_MODULE_7__services_authentication_guard_service__["a" /* AuthenticationGuardService */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_cookie_service__["a" /* CookieService */],
                __WEBPACK_IMPORTED_MODULE_8__services_constants_service__["a" /* ConstantsService */],
                __WEBPACK_IMPORTED_MODULE_9__services_observable_request_service__["a" /* ObservableRequestService */],
                __WEBPACK_IMPORTED_MODULE_10__services_user_idle_service__["a" /* UserIdleService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_tests_tests_component__ = __webpack_require__("./src/app/tests/tests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_services_authentication_guard_service__ = __webpack_require__("./src/app/services/authentication-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_services_can_deactivate_service__ = __webpack_require__("./src/app/services/can-deactivate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_2__app_dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__app_services_authentication_guard_service__["a" /* AuthenticationGuardService */]],
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_7__app_services_can_deactivate_service__["a" /* CanDeactivateService */]],
    },
    {
        path: 'tests',
        component: __WEBPACK_IMPORTED_MODULE_3__app_tests_tests_component__["a" /* TestsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__app_services_authentication_guard_service__["a" /* AuthenticationGuardService */]],
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_7__app_services_can_deactivate_service__["a" /* CanDeactivateService */]],
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_4__app_login_login_component__["a" /* LoginComponent */],
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_5__app_register_register_component__["a" /* RegisterComponent */],
    },
];
var AppRoutingModule = /** @class */ (function () {
    /**
     * Main Routing module for the application.
     */
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
        /**
         * Main Routing module for the application.
         */
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/common/models/role.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Role; });
var Role = /** @class */ (function () {
    //constructor 
    function Role(name, id) {
        this.name = name;
        this.id = id;
    }
    return Role;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-header>\n        <mat-card-title>Dashboard</mat-card-title>\n        <mat-card-subtitle></mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n        <p>\n            Dashboard Works\n        </p>\n    </mat-card-content>\n\n</mat-card>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"navbar\">\n    <div class=\"navigation-example\">\n        <!--        primary navbar  -->\n        <nav class=\"navbar navbar-inverse navbar-expand-lg \" role=\"navigation-demo\">\n            <div class=\"container\">\n                <!-- Brand and toggle get grouped for better mobile display -->\n                <div>\n                    <a class=\"navbar-brand\" routerLink=\"/dashboard\">\n                        <img width=\"35%\" src=\"assets/img/logo.png\" />\n                    </a>\n                </div>\n                <!-- Collect the nav links, forms, and other content for toggling -->\n                <div class=\"collapse navbar-collapse\">\n                    <ul class=\"navbar-nav ml-auto\">\n                        <li class=\"nav-item\">\n                            <button mat-button class=\"btn btn-primary btn-round\" [matMenuTriggerFor]=\"menu\">\n                                <i class=\"material-icons\">settings</i>\n                                Menu\n                            </button>\n                            <mat-menu #menu=\"matMenu\">\n                                <button mat-menu-item>Settings</button>\n                                <button mat-menu-item>Log Out</button>\n                            </mat-menu>\n                        </li>\n                    </ul>\n                </div>\n                <!-- /.navbar-collapse -->\n            </div>\n            <!-- /.container-->\n        </nav>\n        <!--        end primary navbar -->\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/authentication-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_constants_service__ = __webpack_require__("./src/app/services/constants.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_idle_service__ = __webpack_require__("./src/app/services/user-idle.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { WarmUpService } from 'app/services/warmup/warmup.service';
var AuthenticationGuardService = /** @class */ (function () {
    function AuthenticationGuardService(userIdleService, cookieService, router) {
        this.userIdleService = userIdleService;
        this.cookieService = cookieService;
        this.router = router;
    }
    AuthenticationGuardService.prototype.canActivate = function (route, state) {
        var _this = this;
        console.log("inside auth guard");
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
            if (_this.isLoggedIn) {
                // ALready logged in, don't perform verifySession, only admin check
                return _this.verifyAdmin(observer, state);
            }
            var sessionId = _this.cookieService.get(__WEBPACK_IMPORTED_MODULE_4__services_constants_service__["a" /* ConstantsService */].COOKIE_SESSION_ID);
            if (sessionId === null || sessionId === '') {
                _this.redirectToLogin(observer, "empty sessionId");
            }
            else {
                _this.userIdleService.verifySessionValidity(sessionId).subscribe(function (response) {
                    if (response.flagResult && response.arrResult.status) {
                        _this.isLoggedIn = true;
                        _this.userIdleService.startSessionKeepAliveWatcher();
                        _this.verifyAdmin(observer, state);
                    }
                    else {
                        _this.redirectToLogin(observer, "false flagResult " + response.flagResult + " - status " + response.arrResult.status);
                    }
                }, function (err) {
                    _this.redirectToLogin(observer, "session validity error " + err);
                });
            }
        });
    };
    AuthenticationGuardService.prototype.verifyAdmin = function (observer, state) {
        // Following is relevant only if user is logged in already.
        // If non-Admin user tries to access Admin pages, redirect to Dashboard.
        // if (!this.isAdminUser() && this.adminPageUrls.indexOf(state.url) >= 0) {
        //   this.router.navigate(['/dashboard']);
        //   observer.next(false);
        // } else {
        //   observer.next(true);
        // }
        observer.complete();
    };
    AuthenticationGuardService.prototype.redirectToLogin = function (observer, reason) {
        console.log("not logged in");
        observer.next(false);
        observer.complete();
        window.location.replace(__WEBPACK_IMPORTED_MODULE_4__services_constants_service__["a" /* ConstantsService */].LOGIN_URL);
    };
    AuthenticationGuardService.prototype.isAdminUser = function () {
        var userRole = this.cookieService.get(__WEBPACK_IMPORTED_MODULE_4__services_constants_service__["a" /* ConstantsService */].COOKIE_USER_ROLE);
        return userRole === __WEBPACK_IMPORTED_MODULE_4__services_constants_service__["a" /* ConstantsService */].Admin.id.toString();
    };
    AuthenticationGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_user_idle_service__["a" /* UserIdleService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthenticationGuardService);
    return AuthenticationGuardService;
}());



/***/ }),

/***/ "./src/app/services/can-deactivate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanDeactivateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CanDeactivateService = /** @class */ (function () {
    function CanDeactivateService() {
    }
    CanDeactivateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CanDeactivateService);
    return CanDeactivateService;
}());



/***/ }),

/***/ "./src/app/services/constants.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConstantsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_models_role__ = __webpack_require__("./src/app/common/models/role.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ConstantsService = /** @class */ (function () {
    function ConstantsService() {
    }
    ConstantsService.Admin = new __WEBPACK_IMPORTED_MODULE_1__common_models_role__["a" /* Role */]("admin", 1);
    ConstantsService.TG = new __WEBPACK_IMPORTED_MODULE_1__common_models_role__["a" /* Role */]("TestGenerator", 2);
    ConstantsService.TT = new __WEBPACK_IMPORTED_MODULE_1__common_models_role__["a" /* Role */]("TestTaker", 3);
    ConstantsService.APP_URL = '';
    ConstantsService.TIMEOUT = 500;
    ConstantsService.COOKIE_SESSION_ID = 'sessionId';
    ConstantsService.COOKIE_USER_ROLE = 'userRole';
    ConstantsService.COOKIE_PATH = '/';
    ConstantsService.COOKIE_LOGIN_TOKEN = 'loginToken';
    ConstantsService.COOKIE_ACCESS_TOKEN = 'accessToken';
    ConstantsService.LOGIN_URL = 'http://localhost:4200/login';
    ConstantsService.VERIFY_SESSION = '/users/verifysession/';
    ConstantsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], ConstantsService);
    return ConstantsService;
}());



/***/ }),

/***/ "./src/app/services/observable-request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObservableRequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/timeout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_base64_encoder__ = __webpack_require__("./src/app/shared/base64-encoder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_constants_service__ = __webpack_require__("./src/app/services/constants.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generic service for sending HTTP requests that returns an Observable as response.
 */
var ObservableRequestService = /** @class */ (function () {
    function ObservableRequestService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.applicationURL = '';
        this.applicationURL = __WEBPACK_IMPORTED_MODULE_7__services_constants_service__["a" /* ConstantsService */].APP_URL;
    }
    // This method will be used for all subsequent requests except initial login. The request header
    // created here will contain the access token received on successful login.
    ObservableRequestService.prototype.getRequest = function (requestUrl, params) {
        var url = this.applicationURL + requestUrl;
        var header = this.getJSONContentType();
        return this.http
            .get(url, { headers: this.addCommonHeaders(header), search: params })
            .map(function (response) { return response.json(); })
            .timeout(__WEBPACK_IMPORTED_MODULE_7__services_constants_service__["a" /* ConstantsService */].TIMEOUT);
    };
    ObservableRequestService.prototype.downloadFile = function (requestUrl) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* ResponseContentType */].Blob, headers: this.addCommonHeaders(headers) });
        return this.http.get(this.applicationURL + requestUrl, options)
            .map(function (res) { return res.blob(); }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error); });
        ;
    };
    ObservableRequestService.prototype.getRequestWithMapResponse = function (requestUrl) {
        var url = this.applicationURL + requestUrl;
        var header = this.getJSONContentType();
        return this.http
            .get(url, { headers: this.addCommonHeaders(header) })
            .timeout(__WEBPACK_IMPORTED_MODULE_7__services_constants_service__["a" /* ConstantsService */].TIMEOUT);
    };
    // This method will be used for initial login case only. The request header created here will
    // include auth token.
    ObservableRequestService.prototype.getRequestForLogin = function (requestUrl, username, password) {
        var url = this.applicationURL + requestUrl;
        var header = this.getJSONContentType();
        return this.http
            .get(url, { headers: this.addCommonHeadersForLogin(username, password, header) })
            .map(function (response) { return response.json(); })
            .timeout(__WEBPACK_IMPORTED_MODULE_7__services_constants_service__["a" /* ConstantsService */].TIMEOUT);
    };
    ObservableRequestService.prototype.requestForReset = function (requestUrl, resetKey, password) {
        var url = this.applicationURL + requestUrl;
        var header = this.getJSONContentType();
        return this.http
            .get(url, { headers: this.addCommonHeadersForLogin(resetKey, password, header) })
            .map(function (response) { return response.json(); })
            .timeout(__WEBPACK_IMPORTED_MODULE_7__services_constants_service__["a" /* ConstantsService */].TIMEOUT);
    };
    ObservableRequestService.prototype.postRequest = function (requestUrl, body, header) {
        var url = this.applicationURL + requestUrl;
        header = this.addCommonHeaders(header);
        return this.http
            .post(url, body, { headers: header })
            .map(function (response) { return response.json(); })
            .timeout(__WEBPACK_IMPORTED_MODULE_7__services_constants_service__["a" /* ConstantsService */].TIMEOUT);
    };
    ObservableRequestService.prototype.putRequest = function (requestUrl, body, header) {
        var url = this.applicationURL + requestUrl;
        header = this.addCommonHeaders(header);
        return this.http
            .put(url, body, { headers: header })
            .map(function (response) { return response.json(); })
            .timeout(__WEBPACK_IMPORTED_MODULE_7__services_constants_service__["a" /* ConstantsService */].TIMEOUT);
    };
    ObservableRequestService.prototype.deleteRequest = function (requestUrl, body, header) {
        var url = this.applicationURL + requestUrl;
        header = this.addCommonHeaders(header);
        return this.http
            .delete(url, {
            headers: header,
            body: body,
        })
            .map(function (response) { return response.json(); })
            .timeout(__WEBPACK_IMPORTED_MODULE_7__services_constants_service__["a" /* ConstantsService */].TIMEOUT);
    };
    ObservableRequestService.prototype.getAuthToken = function (username, password) {
        var authToken = this.cookieService.get(__WEBPACK_IMPORTED_MODULE_7__services_constants_service__["a" /* ConstantsService */].COOKIE_LOGIN_TOKEN);
        if (authToken) {
            return authToken;
        }
        return __WEBPACK_IMPORTED_MODULE_6__shared_base64_encoder__["a" /* Base64 */].encodeBase64(username.concat('/', password));
    };
    ObservableRequestService.prototype.getJSONContentType = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    };
    ObservableRequestService.prototype.getFormEncodedContentType = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
    };
    ObservableRequestService.prototype.getFormUrlEncoded = function (toConvert) {
        var formBody = [];
        for (var property in toConvert) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(toConvert[property]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        return formBody.join('&');
    };
    ObservableRequestService.prototype.addCommonHeaders = function (header) {
        header.append('Authorization', 'Bearer ' + this.cookieService.get(__WEBPACK_IMPORTED_MODULE_7__services_constants_service__["a" /* ConstantsService */].COOKIE_ACCESS_TOKEN));
        header = this.addAppType(header);
        return header;
    };
    ObservableRequestService.prototype.addCommonHeadersForLogin = function (username, password, header) {
        header.append('Authorization', 'Token ' + this.getAuthToken(username, password));
        header = this.addAppType(header);
        return header;
    };
    ObservableRequestService.prototype.addAppType = function (header) {
        // TODO (pankaj.khurana): We can remove App-Type header once angular1.x app is decommissioned.
        header.append('app-type', 'MMT');
        return header;
    };
    /**
     * Serializes the form element so it can be passed to the back end through the url.
     * The objects properties are the keys and the objects values are the values.
     * ex: { "a":1, "b":2, "c":3 } would look like ?a=1&b=2&c=3
     */
    ObservableRequestService.prototype.serialize = function (body) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        var _loop_1 = function (key) {
            if (body.hasOwnProperty(key)) {
                var value = body[key];
                if (value instanceof Array) {
                    value.forEach(function (val) { return params.append(key, val); });
                }
                else {
                    params.append(key, value);
                }
            }
        };
        for (var key in body) {
            _loop_1(key);
        }
        return params;
    };
    ObservableRequestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__["a" /* CookieService */]])
    ], ObservableRequestService);
    return ObservableRequestService;
}());



/***/ }),

/***/ "./src/app/services/user-idle.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserIdleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/TimerObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_timeout__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/timeout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_constants_service__ = __webpack_require__("./src/app/services/constants.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_observable_request_service__ = __webpack_require__("./src/app/services/observable-request.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { SessionExpiredComponent } from 'app/shared/components/sessionexpired/session-expired.component';
/**
 * Service to logout the user when the Idle Time expires.
 */
var UserIdleService = /** @class */ (function () {
    function UserIdleService(cookieService, requestService) {
        this.cookieService = cookieService;
        this.requestService = requestService;
    }
    UserIdleService.prototype.verifySessionValidity = function (sessionId) {
        return this.requestService
            .getRequest(__WEBPACK_IMPORTED_MODULE_6__services_constants_service__["a" /* ConstantsService */].VERIFY_SESSION + sessionId);
    };
    UserIdleService.prototype.showSessionExpiredPopup = function () {
        // Stop session verification timer
        this.subscription.unsubscribe();
        alert("Session Expired. Please Login Again.");
    };
    UserIdleService.prototype.startSessionKeepAliveWatcher = function () {
        var _this = this;
        // 15 minutes on prod, 1 minute on dev
        var interval = (1000 * 60 * 5);
        var timer = __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__["a" /* TimerObservable */].create(interval, interval);
        this.subscription = timer.subscribe(function (t) {
            var sessionId = _this.cookieService.get(__WEBPACK_IMPORTED_MODULE_6__services_constants_service__["a" /* ConstantsService */].COOKIE_SESSION_ID);
            _this.verifySessionValidity(sessionId).subscribe(function (data) {
                if (data.flagResult) {
                    return data.flagResult;
                }
                else {
                    _this.showSessionExpiredPopup();
                }
            }, function (error) {
                if (error.status !== 0) {
                    // Could be handy for debugging to determine why sessions timeout, please leave it here
                    console.error(error); // tslint:disable-line
                    // error status 0 means connection timeout
                    _this.showSessionExpiredPopup();
                }
            });
        });
    };
    UserIdleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_7__services_observable_request_service__["a" /* ObservableRequestService */]])
    ], UserIdleService);
    return UserIdleService;
}());



/***/ }),

/***/ "./src/app/shared/base64-encoder.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Base64; });
var Base64 = /** @class */ (function () {
    function Base64() {
    }
    Base64.encodeBase64 = function (data) {
        var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, ac = 0, enc = '';
        var tmp_arr = [];
        if (!data) {
            return data;
        }
        do {
            o1 = data.charCodeAt(i++);
            o2 = data.charCodeAt(i++);
            o3 = data.charCodeAt(i++);
            bits = o1 << 16 | o2 << 8 | o3;
            h1 = bits >> 18 & 0x3f;
            h2 = bits >> 12 & 0x3f;
            h3 = bits >> 6 & 0x3f;
            h4 = bits & 0x3f;
            // use hexets to index into b64, and append result to encoded string
            tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
        } while (i < data.length);
        enc = tmp_arr.join('');
        var r = data.length % 3;
        return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
    };
    return Base64;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar-menu.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarMenu; });
var SidebarMenu = /** @class */ (function () {
    function SidebarMenu(title, icon, route) {
        this.title = title;
        this.icon = icon;
        this.route = route;
    }
    return SidebarMenu;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-6 col-md-12\">\n    <div class=\"row\">\n        <div class=\"col-md-3\">\n            <ul class=\"nav nav-pills nav-pills-icons nav-pills-primary flex-column\">\n                <li *ngFor=\"let menu of menuItems\" class=\"nav-item\">\n                    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"menu.route\">\n                        <i class=\"material-icons\">{{menu.icon}}</i> {{menu.title}}\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_menu_model__ = __webpack_require__("./src/app/sidebar/sidebar-menu.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_guard_service__ = __webpack_require__("./src/app/services/authentication-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(authService) {
        this.authService = authService;
        this.menuItems = [];
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = this.authService.isLoggedIn; // {2}
        if (this.isLoggedIn) {
            this.menuItems.push(new __WEBPACK_IMPORTED_MODULE_1__sidebar_menu_model__["a" /* SidebarMenu */]("Dashboard", "dashboard", "/dashboard"));
            this.menuItems.push(new __WEBPACK_IMPORTED_MODULE_1__sidebar_menu_model__["a" /* SidebarMenu */]("Tests", "list", "/tests"));
            this.menuItems.push(new __WEBPACK_IMPORTED_MODULE_1__sidebar_menu_model__["a" /* SidebarMenu */]("Settings", "settings", "/settings"));
        }
        else {
            this.menuItems.push(new __WEBPACK_IMPORTED_MODULE_1__sidebar_menu_model__["a" /* SidebarMenu */]("Login", "input", "/login"));
            this.menuItems.push(new __WEBPACK_IMPORTED_MODULE_1__sidebar_menu_model__["a" /* SidebarMenu */]("Register", "face", "/register"));
        }
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_authentication_guard_service__["a" /* AuthenticationGuardService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/tests/listtests/listtests.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tests/listtests/listtests.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n\n  <mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\n    </ng-container>\n\n    <!-- Progress Column -->\n    <ng-container matColumnDef=\"progress\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Progress </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.progress}}% </mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </mat-row>\n  </mat-table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/tests/listtests/listtests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListtestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListtestsComponent = /** @class */ (function () {
    function ListtestsComponent() {
    }
    ListtestsComponent.prototype.ngOnInit = function () {
        console.log("sawan");
    };
    ListtestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-listtests',
            template: __webpack_require__("./src/app/tests/listtests/listtests.component.html"),
            styles: [__webpack_require__("./src/app/tests/listtests/listtests.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListtestsComponent);
    return ListtestsComponent;
}());



/***/ }),

/***/ "./src/app/tests/tests.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tests/tests.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n  <mat-tab label=\"List Tests\">\n    <app-listtests>Loading...</app-listtests>\n  </mat-tab>\n  <mat-tab label=\"View Results\">\n    <!--Rules Group Mapping listing will be displayed here.-->\n  </mat-tab>\n  <mat-tab label=\"Schedule A Test\">\n    <!--Rules listing will be displayed here.-->\n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/tests/tests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestsComponent = /** @class */ (function () {
    function TestsComponent() {
    }
    TestsComponent.prototype.ngOnInit = function () {
    };
    TestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tests',
            template: __webpack_require__("./src/app/tests/tests.component.html"),
            styles: [__webpack_require__("./src/app/tests/tests.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestsComponent);
    return TestsComponent;
}());



/***/ }),

/***/ "./src/app/tests/tests.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tests_tests_service__ = __webpack_require__("./src/app/tests/tests.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tests_tests_component__ = __webpack_require__("./src/app/tests/tests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listtests_listtests_component__ = __webpack_require__("./src/app/tests/listtests/listtests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TestsModule = /** @class */ (function () {
    function TestsModule() {
    }
    TestsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__tests_tests_component__["a" /* TestsComponent */], __WEBPACK_IMPORTED_MODULE_4__listtests_listtests_component__["a" /* ListtestsComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["C" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["D" /* MatTabsModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__tests_tests_service__["a" /* TestsService */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__listtests_listtests_component__["a" /* ListtestsComponent */],
            ]
        })
    ], TestsModule);
    return TestsModule;
}());



/***/ }),

/***/ "./src/app/tests/tests.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestsService = /** @class */ (function () {
    function TestsService() {
    }
    TestsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TestsService);
    return TestsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map