import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class LoginService {
    isAuthenticated : boolean = localStorage.getItem('admin_auth');
    constructor(public router:Router) { 
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