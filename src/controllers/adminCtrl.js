const adminCtrl = {}

const userModel = require('../models/userModel');

adminCtrl.getAdminHome = async (req, res) => {
    res.render('admin/admin', {
        doc_title: 'Administrador'
    })
}

adminCtrl.getUsers = async (req, res) => {
    const usuarios = await userModel.find();
    res.render('admin/users', {
        doc_title: 'Usuarios',
        usuarios
    })
}
module.exports = adminCtrl;