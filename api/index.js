var express = require('express');
var app = express();

const provincesRoute = require('./provinces/route');

app.use('/provinces', provincesRoute);
app.use('/', (req, res) => res.status(200).json({msg: 'ok'}));

module.exports = app;
