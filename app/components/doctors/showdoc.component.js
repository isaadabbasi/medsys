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
        this.getAllDoctors();
        // let _self = this;
        //  setInterval(function(){
        //     _self.http.post('/users/mqtt_data', {beat: Math.round(Math.random() * 100) })
        //     .subscribe(res => console.log(res));
        // }, 100);
    };
    ShowDoctorComponent.prototype.deleteDoctor = function (doc_id) {
        var _this = this;
        if (confirm('Are you want to delete the id "' + doc_id + '"? '))
            this.http.delete('delete_doc/' + doc_id)
                .subscribe(function (res) {
                if (res.status == 200)
                    _this.getAllDoctors();
            });
        //  this.mqttData(Math.round(Math.random() * 100));   
    };
    ShowDoctorComponent.prototype.getAllDoctors = function () {
        var _this = this;
        this.http.get('getdocs')
            .map(function (res) { return res.json(); })
            .subscribe(function (res) {
            _this.doctors = res;
        });
    };
    ShowDoctorComponent.prototype.mqttData = function (val) {
        var _self = this;
    };
    ShowDoctorComponent = __decorate([
        core_1.Component({
            template: "\n        <h3 class=\"text-center\"><kbd>Doctor's Data</kbd></h3> <hr>\n        <div >\n            <table class=\"table table-responsive table-hover\">\n                <thead>\n                    <th>Name</th>\n                    <th>Email</th>\n                    <th>Specializations</th>\n                    <th>Delete</th>\n                </thead>\n                <tbody  *ngFor=\"let doctor of doctors\">\n                    <tr>\n                        <td>{{doctor.name}}</td>\n                        <td>{{doctor.email}}</td>\n                        <td>{{doctor?.specialization}}</td>\n                        <td><button (click)=\"deleteDoctor(doctor._id)\" class=\"btn-xs btn-danger\" >Delete</button></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ShowDoctorComponent);
    return ShowDoctorComponent;
}());
exports.ShowDoctorComponent = ShowDoctorComponent;
//# sourceMappingURL=showdoc.component.js.map