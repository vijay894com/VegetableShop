import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiCallServiceService } from '../core/services/api-call-service.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  constructor(private routerService:ApiCallServiceService){}
  username:string='';
  password:string='';
  showError:boolean=false;
  onSubmit()
  {
    if(this.username=='ab'&&this.password=='ab'){
      this.routerService.routerService('dashboard');
    }
    else{
      this.showError=true;
    }
  }
}
