module.exports = {
    sendSuccess: (res, statusCode, data) => {
        const success = true;
        const code = statusCode;
        return res.status(statusCode).json({code: code, data: data});
    },
    sendError: (res, statusCode, message, data) => {
        return res.status(statusCode).json({
            code: statusCode,
            message: message
        })
    }
}