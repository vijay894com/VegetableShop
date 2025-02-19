import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login/login.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'dashboard',component:DashboardComponent}
];
