"use strict";
const router_1 = require('@angular/router');
const home_component_1 = require('./components/home/home.component');
const about_component_1 = require('./components/about/about.component');
exports.routes = [
    { path: '', component: home_component_1.HomeComponent, terminal: true },
    { path: 'about', component: about_component_1.AboutComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes, { useHash: true });
//# sourceMappingURL=routes.js.map