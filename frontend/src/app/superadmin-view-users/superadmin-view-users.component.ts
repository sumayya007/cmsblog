import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-superadmin-view-users',
  templateUrl: './superadmin-view-users.component.html',
  styleUrls: ['./superadmin-view-users.component.css']
})
export class SuperadminViewUsersComponent implements OnInit {

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
      this.userService.superadminGetUsersList().subscribe((data: any)=>{
        console.log(data);
        this.users=JSON.parse(JSON.stringify(data));
          console.log("users list",this.users) ;   
      })
    }
    deleteUser(user:any){
      console.log("delete user",user);
  this.userService.superadminDeleteUser(user._id)
  .subscribe((data: any)=>{
    this.users=this.users.filter((p:any)=>p!=user);
  });
    }

}
