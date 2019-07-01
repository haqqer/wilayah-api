const db = require('./model');

const findAll = async (options) => {
    try {
        console.log(options)
        return await db.find(options.where).limit(options.limit);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    findAll
}