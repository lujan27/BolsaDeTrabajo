const express = require('express');
const router = express.Router();

const adminCtrl = require('../controllers/adminCtrl');

    router
    
.get('/admin', adminCtrl.getAdminHome)

module.exports = router;