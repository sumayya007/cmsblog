import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-superadmin-login',
  templateUrl: './superadmin-login.component.html',
  styleUrls: ['./superadmin-login.component.css']
})
export class SuperadminLoginComponent implements OnInit {
  superadmin={
    superadminid:'',
    superadminname:'',
    email:'',
    password:'',
    profilePic:''
   }
 
  constructor( private _auth:AuthServiceService,private userService:UserServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  superadminLogin(value:any){
    console.log("inside superadminlogin");

  console.log(value);
 
    if(value!==null){
      this._auth.loginSuperAdmin(this.superadmin)
      .subscribe(
        (        res: { token: string; })=>{
        
          localStorage.setItem('token',res.token);
          console.log("response token is",res.token);
        
              });
    
        localStorage.setItem("superadminName",this.superadmin.superadminname);
        this.router.navigate(["/superadmin-home"]);
        
        }
    
   else{
   alert("Please enter valid Login Credentials");
     this.router.navigate(["/superadmin-login"])
   }

}
}
