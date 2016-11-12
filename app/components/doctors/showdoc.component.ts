import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
    template: `
        <h3 class="text-center"><kbd>Doctor's Data</kbd></h3> <hr>
        <table class="table table-responsive table-hover">
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Join Date</th>
                <th>Delete</th>
            </thead>
            <tbody>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tbody>
        </table>
    `
})

export class ShowDoctorComponent implements OnInit{
    constructor(public http: Http){}

    ngOnInit(){
        this.http.get('getdocs')
            .map(res=> res.json())
                .subscribe(res => console.log(res));
    }
}