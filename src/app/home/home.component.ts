import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  x:any;
  status:any;
  loggeduser:boolean=false;
  isLoggedIn(){
      this.auth.isLoggedIn().subscribe((res:any)=>{
        this.loggeduser=res.status;
      });
  }
  constructor(private router:Router, private auth:AuthService) { 
    this.x=(this.router.getCurrentNavigation()?.extras.state);
    if(this.x)
    {
      this.status=this.x.status;
    }
  }
  
  ngOnInit(): void {
    this.isLoggedIn();
  }
}
