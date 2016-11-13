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
var router_1 = require('@angular/router');
require('rxjs/add/operator/map');
var CreateDoctor = (function () {
    function CreateDoctor(http, router) {
        this.http = http;
        this.router = router;
        this.doctorFormModel = {
            name: '',
            email: '',
            password: '',
            specialization: ''
        };
    }
    CreateDoctor.prototype.addDoctor = function () {
        var _this = this;
        this.http.post('add_doctor', this.doctorFormModel)
            .subscribe(function (res) {
            if (res.status == 200)
                _this.router.navigate(['home', 'showdoc']);
            else
                _this.response = res;
        });
    };
    CreateDoctor = __decorate([
        core_1.Component({
            selector: 'create-doctor',
            templateUrl: 'components/create_doctor/create_doctor.template.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], CreateDoctor);
    return CreateDoctor;
}());
exports.CreateDoctor = CreateDoctor;
//# sourceMappingURL=create_doctor.component.js.map