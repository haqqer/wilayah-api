const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    id: {
        type: String
    },
    name: {
        type: String,
    }
},{timestamps: true})

module.exports = mongoose.model('Regencies', Schema);