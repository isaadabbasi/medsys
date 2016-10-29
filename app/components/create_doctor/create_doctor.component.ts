import { Component } from '@angular/core';
import { CreateDoctorService } from './create_doctor.service';

@Component({
    selector: 'create-doctor',
    templateUrl: 'components/create_doctor/create_doctor.template.html', 
    providers: [CreateDoctorService]
})
export class CreateDoctor {
    doctor: Object = {};

    constructor(private _createDoctorService: CreateDoctorService) {}

    addDoctor(){
        this._createDoctorService.addDoctor(this.doctor)
            .subscribe(res => console.log(res));
    }
}