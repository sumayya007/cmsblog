import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-admin-create-category',
  templateUrl: './admin-create-category.component.html',
  styleUrls: ['./admin-create-category.component.css']
})
export class AdminCreateCategoryComponent implements OnInit {
category={
  categoryid:'',
  username:'',
  categoryname:''
}
  constructor(private userService:UserServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  adminCat(value:any){
    this.userService.adminCreateCategory(value);
    alert("Your category has been added successfully!!");
     this.router.navigate(["/admin-home"])
  }
}
