const userCtrl = {};

userCtrl.getUserHome = async (req, res) => {
    res.render('user/userHome', {
        doc_title: 'Usuario'
    })
}

module.exports = userCtrl;