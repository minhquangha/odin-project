const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const passport = require('../config/passport');

router.get('/', (req, res) => {
    res.render('log-in-forms');
});

router.post(
    '/',
    [body('username').isEmail().notEmpty().withMessage('Username must be a valid email'), body('password').notEmpty().withMessage('Password is required')],
    (req, res, next) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ error: error.array() });
        }
        next();
    },
    passport.authenticate('local', {
        successFlash: true,
        successRedirect: 'home',
        failureMessage: '/'
    })
);

module.exports = router;
