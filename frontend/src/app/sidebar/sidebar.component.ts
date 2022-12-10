import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  user={
    userid:'',
    username:'',
     email:'',
    password : '',
     profilePic : ''
     
  
}
  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
    const username=localStorage.getItem("userName");
   
    this.userService.getUserByName(username).subscribe((data:any)=>{
      this.user=JSON.parse(JSON.stringify(data));
      console.log(this.user.profilePic)
    })
  }

}
