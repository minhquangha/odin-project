const express = require('express');
const router = express.Router();
const {body} = require('express-validator');

router.get('/',(req,res)=>{
    res.render('log-in-forms');
})

router.post('/',(req,res)=>{
    [body('username').isEmail().withMessage('Username has @ type')];
    try{
        const {username,password} = req.body;

    }catch(error){

    }
})

module.exports=router;