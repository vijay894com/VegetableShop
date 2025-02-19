import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiCallService } from '../../core/services/api-call.service';
import { RoutingServiceService } from '../../core/services/routing-service.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private apiService:ApiCallService,private routerService:RoutingServiceService){
  }
 signUpForm!: FormGroup;
 password!: string;
 phone!:string;
 apiUrl=`https://console.firebase.google.com/project/smartc-d386f/database/smartc-d386f-default-rtdb/data/~2F`;
 onSubmit(signUpForm:NgForm)
 {
console.log('I have logged in');
this.routerService.routeToPage('dashboard')

  // this.apiService.postApiCall()
 }
}
