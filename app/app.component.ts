import { Component, OnInit } from '@angular/core';
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
        <custom-navbar ></custom-navbar>

        <router-outlet></router-outlet>
    ` 
})
export class AppComponent implements OnInit{
    name: string = "Angular 2 on Express";
    message: string = null;
    socket = null;
    constructor(public http: Http) {
    }

    ngOnInit(){
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
