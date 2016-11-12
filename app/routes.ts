import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CreateDoctor } from './components/create_doctor/create_doctor.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: '', component: LoginComponent, terminal: true },
    { path: 'about', component: AboutComponent },
    { path: 'add_doc', component: CreateDoctor },
    { path: 'home', component: HomeComponent, children:[{
        path: 'add', component: CreateDoctor
    }] }
    
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
