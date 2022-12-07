const indexCtrl = {}

const experienceModel = require('../models/experienceModel');
const userModel = require('../models/userModel');

const moment = require('moment-timezone');
const schoolarModel = require('../models/schoolarModel');

indexCtrl.sessionOut = (req, res) => {
    req.session.destroy();
    res.redirect('/');
}

indexCtrl.indexPage = (req, res) => {
    res.render('index', {
        doc_title: 'Inicio'
    })
}

indexCtrl.signUp = async (req, res) => {
    const {username, email, password, area, role} = req.body;
    let error = [];

    if(username.length <= 0){
        error.push('Digite su nombre');
    }
    if(email == ''){
        error.push('Digite su correo electrónico');
    }
    if(area == ''){
        error.push('Tiene que seleccionar un área de trabajo')
    }
    if(password.length <= 4){
        error.push('La contraseña debe tener más de 4 digitos')
    }
    if(role == ''){
        error.push('Tiene que seleccionar un tipo de cuenta');
    }
    if(error.length > 0){
        res.render('index', {
            error,
            username,
            email,
            doc_title: 'Inicio'
        })
    } else {
        const emailUnique = await userModel.findOne({email: email});
        const usernameUnique = await userModel.findOne({username: username});
        //console.log(emailUser);
        if(emailUnique != null){
            req.flash('danger_msg', 'El correo ya está registrado');
            res.redirect('/');
        } else if(usernameUnique != null) {
            req.flash('danger_msg', 'El usuario ya está registrado');
            res.redirect('/');
        }else {
            const newUser = new userModel({username, email, password, area, role, presentation: ''});
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            req.flash('success_msg', 'Registro completado!');
            res.redirect('/');
        }
    }
}

indexCtrl.userProfile = async (req, res) => {

    const profile = await userModel.findById(req.params.id);

    const exp = await experienceModel.find({userID: req.user._id});

    const study = await schoolarModel.find({userStudyID: req.user._id});

    res.render('profile', {
        doc_title: 'Perfil de ' + req.user.username,
        profile,
        exp,
        study
    })
}

indexCtrl.editPresentation = async (req, res) => {
    const {presentation} = req.body

    await userModel.findByIdAndUpdate(req.params.id, {presentation})
    req.flash('success_msg', 'Presentación actualizada')
    res.redirect('/profile/'+req.params.id)
}

indexCtrl.addLang = async (req, res) => {
    
    let {language, level, langDelete} = req.body;

    let currentLang = await userModel.findById(req.params.id)
    
    console.log(langDelete);

    if(langDelete){

        let langsDeleted = currentLang.languages.filter(lang => lang != langDelete);

        console.log('Lenguajes restantes: '+ langsDeleted);

        await userModel.findByIdAndUpdate(req.params.id, {languages: langsDeleted});

        req.flash('success_msg', 'Idioma eliminado')
 
    }else{

        var languagesBody = language + " - " + level;
    
        currentLang.languages.push(languagesBody);

        let newLang = currentLang.languages;

        await userModel.findByIdAndUpdate(req.params.id, {languages: newLang})

        req.flash('success_msg', 'Idioma agregado')

        console.log('Lenguaje agregado: ' + newLang);
    }

    res.redirect('/profile/'+req.params.id)
}

indexCtrl.addExp = async (req, res) => {
    const { enterprise, positionExp, actualJob, monthStart, monthEnd, desJob} = req.body;

    var formatMonthStart = moment.tz(monthStart, 'America/Mexico_City');
    var formatMonthEnd = moment.tz(monthEnd, 'America/Mexico_City');

    var job
    if(actualJob == 'Si'){
        job = true
    } else {
        job = false
    }

    const newExp = experienceModel({
        enterprise,
        positionExp,
        actualJob: job,
        monthStart: formatMonthStart,
        monthEnd: formatMonthEnd,
        desJob,
        userID: req.user._id
    });

    await newExp.save();

    req.flash('success_msg', 'Experiencia agregada!');
    res.redirect('/profile/'+req.user._id);
}

indexCtrl.editExp = async (req, res) => {
    const {enterprise, positionExp, actualJob, monthStart, monthEnd, desJob} = req.body;

    var job;
    if(actualJob == 'Si'){
        job = true;
    } else {
        job = false;
    }

    const formatMonthStart = moment.tz(monthStart, 'America/Mexico_City');

    if(monthEnd){
        const formatMonthEnd = moment.tz(monthEnd, 'America/Mexico_City');

        await experienceModel.findByIdAndUpdate(req.params.id, {
            enterprise,
            positionExp,
            actualJob: job,
            monthStart: formatMonthStart,
            monthEnd: formatMonthEnd,
            desJob,
            userID: req.user._id
        });
    } else {
        await experienceModel.findByIdAndUpdate(req.params.id, {
            enterprise,
            positionExp,
            actualJob: job,
            monthStart: formatMonthStart,
            monthEnd: Date.now(),
            desJob,
            userID: req.user._id
        });
    }

    req.flash('success_msg', 'Experiencia '+positionExp+' actualizada!');
    res.redirect('/profile/'+req.user._id);
}

indexCtrl.deleteExp = async (req, res) => {
    await experienceModel.findByIdAndDelete(req.params.id);

    req.flash('success_msg', 'Experiencia eliminada!');
    res.redirect('/profile/'+req.user._id);
}

indexCtrl.addStudy = async (req, res) => {
    var { nameSchool, speciality, studyLevel, location, actualStudy, dateStart, dateEnd} = req.body;

    var study;
    if(actualStudy == 'Si'){
        study = true
    } else {
        study = false
    }

    var formatStart = moment.tz(dateStart, 'America/Mexico_City');
    if(dateEnd){
        var formatEnd = moment.tz(dateEnd, 'America/Mexico_City');

        const newStudy = schoolarModel({
            nameSchool,
            speciality,
            studyLevel,
            location,
            actualStudy: study,
            dateStart: formatStart,
            dateEnd: formatEnd,
            userStudyID: req.user._id
        });

        await newStudy.save();
    } else {
        const newStudyExist = schoolarModel({
            nameSchool,
            speciality,
            studyLevel,
            location,
            actualStudy: study,
            dateStart: formatStart,
            dateEnd: Date.now(),
            userStudyID: req.user._id
        });

        await newStudyExist.save();
    }

    req.flash('success_msg', 'Estudios registrados!');
    res.redirect('/profile/'+req.user._id);
}
module.exports = indexCtrl;