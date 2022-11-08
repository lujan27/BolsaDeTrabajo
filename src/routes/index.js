const express = require('express');
const router = express.Router();
const passport = require('passport');

const userModel = require('../models/userModel');

    router

.get('/out', (req, res) => {
    req.session.destroy();
    res.redirect('/');
})

.get('/', (req, res) => {
    res.render('index', {
        doc_title: 'Inicio'
    })
})

.get('/signup', (req, res) => {
    res.render('index', {
        doc_title: 'Inicio'
    })
})

.post('/signup', async (req, res) => {
    const {username, email, password, confirmPassword, role} = req.body;
    let error = [];

    if(username.length <= 0){
        error.push('Digite su nombre');
    }
    if(email == ''){
        error.push('Digite su correo electrónico');
    }
    if(password != confirmPassword){
        error.push('Las contraseñas deben coincidir')
    }
    if(password.length <= 4){
        error.push('La contraseña debe tener más de 4 digitos')
    }
    if(role == ''){
        error.push('Tiene que seleccionar un tipo de cuenta');
    }
    if(error.length > 0){
        res.render('index', {
            error,
            username,
            email,
            doc_title: 'Inicio'
        })
    } else {
        const emailUnique = await userModel.findOne({email: email});
        const usernameUnique = await userModel.findOne({username: username});
        //console.log(emailUser);
        if(emailUnique != null){
            req.flash('danger_msg', 'El correo ya está registrado');
            res.redirect('/');
        } else if(usernameUnique != null) {
            req.flash('danger_msg', 'El usuario ya está registrado');
            res.redirect('/');
        }else {
            const newUser = new userModel({username, email, password, role});
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            req.flash('success_msg', 'Registro completado!');
            res.redirect('/');
        }
        
    }
})

.post('/signin', passport.authenticate('local', {
    failureRedirect: '/',
    failureFlash: true
}), (req, res) => {
    switch(req.user.role){
        case 1:
            res.redirect('/user');
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