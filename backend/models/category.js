const mongoose=require("mongoose");
require("dotenv/config");
mongoose.connect(process.env.DB_URL);
const categorySchema=new mongoose.Schema({
    categoryid:{
        type:String,
        required:true
        
    },
    categoryname:{
        type:String,
        required:true,
      
    },
    adminname:{
        type:String,
        required:true,
       
    }
   
   
}
);


var categoryData=mongoose.model("CategoryData",categorySchema);
module.exports=categoryData;