const adminCtrl = {}

adminCtrl.getAdminHome = async (req, res) => {
    res.render('admin/admin', {
        doc_title: 'Administrador'
    })
}

module.exports = adminCtrl;