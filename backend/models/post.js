const mongoose=require("mongoose");
require("dotenv/config");
mongoose.connect(process.env.DB_URL);
const postSchema=new mongoose.Schema({
    postid:{
        type:String,
        required:true,
       
    },
    title:{
        type:String,
        required:true,
       
    },
   desc:{
        type:String,
        required:true,
         
    },
    photo:{
       
        type:String,
        required:true,
       
    },
    username:{
        type:String,
        required:true,
    },
    category:{
      
            type:String,
            required:true
    },
     createdAt:{
        type:Date,
        required:true
     },
    updatedAt:{
        type:Date,
        required:true
    }
}
);

var postData=mongoose.model("PostData",postSchema);
module.exports=postData;


// data: Buffer,
// contentType: String

