import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import {ElementRef,ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup,FormBuilder, FormArray, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-create-post',
  templateUrl: './user-create-post.component.html',
  styleUrls: ['./user-create-post.component.css']
})
export class UserCreatePostComponent implements OnInit {
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
  event: any;
  newfile: any;
  constructor(private userService:UserServiceService,private router:Router,private http:HttpClient) { }


  ngOnInit(): void {
  }
  uploadPic(event:any){
   
     }
    userPost(post:any){
      
      alert("Your Post has been published successfully!!");
       this.router.navigate(["/user-home"])
    }
 
      
      
}
