const service = require('./service');
const response = require('../../utils/response');
const { getCache, setCache } = require('../../utils/redis_cache');

const findAll = async (req, res,next) => {
    try {
        console.log('cek 1')
        let options
        if(req.query.name) {
            options = {
                where: {
                    name: {
                        $regex: '.*' + req.query.name.toUpperCase() + '.*'
                    },
                },
                limit: req.query.limit || 0
            }        
        } else {
            options = {
                where: {},
                limit: 0
            }
        }
        console.log(options.where);
        const result = await service.findAll(options);
        if(await setCache('regencies', result)) {
            const cachedResult = await getCache('regencies');
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

const findOne = async (req, res, next) => {
    try {
        const result = await service.findOne({ id : req.params.id });
        console.log(result)
        if(result) {
            return response.sendSuccess(res, 200, result);
        }
        return response.sendSuccess(res, 200, 'Not Found');        
    } catch (error) {
        return response.sendError(res, 400, error);
    }
}

module.exports = {
    findAll,
    findOne
}