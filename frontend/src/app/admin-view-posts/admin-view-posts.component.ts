import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-admin-view-posts',
  templateUrl: './admin-view-posts.component.html',
  styleUrls: ['./admin-view-posts.component.css']
})
export class AdminViewPostsComponent implements OnInit {
  users: any;
  posts: any;

  constructor(private userService:UserServiceService,private router:Router) { }

ngOnInit(): void {
  this.userService.adminGetPostsList().subscribe((data: any)=>{
    console.log(data);
    this.posts=JSON.parse(JSON.stringify(data));
      console.log("users list",this.posts) ;   
  })
}
deletePost(post:any){
  console.log("delete post",post);
this.userService.adminDeletePost(post._id)
.subscribe((data: any)=>{
this.posts=this.posts.filter((p:any)=>p!=post);
});
}

}
