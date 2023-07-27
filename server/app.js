require("dotenv").config();
require("./db/connection")
const express= require("express");
const app = express();
const port =8005;
const mongoose = require("mongoose");
app.listen(port, ()=>{
  console.log(`sever is running on port number ${port}`)
})