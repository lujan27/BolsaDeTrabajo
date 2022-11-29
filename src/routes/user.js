const express = require('express');
const router = express.Router();

const indexCtrl = require('../controllers/indexCtrl');
const userCtrl = require('../controllers/userCtrl');
const actionsCtrl = require('../controllers/actionsCtrl');

    router

.get('/vacants/:page', userCtrl.getUserHome)

.get('/profile/:id', indexCtrl.userProfile)

.put('/profile-presentation/:id', indexCtrl.editPresentation)

.put('/profile-editInfo/:id', actionsCtrl.editUser)

.post('/profile-lang/:id', indexCtrl.addLang)

module.exports = router;