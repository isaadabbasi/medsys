import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule }  from '@angular/forms';


import { AppComponent }  from './app.component';
import { AboutComponent } from "./components/about/about.component";
import { CreateDoctor } from "./components/create_doctor/create_doctor.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { NavbarComponent } from './components/navbar/navbar.component'
import { routing } from "./routes";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        routing,
        FormsModule
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        CreateDoctor,
        LoginComponent,
        HomeComponent,  
        NavbarComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
