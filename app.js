
//Carrega arquivo de configuracao do app (que cria o app)
var app = require('./config/server');


//Trata as rotas usando funções de callback
//------------------------------------------------------------

var rotaNoticias = require('./app/routes/noticias');
rotaNoticias(app);
//obs: Tambem e Possivel usar var rotaNoticias = require('./app/routes/noticias')(); e eliminar uma linha

var rotaHome = require('./app/routes/home');
rotaHome(app);

var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia');
rotaFormInclusaoNoticia(app);

// Executa o servidor
//------------------------------------------------------------
app.listen(3000,function(){
    console.log("servidor rodando com express");
});


