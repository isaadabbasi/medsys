import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'login',
    templateUrl: './components/login/login.template.html'

})
export class LoginComponent implements OnInit {
    admin: Object = {
    username: '',
    password: ''
    };
    response: Object;

    constructor(private _http: Http) {

     }

    ngOnInit() { }

    adminLogin(){
        if(this.admin.username && this.admin.password)
            this._http.post('/admin_login', this.admin)
                .map(res => res.json())
                    .subscribe(res => {
                        console.log('res: ', res);
                        console.log('res.status: ', res.status);
                        this.response = res;
                        (function(){this.response = undefined;},2000);
                    });
    }
}