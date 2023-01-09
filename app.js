
//Carrega arquivo de configuracao do app (que cria o app)
var app = require('./config/server');


//Trata as rotas usando funções de callback
//------------------------------------------------------------

app.get('/',function(req,res){
    
    //res.send("<html><body>Noticias de Tecnologia</body></html>");
    
    res.render("home/index") //renderiza uma view
});

app.get('/formulario_inclusao_noticia',function(req,res){
   
    res.render("admin/form_add_noticia") //renderiza uma view
});

app.get('/noticias',function(req,res){
   
    res.render("noticias/noticias") //renderiza uma view
});



// Executa o servidor
//------------------------------------------------------------
app.listen(3000,function(){
    console.log("servidor rodando com express");
});


