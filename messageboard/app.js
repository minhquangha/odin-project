const express = require('express');
const app = express();
const path = require( 'path');
require('dotenv').config();
const PORT = process.env.PORT;
app.use(express.urlencoded({extended:true}));
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: new Date()
    },
    {
        text: 'Hello World',
        user: 'Charles',
        added: new Date()
    }
];
app.get('/', (req, res) => {
    res.render("index", {title: "Mini Messageboard",messages: messages});
});

app.post('/new', (req,res)=>{
    const mes = req.body.message;
    const user = req.body.name;
    messages.push({text: mes, user: user, added: new Date()});
    console.log(messages);
    res.redirect('/');
})

app.get('/new', (req, res) => {
    res.render('form')
});
app.listen(PORT, (req, res) => {
    console.log('my first app');
});
