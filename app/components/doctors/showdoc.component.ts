import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
    template: `
        <h3 class="text-center"><kbd>Doctor's Data</kbd></h3> <hr>
        <table class="table table-responsive table-hover">
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Specializations</th>
                <th>Delete</th>
            </thead>
            <tbody *ngFor="let doctor of doctors">
                <td>{{doctor.name}}</td>
                <td>{{doctor.email}}</td>
                <td>{{doctor?.specialization}}</td>
                <td><button class="btn-xs btn-danger" >Delete</button></td>
            </tbody>
        </table>
    `
})

export class ShowDoctorComponent implements OnInit{
    constructor(public http: Http){}

    doctors: Object;
    ngOnInit(){
        this.http.get('getdocs')
            .map(res=> res.json())
                .subscribe(res => {
                    this.doctors = res;
                });
    }
}