const service = require('./service');
const response = require('../../utils/response');
const { getCache, setCache } = require('../../utils/redis_cache');

const findAll = async (req, res, next) => {
    try {
        const a = 'lowercase';
        console.log(a.toUpperCase());
        const limit = parseInt(req.query.limit) || 10;
        let page;
        if(req.query.page == 1) {
            page = 0 * limit;
        } else {
            page = parseInt(req.query.page) * limit - 10 || 0;
        }
        if(req.query.name) {
            options = {
                where: {
                    nama: { 
                        $regex: new RegExp(req.query.name, "i")
                    }
                },
                skip: page,
                limit: limit
            }        
        } else {
            options = {
                skip: page,
                limit: limit
            }
        }
        const result = await service.findAll(options);
        if(await setCache('universities', result)) {
            const cachedResult = await getCache('universities');
            return response.sendSuccess(res, 200, cachedResult);
        }
        if(result.length > 0) {
            return response.sendSuccess(res, 200, result);
        }
        return response.sendSuccess(res, 200, 'Empty!');
    } catch (error) {
        return response.sendError(res, 400, error);
    }
}

module.exports = {
    findAll
}