import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-admin-edit-post',
  templateUrl: './admin-edit-post.component.html',
  styleUrls: ['./admin-edit-post.component.css']
})
export class AdminEditPostComponent implements OnInit {
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
  constructor(private userService:UserServiceService,private router:Router) { }

  ngOnInit(): void {
    const postid=localStorage.getItem("adminEditPostid");
    console.log("postid is",postid)
  
    this.userService.adminviewpostbyid(postid).subscribe((data: any)=>{
      console.log(data);
      this.post=JSON.parse(JSON.stringify(data));
            
    })
  }
  editPost(){
    const postid=localStorage.getItem("adminEditPostid");
    this.userService.admineditpost(this.post,postid);
    alert("Your details are successfully updated!!");
    this.router.navigate(['admin-home']);
  }

}
