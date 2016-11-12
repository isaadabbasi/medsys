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
var ShowDoctorComponent = (function () {
    function ShowDoctorComponent(http) {
        this.http = http;
    }
    ShowDoctorComponent.prototype.ngOnInit = function () {
        this.http.get('getdocs')
            .map(function (res) { return res.json(); })
            .subscribe(function (res) { return console.log(res); });
    };
    ShowDoctorComponent = __decorate([
        core_1.Component({
            template: "\n        <h3 class=\"text-center\"><kbd>Doctor's Data</kbd></h3> <hr>\n        <table class=\"table table-responsive table-hover\">\n            <thead>\n                <th>Name</th>\n                <th>Email</th>\n                <th>Join Date</th>\n                <th>Delete</th>\n            </thead>\n            <tbody>\n                <td></td>\n                <td></td>\n                <td></td>\n                <td></td>\n            </tbody>\n        </table>\n    "
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ShowDoctorComponent);
    return ShowDoctorComponent;
}());
exports.ShowDoctorComponent = ShowDoctorComponent;
//# sourceMappingURL=showdoc.component.js.map