import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-admin-edit-settings',
  templateUrl: './admin-edit-settings.component.html',
  styleUrls: ['./admin-edit-settings.component.css']
})
export class AdminEditSettingsComponent implements OnInit {

  admin={
    adminid:'',
    adminname:'',
    email:'',
    password:'',
    profilePic:''
   }
    admins: any;
    constructor(private userService:UserServiceService,private router:Router) { }
  
    ngOnInit(): void {
      const adminName=localStorage.getItem("adminName");
    
      console.log("halaaa user"+adminName);
      
      this.userService.getAdminByName().subscribe((data: any)=>{
    
  
        this.admin=JSON.parse(JSON.stringify(data));
        console.log("user is ",this.admin.adminname)
       
        })
    }
    editadminprofile(){
      this.userService.editAdmin(this.admin);  
       
      alert("Your details are successfully updated!!");
      this.router.navigate(['admin-home']);
    }
   

}
