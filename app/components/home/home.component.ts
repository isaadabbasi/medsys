import { Component } from '@angular/core';
import { Http } from "@angular/http";
import { CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
    selector: 'my-home',
    templateUrl: 'components/home/home.component.html',
    styleUrls: ['components/home/home.component.css']
})
export class HomeComponent implements CanActivate {
    name: string = "Home page";
    users: {};

    constructor(private _http: Http) {
        _http.get("/users")
            .map(data => data.json())
            .subscribe((data) => this.users = data);
    }

    sendPostRequest(){
        this._http.post('/adddoctor', {email: 'itsssaad', password: 123})
            .map(data => data.json())
                .subscribe(data => console.log(data));
    }
    canActivate(router:ActivatedRouteSnapshot, state: RouterStateSnapshot){
        console.log('home activatedd')
        if(!localStorage.getItem('login_auth'))
            return false
        return true;    
    }
}