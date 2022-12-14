const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userModel = require('../models/userModel');

passport.use(new LocalStrategy({
    usernameField: 'username'
}, async (username, password, done) => {
    const user = await userModel.findOne({username: username});
    if(!user){
        return done(null, false, {message: 'Usuario no encontrado'})
    } else {
        const match = await user.matchPassword(password);
        if(match){
            return done(null, user);
        } else {
            return done(null, false, {message: 'Contraseña incorrecta'});
        }
    }
}))

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    userModel.findById(id, (err, user) =>{
        done(err, user);
    })
})