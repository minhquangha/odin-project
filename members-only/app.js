const express = require('express');
const app = express();
const path = require('path');
const signupRouter = require('./routes/sign-up');
const loginRouter = require('./routes/log-in');
const homeRouter = require('./routes/home');
const session = require('express-session');
const passport =require('./config/passport');

// using ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middleware for parsing data from form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// session middleware
app.use(
    session({
        secret: '1123',
        resave: false,
        saveUninitialized: false
    })
);
app.use(passport.initialize());//unown
app.use(passport.session());

//using router
app.use('/sign-up', signupRouter);
app.use('/log-in', loginRouter);
app.use('/home',homeRouter);

app.get('/', (req, res) => {
    res.send('ok');
});

app.listen(3000, (error) => {
    if (error) {
        throw error;
    }
    console.log('app listening on port 3000');
});
