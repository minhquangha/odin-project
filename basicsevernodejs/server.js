const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname,'static')));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static/index.html'));
})

app.get('/about',(req,res)=>{res.sendFile(path.join(__dirname,'static/about.html'))});

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});