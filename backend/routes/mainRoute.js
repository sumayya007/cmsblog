const express = require("express");
const UserData = require("../models/user");
const PostData=require("../models/post");
const AdminData=require("../models/admin");
const CategoryData=require("../models/category");
const router = express.Router();
const jwt = require("jsonwebtoken");
const multer=require("multer");
const { ObjectId } = require('mongodb');

router.get('/getposts',function(req,res){
    console.log("inside app.js /posts");
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    PostData.find().then(function(posts){
        console.log("helo")
        res.send(posts);
        
    })
    }); 

module.exports=router;