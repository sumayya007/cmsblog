import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-superadminheader',
  templateUrl: './superadminheader.component.html',
  styleUrls: ['./superadminheader.component.css']
})
export class SuperadminheaderComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('token');
     this._router.navigate(['/superadmin-login']);
  }
}
