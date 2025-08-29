const path = require('node:path');
const { Pool } = require('pg');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const { error } = require('node:console');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require( 'bcryptjs');
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'top_users',
    password: '30082005',
    port: 5432
});
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({ secret: 'cats', resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', { user: req.user });
});
app.get('/sign-up', (req, res) => res.render('sign-up-form'));
app.post('/sign-up', async (req, res, next) => {
    try {
        const hashedPassword =await bcrypt.hash(req.body.password, 10);
        await pool.query('insert into users (username, password) values ($1,$2)', [req.body.username, hashedPassword]);
        res.redirect('/');
    } catch (err) {
        return next(err);
    }
});

app.get('/log-out', (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

passport.use(
    new LocalStrategy(async (username, password, done) => {
        try {
           const { rows } = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
            const user = rows[2];
            console.log(user);
            if (!user) {
                console.log('false1');
                return done(null, false, { message: 'Incorrect username' });
            }
            const match = await bcrypt.compare(password, user.password);
            if (!match) {
                console.log('false 2');
                return done(null, false, { message: 'Incorect password' });
            }
            console.log('done');
            return done(null, user);
        } catch (err) {
            return done(err);
        }
    })
);

passport.serializeUser((user, done) => {
    console.log(user.id);
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        console.log(id);
        const results = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
        console.log(results);
        const user = results.rows[0];
        console.log(user);
        done(null, user);
    } catch (err) {
        done(err);
    }
});

app.post('/log-in', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/' }));

app.get('/log-in',(req,res)=>{
    res.render('log-in-forms');
})

app.listen(3000, (error) => {
    if (error) {
        throw error;
    }
    console.log('app listening on port 3000');
});
