import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserServiceService } from '../user-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-edit-settings',
  templateUrl: './user-edit-settings.component.html',
  styleUrls: ['./user-edit-settings.component.css']
})
export class UserEditSettingsComponent implements OnInit {

user={
  userid:'',
  username:'',
  email:'',
  password:'',
  profilePic:''
}
  users: any;
  constructor(private userService:UserServiceService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    const userName=localStorage.getItem("userName");
  
    console.log("halaaa user"+userName);
    
   
   this.userService.getUserByName(userName).subscribe((data: any)=>{
    
  
   this.user=JSON.parse(JSON.stringify(data));
   console.log("user is ",this.user.username)
   
   
   })
  }
 
  edituserprofile(){
    this.userService.editUser(this.user);  
     
    alert("Your details are successfully updated!!");
    this.router.navigate(['user-home']);
  }
 
}
