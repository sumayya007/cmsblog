import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user={
    userid:'',
    username:'',
     email:'',
    password : '',
     profilePic : ''
     
  
}
  users: any;
  value: any;
  constructor(private userService:UserServiceService,private router:Router,private _auth:AuthServiceService) { }

  ngOnInit(): void {
    this.userService.getUsersList().subscribe((data: any)=>{
      console.log(data);
      this.users=JSON.parse(JSON.stringify(data));
            
    })
  }
userLogin(value:any){
  console.log("inside userlogin");
const arr=this.users;
console.log(value);
console.log("List of employers",this.users);

for(let i=0;i<arr.length;i++){
  
  if(arr[i].email==this.user.email){
    if(this.users[i].password==this.user.password){
    alert("login successfull!!");
    
    this._auth.loginUser(this.user)
    .subscribe(
      (        res: { token: string; })=>{
      
        localStorage.setItem('token',res.token);
        console.log("response token is",res.token);
      
            });
    const mailid=this.user.email;
    console.log("mail is",mailid)
    this.userService.getUserByEmail(mailid).subscribe((data: any)=>{


      this.users=JSON.parse(JSON.stringify(data));
      console.log("got name",this.users[0])
      localStorage.setItem("userName",this.users[0].username);
      localStorage.setItem("userImg",this.user.profilePic);
      
      })
      }       
            this.router.navigate(["/user-home"])
    }
  } 
  }
}
