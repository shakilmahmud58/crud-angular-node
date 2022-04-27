import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class FirstService {

   
  constructor(private http:HttpClient) { }

  getdata(){
      return this.http.get('https://node-angular-server-58.herokuapp.com/students');
  }
  addUser(data:any){
      return this.http.post('https://node-angular-server-58.herokuapp.com/adduser',data);
  }
  // addUser2(data:any){
  //   axios.post('http://localhost:5000/adduser',data).then(res=>{
  //     return res.data;
  //   });    
  // }
  deleteUser(id:any){
    return this.http.post('https://node-angular-server-58.herokuapp.com/deleteUser',{id:id});
  }
  editUser(data:any){
    return this.http.post('https://node-angular-server-58.herokuapp.com/editUser',data);
  }

}
