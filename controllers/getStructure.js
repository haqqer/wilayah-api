exports.Query = (param, value, data) => {
    let result = data.filter((data_temp) => {
        return data_temp[param]== value
    })
    return result
}