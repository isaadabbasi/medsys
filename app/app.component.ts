import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import * as io from 'socket.io-client';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
    directives: [ROUTER_DIRECTIVES],
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
{{message}} <br>  
<a [routerLink]="['/']">Home</a> | <a [routerLink]="['/about/', { id: 2 }]">About</a> | &nbsp; <input #f type="text" > <button class="btn btn-primary" (click)="getUsers(f.value)">Message</button>` ,
})
export class AppComponent {
    name: string = "Angular 2 on Express";
    message: string = null;
    socket = null;
    constructor(private _http: Http) {
        this.socket = io('http://localhost:3000');
        
        this.socket.on('message', msg => {
            this.message = msg;
            console.log('RCV : ', msg)
        });
    }
    getUsers(message){
        this.socket.emit('message', message);    
    }
}
