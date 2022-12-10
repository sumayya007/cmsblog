import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import {ElementRef,ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-superadmin-add-admin',
  templateUrl: './superadmin-add-admin.component.html',
  styleUrls: ['./superadmin-add-admin.component.css']
})
export class SuperadminAddAdminComponent implements OnInit {
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
}
onUpload(){
  const imageBlob=this.fileInput.nativeElement.files[0];
  const file=new FormData();
  file.set('file',imageBlob);
  
  this.http.post('http://localhost:3000/superadmin/',file).subscribe(response=>{
  const postFile=response;
    console.log("postfile",postFile);
   localStorage.setItem("adminFile",JSON.stringify(postFile));
  });
}

addAdmin(value:any){
  // this.userService.addAdmin(value);
  //       alert("Admin added successfully!!");
  //        this.router.navigate(["/superadmin-home"])
  console.log(value.email)
 var email=this.admin.email;
 console.log(email)
  this.userService.SuperAdminGetAdminByEmail(value.email).subscribe((data: any)=>{
    this.admins=JSON.parse(JSON.stringify(data));
    console.log("got name",this.admins.length)
    if(this.admins.length==0){
      
      this.userService.addAdmin(value);
      alert("Admin added successfully!!");
       this.router.navigate(["/superadmin-home"])
     
     }
     else{
      alert("This email is already registered with us!!");
      this.router.navigate(["/superadmin-add-admin"]);
     }
    })
}


}
