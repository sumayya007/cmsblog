import { Component, OnInit } from '@angular/core';
declare const hamburg: any;
@Component({
  selector: 'app-mainheader',
  templateUrl: './mainheader.component.html',
  styleUrls: ['./mainheader.component.css']
})
export class MainheaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    hamburg();
  }

}
