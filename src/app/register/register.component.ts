import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators}from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorFromSignUp:string=''
registerForm:FormGroup = new FormGroup({
  first_name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  last_name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  email: new FormControl(null,[Validators.required,Validators.email]),
  password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
  age: new FormControl(null,[Validators.required,Validators.min(15),Validators.max(30)]),
})
  private _authService: any;
  private _router: any;


  constructor(private_AuthService:AuthService,private_router:Router) { }

  ngOnInit(): void {
  }
  registerUser(form:FormGroup){
    let x =form.get("first_name")?.getError("required");
    if(form.valid){
      this._authService.signUp(form.value).subscribe({
        next:(data:any) => {
          if (data.message =="succes"){
            this._router.navigate(['/login'])
          }else{
            this.errorFromSignUp=data.message
          }
        }
      })
    }







  }

}
