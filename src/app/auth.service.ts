import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  islog:boolean=false;
  public content = new Subject<any>();
  // public share = this.content.asObservable();
  constructor(private http: HttpClient) { }
  
  getMsg(){
    return this.content.asObservable();
  }
  setMsg(data:any)
  {
    return this.content.next(data);
  }
  signUp(newUser:any)
  {
    return this.http.post('https://node-angular-server-58.herokuapp.com/signup',newUser);
  }
  logIn(User:any)
  {
    return this.http.post('https://node-angular-server-58.herokuapp.com/login',User);
  }
  getToken(){
    return localStorage.getItem('token');
  }
  isLoggedIn(){ 
    return this.http.get('https://node-angular-server-58.herokuapp.com/isloggedin');
  }
  LoggedIn(authtoken:any){ 
    const headers = new HttpHeaders().set('authtoken', authtoken);
    return this.http.get('https://node-angular-server-58.herokuapp.com/isloggedin', {headers});
  }
}
