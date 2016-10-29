import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import * as io from 'socket.io-client/socket.io';


@Component({
    selector: 'my-about',
    templateUrl: 'components/about/about.component.html',
    styleUrls: ['components/about/about.component.css']
})
export class AboutComponent implements OnInit {
    name: string = "About Us";
    param: string;
    constructor(private params: ActivatedRoute) {
        params.params
            .subscribe((data: { id?: string}) => this.param = data.id);
        let socket = "";
    }

    ngOnInit(){
    }
}