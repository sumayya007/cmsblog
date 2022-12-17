import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.css']
})
export class AdminSettingsComponent implements OnInit {
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
    const adminname=localStorage.getItem("adminName");
  
    console.log(adminname);
    
   
   this.userService.getAdminByName().subscribe((data: any)=>{
    
  
   this.admins=JSON.parse(JSON.stringify(data));
   console.log("user is ",this.admins[0].adminname)
  
   })
  }
  deleteAdmin(admin:any){
    this.userService.deleteAdmin(admin._id)
    .subscribe((data: any)=>{
      this.admins=this.admins.filter((p: any)=>p!==admin);
    })
    }
}
