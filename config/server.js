//Configura o Express
var express = require('express');
var app = express();

//configura o view engine - ejs
app.set('view engine','ejs')

module.exports  = app;