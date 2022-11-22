const vacantModel = require("../models/vacantModel");

const userCtrl = {};

userCtrl.getUserHome = async (req, res) => {
    const vacants = await vacantModel.find({area:req.user.area});

    res.render('user/userHome', {
        doc_title: 'Usuario',
        vacants
    })
}

module.exports = userCtrl;