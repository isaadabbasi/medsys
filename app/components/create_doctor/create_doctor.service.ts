import {Injectable, Inject} from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
@Injectable()
export class CreateDoctorService {

    constructor(public http: Http){
    }

    addDoctor(creds: {}){
       return this.http.post('/add_doctor', creds)
            .map(res => res.json());
    }
}