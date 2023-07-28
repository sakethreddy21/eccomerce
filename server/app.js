require("dotenv").config();
require("./db/connection")
const express= require("express");
const app = express();
const Products= require("./models/productSchema")
const DefaultData = require('./defaultdata')
const mongoose = require("mongoose");
const cors= require("cors");
const router= require('./routes/router')
app.use(express.json());
app.use(cors());
app.use(router)
const port =8005;
app.listen(port, ()=>{
  console.log(`sever is running on port number ${port}`)
});

DefaultData();