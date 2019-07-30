const db = require('./model');

const findAll = async (options) => {
    try {
        console.log('cek 2')
        return await db.find().where(options.where).limit(options.limit);
    } catch (error) {
        throw error;
    }
}

const findOne = async (options) => {
    try {
        console.log('findOne');
        return await db.findOne(options);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    findAll,
    findOne
}