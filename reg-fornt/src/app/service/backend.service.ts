
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private baseUrl:String="http://localhost:8080"

  constructor(private http:HttpClient) { }
  sendReg(data:any){
   return this.http.post(`${this.baseUrl}/Api/send`,data)
  }
  loginReq(data:any){
    return this.http.post(`${this.baseUrl}/Api/adminlogin`,data)
   }

 getData(data:any){
  return this.http.get(`${this.baseUrl}/Api/get`)
 }

}
