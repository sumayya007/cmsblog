import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-admin-view-categories',
  templateUrl: './admin-view-categories.component.html',
  styleUrls: ['./admin-view-categories.component.css']
})
export class AdminViewCategoriesComponent implements OnInit {
  category={
    categoryid:'',
    categoryname:'',
    adminname:''
    
  }
  categories: any;
 
  constructor(private userService:UserServiceService,private _router:Router) { }

  ngOnInit(): void {
    const adminName=localStorage.getItem("adminName");
  
   this.userService.getCategoryByName(adminName).subscribe((data: any)=>{
    
  
   this.categories=JSON.parse(JSON.stringify(data));
   console.log("list of categories",this.categories)
  
   })
  }
  editCategory(category:any){
    localStorage.setItem("editCatId", category._id);
    console.log(category._id)
    this._router.navigate(['admin-edit-category']);
    // this.userService.editcategory(this.category);
  }
  
  deleteCategory(category:any){
    console.log("delete category",category);
  this.userService.adminDeleteCategory(category._id)
  .subscribe((data: any)=>{
  this.categories=this.categories.filter((p:any)=>p!=category);
  });
}
}
