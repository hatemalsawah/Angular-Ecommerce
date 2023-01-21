import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators}from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorFromLogin:string=''
loginForm:FormGroup = new FormGroup({
  email: new FormControl(null,[Validators.required,Validators.email]),
  password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
})
  private _authService: any;
  private _router: any;
  constructor(private_AuthService:AuthService,private_router:Router) { }

  ngOnInit(): void {
  }


  loginUser(form:FormGroup){
    let x =form.get("first_name")?.getError("required");
    if(form.valid){
      this._authService.signUp(form.value).subscribe({
        next:(data:any) => {
          if (data.message =="succes"){
            this._router.navigate(['/'])


          }else{
            this.errorFromLogin=data.message
          }
        }
      })
    }







  }

}
