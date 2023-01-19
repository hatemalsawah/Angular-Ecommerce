import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators}from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

registerForm:FormGroup = new FormGroup({
  first_name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  last_name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  email: new FormControl(null,[Validators.required,Validators.email]),
  password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
  age: new FormControl(null,[Validators.required,Validators.min(15),Validators.max(30)]),
})


  constructor() { }

  ngOnInit(): void {
  }
  registerUser(form:FormGroup){
    console.log("hiiiiii",form);

    let x =form.get("first_name")?.getError("required");
    console.log(form.get("first-name")?.errors)







  }

}
