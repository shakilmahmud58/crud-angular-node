import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, AfterContentChecked, AfterViewChecked, AfterContentInit, AfterViewInit{

  token:any;
  setToken(){
    this.token=localStorage.getItem('token');
  }


  constructor(private auth: AuthService, private router: Router) { }
  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.setToken();
      
  }
  ngAfterContentInit(): void {
    //console.log('called app1');
  }
  ngAfterViewInit(): void {
    // run whwn a component view is first load,after content init
    //console.log('called app');
  }
  ngAfterViewChecked(): void {
   //ok console.log("app");
  }
}
