const mongoose = require("mongoose");
const dotenv=require('dotenv')
dotenv.config();

const url=process.env.MONGODB;

mongoose
 .connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 })
 .then((db) => console.log("DB Connected"))
 .catch((err) => console.log(err));

 module.exports=mongoose;
