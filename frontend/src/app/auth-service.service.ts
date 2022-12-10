import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  admin={
    adminid:'',
    username:'',
    email:'',
    password:'',
    profilePic:''
  }
  constructor(private http:HttpClient,private router:Router) { }
  loginUser(user:any){
    
    console.log("inside auth",user);
    return this.http.post<any>("http://localhost:3000/user/userlogin",user);
 
  }
  loginAdmin(admin:any){
    
    console.log("inside auth",admin);
    return this.http.post<any>("http://localhost:3000/admin/adminlogin",admin);
 
  }
  loginSuperAdmin(superadmin:any){
    
    console.log("inside auth",superadmin);
    return this.http.post<any>("http://localhost:3000/superadmin/superadminlogin",superadmin);
 
  }
  // !! to check whether token is present or not,returns a boolean value
  loggedIn(){
    return !!localStorage.getItem('token')  
  }
  // for reading the value of token in local storage
  getToken(){
 return localStorage.getItem('token')
  }
}
