import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'custom-navbar',
    template: `<nav id="navbar" class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>\
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        </button>
            <a class="navbar-brand" [routerLink]="['/']">Q E C</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li class="active"><a [routerLink]="['/']">Home <span class="sr-only">(current)</span></a></li>
                <li><a [routerLink]="['/login']" >Login</a></li>
                <li><a [routerLink]="['/dashboard']" >Dashboard</a></li>
            </ul>

            <ul class="nav navbar-nav navbar-right pull-right">
                <li data-toggle="modal" data-target="#myModal"><a href="#">Login</a></li>
            </ul>

            <form class="navbar-form navbar-right" role="search">
                <div class="form-group">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search">
                        <div class="input-group-addon">
                            <span class="glyphicon gyphicon-email"></span>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    </div>
</nav>`
})
export class NavbarComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}