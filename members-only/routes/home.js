const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../utils/authenticate');
const createMessage = require('../controllers/createMessagesControllers');
const { getMessages } = require('../db/queries');

router.get('/', async (req, res) => {
    const messages = await getMessages();
    console.log(messages);
    res.render('home', {
        user: req.user,
        messages
    });
});

router.get('/create', ensureAuthenticated, (req, res) => {
    res.render('create-messages-form');
});
router.post('/create', ensureAuthenticated, async (req, res) => {
    const memberId = req.user.id;
    const { content } = req.body;
    createMessage(memberId, content);
    console.log('done');
    res.redirect('/');
});
module.exports = router;
