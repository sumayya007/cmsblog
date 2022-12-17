import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.css']
})
export class SinglepageComponent implements OnInit {
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
  posts: any;
  constructor(private userService:UserServiceService,private router:Router) { }

  ngOnInit(): void {
    const postid=localStorage.getItem("postId");
    console.log("postid is",postid)
  
    this.userService.viewpostbyid(postid).subscribe((data: any)=>{
      console.log(data);
      this.post=JSON.parse(JSON.stringify(data));
      
    })
  }
  
deletePost(post:any){
  this.userService.deletePost(post._id)
  .subscribe((data:any)=>{
    this.posts=this.posts.filter((p: any)=>p!==post);
    alert("Your post has been deleted successfully!!");
  
  })
  this.router.navigate(['/user-home']);

  }
}
