const db = require('./model');

const findAll = async (options) => {
    try {
        console.log(options)
        return await db.find(options.where).limit(options.limit);
    } catch (error) {
        throw error;
    }
}

const findOne = async (options) => {
    try {
        console.log('findOne');
        return await db.findOne(options.where);
    } catch (error) {
        
    }
}

module.exports = {
    findAll,
    findOne
}