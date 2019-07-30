const service = require('./service');
const response = require('../../utils/response');

const findAll = async (req, res, next) => {
    try {
        let options = {};
        // console.log(req.query);
        req.query.limit = parseInt(req.query.limit)
        if(req.query.province_id && req.query.name) {
            options = {
                where: {
                    name: {
                        $regex: '.*' + req.query.name.toUpperCase() + '.*'
                    },
                    province_id: req.query.province_id
                },
                limit: req.query.limit
            }
            options.limit = 2
        }else if(req.query.name) {
            options = {
                where: {
                    name: {
                        $regex: '.*' + req.query.name.toUpperCase() + '.*'
                    }
                },
                limit: req.query.limit
            }
        } else if(req.query.province_id) {
            options = {
                where : {
                    province_id: req.query.province_id
                }
            }
        } else {
            options = {
                where: {},
                limit: 0
            }
        }
        // console.log('hora')
        console.log('options : ',options);
        const result = await service.findAll(options);
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
        console.log(req.params.id)
        const result = await service.findOne({ id: req.params.id });
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