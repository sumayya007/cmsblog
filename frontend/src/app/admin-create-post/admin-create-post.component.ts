import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import {ElementRef,ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-create-post',
  templateUrl: './admin-create-post.component.html',
  styleUrls: ['./admin-create-post.component.css']
})
export class AdminCreatePostComponent implements OnInit {
  @ViewChild('fileInput', { static: false })
  fileInput!: ElementRef;
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
  
  postFile={
    "fieldname":"",
    "originalname":"",
    "encoding":"",
    "mimetype":"",
    "destination":"",
    "filename":"",
    "path":"",
    "size":""
  }
  url: string | ArrayBuffer | null;

  category={
    categoryid:'',
    categoryname:'',
    adminname:''
    
  }
  categories: any;

  constructor(private userService:UserServiceService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.userService.adminGetCategoriesList().subscribe((data: any)=>{
    
  
      this.categories=JSON.parse(JSON.stringify(data));
      console.log("list of categories",this.categories);})
    }

  onFileUpload(){
    const imageBlob=this.fileInput.nativeElement.files[0];
    const file=new FormData();
    file.set('file',imageBlob);
    
    this.http.post('http://localhost:3000/admin/',file).subscribe(response=>{
    const postFile=response;
      console.log("postfile",postFile);
      localStorage.setItem("postFile",JSON.stringify(postFile));
    });
  }
    
adminPost(post:any){
const imgFile= localStorage.getItem("postFile");

  console.log(post.photo)
  console.log(this.post)
  
    this.userService.adminCreatePost(post);
    alert("Your Post has been published successfully!!");
    this.router.navigate(["/admin-home"])
}
}
