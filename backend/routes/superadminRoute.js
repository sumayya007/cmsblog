const express = require("express");
const UserData = require("../models/user");
const PostData=require("../models/post");
const AdminData=require("../models/admin");
const CategoryData=require("../models/category");
const multer=require("multer");
const router = express.Router();
const jwt = require("jsonwebtoken");

const { ObjectId } = require('mongodb');

const storage=multer.diskStorage({
    destination:'./images',
    filename:function(req,file,cb){
      cb(null,file.originalname)
    }
  })
  const upload=multer({storage:storage});

router.post('/',upload.single('file'),(req,res)=>{
    res.send(req.file);
    });

router.post("/superadminlogin",(req,res)=>{
    console.log("inside app.js /superadminlogin")
    email=req.body.email;
    password=req.body.password;
    let paylaod={subject:email+password};
        let token=jwt.sign(paylaod,'secretKey');
        console.log(token)
    res.status(200).send({token});
    }); 


    router.get('/getusers',function(req,res){
        console.log("inside app.js /users");
        res.header("Access-Control-Allow-Origin","*");
        res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
        UserData.find().then(function(users){
            res.send(users);
            
        })
        }); 


router.delete('/superadminremoveuser/:id',(req,res)=>{

    id = req.params.id;
    UserData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
    });

router.delete('/superadminremoveadmin/:id',(req,res)=>{

id = req.params.id;
AdminData.findByIdAndDelete({"_id":id})
.then(()=>{
    console.log('success')
    res.send();
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

router.get('/getcategories',function(req,res){
    console.log("inside app.js /posts");
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    CategoryData.find().then(function(categories){
        res.send(categories);
        
    })
    }); 


    router.delete('/superadminremovepost/:id',(req,res)=>{
   
        id = req.params.id;
        PostData.findByIdAndDelete({"_id":id})
        .then(()=>{
            console.log('success')
            res.send();
        })
      });

      router.delete('/superadminremovecategory/:id',(req,res)=>{
   
        id = req.params.id;
        CategoryData.findByIdAndDelete({"_id":id})
        .then(()=>{
            console.log('success')
            res.send();
        })
      });


router.get('/admins',function(req,res){
console.log("inside app.js /admins");
res.header("Access-Control-Allow-Origin","*");
res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
AdminData.find().then(function(admins){
    res.send(admins);
    
})
});  

router.post('/insertadmin',function(req,res){

    // res.header("Access-Control-Allow-Origin","*");
    // res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    
    var splits=req.body.admin.profilePic.split(['fakepath\\']);
    const imageUrl='http://localhost:3000/images/'+splits[1];
    var admin={
        adminid:ObjectId(),
        adminname:req.body.admin.adminname,
        email:req.body.admin.email,
        password : req.body.admin.password,
        profilePic:imageUrl
       
    }
    var admin=new AdminData(admin);
    console.log("details are"+admin);
    admin.save(); 
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


module.exports=router;    