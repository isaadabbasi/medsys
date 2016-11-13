import { Component } from '@angular/core';
import { DoctorFormModel } from '../models/roles';
import {Http} from '@angular/http';
import { Router } from '@angular/router';
import { Response } from '../models/responses';
import 'rxjs/add/operator/map';

@Component({
    selector: 'create-doctor',
    templateUrl: 'components/create_doctor/create_doctor.template.html'
    })
export class CreateDoctor {

    response;
    doctorFormModel:DoctorFormModel = {
        name: '',
        email:'',
        password:'',
        specialization:''
    };
    constructor(public http: Http, public router: Router) {}

    addDoctor(){
        this.http.post('add_doctor', this.doctorFormModel)
            .subscribe( res => { 
                if(res.status == 200)
                    this.router.navigate(['home','showdoc'])
                else 
                    this.response = res;
            });
    }
}