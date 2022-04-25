import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { FirstService } from './first.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, AfterContentChecked, AfterViewChecked, AfterContentInit, AfterViewInit{
  // title = 'angular_project';
  // value ="I am a value";
  constructor(private service: FirstService) { }

  ngOnInit(): void {


  }
  
  // reslt:any;
  // changevalue(){
  //   this.reslt=!this.reslt;
  // }
  ngAfterContentChecked(): void {

      //console.log("app");
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
