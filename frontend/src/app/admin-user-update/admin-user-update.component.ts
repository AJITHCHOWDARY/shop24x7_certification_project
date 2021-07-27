import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin-user-update',
  templateUrl: './admin-user-update.component.html',
  styleUrls: ['./admin-user-update.component.css']
})
export class AdminUserUpdateComponent implements OnInit {

  id: any;
  user: User = new User();

  constructor(private _route:ActivatedRoute, private _userService: UserService,
    private _router:Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    console.log(this._route.snapshot)
    console.log("ID: " + this.id);

    this._userService.getUserById(this.id).subscribe(result=>{
      this.user = result;
      console.log(this.user);
    }, error=>{
      console.log(error);
    })
  }

  updateUser(){
    this._userService.updateUser(this.id, this.user).subscribe(result=>{
      console.log(result)
      this._router.navigate(['/admin/users']);
    }, error=>{
      console.log(error)
    })
  }
}
