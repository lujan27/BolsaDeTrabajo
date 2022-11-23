const vacantModel = require("../models/vacantModel")
const userModel = require("../models/userModel")

const encrypt = require('../controllers/encryptCtrl');

const actionsCtrl = {}

actionsCtrl.deleteVacants = async (req, res) => {
    await vacantModel.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Vacante eliminada');    

    switch(req.user.role){
        case 2:
            res.redirect('/org');
            break;
        case 3:
            res.redirect('/admin');
            break;
    }
}

actionsCtrl.postNewVacant = async (req, res) => {    
    var {title, position, scheduleIn, timeIn, scheduleOut, timeOut, salary, description, area} = req.body;

    if(position == ''){
        position = "No especificado";
    }
    if(salary==null || salary ==''){
        salary = "No especificado";
    }
    
    var In = scheduleIn + " " + timeIn;
    var Out = scheduleOut + " " + timeOut;
    
    const newVacant = new vacantModel({
        title, 
        position, 
        scheduleIn: In, 
        scheduleOut: Out, 
        salary, 
        description, 
        area,
        createdby: req.user.username
    });
    await newVacant.save();
    req.flash('success_msg', 'Vacante registrada: '+title);

    switch(req.user.role){
        case 2:
            res.redirect('/org');
            break;
        case 3:
            res.redirect('/admin');
            break;
    }
    
}

actionsCtrl.editVacant = async (req, res) => {
    var {title, position, scheduleIn, timeIn, scheduleOut, timeOut, salary, description, area} = req.body;
    if(position == ''){
        position = "No especificado";
    }
    if(salary == null || salary == ''){
        salary = "No especificado";
    }

    var In = scheduleIn + " " + timeIn;
    var Out = scheduleOut + " " + timeOut;

    await vacantModel.findByIdAndUpdate(req.params.id, {
        title, 
        position, 
        scheduleIn: In, 
        scheduleOut: Out, 
        salary, 
        description, 
        area,
        createdby: req.user.username
    });
    req.flash('success_msg', 'Vacante actualizada');

    switch(req.user.role){
        case 2:
            res.redirect('/org');
            break;
        case 3:
            res.redirect('/admin');
            break;
    }
}

actionsCtrl.getUsers = async (req, res) => {
    const usuarios = await userModel.find();
    res.render('admin/users', {
        doc_title: 'Usuarios',
        usuarios
    })
}

actionsCtrl.deleteUser = async(req, res) => {
    await userModel.findByIdAndDelete(req.params.id)
    req.flash('success_msg', 'Usuario eliminado!')
    res.redirect('/admin/usuarios')
}

actionsCtrl.editUser = async (req, res) => {
    var {name, lastname, phone, birth, area, username, email, password, role} = req.body;    
        password = await encrypt.encryptPassword(password);
        await userModel.findByIdAndUpdate(req.params.id, {name, lastname, phone, birth, area, username, email, password, role})
        req.flash('success_msg', 'Usuario actualizado!')
        res.redirect('/admin/usuarios')     
}
module.exports = actionsCtrl;