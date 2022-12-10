import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-superadmin-view-admins',
  templateUrl: './superadmin-view-admins.component.html',
  styleUrls: ['./superadmin-view-admins.component.css']
})
export class SuperadminViewAdminsComponent implements OnInit {
  admin={
    adminid:'',
    username:'',
    email:'',
    password:'',
    profilePic:''
   }
    admins: any;
    constructor(private userService:UserServiceService,private router:Router,private _auth:AuthServiceService) { }
  
    ngOnInit(): void {
      
      this.userService.superadminGetAdminsList().subscribe((data: any)=>{
        console.log(data);
        this.admins=JSON.parse(JSON.stringify(data));
              
      })
    }
    deleteAdmin(admin:any){
      console.log("delete admin",admin);
  this.userService.superadminDeleteAdmin(admin._id)
  .subscribe((data: any)=>{
    this.admins=this.admins.filter((p:any)=>p!=admin);
  });
    }

}
