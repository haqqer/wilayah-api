var express = require('express');
var app = express();

const provincesRoute = require('./provinces/route');
const regenciesRoute = require('./regencies/route');
const universitiesRoute = require('./universities/route');

app.use('/provinces', provincesRoute);
app.use('/regencies', regenciesRoute);
app.use('/universities', universitiesRoute);
app.use('/', (req, res) => res.status(200).json({msg: 'ok'}));

module.exports = app;
