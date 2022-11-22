const express = require('express');
const router = express.Router();
const indexCtrl = require('../controllers/indexCtrl');

    router

.get('/out', indexCtrl.sessionOut)

.get('/', indexCtrl.indexPage)

.get('/signup', indexCtrl.indexPage)

.post('/signup', indexCtrl.signUp)

.post('/signin', indexCtrl.signIn)

module.exports = router;