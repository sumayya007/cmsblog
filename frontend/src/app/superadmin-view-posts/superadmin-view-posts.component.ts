import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-superadmin-view-posts',
  templateUrl: './superadmin-view-posts.component.html',
  styleUrls: ['./superadmin-view-posts.component.css']
})
export class SuperadminViewPostsComponent implements OnInit {
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

  user={
    userid:'',
    username:'',
    email:'',
    password:'',
    profilePic:''
  }
  users: any;
  posts: any;

  constructor(private userService:UserServiceService,private router:Router) { }

ngOnInit(): void {
  this.userService.superadminGetPostsList().subscribe((data: any)=>{
    console.log(data);
    this.posts=JSON.parse(JSON.stringify(data));
      console.log("users list",this.posts) ;   
  })
}
deletePost(post:any){
  console.log("delete post",post);
this.userService.superadminDeletePost(post._id)
.subscribe((data: any)=>{
this.posts=this.posts.filter((p:any)=>p!=post);
});
}


}
