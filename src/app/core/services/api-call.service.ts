import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private httpClient:HttpClient) { }
  postApiCall(apiUrl:string)
  {
   return this.httpClient.get(apiUrl);
  }
}
