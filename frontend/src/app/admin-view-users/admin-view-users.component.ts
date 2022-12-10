import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-admin-view-users',
  templateUrl: './admin-view-users.component.html',
  styleUrls: ['./admin-view-users.component.css']
})
export class AdminViewUsersComponent implements OnInit {
user={
  userid:'',
  username:'',
  email:'',
  password:'',
  profilePic:''
}
  users: any;
  constructor(private userService:UserServiceService,private router:Router) { }

  ngOnInit(): void {
    this.userService.adminGetUsersList().subscribe((data: any)=>{
      console.log(data);
      this.users=JSON.parse(JSON.stringify(data));
        console.log("users list",this.users) ;   
    })
  }
  deleteUser(user:any){
    console.log("delete user",user);
this.userService.adminDeleteUser(user._id)
.subscribe((data)=>{
  this.users=this.users.filter((p:any)=>p!=user);
});
  }
}
