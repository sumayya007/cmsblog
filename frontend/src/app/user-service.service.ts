import { Injectable } from '@angular/core'; 
 import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  user={
    username:'',
     email:'',
    password : '',
     profilePic : ''
     
  
}
post={
  postid:'',
  title:'',
  desc:'',
  photo:'',
  username:'',
  category:'',
  createdAt:'',
  updatedAt:''
}
admin={
  adminid:'',
  adminname:'',
  email:'',
  password:'',
  profilePic:''
}
superadmin={
  superadminid:'',
  superadminname:'',
  email:'',
  password:'',
  profilePic:''
 }
category={
  categoryid:'',
  categoryname:'',
  adminname:''
  
}
  constructor(private http:HttpClient) { }
  superadminGetUsersList(){
    return this.http.get<any>("http://localhost:3000/superadmin/getusers");
  }
  adminGetUsersList(){
    return this.http.get<any>("http://localhost:3000/admin/getusers");
  }
  adminGetPostsList(){
    return this.http.get<any>("http://localhost:3000/admin/getposts");
  }
  GetPostsList(){
    console.log("inside getposts")
    return this.http.get<any>("http://localhost:3000/main/getposts");
  }
  superadminGetPostsList(){
    return this.http.get<any>("http://localhost:3000/superadmin/getposts");
  }
  superadminGetCategoriesList(){
    return this.http.get<any>("http://localhost:3000/superadmin/getcategories");
  }
  getUserByEmail(email:any){
    console.log(email)
    return this.http.get<any>("http://localhost:3000/user/getuserbyemail/"+email);
  }
  getAdminByEmail(email:any){
    console.log(email)
    return this.http.get<any>("http://localhost:3000/admin/getadminbyemail/"+email);
  }
  SuperAdminGetAdminByEmail(email:any){
    console.log(email)
    return this.http.get<any>("http://localhost:3000/superadmin/getadminbyemail/"+email);
  }
  getUserByName(username:any){
    console.log(username)
     const userName=localStorage.getItem("userName");
    return this.http.get<any>("http://localhost:3000/user/getuserbyname/"+username);
  }
  getAdminByName(){
   
     const adminName=localStorage.getItem("adminName");
    return this.http.get<any>("http://localhost:3000/admin/getadminbyname/"+adminName);
  }
  getPostsByName(username:any){
    
    return this.http.get<any>("http://localhost:3000/user/getpostsbyname/"+username);
  }
  viewpostbyid(postid:any){
    
    return this.http.get<any>("http://localhost:3000/user/getpostsbyid/"+postid);
  }
  adminviewpostbyid(postid:any){
    
    return this.http.get<any>("http://localhost:3000/admin/getpostsbyid/"+postid);
  }
  adminviewcategorybyid(id:any){
    return this.http.get<any>("http://localhost:3000/admin/getcategorybyid/"+id);
  }
  admineditpost(post:any,postid:any){
    
    console.log(postid);
    this.http.put("http://localhost:3000/admin/admineditpost/"+postid,post).subscribe(data =>console.log(data));   
  }
  viewcategorybyid(id:any){

    return this.http.get<any>("http://localhost:3000/admin/getcategorybyid/"+id);
  }
  userRegister(user:any){
    return this.http.post<any>("http://localhost:3000/user/insertuser",{"user":user}).subscribe(data=>{console.log(data)});
  }
  addAdmin(admin:any){
    console.log("admin to be added",admin)
    return this.http.post<any>("http://localhost:3000/superadmin/insertadmin",{"admin":admin}).subscribe(data=>{console.log(data)});
  }

  getUsersList(){
    console.log("inside getusers")
    return this.http.get<any>("http://localhost:3000/user/users");
  }
  getAdminsList(){
    console.log("inside getadmins")
    return this.http.get<any>("http://localhost:3000/admin/admins");
  }
  superadminGetAdminsList(){
    console.log("inside superadmingetadmins")
    return this.http.get<any>("http://localhost:3000/superadmin/admins");
  }
  editUser(user:any,id:any){
    return this.http.put("http://localhost:3000/user/update/"+id,user).subscribe(data=>{console.log("data is"+data)});

  }
  editAdmin(admin:any,id:any){
    return this.http.put("http://localhost:3000/admin/updateadmin/"+id,admin).subscribe(data=>{console.log("data is"+data)});

  }
  editpost(post:any,id:any){
    return this.http.put("http://localhost:3000/user/editpost/"+id,post).subscribe(data=>{console.log("data is"+data)});
  }
  editcategory(category:any,id:any){

    this.http.put("http://localhost:3000/admin/admineditcategory/"+id,category).subscribe(data =>console.log(data));   
  }
  deleteUser(id:any){
   
    return this.http.delete("http://localhost:3000/user/removeuser/"+id);
  }
  
  deleteAdmin(id:any){
   
    return this.http.delete("http://localhost:3000/admin/removeadmin/"+id);
  }
  adminDeleteUser(id:any){
    console.log("inside adminDeleteUser");
    return this.http.delete("http://localhost:3000/admin/adminremoveuser/"+id);
  }
  superadminDeleteUser(id:any){
    console.log("inside superadminDeleteUser");
    
    return this.http.delete("http://localhost:3000/superadmin/superadminremoveuser/"+id);
  }
  superadminDeleteAdmin(id:any){
    console.log("inside superadminDeleteAdmin");
    
    return this.http.delete("http://localhost:3000/superadmin/superadminremoveadmin/"+id);
  }


  adminDeletePost(id:any){
    console.log("inside adminDeletePost");
    return this.http.delete("http://localhost:3000/admin/adminremovepost/"+id);
  }
  adminDeleteCategory(id:any){
    console.log("inside adminDeleteCategory");
    return this.http.delete("http://localhost:3000/admin/adminremovecategory/"+id);
  }
  superadminDeletePost(id:any){
    console.log("inside superadminDeletePost");
    return this.http.delete("http://localhost:3000/superadmin/superadminremovepost/"+id);
  }
  superadminDeleteCategory(id:any){
    console.log("inside superadminDeleteCategory");
    return this.http.delete("http://localhost:3000/superadmin/superadminremovecategory/"+id);
  }
  deletePost(id:any)
  {

    return this.http.delete("http://localhost:3000/user/removePost/"+id);

  }
  deleteCat(id:any){
    return this.http.delete("http://localhost:3000/admin/removeCat/"+id);
  }
  userCreatePost(post:any){
   
   console.log(post.photo);
   console.log(post);
   
    return this.http.post<any>("http://localhost:3000/user/createpost",{"post":post}).subscribe(data=>{console.log(data)});
  }
  adminCreatePost(post:any){
    console.log(post.photo);
    console.log(post);
    
     return this.http.post<any>("http://localhost:3000/admin/createpost",{"post":post}).subscribe(data=>{console.log(data)});
  }
  viewfile(photo:any){
    return this.http.get<any>("http://localhost:3000/user/viewfile/"+photo);
  }
  adminCreateCategory(category:any){
    const adminName=localStorage.getItem("adminName");
    return this.http.post<any>("http://localhost:3000/admin/createcategory/"+adminName,{"category":category}).subscribe(data=>{console.log(data)});
  }
  getCategoryByName(adminname:any){
    console.log(adminname)
     const adminName=localStorage.getItem("adminName");
    return this.http.get<any>("http://localhost:3000/admin/getcategorybyname/"+adminname);
  }
  uploadImage(image: any){
    const data=new FormData();
    data.append('image',image);
    console.log(data)
  }
  adminGetCategoriesList(){
    return this.http.get<any>("http://localhost:3000/admin/getcategories");
  }
}
