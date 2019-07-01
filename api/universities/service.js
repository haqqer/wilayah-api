const db = require('./model');

const findAll = async (options) => {
    try {
        console.log('cek 2')
        return await db.find(options.where).skip(options.skip).limit(options.limit);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    findAll
}