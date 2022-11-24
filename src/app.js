const methodoverride = require('method-override');
const cookieParser = require('cookie-parser');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const flash = require('connect-flash');
const moment = require('moment-timezone');
moment.locale('es-mx');

//Models
const jobsModel = require('./models/jobsModel');

//Initializations
const app = express();
require('./database');
require('./config/passport');

//Settings
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running at:\x1b[36m http://localhost:${port}\x1b[0m`));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodoverride('_method'));
app.use(cookieParser('SecretStringForCookies'));
app.use(session({
    secret: 'mysecretapp',
    //cookie: {maxAge: 60000}, Allow the session to be 1 min active
    resave: true,
    saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

//Global variables
app.use(async (req, res, next) => {
    res.locals.error = req.flash('error');
    res.locals.success_msg = req.flash('success_msg');
    res.locals.danger_msg = req.flash('danger_msg');
    res.locals.user = req.user || null;
    res.locals.moment = moment;

    res.locals.jobs = await jobsModel.aggregate([
        {
            '$sort': {'name': 1}
        }
    ])
    next();
});

//Routes
app.use(require('./routes/index'));
app.use(require('./routes/admin'));
app.use(require('./routes/org'));
app.use(require('./routes/user'));