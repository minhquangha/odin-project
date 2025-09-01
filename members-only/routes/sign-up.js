const express = require('express');
const signupController = require('../controllers/signupControllers');
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.get('/', (req, res) => {
    res.render('sign-up-forms');
});

router.post(
    '/',
    [
        body('email').isEmail().withMessage('Email is not valid'),
        body('password')
            .isLength({ min: 6 }) // nên là 6 chứ không phải 3
            .withMessage('Password must be at least 6 characters')
    ],
    async (req, res) => {
        // check lỗi validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { fullname, username, password } = req.body;
            await signupController.addUserController(fullname, username, password);

            console.log('done');
            res.redirect('/');
        } catch (error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    }
);

module.exports = router;
