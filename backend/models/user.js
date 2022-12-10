const mongoose=require("mongoose");
require("dotenv/config");
mongoose.connect(process.env.DB_URL);
const userSchema=new mongoose.Schema({
    userid:{
        type:String,
        required:true,
       
    },
    username:{
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


var userData=mongoose.model("UserData",userSchema);
module.exports=userData;