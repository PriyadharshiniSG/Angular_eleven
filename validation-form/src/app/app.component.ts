import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , NgForm, Validators } from '@angular/forms';
import { ApiserviceService } from './apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  value:boolean = true;
  object:any = [];
  signup!:FormGroup;
  show:boolean=false;
  formbuilder: any;
  // formGroup!: FormGroup;
  // empRecord: any = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: '',
  //   mobile: '',
  // };
  constructor(private fb: FormBuilder, private api:ApiserviceService) {
  // this.formGroup = this.fb.group({
  //   firstName: [this.empRecord.firstName],
  //   lastName: [this.empRecord.lastName],
  //   email: [this.empRecord.email],
  //   password: [this.empRecord.password],
  //   mobile: [this.empRecord.mobile],
  // });
}


ngOnInit(): void {
 
    this.signup = this.formbuilder.group(
      {
        'username':['',Validators.required],
        'first_name':['',Validators.required],
        'last_name':['',Validators.required],
        'mobileNumber':['',Validators.required],
        'email':['',Validators.required],
        'password':['',Validators.required],
        'confirm_password':['',Validators.required],
        'file':['',Validators.required],
      }
    )
  }
}

// addData (formvalue:NgForm) {
//   this.api.add(formvalue).subscribe(data =>{
//     console.log(data);
//   })
// }





