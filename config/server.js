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


//Aula 39 configura body parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true})); //trata parametros enviados pela URL


//Aula 44 - configura Express validator
var expressValidator = require('express-validator');
app.use(expressValidator());


//Aula 31 - Configura o diretório de rotas no consign
//Aula 32 - inserido conexão com o banco
consign()
    .include('app/routes') //rotas
    .then('config/dbConnection.js') // acesso a banco
    .then('app/models') // modelos
    .then('app/controllers') //aula 48
    .into(app);


module.exports  = app;