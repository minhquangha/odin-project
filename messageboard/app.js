const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT
app.get("/",(req,res)=>{
    res.send("Hello");
})
console.log(PORT);
app.listen(PORT,(req,res)=>{
    console.log("my first app");
})