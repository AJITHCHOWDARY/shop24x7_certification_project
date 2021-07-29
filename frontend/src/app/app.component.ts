import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isAdmin:any;

  constructor(){
    
  }

  ngOnInit(): void {
    this.isAdmin = localStorage.getItem('admin');
    console.log('Admin or normal user:'+ this.isAdmin);
   
   }
   
   title = 'frontend';
}
