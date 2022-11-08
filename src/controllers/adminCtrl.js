const adminCtrl = {}

const userModel = require('../models/userModel');
const vacantModel = require('../models/vacantModel');

adminCtrl.getAdminHome = async (req, res) => {
    const vacants = await vacantModel.find();    

    res.render('admin/admin', {
        doc_title: 'Administrador',
        vacants
    })
}

adminCtrl.getUsers = async (req, res) => {
    const usuarios = await userModel.find();
    res.render('admin/users', {
        doc_title: 'Usuarios',
        usuarios
    })
}

adminCtrl.postNewVacant = async (req, res) => {
    console.log(req.body);
    var {title, position, scheduleIn, timeIn, scheduleOut, timeOut, salary, description, area} = req.body;

    if(position == ''){
        position = "No especificado";
    }
    if(salary==null || salary ==''){
        salary = "No especificado";
    }
    
    var In = scheduleIn + " " + timeIn;
    var Out = scheduleOut + " " + timeOut;
    
    const newVacant = new vacantModel({title, position, scheduleIn: In, scheduleOut: Out, salary, description, area});
    await newVacant.save();
    req.flash('success_msg', 'Vacante registrada: '+title);
    res.redirect('/admin');

}
module.exports = adminCtrl;