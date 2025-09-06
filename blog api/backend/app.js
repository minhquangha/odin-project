const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('okok');
})

app.listen(3000, (err)=>{
    if(err){
        throw err;
    }
    console.log('ok');
});