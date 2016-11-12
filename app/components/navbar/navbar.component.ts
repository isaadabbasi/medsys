import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'custom-navbar',
    template: `<nav id="navbar" class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        </button>
            <a class="navbar-brand">Q E C</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li class="active"><a [routerLink]="['/']" *ngIf="checkAdminAuth()">Home <span class="sr-only">(current)</span></a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right pull-right">
                <li data-toggle="modal" data-target="#myModal">
                    <a *ngIf="checkAdminAuth()" (click)="logout()">Logout</a>
                    <a *ngIf="!checkAdminAuth()" [routerLink]="['/']">Login</a>
                </li>
            </ul>
        </div>
    </div>
</nav>`
})
export class NavbarComponent implements OnInit {
    constructor(private router: Router) { }


    ngOnInit() { 
        console.log()
    }
    checkAdminAuth(){
        return localStorage.getItem('admin_auth');  
    }

    logout(){
        localStorage.removeItem('admin_auth');
        this.router.navigate(['/'])
    }
    
}