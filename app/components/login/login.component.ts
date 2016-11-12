import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from "@angular/router";
import {LoginResponse} from './../models/responses';
import { Admin } from './../models/roles'
@Component({
    selector: 'login',
    templateUrl: './components/login/login.template.html'
})
export class LoginComponent implements OnInit {
    admin: Admin = {
    username: '',
    password: ''
    };
    response: LoginResponse ;

    constructor(private _http: Http, private router: Router) {}

    ngOnInit() { }

    adminLogin(){
        if(this.admin.username && this.admin.password)
            this._http.post('/admin_login', this.admin)
                .map(res => res.json())
                    .subscribe(res => {
                        console.log('res: ', res);
                        console.log('res.status: ', res.status);
                        this.response = res;
                        setTimeout(() => this.response = undefined, 2000);
                        if(this.response.status == 200)
                            localStorage.setItem('admin_auth', 'blah');
                            this.router.navigate(['/'])
                    });
         }
}