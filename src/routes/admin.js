const express = require('express');
const router = express.Router();

const adminCtrl = require('../controllers/adminCtrl');
const actionsCtrl = require('../controllers/actionsCtrl');

    router
    
.get('/admin', adminCtrl.getAdminHome)

.get('/admin/usuarios', actionsCtrl.getUsers)

.post('/admin/addvacant', actionsCtrl.postNewVacant)

.delete('/admin/deletevacant/:id', actionsCtrl.deleteVacants)

.put('/admin/editvacant/:id', actionsCtrl.editVacant)

.delete('/admin/deleteuser/:id', actionsCtrl.deleteUser)

.put('/admin/edituser/:id', actionsCtrl.editUser)

module.exports = router;