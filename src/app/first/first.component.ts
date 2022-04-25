import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.sass']
})
export class FirstComponent implements OnInit, AfterContentChecked, AfterViewChecked, AfterContentInit, AfterViewInit{

  constructor(private service: FirstService) { }
  data:any;
  name:string = '';
  roll :number = 0;
  home:string='';
  result:any;
  ngOnInit(): void {
    this.service.getdata().subscribe(res=>{
      this.data=res;
    })
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
          this.service.addUser(data).subscribe(res=>{
            this.result=res;
            this.data.push(data);
            if(this.result.status==200)
            {
              this.name='';
              this.roll=0;
              this.home='';
            }
          })
        }
  }

}
