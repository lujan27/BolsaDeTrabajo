const mongoose = require('mongoose');
const {Schema} = mongoose

const langSchema = new Schema({
    name: {type: String}
},{
    versionKey: false
})

module.exports = mongoose.model('languages', langSchema);