import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  admin={
    adminid:'',
    adminname:'',
    email:'',
    password:'',
    profilePic:''
   }
  admins: any;

  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
    const adminname=localStorage.getItem("adminName");
  
      
    this.userService.getAdminByName().subscribe((data:any)=>{
      this.admins=JSON.parse(JSON.stringify(data));
      console.log(this.admins[0].profilePic)
    })
  }

}
