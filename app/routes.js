"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./components/home/home.component');
var about_component_1 = require('./components/about/about.component');
var create_doctor_component_1 = require('./components/create_doctor/create_doctor.component');
var login_component_1 = require('./components/login/login.component');
exports.routes = [
    { path: '', component: home_component_1.HomeComponent, terminal: true },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'add_doc', component: create_doctor_component_1.CreateDoctor },
    { path: 'login', component: login_component_1.LoginComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes, { useHash: true });
//# sourceMappingURL=routes.js.map