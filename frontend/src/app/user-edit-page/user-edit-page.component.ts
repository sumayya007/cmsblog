import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.css']
})
export class UserEditPageComponent implements OnInit {
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
    const postid=localStorage.getItem("postId");
    console.log("postid is",postid)
  
    this.userService.viewpostbyid(postid).subscribe((data: any)=>{
      console.log(data);
      this.post=JSON.parse(JSON.stringify(data));
            
    })
  }
  editPost(){
    const postid=localStorage.getItem("postId");
    this.userService.editpost(this.post,postid);
    alert("Your details are successfully updated!!");
    this.router.navigate(['user-home']);
  }
}
