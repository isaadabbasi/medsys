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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var about_component_1 = require("./components/about/about.component");
var create_doctor_component_1 = require("./components/create_doctor/create_doctor.component");
var home_component_1 = require("./components/home/home.component");
var login_component_1 = require("./components/login/login.component");
var login_service_1 = require("./components/login/login.service");
var navbar_component_1 = require('./components/navbar/navbar.component');
var showdoc_component_1 = require('./components/doctors/showdoc.component');
var patients_component_1 = require('./components/patients/patients.component');
var routes_1 = require("./routes");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                routes_1.routing,
                forms_1.FormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                about_component_1.AboutComponent,
                create_doctor_component_1.CreateDoctor,
                login_component_1.LoginComponent,
                home_component_1.HomeComponent,
                showdoc_component_1.ShowDoctorComponent,
                navbar_component_1.NavbarComponent,
                patients_component_1.PatientsComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map