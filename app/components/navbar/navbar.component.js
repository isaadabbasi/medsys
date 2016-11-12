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
var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'custom-navbar',
            template: "<nav id=\"navbar\" class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        </button>\n            <a class=\"navbar-brand\" [routerLink]=\"['/']\">Q E C</a>\n        </div>\n\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"active\"><a [routerLink]=\"['/']\">Home <span class=\"sr-only\">(current)</span></a></li>\n                <li><a [routerLink]=\"['/login']\" >Login</a></li>\n                <li><a [routerLink]=\"['/dashboard']\" >Dashboard</a></li>\n            </ul>\n\n            <ul class=\"nav navbar-nav navbar-right pull-right\">\n                <li data-toggle=\"modal\" data-target=\"#myModal\"><a href=\"#\">Login</a></li>\n            </ul>\n\n            <form class=\"navbar-form navbar-right\" role=\"search\">\n                <div class=\"form-group\">\n                    <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                        <div class=\"input-group-addon\">\n                            <span class=\"glyphicon gyphicon-email\"></span>\n                        </div>\n                    </div>\n                </div>\n            </form>\n\n        </div>\n    </div>\n</nav>"
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map