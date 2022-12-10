import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
 admin={
  adminid:'',
  adminname:'',
  email:'',
  password:'',
  profilePic:''
 }
  admins: any;
  constructor(private userService:UserServiceService,private router:Router,private _auth:AuthServiceService) { }

  ngOnInit(): void {
    
    this.userService.getAdminsList().subscribe((data: any)=>{
      console.log(data);
      this.admins=JSON.parse(JSON.stringify(data));
            
    })
  }
  adminLogin(value:any){
    console.log("inside adminlogin");
  const arr=this.admins;
  console.log(arr);
  console.log(value);
 
  
  for(let i=0;i<arr.length;i++){
  
    if(arr[i].email==this.admin.email){
     
      if(arr[i].password==this.admin.password){
        
      this._auth.loginAdmin(this.admin)
      .subscribe(
        (        res: { token: string; })=>{
        
          localStorage.setItem('token',res.token);
          console.log("response token is",res.token);
         
              });
      const mailid=this.admin.email;
      console.log("mail is",mailid)
      // console.log("got name",this.admin.adminname)
      this.userService.getAdminByEmail(mailid).subscribe((data: any)=>{
  
  
        this.admins=JSON.parse(JSON.stringify(data));
        console.log(this.admins[0].adminname)
        
        localStorage.setItem("adminName",this.admins[0].adminname);
        const adname=localStorage.getItem("adminName");
        console.log(adname)
        
        })
        }       
              this.router.navigate(["/admin-home"])
      }
    } 
    // alert("Please enter valid Login Credentials");
    // this.router.navigate(["/admin-login"])
    }
}
