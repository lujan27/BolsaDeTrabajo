const { count } = require("../models/vacantModel");
const vacantModel = require("../models/vacantModel");

const userCtrl = {};

userCtrl.getUserHome = async (req, res, next) => {
    let perPage = 9;
    let page = req.params.page || 1;

    await vacantModel
        .find()
        .skip((perPage * page)-perPage)
        .limit(perPage)
        .exec((err, vacants) => {
            vacantModel.count((err, count) => {
                if(err) return next(err);
                res.render('user/userhome', {
                    doc_title: 'Vacantes',
                    vacants,
                    current: page, 
                    pages: Math.ceil(count / perPage)
                })
            })
        })
}

module.exports = userCtrl;