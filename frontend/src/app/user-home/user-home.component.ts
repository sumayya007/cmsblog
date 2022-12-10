import { PathLocationStrategy } from '@angular/common';
import { Component, OnInit, Sanitizer } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { Pipe, PipeTransform} from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
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
 
imgLink:String="";

imageBaseUrl=environment.baseUrl+'/uploads/';
  postFile: any;
  constructor(private userService:UserServiceService,private router:Router,public sanitizer:DomSanitizer) { }

  ngOnInit(): void {
  // const imgLink=localStorage.getItem("imgLink");
  const postFile=localStorage.getItem("postFile");
  console.log("image got as",postFile);
  // this.userService.viewfile(postFile).subscribe((data:any)=>{
  //   console.log("got final image",data);
  //  })


    const userName=localStorage.getItem("userName");
  
    console.log("halaaa user"+userName);
    
   
   this.userService.getPostsByName(userName).subscribe((data: any)=>{
    
  
   this.posts=JSON.parse(JSON.stringify(data));
   
  
   })
  
 
}
// upload(fakepath: any){
// var splits=fakepath.split(['fakepath\\']);
// alert(splits[1])
// }
viewPost(post:any){
  localStorage.setItem("postId", post._id);
  console.log(post.postid)
  this.router.navigate(['/singlepage']);
}
}
