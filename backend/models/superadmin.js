const mongoose=require("mongoose");
require("dotenv/config");
mongoose.connect(process.env.DB_URL);
const superadminSchema=new mongoose.Schema({
    superadminid:{
        type:String,
        required:true,
       
    },
    superadminname:{
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

var superadminData=mongoose.model("SuperAdminData",superadminSchema);
module.exports=superadminData;