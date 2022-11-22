const adminCtrl = {}

const vacantModel = require('../models/vacantModel');

adminCtrl.getAdminHome = async (req, res) => {
    const vacants = await vacantModel.find();    

    res.render('admin/admin', {
        doc_title: 'Administrador',
        vacants
    })
}

module.exports = adminCtrl;