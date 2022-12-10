import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ElementRef,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
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
  constructor(private http:HttpClient,private router:Router,private userService:UserServiceService) { }

  ngOnInit(): void {
   
  }
  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
        console.log(this.url)
        
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  upload(fakepath: any){
    console.log("heloo")
    var splits=fakepath.split(['fakepath\\']);
    alert(splits[1]);
    localStorage.setItem("imgLink",splits[1])
    }
onFileUpload(){
  const imageBlob=this.fileInput.nativeElement.files[0];
  const file=new FormData();
  file.set('file',imageBlob);
  
  this.http.post('http://localhost:3000/user/',file).subscribe(response=>{
  const postFile=response;
    console.log("postfile",postFile);
   localStorage.setItem("postFile",JSON.stringify(postFile));
  });
}

userPost(post:any){
const imgFile= localStorage.getItem("postFile");

  console.log(post.photo)
  console.log(this.post)
 
   this.userService.userCreatePost(post);
   alert("Your Post has been published successfully!!");
   this.router.navigate(["/user-home"])
}
}
