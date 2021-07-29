import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  user: User = new User();
  userList:any=[];
  success:boolean = false;


  constructor(private _httpClient:HttpClient, private _router:Router) { }

  ngOnInit(): void {
  }
  login(){
    this._httpClient.get('http://localhost:8080/admin/users').subscribe(
      (result)=>{
        this.userList=result;

        for(let index=0;index < this.userList.length;index++){
          if(
            this.user.username == this.userList[index].username &&
            this.user.password == this.userList[index].password
          ){
            localStorage.setItem('firstName',this.userList[index].firstName)
            localStorage.setItem('lastName',this.userList[index].lastName)
            localStorage.setItem('username',this.userList[index].username)
            localStorage.setItem('password',this.userList[index].password)
            localStorage.setItem('phone',this.userList[index].phone)
            localStorage.setItem('id',this.userList[index]._id)
            localStorage.setItem('admin',this.userList[index].admin)



            console.log(localStorage.getItem('id'))
            console.log(localStorage.getItem('admin'))
            var stat=localStorage.getItem('admin');
            localStorage.setItem('isLoggedIn','true')

            this.success=true

            if(stat == 'true'){
              window.location.replace('/admin');
              //this._router.navigate(['/admin']);
            }
            else
          { 
            window.location.replace('/homepage')
          }
    //this._router.navigate(['/homepage'])}
          
          }
        }

        if(this.success==false){
          alert('Please Enter Correct Details')
        }
      },
      (error)=>{
        console.log(error)
      },
    )
  }

}
