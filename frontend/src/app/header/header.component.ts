import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
declare const hamburg: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
 
  user={
    userid:'',
    username:'',
     email:'',
    password : '',
     profilePic : ''
     
 
     
}

  x="";
  constructor(private _router:Router,private userService:UserServiceService) { }

  ngOnInit(): void {
   hamburg();
   const userName=localStorage.getItem("userName");
  
   this.userService.getUserByName(userName).subscribe((data: any)=>{
    
  
    this.user=JSON.parse(JSON.stringify(data));})}
  
  logout(){
    localStorage.removeItem('token');
     this._router.navigate(['/user-login']);
  }

}







