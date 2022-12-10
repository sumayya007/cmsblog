import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  admins: any;

  constructor(private _router:Router,private userService:UserServiceService) { }

  ngOnInit(): void {
    
    this.userService.getAdminByName().subscribe((data:any)=>{
      this.admins=JSON.parse(JSON.stringify(data));
    })
  }
  logout(){
    localStorage.removeItem('token');
     this._router.navigate(['/admin-login']);
  }
}
