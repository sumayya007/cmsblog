const mongoose=require("mongoose");
require("dotenv/config");
mongoose.connect(process.env.DB_URL);
const adminSchema=new mongoose.Schema({
    adminid:{
        type:String,
        required:true,
       
    },
    adminname:{
        type:String,
        required:true,
       
    },
    email:{
        type:String,
        required:true,
         
    },
    password:{
        type:String,
        required:true,
    },
    profilePic:{
        type:String,
        default:"",
    }
}
);

var adminData=mongoose.model("AdminData",adminSchema);
module.exports=adminData;