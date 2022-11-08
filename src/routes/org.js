const express = require('express');
const router = express.Router();

const orgCtrl = require('../controllers/orgCtrl');

    router

.get('/org', orgCtrl.getOrgHome)

module.exports = router;