import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-admin-edit-category',
  templateUrl: './admin-edit-category.component.html',
  styleUrls: ['./admin-edit-category.component.css']
})
export class AdminEditCategoryComponent implements OnInit {
category={
  categoryid:'',
  categoryname:'',
  adminname:''
}
  categorydata: any;
  constructor(private userService:UserServiceService,private router:Router) { }

  ngOnInit(): void {
    const catid=localStorage.getItem("adminEditCat");
    console.log("catid is",catid)
  
    this.userService.adminviewcategorybyid(catid).subscribe((data: any)=>{
      console.log(data);
      this.category=JSON.parse(JSON.stringify(data));
            
    })
  }
  editCategory(){
    const catid=localStorage.getItem("adminEditCat");
    console.log(this.category)
    this.userService.editcategory(this.category,catid),catid;
    alert("Your details are successfully updated!!");
    this.router.navigate(['admin-home']);
    
  }
 
  logoutUser(){
    localStorage.removeItem('token')
    this.router.navigate(['admin-home'])
  }

}
