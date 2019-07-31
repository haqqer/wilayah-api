const client = require('./redis_connect');

const getCache = async (key) => {
    try {
        const result = await client.get(key);
        return JSON.parse(result);
    } catch (error) {
        return error;
    }
}

const setCache = async (key, value) => {
    try {
        const result = await client.setex(key, 3600, JSON.stringify(value));
        return result;
    } catch (error) {
        return error;
    }
}

module.exports = {
    getCache,
    setCache
}
