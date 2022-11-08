const mongoose = require('mongoose')
const {Schema} = mongoose

const vacantSchema = new Schema({
    title: {type: String, required: true},
    position: {type: String, default: 'No especificado'},
    scheduleIn: {type: String},
    scheduleOut: {type: String},
    salary: {type: String, default: 'No especificado'},
    description: {type: String},
    area: {type: Array}
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('Vacant', vacantSchema);