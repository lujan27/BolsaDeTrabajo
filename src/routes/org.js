const express = require('express');
const router = express.Router();

const orgCtrl = require('../controllers/orgCtrl');
const actionsCtrl = require('../controllers/actionsCtrl');

    router

.get('/org', orgCtrl.getOrgHome)

.post('/org/addvacant', actionsCtrl.postNewVacant)

.put('/org/editvacant/:id', actionsCtrl.editVacant)

.delete('/org/deletevacant/:id', actionsCtrl.deleteVacants)

module.exports = router;