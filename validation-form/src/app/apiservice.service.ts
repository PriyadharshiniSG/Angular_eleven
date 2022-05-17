import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }
  addData(formobject:any){
    return this.http.post('http://localhost:8000/post/',formobject)
  }
}
