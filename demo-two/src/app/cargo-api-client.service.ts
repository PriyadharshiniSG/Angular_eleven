import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
// Http and Headers are decregated and we use '@angular/common'
@Injectable({
  providedIn: 'root'
})
export class CargoApiClientService {
  cargourl = "http://localhost:8000/cargo/view1/cargo_all_docs";
  constructor(private http: Http) {
       }
  getCargoAlldocs() {
    //
  const headers = new Headers();
  headers.append('Accept', 'application/json');
  return this.http.get(this.cargourl,{headers: headers});
  }
}

