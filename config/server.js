//Configura o Express
var express = require('express');
var app = express();

//Aula 31 - configura consign
var consign = require('consign');

//configurações padrões
//----------------------------------------------------------

//configura o view engine - ejs
app.set('view engine','ejs')

//configura o diretorio padrão das views
app.set('views','./app/views')

//Aula 31 - Configura o diretório de rotas no consign
consign().include('app/routes').into(app);


module.exports  = app;