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
var create_doctor_service_1 = require('./create_doctor.service');
var CreateDoctor = (function () {
    function CreateDoctor(_createDoctorService) {
        this._createDoctorService = _createDoctorService;
        this.doctor = {};
    }
    CreateDoctor.prototype.addDoctor = function () {
        this._createDoctorService.addDoctor(this.doctor)
            .subscribe(function (res) { return console.log(res); });
    };
    CreateDoctor = __decorate([
        core_1.Component({
            selector: 'create-doctor',
            templateUrl: 'components/create_doctor/create_doctor.template.html',
            providers: [create_doctor_service_1.CreateDoctorService]
        }), 
        __metadata('design:paramtypes', [create_doctor_service_1.CreateDoctorService])
    ], CreateDoctor);
    return CreateDoctor;
}());
exports.CreateDoctor = CreateDoctor;
//# sourceMappingURL=create_doctor.component.js.map