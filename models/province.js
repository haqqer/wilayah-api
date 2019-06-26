const mongoose = require('mongoose');

const provinceSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String,
    }
},{timestamps: true})

module.exports = mongoose.model('Province', provinceSchema);