const express = require('express');
const app = express();
const path = require('path');
const assetsPath=path.join(__dirname,"public");
app.use(express.static(assetsPath));

app.set("views" , path.join(__dirname,"views"));
app.set("view engine" , "ejs" );
const users = ["Rose", "Cake", "Biff"];

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];
app.get("/",(req,res)=>{
    res.render("index",{links:links, users: users});
})

app.get("/about",(req,res)=>{
    res.render("about",{links:links});
})




app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});