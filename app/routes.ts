import { Routes, RouterModule, Route, CanActivate } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CreateDoctor } from './components/create_doctor/create_doctor.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './components/login/login.service';
import { ShowDoctorComponent } from './components/doctors/showdoc.component';
import { PatientsComponent } from './components/patients/patients.component';
const fallback: Route = {path:'**', redirectTo:'home', pathMatch:'full'}
export const routes: Routes = [
    { path: '', component: LoginComponent, terminal: true },
    { path: 'about', component: AboutComponent },
    { path: 'add_doc', component: CreateDoctor },
    { path: 'home', component: HomeComponent, canActivate: [ LoginService ],children: [
        {path: 'showdoc', component: ShowDoctorComponent },
        {path: 'adddoc', component: CreateDoctor},
        {path: 'patients', component: PatientsComponent},
        fallback
    ],
    },
    fallback
    
    
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
