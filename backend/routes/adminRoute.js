const express = require("express");
const UserData = require("../models/user");
const PostData=require("../models/post");
const AdminData=require("../models/admin");
const CategoryData=require("../models/category");
const router = express.Router();
const jwt = require("jsonwebtoken");
const multer=require("multer");
const { ObjectId } = require('mongodb');

const storage=multer.diskStorage({
  destination:'./images',
  filename:function(req,file,cb){
    cb(null,file.originalname)
  }
})
const upload=multer({storage:storage});

router.post('/createPost',function(req,res){

 
  res.header("Access-Control-Allow-Origin","*");
  res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
 
// var imgPath=req.body.post.photo.replace("C:\\fakepath\\", "../public/images/");
var splits=req.body.post.photo.split(['fakepath\\']);
const imageUrl='http://localhost:3000/images/'+splits[1];
// console.log("the img object",req.params.imgFile.path)
  var post={
      postid:ObjectId(),
      title:req.body.post.title,
      desc:req.body.post.desc,
      photo : imageUrl,
      username:req.body.post.username,
      category:req.body.post.category,
      createdAt:Date.now(),
      updatedAt:Date.now()
      
  }
  console.log("post details are",req.body.post)
  var post=new PostData(post);
  console.log("details are"+post);
  post.save(); 
  });  

  router.get('/getpostsbyid/:postid',  (req, res) => {
    const postid = req.params.postid;
    
   
    console.log("inside getpostbyid");
      res.header("Access-Control-Allow-Origin","*");
      res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
      
      PostData.findOne({"_id":postid})
      .then((post)=>{
          res.send(post);
      });
    
  });
  router.get('/getcategorybyid/:id',  (req, res) => {
    const catid = req.params.id;
    
   
    console.log("inside getcategorybyid");
      res.header("Access-Control-Allow-Origin","*");
      res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
      
      CategoryData.findOne({"_id":catid})
      .then((category)=>{
          res.send(category);
      });
    
  });

router.post('/',upload.single('file'),(req,res)=>{
  res.send(req.file);
  });

router.get('/admins',function(req,res){
    console.log("inside app.js /admins");
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    AdminData.find().then(function(admins){
        res.send(admins);
        
    })
    });



router.get('/getusers',function(req,res){
  console.log("inside app.js /users");
  res.header("Access-Control-Allow-Origin","*");
  res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
  UserData.find().then(function(users){
      res.send(users);
      
  })
  });    

  router.get('/getposts',function(req,res){
    console.log("inside app.js /posts");
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    PostData.find().then(function(posts){
        res.send(posts);
        
    })
    }); 

router.post("/adminlogin",(req,res)=>{
    console.log("inside app.js /adminlogin")
    email=req.body.email;
    password=req.body.password;
    let paylaod={subject:email+password};
        let token=jwt.sign(paylaod,'secretKey');
        console.log(token)
    res.status(200).send({token});
    });    

    router.get('/getadminbyemail/:email',function(req,res){
        res.header("Access-Control-Allow-Origin","*");
        res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
        console.log("the gen id is as follows:"+req.params.email)
        var query = { "email": req.params.email };
     
        AdminData.find(query).then(function(admins){
          console.log("ADMIN DATA",admins);
        
          res.send(admins);
      });
        }); 
        router.get('/getadminbyname/:username',function(req,res){
          res.header("Access-Control-Allow-Origin","*");
          res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
          
          var query = { "adminname": req.params.username };
       
          AdminData.find(query).then(function(admins){
            console.log("ADMIN DATA",admins);
          
            res.send(admins);
        });
          }); 
router.post('/createcategory/:adminName',function(req,res){

console.log("inside createpost")
res.header("Access-Control-Allow-Origin","*");
res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');


var category={

    categoryid:ObjectId(),
    categoryname:req.body.category.categoryname,
    adminname:req.params.adminName

}

var category=new CategoryData(category);
console.log("details are"+category);
category.save(); 
});    

