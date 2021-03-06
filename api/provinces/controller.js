const service = require('./service');
const response = require('../../utils/response');

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
        let options = { where: {id: req.params.id}};
        const result = await service.findAll(options);
        if(result.length > 0) {
            return response.sendSuccess(res, 200, result);
        }
        return response.sendSuccess(res, 200, 'Empty!');        
    } catch (error) {
        return response.sendError(res, 400, error);
    }
}
module.exports = {
    findAll,
    findOne
}