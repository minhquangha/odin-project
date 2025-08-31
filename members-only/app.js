const express = require( 'express');
const app = express();
const path = require('path');
const signupRouter= require('./routes/sign-up');
const loginRouter = require('./routes/log-in')

// using ejs
app.set('views' , path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//middleware for parsing data from form
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//using router
app.use('/sign-up',signupRouter);
app.use('/log-in',loginRouter);

app.get('/', (req,res)=>{
    res.send('ok');
})

app.listen(3000, (error)=>{
    if(error){
    throw error;
    }
    console.log('app listening on port 3000');

})