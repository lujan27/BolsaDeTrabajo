const {Schema, model} = require('mongoose');

const imgProfileSchema = new Schema({
    filename: {type: String},
    path: {type: String},
    originalname: {type: String},
    mimetype: {type: String},
    size: {type: Number},
    userprofile: {type: String}
},{
    versionKey: false
})

module.exports = model('imgProfile', imgProfileSchema);