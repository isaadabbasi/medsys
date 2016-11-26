import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import {Response} from './../models/responses';

@Component({
    moduleId: module.id,
    selector: 'custom-navbar',
    template: `
    <div class="navbar navbar-default navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" [routerLink]="['/home/showdoc']">E-Medic</a>
        </div>
        <center>
            <div class="navbar-collapse collapse" id="navbar-main">
                <!--<ul class="nav navbar-nav" *ngIf="checkAdminAuth()">
                    <li class="active"><a href="#">Link</a>
                    </li>
                    <li><a href="#">Link</a>
                    </li>
                    <li><a href="#">Link</a>
                    </li>
                    <li><a href="#">Link</a>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Action</a>
                            </li>
                            <li><a href="#">Another action</a>
                            </li>
                            <li><a href="#">Something else here</a>
                            </li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a>
                            </li>
                            <li class="divider"></li>
                            <li><a href="#">One more separated link</a>
                            </li>
                        </ul>
                    </li>
                </ul>-->
                <ul class="nav navbar-nav pull-right" *ngIf="checkAdminAuth()">
                    <li>
                        <a class="btn" (click)="logout()">Logout</a>
                    </li>
                </ul>
                <form class="navbar-form navbar-right" role="search" *ngIf="!checkAdminAuth()">
                    <div class="form-group">
                        <input type="text" class="form-control" name="username" [(ngModel)]="admin.username" placeholder="Username">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" name="password" [(ngModel)]="admin.password" placeholder="Password">
                    </div>
                    <button (click)="login()" class="btn btn-default">Sign In</button>
                </form>
            </div>
        </center>
    </div>
</div>
`
})
export class NavbarComponent implements OnInit {
    constructor(private router: Router, public loginService: LoginService) { }

    admin: {username: string, password: string} = {
        username: '',
        password: ''
    }

    response: Response;

    ngOnInit() { 
        console.log()
    }
    checkAdminAuth(){
        return localStorage.getItem('admin_auth');  
    }

    logout(){
        this.loginService.logout();
    }

    login(){
       if(this.admin.username && this.admin.password)
            this.loginService.login(this.admin)
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