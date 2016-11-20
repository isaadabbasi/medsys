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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var router_1 = require("@angular/router");
var login_service_1 = require('./login.service');
var LoginComponent = (function () {
    function LoginComponent(_http, router, loginService) {
        this._http = _http;
        this.router = router;
        this.loginService = loginService;
        this.admin = {
            username: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.adminLogin = function () {
        var _this = this;
        if (this.admin.username && this.admin.password)
            this._http.post('/admin_login', this.admin)
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
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: './components/login/login.template.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router, login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map