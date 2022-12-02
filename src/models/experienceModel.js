const mongoose = require('mongoose');
const {Schema} = mongoose;

const expSchema = new Schema({
    enterprise: {type: String},
    positionExp: {type: String},
    actualJob: {type: Boolean},
    monthStart: {type: Date},
    monthEnd: {type: Date},
    desJob: {type: String},
    userID: {type: String}
},{
    versionKey: false
})

module.exports = mongoose.model('experiences', expSchema);