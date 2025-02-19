import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingServiceService {

  constructor(private router:Router,private activatedRate:ActivatedRoute) { }
  routeToPage(page:string)
  {
    debugger
    console.log('activated route:',this.activatedRate.snapshot);
    this.router.navigateByUrl(page);
  }
}
