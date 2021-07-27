import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin-add-user',
  templateUrl: './admin-add-user.component.html',
  styleUrls: ['./admin-add-user.component.css']
})
export class AdminAddUserComponent implements OnInit {

  user:User = new User();

  constructor(private _userService:UserService) { }

  ngOnInit(): void {
  }

  addUser(){
    this._userService.addUser(this.user).subscribe(result =>{
      console.log(result)
      alert(result['message'])
      window.location.replace('admin/users')
    }, error=>{
      console.log(error);
    })
  }
}
