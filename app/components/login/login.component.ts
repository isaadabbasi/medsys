import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from "@angular/router";
import {Response} from './../models/responses';
import { Admin } from './../models/roles';
import { LoginService } from './login.service';
@Component({
    selector: 'login',
    templateUrl: './components/login/login.template.html',
    styles:[`
        .doc_wall{
            background-color: rgba(224, 224, 224, 0.78);
            background-image: url(./images/doc_wall.jpg);
            background-repeat: no-repeat;
            background-size: cover;
            height: 780px;
            margin-top: 50px;
        }
    `]
})
export class LoginComponent implements OnInit {
    admin: Admin = {
        username: '',
        password: ''
    };
    response: Response;

    constructor(private _http: Http, private router: Router, public loginService: LoginService) {}

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
                        if(this.response.status == 200){
                            this.loginService.authenticateUser();
                        }
                    });
         }
}