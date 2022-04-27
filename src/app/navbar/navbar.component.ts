import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  islog:boolean=false;
  constructor(private auth : AuthService, private router: Router) {
    this.auth.getMsg().subscribe((res:any)=>{
      this.islog=res.status;
    })
   }
  //islog:boolean=this.auth.islog;
  deleteToken(){
    this.islog=false;
    localStorage.removeItem('token');
    this.router.navigate(['signup']);
  }
  ngOnInit(): void {
    this.auth.isLoggedIn().subscribe((res:any)=>{
      this.islog=res.status;
    })
  }
}
