const express = require("express");
const UserData = require("../models/user");
const PostData=require("../models/post");
const router = express.Router();
const jwt = require("jsonwebtoken");
const multer=require("multer");
const { ObjectId } = require('mongodb');
const validator=require("express-validator");
const { ConnectionStates } = require("mongoose");
const Axios=require('axios');
// const ObjectID = require('mongodb').ObjectID;
// const upload=multer({
//   dest:'public/images/'
// })
// const imageStorage = multer.diskStorage({
//   // Destination to store image     
//   destination: 'images', 
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '_' + Date.now() 
//            + path.extname(file.originalname))
//           // file.fieldname is name of the field (image)
//           // path.extname get the uploaded file extension
//   }
// });

// const imageUpload = multer({
//   storage: imageStorage,
//   limits: {
//     fileSize: 1000000 // 1000000 Bytes = 1 MB
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(png|jpg)$/)) { 
//        // upload only png and jpg format
//        return cb(new Error('Please upload a Image'))
//      }
//    cb(undefined, true)
// }
// }) 

// const {check, checkSchema, validationResult} = require('express-validator');

router.get('/users',function(req,res){
    console.log("inside app.js /users");
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    UserData.find().then(function(users){
      console.log(users)
        res.send(users);
        
    })
    });

router.post("/userlogin",(req,res)=>{
console.log("inside app.js")
email=req.body.email;
password=req.body.password;
let paylaod={subject:email+password};
    let token=jwt.sign(paylaod,'secretKey');
    console.log(token)
res.status(200).send({token});
});

router.get('/getuserbyemail/:email',function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log("the gen id is as follows:"+req.params.email)
    var query = { "email": req.params.email };
 
    UserData.find(query).then(function(user){
      console.log(user);
    
      res.send(user);
  });
    }); 


router.get('/getuserbyname/:username',  (req, res) => {
    const username = req.params.username;
    console.log(username)
    
   
    console.log("inside /getemp");
      res.header("Access-Control-Allow-Origin","*");
      res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
      
      UserData.findOne({"username":username})
      .then((user)=>{
          res.send(user);
      });
    
  });
  

  router.get('/getpostsbyname/:username',  (req, res) => {
    const username = req.params.username;
    console.log(username)
    
   
    console.log("inside /getemp");
      res.header("Access-Control-Allow-Origin","*");
      res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
      
      PostData.find({"username":username})
      .then((posts)=>{
          res.send(posts);
      });
    
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

router.post('/insertuser',function(req,res){

res.header("Access-Control-Allow-Origin","*");
res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');

var splits=req.body.user.profilePic.split(['fakepath\\']);
const imageUrl='http://localhost:3000/images/'+splits[1];
var user={
    userid:ObjectId(),
    username:req.body.user.username,
    email:req.body.user.email,
    password : req.body.user.password,
    profilePic:imageUrl,
   
    }

var user=new UserData(user);
console.log("details are"+user);
user.save(); 
});   


router.put('/update',(req,res)=>{
    console.log("this is",req.body);
    
    
    userid=req.body.userid,
    username= req.body.username,
    email = req.body.email,
    password = req.body.password,
    profilePic = req.body.profilePic
    var query = { "userid": userid };
  UserData.updateOne({query},{$set:{
    "username":req.body.username,
    "email":req.body.email,
    "password":req.body.password,
    "profilePic":req.body.profilePic,
   }}).then(function(){
   console.log("hi")
      res.send();
  });
  
  });   
  router.put('/editpost/:id',(req,res)=>{
    console.log("this is",req.body);
    
    
   
    title= req.body.post.title,
    desc = req.body.post.desc,
    photo = req.body.post.photo,
    username = req.body.post.username,
    category=req.body.post.category,
    createdAt=req.body.post.createdAt,
    updatedAt=req.body.post.updatedAt
    var query = { postid: "postid" };
    
   
    // var query = { "postid": postid };
  PostData.updateOne({ "_id":req.params.id },{$set:{
    
    "title":req.body.post.title,
    "desc":req.body.post.desc,
    "photo":req.body.post.photo,
    "category":req.body.post.category,
    "updatedAt":Date.now()
   }},{ upsert: true }).then(function(){
   console.log("hi")
      res.send();
  });
  
  });  
  


  router.delete('/removePost/:id',(req,res)=>{
   
    id = req.params.id;
    PostData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  });

  router.delete('/removeuser/:id',(req,res)=>{
   
    id = req.params.id;
    UserData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  });


  
// const Storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "../public/uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null,file.fieldname+'-'+Date.now()+'.png');
//   },
// });
// upload = multer({ storage:Storage }).single('file');
// router.post('/uploadImage', imageUpload.single('image'), (req, res) => {
//   console.log("kitty",req.file)
//   res.send(req.file)
// }, (error, req, res, next) => {
//   res.status(400).send({ error: error.message })
// })

router.post('/createpost/:postFile',function(req,res){
console.log("inside createpost")
res.header("Access-Control-Allow-Origin","*");
res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
// const imageUrl='http://localhost:3000/images/'+req.file.filename;

console.log()
var post={
    postid:ObjectId(),
    title:req.body.title,
    desc:req.body.desc,
    photo : req.params.postFile,
    username:req.body.username,
    category:req.body.category,
    createdAt:Date.now(),
    updatedAt:Date.now()
    
}

var post=new PostData(post);
console.log("details are"+post);
post.save(); 
});

const storage=multer.diskStorage({
  destination:'./images',
  filename:function(req,file,cb){
    cb(null,file.originalname)
  }
})
const upload=multer({storage:storage});

// +file.mimetype.split('/')[1];
// Axios.get("http://192.168.1.192:5000/postFile",{responseType:'arraybuffer'}).then((response)=>{
//       const buffer = Buffer.from(response.data,'binary').toString('base64');
//       console.log(buffer);
//       // setProfilePic(buffer);
//     });
 

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


  

router.post('/',upload.single('file'),(req,res)=>{
  res.send(req.file);
  });

  
  // app.get('/viewfile/:name', function (req, res, next) {
  //   var options = {
  //     root: path.join(__dirname, 'uploads'),
  //     dotfiles: 'deny',
  //     headers: {
  //       'x-timestamp': Date.now(),
  //       'x-sent': true
  //     }
  //   }
  
  //   var fileName = req.params.name
  //   res.sendFile(fileName, options, function (err) {
  //     if (err) {
  //       next(err)
  //     } else {
  //       console.log('Sent:', fileName)
  //     }
  //   })
  // })

module.exports=router;

