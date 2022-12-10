import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-superadmin-view-categories',
  templateUrl: './superadmin-view-categories.component.html',
  styleUrls: ['./superadmin-view-categories.component.css']
})
export class SuperadminViewCategoriesComponent implements OnInit {

  category={
    categoryid:'',
    categoryname:'',
    adminname:''
    
  }
  categories: any;
 
  constructor(private userService:UserServiceService,private _router:Router) { }

  ngOnInit(): void {
    this.userService.superadminGetCategoriesList().subscribe((data: any)=>{
      console.log(data);
      this.categories=JSON.parse(JSON.stringify(data));
        console.log("categories list",this.categories) ;   
    })
  }
 
  deleteCategory(category:any){
    console.log("delete category",category);
  this.userService.superadminDeleteCategory(category._id)
  .subscribe((data: any)=>{
  this.categories=this.categories.filter((p:any)=>p!=category);
  });
}
   

}
