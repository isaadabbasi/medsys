import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '../models/responses'
@Component({
    template: `
        <h3 class="text-center"><kbd>Doctor's Data</kbd></h3> <hr>
        <div >
            <table class="table table-responsive table-hover">
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Specializations</th>
                    <th>Delete</th>
                </thead>
                <tbody  *ngFor="let doctor of doctors">
                    <tr>
                        <td>{{doctor.name}}</td>
                        <td>{{doctor.email}}</td>
                        <td>{{doctor?.specialization}}</td>
                        <td><button (click)="deleteDoctor(doctor._id)" class="btn-xs btn-danger" >Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})

export class ShowDoctorComponent implements OnInit{
    constructor(public http: Http){}

    doctors;
    ngOnInit(){
         this.getAllDoctors();
        // let _self = this;
        //  setInterval(function(){
        //     _self.http.post('/users/mqtt_data', {beat: Math.round(Math.random() * 100) })
        //     .subscribe(res => console.log(res));
        // }, 100);
    }
    deleteDoctor(doc_id: Number){
        if(confirm('Are you want to delete the id "'+doc_id+'"? '))
        this.http.delete('delete_doc/'+doc_id)
            .subscribe(res => {
                if(res.status == 200)
                    this.getAllDoctors();
        } );
       
    //  this.mqttData(Math.round(Math.random() * 100));   
    }
    getAllDoctors(){
       this.http.get('getdocs')
            .map(res=> res.json())
                .subscribe(res => {
                    this.doctors = res;
                });
    }
    mqttData(val){
         var _self = this;
         
    }
}