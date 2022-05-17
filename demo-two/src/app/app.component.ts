import { Component } from '@angular/core';
import { CargoApiClientService } from './cargo-api-client.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'demo-two';
  constructor(private cargosvc: CargoApiClientService){}
  cargodocuments: Array<any> = [];
  onLoad() {
    const self = this;
    this.cargosvc.getCargoAlldocs().subscribe(
      function(response) {
        console.log(response.json());
        self.cargodocuments = response.json().rows;
      }
    );
  }
}
