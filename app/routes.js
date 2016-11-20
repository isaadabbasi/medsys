"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./components/home/home.component');
var about_component_1 = require('./components/about/about.component');
var create_doctor_component_1 = require('./components/create_doctor/create_doctor.component');
var login_component_1 = require('./components/login/login.component');
var login_service_1 = require('./components/login/login.service');
var showdoc_component_1 = require('./components/doctors/showdoc.component');
var patients_component_1 = require('./components/patients/patients.component');
var fallback = { path: '**', redirectTo: 'home', pathMatch: 'full' };
exports.routes = [
    { path: '', component: login_component_1.LoginComponent, terminal: true },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'add_doc', component: create_doctor_component_1.CreateDoctor },
    { path: 'home', component: home_component_1.HomeComponent, canActivate: [login_service_1.LoginService], children: [
            { path: 'showdoc', component: showdoc_component_1.ShowDoctorComponent },
            { path: 'adddoc', component: create_doctor_component_1.CreateDoctor },
            { path: 'patients', component: patients_component_1.PatientsComponent },
            fallback
        ],
    },
    fallback
];
exports.routing = router_1.RouterModule.forRoot(exports.routes, { useHash: true });
//# sourceMappingURL=routes.js.map