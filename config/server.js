//Configura o Express
var express = require('express');
var app = express();

//configurações padrões
//----------------------------------------------------------

//configura o view engine - ejs
app.set('view engine','ejs')

//configura o diretorio padrão das views
app.set('views','./app/views')


module.exports  = app;