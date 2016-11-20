"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var login_service_1 = require('../login/login.service');
var NavbarComponent = (function () {
    function NavbarComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        console.log();
    };
    NavbarComponent.prototype.checkAdminAuth = function () {
        return localStorage.getItem('admin_auth');
    };
    NavbarComponent.prototype.logout = function () {
        this.loginService.logout();
    };
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'custom-navbar',
            template: "<nav id=\"navbar\" class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        </button>\n            <a class=\"navbar-brand\">Q E C</a>\n        </div>\n\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"active\"><a [routerLink]=\"['/home/showdoc']\" *ngIf=\"checkAdminAuth()\">Home</a></li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right pull-right\">\n                <li data-toggle=\"modal\" data-target=\"#myModal\">\n                    <a *ngIf=\"checkAdminAuth()\" style=\"cursor: pointer\" (click)=\"logout()\">Logout</a>\n                    <a *ngIf=\"!checkAdminAuth()\" style=\"cursor: pointer\" [routerLink]=\"['/']\">Login</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>"
        }), 
        __metadata('design:paramtypes', [router_1.Router, login_service_1.LoginService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map