const express = require('express');
const userController =  require('../controllers/signupControllers');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('sign-up-forms');
});
router.post('/',async (req,res)=>{
    try{
        const {fullname,username,password} = req.body;
        await userController.addUserController(fullname,username,password);
        console.log('done');
        res.redirect('/');
    }catch(error){
        console.log(error);
        throw error;
    }
});

module.exports = router;
