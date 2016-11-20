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
var http_1 = require('@angular/http');
var PatientsComponent = (function () {
    function PatientsComponent(router, http) {
        this.router = router;
        this.http = http;
        this.patients = null;
    }
    PatientsComponent.prototype.ngOnInit = function () {
        this.getAllPatients();
    };
    PatientsComponent.prototype.deletePatient = function (id) {
        var _this = this;
        if (confirm("Are you sure you want to delete this patient?"))
            this.http.delete('delpatient/' + id)
                .subscribe(function (res) { if (res.status == 200)
                _this.getAllPatients(); });
    };
    PatientsComponent.prototype.getAllPatients = function () {
        var _this = this;
        this.http.get('get_patients')
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            if (res.status == 200) {
                _this.patients = res.patients;
                console.log(_this.patients);
            }
        });
    };
    PatientsComponent = __decorate([
        core_1.Component({
            template: "\n        <h3 class=\"text-center\"><kbd>Patients Record</kbd></h3><hr/>\n        <table class=\"table table-responsive table-stripes\">\n            <thead>\n                <th>NAME</th>\n                <th>DISEASE</th>\n                <th>ADMIT</th>\n                <th>ADMIT DATE</th>\n                <th>CONDITION</th>\n                <th>DISCHARGE DATE</th>\n                <th>DELETE</th>\n            </thead><br/>\n            <tbody *ngFor=\"let patient of patients\">\n                <tr [class]=\"patient.discharge_date ? 'bg-danger': ''\">\n                    <td>{{ patient.name }}</td> \n                    <td>{{ patient.disease | lowercase }}</td>\n                    <td> {{ patient.admit ? 'yes' : 'no' | lowercase}} </td>\n                    <td> {{ patient.admit_date | date }} </td>\n                    <td > {{ patient.condition | lowercase }} </td>\n                    <td>{{  patient.discharge && patient.discharge_date | date }}</td>\n                    <td><button class=\"btn-xs btn-danger\" (click)=\"deletePatient(patient._id)\">Delete</button></td>\n                </tr>\n            </tbody>\n        </table>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], PatientsComponent);
    return PatientsComponent;
}());
exports.PatientsComponent = PatientsComponent;
//# sourceMappingURL=patients.component.js.map