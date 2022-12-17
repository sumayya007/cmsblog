import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ElementRef,ViewChild} from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-edit-settings',
  templateUrl: './user-edit-settings.component.html',
  styleUrls: ['./user-edit-settings.component.css']
})
export class UserEditSettingsComponent implements OnInit {
  @ViewChild('fileInput', { static: false })
  fileInput!: ElementRef;
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
  onFileUpload(){
    const imageBlob=this.fileInput.nativeElement.files[0];
    const file=new FormData();
    file.set('file',imageBlob);
    
    this.http.post('http://localhost:3000/user/',file).subscribe(response=>{
    const postFile=response;
      console.log("postfile",postFile);
     localStorage.setItem("postFile",JSON.stringify(postFile));
    });
  }
  edituserprofile(user:any){
    console.log(user._id)
    this.userService.editUser(user,user._id);  
     
    alert("Your details are successfully updated!!");
    this.router.navigate(['user-home']);
  }
  deleteuserprofile(user:any){
   
  this.userService.deleteUser(user._id)
  .subscribe((data: any)=>{
  this.users=this.users.filter((p:any)=>p!=user);
  });
}
}
