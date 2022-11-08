const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/userCtrl');

    router

.get('/user', userCtrl.getUserHome)

module.exports = router;