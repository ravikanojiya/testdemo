import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  //get all
  getuser():Promise<any>{
    return this.http.get(`${environment.Base_URL}`).toPromise();
  }
  //get by id api
  getuserbyid(id:number):Promise<any>{
    return this.http.get(`${environment.Base_URL}/${id}`).toPromise();
  }
}
