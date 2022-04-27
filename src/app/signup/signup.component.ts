import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  //@Input('logic') bindvalue = '';
  name:string='';
  email:string='';
  password:string='';


  constructor(private auth: AuthService, private router:Router) { }
  logInForm: boolean = false;
  ngOnInit(): void {
  }
  switch(){
    this.logInForm=!this.logInForm;
  }


  signUp(){
    var newUser:any ={
      name:this.name,
      email:this.email,
      pass:this.password
    }
    this.auth.signUp(newUser).subscribe((res:any)=>{
      if(res.status==1)
      {
        alert("sucessfully registered")
      }
      else
      {
        alert("this email is taken");
      }
    })
  }
  logIn(){
    var User:any={
      email:this.email,
      pass:this.password
    }

    this.auth.logIn(User).subscribe((res:any)=>{
      if(res.token)
      {
        localStorage.setItem('token', res.token);
        
        this.getlogger(res.token).subscribe((res:any)=>{
          this.auth.setMsg(res);

          this.router.navigate(['myfile'],{state:{status:true}});
        })
        //
      }
    })

  }
  getlogger(token:any){
    return this.auth.isLoggedIn();
  }

}
export interface User{
  name:string,
  email:string,
  password:string
}