import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customerModel: any;

  constructor() { console.log("customer form loaded")  }

  ngOnInit(): void {
    this.customerModel = {
      firstName: 'Alan',
      lastName: 'Walker',
      email: 'alan.walker@yahoo.com'
    }
  }
  saveCustomer(customerFormGroup: any) {
    if(customerFormGroup.valid) {
      console.log(customerFormGroup.value);
    }
  }
}
