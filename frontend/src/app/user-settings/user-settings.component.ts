import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {
 
  user={
    userid:'',
    username:'',
     email:'',
    password : '',
     profilePic : ''
     
  
}
  users: any;
  constructor(private userService:UserServiceService,private router:Router) { }

  ngOnInit(): void {
    const userName=localStorage.getItem("userName");
  
    console.log("halaaa user"+userName);
    
   
   this.userService.getUserByName(userName).subscribe((data: any)=>{
    
  
   this.user=JSON.parse(JSON.stringify(data));
   console.log("user is ",this.user.username)
  
   })
  }
  deleteUser(user:any){
    this.userService.deleteUser(user._id)
    .subscribe((data: any)=>{
      this.users=this.users.filter((p: any)=>p!==user);
    })
    }
 

}



