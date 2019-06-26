const service = require('./service');
const response = require('../../utils/response');

const findAll = async (req, res) => {
    try {
        console.log('cek 1')
        let options
        if(req.query.province_id && req.query.name) {
            options = {
                province_id: req.query.province_id,
                name: { 
                    $regex: '.*' + req.query.name + '.*'
                }
            }        
        } else {
            options = {}
        }
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
    findAll
}