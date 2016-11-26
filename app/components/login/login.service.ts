import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Injectable()
export class LoginService {
    isAuthenticated : boolean = localStorage.getItem('admin_auth');
    constructor(public router:Router, private http: Http) { 
    }

    checkIsAuthenticated():boolean{
        return this.isAuthenticated;
    }

    canActivate(){
        let isAuthenticated = false
        if(this.checkIsAuthenticated())
            isAuthenticated = true;
        
        if(!this.checkIsAuthenticated())
            this.router.navigate(['']);
        
        return isAuthenticated;
    }

    login(credentails: {username: string, password: string}){
        return this.http.post('admin_login', credentails);

    }

    logout(){
        this.isAuthenticated = false;
        localStorage.removeItem('admin_auth');
        this.router.navigate(['']);
    }
    authenticateUser(){
        this.isAuthenticated = true;
        localStorage.setItem('admin_auth', 'blah');
        this.router.navigate(['home', 'showdoc'])
    }
}