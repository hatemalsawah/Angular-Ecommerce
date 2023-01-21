import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpClient: any;

  constructor(private_httpClient:HttpClient) { }


  signUp(data:User):Observable<any>{
    return this.httpClient.post('https://route-egypt-api.herokuapp.com/signup',data)
  }
  signIn(data:User):Observable<any>{
    return this.httpClient.post('https://route-egypt-api.herokuapp.com/signin',data)
  }
}
