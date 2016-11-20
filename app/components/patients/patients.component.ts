import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
@Component({
    template: `
        <h3 class="text-center"><kbd>Patients Record</kbd></h3><hr/>
        <table class="table table-responsive table-stripes">
            <thead>
                <th>NAME</th>
                <th>DISEASE</th>
                <th>ADMIT</th>
                <th>ADMIT DATE</th>
                <th>CONDITION</th>
                <th>DISCHARGE DATE</th>
                <th>DELETE</th>
            </thead><br/>
            <tbody *ngFor="let patient of patients">
                <tr [class]="patient.discharge_date ? 'bg-danger': ''">
                    <td>{{ patient.name }}</td> 
                    <td>{{ patient.disease | lowercase }}</td>
                    <td> {{ patient.admit ? 'yes' : 'no' | lowercase}} </td>
                    <td> {{ patient.admit_date | date }} </td>
                    <td > {{ patient.condition | lowercase }} </td>
                    <td>{{  patient.discharge && patient.discharge_date | date }}</td>
                    <td><button class="btn-xs btn-danger" (click)="deletePatient(patient._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    `
})
export class PatientsComponent implements OnInit {
    constructor(public router: Router, public http: Http) { }
    patients = null;
    ngOnInit() { 
       this.getAllPatients();
    }

    deletePatient(id: number){
        if(confirm("Are you sure you want to delete this patient?"))
        this.http.delete('delpatient/'+id)
            .subscribe(res => {if(res.status == 200) this.getAllPatients()});
    }

    getAllPatients(){
         this.http.get('get_patients')
            .map(res => res.json())
                .subscribe(res => {
                    if(res.status == 200){
                        this.patients = res.patients;
                        console.log(this.patients)
                    }});
    }
}