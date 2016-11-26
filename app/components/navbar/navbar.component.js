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
        this.admin = {
            username: '',
            password: ''
        };
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
    NavbarComponent.prototype.login = function () {
        var _this = this;
        if (this.admin.username && this.admin.password)
            this.loginService.login(this.admin)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                console.log('res: ', res);
                console.log('res.status: ', res.status);
                _this.response = res;
                setTimeout(function () { return _this.response = undefined; }, 2000);
                if (_this.response.status == 200) {
                    _this.loginService.authenticateUser();
                }
            });
    };
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'custom-navbar',
            template: "\n    <div class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-main\">\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" [routerLink]=\"['/home/showdoc']\">E-Medic</a>\n        </div>\n        <center>\n            <div class=\"navbar-collapse collapse\" id=\"navbar-main\">\n                <!--<ul class=\"nav navbar-nav\" *ngIf=\"checkAdminAuth()\">\n                    <li class=\"active\"><a href=\"#\">Link</a>\n                    </li>\n                    <li><a href=\"#\">Link</a>\n                    </li>\n                    <li><a href=\"#\">Link</a>\n                    </li>\n                    <li><a href=\"#\">Link</a>\n                    </li>\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a href=\"#\">Action</a>\n                            </li>\n                            <li><a href=\"#\">Another action</a>\n                            </li>\n                            <li><a href=\"#\">Something else here</a>\n                            </li>\n                            <li class=\"divider\"></li>\n                            <li><a href=\"#\">Separated link</a>\n                            </li>\n                            <li class=\"divider\"></li>\n                            <li><a href=\"#\">One more separated link</a>\n                            </li>\n                        </ul>\n                    </li>\n                </ul>-->\n                <ul class=\"nav navbar-nav pull-right\" *ngIf=\"checkAdminAuth()\">\n                    <li>\n                        <a class=\"btn\" (click)=\"logout()\">Logout</a>\n                    </li>\n                </ul>\n                <form class=\"navbar-form navbar-right\" role=\"search\" *ngIf=\"!checkAdminAuth()\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"admin.username\" placeholder=\"Username\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"admin.password\" placeholder=\"Password\">\n                    </div>\n                    <button (click)=\"login()\" class=\"btn btn-default\">Sign In</button>\n                </form>\n            </div>\n        </center>\n    </div>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [router_1.Router, login_service_1.LoginService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map