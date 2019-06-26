const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String,
    }
},{timestamps: true})

module.exports = mongoose.model('Regencies', Schema);