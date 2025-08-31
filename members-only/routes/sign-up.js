const express = require('express');
const signupController = require('../controllers/signupControllers');
const router = express.Router();
const { body } = require('express-validator');

router.get('/', (req, res) => {
    res.render('sign-up-forms');
});
router.post('/', async (req, res) => {
    [body('email').isEmail().withMessage('Email is not valid'), body('password').isLength({ min: 3 }).withMessage('Password is at least 6 characters')];
    try {
        const { fullname, username, password } = req.body;
        await signupController.addUserController(fullname, username, password);
        console.log('done');
        res.redirect('/');
    } catch (error) {
        console.log(error);
        throw error;
    }
});

module.exports = router;
