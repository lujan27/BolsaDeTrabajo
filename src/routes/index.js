const express = require('express');
const router = express.Router();
const passport = require('passport');
const indexCtrl = require('../controllers/indexCtrl');

    router

.get('/out', indexCtrl.sessionOut)

.get('/', indexCtrl.indexPage)

.get('/signup', indexCtrl.indexPage)

.post('/signup', indexCtrl.signUp)

.post('/signin', passport.authenticate('local', {
    failureRedirect: '/',
    failureFlash: true
}), (req, res) => {
    switch(req.user.role){
        case 1:
            res.redirect('/vacants/1');
            break;
        case 2:
            res.redirect('/org');
            break;
        case 3:
            res.redirect('/admin');
            break;
        default:
            req.flash('success_msg', 'Bienvenido '+req.user.username);
            res.redirect('/');            
            break
    }
})

module.exports = router;