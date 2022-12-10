const express = require("express");
const UserData = require("../models/user");
const PostData=require("../models/post");
const AdminData=require("../models/admin");
const CategoryData=require("../models/category");
const router = express.Router();
const jwt = require("jsonwebtoken");
const multer=require("multer");
const { ObjectId } = require('mongodb');

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
          console.log("the gen id is as follows:"+req.params.email)
          var query = { "username": req.params.username };
       
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


  router.get('/getadminbyname/:adminname',  (req, res) => {
    const adminname = req.params.adminname;
    console.log(adminname)
    
   
    console.log("inside /getemp");
      res.header("Access-Control-Allow-Origin","*");
      res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
      
      AdminData.findOne({"adminname":adminname})
      .then((admin)=>{
          res.send(admin);
      });
    
  });
  
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
  router.put('/updateadmin',(req,res)=>{
    console.log("this is",req.body);
    
    
    adminid=req.body.adminid,
    adminname= req.body.adminname,
    email = req.body.email,
    password = req.body.password,
    profilePic = req.body.profilePic
    var query = { "adminid": adminid };
  AdminData.updateOne({query},{$set:{
    "adminname":req.body.adminname,
    "email":req.body.email,
    "password":req.body.password,
    "profilePic":req.body.profilePic,
   }}).then(function(){
   console.log("hi")
      res.send();
  })
});

module.exports=router;    