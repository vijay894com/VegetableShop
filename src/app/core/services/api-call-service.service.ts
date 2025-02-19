import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiCallServiceService {

  constructor(private router:Router) { }

  routerService(page:string)
  {
    this.router.navigateByUrl(page);
  }
}
