const express = require('express');
const route = express.Router();

const controller = require('./controller');
route.get('/', controller.findAll);
route.get('/:id', controller.findOne);

module.exports = route;