import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.sass']
})
export class FirstComponent implements OnInit, AfterContentChecked, AfterViewChecked, AfterContentInit, AfterViewInit{

  constructor(private service: FirstService, private auth:AuthService) { }
  data:any;
  name:string = '';
  roll :number = 0;
  home:string='';
  result:any;
  ngOnInit(): void {
    this.service.getdata().subscribe(res=>{
      this.data=res;
    });
    this.isLoggedIn();
  }
  ngAfterContentChecked(): void {
    //console.log('called first');
  }
  ngAfterViewChecked(): void {
    // ok console.log('called first');
  }
  ngAfterViewInit(): void {
    //console.log("first");
  }
  ngAfterContentInit(): void {
   //console.log('called first');
  }
  loggedUser:boolean=false;
  isLoggedIn(){
      this.auth.isLoggedIn().subscribe((res:any)=>{
        this.loggedUser=res.status;
      });
  }
  addStudent(){
    if(this.name=='' || this.roll==0 || this.home=='')
        alert("please insert write values");
    else
        {
          var data:any = {
            name: this.name,
            roll:this.roll,
            home:this.home
          }
          this.service.addUser(data).subscribe((res:any)=>{
            // this.result=res;
            // console.log(res);
            // this.data.push(data);
            this.name='';
            this.roll=0;
            this.home='';
            if(res.status==200)
            {

              this.data.push(res.data);
            }
            if(res.status==false)
            {
              alert("You are not allowed here");
            }
          })
        }
  }

}
