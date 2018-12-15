
const fs = require('fs')
// Function untuk men-load file JSON
function fileJson(param) {
    let file = fs.readFileSync(param, 'utf8')
    return file
}
//Function untuk mengolah struktur objects javascript
let Structure = require('./getStructure')
// variable default result
let result = ''
// status not found
let not_found = {'status': 'not found'}

exports.getAll = (req, res) => {
	let data = JSON.parse(fileJson('data/indonesia-region.min.json'))
	let id = req.query.id
	let name = req.query.name
	if(id != null) {
		// Apabila id tidak null
		result = Structure.Query('id', id, data).length > 0 ? Structure.Query('id', id, data) : not_found
	} 
	else if(name != null) {
		// Apabila name tidak null
		result = Structure.Query('name', name, data).length > 0 ? Structure.Query('name', name, data) : not_found
	}  
	else {
		// Apabila id dan name null
		result = data
	} 
	res.json(result)
}

// Controller untuk mengolah Provinsi

exports.getProvinsi = (req, res) => {
	let data = JSON.parse(fileJson('data/provinces.json'))
	let id = req.query.id
	let name = req.query.name
	if(id != null) {
		// Apabila id tidak null
		result = Structure.Query('id', id, data).length > 0 ? Structure.Query('id', id, data) : not_found
	} 
	else if(name != null) {
		// Apabila name tidak null
		result = Structure.Query('name', name, data).length > 0 ? Structure.Query('name', name, data) : not_found
	}  
	else {
		// Apabila id dan name null
		result = data
	} 
	res.json(result)
} 

// Controller untuk mengolah Kabupaten

exports.getKabupaten = (req, res) => {
    let data = JSON.parse(fileJson('data/regencies.json'))
    let id = req.query.id
    let province_id = req.query.province_id
    let name = req.query.name
    if(id != null) {
		// Apabila id tidak null
		result = Structure.Query('id', id, data).length > 0 ? Structure.Query('id', id, data) : not_found
    }
    else if(province_id != null) {
		// Apabila name tidak null
		result = result ? Structure.Query('province_id', province_id, data) : not_found
	} 
	else if(name != null) {
		// Apabila name tidak null
		result = Structure.Query('name', name, data).length > 0 ? Structure.Query('name', name, data) : not_found
	}  
	else {
		// Apabila id dan name null
		result = data
    } 
    res.json(result)
}

// Controller untuk mengolah kabupaten dan kota

exports.getKecamatan = (req, res) => {
    let data = JSON.parse(fileJson('data/districts.json'))
    let id = req.query.id
    let regency_id = req.query.regency_id
    let name = req.query.name
    if(id != null) {
		// Apabila id tidak null
		result = Structure.Query('id', id, data).length > 0 ? Structure.Query('id', id, data) : not_found
    }
    else if(regency_id != null) {
		// Apabila name tidak null
		result = result ? Structure.Query('regency_id', regency_id, data) : not_found
	} 
	else if(name != null) {
		// Apabila name tidak null
		result = Structure.Query('name', name, data).length > 0 ? Structure.Query('name', name, data) : not_found
	}  
	else {
		// Apabila id dan name null
		result = data
    } 
    res.json(result)
}

exports.getDesa = (req, res) => {
	let data = JSON.parse(fileJson('data/villages.json'))
    let id = req.query.id
    let district_id = req.query.district_id
    let name = req.query.name
    if(id != null) {
		// Apabila id tidak null
		result = Structure.Query('id', id, data).length > 0 ? Structure.Query('id', id, data) : not_found
    }
    else if(district_id != null) {
		// Apabila name tidak null
		result = result ? Structure.Query('district_id', district_id, data) : not_found
	} 
	else if(name != null) {
		// Apabila name tidak null
		result = Structure.Query('name', name, data).length > 0 ? Structure.Query('name', name, data) : not_found
	}  
	else {
		// Apabila id dan name null
		result = data
    } 
    res.json(result)
}