const mongoose = require('mongoose');
const {Schema} = mongoose

const jobSchema = new Schema({
    name:{type: String}
},{
    versionKey: false
})

module.exports = mongoose.model('jobs', jobSchema);