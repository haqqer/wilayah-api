const mongoose = require('mongoose');

const provinceSchema = new mongoose.Schema({
    id: {
        type: String
    },
    name: {
        type: String,
    }
},{timestamps: true})

module.exports = mongoose.model('Province', provinceSchema);