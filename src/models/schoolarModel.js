const mongoose = require('mongoose');
const {Schema} = mongoose;

const newSchool = new Schema({
    nameSchool: {type: String},
    speciality: {type: String},
    studyLevel: {type: String},
    location: {type: String},
    actualStudy: {type: Boolean},
    dateStart: {type: Date},
    dateEnd: {type: Date},
    userStudyID: {type: String}
}, {
    versionKey: false
})

module.exports = mongoose.model('studies', newSchool);