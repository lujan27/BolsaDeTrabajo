const express = require('express');
const router = express.Router();

const adminCtrl = require('../controllers/adminCtrl');

    router
    
.get('/admin', adminCtrl.getAdminHome)

.get('/admin/usuarios', adminCtrl.getUsers)

module.exports = router;