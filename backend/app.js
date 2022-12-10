const bodyparser = require("body-parser");
const cors = require("cors");
const express = require("express");
const jwt = require("jsonwebtoken");
const path = require("path");

const expressvalidator=require("express-validator");
const usertRoute = require("./routes/userRoute");
const ejsLayouts=require("express-ejs-layouts");
const adminRoute = require("./routes/adminRoute");
const superadminRoute = require("./routes/superadminRoute");
const mainRoute=require("./routes/mainRoute");

const PORT = process.env.PORT || 3000;
const app = new express();
app.set('viewengine','ejs')
app.use(ejsLayouts);
app
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
const fs=require('fs');
 app.use("/images",express.static(path.join(__dirname+"/images")));
// app.use("/uploads", express.static(path.join("/backend/uploads"))); 
// app.use(express.static('public')); 
// app.use(express.static(path.join(__dirname, 'images')));
// app.use('/images', express.static('images'));
// app.use(express.static(`${__dirname}/public`));
app.use("/user",usertRoute);
app.use("/admin",adminRoute);
app.use("/superadmin",superadminRoute);
app.use("/main",mainRoute);

app.listen(PORT, () => {
  console.log(`listening to ${PORT}`);
});
