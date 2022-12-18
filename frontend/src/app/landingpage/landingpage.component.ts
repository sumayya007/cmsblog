import { Component, OnInit } from '@angular/core';
import { MainheaderComponent } from '../mainheader/mainheader.component';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  posts: any;
  categories: any;

  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
 this.userService.GetPostsList().subscribe((data: any)=>{
    console.log(data);
    this.posts=JSON.parse(JSON.stringify(data));
      console.log("posts list",this.posts) ; 
      
  })
  // this.userService.superadminGetCategoriesList().subscribe((data: any)=>{
  //   console.log(data);
  //   this.categories=JSON.parse(JSON.stringify(data));
  //     console.log("categories list",this.categories) ;   
  // })
}
}
