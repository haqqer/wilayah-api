
const fs = require('fs')
// Function untuk men-load file JSON
function fileJson(param) {
    let file = fs.readFileSync(param, 'utf8')
    return file
}
//Function untuk mengolah struktur objects javascript
let Structure = require('./getStructure')

// Controller untuk mengolah provinsi

exports.getProvinsiFilter = (req, res) => {
	let data = JSON.parse(fileJson('data/provinces.json'))
	let id = req.query.id
	let name = req.query.name
	let result = Structure.Query('id', 11, data)
	if(id != null) {
		// Apabila id tidak null
		result = Structure.Query('id', id, data)
	} 
	else if(name != null) {
		// Apabila name tidak null
		result = Structure.Query('name', name, data)
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
		result = Structure.Query('id', id, data)
    }
    else if(province_id != null) {
		// Apabila name tidak null
		result = Structure.Query('province_id', province_id, data)
	} 
	else if(name != null) {
		// Apabila name tidak null
		result = Structure.Query('name', name, data)
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
		result = Structure.Query('id', id, data)
    }
    else if(regency_id != null) {
		// Apabila name tidak null
		result = Structure.Query('regency_id', regency_id, data)
	} 
	else if(name != null) {
		// Apabila name tidak null
		result = Structure.Query('name', name, data)
	}  
	else {
		// Apabila id dan name null
		result = data
    } 
    res.json(result)
}