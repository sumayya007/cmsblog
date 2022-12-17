import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import {ElementRef,ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-edit-settings',
  templateUrl: './admin-edit-settings.component.html',
  styleUrls: ['./admin-edit-settings.component.css']
})
export class AdminEditSettingsComponent implements OnInit {
  @ViewChild('fileInput', { static: false })
fileInput!: ElementRef;
  admin={
    adminid:'',
    adminname:'',
    email:'',
    password:'',
    profilePic:''
   }
    admins: any;
    constructor(private userService:UserServiceService,private router:Router,private http:HttpClient) { }
  
    ngOnInit(): void {
      const adminName=localStorage.getItem("adminName");
    
      console.log("halaaa user"+adminName);
      
      this.userService.getAdminByName().subscribe((data: any)=>{
    
  
        this.admins=JSON.parse(JSON.stringify(data));
        console.log("user is ",this.admins[0].adminname)
       
        })
    }

    onFileUpload(){
      const imageBlob=this.fileInput.nativeElement.files[0];
      const file=new FormData();
      file.set('file',imageBlob);
      
      this.http.post('http://localhost:3000/admin/',file).subscribe(response=>{
      const adminFile=response;
        console.log("postfile",adminFile);
       localStorage.setItem("adminFile",JSON.stringify(adminFile));
      });
    }
    editadminprofile(){
      this.userService.editAdmin(this.admins[0],this.admins[0]._id);  
       
      alert("Your details are successfully updated!!");
      this.router.navigate(['admin-home']);
    }
   

}
