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
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
var HomeComponent = (function () {
    function HomeComponent(_http) {
        var _this = this;
        this._http = _http;
        this.name = "Home page";
        _http.get("/users")
            .map(function (data) { return data.json(); })
            .subscribe(function (data) { return _this.users = data; });
    }
    HomeComponent.prototype.sendPostRequest = function () {
        this._http.post('/adddoctor', { email: 'itsssaad', password: 123 })
            .map(function (data) { return data.json(); })
            .subscribe(function (data) { return console.log(data); });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-home',
            templateUrl: 'components/home/home.component.html',
            styleUrls: ['components/home/home.component.css']
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map