router.get('/getcategorybyname/:username',  (req, res) => {
    const adminname = req.params.username;

    
   
    console.log("inside /getadminbyname");
      res.header("Access-Control-Allow-Origin","*");
      res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
      
      CategoryData.find({"adminname":adminname})
      .then((categories)=>{
        console.log("list of categories ",categories);
          res.send(categories);
      });
    
  });


  // router.get('/getadminbyname/:adminname',  (req, res) => {
  //   const adminname = req.params.adminname;
  //   console.log(adminname)
    
   
  //   console.log("inside /getemp");
  //     res.header("Access-Control-Allow-Origin","*");
  //     res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
      
  //     AdminData.findOne({"adminname":adminname})
  //     .then((admin)=>{
  //         res.send(admin);
  //     });
    
  // });
  
  router.delete('/removeCat/:id',(req,res)=>{
   
    id = req.params.id;
    CategoryData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  }); 

  router.delete('/adminremoveuser/:id',(req,res)=>{
   
    id = req.params.id;
    UserData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  });
  router.delete('/adminremovepost/:id',(req,res)=>{
   
    id = req.params.id;
    PostData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  });

  router.delete('/adminremovecategory/:id',(req,res)=>{
   
    id = req.params.id;
    CategoryData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  });
 

  router.get('/getcategorybyid/:id',  (req, res) => {
    const catid = req.params.categoryid;
    
   
    console.log("inside getcatbyid");
      res.header("Access-Control-Allow-Origin","*");
      res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
      
      CategoryData.findOne({"_id":req.params.id})
      .then((category)=>{
          res.send(category);
      });
    
  });

  router.put('/editcategory',(req,res)=>{
    // console.log("this is",req.params.id);
    // const catid=req.params.id;
   
    categoryid=req.body.categoryid,
    categoryname= req.body.categoryname,
    adminname = req.body.adminname
 
    var query = { "categoryid":categoryid};
  CategoryData.updateOne({query},{$set:{
    "categoryid":req.body.categoryid,
     "categoryname":req.body.categoryname,
    "adminname":req.body.adminname
 

   }}).then(function(){
    console.log("hi")
      res.send();
      
  });
  
  
  }); 

  router.delete('/removeadmin/:id',(req,res)=>{
   
    id = req.params.id;
    AdminData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  });
//   router.put('/updateadmin',(req,res)=>{
//     console.log("this is",req.body);
    
    
//     adminid=req.body.adminid,
//     adminname= req.body.adminname,
//     email = req.body.email,
//     password = req.body.password,
//     profilePic = req.body.profilePic
//     var query = { "adminid": adminid };
//   AdminData.updateOne({query},{$set:{
//     "adminname":req.body.adminname,
//     "email":req.body.email,
//     "password":req.body.password,
//     "profilePic":req.body.profilePic,
//    }}).then(function(){
//    console.log("hi")
//       res.send();
//   })
// });

router.get('/getcategories',function(req,res){
  console.log("inside app.js /posts");
  res.header("Access-Control-Allow-Origin","*");
  res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
  CategoryData.find().then(function(categories){
      res.send(categories);
      
  })
  }); 

  router.put("/updateadmin/:id", (req, res, next)=>{  
    // console.log("img url is",req.body.profilePic);
    // var splits=req.body.profilePic.split(['fakepath\\']);
    // const imageUrl='http://localhost:3000/images/'+splits[1];
    
    
    adminid=req.body.adminid,
    adminname=req.body.adminname,
    email=req.body.email,
    password=req.body.password,
    profilePic=req.body.profilePic
    
    
    console.log("hiii admin");
    var admin=new AdminData(admin);
     admin = {  
      _id: req.body.id,  
      adminname:req.body.adminname,
      email:req.body.email,
      password : req.body.password,
      profilePic:req.body.profilePic
     
    };  
    AdminData.updateOne({_id:req.params.id}, admin).then(result =>{  
      console.log("result",result);  
      res.status(200).json({message: "Update Successful!"})  
    });    
  });  


  router.put("/admineditpost/:id", (req, res, next)=>{  
    console.log("img url is",req.body.photo);
    var splits=req.body.photo.split(['fakepath\\']);
    console.log("splits",splits[0]);
    
    
    postid=req.body.postid,
    title=req.body.title,
    desc=req.body.desc,
    photo=splits[0],
    username=req.body.username,
    category=req.body.category
    
    console.log("hiii");
    var post=new PostData(post);
     post = {  
      _id: req.body.id,  
      title:req.body.title,
      desc:req.body.desc,
      photo : splits[0],
      username:req.body.username,
      category:req.body.category,
      createdAt:Date.now(),
      updatedAt:Date.now() 
    };  
    PostData.updateOne({_id:req.params.id}, post).then(result =>{  
      console.log("result",result);  
      res.status(200).json({message: "Update Successful!"})  
    });    
  });  
  router.put("/admineditcategory/:id", (req, res, next)=>{  
  
    
    categoryid=req.body.categoryid,
    categoryname= req.body.categoryname,
    adminname = req.body.adminname
    
    console.log("hiii");
    var category=new CategoryData(category);
     category = {  
      categoryid:req.body.categoryid,
      categoryname:req.body.categoryname,
      adminname :req.body.adminname
    };  
   CategoryData.updateOne({_id:req.params.id}, category).then(result =>{  
      console.log("result",result);  
      res.status(200).json({message: "Update Successful!"})  
    });    
  });  



module.exports=router;    