module.exports = function(app){

    app.get('/formulario_inclusao_noticia',function(req,res){
        res.render("admin/form_add_noticia") //renderiza uma view
    });

    //aula 39
    app.post('/noticias/salvar',function(req,res){
        var noticias = req.body;  //funciona apenas com body parser instalado
        res.send(noticias);
        //res.render("admin/form_add_noticia") //renderiza uma view
    });
};    