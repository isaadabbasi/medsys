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
const core_1 = require('@angular/core');
const router_1 = require('@angular/router');
let AppComponent = class AppComponent {
    constructor() {
        this.name = "Angular 2 on Express";
    }
};
AppComponent = __decorate([
    core_1.Component({
        directives: [router_1.ROUTER_DIRECTIVES],
        selector: 'my-app',
        styles: [`h1 {
	color: white;
	background: darkgray;
	padding: 20px;
}
`],
        template: `
<h1>My First {{name}} app</h1>
<router-outlet></router-outlet>

<a [routerLink]="['/']">Home</a> | <a [routerLink]="['/about/', { id: 2 }]">About</a>`,
    }), 
    __metadata('design:paramtypes', [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map