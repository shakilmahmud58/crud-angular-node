import { AfterContentChecked, AfterViewChecked, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.sass']
})
export class SecondComponent implements OnInit, AfterViewChecked, AfterContentChecked, OnDestroy {
 
  constructor(private service: FirstService, private auth:AuthService) { }
  data:any;
  show:any;
  num:any;
  name:string='';
  roll:string='';
  home:string='';
  showModal(student:any,num:any)
  {
    this.num=num;
    this.show=student._id;
    this.name=student.name;
    this.home=student.home;
    this.roll=student.roll;
  }
  cancelit(student:any)
  {
    this.show=null;
    this.name=student.name;
    this.home=student.home;
    this.roll=student.roll;
  }
  updateit()
  {
    var datas={
      _id:this.show,
      name:this.name,
      roll:this.roll,
      home:this.home
    }
    this.service.editUser(datas).subscribe((res:any)=>{
      if(res.status==false)
      {
        alert("You are not allowed here");
      }
      else
      {
        this.data[this.num]=res;
        this.show=null;
      }

      //console.log(this.data);
    }) 
  }
  ngOnInit(): void {
     //this.checkit();
    this.service.getdata().subscribe(res=>{
      this.data=res;
      //console.log(res);
    })
    this.isLoggedIn();
  }
  ngOnDestroy(): void {
    //this.checkit()
  }

  ngAfterViewChecked(): void {

  }
  ngAfterContentChecked(): void {

  }
  deleteit(student:any,num:number): void{
    this.service.deleteUser(student._id).subscribe((res:any)=>{
      if(res.status==false)
      {
        alert("your are not allowed here");
      }
      else
      {
        this.data=this.data.filter((x:any)=>{
          return x !== student
        });
      }

      //console.log(res);
    })
  }
  loggedUser:boolean=false;
  isLoggedIn(){
      this.auth.isLoggedIn().subscribe((res:any)=>{
        this.loggedUser=res.status;
      });
  }


}
