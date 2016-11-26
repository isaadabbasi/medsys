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
var io = require('socket.io-client');
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.name = "Angular 2 on Express";
        this.message = null;
        this.socket = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket = io('http://localhost:3000');
        this.socket.on('message', function (msg) {
            _this.message = msg;
            console.log('RCV : ', msg);
        });
    };
    AppComponent.prototype.getUsers = function (message) {
        this.socket.emit('message', message);
    };
    AppComponent = __decorate([
        core_1.Component({
            directives: [router_1.ROUTER_DIRECTIVES],
            selector: 'my-app',
            styles: ["h1 {\n\tcolor: white;\n\tbackground: darkgray;\n\tpadding: 20px;\n}\n"],
            template: "\n        <custom-navbar ></custom-navbar>\n\n        <router-outlet></router-outlet>\n    "
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map