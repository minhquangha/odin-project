const passport = require('passport');
const db = require('../db/queries');
const bcrypts = require('bcryptjs');
const LocalStrategy  = require('passport-local').Strategy;

passport.use(
    new LocalStrategy(async (username, password, done) => {
        try {
            const user = await db.findUserByUserName(username);
            if (!user) {
                return done(null, false, { message: 'Incorect username' });
            }
            const match = await bcrypts.compare(password, user.password);
            if (!match) {
                return done(null, false, { message: 'Incorect password' });
            }
            return done(null, user);
        } catch (error) {
            return done(error);
        }
    })
);

passport.serializeUser((user,done)=>{
    done(null,user.id);
});

passport.deserializeUser(async (id,done)=>{
    try{
        const user =  await db.findUserById(id);
        return done(null,user);
    }catch(error){
        done(error);
    }
})
module.exports=passport;