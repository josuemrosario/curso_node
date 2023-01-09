//Configura o Express

var express = require('express');
var app = express();

//Trata as rotas usando funções de callback

//trata get /
app.get('/',function(req,res){
    res.send("<html><body>Portal de Notícias</body></html>");
});

//trata get /tecnologia
app.get('/tecnologia',function(req,res){
    res.send("<html><body>Noticias de Tecnologia</body></html>");
});

// Executa o servidor
app.listen(3000,function(){
    console.log("servidor rodando com express");
});


