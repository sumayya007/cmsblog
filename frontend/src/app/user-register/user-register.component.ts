import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import {ElementRef,ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  @ViewChild('fileInput', { static: false })
fileInput!: ElementRef;
  user={
    userid:'',
    username:'',
     email:'',
    password : '',
     profilePic : ''
     
  
}
  users: any;
  constructor(private userService:UserServiceService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
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
userSignup(value:any){
  console.log(value.email)
 var email=this.user.email;
 console.log(email)
  this.userService.getUserByEmail(value.email).subscribe((data: any)=>{
    this.users=JSON.parse(JSON.stringify(data));
    console.log("got name",this.users.length)
    if(this.users.length==0){
      
      this.userService.userRegister(value);
      alert("Registered successfully!!");
       this.router.navigate(["/user-login"])
     
     }
     else{
      alert("This email is already registered with us!!");
      this.router.navigate(["/user-register"]);
     }
    })
}
}
