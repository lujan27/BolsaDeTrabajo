const { count } = require("../models/vacantModel");
const vacantModel = require("../models/vacantModel");
const imgProfileModel = require("../models/imgProfileModel");
const { unlink } = require('fs-extra');
const path = require('path');

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

userCtrl.addImg = async (req, res) => {
    console.log(req.file);

    const imgProfile = new imgProfileModel({
        filename: req.file.filename,
        path: '/img/uploads/' + req.file.filename,
        originalname: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size,
        userprofile: req.user._id
    });
    await imgProfile.save();    
    
    req.flash('success_msg', 'Foto agregada');
    res.redirect('/profile/'+req.user._id);
}

userCtrl.updateImg = async (req, res) => {
    //Obtenemos las propiedades de la imagen actual
    const img = await imgProfileModel.findOne({userprofile: req.user._id});
    //Eliminamos la imagen actual
    await unlink(path.resolve('./src/public'+img.path));
    //Actualizamos la informacion y la nueva imagen
    await imgProfileModel.findByIdAndUpdate(req.params.id, {
        filename: req.file.filename,
        path: '/img/uploads/' + req.file.filename,
        originalname: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size,
        userprofile: req.user._id
    });

    req.flash('success_msg', 'Foto actualizada');
    res.redirect('/profile/'+req.user._id);
}

userCtrl.deleteImg = async (req, res) => {
    const imgDelete = await imgProfileModel.findByIdAndDelete(req.params.id)
    await unlink(path.resolve('./src/public'+imgDelete.path))

    req.flash('success_msg', 'Foto Eliminada');
    res.redirect('/profile/'+req.user._id);
}

module.exports = userCtrl;